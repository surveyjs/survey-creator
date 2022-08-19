import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, setJSON, changeToolboxLocation } from "../../helper";

const title = "Page Navigator Screenshot";

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
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "name": "question2"
        }
      ]
    }
  ]
};

test("On the right side (default)", async (t) => {
  await t.resizeWindow(1920, 1080);
  await setJSON({ pages: [{ name: "page1" }] });

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await setJSON(json);
  const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");

  await t.expect(pageNavigatorElement.visible).ok();
  await t.wait(1000);
  await takeScreenshot("page-navigator-right.png", pageNavigatorElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t
    .hover(Selector(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)"));
  await t.wait(1000);
  await takeScreenshot("page-navigator-right-hovered.png", pageNavigatorElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});

test("On the left side", async (t) => {
  await t.resizeWindow(1920, 1080);
  await setJSON({ pages: [{ name: "page1" }] });

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await setJSON(json);
  const pageNavigatorElement = Selector(".svc-tab-designer__page-navigator");
  await changeToolboxLocation("right");

  await t.expect(pageNavigatorElement.visible).ok();
  await t.wait(1000);
  await takeScreenshot("page-navigator-left.png", pageNavigatorElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t
    .hover(Selector(".svc-page-navigator-item-content:not(.svc-page-navigator-item--selected)"));
  await t.wait(1000);
  await takeScreenshot("page-navigator-left-hovered.png", pageNavigatorElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});
