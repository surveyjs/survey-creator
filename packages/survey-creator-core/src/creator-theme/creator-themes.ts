export interface ICreatorTheme {
  themeName?: string;
  palette?: string;
  cssVariables?: { [index: string]: string };
}

export const CreatorThemes: { [index: string]: ICreatorTheme } = {};
export const CreatorPalettes: { [index: string]: any } = {};
export const PredefinedCreatorThemes: string[] = ["20", "24"];