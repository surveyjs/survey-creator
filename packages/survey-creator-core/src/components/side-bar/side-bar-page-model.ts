import { Base, property } from "survey-core";
import { SidebarModel } from "./side-bar-model";

export class SidebarPageModel extends Base {
  @property() caption: string;
  @property({
    onSet: (newVal, target: SidebarPageModel) => {
      target.sidePanel.updateHasVisiblePages();
    }
  }) visible: boolean;
  @property() componentData: any;
  @property() componentName: string;

  activateCallback: () => void;
  deactivateCallback: () => void;

  constructor(public id: string, public sidePanel: SidebarModel, componentName?: string, componentData?: any) {
    super();
    !!componentName && (this.componentName = componentName);
    !!componentData && (this.componentData = componentData);
  }
}