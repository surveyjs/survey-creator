import { AdaptiveActionContainer, Base, property } from "survey-core";

export class SidebarHeaderModel extends Base {
  public toolbar: AdaptiveActionContainer = new AdaptiveActionContainer();

  @property() title: string;
  @property() subTitle: string;

  @property() componentData: any;
  @property() componentName: string;

  public reset() {
    this.title = "";
    this.subTitle = "";
    this.componentName = "";
    this.componentData = undefined;
  }
}