import { Selector, ClientFunction } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, getSurveyJSFramework } from "../../helper";

const title = "Choices section Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "checkbox",
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

test("Check section", async (t) => {
  await t.resizeWindow(1920, 1080);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await ClientFunction((json) => { window["creator"].JSON = json; })(json);
  // await t
  //   .click(Selector(".svd-grid-expand"));
  await t
    .click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
  await t
    .click(Selector("h4[aria-label=General]"));
  await t
    .click(Selector("h4[aria-label=Choices]"));

  const sectionContentElement = Selector("h4[aria-label=Choices]").parent().nextSibling();
  await t.expect(sectionContentElement.visible).ok();
  await takeScreenshot("choices-section-default.png", sectionContentElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t
    .hover(sectionContentElement.find(".sv-action-bar-item").nth(0));
  await takeScreenshot("choices-clear-button-hovered.png", sectionContentElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t
    .hover(sectionContentElement.find(".sv-action-bar-item").nth(4));
  await takeScreenshot("choices-edit-item-button-hovered.png", sectionContentElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t
    .click(sectionContentElement.find(".sv-action-bar-item").nth(4));
  await takeScreenshot("choices-edit-item-content.png", sectionContentElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});

test("Check items empty", async (t) => {
  await t.resizeWindow(1920, 1080);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await ClientFunction((json) => { window["creator"].JSON = json; })({
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "question1",
            "choices": []
          }
        ]
      }
    ]
  });
  await t
    .click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
  await t
    .click(Selector("h4[aria-label=General]"));
  await t
    .click(Selector("h4[aria-label=Choices]"));

  const sectionContentElement = Selector("h4[aria-label=Choices]").parent().nextSibling();
  await takeScreenshot("choices-empty-items.png", sectionContentElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
  await t
    .hover(sectionContentElement.find(".spg-matrixdynamic__add-btn"));
  await takeScreenshot("choices-empty-add-btn-hovered.png", sectionContentElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});
