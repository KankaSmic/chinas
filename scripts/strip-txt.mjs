import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());
const IGNORE_DIRS = new Set([".git", "node_modules", "dist", "build", ".next"]);

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
    if (!ent.name.endsWith(".txt")) continue;

    const targetPath = fullPath.slice(0, -".txt".length);
    try {
      await fs.access(targetPath);
      // If target already exists, do not overwrite.
      continue;
    } catch {
      // target doesn't exist -> ok to rename
    }

    await fs.rename(fullPath, targetPath);
  }
}

await walk(repoRoot);
console.log("Done. Stripped trailing .txt from files (where target did not already exist).");
