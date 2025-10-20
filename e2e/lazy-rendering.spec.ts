import { url, test, expect } from "./helper";
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
    await expect(await nonRenderedPages.count()).toBeGreaterThanOrEqual(106);
  });

  test("Huge JSON long task time", async ({ page }) => {
    const timeLimit = 10000;
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
    expect(totalBlockingTime).toBeLessThan(timeLimit);
  });

  test("Navigate through tabs Preview, Logic", async ({ page }) => {
    const timeLimit = 10000;
    await page.setViewportSize({ width: 1600, height: 800 });
    await page.evaluate((json) => {
      window["creator"].JSON = json;
    }, hugeJson);
    let start = performance.now();
    await page.getByText("Preview").click();
    let end = performance.now();
    let duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Preview tab duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
    start = performance.now();
    await page.getByText("Designer").click();
    end = performance.now();
    duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Designer tab duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
    start = performance.now();
    await page.getByText("Logic").click();
    end = performance.now();
    duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Logic tab duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
    start = performance.now();
    await page.getByText("Designer").click();
    end = performance.now();
    duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Designer tab duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
  }, 10000 * 4);

  test.skip("Navigate through tabs JSON, Translations", async ({ page }) => {
    const timeLimit = 10000;
    await page.setViewportSize({ width: 1600, height: 800 });
    await page.evaluate((json) => {
      window["creator"].JSON = json;
    }, hugeJson);
    let start = performance.now();
    await page.getByText("JSON Editor").click();
    let end = performance.now();
    let duration = end - start;
    // eslint-disable-next-line no-console
    console.log("JSON Editor tab duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
    start = performance.now();
    await page.getByText("Designer").click();
    end = performance.now();
    duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Designer tab duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
    start = performance.now();
    await page.getByText("Translations", { exact: true }).click();
    end = performance.now();
    duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Translations tab duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
    start = performance.now();
    await page.getByText("Designer").click();
    end = performance.now();
    duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Designer tab duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
  }, 10000 * 4);

  test("Collapse/expand all", async ({ page }) => {
    const timeLimit = 10000;
    await page.setViewportSize({ width: 1600, height: 800 });
    await page.evaluate((json) => {
      window["creator"].expandCollapseButtonVisibility = "always";
      window["creator"].JSON = json;
    }, hugeJson);
    await expect(page.getByRole("button", { name: "Collapse All" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Expand All" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Lock expand/collapse state" })).toBeVisible();
    let start = performance.now();
    await page.getByRole("button", { name: "Collapse All" }).click();
    let end = performance.now();
    let duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Collapse All duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
    start = performance.now();
    await page.getByRole("button", { name: "Expand All" }).click();
    end = performance.now();
    duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Expand All duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
  });

  test("Select distant question", async ({ page }) => {
    const timeLimit = 10000;
    await page.setViewportSize({ width: 1600, height: 800 });
    await page.evaluate((json) => {
      window["creator"].JSON = json;
    }, hugeJson);
    let start = performance.now();
    await page.getByRole("button", { name: "Survey", exact: true }).click();
    let end = performance.now();
    let duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Open question selector duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit * 2); // TODO: fix long dropdown opening
    await page.locator(".svc-object-selector .svc-list__container > .svc-list__filter").click();
    start = performance.now();
    await page.locator("#svd-grid-object-selector").getByRole("textbox", { name: "Type to search..." }).fill("q3978");
    end = performance.now();
    duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Search question duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
    await expect(page.locator("[data-name='q3978']")).toBeHidden();
    start = performance.now();
    await page.getByText("q3978").click();
    end = performance.now();
    duration = end - start;
    // eslint-disable-next-line no-console
    console.log("Select question duration: " + duration.toString() + "ms");
    expect(duration).toBeLessThan(timeLimit);
    await expect(page.getByRole("textbox", { name: "Question name" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Question name" })).toHaveValue("q3978");
    await expect(page.locator("[data-name='q3978']")).toBeVisible();
  }, 10000 * 5);
});
