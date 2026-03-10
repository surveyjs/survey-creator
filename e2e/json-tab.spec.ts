import { Page } from "playwright/test";
import { url, test, expect, setJSON, creatorTabJsonEditorName } from "./helper";
import { getTabbedMenuItemByText, creatorTabDesignerName } from "../screenshotTests/helper";

const title = "JSON tab";

const json = {
  pages: [
    {
      elements: [
        {
          type: "text",
          name: "json_tab_text",
          title: "Change me"
        }
      ]
    }
  ]
};

async function selectTextAreaContent(page: Page, selector: string, startLine?: number, startCol?: number, endLine?: number, endCol?: number) {
  if (startLine === undefined) {
    // Select all content
    await page.evaluate((sel) => {
      const textarea = document.querySelector(sel) as HTMLTextAreaElement;
      if (textarea) {
        textarea.select();
      }
    }, selector);
  } else {
    // Select specific range by line and column
    await page.evaluate(([sel, sl, sc, el, ec]) => {
      const textarea = document.querySelector(sel) as HTMLTextAreaElement;
      if (!textarea) return;

      const lines = textarea.value.split("\n");
      let startPos = 0;
      let endPos = 0;

      // Calculate start position
      for (let i = 0; i < sl - 1 && i < lines.length; i++) {
        startPos += lines[i].length + 1; // +1 for newline
      }
      startPos += (sc - 1);

      // Calculate end position
      if (el !== undefined && ec !== undefined) {
        for (let i = 0; i < el - 1 && i < lines.length; i++) {
          endPos += lines[i].length + 1;
        }
        endPos += (ec - 1);
      } else {
        endPos = startPos;
      }

      textarea.focus();
      textarea.setSelectionRange(startPos, endPos);
    }, [selector, startLine, startCol, endLine, endCol]);
  }
}

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Change title of text question", async ({ page }) => {
    await setJSON(page, json);
    await getTabbedMenuItemByText(page, creatorTabJsonEditorName).click();

    await selectTextAreaContent(page, ".svc-json-editor-tab__content-area", 9, 21, 9, 30);
    await page.keyboard.press("Backspace");
    await page.keyboard.type("I am changed");

    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await expect(page.locator("div[id$=ariaTitle][id^=sq]").getByText("I am changed")).toBeVisible();
  });

  test("Check show/hide errors list visibility", async ({ page }) => {
    await setJSON(page, json);
    await getTabbedMenuItemByText(page, creatorTabJsonEditorName).click();

    await expect(page.locator(".svc-json-editor-tab__errros_list")).not.toBeVisible();

    await selectTextAreaContent(page, ".svc-json-editor-tab__content-area", 5, 8, 5, 8);
    await page.keyboard.type("a");
    await page.waitForTimeout(1100);
    await expect(page.locator(".svc-json-editor-tab__errros_list")).toBeVisible();

    await page.keyboard.press("Backspace");
    await page.waitForTimeout(1100);
    await expect(page.locator(".svc-json-editor-tab__errros_list")).not.toBeVisible();
  });

  test("Goto line from error", async ({ page }) => {
    await setJSON(page, json);
    await getTabbedMenuItemByText(page, creatorTabJsonEditorName).click();

    await selectTextAreaContent(page, ".svc-json-editor-tab__content-area");
    await selectTextAreaContent(page, ".svc-json-editor-tab__content-area", 5, 8, 5, 8);
    await page.keyboard.type("a");
    await page.waitForTimeout(1100);
    await expect(page.locator(".svc-json-editor-tab__errros_list")).toBeVisible();

    await selectTextAreaContent(page, ".svc-json-editor-tab__content-area", 2, 2, 2, 2);
    await page.locator("span").getByText("Line: ").click();
    await page.keyboard.press("Delete");
    await page.waitForTimeout(1100);
    await expect(page.locator(".svc-json-editor-tab__errros_list")).not.toBeVisible();
  });

  test("Check deactivating other tabs when json has errors", async ({ page }) => {
    await setJSON(page, json);
    await getTabbedMenuItemByText(page, creatorTabJsonEditorName).click();

    await selectTextAreaContent(page, ".svc-json-editor-tab__content-area");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("I am error string )");

    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await expect(page.locator("div[id$=ariaTitle][id^=sq]").getByText("Change me")).not.toBeVisible();
  });

  test("Check search", async ({ page }) => {
    await setJSON(page, json);
    await getTabbedMenuItemByText(page, creatorTabJsonEditorName).click();
    await page.keyboard.press("ControlOrMeta+f"); // check if there will be no errors
    await expect(getTabbedMenuItemByText(page, creatorTabJsonEditorName)).toBeVisible();
  });

  test("Check fix error", async ({ page }) => {
    await setJSON(page, {
      elements: [
        { type: "text", name: "q1", },
        { type: "text", name: "q2", }
      ]
    });
    await getTabbedMenuItemByText(page, creatorTabJsonEditorName).click();

    await selectTextAreaContent(page, ".svc-json-editor-tab__content-area");
    await selectTextAreaContent(page, ".svc-json-editor-tab__content-area", 12, 21, 12, 22);
    await page.keyboard.type("1");
    await page.waitForTimeout(1100);
    await expect(page.locator(".svc-json-editor-tab__errros_list")).toBeVisible();

    await page.locator(".svc-json-error__fix-button").click();
    await page.waitForTimeout(1100);
    await expect(page.locator(".svc-json-editor-tab__errros_list")).not.toBeVisible();
  });
});

