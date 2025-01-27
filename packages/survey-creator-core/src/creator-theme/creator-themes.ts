export interface ICreatorTheme {
  themeName?: string;
  iconsSet?: string;
  cssVariables?: { [index: string]: string | any };
}

export const PredefinedCreatorThemes: string[] = ["default-light"];
const defaultVariables = {
  "--sjs-special-background": "#EDF9F7FF",
  "--sjs-special-shadow": "#00000040",
  "--sjs-primary-background-500": "#19B394FF",
  "--sjs-secondary-background-500": "#19B394FF",

  "--sjs-special-haze": "hsl(from var(--sjs-special-background) calc(h - var(--sjs-special-haze-deltaH)) calc(s - var(--sjs-special-haze-deltaS)) calc(l - var(--sjs-special-haze-deltaL)) / calc(1 - var(--sjs-special-haze-deltaAlpha)))",
  "--sjs-primary-background-10": "hsl(from var(--sjs-primary-background-500) calc(h - var(--sjs-primary-background-10-deltaH)) calc(s - var(--sjs-primary-background-10-deltaS)) calc(l - var(--sjs-primary-background-10-deltaL)) / calc(1 - var(--sjs-primary-background-10-deltaAlpha)))",
  "--sjs-primary-background-400": "hsl(from var(--sjs-primary-background-500) calc(h - var(--sjs-primary-background-400-deltaH)) calc(s - var(--sjs-primary-background-400-deltaS)) calc(l - var(--sjs-primary-background-400-deltaL)) / calc(1 - var(--sjs-primary-background-400-deltaAlpha)))",
  "--sjs-secondary-background-25": "hsl(from var(--sjs-secondary-background-500) calc(h - var(--sjs-secondary-background-25-deltaH)) calc(s - var(--sjs-secondary-background-25-deltaS)) calc(l - var(--sjs-secondary-background-25-deltaL)) / calc(1 - var(--sjs-secondary-background-25-deltaAlpha)))",
  "--sjs-secondary-background-10": "hsl(from var(--sjs-secondary-background-500) calc(h - var(--sjs-secondary-background-10-deltaH)) calc(s - var(--sjs-secondary-background-10-deltaS)) calc(l - var(--sjs-secondary-background-10-deltaL)) / calc(1 - var(--sjs-secondary-background-10-deltaAlpha)))",
  "--sjs-special-glow": "hsl(from var(--sjs-special-background) calc(h - var(--sjs-special-glow-deltaH)) calc(s - var(--sjs-special-glow-deltaS)) calc(l - var(--sjs-special-glow-deltaL)) / calc(1 - var(--sjs-special-glow-deltaAlpha)))",
  "--sjs-secondary-background-400": "hsl(from var(--sjs-secondary-background-500) calc(h - var(--sjs-secondary-background-400-deltaH)) calc(s - var(--sjs-secondary-background-400-deltaS)) calc(l - var(--sjs-secondary-background-400-deltaL)) / calc(1 - var(--sjs-secondary-background-400-deltaAlpha)))",

  "--sjs-primary-background-400-deltaAlpha": 0,
  "--sjs-primary-background-400-deltaH": -1.66,
  "--sjs-primary-background-400-deltaS": -2.77,
  "--sjs-primary-background-400-deltaL": 3.92,
  "--sjs-primary-background-10-deltaAlpha": 0.9,
  "--sjs-primary-background-10-deltaH": 0,
  "--sjs-primary-background-10-deltaS": 0,
  "--sjs-primary-background-10-deltaL": 0,
  "--sjs-secondary-background-400-deltaAlpha": 0,
  "--sjs-secondary-background-400-deltaH": -1.66,
  "--sjs-secondary-background-400-deltaS": -2.77,
  "--sjs-secondary-background-400-deltaL": 3.92,
  "--sjs-secondary-background-25-deltaAlpha": 0.75,
  "--sjs-secondary-background-25-deltaH": 0,
  "--sjs-secondary-background-25-deltaS": 0,
  "--sjs-secondary-background-25-deltaL": 0,
  "--sjs-secondary-background-10-deltaAlpha": 0.9,
  "--sjs-secondary-background-10-deltaH": 0,
  "--sjs-secondary-background-10-deltaS": 0,
  "--sjs-secondary-background-10-deltaL": 0,
  "--sjs-special-haze-deltaAlpha": 0.65,
  "--sjs-special-haze-deltaH": -10,
  "--sjs-special-haze-deltaS": 0,
  "--sjs-special-haze-deltaL": 8.62,
  "--sjs-special-glow-deltaAlpha": 0.9,
  "--sjs-special-glow-deltaH": -3.68,
  "--sjs-special-glow-deltaS": -50,
  "--sjs-special-glow-deltaL": 80.39
};

export const CreatorThemes: { [index: string]: ICreatorTheme } = {
  "default-light": {
    themeName: "default-light",
    cssVariables: defaultVariables,
    iconsSet: "v2"
  }
};
