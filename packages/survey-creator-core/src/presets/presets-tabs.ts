import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";

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
