import { url, compareScreenshot, test, setJSON } from "./helper";

const title = "Sidebar Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("check scrollbars", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });

    const json = {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "radiogroup",
              "name": "question1"
            },
            {
              "type": "radiogroup",
              "name": "question2"
            },
            {
              "type": "radiogroup",
              "name": "question2"
            },
          ]
        },
      ]
    };

    await setJSON(page, json);

    await compareScreenshot(page, ".svc-side-bar__container", "scrollbar-property-grid.png");
    // await page.hover(".svc-side-bar__container", { position: { x: -6, y: 100 } });
    // await compareScreenshot(page, ".svc-side-bar__container", "scrollbar-property-grid-hover.png");

    await compareScreenshot(page, ".svc-creator__content-holder", "scrollbar-creator-content.png");
    // await page.hover(".svc-creator__content-holder", { position: { x: -23, y: 100 } });
    // await compareScreenshot(page, ".svc-creator__content-holder", "scrollbar-creator-content-hover.png");
  });
});
