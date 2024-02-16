import { CreatorPresetBase } from "./presets-base";
import { CreatorPresetToolbox, ICreatorPresetToolboxItem } from "./presets-toolbox";
import { SurveyCreatorModel } from "../creator-base";
import { IToolboxCategoryDefinition } from "../toolbox";

export interface ICreatorPresetData {
  tabs? : {
    items?: Array<string>,
    activeTab?: string,
  };
  toolbox? : {
    definition?: Array<ICreatorPresetToolboxItem>,
    categories?: Array<IToolboxCategoryDefinition>,
    items?: Array<string>,
  };
}

export class CreatorPresetTabs extends CreatorPresetBase {
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
  public constructor(json: ICreatorPresetData) {
    super();
    this.setJson(json);
  }
  public getPath(): string { return ""; }
  protected setupPresets(): void {
    this.addPresets(new CreatorPresetTabs(), new CreatorPresetToolbox());
  }
}