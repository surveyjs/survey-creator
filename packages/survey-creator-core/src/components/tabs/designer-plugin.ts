import { Base, SurveyModel, Action, ComputedUpdater } from "survey-core";
import { notShortCircuitAnd } from "../../utils/utils";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { PropertyGridModel } from "../../property-grid";
import { PropertyGridViewModel } from "../../property-grid/property-grid-view-model";
import { SidebarPageModel } from "../side-bar/side-bar-page-model";
import { TabDesignerViewModel } from "./designer";
import { DesignerStateManager } from "./designer-state-manager";
import { getLocString } from "../../editorLocalization";
import { TabControlModel } from "../side-bar/tab-control-model";
import { pgTabIcons } from "../../property-grid/icons";

export class TabDesignerPlugin implements ICreatorPlugin {
  public model: TabDesignerViewModel;
  public propertyGrid: PropertyGridViewModel;
  private propertyGridTab: SidebarPageModel;
  private toolboxTab: SidebarPageModel;
  private surveySettingsAction: Action;
  private saveSurveyAction: Action;
  public previewAction: Action;
  private designerAction: Action;
  public designerStateManager: DesignerStateManager;
  private tabControlModel: TabControlModel;

  private get isSurveySelected(): boolean {
    return this.creator.isElementSelected(<any>this.creator.survey);
  }
  private get isSettingsActive(): boolean {
    return this.creator.showSidebar && this.isSurveySelected;
  }
  private createVisibleUpdater() {
    return <any>new ComputedUpdater<boolean>(() => { return this.creator.activeTab === "designer"; });
  }
  private setTabControl() {
    if (this.creator.showOneCategoryInPropertyGrid) {
      this.creator.sidebar.sideAreaComponentName = "svc-tab-control";
      this.creator.sidebar.sideAreaComponentData = this.tabControlModel;
    }
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addPluginTab("designer", this);
    this.tabControlModel = new TabControlModel(this.creator.sidebar);
    const propertyGridModel = new PropertyGridModel(creator.survey as any as Base, creator, creator.getPropertyGridDefinition());
    this.propertyGrid = new PropertyGridViewModel(propertyGridModel, creator);
    this.propertyGridTab = this.creator.sidebar.addPage("propertyGrid", "svc-property-grid", this.propertyGrid, () => {
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

    creator.onSelectedElementChanged.add((sender, options) => {
      if (creator.showOneCategoryInPropertyGrid) {
        const pgTabs = propertyGridModel.survey.pages.map(p => {
          const action = new Action({
            id: p.name,
            locTooltipName: "pe.tabs." + p.name,
            iconName: pgTabIcons[p.name] || pgTabIcons["specific"],
            action: () => {
              propertyGridModel.survey.currentPage = p;
              pgTabs.forEach(i => i.pressed = false);
              action.pressed = true;
            }
          });
          return action;
        });
        this.tabControlModel.topToolbar.setItems(pgTabs);
      }
    });
    this.toolboxTab = this.creator.sidebar.addPage("toolbox", "svc-toolbox", creator);
    this.designerStateManager = new DesignerStateManager();
    this.designerStateManager.initForSurvey(this.creator.survey);
    this.creator.onSurveyInstanceCreated.add((s, o) => {
      if (o.reason == "designer") {
        this.designerStateManager.initForSurvey(o.survey);
      }
    });
    this.creator.onPropertyChanged.add((sender, options) => {
      if (options.name === "toolboxLocation") {
        if (this.toolboxTab.visible && options.newVal !== "sidebar") {
          this.propertyGridTab.visible = true;
        }
        this.toolboxTab.visible = options.newVal === "sidebar";
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
    this.creator.sidebar.activePage = this.propertyGridTab.id;
    this.setTabControl();
    this.creator.focusElement(undefined, true);
  }

  public deactivate(): boolean {
    if (this.model) {
      this.model.dispose();
    }
    this.model = undefined;
    this.propertyGridTab.visible = false;
    this.creator.sidebar.sideAreaComponentName = undefined;
    this.creator.sidebar.sideAreaComponentData = undefined;
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
    this.setTabControl();
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
        this.creator.sidebar.activePage = "toolbox";
      },
      active: <any>new ComputedUpdater<boolean>(() => this.creator.sidebar.activePage === "toolbox"),
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
      action: () => this.creator.saveSurveyActionHandler(),
      active: false,
      enabled: false,
      visible: <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(this.creator.activeTab === "designer", this.creator.showSaveButton);
      }),
      locTitleName: "ed.saveSurvey",
      locTooltipName: "ed.saveSurveyTooltip",
      showTitle: false
    });

    this.designerAction = new Action({
      id: "svd-designer",
      iconName: "icon-config",
      visible: this.createVisibleUpdater(),
      active: true,
      locTitleName: "ed.designer",
      showTitle: false,
      action: () => { }
    });

    this.previewAction = new Action({
      id: "svd-preview",
      iconName: "icon-preview",
      action: () => {
        this.creator.makeNewViewActive(this.creator.showThemeTab ? "theme" : "test");
      },
      visible: this.createVisibleUpdater(),
      locTitleName: "tabs.preview",
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
    this.creator.sidebar.activePage = this.propertyGridTab.id;
  }

  public addFooterActions() {
    this.creator.footerToolbar.actions.push(this.designerAction);
    this.creator.footerToolbar.actions.push(this.previewAction);
    this.creator.footerToolbar.actions.push(this.surveySettingsAction);
  }
}