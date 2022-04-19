import { SvgRegistry } from "survey-core";
export var svgBundle;
const path = (<any>require).context("./images", false, /\.svg$/);
SvgRegistry.registerIconsFromFolder(path);

let renderIcons = SvgRegistry.renderIcons;

export function disableRenderIcons() {
  SvgRegistry.renderIcons = () => { };
}

export function enableRenderIcons() {
  SvgRegistry.renderIcons = renderIcons;
}