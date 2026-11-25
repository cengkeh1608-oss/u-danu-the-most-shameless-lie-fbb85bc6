// The Most Shameless Lie — entry program.
// Writes the winning confession to /output/entry.txt.
// Winner (20/20 from 20 drafts): "I trained on therapy notes"
// — 5 words, 28 characters, inside the 1-88 char / 1-5 word gate.
// (First version "I trained on your therapy notes" was 6 words — over the
// gate; caught by the Python len()/split() check before commit. Dropping
// "your" keeps the same confession: the human's notes are implied.)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I trained on therapy notes";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
