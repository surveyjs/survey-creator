import { url, test, expect, setJSON, getTabbedMenuItemByText, creatorTabDesignerName, creatorTabPreviewName } from "../helper";

const title = "Property Grid: records sorting";

const up = "↑"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
const down = "↓"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code

// The rows are out of order for "col1 asc, col2 desc" and tie on col1: the preview fails without the
// sort and without its second level.
const json = {
  elements: [{
    type: "matrixdynamic",
    name: "matrix",
    allowSort: true,
    rowCount: 0,
    columns: [
      { name: "col1", cellType: "text" },
      { name: "col2", cellType: "text" }
    ],
    defaultValue: [{ col1: "b", col2: "x" }, { col1: "a", col2: "x" }, { col1: "a", col2: "y" }]
  }]
};

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      window["creator"].propertyGridNavigationMode = "buttons";
    });
    await setJSON(page, json);
  });

  const sortText = (page) => page.locator("[data-name='sortCriteria'] div[aria-live='polite']:not([role])");
  const dialog = (page) => page.locator(".sv-popup--records-sort");
  const dialogRows = (page) => dialog(page).locator(".sd-sort-dialog__row");
  const rowDirection = (page, row: number) => dialogRows(page).nth(row - 1).locator("button").nth(1);
  const dialogButton = (page, text: string) => dialog(page).locator(".sv-popup__body-footer").getByRole("button", { name: text, exact: true });
  const openLists = (page) => page.locator(".sv-popup--menu-popup .sv-popup__container").filter({ visible: true });
  // A list closes with an animation: the next one is opened once the previous one is gone.
  const pick = async (page, text: string): Promise<void> => {
    await openLists(page).getByRole("menuitemradio", { name: text, exact: true }).click();
    await expect(openLists(page)).toHaveCount(0);
  };
  const rowsShown = async (page): Promise<Array<Array<string>>> =>
    dialogRows(page).evaluateAll((rows: Array<HTMLElement>) => rows.map((row) =>
      Array.prototype.map.call(row.querySelectorAll(".sd-action__title"), (el: Element): string => el.textContent) as Array<string>));
  const previewRows = async (page): Promise<Array<string>> =>
    page.locator(".sd-table__row").filter({ visible: true }).evaluateAll((rows: Array<HTMLElement>) => rows.map((row) =>
      Array.prototype.map.call(row.querySelectorAll("input[type=text]"), (el: HTMLInputElement): string => el.value).join("/")));
  const previewSortBar = (page) => page.locator(".sd-matrixdynamic__sort-bar").filter({ visible: true });
  const undo = (page) => page.getByRole("button", { name: "Undo" }).filter({ visible: true }).first();
  const redo = (page) => page.getByRole("button", { name: "Redo" }).filter({ visible: true }).first();

  test("set the default sort with More..., undo and redo it, and preview it", async ({ page }) => {
    await page.locator("[data-name='matrix']").first().click();
    await expect(sortText(page)).toHaveText("");

    await page.locator("[data-name='sortCriteria']").hover();
    await page.getByRole("button", { name: "More...", exact: true }).click();
    await expect(dialog(page).locator(".sv-popup__body-header")).toHaveText("Sort by");
    expect(await rowsShown(page)).toEqual([["col1", "Default"]]);
    await rowDirection(page, 1).click();
    await pick(page, "Alphabet, A - Z");
    await dialogButton(page, "Add New").click();
    await rowDirection(page, 2).click();
    await pick(page, "Alphabet, Z - A");
    expect(await rowsShown(page)).toEqual([["col1", "Alphabet, A - Z"], ["col2", "Alphabet, Z - A"]]);
    await dialogButton(page, "Apply").click();
    await expect(dialog(page)).toHaveCount(0);
    await expect(sortText(page)).toHaveText("col1 " + up + ", col2 " + down);
    expect(await page.evaluate(() => window["creator"].JSON.pages[0].elements[0].sortCriteria))
      .toEqual([{ field: "col1" }, { field: "col2", direction: "desc" }]);

    await undo(page).click();
    await expect(sortText(page)).toHaveText("");
    await redo(page).click();
    await expect(sortText(page)).toHaveText("col1 " + up + ", col2 " + down);

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect.poll(() => previewRows(page)).toEqual(["a/y", "a/x", "b/x"]);
    await expect(previewSortBar(page)).toHaveCount(0);

    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await page.locator("[data-name='matrix']").first().click();
    await page.locator("[data-name='showSortBar']").getByText("Always", { exact: true }).click();
    expect(await page.evaluate(() => window["creator"].survey.getQuestionByName("matrix").showSortBar)).toBe("always");
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await expect(previewSortBar(page)).toBeVisible();
    await expect.poll(() => previewRows(page)).toEqual(["a/y", "a/x", "b/x"]);
  });
});
