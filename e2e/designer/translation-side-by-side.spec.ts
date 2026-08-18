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
// The property grid dropdown: the input itself sits under the prefix-icon wrapper, so the
// wrapper is what gets clicked to open the list.
async function openLocaleDropdown(page, title: string) {
  await page.locator(".sd-dropdown__input").filter({ has: page.getByRole("combobox", { name: title }) }).click();
}
// The element strings dialog: the strings matrix of one element, in a modal of its own.
function getStringsDialog(page) {
  return page.locator(".sv-popup.st-element-strings-dialog");
}
async function closeStringsDialog(page) {
  await getStringsDialog(page).locator(".sv-popup__body-footer button").click();
  await expect(getStringsDialog(page)).toHaveCount(0);
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

  test("language dropdowns: the source lists the survey's languages, the target every language but the default one", async ({ page }) => {
    await openSideBySideTranslation(page);
    // German is the only translation the survey has, and it is the current target - the source
    // dropdown holds the default language alone.
    await openLocaleDropdown(page, "Source language");
    await expect(page.getByRole("option")).toHaveText(["Default (English)"]);
    await page.keyboard.press("Escape");
    // The target offers every language to start a translation - except the default one.
    await openLocaleDropdown(page, "Target language");
    await expect(page.getByRole("option", { name: "Default (English)" })).toHaveCount(0);
    await expect(page.getByRole("option", { name: "Deutsch" })).toBeVisible();
    await expect(page.getByRole("option", { name: "Italiano" })).toBeVisible();
    // Translating into Italian frees German as a source; a language the survey does not use
    // (French) is offered as a target only.
    await page.getByRole("option", { name: "Italiano" }).click();
    await openLocaleDropdown(page, "Source language");
    await expect(page.getByRole("option")).toHaveText(["Default (English)", "Deutsch"]);
    await page.keyboard.press("Escape");
  });

  test("target language dropdown: translation counts, and the languages with translations first", async ({ page }) => {
    await openSideBySideTranslation(page);
    await openLocaleDropdown(page, "Target language");
    // German is the only language the survey stores strings for - it shows its share of the
    // survey's used strings, and it opens the list.
    const options = page.getByRole("option");
    await expect(options.first()).toContainText("Deutsch");
    const deProgress = options.filter({ hasText: "Deutsch" }).locator(".svc-translation-locale-item__progress");
    await expect(deProgress).toHaveText(/^\d+ \/ \d+$/);
    // A language nothing is translated into shows no numbers at all.
    await expect(options.filter({ hasText: "Italiano" }).locator(".svc-translation-locale-item__progress")).toHaveCount(0);
    const before = await deProgress.textContent();
    await page.keyboard.press("Escape");
    // The collapsed dropdown keeps the plain language name - the counters belong to the list.
    const targetQuestion = page.locator(".svc-side-bar .spg-question[data-name=targetLocale]");
    await expect(targetQuestion.getByRole("combobox", { name: "Target language" })).toHaveValue("Deutsch");
    await expect(targetQuestion.locator(".svc-translation-locale-item__progress")).toBeHidden();

    // Translating one more of the survey's used strings is counted the next time the list opens.
    await getBarItemByTitle(page, "page1").click();
    await getListItemByText(page, "page2").click();
    await page.locator(".st-side-by-side__target .sv-string-editor").getByText("Question 4").click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("Frage 4");
    await page.keyboard.press("Control+Enter");
    expect((await getJSON(page)).pages[1].elements[0].title.de).toEqual("Frage 4");
    await openLocaleDropdown(page, "Target language");
    await expect(page.getByRole("option").filter({ hasText: "Deutsch" })
      .locator(".svc-translation-locale-item__progress")).not.toHaveText(before!);
    await page.keyboard.press("Escape");
  });

  test("clearing the target language hides the target pane and disables the translate action", async ({ page }) => {
    await openSideBySideTranslation(page);
    const sidebar = page.locator(".svc-side-bar");
    await sidebar.locator(".spg-question[data-name=targetLocale]").getByRole("button", { name: "Clear" }).click();

    await expect(page.locator(".st-side-by-side__target")).toHaveCount(0);
    await expect(page.locator(".st-side-by-side--no-target")).toBeVisible();
    // The source pane, alone, takes the whole surface.
    const contentBox = await page.locator(".st-side-by-side").boundingBox();
    const sourceBox = await page.locator(".st-side-by-side__source").boundingBox();
    expect(Math.abs(sourceBox!.width - contentBox!.width)).toBeLessThanOrEqual(2);
    await expect(getBarItemByTitle(page, "Translate remaining strings")).toBeDisabled();

    // Selecting a language again brings the pane back with its inline editors.
    await openLocaleDropdown(page, "Target language");
    await page.getByRole("option", { name: "Deutsch" }).click();
    await expect(page.locator(".st-side-by-side__target")).toBeVisible();
    const targetTitle = page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1");
    await targetTitle.click();
    await page.keyboard.press("Control+a");
    await page.keyboard.type("Frage 1 neu");
    await page.keyboard.press("Control+Enter");
    expect((await getJSON(page)).pages[0].elements[0].title.de).toEqual("Frage 1 neu");
  });

  test("progress link: the target language counts, the way to the next untranslated string and the clear button", async ({ page }) => {
    await openSideBySideTranslation(page);
    const progress = page.locator(".svc-side-bar .spg-question[data-name=translationProgress]");
    const progressLink = progress.getByRole("button", { name: /strings translated/ });
    await expect(progressLink).toHaveText(/^\d+ of \d+ strings translated$/);
    const before = await progressLink.textContent();

    // The click opens the strings dialog of the first element that has an untranslated string,
    // with the input focus in its editor - translating there moves the counts.
    await progressLink.click();
    const stringsDialog = getStringsDialog(page);
    await expect(stringsDialog).toBeVisible();
    await expect(stringsDialog.locator("textarea:focus")).toHaveCount(1);
    await stringsDialog.locator("textarea:focus").fill("Uebersetzt");
    await page.keyboard.press("Tab");
    await expect(progressLink).not.toHaveText(before!);
    await closeStringsDialog(page);

    // The clear button drops the language's texts after a confirmation; the language stays the
    // one being translated, so the target pane is still there and the progress starts over.
    await progress.getByRole("button", { name: "Clear" }).click();
    const dialog = page.locator(".sv-popup--confirm");
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: "OK" }).click();
    await expect(progressLink).toHaveText(/^0 of \d+ strings translated$/);
    await expect(page.locator(".st-side-by-side__target")).toBeVisible();
    expect((await getJSON(page)).pages[0].elements[0].title.de).toBeUndefined();
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

  test("element state indicator flips to translated after typing into an inline editor", async ({ page }) => {
    // A single page keeps the survey header visible while typing. Every element's indicator
    // covers its own strings only, so each flips exactly on its own translation.
    await setJSON(page, {
      locale: "de",
      title: "Survey title",
      pages: [
        {
          name: "page1",
          title: "Page 1 title",
          elements: [
            { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
            { type: "text", name: "q2" },
            { type: "text", name: "q3", title: "Question 3" }
          ]
        }
      ]
    });
    await setCreatorProp(page, "translationMode", "sideBySide");
    await getTabbedMenuItemByText(page, "Translation").click();
    const target = page.locator(".st-side-by-side__target");
    // q1 is translated into German, q3 is untranslated. q2 stores no string of its own and is
    // untranslated as well: a question is displayed - and translated - by its title, the name
    // fallback of a title-less one included, so it always has that one string to translate.
    await expect(target.locator("[data-name=q1] .svc-translation-state--translated")).toBeVisible();
    await expect(target.locator("[data-name=q2] .svc-translation-state--untranslated")).toContainText("1");
    await expect(target.locator("[data-name=q3] .svc-translation-state--untranslated")).toBeVisible();
    await expect(target.locator(".sd-page__title .svc-translation-state--untranslated")).toBeVisible();
    await expect(target.locator(".sd-header__text .svc-translation-state--untranslated")).toBeVisible();

    const type = async (locator, text: string) => {
      await locator.click();
      await page.keyboard.press("Control+a");
      await page.keyboard.type(text);
      await page.keyboard.press("Control+Enter");
    };
    await type(target.locator("[data-name=q3] .sv-string-editor").getByText("Question 3"), "Frage 3");
    await expect(target.locator("[data-name=q3] .svc-translation-state--translated")).toBeVisible();
    // The question states do not roll up - the page and survey indicators are unchanged.
    await expect(target.locator(".sd-page__title .svc-translation-state--untranslated")).toBeVisible();
    await expect(target.locator(".sd-header__text .svc-translation-state--untranslated")).toBeVisible();

    // Typing the page title translation flips the page indicator.
    await type(target.locator(".sd-page__title .sv-string-editor").getByText("Page 1 title"), "Seite 1");
    await expect(target.locator(".sd-page__title .svc-translation-state--translated")).toBeVisible();

    // Typing the survey title translation flips the survey indicator.
    await type(target.locator(".sd-header__text .sv-string-editor").getByText("Survey title"), "Umfragetitel");
    await expect(target.locator(".sd-header__text .svc-translation-state--translated")).toBeVisible();
  });

  test("target locale switch re-renders target pane strings", async ({ page }) => {
    // Keep the locale dropdowns short so every item is rendered in the popup list.
    await page.evaluate(() => {
      (window as any).Survey.surveyLocalization.supportedLocales = ["de", "it"];
    });
    await openSideBySideTranslation(page);
    await expect(page.locator(".st-side-by-side__target .sv-string-editor").getByText("Frage 1")).toBeVisible();
    await openLocaleDropdown(page, "Target language");
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
    // The survey locale is the initial hint of the target language, never written back.
    expect(resultJson.locale).toEqual("de");
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

  test("question strings dialog: used/all filter, source column, target edit updates the column choice translation", async ({ page }) => {
    await openSideBySideWithChoices(page);
    // The panes render lazily - scroll the matrix into the view before using its title action.
    await page.locator(".st-side-by-side__target").evaluate(el => { el.scrollTop = el.scrollHeight; });
    await page.locator(".st-side-by-side__target [data-name=q3] .svc-translation-state").click();
    const dialog = getStringsDialog(page);
    await expect(dialog).toBeVisible();
    // The dialog is named by the element it translates.
    await expect(dialog.locator(".sv-popup__body-header")).toHaveText("q3");

    // The used/all strings action offers the mode it switches to; Used Strings Only is the
    // default, so empty strings (the matrix has no description) are hidden until then.
    await expect(dialog.getByRole("button", { name: "All Strings" })).toBeVisible();
    await expect(dialog.locator("table tr").filter({ hasText: "Question description" })).toHaveCount(0);

    // The header row names the two languages the columns edit; the column of the string names
    // has no title, so it is not one of the header cells.
    await expect(dialog.locator("table thead th")).toHaveCount(2);
    await expect(dialog.locator("table thead th").nth(0)).toHaveText("Source: Default (English)");
    await expect(dialog.locator("table thead th").nth(1)).toHaveText("Target: Deutsch"); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code

    // The col1 "A" choice row: the string name, its source text and the target editor.
    const choiceRow = dialog.locator("table tr").filter({ hasText: "Choices" }).first();
    await expect(choiceRow.locator("textarea")).toHaveCount(2);
    await expect(choiceRow.locator("textarea").nth(0)).toHaveValue("AA");
    await choiceRow.locator("textarea").nth(1).fill("AA de");
    await page.keyboard.press("Tab");

    // Switching to All Strings adds the empty strings into the same matrix.
    await dialog.getByRole("button", { name: "All Strings" }).click();
    await expect(dialog.locator("table tr").filter({ hasText: "Question description" }).first()).toBeVisible();
    await expect(dialog.getByRole("button", { name: "Used Strings Only" })).toBeVisible();

    // The edits apply immediately - the footer holds a single closing button.
    await expect(dialog.locator(".sv-popup__body-footer button")).toHaveCount(1);
    await closeStringsDialog(page);
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[3].columns[0].choices[0].text.de).toEqual("AA de");
    expect(resultJson.pages[0].elements[3].columns[0].choices[0].text.default).toEqual("AA");
  });

  test("question strings dialog: edits the title translation and opens the next element on its own", async ({ page }) => {
    await openSideBySideWithChoices(page);
    const target = page.locator(".st-side-by-side__target");
    // q1's title already has a de translation, so its button shows no count.
    await target.locator("[data-name=q1]").getByRole("button", { name: "All strings are translated" }).click();
    const dialog = getStringsDialog(page);
    await expect(dialog).toBeVisible();
    const titleRow = dialog.locator("table tr").filter({ hasText: "Question title" });
    await expect(titleRow.locator("textarea").nth(0)).toHaveValue("Question 1");
    const targetCell = titleRow.locator("textarea").nth(1);
    await expect(targetCell).toHaveValue("Frage 1");
    await targetCell.fill("Frage 1 dialog");
    await page.keyboard.press("Tab");
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].title.de).toEqual("Frage 1 dialog");
    // The edit mirrored into the target pane behind the dialog.
    await closeStringsDialog(page);
    await expect(target.locator(".sv-string-editor").getByText("Frage 1 dialog")).toBeVisible();
    // The next element opens a dialog of its own - one element at a time.
    await target.locator("[data-name=q5] .svc-translation-state").click();
    await expect(dialog).toHaveCount(1);
    await expect(dialog.locator("table tr").filter({ hasText: "Choices: A" })).toHaveCount(1);
    await expect(dialog.locator("table tr").filter({ hasText: "Question 1" })).toHaveCount(0);
  });
});

const containersJson = {
  locale: "de",
  description: "Survey description",
  pages: [
    {
      name: "page1",
      elements: [
        { type: "panel", name: "panel1", description: "Panel 1 description", elements: [{ type: "text", name: "q1", title: "Question 1" }] },
        { type: "panel", name: "panel2", elements: [{ type: "text", name: "q2" }] }
      ]
    },
    { name: "page2", title: "Page 2 title", elements: [{ type: "text", name: "q3" }] }
  ]
};

async function openSideBySideContainers(page) {
  await setJSON(page, containersJson);
  await setCreatorProp(page, "translationMode", "sideBySide");
  await getTabbedMenuItemByText(page, "Translation").click();
  await expect(page.locator(".st-side-by-side__source")).toBeVisible();
  await expect(page.locator(".st-side-by-side__target")).toBeVisible();
}

test.describe(title + " containers", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("empty survey and page titles show placeholders with translate actions; a panel without strings is ignored", async ({ page }) => {
    await openSideBySideContainers(page);
    const target = page.locator(".st-side-by-side__target");
    // The button's accessible name is its state tooltip, and the name repeats across element
    // types, so the assertions scope it through the hosting title row. The survey has no
    // title - the placeholder hosts the translate action (untranslated: the description).
    await expect(target.locator("[aria-placeholder='Survey Title']")).toBeVisible();
    await expect(target.locator(".sd-container-modern__title").locator(".svc-translation-state--untranslated")).toBeVisible();
    // page1 has no title either; it stores no strings of its own at all (the nested panel
    // strings belong to the panel's action), so its button reads the "nothing" state.
    await expect(target.locator("[aria-placeholder='Page 1']")).toBeVisible();
    await expect(target.locator(".sd-page__title").getByRole("button", { name: "No strings to translate" })).toBeVisible();
    // panel1 (description only) gets a forced title row with a placeholder and the action;
    // panel2 has neither a title nor a description - no placeholder, no action.
    await expect(target.locator("[aria-placeholder='Panel Title']")).toHaveCount(1);
    await expect(target.locator(".sd-panel__title").locator(".svc-translation-state--untranslated")).toHaveCount(1);
    // The source pane gets no translate actions at all, whatever their state.
    const source = page.locator(".st-side-by-side__source");
    await expect(source.locator(".svc-translation-state")).toHaveCount(0);
  });

  test("survey strings dialog: own strings only, edits the description translation", async ({ page }) => {
    await openSideBySideContainers(page);
    const target = page.locator(".st-side-by-side__target");
    await target.locator(".sd-container-modern__title").locator(".svc-translation-state--untranslated").click();
    const dialog = getStringsDialog(page);
    await expect(dialog).toBeVisible();
    // A survey without a title is named by the type name.
    await expect(dialog.locator(".sv-popup__body-header")).toHaveText("Survey");
    // Scoped to the survey-level strings - no rows of the nested elements.
    await expect(dialog.locator("table tr").filter({ hasText: "Question 1" })).toHaveCount(0);
    const row = dialog.locator("table tr").filter({ hasText: "Survey description" });
    await expect(row.locator("textarea").nth(0)).toHaveValue("Survey description");
    await row.locator("textarea").nth(1).fill("Umfragebeschreibung");
    await page.keyboard.press("Tab");
    const resultJson = await getJSON(page);
    expect(resultJson.description.de).toEqual("Umfragebeschreibung");
    // The edit mirrored into the target pane, and the button of the completed element lost
    // its count.
    await closeStringsDialog(page);
    await expect(target.locator(".sv-string-editor").getByText("Umfragebeschreibung")).toBeVisible();
    await expect(target.locator(".sd-container-modern__title .svc-translation-state--translated")).toBeVisible();
  });

  test("page strings dialog: an empty page falls back to the all-strings mode and edits the title", async ({ page }) => {
    await openSideBySideContainers(page);
    const target = page.locator(".st-side-by-side__target");
    await target.locator(".sd-page__title").getByRole("button", { name: "No strings to translate" }).click();
    const dialog = getStringsDialog(page);
    await expect(dialog).toBeVisible();
    await expect(dialog.locator("table tr").filter({ hasText: "Question 1" })).toHaveCount(0);
    // page1 stores no strings, so the used-only default would show an empty matrix - the dialog
    // opens in the all-strings mode and the filter action cannot bring the empty matrix back.
    await expect(dialog.getByRole("button", { name: "Used Strings Only" })).toBeDisabled();
    const titleRow = dialog.locator("table tr").filter({ hasText: "Page title" });
    await titleRow.locator("textarea").nth(1).fill("Seite 1");
    await page.keyboard.press("Tab");
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].title.de).toEqual("Seite 1");
    await closeStringsDialog(page);
    await expect(target.locator(".sv-string-editor").getByText("Seite 1")).toBeVisible();
  });

  test("panel strings dialog: available through the forced title row, edits the description translation", async ({ page }) => {
    await openSideBySideContainers(page);
    const target = page.locator(".st-side-by-side__target");
    await target.locator(".sd-panel__title").locator(".svc-translation-state--untranslated").click();
    const dialog = getStringsDialog(page);
    await expect(dialog).toBeVisible();
    await expect(dialog.locator("table tr").filter({ hasText: "Question 1" })).toHaveCount(0);
    const row = dialog.locator("table tr").filter({ hasText: "Panel description" });
    await expect(row.locator("textarea").nth(0)).toHaveValue("Panel 1 description");
    await row.locator("textarea").nth(1).fill("Panelbeschreibung");
    await page.keyboard.press("Tab");
    const resultJson = await getJSON(page);
    expect(resultJson.pages[0].elements[0].description.de).toEqual("Panelbeschreibung");
    await closeStringsDialog(page);
    await expect(target.getByText("Panelbeschreibung")).toBeVisible();
  });
});
