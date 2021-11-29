import { Selector, ClientFunction } from "testcafe";
export { url } from "../testCafe/helper";

export const getSurveyJSFramework = ClientFunction(() => {
  return window["surveyJSFramework"];
});

//devextreme-screenshot-comparer options
export const screenshotComparerOptions = {
  path: "./tests",
  screenshotsRelativePath: "../../../visualRegressionTests/screenshots",
  destinationRelativePath: "../../../visualRegressionTests/artifacts",
  enableTextMask: true,
  textMaskRadius: 5,
  textDiffTreshold: 0.1,
  maskRadius: 5,
  attempts: 2,
  attemptTimeout: 500,
  looksSameComparisonOptions: {
    strict: false,
    tolerance: 5,
    ignoreAntialiasing: true,
    antialiasingTolerance: 5,
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