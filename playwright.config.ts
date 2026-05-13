import { defineConfig } from "@playwright/test";
import { resolve } from "path";

const shardIndex = process.env.PLAYWRIGHT_SHARD_INDEX || "results";

export default defineConfig({
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
  reporter: [["line"], ["junit", { outputFile: `test-results/e2e-junit-${shardIndex}.xml` }], ["html", { open: "never", printSteps: false }]],
  use: {
    launchOptions: {
      ignoreDefaultArgs: ["--hide-scrollbars"],
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