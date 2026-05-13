import { test, expect } from "@playwright/test";
import { urlCreatorThemes, getTabbedMenuItemByText, getBarItemByTitle, setJSON, getListItemByText, compareScreenshot, creatorTabThemeName, getPropertyGridCategory, themeSettingsButtonSelector, resetFocusToBody, collapseButtonSelector, getVisibleSelectListItemByText } from "./helper";

const title = "Theme settings";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urlCreatorThemes);
  });
  test("Check creator themes", async ({ page }) => {
    await page.setViewportSize({ width: 2000, height: 2000 });
    await setJSON(page, {
      "title": "Themes",
      "description": "Test all themes",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question2",
              "title": "question1"
            },
            {
              "type": "checkbox",
              "name": "question1",
              "title": "question2",
              "choices": [
                "Item 1"
              ]
            }
          ]
        }
      ]
    });
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.getByText("question1").click();
    await page.locator(".svc-sidebar-tabs__bottom-container .sd-action").click();

    await page.getByRole("combobox", { name: "Theme name" }).focus();

    await page.getByRole("combobox", { name: "Theme name" }).click();
    await getVisibleSelectListItemByText(page, "Dark").click();
    await compareScreenshot(page, ".svc-creator", "creator-theme-default-dark.png");

    await page.getByRole("combobox", { name: "Theme name" }).click();
    await getVisibleSelectListItemByText(page, "Contrast").click();
    await compareScreenshot(page, ".svc-creator", "creator-theme-default-contrast.png");

    await page.getByRole("combobox", { name: "Theme name" }).click();
    await getVisibleSelectListItemByText(page, "Light").click();
    await compareScreenshot(page, ".svc-creator", "creator-theme-default-light.png");
  });

});