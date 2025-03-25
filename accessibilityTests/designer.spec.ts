import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, url } from "./helper";

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
