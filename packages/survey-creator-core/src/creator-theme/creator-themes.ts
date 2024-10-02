export interface ICreatorTheme {
  themeName?: string;
  colorPalette?: string;
  cssVariables?: { [index: string]: string };
}

export const CreatorThemes: { [index: string]: ICreatorTheme } = {};
export const CreatorPalettes: { [index: string]: any } = {};
export const PredefinedCreatorThemes: string[] = ["20", "24"];