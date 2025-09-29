import { Base, property } from "survey-core";
import { SidebarModel } from "./side-bar-model";
import { editorLocalization } from "../../editorLocalization";

export class SidebarPageModel extends Base {
  @property() locTileName: string;
  @property({
    onSet: (newVal, target: SidebarPageModel) => {
      target.sidePanel.updateHasVisiblePages();
    }
  }) visible: boolean;
  @property() componentData: any;
  @property() componentName: string;

  activateCallback: () => void;
  deactivateCallback: () => void;

  private captionValue: string;

  constructor(public id: string, public sidePanel: SidebarModel, componentName?: string, componentData?: any) {
    super();
    !!componentName && (this.componentName = componentName);
    !!componentData && (this.componentData = componentData);
  }
  public get caption(): string {
    return this.captionValue || editorLocalization.getString(this.locTileName);
  }
  public set caption(val: string) {
    this.captionValue = val;
  }
}