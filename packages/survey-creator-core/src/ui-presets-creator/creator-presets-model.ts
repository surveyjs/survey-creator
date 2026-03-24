import { Serializer, Base, property, EventBase } from "survey-core";
import { getLocString } from "../editorLocalization";
import { UIPreset, CreatorPresets, IPreset, PredefinedCreatorPresets } from "./presets";

export class CreatorPresetsModel extends Base implements IPreset {
  static defaultPresetName = "expert";
  public getType(): string {
    return "creatorpreset";
  }

  @property() presetName: string = "";
  private _suppressEvent = false;

  public get name(): string { return this.presetName; }
  public set name(val: string) { this.presetName = val; }

  public setPresetNameSilent(val: string): void {
    if (this.presetName === val) return;
    this._suppressEvent = true;
    this.presetName = val;
    this._suppressEvent = false;
  }

  public onPresetSelected = new EventBase<CreatorPresetsModel, { preset: IPreset }>();
  constructor() {
    super();
    this.onPropertyValueChangedCallback = (propName: string) => {
      if (propName === "presetName" && this.presetName && !this._suppressEvent) {
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