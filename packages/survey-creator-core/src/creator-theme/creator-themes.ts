import { CreatorStylesManager } from "./styles-manager";
import { DefaultLightColorCssVariables } from "../themes/default-light-color-css-variables";
import { registerTheme, ThemesHash } from "../utils/themes";

export interface ICreatorTheme {
  themeName?: string;
  iconSet?: string;
  isLight?: boolean;
  cssVariables?: { [index: string]: string | any };
}

export const PredefinedCreatorThemes: string[] = ["default-light"];

export function registerCreatorTheme(...themes: Array<ThemesHash<ICreatorTheme> | ICreatorTheme>) {
  registerTheme((theme: ICreatorTheme) => {
    PredefinedCreatorThemes.push(theme.themeName);
    CreatorThemes[theme.themeName] = theme;
  }, ...themes);
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