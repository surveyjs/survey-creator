import * as fs from "node:fs";
import * as path from "node:path";
import { spawn } from "node:child_process";
import type { ChildProcess } from "node:child_process";
import { splitOnly } from "../harness/ids.ts";
import { fixtureOfId } from "../harness/scenario.ts";
import { getFixture } from "../fixtures/index.ts";
import { readEnv } from "../harness/node/env.ts";
import { resolveTargetDir, checkBuildFresh, checkBuildExists, runnerRoot, coreMain, creatorCoreMain, creatorCoreSrc, creatorCoreBuildHint,
  coreBuildHint } from "../harness/node/build.ts";
import { git, headCommit } from "../harness/node/git.ts";
import { machineInfo } from "../harness/node/machine.ts";
import { dependencyInfo } from "../harness/node/deps.ts";
import { buildPart, resultFilePath, writeJsonAtomic, readVersion } from "../harness/node/result.ts";
import { fixtureHashes } from "../harness/node/fixture-hash.ts";
import type { ResultFile, ResultEntry } from "../harness/node/result.ts";
import { scenarioTimeoutMs, resultSchema } from "../manifest.ts";
import { buildStamp, sameStamp, stampText } from "./stamp.ts";
import type { BuildStamp } from "./stamp.ts";

// The core suite (02), adapted from survey-library perf/core/run.ts: every core scenario in its own fresh
// `node --expose-gc` process, in a fixed order sorted by id, against the target builds (PERF_CORE_DIR and
// PERF_CREATOR_CORE_DIR, default the runner's). It writes one result file.
const processScript = path.join(runnerRoot, "perf", "core", "scenario-process.ts");

// Node 22.18 runs .ts files without a flag (00, Rules) and has module.registerHooks.
const [nodeMajor, nodeMinor] = process.versions.node.split(".").map(Number);
if (nodeMajor < 22 || (nodeMajor === 22 && nodeMinor < 18)) throw new Error("The core suite needs Node >= 22.18; this is " + process.versions.node);

const env = readEnv();
const core = resolveTargetDir("core");
const creatorCore = resolveTargetDir("creatorCore");
const coreFile = path.join(core.dir, coreMain);
const creatorCoreFile = path.join(creatorCore.dir, creatorCoreMain);
// survey-core belongs to another repo: it is only checked to exist; its version, commit and mtime are recorded.
if (!fs.existsSync(coreFile)) throw new Error("Missing build file " + coreFile + ". Run: " + coreBuildHint);
// The creator-core build of this checkout is checked against its src; another one only exists.
if (creatorCore.isRunnerBuild) checkBuildFresh(creatorCoreSrc, [creatorCoreFile], creatorCoreBuildHint);
else checkBuildExists([creatorCoreFile]);
[["PERF_CORE_DIR", core, coreFile], ["PERF_CREATOR_CORE_DIR", creatorCore, creatorCoreFile]].forEach((t: any) => {
  console.log(t[0] + " " + t[1].dir + ": " + readVersion(t[1].dir) + ", built " + new Date(fs.statSync(t[2]).mtimeMs).toISOString() +
    (t[1].isRunnerBuild ? " (the runner's)" : ""));
});

// The build files as the suite starts: every scenario process must have imported these same files (stamp.ts).
const startStamps: { [kind: string]: BuildStamp } = { core: buildStamp(coreFile), creatorCore: buildStamp(creatorCoreFile) };

const split = splitOnly(env.only, "core");
const ids = split.run.slice().sort();

const fixtures: ResultFile["fixtures"] = {};
Array.from(new Set(ids.map(fixtureOfId))).sort().forEach((key: string) => {
  const f = getFixture(key);
  fixtures[key] = Object.assign(fixtureHashes(f), { options: f.options });
});

const runnerCommit = headCommit(runnerRoot);
// The library build's commit: PERF_LIB_COMMIT, else the survey-library checkout the build sits in
// (<checkout>/packages/survey-core/...); an npm folder has none, even inside some other git worktree. The checkout's
// HEAD names the build only while it has not moved since the build was made and survey-core's src is clean: otherwise
// the commit is null, with the reason printed (during step 02 the checkout moved to another branch and was rebuilt).
function libraryCheckoutCommit(dir: string, buildFile: string): string | null {
  let top: string;
  try {
    top = git(dir, ["rev-parse", "--show-toplevel"]);
  } catch(e) {
    return null;
  }
  const own = path.resolve(top, "packages", "survey-core") + path.sep;
  const inside = (path.resolve(dir) + path.sep).toLowerCase().indexOf(own.toLowerCase()) === 0;
  if (!inside) return null;
  const why = (reason: string): null => {
    console.log("build.core.commit is null: " + reason + "; set PERF_LIB_COMMIT to name the build's commit");
    return null;
  };
  try {
    if (git(top, ["status", "--porcelain", "--", "packages/survey-core/src", "packages/survey-core/entries"])) return why("survey-core src has uncommitted changes");
    // The reflog entry's own time (HEAD@{<unix>}), not the commit's: a checkout or pull after the build moves it.
    const moved = /\{(\d+)\}/.exec(git(top, ["log", "-g", "-1", "--format=%gd", "--date=unix", "HEAD"]));
    if (moved && Number(moved[1]) * 1000 > fs.statSync(buildFile).mtimeMs) return why("HEAD moved after the build was made");
  } catch(e) {
    return why("git could not tell whether HEAD moved");
  }
  return headCommit(dir);
}
const coreCommit = env.libCommit || libraryCheckoutCommit(core.dir, coreFile);
const creatorCommit = env.targetCommit || (creatorCore.isRunnerBuild ? runnerCommit : null);
// The deps fingerprint: the runner's root and creator-core folders, whose node_modules hold jsdom.
const depsDirs = [runnerRoot, path.join(runnerRoot, "packages", "survey-creator-core")];
const date = new Date();
const result: ResultFile = {
  schema: resultSchema, product: "creator", suite: "core", kind: env.kind, label: env.label, ref: env.ref, commit: runnerCommit,
  previousCommit: env.previousCommit, date: date.toISOString(),
  requested: { only: env.only, notInSuite: split.notInSuite },
  incomplete: null,
  build: {
    core: buildPart(core.dir, coreMain, coreCommit),
    creatorCore: buildPart(creatorCore.dir, creatorCoreMain, creatorCommit),
    deps: dependencyInfo(depsDirs)
  },
  machine: machineInfo({ extra: env.machineExtra }),
  environment: null,
  fixtures: fixtures,
  skipped: [],
  failed: [],
  results: []
};
const file = resultFilePath(env, "core", date);

let child: ChildProcess | undefined;
let stopping = false;
const done = new Set<string>();

// Every write before the end says what is still unrun, so a run killed without a chance to write (SIGKILL, out of
// memory) leaves a file that reads as incomplete, not as complete with scenarios missing.
function write(final?: boolean): void {
  if (!final && !result.incomplete) {
    writeJsonAtomic(file, Object.assign({}, result, { incomplete: { reason: "killed", unrun: ids.filter((id: string) => !done.has(id)) } }));
    return;
  }
  writeJsonAtomic(file, result);
}

// SIGTERM (a caller or a person may stop a suite): write what was collected, with the rest as unrun.
const stop = (reason: "timeout" | "killed"): void => {
  if (stopping) return;
  stopping = true;
  if (child) child.kill();
  result.incomplete = { reason: reason, unrun: ids.filter((id: string) => !done.has(id)) };
  write(true);
  console.log("stopped (" + reason + "): " + result.incomplete.unrun.length + " scenarios not run; " + file);
  process.exit(143);
};
process.on("SIGTERM", () => stop("timeout"));
process.on("SIGINT", () => stop("killed"));

function runOne(id: string): Promise<any> {
  return new Promise((resolve: (v: any) => void) => {
    let out = "";
    let err = "";
    const proc = spawn(process.execPath, ["--expose-gc", processScript, id], { cwd: runnerRoot, env: process.env, stdio: ["ignore", "pipe", "pipe"] });
    child = proc;
    let timedOut = false;
    const timer = setTimeout(() => { timedOut = true; proc.kill(); }, scenarioTimeoutMs);
    proc.stdout.on("data", (d: Buffer) => { out += d.toString(); });
    proc.stderr.on("data", (d: Buffer) => { err += d.toString(); });
    proc.on("close", (code: number | null) => {
      clearTimeout(timer);
      child = undefined;
      const line = out.trim().split("\n").filter((l: string) => l.charAt(0) === "{").pop();
      let msg: any;
      try {
        msg = line ? JSON.parse(line) : undefined;
      } catch(e) {
        msg = undefined;
      }
      // Child processes print nothing on stderr: anything there fails the scenario.
      if (err.trim()) msg = { type: "failed", id: id, error: "stderr: " + err.trim().substring(0, 2000) };
      if (timedOut) msg = { type: "failed", id: id, error: "killed after " + scenarioTimeoutMs / 1000 + " s" };
      if (!msg) msg = { type: "failed", id: id, error: "no result (exit code " + code + ")" + (out ? ": " + out.substring(0, 500) : "") };
      resolve(msg);
    });
  });
}

// What differs between the build files a scenario process saw and the ones the suite started with.
function buildChange(builds: any): string {
  if (!builds || !builds.before || !builds.after) return "the scenario process did not report its build files";
  for (const kind of ["core", "creatorCore"]) {
    for (const when of ["before", "after"]) {
      if (!sameStamp(builds[when][kind], startStamps[kind])) {
        return "the " + (kind === "core" ? "survey-core" : "survey-creator-core") + " build changed during the suite (" + when + " the scenario: " +
          stampText(builds[when][kind]) + "; at the start: " + stampText(startStamps[kind]) + ")";
      }
    }
  }
  return "";
}

async function main(): Promise<void> {
  const start = Date.now();
  write();
  console.log("core: " + ids.length + " scenarios" + (split.notInSuite.length ? ", " + split.notInSuite.length + " not in this suite" : "") + " -> " + file);
  for (const id of ids) {
    if (stopping) return;
    const t0 = Date.now();
    const startedAt = new Date().toISOString();
    let msg = await runOne(id);
    done.add(id);
    const changed = buildChange(msg.builds);
    if (changed) msg = { type: "failed", id: id, error: changed };
    const sec = ((Date.now() - t0) / 1000).toFixed(1);
    if (msg.type === "entry") {
      const e: ResultEntry = msg.entry;
      e.info.processMs = Date.now() - t0;
      e.info.startedAt = startedAt;
      result.results.push(e);
      console.log(id.padEnd(46) + String(e.median).padStart(10) + " ms  n=" + e.samples.length + (e.counterOnly ? " counterOnly" : "") + "  (" + sec + " s)");
    } else if (msg.type === "skipped") {
      result.skipped.push({ id: id, reason: msg.reason });
      console.log(id.padEnd(46) + "   skipped: " + msg.reason);
    } else {
      result.failed.push({ id: id, error: msg.error });
      console.log(id.padEnd(46) + "   FAILED: " + String(msg.error).split("\n")[0]);
    }
    write();
  }
  write(true);
  console.log("core: done in " + ((Date.now() - start) / 1000).toFixed(0) + " s; " + result.results.length + " measured, " + result.skipped.length +
    " skipped, " + result.failed.length + " failed; " + file);
  if (result.failed.length > 0) process.exitCode = 1;
}

main().catch((e: any) => {
  console.error(e && e.stack ? e.stack : e);
  process.exitCode = 1;
});
