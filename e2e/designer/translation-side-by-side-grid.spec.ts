import { url, test, expect, setJSON, setCreatorProp, getJSON, getTabbedMenuItemByText, getBarItemByTitle, getListItemByText } from "../helper";

const title = "Translation tab - side by side grid";

const json = {
  locale: "de",
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
        { type: "checkbox", name: "q2", choices: ["Item 1", "Item 2"] }
      ]
    },
    {
      name: "page2",
      elements: [{ type: "text", name: "q4", title: "Question 4" }]
    }
  ]
};

async function openGridTranslation(page, sourceJson: any = json) {
  await setJSON(page, sourceJson);
  await setCreatorProp(page, "translationMode", "sideBySide");
  await setCreatorProp(page, "translationSideBySideView", "grid");
  await getTabbedMenuItemByText(page, "Translation").click();
  await expect(page.locator(".st-strings")).toBeVisible();
}
// A page group: a collapsible panel with the page title and the "{translated}/{total}" count.
function getGroup(page, pageName: string) {
  return page.locator(".st-translation-group").filter({ has: page.locator(".st-panel__title", { hasText: pageName }) });
}
function getGroupTitle(page, pageName: string) {
  return getGroup(page, pageName).locator(".st-panel__title");
}
// Every translation item is a one-row matrix; the q1 title row is the first "Question title" row.
function getTitleRow(page) {
  return page.locator(".st-strings tbody tr", { hasText: "Question title" }).first();
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("layout: page groups with a 4-column table, no panes", async ({ page }) => {
    await openGridTranslation(page);
    await expect(page.locator(".st-side-by-side__source")).toHaveCount(0);
    await expect(page.locator(".st-side-by-side__target")).toHaveCount(0);
    // The classic header survey is replaced by the groups' own header rows.
    await expect(page.locator(".st-strings-header table")).toBeHidden();

    // The first page's group is expanded, the other one collapsed.
    const group1 = getGroup(page, "page1");
    const group2 = getGroup(page, "page2");
    await expect(getGroupTitle(page, "page1")).toHaveAttribute("aria-expanded", "true");
    await expect(getGroupTitle(page, "page2")).toHaveAttribute("aria-expanded", "false");
    await expect(group1.locator(".st-panel__description")).toHaveText("1/4");
    await expect(group2.locator(".st-panel__description")).toHaveText("0/1");
    await expect(group2.locator("table")).toHaveCount(0);

    const header = group1.locator("thead th");
    await expect(header).toHaveText(["Question", "String", "Source: Default (English)", "Target: Deutsch"]);

    const titleRow = getTitleRow(page);
    await expect(titleRow.locator(".st-translation-table__cell--question")).toHaveText("q1");
    await expect(titleRow.locator(".st-translation-table__cell--string")).toHaveText("Question title");
    const sourceCell = titleRow.locator("textarea").nth(0);
    const targetCell = titleRow.locator("textarea").nth(1);
    await expect(sourceCell).toHaveValue("Question 1");
    await expect(sourceCell).toBeEditable();
    await expect(targetCell).toHaveValue("Frage 1");
    await expect(targetCell).toBeEditable();

    // The geometry of the design: a 48px header bar, the Question and String columns of 130 and
    // 200px, the Source and Target columns splitting the rest.
    const barBox = await group1.locator(".sd-panel__header").boundingBox();
    expect(Math.round(barBox!.height)).toBe(48);
    const widths = await header.evaluateAll(cells => cells.map(cell => Math.round(cell.getBoundingClientRect().width)));
    expect(widths[0]).toBe(130);
    expect(widths[1]).toBe(200);
    expect(Math.abs(widths[2] - widths[3])).toBeLessThanOrEqual(1);
    const rowCells = titleRow.locator("td:visible");
    const rowWidths = await rowCells.evaluateAll(cells => cells.map(cell => Math.round(cell.getBoundingClientRect().width)));
    expect(rowWidths).toEqual(widths);

    // An untranslated target shows the source text, muted.
    const choiceRow = getGroup(page, "page1").locator("tbody tr", { hasText: "Item 1" }).first();
    await expect(choiceRow.locator("textarea").nth(1)).toHaveAttribute("placeholder", "Item 1");

    // The all/used strings filter in the toolbar; the page dropdown defaults to "All Pages".
    // The language dropdowns live in the property grid.
    await expect(getBarItemByTitle(page, "Used Strings Only")).toBeVisible();
    await expect(getBarItemByTitle(page, "All Pages")).toBeVisible();
    const sidebar = page.locator(".svc-side-bar");
    await expect(sidebar.locator(".spg-question[data-name=sourceLocale]")).toContainText("Default (English)");
    await expect(sidebar.locator(".spg-question[data-name=targetLocale]")).toContainText("Deutsch");
  });

  test("the Question cell spans the rows of its element", async ({ page }) => {
    await openGridTranslation(page);
    const rows = getGroup(page, "page1").locator("tbody tr");
    // q1 title, q2 title, two choices.
    await expect(rows.locator(".st-translation-table__cell--question")).toHaveText(["q1", "q2", "", ""]);
    await expect(rows.locator(".st-translation-table__cell--string")).toHaveText(["Question title", "Question title", "Choices: Item 1", "Choices: Item 2"]);
    const borders = await rows.locator(".st-translation-table__cell--question").evaluateAll(cells =>
      cells.map(cell => getComputedStyle(cell).borderBottomColor === "rgba(0, 0, 0, 0)" ? "span" : "border"));
    // The last row of the group has no bottom border at all: the group's border closes it.
    expect(borders.slice(0, 3)).toEqual(["border", "span", "span"]);
  });

  test("collapse and expand a group by mouse and by keyboard", async ({ page }) => {
    await openGridTranslation(page);
    const group2Title = getGroupTitle(page, "page2");
    await group2Title.click();
    await expect(group2Title).toHaveAttribute("aria-expanded", "true");
    await expect(getGroup(page, "page2").locator("tbody tr")).toHaveCount(1);
    await expect(getGroup(page, "page2").locator("textarea").nth(0)).toHaveValue("Question 4");
    await group2Title.click();
    await expect(group2Title).toHaveAttribute("aria-expanded", "false");
    await expect(getGroup(page, "page2").locator("table")).toHaveCount(0);

    const group1Title = getGroupTitle(page, "page1");
    await group1Title.focus();
    await page.keyboard.press("Enter");
    await expect(group1Title).toHaveAttribute("aria-expanded", "false");
    await expect(getGroup(page, "page1").locator("table")).toHaveCount(0);
    await page.keyboard.press("Space");
    await expect(group1Title).toHaveAttribute("aria-expanded", "true");
    await expect(getTitleRow(page).locator("textarea").nth(1)).toHaveValue("Frage 1");
  });

  test("editing a target cell updates the JSON translation and the group count", async ({ page }) => {
    await openGridTranslation(page);
    const targetCell = getTitleRow(page).locator("textarea").nth(1);
    await targetCell.fill("Frage 1 neu");
    await page.keyboard.press("Tab");
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].title.de).toEqual("Frage 1 neu");
    expect(resultJson.pages[0].elements[0].title.default).toEqual("Question 1");

    const q2Target = getGroup(page, "page1").locator("tbody tr", { hasText: "q2" }).locator("textarea").nth(1);
    await q2Target.fill("Frage 2");
    await page.keyboard.press("Tab");
    await expect(getGroup(page, "page1").locator(".st-panel__description")).toHaveText("2/4");
  });

  // The design moves Tab from target to target; the renderers give no way to take the editable
  // Source cells out of the tab order (survey-library textarea-fixes/02), so Tab goes through both.
  test("Tab moves through the source and target cells, row by row", async ({ page }) => {
    await openGridTranslation(page);
    const group = getGroup(page, "page1");
    const sources = group.locator(".st-translation-table__cell--source textarea");
    const targets = group.locator(".st-translation-table__cell--target textarea");
    await expect(targets).toHaveCount(4);
    await targets.nth(0).focus();
    for (let i = 1; i < 4; i++) {
      await page.keyboard.press("Tab");
      await expect(sources.nth(i)).toBeFocused();
      await page.keyboard.press("Tab");
      await expect(targets.nth(i)).toBeFocused();
    }
  });

  test("view switcher: the property grid button group switches between the grid and the form views", async ({ page }) => {
    await openGridTranslation(page);
    const viewSwitcher = page.locator(".svc-side-bar .spg-question[data-name=viewMode]");
    await expect(viewSwitcher).toBeVisible();
    // The standard-width property grid fits the button group, so the views are
    // plain buttons - no compact dropdown rendering.
    const switchView = async (viewName: string) => {
      await viewSwitcher.getByText(viewName, { exact: true }).click();
    };

    await switchView("Form");
    await expect(page.locator(".st-side-by-side__source")).toBeVisible();
    await expect(page.locator(".st-side-by-side__target")).toBeVisible();
    await expect(page.locator(".st-strings")).toHaveCount(0);
    // The locales chosen in the property grid survive the switch.
    const sidebar = page.locator(".svc-side-bar");
    await expect(sidebar.locator(".spg-question[data-name=sourceLocale]")).toContainText("Default (English)");
    await expect(sidebar.locator(".spg-question[data-name=targetLocale]")).toContainText("Deutsch");

    await switchView("Grid");
    await expect(page.locator(".st-strings")).toBeVisible();
    await expect(page.locator(".st-side-by-side__source")).toHaveCount(0);
  });

  test("clearing the target language leaves the source column alone", async ({ page }) => {
    await openGridTranslation(page);
    const headerColumns = getGroup(page, "page1").locator("thead th");
    await expect(headerColumns).toHaveCount(4);

    await page.locator(".svc-side-bar .spg-question[data-name=targetLocale]").getByRole("button", { name: "Clear" }).click();
    await expect(headerColumns).toHaveText(["Question", "String", "Source: Default (English)"]);
    // No target language: nothing to count, and an empty description is not rendered.
    await expect(getGroup(page, "page1").locator(".st-panel__description")).toHaveCount(0);
    const titleRow = getTitleRow(page);
    await expect(titleRow.locator("textarea")).toHaveCount(1);
    await expect(titleRow.locator("textarea").nth(0)).toHaveValue("Question 1");

    // Selecting a language restores the two-column layout with the stored translation.
    await page.locator(".sd-dropdown__input").filter({ has: page.getByRole("combobox", { name: "Target language" }) }).click();
    await page.getByRole("option", { name: "Deutsch" }).click();
    await expect(headerColumns).toHaveCount(4);
    await expect(headerColumns.nth(3)).toContainText("Target: Deutsch");
    await expect(getTitleRow(page).locator("textarea").nth(1)).toHaveValue("Frage 1");
  });

  test("page dropdown: a page shows its group alone, expanded; All Pages shows every group", async ({ page }) => {
    await openGridTranslation(page);
    await expect(page.locator(".st-translation-group")).toHaveCount(2);
    await getBarItemByTitle(page, "All Pages").click();
    await getListItemByText(page, "page2").click();
    await expect(page.locator(".st-translation-group")).toHaveCount(1);
    await expect(getGroupTitle(page, "page2")).toHaveAttribute("aria-expanded", "true");
    await expect(getTitleRow(page).locator("textarea").nth(0)).toHaveValue("Question 4");
    await getBarItemByTitle(page, "page2").click();
    await getListItemByText(page, "All Pages").click();
    await expect(page.locator(".st-translation-group")).toHaveCount(2);
    // page2 was expanded by choosing it - the state is kept.
    await expect(getGroupTitle(page, "page1")).toHaveAttribute("aria-expanded", "true");
    await expect(getGroupTitle(page, "page2")).toHaveAttribute("aria-expanded", "true");
    await expect(getTitleRow(page).locator("textarea").nth(0)).toHaveValue("Question 1");
  });
});
