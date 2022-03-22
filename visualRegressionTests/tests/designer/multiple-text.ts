import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, setJSON } from "../../helper";

const title = "MultipleText Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "multipletext",
          "name": "question1",
          "items": [
            {
              "name": "text1"
            },
            {
              "name": "text2"
            }
          ]
        }
      ]
    }
  ]
};

test("Multiple text items", async (t) => {
  await t.resizeWindow(1920, 1080);
  await setJSON(json);
  await t.wait(1000);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await t
    .click(Selector(".sd-question"))
    .click(Selector(".svc-side-bar .spg-panel__title").withText("Items"));
  await takeScreenshot("multiple-text-items.png", Selector(".svc-side-bar .spg-panel").nth(1), screenshotComparerOptions);

  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});