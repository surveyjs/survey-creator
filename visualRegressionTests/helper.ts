import { Selector, ClientFunction } from "testcafe";
export { url } from "../testCafe/helper";

//devextreme-screenshot-comparer options
const screenshotsBasePath = "./tests";
export const screenshotComparerOptions = {
  path: screenshotsBasePath,
  screenshotsRelativePath: "../../../visualRegressionTests/screenshots",
  destinationRelativePath: "../../../visualRegressionTests/artifacts",
  textDiffTreshold: 0.05,
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
};