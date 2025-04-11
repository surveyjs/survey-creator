import { CreatorStylesManager } from "./styles-manager";
import { DefaultLightColorCssVariables } from "../themes/default-light-color-css-variables";
import { registerTheme, ThemesHash, sortDefaultThemes } from "../utils/themes";

export interface ICreatorTheme {
  themeName?: string;
  iconSet?: string;
  isLight?: boolean;
  cssVariables?: { [index: string]: string | any };
}

export const PredefinedCreatorThemes: string[] = ["default-light"];
export const defaultCreatorThemesOrder = ["default-light", "default-contrast", "default-dark", "sc2020"];

export function registerCreatorTheme(...themes: Array<ThemesHash<ICreatorTheme> | ICreatorTheme>) {
  const importedThemeNames = [];
  registerTheme((theme: ICreatorTheme) => {
    CreatorThemes[theme.themeName] = theme;
    importedThemeNames.push(theme.themeName);
  }, ...themes);
  sortDefaultThemes(defaultCreatorThemesOrder, importedThemeNames, PredefinedCreatorThemes);
}

const defaultVariables = {
  "--sjs-special-background": "#EDF9F7",
  "--sjs-primary-background-500": "#19B394",
  "--sjs-secondary-background-500": "#19B394",
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