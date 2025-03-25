import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, creatorTabPreviewName, getTabbedMenuItemByText, url } from "./helper";

test.describe("preview a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Check preview tab empty", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
});
