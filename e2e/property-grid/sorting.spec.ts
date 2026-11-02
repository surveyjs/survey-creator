import { url, test, expect, setJSON, getTabbedMenuItemByText, creatorTabDesignerName, creatorTabPreviewName, doDragDrop } from "../helper";

const title = "Property Grid: records sorting";

// "col2 desc, col3 asc" and "col3 asc, col2 desc" order the rows differently, and both differ from the
// stored order: the preview checks the levels and their priority.
const json = {
  elements: [{
    type: "matrixdynamic",
    name: "matrix",
    allowSort: true,
    rowCount: 0,
    columns: [
      { name: "col1", cellType: "text" },
      { name: "col2", cellType: "text" },
      { name: "col3", cellType: "text" }
    ],
    defaultValue: [{ col1: "a", col2: "x", col3: "2" }, { col1: "b", col2: "y", col3: "3" }, { col1: "c", col2: "y", col3: "1" }]
  }]
};
const panelJSON = {
  elements: [{
    type: "paneldynamic",
    name: "panel",
    templateElements: [{ type: "text", name: "q1", title: "Question 1" }, { type: "text", name: "q2", title: "Question 2" }]
  }]
};

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      window["creator"].propertyGridNavigationMode = "buttons";
    });
  });

  const grid = (page) => page.locator("[data-name='sortCriteria']");
  const gridRows = (page) => grid(page).locator("[data-sv-drop-target-matrix-row]");
  // the title action; the empty matrix shows a second Add button
  const addLevel = (page) => grid(page).locator("button[title='Add sort level']");
  // The combobox is the dropdown's filter input; the value is drawn over it, so the cell is clicked and read.
  const dropdownCell = (page, row: number, column: number) =>
    gridRows(page).nth(row - 1).locator("td").filter({ has: page.getByRole("combobox") }).nth(column);
  const pick = async (page, row: number, column: number, text: string): Promise<void> => {
    // Away from the viewport's bottom edge, where the list would open upwards over the row above
    await gridRows(page).nth(row - 1).evaluate((el: HTMLElement) => el.scrollIntoView({ block: "center" }));
    await dropdownCell(page, row, column).click();
    await page.getByRole("option", { name: text, exact: true }).filter({ visible: true }).click();
    // A list closes with an animation: the next one is opened once the previous one is gone.
    await expect(page.getByRole("listbox").filter({ visible: true })).toHaveCount(0);
  };
  const rowsShown = async (page): Promise<Array<Array<string>>> =>
    gridRows(page).evaluateAll((rows: Array<HTMLElement>) => rows.map((row) =>
      Array.prototype.map.call(row.querySelectorAll("[role=combobox]"), (el: Element): string => el.parentElement.textContent.trim()) as Array<string>));
  const sortJSON = (page) => page.evaluate(() => window["creator"].JSON.pages[0].elements[0].sortCriteria);
  const previewRows = async (page): Promise<Array<string>> =>
    page.locator(".sd-table__row").filter({ visible: true }).evaluateAll((rows: Array<HTMLElement>) => rows.map((row) =>
      Array.prototype.map.call(row.querySelectorAll("input[type=text]"), (el: HTMLInputElement): string => el.value).join("/")));
  const undo = (page) => page.getByRole("button", { name: "Undo" }).filter({ visible: true }).first();
  const redo = (page) => page.getByRole("button", { name: "Redo" }).filter({ visible: true }).first();
  const dragRow = async (page, from: number, to: number): Promise<void> => {
    const target = gridRows(page).nth(to - 1);
    const handle = gridRows(page).nth(from - 1).locator(".spg-drag-element__svg");
    await gridRows(page).nth(from - 1).hover();
    await handle.waitFor({ state: "visible" });
    await doDragDrop({ page, element: handle, target: target, options: { elementPosition: { x: 5, y: 5 }, targetPosition: { x: 5, y: 5 } } });
  };

  test("edit the default sort of a matrix as sort levels", async ({ page }) => {
    await setJSON(page, json);
    await page.locator("[data-name='matrix']").first().click();
    await page.locator(".svc-sidebar-tabs").getByTitle("Rows", { exact: true }).click();
    await expect(grid(page).getByText("No sort levels")).toBeVisible();

    await addLevel(page).click();
    await addLevel(page).click();
    expect(await rowsShown(page)).toEqual([["col1", "Ascending"], ["col2", "Ascending"]]);
    expect(await sortJSON(page)).toEqual([{ field: "col1" }, { field: "col2" }]);

    await pick(page, 1, 0, "col3");
    await pick(page, 2, 1, "Descending");
    expect(await rowsShown(page)).toEqual([["col3", "Ascending"], ["col2", "Descending"]]);
    expect(await sortJSON(page)).toEqual([{ field: "col3" }, { field: "col2", direction: "desc" }]);

    await dragRow(page, 2, 1);
    await expect.poll(() => rowsShown(page)).toEqual([["col2", "Descending"], ["col3", "Ascending"]]);
    expect(await sortJSON(page)).toEqual([{ field: "col2", direction: "desc" }, { field: "col3" }]);

    await undo(page).click();
    await expect.poll(() => rowsShown(page)).toEqual([["col3", "Ascending"], ["col2", "Descending"]]);
    await redo(page).click();
    await expect.poll(() => rowsShown(page)).toEqual([["col2", "Descending"], ["col3", "Ascending"]]);

    await gridRows(page).nth(1).hover();
    await gridRows(page).nth(1).getByRole("button", { name: "Remove" }).click();
    await expect(gridRows(page)).toHaveCount(1);
    expect(await sortJSON(page)).toEqual([{ field: "col2", direction: "desc" }]);
    await undo(page).click();
    await expect(gridRows(page)).toHaveCount(2);
    expect(await sortJSON(page)).toEqual([{ field: "col2", direction: "desc" }, { field: "col3" }]);

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect.poll(() => previewRows(page)).toEqual(["c/y/1", "b/y/3", "a/x/2"]);
    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
  });

  test("edit the default sort of a dynamic panel as sort levels", async ({ page }) => {
    await setJSON(page, panelJSON);
    await page.locator("[data-name='panel']").first().click();
    await page.locator(".svc-sidebar-tabs").getByTitle("Entries", { exact: true }).click();
    await addLevel(page).click();
    await pick(page, 1, 0, "Question 2");
    await pick(page, 1, 1, "Descending");
    expect(await rowsShown(page)).toEqual([["Question 2", "Descending"]]);
    expect(await sortJSON(page)).toEqual([{ field: "q2", direction: "desc" }]);
    await addLevel(page).click();
    expect(await rowsShown(page)).toEqual([["Question 2", "Descending"], ["Question 1", "Ascending"]]);
    await expect(addLevel(page)).toBeDisabled();
    await undo(page).click();
    await expect(gridRows(page)).toHaveCount(1);
    expect(await sortJSON(page)).toEqual([{ field: "q2", direction: "desc" }]);
  });
});
