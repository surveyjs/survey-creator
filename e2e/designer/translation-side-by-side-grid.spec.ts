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
// Every translation item is a one-row matrix; the q1 title row is the first row labeled "Title".
function getTitleRow(page) {
  return page.locator(".st-strings table tr", { hasText: "Title" }).first();
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("layout: strings grid with source and target columns, no panes", async ({ page }) => {
    await openGridTranslation(page);
    await expect(page.locator(".st-side-by-side__source")).toHaveCount(0);
    await expect(page.locator(".st-side-by-side__target")).toHaveCount(0);

    const headerColumns = page.locator(".st-strings-header table tr").first().locator("th");
    await expect(headerColumns).toHaveCount(2);
    await expect(headerColumns.nth(0)).toContainText("Source: Default (English)");
    await expect(headerColumns.nth(1)).toContainText("Target: Deutsch");

    const titleRow = getTitleRow(page);
    const sourceCell = titleRow.locator("textarea").nth(0);
    const targetCell = titleRow.locator("textarea").nth(1);
    await expect(sourceCell).toHaveValue("Question 1");
    await expect(sourceCell).toBeEditable();
    await expect(targetCell).toHaveValue("Frage 1");
    await expect(targetCell).toBeEditable();

    // The all/used strings filter in the toolbar; the page dropdown defaults to "All Pages",
    // as in the standard mode. The language dropdowns live in the property grid.
    await expect(getBarItemByTitle(page, "Used Strings Only")).toBeVisible();
    await expect(getBarItemByTitle(page, "All Pages")).toBeVisible();
    const sidebar = page.locator(".svc-side-bar");
    await expect(sidebar.locator(".spg-question[data-name=sourceLocale]")).toContainText("Default (English)");
    await expect(sidebar.locator(".spg-question[data-name=targetLocale]")).toContainText("Deutsch");
  });

  test("editing a target cell updates the JSON translation", async ({ page }) => {
    await openGridTranslation(page);
    const targetCell = getTitleRow(page).locator("textarea").nth(1);
    await targetCell.fill("Frage 1 neu");
    await page.keyboard.press("Tab");
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].title.de).toEqual("Frage 1 neu");
    expect(resultJson.pages[0].elements[0].title.default).toEqual("Question 1");
  });

  test("view switcher: the property grid button group switches between the grid and the forms views", async ({ page }) => {
    await openGridTranslation(page);
    const viewSwitcher = page.locator(".svc-side-bar .spg-question[data-name=viewMode]");
    await expect(viewSwitcher).toBeVisible();
    // The standard-width property grid fits the button group, so the views are
    // plain buttons - no compact dropdown rendering.
    const switchView = async (viewName: string) => {
      await viewSwitcher.getByText(viewName).click();
    };

    await switchView("Form View");
    await expect(page.locator(".st-side-by-side__source")).toBeVisible();
    await expect(page.locator(".st-side-by-side__target")).toBeVisible();
    await expect(page.locator(".st-strings")).toHaveCount(0);
    // The locales chosen in the property grid survive the switch.
    const sidebar = page.locator(".svc-side-bar");
    await expect(sidebar.locator(".spg-question[data-name=sourceLocale]")).toContainText("Default (English)");
    await expect(sidebar.locator(".spg-question[data-name=targetLocale]")).toContainText("Deutsch");

    await switchView("Grid View");
    await expect(page.locator(".st-strings")).toBeVisible();
    await expect(page.locator(".st-side-by-side__source")).toHaveCount(0);
  });

  test("page dropdown: All Pages by default, selecting a page scopes the grid", async ({ page }) => {
    await openGridTranslation(page);
    // All Pages: the first "Title" row belongs to q1 from page1.
    await expect(getTitleRow(page).locator("textarea").nth(0)).toHaveValue("Question 1");
    await getBarItemByTitle(page, "All Pages").click();
    await getListItemByText(page, "page2").click();
    await expect(getTitleRow(page).locator("textarea").nth(0)).toHaveValue("Question 4");
    await getBarItemByTitle(page, "page2").click();
    await getListItemByText(page, "All Pages").click();
    await expect(getTitleRow(page).locator("textarea").nth(0)).toHaveValue("Question 1");
  });
});
