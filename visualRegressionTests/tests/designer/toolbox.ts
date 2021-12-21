import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, getSurveyJSFramework, changeToolboxLocation, setShowPropertyGrid, getTabbedMenuItemByText, checkElementScreenshot } from "../../helper";

const title = "Toolbox Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const translationTab = getTabbedMenuItemByText("Translation");

test("Left toolbox", async (t) => {
  const toolboxItem = Selector(".svc-toolbox__item");
  const toolboxItemDots = Selector(".svc-toolbox__tool .sv-dots__item");
  const toolboxElement = Selector(".svc-toolbox");

  await t.resizeWindow(2560, 1440);
  await checkElementScreenshot("toolbox-left.png", toolboxElement, t);

  await t.hover(toolboxItem);
  await checkElementScreenshot("toolbox-left-hover-item.png", toolboxElement, t);

  await t
    .hover(translationTab) // move cursor from toolboxItem
    .resizeWindow(1510, 870);
  await checkElementScreenshot("toolbox-left-adaptive.png", toolboxElement, t);

  await t.hover(toolboxItemDots);
  await checkElementScreenshot("toolbox-left-hover-dots-item.png", toolboxElement, t);

  await t
    .hover(translationTab) // move cursor from toolboxItem
    .resizeWindow(1240, 870);
  await checkElementScreenshot("toolbox-left-adaptive-compact.png", toolboxElement, t);

  await t.hover(toolboxItem);
  await checkElementScreenshot("toolbox-left-compact-hover-item.png", toolboxElement, t);

  await t.click(toolboxItemDots);
  await checkElementScreenshot("toolbox-left-popup.png", Selector(".sv-popup.svc-toolbox-popup"), t);

  await t.resizeWindow(2560, 1440);
});

test("Right toolbox", async (t) => {
  const toolboxItem = Selector(".svc-toolbox__item");
  const toolboxItemDots = Selector(".svc-toolbox__tool .sv-dots__item");

  await changeToolboxLocation("right");
  await setShowPropertyGrid(false);
  await t.resizeWindow(2560, 1440);

  const toolboxElement = Selector(".svc-toolbox");
  await checkElementScreenshot("toolbox-right.png", toolboxElement, t);

  await t.hover(toolboxItem);
  await checkElementScreenshot("toolbox-right-hover-item.png", toolboxElement, t);

  await t
    .hover(translationTab) // move cursor from toolboxItem
    .resizeWindow(1510, 870);
  await checkElementScreenshot("toolbox-right-adaptive.png", toolboxElement, t);

  await t.hover(toolboxItemDots);
  await checkElementScreenshot("toolbox-right-hover-dots-item.png", toolboxElement, t);

  await t
    .hover(translationTab) // move cursor from toolboxItem
    .resizeWindow(1240, 870);
  await checkElementScreenshot("toolbox-right-adaptive-compact.png", toolboxElement, t);

  await t.hover(toolboxItem);
  await checkElementScreenshot("toolbox-right-compact-hover-item.png", toolboxElement, t);

  await t.click(toolboxItemDots);
  await checkElementScreenshot("toolbox-right-popup.png", Selector(".sv-popup.svc-toolbox-popup"), t);
});

test("toolbox inside sidebar", async (t) => {
  const toolboxItem = Selector(".svc-toolbox__item");
  const toolboxButtonSelector = Selector(".sv-action-bar-item[title=\"Toolbox\"]");

  await changeToolboxLocation("insideSideBar");
  await setShowPropertyGrid(true);
  await t
    .click(toolboxButtonSelector)
    .resizeWindow(2560, 1440);

  const toolboxElement = Selector(".svc-toolbox");
  await checkElementScreenshot("toolbox-inside-sidebar.png", toolboxElement, t);

  await t.hover(toolboxItem);
  await checkElementScreenshot("toolbox-inside-sidebar-hover-item.png", toolboxElement, t);
});