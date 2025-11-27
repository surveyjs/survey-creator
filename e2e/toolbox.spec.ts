
import { url, test, expect } from "./helper";

const title = "Toolbox";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });
  test("Survey Creator Toolbox categories are not localized Bug#7284", async ({ page }) => {
    await page.setViewportSize({ width: 1800, height: 800 });

    await page.evaluate(() => {
      window["creator"].toolbox.showCategoryTitles = true;
    });
    const node = page.locator(".svc-toolbox__category-title").first();

    expect(await node.textContent()).toBe("Choice Questions");
    await page.evaluate(() => {
      window["creator"].locale = "de";
    });

    expect(await node.textContent()).toBe("Auswahl-Fragen");
  });
});
