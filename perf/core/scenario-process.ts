// The jsdom window first: the builds imported below see a document when they load (02).
import { settle, jsdomVersion } from "./dom.ts";
import { importTargets, checkedCreator } from "./target.ts";
import { captureConsole } from "./console.ts";
import { scenarioById } from "../scenarios/index.ts";
import { getFixture } from "../fixtures/index.ts";
import { sampleLoop, scenarioDriver } from "../harness/sample.ts";
import { installCreatorFunnels } from "../harness/funnels.ts";
import { summarize, median } from "../harness/stats.ts";
import type { PerfContext, PerfFixture, PerfScenario } from "../harness/scenario.ts";
import { missingRequirement } from "../harness/scenario.ts";
import type { ResultEntry } from "../harness/node/result.ts";
import { readEnv } from "../harness/node/env.ts";
import { resolveTargetDir, coreMain, creatorCoreMain } from "../harness/node/build.ts";
import * as path from "node:path";
import { buildStamp } from "./stamp.ts";
import type { BuildStamp } from "./stamp.ts";

// One scenario in this fresh process: `node --expose-gc perf/core/scenario-process.ts <id>`. It prints one JSON
// line on stdout, { type: "entry" | "skipped" | "failed", ... }, and nothing on stderr. Imports, in order: the jsdom
// window (dom.ts), the resolve hook (hooks.ts), survey-core through the hook (ctx.Survey), then the creator-core ESM
// build of PERF_CREATOR_CORE_DIR, whose "survey-core" resolves to the same module (target.ts).
declare const gc: undefined | (() => void);

const id = process.argv[2];
let printed: any;
const print = (line: any): void => { printed = line; };

// The two build files this process imports, stamped before the import and again at the end (stamp.ts): run.ts
// compares both with the stamps it took at its start.
const buildFiles = (): { core: string, creatorCore: string } => ({
  core: path.join(resolveTargetDir("core").dir, coreMain),
  creatorCore: path.join(resolveTargetDir("creatorCore").dir, creatorCoreMain)
});
const stampBuilds = (): { core: BuildStamp, creatorCore: BuildStamp } | null => {
  try {
    const files = buildFiles();
    return { core: buildStamp(files.core), creatorCore: buildStamp(files.creatorCore) };
  } catch(e) {
    return null;
  }
};
const before = stampBuilds();

async function main(): Promise<void> {
  const env = readEnv();
  const scenario = scenarioById(id);
  if (!scenario) throw new Error("Unknown scenario " + id);
  if (typeof gc !== "function") throw new Error("gc() is missing: run with node --expose-gc");
  // A console.warn or console.error fails the scenario, from the builds' load on, except the version message.
  const consoleCapture = captureConsole();
  const warnings = consoleCapture.warnings;
  const targets = await importTargets();
  const core = targets.core;
  const creatorCore = targets.creatorCore;
  if (warnings.length > 0) throw new Error("the builds warned on load: " + warnings.slice(0, 3).join(" | "));
  const f = getFixture(scenario.fixture);
  const fixture: PerfFixture = { key: f.key, json: f.json, text: JSON.stringify(f.json), meta: f.meta };
  const now = (): number => performance.now();
  const ctx: PerfContext = {
    Survey: targets.Survey, Creator: targets.Creator, fixture: fixture, platform: "node", now: now, cache: {},
    heap: { collect: (): void => (gc as () => void)(), usedBytes: (): number => process.memoryUsage().heapUsed }
  };

  const probe = checkedCreator(ctx, targets);
  const skip = missingRequirement({ Survey: ctx.Survey, Creator: ctx.Creator, instances: { SurveyCreatorModel: probe } }, scenario.requires);
  probe.dispose();
  await settle();
  if (skip) {
    print({ type: "skipped", id: id, reason: skip });
    return;
  }

  // The settle (02): after every setup, after every timed run (before check, in both the samples and the counter
  // run) and after every teardown. None of it is timed. The after-run times are reported.
  const afterRun: Array<number> = [];
  const afterSetup: Array<number> = [];
  let intervalsCleared = 0;
  const settleInto = async(list: Array<number> | null): Promise<void> => {
    const r = await settle();
    if (list) list.push(r.ms);
    intervalsCleared += r.intervalsCleared;
  };
  const settled: PerfScenario = Object.assign({}, scenario, {
    setup: async(c: PerfContext): Promise<any> => {
      const state = await scenario.setup(c);
      await settleInto(afterSetup);
      return state;
    },
    record: async(c: PerfContext, state: any): Promise<void> => {
      await settleInto(afterRun);
      if (scenario.record) await scenario.record(c, state);
    }
  });
  const driver = scenarioDriver(settled, ctx, {
    now: now,
    gc: (): void => (gc as () => void)(),
    installFunnels: () => installCreatorFunnels(ctx),
    afterSample: () => settleInto(null)
  });
  const res = await sampleLoop(driver, { warmup: scenario.warmup === undefined ? 2 : scenario.warmup, samples: scenario.samples || 12,
    maxMs: scenario.maxMs || 3000, minSamples: 5, now: now });
  (gc as () => void)();
  if (warnings.length > 0) throw new Error("warnings during the scenario: " + warnings.slice(0, 3).join(" | "));
  const jsonErrors = ctx.cache.jsonErrors || 0;
  // jsonErrors fail a scenario on the runner's own builds and in nightly or record runs; elsewhere (an npm build)
  // they are only recorded.
  const strict = (core.isRunnerBuild && creatorCore.isRunnerBuild) || env.kind === "nightly" || env.kind === "record";
  if (strict && jsonErrors > 0) throw new Error(jsonErrors + " jsonErrors on " + scenario.fixture);
  const stats = summarize(res.samples);
  const phases: { [phase: string]: { median: number, min: number } } | undefined = res.phases ? {} : undefined;
  if (res.phases && phases) {
    for (const key in res.phases) {
      const p = summarize(res.phases[key]);
      phases[key] = { median: p.median, min: p.min };
    }
  }
  const round = (v: number): number => Math.round(v * 10) / 10;
  const entry: ResultEntry = {
    id: scenario.id, rev: scenario.rev, unit: "ms", samples: res.samples.map((v: number) => Math.round(v * 100) / 100),
    median: stats.median, min: stats.min, max: stats.max, mad: stats.mad,
    phases: phases, counters: res.counters,
    info: Object.assign({
      kept: res.samples.length, warmups: res.warmups.length, wallMs: Math.round(res.wallMs), heapMB: Math.round(process.memoryUsage().heapUsed / 1048576),
      gc: true, jsdom: jsdomVersion,
      settleMs: { afterRun: { median: round(median(afterRun)), max: round(Math.max(...afterRun)) },
        afterSetup: { median: round(median(afterSetup)), max: round(Math.max(...afterSetup)) }, intervalsCleared: intervalsCleared }
    }, ctx.cache.info || {}, consoleCapture.versionMismatch ? { versionMismatch: consoleCapture.versionMismatch } : {}),
    jsonErrors: jsonErrors, tolerance: scenario.tolerance === undefined ? null : scenario.tolerance, local: false
  };
  if (scenario.repeat) entry.repeat = scenario.repeat;
  if (scenario.counterOnly) entry.counterOnly = true;
  print({ type: "entry", entry: entry });
}

// Exit once the line is flushed: the creator may leave timers behind, so the process is not left to end by itself.
const finish = (): void => {
  if (printed) printed.builds = { before: before, after: stampBuilds() };
  process.stdout.write(JSON.stringify(printed) + "\n", () => process.exit(0));
};
main().then(finish, (e: any) => {
  printed = { type: "failed", id: id, error: String(e && e.stack ? e.stack : e).substring(0, 2000) };
  finish();
});
