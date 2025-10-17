import { urlPresets, compareScreenshot, test, expect, changeToolboxSearchEnabled, changeToolboxScrolling, showCreatorSettings, showPresets } from "./helper";

const title = "Presets";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await page.goto(`${urlPresets}`);
  });

  test("Check presets launch button", async ({ page }) => {
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await page.setViewportSize({ width: 1120, height: 900 });
    await showCreatorSettings(page);
    const root = page.locator(".svc-side-bar__container-content").nth(0);
    await compareScreenshot(page, root, "presets-launch-button.png");
  });
});

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await page.goto(`${urlPresets}`);
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await page.setViewportSize({ width: 1440, height: 1440 });
    await showPresets(page);
  });

  test("Check presets menu", async ({ page }) => {
    await page.locator(".sps-list__item").nth(2).hover();
    await compareScreenshot(page, page.locator(".sps-list__container"), "presets-menu.png");
    await compareScreenshot(page, page.locator(".svc-sidebar-tabs"), "presets-menu-position.png");
  });

  test("Presets pages overview", async ({ page }) => {
    page.locator(".svc-menu-action__button").click();
    expect(page.locator(".sps-list__container").getByText("Languages")).not.toBeVisible();
    expect(page.locator(".sps-page__title").getByText("Languages")).toBeVisible();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-languages.png");

    await page.locator(".sps-panel--navigation").getByText("Next").click();
    expect(page.locator(".sps-page__title").getByText("Tabs")).toBeVisible();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-tabs.png");

    await page.locator(".sps-panel--navigation").getByText("Next").click();
    expect(page.locator(".sps-page__title").getByText("Toolbox")).toBeVisible();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-toolbox.png");

    await page.locator(".sps-panel--navigation").getByText("Next").click();
    expect(page.locator(".sps-page__title").getByText("Property Grid")).toBeVisible();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-property-grid.png");
  });
});
