import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions } from "../../helper";

const title = "Toolbox Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Screenshot", async (t) => {
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const toolboxElement = Selector(".svc-toolbox");

  await takeScreenshot("toolbox.png", toolboxElement, screenshotComparerOptions);
  await t
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
});