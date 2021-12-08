import { Selector, ClientFunction } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, getSurveyJSFramework } from "../../helper";
import { changeToolboxLocation } from "../../utils";

const title = "Top Menu Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {};

test("Top menu on designer tab", async (t) => {
  await t.resizeWindow(1920, 1080);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const topBarElement = Selector(".svc-top-bar");

  const checkScreenshot = async function (screenshotName: string) {
    await t.wait(1000);
    await takeScreenshot(screenshotName, topBarElement, screenshotComparerOptions);
    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  };

  await checkScreenshot("top-menu-designer-tab.png");

  await t.hover(Selector(".svc-tabbed-menu-item").nth(1));
  await checkScreenshot("top-menu-preview-hover.png");

  await t.click(Selector(".svc-toolbox"))
    .click(Selector(".svc-toolbox"));
  await checkScreenshot("top-menu-undo-active.png");

  await t.click(Selector("#icon-undo .sv-action-bar-item"))
    .click(Selector(".svc-side-bar .spg-row").nth(1));
  await checkScreenshot("top-menu-undo-and-redo-active.png");

  await t.click(Selector("#icon-undo .sv-action-bar-item"))
    .click(Selector(".svc-side-bar .spg-row").nth(1));
  await checkScreenshot("top-menu-redo-active.png");
});
