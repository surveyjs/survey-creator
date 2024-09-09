import { Action, ActionContainer, Base } from "survey-core";
import { SidebarModel } from "./side-bar-model";

export class TabControlModel extends Base {
  public topToolbar: ActionContainer = new ActionContainer();
  public bottomToolbar: ActionContainer = new ActionContainer();
  public expandCollapseAction: Action;

  private updateExpandCollapseAction() {
    this.expandCollapseAction.iconName = this.sidePanel.visible ? "icon-collapse-panel" : "icon-expand-panel";
    this.expandCollapseAction.css = this.sidePanel.visible ? "svd-grid-hide" : "svd-grid-expand";
    this.expandCollapseAction.locTitleName = this.sidePanel.visible ? "ed.hidePanel" : "ed.showPanel";
  }

  private createToggleAction() {
    this.expandCollapseAction = new Action({
      id: "svd-grid-hide",
      showTitle: false,
      visible: true,
      action: () => {
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
}