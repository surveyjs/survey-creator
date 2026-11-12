import { describe, test, expect } from "vitest";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { median, min, max, mad, p75, summarize } from "./stats.ts";
import { sampleLoop, scenarioDriver } from "./sample.ts";
import type { SampleDriver } from "./sample.ts";
import { installFunnels } from "./counters.ts";
import { installCreatorFunnels, installSurveysCreated, surveyFunnels } from "./funnels.ts";
import { SCENARIO_IDS, FIXTURE_KEYS, GROUPS, CUT_ORDER, idsOfSuite, splitOnly, suitesOf, TYPICAL_SELECT_CORE, TYPICAL_SELECT_REACT } from "./ids.ts";
import { defineScenarios, fixtureOfId, missingRequirement, hasRequirement, scenarioIdPattern } from "./scenario.ts";
import { machineKey, slug } from "./node/machine.ts";
import { dependencyInfo, reportedPackages } from "./node/deps.ts";
import { parseOnly, readEnv } from "./node/env.ts";
import { followLink, resolveTargetDir, runnerCreatorCoreBuild, runnerRoot } from "./node/build.ts";
import { importRunnerModules } from "./node/modules.ts";
import { VENDORED, SOURCE_COMMIT, diffHunks, splitLines } from "./sync.ts";

// The cases of survey-library's perf/harness/harness.test.ts that apply to the copied files, and the creator's own:
// requires, the ids and their pattern, splitOnly, the funnels, the target dirs.
const modules = await importRunnerModules();
const Survey = modules.Survey;
const Creator = modules.Creator;

describe("stats", () => {
  test("median, min, max, MAD, p75", () => {
    const v = [5, 1, 4, 2, 3];
    expect(median(v)).toBe(3);
    expect(median([1, 2, 3, 4])).toBe(2.5);
    expect(min(v)).toBe(1);
    expect(max(v)).toBe(5);
    expect(mad(v)).toBe(1);
    expect(p75(v)).toBe(4);
    expect(summarize([1.234, 2.345, 3.456])).toEqual({ median: 2.35, min: 1.23, max: 3.46, mad: 1.11, p75: 2.9 });
  });
});

describe("the sample loop", () => {
  // A fake clock: every sample takes `ms`.
  const fake = (ms: number): { driver: SampleDriver, now: () => number } => {
    let t = 0;
    return {
      now: (): number => t,
      driver: {
        sample: async(): Promise<any> => { t += ms; return { ms: ms }; },
        counterRun: async(): Promise<any> => ({ rows: { value: 1, kind: "work" } })
      }
    };
  };
  test("order: warm-ups, samples, counter run, and nothing else", async() => {
    const f = fake(100);
    const res = await sampleLoop(f.driver, { warmup: 2, samples: 12, maxMs: 5000, minSamples: 5, now: f.now });
    expect(res.log).toEqual(["warmup", "warmup"].concat(new Array(12).fill("sample"), ["counters"]));
    expect(res.samples.length).toBe(12);
    expect(res.warmups.length).toBe(2);
  });
  test("maxMs is wall time from the first warm-up; at least minSamples are kept", async() => {
    const slow = fake(2000);
    const res = await sampleLoop(slow.driver, { warmup: 2, samples: 12, maxMs: 5000, minSamples: 5, now: slow.now });
    expect(res.samples.length).toBe(5);
    const mid = fake(600);
    // 2 warm-ups (1,200 ms), then samples until 5,000 ms: 7 samples (5,400 ms).
    expect((await sampleLoop(mid.driver, { warmup: 2, samples: 12, maxMs: 5000, minSamples: 5, now: mid.now })).samples.length).toBe(7);
  });
  test("one sample: setup -> gc -> run -> check -> teardown; check runs after warm-ups too; counters come from the counter run", async() => {
    const log: Array<string> = [];
    const s = defineScenarios([{
      id: "huge/load/json", rev: 1, fixture: "huge", kind: "load",
      setup: () => { log.push("setup"); return {}; },
      run: () => { log.push("run"); },
      check: () => { log.push("check"); },
      teardown: () => { log.push("teardown"); },
      counters: () => ({ own: { value: 7, kind: "work" } })
    }])[0];
    let t = 0;
    const ctx: any = { Survey: Survey, Creator: Creator, fixture: {}, platform: "node", now: () => t, cache: {} };
    const driver = scenarioDriver(s, ctx, { now: () => ++t, gc: () => { log.push("gc"); }, installFunnels: () => installCreatorFunnels(ctx) });
    const res = await sampleLoop(driver, { warmup: 1, samples: 5, maxMs: 100000, minSamples: 5, now: () => t });
    expect(log.slice(0, 5)).toEqual(["setup", "gc", "run", "check", "teardown"]);
    expect(log.filter((x: string) => x === "check").length).toBe(1 + 5 + 1);
    expect(res.counters.own).toEqual({ value: 7, kind: "work" });
    expect(res.counters.conditionRuns).toEqual({ value: 0, kind: "work" });
    expect(res.counters.surveysCreated).toEqual({ value: 0, kind: "work" });
  });
  test("a scenario without check, or with a fixture its id does not name, throws at registration", () => {
    expect(() => defineScenarios([{ id: "huge/load/json", rev: 1, fixture: "huge", kind: "load", setup: () => 1, run: () => 1 } as any])).toThrow(/no check/);
    expect(() => defineScenarios([{ id: "huge/load/json", rev: 1, fixture: "typical", kind: "load", setup: () => 1, run: () => {}, check: () => {} }]))
      .toThrow(/names fixture typical/);
  });
});

describe("requires", () => {
  test("an entry is met by a Serializer property, or by a member of an exported class's prototype", () => {
    class Model {
      get shown(): boolean { return true; }
    }
    const fake = {
      Survey: { Serializer: { findProperty: (cls: string, prop: string) => (cls === "matrixdynamic" && prop === "pageSize" ? {} : null) } },
      Creator: { SurveyCreatorModel: Model }
    };
    expect(missingRequirement(fake, ["matrixdynamic.pageSize", "SurveyCreatorModel.shown"])).toBe("");
    expect(missingRequirement(fake, ["matrixdynamic.pageSize", "paneldynamic.pageSize"])).toBe("not in this build: paneldynamic.pageSize");
    expect(missingRequirement(fake, ["SurveyCreatorModel.hidden"])).toBe("not in this build: SurveyCreatorModel.hidden");
    expect(missingRequirement(fake, ["NoSuchClass.shown"])).toBe("not in this build: NoSuchClass.shown");
    // A creator entry needs the creator module: a scenario context always has it.
    expect(missingRequirement({ Survey: fake.Survey }, ["SurveyCreatorModel.shown"])).toBe("not in this build: SurveyCreatorModel.shown");
    expect(missingRequirement(fake, undefined)).toBe("");
    expect(() => hasRequirement(fake, "SurveyCreatorModel")).toThrow(/<Class>.<member>/);
    expect(() => hasRequirement(fake, "SurveyCreatorModel.")).toThrow(/<Class>.<member>/);
  });
  test("on the runner's builds", () => {
    // expandCollapseButtonVisibility is a @property of the creator model, not a Serializer property; old builds lack it.
    expect(missingRequirement(modules, ["SurveyCreatorModel.expandCollapseButtonVisibility", "question.isRequired", "SurveyModel.setJsonObject",
      "QuestionToolbox.orderedQuestions", "matrixdynamic.pageSize"])).toBe("");
    expect(missingRequirement(modules, ["SurveyCreatorModel.noSuchMember"])).toBe("not in this build: SurveyCreatorModel.noSuchMember");
    // Instance fields are not on the prototype: they are met through a live creator only.
    const fields = ["SurveyCreatorModel.autoSaveDelay", "SurveyCreatorModel.animationEnabled", "SurveyCreatorModel.onModified"];
    expect(missingRequirement(modules, fields)).toBe("not in this build: SurveyCreatorModel.autoSaveDelay");
    const creator = new Creator.SurveyCreatorModel({});
    const withCreator = { Survey: Survey, Creator: Creator, instances: { SurveyCreatorModel: creator } };
    expect(missingRequirement(withCreator, fields)).toBe("");
    expect(missingRequirement(withCreator, ["SurveyCreatorModel.noSuchMember"])).toBe("not in this build: SurveyCreatorModel.noSuchMember");
    creator.dispose();
  });
});

describe("ids", () => {
  test("unique, every id matches the pattern and names a known fixture, no id is in no suite", () => {
    const ids = SCENARIO_IDS.map((s: any) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    ids.forEach((id: string) => expect(scenarioIdPattern.test(id), id).toBe(true));
    ids.forEach((id: string) => expect(FIXTURE_KEYS as ReadonlyArray<string>).toContain(fixtureOfId(id)));
    SCENARIO_IDS.forEach((s: any) => expect(s.suites.length, s.id).toBeGreaterThan(0));
    expect(idsOfSuite("core").length + idsOfSuite("react").length).toBe(SCENARIO_IDS.reduce((n: number, s: any) => n + s.suites.length, 0));
  });
  test("the phase-1 list of 00, The scenarios", () => {
    expect(idsOfSuite("core")).toEqual([
      "huge/edit/add-question", "huge/edit/property", "huge/load/json", "huge/output/dispose", "huge/output/text", "huge/select/element@q3978",
      "huge/tabs/designer", "huge/tabs/json", "huge/tabs/logic", "huge/tabs/preview", "huge/tabs/roundtrip", "huge/tabs/translation",
      "locales/load/json", "locales/tabs/translation",
      "typical/edit/add-question", "typical/edit/convert@dropdown1", "typical/edit/delete", "typical/edit/property", "typical/edit/undo-redo",
      "typical/load/json", "typical/select/element@checkbox1", "typical/select/element@dropdown1", "typical/select/element@matrixdynamic1",
      "typical/select/element@page1", "typical/select/element@panel1", "typical/select/element@paneldynamic1", "typical/select/element@survey",
      "typical/select/element@text1", "typical/tabs/theme"
    ]);
    expect(idsOfSuite("react")).toEqual([
      "huge/designer/collapse-all", "huge/designer/expand-all", "huge/designer/object-selector", "huge/edit/add-question", "huge/edit/property",
      "huge/load/paint", "huge/select/element@q3978", "huge/tabs/designer", "huge/tabs/json", "huge/tabs/logic", "huge/tabs/preview",
      "huge/tabs/roundtrip", "huge/tabs/translation", "locales/tabs/translation",
      "typical/edit/add-question", "typical/edit/delete", "typical/edit/property", "typical/edit/title-type", "typical/load/paint",
      "typical/select/element@matrixdynamic1", "typical/select/element@survey", "typical/select/element@text1", "typical/tabs/theme"
    ]);
    expect(TYPICAL_SELECT_CORE.length).toBe(8);
    TYPICAL_SELECT_REACT.forEach((t: string) => expect(TYPICAL_SELECT_CORE).toContain(t));
  });
  test("the pattern: the fixture keys and the groups of 00, an optional @target", () => {
    expect(scenarioIdPattern.test("typical/select/element@matrix_1")).toBe(true);
    FIXTURE_KEYS.forEach((key: string) => GROUPS.forEach((group: string) => expect(scenarioIdPattern.test(key + "/" + group + "/op")).toBe(true)));
    ["large/load/model", "huge/answer/first", "huge/load/json@", "huge/load/js on", "extra/x/load/json", "huge/load", "Huge/load/json"]
      .forEach((id: string) => expect(scenarioIdPattern.test(id), id).toBe(false));
    expect(() => fixtureOfId("large/load/model")).toThrow(/Not a scenario id/);
  });
  test("CUT_ORDER: known ids, each once, the typical/select targets first, then typical twins of huge operations", () => {
    expect(new Set(CUT_ORDER).size).toBe(CUT_ORDER.length);
    CUT_ORDER.forEach((id: string) => expect(suitesOf(id).length, id).toBeGreaterThan(0));
    const selects = CUT_ORDER.filter((id: string) => id.indexOf("typical/select/") === 0);
    expect(CUT_ORDER.slice(0, selects.length)).toEqual(selects);
    expect(selects.length).toBe(TYPICAL_SELECT_CORE.length);
    CUT_ORDER.slice(selects.length).forEach((id: string) => {
      expect(id.indexOf("typical/")).toBe(0);
      expect(suitesOf(id.replace(/^typical\//, "huge/")).length, id + " has a huge twin").toBeGreaterThan(0);
    });
  });
  test("the PERF_ONLY split", () => {
    expect(parseOnly(" a , b,,")).toEqual(["a", "b"]);
    expect(parseOnly("")).toBeNull();
    expect(splitOnly(null, "core").run.length).toBe(idsOfSuite("core").length);
    expect(splitOnly(["huge/load/json", "typical/load/json", "huge/load/json"], "core")).toEqual({ run: ["huge/load/json", "typical/load/json"], notInSuite: [] });
    expect(() => splitOnly(["huge/load/nothing"], "core")).toThrow(/in no suite: huge\/load\/nothing$/);
    expect(() => splitOnly(["large/load/model"], "react")).toThrow(/in no suite/);
    // A suite with none of the ids runs nothing and lists the others as notInSuite.
    expect(splitOnly(["huge/load/json"], "react")).toEqual({ run: [], notInSuite: ["huge/load/json"] });
    expect(splitOnly(["huge/load/paint", "huge/load/json"], "core")).toEqual({ run: ["huge/load/json"], notInSuite: ["huge/load/paint"] });
    expect(suitesOf("huge/tabs/preview")).toEqual(["core", "react"]);
    expect(suitesOf("huge/designer/collapse-all")).toEqual(["react"]);
  });
});

describe("environment", () => {
  test("the creator's variables", () => {
    const env = readEnv({ PERF_CORE_DIR: "a", PERF_LIB_UI_DIR: "b", PERF_CREATOR_CORE_DIR: "c", PERF_UI_DIR: "d", PERF_LIB_COMMIT: "abc", PERF_TARGET_COMMIT: "" });
    expect([env.coreDir, env.libUiDir, env.creatorCoreDir, env.uiDir, env.libCommit, env.targetCommit]).toEqual(["a", "b", "c", "d", "abc", null]);
    expect(readEnv({}).libCommit).toBeNull();
    expect(() => readEnv({ PERF_KIND: "weekly" })).toThrow(/PERF_KIND/);
  });
  test("target dirs: defaults follow the junctions; a dangling junction names itself and its target", () => {
    expect(resolveTargetDir("core", "").dir).toBe(modules.coreDir);
    expect(resolveTargetDir("core", "").isRunnerBuild).toBe(true);
    expect(resolveTargetDir("creatorCore", "").dir).toBe(runnerCreatorCoreBuild);
    expect(resolveTargetDir("creatorCore", runnerCreatorCoreBuild).isRunnerBuild).toBe(true);
    expect(resolveTargetDir("core", os.tmpdir()).isRunnerBuild).toBe(false);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "perf-link-"));
    const target = path.join(dir, "target");
    const link = path.join(dir, "node_modules", "survey-core");
    fs.mkdirSync(target);
    fs.mkdirSync(path.dirname(link));
    fs.symlinkSync(target, link, "junction");
    expect(followLink(link)).toBe(fs.realpathSync(target));
    fs.rmSync(target, { recursive: true, force: true });
    expect(() => followLink(link)).toThrow(/^Dangling link .*survey-core -> .*target: the target does not exist/);
    expect(() => followLink(path.join(dir, "node_modules", "nothing"))).toThrow(/^Missing .*nothing/);
    fs.rmSync(dir, { recursive: true, force: true });
  });
});

describe("machine", () => {
  test("the key is a slug of os, CPU, cores, Node and Chromium majors and the extra", () => {
    expect(slug("Intel(R) Core(TM) i7-1185G7 @ 3.00GHz")).toBe("intel-core-i7-1185g7-3.00ghz");
    const key = machineKey({ os: "linux-6", cpu: "AMD Ryzen 9 7950X 16-Core Processor", cores: 32, availableParallelism: 8, node: "24.11.1",
      chromium: "140.0.7339.16", extra: "surveyjs-perf:1.60.0-abc1234 2-5" });
    expect(key).toBe("linux-6-amd-ryzen-9-7950x-16-core-processor-32c-node24-chromium140-surveyjs-perf-1.60.0-abc1234-2-5");
    expect(key).toMatch(/^[a-z0-9.-]+$/);
  });
});

describe("deps", () => {
  test("the fingerprint lists external packages only: no own version, no linked survey-core", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "perf-deps-"));
    const pkg = (at: string, name: string, version: string): void => {
      fs.mkdirSync(at, { recursive: true });
      fs.writeFileSync(path.join(at, "package.json"), JSON.stringify({ name: name, version: version }));
    };
    pkg(dir, "survey-creator-core", "3.2.3");
    pkg(path.join(dir, "node_modules", "rollup"), "rollup", "4.34.8");
    pkg(path.join(dir, "node_modules", "@types", "node"), "@types/node", "7.0.4");
    const build = path.join(dir, "core-build");
    pkg(build, "survey-core", "3.2.3");
    fs.symlinkSync(build, path.join(dir, "node_modules", "survey-core"), "junction");
    const a = dependencyInfo([dir]);
    expect(a.versions).toEqual({ rollup: "4.34.8" });
    // The release bump: the package's own version and the linked build's.
    pkg(dir, "survey-creator-core", "3.2.4");
    pkg(build, "survey-core", "3.2.4");
    expect(dependencyInfo([dir]).fingerprint).toBe(a.fingerprint);
    pkg(path.join(dir, "node_modules", "rollup"), "rollup", "4.35.0");
    expect(dependencyInfo([dir]).fingerprint).not.toBe(a.fingerprint);
    expect(dependencyInfo([]).fingerprint).toBeNull();
    // The creator's runtimes are reported.
    pkg(path.join(dir, "node_modules", "jsdom"), "jsdom", "25.0.1");
    pkg(path.join(dir, "node_modules", "react"), "react", "19.1.0");
    pkg(path.join(dir, "node_modules", "react-dom"), "react-dom", "19.1.0");
    expect(dependencyInfo([dir]).versions).toEqual({ "rollup": "4.35.0", "jsdom": "25.0.1", "react": "19.1.0", "react-dom": "19.1.0" });
    expect(reportedPackages).toEqual(expect.arrayContaining(["jsdom", "react", "react-dom"]));
    fs.rmSync(dir, { recursive: true, force: true });
  });
});

describe("the copied harness", () => {
  test("VENDORED.md lists the files of sync.ts, with their source commit and mode", () => {
    const md = fs.readFileSync(path.join(runnerRoot, "perf", "harness", "VENDORED.md"), "utf8");
    const rows = md.split(/\r?\n/).filter((line: string) => /^\| `/.test(line)).map((line: string) => line.split("|").map((c: string) => c.trim()));
    expect(rows.map((r: Array<string>) => [r[1], r[2], r[3]])).toEqual(VENDORED.map((v: any) => ["`" + v.file + "`", "`perf/" + v.file + "@" + SOURCE_COMMIT + "`", v.mode]));
    VENDORED.forEach((v: any) => expect(fs.existsSync(path.join(runnerRoot, "perf", v.file)), v.file).toBe(true));
  });
  test("sync.ts hunks: line endings are no difference; a change shows its old and new lines with context", () => {
    expect(diffHunks(splitLines("a\r\nb\r\n"), splitLines("a\nb\n"))).toEqual([]);
    const a = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const b = a.slice();
    b[4] = "five";
    expect(diffHunks(a, b)).toEqual(["@@ -2,7 +2,7 @@", " 2", " 3", " 4", "-5", "+five", " 6", " 7", " 8"]);
    expect(diffHunks(["x"], [])).toEqual(["@@ -1,1 +0,0 @@", "-x"]);
  });
});

describe("counter funnels", () => {
  test("conditionRuns and expressionRuns on survey-core: reached on a tiny survey, and uninstalled after", () => {
    expect(surveyFunnels.map((f: any) => f.name)).toEqual(["conditionRuns", "expressionRuns"]);
    const f = installFunnels(Survey, surveyFunnels);
    try {
      const survey = new Survey.Model({
        elements: [
          { type: "text", name: "a", visibleIf: "{b} = 1" },
          { type: "text", name: "b" },
          // On master element conditions run through ExpressionRunner; a filter runs through ConditionRunner.
          { type: "expression", name: "f", expression: "countInArray({m}, 'c', {c} = 1)" },
          { type: "matrixdynamic", name: "m", rowCount: 2, columns: [{ name: "c" }] }
        ]
      });
      survey.setValue("b", 1);
      survey.setValue("m", [{ c: 1 }, { c: 2 }]);
      const counts = f.read();
      expect(counts.conditionRuns).toBeGreaterThan(0);
      expect(counts.expressionRuns).toBeGreaterThan(0);
    } finally {
      f.uninstall();
    }
    expect(Object.prototype.hasOwnProperty.call(Survey.ExpressionRunner.prototype, "runContextCore")).toBe(false);
  });
  test("surveysCreated counts per reason through createSurvey; reset clears the reasons; uninstall restores the prototype", () => {
    const proto = Creator.SurveyCreatorModel.prototype;
    const original = proto.createSurvey;
    const f = installCreatorFunnels(modules);
    try {
      const creator = new Creator.SurveyCreatorModel({});
      creator.JSON = { elements: [{ type: "text", name: "a" }] };
      const read = f.read();
      expect(read.surveysCreated).toBeGreaterThan(0);
      expect(read["surveysCreated.designer"]).toBeGreaterThan(0);
      const reasons = Object.keys(read).filter((k: string) => k.indexOf("surveysCreated.") === 0);
      expect(reasons.reduce((n: number, k: string) => n + (read[k] as number), 0)).toBe(read.surveysCreated);
      f.reset();
      expect(f.read()).toEqual({ conditionRuns: 0, expressionRuns: 0, surveysCreated: 0 });
      creator.dispose();
    } finally {
      f.uninstall();
    }
    expect(proto.createSurvey).toBe(original);
  });
  test("a funnel the build lacks gives null", () => {
    const missing = installCreatorFunnels({ Survey: {}, Creator: {} });
    expect(missing.read()).toEqual({ conditionRuns: null, expressionRuns: null, surveysCreated: null });
    missing.uninstall();
    expect(installSurveysCreated(undefined).read()).toEqual({ surveysCreated: null });
  });
});
