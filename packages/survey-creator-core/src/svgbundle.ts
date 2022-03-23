import { SvgRegistry } from "survey-core";

const path = (<any>require).context("./images", false, /\.svg$/);
SvgRegistry.registerIconsFromFolder(path);