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
    await expect(await skeletonElement.count()).toBeGreaterThanOrEqual(85);
    await expect(await nonRenderedPages.count()).toBeGreaterThanOrEqual(107);
  });

  test("Huge JSON long task time", async ({ page }) => {
    const timeLimit = 4000;
    const totalBlockingTime: number = await page.evaluate(([json, timeLimit]) => {
      return new Promise<number>((resolve) => {
        let totalBlockingTime = 0;
        new PerformanceObserver(function (list) {
          const perfEntries = list.getEntries();
          for (const perfEntry of perfEntries) {
            totalBlockingTime += perfEntry.duration;
          }
          resolve(totalBlockingTime);
        }).observe({ type: "longtask", buffered: true });

        window["creator"].JSON = json;
        setTimeout(() => resolve(totalBlockingTime), (timeLimit as number) + 500);
      });
    }, [hugeJson, timeLimit]);

    // eslint-disable-next-line no-console
    console.log("totalBlockingTime: " + totalBlockingTime.toString() + "ms");
    await expect(totalBlockingTime).toBeLessThan(timeLimit);
  });
});
