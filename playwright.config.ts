import { defineConfig } from "@playwright/test";
import { resolve } from "path";

const shardIndex = process.env.PLAYWRIGHT_SHARD_INDEX || "results";

// Playwright's private worker option behind PW_TEST_REUSE_CONTEXT, typed here because Playwright doesn't declare it.
type ContextReuseOption = { _optionContextReuseMode: "none" | "when-possible" };

export default defineConfig<object, ContextReuseOption>({
  retries: 4,
  fullyParallel: true,
  expect: {
    toHaveScreenshot: { threshold: 0.02 }
  },
  webServer: {
    command: "",
    url: "http://localhost:8080"
  },
  snapshotPathTemplate: "{testDir}/{testFilePath}-snapshots/{arg}{ext}",
  reporter: [
    ["line"],
    ["junit", { outputFile: `test-results/e2e-junit-${shardIndex}.xml` }],
    ["json", { outputFile: "test-results/results.json" }],
    ["html", { open: "never", printSteps: false }]
  ],
  use: {
    // One browser context and page per worker instead of one per test. Each test still loads a new document, so
    // all JS state is fresh. Between tests Playwright goes to about:blank, clears the HTTP cache and resets storage,
    // viewport, emulated media and the clock. It keeps the mouse position and pressed buttons; the `page` fixture of
    // `test` in e2e/helper.ts releases the buttons. Reusing them saved 0.25-0.45 s per test (13-27 %) locally.
    // The shared `test` of e2e/helper.ts reuses its own page per worker instead and doesn't use this context, except
    // with E2E_FRESH_PAGE; this applies to the specs that import Playwright's own `test`, and to that mode.
    // - The option is private (Playwright 1.60). It applies only while `video` is "off", and PW_TEST_REUSE_CONTEXT
    //   turns it on whatever is set here.
    // - After a Playwright upgrade, check that it still applies: with --workers=1, two tests must see the same
    //   browserContextId (`Target.getTargetInfo` in a CDP session of the page).
    // - E2E_FRESH_CONTEXT (any value) turns it off, to measure it or to check whether a failure depends on the
    //   tests that ran before it in the same worker.
    _optionContextReuseMode: process.env.E2E_FRESH_CONTEXT ? "none" : "when-possible",
    launchOptions: {
      ignoreDefaultArgs: ["--hide-scrollbars"],
      // Disable LCD (subpixel) text antialiasing so text always renders with grayscale
      // antialiasing. Chromium switches between the two modes depending on compositing
      // state (e.g. a freshly opened popup renders grayscale until its composited layer is
      // released ~1-2s later), which made screenshot tests flaky. All baselines are captured
      // with this flag; removing it invalidates them.
      args: ["--disable-lcd-text", "--disable-partial-raster"],
    }
  },
  projects: [
    {
      name: "a11y",
      testDir: resolve(__dirname, "./accessibilityTests")
    },
    {
      name: "scr",
      testDir: resolve(__dirname, "./screenshotTests")
    },
    {
      name: "scr_legacy",
      testDir: resolve(__dirname, "./screenshotLegacyTests")
    },
    {
      name: "e2e",
      testDir: resolve(__dirname, "./e2e")
    }
  ]
});