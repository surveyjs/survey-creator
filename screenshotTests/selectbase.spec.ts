
import { url, compareScreenshot, test, setJSON, setOptions } from "./helper";

const title = "Selectbase";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
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
      maxChoicesElementsLevel: 2
    });
    await setJSON(page, json);
    const choiceExpandButton = page.locator(".svc-choice-elements-button").first();
    const addQuestion = page.getByLabel("question1").getByText("Add Question");

    await choiceExpandButton.click();
    await addQuestion.click();
    await compareScreenshot(page, ".sd-element__content", "choices-elements-designe-surface.png");
  });
});
