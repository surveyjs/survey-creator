import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, setJSON } from "../../helper";

const title = "Actions in Logic section Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
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
  ]
};

test("Check states", async (t) => {
  await t.resizeWindow(1920, 1080);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await setJSON(json);

  // await t
  //   .click(Selector(".svd-grid-expand"));
  await t
    .click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
  await t
    .click(Selector("h4[aria-label=General]"));
  await t
    .click(Selector("h4[aria-label=Logic]"));

  const sectionContentElement = Selector("h4[aria-label=Logic]").parent().nextSibling();

  await t.expect(sectionContentElement.visible).ok();
  await takeScreenshot("logic-button-default.png", sectionContentElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t
    .hover(sectionContentElement.find(".spg-action-button").nth(1));
  await takeScreenshot("logic-button-hovered.png", sectionContentElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});
