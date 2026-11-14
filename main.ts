// MakeFun Ghost — entry program for makefun-coin-launch-01.
//
// The coin itself is launched by the agent on pump.fun, not by this
// program. This program has exactly one job: hand the launch record
// (LAUNCH.json) from the repository to the grader's output directory.
//
// It uses only the Node.js standard library, touches no network and
// reads no clock. On success it prints nothing and exits 0; on any
// failure it prints the error to stderr and exits 1.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourcePath = join(botDir, "LAUNCH.json");
const destinationPath = join(outputDir, "LAUNCH.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourcePath, destinationPath);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`makefun-ghost-coin: failed to copy LAUNCH.json: ${message}`);
  process.exit(1);
}
