import { Action, ComputedUpdater, surveyCss, defaultV2ThemeName } from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { editorLocalization } from "../../editorLocalization";
import { ThemeSurveyTabViewModel } from "./theme";
import { SidebarTabModel } from "../side-bar/side-bar-tab-model";

export class TabThemePlugin implements ICreatorPlugin {
  private testAgainAction: Action;
  private themeSettingsAction: Action;
  private resetTheme: Action;
  private importAction: Action;
  private exportAction: Action;
  private inputFileElement: HTMLInputElement;
  private simulatorTheme: any = surveyCss[defaultV2ThemeName];
  private sidebarTab: SidebarTabModel;

  public model: ThemeSurveyTabViewModel;

  constructor(private creator: CreatorBase) {
    creator.addPluginTab("theme", this, "ed.themeSurvey");
    this.simulatorTheme = surveyCss[defaultV2ThemeName];
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
    this.sidebarTab = this.creator.sidebar.addTab("theme");
    this.sidebarTab.caption = editorLocalization.getString("ed.themePropertyGridTitle");
  }
  public activate(): void {
    this.model = new ThemeSurveyTabViewModel(this.creator, this.simulatorTheme);
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
    this.model.initialize(this.creator.JSON, options);

    this.model.show();
    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "isRunning") {
        this.testAgainAction.visible = !this.model.isRunning;
      }
    });
  }
  public deactivate(): boolean {
    if (this.model) {
      this.simulatorTheme = this.model.simulator.survey.css;
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
            this.model.importFromFileUI(this.inputFileElement);
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
        this.model.exportToFileUI();
      }
    });
    items.push(this.exportAction);

    return items;
  }

  public addFooterActions() {
    this.creator.footerToolbar.actions.push(this.resetTheme);
  }
}
