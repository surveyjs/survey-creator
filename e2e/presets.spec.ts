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

async function getPropertiesTexts(page: any) {
  return (await page.locator(".spg-checkbox__caption .sv-string-viewer, .spg-question__title .sv-string-viewer").filter({ visible: true }).allTextContents()).map(t => t.trim());
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
    await page.locator(".sv-popup").filter({ visible: true }).getByRole("button", { name: "Reset" }).waitFor({ state: "visible" });
    await page.locator(".sv-popup").filter({ visible: true }).getByRole("button", { name: "Reset" }).click();
    await page.locator(".sv-popup").filter({ visible: true }).getByRole("button", { name: "Apply" }).click();
    expect(await items.locator("tr").nth(0).locator(".sps-action-button--icon use").nth(0).getAttribute("xlink:href")).toBe("#icon-wrench-24x24");
    expect(await getRowsInputValues(items)).toEqual(["Designer", "Preview", "Logic", "Translations"]);
  });

  test("Check presets toolbox", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Toolbox").click();
    expect((await getToolboxTexts(page)).slice(0, 3)).toEqual(["Radio Button Group", "Rating Scale", "Slider"]);

    const items = page.locator(".sps-row--multiple > div").nth(0).locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-row--multiple > div").nth(1).locator(".sps-question--matrixdynamic table").nth(0);
    await items.getByRole("row", { name: "Choice Questions" }).hover();
    await items.getByRole("row", { name: "Choice Questions" }).getByTitle("Expand").click();
    await items.getByRole("row", { name: "Slider" }).getByRole("button").nth(3).click();
    await items.getByText("Remove from Toolbox").click();
    expect((await getToolboxTexts(page)).slice(0, 3)).toEqual(["Radio Button Group", "Rating Scale", "Checkboxes"]);

    await hidden.getByRole("button", { name: "More" }).nth(0).click();
    await hidden.getByRole("menuitem", { name: "Text Input Questions" }).locator("span").click();
    expect((await getToolboxTexts(page)).slice(9, 13)).toEqual(["Single-Line Input", "Long Text", "Multiple Textboxes", "Slider"]);

    await items.getByRole("button", { name: "Collapse" }).click();
    await items.getByRole("button", { name: "Delete" }).nth(2).click();
    expect((await getToolboxTexts(page)).slice(12, 14)).toEqual(["Slider", "Single-Select Matrix"]);

    await hidden.getByRole("button", { name: "More" }).last().click();
    await hidden.getByText("Move to new category").click();
    await page.getByRole("textbox", { name: "Title", exact: true }).fill("Containers1");
    await page.getByRole("button", { name: "Cancel" }).click();
    expect(await getRowsInputValues(items)).toEqual(["Choice Questions", "Text Input Questions", "Matrix Questions", "Misc"]);

    await hidden.getByRole("button", { name: "More" }).last().click();
    await hidden.getByText("Move to new category").click();
    await page.getByRole("textbox", { name: "Title", exact: true }).fill("Containers2");
    await page.getByRole("button", { name: "Apply" }).click();
    expect(await getRowsInputValues(items)).toEqual(["Choice Questions", "Text Input Questions", "Matrix Questions", "Misc", "Containers2"]);
    expect((await getToolboxTexts(page)).slice(20, 21)).toEqual(["Dynamic Panel"]);

  });

  test("Check presets toolbox - drag-drop categories", async ({ page }) => {
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
    await items.getByRole("row", { name: "Choice Questions" }).hover();
    await items.getByRole("row", { name: "Choice Questions" }).getByTitle("Expand").click();
    await doDragDrop({ page, element: items.getByRole("row", { name: "Slider" }).locator(".sd-table__cell--drag"), target: hidden, options: { targetPosition: { x: 5, y: 5 } } });

    expect((await getToolboxTexts(page)).slice(0, 3)).toEqual(["Radio Button Group", "Rating Scale", "Checkboxes"]);

    await items.getByRole("row", { name: "Text Input Questions" }).getByTitle("Expand").click();
    await doDragDrop({ page, element: hidden.getByRole("row", { name: "Slider" }).locator(".sd-table__cell--drag"), target: items.getByRole("row", { name: "Multiple Textboxes" }), options: { targetPosition: { x: 25, y: 25 } } });

    expect((await getToolboxTexts(page)).slice(9, 13)).toEqual(["Single-Line Input", "Long Text", "Slider", "Multiple Textboxes"]);

    await doDragDrop({ page, element: items.getByRole("row", { name: "Long Text" }).locator(".sd-table__cell--drag"), target: items.getByRole("row", { name: "Ranking" }), options: { targetPosition: { x: 5, y: 5 } } });
    expect((await getToolboxTexts(page)).slice(7, 12)).toEqual(["Image Picker", "Long Text", "Ranking", "Single-Line Input", "Slider"]);

    await items.getByRole("row", { name: "Rating" }).getByTitle("Expand").click();
    await doDragDrop({ page, element: items.getByRole("row", { name: "Slider" }).locator(".sd-table__cell--drag"), target: items.getByRole("row", { name: "Stars" }) });
    await page.locator(".svc-toolbox__item-submenu-button").nth(0).hover();
    expect(await page.locator(".svc-toolbox-subtypes .sv-popup__container").filter({ visible: true })).toBeVisible();
    expect((await page.locator(".svc-toolbox__item-subtype").filter({ visible: true }).allTextContents()).map(t => t.trim())).toEqual(["Labels", "Stars", "Slider", "Smileys"]);
  });

  test("Check presets toolbox - edit category", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Toolbox").click();
    const items = page.locator(".sps-question--matrixdynamic table").nth(0);

    expect(await getRowsInputValues(items)).toEqual(["Choice Questions", "Text Input Questions", "Containers", "Matrix Questions", "Misc"]);

    await page.getByRole("row", { name: "Containers" }).hover();
    await page.getByRole("row", { name: "Containers" }).getByRole("button").nth(1).click();
    await page.getByRole("textbox", { name: "Title", exact: true }).fill("Containers1");
    await page.getByRole("button", { name: "Apply" }).click();
    expect(await getRowsInputValues(items)).toEqual(["Choice Questions", "Text Input Questions", "Containers1", "Matrix Questions", "Misc"]);

    await page.getByRole("row", { name: "Containers1" }).hover();
    expect(await page.getByRole("row", { name: "Containers1" }).getByRole("button").nth(1)).toBeVisible();
    await page.getByRole("row", { name: "Containers1" }).getByRole("button").nth(1).click();
    await page.locator(".sv-popup").filter({ visible: true }).getByRole("button", { name: "Reset" }).waitFor({ state: "visible" });
    await page.locator(".sv-popup").filter({ visible: true }).getByRole("button", { name: "Reset" }).click();
    await page.locator(".sv-popup").filter({ visible: true }).getByRole("button", { name: "Apply" }).click();
    expect(await getRowsInputValues(items)).toEqual(["Choice Questions", "Text Input Questions", "Containers", "Matrix Questions", "Misc"]);
  });

  test("Check presets toolbox - custom category and custom item", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Toolbox").click();
    const items = page.locator(".sps-question--matrixdynamic").nth(0);
    const hidden = page.locator(".sps-row--multiple > div").nth(1).locator(".sps-question--matrixdynamic").nth(0);

    expect(await getRowsInputValues(items)).toEqual(["Choice Questions", "Text Input Questions", "Containers", "Matrix Questions", "Misc"]);
    await page.getByRole("button", { name: "New Category" }).click();
    await page.getByRole("textbox", { name: "Name" }).fill("custom");
    await page.getByRole("textbox", { name: "Name" }).blur();
    await page.getByRole("textbox", { name: "Title", exact: true }).fill("Custom");
    await page.getByRole("textbox", { name: "Title", exact: true }).blur();
    await page.getByRole("button", { name: "Apply" }).click();
    await page.waitForTimeout(500);
    await page.getByRole("row", { name: "Custom" }).hover();
    await page.getByRole("row", { name: "Custom" }).getByTitle("Expand").click();

    await items.getByRole("button", { name: "Add a new item" }).click();
    await page.getByRole("textbox", { name: "Title", exact: true }).focus();
    await page.getByRole("textbox", { name: "Title", exact: true }).fill("Custom 1");
    await page.getByRole("textbox", { name: "Title", exact: true }).blur();
    await page.getByRole("combobox", { name: "Icon name" }).focus();
    await page.waitForTimeout(500);
    await page.getByRole("combobox", { name: "Icon name" }).click();
    await page.getByText("icon-arrowleft-16x16").click();
    await page.getByRole("textbox", { name: "JSON object to apply when users select this toolbox item", exact: true }).fill("{\"type\": \"text\"}");
    await page.getByRole("textbox", { name: "JSON object to apply when users select this toolbox item", exact: true }).blur();
    await page.getByRole("button", { name: "Apply" }).click();
    expect(await items.locator(".sd-table__cell-action--icon-action svg use").filter({ visible: true }).nth(0).getAttribute("xlink:href")).toBe("#icon-arrowleft-16x16");
    expect(await page.locator(".svc-toolbox__item-title").filter({ visible: true }).nth(22)).toHaveText("Custom 1");
    expect(await page.locator(".svc-toolbox__item").filter({ visible: true }).nth(22).locator("svg use").nth(0).getAttribute("xlink:href")).toBe("#icon-arrowleft-16x16");

    await hidden.getByRole("button", { name: "Add a new item" }).click();
    await page.getByRole("textbox", { name: "Title", exact: true }).fill("Custom 2");
    await page.getByRole("textbox", { name: "Title", exact: true }).blur();
    await page.getByRole("combobox", { name: "Icon name" }).focus();
    await page.waitForTimeout(500);
    await page.getByRole("combobox", { name: "Icon name" }).click();
    await page.getByTitle("icon-arrowright-16x16").click();
    await page.getByRole("textbox", { name: "JSON object to apply when users select this toolbox item", exact: true }).fill("{\"type\": \"text\"}");
    await page.getByRole("textbox", { name: "JSON object to apply when users select this toolbox item", exact: true }).blur();
    await page.getByRole("button", { name: "Apply" }).click();
    expect(await hidden.locator("tr").nth(0).locator(".sps-action-button--icon use").nth(0).getAttribute("xlink:href")).toBe("#icon-arrowright-16x16");
  });

  test("Check presets Property Grid", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Property Grid").click();
    expect((await getPropertiesTexts(page)).slice(0, 3)).toEqual(["Survey title", "Survey description", "Make the title and description visible"]);

    const items = page.locator(".sps-row--multiple > div").nth(0).locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-row--multiple > div").nth(1).locator(".sps-question--matrixdynamic table").nth(0);
    await items.getByRole("row", { name: "General" }).getByTitle("Expand").click();
    await items.getByRole("row", { name: "Survey description" }).hover();
    await items.getByRole("row", { name: "Survey description" }).getByRole("button").nth(2).click();
    await items.getByText("Remove from properties").click();
    expect((await getPropertiesTexts(page)).slice(0, 3)).toEqual(["Survey title", "Make the title and description visible", "Make the survey read-only"]);

    await hidden.getByRole("button", { name: "More" }).nth(0).click();
    await hidden.getByRole("menuitem", { name: "Data" }).locator("span").click();
    await page.locator(".svc-sidebar-tabs").getByTitle("Data").click();
    expect((await getPropertiesTexts(page)).slice(0, 5)).toEqual([
      "Clear hidden question values",
      "Update input field values",
      "Auto-save survey progress on page change",
      "Save the \"Other\" option value as a separate property",
      "Survey description",]);

    expect(await page.locator(".svc-sidebar-tabs").getByTitle("Data")).toBeVisible();
    await items.getByRole("button", { name: "Collapse" }).click();
    await items.getByRole("row", { name: "Data" }).getByRole("button", { name: "Delete" }).click();
    expect(await page.locator(".svc-sidebar-tabs").getByTitle("Data")).toBeHidden();

    await hidden.getByRole("button", { name: "More" }).first().click();

    expect(await page.locator(".svc-sidebar-tabs").getByTitle("category1")).toBeHidden();
    await hidden.getByText("Move to new category").click();
    await page.locator(".sv-popup").filter({ visible: true }).getByRole("button", { name: "Apply" }).click();
    expect(await page.locator(".svc-sidebar-tabs").getByTitle("category1")).toBeVisible();
    await page.locator(".svc-sidebar-tabs").getByTitle("category1").click();
    expect((await getPropertiesTexts(page))).toEqual([
      "Clear hidden question values"]);
  });

  test("Check presets Property Grid - drag-drop categories", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Property Grid").click();
    expect(await page.locator(".svc-sidebar-tabs .svc-menu-action__button").nth(1).getAttribute("title")).toBe("General");
    expect(await page.locator(".svc-sidebar-tabs .svc-menu-action__button").nth(2).getAttribute("title")).toBe("Logo in the Survey Header");

    const items = page.locator(".sps-row--multiple > div").nth(0).locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-row--multiple > div").nth(1).locator(".sps-question--matrixdynamic table").nth(0);

    expect((await getRowsInputValues(items)).slice(0, 4)).toEqual(["General", "Logo in the Survey Header", "Navigation", "Question Settings"]);
    expect(await getRowsInputValues(hidden)).toEqual([]);
    expect((await getPropertiesTexts(page)).slice(0, 4)).toEqual([
      "Survey title",
      "Survey description",
      "Make the title and description visible",
      "Make the survey read-only",]);

    await doDragDrop({ page, element: items.locator("tr").filter({ visible: true }).nth(2).locator(".sd-table__cell--drag"), target: items.locator("tr").filter({ visible: true }).nth(0).locator(".sd-table__cell--drag"), options: { targetPosition: { x: 5, y: 5 } } });
    expect((await getRowsInputValues(items)).slice(0, 4)).toEqual(["Navigation",
      "General",
      "Logo in the Survey Header",
      "Question Settings",]);
    expect(await getRowsInputValues(hidden)).toEqual([]);
    expect(await page.locator(".svc-sidebar-tabs .svc-menu-action__button").nth(1).getAttribute("title")).toBe("Navigation");
    expect(await page.locator(".svc-sidebar-tabs .svc-menu-action__button").nth(2).getAttribute("title")).toBe("General");
  });

  test("Check presets Property Grid - drag-drop items", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Property Grid").click();
    await page.locator(".svc-sidebar-tabs").getByTitle("Logo in the Survey Header").click();
    expect(await getPropertiesTexts(page)).toEqual(["Survey logo", "Logo width", "Logo height", "Logo fit"]);

    const items = page.locator(".sps-row--multiple > div").nth(0).locator(".sps-question--matrixdynamic table").nth(0);
    const hidden = page.locator(".sps-row--multiple > div").nth(1).locator(".sps-question--matrixdynamic table").nth(0);
    await items.getByRole("row", { name: "Logo in the Survey Header" }).getByTitle("Expand").click();
    await doDragDrop({ page, element: items.getByRole("row", { name: "Logo height" }).locator(".sd-table__cell--drag"), target: hidden, options: { targetPosition: { x: 5, y: 5 } } });

    expect(await getPropertiesTexts(page)).toEqual(["Survey logo", "Logo width", "Logo fit"]);

    await doDragDrop({ page, element: items.getByRole("row", { name: "Logo fit" }).locator(".sd-table__cell--drag"), target: items.getByRole("row", { name: "Survey logo" }), options: { targetPosition: { x: 5, y: 5 } } });
    expect(await getPropertiesTexts(page)).toEqual(["Survey logo", "Logo fit", "Logo width"]);

    await items.getByRole("row", { name: "General" }).getByTitle("Expand").click();
    await doDragDrop({ page, element: hidden.getByRole("row", { name: "Logo height" }).locator(".sd-table__cell--drag"), target: items.getByRole("row", { name: "Survey title" }), options: { targetPosition: { x: 25, y: 25 } } });

    await page.locator(".svc-sidebar-tabs").getByTitle("General").click();

    expect((await getPropertiesTexts(page)).slice(0, 3)).toEqual(["Logo height", "Survey title", "Survey description"]);
  });

  test("Check presets Property Grid - edit category", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Property Grid").click();
    const items = page.locator(".sps-question--matrixdynamic table").nth(0);

    expect((await getRowsInputValues(items)).slice(0, 4)).toEqual(["General", "Logo in the Survey Header", "Navigation", "Question Settings"]);

    await page.getByRole("row", { name: "Navigation" }).hover();
    await page.getByRole("row", { name: "Navigation" }).getByRole("button").nth(2).click();
    await page.getByRole("textbox", { name: "Title", exact: true }).fill("Navigation1");
    await page.getByRole("combobox", { name: "Icon name" }).focus();
    await page.waitForTimeout(500);
    await page.getByRole("combobox", { name: "Icon name" }).click();
    await page.getByText("icon-more-24x24").click();
    await page.getByRole("button", { name: "Apply" }).click();
    expect((await getRowsInputValues(items)).slice(0, 4)).toEqual(["General", "Logo in the Survey Header", "Navigation1", "Question Settings"]);
    expect(await items.locator(".sd-table__cell-action--icon-action svg use").filter({ visible: true }).nth(2).getAttribute("xlink:href")).toBe("#icon-more-24x24");
    expect(await page.locator(".svc-menu-action__icon svg use").filter({ visible: true }).nth(3).getAttribute("xlink:href")).toBe("#icon-more-24x24");

    await page.getByRole("row", { name: "Navigation1" }).hover();
    expect(await page.getByRole("row", { name: "Navigation1" }).getByRole("button").nth(1)).toBeVisible();
    await page.getByRole("row", { name: "Navigation1" }).getByRole("button").nth(2).click();
    await page.locator(".sv-popup").filter({ visible: true }).getByRole("button", { name: "Reset" }).waitFor({ state: "visible" });
    await page.locator(".sv-popup").filter({ visible: true }).getByRole("button", { name: "Reset" }).click();
    await page.locator(".sv-popup").filter({ visible: true }).getByRole("button", { name: "Apply" }).click();
    expect((await getRowsInputValues(items)).slice(0, 4)).toEqual(["General", "Logo in the Survey Header", "Navigation", "Question Settings"]);
    expect(await items.locator(".sd-table__cell-action--icon-action svg use").filter({ visible: true }).nth(2).getAttribute("xlink:href")).toBe("#icon-pg-navigation-24x24");
    expect(await page.locator(".svc-menu-action__icon svg use").filter({ visible: true }).nth(3).getAttribute("xlink:href")).toBe("#icon-pg-navigation-24x24");
  });

  test("Check presets Property Grid - custom category", async ({ page }) => {
    await page.locator(".sps-list__container").getByText("Property Grid").click();
    const items = page.locator(".sps-question--matrixdynamic").nth(0);
    const hidden = page.locator(".sps-row--multiple > div").nth(1).locator(".sps-question--matrixdynamic").nth(0);

    expect((await getRowsInputValues(items)).slice(-3)).toEqual(["Validation", "\"Thank You\" Page", "Quiz Mode"]);
    await page.getByRole("button", { name: "New Category" }).click();
    await page.getByRole("textbox", { name: "Name" }).fill("custom");
    await page.getByRole("textbox", { name: "Title", exact: true }).fill("Custom");
    await page.getByRole("combobox", { name: "Icon name" }).focus();
    await page.waitForTimeout(500);
    await page.getByRole("combobox", { name: "Icon name" }).click();
    await page.getByText("icon-more-24x24").click();
    await page.getByRole("button", { name: "Apply" }).click();

    await items.getByRole("row", { name: "Pages" }).getByRole("button", { name: "Delete" }).click();
    await page.getByRole("row", { name: "Custom" }).getByTitle("Expand").click();
    await doDragDrop({
      page,
      element: hidden.getByRole("row", { name: "Pages" }).locator(".sd-table__cell--drag"),
      target: items.getByText("Drag properties here to show them"),
      options: { targetPosition: { x: 25, y: 25 } }
    });

    expect(await page.locator(".svc-sidebar-tabs").getByTitle("Custom")
      .locator("svg use").filter({ visible: true }).getAttribute("xlink:href")).toBe("#icon-more-24x24");

    await page.locator(".svc-sidebar-tabs").getByTitle("Custom").click();
    expect(await getPropertiesTexts(page)).toEqual(["Pages"]);
  });

});