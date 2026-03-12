import { defineConfig } from "@playwright/test";
import { resolve } from "path";
export default defineConfig({
  retries: 2,
  maxFailures: 5,
  fullyParallel: true,
  webServer: {
    command: "",
    url: "http://localhost:8080"
  },
  snapshotPathTemplate: "{testDir}/{testFilePath}-snapshots/{arg}{ext}",
  reporter: [["line"], ["junit", { outputFile: "test-results/e2e-junit-results.xml" }], ["html", { open: "never", printSteps: false }]],
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
