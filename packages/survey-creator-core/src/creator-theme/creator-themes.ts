import { CreatorStylesManager } from "./styles-manager";
import { DefaultLightColorCssVariables } from "../themes/default-light-color-css-variables";
import { sortDefaultThemes } from "../utils/utils";

export interface ICreatorTheme {
  themeName?: string;
  iconSet?: string;
  isLight?: boolean;
  cssVariables?: { [index: string]: string | any };
}

export const PredefinedCreatorThemes: string[] = ["default-light"];
export const defaultCreatorThemesOrder = ["default-light", "default-contrast", "default-dark", "sc2020"];

type ThemesHash = { [index: string]: ICreatorTheme } & { __surveyjs_internal_themes_hash: boolean }
export function registerCreatorTheme(...themes: Array<ThemesHash | ICreatorTheme>) {
  const importedThemeNames = [];
  const registerTheme = (theme: ICreatorTheme) => {
    PredefinedCreatorThemes.push(theme.themeName);
    CreatorThemes[theme.themeName] = theme;
    importedThemeNames.push(theme.themeName);
  };
  themes.forEach(theme => {
    if((theme as ThemesHash).__surveyjs_internal_themes_hash) {
      const themesHash = theme;
      Object.keys(themesHash).forEach(key => {
        if(key == "__surveyjs_internal_themes_hash" || key == "default") return;
        registerTheme(themesHash[key]);
      });
    } else {
      registerTheme(theme as ICreatorTheme);
    }
  });
  sortDefaultThemes(defaultCreatorThemesOrder, importedThemeNames, PredefinedCreatorThemes);
}

const defaultVariables = {
  "--sjs-special-background": "#EDF9F7FF",
  "--sjs-primary-background-500": "#19B394FF",
  "--sjs-secondary-background-500": "#19B394FF",
};

export const CreatorThemes: { [index: string]: ICreatorTheme } = {
  "default-light": {
    themeName: "default-light",
    cssVariables: defaultVariables,
    iconSet: "v2"
  }
};

let stylesStr = "";
if (Object.keys(DefaultLightColorCssVariables).length) {
  Object.keys(DefaultLightColorCssVariables).forEach((varName) => {
    try {
      stylesStr += `${varName}: ${DefaultLightColorCssVariables[varName]};`;
    } catch (e) { }
  });
}
CreatorStylesManager.insertStylesRulesIntoDocument([{ selector: "survey-creator,.svc-creator", styles: stylesStr }]);