import { ActionContainer, Base, CssClassBuilder } from "survey-core";
import { SidebarModel } from "./side-bar-model";
import { MenuButton } from "../../utils/actions";

export class TabControlModel extends Base {
  public bottomToolbar: ActionContainer<MenuButton> = new ActionContainer<MenuButton>();
  public expandCollapseAction: MenuButton;
  public onTopToolbarItemCreated: (bar: ActionContainer<MenuButton>) => void;

  private updateExpandCollapseAction() {
    this.expandCollapseAction.iconName = this.sidePanel.visible ? "icon-collapse-panel" : "icon-expand-panel";
    this.expandCollapseAction.css = this.sidePanel.visible ? "svd-grid-hide" : "svd-grid-expand";
    this.expandCollapseAction.locTooltipName = this.sidePanel.visible ? "ed.hidePanel" : "ed.showPanel";
  }

  private createToggleAction() {
    this.expandCollapseAction = new MenuButton({
      id: "svd-grid-hide",
      showTitle: false,
      visible: true,
      pressed: false,
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
  private topToolbarValue: ActionContainer<MenuButton>;
  public get isTopToolbarCreated(): boolean {
    return !!this.topToolbarValue;
  }
  public get topToolbar(): ActionContainer<MenuButton> {
    if (!this.topToolbarValue) {
      this.topToolbarValue = new ActionContainer<MenuButton>();
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