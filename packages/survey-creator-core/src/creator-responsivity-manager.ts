import { CreatorBase } from "./creator-base";

export class CreatorResponsivityManager {
  private resizeObserver: ResizeObserver = undefined;
  private screenWidth: { [key: string]: number } = {
    "xxl": 1920,
    "xl": 1280,
    "l": 960,
    "m": 768,
    "s": 376,
  }
  private getScreenWidth(): string {
    let res;
    Object.keys(this.screenWidth).forEach((mode: string) => {
      if (!res && this.container && !!this.screenWidth[mode] && this.container.offsetWidth >= this.screenWidth[mode]) {
        res = mode;
      }
    });
    return res || "xs";
  }

  constructor(protected container: HTMLDivElement, private creator: CreatorBase) {
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver((_) => this.process());
      this.resizeObserver.observe(this.container.parentElement);
      this.process();
    }
  }

  private _process(toolboxIsCompact: boolean, toolboxVisible: boolean, flyoutTabPanel: boolean) {
    this.creator.toolbox.isCompact = toolboxIsCompact;
    this.creator.toolbox.visible = toolboxVisible;
    this.creator.showPageNavigator = toolboxVisible;
    this.creator.currentTabPropertyGrid && (this.creator.currentTabPropertyGrid.flyoutMode = flyoutTabPanel)
  }
  process() {
    const currentWidth = this.getScreenWidth();
    if (currentWidth === "xl" || currentWidth === "xxl") {
      this._process(false, true, false);
    } else if (currentWidth === "l") {
      this._process(true, true, false);
    } else if (currentWidth === "m") {
      this._process(true, true, true);
    } else {
      this._process(true, false, true);
    }
  }

  public dispose(): void {
    if (!!this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
