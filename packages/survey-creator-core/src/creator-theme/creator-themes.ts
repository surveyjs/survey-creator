import { assign } from "../utils/utils";
import designTabSurveyThemeJSON from "../designTabSurveyThemeJSON";

export interface ICreatorTheme {
  themeName?: string;
  iconsSet?: string;
  cssVariables?: { [index: string]: string };
}

export const PredefinedCreatorThemes: string[] = ["sc2020"];
const sc2020CssVariables = {};
assign(sc2020CssVariables, designTabSurveyThemeJSON.cssVariables, {
  "--sjs-special-background": "#F3F3F3FF",
  "--sjs-primary-background-500": "#19B394FF",
  "--sjs-primary-background-10": "#19B3941A",
  "--sjs-primary-background-400": "#14A48BFF",
  "--sjs-secondary-background-500": "#FF9814FF",
  "--sjs-secondary-background-25": "#FF981440",
  "--sjs-secondary-background-10": "#FF98141A",
  "--ctr-surface-background-color": "var(--sjs-special-background)",
  "--ctr-toolbox-background-color": "var(--sjs-special-background)",
});

export const CreatorThemes: { [index: string]: ICreatorTheme } = {
  "sc2020": {
    themeName: "sc2020",
    cssVariables: sc2020CssVariables,
    iconsSet: "v1"
  }
};
