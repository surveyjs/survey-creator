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
    //await changeToolboxScrolling(page, false);
    //await changeToolboxSearchEnabled(page, false);
    await page.setViewportSize({ width: 1440, height: 1440 });
    await showPresets(page);
  });

  test("Check presets menu", async ({ page }) => {
    await page.locator(".sps-list__item").nth(2).hover();
    await compareScreenshot(page, page.locator(".sps-list__container"), "presets-menu.png");
    await compareScreenshot(page, page.locator(".svc-sidebar-tabs"), "presets-menu-position.png");
  });

  test("Presets pages overview", async ({ page }) => {
    await page.locator(".sps-menu-floating-action").click();
    expect(await page.locator(".sps-list__container")).not.toBeVisible();
    expect(await page.locator(".sps-page__title").getByText("Languages")).toBeVisible();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-languages.png");

    await page.locator(".sps-panel--navigation").getByText("Next").click();
    expect(await page.locator(".sps-page__title").getByText("Tabs")).toBeVisible();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-tabs.png");

    await page.locator(".sps-panel--navigation").getByText("Next").click();
    expect(await page.locator(".sps-page__title").getByText("Toolbox")).toBeVisible();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-toolbox.png");

    await page.locator(".sps-panel--navigation").getByText("Next").click();
    expect(await page.locator(".sps-page__title").getByText("Property Grid")).toBeVisible();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-property-grid.png");

    await page.locator(".sps-panel--navigation").getByText("Next").click();
    expect(await page.locator(".sps-page__title").getByText("Options")).toBeVisible();
    await page.locator(".sv-action-bar-item--collapse").nth(0).click();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-options.png");
  });

  test("Presets Items", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Tabs").click();
    expect(await page.locator(".sps-page__title").getByText("Tabs")).toBeVisible();

    const root = page.locator(".sps-question--matrixdynamic").first();
    await compareScreenshot(page, root, "presets-items.png");
    await page.locator(".sd-table__cell--drag").first().hover();
    await compareScreenshot(page, root, "presets-items-hover.png");
    await page.locator(".sps-table__row").first().locator(".sps-input").hover();
    await compareScreenshot(page, root, "presets-items-text-hover.png");
    await page.locator(".sps-table__row").first().locator(".sps-action-button").last().hover();
    await compareScreenshot(page, root, "presets-items-button-hover.png");
    await page.locator(".sps-table__row").first().locator(".sps-input").click();
    await compareScreenshot(page, root, "presets-items-text-click.png");
  });

  test("Presets Categories", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Toolbox").click();
    expect(await page.locator(".sps-page__title").getByText("Toolbox")).toBeVisible();

    const root = page.locator(".sps-question--matrixdynamic").first();
    await compareScreenshot(page, root, "presets-categories.png");

    await page.locator(".sps-matrixdynamic__add-btn--icon").hover();
    await compareScreenshot(page, root, "presets-categories-new-hover.png");

    await page.locator(".sd-table__cell--drag").first().hover();
    await compareScreenshot(page, root, "presets-categories-hover.png");
    await page.locator(".sps-table__row").first().locator(".sps-input").hover();
    await compareScreenshot(page, root, "presets-categories-text-hover.png");
    await page.locator(".sps-table__row").first().locator(".sps-action-button").last().hover();
    await compareScreenshot(page, root, "presets-categories-button-hover.png");
    await page.locator(".sps-table__row").first().locator(".sps-input").click();
    await compareScreenshot(page, root, "categories-text-click.png");

    await page.locator(".sps-table__row").first().getByTitle("Expand").click();
    await compareScreenshot(page, root, "presets-categories-expanded.png");
    await page.locator(".sps-table__row--detail").first().locator(".sps-table__row").nth(1).hover();
    await compareScreenshot(page, root, "presets-categories-expanded-hovered.png");
    await page.locator(".sps-table__row--detail").first().locator(".sps-table__row").nth(1).getByTitle("Expand").click();
    await compareScreenshot(page, root, "presets-categories-expanded-subitems.png");
  });

  test("Presets Context Menu", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Toolbox").click();
    expect(await page.locator(".sps-page__title").getByText("Toolbox")).toBeVisible();

    const root = page.locator(".sps-panel").first();

    await page.locator(".sps-table__row").first().getByTitle("Expand").click();
    await page.locator(".sps-table__row--detail").first().locator(".sps-table__row").nth(1).hover();
    const moreButton = page.locator(".sps-table__row--detail").first().locator(".sps-table__row").nth(1).getByTitle("More");
    expect(moreButton).toBeVisible();
    moreButton.click();
    await page.getByText("Move to category...").hover();
    await page.waitForTimeout(300);
    expect(await page.getByText("Text Input Questions")).toBeVisible();
    await compareScreenshot(page, root, "presets-context-menu.png");
  });

  test("Presets Dialogs", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Toolbox").click();
    expect(await page.locator(".sps-page__title").getByText("Toolbox")).toBeVisible();

    const root = page.locator(".sps-panel").first();

    await page.locator(".sps-table__row").first().getByTitle("Edit").click();
    await compareScreenshot(page, ".sv-popup__container", "presets-dialog-small.png");
    await page.getByText("Cancel").click();

    await page.locator(".sps-table__row").first().getByTitle("Expand").click();
    await page.locator(".sps-table__row--detail").first().locator(".sps-table__row").nth(1).hover();
    await page.locator(".sps-table__row--detail").first().locator(".sps-table__row").nth(1).getByTitle("Edit").click();
    await compareScreenshot(page, ".sv-popup__container", "presets-dialog-large.png");
  });

  test("Presets options hints", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Options").click();
    expect(await page.locator(".sps-page__title").getByText("Options")).toBeVisible();
    expect(await page.locator(".sps-page__title").getByText("Options")).toBeVisible();
    await page.locator(".sv-action-bar-item--collapse").nth(0).click();
    await page.locator(".sps-checkbox__caption .sps-action-button").filter({ visible: true }).nth(0).click();
    await page.locator(".sps-question__title .sps-action-button").filter({ visible: true }).nth(0).click();
    await compareScreenshot(page, page.locator(".sps-panel").nth(1), "presets-options-hints.png");
  });
});
