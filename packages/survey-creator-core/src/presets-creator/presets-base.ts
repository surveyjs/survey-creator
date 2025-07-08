import { EventBase } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";

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
    if (!json && this.applyEmptyJson()) json = {};
    this.json = json;
    this.children.forEach(item => item.setJson(this.json && item.getPath() ? this.json[item.getPath()] : this.json));
  }
  public apply(creator?: SurveyCreatorModel): void {
    if (!this.json) return;
    if (!!creator) {
      this.applyCore(creator);
      this.children.forEach(item => item.apply(creator));
    }
    this.onApplied.fire(this, {});
  }
  public abstract getPath(): string;
  protected applyEmptyJson(): boolean { return false; }
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