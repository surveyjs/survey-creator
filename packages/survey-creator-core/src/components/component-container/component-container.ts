interface IComponentContainerElement {
  componentName: string;
  componentData: any;
}

export interface IComponentContainerOptions {
  cssClass?: string;
  wrapped?: boolean;
  scrollable?: boolean;
  elements?: IComponentContainerElement[];
  onScroll?: () => void;
}

export class ComponentContainerModel {
  public cssClass: string = "svc-component-container";
  public wrapped: boolean = true;
  public scrollable: boolean = false;
  public elements: IComponentContainerElement[] = [];
  public onScroll: () => void = null;

  private scrollContainer: HTMLElement | null = null;
  private scrollListener: () => void = null;

  constructor(options?: IComponentContainerOptions) {
    Object.assign(this, options);
  }

  public attachScrollListener(rootElement: HTMLElement): void {
    this.detachScrollListener();
    if (!this.scrollable || !rootElement) return;
    this.scrollContainer = rootElement.querySelector(".sv-scroll__scroller") as HTMLElement | null;
    if (!this.scrollContainer) return;
    this.scrollListener = () => {
      if (this.onScroll) {
        this.onScroll();
      }
    };
    this.scrollContainer.addEventListener("scroll", this.scrollListener);
  }

  public detachScrollListener(): void {
    if (this.scrollContainer && this.scrollListener) {
      this.scrollContainer.removeEventListener("scroll", this.scrollListener);
    }
    this.scrollContainer = null;
    this.scrollListener = null;
  }
}
