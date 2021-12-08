import { Selector, ClientFunction } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, getSurveyJSFramework } from "../../helper";

const title = "ValueLink Actions in Data section Screenshot";

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

test("Chaeck states", async (t) => {
  await t.resizeWindow(1920, 1080);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await ClientFunction((json) => { window["creator"].JSON = json; })(json);

  // await t
  //   .click(Selector(".svd-grid-expand"));
  await t
    .click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
  await t.wait(500);
  await t
    .click(Selector("h4[aria-label=General]"));
  await t
    .click(Selector("h4[aria-label=Data]"));

  const buttonElement=Selector(".svc-action-button.spg-action-button.spg-question-link__set-button");

  await t.expect(buttonElement.visible).ok();
  await t.wait(1000);
  await takeScreenshot("action-button-default.png", buttonElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t
    .hover(buttonElement);
  await t.wait(1000);
  await takeScreenshot("action-button-hovered.png", buttonElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});
