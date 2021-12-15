import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";
import { url, screenshotComparerOptions } from "../../helper";

const title = "Logic tab Screenshot";

fixture`${title}`.page`${url}`;

const logicTab = Selector(".svc-tabbed-menu-item__text").withText("Logic");

test("empty view", async (t) => {
  await t.resizeWindow(2560, 1440);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const tabContent = Selector(".svc-creator-tab__content");
  const checkScreenshot = async (screenshotName: string) => {
    await t.wait(1000);
    await takeScreenshot(screenshotName, tabContent, screenshotComparerOptions);
    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  };

  await t.click(logicTab);
  await checkScreenshot("logic-tab-empty.png");
});