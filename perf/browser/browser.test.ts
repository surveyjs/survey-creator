import { describe, test, expect } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import { createRequire } from "node:module";
import { runnerRoot } from "../harness/node/build.ts";
import { idsOfSuite, suitesOf } from "../harness/ids.ts";
import { allScenarios } from "../scenarios/index.ts";
import type { PerfScenario } from "../harness/scenario.ts";
import { resolveUrl, parseResetOverride, browserDir, cacheDir, servedBuilds } from "./paths.ts";
import { pageBundleProblems, pageBundleLimit } from "./global-setup.ts";
import { sourceOf } from "../scenarios/revs.ts";

// perf:test for the react suite's Node side (03): the routes, the bundle check, the page, the ids, the config. The
// page itself runs only under Playwright (npm run perf:ci; PERF_NOOP_CHECK=1 for the no-op checks).
const require = createRequire(import.meta.url);

describe("the react page routes (paths.ts)", () => {
  const dirs: { [kind: string]: string } = {
    core: path.join(runnerRoot, "perf", "fixtures"), libraryUi: path.join(runnerRoot, "perf", "harness"),
    creatorCore: path.join(runnerRoot, "perf", "scenarios"), ui: path.join(runnerRoot, "perf", "core")
  };
  const dirOf = (kind: string): string => dirs[kind];
  test("each build root serves files of its own folder; the page files come from perf/browser/pages", () => {
    expect(resolveUrl("http://perf.local/core/huge.ts", dirOf)).toBe(path.join(dirs.core, "huge.ts"));
    expect(resolveUrl("http://perf.local/libui/ids.ts", dirOf)).toBe(path.join(dirs.libraryUi, "ids.ts"));
    expect(resolveUrl("http://perf.local/creator-core/options.ts", dirOf)).toBe(path.join(dirs.creatorCore, "options.ts"));
    expect(resolveUrl("http://perf.local/ui/run.ts", dirOf)).toBe(path.join(dirs.ui, "run.ts"));
    expect(resolveUrl("http://perf.local/page/react.html", dirOf)).toBe(path.join(browserDir, "pages", "react.html"));
  });
  test("anything else fails: another host or protocol, an unknown root, a folder, .., a missing file", () => {
    ["http://example.com/core/huge.ts", "https://perf.local/core/huge.ts", "http://perf.local/other/huge.ts", "http://perf.local/core/",
      "http://perf.local/core/..%5Cfixtures%5Chuge.ts", "http://perf.local/core/nope.js",
      "http://perf.local/react19/other.js", "http://perf.local/page/../browser/paths.ts"]
      .forEach((url: string) => expect(resolveUrl(url, dirOf), url).toBeUndefined());
  });
  test("/react19/ and /page/perf-page.js are the global setup's bundles in the cache", () => {
    fs.mkdirSync(cacheDir, { recursive: true });
    ["react19.js", "perf-page.js"].forEach((name: string) => {
      const file = path.join(cacheDir, name);
      const existed = fs.existsSync(file);
      if (!existed) fs.writeFileSync(file, "");
      try {
        expect(resolveUrl("http://perf.local/" + (name === "react19.js" ? "react19/" : "page/") + name, dirOf)).toBe(file);
      } finally {
        if (!existed) fs.unlinkSync(file);
      }
    });
  });
  test("react.html loads only perf.local paths, the minified builds, and the page bundle first", () => {
    const html = fs.readFileSync(path.join(browserDir, "pages", "react.html"), "utf8");
    const refs = Array.from(html.matchAll(/(?:src|href)="([^"]+)"/g)).map((m: RegExpMatchArray) => m[1]);
    expect(refs[0]).toBe("/page/perf-page.js");
    refs.forEach((ref: string) => expect(ref.charAt(0) === "/" && ref.charAt(1) !== "/", ref).toBe(true));
    const served = Object.keys(servedBuilds).flatMap((root: string) => servedBuilds[root].files.map((f: string) => "/" + root + "/" + f.replace(/\\/g, "/")));
    served.forEach((file: string) => expect(refs, file).toContain(file));
    refs.filter((r: string) => /\.js$/.test(r) && !/^\/(page|react19)\//.test(r)).forEach((r: string) => expect(r, r).toMatch(/\.min\.js$/));
  });
});

describe("the page bundle check (global-setup.ts)", () => {
  test("a small bundle of harness and scenario files passes", () => {
    expect(pageBundleProblems("var x = 1;", ["perf/browser/page-entry.ts", "perf/scenarios/select.ts"])).toEqual([]);
  });
  test("creator or survey-core code, fixture data, fixture or package inputs and the size limit each fail", () => {
    expect(pageBundleProblems("class SurveyCreatorModel extends Base {}", [])[0]).toMatch(/survey-creator-core code/);
    expect(pageBundleProblems("class SurveyModel {}", [])[0]).toMatch(/survey-core code/);
    expect(pageBundleProblems("{\"name\":\"q2187\"}", [])[0]).toMatch(/fixture data/);
    expect(pageBundleProblems("", ["perf/fixtures/huge.ts"])[0]).toMatch(/fixture file/);
    expect(pageBundleProblems("", ["node_modules/react/index.js"])[0]).toMatch(/package file/);
    expect(pageBundleProblems("", ["../../packages/survey-creator-core/src/creator-base.ts"])[0]).toMatch(/package file/);
    expect(pageBundleProblems("x".repeat(pageBundleLimit + 1), [])[0]).toMatch(/over the/);
  });
});

describe("the react scenarios", () => {
  const scenarios = allScenarios();
  const react = idsOfSuite("react");
  test("every react id has a scenario; the browser-only ones are in no other suite", () => {
    react.forEach((id: string) => expect(scenarios.some((s: PerfScenario) => s.id === id), id).toBe(true));
    const browserOnly = react.filter((id: string) => /\/load\/paint$|\/designer\/|\/edit\/title-type$/.test(id));
    expect(browserOnly.length).toBe(6);
    browserOnly.forEach((id: string) => expect(suitesOf(id), id).toEqual(["react"]));
  });
  test("every react scenario names selectors.ts in uses, so its selectors are part of its rev hash", () => {
    scenarios.filter((s: PerfScenario) => react.indexOf(s.id) > -1)
      .forEach((s: PerfScenario) => expect(s.uses || [], s.id).toContain("selectors"));
  });
  test("a load and a tab's first visit get a fresh page per sample; the round trip a new creator; the other actions restore", () => {
    const reset = (s: PerfScenario): string => (s.browser && s.browser.reset) || (s.kind === "load" ? "page" : "restore");
    scenarios.filter((s: PerfScenario) => react.indexOf(s.id) > -1).forEach((s: PerfScenario) => {
      const firstVisit = /\/tabs\/(?!designer$|roundtrip$)/.test(s.id);
      const expected = s.kind === "load" || firstVisit ? "page" : /\/tabs\/roundtrip$/.test(s.id) ? "creator" : "restore";
      expect(reset(s), s.id).toBe(expected);
    });
  });
  test("a function member of a helper object (selectors.tab) is part of the rev hash (R03-F5)", () => {
    const a = { tab: (id: string): string => "#tab-" + id, root: ".x" };
    const b = { tab: (id: string): string => "#other-" + id, root: ".x" };
    expect(sourceOf(a)).not.toBe(sourceOf(b));
    expect(sourceOf(a)).toMatch(/#tab-/);
  });
  test("PERF_RESET: <reset>:<ids>, several parts with ;, anything else refused", () => {
    expect(parseResetOverride(undefined)).toEqual({});
    expect(parseResetOverride("page:a/b/c, d/e/f;creator:g/h/i")).toEqual({ "a/b/c": "page", "d/e/f": "page", "g/h/i": "creator" });
    expect(() => parseResetOverride("fresh:a/b/c")).toThrow(/PERF_RESET/);
    expect(() => parseResetOverride("a/b/c")).toThrow(/PERF_RESET/);
  });
});

describe("the react config", () => {
  test("perfConfig: the perf spec only, one worker, no retries, the hang guard, 1600x900, no root config", () => {
    const { perfConfig } = require(path.join(browserDir, "playwright.perf.base.cjs"));
    const config = perfConfig("react");
    expect(config.testDir).toBe(browserDir);
    expect(config.testMatch).toBe("**/*.perf.spec.ts");
    expect([config.workers, config.retries, config.timeout]).toEqual([1, 0, 300000]);
    expect(config.use).toMatchObject({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
    expect(() => perfConfig("vue3")).toThrow(/one browser suite/);
    const pkgConfig = fs.readFileSync(path.join(runnerRoot, "packages", "survey-creator-react", "playwright.perf.config.ts"), "utf8");
    expect(pkgConfig).toMatch(/perfConfig\("react"\)/);
    expect(pkgConfig).not.toMatch(/from\s+["'][^"']*playwright\.config/);
  });
  test("the root Playwright projects' testDirs leave perf/ out", () => {
    const text = fs.readFileSync(path.join(runnerRoot, "playwright.config.ts"), "utf8");
    const dirs = Array.from(text.matchAll(/testDir:\s*(?:resolve\(__dirname,\s*)?["']([^"']+)["']/g)).map((m: RegExpMatchArray) => m[1]);
    expect(dirs.sort()).toEqual(["./accessibilityTests", "./e2e", "./screenshotLegacyTests", "./screenshotTests"]);
    dirs.forEach((d: string) => expect(path.resolve(runnerRoot, d).indexOf(path.join(runnerRoot, "perf")), d).toBe(-1));
  });
});
