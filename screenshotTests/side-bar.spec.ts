import { expect } from "playwright/test";
import { url, compareScreenshot, test, setJSON, changeToolboxSearchEnabled, getAddNewQuestionButton, getTabbedMenuItemByText, creatorTabTranslationName, creatorTabThemeName, getListItemByText } from "./helper";
import { largeSurvey } from "./large-survey";

const title = "Sidebar";

test.beforeEach(async ({ page }) => {
  await page.goto(`${url}`);
});

test.describe(title, () => {
  test("object selector popup", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: "on",
      pages: [{ name: "page1" }]
    });
    await page.setViewportSize({ width: 750, height: 700 });
    await page.locator(".sv-action-bar-item[title=\"Show Panel\"]").click();
    await page.locator(".svc-side-bar__container-header #svd-grid-object-selector .sv-action-bar-item").click();

    await compareScreenshot(page, ".svc-side-bar__container", "side-bar-object-selector.png");
  });

  test("object selector with search and selected item", async ({ page }) => {
    const objectSelectorContent = ".sv-popup.svc-object-selector .sv-popup__body-content";

    await setJSON(page, largeSurvey);
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.locator(".svc-page-navigator__selector").click();
    await getListItemByText(page, "educationalNeeds").click();
    await page.locator(".svc-string-editor__input").filter({ hasText: "Patient Name" }).click();
    await page.locator(".svc-side-bar__container-header #svd-grid-object-selector .sv-action-bar-item").click();
    await page.waitForTimeout(1000);

    await compareScreenshot(page, objectSelectorContent, "side-bar-object-selector-with-selected-item.png");
  });

  test("object selector with large object's name", async ({ page }) => {
    const sideBarActionsContainer = ".svc-side-bar__container-actions";
    await setJSON(page, {
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "very_long_long_long_long_long_long_long_long_name"
            }
          ]
        }
      ]
    });
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.locator(".svc-question__content").click({ position: { x: 10, y: 10 } });
    await page.locator(".svc-question__content").click({ position: { x: 10, y: 10 } });

    await compareScreenshot(page, sideBarActionsContainer, "side-bar-object-selector-with-big-name.png");
  });

  test("property grid search", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: "on",
      "elements": [
        {
          "type": "text",
          "name": "q1",
          "title": "First"
        }
      ]
    });
    await changeToolboxSearchEnabled(page, false);
    await page.setViewportSize({ width: 1920, height: 900 });
    await compareScreenshot(page, ".spg-container_search", "side-bar-search-empty.png");

    await page.locator(".svc-search__input").type("des");
    await compareScreenshot(page, ".spg-container_search .svc-search", "side-bar-search-editor.png");
    await compareScreenshot(page, ".spg-container_search", "side-bar-search-general-group.png");

    await page.locator(".svc-search__bar-item").first().click(); // prev
    await compareScreenshot(page, ".spg-container_search", "side-bar-search-question-group.png");

    await page.locator(".svc-search__bar-item").nth(1).click(); // next
    await compareScreenshot(page, ".spg-container_search", "side-bar-search-general-group-after-next.png");

    await page.locator(".svc-search__bar-item").nth(2).click(); // clear
    await compareScreenshot(page, ".spg-container_search", "side-bar-search-empty.png");
  });

  test("property grid search matrix", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: "on",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1",
          "choices": ["Item 1", "Item 2", "Item 3"]
        }
      ]
    });
    await changeToolboxSearchEnabled(page, false);
    await page.locator(".sd-question").click();
    await page.setViewportSize({ width: 1920, height: 900 });

    await page.locator(".svc-search__input").type("choices");
    await compareScreenshot(page, ".spg-matrixdynamic__content", "side-bar-search-matrix.png");
  });

  test("tabbed mode - scrollable tabs", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 530 });
    await page.evaluate(() => {
      window["creator"].showOneCategoryInPropertyGrid = true;
    });
    await(page).locator(".svc-sidebar-tabs").hover();
    await compareScreenshot(page, ".svc-sidebar-tabs", "side-bar-tabs-scrollable.png");
  });

  test("tabbed mode", async ({ page }) => {
    const themeTabUrl = url.replace(/\/testcafe$/, "/testcafe-theme-tab");
    await page.goto(themeTabUrl);

    await page.setViewportSize({ width: 1920, height: 1200 });
    await page.evaluate(() => {
      window["creator"].showOneCategoryInPropertyGrid = true;
    });
    await compareScreenshot(page, ".svc-side-bar", "side-bar-tabbed-placeholder.png");
    await getAddNewQuestionButton(page).click();
    await compareScreenshot(page, ".svc-side-bar", "side-bar-tabbed-property-grid.png");

    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    await compareScreenshot(page, ".svc-side-bar", "side-bar-tabbed-property-grid-theme-general.png");

    await page.locator(".svc-menu-action__button").filter({ visible: true }).nth(4).click();
    await compareScreenshot(page, ".svc-side-bar", "side-bar-tabbed-property-grid-theme-appearance.png");

    await page.locator(".spg-boolean-switch").filter({ visible: true }).click();
    await page.locator(".svc-top-bar").filter({ visible: true }).hover();
    await compareScreenshot(page, ".svc-side-bar", "side-bar-tabbed-property-grid-theme-appearance-advanced.png");

    await page.locator(".svc-side-bar .sv-scroll__wrapper").filter({ visible: true }).first().hover();
    await expect(page.locator(".svc-side-bar .sv-scroll__scrollbar").first()).toBeVisible();
    await compareScreenshot(page, ".svc-side-bar", "side-bar-tabbed-property-grid-theme-appearance-advanced-hover.png");
  });

  test("boolean switch", async ({ page }) => {
    const themeTabUrl = url.replace(/\/testcafe$/, "/testcafe-theme-tab");
    await page.goto(themeTabUrl);

    await page.setViewportSize({ width: 1920, height: 1200 });
    await page.evaluate(() => {
      window["creator"].showOneCategoryInPropertyGrid = true;
    });

    await getTabbedMenuItemByText(page, creatorTabThemeName).click();

    await page.locator(".svc-menu-action__button").filter({ visible: true }).nth(4).click();
    await compareScreenshot(page, ".spg-boolean-switch", "boolean-switch-default.png");
    await page.locator(".spg-boolean-switch__button").filter({ visible: true }).hover();
    await compareScreenshot(page, ".spg-boolean-switch", "boolean-switch-hover.png");
    await page.locator(".spg-boolean-switch__button").filter({ visible: true }).click();
    await compareScreenshot(page, ".spg-boolean-switch", "boolean-switch-focus.png");
    await page.keyboard.press("Tab");
    await compareScreenshot(page, ".spg-boolean-switch", "boolean-switch-checked.png");
    await page.locator(".spg-boolean-switch__button").filter({ visible: true }).hover();
    await compareScreenshot(page, ".spg-boolean-switch", "boolean-switch-checked-hover.png");
  });

  test("translation tab tabbed property grid", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1200 });
    await page.evaluate(() => {
      window["creator"].showOneCategoryInPropertyGrid = true;
    });

    await getTabbedMenuItemByText(page, creatorTabTranslationName).click();
    await compareScreenshot(page, ".svc-side-bar", "side-bar-tabbed-property-grid-translation-general.png");
  });

  test("check mobile popup in new side bar", async ({ page }) => {
    await page.setViewportSize({ width: 500, height: 800 });
    await page.evaluate(() => {
      window["Survey"]._setIsTouch(true);
      window["creator"].showOneCategoryInPropertyGrid = true;
    });
    await page.locator("#svd-settings").click();
    await page.locator(".spg-question[data-name='locale'] .spg-dropdown").locator(".sd-editor-chevron-button").click();
    await page.locator(".sv-popup").filter({ visible: true }).hover({ position: { x: 0, y: 0 } });
    await compareScreenshot(page, undefined, "mobile-popup-inside-new-pg.png");
  });

  test("property grid empty survey", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await page.evaluate(() => {
      window["creator"].onSurveyInstanceCreated.add((_, { area, obj, survey }) => {
        if (area === "property-grid" && obj.getType() === "page") {
          [...survey.pages].forEach((page) => page.delete());
        }
      });

      window["creator"].JSON = { pages: [{ name: "page1" }] };
    });

    await page.locator(".sd-page").first().click();
    await compareScreenshot(page, ".spg-root-modern", "property-grid-empty-survey.png");
  });
});
