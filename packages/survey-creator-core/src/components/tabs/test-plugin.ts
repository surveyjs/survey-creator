import { Action, ComputedUpdater, createDropdownActionModel, defaultStandardCss, defaultV2Css, IAction, ListModel, modernCss, PopupModel, surveyLocalization, SurveyModel } from "survey-core";
import { CreatorBase, ICreatorPlugin, CreatorAction } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { simulatorDevices } from "../simulator";
import { TestSurveyTabViewModel } from "./test";

export class TabTestPlugin implements ICreatorPlugin {
  private languageSelectorAction: Action;
  private changeThemePopupModel: PopupModel;
  private changeThemeModel: ListModel;
  protected changeThemeAction: CreatorAction;
  private deviceSelectorAction: Action;
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
  private getAvailableThemes(themeMapper: Array<any>): Array<CreatorAction> {
    const availableThemesToItems = [];
    for(var i = 0; i < themeMapper.length; i ++) {
      const item = themeMapper[i];
      const action = new CreatorAction({ id: item.name + "_themeSwitcher", locTitleName: this.getThemeLocName(item.name) });
      (<any>action).value = item.name;
      availableThemesToItems.push(action);
    }
    return availableThemesToItems;
  }
  private getThemeLocName(name: string): string {
    return "ed." + name + "Theme";
  }
  protected filterThemeMapper(themeMapper: Array<any>): Array<any> {
    let res = [];
    if (!!document && !!document.body) {
      const styles = getComputedStyle(document.body);
      res = themeMapper.filter(item => item.theme.variables && styles.getPropertyValue(item.theme.variables.themeMark));
    }
    return res;
  }
  public createActions(): Array<Action> {
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
      this.deviceSelectorAction = createDropdownActionModel({
        id: "deviceSelector",
        iconName: "icon-device-desktop",
        mode: "small",
        visible: <any>new ComputedUpdater<boolean>(() => {
          const showSimulatorInTestSurveyTab = this.creator.showSimulatorInTestSurveyTab;
          return this.creator.activeTab === "test" && showSimulatorInTestSurveyTab;
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

    const themeMapper = [
      { name: "defaultV2", theme: defaultV2Css },
      { name: "modern", theme: modernCss },
      { name: "default", theme: defaultStandardCss }
    ];
    const filteredThemes = this.filterThemeMapper(themeMapper);
    let availableThemesToItems = this.getAvailableThemes(filteredThemes);

    if (this.creator.allowChangeThemeInPreview && availableThemesToItems.length > 1) {
      this.changeThemeModel = new ListModel(
        availableThemesToItems,
        (item: any) => {
          if(!!this.model) {
            this.model.setTheme(item.value, themeMapper);
          }
          this.changeThemeAction.locTitleName = this.getThemeLocName(item.value);
          this.changeThemeAction.updateTitle();
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
      const getStartThemeName = (): string => {
        const availableThemes = themeMapper.filter(item => item.theme.root === this.simulatorTheme.root);
        return availableThemes.length > 0 ? availableThemes[0].name : "defaultV2";
      };
      this.changeThemeAction = new CreatorAction({
        id: "themeSwitcher",
        iconName: "icon-theme",
        component: "sv-action-bar-item-dropdown",
        mode: "large",
        locTitleName: this.getThemeLocName(getStartThemeName()),
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
