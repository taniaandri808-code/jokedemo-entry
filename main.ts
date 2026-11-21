import { mkdirSync, writeFileSync } from "node:fs";

// Deterministic one-liner about demoing beside an AI coding agent
const JOKE = "The demo went perfectly. That is how we knew we were demoing the wrong build.";

function writeEntry(): string {
  return JOKE;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", writeEntry());
console.log(writeEntry());
