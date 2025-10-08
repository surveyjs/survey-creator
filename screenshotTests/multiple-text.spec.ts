import { url, compareScreenshot, test, setJSON, getPropertyGridCategory, resetFocusToBody } from "./helper";

const title = "MultipleText Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Multiple text items", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await setJSON(page, {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "multipletext",
              "name": "question1",
              "items": [
                { "name": "text1" },
                { "name": "text2" }
              ]
            }
          ]
        }
      ]
    });
    await page.waitForTimeout(1000);

    await page.click(".sd-question");
    await getPropertyGridCategory(page, "Items").click();
    await resetFocusToBody(page);
    await compareScreenshot(page, page.locator(".svc-side-bar .spg-panel").nth(1), "multiple-text-items.png");
  });
});
