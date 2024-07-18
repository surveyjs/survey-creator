export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../presets-editor";
export * from "../preset-question-ranking";
export * from "../presets-editable-base";
export * from "../presets-editable-properties";
export * from "../presets-editable-tabs";
export * from "../presets-editable-toolbox";
export * from "../components/embedded-creator";

import { checkLibraryVersion } from "survey-core";

checkLibraryVersion(`${process.env.VERSION}`, "creator-presets-core");