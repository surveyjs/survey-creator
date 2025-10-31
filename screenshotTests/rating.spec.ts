import { url, compareScreenshot, test, setJSON, expect } from "./helper";
const title = "Rating Question Screenshot";

const json = {
  showQuestionNumbers: true,
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1"
        }
      ]
    }
  ]
};
const jsonComment = {
  showQuestionNumbers: true,
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "hasComment": true
        }
      ]
    }
  ]
};

const jsonMulti = {
  showQuestionNumbers: true,
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "rateMax": 20
        },
        {
          "type": "rating",
          "name": "question2",
          "rateMax": 20,
          "minRateDescription": "Minimum",
          "maxRateDescription": "Maximum",
        }
      ]
    },
  ]
};

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });
  test("Rating question title location left", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    await page.evaluate(() => {
      window["creator"].JSON = {
        "pages": [
          {
            "name": "page1",
            "questionTitleLocation": "left",
            "elements": [
              {
                "type": "rating",
                "name": "question"
              }
            ]
          }
        ]
      };
    });
    await compareScreenshot(page, ".svc-question__content", "rating-question-title-left.png");
  });
  test("Rating adorners", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "rating",
              "name": "question1"
            }
          ]
        }
      ]
    };
    await setJSON(page, json);

    const question = page.locator("div[data-name=question1]");
    await compareScreenshot(page, question, "rating-not-selected.png");

    await question.click({ position: { x: 0, y: 40 } });
    await expect(page.locator(".svc-question__content--selected div[data-name=question1]")).toBeVisible();
    await compareScreenshot(page, question, "rating-selected.png");
  });

  test("Rating adorners - disabled buttons", async ({ page }) => {
    await page.setViewportSize({ width: 1956, height: 1080 });

    await setJSON(page, {
      showQuestionNumbers: true,
      elements: [
        {
          type: "rating",
          name: "question1",
          rateMax: 20
        }
      ]
    });

    const question = page.locator("div[data-name=question1]");
    await compareScreenshot(page, question, "rating-disabled-add.png");

    await setJSON(page, {
      showQuestionNumbers: true,
      elements: [
        {
          type: "rating",
          name: "question1",
          rateMax: 2
        }
      ]
    });
    await compareScreenshot(page, question, "rating-disabled-remove.png");
  });

  test("Rating adorners with comment", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await setJSON(page, jsonComment);

    const question = page.locator("div[data-name=question1]");
    await compareScreenshot(page, question, "rating-comment-not-selected.png");

    await question.click({ position: { x: 0, y: 40 } });
    await expect(page.locator(".svc-question__content--selected div[data-name=question1]")).toBeVisible();
    await compareScreenshot(page, question, "rating-comment-selected.png");
  });

  test("Multi row rating adorner", async ({ page }) => {
    const json: any = Object.assign({}, jsonMulti);
    (json as any).pages[0].elements[0].rateType = "labels";
    (json as any).pages[0].elements[1].rateType = "labels";
    await setJSON(page, json);
    await page.setViewportSize({ width: 1232, height: 900 });

    const question = page.locator("div[data-name=question1]");
    await compareScreenshot(page, question, "rating-multiline.png");

    const question2 = page.locator("div[data-name=question2]");
    await compareScreenshot(page, question2, "rating-multiline-text.png");

    await page.setViewportSize({ width: 549, height: 900 });
    await compareScreenshot(page, question, "rating-multiline-mobile.png");
    await compareScreenshot(page, question2, "rating-multiline-text-mobile.png");

    await page.locator(".svc-question__adorner").nth(0).click({ position: { x: 1, y: 1 } });
    await expect(page.locator(".svc-question__adorner").nth(0).locator(".svc-question__content-actions")).toBeVisible();
    await compareScreenshot(page, question, "rating-multiline-mobile-selected.png");
    await page.locator(".svc-question__adorner").nth(1).click({ position: { x: 1, y: 1 } });
    await expect(page.locator(".svc-question__adorner").nth(1).locator(".svc-question__content-actions")).toBeVisible();
    await compareScreenshot(page, question2, "rating-multiline-mobile-text-selected.png");
  });

  test("Multi row rating adorner smileys", async ({ page }) => {
    const jNew: any = Object.assign({}, jsonMulti);
    jNew.pages[0].elements[0].rateType = "smileys";
    jNew.pages[0].elements[1].rateType = "smileys";
    await setJSON(page, jNew);
    await page.setViewportSize({ width: 1232, height: 900 });

    const question = page.locator("div[data-name=question1]");
    await compareScreenshot(page, question, "rating-multiline-smileys.png");

    const question2 = page.locator("div[data-name=question2]");
    await compareScreenshot(page, question2, "rating-multiline-smileys-text.png");

    await page.setViewportSize({ width: 549, height: 900 });
    await compareScreenshot(page, question, "rating-multiline-smileys-mobile.png");
    await compareScreenshot(page, question2, "rating-multiline-smileys-text-mobile.png");

    await page.locator(".svc-question__adorner").nth(0).click({ position: { x: 1, y: 1 } });
    await expect(page.locator(".svc-question__adorner").nth(0).locator(".svc-question__content-actions")).toBeVisible();
    await compareScreenshot(page, question, "rating-multiline-smileys-mobile-selected.png");
    await page.locator(".svc-question__adorner").nth(1).click({ position: { x: 1, y: 1 } });
    await expect(page.locator(".svc-question__adorner").nth(1).locator(".svc-question__content-actions")).toBeVisible();
    await compareScreenshot(page, question2, "rating-multiline-smileys-mobile-text-selected.png");
  });

  test("Multi row rating adorner stars", async ({ page }) => {
    const jNew: any = Object.assign({}, jsonMulti);
    jNew.pages[0].elements[0].rateType = "stars";
    jNew.pages[0].elements[1].rateType = "stars";
    await setJSON(page, jNew);
    await page.setViewportSize({ width: 1232, height: 900 });

    const question = page.locator("div[data-name=question1]");
    await compareScreenshot(page, question, "rating-multiline-stars.png");

    const question2 = page.locator("div[data-name=question2]");
    await compareScreenshot(page, question2, "rating-multiline-stars-text.png");

    await page.setViewportSize({ width: 549, height: 900 });
    await compareScreenshot(page, question, "rating-multiline-stars-mobile.png");
    await compareScreenshot(page, question2, "rating-multiline-stars-text-mobile.png");

    await page.locator(".svc-question__adorner").nth(0).click({ position: { x: 1, y: 1 } });
    await expect(page.locator(".svc-question__adorner").nth(0).locator(".svc-question__content-actions")).toBeVisible();
    await compareScreenshot(page, question, "rating-multiline-stars-mobile-selected.png");
    await page.locator(".svc-question__adorner").nth(1).click({ position: { x: 1, y: 1 } });
    await expect(page.locator(".svc-question__adorner").nth(1).locator(".svc-question__content-actions")).toBeVisible();
    await compareScreenshot(page, question2, "rating-multiline-stars-mobile-text-selected.png");
  });

  test("Rating editing", async ({ page }) => {
    await setJSON(page, json);
    await page.setViewportSize({ width: 1900, height: 1000 });
    const question = page.locator("div[data-name=question1]");
    await question.locator("span").getByText("3").click();
    await compareScreenshot(page, question, "rating-editing.png");
  });

  test("Rating min/max editing", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: true,
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "rating",
              "name": "question1",
              "minRateDescription": "min",
              "maxRateDescription": "max"
            }
          ]
        }
      ]
    }
    );
    await page.setViewportSize({ width: 1936, height: 1000 });
    const question = page.locator("div[data-name=question1]");
    await question.locator("span").getByText("min").click();
    await compareScreenshot(page, question, "rating-editing-min.png");
    await question.locator("span").getByText("max").click();
    await compareScreenshot(page, question, "rating-editing-max.png");
  });

  test("Rating in matrix", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "question1",
              "columns": [
                {
                  "name": "Column 1",
                  "cellType": "rating",
                  "rateType": "stars"
                },
                { "name": "Column 2" }
              ],
              "choices": [1, 2, 3, 4, 5],
              "cellType": "rating",
              "rows": ["Row 1", "Row 2"]
            }
          ]
        }
      ],
      "widthMode": "static",
      "width": "1000"
    });
    await page.setViewportSize({ width: 1900, height: 1000 });
    const question = page.locator("div[data-name=question1]");
    await compareScreenshot(page, question, "rating-in-matrix.png");
  });

  test("Rating long item", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "rating",
              "name": "question1",
              "autoGenerate": false,
              "rateValues": [
                1,
                {
                  "value": 2,
                  "text": "item 2"
                },
                {
                  "value": 3,
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                4,
                5
              ]
            }
          ]
        }
      ]
    });
    await page.setViewportSize({ width: 1900, height: 1000 });
    const question = page.locator("div[data-name=question1]");
    await compareScreenshot(page, question, "rating-long-item.png");
    await page.locator("span").getByText("Lorem").click();
    await compareScreenshot(page, question, "rating-long-item-edit.png");
  });

  test("Rating labels location", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "rating",
              "name": "question1",
              "minRateDescription": "Bad",
              "maxRateDescription": "Good",
              "rateDescriptionLocation": "top"
            },
            {
              "type": "rating",
              "name": "question1",
              "minRateDescription": "Bad",
              "maxRateDescription": "Good",
              "rateDescriptionLocation": "bottom"
            },
            {
              "type": "rating",
              "name": "question1",
              "minRateDescription": "Bad",
              "maxRateDescription": "Good",
              "rateDescriptionLocation": "topBottom"
            }
          ]
        }
      ],
      "widthMode": "static"
    });
    await page.setViewportSize({ width: 1900, height: 1000 });
    const question = page.locator(".svc-rating-question-content");
    await compareScreenshot(page, question.nth(0), "rating-top-labels.png");
    await compareScreenshot(page, question.nth(1), "rating-bottom-labels.png");
    await compareScreenshot(page, question.nth(2), "rating-top-bottom-labels.png");

    await page.setViewportSize({ width: 500, height: 1000 });
    await compareScreenshot(page, question.nth(0), "rating-top-labels-mobile.png");
    await compareScreenshot(page, question.nth(1), "rating-bottom-labels-mobile.png");
    await compareScreenshot(page, question.nth(2), "rating-top-bottom-labels-mobile.png");
  });
});
