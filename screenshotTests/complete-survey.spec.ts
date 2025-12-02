import { url, compareScreenshot, test, setJSON, expect, getTabbedMenuItemByText, creatorTabPreviewName } from "./helper";

const title = "Complete survey tab";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  const json = {
    showQuestionNumbers: true,
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "matrixdynamic",
            "name": "Question1",
            "defaultValue": [
              {
                "Column 1": [1],
                "Column 2": [2],
                "Column 3": [3]
              },
              {
                "Column 1": [4],
                "Column 2": [5],
                "Column 3": [1]
              }
            ],
            "columns": [
              { "name": "Column 1" },
              { "name": "Column 2" },
              { "name": "Column 3" }
            ],
            "choices": [1, 2, 3, 4, 5],
            "cellType": "checkbox"
          }
        ]
      }
    ]
  };

  test("Check the upper part of the page", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    await setJSON(page, json);

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.locator(".sd-navigation__complete-btn").click();

    await page.waitForTimeout(1000);

    const thankYouMessage = page.locator(".sd-completedpage");
    await compareScreenshot(page, thankYouMessage, "complete-tab-thank-message.png");

    const startAgainButton = page.locator(".svc-preview__test-again");
    await compareScreenshot(page, startAgainButton, "complete-tab-test-again.png");

    const upperPart = page.locator(".svc-test-tab__content");
    await compareScreenshot(page, upperPart, "complete-tab-upper-part.png");
  });

  test("Check the lower part of the page", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1280 });

    await setJSON(page, json);

    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await page.locator(".sd-navigation__complete-btn").click();

    const resultsPart = page.locator(".svd-test-results");
    await compareScreenshot(page, resultsPart, "complete-tab-results-part.png");

    const tableResult = page.locator(".svd-test-results__table");
    const tableRows = page.locator(".svd-test-results__table table tbody tr");
    const tableHeader = page.locator(".svd-test-results__table table thead tr");

    await tableRows.nth(0).click();
    await tableRows.nth(1).click();
    await tableRows.nth(2).click();
    await tableHeader.click();
    await compareScreenshot(page, tableResult, "complete-tab-results-via-table-1.png");

    await tableRows.nth(0).click();
    await tableHeader.click();
    await compareScreenshot(page, tableResult, "complete-tab-results-via-table-2.png");

    await tableRows.nth(0).click();
    await tableHeader.click();
    await compareScreenshot(page, tableResult, "complete-tab-results-via-table-1.png");

    await page.locator(".svc-action-button").getByText("As JSON").click();

    await compareScreenshot(page, resultsPart, "complete-tab-results-via-json.png");
  });
});
