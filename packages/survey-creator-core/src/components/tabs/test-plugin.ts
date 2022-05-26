import { Action, ComputedUpdater, defaultStandardCss, defaultV2Css, IAction, ListModel, modernCss, PopupModel, surveyLocalization, SurveyModel } from "survey-core";
import { CreatorBase, ICreatorPlugin, CreatorAction } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { simulatorDevices } from "../simulator";
import { TestSurveyTabViewModel } from "./test";

export class TabTestPlugin implements ICreatorPlugin {
  private languageSelectorAction: Action;
  private languagePopupModel: PopupModel;
  private languageListModel: ListModel;
  private changeThemePopupModel: PopupModel;
  private changeThemeModel: ListModel;
  private changeThemeAction: Action;
  private deviceSelectorAction: Action;
  private deviceListModel: ListModel;
  private orientationSelectorAction: Action;
  private invisibleToggleAction: Action;
  private testAgainAction: Action;
  private designerAction: Action;
  private prevPageAction: Action;
  private nextPageAction: Action;
  private simulatorTheme: any = defaultV2Css;

  public model: TestSurveyTabViewModel;

  private getSimulatorDevicesTitle(): string {
    if (!this.model) return "";
    return simulatorDevices[this.model.simulator.device].title || getLocString("pe.simulator");
  }
  private setDevice(newVal: string) {
    this.model.simulator.device = newVal;
    this.model.simulator.resetZoomParameters();
    let currentType = simulatorDevices[this.model.simulator.device].deviceType;
    this.orientationSelectorAction.enabled = currentType != "desktop";
    this.deviceSelectorAction.iconName = "icon-device-" + currentType;
    this.deviceSelectorAction.title = this.getSimulatorDevicesTitle();
  }
  private setDefaultLanguageOption(opt: boolean | string) {
    const vis: boolean = opt === true || opt === "all" || (opt === "auto" && this.model.survey.getUsedLocales().length > 1);
    this.languageSelectorAction.visible = vis;
    let languages: Array<IAction> = [];
    if (vis) {
      languages = this.getLanguages(opt !== "all" ? this.model.survey.getUsedLocales() : null);
    }
    this.languagePopupModel.contentComponentData.model.setItems(languages);
    this.languageListModel.selectedItem = languages.filter(lang => lang.id === this.model.activeLanguage)[0];
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
      this.deviceListModel.selectedItem = { id: this.model.simulator.device };
      this.orientationSelectorAction.title = getLocString("pe.landscapeOrientation");
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
    switch (themeName) {
      case "modern":
        this.simulatorTheme = modernCss;
        break;
      case "default":
        this.simulatorTheme = defaultStandardCss;
        break;
      default:
        this.simulatorTheme = defaultV2Css;
        break;
    }
  }

  constructor(private creator: CreatorBase) {
    creator.addPluginTab("test", this, "ed.testSurvey");
    this.setPreviewTheme(this.creator.themeForPreview);
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  public activate(): void {
    this.model = new TestSurveyTabViewModel(this.creator, this.simulatorTheme);
    this.model.onSurveyCreatedCallback = (survey) => {
      this.creator["onTestSurveyCreated"] && this.creator["onTestSurveyCreated"].fire(self, { survey: survey });
    };
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
      this.model = undefined;
    }
    this.languageSelectorAction.visible = false;
    this.testAgainAction.visible = false;
    this.invisibleToggleAction && (this.invisibleToggleAction.visible = false);
    return true;
  }
  public createActions() {
    const items: Array<Action> = [];

    this.testAgainAction = new CreatorAction({
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
        .map((key) => ({ id: key, title: simulatorDevices[key].title }));
      this.deviceListModel = new ListModel(
        deviceSelectorItems,
        (item: any) => {
          this.setDevice(item.id);
          devicePopupModel.toggleVisibility();
        },
        true
      );
      const devicePopupModel: PopupModel = new PopupModel(
        "sv-list",
        { model: this.deviceListModel },
        "bottom",
        "center"
      );
      this.deviceSelectorAction = new Action({
        id: "deviceSelector",
        iconName: "icon-device-desktop",
        component: "sv-action-bar-item-dropdown",
        mode: "small",
        visible: <any>new ComputedUpdater<boolean>(() => {
          const showSimulatorInTestSurveyTab = this.creator.showSimulatorInTestSurveyTab;
          return this.creator.activeTab === "test" && showSimulatorInTestSurveyTab;
        }),
        action: () => {
          devicePopupModel.toggleVisibility();
        },
        popupModel: devicePopupModel
      });
      items.push(this.deviceSelectorAction);
      devicePopupModel.onHide = () => { this.deviceSelectorAction.enabled = true; };
      devicePopupModel.onShow = () => { this.deviceSelectorAction.enabled = false; };

      this.orientationSelectorAction = new Action({
        id: "orientationSelector",
        iconName: "icon-device-rotate",
        mode: "small",
        visible: <any>new ComputedUpdater<boolean>(() => {
          const showSimulatorInTestSurveyTab = this.creator.showSimulatorInTestSurveyTab;
          return this.creator.activeTab === "test" && showSimulatorInTestSurveyTab;
        }),
        action: () => {
          this.model.simulator.landscape = !this.model.simulator.landscape;
          this.orientationSelectorAction.title = getLocString(this.model.simulator.landscape ? "pe.landscapeOrientation" : "pe.portraitOrientation");
        }
      });
      items.push(this.orientationSelectorAction);
    }
    if (this.creator.showInvisibleElementsInTestSurveyTab) {
      this.invisibleToggleAction = new CreatorAction({
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
        }
      });
      items.push(this.invisibleToggleAction);
    }

    const getThemeTitle = name => this.creator.getLocString("ed." + name + "Theme");
    const themeMapper = [
      { name: "defaultV2", title: getThemeTitle("defaultV2"), theme: defaultV2Css },
      { name: "modern", title: getThemeTitle("modern"), theme: modernCss },
      { name: "default", title: getThemeTitle("default"), theme: defaultStandardCss }
    ];

    let availableThemesToItems = [];
    if (!!document && !!document.body) {
      const styles = getComputedStyle(document.body);
      availableThemesToItems = themeMapper
        .filter(item => item.theme.variables && styles.getPropertyValue(item.theme.variables.themeMark))
        .map(item => ({ id: item.name + "_themeSwitcher", value: item.name, title: item.title }));
    }

    if (availableThemesToItems.length > 1) {
      this.changeThemeModel = new ListModel(
        availableThemesToItems,
        (item: any) => {
          this.model.setTheme(item.value, themeMapper);
          this.changeThemeAction.title = this.model.getCurrThemeTitle(themeMapper);
          this.changeThemePopupModel.toggleVisibility();
        },
        true
      );

      this.changeThemePopupModel = new PopupModel(
        "sv-list",
        { model: this.changeThemeModel },
        "bottom",
        "center"
      );

      const getStartThemeTitle = (): string => {
        const availableThemes = themeMapper.filter(item => item.theme.root === this.simulatorTheme.root);
        let themeTitle = getThemeTitle("defaultV2");
        if (availableThemes.length > 0) {
          themeTitle = availableThemes[0].title;
        }
        return themeTitle;
      };

      this.changeThemeAction = new Action({
        id: "themeSwitcher",
        iconName: "icon-theme",
        component: "sv-action-bar-item-dropdown",
        mode: "large",
        title: getStartThemeTitle(),
        needSeparator: true,
        visible: <any>new ComputedUpdater<boolean>(() => {
          const showSimulatorInTestSurveyTab = this.creator.showSimulatorInTestSurveyTab;
          return this.creator.activeTab === "test" && showSimulatorInTestSurveyTab;
        }),
        action: () => {
          this.changeThemePopupModel.toggleVisibility();
        },
        popupModel: this.changeThemePopupModel
      });

      items.push(this.changeThemeAction);
    }

    this.languageListModel = new ListModel(
      [],
      (item: any) => {
        this.model.activeLanguage = item.id;
        this.languageSelectorAction.title = editorLocalization.getLocaleName(item.id);
        this.languagePopupModel.toggleVisibility();
      },
      true
    );
    this.languagePopupModel = new PopupModel(
      "sv-list",
      { model: this.languageListModel },
      "bottom",
      "center"
    );
    this.languagePopupModel.onHide = () => { this.languageSelectorAction.enabled = true; };
    this.languagePopupModel.onShow = () => { this.languageSelectorAction.enabled = false; };

    this.languageSelectorAction = new Action({
      id: "languageSelector",
      iconName: "icon-language",
      visible: false,
      component: "sv-action-bar-item-dropdown",
      action: () => {
        this.languagePopupModel.toggleVisibility();
      },
      popupModel: this.languagePopupModel,
      mode: <any>new ComputedUpdater<string>(() => {
        return this.creator.isMobileView ? "small" : "large";
      }),
    });
    items.push(this.languageSelectorAction);
    this.designerAction = new CreatorAction({
      id: "svd-designer",
      iconName: "icon-preview",
      needSeparator: true,
      action: () => { this.creator.makeNewViewActive("designer"); },
      active: <any>new ComputedUpdater<boolean>(() => this.creator.activeTab === "test"),
      visible: <any>new ComputedUpdater<boolean>(() => {
        return (this.creator.activeTab === "test");
      }),
      locTitleName: "ed.designer",
      showTitle: false
    });

    this.prevPageAction = new Action({
      id: "prevPage",
      iconName: "icon-arrow-left_16x16",
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
    this.creator.footerToolbar.actions.push(this.testAgainAction);
    this.invisibleToggleAction && (this.creator.footerToolbar.actions.push(this.invisibleToggleAction));
    this.languageSelectorAction && (this.creator.footerToolbar.actions.push(this.languageSelectorAction));
    this.creator.footerToolbar.actions.push(this.prevPageAction);
    this.creator.footerToolbar.actions.push(this.nextPageAction);
    this.creator.footerToolbar.actions.push(this.designerAction);
  }
}
