import { urlThemeTab, test, expect, setJSON, getPropertyGridCategory, getTabbedMenuItemByText, creatorTabPreviewName, creatorTabThemeName } from "./helper";

const title = "Theme Editor";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urlThemeTab);
  });

  test("Editors, loose focus on enter", async ({ page }) => {
    await page.setViewportSize({ width: 1560, height: 1440 });
    const json = {
      elements: [
        {
          type: "dropdown",
          name: "q1",
          title: "title"
        }
      ]
    };
    await setJSON(page, json);

    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    await getPropertyGridCategory(page, "Appearance").click();

    const colorQuestionInputSelector = page.locator("div[data-name=primaryColor] input.spg-color-editor__input");
    const backgroundImageQuestionInputSelector = page.locator("div[data-name=backgroundImage] input.spg-input-container__input");
    const backgroundOpacityInputSelector = page.locator("div[data-name=panelBackgroundTransparency] input.spg-input-container__input");

    await expect(colorQuestionInputSelector).toBeVisible();
    await colorQuestionInputSelector.click();
    await expect(colorQuestionInputSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await page.waitForTimeout(100);
    await expect(colorQuestionInputSelector).not.toBeFocused();

    await expect(backgroundOpacityInputSelector).toBeVisible();
    await backgroundOpacityInputSelector.click();
    await expect(backgroundOpacityInputSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await page.waitForTimeout(100);
    await expect(backgroundOpacityInputSelector).not.toBeFocused();

    await getPropertyGridCategory(page, "Background").click();
    await expect(backgroundImageQuestionInputSelector).toBeVisible();
    await backgroundImageQuestionInputSelector.click();
    await expect(backgroundImageQuestionInputSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await page.waitForTimeout(100);
    await expect(backgroundImageQuestionInputSelector).not.toBeFocused();
  });

  test("Theme tab survey is created with TOC, Bug#7801", async ({ page }) => {
    await setJSON(page, {
      "showTOC": true,
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "dropdown",
              "name": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        },
        {
          "name": "page2",
          "elements": [
            {
              "type": "text",
              "name": "question2",
            }
          ]
        }
      ]
    });
    const tocList = page.locator(".sv_progress-toc.sv_progress-toc--left.sv_progress-toc--sticky");
    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    await expect(tocList).toBeVisible();

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();

    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    await expect(tocList).toBeVisible();

  });
});

