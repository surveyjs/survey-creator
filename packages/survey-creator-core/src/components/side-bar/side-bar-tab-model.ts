import { Base, property } from "survey-core";
import { SideBarModel } from "./side-bar-model";

export class SideBarTabModel extends Base {
  @property({
    onSet: (newVal, target: SideBarTabModel) => {
      target.sidePanel.headerText = target.caption;
    }
  }) caption: string;
  @property({
    onSet: (newVal, target: SideBarTabModel) => {
      target.sidePanel.updateHasVisibleTabs();
    }
  }) visible: boolean;
  @property() model: any;
  @property() componentName: string;

  constructor(public id: string, public sidePanel: SideBarModel, componentName?: string, model?: any,) {
    super();
    !!componentName && (this.componentName = componentName);
    !!model && (this.model = model);
  }
}