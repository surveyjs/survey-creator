import { ActionContainer, Base, CssClassBuilder } from "survey-core";
import { SidebarModel } from "./side-bar-model";
import { MenuButton } from "../../utils/actions";

export class TabControlModel extends Base {
  public topToolbar: ActionContainer<MenuButton> = new ActionContainer<MenuButton>();
  public bottomToolbar: ActionContainer<MenuButton> = new ActionContainer<MenuButton>();
  public expandCollapseAction: MenuButton;

  private updateExpandCollapseAction() {
    this.expandCollapseAction.iconName = this.sidePanel.visible ? "icon-collapse-panel" : "icon-expand-panel";
    this.expandCollapseAction.css = this.sidePanel.visible ? "svd-grid-hide" : "svd-grid-expand";
    this.expandCollapseAction.locTitleName = this.sidePanel.visible ? "ed.hidePanel" : "ed.showPanel";
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

  public get sideBarClassName(): string {
    return new CssClassBuilder().append("svc-sidebar-tabs").append("svc-sidebar-tabs--collapsed", !this.sidePanel.renderedIsVisible).toString();
  }
}