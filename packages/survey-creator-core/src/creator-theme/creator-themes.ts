import { DefaultLight } from "survey-core/themes";
import { registerConfig, ConfigsHash, sortDefaultConfigs } from "../utils/configs";
import { ITheme } from "survey-core";
import { getThemeFullName } from "../components/tabs/theme-model";
import { editorLocalization, getLocString } from "../editorLocalization";

export interface ICreatorTheme extends ITheme {
  isLight?: boolean;
}

export const PredefinedCreatorThemes: string[] = ["default"];
export const defaultCreatorThemesOrder = [
  "default",
  "contrast",
  "borderless",
  "flat",
  "plain",
  "threedimensional",
  "soft",
  "monochrome"
];

export function getLocalizedCreatorThemeName(theme: string): string {
  const key = (editorLocalization.hasString("creatortheme.names." + theme) ? "creatortheme" : "theme") + ".names." + theme;
  return getLocString(key);
}

export function getPredefinedCreatorThemeChoices(): Array<{ value: string, text: string }> {
  return PredefinedCreatorThemes.map(theme => ({ value: theme, text: getLocalizedCreatorThemeName(theme) }));
}

/**
 * Registers Survey Creator themes to make them available for customization in the Survey Creator UI.
 *
 * [View Demo](https://surveyjs.io/survey-creator/examples/dynamic-ui-customization/ (linkStyle))
 * @param themes One or more Survey Creator theme configuations separated by commas, or an object containing multiple configurations.
 */
export function registerCreatorTheme(...themes: Array<ConfigsHash<ICreatorTheme> | ICreatorTheme>) {
  const importedBaseThemeNames: string[] = [];
  registerConfig((theme: ICreatorTheme) => {
    if (theme.isPanelless) return;
    const themeName = theme.themeName;
    if (!themeName) return;
    const fullname = getThemeFullName(theme);
    CreatorThemes[fullname] = theme;
    if (importedBaseThemeNames.indexOf(themeName) === -1) {
      importedBaseThemeNames.push(themeName);
    }
  }, ...themes);
  sortDefaultConfigs(defaultCreatorThemesOrder, importedBaseThemeNames, PredefinedCreatorThemes);
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