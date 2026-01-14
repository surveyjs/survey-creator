import { url, test, expect, setJSON } from "./helper";
import { creatorTabThemeName, getPropertyGridCategory, getTabbedMenuItemByText } from "../screenshotTests/helper";

const title = "Theme Editor";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}-theme-tab`);
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

    await colorQuestionInputSelector.click();
    await expect(colorQuestionInputSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(colorQuestionInputSelector).not.toBeFocused();

    await backgroundOpacityInputSelector.click();
    await expect(backgroundOpacityInputSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(backgroundOpacityInputSelector).not.toBeFocused();

    await getPropertyGridCategory(page, "Background").click();
    await backgroundImageQuestionInputSelector.click();
    await expect(backgroundImageQuestionInputSelector).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(backgroundImageQuestionInputSelector).not.toBeFocused();
  });
});

