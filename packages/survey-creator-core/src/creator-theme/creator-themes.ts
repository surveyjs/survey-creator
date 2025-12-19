import { CreatorStylesManager } from "./styles-manager";
import { DefaultLight } from "../themes/default-light";
import { registerConfig, ConfigsHash, sortDefaultConfigs } from "../utils/configs";

export interface ICreatorTheme {
  themeName?: string;
  iconSet?: string;
  isLight?: boolean;
  cssVariables?: { [index: string]: string | any };
}

export const PredefinedCreatorThemes: string[] = ["default-light"];
export const defaultCreatorThemesOrder = ["default-light", "default-contrast", "default-dark", "sc2020"];

/**
 * Registers Survey Creator themes to make them available for customization in the Survey Creator UI.
 *
 * [View Demo](https://surveyjs.io/survey-creator/examples/dynamic-ui-customization/ (linkStyle))
 * @param themes One or more Survey Creator theme configuations separated by commas, or an object containing multiple configurations.
 */
export function registerCreatorTheme(...themes: Array<ConfigsHash<ICreatorTheme> | ICreatorTheme>) {
  const importedThemeNames = [];
  registerConfig((theme: ICreatorTheme) => {
    CreatorThemes[theme.themeName] = theme;
    importedThemeNames.push(theme.themeName);
  }, ...themes);
  sortDefaultConfigs(defaultCreatorThemesOrder, importedThemeNames, PredefinedCreatorThemes);
}

// const defaultVariables = {
//   "--sjs2-color-utility-surface": "#EDF9F7",
//   "--sjs2-color-project-brand-600": "#19B394",
//   "--sjs2-color-project-accent-600": "#19B394",
// };

// export const CreatorThemes: { [index: string]: ICreatorTheme } = {
//   "default-light": {
//     themeName: "default-light",
//     cssVariables: defaultVariables,
//     iconSet: "v2"
//   }
// };
export const CreatorThemes: { [index: string]: ICreatorTheme } = { "default-light": DefaultLight };
// let stylesStr = "";
// if (Object.keys(Default.cssVariables).length) {
//   Object.keys(Default.cssVariables).forEach((varName) => {
//     try {
//       stylesStr += `${varName}: ${Default.cssVariables[varName]};`;
//     } catch(e) { }
//   });
// }
// CreatorStylesManager.insertStylesRulesIntoDocument([{ selector: "survey-creator,.svc-creator", styles: stylesStr }]);