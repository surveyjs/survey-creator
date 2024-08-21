import { Base, property } from "survey-core";
import { SidebarModel } from "./side-bar-model";

export class SidebarPageModel extends Base {
  @property({
    onSet: (newVal, target: SidebarPageModel) => {
      target.sidePanel.headerText = target.caption;
    }
  }) caption: string;
  @property({
    onSet: (newVal, target: SidebarPageModel) => {
      target.sidePanel.updateHasVisiblePages();
    }
  }) visible: boolean;
  @property() componentModel: any;
  @property() componentName: string;

  constructor(public id: string, public sidePanel: SidebarModel, componentName?: string, model?: any) {
    super();
    !!componentName && (this.componentName = componentName);
    !!model && (this.componentModel = model);
  }
}