import type { Locator, Page } from "@playwright/test";
import {
  urlRichText,
  test,
  expect,
  setJSON,
  getJSON,
  getTabbedMenuItemByText,
  getPropertyGridCategory,
  generalGroupName,
  creatorTabDesignerName,
  creatorTabPreviewName,
  creatorTabJsonEditorName,
  creatorTabTranslationName
} from "./helper";

const title = "Rich text";

const json = {
  title: "Survey title",
  description: "Survey description",
  pages: [{
    name: "page1",
    description: "Page description",
    elements: [{
      type: "radiogroup",
      name: "q",
      title: "Question title",
      description: "Question description",
      choices: ["Alpha", "Beta"]
    }]
  }]
};

const surveyTitle = (page: Page): Locator => page.locator(".sd-header__text .sd-title .sv-string-editor");
const surveyDescription = (page: Page): Locator => page.locator(".sd-header__text .sd-description .sv-string-editor");
const pageDescription = (page: Page): Locator => page.locator(".sd-page__description .sv-string-editor").first();
const questionTitle = (page: Page): Locator => page.locator(".sd-question[data-name='q'] .sd-question__title .sv-string-editor");
const questionDescription = (page: Page): Locator => page.locator(".sd-question[data-name='q'] .sd-question__description .sv-string-editor");
const choiceText = (page: Page): Locator => page.locator(".sd-question[data-name='q'] .svc-item-value-wrapper").filter({ hasText: "Alpha" }).locator(".sv-string-editor");

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urlRichText);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("formats block and inline strings and keeps plain strings as typed", async ({ page }) => {
    await setJSON(page, json);

    await surveyTitle(page).click();
    await expect(page.locator(".svc-string-editor__toolbar--open")).toHaveCount(0);
    await questionDescription(page).click();
    await expect(page.locator(".svc-string-editor__toolbar--open")).toHaveCount(0);

    const surfaceToolbar = page.locator(".svc-string-editor__toolbar--open");
    await format(page, surveyDescription(page), "description", "description", "Bold");
    await selectText(surveyDescription(page), "Survey", "description");
    await surfaceToolbar.getByRole("button", { name: "Bulleted list" }).click();
    await blur(surveyDescription(page));

    await format(page, pageDescription(page), "description", "description", "Italic");
    await selectText(pageDescription(page), "Page", "description");
    await surfaceToolbar.getByRole("button", { name: "Numbered list" }).click();
    await blur(pageDescription(page));

    await questionTitle(page).click();
    await selectText(questionTitle(page), "Question", "title");
    await expect(surfaceToolbar.getByRole("button", { name: "Bold" })).toBeVisible();
    await expect(surfaceToolbar.getByRole("button", { name: "Bulleted list" })).toHaveCount(0);
    await expect(surfaceToolbar.getByRole("button", { name: "Numbered list" })).toHaveCount(0);
    await surfaceToolbar.getByRole("button", { name: "Italic" }).click();
    await blur(questionTitle(page));

    await choiceText(page).click();
    await selectText(choiceText(page), "Alpha", "Alpha");
    await expect(surfaceToolbar.getByRole("button", { name: "Bulleted list" })).toHaveCount(0);
    await surfaceToolbar.getByRole("button", { name: "Italic" }).click();
    await blur(choiceText(page));

    await surveyTitle(page).click();
    await page.keyboard.press("Control+A");
    await page.keyboard.type("Tom & Jerry");
    await blur(surveyTitle(page));

    const result = await getJSON(page);
    expect(result.description).toContain("<ul>");
    expect(result.description).toContain("<strong>description</strong>");
    expect(result.pages[0].description).toContain("<ol>");
    expect(result.pages[0].description).toContain("<em>description</em>");
    expect(result.pages[0].elements[0].title).toContain("<em>Question title</em>");
    expect(result.pages[0].elements[0].description).toBe("Question description");
    expect(result.title).toBe("Tom & Jerry");
    expect(result.pages[0].elements[0].choices[0].value).toBe("Alpha");
    expect(result.pages[0].elements[0].choices[0].text).toContain("<em>Alpha</em>");

    await getTabbedMenuItemByText(page, creatorTabJsonEditorName).click();
    const source = page.locator(".svc-json-editor-tab__content-area");
    await expect(source).toHaveValue(/<ul>/);
    await expect(source).toHaveValue(/<em>Question title<\/em>/);
    await expect(source).toHaveValue(/"title": "Tom & Jerry"/);
  });

  test("Escape restores and Enter follows the edit mode", async ({ page }) => {
    await setJSON(page, json);

    const titleEditor = questionTitle(page);
    await titleEditor.click();
    await page.keyboard.type("ZZ");
    await page.keyboard.press("Escape");
    await expect(titleEditor).toContainText("Question title");
    await expect(titleEditor).not.toContainText("ZZ");

    await titleEditor.click();
    await placeCaret(titleEditor, "Question");
    await page.keyboard.press("Enter");
    await expect(titleEditor).toBeFocused();
    expect(await titleEditor.innerHTML()).toContain("<br>");
    await blur(titleEditor);
    const afterBreak = await getJSON(page);
    expect(afterBreak.pages[0].elements[0].title).toContain("<br>");

    const description = surveyDescription(page);
    await description.click();
    await page.keyboard.press("Control+End");
    await page.keyboard.press("Enter");
    await expect(description).not.toBeFocused();

    await description.click();
    await selectText(description, "Survey", "description");
    await page.locator(".svc-string-editor__toolbar--open").getByRole("button", { name: "Bulleted list" }).click();
    await placeCaret(description, "description");
    await page.keyboard.press("Enter");
    await expect(description).toBeFocused();
    expect(await description.locator("li").count()).toBeGreaterThan(1);
  });

  test("property grid editors match the string types and stay in sync", async ({ page }) => {
    await setJSON(page, json);
    await page.evaluate(() => {
      const creator = (window as any).creator;
      creator.selectElement(creator.survey.getQuestionByName("q"));
    });
    await revealCategory(page);

    const gridTitle = page.locator(".svc-side-bar [data-name='title']");
    await expect(gridTitle.locator(".sd-rich-text")).toBeVisible();
    await expect(gridTitle.getByRole("button", { name: "Bulleted list" })).toHaveCount(0);
    const gridDescription = page.locator(".svc-side-bar [data-name='description']");
    await expect(gridDescription.locator(".sd-rich-text")).toHaveCount(0);
    await expect(gridDescription.locator("textarea")).toBeVisible();

    const choiceColumns = await page.evaluate(() => {
      const choices = (window as any).creator.propertyGrid.getQuestionByName("choices");
      const row = choices.visibleRows[0];
      const cell = (name: string) => row.cells.filter((item: any) => item.column.name === name)[0].question;
      return { text: cell("text").getType(), breaks: cell("text").acceptCarriageReturn, value: cell("value").getType() };
    });
    expect(choiceColumns).toEqual({ text: "richtext", breaks: false, value: "text" });

    await page.evaluate(() => (window as any).creator.selectElement((window as any).creator.survey));
    await revealCategory(page);
    const surveyGridTitle = page.locator(".svc-side-bar [data-name='title']");
    await expect(surveyGridTitle.locator(".sd-rich-text")).toHaveCount(0);
    const surveyGridDescription = page.locator(".svc-side-bar [data-name='description']");
    await expect(surveyGridDescription.locator(".sd-rich-text")).toBeVisible();
    await expect(surveyGridDescription.getByRole("button", { name: "Bulleted list" })).toBeVisible();

    const area = surveyGridDescription.locator(".sd-rich-text__area");
    await area.click();
    await page.keyboard.press("Control+A");
    await page.keyboard.type("From the grid");
    await blur(area);
    await expect(surveyDescription(page)).toContainText("From the grid");
    const result = await getJSON(page);
    expect(result.description).toContain("From the grid");
  });

  test("preview renders formatting and a rich text answer stores HTML", async ({ page }) => {
    await setJSON(page, {
      title: "Tom & Jerry",
      description: "<p>Survey <strong>description</strong></p>",
      pages: [{
        name: "page1",
        description: "<ul><li>First</li><li>Second</li></ul>",
        elements: [
          { type: "text", name: "q", title: "<em>Question title</em>", description: "Plain description" },
          { type: "richtext", name: "notes", title: "Notes" }
        ]
      }]
    });
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();

    await expect(page.locator(".sd-question[data-name='q'] .sd-question__title em")).toHaveText("Question title");
    await expect(page.locator(".sv-header__description strong")).toHaveText("description");
    await expect(page.locator(".sd-page__description li")).toHaveCount(2);
    await expect(page.locator(".sv-header__title")).toContainText("Tom & Jerry");
    await expect(page.locator(".sv-header__title").locator("em, strong")).toHaveCount(0);
    await expect(page.locator(".sd-question[data-name='q'] .sd-question__description").locator("em, strong")).toHaveCount(0);

    const area = page.locator(".sd-question[data-name='notes'] .sd-rich-text__area");
    await area.click();
    await page.keyboard.type("hello");
    await selectText(area, "hello", "hello");
    await page.locator(".sd-question[data-name='notes']").getByRole("button", { name: "Bold" }).click();
    await blur(area);

    await expect.poll(async () => page.evaluate(() => {
      return (window as any).creator.getPlugin("preview").model.survey.data.notes;
    })).toContain("<strong>hello</strong>");
  });

  test("translation cells follow the string types and a locale text round-trips", async ({ page }) => {
    await setJSON(page, json);
    await getTabbedMenuItemByText(page, creatorTabTranslationName).click();
    await page.getByRole("button", { name: "Add Language" }).click();
    await page.locator("span").getByText("Deutsch").click();

    const row = (text: string): Locator => page.locator(".st-strings table tr").filter({ hasText: text });
    await expect(row("Question title").locator(".sd-rich-text").first()).toBeVisible();
    await expect(row("Alpha").locator(".sd-rich-text").first()).toBeVisible();
    await expect(row("Survey description").locator(".sd-rich-text").first()).toBeVisible();
    await expect(row("Survey title").locator(".sd-rich-text")).toHaveCount(0);
    await expect(row("Question description").locator(".sd-rich-text")).toHaveCount(0);

    const titleCell = row("Question title").locator(".sd-rich-text__area").last();
    await titleCell.click();
    await page.keyboard.type("Hallo");
    await selectText(titleCell, "Hallo", "Hallo");
    await expect(row("Question title").getByRole("button", { name: "Bulleted list" })).toHaveCount(0);
    await row("Question title").getByRole("button", { name: "Bold" }).click();
    await blur(titleCell);

    const descriptionCell = row("Survey description").locator(".sd-rich-text__area").last();
    await descriptionCell.click();
    await page.keyboard.type("Absatz");
    await selectText(descriptionCell, "Absatz", "Absatz");
    await expect(row("Survey description").getByRole("button", { name: "Bulleted list" })).toBeVisible();

    const result = await getJSON(page);
    expect(result.pages[0].elements[0].title.de).toContain("<strong>Hallo</strong>");
    expect(result.pages[0].elements[0].title.default).toBe("Question title");

    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await page.evaluate(() => { (window as any).creator.survey.locale = "de"; });
    await expect(questionTitle(page).locator("strong")).toHaveText("Hallo");
  });
});

async function revealCategory(page: Page): Promise<void> {
  const description = page.locator(".svc-side-bar [data-name='description']");
  if (!(await description.isVisible())) {
    await getPropertyGridCategory(page, generalGroupName).click();
  }
}

async function format(page: Page, editor: Locator, start: string, end: string, button: string): Promise<void> {
  await editor.click();
  await placeCaret(editor, start);
  await expect(page.locator(".svc-string-editor__toolbar--open")).toHaveCount(0);
  await selectText(editor, start, end);
  const toolbar = page.locator(".svc-string-editor__toolbar--open");
  await expect(toolbar.getByRole("button", { name: button })).toBeVisible();
  await toolbar.getByRole("button", { name: button }).click();
}

async function blur(editor: Locator): Promise<void> {
  await editor.evaluate((element) => (element as HTMLElement).blur());
}

async function selectText(editor: Locator, start: string, end: string): Promise<void> {
  await editor.evaluate((element, marks) => {
    const root = element as HTMLElement;
    root.focus();
    const full = collectText(root);
    setRange(root, full.indexOf(marks.start), full.indexOf(marks.end) + marks.end.length);

    function collectText(node: HTMLElement): string {
      const parts: string[] = [];
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
      let current = walker.nextNode();
      while(current) {
        parts.push(current.textContent || "");
        current = walker.nextNode();
      }
      return parts.join("");
    }
    function setRange(node: HTMLElement, startAt: number, endAt: number): void {
      const texts: Text[] = [];
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
      let current = walker.nextNode();
      while(current) {
        texts.push(current as Text);
        current = walker.nextNode();
      }
      const at = (index: number): { item: Text, offset: number } => {
        let cursor = 0;
        for (let i = 0; i < texts.length; i++) {
          const text = texts[i].textContent || "";
          if (cursor + text.length >= index) return { item: texts[i], offset: index - cursor };
          cursor += text.length;
        }
        const last = texts[texts.length - 1];
        return { item: last, offset: (last.textContent || "").length };
      };
      const from = at(startAt);
      const to = at(endAt);
      const range = document.createRange();
      range.setStart(from.item, from.offset);
      range.setEnd(to.item, to.offset);
      const rootNode = node.getRootNode() as any;
      const selection = typeof rootNode.getSelection === "function" ? rootNode.getSelection() : document.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      rootNode.dispatchEvent(new Event("selectionchange"));
    }
  }, { start, end });
}

async function placeCaret(editor: Locator, before: string): Promise<void> {
  await selectText(editor, before, before);
  await editor.evaluate((element) => {
    const root = element as HTMLElement;
    const owner = root.getRootNode() as any;
    const selection = typeof owner.getSelection === "function" ? owner.getSelection() : document.getSelection();
    const range = selection.getRangeAt(0);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    root.focus();
    owner.dispatchEvent(new Event("selectionchange"));
  });
}
