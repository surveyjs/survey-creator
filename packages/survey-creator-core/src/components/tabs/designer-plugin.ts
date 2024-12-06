import { Base, SurveyModel, Action, ComputedUpdater, CurrentPageChangedEvent } from "survey-core";
import { notShortCircuitAnd } from "../../utils/utils";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { PropertyGridModel } from "../../property-grid";
import { PropertyGridViewModel } from "../../property-grid/property-grid-view-model";
import { SidebarPageModel } from "../side-bar/side-bar-page-model";
import { TabDesignerViewModel } from "./designer";
import { DesignerStateManager } from "./designer-state-manager";
import { TabControlModel } from "../side-bar/tab-control-model";
import { pgTabIcons } from "../../property-grid/icons";
import { MenuButton } from "../../utils/actions";
import { editorLocalization } from "../../editorLocalization";
import { creatorThemeModelPropertyGridDefinition } from "../../creator-theme/creator-theme-model-definition";
import { CreatorThemeModel } from "../../creator-theme/creator-theme-model";
import { ICreatorTheme } from "../../creator-theme/creator-themes";
import { getPredefinedBackgoundColorsChoices, getPredefinedColorsItemValues } from "./themes";

export class TabDesignerPlugin implements ICreatorPlugin {
  public model: TabDesignerViewModel;
  public propertyGridViewModel: PropertyGridViewModel;
  private propertyGrid: PropertyGridModel;
  private _showOneCategoryInPropertyGrid: boolean = false;
  private propertyGridTab: SidebarPageModel;
  private toolboxTab: SidebarPageModel;
  private propertyGridPlaceholderPage: SidebarPageModel;
  private themeModel: CreatorThemeModel;
  private themePropertyGrid: PropertyGridModel;
  private themePropertyGridTab: SidebarPageModel;
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
  private get activePageIsPropertyGrid(): boolean {
    return this.creator.sidebar.activePage === this.propertyGridTab.id;
  }
  private createVisibleUpdater() {
    return <any>new ComputedUpdater<boolean>(() => {
      const activePage = this.creator.sidebar.activePage;
      return this.creator.activeTab === "designer" && activePage !== this.propertyGridPlaceholderPage.id;
    });
  }
  private updateTabControl() {
    if (this.showOneCategoryInPropertyGrid) {
      this.updateTabControlActions();
      this.creator.sidebar.sideAreaComponentName = "svc-tab-control";
      this.creator.sidebar.sideAreaComponentData = this.tabControlModel;
    } else {
      this.creator.sidebar.sideAreaComponentName = "";
      this.creator.sidebar.sideAreaComponentData = undefined;
    }
  }

  private updateHeaderComponent() {
    const activePage = this.creator.sidebar.activePage;
    if (this.showOneCategoryInPropertyGrid && this.activePageIsPropertyGrid) {
      this.creator.sidebar.header.componentName = "svc-side-bar-property-grid-header";
      this.creator.sidebar.header.componentData = this.propertyGridViewModel.objectSelectionAction;
    } else if (this.showOneCategoryInPropertyGrid && (activePage === this.propertyGridPlaceholderPage.id
      || activePage === this.themePropertyGridTab.id
    )) {
      this.creator.sidebar.header.componentName = "svc-side-bar-header";
      this.creator.sidebar.header.componentData = this.creator.sidebar.header;
    } else {
      this.creator.sidebar.header.componentName = "";
      this.creator.sidebar.header.componentData = undefined;
    }
  }

  private updateActivePage() {
    if (this.showOneCategoryInPropertyGrid) {
      this.setActivePage(this.creator.survey.pageCount ? this.propertyGridTab.id : this.propertyGridPlaceholderPage.id);
      this.updateHeaderComponent();
    } else {
      this.setPropertyGridIsActivePage();
    }
  }

  private setPropertyGridIsActivePage() {
    this.setActivePage(this.propertyGridTab.id);
  }

  private setActivePage(id: string): void {
    this.creator.sidebar.activePage = id;
    this.updateHeaderComponent();
  }

  public get showOneCategoryInPropertyGrid(): boolean {
    return this._showOneCategoryInPropertyGrid;
  }
  public set showOneCategoryInPropertyGrid(newValue) {
    if (this._showOneCategoryInPropertyGrid !== newValue) {
      this._showOneCategoryInPropertyGrid = newValue;
      this.creator.sidebar.hideSideBarVisibilityControlActions = newValue;
      this.propertyGrid.showOneCategoryInPropertyGrid = newValue;
      this.propertyGrid["setObj"](this.creator.selectedElement);
      if (this.creator.activeTab === "designer") {
        this.updateActivePage();
        this.updateTabControl();
      }
    }
  }

  private syncTheme(theme?: ICreatorTheme) {
    const newTheme = theme || this.themeModel.toJSON();
    this.creator.syncTheme(newTheme, this.themeModel.isLight);
  }
  private updatePredefinedColorChoices() {
    this.themePropertyGrid.survey.getAllQuestions().forEach(question => {
      if (question.name === "--sjs-special-background") {
        (question as any).choices = this.themeModel && this.themeModel.isLight ? getPredefinedBackgoundColorsChoices() : [];
      }
      if (question.name === "--sjs-primary-background-500" || question.name === "--sjs-secondary-background-500") {
        (question as any).choices = getPredefinedColorsItemValues(this.themeModel.isLight === false ? "dark" : "light");
      }
    });
  }
  updateThemeSettings() {
    if (this.creator.showCreatorThemeSettings) {
      this.themeModel.loadTheme(this.creator.creatorTheme);
      this.themePropertyGrid.obj = this.themeModel;
      this.themePropertyGrid.survey.onUpdatePanelCssClasses.add((_, options) => {
        options.cssClasses.panel.container += " spg-panel--group";
      });
      this.updatePredefinedColorChoices();
    }
  }
  setTheme() {
    if (this.creator.showCreatorThemeSettings) {
      this.themeModel.setTheme(this.creator.creatorTheme);
    }
  }
  private createCreatorThemeSettingsPage(creator: SurveyCreatorModel) {
    this.themeModel = new CreatorThemeModel();
    this.themePropertyGrid = new PropertyGridModel(undefined, creator, creatorThemeModelPropertyGridDefinition);
    this.themePropertyGrid.survey.css.root += "svc-creator-theme-settings";
    this.themePropertyGrid.showOneCategoryInPropertyGrid = true;
    this.themePropertyGrid.surveyInstanceCreatedArea = "designer-tab:creator-settings";
    const themePropertyGridViewModel = new PropertyGridViewModel(this.themePropertyGrid, creator);
    themePropertyGridViewModel.searchEnabled = false;
    this.themePropertyGridTab = this.creator.sidebar.addPage("creatorTheme", "svc-property-grid", themePropertyGridViewModel);
    this.themePropertyGridTab.caption = editorLocalization.getString("ed.creatorSettingTitle");
    this.themePropertyGridTab.deactivateCallback = () => {
      settingsAction.active = false;
    };
    this.themeModel.onThemeSelected.add((sender, options) => {
      this.syncTheme(options.theme);
      this.themePropertyGrid.survey.editingObj = undefined;
      this.themePropertyGrid.survey.editingObj = sender;
      this.updatePredefinedColorChoices();
    });
    this.themeModel.onThemePropertyChanged.add((sender, options) => {
      this.syncTheme();
    });

    const settingsAction = new MenuButton({
      id: "theme-settings",
      locTooltipName: "ed.creatorSettingTitle",
      iconName: "gear-24x24",
      iconSize: "auto",
      pressed: false,
      action: () => {
        this.creator.sidebar.expandSidebar();
        this.setActivePage(this.themePropertyGridTab.id);
        settingsAction.active = true;
      }
    });
    this.tabControlModel.bottomToolbar.setItems([settingsAction]);
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addPluginTab("designer", this);
    this.tabControlModel = new TabControlModel(this.creator.sidebar);
    this.propertyGrid = new PropertyGridModel(creator.survey as any as Base, creator, creator.getPropertyGridDefinition());
    this.propertyGridViewModel = new PropertyGridViewModel(this.propertyGrid, creator);
    this.propertyGridTab = this.creator.sidebar.addPage("propertyGrid", "svc-property-grid", this.propertyGridViewModel, () => {
      const result = [];
      if (!!this.propertyGridViewModel.prevSelectionAction) {
        this.propertyGridViewModel.prevSelectionAction.visible = this.createVisibleUpdater();
        result.push(this.propertyGridViewModel.prevSelectionAction);
      }
      if (!!this.propertyGridViewModel.nextSelectionAction) {
        this.propertyGridViewModel.nextSelectionAction.visible = this.createVisibleUpdater();
        result.push(this.propertyGridViewModel.nextSelectionAction);
      }
      if (!!this.propertyGridViewModel.objectSelectionAction) {
        this.propertyGridViewModel.objectSelectionAction.visible = this.createVisibleUpdater();
        result.push(this.propertyGridViewModel.objectSelectionAction);
      }
      return result;
    });

    creator.onSelectedElementChanged.add((sender, options) => {
      if (this.showOneCategoryInPropertyGrid && this.creator.activeTab === "designer") {
        this.setPropertyGridIsActivePage();
        this.updateTabControlActions();
      }
    });
    this.toolboxTab = this.creator.sidebar.addPage("toolbox", "svc-toolbox", creator);

    this.propertyGridPlaceholderPage = this.creator.sidebar.addPage("propertyGridPlaceholder", "svc-property-grid-placeholder", this.propertyGridViewModel);
    this.propertyGridPlaceholderPage.caption = "Survey Settings";

    if (this.creator.showCreatorThemeSettings) {
      this.createCreatorThemeSettingsPage(creator);
    }

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
      execute: () => {
        if (!this.creator.readOnly) {
          this.creator.deleteCurrentElement();
        }
      }
    });
  }

  private updateTabControlActions() {
    if (this.showOneCategoryInPropertyGrid) {
      const pgTabs = [];
      this.propertyGrid.survey.pages.forEach(p => {
        if (p.elements.length === 0) return;

        const action = new MenuButton({
          id: p.name,
          tooltip: p.title,
          iconName: pgTabIcons[p.name] || pgTabIcons["undefined"],
          iconSize: "auto",
          active: this.activePageIsPropertyGrid && p.name === this.propertyGrid.survey.currentPage.name,
          pressed: false,
          action: () => {
            this.creator.sidebar.expandSidebar();
            this.setPropertyGridIsActivePage();
            this.propertyGrid.survey.currentPage = p;
            this.propertyGridViewModel.objectSelectionAction.tooltip = p.title;
            pgTabs.forEach(i => i.active = false);
            action.active = true;
          }
        });
        pgTabs.push(action);
      });
      this.tabControlModel.topToolbar.setItems(pgTabs);
      this.propertyGridTab.deactivateCallback = () => {
        pgTabs.forEach(tab => tab.active = false);
      };

      this.propertyGrid.survey.onCurrentPageChanged.add((sender: SurveyModel, options: CurrentPageChangedEvent) => {
        pgTabs.forEach(action => {
          action.active = action.id === options.newCurrentPage.name;
        });
        this.propertyGridViewModel.objectSelectionAction.tooltip = options.newCurrentPage.title;
      });

      this.propertyGridViewModel.objectSelectionAction.tooltip = this.propertyGrid.survey.currentPage?.title;
    }
  }

  public activate(): void {
    this.model = new TabDesignerViewModel(this.creator);
    this.creator.sidebar.hideSideBarVisibilityControlActions = this.showOneCategoryInPropertyGrid;
    this.updateActivePage();
    this.updateTabControl();
    this.updateThemeSettings();
    this.creator.focusElement(undefined, true);
  }

  public deactivate(): boolean {
    if (this.model) {
      this.model.dispose();
    }
    this.model = undefined;
    this.propertyGridTab.visible = false;
    this.propertyGridPlaceholderPage.visible = false;
    if (!!this.themePropertyGridTab) this.themePropertyGridTab.visible = false;
    this.toolboxTab.visible = false;
    this.creator.sidebar.hideSideBarVisibilityControlActions = false;
    this.creator.sidebar.sideAreaComponentName = undefined;
    this.creator.sidebar.sideAreaComponentData = undefined;
    this.creator.sidebar.onPropertyChanged.clear();
    this.creator.sidebar.header.reset();
    this.creator.expandCollapseManager.clear();
    return true;
  }
  public onDesignerSurveyPropertyChanged(obj: Base, propName: string): void {
    if (!!this.model) {
      this.model.onDesignerSurveyPropertyChanged(obj, propName);
    }
  }
  public update(): void {
    if (!this.model) return;
    this.updateActivePage();
    this.model.initSurvey();
  }
  public createActions() {
    const items: Array<Action> = [];

    const toolboxAction = new Action({
      id: "svd-toolbox",
      iconName: "icon-toolbox",
      iconSize: "auto",
      needSeparator: true,
      action: () => {
        if (!this.creator.showSidebar) {
          this.creator.setShowSidebar(true, true);
        }
        this.setActivePage("toolbox");
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
      iconSize: "auto",
      needSeparator: <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(this.creator.toolboxLocation !== "sidebar", !this.creator.isMobileView);
      }),
      action: () => {
        this.selectSurvey();
        if (!this.creator.isMobileView) {
          this.creator.sidebar.executeOnExpand(() => {
            this.creator.propertyGrid.getAllQuestions()[0].focus();
          });
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
      iconSize: "auto",
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
      iconSize: "auto",
      visible: this.createVisibleUpdater(),
      active: true,
      locTitleName: "ed.designer",
      showTitle: false,
      action: () => { }
    });

    this.previewAction = new Action({
      id: "svd-preview",
      iconName: "icon-preview",
      iconSize: "auto",
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
    this.setPropertyGridIsActivePage();
  }

  public addFooterActions() {
    this.creator.footerToolbar.actions.push(this.designerAction);
    this.creator.footerToolbar.actions.push(this.previewAction);
    this.creator.footerToolbar.actions.push(this.surveySettingsAction);
  }
}