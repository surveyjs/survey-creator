import { describe, test, expect } from "vitest";
import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { pathToFileURL } from "node:url";
import { FIXTURE_KEYS, getFixture } from "./index.ts";
import { countJson, isLocaleObject } from "./meta.ts";
import { TOOLBOX_TYPES } from "./typical.ts";
import { hugeFile } from "./huge.ts";
import { sha1 } from "../harness/node/fixture-hash.ts";
import { runnerRoot } from "../harness/node/build.ts";
import { importRunnerModules } from "../harness/node/modules.ts";

// The fixture checks of 01 on the runner's survey-core build, imported by path as the core runner does (02).
const modules = await importRunnerModules();
const Survey = modules.Survey;
const fixtures = FIXTURE_KEYS.map((key: string) => getFixture(key));
const fixtureOf = (key: string): any => fixtures.filter((f: any) => f.key === key)[0];
const generated = ["typical", "locales"];

function loadQuietly(json: any): { survey: any, warnings: Array<string> } {
  const warnings: Array<string> = [];
  const warn = console.warn;
  const error = console.error;
  console.warn = (...args: Array<any>): void => { warnings.push("warn: " + String(args[0])); };
  console.error = (...args: Array<any>): void => { warnings.push("error: " + String(args[0])); };
  try {
    return { survey: new Survey.SurveyModel(json), warnings: warnings };
  } finally {
    console.warn = warn;
    console.error = error;
  }
}

function countTemplateElements(survey: any): number {
  const count = (elements: Array<any>): number => elements.reduce((n: number, el: any) => n + 1 + (el.isPanel ? count(el.elements) : 0), 0);
  return survey.getAllQuestions(false).filter((q: any) => q.getType() === "paneldynamic").reduce((n: number, q: any) => n + count(q.template.elements), 0);
}

// Every localizable property of a JSON object, by the class Serializer reads it as, with what was written there.
function localizableValues(json: any): Array<{ at: string, value: any, localizable: boolean }> {
  const res: Array<{ at: string, value: any, localizable: boolean }> = [];
  const walk = (obj: any, className: string, at: string): void => {
    Object.keys(obj).forEach((key: string) => {
      const value = obj[key];
      const prop = Survey.Serializer.findProperty(className, key);
      if (prop && prop.isLocalizable) {
        res.push({ at: at + "." + key, value: value, localizable: true });
        return;
      }
      if (isLocaleObject(value)) res.push({ at: at + "." + key, value: value, localizable: false });
      if (!Array.isArray(value) || !prop) return;
      value.forEach((item: any, i: number) => {
        if (!item || typeof item !== "object") return;
        const cls = item.type ? item.type + (prop.classNamePart || "") : prop.className;
        expect(Survey.Serializer.findClass(cls), at + "." + key + "[" + i + "]: class " + cls).toBeTruthy();
        walk(item, cls, at + "." + key + "[" + i + "]");
      });
    });
  };
  walk(json, "survey", "survey");
  return res;
}

describe("perf fixtures on the runner's survey-core build", () => {
  test("determinism: the same seed gives the same sha1 twice, another seed another one", () => {
    for (const key of FIXTURE_KEYS) {
      expect(sha1(JSON.stringify(getFixture(key).json)), key).toBe(sha1(JSON.stringify(fixtureOf(key).json)));
    }
    for (const key of generated) {
      expect(sha1(JSON.stringify(getFixture(key, { seed: 12345 }).json)), key + " another seed").not.toBe(sha1(JSON.stringify(fixtureOf(key).json)));
      expect(fixtureOf(key).options.seed, key).toBeGreaterThan(0);
    }
  });
  for (const key of FIXTURE_KEYS) {
    test(key + ": loads with no warning and no jsonErrors, and meta matches the loaded survey", () => {
      const fixture = fixtureOf(key);
      const { survey, warnings } = loadQuietly(fixture.json);
      expect(warnings, key).toEqual([]);
      expect(survey.jsonErrors, key).toBeNull();
      const meta = fixture.meta;
      const questions = survey.getAllQuestions(false);
      const panels = survey.getAllPanels();
      expect(survey.pages.length).toBe(meta.pages);
      expect(panels.length).toBe(meta.panels);
      expect(questions.length).toBe(meta.questions.all);
      expect(questions.filter((q: any) => q.parent && q.parent.isPage).length).toBe(meta.questions.topLevel);
      expect(meta.questions.topLevel + meta.questions.inPanels).toBe(meta.questions.all);
      expect(countTemplateElements(survey)).toBe(meta.questions.inTemplates);
      const types: any = {};
      questions.concat(panels).forEach((el: any) => { types[el.getType()] = (types[el.getType()] || 0) + 1; });
      expect(Object.keys(types).sort().map((t: string) => t + ":" + types[t])).toEqual(Object.keys(meta.types).map((t: string) => t + ":" + meta.types[t]));
      expect(survey.calculatedValues.length).toBe(meta.calculatedValues);
      expect(survey.triggers.length).toBe(meta.triggers);
      // The conditions survive the load: the survey's own JSON has the same ones.
      expect(countJson(survey.toJSON()).conditions).toEqual(meta.conditions);
      // getUsedLocales() always names the default locale; meta lists the locales the JSON writes.
      expect(survey.getUsedLocales().slice().sort()).toEqual(meta.locales.length > 0 ? meta.locales : ["en"]);
    });
  }
  test("huge: the e2e file's own counts", () => {
    const meta = fixtureOf("huge").meta;
    expect(fixtureOf("huge").options).toEqual({ source: "e2e/questions_4114.ts" });
    expect([meta.pages, meta.panels, meta.questions.all]).toEqual([109, 217, 4116]);
    // The distant question of huge/select/element@q3978: in a panel on page 106 of 109.
    const { survey } = loadQuietly(fixtureOf("huge").json);
    const q = survey.getQuestionByName("q3978");
    expect(q.getType()).toBe("checkbox");
    expect(q.page.name).toBe("106");
    expect(q.parent.isPanel).toBe(true);
  });
  test("typical: every type of the toolbox list at least twice, the planned shape, and stable target names", () => {
    const fixture = fixtureOf("typical");
    const { survey } = loadQuietly(fixture.json);
    const o = fixture.options;
    const counts: any = {};
    survey.getAllQuestions(false).concat(survey.getAllPanels()).forEach((el: any) => { counts[el.getType()] = (counts[el.getType()] || 0) + 1; });
    TOOLBOX_TYPES.forEach((type: string) => expect(counts[type] || 0, type).toBeGreaterThanOrEqual(2));
    const meta = fixture.meta;
    expect(meta.pages).toBe(o.pages);
    expect(meta.questions.all + meta.panels + meta.questions.inTemplates).toBe(o.elements);
    expect(meta.conditions.byProperty).toEqual({ enableIf: 5, requiredIf: 5, runExpression: 1, visibleIf: 20 });
    expect([meta.calculatedValues, meta.triggers]).toEqual([3, 3]);
    expect(meta.locales).toEqual(["de", "en", "fr"]);
    // The select targets of ids.ts (outside dynamic panel templates) and the edit/convert target.
    ["text1", "dropdown1", "checkbox1", "matrixdynamic1", "paneldynamic1"].forEach((name: string) => {
      const q = survey.getQuestionByName(name);
      expect(q, name).toBeTruthy();
      expect(q.getType() + "1").toBe(name);
      expect(q.parentQuestion, name).toBeFalsy();
    });
    expect(survey.getPanelByName("panel1")).toBeTruthy();
    expect(survey.getPageByName("page1")).toBeTruthy();
  });
  test("locales: 40 pages, 1,000 questions, most with choices, 6 locales", () => {
    const meta = fixtureOf("locales").meta;
    expect([meta.pages, meta.questions.all]).toEqual([40, 1000]);
    const choices = ["radiogroup", "checkbox", "dropdown", "tagbox"].reduce((n: number, t: string) => n + (meta.types[t] || 0), 0);
    expect(choices / meta.questions.all).toBeGreaterThan(0.7);
    expect(meta.locales).toEqual(["de", "en", "es", "fr", "it", "pt"]);
  });
  for (const key of generated) {
    test(key + ": every localizable string the generator writes has a value for each of its locales", () => {
      const fixture = fixtureOf(key);
      const expected = fixture.options.locales.map((l: string) => (l === "en" ? "default" : l)).sort();
      const values = localizableValues(fixture.json);
      expect(values.filter((v: any) => !v.localizable).map((v: any) => v.at), "locale objects on properties that are not localizable").toEqual([]);
      const bad = values.filter((v: any) => !isLocaleObject(v.value) || Object.keys(v.value).sort().join() !== expected.join());
      expect(bad.map((v: any) => v.at + ": " + JSON.stringify(v.value)).slice(0, 5)).toEqual([]);
      expect(values.length).toBe(fixture.meta.strings);
      if (key === "locales") expect(expected.length).toBe(6);
    });
    test(key + ": all texts are ASCII", () => {
      expect(JSON.stringify(fixtureOf(key).json)).toMatch(/^[\x20-\x7E]*$/);
    });
  }
  test("the toolbox list against the runner build's default toolbox (node perf/fixtures/toolbox-check.ts)", () => {
    const res = spawnSync(process.execPath, [path.join(runnerRoot, "perf", "fixtures", "toolbox-check.ts")], { encoding: "utf8" });
    expect(res.stderr).toBe("");
    expect(res.status).toBe(0);
    const report = JSON.parse(res.stdout);
    expect(report.creatorVersion).toBe(modules.Creator.Version);
    // Types the generator lacks are reported, not failed; a generator type the build lacks breaks the load above.
    expect(Array.isArray(report.notInGenerator)).toBe(true);
    expect(report.notInBuild).toEqual([]);
    expect(TOOLBOX_TYPES.length).toBe(new Set(TOOLBOX_TYPES).size);
  });
});

describe("loading the fixtures", () => {
  test("huge: the parsed file equals the module's export", () => {
    const code = "import { json } from " + JSON.stringify(pathToFileURL(hugeFile).href) + ";\n" +
      "import { readHugeJson } from " + JSON.stringify(pathToFileURL(path.join(runnerRoot, "perf", "fixtures", "huge.ts")).href) + ";\n" +
      "process.stdout.write(String(JSON.stringify(json) === JSON.stringify(readHugeJson())));";
    // The import of e2e/questions_4114.ts prints MODULE_TYPELESS_PACKAGE_JSON: that is why huge.ts reads the text.
    const res = spawnSync(process.execPath, ["--no-warnings", "--input-type=module", "-e", code], { encoding: "utf8" });
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe("true");
  });
  test("Node: an import of perf/fixtures/index.ts prints the metas with no warning", () => {
    const code = "import { FIXTURE_KEYS, getFixture } from " + JSON.stringify(pathToFileURL(path.join(runnerRoot, "perf", "fixtures", "index.ts")).href) + ";\n" +
      "FIXTURE_KEYS.forEach((key) => console.log(key + \" \" + JSON.stringify(getFixture(key).meta)));";
    const res = spawnSync(process.execPath, ["--input-type=module", "-e", code], { encoding: "utf8", cwd: runnerRoot });
    expect(res.stderr).toBe("");
    expect(res.status).toBe(0);
    expect(res.stdout.trim().split("\n").map((line: string) => line.split(" ")[0])).toEqual([...FIXTURE_KEYS]);
  });
  // esbuild compiles the fixture code (the .ts imports, import.meta.url). A bundle cannot load huge: it reads the e2e
  // file of the checkout at run time, relative to perf/fixtures/huge.ts. Nothing bundles the fixtures.
  test("esbuild compiles the fixture code for Node", async() => {
    const esbuild = await import(pathToFileURL(path.join(runnerRoot, "node_modules", "esbuild", "lib", "main.js")).href);
    const out = await esbuild.build({ entryPoints: [path.join(runnerRoot, "perf", "fixtures", "index.ts")], bundle: true, platform: "node",
      format: "esm", write: false, logLevel: "silent" });
    expect(out.errors).toEqual([]);
    expect(out.outputFiles[0].text).toContain("questions_4114.ts");
  });
  test("perf/scenarios imports nothing from perf/fixtures: the page bundle never contains a fixture", () => {
    const dir = path.join(runnerRoot, "perf", "scenarios");
    const files: Array<string> = [];
    const walk = (d: string): void => {
      if (!fs.existsSync(d)) return;
      fs.readdirSync(d, { withFileTypes: true }).forEach((e: fs.Dirent) => {
        const full = path.join(d, e.name);
        if (e.isDirectory()) walk(full);
        else if (/\.ts$/.test(e.name)) files.push(full);
      });
    };
    walk(dir);
    // Since 02 the folder has the scenarios: a scan that finds nothing would pass for the wrong reason.
    expect(files.length).toBeGreaterThan(0);
    const offenders = files.filter((f: string) => /(from|import)\s*\(?\s*["'][^"']*fixtures\//.test(fs.readFileSync(f, "utf8")));
    expect(offenders).toEqual([]);
  });
});
