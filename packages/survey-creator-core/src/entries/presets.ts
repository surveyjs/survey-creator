// export * from "../presets/presets";
// export * from "../presets/presets-base";
// export * from "../presets/presets-toolbox";
export * from "../presets/presets-editable-toolbox";
export * from "../presets/presets-editor";
export * from "../presets/presets-editable-languages";
export * from "../presets/presets-editable-tabs";
export * from "../presets/presets-editable-base";
//export * from "../presets/presets-tabs";
//export * from "../presets/presets-languages";
//export * from "../presets/presets-properties";
export * from "../presets/preset-question-ranking";
export * from "../presets/preset-question-json";
import { checkLibraryVersion } from "survey-core";

export let Version: string;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Version = `${process.env.VERSION}`;
checkLibraryVersion(Version, "survey-creator-core-presets");