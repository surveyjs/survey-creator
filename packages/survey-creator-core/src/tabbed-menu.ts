import { Action, AdaptiveActionContainer, CssClassBuilder, IAction, property } from "survey-core";
import { CreatorBase } from "./creator-base";
import { ICreatorPlugin } from "./creator-settings";

export interface ITabbedMenuItem extends IAction {
  componentContent: string;
  renderTab?: () => any;
}

const tabsIcons = {
  designer: "icon-config",
  theme: "icon-theme",
  editor: "icon-codeeditor-24x24",
  translation: "icon-language",
  preview: "icon-preview",
  logic: "icon-logic-24x24",
  customembeded: "icon-embedsurvey-24x24",
  default: "icon-undefined-24x24"
};

export class TabbedMenuItem extends Action implements ITabbedMenuItem {
  constructor(item: ITabbedMenuItem) {
    super(item);
  }
  componentContent: string;
  renderTab?: () => any;
  getRootCss(): string {
    return new CssClassBuilder()
      .append("svc-tabbed-menu-item")
      .append("svc-tabbed-menu-item--selected", this.active)
      .append("svc-tabbed-menu-item--disabled", this.enabled !== undefined && !this.enabled)
      .append("svc-tabbed-menu-item--icon", this.hasIcon)
      .toString();
  }
  getTitleCss(): string {
    return new CssClassBuilder()
      .append("svc-tabbed-menu-item__text")
      .toString();
  }
  getIconCss(): string {
    return new CssClassBuilder().append("svc-tabbed-menu-item__icon").toString();
  }
  public get hasTitle(): boolean {
    return !this.hasIcon;
  }
  public get hasIcon(): boolean {
    return !this.disableShrink && this.iconName && this.mode == "small";
  }
}
export class TabbedMenuContainer extends AdaptiveActionContainer<TabbedMenuItem> {
  constructor(private creator: CreatorBase) {
    super();
    this.dotsItem.popupModel.horizontalPosition = "center";
    this.dotsItem.popupModel.cssClass += " svc-tabbed-menu-item__popup svc-creator-popup";
    this.minVisibleItemsCount = 1;
  }
  public addTab(name: string,
    plugin: ICreatorPlugin,
    title?: string,
    componentName?: string,
    index?: number) {
    const tabName = name === "test" ? "preview" : name;
    const locStrName = !title ? "tabs." + tabName : (title.indexOf("ed.") == 0 ? title : "");
    const tab = new TabbedMenuItem({
      id: name,
      locTitleName: locStrName,
      title: title,
      componentContent: componentName ? componentName : "svc-tab-" + name,
      data: plugin,
      iconName: tabsIcons[tabName] || tabsIcons["default"],
      action: () => { this.creator.makeNewViewActive(name); },
      active: this.creator.viewType === name,
      disableHide: this.creator.viewType === name
    });
    tab.disableShrink = this.creator.tabResponsivenessMode == "menu";
    if (index !== undefined && index >= 0 && index < this.actions.length) {
      this.actions.splice(index, 0, tab);
    } else {
      this.actions.push(tab);
    }
  }
  public updateResponsivenessMode() {
    this.actions.forEach((tab) => {
      tab.disableShrink = this.creator.tabResponsivenessMode == "menu";
    });
    this.raiseUpdate(true);
  }
}
