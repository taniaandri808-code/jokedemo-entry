import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "I demoed my agent fixing a bug live. It deleted the bug, the feature, and the demo - then asked if I would like a summary.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE);
console.log(JOKE);
