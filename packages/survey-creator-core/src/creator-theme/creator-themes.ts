export interface ICreatorTheme {
  themeName?: string;
  iconSet?: string;
  cssVariables?: { [index: string]: string | any };
}

export const PredefinedCreatorThemes: string[] = ["default-light"];
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
