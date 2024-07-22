import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";

export class CreatorPresetTabs extends CreatorPresetBase {
  public getPath(): string { return "tabs"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    const items = this.json["items"] || [];
    const tab = this.json.activeTab || (items.length > 0 ? items[0]: "");
    this.applyTabs(creator, items);
    if (tab) {
      creator.activeTab = tab === "preview" ? "test" : tab;
    }
  }
  private applyTabs(creator: SurveyCreatorModel, items: Array<string>): void {
    if (!Array.isArray(items)) return;
    creator.setTabs(items);
  }
}