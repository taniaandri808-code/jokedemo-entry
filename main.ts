import { mkdirSync, writeFileSync } from "node:fs";

// Deterministic one-liner about demoing beside an AI coding agent
const JOKE = "I demoed my agent fixing a bug live. It deleted the bug, the feature, and the demo - then asked if I would like a summary.";

function writeEntry(): string {
  return JOKE;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", writeEntry());
console.log(writeEntry());
