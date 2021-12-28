import { Selector, ClientFunction } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, setJSON } from "../../helper";

const title = "DragDrop Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Ghost Survey Element", async (t) => {
  await t.resizeWindow(2560, 1440);
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");
  const EmptyPage = Selector("[data-sv-drop-target-survey-element='page1']");

  const patchDragDropToShowGhostElementAfterDrop = ClientFunction(() => {
    window["creator"].dragDropSurveyElements.removeGhostElementFromSurvey = () => { };
  });

  await patchDragDropToShowGhostElementAfterDrop();

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, EmptyPage, { speed: 0.5 });

  await takeScreenshot("drag-drop-survey-element-ghost.png", Selector(".sv-drag-drop-ghost"), screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});

test("Empty Panel Styles", async (t) => {
  await t.resizeWindow(2560, 1440);
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

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

  const patchDragDropToDisableDrop = ClientFunction(() => {
    window["creator"].dragDropSurveyElements.drop = () => { };
  });
  await patchDragDropToDisableDrop();

  const Panel = Selector("[data-sv-drop-target-survey-element=\"panel1\"]");
  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, Panel, { speed: 0.5 });

  await takeScreenshot("drag-drop-survey-element-empty-panel.png", Panel, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});

test("Empty Panel Dynamic Styles", async (t) => {
  await t.resizeWindow(2560, 1440);
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

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

  const patchDragDropToDisableDrop = ClientFunction(() => {
    window["creator"].dragDropSurveyElements.drop = () => { };
  });
  await patchDragDropToDisableDrop();

  const PanelDynamic = Selector("[data-sv-drop-target-survey-element=\"question1\"]");
  const RatingToolboxItem = Selector("[aria-label='Rating toolbox item']");

  await t
    .hover(RatingToolboxItem)
    .dragToElement(RatingToolboxItem, PanelDynamic, { speed: 0.5 });

  await takeScreenshot("drag-drop-survey-element-empty-panel-dynamic.png", PanelDynamic, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});