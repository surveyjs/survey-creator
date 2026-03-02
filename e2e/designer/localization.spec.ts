import { urlLocalized_de, test, expect, getTabbedMenuItemByText } from "../helper";

const title = "Localization UI";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urlLocalized_de);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Change localization JSON", async ({ page }) => {
    const customLogicTabName = "Miner Logik";

    await getTabbedMenuItemByText(page, customLogicTabName).click();

    const contentEmpty = page.locator(".svc-logic-tab__content-empty");
    await expect(contentEmpty).toHaveCount(1);
    await expect(contentEmpty).toBeVisible();
  });
});
