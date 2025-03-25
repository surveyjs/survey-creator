import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, creatorTabJSONName, getTabbedMenuItemByText, url } from "./helper";

test.describe("json a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Check json tab empty", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabJSONName).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
});
