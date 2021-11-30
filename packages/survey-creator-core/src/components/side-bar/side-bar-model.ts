import { Base, property, AdaptiveActionContainer, Action, ComputedUpdater, propertyArray } from "survey-core";
import { settings } from "../../settings";
import { getLocString } from "../../editorLocalization";
import { CreatorBase } from "../../creator-base";
import { SideBarTabModel } from "./side-bar-tab-model";
import { ResizeManager } from "../../utils/resizer";

export class SideBarModel extends Base {
  public toolbar: AdaptiveActionContainer = new AdaptiveActionContainer();
  private _expandAction: Action;
  private _collapseAction: Action;
  private _activeTab: SideBarTabModel;
  private onPropertyGridVisibilityChanged;
  private resizeManager: ResizeManager;

  @propertyArray() tabs: Array<SideBarTabModel>;
  @property() headerText: string;
  @property({ defaultValue: true }) visible: boolean;
  @property() hasVisibleTabs: boolean;
  @property({ defaultValue: false }) flyoutMode: boolean;
  @property({
    onSet: (val, target: SideBarModel) => {
      target.tabs.forEach(tab => tab.visible = false);
      target._activeTab = target.tabs.filter(tab => tab.id === val)[0];
      if (target._activeTab) {
        target.headerText = target._activeTab.caption;
        target._activeTab.visible = true;
      }
    }
  }) activeTab: string;

  public get flyoutPanelMode(): boolean {
    return this.visible && this.flyoutMode;
  }

  public get closeText(): string {
    return getLocString("pe.close");
  }
  public getTabById(id: string) {
    return this.tabs.filter(tab => tab.id === id)[0];
  }

  private createActions() {
    if (settings.propertyGrid.allowCollapse) {
      this._collapseAction = new Action({
        id: "svd-grid-hide",
        iconName: "icon-hide",
        css: "svd-grid-hide",
        title: getLocString("ed.hidePanel"),
        showTitle: false,
        visible: <any>new ComputedUpdater<boolean>(() => this.visible),
        action: () => {
          if (this.collapseAction)
            this.collapseAction();
          else
            this.visible = false;
        }
      });
      this.toolbar.actions.push(this._collapseAction);

      this._expandAction = new Action({
        id: "svd-grid-expand",
        iconName: "icon-expand_20x20",
        css: "svd-grid-expand",
        needSeparator: true,
        action: () => {
          if (this.expandAction)
            this.expandAction();
          else
            this.visible = true;
        },
        title: getLocString("ed.showPanel"),
        visible: <any>new ComputedUpdater<boolean>(() => {
          const visible = !this.visible;
          return this.hasVisibleTabs && visible;
        }),
        showTitle: false
      });
    }
  }
  private getCurrentHandles(): string {
    return this.creator.sideBarLocation == "right" ? "w" : "e";
  }

  constructor(
    private creator: CreatorBase,
    private collapseAction: () => void = () => { this.creator.showPropertyGrid = false; },
    private expandAction: () => void = () => { this.creator.showPropertyGrid = true; }
  ) {
    super();
    this.onPropertyGridVisibilityChanged = (sender: CreatorBase, options: any) => {
      if (this.isDisposed) return;
      this.visible = options.show;
    };
    this.creator.onShowPropertyGridVisiblityChanged.add(this.onPropertyGridVisibilityChanged);
    this.creator.onPropertyChanged.add((sender, options) => {
      if (options.name === "sideBarLocation") {
        this.resizeManager.setHandles(this.getCurrentHandles());
      }
    });
    this.visible = this.creator.showPropertyGrid;
    this.createActions();
  }

  public getExpandAction() {
    return this._expandAction;
  }
  public closePropertyGrid() {
    this._collapseAction.action();
  }
  public addTab(id: string, componentName?: string, model?: any, buildActions?: () => Array<Action>): SideBarTabModel {
    const tab = new SideBarTabModel(id, this, componentName, model);
    this.tabs.push(tab);
    if (!!buildActions) {
      (buildActions() || []).forEach(action => this.toolbar.actions.push(action));
    }
    return tab;
  }
  public updateHasVisibleTabs() {
    this.hasVisibleTabs = (this.tabs || []).filter(tab => tab.visible).length > 0;
  }
  public dispose() {
    if (!!this.creator && !this.isDisposed) {
      this.creator.onShowPropertyGridVisiblityChanged.remove(this.onPropertyGridVisibilityChanged);
    }
    super.dispose();
  }
  public initResizeManager(container: HTMLDivElement): void {
    this.resizeManager = new ResizeManager(container, this.getCurrentHandles());
  }
  public resetResizeManager(): void {
    if (!!this.resizeManager) {
      this.resizeManager.dispose();
      this.resizeManager = undefined;
    }
  }
}