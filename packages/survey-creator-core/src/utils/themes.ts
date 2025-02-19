export type ThemesHash<T> = { [index: string]: T } & { __surveyjs_internal_themes_hash: boolean };
export function registerTheme<T>(registerThemeCallback: (theme: T) => void, ...themes: Array<T | ThemesHash<T>>) {
  themes.forEach(theme => {
    if((theme as ThemesHash<T>).__surveyjs_internal_themes_hash) {
      const themesHash = theme as ThemesHash<T>;
      Object.keys(themesHash).forEach(key => {
        if(key == "__surveyjs_internal_themes_hash" || key == "default") return;
        registerThemeCallback(themesHash[key]);
      });
    } else {
      registerThemeCallback(theme as T);
    }
  });
}