import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, takeElementScreenshot, wrapVisualTest } from "../../helper";

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
            "Item 1",
            "Item 2",
            "Item 3"
          ]
        }
      ]
    }
  ]
};

test("Check section", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await ClientFunction(() => window["creator"].currentPlugin.propertyGrid.searchEnabled = false)();
    await t.resizeWindow(1920, 1080);

    await setJSON(json);
    // await t.click(Selector(".svd-grid-expand"));
    await t.click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
    await t.click(Selector("h4[aria-label=General]"));
    await t.click(Selector("h4[aria-label='Choice Options']"));

    const sectionContentElement = Selector("h4[aria-label='Choice Options']").parent().nextSibling();
    await t.expect(sectionContentElement.visible).ok();
    await takeElementScreenshot("choices-section-default.png", sectionContentElement, t, comparer);
    await ClientFunction(() => (<any>document).querySelector("[data-name='choices'] .spg-input").focus())();
    await takeElementScreenshot("choices-section-default-focused.png", sectionContentElement, t, comparer);
    await ClientFunction(() => (<any>document).querySelector("body").focus())();
    await t.hover(sectionContentElement.find(".spg-action-button").nth(0));
    await takeElementScreenshot("choices-clear-button-hovered.png", sectionContentElement, t, comparer);

    await t.hover(sectionContentElement.find(".spg-action-button").nth(3));
    await takeElementScreenshot("choices-edit-item-button-hovered.png", sectionContentElement, t, comparer);

    await t.click(sectionContentElement.find(".spg-action-button").nth(3));
    await takeElementScreenshot("choices-edit-item-content.png", sectionContentElement, t, comparer);
  });
});

test("Check items empty", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

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
      .click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 })
      .click(Selector("h4[aria-label=General]"))
      .click(Selector("h4[aria-label='Choice Options']"));

    const sectionContentElement = Selector("h4[aria-label='Choice Options']").parent().nextSibling();
    await takeElementScreenshot("choices-empty-items.png", sectionContentElement, t, comparer);

    await t.hover(sectionContentElement.find(".spg-matrixdynamic__add-btn"));
    await takeElementScreenshot("choices-empty-add-btn-hovered.png", sectionContentElement, t, comparer);
  });
});
test("Collection editor headers", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
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
      .click(Selector("h4[aria-label='Choice Options']"));

    const sectionContentElement = Selector("h4[aria-label='Choice Options']").parent().nextSibling();
    await takeElementScreenshot("collection-editor-header.png", sectionContentElement, t, comparer);
  });
});

test("Check choices editor with narrow property grid", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

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

    await setJSON(surveyJSON);

    const westResizer = Selector(".svc-resizer-west");
    const questionSelector = Selector("div[data-name='choices']");
    await t
      .drag(westResizer, 100, 0)
      .click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 })
      .click(Selector("h4[aria-label=General]"))
      .click(Selector("h4[aria-label='Choice Options']"))
      .click(questionSelector.find("td .spg-action-button").nth(0));

    await takeElementScreenshot("choices-editor-narrow-pg.png", questionSelector, t, comparer);
  });
});