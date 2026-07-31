/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const frontMatter = require("front-matter");
const { XMLParser } = require("fast-xml-parser");
const { decode } = require("he");

const projectRoot = path.join(__dirname, "..");
const blogDirectory = path.join(projectRoot, "blog");
const metadataDirectory = path.join(
  projectRoot,
  ".docusaurus",
  "docusaurus-plugin-content-blog",
  "default",
);
const siteUrl = "https://alvarolorente.dev";
const errors = [];
const buildDirectory = path.join(projectRoot, "build");

if (!fs.existsSync(metadataDirectory)) {
  throw new Error(
    "Generated Docusaurus metadata is missing. Run npm run build first.",
  );
}
if (!fs.existsSync(buildDirectory)) {
  throw new Error("Production output is missing. Run npm run build first.");
}

function builtHtmlPath(permalink) {
  return path.join(buildDirectory, permalink.replace(/^\//, ""), "index.html");
}

function canonicalFromHtml(html) {
  const canonical = html.match(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i,
  )?.[1];
  return canonical ? decode(canonical) : undefined;
}

function normalizedUrl(url) {
  const parsedUrl = new URL(url);
  return `${parsedUrl.origin}${decodeURIComponent(parsedUrl.pathname)}`;
}

const blogFiles = fs
  .readdirSync(blogDirectory)
  .filter((file) => file.endsWith(".md"));
for (const fileName of blogFiles) {
  const markdown = fs.readFileSync(path.join(blogDirectory, fileName), "utf8");

  if (
    /X-Amz-(?:Algorithm|Credential|Date|Expires|Signature)=/i.test(markdown)
  ) {
    errors.push(`${fileName}: contains an expiring signed image URL`);
  }
  if (/!\[\]\(/.test(markdown)) {
    errors.push(`${fileName}: contains a blank Markdown image label`);
  }

  for (const match of markdown.matchAll(
    /(?:\]\(|cover_image:\s*)(\/img\/blog\/recovered\/[^)\s]+)/g,
  )) {
    const staticPath = path.join(
      projectRoot,
      "static",
      match[1].replace(/^\//, ""),
    );
    if (!fs.existsSync(staticPath)) {
      errors.push(`${fileName}: missing recovered asset ${match[1]}`);
    }
  }
}

const metadataEntries = fs
  .readdirSync(metadataDirectory)
  .filter((file) => file.startsWith("site-blog-") && file.endsWith(".json"))
  .map((file) =>
    JSON.parse(fs.readFileSync(path.join(metadataDirectory, file), "utf8")),
  )
  .filter((metadata) => metadata.source?.startsWith("@site/blog/"));

for (const metadata of metadataEntries) {
  const relativePath = metadata.source.replace("@site/", "");
  const attributes = frontMatter(
    fs.readFileSync(path.join(projectRoot, relativePath), "utf8"),
  ).attributes;
  const expectedCanonical = `${siteUrl}${metadata.permalink}`;

  if (attributes.canonical_url !== expectedCanonical) {
    errors.push(
      `${relativePath}: canonical_url must be ${expectedCanonical}, found ${attributes.canonical_url}`,
    );
  }

  const htmlPath = builtHtmlPath(metadata.permalink);
  if (!fs.existsSync(htmlPath)) {
    errors.push(`${relativePath}: missing built page ${metadata.permalink}`);
    continue;
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  if (normalizedUrl(canonicalFromHtml(html)) !== expectedCanonical) {
    errors.push(
      `${relativePath}: built canonical must be ${expectedCanonical}`,
    );
  }
  if (!html.includes('"@type":"BlogPosting"')) {
    errors.push(
      `${relativePath}: built page is missing BlogPosting structured data`,
    );
  }
}

const malformedRoutes = metadataEntries
  .map((metadata) => metadata.permalink)
  .filter((permalink) => /^\/blog\/2024\/\d{2}\/\d{2}\/T\d/.test(permalink))
  .sort();
const migrationDocument = fs.readFileSync(
  path.join(projectRoot, "docs", "seo-route-migration.md"),
  "utf8",
);
const redirectRules = [
  ...migrationDocument.matchAll(/^(.+)\s+(\/\S+)\s+301$/gm),
]
  .map((match) => ({
    source: decodeURIComponent(match[1]),
    destination: match[2],
  }))
  .sort((left, right) => left.source.localeCompare(right.source));

const documentedSources = redirectRules.map((rule) => rule.source);
for (const route of malformedRoutes) {
  if (!documentedSources.includes(route)) {
    errors.push(`Missing documented redirect for ${route}`);
  }
}
for (const source of documentedSources) {
  if (!malformedRoutes.includes(source)) {
    errors.push(
      `Documented redirect source is not a generated malformed route: ${source}`,
    );
  }
}
const destinations = redirectRules.map((rule) => rule.destination);
if (new Set(destinations).size !== destinations.length) {
  errors.push("Documented redirect destinations must be unique");
}

const robots = fs.readFileSync(
  path.join(projectRoot, "static", "robots.txt"),
  "utf8",
);
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  errors.push("robots.txt must advertise the apex-domain sitemap");
}

const sitemapPath = path.join(buildDirectory, "sitemap.xml");
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const parsedSitemap = new XMLParser().parse(sitemap);
const sitemapEntries = parsedSitemap.urlset?.url ?? [];
const sitemapUrls = new Set(
  (Array.isArray(sitemapEntries) ? sitemapEntries : [sitemapEntries]).map(
    (entry) => normalizedUrl(entry.loc),
  ),
);
if ([...sitemapUrls].some((url) => !url.startsWith(`${siteUrl}/`))) {
  errors.push("sitemap.xml contains a URL outside the apex domain");
}
for (const metadata of metadataEntries) {
  const expectedUrl = `${siteUrl}${metadata.permalink}`;
  if (!sitemapUrls.has(expectedUrl)) {
    errors.push(`sitemap.xml is missing ${expectedUrl}`);
  }
}

const homepage = fs.readFileSync(
  path.join(buildDirectory, "index.html"),
  "utf8",
);
if (canonicalFromHtml(homepage) !== `${siteUrl}/`) {
  errors.push("Homepage built canonical must use the apex domain");
}
if (!homepage.includes('"@type":"Person"')) {
  errors.push("Homepage is missing Person structured data");
}
for (const metadataName of ["twitter:creator", "twitter:site"]) {
  if (!homepage.includes(`name="${metadataName}" content="@lorentedev"`)) {
    errors.push(`Homepage is missing ${metadataName} attribution`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `SEO checks passed for ${metadataEntries.length} posts and ${redirectRules.length} gated redirects.`,
);
