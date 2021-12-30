import { Selector, ClientFunction } from "testcafe";
import { url, setJSON, checkElementScreenshot } from "../../helper";

const title = "DragDrop Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const patchDragDropToDisableDrop = ClientFunction(() => {
  window["creator"].dragDropSurveyElements.drop = () => { };
  window["creator"].dragDropChoices.drop = () => { };
});

test("Ghost Survey Element", async (t) => {
  await t.resizeWindow(2560, 1440);

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

  const QRoot = Selector(".svc-question__adorner").filterVisible();
  const FirtItem = QRoot.find(".svc-item-value-wrapper").nth(0);

  await checkElementScreenshot("drag-drop-item-values-ranking.png", QRoot, t);

  await t.hover(FirtItem);
  await checkElementScreenshot("drag-drop-item-values-ranking--hover.png", QRoot, t);

  await t.dragToElement(FirtItem.find(".svc-item-value-controls__drag"), FirtItem);
  await checkElementScreenshot("drag-drop-item-values-ranking--dragging.png", QRoot, t);
});