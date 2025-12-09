import { Serializer, Base, property, EventBase } from "survey-core";
import { getLocString } from "../editorLocalization";
import { ICreatorPresetConfig, PredefinedCreatorPresets } from "./presets";
import { CreatorThemeModel } from "../creator-theme/creator-theme-model";
import { CreatorPresetsModel } from "../presets-creator/creator-presets-model";

export class CreatorSettingsModel extends Base {
  presetsModel?: CreatorPresetsModel;
  themeModel?: CreatorThemeModel;
}
