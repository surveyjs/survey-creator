import { Action, ComputedUpdater, surveyCss, defaultV2ThemeName, ITheme, EventBase } from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { editorLocalization } from "../../editorLocalization";
import { ThemeBuilder } from "./theme-builder";
import { SidebarTabModel } from "../side-bar/side-bar-tab-model";
import { settings } from "../../creator-settings";
import { PredefinedThemes, Themes, getThemeFullName } from "./themes";

export class ThemeTabPlugin implements ICreatorPlugin {
  private testAgainAction: Action;
  private themeSettingsAction: Action;
  private resetTheme: Action;
  private importAction: Action;
  private exportAction: Action;
  private inputFileElement: HTMLInputElement;
  private simulatorTheme: any = surveyCss[defaultV2ThemeName];
  private sidebarTab: SidebarTabModel;
  private _availableThemes = PredefinedThemes;

  public model: ThemeBuilder;

  constructor(private creator: CreatorBase) {
    creator.addPluginTab("theme", this, "ed.themeSurvey");
    this.simulatorTheme = surveyCss[defaultV2ThemeName];
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
    this.sidebarTab = this.creator.sidebar.addTab("theme");
    this.sidebarTab.caption = editorLocalization.getString("ed.themePropertyGridTitle");
  }
  public activate(): void {
    this.model = new ThemeBuilder(this.creator, this.simulatorTheme);
    this.model.simulator.landscape = this.creator.previewOrientation != "portrait";
    this.update();
    this.sidebarTab.model = this.model.themeEditorSurvey;
    this.sidebarTab.componentName = "survey-widget";
    this.creator.sidebar.activeTab = this.sidebarTab.id;
    this.themeSettingsAction.visible = true;
    this.resetTheme.visible = true;
    this.importAction.visible = true;
    this.exportAction.visible = true;
  }
  public update(): void {
    if (!this.model) return;
    const options = {
      showPagesInTestSurveyTab: this.creator.showPagesInTestSurveyTab,
    };
    this.model.testAgainAction = this.testAgainAction;
    this.model.availableThemes = this.availableThemes;
    this.model.initialize(this.creator.JSON, options);

    this.model.show();
    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "isRunning") {
        this.testAgainAction.visible = !this.model.isRunning;
      }
    });
    this.model.onThemeSelected.add((sender, options) => {
      this.onThemeSelected.fire(this, options);
    });
    this.model.onThemeModified.add((sender, options) => {
      this.onThemeModified.fire(this, options);
    });
  }
  public deactivate(): boolean {
    if (this.model) {
      this.simulatorTheme = this.model.simulator.survey.css;
      this.model.onPropertyChanged.clear();
      this.model.onThemeSelected.clear();
      this.model.onThemeModified.clear();
      this.model.onSurveyCreatedCallback = undefined;
      this.model.dispose();
      this.model = undefined;
    }
    this.sidebarTab.visible = false;
    this.testAgainAction.visible = false;
    this.themeSettingsAction.visible = false;
    this.resetTheme.visible = false;
    this.importAction.visible = false;
    this.exportAction.visible = false;
    return true;
  }

  public saveToFileHandler = (fileName: string, blob: Blob) => {
    if (!window) return;
    if (window.navigator["msSaveOrOpenBlob"]) {
      window.navigator["msSaveBlob"](blob, fileName);
    } else {
      const elem = window.document.createElement("a");
      elem.href = window.URL.createObjectURL(blob);
      elem.download = fileName;
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
    }
  }

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

    this.testAgainAction = new Action({
      id: "testSurveyAgain",
      visible: false,
      locTitleName: "ed.testSurveyAgain",
      action: () => {
        this.model.testAgain();
      }
    });
    this.resetTheme = new Action({
      id: "resetTheme",
      iconName: "icon-reset",
      locTitleName: "ed.themeResetButton",
      locTooltipName: "ed.themeResetButton",
      mode: "small",
      visible: <any>new ComputedUpdater<boolean>(() => {
        return (this.creator.activeTab === "theme");
      }),
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
      active: <any>new ComputedUpdater<boolean>(() => this.creator.showSidebar),
      pressed: <any>new ComputedUpdater<boolean>(() => this.creator.showSidebar),
      locTitleName: "ed.themeSettings",
      locTooltipName: "ed.themeSettingsTooltip",
      visible: false,
      showTitle: false
    });
    items.push(this.themeSettingsAction);

    this.importAction = new Action({
      id: "svc-theme-import",
      iconName: "icon-load",
      locTitleName: "ed.themeImportButton",
      locTooltipName: "ed.themeImportButton",
      visible: false,
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
      visible: false,
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.exportToFile(settings.theme.exportFileName);
      }
    });
    items.push(this.exportAction);

    return items;
  }

  public addFooterActions() {
    this.creator.footerToolbar.actions.push(this.resetTheme);
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

  public onThemeSelected = new EventBase<ThemeTabPlugin, { theme: ITheme }>();
  public onThemeModified = new EventBase<ThemeTabPlugin, { name: string, value: any }>();
}
