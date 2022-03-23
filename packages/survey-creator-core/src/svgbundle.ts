import { SvgRegistry } from "survey-core";
export var svgBundle;
const path = (<any>require).context("./images", false, /\.svg$/);
SvgRegistry.renderIcons = ()=> {};
SvgRegistry.registerIconsFromFolder(path);