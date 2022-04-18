import { ClientFunction, Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, setJSON, checkElementScreenshot } from "../../helper";

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

  await setJSON(json);
  // await t.click(Selector(".svd-grid-expand"));
  await t.click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
  await t.click(Selector("h4[aria-label=General]"));
  await t.click(Selector("h4[aria-label=Choices]"));

  const sectionContentElement = Selector("h4[aria-label=Choices]").parent().nextSibling();
  await t.expect(sectionContentElement.visible).ok();
  await checkElementScreenshot("choices-section-default.png", sectionContentElement, t);

  await t.hover(sectionContentElement.find(".spg-action-button").nth(0));
  await checkElementScreenshot("choices-clear-button-hovered.png", sectionContentElement, t);

  await t.hover(sectionContentElement.find(".spg-action-button").nth(3));
  await checkElementScreenshot("choices-edit-item-button-hovered.png", sectionContentElement, t);

  await t.click(sectionContentElement.find(".spg-action-button").nth(3));
  await checkElementScreenshot("choices-edit-item-content.png", sectionContentElement, t);
});

test("Check items empty", async (t) => {
  await t.resizeWindow(1920, 1080);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const checkBoxEmptyItemsSurvey = {
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
  };
  await setJSON(checkBoxEmptyItemsSurvey);
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

test("Collection editor headers", async (t) => {
  await t.resizeWindow(1920, 1080);

  const addCustomProperty = ClientFunction(() => {
    window["Survey"].JsonObject.metaData.addProperty("itemvalue", { name: "customColumn" });
  });

  const surveyJSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question1",
            "choices": [1, 2, 3],
          },
        ]
      }
    ]
  };

  await addCustomProperty();
  await setJSON(surveyJSON);

  await t
    .click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
  await t
    .click(Selector("h4[aria-label=General]"));
  await t
    .click(Selector("h4[aria-label=Choices]"));

  const sectionContentElement = Selector("h4[aria-label=Choices]").parent().nextSibling();
  await checkElementScreenshot("collection-editor-header.png", sectionContentElement, t);
});
