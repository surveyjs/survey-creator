import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
export interface ICreatorPresetTab {
  name: string;
  iconName?: string;
}

export class CreatorPresetTabs extends CreatorPresetBase {
  public getPath(): string { return "tabs"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    const items = this.json["items"] || [];
    let tab = this.json.activeTab || (items.length > 0 ? items[0].name : "");
    if (items.length > 0 && items.filter(i => i.name == tab).length == 0) {
      tab = items[0].name;
    }
    if (!!tab && creator.activeTab !== tab) {
      const activePlugin = creator.getPlugin(creator.activeTab);
      if (!!activePlugin?.deactivate) {
        activePlugin.deactivate();
      }
    }
    this.applyTabs(creator, items);
    if (tab) {
      creator.activeTab = tab;
    }
  }
  private applyTabs(creator: SurveyCreatorModel, items: Array<ICreatorPresetTab>): void {
    if (!Array.isArray(items)) return;
    creator.setTabs(items.map(i => i.name));
  }
}