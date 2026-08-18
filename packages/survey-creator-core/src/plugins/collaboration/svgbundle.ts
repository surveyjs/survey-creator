// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import iconsData from "collaborationIcons";
import { addIconsToThemeSet, SvgRegistry } from "survey-core";

// Collaboration keeps its icons in its own folder and registers them itself, so
// nothing of the feature leaks into the creator's shared images-v1/images-v2
// bundles - a creator built without collaboration ships none of them.
//
// "collaborationIcons" is a virtual module: rollup.collaboration.config.mjs
// inlines ./images/*.svg into it, the same way rollup.config.mjs builds
// "iconsV1"/"iconsV2" for the creator. The icons are theme-agnostic, so both
// icon sets get the same file and switching sets does not drop them.
export const collaborationIcons: { [index: string]: string } = iconsData || {};

addIconsToThemeSet("v1", collaborationIcons);
addIconsToThemeSet("v2", collaborationIcons);
SvgRegistry.registerIcons(collaborationIcons);
