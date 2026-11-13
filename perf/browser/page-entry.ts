import { scenarioById } from "../scenarios/index.ts";
import { sampleLoop, scenarioDriver } from "../harness/sample.ts";
import type { SampleDriver } from "../harness/sample.ts";
import { dom } from "../harness/counters.ts";
import { installCreatorFunnels } from "../harness/funnels.ts";
import { median, round2 } from "../harness/stats.ts";
import type { PerfContext, PerfFixture, PerfScenario, BrowserReset } from "../harness/scenario.ts";
import { missingRequirement } from "../harness/scenario.ts";
import { page, settle, frame, delay, registerThemes } from "./page-helpers.ts";

// The page harness of the react suite (03), adapted from survey-library perf/browser/page-entry.ts and bundled into
// perf/results/.cache/perf-page.js with every build external: scenarios get survey-core, the creator and its React
// UI only from the page's globals (Survey, SurveyCreatorCore, SurveyCreator). It exposes window.PerfPage to the spec.
// The settle, the counters and the clock follow 03; the samples, their order and maxMs are the shared sample loop's.
const W: any = globalThis;
const now = (): number => performance.now();

// Page ready (03): the UMD globals, React 19 with createPortal and flushSync, a stylesheet that defines .svc-creator,
// the fonts.
function ready(): Array<string> {
  const problems: Array<string> = [];
  const globals: Array<[string, string]> = [["Survey", "Model"], ["SurveyReact", "Survey"], ["SurveyCreatorCore", "SurveyCreatorModel"],
    ["SurveyCreator", "SurveyCreatorComponent"]];
  globals.forEach((g: [string, string]) => {
    if (!W[g[0]] || !W[g[0]][g[1]]) problems.push("window." + g[0] + "." + g[1] + " is missing");
  });
  if (!W.SurveyTheme || typeof W.SurveyTheme !== "object" || Object.keys(W.SurveyTheme).length === 0) problems.push("window.SurveyTheme is missing");
  if (!W.SurveyCreatorCore || typeof W.SurveyCreatorCore.registerSurveyTheme !== "function") problems.push("SurveyCreatorCore.registerSurveyTheme is missing");
  if (!W.React || typeof W.React.version !== "string" || W.React.version.split(".")[0] !== "19") problems.push("React is not 19: " + (W.React && W.React.version));
  if (!W.ReactDOMClient || typeof W.ReactDOMClient.createRoot !== "function") problems.push("ReactDOMClient.createRoot is not a function");
  if (!W.ReactDOM || typeof W.ReactDOM.createPortal !== "function") problems.push("ReactDOM.createPortal is not a function");
  if (!W.ReactDOM || typeof W.ReactDOM.flushSync !== "function") problems.push("ReactDOM.flushSync is not a function");
  const hasRule = Array.prototype.some.call(document.styleSheets, (sheet: any) => {
    try {
      return Array.prototype.some.call(sheet.cssRules, (rule: any) => (rule.selectorText || "").indexOf(".svc-creator") > -1);
    } catch(e) {
      return false;
    }
  });
  if (!hasRule) problems.push("no stylesheet defines .svc-creator");
  if (document.fonts.status !== "loaded") problems.push("fonts: " + document.fonts.status);
  return problems;
}

// The fixture comes from Node as its text (the scenarios parse a fresh copy per creator) and its meta.
interface FixtureArg {
  key: string;
  text: string;
  meta: any;
}

function gc(): void {
  if (typeof W.gc === "function") W.gc();
}

function usedHeapBytes(): number {
  const mem = (performance as any).memory;
  return mem ? mem.usedJSHeapSize : 0;
}

function heapMB(): number | null {
  gc();
  const mem = (performance as any).memory;
  return mem ? round2(mem.usedJSHeapSize / 1048576) : null;
}

let parsed: { text: string, json: any } | undefined;
function context(fixture: FixtureArg, reset: BrowserReset): PerfContext {
  if (!parsed || parsed.text !== fixture.text) parsed = { text: fixture.text, json: JSON.parse(fixture.text) };
  const f: PerfFixture = { key: fixture.key, json: parsed.json, text: fixture.text, meta: fixture.meta };
  return {
    Survey: W.Survey, Creator: W.SurveyCreatorCore, CreatorUI: W.SurveyCreator, fixture: f, platform: "browser", now: now,
    cache: { reset: reset }, page: page, heap: { collect: gc, usedBytes: usedHeapBytes }
  };
}

function resetOf(scenario: PerfScenario, override?: BrowserReset): BrowserReset {
  if (override) return override;
  if (scenario.browser && scenario.browser.reset) return scenario.browser.reset;
  return scenario.kind === "load" ? "page" : "restore";
}

function getScenario(id: string): PerfScenario {
  const s = scenarioById(id);
  if (!s) throw new Error("Unknown scenario " + id);
  const b: any = Object.assign({}, s.browser || {});
  delete b.reset;
  return Object.assign({}, s, b);
}

// The requirement check of a scenario (harness/scenario.ts) against the page's builds and a creator made for it.
function skipReason(scenario: PerfScenario): string {
  const probe = new W.SurveyCreator.SurveyCreator({});
  try {
    return missingRequirement({ Survey: W.Survey, Creator: W.SurveyCreatorCore, instances: { SurveyCreatorModel: probe } }, scenario.requires);
  } finally {
    probe.dispose();
  }
}

// Long tasks inside the sample windows.
const windows: Array<[number, number]> = [];
const longTasks: Array<{ start: number, duration: number }> = [];
try {
  new PerformanceObserver((list: any) => {
    list.getEntries().forEach((e: any) => longTasks.push({ start: e.startTime, duration: e.duration }));
  }).observe({ type: "longtask", buffered: true } as any);
} catch(e) {
  // No longtask entries in this browser: longTaskMs stays 0.
}
function longTaskMsPerSample(): number {
  // The task that holds the action starts before t0, so a task counts by its overlap with the window.
  const per = windows.map((w: [number, number]) => longTasks.reduce((n: number, t: any) => n + Math.max(0, Math.min(w[1], t.start + t.duration) - Math.max(w[0], t.start)), 0));
  return per.length ? round2(median(per)) : 0;
}

// What the page measures around the shared driver: the settle after every setup, after every timed run (before the
// check) and after every sample (00, Settle), with its times; frameMs; the sample windows for longTaskMs; and the
// DOM count after the run's settle (the last one is the counter run's).
interface PageStats {
  afterSetup: Array<number>;
  afterRun: Array<number>;
  afterSample: Array<number>;
  frames: Array<number>;
  domNodes: number | null;
}

function pageDriver(scenario: PerfScenario, ctx: PerfContext, stats: PageStats): SampleDriver {
  const settled: PerfScenario = Object.assign({}, scenario, {
    setup: async(c: PerfContext): Promise<any> => {
      const state = await scenario.setup(c);
      stats.afterSetup.push((await settle()).ms);
      return state;
    },
    record: async(c: PerfContext, state: any): Promise<void> => {
      stats.afterRun.push((await settle()).ms);
      stats.domNodes = document.body.querySelectorAll("*").length;
      if (scenario.record) await scenario.record(c, state);
    }
  });
  return scenarioDriver(settled, ctx, {
    now: now, gc: gc,
    installFunnels: () => installCreatorFunnels(ctx),
    afterRun: async(t0: number, t1: number): Promise<void> => {
      windows.push([t0, t1]);
      await frame();
      await delay(0);
      stats.frames.push(now() - t0);
    },
    afterSample: async(): Promise<void> => {
      stats.afterSample.push((await settle()).ms);
    }
  });
}

const newStats = (): PageStats => ({ afterSetup: [], afterRun: [], afterSample: [], frames: [], domNodes: null });
const spread = (list: Array<number>): any => (list.length ? { median: round2(median(list)), max: round2(Math.max(...list)) } : null);
const settleInfo = (s: PageStats): any => ({ afterSetup: spread(s.afterSetup), afterRun: spread(s.afterRun), afterSample: spread(s.afterSample) });

// An action scenario in this page: warm-ups, samples and the counter run in one evaluate. reset "restore" shows the
// creator once and lets setup restore it; "creator" makes a new creator per sample (scenarios/helpers.ts).
async function runAction(id: string, fixture: FixtureArg, options: { maxMs: number, reset?: BrowserReset }): Promise<any> {
  const scenario = getScenario(id);
  const skip = skipReason(scenario);
  if (skip) return { skipped: skip };
  registerThemes();
  const reset = resetOf(scenario, options.reset);
  const ctx = context(fixture, reset);
  const stats = newStats();
  const res = await sampleLoop(pageDriver(scenario, ctx, stats), { warmup: scenario.warmup === undefined ? 1 : scenario.warmup,
    samples: scenario.samples || 7, maxMs: scenario.maxMs || options.maxMs, minSamples: 5, now: now });
  res.counters.domNodes = dom(stats.domNodes);
  return {
    samples: res.samples, phases: res.phases, counters: res.counters,
    info: Object.assign({ kept: res.samples.length, warmups: res.warmups.length, wallMs: Math.round(res.wallMs), frameMs: round2(median(stats.frames)),
      longTaskMs: longTaskMsPerSample(), heapMB: heapMB(), reset: reset, settleMs: settleInfo(stats) }, ctx.cache.info || {}),
    jsonErrors: ctx.cache.jsonErrors || 0, repeat: scenario.repeat, counterOnly: scenario.counterOnly, tolerance: scenario.tolerance, rev: scenario.rev
  };
}

// One sample in this fresh page (a load, or an action run with reset "page"): setup, gc, the timed run, check.
async function freshSample(id: string, fixture: FixtureArg): Promise<any> {
  const scenario = getScenario(id);
  const skip = skipReason(scenario);
  if (skip) return { skipped: skip };
  registerThemes();
  const ctx = context(fixture, "page");
  const stats = newStats();
  const s = await pageDriver(scenario, ctx, stats).sample();
  return { ms: s.ms, phases: s.phases, jsonErrors: ctx.cache.jsonErrors || 0, longTaskMs: longTaskMsPerSample(), frameMs: round2(median(stats.frames)),
    settleMs: settleInfo(stats), info: ctx.cache.info, rev: scenario.rev, repeat: scenario.repeat, tolerance: scenario.tolerance, counterOnly: scenario.counterOnly };
}

// The counter run of a fresh-page scenario, in a fresh page of its own.
async function freshCounters(id: string, fixture: FixtureArg): Promise<any> {
  const scenario = getScenario(id);
  registerThemes();
  const ctx = context(fixture, "page");
  const stats = newStats();
  const counters = await pageDriver(scenario, ctx, stats).counterRun();
  counters.domNodes = dom(stats.domNodes);
  return { counters: counters, heapMB: heapMB(), info: ctx.cache.info };
}

// Every check fails on a no-op (03; core/noop-check.ts for core): setup and the settle, then the check without the
// run, which must throw; then a real sample (setup restores what the first setup left), whose check must pass.
async function noopCheck(id: string, fixture: FixtureArg): Promise<any> {
  const scenario = getScenario(id);
  const skip = skipReason(scenario);
  if (skip) return { skipped: skip };
  registerThemes();
  const ctx = context(fixture, resetOf(scenario));
  const message = (e: any): string => String(e && e.message ? e.message : e);
  const noop = await scenario.setup(ctx);
  await settle();
  let noopError = "";
  try {
    await scenario.check(ctx, noop);
  } catch(e: any) {
    noopError = message(e);
  }
  if (scenario.teardown) await scenario.teardown(ctx, noop);
  await settle();
  let runError = "";
  try {
    await pageDriver(scenario, ctx, newStats()).sample();
  } catch(e: any) {
    runError = message(e);
  }
  return { noopError: noopError, runError: runError };
}

W.PerfPage = { ready: ready, runAction: runAction, freshSample: freshSample, freshCounters: freshCounters, noopCheck: noopCheck };
