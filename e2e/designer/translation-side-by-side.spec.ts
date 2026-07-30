import { url, test, expect, setJSON, setCreatorProp, getJSON, getTabbedMenuItemByText, getBarItemByTitle, getListItemByText } from "../helper";

const title = "Translation tab - side by side";

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

  test("layout: two ~50% panes, settings in the property grid, no strings grid", async ({ page }) => {
    await openSideBySideTranslation(page);
    await expect(page.locator(".st-strings")).toHaveCount(0);
    // The property grid hosts the view switcher and the language dropdowns.
    const sidebar = page.locator(".svc-side-bar");
    await expect(sidebar.locator(".spg-question[data-name=viewMode]")).toBeVisible();
    await expect(sidebar.locator(".spg-question[data-name=sourceLocale]")).toBeVisible();
    await expect(sidebar.locator(".spg-question[data-name=targetLocale]")).toBeVisible();
    const sourceBox = await page.locator(".st-side-by-side__source").boundingBox();
    const targetBox = await page.locator(".st-side-by-side__target").boundingBox();
    expect(Math.abs(sourceBox!.width - targetBox!.width)).toBeLessThanOrEqual(2);
    await expect(page.locator(".st-side-by-side__source").getByText("Question 1")).toBeVisible();
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1")).toBeVisible();
  });

  test("toolbar: pages dropdown holds real pages only; property grid dropdowns show default languages", async ({ page }) => {
    await openSideBySideTranslation(page);
    await expect(getBarItemByTitle(page, "All Pages")).toHaveCount(0);
    await expect(getBarItemByTitle(page, "page1")).toBeVisible();
    const sidebar = page.locator(".svc-side-bar");
    await expect(sidebar.locator(".spg-question[data-name=sourceLocale]")).toContainText("Default (English)");
    await expect(sidebar.locator(".spg-question[data-name=targetLocale]")).toContainText("Deutsch");
    await getBarItemByTitle(page, "page1").click();
    await expect(getListItemByText(page, "page2")).toBeVisible();
    await expect(getListItemByText(page, "Survey Strings")).toHaveCount(0);
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
    // The target pane renders inline string editors; the source pane suppresses them entirely.
    await expect(page.locator(".st-side-by-side__target .svc-string-editor .sv-string-editor").filter({ visible: true }).first()).toBeVisible();
    await expect(page.locator(".st-side-by-side__source .svc-string-editor")).toHaveCount(0);
    await expect(page.locator(".st-side-by-side__source .sv-string-editor")).toHaveCount(0);
  });

  test("survey title and description are shown on the first page only", async ({ page }) => {
    await setJSON(page, {
      title: { default: "Survey title", de: "Umfragetitel" },
      description: "Survey description",
      ...json
    });
    await setCreatorProp(page, "translationMode", "sideBySide");
    await getTabbedMenuItemByText(page, "Translation").click();
    await expect(page.locator(".st-side-by-side__source").getByText("Survey title")).toBeVisible();
    await expect(page.locator(".st-side-by-side__source").getByText("Survey description")).toBeVisible();
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Umfragetitel")).toBeVisible();

    await getBarItemByTitle(page, "page1").click();
    await getListItemByText(page, "page2").click();
    await expect(page.locator(".st-side-by-side__source").getByText("Question 4")).toBeVisible();
    await expect(page.locator(".st-side-by-side__source").getByText("Survey title")).toHaveCount(0);
    await expect(page.locator(".st-side-by-side__source").getByText("Survey description")).toHaveCount(0);
    await expect(page.locator(".st-side-by-side__target").getByText("Umfragetitel")).toHaveCount(0);

    await getBarItemByTitle(page, "page2").click();
    await getListItemByText(page, "page1").click();
    await expect(page.locator(".st-side-by-side__source").getByText("Survey title")).toBeVisible();
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Umfragetitel")).toBeVisible();
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

  test("signature pad placeholder is editable in the target pane", async ({ page }) => {
    await setJSON(page, {
      locale: "de",
      elements: [{ type: "signaturepad", name: "q1" }]
    });
    await setCreatorProp(page, "translationMode", "sideBySide");
    await getTabbedMenuItemByText(page, "Translation").click();
    // The source pane shows the placeholder as plain text.
    await expect(page.locator(".st-side-by-side__source .sjs_sp_placeholder").getByText("Sign here")).toBeVisible();
    await expect(page.locator(".st-side-by-side__source .sjs_sp_placeholder .sv-string-editor")).toHaveCount(0);

    // The placeholder overlay is click-through in the default theme (pointer-events: none);
    // the target pane re-enables it, so the click below reaches the string editor.
    // "Bitte hier signieren" on purpose: the built-in German default is "Hier unterschreiben",
    // and typing a text equal to the locale default is treated as "no change" and not stored.
    const placeholder = page.locator(".st-side-by-side__target .sjs_sp_placeholder .sv-string-editor");
    await placeholder.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("Bitte hier signieren");
    await page.keyboard.press("Control+Enter");
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].placeholder.de).toEqual("Bitte hier signieren");
    await expect(page.locator(".st-side-by-side__target .sjs_sp_placeholder").getByText("Bitte hier signieren")).toBeVisible();
  });

  test("target locale switch re-renders target pane strings", async ({ page }) => {
    // Keep the locale dropdowns short so every item is rendered in the popup list.
    await page.evaluate(() => {
      (window as any).Survey.surveyLocalization.supportedLocales = ["de", "it"];
    });
    await openSideBySideTranslation(page);
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1")).toBeVisible();
    // Click the dropdown wrapper: the input itself sits under the prefix-icon wrapper.
    await page.locator(".sd-dropdown__input").filter({ has: page.getByRole("combobox", { name: "Target language" }) }).click();
    await page.getByRole("option", { name: "Italiano" }).click();
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
});

const choicesJson = {
  locale: "de",
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
        {
          type: "dropdown", name: "q5",
          choices: [{ value: "A", text: "AA" }, "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
        },
        { type: "tagbox", name: "q6", choices: ["t1", "t2"] },
        {
          type: "matrixdropdown",
          name: "q3",
          columns: [{ name: "col1", cellType: "dropdown", title: "Column 1", choices: [{ value: "A", text: "AA" }, "B"] }],
          rows: [{ value: "row1", text: "Row 1" }]
        }
      ]
    }
  ]
};

async function openSideBySideWithChoices(page) {
  await setJSON(page, choicesJson);
  await setCreatorProp(page, "translationMode", "sideBySide");
  await getTabbedMenuItemByText(page, "Translation").click();
  await expect(page.locator(".st-side-by-side__source")).toBeVisible();
  await expect(page.locator(".st-side-by-side__target")).toBeVisible();
}

test.describe(title + " choices", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("dropdown and tagbox choices render as flattened lists in both panes; show more expands both", async ({ page }) => {
    await openSideBySideWithChoices(page);
    const sourceChoices = page.locator(".st-side-by-side__source [data-name=q5] .svc-question__dropdown-choice");
    const targetChoices = page.locator(".st-side-by-side__target [data-name=q5] .svc-question__dropdown-choice");
    // 12 choices collapse to maxVisibleChoices (10) in both panes.
    await expect(sourceChoices).toHaveCount(10);
    await expect(targetChoices).toHaveCount(10);
    await expect(page.locator(".st-side-by-side__source [data-name=q6] .svc-question__dropdown-choice")).toHaveCount(2);
    await expect(page.locator(".st-side-by-side__target [data-name=q6] .svc-question__dropdown-choice")).toHaveCount(2);

    // Expanding the list in the target pane expands the source pane too - the rows stay aligned.
    await page.locator(".st-side-by-side__target [data-name=q5]").getByRole("button", { name: "Show more" }).click();
    await expect(targetChoices).toHaveCount(12);
    await expect(sourceChoices).toHaveCount(12);
    await page.locator(".st-side-by-side__target [data-name=q5]").getByRole("button", { name: "Show less" }).click();
    await expect(targetChoices).toHaveCount(10);
    await expect(sourceChoices).toHaveCount(10);
  });

  test("editing a dropdown choice in the target pane updates the JSON translation; source pane read-only", async ({ page }) => {
    await openSideBySideWithChoices(page);
    // The source pane renders the same list without string editors.
    await expect(page.locator(".st-side-by-side__source [data-name=q5]").getByText("AA")).toBeVisible();
    await expect(page.locator(".st-side-by-side__source [data-name=q5] .svc-string-editor")).toHaveCount(0);

    const targetChoice = page.locator(".st-side-by-side__target [data-name=q5] .sv-string-editor").getByText("AA");
    await targetChoice.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("AA de");
    await page.keyboard.press("Control+Enter");
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[1].choices[0].text.de).toEqual("AA de");
    expect(resultJson.pages[0].elements[1].choices[0].text.default).toEqual("AA");
    await expect(page.locator(".st-side-by-side__source [data-name=q5]").getByText("AA", { exact: true })).toBeVisible();
  });

  test("question strings dialog: used/all filter, read-only source column, target edit updates the column choice translation", async ({ page }) => {
    await openSideBySideWithChoices(page);
    // The panes render lazily - scroll the matrix into the view before using its title action.
    await page.locator(".st-side-by-side__target").evaluate(el => { el.scrollTop = el.scrollHeight; });
    await page.locator(".st-side-by-side__target [data-name=q3]").getByRole("button", { name: "Translate question strings" }).click();
    const dialog = page.locator(".st-translation-dialog");
    await expect(dialog).toBeVisible();

    // The used/all strings switcher sits on top; Used Strings Only is the default mode,
    // so empty strings (the matrix has no description) are hidden until All Strings is chosen.
    await expect(dialog.getByText("Used Strings Only")).toBeVisible();
    await expect(dialog.locator("table tr").filter({ hasText: "Question description" })).toHaveCount(0);

    // The one-row matrix of the col1 "A" choice: source holds the default text, target is editable.
    // Edited in the compact used-strings mode - the grid renders lazily and the short list fits.
    const choiceRow = dialog.locator("table tr").filter({ has: page.getByText("A", { exact: true }) });
    await expect(choiceRow.locator("textarea").nth(0)).toHaveValue("AA");
    await expect(choiceRow.locator("textarea").nth(0)).not.toBeEditable();
    const targetCell = choiceRow.locator("textarea").nth(1);
    await targetCell.fill("AA de");
    await page.keyboard.press("Tab");

    // Switching to All Strings adds the empty strings; the description row sits on top.
    await dialog.getByText("All Strings").click();
    await expect(dialog.locator("table tr").filter({ hasText: "Question description" }).first()).toBeVisible();

    await page.getByRole("button", { name: "Done" }).click();
    await expect(dialog).toHaveCount(0);
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[3].columns[0].choices[0].text.de).toEqual("AA de");
    expect(resultJson.pages[0].elements[3].columns[0].choices[0].text.default).toEqual("AA");
  });

  test("question strings dialog: available for a plain question, edits its title translation", async ({ page }) => {
    await openSideBySideWithChoices(page);
    await page.locator(".st-side-by-side__target [data-name=q1]").getByRole("button", { name: "Translate question strings" }).click();
    const dialog = page.locator(".st-translation-dialog");
    await expect(dialog).toBeVisible();
    const titleRow = dialog.locator("table tr").filter({ hasText: "Question title" });
    await expect(titleRow.locator("textarea").nth(0)).toHaveValue("Question 1");
    const targetCell = titleRow.locator("textarea").nth(1);
    await expect(targetCell).toHaveValue("Frage 1");
    await targetCell.fill("Frage 1 dialog");
    await page.keyboard.press("Tab");
    await page.getByRole("button", { name: "Done" }).click();
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].title.de).toEqual("Frage 1 dialog");
    // The live edit mirrored into the target pane.
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1 dialog")).toBeVisible();
  });
});
