export class ResizeManager {
  private originalMouseX: number;
  private originalWidth: number;
  private minWidth: number;
  private maxWidth: number;
  private resizer: HTMLElement;
  private mouseDevice: "mouse" | "pointer" | "touch";
  private events = {
    "mousedown": { "touch": "touchend", "mouse": "mousedown", "pointer": "pointerdown" },
    "mouseup": { "touch": "touchstart", "mouse": "mouseup", "pointer": "pointerup" },
    "mousemove": { "touch": "touchmove", "mouse": "mousemove", "pointer": "pointermove" },
  }
  constructor(private container: HTMLElement) {
    this.init(container);
  }
  private getStyleValue(element: HTMLElement, style: string): number {
    return parseFloat(
      window.getComputedStyle(element).getPropertyValue(style).replace("px", "")
    );
  }
  private isEventSupported(eventName: string) {
    let el = document.createElement('div');
    eventName = 'on' + eventName;
    let isSupported = (eventName in el);
    if (!isSupported) {
      el.setAttribute(eventName, 'return;');
      isSupported = typeof el[eventName] == 'function';
    }
    el = null;
    return isSupported;
  }
  private getEventPrefix() {
    if (this.mouseDevice === undefined) {
      if (this.isEventSupported("pointerdown")) {
        this.mouseDevice = "pointer";
      }
      else if (this.isEventSupported("touchstart")) {
        this.mouseDevice = "touch";
      }
      else if (this.isEventSupported("mousedown")) {
        this.mouseDevice = "mouse";
      }
    }
    return this.mouseDevice;
  }
  private getMouseEvent(eventName: string): string {
    return this.events[eventName][this.getEventPrefix()];
  }
  private onMouseDownListener = (e: any) => {
    e.preventDefault();
    this.originalWidth = this.getStyleValue(this.container, "width");
    this.originalMouseX = e.pageX;
    window.addEventListener(this.getMouseEvent("mousemove"), this.resize);
    window.addEventListener(this.getMouseEvent("mouseup"), this.stopResize);
  };
  private resize = (e: any) => {
    let width = this.originalWidth - (e.pageX - this.originalMouseX);
    if (width > this.maxWidth) {
      width = this.maxWidth;
    } else if (width < this.minWidth) {
      width = this.minWidth;
    }
    this.container.style.width = width + "px";
  };
  private stopResize = (e: any) => {
    window.removeEventListener(this.getMouseEvent("mousemove"), this.resize);
    window.removeEventListener(this.getMouseEvent("mouseup"), this.stopResize);
  };
  private init(container: HTMLElement) {
    const resizer = (this.resizer = document.createElement("div"));
    resizer.className = "svc-resizer";
    this.minWidth = this.getStyleValue(container, "min-width");
    this.maxWidth = this.getStyleValue(container, "max-width");
    container.insertBefore(resizer, container.children[0]);
    resizer.addEventListener(this.getMouseEvent("mousedown"), this.onMouseDownListener);
  }
  dispose() {
    this.resizer.removeEventListener(this.getMouseEvent("mousedown"), this.onMouseDownListener);
    this.resizer.remove();
    this.resizer = undefined;
  }
}