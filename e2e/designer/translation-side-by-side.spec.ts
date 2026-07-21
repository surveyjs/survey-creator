import { url, test, expect, setJSON, setCreatorProp, getJSON, getTabbedMenuItemByText, getBarItemByTitle, getListItemByText } from "../helper";

const title = "Translation tab - side by side";

const json = {
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

async function openSideBySideTranslation(page) {
  await setJSON(page, json);
  await setCreatorProp(page, "translationMode", "sideBySide");
  await getTabbedMenuItemByText(page, "Translation").click();
  await expect(page.locator(".st-side-by-side__source")).toBeVisible();
  await expect(page.locator(".st-side-by-side__target")).toBeVisible();
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("layout: two ~50% panes, no sidebar, no strings grid", async ({ page }) => {
    await openSideBySideTranslation(page);
    await expect(page.locator(".st-strings")).toHaveCount(0);
    await expect(page.locator(".svc-side-bar .svc-flex-column.svc-side-bar__wrapper")).toHaveCount(0);
    const sourceBox = await page.locator(".st-side-by-side__source").boundingBox();
    const targetBox = await page.locator(".st-side-by-side__target").boundingBox();
    expect(Math.abs(sourceBox!.width - targetBox!.width)).toBeLessThanOrEqual(2);
    await expect(page.locator(".st-side-by-side__source").getByText("Question 1")).toBeVisible();
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1")).toBeVisible();
  });

  test("toolbar: no 'All Pages'; 'Survey Strings' present; source/destination dropdowns show defaults", async ({ page }) => {
    await openSideBySideTranslation(page);
    await expect(getBarItemByTitle(page, "All Pages")).toHaveCount(0);
    await expect(getBarItemByTitle(page, "page1")).toBeVisible();
    await expect(getBarItemByTitle(page, "Default (English)")).toBeVisible();
    await expect(getBarItemByTitle(page, "Deutsch")).toBeVisible();
    await getBarItemByTitle(page, "page1").click();
    await expect(getListItemByText(page, "Survey Strings")).toBeVisible();
    await expect(getListItemByText(page, "All Pages")).toHaveCount(0);
    await page.keyboard.press("Escape");
  });

  test("inline edit in target pane updates the JSON translation; source pane unchanged", async ({ page }) => {
    await openSideBySideTranslation(page);
    const targetTitle = page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1");
    await targetTitle.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("Frage 1 neu");
    await page.keyboard.press("Control+Enter");
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].title.de).toEqual("Frage 1 neu");
    expect(resultJson.pages[0].elements[0].title.default).toEqual("Question 1");
    await expect(page.locator(".st-side-by-side__source").getByText("Question 1")).toBeVisible();
  });

  test("source pane is read-only", async ({ page }) => {
    await openSideBySideTranslation(page);
    // The destination pane renders inline string editors; the source pane suppresses them entirely.
    await expect(page.locator(".st-side-by-side__target .svc-string-editor .sv-string-editor").filter({ visible: true }).first()).toBeVisible();
    await expect(page.locator(".st-side-by-side__source .svc-string-editor")).toHaveCount(0);
    await expect(page.locator(".st-side-by-side__source .sv-string-editor")).toHaveCount(0);
  });

  test("page dropdown switches both panes", async ({ page }) => {
    await openSideBySideTranslation(page);
    await getBarItemByTitle(page, "page1").click();
    await getListItemByText(page, "page2").click();
    await expect(page.locator(".st-side-by-side__source").getByText("Question 4")).toBeVisible();
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Question 4")).toBeVisible();
  });

  test("Ctrl+Z / Ctrl+Y", async ({ page }) => {
    await openSideBySideTranslation(page);
    const targetTitle = page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1");
    await targetTitle.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("Frage 1 neu");
    await page.keyboard.press("Control+Enter");
    expect((await getJSON(page)).pages[0].elements[0].title.de).toEqual("Frage 1 neu");

    // The shortcut listener sits on the creator root element, so focus must be inside it:
    // focus a toolbar button (open + close the pages dropdown) before pressing the hotkeys.
    await getBarItemByTitle(page, "page1").click();
    await page.keyboard.press("Escape");
    await page.keyboard.press("Control+z");
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1")).toBeVisible();
    expect((await getJSON(page)).pages[0].elements[0].title.de).toEqual("Frage 1");

    // Undo re-selects an element, which moves focus out of the toolbar - refocus before redo.
    await getBarItemByTitle(page, "page1").click();
    await page.keyboard.press("Escape");
    await page.keyboard.press("Control+y");
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1 neu")).toBeVisible();
    expect((await getJSON(page)).pages[0].elements[0].title.de).toEqual("Frage 1 neu");
  });

  test("destination locale switch re-renders target pane strings", async ({ page }) => {
    // Keep the locale dropdowns short so every item is rendered in the popup list.
    await page.evaluate(() => {
      (window as any).Survey.surveyLocalization.supportedLocales = ["de", "it"];
    });
    await openSideBySideTranslation(page);
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1")).toBeVisible();
    await getBarItemByTitle(page, "Deutsch").click();
    await getListItemByText(page, "Italiano").click();
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1")).toHaveCount(0);
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Question 1")).toBeVisible();

    const targetTitle = page.locator(".st-side-by-side__target .sv-string-editor").getByText("Question 1");
    await targetTitle.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("Question 1 it");
    await page.keyboard.press("Control+Enter");
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].title.it).toEqual("Question 1 it");
    expect(resultJson.pages[0].elements[0].title.de).toEqual("Frage 1");
  });

  test("'Survey Strings' shows the two-column grid; editing the Complete button caption writes the destination value", async ({ page }) => {
    await openSideBySideTranslation(page);
    await getBarItemByTitle(page, "page1").click();
    await getListItemByText(page, "Survey Strings").click();
    await expect(page.locator(".st-side-by-side__source")).toHaveCount(0);
    await expect(page.locator(".st-strings")).toBeVisible();
    const headerColumns = page.locator(".st-strings-header table tr").first().locator("th");
    await expect(headerColumns).toHaveCount(2);

    const completeTextRow = page.locator(".st-strings table tr").filter({ hasText: "\"Complete Survey\" button text" }).first();
    await expect(completeTextRow).toBeVisible();
    const destinationCell = completeTextRow.locator("textarea").nth(1);
    await destinationCell.click();
    await destinationCell.fill("Fertig");
    await page.keyboard.press("Tab");
    const resultJson = await getJSON(page);
    expect(resultJson.completeText.de).toEqual("Fertig");
  });
});
