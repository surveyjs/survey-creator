import * as presets from "../presets/presets";
import * as presetsBase from "../presets/presets-base";
import * as presetsToolbox from "../presets/presets-toolbox";
import * as presetsEditableToolbox from "../presets/presets-editable-toolbox";
import * as presetsEditor from "../presets/presets-editor";
import * as presetsEditableLanguages from "../presets/presets-editable-languages";
import * as presetsEditableTabs from "../presets/presets-editable-tabs";
import * as presetsEditableBase from "../presets/presets-editable-base";
import * as presetsTabs from "../presets/presets-tabs";
import * as presetsLanguages from "../presets/presets-languages";
import * as presetsProperties from "../presets/presets-properties";
import * as presetsRanking from "../presets/preset-question-ranking";
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