import { createScreenshotsComparer, ScreenshotsComparer } from "devextreme-screenshot-comparer";
import { ClientFunction, Selector } from "testcafe";
export * from "../functionalTests/helper";

export const url = "http://127.0.0.1:8080/testCafe-V2/testcafe";
export const urlByPage = "http://127.0.0.1:8080/testCafe-V2/by-page";
export const urlPreviewThemeSwitcher = "http://127.0.0.1:8080/testCafe-V2/preview-theme-switcher";
export const urlThemeForPreview = "http://127.0.0.1:8080/testCafe-V2/theme-for-preview-option";
export const urlDropdownCollapseView = "http://127.0.0.1:8080/testCafe-V2/dropdown-collapse-view";
export const urlLocalized_de = "http://127.0.0.1:8080/testCafe-V2/testcafe_localized_ui";

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
  screenshotsRelativePath: "../../../visualRegressionTests-V2/screenshots",
  destinationRelativePath: "../../../visualRegressionTests-V2/artifacts",
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