import { url, compareScreenshot, test, setJSON } from "./helper";
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
  test("Multiple questions in one row, row content has scrolling", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
    await page.evaluate(() => {
      window["creator"].JSON = {
        "title": "WELD SHOP CHECKLIST",
        "pages": [
          {
            "name": "introInfo",
            "elements": [
              {
                "type": "panel",
                "name": "panel3",
                "elements": [
                  {
                    "type": "text",
                    "name": "uctPartNum",
                    "title": "UCT Part Number"
                  },
                  {
                    "type": "text",
                    "name": "rev",
                    "startWithNewLine": false,
                    "title": "Rev"
                  },
                  {
                    "type": "text",
                    "name": "qty",
                    "startWithNewLine": false,
                    "title": "Qty"
                  }
                ]
              },
              {
                "type": "text",
                "name": "date",
                "startWithNewLine": false,
                "title": "Date",
                "maskType": "datetime",
                "maskSettings": {
                  "pattern": "mm-dd-yyyy"
                }
              },
              {
                "type": "panel",
                "name": "panel5",
                "startWithNewLine": false,
                "elements": [
                  {
                    "type": "text",
                    "name": "woNum",
                    "title": "WO Number"
                  },
                  {
                    "type": "comment",
                    "name": "customer",
                    "title": "Customer"
                  }
                ]
              },
              {
                "type": "boolean",
                "name": "fairRequires",
                "title": "If requires FAIR"
              }
            ]
          },
        ],
        "questionsOnPageMode": "singlePage"
      };
    });
    await compareScreenshot(page, ".sd-page__row.sd-row--multiple", "row-multiple-questions.png");
  });
  test("String editor - long strings in short space", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
    await page.evaluate(() => {
      window["creator"].JSON = {
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "multipletext",
                "name": "question3",
                "maxWidth": "300px",
                "title": "Participant details",
                "items": [
                  {
                    "name": "item",
                    "title": "LongUnbreakableItem"
                  }
                ],
                "itemTitleWidth": "100"
              }
            ]
          }
        ],
        "widthMode": "static",
        "width": "800px"
      };
    });
    await compareScreenshot(page, ".sd-multipletext__item-container", "string-editor-long-string-short-space.png");
  });
});
