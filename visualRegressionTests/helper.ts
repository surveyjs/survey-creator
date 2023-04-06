import { createScreenshotsComparer, ScreenshotsComparer } from "devextreme-screenshot-comparer";
import { ClientFunction, Selector } from "testcafe";
export * from "../testCafe/helper";

export const getSurveyJSFramework = ClientFunction(() => {
  return window["surveyJSFramework"];
});

export async function wrapVisualTest(t: TestController, fn: (t: TestController, comparer: ScreenshotsComparer) => Promise<any>): Promise<void> {
  const comparer = createScreenshotsComparer(t);

  await fn(t, comparer);

  await t
    .expect(comparer.compareResults.isValid())
    .ok(comparer.compareResults.errorMessages());
}

export async function takeElementScreenshot(screenshotName: string, element: Selector | string | null, t: TestController, comparer: ScreenshotsComparer): Promise<void> {
  await t.wait(1000);
  if (!!element) {
    await t.expect(Selector(element).visible).ok("element is invisible for " + screenshotName);
  }
  await comparer.takeScreenshot(screenshotName, element, screenshotComparerOptions);
}

//devextreme-screenshot-comparer options
export const screenshotComparerOptions = {
  path: "./tests",
  screenshotsRelativePath: "../../../visualRegressionTests/screenshots",
  destinationRelativePath: "../../../visualRegressionTests/artifacts",
  enableTextMask: true,
  textMaskRadius: 2,
  textDiffTreshold: 0.5,
  maskRadius: 2,
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