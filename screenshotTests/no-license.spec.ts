import { compareScreenshot, test, setJSON, urlNoLicense } from "./helper";

const title = "No License";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urlNoLicense);
  });

  test("Check no license banner", async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 600 });
    await setJSON(page, {});
    const root = page.locator(".svc-creator");
    await compareScreenshot(page, root, "no-license.png");
    await page.setViewportSize({ width: 375, height: 650 });
    await compareScreenshot(page, root, "no-license-mobile.png");
  });
});
