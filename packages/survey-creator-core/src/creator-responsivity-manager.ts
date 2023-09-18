import { CreatorBase } from "./creator-base";
require("./responsivity.scss");
export class CreatorResponsivityManager {
  private resizeObserver: ResizeObserver = undefined;
  private currentWidth;
  private prevShowToolbox;
  private prevShowPageNavigator;
  public static screenSizeBreakpoints: { [key: string]: number } = {
    "xxl": 1800,
    "xl": 1500,
    "l": 1200,
    "m": 900,
    "s": 600,
  }
  private getScreenWidth(): string {
    let res;
    Object.keys(CreatorResponsivityManager.screenSizeBreakpoints).forEach((mode: string) => {
      const breakpoint = CreatorResponsivityManager.screenSizeBreakpoints[mode];
      if (!res && this.container && !!breakpoint && this.container.offsetWidth >= breakpoint) {
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
    if (this.creator.pageEditMode === "bypage") {
      this.creator.showPageNavigator = true;
      return;
    }
    if (pageNavigatorVisibility && !this.creator.showPageNavigator && this.prevShowPageNavigator !== undefined) {
      this.creator.showPageNavigator = this.prevShowPageNavigator;
      this.prevShowPageNavigator = undefined;
    } else if (!pageNavigatorVisibility && this.creator.showPageNavigator && this.prevShowPageNavigator === undefined) {
      this.prevShowPageNavigator = this.creator.showPageNavigator;
      this.creator.showPageNavigator = false;
    }
  }

  private findCorrectParent(container: HTMLElement) {
    if (!!window?.getComputedStyle) {
      if (window.getComputedStyle(container.parentElement).display === "inline") {
        return this.findCorrectParent(container.parentElement);
      }
    }
    return container.parentElement;
  }

  constructor(protected container: HTMLDivElement, private creator: CreatorBase) {
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver((_) => this.process());
      this.resizeObserver.observe(this.findCorrectParent(this.container));
      this.process();
      if (this.currentWidth == "xs" || this.currentWidth == "s" || this.currentWidth === "m") {
        this.creator.setShowSidebar(false);
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
