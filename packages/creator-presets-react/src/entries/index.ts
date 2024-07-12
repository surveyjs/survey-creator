export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../CreatorPresetEditor";
export * from "../PresetRanking";
export * from "../QuestionEmbeddedCreator";

import { checkLibraryVersion } from "survey-core";
checkLibraryVersion(`${process.env.VERSION}`, "creator-presets-react");