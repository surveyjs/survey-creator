import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, getSurveyJSFramework } from "../../helper";

const title = "Toolbox Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(2560, 1440);
});

test("Screenshot", async (t) => {
  const framework = await getSurveyJSFramework();
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const toolboxElement = Selector(".svc-toolbox");

  await takeScreenshot("toolbox.png", toolboxElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});