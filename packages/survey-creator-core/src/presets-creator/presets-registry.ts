import { ThemesHash } from "../utils/themes";
import { ICreatorPresetData } from "../presets-creator/presets";
type PresetsHash<T> = ThemesHash<T>;
export function registerCreatorPreset(...presets: Array<PresetsHash<ICreatorPresetData> | ICreatorPresetData>) {
  // const importedThemeNames = [];
  // registerTheme((theme: ICreatorTheme) => {
  //   CreatorThemes[theme.themeName] = theme;
  //   importedThemeNames.push(theme.themeName);
  // }, ...themes);
  // sortDefaultThemes(defaultCreatorThemesOrder, importedThemeNames, PredefinedCreatorThemes);
}