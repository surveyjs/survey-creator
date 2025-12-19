interface IComponentContainerElement {
  componentName: string;
  componentData: any;
}

export class ComponentContainerModel {
  public elements: IComponentContainerElement[] = [];
}