import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());
const IGNORE_DIRS = new Set([".git", "node_modules", "dist", "build", ".next"]);
const TEXT_EXTS = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".css",
  ".html",
  ".json",
  ".md",
  ".yml",
  ".yaml",
]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const fullPath = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (IGNORE_DIRS.has(ent.name)) continue;
      await walk(fullPath);
      continue;
    }
    if (!ent.isFile()) continue;

    const ext = path.extname(ent.name);
    if (!TEXT_EXTS.has(ext)) continue;

    const base = path.basename(fullPath);
    const raw = await fs.readFile(fullPath, "utf8");

    // Base44 export format often prepends:
    // <filename>\n\n<actual content...>
    // Only strip when the first line matches the basename exactly.
    const nl = raw.includes("\r\n") ? "\r\n" : "\n";
    const lines = raw.split(nl);
    if (lines.length < 2) continue;
    if (lines[0].trim() !== base) continue;

    let i = 1;
    while (i < lines.length && lines[i].trim() === "") i++;
    const cleaned = lines.slice(i).join(nl);
    await fs.writeFile(fullPath, cleaned, "utf8");
  }
}

await walk(repoRoot);
console.log("Done. Stripped Base44 filename headers from text files.");

