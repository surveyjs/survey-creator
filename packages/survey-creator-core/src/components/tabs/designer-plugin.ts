import { Base, SurveyModel, Action, ComputedUpdater } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { PropertyGridModel } from "../../property-grid";
import { PropertyGridViewModel, PropertyGridViewModelBase } from "../../property-grid/property-grid-view-model";
import { settings } from "../../settings";
import { TabDesignerViewModel } from "./designer";

export class TabDesignerPlugin<T extends SurveyModel> implements ICreatorPlugin {
  public model: TabDesignerViewModel<T>;
  public propertyGrid: PropertyGridViewModelBase;
  private surveySettingsAction: Action;
  private saveSurveyAction: Action;
  private expandAction: Action;
  public previewAction: Action;

  private get isSurveySelected(): boolean {
    return this.creator.isElementSelected(<any>this.creator.survey);
  }
  private get isSettingsActive(): boolean {
    return this.creator.showPropertyGrid && this.isSurveySelected;
  }

  constructor(private creator: CreatorBase<T>) {
    creator.addPluginTab("designer", this);
    const propertyGridModel = new PropertyGridModel(creator.survey as any as Base, creator);
    this.propertyGrid = new PropertyGridViewModel(propertyGridModel, creator);
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
    creator.registerShortcut("delete", {
      hotKey: {
        keyCode: 46,
      },
      macOsHotkey: {
        keyCode: 46,
      },
      execute: () => this.creator.deleteCurrentElement()
    });
  }
  public activate(): void {
    this.model = new TabDesignerViewModel<T>(this.creator);
  }
  public deactivate(): boolean {
    this.model = undefined;
    return true;
  }
  public update(): void {
    if (!this.model) return;
    this.model.initSurvey();
  }
  public createActions() {
    const items: Array<Action> = [];
    this.surveySettingsAction = new Action({
      id: "svd-settings",
      iconName: "icon-settings",
      needSeparator: <any>new ComputedUpdater<boolean>(() => {
        return !this.creator.isMobileView;
      }),
      action: () => {
        if (!this.creator.showPropertyGrid) {
          this.creator.showPropertyGrid = true;
        }
        this.creator.selectElement(this.creator.survey);
      },
      active: this.isSurveySelected,
      visible: <any>new ComputedUpdater<boolean>(() => this.creator.activeTab === "designer"),
      title: "Settings",
      showTitle: false
    });
    this.saveSurveyAction = new Action({
      id: "svd-save",
      iconName: "icon-save",
      action: () => this.creator.doSave(),
      active: <any>new ComputedUpdater<boolean>(() => {
        return this.creator.state === "modified";
      }),
      enabled: <any>new ComputedUpdater<boolean>(() => this.creator.state === "modified"),
      visible: <any>new ComputedUpdater<boolean>(() => {
        const isDesignerTabActive = this.creator.activeTab === "designer";
        return this.creator.showSaveButton && isDesignerTabActive;
      }),
      title: this.creator.getLocString("ed.saveSurvey"),
      tooltip: this.creator.getLocString("ed.saveSurveyTooltip"),
      showTitle: false
    });
    this.previewAction = new Action({
      id: "svd-preview",
      iconName: "icon-preview",
      needSeparator: true,
      action: () => {
        this.creator.makeNewViewActive("test");
      },
      visible: <any>new ComputedUpdater<boolean>(() => {
        return (this.creator.activeTab === "designer");
      }),
      title: this.creator.getLocString("ed.testSurvey"),
      showTitle: false
    })
    items.push(this.saveSurveyAction);
    items.push(this.surveySettingsAction);
    if (settings.propertyGrid.allowCollapse) {
      this.expandAction = this.propertyGrid.createExpandAction();
      this.expandAction.visible = <any>new ComputedUpdater<boolean>(() => {
        const propertyGridVisible = this.propertyGrid.visible;
        return this.creator.activeTab === "designer" && !propertyGridVisible;
      })
      items.push(this.expandAction);
    }
    this.creator.onSelectedElementChanged.add((sender, options) => {
      this.surveySettingsAction.active = this.isSettingsActive;
    });
    this.creator.onShowPropertyGridVisiblityChanged.add((sender, options) => {
      this.surveySettingsAction.active = this.isSettingsActive;
    });
    return items;
  }
  public addFooterActions() {
    this.creator.footerToolbar.actions.push(this.surveySettingsAction);
    this.creator.footerToolbar.actions.push(this.previewAction);
  }
}