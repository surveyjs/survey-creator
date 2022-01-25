import { CreatorBase } from "./creator-base";
import "./responsivity.scss";
export class CreatorResponsivityManager {
  private resizeObserver: ResizeObserver = undefined;
  private currentWidth;
  private prevToolboxLocation;
  private screenWidth: { [key: string]: number } = {
    "xxl": 1800,
    "xl": 1500,
    "l": 1200,
    "m": 900,
    "s": 600,
  }
  private devicePixelRatio = (window && window.devicePixelRatio) || 1;
  private getScreenWidth(): string {
    let res;
    Object.keys(this.screenWidth).forEach((mode: string) => {
      if (!res && this.container && !!this.screenWidth[mode] && this.container.offsetWidth * this.devicePixelRatio >= this.screenWidth[mode]) {
        res = mode;
      }
    });
    return res || "xs";
  }
  private initMobileView() {
    this.creator.showTabs = false;
    this.creator.showToolbar = false;
    this.creator.isMobileView = true;
  }
  private resetMobileView() {
    this.creator.showTabs = undefined;
    this.creator.showToolbar = undefined;
    this.creator.isMobileView = undefined;
  }

  constructor(protected container: HTMLDivElement, private creator: CreatorBase) {
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver((_) => this.process());
      this.resizeObserver.observe(this.container.parentElement);
      this.prevToolboxLocation = this.creator.toolboxLocation;
      this.process();
      if (this.currentWidth == "xs" || this.currentWidth == "s" || this.currentWidth === "m") {
        this.creator.showPropertyGrid = false;
      }
    }
  }

  private _process(toolboxIsCompact: boolean, toolboxVisible: boolean, flyoutSideBar: boolean) {
    this.creator.updateToolboxIsCompact(toolboxIsCompact);
    if (toolboxVisible && this.creator.toolboxLocation === "hidden") {
      this.creator.toolboxLocation = this.prevToolboxLocation;
    } else if (!toolboxVisible && this.creator.toolboxLocation !== "hidden") {
      this.prevToolboxLocation = this.creator.toolboxLocation;
      this.creator.toolboxLocation = "hidden";
    }
    this.creator.showPageNavigator = toolboxVisible;
    this.creator.sideBar.flyoutMode = flyoutSideBar;

    if(this.creator.sideBar.visible && !flyoutSideBar) {
      this.creator.sideBar.collapsedManually = false;
    }
    if(this.creator.sideBar.visible && !this.creator.sideBar.expandedManually && flyoutSideBar && this.creator.toolboxLocation != "right") {
      this.creator.sideBar.collapseSideBar();
    }
    if(!this.creator.sideBar.visible && !this.creator.sideBar.collapsedManually && !flyoutSideBar && this.creator.toolboxLocation != "right") {
      this.creator.sideBar.expandSideBar();
    }

  }
  process() {
    this.currentWidth = this.getScreenWidth();
    if (this.currentWidth === "xl" || this.currentWidth === "xxl") {
      this._process(false, true, false);
    } else if (this.currentWidth === "l") {
      this._process(true, true, false);
    } else if (this.currentWidth === "m") {
      this._process(true, true, true);
    } else {
      this._process(true, false, true);
    }

    if (this.currentWidth == "xs") {
      this.initMobileView();
    } else {
      this.resetMobileView();
    }
  }

  public dispose(): void {
    if (!!this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
