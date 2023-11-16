import { ITheme } from "survey-core";
import { assign } from "../../utils/utils";
import * as LibraryThemes from "survey-core/themes";

export const Themes: { [index: string]: ITheme } = {};
export const PredefinedThemes: string[] = ["default", "sharp", "borderless", "flat", "plain", "doubleborder", "layered", "solid", "threedimensional", "contrast"];

export function getThemeFullName(theme: ITheme) {
  const themeName = theme.themeName || "default";
  let fullThemeName = themeName + "-" + (theme.colorPalette || "light");
  if (theme.isPanelless === true) {
    fullThemeName += "-panelless";
  }
  return fullThemeName;
}

Object.keys(LibraryThemes).forEach(libraryThemeName => {
  const libraryTheme: ITheme = LibraryThemes[libraryThemeName];
  const creatorThemeVariables = {};
  const creatorTheme = {};
  assign(creatorThemeVariables, libraryTheme.cssVariables);
  assign(creatorTheme, libraryTheme, { cssVariables: creatorThemeVariables });
  const creatorThemeName = getThemeFullName(libraryTheme);
  Themes[creatorThemeName] = creatorTheme;
});

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

export function findSuitableTheme(themeName: string, themePalette: string, themeMode: string, probeThemeFullName: string) {
  let suitableTheme = Themes[probeThemeFullName];
  if (!!suitableTheme) {
    return suitableTheme;
  }
  const appropriateThemeNames = Object.keys(Themes).filter(fullName => fullName.indexOf(themeName + "-") === 0);
  for (let fullThemeName of appropriateThemeNames) {
    if (fullThemeName.indexOf(themeName + "-" + themePalette) === 0) {
      probeThemeFullName = themeName + "-" + themePalette;
    }
    if (fullThemeName.indexOf(themeName + "-" + themePalette + (themeMode === "lightweight" ? "-panelless" : "")) === 0) {
      probeThemeFullName = themeName + "-" + themePalette + (themeMode === "lightweight" ? "-panelless" : "");
    }
  }
  return Themes[probeThemeFullName] || Themes[appropriateThemeNames[0]];

}