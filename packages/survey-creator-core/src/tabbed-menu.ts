import { Action, AdaptiveActionContainer, CssClassBuilder, IAction, property, UpdateResponsivenessMode } from "survey-core";
import { CreatorBase } from "./creator-base";
import { ICreatorPlugin } from "./creator-settings";
import { listComponentCss } from "./components/list-theme";

export interface ITabbedMenuItem extends IAction {
  componentContent: string;
  renderTab?: () => any;
}

export class TabbedMenuItem extends Action implements ITabbedMenuItem {
  @property({ defaultValue: false }) showIcon: boolean;
  @property({ defaultValue: true }) showTitle: boolean;
  constructor(item: ITabbedMenuItem) {
    super(item);
    this.enabled = true;
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
  public get canShrink() {
    return !!this.hasIcon;
  }
  public get hasTitle(): boolean {
    return this.showTitle && !!this.title;
  }
  public get hasIcon(): boolean {
    return this.showIcon && !!this.iconName;
  }
  public doAction(): boolean {
    if (!this.enabled) return false;
    this.action();
    return true;
  }
}

export enum TabbedMenuMode {
  Icons = 1,
  Titles = 2
}
export class TabbedMenuContainer extends AdaptiveActionContainer<TabbedMenuItem> {
  private currentMode: TabbedMenuMode = TabbedMenuMode.Titles;
  constructor(private creator: CreatorBase) {
    super();
    this.dotsItem.popupModel.horizontalPosition = "center";
    this.dotsItem.popupModel.cssClass += " svc-tabbed-menu-item__popup svc-creator-popup";
    this.dotsItem.css += " svc-tabbed-menu-dots";
    this.dotsItem.innerCss += " svc-tabbed-menu-dots__item";
    this.dotsItem.iconSize = "auto";
    this.hiddenItemsListModel.cssClasses = listComponentCss;
    this.minVisibleItemsCount = 1;
  }
  public addTab(name: string,
    plugin: ICreatorPlugin,
    title?: string,
    iconName?: string,
    componentName?: string,
    index?: number) {
    const tabName = name === "test" ? "preview" : name;
    const locStrName = !title ? "tabs." + tabName : (title.indexOf("ed.") == 0 ? title : "");
    const actionHandler = function(name) {
      this.creator.switchTab(name);
    };
    const tab = new TabbedMenuItem({
      id: name,
      locTitleName: locStrName,
      title: title,
      componentContent: componentName ? componentName : "svc-tab-" + name,
      data: plugin,
      iconName: iconName || "icon-undefined-24x24",
      action: actionHandler.bind(this, name),
      active: this.creator.viewType === name,
      disableHide: this.creator.viewType === name
    });
    if (index !== undefined && index >= 0 && index < this.actions.length) {
      this.actions.splice(index, 0, tab);
    } else {
      this.actions.push(tab);
    }
  }
  public setMode(mode: TabbedMenuMode) {
    if (mode !== this.currentMode) {
      this.actions.forEach(a => a.showIcon = !!(mode & TabbedMenuMode.Icons));
      this.actions.forEach(a => a.showTitle = !!(mode & TabbedMenuMode.Titles));
      this.raiseUpdate({ updateResponsivenessMode: UpdateResponsivenessMode.Hard });
    }
    this.currentMode = mode;
  }
}
