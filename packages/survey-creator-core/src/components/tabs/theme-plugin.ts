import { Action, ComputedUpdater, surveyCss, defaultV2ThemeName, ITheme, EventBase, Serializer } from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { ThemeBuilder } from "./theme-builder";
import { SidebarTabModel } from "../side-bar/side-bar-tab-model";
import { settings } from "../../creator-settings";
import { PredefinedThemes, Themes, findSuitableTheme, getThemeFullName } from "./themes";
import { saveToFileHandler } from "../../utils/utils";

function getObjectDiffs(obj1: any, obj2: any = {}): any {
  const result: any = {};
  Object.keys(obj1).forEach(key => {
    if (typeof obj1[key] === "object") {
      result[key] = getObjectDiffs(obj1[key], obj2[key]);
    } else {
      if (obj1[key] !== undefined && obj1[key] != obj2[key]) {
        result[key] = obj1[key];
      }
    }
  });
  return result;
}

export class ThemeTabPlugin implements ICreatorPlugin {
  private previewAction: Action;
  private invisibleToggleAction: Action;
  private testAgainAction: Action;
  private designerAction: Action;
  private prevPageAction: Action;
  private nextPageAction: Action;
  private themeSettingsAction: Action;
  private resetTheme: Action;
  private importAction: Action;
  private exportAction: Action;
  private undoAction: Action;
  private redoAction: Action;
  private inputFileElement: HTMLInputElement;
  private simulatorTheme: any = surveyCss[defaultV2ThemeName];
  private sidebarTab: SidebarTabModel;
  private _availableThemes = PredefinedThemes;

  public model: ThemeBuilder;

  private createVisibleUpdater() {
    return <any>new ComputedUpdater<boolean>(() => { return this.creator.activeTab === "theme"; });
  }

  constructor(private creator: CreatorBase) {
    creator.addPluginTab("theme", this, "ed.themeSurvey");
    this.simulatorTheme = surveyCss[defaultV2ThemeName];
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
    this.sidebarTab = this.creator.sidebar.addTab("theme");
    this.sidebarTab.caption = editorLocalization.getString("ed.themePropertyGridTitle");
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
    this.model = new ThemeBuilder(this.creator, this.simulatorTheme);
    this.model.simulator.landscape = this.creator.previewOrientation != "portrait";
    this.update();
    this.sidebarTab.model = this.model.themeEditorSurvey;
    this.sidebarTab.componentName = "survey-widget";
    this.creator.sidebar.activeTab = this.sidebarTab.id;
  }
  public update(): void {
    if (!this.model) return;
    const options = {
      showPagesInTestSurveyTab: this.creator.showPagesInTestSurveyTab,
    };
    this.model.testAgainAction = this.testAgainAction;
    this.model.availableThemes = this.availableThemes;
    this.model.prevPageAction = this.prevPageAction;
    this.model.nextPageAction = this.nextPageAction;
    this.model.initialize(this.creator.JSON, options);

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
    this.model.onThemeSelected.add((sender, options) => {
      this.onThemeSelected.fire(this, options);
    });
    this.model.onThemeModified.add((sender, options) => {
      this.onThemeModified.fire(this, options);
    });
    this.model.onCanModifyTheme.add((sender, options) => {
      this.onCanModifyTheme.fire(this, options);
    });
  }
  public deactivate(): boolean {
    if (this.model) {
      this.simulatorTheme = this.model.simulator.survey.css;
      this.model.onPropertyChanged.clear();
      this.model.onThemeSelected.clear();
      this.model.onThemeModified.clear();
      this.model.onCanModifyTheme.clear();
      this.model.onSurveyCreatedCallback = undefined;
      this.model.dispose();
      this.model = undefined;
    }
    this.sidebarTab.visible = false;
    this.testAgainAction.visible = false;
    this.invisibleToggleAction && (this.invisibleToggleAction.visible = false);
    return true;
  }

  public saveToFileHandler = saveToFileHandler;

  public exportToFile(fileName: string) {
    const themeData = JSON.stringify(this.creator.theme, null, 4);
    const themeBlob = new Blob([themeData], { type: "application/json" });
    this.saveToFileHandler(fileName, themeBlob);
  }
  public importFromFile(file: File, callback?: (theme: ITheme) => void) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const theme: ITheme | any = JSON.parse(fileReader.result as string);
      this.addTheme(theme);
      if (this.model) {
        this.model.setTheme(theme);
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

    this.resetTheme = new Action({
      id: "resetTheme",
      iconName: "icon-reset",
      locTitleName: "ed.themeResetButton",
      locTooltipName: "ed.themeResetButton",
      mode: "small",
      visible: this.createVisibleUpdater(),
      action: () => {
        this.model.resetTheme();
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

  public get availableThemes() {
    return [].concat(this._availableThemes);
  }
  public set availableThemes(availebleThemes: string[]) {
    this._availableThemes = availebleThemes || [];
    if (!!this.model) {
      this.model.availableThemes = availebleThemes;
    }
  }

  public addTheme(theme: ITheme): string {
    const fullThemeName = getThemeFullName(theme);
    Themes[fullThemeName] = theme;
    if (this._availableThemes.indexOf(theme.themeName) === -1) {
      this.availableThemes = this.availableThemes.concat([theme.themeName]);
    }
    return fullThemeName;
  }
  public removeTheme(fullThemeName: string): void {
    const themeToDelete = Themes[fullThemeName];
    if (!!themeToDelete) {
      delete Themes[fullThemeName];
      const registeredThemeNames = Object.keys(Themes);
      let themeModificationsExist = registeredThemeNames.some(themeName => themeName.indexOf(themeToDelete.themeName) === 0);
      if (!themeModificationsExist) {
        const themeIndex = this._availableThemes.indexOf(themeToDelete.themeName);
        if (themeIndex !== -1) {
          const availableThemes = this.availableThemes;
          availableThemes.splice(themeIndex, 1);
          this.availableThemes = availableThemes;
        }
      }
    }
  }
  public getCurrentTheme(content: "full" | "changes" = "full") {
    if (content === "full") {
      return this.creator.theme;
    }
    return this.getThemeChanges();
  }
  public getThemeChanges() {
    const fullTheme = this.creator.theme;
    let probeThemeFullName = getThemeFullName(fullTheme);
    const baseTheme = findSuitableTheme(fullTheme.themeName, probeThemeFullName);
    const themeChanges: ITheme = getObjectDiffs(fullTheme, baseTheme);
    Object.keys(themeChanges).forEach(propertyName => {
      if (propertyName.toLowerCase().indexOf("background") !== -1) {
        if (themeChanges[propertyName] === "" || themeChanges[propertyName] === Serializer.findProperty("survey", propertyName).defaultValue) {
          delete themeChanges[propertyName];
        }
      }
    });
    themeChanges.themeName = fullTheme.themeName || "default";
    themeChanges.colorPalette = fullTheme.colorPalette || "light";
    themeChanges.isPanelless = !!fullTheme.isPanelless;
    return themeChanges;
  }
  public get isThemePristine(): boolean {
    const currentThemeChanges = this.getThemeChanges();
    const hasCssModifications = Object.keys(currentThemeChanges.cssVariables).length > 0;
    const hasBackgroundModifications = Object.keys(currentThemeChanges).some(propertyName => propertyName.toLowerCase().indexOf("background") !== -1);
    const hasHeaderModifications = !!currentThemeChanges.header && Object.keys(currentThemeChanges.header).length === 0;
    return !(hasCssModifications || hasBackgroundModifications || hasHeaderModifications);
  }

  public onThemeSelected = new EventBase<ThemeTabPlugin, { theme: ITheme }>();
  public onThemeModified = new EventBase<ThemeTabPlugin, { name: string, value: any }>();
  public onCanModifyTheme = new EventBase<ThemeTabPlugin, { theme: ITheme, canModify: boolean }>();
}
