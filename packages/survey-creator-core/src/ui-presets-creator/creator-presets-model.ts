import { Serializer, Base, property, EventBase } from "survey-core";
import { getLocString } from "../editorLocalization";
import { UIPreset, CreatorPresets, ICreatorPresetConfig, PredefinedCreatorPresets } from "./presets";

export class CreatorPresetsModel extends Base implements ICreatorPresetConfig {
  static defaultPresetName = "expert";
  public getType(): string {
    return "creatorpreset";
  }

  @property() presetName: string = CreatorPresetsModel.defaultPresetName;

  public onPresetSelected = new EventBase<CreatorPresetsModel, { preset: ICreatorPresetConfig }>();
  constructor() {
    super();
    this.onPropertyValueChangedCallback = (name: string) => {
      if (name === "presetName") {
        this.onPresetSelected.fire(this, { preset: CreatorPresets[this.presetName] });
      }
    };
  }
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