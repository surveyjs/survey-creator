import { urlPresets, test, expect, showPresets, doDragDrop } from "./helper";

const title = "Presets";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await page.goto(`${urlPresets}`);
    //await changeToolboxScrolling(page, false);
    //await changeToolboxSearchEnabled(page, false);
    await page.setViewportSize({ width: 1440, height: 1440 });
    await showPresets(page);
  });

  test("Check presets tabs", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Tabs").click();
    const actualTexts = (await page.locator(".svc-tabbed-menu-item").allTextContents()).map(t => t.trim()).filter(t => t != "Presets");
    expect(actualTexts).toEqual(["Designer", "Preview", "Logic", "Translations"]);

    const items = page.locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-question--matrixdynamic table").nth(1);

    expect(items.locator("tr input").nth(0)).toHaveValue("Designer");
    expect(items.locator("tr input").nth(1)).toHaveValue("Preview");
    expect(items.locator("tr input").nth(2)).toHaveValue("Logic");
    expect(items.locator("tr input").nth(3)).toHaveValue("Translations");

    expect(hidden.locator("tr input").nth(0)).toHaveValue("Themes");
    expect(hidden.locator("tr input").nth(1)).toHaveValue("JSON Editor");

    await items.locator("tr").nth(1).getByTitle("Delete").click();
    expect(items.locator("tr input").nth(0)).toHaveValue("Designer");
    expect(items.locator("tr input").nth(1)).toHaveValue("Logic");
    expect(items.locator("tr input").nth(2)).toHaveValue("Translations");

    expect(hidden.locator("tr input").nth(0)).toHaveValue("Themes");
    expect(hidden.locator("tr input").nth(1)).toHaveValue("JSON Editor");
    expect(hidden.locator("tr input").nth(2)).toHaveValue("Preview");

    const newTexts = (await page.locator(".svc-tabbed-menu-item").allTextContents()).filter(t => t != "Presets");
    expect(newTexts).toEqual(["Designer", "Logic", "Translations"]);

    await hidden.locator("tr").nth(1).getByTitle("Add").click();
    expect(items.locator("tr input").nth(0)).toHaveValue("Designer");
    expect(items.locator("tr input").nth(1)).toHaveValue("Logic");
    expect(items.locator("tr input").nth(2)).toHaveValue("Translations");
    expect(items.locator("tr input").nth(3)).toHaveValue("JSON Editor");

    expect(hidden.locator("tr input").nth(0)).toHaveValue("Themes");
    expect(hidden.locator("tr input").nth(1)).toHaveValue("Preview");

    const newTexts2 = (await page.locator(".svc-tabbed-menu-item").allTextContents()).filter(t => t != "Presets");
    expect(newTexts2).toEqual(["Designer", "Logic", "Translations", "JSON Editor"]);
  });

  test("Check presets tabs - drag-drop", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Tabs").click();
    const actualTexts = (await page.locator(".svc-tabbed-menu-item").allTextContents()).filter(t => t != "Presets");
    expect(actualTexts).toEqual(["Designer", "Preview", "Logic", "Translations"]);

    const items = page.locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-question--matrixdynamic table").nth(1);

    expect(items.locator("tr input").nth(0)).toHaveValue("Designer");
    expect(items.locator("tr input").nth(1)).toHaveValue("Preview");
    expect(items.locator("tr input").nth(2)).toHaveValue("Logic");
    expect(items.locator("tr input").nth(3)).toHaveValue("Translations");

    expect(hidden.locator("tr input").nth(0)).toHaveValue("Themes");
    expect(hidden.locator("tr input").nth(1)).toHaveValue("JSON Editor");

    //await items.locator("tr").nth(1).locator(".sd-table__cell--drag").dragTo(hidden);
    await doDragDrop({ page, element: items.locator("tr").nth(1).locator(".sd-table__cell--drag"), target: hidden, options: { targetPosition: { x: 5, y: 5 } } });

    expect(items.locator("tr input").nth(0)).toHaveValue("Designer");
    expect(items.locator("tr input").nth(1)).toHaveValue("Logic");
    expect(items.locator("tr input").nth(2)).toHaveValue("Translations");

    expect(hidden.locator("tr input").nth(0)).toHaveValue("Preview");
    expect(hidden.locator("tr input").nth(1)).toHaveValue("Themes");
    expect(hidden.locator("tr input").nth(2)).toHaveValue("JSON Editor");

    const newTexts = (await page.locator(".svc-tabbed-menu-item").allTextContents()).filter(t => t != "Presets");
    expect(newTexts).toEqual(["Designer", "Logic", "Translations"]);

    await doDragDrop({ page, element: hidden.locator("tr").nth(2).locator(".sd-table__cell--drag"), target: items, options: { targetPosition: { x: 5, y: 5 } } });
    expect(items.locator("tr input").nth(0)).toHaveValue("JSON Editor");
    expect(items.locator("tr input").nth(1)).toHaveValue("Designer");
    expect(items.locator("tr input").nth(2)).toHaveValue("Logic");
    expect(items.locator("tr input").nth(3)).toHaveValue("Translations");

    const newTexts2 = (await page.locator(".svc-tabbed-menu-item").allTextContents()).filter(t => t != "Presets");
    expect(newTexts2).toEqual(["JSON Editor", "Designer", "Logic", "Translations"]);
    await doDragDrop({ page, element: items.locator("tr").nth(1).locator(".sd-table__cell--drag"), target: items.locator("tr").nth(3).locator(".sd-table__cell--drag"), options: { targetPosition: { x: 5, y: 5 } } });
    expect(items.locator("tr input").nth(0)).toHaveValue("JSON Editor");
    expect(items.locator("tr input").nth(1)).toHaveValue("Logic");
    expect(items.locator("tr input").nth(2)).toHaveValue("Designer");
    expect(items.locator("tr input").nth(3)).toHaveValue("Translations");
    const newTexts3 = (await page.locator(".svc-tabbed-menu-item").allTextContents()).filter(t => t != "Presets");
    expect(newTexts3).toEqual(["JSON Editor", "Logic", "Designer", "Translations"]);
  });
});