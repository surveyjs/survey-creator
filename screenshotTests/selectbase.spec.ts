import { url, compareScreenshot, test, setJSON, expect, setOptions } from "./helper";

const title = "SelectBase Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  const json = {
    showQuestionNumbers: "on",
    "logoPosition": "right",
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
      }
    ]
  };

  test("Dropdown adorners", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await setJSON(page, json);

    const question = page.locator(".svc-question__content");
    await compareScreenshot(page, question, "dropdown-not-selected.png");

    await question.click({ button: "left", position: { x: 0, y: 40 } });
    await expect(page.locator(".svc-question__content--selected div[data-name=question1]")).toBeVisible();
    await compareScreenshot(page, question, "dropdown-selected.png");
  });

  test("Select base editing", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await setJSON(page, {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "ranking",
              "name": "question1",
              "choices": [
                "Item 1",
                "ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem2",
                "Item 3"
              ],
              "minWidth": "100px",
              "maxWidth": "220px"
            }
          ]
        }
      ]
    });

    const question = page.locator(".svc-question__content");

    await compareScreenshot(page, question, "ranking-long-item-text.png");
  });

  test("Ranking item text overflow", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await setJSON(page, json);

    const question = page.locator(".svc-question__content");

    await page.locator(".svc-string-editor").getByText("Item 1").click();
    await page.locator(".sv-string-editor").getByText("Item 1").fill("JavaScript Form Builder Libraries. Building your own form management system has never been easier. Automate forms workflow and retain full ownership of respondent data.");
    await compareScreenshot(page, question, "dropdown-long-item-text.png");
  });

  test("Choices Elements feature #7192", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": [
                "Item 1",
                {
                  "value": "Item 2",
                  "elements": [
                    {
                      "type": "text",
                      "name": "subitem2"
                    }
                  ]
                },
              ]
            }
          ]
        }
      ]
    };
    await setOptions(page, {
      maxChoiceContentNestingLevel: 2
    });
    await page.evaluate(() => {
      (window as any).creator.onNotify.add(()=>{});
    });
    await setJSON(page, json);
    const choiceExpandButton = page.locator(".svc-choice-elements-button").first();
    const addQuestion = page.getByLabel("question1").getByText("Add Question");

    await choiceExpandButton.click();
    await addQuestion.click();
    await compareScreenshot(page, ".sd-element__content", "choices-elements-designe-surface.png");
  });
});
