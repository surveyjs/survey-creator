import { test, expect, Page } from "@playwright/test";
import { url, getTabbedMenuItemByText, getBarItemByTitle, setJSON, getListItemByText, compareScreenshot } from "./helper";

const title = "Translation tab Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("strings view", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "title": "Question 1"
            },
            {
              "type": "radiogroup",
              "name": "question3",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
            {
              "type": "checkbox",
              "name": "question2",
              "title": {
                "default": "Question 3",
                "ru": "Вопрос 3" // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
              },
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            }
          ]
        }
      ]
    });

    const stringsView = page.locator(".svc-creator-tab__content.svc-translation-tab");

    await getTabbedMenuItemByText(page, "Translation").click();
    await compareScreenshot(page, stringsView, "translation-tab.png");

    await page.setViewportSize({ width: 800, height: 1440 });
    await compareScreenshot(page, stringsView, "translation-tab-small-screen.png");

    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.getByRole("button", { name: "Used Strings Only" }).click();
    await getListItemByText(page, "All Strings").click();
    await page.waitForTimeout(500);
    await compareScreenshot(page, stringsView, "translation-tab-show-all-strings.png", { maxDiffPixels: 40 });
  });

  test("tranlation property grid", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await getTabbedMenuItemByText(page, "Translation").click();
    await page.locator(".spg-title .sd-action").first().click();
    await page.locator("span", { hasText: "Català" }).click(); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    await page.locator(".spg-title .sd-action").first().click();
    await page.locator("span", { hasText: "Bahasa Indonesia" }).click();
    await compareScreenshot(page, page.locator(".spg-root-modern.st-properties"), "translation-property-grid.png");
  });

  test("tranlation property grid + onMachineTranslate", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.evaluate(() => {
      (window as any).creator.onMachineTranslate.add((sender, options) => { });
    });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "title": "Question 1"
            },
            {
              "type": "radiogroup",
              "name": "question3",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            },
          ]
        }
      ]
    });
    const translationDialog = page.locator(".st-translation-dialog .sv-popup__body-content");
    await getTabbedMenuItemByText(page, "Translation").click();
    await page.locator(".spg-title .sd-action").first().click();
    await page.locator("span", { hasText: "Català" }).click(); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    await page.getByRole("button", { name: "Auto-translate All" }).click();
    await compareScreenshot(page, translationDialog, "translation-auto-translate-popup.png");
    await page.getByRole("button", { name: "Apply" }).click();
    await page.waitForTimeout(1000);
    await page.locator("textarea").nth(1).type("translated");
    await page.locator(".spg-title .sd-action").first().click();
    await page.locator("span", { hasText: "Dansk" }).click();
    await page.getByRole("button", { name: "Auto-translate All" }).nth(1).click();
    await compareScreenshot(page, translationDialog, "translation-auto-translate-popup-enabled-dropdown.png");
    await page.setViewportSize({ width: 1000, height: 1440 });
    await page.waitForTimeout(500);
    await compareScreenshot(page, translationDialog, "translation-auto-translate-popup-medium-screen.png", { maxDiffPixels: 2 });
    await page.setViewportSize({ width: 800, height: 1440 });
    await page.waitForTimeout(500);
    await compareScreenshot(page, translationDialog, "translation-auto-translate-popup-small-screen.png");
  });
});