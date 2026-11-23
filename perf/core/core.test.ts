import { describe, test, expect } from "vitest";
import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { pathToFileURL } from "node:url";
import { runnerRoot, defaultTargetDir, coreMain } from "../harness/node/build.ts";
import { resultSchema } from "../manifest.ts";
import { resolveExport } from "./hooks.ts";
import { captureConsole } from "./console.ts";

// The core suite's entry points (02) in plain Node child processes: Vitest never imports dom.ts, a build or a
// scenario, so the worker keeps its own globals.
const node = (args: Array<string>, env: { [name: string]: string } = {}, input?: string): any => spawnSync(process.execPath, args, {
  cwd: runnerRoot, encoding: "utf8", input: input, env: Object.assign({}, process.env, { PERF_CORE_DIR: "", PERF_CREATOR_CORE_DIR: "" }, env)
});
const tempDir = (): string => fs.mkdtempSync(path.join(os.tmpdir(), "perf-core-"));
const coreUrl = (): string => pathToFileURL(path.join(defaultTargetDir("core"), coreMain)).href;

describe("the core runner", () => {
  test("run.ts with PERF_ONLY runs one scenario in a child process and writes the result file", () => {
    const dir = tempDir();
    const file = path.join(dir, "core.json");
    const res = node([path.join(runnerRoot, "perf", "core", "run.ts")], { PERF_ONLY: "typical/load/json", PERF_RESULT_FILE: file });
    expect(res.stderr).toBe("");
    expect(res.status).toBe(0);
    const result = JSON.parse(fs.readFileSync(file, "utf8"));
    expect(result.schema).toBe(resultSchema);
    expect(result.product).toBe("creator");
    expect(result.suite).toBe("core");
    expect(result.incomplete).toBeNull();
    expect(result.failed).toEqual([]);
    expect(result.results.map((r: any) => r.id)).toEqual(["typical/load/json"]);
    const r = result.results[0];
    expect(r.samples.length).toBeGreaterThanOrEqual(5);
    expect(r.median).toBeGreaterThan(0);
    expect(r.counters.surveysCreated.kind).toBe("work");
    expect(r.counters["surveysCreated.designer"].value).toBeGreaterThan(0);
    expect(r.counters.expressionRuns.kind).toBe("work");
    expect(r.info.settleMs.afterRun.median).toBeGreaterThanOrEqual(0);
    expect(result.build.core.version).toMatch(/^\d+\.\d+\.\d+/);
    expect(result.build.creatorCore.version).toMatch(/^\d+\.\d+\.\d+/);
    expect(result.build.creatorCore.commit).toBe(result.commit);
    expect(result.build.deps.versions.jsdom).toMatch(/^\d+\./);
    expect(result.build.deps.fingerprint).toMatch(/^[0-9a-f]{40}$/);
    expect(result.fixtures.typical.hash).toMatch(/^[0-9a-f]{40}$/);
    fs.rmSync(dir, { recursive: true, force: true });
  });
  test("run.ts refuses an id in no suite, and writes no result file", () => {
    const dir = tempDir();
    const file = path.join(dir, "core.json");
    const res = node([path.join(runnerRoot, "perf", "core", "run.ts")], { PERF_ONLY: "typical/load/model", PERF_RESULT_FILE: file });
    expect(res.status).not.toBe(0);
    expect(res.stderr).toMatch(/PERF_ONLY names ids that are in no suite: typical\/load\/model/);
    expect(fs.existsSync(file)).toBe(false);
    fs.rmSync(dir, { recursive: true, force: true });
  });
  test("every check fails on a no-op and passes after the run (noop-check.ts, the typical and locales scenarios)", () => {
    const ids = ["typical/load/json", "locales/load/json", "typical/select/element@survey", "typical/select/element@text1", "typical/edit/add-question",
      "typical/edit/delete", "typical/edit/convert@dropdown1", "typical/edit/property", "typical/edit/undo-redo", "typical/tabs/theme"];
    const res = node([path.join(runnerRoot, "perf", "core", "noop-check.ts"), ids.join(",")]);
    expect(res.stderr).toBe("");
    expect(res.stdout).not.toMatch(/PASSED \(bad\)/);
    expect(res.status).toBe(0);
    expect(res.stdout.trim().split("\n").length).toBe(ids.length);
  });
});

describe("the rev hashes", () => {
  test("revs.json matches every scenario, and every scenario names options.ts (node perf/scenarios/revs.ts)", () => {
    const res = node([path.join(runnerRoot, "perf", "scenarios", "revs.ts")]);
    expect(res.stderr).toBe("");
    expect(res.status).toBe(0);
    expect(res.stdout).toMatch(/all hashes match/);
  });
  test("revs.ts --file with one hash altered exits 1 and asks for a rev bump", () => {
    const dir = tempDir();
    const revs = JSON.parse(fs.readFileSync(path.join(runnerRoot, "perf", "scenarios", "revs.json"), "utf8"));
    revs["typical/load/json"].hash = "0".repeat(40);
    const file = path.join(dir, "revs.json");
    fs.writeFileSync(file, JSON.stringify(revs));
    const res = node([path.join(runnerRoot, "perf", "scenarios", "revs.ts"), "--file", file]);
    expect(res.status).toBe(1);
    expect(res.stdout).toMatch(/typical\/load\/json: the measured code changed but rev is still 1/);
    fs.rmSync(dir, { recursive: true, force: true });
  });
});

describe("the resolve hook (C06)", () => {
  test("survey-core subpaths resolve through the build's exports", () => {
    const exportsField = JSON.parse(fs.readFileSync(path.join(defaultTargetDir("core"), "package.json"), "utf8")).exports;
    expect(resolveExport(exportsField, ".")).toBe("./fesm/survey-core.mjs");
    expect(resolveExport(exportsField, "./themes")).toBe("./fesm/themes/index.mjs");
    expect(resolveExport(exportsField, "./i18n/german")).toBe("./fesm/i18n/german.mjs");
    expect(resolveExport(exportsField, "./no-such-entry")).toBeUndefined();
  });
  test("a bare specifier other than survey-core from a target build fails the scenario and names it", () => {
    const dir = tempDir();
    fs.mkdirSync(path.join(dir, "fesm"));
    fs.writeFileSync(path.join(dir, "fesm", "survey-creator-core.mjs"), "import \"left-pad\";\nexport const x = 1;\n");
    const res = node(["--expose-gc", path.join(runnerRoot, "perf", "core", "scenario-process.ts"), "typical/load/json"], { PERF_CREATOR_CORE_DIR: dir });
    expect(res.stderr).toBe("");
    const msg = JSON.parse(res.stdout.trim());
    expect(msg.type).toBe("failed");
    expect(msg.error).toMatch(/bare specifier "left-pad"/);
    fs.rmSync(dir, { recursive: true, force: true });
  });
  test("the guard also holds when the target folder is given through a junction (Node loads the realpath)", () => {
    const dir = tempDir();
    fs.mkdirSync(path.join(dir, "real", "fesm"), { recursive: true });
    fs.writeFileSync(path.join(dir, "real", "fesm", "survey-creator-core.mjs"), "import \"left-pad\";\nexport const x = 1;\n");
    fs.symlinkSync(path.join(dir, "real"), path.join(dir, "link"), "junction");
    const res = node(["--expose-gc", path.join(runnerRoot, "perf", "core", "scenario-process.ts"), "typical/load/json"], { PERF_CREATOR_CORE_DIR: path.join(dir, "link") });
    const msg = JSON.parse(res.stdout.trim());
    expect(msg.type).toBe("failed");
    expect(msg.error).toMatch(/bare specifier "left-pad"/);
    fs.rmSync(dir, { recursive: true, force: true });
  });
  test("run.ts fails a scenario whose build files changed after the suite started", () => {
    const dir = tempDir();
    fs.mkdirSync(path.join(dir, "fesm"));
    // A build that rewrites itself when imported, as a rebuild into the same folder would during a suite.
    fs.writeFileSync(path.join(dir, "fesm", "survey-creator-core.mjs"), "import * as fs from \"node:fs\";\nimport { fileURLToPath } from \"node:url\";\n" +
      "fs.appendFileSync(fileURLToPath(import.meta.url), \"\\n\");\nexport const x = 1;\n");
    fs.writeFileSync(path.join(dir, "package.json"), "{ \"version\": \"0.0.0\" }");
    const file = path.join(dir, "core.json");
    const res = node([path.join(runnerRoot, "perf", "core", "run.ts")], { PERF_ONLY: "typical/load/json", PERF_RESULT_FILE: file, PERF_CREATOR_CORE_DIR: dir });
    expect(res.status).toBe(1);
    const result = JSON.parse(fs.readFileSync(file, "utf8"));
    expect(result.failed.map((f: any) => f.id)).toEqual(["typical/load/json"]);
    expect(result.failed[0].error).toMatch(/the survey-creator-core build changed during the suite/);
    fs.rmSync(dir, { recursive: true, force: true });
  });
  test("a creator build on a second survey-core instance fails the instance check", () => {
    const dir = tempDir();
    fs.mkdirSync(path.join(dir, "fesm"));
    // The same file under another URL is another module instance, as a second copy of survey-core would be.
    fs.writeFileSync(path.join(dir, "fesm", "survey-creator-core.mjs"), "import * as S from " + JSON.stringify(coreUrl() + "?second") + ";\n" +
      "export class SurveyCreatorModel { constructor() { this.survey = new S.SurveyModel(); } dispose() {} }\n");
    const res = node(["--expose-gc", path.join(runnerRoot, "perf", "core", "scenario-process.ts"), "typical/load/json"], { PERF_CREATOR_CORE_DIR: dir });
    const msg = JSON.parse(res.stdout.trim());
    expect(msg.type).toBe("failed");
    expect(msg.error).toMatch(/loaded another survey-core/);
    fs.rmSync(dir, { recursive: true, force: true });
  });
});

describe("the console rule", () => {
  test("checkLibraryVersion's message is recorded as versionMismatch; any other warning or error is kept", () => {
    const target: any = {};
    const c = captureConsole(target);
    target.error("survey-core has version '3.2.5' and survey-creator-core has version '3.2.4'. SurveyJS libraries should have the same versions to work correctly.");
    expect(c.versionMismatch).toEqual({ core: "3.2.5", creator: "3.2.4" });
    expect(c.warnings).toEqual([]);
    target.warn("something");
    target.error(new Error("boom"));
    expect(c.warnings).toEqual(["warn: something", "error: boom"]);
  });
});

describe("the settle (dom.ts)", () => {
  const script = (body: string): string => "import { settle, pendingTimers } from " + JSON.stringify(pathToFileURL(path.join(runnerRoot, "perf", "core", "dom.ts")).href) +
    ";\n(async () => {\n" + body + "\n})().then(() => process.exit(0), (e) => { console.log('ERR ' + e.message); process.exit(1); });\n";
  test("waits for Node and window timeouts and frames, and clears an interval left running", () => {
    const res = node(["--input-type=module"], {}, script(
      "const order = []; setTimeout(() => order.push('node'), 40); window.setTimeout(() => order.push('window'), 20);\n" +
      "requestAnimationFrame(() => { order.push('frame'); setTimeout(() => order.push('nested'), 30); });\n" +
      "setInterval(() => {}, 1);\n" +
      "const r = await settle();\n" +
      "console.log(JSON.stringify({ order: order.sort(), cleared: r.intervalsCleared, left: pendingTimers().length, ms: r.ms }));"));
    expect(res.stderr).toBe("");
    const out = JSON.parse(res.stdout.trim());
    expect(out.order).toEqual(["frame", "nested", "node", "window"]);
    expect(out.cleared).toBe(1);
    expect(out.left).toBe(0);
    expect(out.ms).toBeGreaterThanOrEqual(40);
  });
  test("throws after the cap and names the pending timer", () => {
    const res = node(["--input-type=module"], {}, script("setTimeout(function neverInTime() {}, 60000);\nawait settle(50);"));
    expect(res.status).toBe(1);
    expect(res.stdout).toMatch(/ERR settle: timers still pending after 50 ms: timeout 60000 ms: function neverInTime/);
  });
});
