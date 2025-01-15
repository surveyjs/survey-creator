export interface ICreatorTheme {
  themeName?: string;
  iconsSet?: string;
  cssVariables?: { [index: string]: string };
}

export const PredefinedCreatorThemes: string[] = ["default-light"];
const defaultVariables = {
  "--sjs-special-background": "#EDF9F7FF",
  "--sjs-special-glow": "#004C441A",
  "--sjs-special-shadow": "#00000040",
  "--sjs-primary-background-500": "#19B394FF",
  "--sjs-primary-background-10": "#19B3941A",
  "--sjs-primary-background-400": "#14A48BFF",
  "--sjs-secondary-background-500": "#19B394FF",
  "--sjs-secondary-background-400": "#14A48BFF",
  "--sjs-secondary-background-25": "#19B39440",
  "--sjs-secondary-background-10": "#19B3941A",
  "--ctr-surface-background-color": "var(--sjs-special-background)",
  "--ctr-toolbox-background-color": "var(--sjs-special-background)",
};

export const CreatorThemes: { [index: string]: ICreatorTheme } = {
  "default-light": {
    themeName: "default-light",
    cssVariables: defaultVariables,
    iconsSet: "v2"
  }
};
