import { ItemValue, ITheme, Trigger } from "survey-core";
import { getLocString } from "../../editorLocalization";

export const Themes: { [index: string]: ITheme } = {};
export const PredefinedThemes: string[] = ["default"];
export const defaultThemesOrder = ["default", "sharp", "borderless", "flat", "plain", "doubleborder", "layered", "solid", "threedimensional", "contrast"];

export const PredefinedColors = {
  light: {
    teal: "rgba(11, 128, 128, 1)",
    blue: "rgba(39, 114, 203, 1)",
    purple: "rgba(122, 70, 187, 1)",
    orchid: "rgba(178, 61, 153, 1)",
    tulip: "rgba(191, 76, 97, 1)",
    brown: "rgba(177, 94, 47, 1)",
    green: "rgba(11, 134, 75, 1)"
  },
  dark: {
    teal: "rgba(22, 198, 187, 1)",
    blue: "rgba(109, 183, 252, 1)",
    purple: "rgba(173, 144, 255, 1)",
    orchid: "rgba(232, 113, 220, 1)",
    tulip: "rgba(245, 131, 151, 1)",
    brown: "rgba(252, 187, 89, 1)",
    green: "rgba(140, 204, 90, 1)"
  }
};

export const PredefinedBackgroundColors = {
  light: {
    teal: "rgba(239, 249, 249, 1)",
    blue: "rgba(243, 247, 253, 1)",
    purple: "rgba(248, 244, 254, 1)",
    orchid: "rgba(252, 242, 250, 1)",
    tulip: "rgba(253, 243, 245, 1)",
    brown: "rgba(251, 245, 241, 1)",
    green: "rgba(240, 250, 243, 1)",
    gray: "rgba(246, 246, 246, 1)"
  },
  dark: {
  }
};

export function getPredefinedColorsItemValues(colorPalette: string = "light") {
  return Object.keys(PredefinedColors[colorPalette]).map(colorName =>
    new ItemValue(PredefinedColors[colorPalette][colorName], getLocString("theme.colors." + colorName))
  );
}

export function getPredefinedBackgoundColorsChoices(colorPalette: string = "light") {
  return Object.keys(PredefinedBackgroundColors[colorPalette]).map(colorName =>
    ({ value: PredefinedBackgroundColors[colorPalette][colorName], text: getLocString("theme.colors." + colorName) })
  );
}