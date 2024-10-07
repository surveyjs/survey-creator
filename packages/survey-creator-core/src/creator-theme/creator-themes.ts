export interface ICreatorTheme {
  themeName?: string;
  cssVariables?: { [index: string]: string };
}

export const CreatorThemes: { [index: string]: ICreatorTheme } = {};
export const PredefinedCreatorThemes: string[] = ["sc2020", "default-light", "default-dark", "default-contrast"];