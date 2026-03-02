import { url, test, expect, setJSON } from "../helper";

const title = "Clear survey functionality";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Check cleear survey functionality", async ({ page }) => {
    const json = { elements: [{ type: "text", name: "simple question" }] };
    const pageSelector = page.locator(".svc-creator .svc-tab-designer .svc-page");

    await setJSON(page, json);
    await expect(pageSelector).toHaveCount(2);
    await setJSON(page, {});
    await expect(pageSelector).toHaveCount(0);
    await setJSON(page, json);
    await expect(pageSelector).toHaveCount(2);
    await setJSON(page, {});
    await expect(pageSelector).toHaveCount(0);
  });
});
