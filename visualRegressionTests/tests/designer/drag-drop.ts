import { Selector, ClientFunction } from "testcafe";
import { url, setJSON, checkElementScreenshot, explicitErrorHandler, getPropertyGridCategory, generalGroupName, patchDragDropToDisableDrop } from "../../helper";

const title = "DragDrop Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Ghost Survey Element", async (t) => {
  await setJSON({ pages: [{ name: "page1" }] });
  await t.resizeWindow(2560, 1440);
  await setJSON({ pages: [{ name: "page1" }] });

  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");

  const patchDragDropToShowGhostElementAfterDrop = ClientFunction(() => {
    window["creator"].dragDropSurveyElements.removeGhostElementFromSurvey = () => { };
  });

  await patchDragDropToShowGhostElementAfterDrop();

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 });

  await checkElementScreenshot("drag-drop-survey-element-ghost.png", Selector(".sv-drag-drop-ghost"), t);
});

test("Toolbox Item State After Drag", async (t) => {
  await setJSON({ pages: [{ name: "page1" }] });
  await t.resizeWindow(2560, 1440);
  await setJSON({ pages: [{ name: "page1" }] });

  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 });

  await checkElementScreenshot("toolbox-item-state-after-drag.png", Selector(RatingToolboxItem), t);
});

test("Empty Panel Styles", async (t) => {
  await t.resizeWindow(2560, 1440);

  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "panel",
            name: "panel1"
          }
        ]
      }
    ]
  };
  await setJSON(json);

  await patchDragDropToDisableDrop();

  const Panel = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");
  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, Panel, { speed: 0.5 });

  await checkElementScreenshot("drag-drop-survey-element-empty-panel.png", Panel, t);
});

test("Empty Panel Dynamic Styles", async (t) => {
  await t.resizeWindow(2560, 1440);

  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "paneldynamic",
            name: "question1"
          }
        ]
      }
    ]
  };
  await setJSON(json);
  await patchDragDropToDisableDrop();

  const PanelDynamic = Selector("[data-sv-drop-target-survey-element=\"question1\"]");
  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, PanelDynamic, { speed: 0.5 });

  await checkElementScreenshot("drag-drop-survey-element-empty-panel-dynamic.png", PanelDynamic, t);
});

test("Choices: Ranking", async (t) => {
  await t.resizeWindow(2560, 1440);

  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            "type": "ranking",
            "name": "question1",
            "choices": [
              "item1",
              "item2"
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);
  await patchDragDropToDisableDrop();

  const QRoot = Selector(".svc-question__adorner .sd-question__content").filterVisible();
  const FirstItem = QRoot.find(".svc-item-value-wrapper").nth(0);

  await checkElementScreenshot("drag-drop-item-values-ranking.png", QRoot, t);

  await t.hover(FirstItem);
  await checkElementScreenshot("drag-drop-item-values-ranking--hover.png", QRoot, t);

  await t.dragToElement(FirstItem.find(".svc-item-value-controls__drag"), FirstItem).wait(500);
  await checkElementScreenshot("drag-drop-item-values-ranking--dragging.png", QRoot, t);
});

test("Matrix: Property Grid: Choices", async (t) => {
  await t.resizeWindow(2560, 1440);

  const patchMatrixDragDropToDisableDrop = ClientFunction(() => {
    const matrix = window["creator"].designerPropertyGrid.survey.getAllQuestions().filter((q) => q.name === "choices")[0];
    matrix.dragDropMatrixRows.drop = () => { };
  });

  const json = {
    pages: [
      {
        name: "page1",
        elements: [
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
  await setJSON(json);

  await t
    .click(Selector("[data-name=\"question1\"]"), { speed: 0.5 })
    .click(getPropertyGridCategory(generalGroupName))
    .click(getPropertyGridCategory("Choices"));

  await patchMatrixDragDropToDisableDrop();

  const Item1 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0);
  const Item2 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1);
  const Item3 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(2);

  let DragZoneItem2 = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(1).find(".spg-drag-element__svg");
  await t
    .hover(Item1).hover(Item2).hover(Item3).hover(DragZoneItem2)
    .dragToElement(DragZoneItem2, Item1, {
      offsetX: 5,
      offsetY: 5,
      destinationOffsetX: 20,
      destinationOffsetY: 20,
      speed: 0.5
    });

  await checkElementScreenshot("drag-drop-matrix-pg-choices.png", Selector("[data-name=\"choices\"]"), t);
});

// https://github.com/surveyjs/survey-creator/issues/3113
test("Drag Drop ImagePicker (choices) drop to invalid area", async (t) => {
  await explicitErrorHandler();
  await t.resizeWindow(2560, 1440);

  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            "type": "imagepicker",
            "name": "question1",
            "choices": [
              {
                "value": "lion",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                "value": "giraffe",
                "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              },
              {
                "value": "panda",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
              },
              {
                "value": "camel",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
              }
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const Question1 = Selector("[data-name=\"question1\"]");
  const GiraffeItem = Selector("[data-sv-drop-target-item-value=\"giraffe\"]");
  const SurveyTitle = Selector("[aria-placeholder='Survey Title']");

  const DragZoneGiraffeItem = GiraffeItem.find(".svc-image-item-value-controls__drag-area-indicator").filterVisible();

  await t
    .click(Question1, { speed: 0.1 })
    .hover(GiraffeItem, { speed: 0.1 }).hover(DragZoneGiraffeItem, { speed: 0.1 })
    .dragToElement(DragZoneGiraffeItem, SurveyTitle, { speed: 0.1 })
    .wait(1000);

  await checkElementScreenshot("drag-drop-image-picker-invalid-drop-area.png", Selector(GiraffeItem), t);
});

// https://github.com/surveyjs/survey-creator/issues/3234
test("Drag Drop to Multiline from Toolbox", async (t) => {
  await explicitErrorHandler();
  await t.resizeWindow(2560, 1440);

  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          },
          {
            "type": "text",
            "name": "question2",
            "startWithNewLine": false
          },
          {
            "type": "text",
            "name": "question3"
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
  const Question2 = Selector("[data-name=\"question2\"]");
  const Page1 = Selector("[data-sv-drop-target-survey-element='page1']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, Question2, { speed: 0.5, destinationOffsetX: -1 });

  await checkElementScreenshot("drag-drop-to-multiline-from-toolbox.png", Page1, t);
});