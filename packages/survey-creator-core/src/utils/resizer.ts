export class ResizeManager {
  private originalMouseX: number;
  private originalWidth: number;
  private minWidth: number;
  private maxWidth: number;
  private resizer: HTMLElement;
  constructor(private container: HTMLElement) {
    this.init(container);
  }

  private getStyleValue(element: HTMLElement, style: string): number {
    return parseFloat(
      window.getComputedStyle(element).getPropertyValue(style).replace("px", "")
    );
  }

  private onMouseDownListener = (e: any) => {
    e.preventDefault();
    this.originalWidth = this.getStyleValue(this.container, "width");
    this.originalMouseX = e.pageX;
    window.addEventListener("mousemove", this.resize);
    window.addEventListener("mouseup", this.stopResize);
  };

  private resize = (e: any) => {
    const width = this.originalWidth - (e.pageX - this.originalMouseX);
    if (width > this.minWidth && width < this.maxWidth) {
      this.container.style.width = width + "px";
    }
  };

  private stopResize = (e: any) => {
    window.removeEventListener("mousemove", this.resize);
    window.removeEventListener("mouseup", this.stopResize);
  };

  private init(container: HTMLElement) {
    const resizer = (this.resizer = document.createElement("div"));
    resizer.className = "svc-resizer";
    this.minWidth = this.getStyleValue(container, "min-width");
    this.maxWidth = this.getStyleValue(container, "max-width");
    container.insertBefore(resizer, container.children[0]);
    resizer.addEventListener("mousedown", this.onMouseDownListener);
  }

  dispose() {
    this.resizer.removeEventListener("mousedown", this.onMouseDownListener);
    this.resizer.remove();
    this.resizer = undefined;
  }
}
