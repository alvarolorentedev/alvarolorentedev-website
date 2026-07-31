#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const frontMatter = require("front-matter");
const { XMLParser } = require("fast-xml-parser");
const { load } = require("cheerio");
const TurndownService = require("turndown");
const { gfm } = require("turndown-plugin-gfm");
const he = require("he");
const sanitize = require("sanitize-filename");

const cwd = process.cwd();
const args = process.argv.slice(2);
const siteUrl = "https://alvarolorente.dev";

function getArgValue(flag, fallback) {
  const index = args.indexOf(flag);
  if (index === -1) {
    return fallback;
  }

  return args[index + 1] || fallback;
}

const inputDir = path.resolve(
  cwd,
  getArgValue(
    "--input-dir",
    process.env.SUBSTACK_INPUT_DIR || ".tmp/substack-sync",
  ),
);
const outputDir = path.resolve(
  cwd,
  getArgValue("--output-dir", process.env.SUBSTACK_OUTPUT_DIR || "blog"),
);
const feedUrl = getArgValue(
  "--feed-url",
  process.env.SUBSTACK_FEED_URL || "https://yournewsletter.substack.com/feed",
);

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  cdataPropName: "__cdata",
  trimValues: false,
});

const turndown = new TurndownService({
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  headingStyle: "atx",
});

turndown.use(gfm);
turndown.keep(["img"]);

turndown.addRule("removeScriptsAndIframes", {
  filter: ["script", "iframe", "style", "noscript"],
  replacement: () => "",
});

turndown.addRule("unwrapFigureLikeContainers", {
  filter(node) {
    return (
      node.nodeType === 1 &&
      ["figure", "figcaption"].includes(node.nodeName.toLowerCase())
    );
  },
  replacement(content) {
    return `\n\n${content.trim()}\n\n`;
  },
});

turndown.addRule("handleParagraphs", {
  filter: "p",
  replacement(content) {
    if (!content.trim()) {
      return "\n\n";
    }

    return `\n\n${content.trim()}\n\n`;
  },
});

turndown.addRule("unwrapLinkedImages", {
  filter(node) {
    if (node.nodeType !== 1 || node.nodeName.toLowerCase() !== "a") {
      return false;
    }

    const children = Array.from(node.childNodes || []).filter((child) => {
      if (child.nodeType === 3) {
        return child.nodeValue.trim();
      }

      return true;
    });

    return (
      children.length === 1 &&
      children[0].nodeType === 1 &&
      children[0].nodeName.toLowerCase() === "img"
    );
  },
  replacement(content) {
    return `\n\n${content.trim()}\n\n`;
  },
});

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function getStubFiles(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.join(dirPath, file))
    .sort();
}

function asArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (value === undefined || value === null) {
    return [];
  }

  return [value];
}

function getText(value) {
  if (typeof value === "string") {
    return value;
  }

  if (value && typeof value === "object") {
    if (typeof value.__cdata === "string") {
      return value.__cdata;
    }

    if (typeof value["#text"] === "string") {
      return value["#text"];
    }
  }

  return "";
}

function firstNonEmpty(...values) {
  return (
    values.find((value) => typeof value === "string" && value.trim()) || ""
  );
}

async function fetchFeedEntries(url) {
  if (!url || url === "https://yournewsletter.substack.com/feed") {
    console.warn(
      "SUBSTACK_FEED_URL is not configured. Skipping post-processing.",
    );
    return new Map();
  }

  const response = await fetch(url, {
    headers: {
      "user-agent": "alvarolorente.dev-substack-sync/1.0",
      accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch feed: ${response.status} ${response.statusText}`,
    );
  }

  const xml = await response.text();
  const feed = parser.parse(xml);
  const items = asArray(feed?.rss?.channel?.item);
  const byLink = new Map();

  for (const item of items) {
    const link = getText(item.link).trim();

    if (!link) {
      continue;
    }

    byLink.set(link, item);
  }

  return byLink;
}

function normalizeSlug(title) {
  const normalized = title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  return sanitize(normalized) || "post";
}

function formatDate(dateValue, fallbackFile) {
  if (typeof dateValue === "string" && dateValue.trim()) {
    const date = new Date(dateValue);

    if (!Number.isNaN(date.valueOf())) {
      return date.toISOString().slice(0, 10);
    }
  }

  const match = path.basename(fallbackFile).match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : new Date().toISOString().slice(0, 10);
}

function isExpiringImageUrl(url) {
  return /[?&]X-Amz-(?:Algorithm|Credential|Date|Expires|Signature)=/i.test(
    url,
  );
}

function cleanupHtml(html) {
  const $ = load(html || "");

  $("script, iframe, style, noscript").remove();
  $(
    ".captioned-button-wrap, .subscription-widget-wrap, .available-content",
  ).remove();
  $("button, svg").remove();
  $("picture source").remove();

  $("img").each((_, element) => {
    const img = $(element);
    const dataAttrs = img.attr("data-attrs");

    if (dataAttrs) {
      try {
        const parsed = JSON.parse(he.decode(dataAttrs));

        if (parsed.src) {
          img.attr("src", parsed.src);
        }
      } catch {
        // Ignore malformed data attrs and fall back to existing src.
      }
    }

    const src = img.attr("src");
    if (!src) {
      img.remove();
      return;
    }

    const decodedSrc = he.decode(src);
    if (isExpiringImageUrl(decodedSrc)) {
      throw new Error(
        `Refusing to import an expiring signed image URL: ${decodedSrc}`,
      );
    }

    img.attr("src", decodedSrc);
    img.attr("loading", "lazy");
    img.attr("decoding", "async");
    img.removeAttr("srcset");
    img.removeAttr("sizes");
    img.removeAttr("fetchpriority");
    img.removeAttr("class");
    img.removeAttr("style");
    img.removeAttr("data-attrs");
  });

  $("a").each((_, element) => {
    const anchor = $(element);
    const href = anchor.attr("href");

    if (!href) {
      return;
    }

    anchor.attr("href", he.decode(href));
    anchor.removeAttr("target");
    anchor.removeAttr("rel");
    anchor.removeAttr("class");
    anchor.removeAttr("data-component-name");
  });

  $("a").each((_, element) => {
    const anchor = $(element);
    const img = anchor.find("img").first();
    const text = anchor.text().replace(/\s+/g, " ").trim();

    if (img.length === 1 && !text) {
      anchor.replaceWith(img);
    }
  });

  $("p").each((_, element) => {
    const paragraph = $(element);
    const text = paragraph.text().replace(/\s+/g, " ").trim();

    if (
      !text ||
      text.startsWith("Thanks for reading") ||
      text.startsWith("Subscribe for free") ||
      text.startsWith("This post is public so feel free to share it.")
    ) {
      paragraph.remove();
    }
  });

  $("br").replaceWith("\n");

  return $.root().html() || "";
}

function extractDescription(html, fallbackDescription) {
  const $ = load(html || "");
  const firstParagraph = $("p")
    .toArray()
    .map((element) => $(element).text().trim())
    .find(Boolean);

  const base = firstParagraph || fallbackDescription || "";
  const clean = he.decode(base).replace(/\s+/g, " ").trim();

  if (clean.length <= 160) {
    return clean;
  }

  return `${clean
    .slice(0, 157)
    .replace(/\s+\S*$/, "")
    .trim()}...`;
}

function extractCoverImage(html) {
  const $ = load(html || "");
  const firstImage = $("img").first();
  return (firstImage.attr("src") || "").trim();
}

function normalizeMarkdown(markdown) {
  return markdown
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n+\[View image]\([^)]+\)\n*/gi, "\n")
    .replace(/\n+\[Share]\([^)]+\)\n*/gi, "\n")
    .trim();
}

function injectTruncate(markdown) {
  if (!markdown) {
    return "<!-- truncate -->";
  }

  if (markdown.includes("<!-- truncate -->")) {
    return markdown;
  }

  const paragraphs = markdown.split(/\n\s*\n/);
  let inserted = false;
  const result = [];

  for (const paragraph of paragraphs) {
    const trimmed = paragraph.trim();
    if (!trimmed) {
      continue;
    }

    result.push(trimmed);

    if (
      !inserted &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith("![") &&
      !trimmed.startsWith(">") &&
      !trimmed.startsWith("- ") &&
      !trimmed.startsWith("* ") &&
      !trimmed.startsWith("1. ")
    ) {
      result.push("<!-- truncate -->");
      inserted = true;
    }
  }

  if (!inserted) {
    result.unshift("<!-- truncate -->");
  }

  return result.join("\n\n").trim();
}

function extractTags(entry) {
  const rawCategories = asArray(entry?.category)
    .map((category) => getText(category).replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const normalized = rawCategories
    .map((tag) => tag.toLowerCase())
    .map((tag) => tag.replace(/["']/g, ""))
    .map((tag) => tag.replace(/\s+/g, "-"))
    .map((tag) => tag.replace(/[^a-z0-9-]/g, ""))
    .map((tag) => tag.replace(/-{2,}/g, "-"))
    .map((tag) => tag.replace(/^-+|-+$/g, ""))
    .filter(Boolean);

  const uniqueTags = Array.from(new Set(normalized));
  return uniqueTags.length > 0 ? uniqueTags : ["substack"];
}

function formatFrontMatter({
  title,
  description,
  canonicalUrl,
  sourceUrl,
  coverImage,
  tags,
}) {
  const escapeValue = (value) =>
    String(value || "")
      .replace(/\\/g, "\\\\")
      .replace(/'/g, "''");

  return [
    "---",
    `title: '${escapeValue(title)}'`,
    `description: '${escapeValue(description)}'`,
    "authors: alvarolorentedev",
    "tags:",
    ...tags.map((tag) => `- ${tag}`),
    "draft: false",
    "series: ''",
    `canonical_url: ${canonicalUrl}`,
    `source_url: ${sourceUrl || ""}`,
    `cover_image: ${coverImage || ""}`,
    "---",
  ].join("\n");
}

function getFeedHtml(entry, fallbackBody) {
  return firstNonEmpty(
    getText(entry?.["content:encoded"]),
    getText(entry?.content),
    getText(entry?.description),
    fallbackBody,
  );
}

async function main() {
  ensureDir(outputDir);
  const stubFiles = getStubFiles(inputDir);

  if (stubFiles.length === 0) {
    console.log(`No generated files found in ${inputDir}.`);
    return;
  }

  const feedEntries = await fetchFeedEntries(feedUrl);

  for (const filePath of stubFiles) {
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = frontMatter(raw);
    const link = String(
      parsed.attributes.source_url || parsed.attributes.canonical_url || "",
    ).trim();
    const title = String(parsed.attributes.title || "").trim();
    const feedEntry = feedEntries.get(link);
    const pubDate = formatDate(
      getText(feedEntry?.pubDate) ||
        getText(feedEntry?.published) ||
        getText(feedEntry?.updated),
      filePath,
    );
    const slug = normalizeSlug(title);
    const targetPath = path.join(outputDir, `${pubDate}-${slug}.md`);
    const canonicalUrl = `${siteUrl}/blog/${pubDate.replaceAll("-", "/")}/${slug}`;

    if (fs.existsSync(targetPath)) {
      console.log(`Skipping existing post ${path.basename(targetPath)}.`);
      continue;
    }

    const fallbackMarkdown = normalizeMarkdown(String(parsed.body || ""));
    const sourceHtml = cleanupHtml(getFeedHtml(feedEntry, ""));
    const description = extractDescription(
      sourceHtml,
      String(parsed.attributes.description || ""),
    );
    const coverImage =
      extractCoverImage(sourceHtml) ||
      String(parsed.attributes.cover_image || "").trim();
    const tags = extractTags(feedEntry);
    const markdownBody = injectTruncate(
      sourceHtml
        ? normalizeMarkdown(turndown.turndown(sourceHtml))
        : fallbackMarkdown,
    );
    const frontMatterBlock = formatFrontMatter({
      title,
      description,
      canonicalUrl,
      sourceUrl: link,
      coverImage,
      tags,
    });
    const output = `${frontMatterBlock}\n\n${markdownBody}\n`;

    fs.writeFileSync(targetPath, output);
    console.log(`Created ${path.relative(cwd, targetPath)}.`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
