import { Locator, Page } from "@playwright/test";
import { urlRichText, compareScreenshot, test, expect, setJSON, setShowToolbox, setShowSidebar, resetHoverToCreator } from "./helper";

const title = "Rich text string editor";

const json = {
  showQuestionNumbers: "off",
  widthMode: "static",
  pages: [{
    name: "page1",
    elements: [{
      type: "text",
      name: "q",
      title: "Question",
      description: "<p>Question <strong>description</strong></p><ul><li>First</li><li>Second</li></ul>"
    }]
  }]
};

const question = (page: Page): Locator => page.locator(".svc-question__content");
const questionDescription = (page: Page): Locator => page.locator(".sd-question[data-name='q'] .sd-question__description .sv-string-editor");

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urlRichText);
    await page.setViewportSize({ width: 1440, height: 1200 });
    await page.waitForFunction(() => !!window["creator"]);
    await page.evaluate(() => {
      window["Survey"].Serializer.findProperty("question", "description").type = "html";
      window["creator"].onElementAllowOperations.add((_, options) => {
        Object.keys(options).forEach(key => {
          if (key !== "allowEdit") options[key] = false;
        });
      });
    });
    await setShowToolbox(page, false);
    await setShowSidebar(page, false);
    await setJSON(page, json);
    await expect(questionDescription(page).locator("strong")).toHaveText("description");
    await expect(questionDescription(page).locator("li")).toHaveCount(2);
    await expect(page.locator(".sd-question")).toHaveCount(1);
  });

  test("formatted description", async ({ page }) => {
    await resetHoverToCreator(page);
    await compareScreenshot(page, question(page), "rich-text-string-editor.png");
  });

  test("hover keeps the toolbar closed", async ({ page }) => {
    await questionDescription(page).hover();
    await expect(page.locator(".sd-rich-text--toolbar-open")).toHaveCount(0);
    await compareScreenshot(page, question(page), "rich-text-string-editor-hover.png");
  });

  test("focus without a selection keeps the toolbar closed", async ({ page }) => {
    const description = questionDescription(page);
    await description.click();
    await placeCaret(description, "Question");
    await expect(page.locator(".sd-rich-text--toolbar-open")).toHaveCount(0);
    await compareScreenshot(page, question(page), "rich-text-string-editor-focus.png", { caret: "hide" });
  });

  test("block toolbar under the description", async ({ page }) => {
    const description = questionDescription(page);
    await description.click();
    await selectText(description, "description", "description");
    const toolbar = page.locator(".sd-rich-text--toolbar-open");
    await expect(toolbar.getByRole("button", { name: "Bold" })).toBeVisible();
    await expect(toolbar.getByRole("button", { name: "Bulleted list" })).toBeVisible();
    await expect(toolbar.getByRole("button", { name: "Numbered list" })).toBeVisible();
    await compareScreenshot(page, question(page), "rich-text-string-editor-block-toolbar.png", { caret: "hide" });
  });
});

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
