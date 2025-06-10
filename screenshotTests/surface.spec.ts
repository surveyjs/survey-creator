import { url, compareScreenshot, test } from "../e2e/helper";
const title = "Design Surface Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });
  test("Check question type dots selector", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    await page.evaluate(() => {
      window["creator"].onPageGetFooterActions.add((sender, options) => {
        const page = options.page;
        options.actions.push({
          id: "sv-nav-clear-page",
          title: "Clear Page",
          action: () => {
            alert("Clear Page");
          },
          css: "nav-button",
          innerCss: "sd-btn nav-input",
        });
      });
      window["creator"].JSON = {
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "text",
                "name": "question1"
              }
            ]
          }
        ],
        "headerView": "advanced"
      };
    });
    await compareScreenshot(page, ".sv-action-bar.svc-page__footer", "dots-type-selector-custom-button.png");
  });
});
