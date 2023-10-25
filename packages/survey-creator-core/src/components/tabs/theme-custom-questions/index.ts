import { updateBoxShadowSettingsJSON } from "./boxshadow-settings";
import { updateColorSettingsJSON } from "./color-settings";
import { updateElementSettingsJSON } from "./element-settings";
import { updateFontSettingsJSON } from "./font-settings";

export function updateCustomQuestionJSONs() {
  updateBoxShadowSettingsJSON();
  updateFontSettingsJSON();
  updateColorSettingsJSON();
  updateElementSettingsJSON();
}