import { url, compareScreenshot } from "./helper";
import { test, expect } from "@playwright/test";
import { json as hugeJson } from "./questions_4114";

const title = "Design Surface Lazy Rendering";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });
  test("Pages adorner content lazy rendering", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    await page.evaluate((json) => {
      window["creator"].JSON = json;
    }, hugeJson);
    const skeletonElement = page.locator(".sv-skeleton-element");
    const nonRenderedPages = page.locator(".svc-page__loading-content");
    await page.waitForTimeout(10000);
    await expect(skeletonElement).toHaveCount(87);
    await expect(nonRenderedPages).toHaveCount(107);
  });
});
