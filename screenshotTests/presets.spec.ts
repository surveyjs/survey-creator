import { urlPresets, compareScreenshot, test, expect, changeToolboxSearchEnabled, changeToolboxScrolling, showCreatorSettings, showPresets, hideContentBehindPopup, showContentBehindPopup } from "./helper";

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
    await page.evaluate(() => {
      const creator = (window as any).creator;
      const presetsPlugin = creator.getPlugin("presets");
      const customPreset = { ...(window as any).SurveyCreatorUIPreset.Basic, name: "Custom Preset" };
      presetsPlugin.addPreset(customPreset);
    });
    await page.setViewportSize({ width: 1440, height: 1507 });
    await showPresets(page);
  });

  test("Check presets menu", async ({ page }) => {
    await page.locator(".sps-navigation-bar .sd-action").nth(0).click();
    await compareScreenshot(page, page.locator(".sd-menu-list__container"), "presets-list-menu.png");
    await page.locator(".sps-navigation-bar .sd-action").nth(2).click();
    await compareScreenshot(page, page.locator(".sd-menu-list__container"), "presets-edit-menu.png");

    await page.locator(".sps-navigation-bar .sd-action").nth(1).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).locator(".sd-menu-item").nth(2).hover();
    await compareScreenshot(page, page.locator(".sd-menu-list__container"), "presets-menu.png");
    await compareScreenshot(page, page.locator(".sps-navigation-bar"), "presets-menu-position.png");
  });

  test("Check presets list", async ({ page }) => {
    await page.locator(".sps-navigation-bar .sd-action").filter({ hasText: "Expert" }).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).getByText("Manage presets...").click();
    await page.locator(".spg-table__cell--actions .sd-action").nth(1).click();
    await page.getByText("Manage Presets", { exact: true }).hover();
    await page.getByText("Manage Presets", { exact: true }).click();
    await page.waitForTimeout(300);
    await hideContentBehindPopup(page);
    await compareScreenshot(page, ".sv-popup__container", "presets-list-dialog.png");
    await showContentBehindPopup(page);
    await page.getByText("Add new preset").click();
    await hideContentBehindPopup(page);
    await compareScreenshot(page, page.locator(".sv-popup__container").filter({ visible: true }), "presets-select-dialog.png");
    await showContentBehindPopup(page);
  });

  test("Check presets delete confirmation dialog", async ({ page }) => {
    await page.locator(".sps-navigation-bar .sd-action").filter({ hasText: "Expert" }).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).getByText("Manage presets...").click();
    await page.locator(".spg-table__cell--actions .sd-action").nth(1).click();
    await page.getByText("Manage Presets", { exact: true }).click();
    await page.getByTitle("Delete").click();
    await hideContentBehindPopup(page);
    await compareScreenshot(page, ".svc-creator-confirm-dialog .sv-popup__container", "presets-delete-confirmation-dialog.png");
    await showContentBehindPopup(page);
  });

  test("Check presets quit confirmation dialog", async ({ page }) => {
    await page.getByText("Dansk").click();
    await page.getByRole("button", { name: "Quit" }).click();
    await hideContentBehindPopup(page);
    await compareScreenshot(page, ".svc-creator-confirm-dialog .sv-popup__container", "presets-exit-confirmation-dialog.png");
    await showContentBehindPopup(page);
  });

  test("Presets pages overview", async ({ page }) => {
    expect(await page.locator(".sps-page__title").getByText("Languages")).toBeVisible();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-languages.png", {
      mask: await page.locator(".sd-selectbase__column:nth-child(3) .sd-item:not(:first-of-type)").all()
    });

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
    await page.locator(".sps-navigation-bar .sd-action").nth(1).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).getByText("Tabs").click();
    expect(await page.locator(".sps-page__title").getByText("Tabs")).toBeVisible();

    const root = page.locator(".sps-question--matrixdynamic").first();
    await compareScreenshot(page, root, "presets-items.png");
    await page.locator(".sd-table__cell--drag").first().hover();
    await compareScreenshot(page, root, "presets-items-hover.png");
    await page.locator(".sps-table__row").first().locator(".sd-formbox").hover();
    await compareScreenshot(page, root, "presets-items-text-hover.png");
    await page.locator(".sps-table__row").first().locator(".sps-table__cell--actions .sd-action").last().hover();
    await compareScreenshot(page, root, "presets-items-button-hover.png");
    await page.locator(".sps-table__row").first().locator(".sd-formbox").click();
    await compareScreenshot(page, root, "presets-items-text-click.png");
  });

  test("Presets Categories", async ({ page }) => {
    await page.locator(".sps-navigation-bar .sd-action").nth(1).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).getByText("Toolbox").click();
    expect(await page.locator(".sps-page__title").getByText("Toolbox")).toBeVisible();

    const root = page.locator(".sps-question--matrixdynamic").first();
    await compareScreenshot(page, root, "presets-categories.png");

    await page.locator(".sps-matrixdynamic__add-btn--icon").hover();
    await compareScreenshot(page, root, "presets-categories-new-hover.png");

    await page.locator(".sd-table__cell--drag").first().hover();
    await compareScreenshot(page, root, "presets-categories-hover.png");
    await page.locator(".sps-table__row").first().locator(".sd-formbox").hover();
    await compareScreenshot(page, root, "presets-categories-text-hover.png");
    await page.locator(".sps-table__row").first().locator(".sps-table__cell--actions .sd-action").last().hover();
    await compareScreenshot(page, root, "presets-categories-button-hover.png");
    await page.locator(".sps-table__row").first().locator(".sd-formbox").click();
    await compareScreenshot(page, root, "categories-text-click.png");

    await page.locator(".sps-table__row").first().getByTitle("Expand").click();
    await compareScreenshot(page, root, "presets-categories-expanded.png");
    await page.locator(".sps-table__row--detail").first().locator(".sps-table__row").nth(1).hover();
    await compareScreenshot(page, root, "presets-categories-expanded-hovered.png");
    await page.locator(".sps-table__row--detail").first().locator(".sps-table__row").nth(1).getByTitle("Expand").click();
    await compareScreenshot(page, root, "presets-categories-expanded-subitems.png");
  });

  test("Presets Context Menu", async ({ page }) => {
    await page.locator(".sps-navigation-bar .sd-action").nth(1).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).getByText("Toolbox").click();
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

  test("Check presets icon edit popup", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.locator(".sps-navigation-bar .sd-action").nth(1).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).getByText("Tabs").click();

    await page.getByRole("row", { name: "Designer" }).hover();
    await page.getByRole("row", { name: "Designer" }).getByRole("button").nth(1).click();
    await page.getByRole("combobox", { name: "Icon name" }).focus();
    await page.waitForTimeout(500);
    await page.getByRole("combobox", { name: "Icon name" }).click({ force: true });

    await hideContentBehindPopup(page);
    await compareScreenshot(page, ".sv-dropdown-popup .sd-selectlist__container", "presets-icon-edit-popup.png");
    await showContentBehindPopup(page);
  });

  test("Presets Dialogs", async ({ page }) => {
    await page.locator(".sps-navigation-bar .sd-action").nth(1).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).getByText("Toolbox").click();
    expect(await page.locator(".sps-page__title").getByText("Toolbox")).toBeVisible();

    const root = page.locator(".sps-panel").first();

    await page.locator(".sps-table__row").first().getByTitle("Edit").click();
    await hideContentBehindPopup(page);
    await compareScreenshot(page, ".sv-popup__container", "presets-dialog-small.png");
    await showContentBehindPopup(page);
    await page.getByText("Cancel").click();

    await page.locator(".sps-table__row").first().getByTitle("Expand").click();
    await page.locator(".sps-table__row--detail").first().locator(".sps-table__row").nth(1).hover();
    await page.locator(".sps-table__row--detail").first().locator(".sps-table__row").nth(1).getByTitle("Edit").click();
    await hideContentBehindPopup(page);
    await compareScreenshot(page, ".sv-popup__container", "presets-dialog-large.png");
    await showContentBehindPopup(page);
  });

  test("Presets options hints", async ({ page }) => {
    await page.locator(".sps-navigation-bar .sd-action").nth(1).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).getByText("Options").click();
    expect(await page.locator(".sps-page__title").getByText("Options")).toBeVisible();
    expect(await page.locator(".sps-page__title").getByText("Options")).toBeVisible();
    await page.locator(".sv-action-bar-item--collapse").nth(0).click();
    await page.locator(".sps-selectbase .sd-selectbase__label .sd-action").filter({ visible: true }).nth(0).click();
    await page.locator(".sps-question__title .sd-action").filter({ visible: true }).nth(0).click();
    await page.locator(".sps-panel .sv-string-viewer", { hasText: "Show toggle for hidden elements" })
      .evaluate(node => node.innerHTML = node.innerHTML + " (text to make the title longer to check the hint button)");
    await compareScreenshot(page, page.locator(".sps-panel").nth(1), "presets-options-hints.png");
  });

  test("Presets options background", async ({ page }) => {
    await page.locator(".sps-navigation-bar .sd-action").nth(1).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).getByText("Options").click();
    expect(await page.locator(".sps-page__title").getByText("Options")).toBeVisible();
    expect(await page.locator(".sps-page__title").getByText("Options")).toBeVisible();
    await page.locator(".sv-action-bar-item--collapse").nth(0).click();
    await page.locator(".sv-action-bar-item--collapse").nth(1).click();
    await page.locator(".sv-action-bar-item--collapse").nth(2).click();
    await page.locator(".sv-action-bar-item--collapse").nth(3).click();
    await compareScreenshot(page, page.locator(".sps-page"), "presets-options-background.png");
  });

  test("Presets small screen", async ({ page }) => {
    await page.setViewportSize({ width: 900, height: 1507 });
    expect(await page.locator(".sps-page__title").getByText("Languages")).toBeVisible();
    await compareScreenshot(page, page.locator(".sps-body"), "presets-small-screen.png", {
      mask: await page.locator(".sd-selectbase__column:nth-child(3) .sd-item:not(:first-of-type)").all()
    });
  });
});
