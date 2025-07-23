import { url, compareScreenshot, test, setJSON } from "./helper";
const title = "Design Surface Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });
  test("PG: check checkbox inside detail panel", async ({ page }) => {
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "checkbox",
              "name": "question1",
              "choices": [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
            }
          ]
        }
      ],
    });
    await page.click(".svc-question__content");
    await page.getByRole("button", { name: "Choice Options" }).click();
    await page.click(".spg-action-button[title='Show Details']");
    await compareScreenshot(page, ".spg-table__cell.spg-table__cell--detail-panel", "pg-checkbox-detail-panel.png");
  });
  test("PG: check dropdown inside matrix", async ({ page }) => {
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "validators": [
                {
                  "type": "text"
                }
              ]
            }
          ]
        }
      ]
    });

    await page.getByText("question1Single-Line").click();
    await page.getByRole("button", { name: "Validation" }).click();
    await page.getByRole("button", { name: "Select", exact: true }).click();

    await compareScreenshot(page, page.getByRole("group", { name: "Validation" }), "pg-matrix-dropdown-width.png");
  });
});
