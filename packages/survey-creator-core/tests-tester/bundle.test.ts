// The guards of prompt 06 section 3 and the consumability check of section 6, over the *built*
// artefact rather than over the sources.
//
// The ESLint fences of prompt 01 stop the source-level mistake and tests-tester/fences.test.ts says
// the same of the whole import graph. Neither can see a rollup mistake: a `resolve` that inlined
// main-bundle code, or an `external` entry that went missing, produces a bundle that carries the
// creator while every source file in it is innocent. So this reads the file.
//
// It is skipped when build/tester.js is absent, because `npm run test` is expected to pass in a clean
// checkout that has never been built. It is not skipped in CI, where the build runs first - and
// `describe.skip` prints the reason, so a run that quietly checked nothing still says so.
import { describe, expect, it } from "vitest";
import { createRequire } from "module";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { sample as conditional } from "./samples/01-conditional-visibility";
import { formatSuite, TesterHostStub } from "./model/testerHostStub";

const bundlePath = resolve(__dirname, "../build/tester.js");
const built = existsSync(bundlePath);
const suite = built ? describe : describe.skip;

// Comments are prose about the design and name plenty of things the bundle may not contain - this
// file's own entry comment names `survey-creator-core` four times. The check is about what the code
// says, so they come out first, exactly as tests-tester/checkLayers.ts does it for the sources.
function codeOf(text: string): string {
  return text.replace(/\r/g, "").replace(/\/\*[\s\S]*?\*\//g, "").split("\n")
    .map(line => line.replace(/(^|[^:])\/\/.*$/, "$1")).join("\n");
}

suite("the built tester bundle", () => {
  it("carries no creator code at all", () => {
    const code = codeOf(readFileSync(bundlePath, "utf8"));

    // The two names that would be in it if the main bundle had been inlined: the creator model itself,
    // and the string table the widget is forbidden to use.
    expect(code, "the bundle inlines the creator model").not.toContain("SurveyCreatorModel");
    expect(code, "the bundle inlines the creator's string table").not.toContain("editorLocalization");

    // And the specifier, in each of the three spellings a UMD wrapper writes it in. Marking the
    // creator external instead of removing the import would leave exactly these behind, which is why
    // the assertion is about the require and not about the word: the version check the entry runs
    // passes "survey-creator-core-tester" as a string, and that one is fine.
    expect(code).not.toMatch(/require\(\s*["']survey-creator-core["']\s*\)/);
    expect(code).not.toMatch(/from\s*["']survey-creator-core["']/);
    expect(code).not.toMatch(/define\(\[[^\]]*["']survey-creator-core["']/);
  });

  it("keeps survey-core and its tester engine outside itself", () => {
    const code = codeOf(readFileSync(bundlePath, "utf8"));

    // The other half of the same rule. Both are peers of this package: inlining survey-core/tester
    // would give a host two SurveyTestCommandFactory registries, and the guard is that the bundle
    // asks for both by name.
    expect(code).toMatch(/require\(\s*["']survey-core["']\s*\)/);
    expect(code).toMatch(/require\(\s*["']survey-core\/tester["']\s*\)/);
    // Something only the engine's own bundle defines. If it were inlined, this would be here.
    expect(code, "the bundle inlines survey-core/tester").not.toContain("class SurveyTestRunner");
  });

  it("bundles jsonc-parser and says so in its banner", () => {
    const text = readFileSync(bundlePath, "utf8");
    expect(text).not.toMatch(/require\(\s*["']jsonc-parser["']\s*\)/);
    expect(text.substring(0, 600)).toContain("jsonc-parser");
    expect(text.substring(0, 600)).toContain("MIT License");
  });

  // The stylesheet comes out beside the bundle, and the classes in it are the ones the models hand
  // out. Three spot-checks from three different areas of the mapping table in src/tester/README.md.
  it("emits the theme beside itself, under the names of the mapping table", () => {
    const cssPath = resolve(__dirname, "../build/tester.css");
    expect(existsSync(cssPath), "no build/tester.css beside the bundle").toBe(true);
    const css = readFileSync(cssPath, "utf8");
    ["svt-test-row", "svt-step", "svt-console__verb", "svt-steps__cursor", "svt-check-row--on"]
      .forEach(name => expect(css, "the theme says nothing about ." + name).toContain("." + name));
    // And nothing of the prototype's namespace survived the one renaming pass.
    expect(css).not.toMatch(/\.trow\b/);
    expect(css).not.toMatch(/\.svtr-/);
  });

  it("has an entry declaration a consumer can resolve", () => {
    const typings = resolve(__dirname, "../build/tester/index.d.ts");
    expect(existsSync(typings), "no build/tester/index.d.ts").toBe(true);
    const text = readFileSync(typings, "utf8");
    expect(text).toContain("SurveyTesterModel");
    expect(text).toContain("ITesterHost");
  });
});

// Section 6: the widget driven the way survey-creator-react will drive it in prompt 07 - through the
// built file, with survey-core resolved as a consumer resolves it. Finding an entry mistake here is an
// hour; finding it there is an afternoon.
suite("the built tester bundle, as a consumer uses it", () => {
  it("constructs the widget over a host and runs one test headlessly", async() => {
    const required = createRequire(__filename)("../build/tester.js");
    const Model = required.SurveyTesterModel;
    expect(typeof Model, "the entry exports no SurveyTesterModel").toBe("function");
    expect(typeof required.Version).toBe("string");
    expect(typeof required.testerText, "the entry exports no string accessor").toBe("function");

    const host = new TesterHostStub(conditional.surveyJson, formatSuite({
      name: "consumed",
      options: { clearInvisibleValues: "onComplete" },
      tests: [
        {
          name: "declines",
          steps: [
            { set: { hasInsurance: "no" } },
            { expect: { insuranceProvider: { visible: false } } },
          ],
        },
      ],
    }));

    const model = new Model(host);
    try {
      expect(model.canRun, "the built widget refused a valid suite").toBe(true);
      expect(model.runner.rowModelList.map((row: any) => row.name)).toEqual(["declines"]);

      model.startRun(undefined);
      await whenDone(model);

      expect(model.runner.rowModelList[0].status).toBe("passed");
      expect(model.runner.checkTotals.failed).toBe(0);
    } finally {
      model.dispose();
    }
  }, 60000);
});

function whenDone(model: any): Promise<void> {
  return new Promise<void>((done, fail) => {
    const until = Date.now() + 30000;
    const tick = (): void => {
      if (model.runner.phase === "done") done();
      else if (Date.now() > until) fail(new Error("the run never finished"));
      else setTimeout(tick, 5);
    };
    tick();
  });
}
