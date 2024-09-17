import { Base, property } from "survey-core";
import { SidebarModel } from "./side-bar-model";

export class SidebarPageModel extends Base {
  @property({
    onSet: (newVal, target: SidebarPageModel) => {
      target.sidePanel.headerText = target.caption;
    }
  }) caption: string;
  @property() subTitle: string;
  @property({
    onSet: (newVal, target: SidebarPageModel) => {
      target.sidePanel.updateHasVisiblePages();
    }
  }) visible: boolean;
  @property() componentData: any;
  @property() componentName: string;

  constructor(public id: string, public sidePanel: SidebarModel, componentName?: string, componentData?: any) {
    super();
    !!componentName && (this.componentName = componentName);
    !!componentData && (this.componentData = componentData);
  }
}