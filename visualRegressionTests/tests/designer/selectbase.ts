import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, setJSON } from "../../helper";

const title = "SelectBase Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "dropdown",
          "name": "question1",
          "choices": [
            "item1",
            "item2",
            "item3"
          ]
        }
      ]
    }
  ]
};

test("Dropdown adorners", async (t) => {
  await setJSON(json);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const question = Selector(".svc-question__dropdown-choices");
  await takeScreenshot("dropdown-not-selected.png", question, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t
    .click(question, { offsetY: 40 })
    .expect(Selector(".svc-question__content--selected div[data-name=question1]").visible).ok();
  await takeScreenshot("dropdown-selected.png", question, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});