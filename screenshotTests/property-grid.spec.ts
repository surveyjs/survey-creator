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
});
