import { assign } from "./utils";
import { Default } from "./default";

const Theme = {
  "themeName": "default-dark",
  "isLight": false,
  "cssVariables": {
    "--sjs-layer-1-background-500": "#181818FF",
    "--sjs-layer-1-background-400": "#282828FF",
    "--sjs-layer-1-foreground-100": "#FFFFFFCC",
    "--sjs-layer-1-foreground-50": "#FFFFFF66",
    "--sjs-layer-3-background-500": "#202020FF",
    "--sjs-layer-3-foreground-100": "#FFFFFFCC",
    "--sjs-layer-3-foreground-50": "#FFFFFF66",
    "--sjs-layer-2-background-500": "#101010FF",
    "--sjs-layer-2-background-400": "#202020FF",
    "--sjs-special-haze": "#000000BF",
    "--sjs-border-25": "#2D2D2DFF",
    "--sjs-border-10": "#2D2D2DFF",
    "--sjs-primary-background-500": "#3EDFD5FF",
    "--sjs-primary-background-10": "#3EDFD51A",
    "--sjs-primary-background-400": "#29DCD1FF",
    "--sjs-primary-foreground-100": "#0C0C0CFF",
    "--sjs-primary-foreground-25": "#0C0C0C40",
    "--sjs-secondary-background-500": "#EDA925FF",
    "--sjs-secondary-background-25": "#EDA92540",
    "--sjs-secondary-background-10": "#EDA9251A",
    "--sjs-secondary-foreground-100": "#0C0C0CFF",
    "--sjs-secondary-forecolor-25": "#0C0C0C40",
    "--sjs-semantic-red-background-500": "#FF3B6AFF",
    "--sjs-semantic-red-background-10": "#FF3B6A1A",
    "--sjs-semantic-red-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-green-background-500": "#3EDFD5FF",
    "--sjs-semantic-green-background-10": "#3EDFD51A",
    "--sjs-semantic-green-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-blue-background-500": "#66B4FCFF",
    "--sjs-semantic-blue-background-10": "#66B4FC1A",
    "--sjs-semantic-blue-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-yellow-background-500": "#EDA925FF",
    "--sjs-semantic-yellow-background-10": "#EDA9251A",
    "--sjs-semantic-yellow-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-white-background-500": "#FFFFFFFF",
    "--sjs-code-gray-700": "#B6B6B6FF",
    "--sjs-code-blue-500": "#326FCAFF",
    "--sjs-code-gray-300": "#505050FF",
    "--sjs-code-green-500": "#08997CFF",
    "--sjs-code-red-500": "#F41B50FF",
    "--sjs-code-purple-500": "#C22FA2FF",
    "--sjs-code-yellow-500": "#F58D06FF",
    "--sjs-code-gray-500": "#8A8A8AFF",
    "--sjs-special-background": "#0C0C0CFF",
    "--sjs-layer-1-foreground-75": "#FFFFFFB3",
    "--sjs-layer-3-background-400": "#303030FF",
    "--sjs-special-glow": "#000000BF",
    "--sjs-special-shadow": "#000000FF",
    "--sjs-layer-3-foreground-75": "#FFFFFFB3",
    "--sjs-layer-2-foreground-100": "#FFFFFFCC",
    "--sjs-layer-2-foreground-75": "#FFFFFFB3",
    "--sjs-layer-2-foreground-50": "#FFFFFF66",
    "--sjs-border-25-overlay": "#FFFFFF26"
  }
};
const themeCssVariables = {};
assign(themeCssVariables, Default.cssVariables, Theme.cssVariables);
assign(Theme, { cssVariables: themeCssVariables });

export default Theme;
export const DefaultDark = Theme;