const fs = require("node:fs/promises");
const path = require("node:path");
const { load } = require("cheerio");
const frontMatter = require("front-matter");

const blogDirectory = path.join(__dirname, "..", "blog");
const imageDirectory = path.join(__dirname, "..", "static", "img", "blog", "recovered");
const signedUrlPattern = /https:\/\/prod-files-secure\.s3\.us-west-2\.amazonaws\.com\/[^\s)]+/g;
const unavailableArticle = "product-developers";

function extensionFor(url) {
  const extension = path.extname(new URL(url).pathname).toLowerCase();
  return [".gif", ".jpeg", ".jpg", ".png", ".webp"].includes(extension)
    ? extension
    : ".jpg";
}

function originalOgImage(url) {
  const encodedOriginal = url.match(/https%3A.*$/)?.[0];
  if (!encodedOriginal) {
    throw new Error(`Could not extract the original image from ${url}`);
  }
  return decodeURIComponent(encodedOriginal);
}

async function download(url, destination) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not download ${url}: ${response.status}`);
  }
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, Buffer.from(await response.arrayBuffer()));
}

async function recoverFile(fileName) {
  const filePath = path.join(blogDirectory, fileName);
  let markdown = await fs.readFile(filePath, "utf8");
  const attributes = frontMatter(markdown).attributes;
  const sourceUrl = String(attributes.source_url || attributes.canonical_url);
  const sourceSlug = new URL(sourceUrl).pathname.split("/").filter(Boolean).at(-1);

  if (sourceSlug === unavailableArticle) {
    markdown = markdown.replace(
      attributes.cover_image,
      "/img/blog/t-shapped-cross-functional-tshapped-crossfunctional-drawio.png",
    );
    markdown = markdown.replace(
      /!\[https:\/\/www\.commitstrip\.com[^\]]*\]\(https:\/\/prod-files-secure[^\s)]+\)/,
      "[The Mistakes of Youth comic by CommitStrip](https://www.commitstrip.com/en/2016/09/09/the-mistakes-of-youth/?setLocale=1)",
    );
    await fs.writeFile(filePath, markdown);
    return;
  }

  const response = await fetch(sourceUrl);
  if (!response.ok) {
    throw new Error(`Could not fetch ${sourceUrl}: ${response.status}`);
  }
  const $ = load(await response.text());
  const coverSource = originalOgImage($("meta[property='og:image']").attr("content"));
  const coverName = `cover${extensionFor(coverSource)}`;
  const coverDestination = path.join(imageDirectory, sourceSlug, coverName);
  await download(coverSource, coverDestination);
  markdown = markdown.replace(
    attributes.cover_image,
    `/img/blog/recovered/${sourceSlug}/${coverName}`,
  );

  const signedBodyUrls = [...markdown.matchAll(signedUrlPattern)]
    .map((match) => match[0])
    .filter((url) => url !== attributes.cover_image);
  const sourceBodyImages = $("article img[data-attrs]")
    .map((_, image) => JSON.parse($(image).attr("data-attrs")).src)
    .get();
  const selectedBodyImages = sourceBodyImages.slice(0, signedBodyUrls.length);

  if (signedBodyUrls.length !== selectedBodyImages.length) {
    throw new Error(
      `${fileName}: found ${signedBodyUrls.length} signed body images and ${selectedBodyImages.length} source images`,
    );
  }

  for (const [index, source] of selectedBodyImages.entries()) {
    const imageName = `body-${index + 1}${extensionFor(source)}`;
    const destination = path.join(imageDirectory, sourceSlug, imageName);
    await download(source, destination);
    markdown = markdown.replace(
      signedBodyUrls[index],
      `/img/blog/recovered/${sourceSlug}/${imageName}`,
    );
  }

  await fs.writeFile(filePath, markdown);
}

async function main() {
  const fileNames = await fs.readdir(blogDirectory);
  const affectedFiles = [];
  for (const fileName of fileNames.filter((name) => name.endsWith(".md"))) {
    const markdown = await fs.readFile(path.join(blogDirectory, fileName), "utf8");
    if (markdown.includes("X-Amz-")) affectedFiles.push(fileName);
  }
  for (const fileName of affectedFiles) await recoverFile(fileName);
  console.log(`Recovered images in ${affectedFiles.length} articles.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});