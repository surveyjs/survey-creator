import { url, getTabbedMenuItemByText, setJSON, creatorTabPreviewName } from "../helper";
import { Selector } from "testcafe";
const title = "Preview tab";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

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

test("Test survey results table expand/collapse", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector(".sd-navigation__complete-btn"))
    .expect(Selector("h3").withText("Thank you for completing the survey").visible).ok();

  const tableRows = Selector(".svd-test-results__table table tbody tr");

  await t
    .click(tableRows.nth(0))
    .expect(Selector("td span").withText("srow_3").visible).ok()
    .click(tableRows.nth(1))
    .expect(Selector("td span").withText("Column 1").visible).ok()
    .click(tableRows.nth(2))
    .expect(Selector("td span").withText("Choice").visible).ok()
    .click(tableRows.nth(0))
    .expect(Selector("td span").withText("srow_3").visible).notOk();
});
