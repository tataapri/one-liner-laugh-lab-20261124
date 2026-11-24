import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "It was a lone sock with no mate, so I adopted it. Internally.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
