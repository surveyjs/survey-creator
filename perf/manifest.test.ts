import { describe, test, expect } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";
import { manifest, contractVersion, resultSchema, product, scenarioTimeoutMs } from "./manifest.ts";
import { SUITES, SCENARIO_IDS, idsOfSuite } from "./harness/ids.ts";
import type { ScenarioIdInfo } from "./harness/ids.ts";
import { runnerRoot, targetVariables, creatorCoreSrc, uiSrc, runnerCreatorCoreBuild, runnerUiBuild, bundledCoreParts } from "./harness/node/build.ts";
import { allScenarios } from "./scenarios/index.ts";
import type { PerfScenario } from "./harness/scenario.ts";

const node = (args: Array<string>, env: { [name: string]: string } = {}): any => spawnSync(process.execPath, args, {
  cwd: runnerRoot, encoding: "utf8", env: Object.assign({}, process.env, env)
});

// The first ```json block of CONTRACT.md: the manifest as the contract documents it.
function contractExample(): any {
  const text = fs.readFileSync(path.join(runnerRoot, "perf", "CONTRACT.md"), "utf8");
  const m = /```json\r?\n([\s\S]*?)\r?\n```/.exec(text);
  if (!m) throw new Error("CONTRACT.md has no json block");
  return JSON.parse(m[1]);
}

// Every key of the example is in the actual value, at any depth, and every value the example spells out is equal.
// "..." stands for any value; a key "..." for keys the example leaves out; ["..."] for any list.
function compareWithExample(example: any, actual: any, where: string, problems: Array<string>): void {
  if (example === "...") return;
  if (Array.isArray(example)) {
    if (example.length === 1 && example[0] === "...") return;
    if (!Array.isArray(actual) || actual.length !== example.length) {
      problems.push(where + ": expected a list of " + example.length + ", got " + JSON.stringify(actual));
      return;
    }
    example.forEach((e: any, i: number) => compareWithExample(e, actual[i], where + "[" + i + "]", problems));
    return;
  }
  if (example !== null && typeof example === "object") {
    if (actual === null || typeof actual !== "object") {
      problems.push(where + ": expected an object, got " + JSON.stringify(actual));
      return;
    }
    const open = "..." in example;
    Object.keys(example).filter((k: string) => k !== "...").forEach((k: string) => {
      if (!(k in actual)) problems.push(where + "." + k + ": missing");
      else compareWithExample(example[k], actual[k], where + "." + k, problems);
    });
    if (!open) {
      Object.keys(actual).filter((k: string) => !(k in example)).forEach((k: string) => problems.push(where + "." + k + ": not in the example"));
    }
    return;
  }
  if (example !== actual) problems.push(where + ": expected " + JSON.stringify(example) + ", got " + JSON.stringify(actual));
}

describe("the runner contract (perf/manifest.ts)", () => {
  test("every id of ids.ts has a scenario, and every scenario has an id", () => {
    const scenarioIds = allScenarios().map((s: PerfScenario) => s.id).sort();
    const ids = SCENARIO_IDS.map((s: ScenarioIdInfo) => s.id).sort();
    expect(scenarioIds.filter((id: string) => ids.indexOf(id) < 0)).toEqual([]);
    expect(ids.filter((id: string) => scenarioIds.indexOf(id) < 0)).toEqual([]);
    expect(new Set(scenarioIds).size).toBe(scenarioIds.length);
  });
  test("revs.json is current (node perf/scenarios/revs.ts exits 0)", () => {
    const res = node([path.join(runnerRoot, "perf", "scenarios", "revs.ts")]);
    expect(res.stderr).toBe("");
    expect(res.status).toBe(0);
  });
  test("every suite lists its ids, and its cwd, script and config exist in the runner", () => {
    const m = manifest({ PERF_MACHINE_EXTRA: "x" });
    expect(m.product).toBe(product);
    expect(m.contract).toBe(contractVersion);
    expect(m.resultSchema).toBe(resultSchema);
    expect(Object.keys(m.suites).sort()).toEqual(SUITES.slice().sort());
    SUITES.forEach((suite: string) => {
      const s = m.suites[suite];
      expect(s.ids).toEqual(idsOfSuite(suite as any));
      expect(fs.existsSync(path.join(runnerRoot, s.cwd)), s.cwd).toBe(true);
      expect(fs.existsSync(path.join(runnerRoot, s.script)), s.script).toBe(true);
    });
    // A caller runs `node <root>/<script> <args>` in <root>/<cwd>: Playwright reads -c from cwd.
    const react = m.suites.react;
    expect(react.args.slice(0, 2)).toEqual(["test", "-c"]);
    expect(fs.existsSync(path.join(runnerRoot, react.cwd, react.args[2]))).toBe(true);
    expect(m.machine.chromium).toBeNull();
    expect(m.machine.key).toMatch(/-x$/);
  });
  test("the creator builds name scripts of their package and folders of the runner", () => {
    const m = manifest();
    m.builds.forEach((b: any) => {
      const pkg = JSON.parse(fs.readFileSync(path.join(runnerRoot, b.cwd, "package.json"), "utf8"));
      b.commands.forEach((c: string) => {
        const script = /^npm run ([\w:-]+)$/.exec(c);
        expect(script, c).not.toBeNull();
        expect(pkg.scripts[(script as any)[1]], b.cwd + ": " + c).toBeDefined();
      });
      expect(b.dir.indexOf(b.cwd + "/"), b.dir).toBe(0);
      b.src.forEach((dir: string) => expect(fs.existsSync(path.join(runnerRoot, dir)), dir).toBe(true));
      (b.suites || []).forEach((suite: string) => expect(SUITES).toContain(suite));
    });
    m.install.concat(...m.builds.map((b: any) => b.install)).forEach((c: string) => expect(c).toBe("npm install"));
  });
  test("the manifest's variables, folders and inputs are the ones the suites use (harness/node/build.ts)", () => {
    const m = manifest();
    const rel = (dirs: Array<string>): Array<string> => dirs.map((d: string) => path.relative(runnerRoot, d).split(path.sep).join("/"));
    expect(m.builds.map((b: any) => b.env)).toEqual([targetVariables.creatorCore, targetVariables.ui]);
    expect(m.library.builds.map((b: any) => b.env)).toEqual([targetVariables.core, targetVariables.libraryUi]);
    expect(m.builds.map((b: any) => b.src)).toEqual([rel(creatorCoreSrc), rel(uiSrc)]);
    expect(m.builds.map((b: any) => b.dir)).toEqual(rel([runnerCreatorCoreBuild, runnerUiBuild]));
    // `bundles` are the survey-core subpaths creator-core's src imports: rollup keeps only the bare survey-core external.
    const imported = new Set<string>();
    const walk = (d: string): void => fs.readdirSync(d, { withFileTypes: true }).forEach((e: any) => {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (/\.tsx?$/.test(e.name)) {
        for (const x of fs.readFileSync(full, "utf8").matchAll(/from\s+["'](survey-core\/[^"']+)["']/g)) imported.add(x[1]);
      }
    });
    creatorCoreSrc.forEach(walk);
    expect(m.builds[0].bundles).toEqual([...imported].sort());
    expect(bundledCoreParts.map((p: string) => p.split(path.sep).join("/")).filter((p: string) => !p.startsWith("fesm/")).map((p: string) => "survey-core/" + p).sort())
      .toEqual(m.builds[0].bundles);
  });
  // The library commands are scripts of the sibling checkout's packages, when there is one (the runner may have none).
  const library = path.join(runnerRoot, "..", "survey-library");
  test.skipIf(!fs.existsSync(path.join(library, "packages", "survey-core", "package.json")))("the library builds name scripts of the sibling survey-library", () => {
    manifest().library.builds.forEach((b: any) => {
      const pkg = JSON.parse(fs.readFileSync(path.join(library, b.cwd, "package.json"), "utf8"));
      expect(pkg.name).toBe(b.package);
      b.commands.forEach((c: string) => expect(pkg.scripts[c.replace(/^npm run /, "")], b.cwd + ": " + c).toBeDefined());
    });
  });
  test("node perf/manifest.ts prints JSON with the keys and values of CONTRACT.md's example", () => {
    const res = node([path.join(runnerRoot, "perf", "manifest.ts")], { PERF_MACHINE_EXTRA: "y" });
    expect(res.stderr).toBe("");
    expect(res.status).toBe(0);
    const printed = JSON.parse(res.stdout);
    expect(printed).toEqual(manifest({ PERF_MACHINE_EXTRA: "y" }));
    const problems: Array<string> = [];
    compareWithExample(contractExample(), printed, "manifest", problems);
    expect(problems).toEqual([]);
  });
  test("the example check sees a missing key, a changed value and a key the example lacks", () => {
    const problems: Array<string> = [];
    compareWithExample({ a: 1, b: { c: "...", "...": "..." }, d: ["..."] }, { a: 2, b: {}, d: [1, 2], e: 0 }, "m", problems);
    expect(problems).toEqual(["m.a: expected 1, got 2", "m.b.c: missing", "m.e: not in the example"]);
  });
  test("the core hang guard is 5 minutes per scenario process", () => {
    expect(scenarioTimeoutMs).toBe(300000);
  });
});
