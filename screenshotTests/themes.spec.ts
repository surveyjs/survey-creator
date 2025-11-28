import { test, expect } from "@playwright/test";
import { url, getTabbedMenuItemByText, getBarItemByTitle, setJSON, getListItemByText, compareScreenshot, creatorTabThemeName, getPropertyGridCategory, themeSettingsButtonSelector, resetFocusToBody, collapseButtonSelector } from "./helper";

const title = "Theme settings";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url.replace(/\/testcafe$/, "/creator-themes")}`);
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
    await page.locator(".svc-sidebar-tabs__bottom-container .svc-menu-action__button").click();

    await page.getByRole("combobox", { name: "Theme name" }).focus();

    await page.getByRole("combobox", { name: "Theme name" }).click();
    await getListItemByText(page, "Light").click();
    await compareScreenshot(page, ".svc-creator", "creator-theme-default-light.png");

    await page.getByRole("combobox", { name: "Theme name" }).click();
    await getListItemByText(page, "Dark").click();
    await compareScreenshot(page, ".svc-creator", "creator-theme-default-dark.png");

    await page.getByRole("combobox", { name: "Theme name" }).click();
    await getListItemByText(page, "Contrast").click();
    await compareScreenshot(page, ".svc-creator", "creator-theme-default-contrast.png");
  });

});