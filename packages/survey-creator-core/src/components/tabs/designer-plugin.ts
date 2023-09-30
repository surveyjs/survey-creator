import { notShortCircuitAnd } from "../../utils/utils";
import { Base, SurveyModel, Action, ComputedUpdater } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { PropertyGridModel } from "../../property-grid";
import { PropertyGridViewModel } from "../../property-grid/property-grid-view-model";
import { SidebarTabModel } from "../side-bar/side-bar-tab-model";
import { TabDesignerViewModel } from "./designer";

export class TabDesignerPlugin implements ICreatorPlugin {
  public model: TabDesignerViewModel;
  public propertyGrid: PropertyGridViewModel;
  private propertyGridTab: SidebarTabModel;
  private toolboxTab: SidebarTabModel;
  private surveySettingsAction: Action;
  private saveSurveyAction: Action;
  public previewAction: Action;

  private get isSurveySelected(): boolean {
    return this.creator.isElementSelected(<any>this.creator.survey);
  }
  private get isSettingsActive(): boolean {
    return this.creator.showSidebar && this.isSurveySelected;
  }
  private createVisibleUpdater() {
    return <any>new ComputedUpdater<boolean>(() => { return this.creator.activeTab === "designer"; });
  }
  private updatePropertyGridTabCaption() {
    this.propertyGridTab.caption = this.creator.isMobileView ? this.propertyGrid.selectedElementName : "";
  }

  constructor(private creator: CreatorBase) {
    creator.addPluginTab("designer", this);
    const propertyGridModel = new PropertyGridModel(creator.survey as any as Base, creator);
    this.propertyGrid = new PropertyGridViewModel(propertyGridModel, creator);
    this.propertyGridTab = this.creator.sidebar.addTab("propertyGrid", "svc-property-grid", this.propertyGrid, () => {
      const result = [];
      if (!!this.propertyGrid.prevSelectionAction) {
        this.propertyGrid.prevSelectionAction.visible = this.createVisibleUpdater();
        result.push(this.propertyGrid.prevSelectionAction);
      }
      if (!!this.propertyGrid.nextSelectionAction) {
        this.propertyGrid.nextSelectionAction.visible = this.createVisibleUpdater();
        result.push(this.propertyGrid.nextSelectionAction);
      }
      if (!!this.propertyGrid.objectSelectionAction) {
        this.propertyGrid.objectSelectionAction.visible = this.createVisibleUpdater();
        result.push(this.propertyGrid.objectSelectionAction);
      }
      return result;
    });
    this.toolboxTab = this.creator.sidebar.addTab("toolbox", "svc-toolbox", creator);
    this.creator.onPropertyChanged.add((sender, options) => {
      if (options.name === "isMobileView") {
        this.updatePropertyGridTabCaption();
      }
      if (options.name === "toolboxLocation") {
        if (this.toolboxTab.visible && options.newVal !== "sidebar") {
          this.propertyGridTab.visible = true;
        }
        this.toolboxTab.visible = options.newVal === "sidebar";
      }
    });
    this.propertyGrid.onPropertyChanged.add((sender, options) => {
      if (options.name === "selectedElementName") {
        this.updatePropertyGridTabCaption();
      }
    });
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
    creator.registerShortcut("delete", {
      affectedTab: "designer",
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
    this.model = new TabDesignerViewModel(this.creator);
    this.creator.sidebar.activeTab = this.propertyGridTab.id;
    this.creator.focusElement(undefined, true);
  }
  public deactivate(): boolean {
    this.model = undefined;
    this.propertyGridTab.visible = false;
    return true;
  }
  public onDesignerSurveyPropertyChanged(obj: Base, propName: string): void {
    if (!!this.model) {
      this.model.onDesignerSurveyPropertyChanged(obj, propName);
    }
  }
  public update(): void {
    if (!this.model) return;
    this.model.initSurvey();
  }
  public createActions() {
    const items: Array<Action> = [];

    const toolboxAction = new Action({
      id: "svd-toolbox",
      iconName: "icon-toolbox",
      needSeparator: true,
      action: () => {
        if (!this.creator.showSidebar) {
          this.creator.setShowSidebar(true, true);
        }
        this.creator.sidebar.activeTab = "toolbox";
      },
      active: <any>new ComputedUpdater<boolean>(() => this.creator.sidebar.activeTab === "toolbox"),
      visible: <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(this.creator.activeTab === "designer", this.creator.showToolbox, this.creator.toolboxLocation === "sidebar");
      }),
      title: "Toolbox",
      showTitle: false
    });

    this.surveySettingsAction = new Action({
      id: "svd-settings",
      iconName: "icon-settings",
      needSeparator: <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(this.creator.toolboxLocation !== "sidebar", !this.creator.isMobileView);
      }),
      action: () => {
        this.selectSurvey();
        if (!this.creator.isMobileView) {
          this.creator.propertyGrid.getAllQuestions()[0].focus();
        }
      },
      active: this.isSettingsActive,
      pressed: this.isSettingsActive,
      visible: this.createVisibleUpdater(),
      locTitleName: "ed.surveySettings",
      locTooltipName: "ed.surveySettingsTooltip",
      showTitle: false
    });

    this.saveSurveyAction = new Action({
      id: "svd-save",
      iconName: "icon-save",
      action: () => this.creator.doSave(),
      active: false,
      enabled: false,
      visible: <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(this.creator.activeTab === "designer", this.creator.showSaveButton);
      }),
      locTitleName: "ed.saveSurvey",
      locTooltipName: "ed.saveSurveyTooltip",
      showTitle: false
    });

    this.previewAction = new Action({
      id: "svd-preview",
      iconName: "icon-preview",
      needSeparator: true,
      action: () => {
        this.creator.makeNewViewActive("test");
      },
      visible: this.createVisibleUpdater(),
      locTitleName: "ed.testSurvey",
      showTitle: false
    });

    items.push(this.saveSurveyAction);
    items.push(toolboxAction);
    items.push(this.surveySettingsAction);
    this.creator.onSelectedElementChanged.add((sender, options) => {
      this.surveySettingsAction.active = this.isSettingsActive;
      this.surveySettingsAction.pressed = this.isSettingsActive;
    });
    this.creator.onShowSidebarVisibilityChanged.add((sender, options) => {
      this.surveySettingsAction.active = this.isSettingsActive;
      this.surveySettingsAction.pressed = this.isSettingsActive;
    });
    return items;
  }
  public selectSurvey() {
    if (!this.creator.showSidebar) {
      this.creator.setShowSidebar(true, true);
    }
    this.creator.selectElement(this.creator.survey);
    this.creator.sidebar.activeTab = this.propertyGridTab.id;
  }

  public addFooterActions() {
    this.creator.footerToolbar.actions.push(this.surveySettingsAction);
    this.creator.footerToolbar.actions.push(this.previewAction);
  }
}