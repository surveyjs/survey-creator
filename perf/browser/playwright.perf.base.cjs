/* eslint-env node */
// The Playwright config of the react perf suite (03), adapted from survey-library perf/browser/playwright.perf.base.cjs.
// It does not import the root playwright.config.ts: one worker, no retries, no webServer (the page is served by
// context.route from the target's builds).
// CommonJS on purpose: the package config is loaded as CommonJS, and a .ts file under perf/ ("type": "module") that
// it imported would be compiled to CommonJS and then run by Node as an ES module. The spec, the global setup and the
// reporter are ES modules that Playwright loads by path.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const browserDir = __dirname;
const resultsDir = path.join(browserDir, "..", "results");

function perfConfig(suite) {
  if (suite !== "react") throw new Error("The creator has one browser suite, react: " + suite);
  return {
    testDir: browserDir,
    testMatch: "**/*.perf.spec.ts",
    workers: 1,
    retries: 0,
    fullyParallel: false,
    // A hang guard (00, Measurement rules): a hung scenario fails alone and the rest of the suite runs; a suite
    // itself has no time limit.
    timeout: 5 * 60000,
    outputDir: path.join(resultsDir, "playwright"),
    // Every test is one scenario, minutes long on huge by design.
    reportSlowTests: null,
    globalSetup: path.join(browserDir, "global-setup.ts"),
    reporter: [["line"], [path.join(browserDir, "perf-reporter.ts")]],
    // The spec makes its own contexts with these (viewport 1600x900: lazy rendering depends on it).
    use: { browserName: "chromium", headless: true, viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1, reducedMotion: "reduce" }
  };
}

module.exports = { perfConfig };
