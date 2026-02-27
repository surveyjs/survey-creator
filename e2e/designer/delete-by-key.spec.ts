import { url, test, expect, getToolboxItemByText, getVisibleElement } from "../helper";

const title = "Delete by key";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Correct focus after delete by Del key", async ({ page }) => {
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);

    await getToolboxItemByText(page, "Single-Line Input").hover();
    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(1);

    await getToolboxItemByText(page, "Single-Line Input").click();
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(2);

    await getVisibleElement(page, ".svc-question__content").first().click({ position: { x: 100, y: 100 } });
    await page.keyboard.press("Delete");
    await page.waitForTimeout(100);
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(1);
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveClass(/svc-question__content--selected/);
    await expect(getVisibleElement(page, ".svc-question__content.svc-question__content--selected")).toBeFocused();

    await page.keyboard.press("Delete");
    await page.waitForTimeout(500);
    await expect(getVisibleElement(page, ".svc-question__content")).toHaveCount(0);
  });
});
