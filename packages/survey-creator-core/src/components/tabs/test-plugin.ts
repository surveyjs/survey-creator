import { notShortCircuitAnd } from "../../utils/utils";
import { Action, ComputedUpdater, createDropdownActionModel, surveyCss, defaultV2ThemeName, IAction, ListModel, PopupModel, surveyLocalization, SurveyModel, StylesManager } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { simulatorDevices } from "../simulator";
import { TestSurveyTabViewModel } from "./test";

export class TabTestPlugin implements ICreatorPlugin {
  private languageSelectorAction: Action;
  private changeThemePopupModel: PopupModel;
  private changeThemeModel: ListModel;
  protected changeThemeAction: Action;
  private deviceSelectorAction: Action;
  private orientationSelectorAction: Action;
  private invisibleToggleAction: Action;
  private testAgainAction: Action;
  private designerAction: Action;
  private previewAction: Action;
  private prevPageAction: Action;
  private nextPageAction: Action;
  private simulatorTheme: any = surveyCss[defaultV2ThemeName];

  public model: TestSurveyTabViewModel;

  private setDevice(newVal: string) {
    this.model.simulator.device = newVal;
    this.model.simulator.resetZoomParameters();
    let currentType = simulatorDevices[this.model.simulator.device].deviceType;
    this.orientationSelectorAction.enabled = currentType != "desktop";
    this.deviceSelectorAction.iconName = "icon-device-" + currentType;
    this.deviceSelectorAction.title = getLocString("pe.simulator");
  }
  private setDefaultLanguageOption(opt: boolean | string) {
    const vis: boolean = opt === true || opt === "all" || (opt === "auto" && this.model.survey.getUsedLocales().length > 1);
    this.languageSelectorAction.visible = vis;
    let languages: Array<IAction> = [];
    if (vis) {
      languages = this.getLanguages(opt !== "all" ? this.model.survey.getUsedLocales() : null);
    }
    this.languageSelectorAction.popupModel.contentComponentData.model.setItems(languages);
    this.languageSelectorAction.data.selectedItem = languages.filter(lang => lang.id === this.model.activeLanguage)[0];
  }
  private getLanguages(usedLanguages: Array<string> = null): Array<IAction> {
    const res: Array<IAction> = [];
    const locales = !!usedLanguages && usedLanguages.length > 1 ? usedLanguages : surveyLocalization.getLocales();
    for (let i = 0; i < locales.length; i++) {
      const loc: string = locales[i];
      res.push({ id: loc, title: editorLocalization.getLocaleName(loc) });
    }
    return res;
  }
  private updateActions() {
    this.languageSelectorAction.title = editorLocalization.getLocaleName(this.model.activeLanguage);
    this.languageSelectorAction.visible = true;

    if (this.creator.showSimulatorInTestSurveyTab) {
      this.setDevice(this.model.simulator.device);
      this.deviceSelectorAction.data.selectedItem = { id: this.model.simulator.device };
      this.orientationSelectorAction.title = getLocString("pe.portraitOrientation");
    }

    if (this.creator.showInvisibleElementsInTestSurveyTab) {
      this.invisibleToggleAction.css = this.model.showInvisibleElements ? "sv-action-bar-item--active" : "";
      this.invisibleToggleAction.visible = this.model.isRunning;
    }
    if (this.creator.showDefaultLanguageInTestSurveyTab != undefined) {
      this.setDefaultLanguageOption(this.creator.showDefaultLanguageInTestSurveyTab);
    }
  }
  private setPreviewTheme(themeName: string): void {
    this.simulatorTheme = surveyCss[themeName] || surveyCss[defaultV2ThemeName];
  }
  private createVisibleUpdater() {
    return <any>new ComputedUpdater<boolean>(() => { return this.creator.activeTab === "test"; });
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addPluginTab("test", this);
    this.setPreviewTheme(this.creator.themeForPreview);
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  public activate(): void {
    this.model = new TestSurveyTabViewModel(this.creator, this.simulatorTheme);
    this.model.simulator.landscape = this.creator.previewOrientation != "portrait";
    this.update();
  }
  public update(): void {
    if (!this.model) return;
    const options = {
      showPagesInTestSurveyTab: this.creator.showPagesInTestSurveyTab,
    };
    this.model.testAgainAction = this.testAgainAction;
    this.model.prevPageAction = this.prevPageAction;
    this.model.nextPageAction = this.nextPageAction;
    this.model.initialize(this.creator.JSON, options);

    this.updateActions();

    this.model.show();
    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "isRunning") {
        this.invisibleToggleAction && (this.invisibleToggleAction.visible = this.model.isRunning);
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
    this.languageSelectorAction.visible = false;
    this.testAgainAction.visible = false;
    this.invisibleToggleAction && (this.invisibleToggleAction.visible = false);
    return true;
  }
  private getAvailableThemes(themeMapper: Array<any>): Array<Action> {
    const availableThemesToItems = [];
    for (var i = 0; i < themeMapper.length; i++) {
      const item = themeMapper[i];
      const action = new Action({ id: item.name + "_themeSwitcher", locTitleName: this.getThemeLocName(item.name) });
      (<any>action).value = item.name;
      availableThemesToItems.push(action);
    }
    return availableThemesToItems;
  }
  private getThemeLocName(name: string): string {
    return "ed." + name + "Theme";
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

    if (this.creator.showSimulatorInTestSurveyTab) {
      const deviceSelectorItems = Object.keys(simulatorDevices)
        .filter((key) => !!simulatorDevices[key].title)
        .map((key) => ({ id: key, title: simulatorDevices[key].title, visibleIndex: simulatorDevices[key].visibleIndex ?? Number.MAX_VALUE }));
      this.deviceSelectorAction = createDropdownActionModel({
        id: "deviceSelector",
        iconName: "icon-device-desktop",
        mode: "small",
        visible: <any>new ComputedUpdater<boolean>(() => {
          return notShortCircuitAnd(this.creator.activeTab === "test", this.creator.showSimulatorInTestSurveyTab);
        }),
      }, {
        items: deviceSelectorItems,
        allowSelection: true,
        onSelectionChanged: (item: any) => { this.setDevice(item.id); },
        horizontalPosition: "center",
        onHide: () => { this.deviceSelectorAction.enabled = true; },
        onShow: () => { this.deviceSelectorAction.enabled = false; }
      });
      items.push(this.deviceSelectorAction);

      this.orientationSelectorAction = new Action({
        id: "orientationSelector",
        iconName: "icon-device-rotate",
        mode: "small",
        visible: <any>new ComputedUpdater<boolean>(() => {
          return notShortCircuitAnd(this.creator.activeTab === "test", this.creator.showSimulatorInTestSurveyTab);
        }),
        action: () => {
          this.model.simulator.landscape = !this.model.simulator.landscape;
          this.orientationSelectorAction.title = getLocString(!this.model.simulator.landscape ? "pe.landscapeOrientation" : "pe.portraitOrientation");
        }
      });
      items.push(this.orientationSelectorAction);
    }
    if (this.creator.showInvisibleElementsInTestSurveyTab) {
      this.invisibleToggleAction = new Action({
        id: "showInvisible",
        iconName: "icon-invisible-items",
        mode: "small",
        needSeparator: <any>new ComputedUpdater<boolean>(() => {
          return !this.creator.isMobileView;
        }),
        locTitleName: "ts.showInvisibleElements",
        visible: false,
        action: () => {
          this.model.showInvisibleElements = !this.model.showInvisibleElements;
          this.invisibleToggleAction.css = this.model.showInvisibleElements ? "sv-action-bar-item--active" : "";
          this.invisibleToggleAction.title = getLocString(!this.model.showInvisibleElements ? "ts.showInvisibleElements" : "ts.hideInvisibleElements");
        }
      });
      items.push(this.invisibleToggleAction);
    }

    let themeMapper = StylesManager.getIncludedThemeCss() as Array<any>;
    const sequence = ["defaultV2", "modern", "default"];
    themeMapper = themeMapper.sort((theme1, theme2) => {
      return sequence.indexOf(theme1.name) > sequence.indexOf(theme2.name) ? 1 : -1;
    });
    let availableThemesToItems = this.getAvailableThemes(themeMapper);

    if (this.creator.allowChangeThemeInPreview && availableThemesToItems.length > 1 && !this.creator.showThemeTab) {
      this.changeThemeModel = new ListModel(
        availableThemesToItems,
        (item: any) => {
          if (!!this.model) {
            this.model.setTheme(item.value, themeMapper);
          }
          this.changeThemeAction.locTitleName = this.getThemeLocName(item.value);
          this.changeThemeAction.locStrsChanged();
          this.changeThemePopupModel.toggleVisibility();
        },
        true
      );
      this.changeThemeModel.locOwner = this.creator;

      this.changeThemePopupModel = new PopupModel(
        "sv-list",
        { model: this.changeThemeModel },
        "bottom",
        "center"
      );
      const getStartThemeName = (): string => {
        const availableThemes = themeMapper.filter(item => item.theme.root === this.simulatorTheme.root);
        return availableThemes.length > 0 ? availableThemes[0].name : "defaultV2";
      };
      this.changeThemeAction = new Action({
        id: "themeSwitcher",
        iconName: "icon-theme",
        component: "sv-action-bar-item-dropdown",
        mode: "large",
        locTitleName: this.getThemeLocName(getStartThemeName()),
        needSeparator: true,
        visible: <any>new ComputedUpdater<boolean>(() => {
          return notShortCircuitAnd(this.creator.showSimulatorInTestSurveyTab, this.creator.activeTab === "test");
        }),
        action: () => {
          this.changeThemePopupModel.toggleVisibility();
        },
        popupModel: this.changeThemePopupModel
      });

      items.push(this.changeThemeAction);
    }

    this.languageSelectorAction = createDropdownActionModel({
      id: "languageSelector",
      iconName: "icon-language",
      visible: false,
      mode: <any>new ComputedUpdater<string>(() => {
        return this.creator.isMobileView ? "small" : "large";
      }),
    }, {
      items: [],
      allowSelection: true,
      onSelectionChanged: (item: any) => {
        this.model.activeLanguage = item.id;
        this.languageSelectorAction.title = editorLocalization.getLocaleName(item.id);
      },
      horizontalPosition: "center",
      onHide: () => { this.languageSelectorAction.enabled = true; },
      onShow: () => { this.languageSelectorAction.enabled = false; }
    });
    items.push(this.languageSelectorAction);

    this.designerAction = new Action({
      id: "svd-designer",
      iconName: "icon-config",
      action: () => { this.creator.makeNewViewActive("designer"); },
      visible: this.createVisibleUpdater(),
      locTitleName: "ed.designer",
      showTitle: false
    });

    this.previewAction = new Action({
      id: "svd-preview",
      iconName: "icon-preview",
      active: true,
      visible: this.createVisibleUpdater(),
      locTitleName: "tabs.preview",
      showTitle: false,
      action: () => { }
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
    return items;
  }

  public addFooterActions() {
    this.creator.footerToolbar.actions.push(this.designerAction);
    this.creator.footerToolbar.actions.push(this.previewAction);
    this.creator.footerToolbar.actions.push(this.prevPageAction);
    this.creator.footerToolbar.actions.push(this.nextPageAction);
    this.invisibleToggleAction && (this.creator.footerToolbar.actions.push(this.invisibleToggleAction));
    // this.languageSelectorAction && (this.creator.footerToolbar.actions.push(this.languageSelectorAction));
  }
}
