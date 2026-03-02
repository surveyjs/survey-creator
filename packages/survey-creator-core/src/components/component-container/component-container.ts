interface IComponentContainerElement {
  componentName: string;
  componentData: any;
}

export class ComponentContainerModel {
  public cssClass: string = "svc-component-container";
  public elements: IComponentContainerElement[] = [];
}