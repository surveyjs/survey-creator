import { Selector, ClientFunction } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, setJSON } from "../../helper";

const title = "DragDrop Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
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