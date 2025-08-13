import { url, compareScreenshot, test, setJSON } from "./helper";
const title = "Property Grid Screenshot";

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
  test("PG: tagbox editor", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).Survey.Serializer.addProperty("question", {
        category: "general",
        type: "multiplevalues",
        displayName: "Acceptable identity verifications:",
        name: "acceptableIdentityVerificationTypes",
        visibleIndex: 10,
        choices: ["Type 1", "Type 2", "Type 3"],
      });
    });
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "tagbox",
              "name": "tagbox",
              "acceptableIdentityVerificationTypes": ["Type 1", "Type 2"],
              "choices": ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
            }
          ]
        }
      ]
    });

    const tagbox = page.locator(".spg-tagbox");
    await page.getByText("tagbox").click();
    await compareScreenshot(page, tagbox, "pg-tagbox.png");

    await tagbox.getByRole("button", { name: "Clear" }).click();
    await compareScreenshot(page, tagbox, "pg-tagbox-empty.png");
  });
});
