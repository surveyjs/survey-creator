import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, getSurveyJSFramework } from "../../helper";
import { changeToolboxLocation, setShowPropertyGrid } from "../../utils";

const title = "Toolbox Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const translationTab = Selector(".svc-tabbed-menu-item__text").withText("Translation");

test("Left toolbox", async (t) => {
  const toolboxItem = Selector(".svc-toolbox__item");
  const toolboxItemDots = Selector(".svc-toolbox__tool .sv-dots__item");
  await t.resizeWindow(2560, 1440);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const toolboxElement = Selector(".svc-toolbox");
  const checkScreenshot = async (screenshotName: string) => {
    await t.wait(1000);
    await takeScreenshot(screenshotName, toolboxElement, screenshotComparerOptions);
    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  };

  await checkScreenshot("toolbox-left.png");

  await t.hover(toolboxItem);
  await checkScreenshot("toolbox-left-hover-item.png");

  await t
    .hover(translationTab) // move cursor from toolboxItem
    .resizeWindow(1510, 870);
  await checkScreenshot("toolbox-left-adaptive.png");

  await t.hover(toolboxItemDots);
  await checkScreenshot("toolbox-left-hover-dots-item.png");

  await t
    .hover(translationTab) // move cursor from toolboxItem
    .resizeWindow(1240, 870);
  await checkScreenshot("toolbox-left-adaptive-compact.png");

  await t.hover(toolboxItem);
  await checkScreenshot("toolbox-left-compact-hover-item.png");

  await t.click(toolboxItemDots);
  await t.wait(1000);
  await takeScreenshot("toolbox-left-popup.png", Selector(".sv-popup.svc-toolbox-popup"), screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t.resizeWindow(2560, 1440);
});

test("Right toolbox", async (t) => {
  const toolboxItem = Selector(".svc-toolbox__item");
  const toolboxItemDots = Selector(".svc-toolbox__tool .sv-dots__item");

  await changeToolboxLocation("right");
  await setShowPropertyGrid(false);
  await t.resizeWindow(2560, 1440);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const toolboxElement = Selector(".svc-toolbox");
  const checkScreenshot = async (screenshotName: string) => {
    await t.wait(1000);
    await takeScreenshot(screenshotName, toolboxElement, screenshotComparerOptions);
    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  };

  await checkScreenshot("toolbox-right.png");

  await t.hover(toolboxItem);
  await checkScreenshot("toolbox-right-hover-item.png");

  await t
    .hover(translationTab) // move cursor from toolboxItem
    .resizeWindow(1510, 870);
  await checkScreenshot("toolbox-right-adaptive.png");

  await t.hover(toolboxItemDots);
  await checkScreenshot("toolbox-right-hover-dots-item.png");

  await t
    .hover(translationTab) // move cursor from toolboxItem
    .resizeWindow(1240, 870);
  await checkScreenshot("toolbox-right-adaptive-compact.png");

  await t.hover(toolboxItem);
  await checkScreenshot("toolbox-right-compact-hover-item.png");

  await t.click(toolboxItemDots);
  await t.wait(1000);
  await takeScreenshot("toolbox-right-popup.png", Selector(".sv-popup.svc-toolbox-popup"), screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});

test("toolbox inside sidebar", async (t) => {
  const toolboxItem = Selector(".svc-toolbox__item");
  const toolboxButtonSelector = Selector(".sv-action-bar-item[title=\"Toolbox\"]");

  await changeToolboxLocation("insideSideBar");
  await setShowPropertyGrid(true);
  await t
    .click(toolboxButtonSelector)
    .resizeWindow(2560, 1440);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const toolboxElement = Selector(".svc-toolbox");
  const checkScreenshot = async (screenshotName: string) => {
    await t.wait(1000);
    await takeScreenshot(screenshotName, toolboxElement, screenshotComparerOptions);
    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  };

  await checkScreenshot("toolbox-inside-sidebar.png");

  await t.hover(toolboxItem);
  await checkScreenshot("toolbox-inside-sidebar-hover-item.png");
});

test("Toolbox tool pressed state", async (t) => {
  await t.resizeWindow(2560, 1440);
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  const toolboxTool = Selector(".svc-toolbox__tool");

  await t.dispatchEvent(toolboxTool, "pointerdown");

  await takeScreenshot("toolbox-tool-pressed-state.png", toolboxTool, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());

  await t.dispatchEvent(toolboxTool, "pointerup");
  await takeScreenshot("toolbox-tool-normal-state.png", toolboxTool, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});