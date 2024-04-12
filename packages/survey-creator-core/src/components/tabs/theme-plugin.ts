import { Action, ComputedUpdater, surveyCss, defaultV2ThemeName, ITheme, EventBase, Serializer, settings as surveySettings, Question, IElement, SurveyModel, PanelModelBase, PanelModel, QuestionHtmlModel } from "survey-core";
import { settings } from "../../creator-settings";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { ThemeEditorModel } from "./theme-builder";
import { SidebarTabModel } from "../side-bar/side-bar-tab-model";
import { PredefinedThemes, Themes } from "./themes";
import { notShortCircuitAnd, saveToFileHandler } from "../../utils/utils";
import { PropertyGridModel } from "../../property-grid";
import { PropertyGridViewModel } from "../../property-grid/property-grid-view-model";
import { ThemeModel, getThemeChanges, getThemeFullName } from "./theme-model";
import { Switcher } from "../switcher/switcher";
import { themeModelPropertyGridDefinition } from "./theme-model-definition";
import { propertyGridCss } from "../../property-grid-theme/property-grid";

export interface IPropertyGridSurveyCreatedEvent {
  survey: SurveyModel;
  model: ThemeEditorModel;
}
export interface IAddPropertyGridEditorParams {
  element: IElement;
  category?: string;
  insertAfter?: string;
  insertBefore?: string;
}

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
  private advancedModeSwitcher: Action;
  private inputFileElement: HTMLInputElement;
  private simulatorCssClasses: any = surveyCss[defaultV2ThemeName];
  // private sidebarTab: SidebarTabModel;
  private _availableThemes = [].concat(PredefinedThemes);

  public propertyGrid: PropertyGridModel;
  private propertyGridTab: SidebarTabModel;
  public model: ThemeEditorModel;
  public themeModel: ThemeModel;

  private createVisibleUpdater() {
    return <any>new ComputedUpdater<boolean>(() => { return this.creator.activeTab === "theme"; });
  }

  private createAppearanceAdvancedModeAction(panel: PanelModelBase): void {
    const advancedMode = new Switcher({
      id: "advancedMode",
      component: "svc-switcher",
      // ariaChecked: <any>new ComputedUpdater<boolean>(() => this.groupAppearanceAdvancedMode),
      ariaRole: "checkbox",
      css: "sv-theme-group_title-action",
      title: getLocString("theme.advancedMode"),
      visible: !this.creator.isMobileView,
      action: () => {
        advancedMode.checked = !advancedMode.checked;
        this.propertyGrid.survey.setVariable("advancedmode", advancedMode.checked);

        // this.groupAppearanceAdvancedMode = !this.groupAppearanceAdvancedMode;
        // this._setPGEditorPropertyValue(panel.getQuestionByName("advancedMode"), "value", this.groupAppearanceAdvancedMode);
      }
    });
    // this.registerFunctionOnPropertyValueChanged("groupAppearanceAdvancedMode",
    //   () => {
    //     advancedMode.checked = !advancedMode.checked;
    //   },
    //   "groupAppearanceAdvancedMode"
    // );
    advancedMode.checked = false;
    this.advancedModeSwitcher = advancedMode;
  }

  private addSubGroupTitle(panel: PanelModel, titleId: string) {
    const question = Serializer.createClass("html") as QuestionHtmlModel;
    question.fromJSON({
      visibleIf: "{advancedmode} = true",
      html: `<div class='spg-theme-group-caption'>${getLocString(titleId)}</div>`
    });
    panel.addElement(question);
  }
  private addSubGroupTitles(survey: SurveyModel) {
    this.addSubGroupTitle(survey.getPanelByName("appearanceprimarycolor"), "theme.pageTitle");
    this.addSubGroupTitle(survey.getPanelByName("appearancepage"), "theme.questionTitle");
    this.addSubGroupTitle(survey.getPanelByName("appearancequestion"), "theme.editorPanel");
    this.addSubGroupTitle(survey.getPanelByName("appearanceinput"), "theme.lines");
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addPluginTab("theme", this, "ed.themeSurvey");
    this.simulatorCssClasses = surveyCss[defaultV2ThemeName];
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
    // this.sidebarTab = this.creator.sidebar.addTab("theme");
    // this.sidebarTab.caption = editorLocalization.getString("ed.themePropertyGridTitle");

    this.propertyGrid = new PropertyGridModel(undefined, creator, themeModelPropertyGridDefinition);
    const propertyGridViewModel = new PropertyGridViewModel(this.propertyGrid, creator);
    this.propertyGridTab = this.creator.sidebar.addTab("theme", "svc-property-grid", propertyGridViewModel);
    this.propertyGridTab.caption = editorLocalization.getString("ed.themePropertyGridTitle");
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
  }
  public activate(): void {
    this.model = new ThemeEditorModel(this.creator, this.simulatorCssClasses);
    this.themeModel.initialize(this.creator.theme, this.creator.survey);
    this.update();
    this.propertyGrid.obj = this.themeModel;
    this.propertyGrid.survey.setVariable("advancedmode", false);
    const themeBuilderCss = { ...propertyGridCss };
    themeBuilderCss.root += " spg-theme-builder-root";
    this.propertyGrid.survey.css = themeBuilderCss;
    this.addSubGroupTitles(this.propertyGrid.survey);
    this.propertyGrid.survey.onGetPanelTitleActions.add((sender, opt) => {
      if (opt.panel && opt.panel.name == "appearance") {
        this.createAppearanceAdvancedModeAction(opt.panel);
        opt.titleActions.push(this.advancedModeSwitcher);
      }
    });
    this.propertyGrid.survey.onUpdatePanelCssClasses.add((sender, options) => {
      if (options.panel.hasParent) {
        const parent = (options.panel.parent ?? options.panel.parentQuestion);
        if (!parent || parent.hasParent && !(parent.name === "settings" || parent.parentQuestion?.name === "settings")) {
          options.cssClasses.panel.container = "spg-panel-group";
          options.cssClasses.panel.content = "spg-panel-group__content";
          options.cssClasses.panel.title = "spg-panel-group__title";
        }
        else {
          options.cssClasses.panel.container = "spg-nested-panel";
          options.cssClasses.panel.content = "spg-nested-panel__content";
          options.cssClasses.panel.title = "spg-nested-panel__title";
        }
      }
    });

    // if (!!this.model.themeEditorSurvey) {
    //   const options = <IPropertyGridSurveyCreatedEvent>{
    //     survey: this.model.themeEditorSurvey,
    //     model: this.model,
    //   };
    //   this.onPropertyGridSurveyCreated.fire(this, options);
    // }
    // this.sidebarTab.model = this.model.themeEditorSurvey;
    // this.sidebarTab.componentName = "survey-widget";
    // this.creator.sidebar.activeTab = this.sidebarTab.id;

    this.propertyGridTab.visible = true;
    // this.sidebarTab.visible = !this.propertyGridTab.visible;
  }
  public update(): void {
    if (!this.model) return;
    // this.model.availableThemes = this.availableThemes;
    this.model.simulator.landscape = this.creator.previewOrientation != "portrait";
    this.model.testAgainAction = this.testAgainAction;
    // this.model.availableThemes = this.availableThemes;
    this.model.prevPageAction = this.prevPageAction;
    this.model.nextPageAction = this.nextPageAction;
    const options = {
      showPagesInTestSurveyTab: this.creator.showPagesInTestSurveyTab,
    };
    this.model.initialize(this.creator.JSON, options);
    this.updateSimulatorTheme();

    if (this.creator.showInvisibleElementsInTestSurveyTab) {
      this.invisibleToggleAction.css = this.model.showInvisibleElements ? "sv-action-bar-item--active" : "";
      this.invisibleToggleAction.visible = this.model.isRunning;
    }

    this.updateUndeRedoActions();
    this.model.undoRedoManager.canUndoRedoCallback = () => {
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
      this.updateSimulatorTheme(options.theme);
      this.resetTheme.enabled = getThemeFullName(sender.defaultSessionTheme) !== getThemeFullName(options.theme);
      this.saveThemeAction.enabled = true;
      this.onThemeSelected.fire(this, options);
      if (this.creator.isAutoSave) {
        this.processAutoSave();
      }
    });
    this.themeModel.onThemePropertyChanged.add((sender, options) => {
      this.updateSimulatorTheme();
      this.resetTheme.enabled = true;
      this.saveThemeAction.enabled = true;
      this.onThemePropertyChanged.fire(this, options);
      if (this.creator.isAutoSave) {
        this.processAutoSave();
      }
    });
    this.themeModel.onAllowModifyTheme.add((sender, options) => {
      this.onAllowModifyTheme.fire(this, options);
    });

    this.resetTheme.enabled = getThemeFullName(this.themeModel.defaultSessionTheme) !== getThemeFullName(this.creator.theme) || this.isModified;
  }
  public deactivate(): boolean {
    if (this.model) {
      this.simulatorCssClasses = this.model.simulator.survey.css;
      this.model.onPropertyChanged.clear();
      this.themeModel.onThemeSelected.clear();
      this.themeModel.onThemePropertyChanged.clear();
      this.themeModel.onAllowModifyTheme.clear();
      this.model.onSurveyCreatedCallback = undefined;
      this.model.dispose();
      this.model = undefined;
    }
    // this.sidebarTab.visible = false;
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
      iconName: "icon-config",
      action: () => { this.creator.makeNewViewActive("designer"); },
      visible: this.createVisibleUpdater(),
      locTitleName: "ed.designer",
      showTitle: false
    });

    this.prevPageAction = new Action({
      id: "prevPage",
      iconName: "icon-arrow-left_16x16",
      needSeparator: <any>new ComputedUpdater<boolean>(() => {
        return this.creator.isMobileView;
      }),
      visible: false
    });

    this.nextPageAction = new Action({
      id: "nextPage",
      iconName: "icon-arrow-right_16x16",
      visible: false
    });

    this.previewAction = new Action({
      id: "svd-preview",
      iconName: "icon-preview",
      active: true,
      visible: this.createVisibleUpdater(),
      locTitleName: "ed.testSurvey",
      showTitle: false,
      action: () => { }
    });

    this.testAgainAction = new Action({
      id: "testSurveyAgain",
      visible: false,
      locTitleName: "ed.testSurveyAgain",
      action: () => {
        this.model.testAgain();
      }
    });

    this.undoAction = new Action({
      id: "action-undo-theme",
      iconName: "icon-undo",
      locTitleName: "ed.undo",
      showTitle: false,
      visible: this.createVisibleUpdater(),
      action: () => this.undo()
    });
    this.redoAction = new Action({
      id: "action-redo-theme",
      iconName: "icon-redo",
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
      iconName: "icon-reset",
      locTitleName: "ed.themeResetButton",
      locTooltipName: "ed.themeResetButton",
      mode: "small",
      visible: this.createVisibleUpdater(),
      action: () => {
        surveySettings.confirmActionAsync(getLocString("ed.themeResetConfirmation"), (confirm) => {
          if (confirm) {
            this.themeModel.resetTheme();
          }
        }, getLocString("ed.themeResetConfirmationOk"), editorLocalization.currentLocale);
      }
    });
    items.push(this.resetTheme);

    this.themeSettingsAction = new Action({
      id: "svc-theme-settings",
      iconName: "icon-theme",
      action: () => {
        if (!this.creator.showSidebar) {
          this.creator.setShowSidebar(true, true);
        }
      },
      visible: this.createVisibleUpdater(),
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
      locTitleName: "ed.themeExportButton",
      locTooltipName: "ed.themeExportButton",
      visible: this.createVisibleUpdater(),
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.exportToFile(settings.theme.exportFileName);
      }
    });
    items.push(this.exportAction);

    if (this.creator.showInvisibleElementsInTestSurveyTab) {
      this.invisibleToggleAction = new Action({
        id: "showInvisible",
        iconName: "icon-invisible-items",
        mode: "small",
        locTitleName: "ts.showInvisibleElements",
        visible: false,
        action: () => {
          this.model.showInvisibleElements = !this.model.showInvisibleElements;
          this.invisibleToggleAction.css = this.model.showInvisibleElements ? "sv-action-bar-item--active" : "";
          this.invisibleToggleAction.title = getLocString(!this.model.showInvisibleElements ? "ts.showInvisibleElements" : "ts.hideInvisibleElements");
        }
      });
    }

    return items;
  }

  public undo() {
    const _undoRedoManager = this.model && this.model.undoRedoManager;
    if (!_undoRedoManager) return;
    _undoRedoManager.suspend();
    if (_undoRedoManager.canUndo()) {
      _undoRedoManager.undo();
    }
    _undoRedoManager.resume();
  }

  public redo() {
    const _undoRedoManager = this.model && this.model.undoRedoManager;
    if (!_undoRedoManager) return;
    _undoRedoManager.suspend();
    if (_undoRedoManager.canRedo()) {
      _undoRedoManager.redo();
    }
    _undoRedoManager.resume();
  }

  private updateUndeRedoActions() {
    const _undoRedoManager = this.model.undoRedoManager;
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

  private updateSimulatorTheme(theme?: ITheme) {
    if (!!this.model.survey) {
      this.model.survey.applyTheme(theme || this.themeModel.toJSON());
    }
  }

  private _saveThemeFuncValue: (
    no: number,
    onSaveCallback: (no: number, isSuccess: boolean) => void
  ) => void;
  /**
   * A function that is called [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#isAutoSave) is triggered to save a theme JSON object.
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
  // protected themeModified(options: { theme: ITheme } | { name: string, value: any }) {
  //   this.updateSimulatorTheme();
  //   // if (this.blockThemeChangedNotifications == 0) {
  //   if (!!options["theme"]) {
  //     // this.themeModel.onThemeSelected.fire(this.themeModel, options as { theme: ITheme });
  //     this.onThemeSelected.fire(this, options as { theme: ITheme });
  //   } else {
  //     this.creator.hasPendingThemeChanges = true;
  //     // this.themeModel.onThemePropertyChanged.fire(this.themeModel, options as { name: string, value: any });
  //     this.onThemePropertyChanged.fire(this, options as { name: string, value: any });
  //   }
  //   if (this.creator.isAutoSave) {
  //     this.processAutoSave();
  //   }
  //   // }
  // }

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
    // if (!!this.model) {
    //   this.model.availableThemes = availableThemes;
    // }
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
    return getThemeChanges(this.creator.theme);
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
   * An event that is raised when a [survey that represents the Property Grid](https://surveyjs.io/survey-creator/documentation/creator-v2-whats-new#survey-creator-ui-elements-are-surveys) is instantiated. Handle this event to customize the Property Grid.
   * 
   * Parameters:
   * 
   * - `sender`: `ThemeTabPlugin`\
   * A `ThemeTabPlugin` instance that raised the event.
   * - `options.survey`: `SurveyModel`\
   * A survey that represents the Property Grid.
   * - `options.model`: `ThemeEditorModel`\
   * A Theme Editor model.
   */
  public onPropertyGridSurveyCreated = new EventBase<ThemeTabPlugin, IPropertyGridSurveyCreatedEvent>();
}
