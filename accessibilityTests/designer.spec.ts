import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, setJSON, updateCreatorModel, url } from "./helper";

test.describe("designer a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await updateCreatorModel(page, { showOneCategoryInPropertyGrid: true });
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  const jsonWithMultiplePages = {
    "pages": [
      {
        "name": "page1",
        "elements": [{ "type": "text", "name": "question1" }]
      },
      {
        "name": "page2",
        "elements": [{ "type": "text", "name": "question2" }]
      }
    ],
  };
  test("Check designer tab empty", async ({ page }) => {
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check designer tab with multiple pages", async ({ page }) => {
    await setJSON(page, jsonWithMultiplePages);
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check page navigator", async ({ page }) => {
    await setJSON(page, jsonWithMultiplePages);
    await page.click(".svc-page-navigator__selector");
    await checkA11y(page, ".svc-tab-designer__page-navigator", { axeOptions });
  });
  test("Check sidebar header", async ({ page }) => {
    await setJSON(page, jsonWithMultiplePages);
    await page.click(".svc-sidebar__header-content .svc-menu-action__button");
    await checkA11y(page, ".svc-sidebar__header", { axeOptions });
  });
  test("Check radiogroup, rating and checkbox", async ({ page }) => {
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "radiogroup",
              "name": "question1",
              "choices": ["Item 1", "Item 2", "Item 3"]
            },
            { "type": "rating", "name": "question2" },
            {
              "type": "checkbox", "name": "question3",
              "choices": ["Item 1", "Item 2", "Item 3"]
            }
          ]
        }
      ],
    });
    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });

  test("Check dropdown and tagbox", async ({ page }) => {
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "dropdown", "name": "question1", "choices": ["Item 1", "Item 2", "Item 3"] },
            { "type": "tagbox", "name": "question2", "choices": ["Item 1", "Item 2", "Item 3"] }
          ]
        }
      ],
    });
    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });

  test("Check boolean, file, imagepicker and ranking", async ({ page }) => {
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "boolean", "name": "question1" },
            { "type": "file", "name": "question2" },
            { "type": "imagepicker", "name": "question3", "imageFit": "cover" },
            { "type": "ranking", "name": "question4", "choices": ["Item 1", "Item 2", "Item 3"] }]
        }
      ],
    });
    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });

});
