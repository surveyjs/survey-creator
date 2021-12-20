import { Selector, ClientFunction } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, getSurveyJSFramework } from "../../helper";

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