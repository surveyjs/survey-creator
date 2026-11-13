import * as fs from "node:fs";
import { test, chromium } from "@playwright/test";
import type { Browser, BrowserContext, Page } from "@playwright/test";
import { splitOnly } from "../harness/ids.ts";
import { scenarioById } from "../scenarios/index.ts";
import { getFixture } from "../fixtures/index.ts";
import { readEnv } from "../harness/node/env.ts";
import { summarize, median } from "../harness/stats.ts";
import { sampleLoop } from "../harness/sample.ts";
import type { ResultEntry, VersionMismatch } from "../harness/node/result.ts";
import type { BrowserReset } from "../harness/scenario.ts";
import { versionMismatchPattern } from "../core/console.ts";
import { sameStamp, stampText } from "../core/stamp.ts";
import { resolveTargetDir } from "../harness/node/build.ts";
import { resolveUrl, pageUrl, parseResetOverride } from "./paths.ts";
import { stampsFile, servedStamps } from "./global-setup.ts";

// The react suite (03), adapted from survey-library perf/browser/suite.perf.spec.ts: one fresh context and page per
// scenario (and per sample of a load scenario, or of an action whose reset is "page"), in a browser this file
// launches. Every request goes to http://perf.local/ and is answered from the target's builds; any other host fails
// at once. A failed request, a page error, or a console warning or error other than survey-core's version message
// fails the scenario.
const env = readEnv();
const split = splitOnly(env.only, "react");
// maxMs 5 s, for action scenarios too (00, Measurement rules).
const loadOptions = { samples: 7, maxMs: 5000, minSamples: 5 };
const viewport = { width: 1600, height: 900 };
// Local diagnostics, never set by the perf server: PERF_RESET=<reset>:<id>,<id> runs those ids with another reset
// (03: the restored-against-fresh and the tab comparisons); PERF_NOOP_CHECK=1 runs each id's no-op check instead of
// measuring it (the reporter then writes no result file).
const resetOverride: { [id: string]: BrowserReset } = parseResetOverride(process.env.PERF_RESET);
const noopMode = process.env.PERF_NOOP_CHECK === "1";
// jsonErrors fail a scenario on the runner's own builds and in nightly or record runs; elsewhere (an npm build) they
// are only recorded (as in core).
const strictJson = (resolveTargetDir("core").isRunnerBuild && resolveTargetDir("creatorCore").isRunnerBuild) || env.kind === "nightly" || env.kind === "record";

let browser: Browser;
let startStamps: any;
const problems: Array<string> = [];
let versionMismatch: VersionMismatch | undefined;

test.beforeAll(async() => {
  startStamps = JSON.parse(fs.readFileSync(stampsFile, "utf8"));
  browser = await chromium.launch({ headless: true, args: ["--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE perf.local, EXCLUDE localhost",
    "--js-flags=--expose-gc", "--enable-precise-memory-info"] });
});

test.afterAll(async() => {
  if (browser) await browser.close();
});

async function openPage(): Promise<{ context: BrowserContext, page: Page }> {
  const context = await browser.newContext({ viewport: viewport, deviceScaleFactor: 1, reducedMotion: "reduce" });
  await context.route("**/*", async(route: any) => {
    const file = resolveUrl(route.request().url());
    if (file) await route.fulfill({ path: file });
    else await route.abort();
  });
  const page = await context.newPage();
  page.on("requestfailed", (r: any) => problems.push("request failed: " + r.url()));
  page.on("pageerror", (e: any) => problems.push("pageerror: " + String(e && e.message)));
  page.on("console", (m: any) => {
    const type = m.type();
    if (type !== "warning" && type !== "error") return;
    const text = m.text();
    const vm = type === "error" ? versionMismatchPattern.exec(text) : null;
    if (vm) versionMismatch = { core: vm[1], creator: vm[2] };
    else problems.push("console." + (type === "warning" ? "warn" : "error") + ": " + text.substring(0, 300));
  });
  await page.goto(pageUrl);
  const notReady = await page.evaluate(() => (window as any).PerfPage.ready());
  if (notReady.length > 0) throw new Error("page not ready: " + notReady.join("; "));
  return { context: context, page: page };
}

function fixtureFor(key: string): any {
  const f = getFixture(key);
  return { key: f.key, text: JSON.stringify(f.json), meta: f.meta };
}

function entryOf(id: string, r: any, samples: Array<number>, phases: any): ResultEntry {
  const stats = summarize(samples);
  let ph: any;
  if (phases) {
    ph = {};
    for (const key in phases) {
      const p = summarize(phases[key]);
      ph[key] = { median: p.median, min: p.min };
    }
  }
  const entry: ResultEntry = { id: id, rev: r.rev, unit: "ms", samples: samples.map((v: number) => Math.round(v * 100) / 100), median: stats.median,
    min: stats.min, max: stats.max, mad: stats.mad, phases: ph, counters: r.counters, info: r.info,
    jsonErrors: r.jsonErrors, tolerance: r.tolerance === undefined ? null : r.tolerance, local: false };
  if (r.repeat) entry.repeat = r.repeat;
  if (r.counterOnly) entry.counterOnly = true;
  return entry;
}

async function runAction(id: string, fixture: any): Promise<any> {
  const { context, page } = await openPage();
  try {
    const res = await page.evaluate((arg: any) => (window as any).PerfPage.runAction(arg.id, arg.fixture, { maxMs: arg.maxMs, reset: arg.reset }),
      { id: id, fixture: fixture, maxMs: loadOptions.maxMs, reset: resetOverride[id] });
    if (res.skipped) return { skipped: res.skipped };
    return { entry: entryOf(id, res, res.samples, res.phases) };
  } finally {
    await context.close();
  }
}

// A load scenario, or an action with reset "page": Node runs the sample loop; each sample is a new context, a page
// and one evaluate, and so is the counter run. No warm-up: every sample is a first one.
async function runFresh(id: string, fixture: any): Promise<any> {
  let skipped = "";
  let last: any = {};
  const longTasks: Array<number> = [];
  const frames: Array<number> = [];
  const settles: Array<any> = [];
  const res = await sampleLoop({
    sample: async(): Promise<any> => {
      if (skipped) return { ms: 0 };
      const { context, page } = await openPage();
      try {
        const r = await page.evaluate((arg: any) => (window as any).PerfPage.freshSample(arg.id, arg.fixture), { id: id, fixture: fixture });
        if (r.skipped) skipped = r.skipped;
        last = r;
        if (typeof r.longTaskMs === "number") longTasks.push(r.longTaskMs);
        if (typeof r.frameMs === "number") frames.push(r.frameMs);
        settles.push(r.settleMs);
        return { ms: r.ms || 0, phases: r.phases };
      } finally {
        await context.close();
      }
    },
    counterRun: async(): Promise<any> => {
      if (skipped) return {};
      const { context, page } = await openPage();
      try {
        const r = await page.evaluate((arg: any) => (window as any).PerfPage.freshCounters(arg.id, arg.fixture), { id: id, fixture: fixture });
        last.heapMB = r.heapMB;
        last.counterInfo = r.info;
        return r.counters;
      } finally {
        await context.close();
      }
    }
  }, { warmup: 0, samples: loadOptions.samples, maxMs: loadOptions.maxMs, minSamples: loadOptions.minSamples, now: () => performance.now() });
  if (skipped) return { skipped: skipped };
  const settleMedian = (key: string): any => {
    const list = settles.map((s: any) => s && s[key] && s[key].median).filter((v: any) => typeof v === "number");
    return list.length ? { median: median(list), max: Math.max(...list) } : null;
  };
  const r = Object.assign({}, last, { counters: res.counters,
    info: Object.assign({ kept: res.samples.length, warmups: 0, wallMs: Math.round(res.wallMs), frameMs: frames.length ? median(frames) : null,
      longTaskMs: longTasks.length ? median(longTasks) : 0, heapMB: last.heapMB, reset: "page",
      settleMs: { afterSetup: settleMedian("afterSetup"), afterRun: settleMedian("afterRun"), afterSample: settleMedian("afterSample") } },
    last.counterInfo || {}) });
  return { entry: entryOf(id, r, res.samples, res.phases) };
}

async function runNoopCheck(id: string, fixture: any): Promise<any> {
  const { context, page } = await openPage();
  try {
    const r = await page.evaluate((arg: any) => (window as any).PerfPage.noopCheck(arg.id, arg.fixture), { id: id, fixture: fixture });
    if (r.skipped) return { skipped: r.skipped };
    const bad: Array<string> = [];
    if (!r.noopError) bad.push("the check passes without the run");
    if (r.runError) bad.push("the check fails after the run: " + r.runError);
    console.log(id.padEnd(46) + " no-op: " + (r.noopError ? r.noopError.substring(0, 110) : "PASSED (bad)") + (r.runError ? "; run: " + r.runError : ""));
    if (bad.length > 0) throw new Error(bad.join("; "));
    return { noop: r };
  } finally {
    await context.close();
  }
}

// What differs between the served files now and at the start of the suite.
function buildChange(): string {
  const now = servedStamps();
  for (const file of Object.keys(startStamps)) {
    if (!now[file] || !sameStamp(now[file], startStamps[file])) {
      return "a served build file changed during the suite: " + file + " (now " + (now[file] ? stampText(now[file]) : "missing") + "; at the start " +
        stampText(startStamps[file]) + ")";
    }
  }
  return "";
}

test("environment", async({ browserName }, testInfo: any) => {
  const before = problems.length;
  const { context, page } = await openPage();
  try {
    const framework = await page.evaluate(() => ({ react: (window as any).React.version }));
    await testInfo.attach("perf-environment", { contentType: "application/json",
      body: JSON.stringify({ chromium: browser.version(), framework: framework, notInSuite: split.notInSuite }) });
  } finally {
    await context.close();
  }
  if (problems.length > before) throw new Error(problems.slice(before).join("\n"));
});

for (const id of split.run) {
  test(id, async({ browserName }, testInfo: any) => {
    const scenario = scenarioById(id);
    if (!scenario) throw new Error("Unknown scenario " + id);
    const fixture = fixtureFor(scenario.fixture);
    // The Chromium version for the machine key, from every test.
    await testInfo.attach("perf-browser", { contentType: "application/json", body: JSON.stringify({ chromium: browser.version() }) });
    const before = problems.length;
    versionMismatch = undefined;
    const reset = resetOverride[id] || (scenario.browser && scenario.browser.reset) || (scenario.kind === "load" ? "page" : "restore");
    let res: any;
    if (noopMode) res = await runNoopCheck(id, fixture);
    else res = reset === "page" ? await runFresh(id, fixture) : await runAction(id, fixture);
    if (res.entry && versionMismatch) res.entry.info.versionMismatch = versionMismatch;
    const changed = buildChange();
    const failed = problems.slice(before).concat(changed ? [changed] : []);
    if (res.entry && strictJson && res.entry.jsonErrors > 0) failed.push(res.entry.jsonErrors + " jsonErrors on " + scenario.fixture);
    if (failed.length > 0) res.problems = failed;
    await testInfo.attach("perf-result", { contentType: "application/json", body: JSON.stringify(res) });
    if (failed.length > 0) throw new Error(failed.join("\n"));
  });
}
