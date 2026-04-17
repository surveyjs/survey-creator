import { Base } from "survey-core";
interface IComponentContainerElement {
  componentName: string;
  componentData: any;
}

export class ComponentContainerModel {
  public cssClass: string = "svc-component-container";
  public wrapped: boolean = true;
  public scrollable: boolean = false;
  public elements: IComponentContainerElement[] = [];
}