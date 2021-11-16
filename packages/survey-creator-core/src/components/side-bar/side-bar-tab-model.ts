import { Base, property } from "survey-core";
import { SideBarModel } from "./side-bar-model";

export class SideBarTabModel extends Base {
  @property({
    onSet: (newVal, target: SideBarTabModel) => {
      target.updateSideBarHeaderText();
    }
  }) caption: string;
  @property() visible: boolean;
  @property() model: any;
  @property() componentName: string;
  @property({
    onSet: (newVal, target: SideBarTabModel) => {
      if (newVal) {
        target.updateSideBarHeaderText();
      }
    }
  }) isActive: boolean;

  private updateSideBarHeaderText() {
    this.sidePanel.headerText = this.caption;
  }

  constructor(public id: string, public sidePanel: SideBarModel, componentName?: string, model?: any,) {
    super();
    !!componentName && (this.componentName = componentName);
    !!model && (this.model = model);
  }
}