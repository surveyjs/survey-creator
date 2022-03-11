import { CreatorBase } from "./creator-base";
import "./responsivity.scss";
export class CreatorResponsivityManager {
  private resizeObserver: ResizeObserver = undefined;
  private currentWidth;
  private prevShowToolbox;
  private prevShowPageNavigator;
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
  private procesShowToolbox(toolboxVisible: boolean) {
    if (toolboxVisible && !this.creator.showToolbox && this.prevShowToolbox !== undefined) {
      this.creator.showToolbox = this.prevShowToolbox;
      this.prevShowToolbox = undefined;
    } else if (!toolboxVisible && this.creator.showToolbox && this.prevShowToolbox === undefined) {
      this.prevShowToolbox = this.creator.showToolbox;
      this.creator.showToolbox = false;
    }
  }
  private procesShowPageNavigator(pageNavigatorVisibility: boolean) {
    if (pageNavigatorVisibility && !this.creator.showPageNavigator && this.prevShowPageNavigator !== undefined) {
      this.creator.showPageNavigator = this.prevShowPageNavigator;
      this.prevShowPageNavigator = undefined;
    } else if (!pageNavigatorVisibility && this.creator.showPageNavigator && this.prevShowPageNavigator === undefined) {
      this.prevShowPageNavigator = this.creator.showPageNavigator;
      this.creator.showPageNavigator = false;
    }
  }

  constructor(protected container: HTMLDivElement, private creator: CreatorBase) {
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver((_) => this.process());
      this.resizeObserver.observe(this.container.parentElement);
      this.process();
      if (this.currentWidth == "xs" || this.currentWidth == "s" || this.currentWidth === "m") {
        this.creator.showSidebar = false;
      }
    }
  }

  private _process(toolboxIsCompact: boolean, toolboxVisible: boolean, flyoutSidebar: boolean) {
    this.creator.updateToolboxIsCompact(toolboxIsCompact);
    this.procesShowToolbox(toolboxVisible);
    this.procesShowPageNavigator(toolboxVisible);
    this.creator.sidebar.flyoutMode = flyoutSidebar;

    if (this.creator.sidebar.visible && !flyoutSidebar) {
      this.creator.sidebar.collapsedManually = false;
    }
    if (this.creator.sidebar.visible && !this.creator.sidebar.expandedManually && flyoutSidebar && this.creator.toolboxLocation != "right") {
      this.creator.sidebar.collapseSidebar();
    }
    if (!this.creator.sidebar.visible && !this.creator.sidebar.collapsedManually && !flyoutSidebar && this.creator.toolboxLocation != "right") {
      this.creator.sidebar.expandSidebar();
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
