interface IComponentContainerElement {
  componentName: string;
  componentData: any;
}

export interface IComponentContainerOptions {
  cssClass?: string;
  wrapped?: boolean;
  scrollable?: boolean;
  elements?: IComponentContainerElement[];
}

export class ComponentContainerModel {
  public cssClass: string = "svc-component-container";
  public wrapped: boolean = true;
  public scrollable: boolean = false;
  public elements: IComponentContainerElement[] = [];

  constructor(options?: IComponentContainerOptions) {
    Object.assign(this, options);
  }
}