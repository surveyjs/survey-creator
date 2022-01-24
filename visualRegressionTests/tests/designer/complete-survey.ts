import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, setJSON, getTabbedMenuItemByText, creatorTabPreviewName, checkElementScreenshot } from "../../helper";

const title = "Complete survey tab";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "matrixdynamic",
          "name": "Question1",
          "defaultValue": [
            {
              "Column 1": [
                1
              ]
            },
            {
              "Column 1": [
                2
              ]
            }
          ],
          "columns": [
            {
              "name": "Column 1"
            },
            {
              "name": "Column 2"
            },
            {
              "name": "Column 3"
            }
          ],
          "choices": [
            1,
            2
          ],
          "cellType": "checkbox"
        }
      ]
    }
  ]
};

test("Check the upper part of the page", async (t) => {
  await t.resizeWindow(1920, 1080);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await setJSON(json);

  await t.click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector(".sd-navigation__complete-btn"));

  await t.wait(1000);

  const thankYouMessage = Selector(".sd-completedpage h3");
  await checkElementScreenshot("complete-tab-thank-message.png", thankYouMessage, t);

  const startAgainButton = Selector(".svc-preview__test-again");
  await checkElementScreenshot("complete-tab-test-again.png", startAgainButton, t);

  const upperPart = Selector(".svc-test-tab__content");
  await checkElementScreenshot("complete-tab-upper-part.png", upperPart, t);
});

test("Check the lower part of the page", async (t) => {
  await t.resizeWindow(1920, 1080);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await setJSON(json);

  await t.click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector(".sd-navigation__complete-btn"));

  await t.wait(1000);

  const resultsPart = Selector(".svd-test-results");
  await checkElementScreenshot("complete-tab-results-part.png", resultsPart, t);

  const tableResult = Selector(".svd-test-results__table");
  const tableRows = Selector(".svd-test-results__table table tbody tr");
  const tableHeader = Selector(".svd-test-results__table table thead tr");

  await t.click(tableRows.nth(0));
  await t.wait(500);
  await t.click(tableRows.nth(1));
  await t.wait(500);
  await t.click(tableRows.nth(2))
    .click(tableHeader);
  await t.wait(500);
  await checkElementScreenshot("complete-tab-results-via-table-1.png", tableResult, t);

  await t.click(tableRows.nth(0))
    .click(tableHeader);
  await t.wait(500);
  await checkElementScreenshot("complete-tab-results-via-table-2.png", tableResult, t);

  await t.click(tableRows.nth(0))
    .click(tableHeader);
  await t.wait(500);
  await checkElementScreenshot("complete-tab-results-via-table-1.png", tableResult, t);

  await t.click(Selector(".svc-action-button").withText("As JSON"));
  await t.wait(1000);

  await checkElementScreenshot("complete-tab-results-via-json.png", resultsPart, t);

});

