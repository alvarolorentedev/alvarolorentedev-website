const fs = require("node:fs");
const path = require("node:path");

const auditPath = process.argv[2];
if (!auditPath) throw new Error("Usage: node scripts/apply-image-alt-audit.js <audit-file>");

const audit = fs.readFileSync(auditPath, "utf8");
const mappingBlock = audit.match(
  /FILE_PATH\tLINE\tURL\tPROPOSED_ALT_TEXT\n([\s\S]*?)\n```/,
)?.[1];
if (!mappingBlock) throw new Error("Could not find the TSV mapping in the audit file");

let applied = 0;
let decorative = 0;
for (const row of mappingBlock.split("\n")) {
  const [fileName, , url, alt] = row.split("\t");
  if (!fileName || !url || !alt) throw new Error(`Invalid audit row: ${row}`);
  if (alt === "__DECORATIVE__") {
    decorative += 1;
    continue;
  }

  const filePath = path.join(__dirname, "..", fileName);
  const markdown = fs.readFileSync(filePath, "utf8");
  const current = `![](${url})`;
  const occurrences = markdown.split(current).length - 1;
  if (occurrences !== 1) {
    throw new Error(`${fileName}: expected one occurrence of ${url}, found ${occurrences}`);
  }
  fs.writeFileSync(filePath, markdown.replace(current, `![${alt}](${url})`));
  applied += 1;
}

console.log(`Applied ${applied} alt labels; preserved ${decorative} decorative empty labels.`);