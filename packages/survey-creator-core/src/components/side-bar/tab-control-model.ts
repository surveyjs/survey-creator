import { Action, ActionContainer, Base, CssClassBuilder } from "survey-core";
import { SidebarModel } from "./side-bar-model";

export class TabControlModel extends Base {
  public bottomToolbar: ActionContainer = new ActionContainer();
  public expandCollapseAction: Action;
  public onTopToolbarItemCreated: (bar: ActionContainer) => void;

  private updateExpandCollapseAction() {
    this.expandCollapseAction.iconName = this.sidePanel.visible ? "icon-collapse-panel" : "icon-expand-panel";
    this.expandCollapseAction.css = this.sidePanel.visible ? "svd-grid-hide" : "svd-grid-expand";
    this.expandCollapseAction.locTooltipName = this.sidePanel.visible ? "ed.hidePanel" : "ed.showPanel";
  }

  private createToggleAction() {
    this.expandCollapseAction = new Action({
      id: "svd-grid-hide",
      showTitle: false,
      visible: true,
      enabled: true,
      action: () => {
        if (!this.expandCollapseAction.enabled) return;
        if (this.sidePanel.visible) {
          this.sidePanel.collapseSidebar();
        } else {
          this.sidePanel.expandSidebar();
        }
      }
    });
  }

  constructor(public sidePanel: SidebarModel) {
    super();
    this.createToggleAction();
    this.updateExpandCollapseAction();
    this.sidePanel.registerFunctionOnPropertyValueChanged("_visible", () => {
      this.updateExpandCollapseAction();
    });
  }
  private topToolbarValue: ActionContainer;
  public get isTopToolbarCreated(): boolean {
    return !!this.topToolbarValue;
  }
  public get topToolbar(): ActionContainer {
    if (!this.topToolbarValue) {
      this.topToolbarValue = new ActionContainer();
      if (!!this.onTopToolbarItemCreated) {
        this.onTopToolbarItemCreated(this.topToolbarValue);
      }
    }
    return this.topToolbarValue;
  }

  public get sideBarClassName(): string {
    return new CssClassBuilder().append("svc-sidebar-tabs").append("svc-sidebar-tabs--collapsed", !this.sidePanel.renderedIsVisible).toString();
  }
}