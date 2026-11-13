import * as fs from "node:fs";

// The size and mtime of a build file. run.ts takes them at the start; each scenario process takes them before it
// imports the builds and after its last sample. A rebuild in between (another checkout's `npm run build` into the
// same folder, as happened during the step-02 runs) fails the scenario instead of measuring a build the result file
// does not name.
export interface BuildStamp {
  size: number;
  mtimeMs: number;
}

export function buildStamp(file: string): BuildStamp {
  const s = fs.statSync(file);
  return { size: s.size, mtimeMs: s.mtimeMs };
}

export function sameStamp(a: BuildStamp, b: BuildStamp): boolean {
  return a.size === b.size && a.mtimeMs === b.mtimeMs;
}

export function stampText(s: BuildStamp): string {
  return s.size + " bytes, " + new Date(s.mtimeMs).toISOString();
}
