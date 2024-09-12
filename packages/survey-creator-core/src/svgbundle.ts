import { SvgRegistry } from "survey-core";
export var svgBundle;
const path = (<any>require).context("./images", true, /\.svg$/);
SvgRegistry.registerIconsFromFolder(path);