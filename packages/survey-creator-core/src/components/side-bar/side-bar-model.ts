import { Base, property, AdaptiveActionContainer, Action, ComputedUpdater } from "survey-core";
import { settings } from "../../settings";
import { getLocString } from "../../editorLocalization";
import { CreatorBase } from "../../creator-base";

export class SideBarModel extends Base {
  public toolbar: AdaptiveActionContainer = new AdaptiveActionContainer();
  private _expandAction: Action;
  private _collapseAction: Action;
  private _activeTab: SideBarTabModel;
  private onPropertyGridVisibilityChanged;
  tabs: Array<SideBarTabModel> = [];

  @property() headerText: string;
  @property({ defaultValue: true }) visible: boolean;
  @property({ defaultValue: false }) flyoutMode: boolean;
  @property({
    onSet: (val, target: SideBarModel) => {
      target.tabs.forEach(tab => tab.visible = false);
      target._activeTab = target.tabs.filter(tab => tab.id === val)[0];
      target._activeTab.isActive = true;
      target._activeTab.visible = true;
    }
  }) activeTab: string;

  public get flyoutPanelMode(): boolean {
    return this.visible && this.flyoutMode;
  }

  public get closeText(): string {
    return getLocString("pe.close");
  }
  public get visibleTabs(): Array<SideBarTabModel> {
    return this.tabs.length !== 0 ? this.tabs.filter(tab => tab.visible) : [];
  }
  public getTabById(id: string) {
    return this.tabs.filter(tab => tab.id === id)[0];
  }

  private createHideAction() {
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
    }
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
    this.creator.onShowPropertyGridVisiblityChanged.add(
      this.onPropertyGridVisibilityChanged
    );
    this.visible = this.creator.showPropertyGrid;
    this.createHideAction();
  }
  public createExpandAction() {
    this._expandAction = new Action({
      id: "svd-grid-expand",
      iconName: "icon-expand_20x20",
      css: "svd-grid-expand",
      action: () => {
        if (this.expandAction)
          this.expandAction();
        else
          this.visible = true;
      },
      title: getLocString("ed.showPanel"),
      showTitle: false
    });
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
  public dispose() {
    if (!!this.creator && !this.isDisposed) {
      this.creator.onShowPropertyGridVisiblityChanged.remove(
        this.onPropertyGridVisibilityChanged
      );
    }
    super.dispose();
  }
}

export class SideBarTabModel extends Base {
  @property({
    onSet: (newVal, target: SideBarTabModel) => {
      target.updateSideBarHeaderText();
    }
  }) caption: string;
  @property() visible: boolean;
  @property() model: any;
  @property() componentName: string;
  @property({
    onSet: (newVal, target: SideBarTabModel) => {
      if (newVal) {
        target.updateSideBarHeaderText();
      }
    }
  }) isActive: boolean;

  private updateSideBarHeaderText() {
    this.sidePanel.headerText = this.caption;
  }

  constructor(public id: string, public sidePanel: SideBarModel, componentName?: string, model?: any,) {
    super();
    !!componentName && (this.componentName = componentName);
    !!model && (this.model = model);
  }
}