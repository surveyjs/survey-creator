export * from "./presets-editable-toolbox";
export * from "./presets-editor";
export * from "./presets-plugin";
export * from "./presets-manager";
export * from "./presets-editable-languages";
export * from "./presets-editable-tabs";
export * from "./presets-editable-options";
export * from "./presets-editable-base";
export * from "./preset-question-json";
import { checkLibraryVersion } from "survey-core";
import "../ui-preset-editor/presets-theme/presets.scss";
export let Version: string;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Version = `${process.env.VERSION}`;
checkLibraryVersion(Version, "survey-creator-core-presets");