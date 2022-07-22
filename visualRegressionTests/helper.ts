import { createScreenshotsComparer } from "devextreme-screenshot-comparer";
import { ClientFunction } from "testcafe";
export * from "../testCafe/helper";

export const getSurveyJSFramework = ClientFunction(() => {
  return window["surveyJSFramework"];
});

export async function checkElementScreenshot(screenshotName: string, element: Selector, t: TestController) {
  const comparer = createScreenshotsComparer(t);
  await t
    .wait(1000)
    .expect(element.visible).ok("element is invisible for " + screenshotName);
  await comparer.takeScreenshot(screenshotName, element, screenshotComparerOptions);
  await t
    .expect(comparer.compareResults.isValid())
    .ok(comparer.compareResults.errorMessages());
}

//devextreme-screenshot-comparer options
export const screenshotComparerOptions = {
  path: "./tests",
  screenshotsRelativePath: "../../../visualRegressionTests/screenshots",
  destinationRelativePath: "../../../visualRegressionTests/artifacts",
  enableTextMask: true,
  textMaskRadius: 5,
  textDiffTreshold: 0.5,
  maskRadius: 5,
  attempts: 2,
  attemptTimeout: 500,
  looksSameComparisonOptions: {
    strict: false,
    tolerance: 1,
    ignoreAntialiasing: true,
    antialiasingTolerance: 3,
    ignoreCaret: true,
  },
  textComparisonOptions: {
    strict: false,
    ignoreAntialiasing: true,
    ignoreCaret: true,
  },
  generatePatch: false,
  highlightColor: { r: 0xff, g: 0, b: 0xff },
};