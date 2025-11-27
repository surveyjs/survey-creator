import { Base, SurveyModel, Action, ComputedUpdater, CurrentPageChangedEvent, PageVisibleChangedEvent, QuestionDropdownModel, ActionContainer } from "survey-core";
import { notShortCircuitAnd } from "../../utils/utils";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { PropertyGridModel } from "../../property-grid";
import { PropertyGridViewModel } from "../../property-grid/property-grid-view-model";
import { SidebarPageModel } from "../side-bar/side-bar-page-model";
import { TabDesignerViewModel } from "./designer";
import { DesignerStateManager } from "./designer-state-manager";
import { TabControlModel } from "../side-bar/tab-control-model";
import { MenuButton } from "../../utils/actions";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { creatorThemeModelPropertyGridDefinition } from "../../creator-theme/creator-theme-model-definition";
import { CreatorThemeModel } from "../../creator-theme/creator-theme-model";
import { ICreatorTheme, PredefinedCreatorThemes } from "../../creator-theme/creator-themes";
import { getPredefinedBackgoundColorsChoices, getPredefinedColorsItemValues } from "./themes";

export class TabDesignerPlugin implements ICreatorPlugin {
  public model: TabDesignerViewModel;
  public propertyGridViewModel: PropertyGridViewModel;
  private propertyGrid: PropertyGridModel;
  private _showOneCategoryInPropertyGrid: boolean = true;
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
  private prevActivePage: string;

  public static iconName = "icon-config";

  private get isSurveySelected(): boolean {
    return this.creator.isElementSelected(<any>this.creator.survey);
  }
  private get isSettingsActive(): boolean {
    const activePage = this.creator.sidebar.activePage;
    return notShortCircuitAnd(this.creator.showSidebar,
      this.isSurveySelected,
      activePage !== this.propertyGridPlaceholderPage.id);
  }
  private get activePageIsPropertyGrid(): boolean {
    return this.creator.sidebar.activePage === this.propertyGridTab.id;
  }
  private createSelectedUpdater() {
    return <any>new ComputedUpdater<boolean>(() => {
      return this.isSettingsActive;
    });
  }
  private createVisibleUpdater(additionalConditionFunc?: () => boolean) {
    return <any>new ComputedUpdater<boolean>(() => {
      let additionalCondition = true;
      if (!!additionalConditionFunc) {
        additionalCondition = additionalConditionFunc();
      }
      return this.creator.activeTab === "designer" && additionalCondition;
    });
  }
  private updateTabControl() {
    if (this.showOneCategoryInPropertyGrid) {
      this.creator.sidebar.sideAreaComponentName = "svc-tab-control";
      this.creator.sidebar.sideAreaComponentData = this.tabControlModel;
    } else {
      this.propertyGridViewModel.objectSelectionAction.tooltip = "";
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
      if (question.name === CreatorThemeModel.varColorUtilitySurface) {
        (question as any).choices = this.themeModel && this.themeModel.isLight ? getPredefinedBackgoundColorsChoices() : [];
      }
      if (question.name === CreatorThemeModel.varColorProjectBrand || question.name === CreatorThemeModel.varColorProjectAccent) {
        (question as any).choices = getPredefinedColorsItemValues(this.themeModel.isLight === false ? "dark" : "light");
      }
    });
  }
  updateThemeSettings() {
    if (this.creator.showCreatorThemeSettings) {
      this.themeModel.loadTheme(this.creator.creatorTheme);
      this.themePropertyGrid.obj = undefined;
      this.themePropertyGrid.obj = this.themeModel;
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
    this.themePropertyGrid.showOneCategoryInPropertyGrid = true;
    this.themePropertyGrid.surveyInstanceCreatedArea = "designer-tab:creator-settings";
    const themePropertyGridViewModel = new PropertyGridViewModel(this.themePropertyGrid, creator);
    themePropertyGridViewModel.onNewSurveyCreatedCallback = () => {
      this.onThemePropertyGridSurveyCreated();
    };
    themePropertyGridViewModel.searchEnabled = false;
    this.themePropertyGridTab = this.creator.sidebar.addPage("creatorTheme", "svc-property-grid", themePropertyGridViewModel);
    this.themePropertyGridTab.locTileName = "ed.creatorSettingTitle";
    this.themePropertyGridTab.activateCallback = () => {
      settingsAction.active = true;
    };
    this.themePropertyGridTab.deactivateCallback = () => {
      settingsAction.active = false;
    };
    this.themeModel.onThemeSelected.add((sender, options) => {
      this.syncTheme(options.theme);
      this.themePropertyGrid.survey.editingObj = undefined;
      this.themePropertyGrid.survey.editingObj = sender;
      this.updatePredefinedColorChoices();
      this.creator.onCreatorThemeSelected.fire(this.creator, options);
    });
    this.themeModel.onThemePropertyChanged.add((sender, options) => {
      this.syncTheme();
      this.creator.onCreatorThemePropertyChanged.fire(this.creator, options);
    });

    const settingsAction = new MenuButton({
      id: "theme-settings",
      locTooltipName: "ed.creatorSettingTitle",
      iconName: "gear-24x24",
      iconSize: "auto",
      pressed: false,
      visible: new ComputedUpdater(() => { return this.creator.showCreatorThemeSettings; }),
      action: () => {
        if (settingsAction.active) {
          this.closeCreatorThemeSettings();
        } else {
          this.openCreatorThemeSettings();
        }
      }
    });
    this.tabControlModel.bottomToolbar.setItems([settingsAction]);
  }
  private onThemePropertyGridSurveyCreated() {
    const survey = this.themePropertyGrid.survey;
    survey.css.root += " svc-creator-theme-settings";
    survey.onUpdatePanelCssClasses.add((_, options) => {
      options.cssClasses.panel.container += " spg-panel--group";
    });
    const themeChooser = survey.getQuestionByName("themeName") as QuestionDropdownModel;
    if (!!themeChooser) {
      themeChooser.choices = PredefinedCreatorThemes.map(theme => ({ value: theme, text: getLocString("creatortheme.names." + theme) }));
    }
    survey.runExpressions();
    this.updatePredefinedColorChoices();
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addTab({ name: "designer", plugin: this, iconName: TabDesignerPlugin.iconName });
    this.tabControlModel = new TabControlModel(this.creator.sidebar);
    this.tabControlModel.onTopToolbarItemCreated = (bar) => {
      this.setupPropertyGridTabActions(bar);
    };
    this.propertyGrid = new PropertyGridModel(undefined, creator, creator.getPropertyGridDefinition());
    this.showOneCategoryInPropertyGrid = creator.showOneCategoryInPropertyGrid;
    this.propertyGrid.showOneCategoryInPropertyGrid = this.showOneCategoryInPropertyGrid;
    this.propertyGrid.obj = creator.survey;
    this.propertyGridViewModel = new PropertyGridViewModel(this.propertyGrid, creator);
    this.propertyGridViewModel.onNewSurveyCreatedCallback = () => {
      this.updateTabControlActions();
    };
    this.propertyGridPlaceholderPage = this.creator.sidebar.addPage("propertyGridPlaceholder", "svc-property-grid-placeholder", this.propertyGridViewModel);
    this.propertyGridPlaceholderPage.locTileName = "ed.surveySettings";

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

    creator.onElementSelected.add((sender, options) => {
      if (this.showOneCategoryInPropertyGrid && this.creator.activeTab === "designer") {
        this.setPropertyGridIsActivePage();
        this.updateTabControlActions();
      }
    });
    this.toolboxTab = this.creator.sidebar.addPage("toolbox", "svc-toolbox", creator);

    if (this.creator.showCreatorThemeSettings) {
      this.createCreatorThemeSettingsPage(creator);
    }

    this.designerStateManager = new DesignerStateManager();
    this.designerStateManager.initForSurvey(this.creator.survey);
    this.creator.onSurveyInstanceCreated.add((s, o) => {
      if (o.area == "designer-tab") {
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
      if (this.tabControlModel.isTopToolbarCreated) {
        this.setupPropertyGridTabActions(this.tabControlModel.topToolbar);
      }
      this.propertyGrid.survey.onCurrentPageChanged.add((sender: SurveyModel, options: CurrentPageChangedEvent) => {
        const pgTabs = this.tabControlModel.topToolbar.actions;
        pgTabs.forEach(action => {
          action.active = action.id === options.newCurrentPage.name;
        });
        this.propertyGridViewModel.objectSelectionAction.title = options.newCurrentPage.title;
      });
      this.propertyGrid.survey.onPageVisibleChanged.add((sender: SurveyModel, options: PageVisibleChangedEvent) => {
        const action = this.tabControlModel.topToolbar.getActionById(options.page.name);
        if (!!action) {
          action.visible = options.page.isVisible;
        }
      });

      this.propertyGridViewModel.objectSelectionAction.title = this.propertyGrid.survey.currentPage?.title;
    }
  }
  private setupPropertyGridTabActions(topToolbar: ActionContainer<MenuButton>) {
    const pgTabs = this.getPropertyGridTabActions();
    topToolbar.setItems(pgTabs);
    this.propertyGridTab.activateCallback = () => {
      if (!this.propertyGrid.survey.currentPage) return;

      pgTabs.forEach(action => {
        action.active = action.id === this.propertyGrid.survey.currentPage.name;
      });
    };
    this.propertyGridTab.deactivateCallback = () => {
      pgTabs.forEach(tab => tab.active = false);
    };
  }
  private getPropertyGridTabActions() {
    const pgTabs = [];
    this.propertyGrid.survey.pages.forEach(p => {
      if (p.elements.length === 0) return;

      const action = new MenuButton({
        id: p.name,
        tooltip: p.title,
        iconName: p["iconName"],
        iconSize: "auto",
        active: this.activePageIsPropertyGrid && p.name === this.propertyGrid.survey.currentPage.name,
        pressed: false,
        visible: p.isVisible,
        action: () => {
          this.creator.sidebar.expandSidebar();
          this.setPropertyGridIsActivePage();
          this.propertyGrid.survey.currentPage = p;
          pgTabs.forEach(i => i.active = false);
          action.active = true;
        }
      });
      pgTabs.push(action);
    });
    return pgTabs;
  }

  public activate(): void {
    this.model = new TabDesignerViewModel(this.creator);
    this.model.surfaceScale = this.creator.survey.widthScale;
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
    if (!!this.themePropertyGridTab)this.themePropertyGridTab.visible = false;
    this.toolboxTab.visible = false;
    this.creator.sidebar.hideSideBarVisibilityControlActions = false;
    this.creator.sidebar.sideAreaComponentName = undefined;
    this.creator.sidebar.sideAreaComponentData = undefined;
    this.creator.sidebar.onPropertyChanged.clear();
    this.creator.sidebar.header.reset();
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
      css: "sv-action--svd-settings",
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
      active: this.createSelectedUpdater(),
      visible: this.createVisibleUpdater(() => {
        return this.creator.removeSidebar !== true;
      }),
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
        return notShortCircuitAnd(this.creator.activeTab === "designer" || this.creator.activeTab === "translation", this.creator.showSaveButton);
      }),
      locTitleName: "ed.saveSurvey",
      locTooltipName: "ed.saveSurveyTooltip",
      showTitle: false
    });

    this.designerAction = new Action({
      id: "svd-designer",
      css: "sv-action--svd-designer",
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
      css: "sv-action--svd-preview",
      iconName: "icon-preview",
      iconSize: "auto",
      action: () => {
        this.creator.switchTab(this.creator.showThemeTab ? "theme" : "preview");
      },
      visible: this.createVisibleUpdater(),
      locTitleName: "tabs.preview",
      showTitle: false
    });

    items.push(this.saveSurveyAction);
    items.push(toolboxAction);
    items.push(this.surveySettingsAction);
    this.creator.onElementSelected.add((sender, options) => {
      this.surveySettingsAction.active = this.isSettingsActive;
    });
    this.creator.onShowSidebarVisibilityChanged.add((sender, options) => {
      this.surveySettingsAction.active = this.isSettingsActive;
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
    this.creator.footerToolbar.actions.push(this.saveSurveyAction);
    this.creator.footerToolbar.actions.push(this.surveySettingsAction);
  }

  public openCreatorThemeSettings(): void {
    this.creator.sidebar.expandSidebar();
    this.prevActivePage = this.creator.sidebar.activePage;
    this.setActivePage(this.themePropertyGridTab.id);
  }

  public closeCreatorThemeSettings(): void {
    this.setActivePage(this.prevActivePage || this.propertyGridTab.id);
  }
}