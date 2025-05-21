export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../CreatorPresetEditor";
export * from "../PresetRanking";
export * from "../QuestionEmbeddedCreator";
export * from "../Question";
export * from "../Page";
export * from "../ActionTextEditorItem";

import { checkLibraryVersion } from "survey-core";
checkLibraryVersion(`${process.env.VERSION}`, "creator-presets-react");