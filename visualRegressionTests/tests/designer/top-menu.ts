import { Selector, ClientFunction } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, screenshotComparerOptions, getSurveyJSFramework } from "../../helper";
import { changeToolboxLocation } from "../../utils";

const title = "Top Menu Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {};

test("Top menu tests", async (t) => {
  await t.resizeWindow(1920, 1080);

});
