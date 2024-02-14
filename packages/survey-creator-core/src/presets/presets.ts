import { SurveyCreatorModel } from "../creator-base";

export interface ICreatorPreset {
  setJson(json: any): void;
  apply(creator: SurveyCreatorModel): void;
  getPath(): string;
}

export abstract class CreatorPresetBase implements ICreatorPreset {
  private children: Array<ICreatorPreset> = [];
  protected json: any;
  public constructor() {
    this.setupPresets();
  }
  public setJson(json: any): void {
    this.json = json;
    this.children.forEach(item => item.setJson(this.json && item.getPath() ? this.json[item.getPath()] : this.json));
  }
  public apply(creator: SurveyCreatorModel): void {
    if(!this.json) return;
    this.applyCore(creator);
    this.children.forEach(item => item.apply(creator));
  }
  public abstract getPath(): string;
  protected applyCore(creator: SurveyCreatorModel): void {}
  protected setupPresets(): void {
  }
  protected addPreset(preset: ICreatorPreset) {
    this.children.push(preset);
  }
  protected addPresets(...presets: ICreatorPreset[]): void {
    presets.forEach(preset => this.addPreset(preset));
  }
}

export class CreatorTabsPreset extends CreatorPresetBase {
  public getPath(): string { return "tabs"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    if(this.json["items"]) {
      this.applyTabs(creator, this.json["items"]);
    }
    let tab = this.json.activeTab;
    if(tab) {
      creator.activeTab = tab === "preview" ? "test" : tab;
    }
  }
  private applyTabs(creator: SurveyCreatorModel, items: Array<string>): void {
    if(!Array.isArray(items)) return;
    creator.setTabs(items);
  }
}

export class CreatorPreset extends CreatorPresetBase {
  public constructor(json: any) {
    super();
    this.setJson(json);
  }
  public getPath(): string { return ""; }
  protected setupPresets(): void {
    this.addPresets(new CreatorTabsPreset());
  }
}