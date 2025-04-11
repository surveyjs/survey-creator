export class ResizeManager {
  private originalMouseX: number;
  private originalWidth: number;
  private minWidth: number;
  private maxWidth: number;
  private westResizer: HTMLElement;
  private eastResizer: HTMLElement;
  private currentResizer: HTMLElement;
  private mouseDevice: "mouse" | "pointer" | "touch";
  private events = {
    "mousedown": { "touch": "touchend", "mouse": "mousedown", "pointer": "pointerdown" },
    "mouseup": { "touch": "touchstart", "mouse": "mouseup", "pointer": "pointerup" },
    "mousemove": { "touch": "touchmove", "mouse": "mousemove", "pointer": "pointermove" },
  };

  constructor(private container: HTMLElement, handles: string) {
    this.init(container);
    this.setHandles(handles);
  }
  public setHandles(newVal: string) {
    let isThereWestResizer = false;
    let isThereEastResizer = false;
    let inputVal = newVal.split(",");
    inputVal.forEach(str => str.trim());
    inputVal = inputVal.filter(str => !!str);
    (inputVal || []).forEach(handrail => {
      if (handrail == "w") isThereWestResizer = true;
      if (handrail == "e") isThereEastResizer = true;
    });

    this.westResizer.style["display"] = isThereWestResizer ? "block" : "none";
    this.eastResizer.style["display"] = isThereEastResizer ? "block" : "none";
  }
  private getStyleValue(element: HTMLElement, style: string): number {
    if (!window) return 0;
    return parseFloat(window.getComputedStyle(element).getPropertyValue(style).replace("px", ""));
  }
  private isEventSupported(eventName: string) {
    let el = document.createElement("div");
    eventName = "on" + eventName;
    let isSupported = (eventName in el);
    if (!isSupported) {
      el.setAttribute(eventName, "return;");
      isSupported = typeof el[eventName] == "function";
    }
    el = null;
    return isSupported;
  }
  private getEventPrefix() {
    if (this.mouseDevice === undefined) {
      if (this.isEventSupported("pointerdown")) {
        this.mouseDevice = "pointer";
      } else if (this.isEventSupported("touchstart")) {
        this.mouseDevice = "touch";
      } else if (this.isEventSupported("mousedown")) {
        this.mouseDevice = "mouse";
      }
    }
    return this.mouseDevice;
  }
  private getMouseEvent(eventName: string): string {
    return this.events[eventName][this.getEventPrefix()];
  }
  private onMouseDownListener = (e: any) => {
    if (!window) return;
    e.preventDefault();
    this.originalWidth = this.getStyleValue(this.container, "width");
    this.originalMouseX = e.pageX;
    this.currentResizer = e.target;
    window.addEventListener(this.getMouseEvent("mousemove"), this.resize);
    window.addEventListener(this.getMouseEvent("mouseup"), this.stopResize);
  };
  private resize = (e: any) => {
    let width = this.originalWidth;
    const horizontalDistinction = e.pageX - this.originalMouseX;
    if (this.currentResizer == this.westResizer) {
      width -= horizontalDistinction;
    } else {
      width += horizontalDistinction;
    }
    if (width > this.maxWidth) {
      width = this.maxWidth;
    } else if (width < this.minWidth) {
      width = this.minWidth;
    }
    this.container.style.width = width + "px";
  };
  private stopResize = (e: any) => {
    if (!window) return;
    window.removeEventListener(this.getMouseEvent("mousemove"), this.resize);
    window.removeEventListener(this.getMouseEvent("mouseup"), this.stopResize);
  };
  private init(container: HTMLElement) {
    this.westResizer = this.createrResizerElement("svc-resizer svc-resizer-west");
    this.eastResizer = this.createrResizerElement("svc-resizer svc-resizer-east");
    this.minWidth = this.getStyleValue(container, "min-width");
    this.maxWidth = this.getStyleValue(container, "max-width");
    container.insertBefore(this.westResizer, container.children[0]);
    container.appendChild(this.eastResizer);
  }
  private createrResizerElement(className: string) {
    const resizer = document.createElement("div");
    resizer.className = className;
    resizer.addEventListener(this.getMouseEvent("mousedown"), this.onMouseDownListener);
    return resizer;
  }

  public dispose(): void {
    this.eastResizer.removeEventListener(this.getMouseEvent("mousedown"), this.onMouseDownListener);
    this.eastResizer.remove();
    this.eastResizer = undefined;

    this.westResizer.removeEventListener(this.getMouseEvent("mousedown"), this.onMouseDownListener);
    this.westResizer.remove();
    this.westResizer = undefined;
  }
}