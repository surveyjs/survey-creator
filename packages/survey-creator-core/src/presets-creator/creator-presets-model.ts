import { Serializer, Base, property, EventBase } from "survey-core";
import { getLocString } from "../editorLocalization";
import { ICreatorPresetConfig, PredefinedCreatorPresets } from "./presets";

export class CreatorPresetsModel extends Base implements ICreatorPresetConfig {
  static defaultPresetName = "expert";

  @property() presetName: string = CreatorPresetsModel.defaultPresetName;

  public onPresetSelected = new EventBase<CreatorPresetsModel, { preset: ICreatorPresetConfig }>();
}
Serializer.addClass(
  "creatorpreset",
  [
    {
      type: "dropdown",
      name: "presetName",
      choices: PredefinedCreatorPresets.map(preset => ({ value: preset, text: getLocString("presets.names." + preset) })),
    }
  ],
  (json) => { return new CreatorPresetsModel(); }
);