import { assign } from "../utils/utils";
import designTabSurveyThemeJSON from "../designTabSurveyThemeJSON";

export interface ICreatorTheme {
  themeName?: string;
  iconsSet?: string;
  cssVariables?: { [index: string]: string };
}

export const PredefinedCreatorThemes: string[] = ["default-light"];
const defaultVariables = {};
// assign(sc2020CssVariables, designTabSurveyThemeJSON.cssVariables, {
//   "--sjs-special-background": "#F3F3F3FF",
//   "--sjs-special-glow": "#0000001a",
//   "--sjs-special-haze": "#90909080",
//   "--sjs-primary-background-500": "#19B394FF",
//   "--sjs-primary-background-10": "#19B3941A",
//   "--sjs-primary-background-400": "#14A48BFF",
//   "--sjs-secondary-background-500": "#FF9814FF",
//   "--sjs-secondary-background-400": "#F78A00",
//   "--sjs-secondary-background-25": "#FF981440",
//   "--sjs-secondary-background-10": "#FF98141A",
//   "--ctr-surface-background-color": "var(--sjs-special-background)",
//   "--ctr-toolbox-background-color": "var(--sjs-special-background)",
// });

export const CreatorThemes: { [index: string]: ICreatorTheme } = {
  "default-light": {
    themeName: "default-light",
    cssVariables: defaultVariables,
    iconsSet: "v2"
  }
};
