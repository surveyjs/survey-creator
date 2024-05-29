import { EventBase } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { editorLocalization } from "../editorLocalization";

export interface ICreatorPreset {
  setJson(json: any): void;
  apply(creator: SurveyCreatorModel): void;
  getPath(): string;
}

export abstract class CreatorPresetBase implements ICreatorPreset {
  public onApplied: EventBase<CreatorPresetBase, any> = new EventBase<CreatorPresetBase, any>();
  public children: Array<ICreatorPreset> = [];
  protected json: any;
  public constructor() {
    this.setupPresets();
  }
  public setJson(json: any): void {
    this.json = json;
    this.children.forEach(item => item.setJson(this.json && item.getPath() ? this.json[item.getPath()] : this.json));
  }
  public apply(creator?: SurveyCreatorModel): void {
    if (!this.json) return;
    if(!!creator) {
      this.applyCore(creator);
      this.children.forEach(item => item.apply(creator));
    }
    this.applyLocalization();
    this.onApplied.fire(this, {});
  }
  public applyLocalization(): void {
    const strs = this.json?.localization;
    if(!strs) return;
    editorLocalization.presetStrings = JSON.parse(JSON.stringify(strs));
  }
  public abstract getPath(): string;
  protected applyCore(creator: SurveyCreatorModel): void { }
  protected createPresets(): Array<ICreatorPreset> {
    return [];
  }
  private setupPresets(): void {
    this.addPresets(this.createPresets());
  }
  private addPreset(preset: ICreatorPreset) {
    this.children.push(preset);
  }
  private addPresets(presets: ICreatorPreset[]): void {
    presets.forEach(preset => this.addPreset(preset));
  }
}