import { SvgRegistry } from "survey-core";
export var svgBundle;
const path = (<any>require).context("./images-v2", true, /\.svg$/);
SvgRegistry.registerIconsFromFolder(path);