import { updateShadowEffectsJSON } from "./shadow-effects";
import { updatecoloralphaJSON } from "./color-alpha";
import { updateBackgroundCornerRadiusJSON } from "./background-corner-radius";
import { updateFontSettingsJSON } from "./font-settings";

export function updateCustomQuestionJSONs() {
  updateShadowEffectsJSON();
  updateFontSettingsJSON();
  updatecoloralphaJSON();
  updateBackgroundCornerRadiusJSON();
}