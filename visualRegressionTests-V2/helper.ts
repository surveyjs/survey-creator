import { screenshotComparerOptions } from "../visualRegressionTests/helper";

export * from "../visualRegressionTests/helper";

export const url = "http://127.0.0.1:8080/testCafe-V2/testcafe";
export const urlByPage = "http://127.0.0.1:8080/testCafe-V2/by-page";
export const urlPreviewThemeSwitcher = "http://127.0.0.1:8080/testCafe-V2/preview-theme-switcher";
export const urlThemeForPreview = "http://127.0.0.1:8080/testCafe-V2/theme-for-preview-option";
export const urlDropdownCollapseView = "http://127.0.0.1:8080/testCafe-V2/dropdown-collapse-view";
export const urlLocalized_de = "http://127.0.0.1:8080/testCafe-V2/testcafe_localized_ui";

export const screenshotComparerOptionsV2 = screenshotComparerOptions;
screenshotComparerOptionsV2.screenshotsRelativePath = "../../../visualRegressionTests-V2/screenshots";
screenshotComparerOptionsV2.destinationRelativePath = "../../../visualRegressionTests-V2/artifacts";