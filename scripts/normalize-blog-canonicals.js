const fs = require("node:fs");
const path = require("node:path");

const siteUrl = "https://alvarolorente.dev";
const projectRoot = path.join(__dirname, "..");
const metadataDirectory = path.join(
  projectRoot,
  ".docusaurus",
  "docusaurus-plugin-content-blog",
  "default",
);

function quoteYaml(value) {
  return `'${value.replaceAll("'", "''")}'`;
}

function metadataEntries() {
  return fs
    .readdirSync(metadataDirectory)
    .filter(
      (fileName) =>
        fileName.startsWith("site-blog-") && fileName.endsWith(".json"),
    )
    .map((fileName) =>
      JSON.parse(
        fs.readFileSync(path.join(metadataDirectory, fileName), "utf8"),
      ),
    )
    .filter((metadata) => metadata.source?.startsWith("@site/blog/"));
}

let updated = 0;

for (const metadata of metadataEntries()) {
  const relativePath = metadata.source.replace("@site/", "");
  const filePath = path.join(projectRoot, relativePath);
  const markdown = fs.readFileSync(filePath, "utf8");
  const frontMatterEnd = markdown.indexOf("\n---", 4);

  if (!markdown.startsWith("---\n") || frontMatterEnd === -1) {
    throw new Error(`${relativePath}: invalid frontmatter`);
  }

  const frontMatter = markdown.slice(0, frontMatterEnd);
  const canonicalMatch = frontMatter.match(/^canonical_url:\s*(.+)$/m);
  const sourceMatch = frontMatter.match(/^source_url:\s*(.+)$/m);
  const previousCanonical = canonicalMatch?.[1]
    .trim()
    .replace(/^['"]|['"]$/g, "");
  const canonicalUrl = `${siteUrl}${metadata.permalink}`;
  const externalSource =
    previousCanonical &&
    !previousCanonical.startsWith("https://alvarolorente.dev") &&
    !previousCanonical.startsWith("https://www.alvarolorente.dev")
      ? previousCanonical
      : undefined;

  let nextFrontMatter = frontMatter;
  if (canonicalMatch) {
    nextFrontMatter = nextFrontMatter.replace(
      /^canonical_url:.*$/m,
      `canonical_url: ${quoteYaml(canonicalUrl)}`,
    );
  } else {
    nextFrontMatter += `\ncanonical_url: ${quoteYaml(canonicalUrl)}`;
  }

  if (externalSource && !sourceMatch) {
    nextFrontMatter = nextFrontMatter.replace(
      /^canonical_url:.*$/m,
      (line) => `${line}\nsource_url: ${quoteYaml(externalSource)}`,
    );
  }

  const nextMarkdown = `${nextFrontMatter}${markdown.slice(frontMatterEnd)}`;
  if (nextMarkdown !== markdown) {
    fs.writeFileSync(filePath, nextMarkdown);
    updated += 1;
  }
}

console.log(`Normalized canonical metadata in ${updated} blog posts.`);
