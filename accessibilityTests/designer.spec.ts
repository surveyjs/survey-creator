import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, downArrowImageLink, leftArrowImageLink, rigthArrowImageLink, setJSON, upArrowImageLink, updateCreatorModel, url } from "./helper";

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
  test("Check designer compact toolbox", async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 1080 });
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check designer tab with multiple pages", async ({ page }) => {
    await setJSON(page, jsonWithMultiplePages);
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check page navigator", async ({ page }) => {
    await setJSON(page, jsonWithMultiplePages);
    await page.click(".svc-page__content--new .svc-add-new-question-action");
    await page.click(".svc-page-navigator__selector");
    await checkA11y(page, ".svc-tab-designer__page-navigator", { axeOptions });
  });
  test("Check sidebar header", async ({ page }) => {
    await setJSON(page, jsonWithMultiplePages);
    await page.click(".svc-sidebar__header-content .svc-menu-action__button");
    await checkA11y(page, ".svc-sidebar__header", { axeOptions });
  });
  test("Check radiogroup, rating and checkbox questions", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].showSurveyHeader = false;
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "radiogroup", "name": "question1",
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

  test("Check dropdown and tagbox questions", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].showSurveyHeader = false;
    });
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

  test("Check dropdown and tagbox questions with defaults", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].showSurveyHeader = false;
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "dropdown", "name": "question1", "defaultValue": "Item 1", "choices": ["Item 1", "Item 2", "Item 3"] },
            { "type": "tagbox", "name": "question2", "defaultValue": ["Item 1", "Item 3"], "choices": ["Item 1", "Item 2", "Item 3"] }
          ]
        }
      ],
    });
    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });

  test("Check boolean, file and ranking questions", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].showSurveyHeader = false;
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "boolean", "name": "question1" },
            { "type": "file", "name": "question2" },
            { "type": "ranking", "name": "question5", "choices": ["Item 1", "Item 2", "Item 3"] }]
        }
      ],
    });
    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });

  test("Check imagepicker question", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].showSurveyHeader = false;
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "imagepicker", "name": "q1", "imageFit": "cover" },
            {
              "type": "imagepicker", "name": "q2", "imageFit": "cover",
              "choices": [
                { "value": "item1", "imageLink": upArrowImageLink },
                { "value": "item2", "imageLink": downArrowImageLink },
                { "value": "item3", "imageLink": leftArrowImageLink },
                { "value": "item4", "imageLink": rigthArrowImageLink }
              ],
            },
          ]
        }
      ],
    });
    await page.waitForTimeout(500);
    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });

  test("Check inputs questions", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].showSurveyHeader = false;
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "text", "name": "question1", "inputType": "color" },
            { "type": "text", "name": "question2", "inputType": "date" },
            { "type": "text", "name": "question3", "inputType": "datetime-local" },
            { "type": "text", "name": "question4", "inputType": "email" },
            { "type": "text", "name": "question5", "inputType": "month" },
            { "type": "text", "name": "question6", "inputType": "number" },
            { "type": "text", "name": "question7", "inputType": "password" },
            { "type": "text", "name": "question8", "inputType": "range" },
            { "type": "text", "name": "question9", "inputType": "tel" },
            { "type": "text", "name": "question10" },
            { "type": "text", "name": "question11", "inputType": "time" },
            { "type": "text", "name": "question12", "inputType": "url" },
            { "type": "text", "name": "question13", "inputType": "week" },
            { "type": "comment", "name": "question14" },
            {
              "type": "multipletext", "name": "question15",
              "items": [{ "name": "text1" }, { "name": "text2" }]
            }
          ]
        }
      ],
    });
    await page.evaluate(() => {
      (window as any).creator.survey.lazyRenderEnabled = false;
    });
    await page.locator(".svc-tab-designer .sv-scroll__scrollbar").first().evaluate(el => el.scrollBy(0, -1000));
    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });

  test("Check panels questions", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].showSurveyHeader = false;
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "panel", "name": "panel1" },
            { "type": "panel", "name": "panel2", "elements": [{ "type": "text", "name": "question3" }] },
            { "type": "paneldynamic", "name": "q1", "templateElements": [{ "type": "text", "name": "q2" }] },
            { "type": "paneldynamic", "name": "q3" },
          ]
        }
      ],
    });

    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });

  test("Check matrixes questions", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].showSurveyHeader = false;
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrix",
              "name": "question1",
              "columns": ["Column 1", "Column 2", "Column 3"],
              "rows": [
                "Row 1",
                "Row 2"
              ]
            },
            {
              "type": "matrixdropdown",
              "name": "question2",
              "choices": [1, 2, 3, 4, 5],
              "columns": [{ "name": "Column 1" }, { "name": "Column 2" }, { "name": "Column 3" }],
              "rows": [
                "Row 1",
                "Row 2"
              ]
            },
            {
              "type": "matrixdynamic",
              "name": "question3",
              "columns": [{ "name": "Column 1" }, { "name": "Column 2" }, { "name": "Column 3" }],
              "choices": [1, 2, 3, 4, 5]
            }
          ]
        }
      ],
    });
    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });

  test("Check image questions", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].showSurveyHeader = false;
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "image",
              "name": "q1",
              "imageFit": "cover",
              "imageHeight": "auto",
              "imageWidth": "100%"
            },
            {
              "type": "image",
              "name": "q2",
              "imageLink": upArrowImageLink,
              "imageFit": "cover",
              "imageHeight": "auto",
              "imageWidth": "100%"
            }
          ]
        }
      ],
    });
    await page.waitForTimeout(500);
    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });

  test("Check html, expression and signaturepad questions", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].showSurveyHeader = false;
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "html", "name": "q1" },
            { "type": "expression", "name": "q2" },
            { "type": "signaturepad", "name": "q3" }
          ]
        }
      ],
    });
    await page.waitForTimeout(500);
    await checkA11y(page, ".svc-tab-designer_content", { axeOptions });
  });
});
