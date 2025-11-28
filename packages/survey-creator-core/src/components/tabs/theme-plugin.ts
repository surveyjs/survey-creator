import { Action, ComputedUpdater, surveyCss, defaultThemeName, ITheme, EventBase, Serializer, settings as surveySettings, Question, IElement, SurveyModel, PanelModelBase, PanelModel, QuestionHtmlModel, QuestionFileModel, QuestionDropdownModel, QuestionCompositeModel, ItemValue, QuestionSelectBase } from "survey-core";
import { settings } from "../../creator-settings";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { ThemeTabViewModel } from "./theme-builder";
import { SidebarPageModel } from "../side-bar/side-bar-page-model";
import { getPredefinedColorsItemValues, PredefinedThemes, Themes } from "./themes";
import { assign, notShortCircuitAnd } from "../../utils/utils";
import { saveToFileHandler } from "../../utils/html-element-utils";
import { PropertyGridModel } from "../../property-grid";
import { PropertyGridViewModel } from "../../property-grid/property-grid-view-model";
import { ThemeModel, findSuitableTheme, getThemeChanges, getThemeFullName, isThemeEmpty } from "./theme-model";
import { Switcher } from "../switcher/switcher";
import { themeModelPropertyGridDefinition } from "./theme-model-definition";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { TabControlModel } from "../side-bar/tab-control-model";
import { MenuButton } from "../../utils/actions";

/**
 * An object that enables you to modify, add, and remove UI themes and handle theme-related events. To access this object, use the [`themeEditor`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#themeEditor) property on a Survey Creator instance:
 *
 * ```js
 * const creatorOptions = { ... };
 * const creator = new SurveyCreator.SurveyCreator(creatorOptions);
 * creator.themeEditor.settingName = "value";
 *
 * // In modular applications:
 * import { SurveyCreatorModel } from "survey-creator-core";
 *
 * const creatorOptions = { ... };
 * const creator = new SurveyCreatorModel(creatorOptions);
 * creator.themeEditor.settingName = "value";
 * ```
 *
 * [Theme Editor Documentation](https://surveyjs.io/survey-creator/documentation/theme-editor (linkStyle))
 */
export class ThemeTabPlugin implements ICreatorPlugin {
  public static DefaultTheme = Themes["default-light"];
  private previewAction: Action;
  private invisibleToggleAction: Action;
  private testAgainAction: Action;
  private designerAction: Action;
  private prevPageAction: Action;
  private nextPageAction: Action;
  private themeSettingsAction: Action;
  private saveThemeAction: Action;
  private resetTheme: Action;
  private importAction: Action;
  private exportAction: Action;
  private undoAction: Action;
  private redoAction: Action;
  private advancedModeSwitcher: Switcher;
  private inputFileElement: HTMLInputElement;
  private simulatorCssClasses: any = surveyCss[defaultThemeName];
  private _availableThemes = [].concat(PredefinedThemes);
  private _showOneCategoryInPropertyGrid: boolean = true;
  private _advancedModeValue = false;

  public static iconName = "icon-theme";

  private tabControlModel: TabControlModel;
  public propertyGrid: PropertyGridModel;
  private propertyGridTab: SidebarPageModel;
  public model: ThemeTabViewModel;
  public themeModel: ThemeModel;

  public get showOneCategoryInPropertyGrid(): boolean {
    return this._showOneCategoryInPropertyGrid;
  }
  public set showOneCategoryInPropertyGrid(newValue) {
    if (this._showOneCategoryInPropertyGrid !== newValue) {
      this._showOneCategoryInPropertyGrid = newValue;
      this.creator.sidebar.hideSideBarVisibilityControlActions = newValue;
      this.updateAdvancedModeQuestion(newValue);
      this.propertyGrid.showOneCategoryInPropertyGrid = newValue;
      this.propertyGrid["setObj"](this.creator.selectedElement);
      if (this.creator.activeTab === "theme") {
        this.updateTabControl();
      }
    }
  }

  private updateAdvancedModeQuestion(availableQuestion: boolean): void {
    const advancedModeQuestion = this.propertyGrid.survey.getQuestionByName("advancedMode");
    if (advancedModeQuestion) {
      advancedModeQuestion.value = this._advancedModeValue;
      if (!availableQuestion) {
        advancedModeQuestion.visible = false;
      } else {
        advancedModeQuestion.visible = advancedModeQuestion.visible && !this.creator.isMobileView;
      }
    }
  }
  private createVisibleUpdater() {
    return <any>new ComputedUpdater<boolean>(() => { return this.creator.activeTab === "theme"; });
  }

  private createAppearanceAdvancedModeAction(): void {
    const advancedMode = new Switcher({
      id: "advancedMode",
      component: "svc-switcher",
      ariaRole: "checkbox",
      css: "sv-theme-group_title-action",
      title: getLocString("theme.advancedMode"),
      visible: !this.creator.isMobileView,
      action: () => {
        advancedMode.checked = !advancedMode.checked;
        if (!!this.propertyGrid.survey.getQuestionByName("advancedMode")) {
          this.propertyGrid.survey.getQuestionByName("advancedMode").value = advancedMode.checked;
        }
      }
    });
    advancedMode.checked = this._advancedModeValue;
    this.advancedModeSwitcher = advancedMode;
  }

  private addSubGroupTitle(panel: PanelModel, titleId: string) {
    if (!!panel.getQuestionByName(titleId)) return;

    const question = Serializer.createClass("html") as QuestionHtmlModel;
    question.fromJSON({
      name: titleId,
      visibleIf: "{advancedMode} = true",
      html: `<div class='spg-theme-group-caption'>${getLocString(titleId)}</div>`
    });
    panel.addElement(question);
  }
  private updateSubGroups(survey: SurveyModel) {
    ["appearancelines", "appearanceinput", "appearancequestion", "appearancepage", "appearanceprimarycolor"].forEach(panelName => this.setVisibleIf(panelName, true));
    ["appearancecolor", "appearancefont", "appearanceother"].forEach(panelName => this.setVisibleIf(panelName, false));

    this.addSubGroupTitle(survey.getPanelByName("appearanceprimarycolor"), "theme.pageTitle");
    this.addSubGroupTitle(survey.getPanelByName("appearancepage"), "theme.questionTitle");
    this.addSubGroupTitle(survey.getPanelByName("appearancequestion"), "theme.editorPanel");
    this.addSubGroupTitle(survey.getPanelByName("appearanceinput"), "theme.lines");
  }
  private updatePropertyGridEditorsAvailability() {
    const simulatorSurvey = this.model.survey;
    const page = this.propertyGrid.survey.pages[0];
    const header = this.showOneCategoryInPropertyGrid ? this.propertyGrid.survey.getPageByName("header") : page?.getElementByName("header") as PanelModel;
    if (header && header.elements.length > 0) {
      const headerViewContainer = (header.elements[0] as QuestionCompositeModel).contentPanel;
      this.setCoverPropertiesFromSurvey(headerViewContainer, simulatorSurvey);
    }
    const pageTitleQuestion = this.propertyGrid.survey.getQuestionByName("pageTitle");
    //TODO replace vs
    //let pageElements = simulatorSurvey.pages;
    let pageElements: Array<any> = simulatorSurvey.isSinglePage ? simulatorSurvey.visiblePages[0].elements : simulatorSurvey.pages;
    if (!!pageTitleQuestion) {
      pageTitleQuestion.readOnly = !pageElements.some(p => !!p.title);
    }
    const pageDescriptionQuestion = this.propertyGrid.survey.getQuestionByName("pageDescription");
    if (pageDescriptionQuestion) {
      pageDescriptionQuestion.readOnly = !pageElements.some(p => !!p.description);
    }
  }
  private updatePropertyGridColorEditorWithPredefinedColors() {
    const page = this.propertyGrid.survey.pages[0];
    const header = page?.getElementByName("header") as PanelModel;
    if (header && header.elements.length > 0) {
      const headerViewContainer = (header.elements[0] as QuestionCompositeModel).contentPanel;
      const headerBackgroundQuestion = headerViewContainer.getQuestionByName("backgroundColor") as QuestionSelectBase;
      if (!!headerBackgroundQuestion) {
        headerBackgroundQuestion.choices = getPredefinedColorsItemValues(this.themeModel.colorPalette);
      }
    }

    this.propertyGrid.survey.getAllQuestions().forEach(question => {
      if (["color", "coloralpha"].indexOf(question.getType()) !== -1) {
        (question as any).choices = getPredefinedColorsItemValues(this.themeModel.colorPalette);
      }
    });
  }

  private _setPGEditorPropertyValue(editor: Question, propertyName: string, value): void {
    if (!!editor) {
      editor[propertyName] = value;
    }
  }

  private setCoverPropertiesFromSurvey(panel, survey) {
    this._setPGEditorPropertyValue(panel.getQuestionByName("headerView"), "value", survey.headerView);
    this._setPGEditorPropertyValue(panel.getQuestionByName("logoPosition"), "value", survey.logoPosition);

    this._setPGEditorPropertyValue(panel.getQuestionByName("surveyTitle"), "readOnly", !survey.hasTitle);
    this._setPGEditorPropertyValue(panel.getQuestionByName("surveyDescription"), "readOnly", !survey.hasDescription);

    this._setPGEditorPropertyValue(panel.getQuestionByName("headerTitle"), "readOnly", !survey.hasTitle);
    this._setPGEditorPropertyValue(panel.getQuestionByName("headerDescription"), "readOnly", !survey.hasDescription);

    this._setPGEditorPropertyValue(panel.getQuestionByName("logoPositionX"), "readOnly", !survey.logo);
    this._setPGEditorPropertyValue(panel.getQuestionByName("logoPositionY"), "readOnly", !survey.logo);
    this._setPGEditorPropertyValue(panel.getQuestionByName("logoPosition"), "readOnly", !survey.logo);

    this._setPGEditorPropertyValue(panel.getQuestionByName("titlePositionX"), "readOnly", !survey.title);
    this._setPGEditorPropertyValue(panel.getQuestionByName("titlePositionY"), "readOnly", !survey.title);

    this._setPGEditorPropertyValue(panel.getQuestionByName("descriptionPositionX"), "readOnly", !survey.description);
    this._setPGEditorPropertyValue(panel.getQuestionByName("descriptionPositionY"), "readOnly", !survey.description);

    if (survey.showTOC) {
      const inheritWidthFrom = panel.getQuestionByName("inheritWidthFrom");
      this._setPGEditorPropertyValue(inheritWidthFrom, "value", "container");
      this._setPGEditorPropertyValue(inheritWidthFrom, "visible", false);
    }
  }

  private updateVisibilityOfPropertyGridGroups() {
    const page = this.propertyGrid.survey.pages[0];
    const header = page?.getElementByName("header");
    if (header) {
      header.visible = !this.creator.isMobileView;
    }
    if (this.advancedModeSwitcher) {
      this.advancedModeSwitcher.visible = !this.creator.isMobileView;
    }
  }
  private creatorPropertyChanged = (sender, options) => {
    if (options.name === "isMobileView") {
      this.updateVisibilityOfPropertyGridGroups();
    }
  };
  private setVisibleIf(panelName: string, visibilityValue: boolean) {
    const panel = this.propertyGrid.survey.getPanelByName(panelName);
    if (!!panel) {
      panel.visibleIf = `{advancedMode} = ${visibilityValue}`;
    }
  }

  private updateTabControl() {
    if (this.showOneCategoryInPropertyGrid) {
      this.updateTabControlActions();
      this.creator.sidebar.sideAreaComponentName = "svc-tab-control";
      this.creator.sidebar.sideAreaComponentData = this.tabControlModel;
      this.creator.sidebar.header.componentName = "svc-side-bar-header";
      this.creator.sidebar.header.componentData = this.creator.sidebar.header;
    } else {
      this.creator.sidebar.sideAreaComponentName = "";
      this.creator.sidebar.sideAreaComponentData = undefined;
      this.creator.sidebar.header.componentName = "";
      this.creator.sidebar.header.componentData = undefined;
    }
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addTab({ name: "theme", plugin: this, iconName: ThemeTabPlugin.iconName });
    this.simulatorCssClasses = surveyCss[defaultThemeName];
    this.tabControlModel = new TabControlModel(this.creator.sidebar);
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
    this.propertyGrid = new PropertyGridModel(undefined, creator, themeModelPropertyGridDefinition);
    this.propertyGrid.surveyInstanceCreatedArea = "theme-tab:property-grid";
    this.showOneCategoryInPropertyGrid = creator.showOneCategoryInPropertyGrid;
    this.propertyGrid.showOneCategoryInPropertyGrid = this.showOneCategoryInPropertyGrid;
    const propertyGridViewModel = new PropertyGridViewModel(this.propertyGrid, creator);
    this.propertyGridTab = this.creator.sidebar.addPage("theme", "svc-property-grid", propertyGridViewModel);
    this.propertyGridTab.locTileName = "ed.themePropertyGridTitle";
    this.themeModel = new ThemeModel();

    creator.registerShortcut("undo_theme", {
      name: "undo",
      affectedTab: "theme",
      hotKey: {
        ctrlKey: true,
        keyCode: 90,
      },
      macOsHotkey: {
        keyCode: 90,
      },
      execute: () => this.undo()
    });
    creator.registerShortcut("redo_theme", {
      name: "redo",
      affectedTab: "theme",
      hotKey: {
        ctrlKey: true,
        keyCode: 89,
      },
      macOsHotkey: {
        keyCode: 89,
      },
      execute: () => this.redo()
    });

    creator.onPropertyChanged.add(this.creatorPropertyChanged);
  }

  public previewDevice: string = "desktop";

  public activate(): void {
    updateThemeEditorsDefaultFontFamily();
    this.model = new ThemeTabViewModel(this.creator, this.simulatorCssClasses);
    this.model.simulator.device = this.previewDevice;
    this.themeModel.initialize(this.creator.theme, this.creator.survey, this.creator);
    this.creator.sidebar.hideSideBarVisibilityControlActions = this.showOneCategoryInPropertyGrid;
    this.update();
    this.propertyGrid.showOneCategoryInPropertyGrid = this.showOneCategoryInPropertyGrid;
    this.propertyGrid.survey.onOpenFileChooser.clear();
    this.propertyGrid.obj = undefined;
    this.propertyGrid.obj = this.themeModel;
    this.initPropertyGridSurvey();
    this.creator.sidebar.activePage = this.propertyGridTab.id;
    this.propertyGridTab.visible = true;
    this.updateTabControl();
    this.expandCategoryIfNeeded();
  }

  private initPropertyGridSurvey() {
    this.propertyGrid.survey.readOnly = false;
    this.propertyGrid.survey.getAllQuestions().forEach(q => q.readOnly = false);
    this.onAvailableThemesChanged(this.availableThemes);
    this.updateAllowModifyTheme();
    this.updateAdvancedModeQuestion(this.showOneCategoryInPropertyGrid);
    const themeBuilderCss = JSON.parse(JSON.stringify(propertyGridCss));
    themeBuilderCss.root += " spg-theme-builder-root";

    if (this.showOneCategoryInPropertyGrid) {
      themeBuilderCss.root += " spg-root--one-category";
      themeBuilderCss.page.root += " spg-panel__content";
    }
    this.propertyGrid.survey.css = themeBuilderCss;
    this.updateSubGroups(this.propertyGrid.survey);

    this.propertyGrid.survey.onGetPanelTitleActions.add((sender, opt) => {
      if (opt.panel && opt.panel.name == "appearance") {
        this.createAppearanceAdvancedModeAction();
        opt.titleActions.push(this.advancedModeSwitcher);
      }
    });
    this.propertyGrid.survey.onOpenFileChooser.add((_, options) => {
      const context: any = {};
      assign(context, (options as any).context, { element: this.themeModel, elementType: "theme" });
      if (options.element) {
        const question = options.element as QuestionFileModel;
        context.propertyName = question.name;
        if (question?.parent?.parent?.name === "settings") {
          context.elementType = "header";
          context.element = context.element.header;
        }
      }
      this.creator.chooseFiles(options.input, options.callback, context as any);
    });
    this.propertyGrid.survey.onUpdatePanelCssClasses.add((sender, options) => {
      if (options.panel.hasParent) {
        const parent = (options.panel.parent ?? options.panel.parentQuestion);
        if (!parent || parent.hasParent && !(parent.name === "settings" || parent.parentQuestion?.name === "settings")) {
          options.cssClasses.panel.container = "spg-panel-group";
          options.cssClasses.panel.content = "spg-panel-group__content";
        } else {
          options.cssClasses.panel.container = "spg-nested-panel";
          options.cssClasses.panel.content = "spg-nested-panel__content";
        }
      } else if (this.showOneCategoryInPropertyGrid && options.panel.parent?.isPage) {
        options.cssClasses.panel.container = "spg-panel-by-page";
        options.cssClasses.panel.content = "spg-panel-by-page__content";

        if (options.panel.name === "appearanceother") {
          options.cssClasses.panel.container += " spg-panel--hidden-border";
        }
        if (options.panel.name === "appearanceadvancedmode") {
          options.cssClasses.panel.container += " spg-panel--hidden-border spg-panel--padding";
        }
      }
    });

    this.updatePropertyGridEditorsAvailability();
    this.updateVisibilityOfPropertyGridGroups();
    this.updatePropertyGridColorEditorWithPredefinedColors();
  }

  private expandCategoryIfNeeded() {
    if (!this.model.survey.isEmpty) {
      this.propertyGrid.expandCategoryIfNeeded();
    }
  }
  private updateTabControlActions() {
    if (this.showOneCategoryInPropertyGrid) {
      const pgTabs = this.propertyGrid.survey.pages.map(p => {
        const action = new MenuButton({
          id: p.name,
          tooltip: p.title,
          iconName: p["iconName"],
          iconSize: "auto",
          active: p.name === this.propertyGrid.survey.currentPage.name,
          pressed: false,
          action: () => {
            this.creator.sidebar.expandSidebar();
            this.propertyGrid.survey.currentPage = p;
            this.creator.sidebar.header.title = p.title;
            pgTabs.forEach(i => i.active = false);
            action.active = true;
          }
        });
        return action;
      });
      this.tabControlModel.topToolbar.setItems(pgTabs);
      this.creator.sidebar.header.title = this.propertyGrid.survey.currentPage.title;
      this.creator.sidebar.header.subTitle = this.propertyGridTab.caption;
    }
  }

  public update(): void {
    if (!this.model) return;
    this.model.simulator.landscape = this.creator.previewOrientation != "portrait";
    this.model.testAgainAction = this.testAgainAction;
    this.model.prevPageAction = this.prevPageAction;
    this.model.nextPageAction = this.nextPageAction;
    const options = {
      showPagesInTestSurveyTab: this.creator.showPagesInTestSurveyTab,
    };
    this.model.initialize(this.creator.JSON, options);
    this.updateSimulatorTheme(this.creator.theme);

    if (this.creator.showInvisibleElementsInTestSurveyTab) {
      this.invisibleToggleAction.active = this.model.showInvisibleElements;
      this.invisibleToggleAction.visible = this.model.isRunning;
    }

    this.updateUndeRedoActions();
    this.themeModel.undoRedoManager.canUndoRedoCallback = () => {
      this.updateUndeRedoActions();
    };

    this.model.show();
    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "isRunning") {
        this.invisibleToggleAction && (this.invisibleToggleAction.visible = this.model.isRunning);
        this.testAgainAction.visible = !this.model.isRunning;
      }
    });
    this.themeModel.onThemeSelected.add((sender, options) => {
      this.syncTheme(options.theme);
      this.resetTheme.enabled = getThemeFullName(sender.defaultSessionTheme) !== getThemeFullName(options.theme);
      this.saveThemeAction.enabled = true;
      this.onThemeSelected.fire(this, options);
      if (this.creator.autoSaveEnabled) {
        this.processAutoSave();
      }
      this.propertyGrid.survey.editingObj = undefined;
      this.propertyGrid.survey.editingObj = sender;
      this.updateAllowModifyTheme();
      this.updatePropertyGridColorEditorWithPredefinedColors();
    });
    this.themeModel.onThemePropertyChanged.add((sender, options) => {
      this.syncTheme(this.themeModel.toJSON());
      if (options.name == "--sjs-base-unit") {
        this.model.survey.triggerResponsiveness(true);
      }
      if (options.name == "logoPosition") {
        this.creator.survey.logoPosition = options.value;
        this.model.survey.logoPosition = options.value;
      }
      this.resetTheme.enabled = true;
      this.saveThemeAction.enabled = true;
      this.onThemePropertyChanged.fire(this, options);
      if (this.creator.autoSaveEnabled) {
        this.processAutoSave();
      }
    });
    this.themeModel.onAllowModifyTheme.add((sender, options) => {
      this.onAllowModifyTheme.fire(this, options);
    });

    this.resetTheme.enabled = getThemeFullName(this.themeModel.defaultSessionTheme) !== getThemeFullName(this.creator.theme) || this.isModified;
  }
  private updateAllowModifyTheme() {
    const opt: { theme: ITheme, allow: boolean } = { theme: this.themeModel, allow: !this.creator.readOnly };
    this.onAllowModifyTheme.fire(this, opt);

    this.propertyGrid.survey.getAllQuestions().forEach(q => {
      if (["themeName", "colorPalette", "isPanelless"].indexOf(q.name) === -1) {
        q.readOnly = this.creator.onIsPropertyReadOnlyCallback(this.themeModel, this.themeModel.getPropertyByName(q.name), !opt.allow, undefined, undefined, false);
      }
    });
  }
  public deactivate(): boolean {
    if (this.model) {
      this.previewDevice = this.model.simulator.device;
      this.simulatorCssClasses = this.model.survey.css;
      this.model.onPropertyChanged.clear();
      this.themeModel.onThemeSelected.clear();
      this.themeModel.onThemePropertyChanged.clear();
      this.themeModel.onAllowModifyTheme.clear();
      this.model.onSurveyCreatedCallback = undefined;
      this.model.dispose();
      this.model = undefined;
      this.creator.sidebar.hideSideBarVisibilityControlActions = false;
    }
    this._advancedModeValue = !!this.propertyGrid.survey.getQuestionByName("advancedMode")?.value;
    this.creator.sidebar.sideAreaComponentName = undefined;
    this.creator.sidebar.sideAreaComponentData = undefined;
    this.creator.sidebar.header.reset();
    this.propertyGridTab.visible = false;
    this.testAgainAction.visible = false;
    this.invisibleToggleAction && (this.invisibleToggleAction.visible = false);
    return true;
  }

  public saveToFileHandler = saveToFileHandler;

  public exportToFile(fileName: string) {
    const themeCopy = JSON.parse(JSON.stringify(this.themeModel.toJSON()));
    const themeData = JSON.stringify(themeCopy, null, 4);
    const themeBlob = new Blob([themeData], { type: "application/json" });
    this.saveToFileHandler(fileName, themeBlob);
  }
  public importFromFile(file: File, callback?: (theme: ITheme) => void) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const theme: ITheme = JSON.parse(fileReader.result as string);
      if (!!this.themeModel) {
        this.themeModel.setTheme(theme);
      }
      callback && callback(theme);
    };
    fileReader.readAsText(file);
  }

  public createActions(): Array<Action> {
    const items: Array<Action> = [];

    this.designerAction = new Action({
      id: "svd-designer",
      css: "sv-action--svd-designer",
      iconName: "icon-config",
      iconSize: "auto",
      action: () => { this.creator.switchTab("designer"); },
      visible: this.createVisibleUpdater(),
      locTitleName: "ed.designer",
      showTitle: false
    });

    this.prevPageAction = new Action({
      id: "prevPage",
      css: "sv-action--prevPage",
      iconName: "icon-arrow-left_16x16",
      title: getLocString("ts.prevPage"),
      showTitle: false,
      iconSize: "auto",
      needSeparator: <any>new ComputedUpdater<boolean>(() => {
        return this.creator.isMobileView;
      }),
      visible: false
    });

    this.nextPageAction = new Action({
      id: "nextPage",
      css: "sv-action--nextPage",
      iconName: "icon-arrow-right_16x16",
      showTitle: false,
      title: getLocString("ts.nextPage"),
      iconSize: "auto",
      visible: false
    });

    this.previewAction = new Action({
      id: "svd-preview",
      css: "sv-action--svd-preview",
      iconName: "icon-preview",
      iconSize: "auto",
      active: true,
      visible: this.createVisibleUpdater(),
      locTitleName: "tabs.preview",
      showTitle: false,
      action: () => { }
    });

    this.testAgainAction = new Action({
      id: "testSurveyAgain",
      visible: false,
      iconSize: "auto",
      locTitleName: "ed.testSurveyAgain",
      action: () => {
        this.model.testAgain();
      }
    });

    this.undoAction = new Action({
      id: "action-undo-theme",
      iconName: "icon-undo",
      iconSize: "auto",
      locTitleName: "ed.undo",
      showTitle: false,
      visible: this.createVisibleUpdater(),
      action: () => this.undo()
    });
    this.redoAction = new Action({
      id: "action-redo-theme",
      iconName: "icon-redo",
      iconSize: "auto",
      locTitleName: "ed.redo",
      showTitle: false,
      visible: this.createVisibleUpdater(),
      action: () => this.redo()
    });
    items.push(this.undoAction);
    items.push(this.redoAction);

    this.saveThemeAction = new Action({
      id: "svd-save-theme",
      iconName: "icon-save",
      iconSize: "auto",
      action: () => {
        this.creator.saveThemeActionHandler();
        this.saveThemeAction.enabled = false;
      },
      active: false,
      enabled: false,
      visible: <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(this.creator.activeTab === "theme", this.creator.showSaveButton);
      }),
      locTitleName: "ed.saveTheme",
      locTooltipName: "ed.saveThemeTooltip",
      showTitle: false
    });
    items.push(this.saveThemeAction);

    this.resetTheme = new Action({
      id: "svc-reset-theme",
      css: "sv-action--reset-theme",
      iconName: "icon-reset",
      iconSize: "auto",
      locTitleName: "ed.themeResetButton",
      locTooltipName: "ed.themeResetButton",
      mode: "small",
      visible: this.createVisibleUpdater(),
      action: () => {
        surveySettings.confirmActionAsync(getLocString("ed.themeResetConfirmation"),
          (confirm) => {
            if (confirm) {
              this.propertyGrid.survey.onOpenFileChooser.clear();
              this.propertyGrid.obj = undefined;
              this.themeModel.resetTheme();
              this.propertyGrid.obj = this.themeModel;
              this.initPropertyGridSurvey();
              this.updateTabControl();
            }
          },
          {
            applyTitle: getLocString("ed.themeResetConfirmationOk"),
            locale: editorLocalization.currentLocale,
            cssClass: "sv-popup--confirm svc-creator-popup"
          }
        );
      }
    });
    items.push(this.resetTheme);

    this.themeSettingsAction = new Action({
      id: "svc-theme-settings",
      iconName: "icon-theme",
      iconSize: "auto",
      action: () => {
        if (!this.creator.showSidebar) {
          this.creator.setShowSidebar(true, true);
        }
      },
      visible: <any>new ComputedUpdater<boolean>(() => {
        const isMobileView = this.creator.isMobileView;
        const isShowOneCategoryInPropertyGrid = this.creator.showOneCategoryInPropertyGrid;
        return this.creator.activeTab === "theme" && (isMobileView || !isShowOneCategoryInPropertyGrid);
      }),
      active: <any>new ComputedUpdater<boolean>(() => this.creator.showSidebar),
      pressed: <any>new ComputedUpdater<boolean>(() => this.creator.showSidebar),
      locTitleName: "ed.themeSettings",
      locTooltipName: "ed.themeSettingsTooltip",
      showTitle: false
    });
    items.push(this.themeSettingsAction);

    this.importAction = new Action({
      id: "svc-theme-import",
      iconName: "icon-load",
      iconSize: "auto",
      locTitleName: "ed.themeImportButton",
      locTooltipName: "ed.themeImportButton",
      visible: this.createVisibleUpdater(),
      mode: "small",
      component: "sv-action-bar-item",
      needSeparator: true,
      action: () => {
        if (!document) return;
        if (!this.inputFileElement) {
          this.inputFileElement = document.createElement("input");
          this.inputFileElement.type = "file";
          this.inputFileElement.style.display = "none";
          this.inputFileElement.onchange = () => {
            if (this.inputFileElement.files.length < 1) return;
            this.importFromFile(this.inputFileElement.files[0]);
            this.inputFileElement.value = "";
          };
        }
        this.inputFileElement.click();
      }
    });
    items.push(this.importAction);

    this.exportAction = new Action({
      id: "svc-theme-export",
      iconName: "icon-download",
      iconSize: "auto",
      locTitleName: "ed.themeExportButton",
      locTooltipName: "ed.themeExportButton",
      visible: this.createVisibleUpdater(),
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.exportToFile(settings.themeEditor.exportFileName);
      }
    });
    items.push(this.exportAction);

    if (this.creator.showInvisibleElementsInTestSurveyTab) {
      this.invisibleToggleAction = new Action({
        id: "showInvisible",
        css: "sv-action--showInvisible",
        iconName: "icon-invisible-items",
        iconSize: "auto",
        mode: "small",
        locTitleName: "ts.showInvisibleElements",
        visible: false,
        action: () => {
          this.model.showInvisibleElements = !this.model.showInvisibleElements;
          this.invisibleToggleAction.active = !this.invisibleToggleAction.active;
          this.invisibleToggleAction.title = getLocString(!this.model.showInvisibleElements ? "ts.showInvisibleElements" : "ts.hideInvisibleElements");
        }
      });
    }

    return items;
  }

  public undo() {
    const _undoRedoManager = this.model && this.themeModel.undoRedoManager;
    if (!_undoRedoManager) return;
    _undoRedoManager.suspend();
    if (_undoRedoManager.canUndo()) {
      _undoRedoManager.undo();
    }
    _undoRedoManager.resume();
  }

  public redo() {
    const _undoRedoManager = this.model && this.themeModel.undoRedoManager;
    if (!_undoRedoManager) return;
    _undoRedoManager.suspend();
    if (_undoRedoManager.canRedo()) {
      _undoRedoManager.redo();
    }
    _undoRedoManager.resume();
  }

  private updateUndeRedoActions() {
    const _undoRedoManager = this.themeModel.undoRedoManager;
    this.undoAction.enabled = _undoRedoManager.canUndo();
    this.redoAction.enabled = _undoRedoManager.canRedo();
  }

  public addFooterActions() {
    this.creator.footerToolbar.actions.push(this.designerAction);
    this.creator.footerToolbar.actions.push(this.previewAction);
    this.creator.footerToolbar.actions.push(this.prevPageAction);
    this.creator.footerToolbar.actions.push(this.nextPageAction);
    this.invisibleToggleAction && (this.creator.footerToolbar.actions.push(this.invisibleToggleAction));
    this.creator.footerToolbar.actions.push(this.themeSettingsAction);
  }

  private syncTheme(theme: ITheme) {
    const newTheme = theme || this.themeModel.toJSON();
    this.creator.theme = newTheme;
    this.updateSimulatorTheme(newTheme);
  }
  private updateSimulatorTheme(theme: ITheme) {
    if (!!this.model.survey) {
      if (isThemeEmpty(theme)) {
        const preferredTheme = findSuitableTheme(undefined, this.creator.preferredColorPalette, undefined, undefined);
        this.model.survey.applyTheme(preferredTheme || this.themeModel.toJSON());
      } else {
        this.model.survey.applyTheme(theme);
      }
    }
  }

  private _saveThemeFuncValue: (
    no: number,
    onSaveCallback: (no: number, isSuccess: boolean) => void
  ) => void;
  /**
   * A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#autoSaveEnabled) is triggered to save a theme JSON object.
   *
   * For more information, refer to the [Save and Load Custom Themes](https://surveyjs.io/survey-creator/documentation/theme-editor#save-and-load-custom-themes) help topic.
   */
  public get saveThemeFunc() {
    return this._saveThemeFuncValue;
  }
  public set saveThemeFunc(value: any) {
    this._saveThemeFuncValue = value;
  }

  private autoSaveTimerId = null;
  protected processAutoSave() {
    let saveThemeFunc = this.saveThemeFunc;
    if (!saveThemeFunc && this.creator.saveThemeFunc) {
      saveThemeFunc = () => this.creator.saveTheme();
    }
    if (!saveThemeFunc) {
      return;
    }
    if (this.creator.autoSaveDelay <= 0) {
      saveThemeFunc();
      return;
    }
    if (!!this.autoSaveTimerId) {
      clearTimeout(this.autoSaveTimerId);
    }
    this.autoSaveTimerId = setTimeout(() => {
      clearTimeout(this.autoSaveTimerId);
      this.autoSaveTimerId = null;
      saveThemeFunc && saveThemeFunc();
    }, this.creator.autoSaveDelay);
  }

  /**
   * A list of UI themes from which users can select. You can sort this list if you want to reorder themes in Theme Editor.
   * @see addTheme
   * @see removeTheme
   */
  public get availableThemes() {
    return [].concat(this._availableThemes);
  }
  public set availableThemes(availableThemes: string[]) {
    this._availableThemes = availableThemes || [];
    this.onAvailableThemesChanged(availableThemes);
    this.updateAllowModifyTheme();
  }

  private onAvailableThemesChanged(availableThemes: string[]) {
    const themeChooser = this.propertyGrid.survey.getQuestionByName("themeName") as QuestionDropdownModel;
    if (!!themeChooser) {
      themeChooser.choices = availableThemes.map(theme => ({ value: theme, text: getLocString("theme.names." + theme) }));
      if (availableThemes.indexOf(themeChooser.value) === -1) {
        this.themeModel.setTheme(this.themeModel.defaultSessionTheme);
      }
    }
    this.propertyGrid.survey.runExpressions();
  }

  /**
   * Adds a new UI theme to Theme Editor.
   * @param theme A [UI theme](https://surveyjs.io/form-library/documentation/api-reference/itheme) to add.
   * @param setAsDefault For internal use.
   * @returns An identifier of the added theme, which is a concatenation of the [`themeName`](https://surveyjs.io/form-library/documentation/api-reference/itheme#themeName), [`colorPalette`](https://surveyjs.io/form-library/documentation/api-reference/itheme#colorPalette), and [`isPanelless`](https://surveyjs.io/form-library/documentation/api-reference/itheme#isPanelless) settings (for example, `"default-dark-panelless"`).
   * @see removeTheme
   * @see getCurrentTheme
   */
  public addTheme(theme: ITheme, setAsDefault = false): string {
    const fullThemeName = getThemeFullName(theme);
    Themes[fullThemeName] = theme;
    if (this._availableThemes.indexOf(theme.themeName) === -1) {
      if (setAsDefault) {
        this.availableThemes = [theme.themeName].concat(this.availableThemes);
        ThemeModel.DefaultTheme = theme;
      } else {
        this.availableThemes = this.availableThemes.concat([theme.themeName]);
      }
    } else {
      // eslint-disable-next-line no-self-assign
      this.availableThemes = this.availableThemes;
    }
    return fullThemeName;
  }
  /**
   * Removes a UI theme from Theme Editor.
   * @param themeAccessor A [UI theme](https://surveyjs.io/form-library/documentation/api-reference/itheme) to delete or a theme identifier, which is a concatenation of the [`themeName`](https://surveyjs.io/form-library/documentation/api-reference/itheme#themeName), [`colorPalette`](https://surveyjs.io/form-library/documentation/api-reference/itheme#colorPalette), and [`isPanelless`](https://surveyjs.io/form-library/documentation/api-reference/itheme#isPanelless) settings (for example, `"default-dark-panelless"`).
   * @param includeModifications Pass `true` to delete not only the specified UI theme, but also all other themes with the same `themeName` value (dark/light and panelless modifications).
   * @see addTheme
   * @see getCurrentTheme
   */
  public removeTheme(themeAccessor: string | ITheme, includeModifications = false): void {
    const themeToDelete = typeof themeAccessor === "string" ? Themes[themeAccessor] : themeAccessor;
    const fullThemeName = typeof themeAccessor === "string" ? themeAccessor : getThemeFullName(themeToDelete);
    if (!!themeToDelete) {
      delete Themes[fullThemeName];
      if (ThemeModel.DefaultTheme === themeToDelete) {
        ThemeModel.DefaultTheme = Themes["default-light"] || Themes[Object.keys(Themes)[0]];
        this.themeModel.defaultSessionTheme = ThemeModel.DefaultTheme;
      }
      const registeredThemeNames = Object.keys(Themes);
      let themeModifications = registeredThemeNames.filter(themeName => themeName.indexOf(themeToDelete.themeName + "-") === 0);
      if (includeModifications && themeModifications.length > 0) {
        themeModifications.forEach(themeModificationFullName => delete Themes[themeModificationFullName]);
      }
      if (includeModifications || themeModifications.length === 0) {
        const themeIndex = this._availableThemes.indexOf(themeToDelete.themeName);
        if (themeIndex !== -1) {
          const availableThemes = this.availableThemes;
          availableThemes.splice(themeIndex, 1);
          this.availableThemes = availableThemes;
        }
      }
    }
  }
  /**
   * Returns a JSON object that describes the currently applied UI theme.
   * @param changesOnly Pass `true` to get a JSON object that contains only changed theme settings instead of a full theme JSON schema.
   * @returns A currently applied [theme JSON schema](https://surveyjs.io/form-library/documentation/api-reference/itheme).
   * @see availableThemes
   * @see addTheme
   * @see removeTheme
   */
  public getCurrentTheme(changesOnly = false) {
    if (!changesOnly) {
      return this.creator.theme;
    }
    return this.getThemeChanges();
  }
  public getThemeChanges() {
    const themeModel = new ThemeModel();
    themeModel.fromJSON(this.creator.theme);
    const theme = themeModel.toJSON({ storeDefaults: false });
    return getThemeChanges(theme);
  }
  /**
   * Indicates whether the selected theme has been modified.
   * @see [`creator.saveTheme()`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveTheme)
   * @see [`creator.saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc)
   */
  public get isModified(): boolean {
    const currentThemeChanges = this.getThemeChanges();
    const hasCssModifications = Object.keys(currentThemeChanges.cssVariables).length > 0;
    const hasBackgroundModifications = Object.keys(currentThemeChanges).some(propertyName => propertyName.toLowerCase().indexOf("background") !== -1);
    const hasHeaderModifications = !!currentThemeChanges.header && Object.keys(currentThemeChanges.header).length === 0;
    return hasCssModifications || hasBackgroundModifications || hasHeaderModifications;
  }

  /**
   * An event that is raised when users select a UI theme from a drop-down list, choose a dark or light color palette, and switch between regular and panelless theme modifications.
   *
   * Parameters:
   *
   * - `sender`: `ThemeTabPlugin`\
   * A `ThemeTabPlugin` instance that raised the event.
   * - `options.theme`: [`ITheme`](https://surveyjs.io/form-library/documentation/api-reference/itheme)\
   * A selected theme.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/save-custom-theme/ (linkStyle))
   * @see availableThemes
   * @see addTheme
   * @see removeTheme
   */
  public onThemeSelected = new EventBase<ThemeTabPlugin, { theme: ITheme }>();
  /**
   * An event that is raised when the value of a property or CSS variable in a theme JSON schema has changed.
   *
   * Parameters:
   *
   * - `sender`: `ThemeTabPlugin`\
   * A `ThemeTabPlugin` instance that raised the event.
   * - `options.name`: `string`\
   * The name of the changed property or CSS variable.
   * - `options.value`: `any`\
   * A new value of the property or CSS variable.
   */
  public onThemePropertyChanged = new EventBase<ThemeTabPlugin, { name: string, value: any }>();
  /**
   * An event that you can use to switch the current theme to read-only mode.
   *
   * Parameters:
   *
   * - `sender`: `ThemeTabPlugin`\
   * A `ThemeTabPlugin` instance that raised the event.
   * - `options.theme`: [`ITheme`](https://surveyjs.io/form-library/documentation/api-reference/itheme)\
   * The current theme.
   * - `options.allow`: `boolean`\
   * A Boolean property that you can set to `false` if you want to disallow theme modifications.
   */
  public onAllowModifyTheme = new EventBase<ThemeTabPlugin, { theme: ITheme, allow: boolean }>();

  /**
   * A Boolean value that indicates or specifies whether the Appearance category displays advanced settings.
   *
   * Default value: `false`
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/change-form-theme/ (linkStyle))
   */
  public get advancedModeEnabled(): boolean {
    return this._advancedModeValue;
  }
  public set advancedModeEnabled(newValue: boolean) {
    this._advancedModeValue = newValue;
    this.updateAdvancedModeQuestion(newValue);
  }
}

export function updateThemeEditorsDefaultFontFamily() {
  const getPropertyUpdater = className => propertyName => {
    const property = Serializer.getProperty(className, propertyName);
    if (property) {
      property.defaultValue.family = settings.themeEditor.defaultFontFamily;
    }
  };
  ["surveyTitle", "headerTitle", "surveyDescription", "headerDescription"].forEach(getPropertyUpdater("header"));
  ["pageTitle", "pageDescription", "questionTitle", "questionDescription", "editorFont"].forEach(getPropertyUpdater("theme"));
  const fontFamilyProperty = Serializer.getProperty("theme", "--sjs-font-family");
  if (fontFamilyProperty) {
    fontFamilyProperty.defaultValue = settings.themeEditor.defaultFontFamily;
  }
}