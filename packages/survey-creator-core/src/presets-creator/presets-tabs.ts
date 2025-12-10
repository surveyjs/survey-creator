import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
export interface ICreatorPresetTab {
  name: string;
  iconName?: string;
}

export class CreatorPresetTabs extends CreatorPresetBase {
  public getPath(): string { return "tabs"; }
  protected applyCore(creator: SurveyCreatorModel, internal: boolean = false): void {
    super.applyCore(creator, internal);
    const items = this.json["items"] || creator.initialTabs().map(name => ({ name }));
    let tab = null;
    if (!internal) {
      tab = this.json.activeTab || (items.length > 0 ? items[0].name : "");
      if (items.length > 0 && items.filter(i => i.name == tab).length == 0) {
        tab = items[0].name;
      }
      if (!!tab && creator.activeTab !== tab) {
        const activePlugin = creator.getPlugin(creator.activeTab);
        if (!!activePlugin?.deactivate) {
          activePlugin.deactivate();
        }
      }
    }
    this.applyTabs(creator, items);
    if (tab) {
      creator.activeTab = tab;
    }
  }
  private applyTabs(creator: SurveyCreatorModel, items: Array<ICreatorPresetTab>): void {
    if (!Array.isArray(items)) return;
    const tabs = [...items.map(i => i.name), ...creator.tabs.map(i => i.id).filter(id => id == "presets")];

    items.forEach(item => {
      if (item.iconName === undefined) return;
      const action = creator.tabbedMenu.getActionById(item.name);
      action.iconName = item.iconName;
    });
    creator.setTabs(tabs);
  }
}