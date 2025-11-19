import { url, setJSON, test, compareScreenshot } from "./helper";

const title = "Button group Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Check styles", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).creator.showOneCategoryInPropertyGrid = true;
    });
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.click('[title="Quiz Mode"]');

    const buttongroup = page.locator(".spg-button-group").filter({ has: page.locator(":visible") });
    await compareScreenshot(page, buttongroup, "button-group-disabled.png");

    await page.locator("span").filter({ hasText: "Use a timer" }).filter({ has: page.locator(":visible") }).click();
    await compareScreenshot(page, buttongroup, "button-group-enabled.png");

    await page.locator("span").filter({ hasText: "Top" }).filter({ has: page.locator(":visible") }).hover();
    await compareScreenshot(page, buttongroup, "button-group-selected-hovered.png");

    await page.locator("span").filter({ hasText: "Bottom" }).filter({ has: page.locator(":visible") }).hover();
    await compareScreenshot(page, buttongroup, "button-group-unselected-hovered.png");
  });

  test("Button group responsivity", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).creator.showOneCategoryInPropertyGrid = true;
    });
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.click('[title="Logo in the Survey Header"]');

    const westResizer = page.locator(".svc-resizer-west");
    const westResizerBox = await westResizer.boundingBox();
    if (westResizerBox) {
      await page.mouse.move(westResizerBox.x + westResizerBox.width / 2, westResizerBox.y + westResizerBox.height / 2);
      await page.mouse.down();
      await page.mouse.move(westResizerBox.x + westResizerBox.width / 2 + 200, westResizerBox.y + westResizerBox.height / 2);
      await page.mouse.up();
    }

    const buttongroup = page.locator('[data-name="logoFit"] .spg-question__content').filter({ has: page.locator(":visible") });
    await compareScreenshot(page, buttongroup, "button-group-responsivity.png");
  });
});
