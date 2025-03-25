import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import type { RunOptions } from "axe-core";

const url = "http://127.0.0.1:8080/testCafe/testcafe";

const axeOptions: RunOptions = {
  runOnly: {
    type: "tag",
    values: ["wcag21a", "wcag21aa"/*, 'wcag412'*/]
  },
  rules: {
    "color-contrast": {
      enabled: false
    },
    "document-title": {
      enabled: false
    },
    "landmark-one-main": {
      enabled: false
    },
    "page-has-heading-one": {
      enabled: false
    },
    "region": {
      enabled: false
    }
  }
};

test.describe("tabs a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Check designer tab", async ({ page }) => {
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
});
