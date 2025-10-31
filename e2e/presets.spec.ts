import { urlPresets, test, expect, showPresets, doDragDrop } from "./helper";

const title = "Presets";
async function getRowsInputValues(matrix: any) {
  const values = await matrix.locator("tr input").evaluateAll((inputs: any) =>
    inputs.map((input: any) => (input as HTMLInputElement).value)
  );
  return values;
}

async function getTabsTexts(page: any) {
  return (await page.locator(".svc-tabbed-menu-item").filter({ visible: true }).allTextContents()).map(t => t.trim());
}

async function getToolboxTexts(page: any) {
  return (await page.locator(".svc-toolbox__item-title").filter({ visible: true }).allTextContents()).map(t => t.trim());
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await page.goto(`${urlPresets}`);
    await page.setViewportSize({ width: 1440, height: 1400 });
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

  test("Check presets tabs - edit", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Tabs").click();
    const items = page.locator(".sps-question--matrixdynamic table").nth(0);

    expect(await getRowsInputValues(items)).toEqual(["Designer", "Preview", "Logic", "Translations"]);
    expect(await items.locator("tr").nth(0).locator(".sps-action-button--icon use").nth(0).getAttribute("xlink:href")).toBe("#icon-wrench-24x24");

    await page.getByRole("row", { name: "Designer" }).hover();
    await page.getByRole("row", { name: "Designer" }).getByRole("button").nth(1).click();
    await page.getByRole("textbox", { name: "Title", exact: true }).fill("Designer1");
    await page.getByRole("combobox", { name: "Icon name" }).focus();
    await page.waitForTimeout(500);
    await page.getByRole("combobox", { name: "Icon name" }).click();
    await page.getByText("icon-actual-size-24x24").click();
    await page.getByRole("button", { name: "Apply" }).click();
    expect(await items.locator("tr").nth(0).locator(".sps-action-button--icon use").nth(0).getAttribute("xlink:href")).toBe("#icon-actual-size-24x24");
    expect(await getRowsInputValues(items)).toEqual(["Designer1", "Preview", "Logic", "Translations"]);

    await page.getByRole("row", { name: "Designer1" }).hover();
    expect(await page.getByRole("row", { name: "Designer1" }).getByRole("button").nth(1)).toBeVisible();
    await page.getByRole("row", { name: "Designer1" }).getByRole("button").nth(1).click();
    await page.getByRole("button", { name: "Reset to default" }).waitFor({ state: "visible" });
    await page.getByRole("button", { name: "Reset to default" }).click();
    await page.getByRole("button", { name: "Apply" }).click();
    expect(await items.locator("tr").nth(0).locator(".sps-action-button--icon use").nth(0).getAttribute("xlink:href")).toBe("#icon-wrench-24x24");
    expect(await getRowsInputValues(items)).toEqual(["Designer", "Preview", "Logic", "Translations"]);
  });

  test("Check presets toolbox", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Toolbox").click();
    expect((await getToolboxTexts(page)).slice(0, 3)).toEqual(["Radio Button Group", "Rating Scale", "Slider"]);

    const items = page.locator(".sps-row--multiple > div").nth(0).locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-row--multiple > div").nth(1).locator(".sps-question--matrixdynamic table").nth(0);
    await items.getByRole("row", { name: "Choice Questions" }).locator("#show-detail").getByRole("button").click();
    await items.getByRole("row", { name: "Slider" }).getByRole("button").nth(3).click();
    await items.getByText("Remove from Toolbox").click();
    expect((await getToolboxTexts(page)).slice(0, 3)).toEqual(["Radio Button Group", "Rating Scale", "Checkboxes"]);

    await hidden.getByRole("button", { name: "More" }).nth(0).click();
    await hidden.getByRole("menuitem", { name: "Text Input Questions" }).locator("span").click();
    expect((await getToolboxTexts(page)).slice(9, 13)).toEqual(["Single-Line Input", "Long Text", "Multiple Textboxes", "Slider"]);

    await items.getByRole("button", { name: "Collapse" }).click();
    await items.getByRole("button", { name: "Delete" }).nth(2).click();
    expect((await getToolboxTexts(page)).slice(12, 14)).toEqual(["Slider", "Single-Select Matrix"]);

    await hidden.getByRole("button", { name: "More" }).first().click();

    await hidden.getByText("Move to new category").click();
    expect((await getToolboxTexts(page)).slice(20, 21)).toEqual(["Panel"]);
  });

  test("Check presets tabs - drag-drop categories", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Toolbox").click();
    expect((await getToolboxTexts(page)).slice(0, 3)).toEqual(["Radio Button Group", "Rating Scale", "Slider"]);

    const items = page.locator(".sps-row--multiple > div").nth(0).locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-row--multiple > div").nth(1).locator(".sps-question--matrixdynamic table").nth(0);

    expect(await getRowsInputValues(items)).toEqual(["Choice Questions", "Text Input Questions", "Containers", "Matrix Questions", "Misc"]);
    expect(await getRowsInputValues(hidden)).toEqual([]);
    expect((await getToolboxTexts(page)).slice(0, 4)).toEqual(["Radio Button Group", "Rating Scale", "Slider", "Checkboxes"]);

    await doDragDrop({ page, element: items.locator("tr").filter({ visible: true }).nth(2).locator(".sd-table__cell--drag"), target: items.locator("tr").filter({ visible: true }).nth(0).locator(".sd-table__cell--drag"), options: { targetPosition: { x: 5, y: 5 } } });
    expect(await getRowsInputValues(items)).toEqual(["Containers", "Choice Questions", "Text Input Questions", "Matrix Questions", "Misc"]);
    expect(await getRowsInputValues(hidden)).toEqual([]);
    expect((await getToolboxTexts(page)).slice(0, 4)).toEqual(["Panel", "Dynamic Panel", "Radio Button Group", "Rating Scale"]);
  });

  test("Check presets toolbox - drag-drop items", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Toolbox").click();
    expect((await getToolboxTexts(page)).slice(0, 3)).toEqual(["Radio Button Group", "Rating Scale", "Slider"]);

    const items = page.locator(".sps-row--multiple > div").nth(0).locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-row--multiple > div").nth(1).locator(".sps-question--matrixdynamic table").nth(0);
    await items.getByRole("row", { name: "Choice Questions" }).locator("#show-detail").getByRole("button").click();
    await doDragDrop({ page, element: items.getByRole("row", { name: "Slider" }).locator(".sd-table__cell--drag"), target: hidden, options: { targetPosition: { x: 5, y: 5 } } });

    expect((await getToolboxTexts(page)).slice(0, 3)).toEqual(["Radio Button Group", "Rating Scale", "Checkboxes"]);

    await items.getByRole("row", { name: "Text Input Questions" }).locator("#show-detail").getByRole("button").click();
    await doDragDrop({ page, element: hidden.getByRole("row", { name: "Slider" }).locator(".sd-table__cell--drag"), target: items.getByRole("row", { name: "Multiple Textboxes" }), options: { targetPosition: { x: 25, y: 25 } } });

    expect((await getToolboxTexts(page)).slice(9, 13)).toEqual(["Single-Line Input", "Long Text", "Slider", "Multiple Textboxes"]);

    await doDragDrop({ page, element: items.getByRole("row", { name: "Long Text" }).locator(".sd-table__cell--drag"), target: items.getByRole("row", { name: "Ranking" }), options: { targetPosition: { x: 5, y: 5 } } });
    expect((await getToolboxTexts(page)).slice(7, 12)).toEqual(["Image Picker", "Long Text", "Ranking", "Single-Line Input", "Slider"]);

    await items.getByRole("row", { name: "Rating" }).locator("#show-detail").getByRole("button").click();
    await doDragDrop({ page, element: items.getByRole("row", { name: "Slider" }).locator(".sd-table__cell--drag"), target: items.getByRole("row", { name: "Stars" }) });
    await page.locator(".svc-toolbox__item-submenu-button").nth(0).hover();
    expect(await page.locator(".svc-toolbox-subtypes .sv-popup__container").filter({ visible: true })).toBeVisible();
    expect((await page.locator(".svc-toolbox__item-subtype").filter({ visible: true }).allTextContents()).map(t => t.trim())).toEqual(["Labels", "Stars", "Slider", "Smileys"]);
  });

});