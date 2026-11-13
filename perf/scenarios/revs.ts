import * as fs from "node:fs";
import * as path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { allScenarios, helperFunctions } from "./index.ts";
import { suitesOf } from "../harness/ids.ts";
import type { PerfScenario } from "../harness/scenario.ts";

// The rev check (00, Ids), as in survey-library perf/scenarios/revs.ts: the hash of a scenario is the sha1 of its
// setup, run, check, teardown, counters and record sources, its sample fields, and the source of every helper
// reached through `uses` (options.ts among them), with whitespace removed. It runs in plain Node: Vitest and esbuild
// transform the source, so String(fn) differs there. `--write` updates revs.json after a rev bump.
// Exit code 1: a hash changed without a rev bump, a rev changed without --write, a scenario is new, or `uses`
// names an unknown helper. --file <path> checks another revs file (the unit test).
const here = path.dirname(fileURLToPath(import.meta.url));
const fileArg = process.argv.indexOf("--file");
const revsFile = fileArg > -1 ? path.resolve(process.argv[fileArg + 1]) : path.join(here, "revs.json");

// A browser sample's time also depends on the page helpers (perf/browser/page-helpers.ts).
const pageHelpersSource = fs.readFileSync(path.join(here, "..", "browser", "page-helpers.ts"), "utf8");
// An object's function members (selectors.tab, ...) are hashed by their source: JSON.stringify alone drops them (R03-F5).
export const sourceOf = (value: any): string => (typeof value === "function" ? String(value) :
  JSON.stringify(value, (key: string, v: any) => (typeof v === "function" ? String(v) : v)));

// The names of perf/scenarios exports a source reads: a call for a function, any mention for a constant. A method
// call of the same name (creator.selectElement) is not a helper call.
function namesIn(text: string, helpers: { [name: string]: any }): Array<string> {
  return Object.keys(helpers).filter((name: string) => new RegExp("(^|[^.\\w$])" + name + (typeof helpers[name] === "function" ? "\\(" : "\\b")).test(text));
}

// The helpers in `uses`, plus every helper they reach in turn: a change in a helper of a helper changes the hash.
export function closureOf(s: PerfScenario, helpers: { [name: string]: any }): Array<string> {
  const res: Array<string> = [];
  const visit = (name: string): void => {
    if (res.indexOf(name) > -1) return;
    if (!(name in helpers)) throw new Error(s.id + ": `uses` names an unknown helper " + name);
    res.push(name);
    namesIn(sourceOf(helpers[name]), helpers).forEach(visit);
  };
  (s.uses || []).forEach(visit);
  return res;
}

export function scenarioHash(s: PerfScenario, helpers: { [name: string]: any }): string {
  let text = String(s.setup) + String(s.run) + String(s.check) + String(s.teardown || "") + String(s.counters || "") + String(s.record || "");
  text += JSON.stringify({ repeat: s.repeat, counterOnly: s.counterOnly, requires: s.requires, samples: s.samples, warmup: s.warmup,
    maxMs: s.maxMs, tolerance: s.tolerance, browser: s.browser });
  closureOf(s, helpers).forEach((name: string) => { text += name + "=" + sourceOf(helpers[name]); });
  if (suitesOf(s.id).some((suite: string) => suite !== "core")) text += pageHelpersSource;
  return createHash("sha1").update(text.replace(/\s+/g, "")).digest("hex");
}

// The helpers and constants a scenario's own functions read but do not list in `uses`.
export function unlistedHelpers(s: PerfScenario, helpers: { [name: string]: any }): Array<string> {
  const text = String(s.setup) + String(s.run) + String(s.check) + String(s.teardown || "") + String(s.record || "");
  return namesIn(text, helpers).filter((name: string) => (s.uses || []).indexOf(name) < 0);
}

// Every scenario names options.ts in `uses` (00, Measurement rules).
export function missingOptions(s: PerfScenario): boolean {
  return (s.uses || []).indexOf("createCreator") < 0;
}

function main(): void {
  const write = process.argv.indexOf("--write") > -1;
  const helpers = helperFunctions();
  const stored: { [id: string]: { rev: number, hash: string } } = fs.existsSync(revsFile) ? JSON.parse(fs.readFileSync(revsFile, "utf8")) : {};
  const next: { [id: string]: { rev: number, hash: string } } = {};
  const problems: Array<string> = [];
  for (const s of allScenarios()) {
    const hash = scenarioHash(s, helpers);
    next[s.id] = { rev: s.rev, hash: hash };
    const unlisted = unlistedHelpers(s, helpers);
    if (unlisted.length > 0) problems.push(s.id + ": calls helpers not listed in uses: " + unlisted.join(", "));
    if (missingOptions(s)) problems.push(s.id + ": does not name createCreator (options.ts) in uses");
    const old = stored[s.id];
    if (!old) problems.push(s.id + ": new scenario, not in revs.json");
    else if (old.rev === s.rev && old.hash !== hash) problems.push(s.id + ": the measured code changed but rev is still " + s.rev + "; bump rev, then --write");
    else if (old.rev !== s.rev) problems.push(s.id + ": rev " + old.rev + " -> " + s.rev + ", run --write");
  }
  Object.keys(stored).filter((id: string) => !next[id]).forEach((id: string) => problems.push(id + ": in revs.json, no longer a scenario"));
  if (write) {
    const blocking = problems.filter((p: string) => p.indexOf("not listed in uses") > -1 || p.indexOf("createCreator") > -1);
    if (blocking.length > 0) {
      console.error(blocking.join("\n"));
      process.exit(1);
    }
    const sortedIds = Object.keys(next).sort();
    const out: { [id: string]: { rev: number, hash: string } } = {};
    sortedIds.forEach((id: string) => { out[id] = next[id]; });
    fs.writeFileSync(revsFile, JSON.stringify(out, null, 2) + "\n");
    console.log("revs.json: " + sortedIds.length + " scenarios");
    return;
  }
  if (problems.length > 0) {
    console.log(problems.join("\n"));
    process.exit(1);
  }
  console.log("revs.json: " + Object.keys(next).length + " scenarios, all hashes match");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
