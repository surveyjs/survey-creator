import { urlPresets, test, expect, showPresets, doDragDrop } from "./helper";

const title = "Presets";
async function getRowsInputValues(matrix: any) {
  const values = await matrix.locator("tr input").evaluateAll((inputs: any) =>
    inputs.map((input: any) => (input as HTMLInputElement).value)
  );
  return values;
}

async function getTabsTexts(page: any) {
  return (await page.locator(".svc-tabbed-menu-item").allTextContents()).map(t => t.trim()).filter(t => t != "Presets");
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await page.goto(`${urlPresets}`);
    await page.setViewportSize({ width: 1440, height: 1440 });
    await showPresets(page);
  });

  test("Check presets tabs", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Tabs").click();

    const items = page.locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-question--matrixdynamic table").nth(1);
    expect(await getRowsInputValues(items)).toEqual(["Designer", "Preview", "Logic", "Translations"]);
    expect(await getRowsInputValues(hidden)).toEqual(["Themes", "JSON Editor"]);
    expect(await getTabsTexts(page)).toEqual(["Designer", "Preview", "Logic", "Translations"]);

    await items.locator("tr").nth(1).getByTitle("Delete").click();
    expect(await getRowsInputValues(items)).toEqual(["Designer", "Logic", "Translations"]);
    expect(await getRowsInputValues(hidden)).toEqual(["Themes", "JSON Editor", "Preview"]);
    expect(await getTabsTexts(page)).toEqual(["Designer", "Logic", "Translations"]);

    await hidden.locator("tr").nth(1).getByTitle("Add").click();
    expect(await getRowsInputValues(items)).toEqual(["Designer", "Logic", "Translations", "JSON Editor"]);
    expect(await getRowsInputValues(hidden)).toEqual(["Themes", "Preview"]);
    expect(await getTabsTexts(page)).toEqual(["Designer", "Logic", "Translations", "JSON Editor"]);
  });

  test("Check presets tabs - drag-drop", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Tabs").click();

    const items = page.locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-question--matrixdynamic table").nth(1);

    expect(await getRowsInputValues(items)).toEqual(["Designer", "Preview", "Logic", "Translations"]);
    expect(await getRowsInputValues(hidden)).toEqual(["Themes", "JSON Editor"]);
    expect(await getTabsTexts(page)).toEqual(["Designer", "Preview", "Logic", "Translations"]);

    await doDragDrop({ page, element: items.locator("tr").nth(1).locator(".sd-table__cell--drag"), target: hidden, options: { targetPosition: { x: 5, y: 5 } } });
    expect(await getRowsInputValues(items)).toEqual(["Designer", "Logic", "Translations"]);
    expect(await getRowsInputValues(hidden)).toEqual(["Preview", "Themes", "JSON Editor"]);
    expect(await getTabsTexts(page)).toEqual(["Designer", "Logic", "Translations"]);

    await doDragDrop({ page, element: hidden.locator("tr").nth(2).locator(".sd-table__cell--drag"), target: items, options: { targetPosition: { x: 5, y: 5 } } });
    expect(await getRowsInputValues(items)).toEqual(["JSON Editor", "Designer", "Logic", "Translations"]);
    expect(await getRowsInputValues(hidden)).toEqual(["Preview", "Themes"]);
    expect(await getTabsTexts(page)).toEqual(["JSON Editor", "Designer", "Logic", "Translations"]);

    await doDragDrop({ page, element: items.locator("tr").nth(1).locator(".sd-table__cell--drag"), target: items.locator("tr").nth(3).locator(".sd-table__cell--drag"), options: { targetPosition: { x: 5, y: 5 } } });
    expect(await getRowsInputValues(items)).toEqual(["JSON Editor", "Logic", "Designer", "Translations"]);
    expect(await getRowsInputValues(hidden)).toEqual(["Preview", "Themes"]);
    expect(await getTabsTexts(page)).toEqual(["JSON Editor", "Logic", "Designer", "Translations"]);
  });
});