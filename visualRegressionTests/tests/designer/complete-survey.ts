import { Selector } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, creatorTabPreviewName, takeElementScreenshot, wrapVisualTest } from "../../helper";

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
              ],
              "Column 2": [
                2
              ],
              "Column 3": [
                3
              ]
            },
            {
              "Column 1": [
                4
              ],
              "Column 2": [
                5
              ],
              "Column 3": [
                1
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
            2,
            3,
            4,
            5
          ],
          "cellType": "checkbox"
        }
      ]
    }
  ]
};

test("Check the upper part of the page", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

    await setJSON(json);

    await t.click(getTabbedMenuItemByText(creatorTabPreviewName))
      .click(Selector(".sd-navigation__complete-btn"));

    await t.wait(1000);

    const thankYouMessage = Selector(".sd-completedpage h3");
    await takeElementScreenshot("complete-tab-thank-message.png", thankYouMessage, t, comparer);

    const startAgainButton = Selector(".svc-preview__test-again");
    await takeElementScreenshot("complete-tab-test-again.png", startAgainButton, t, comparer);

    const upperPart = Selector(".svc-test-tab__content");
    await takeElementScreenshot("complete-tab-upper-part.png", upperPart, t, comparer);
  });
});

test("Check the lower part of the page", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1280);

    await setJSON(json);

    await t.click(getTabbedMenuItemByText(creatorTabPreviewName))
      .click(Selector(".sd-navigation__complete-btn"));

    const resultsPart = Selector(".svd-test-results");
    await takeElementScreenshot("complete-tab-results-part.png", resultsPart, t, comparer);

    const tableResult = Selector(".svd-test-results__table");
    const tableRows = Selector(".svd-test-results__table table tbody tr");
    const tableHeader = Selector(".svd-test-results__table table thead tr");

    await t.click(tableRows.nth(0));
    await t.click(tableRows.nth(1));
    await t.click(tableRows.nth(2))
      .click(tableHeader);
    await takeElementScreenshot("complete-tab-results-via-table-1.png", tableResult, t, comparer);

    await t.click(tableRows.nth(0))
      .click(tableHeader);
    await takeElementScreenshot("complete-tab-results-via-table-2.png", tableResult, t, comparer);

    await t.click(tableRows.nth(0))
      .click(tableHeader);
    await takeElementScreenshot("complete-tab-results-via-table-1.png", tableResult, t, comparer);

    await t.click(Selector(".svc-action-button").withText("As JSON"));

    await takeElementScreenshot("complete-tab-results-via-json.png", resultsPart, t, comparer);
  });
});