import { url, test, setJSON, compareScreenshot } from "./helper";

const title = "Mobile view / responsiveness";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("check whole layout", async ({ page }) => {
    await page.setViewportSize({ width: 500, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "radiogroup",
              "name": "question2",
              "choices": ["One", "Two", "Three"]
            }
          ]
        }
      ]
    });
    await page.waitForTimeout(1000);
    await compareScreenshot(page, ".svc-creator", "creator-mobile-paddings.png");
    await page.locator(".svc-page__content").first().click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, ".svc-creator", "creator-mobile-page-selected-paddings.png");
  });

  test("smartphone layout", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "radiogroup",
              "name": "question2",
              "choices": ["One", "Two", "Three"]
            }
          ]
        }
      ]
    });
    await page.waitForTimeout(1000);
    await compareScreenshot(page, ".svc-creator", "creator-smartphone.png");
    await page.locator(".svc-page__content").first().click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, ".svc-creator", "creator-smartphone-selected.png");
  });

  test("smartphone layout with page drag", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].allowDragPages = true;
      window["creator"].expandCollapseButtonVisibility = "onhover";
    });

    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "radiogroup",
              "name": "question2",
              "choices": ["One", "Two", "Three"]
            }
          ]
        }
      ]
    });

    await page.setViewportSize({ width: 375, height: 900 });
    await page.waitForTimeout(1000);
    await compareScreenshot(page, ".svc-creator", "creator-smartphone-page-drag.png");
    await page.locator(".svc-page__content").first().click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, ".svc-creator", "creator-smartphone-selected-page-drag.png");
  });
});
