import { Base, property, Action, ComputedUpdater, propertyArray, AnimationBoolean, IAnimationConsumer, CssClassBuilder } from "survey-core";
import { getLocString } from "../../editorLocalization";
import { SurveyCreatorModel } from "../../creator-base";
import { SidebarPageModel } from "./side-bar-page-model";
import { SidebarHeaderModel } from "./side-bar-header-model";
import { ResizeManager } from "../../utils/resizer";
import { notShortCircuitAnd } from "../../utils/utils";

export class SidebarModel extends Base {
  public header: SidebarHeaderModel = new SidebarHeaderModel();

  private _expandAction: Action;
  private _collapseAction: Action;
  private _activePage: SidebarPageModel;
  private onSidebarVisibilityChanged;
  private resizeManager: ResizeManager;

  onExpandCallback: () => void;

  @propertyArray() pages: Array<SidebarPageModel>;
  @property({ defaultValue: true }) _visible: boolean;
  @property({ defaultValue: true }) renderedIsVisible: boolean;
  @property({ defaultValue: false }) collapsedManually: boolean;
  @property({ defaultValue: false }) expandedManually: boolean;
  @property() hasVisiblePages: boolean;
  @property({ defaultValue: false }) flyoutMode: boolean;
  @property({ defaultValue: false }) narrowMode: boolean;
  @property() hideSideBarVisibilityControlActions: boolean;

  @property() sideAreaComponentName: string;
  @property() sideAreaComponentData: any;

  private rootElement: HTMLElement;
  public get rootCss(): string {
    return new CssClassBuilder()
      .append("svc-side-bar")
      .append("svc-side-bar--flyout", this.flyoutPanelMode)
      .append("svc-side-bar--narrow", this.narrowMode)
      .append("svc-side-bar--mobile", this.creator.isMobileView)
      .append("svc-side-bar--side-area", !!this.sideAreaComponentName)
      .toString();
  }
  public get renderRoot(): boolean {
    return this.hasVisiblePages && (!this.creator.isMobileView || this.renderedIsVisible);
  }
  public get renderContainer(): boolean {
    return this.renderedIsVisible;
  }
  private getAnimationOptions(): IAnimationConsumer {
    const onBeforeRunAnimation = (el: HTMLElement) => {
      const animatedElements = el.querySelectorAll(".svc-side-bar__container-wrapper,.svc-side-bar__wrapper");
      animatedElements.forEach((el: HTMLElement) => {
        el.style.setProperty("--animation-width", el.offsetWidth + "px");
      });
    };
    return {
      getAnimatedElement: () => {
        return this.rootElement;
      },
      isAnimationEnabled: () => this.animationAllowed,
      getRerenderEvent: () => this.onElementRerendered,
      getLeaveOptions: () => {
        return {
          onBeforeRunAnimation: onBeforeRunAnimation,
          cssClass: "svc-side-bar--leave"
        };
      },
      getEnterOptions: () => {
        return {
          onBeforeRunAnimation: onBeforeRunAnimation,
          cssClass: "svc-side-bar--enter",
          onAfterRunAnimation: () => this.afterExpand()
        };
      }
    };
  }
  @property({}) private allowFlyoutMode: boolean = true;
  private afterExpand() {
    this.onExpandCallback && this.onExpandCallback();
    this.onExpandCallback = undefined;
  }
  public executeOnExpand(callback: () => void) {
    if (this.renderedIsVisible) {
      callback();
    }
    this.onExpandCallback = callback;
  }
  public visibilityAnimation = new AnimationBoolean(this.getAnimationOptions(), (val: boolean) => {
    this.renderedIsVisible = val;
    this.allowFlyoutMode = true;
  }, () => this.renderedIsVisible);
  public set visible(val: boolean) {
    if (this._visible && !val && !this.flyoutMode) {
      this.allowFlyoutMode = false;
    }
    if (this._visible !== val) {
      this._visible = val;
      if (!this.animationAllowed) {
        this.afterExpand();
      }
      this.visibilityAnimation.sync(val);
    }
  }
  public get visible(): boolean {
    return this._visible;
  }

  public get flyoutPanelMode(): boolean {
    return this.flyoutMode && this.allowFlyoutMode;
  }

  public get closeText(): string {
    return getLocString("pe.close");
  }
  public getPageById(id: string) {
    return this.pages.filter(page => page.id === id)[0];
  }
  public locStrsChanged(): void {
    super.locStrsChanged();
    if (this._activePage) {
      this.header.title = this._activePage.caption;
    }
  }
  private createActions() {
    this._collapseAction = new Action({
      id: "svd-grid-hide",
      iconName: "icon-collapse-panel",
      iconSize: "auto",
      css: "svd-grid-hide",
      locTitleName: "ed.hidePanel",
      showTitle: false,
      visible: <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(
          !notShortCircuitAnd(!this.creator.allowCollapseSidebar, !this.flyoutMode),
          this.visible, !this.hideSideBarVisibilityControlActions);
      }),
      action: () => {
        this.collapseSidebar();
        if (!this.flyoutMode) {
          this.collapsedManually = true;
          this.expandedManually = false;
        } else {
          this.creator.focusElement(this.creator.selectedElement, true);
        }
      }
    });
    this.header.toolbar.actions.push(this._collapseAction);
    if (this.creator.allowCollapseSidebar) {
      this._expandAction = new Action({
        id: "svd-grid-expand",
        iconName: "icon-expand-panel",
        iconSize: "auto",
        css: "svd-grid-expand",
        needSeparator: true,
        visibleIndex: 1000,
        action: () => {
          this.expandSidebar();
          if (!this.flyoutMode) {
            this.collapsedManually = false;
            this.expandedManually = this.flyoutMode;
          }
        },
        locTitleName: "ed.showPanel",
        visible: <any>new ComputedUpdater<boolean>(() => {
          return notShortCircuitAnd(this.hasVisiblePages, !this.visible, !this.hideSideBarVisibilityControlActions);
        }),
        showTitle: false
      });
    }
  }
  private getCurrentHandles(): string {
    return this.creator.sidebarLocation == "right" ? "w" : "e";
  }
  private sidebarLocationChangedHandler = (sender, options) => {
    if (options.name === "sidebarLocation" && !!this.resizeManager) {
      this.resizeManager.setHandles(this.getCurrentHandles());
    }
  };

  constructor(private creator: SurveyCreatorModel) {
    super();
    this.onSidebarVisibilityChanged = (sender: SurveyCreatorModel, options: any) => {
      if (this.isDisposed) return;
      this.visible = options.show;
    };
    this.creator.onShowSidebarVisibilityChanged.add(this.onSidebarVisibilityChanged);
    this.creator.onPropertyChanged.add(this.sidebarLocationChangedHandler);
    this.visible = this.creator.showSidebar;
    this.createActions();
  }
  public get activePage(): string { return this.getPropertyValue("activePage"); }
  public set activePage(val: string) {
    this.setPropertyValue("activePage", val);
    this.setActivePage(this.pages.filter(page => page.id === val)[0]);
  }
  public getActivePage(): SidebarPageModel {
    return this._activePage;
  }
  public setActivePage(newPage: SidebarPageModel): void {
    if (!!this._activePage && this._activePage.id !== newPage.id && !!this._activePage.deactivateCallback) {
      this._activePage.deactivateCallback();
    }
    this.pages.forEach(page => page.visible = false);
    this._activePage = newPage;
    if (this._activePage) {
      this.header.title = this._activePage.caption;
      this._activePage.visible = true;
      if (!!this._activePage.activateCallback) {
        this._activePage.activateCallback();
      }
    }
  }

  public getExpandAction() {
    return this._expandAction;
  }
  public collapseSidebar() {
    this.creator.setShowSidebar(false);
  }
  public expandSidebar() {
    this.creator.setShowSidebar(true);
  }
  public addPage(id: string, componentName?: string, model?: any, buildActions?: () => Array<Action>): SidebarPageModel {
    const page = new SidebarPageModel(id, this, componentName, model);
    this.pages.push(page);
    if (!!buildActions) {
      (buildActions() || []).forEach(action => this.header.toolbar.actions.push(action));
    }
    return page;
  }
  public updateHasVisiblePages() {
    this.hasVisiblePages = (this.pages || []).filter(page => page.visible).length > 0;
  }
  public dispose(): void {
    if (!!this.creator && !this.isDisposed) {
      this.creator.onShowSidebarVisibilityChanged.remove(this.onSidebarVisibilityChanged);
      this.creator.onPropertyChanged.remove(this.sidebarLocationChangedHandler);
      this.sidebarLocationChangedHandler = undefined;
    }
    this.resetResizeManager();
    super.dispose();
  }
  public initResizeManager(container: HTMLDivElement): void {
    this.resizeManager = new ResizeManager(container, this.getCurrentHandles());
    this.rootElement = container?.parentElement?.parentElement.parentElement;
  }
  public resetResizeManager(): void {
    if (!!this.resizeManager) {
      this.resizeManager.dispose();
      this.resizeManager = undefined;
    }
    this.rootElement = undefined;
  }
  public get toolbar() {
    return this.header?.toolbar;
  }
}