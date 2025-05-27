import * as presets from "../presets";
import * as presetsBase from "../presets-base";
import * as presetsToolbox from "../presets-toolbox";
import * as presetsEditableToolbox from "../presets-editable-toolbox";
import * as presetsEditor from "../presets-editor";
import * as presetsEditableLanguages from "../presets-editable-languages";
import * as presetsEditableTabs from "../presets-editable-tabs";
import * as presetsEditableBase from "../presets-editable-base";
import * as presetsTabs from "../presets-tabs";
import * as presetsLanguages from "../presets-languages";
import * as presetsProperties from "../presets-properties";
import * as presetsRanking from "../preset-question-ranking";
import { checkLibraryVersion } from "survey-core";

export let Version: string;
Version = `${process.env.VERSION}`;

// Create a single export object
const SurveyCreatorPresets = {
  Version,
  ...presets,
  ...presetsBase,
  ...presetsToolbox,
  ...presetsEditableToolbox,
  ...presetsEditor,
  ...presetsEditableLanguages,
  ...presetsEditableTabs,
  ...presetsEditableBase,
  ...presetsTabs,
  ...presetsLanguages,
  ...presetsProperties,
  ...presetsRanking
};

checkLibraryVersion(`${process.env.VERSION}`, "creator-presets-core");

export default SurveyCreatorPresets;