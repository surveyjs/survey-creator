import { Base, property } from "survey-core";
import { SidebarModel } from "./side-bar-model";

export class SidebarTabModel extends Base {
  @property({
    onSet: (newVal, target: SidebarTabModel) => {
      target.sidePanel.headerText = target.caption;
    }
  }) caption: string;
  @property({
    onSet: (newVal, target: SidebarTabModel) => {
      target.sidePanel.updateHasVisibleTabs();
    }
  }) visible: boolean;
  @property() model: any;
  @property() componentName: string;

  constructor(public id: string, public sidePanel: SidebarModel, componentName?: string, model?: any,) {
    super();
    !!componentName && (this.componentName = componentName);
    !!model && (this.model = model);
  }
}