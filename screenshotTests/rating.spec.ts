import { url, compareScreenshot, test, setJSON } from "./helper";
const title = "Rating Question Screenshot";

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
});
