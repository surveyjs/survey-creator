import { Base, property, AdaptiveActionContainer, Action, ComputedUpdater, propertyArray, AnimationBoolean, IAnimationConsumer } from "survey-core";
import { getLocString } from "../../editorLocalization";
import { SurveyCreatorModel } from "../../creator-base";
import { SidebarTabModel } from "./side-bar-tab-model";
import { ResizeManager } from "../../utils/resizer";
import { notShortCircuitAnd } from "../../utils/utils";

export class SidebarModel extends Base {
  public toolbar: AdaptiveActionContainer = new AdaptiveActionContainer();
  private _expandAction: Action;
  private _collapseAction: Action;
  private _activeTab: SidebarTabModel;
  private onSidebarVisibilityChanged;
  private resizeManager: ResizeManager;

  @propertyArray() tabs: Array<SidebarTabModel>;
  @property() headerText: string;
  @property({ defaultValue: true }) _visible: boolean;
  @property({ defaultValue: true }) renderedIsVisible: boolean
  @property({ defaultValue: false }) collapsedManually: boolean;
  @property({ defaultValue: false }) expandedManually: boolean;
  @property() hasVisibleTabs: boolean;
  @property({ defaultValue: false }) flyoutMode: boolean;
  @property({
    onSet: (val, target: SidebarModel) => {
      target.tabs.forEach(tab => tab.visible = false);
      target._activeTab = target.tabs.filter(tab => tab.id === val)[0];
      if (target._activeTab) {
        target.headerText = target._activeTab.caption;
        target._activeTab.visible = true;
      }
    }
  }) activeTab: string;

  private rootElement: HTMLElement;

  private getAnimationOptions(): IAnimationConsumer {
    const onBeforeRunAnimation = (el) => {
      el.style.setProperty("--animation-width", el.offsetWidth + "px");
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
          onBeforeRunAnimation: (el) => onBeforeRunAnimation,
          cssClass: "svc-side-bar--enter" };
      }
    };
  }
  private allowFlyoutMode: boolean = true;
  public visibilityAnimation = new AnimationBoolean(this.getAnimationOptions(), (val: boolean) => {
    this.renderedIsVisible = val;
    this.allowFlyoutMode = true;
  }, () => this.renderedIsVisible);
  public set visible(val: boolean) {
    if(this._visible && !val && !this.flyoutMode) {
      this.allowFlyoutMode = false;
    }
    if(this._visible !== val) {
      this._visible = val;
      this.visibilityAnimation.sync(val);
    }
  }
  public get visible(): boolean {
    return this._visible;
  }

  public get flyoutPanelMode(): boolean {
    return this.renderedIsVisible && this.flyoutMode && this.allowFlyoutMode;
  }

  public get closeText(): string {
    return getLocString("pe.close");
  }
  public getTabById(id: string) {
    return this.tabs.filter(tab => tab.id === id)[0];
  }

  private createActions() {
    this._collapseAction = new Action({
      id: "svd-grid-hide",
      iconName: "icon-collapse-panel",
      css: "svd-grid-hide",
      locTitleName: "ed.hidePanel",
      showTitle: false,
      visible: <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(
          !notShortCircuitAnd(!this.creator.allowCollapseSidebar, !this.flyoutMode),
          this.visible);
      }),
      action: () => {
        this.collapseSidebar();
        if (!this.flyoutMode) {
          this.collapsedManually = true;
          this.expandedManually = false;
        }
        else {
          this.creator.focusElement(this.creator.selectedElement, true);
        }
      }
    });
    this.toolbar.actions.push(this._collapseAction);
    if (this.creator.allowCollapseSidebar) {
      this._expandAction = new Action({
        id: "svd-grid-expand",
        iconName: "icon-expand-panel",
        css: "svd-grid-expand",
        needSeparator: true,
        action: () => {
          this.expandSidebar();
          if (!this.flyoutMode) {
            this.collapsedManually = false;
            this.expandedManually = this.flyoutMode;
          }
        },
        locTitleName: "ed.showPanel",
        visible: <any>new ComputedUpdater<boolean>(() => {
          return notShortCircuitAnd(this.hasVisibleTabs, !this.visible);
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
  public getExpandAction() {
    return this._expandAction;
  }
  public collapseSidebar() {
    this.creator.setShowSidebar(false);
  }
  public expandSidebar() {
    this.creator.setShowSidebar(true);
  }
  public addTab(id: string, componentName?: string, model?: any, buildActions?: () => Array<Action>): SidebarTabModel {
    const tab = new SidebarTabModel(id, this, componentName, model);
    this.tabs.push(tab);
    if (!!buildActions) {
      (buildActions() || []).forEach(action => this.toolbar.actions.push(action));
    }
    return tab;
  }
  public updateHasVisibleTabs() {
    this.hasVisibleTabs = (this.tabs || []).filter(tab => tab.visible).length > 0;
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
    this.rootElement = container?.parentElement?.parentElement;
  }
  public resetResizeManager(): void {
    if (!!this.resizeManager) {
      this.resizeManager.dispose();
      this.resizeManager = undefined;
    }
    this.rootElement = undefined;
  }
}