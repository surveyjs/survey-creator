import { Action, ComputedUpdater, IAction, ListModel, PopupModel, surveyLocalization, SurveyModel } from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { simulatorDevices } from "../simulator";
import { TestSurveyTabViewModel } from "./test";

export class TabTestPlugin implements ICreatorPlugin {
  private languageSelectorAction: Action;
  private languagePopupModel: PopupModel;
  private languageListModel: ListModel;
  private deviceSelectorAction: Action;
  private deviceListModel: ListModel;
  private orientationSelectorAction: Action;
  private invisibleToggleAction: Action;
  private testAgainAction: Action;

  public model: TestSurveyTabViewModel;

  private getSimulatorDevicesTitle(): string {
    if (!this.model) return "";
    return simulatorDevices[this.model.simulator.device].title || getLocString("pe.simulator");
  }
  private setDevice(newVal: string) {
    this.model.simulator.device = newVal;
    let currentType = simulatorDevices[this.model.simulator.device].deviceType;
    this.orientationSelectorAction.enabled = currentType != "desktop";
    this.deviceSelectorAction.iconName = "icon-device_" + currentType;
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
    if (this.creator.showSimulatorInTestSurveyTab) {
      this.setDevice(this.model.simulator.device);
      this.deviceListModel.selectedItem = { id: this.model.simulator.device };
    }

    if (this.creator.showDefaultLanguageInTestSurveyTab != undefined) {
      this.setDefaultLanguageOption(this.creator.showDefaultLanguageInTestSurveyTab);
    }
  }

  constructor(private creator: CreatorBase<SurveyModel>) {
    creator.addPluginTab("test", this, getLocString("ed.testSurvey"));
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  public activate(): void {
    this.model = new TestSurveyTabViewModel(this.creator);
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
    this.model.initialize(this.creator.JSON, options);
    this.updateActions();
    this.model.show();
  }
  public deactivate(): boolean {
    this.model.onSurveyCreatedCallback = undefined;
    this.model = undefined;
    return true;
  }
  public createActions() {
    const items: Array<Action> = [];

    this.testAgainAction = new Action({
      id: "testSurveyAgain",
      visible: <any>new ComputedUpdater<boolean>(() => {
        const modelIsRunning = this.model.isRunning;
        return this.creator.activeTab === "test" && !modelIsRunning;
      }),
      title: getLocString("ed.testSurveyAgain"),
      action: () => {
        this.model.testAgain();
      }
    });
    items.push(this.testAgainAction);

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
        iconName: "icon-device_desktop",
        component: "sv-action-bar-item-dropdown",
        mode: "small",
        visible: <any>new ComputedUpdater<boolean>(() => {
          const showFooterToolbar = this.creator.showFooterToolbar;
          const showSimulatorInTestSurveyTab = this.creator.showSimulatorInTestSurveyTab;
          return this.creator.activeTab === "test" && showSimulatorInTestSurveyTab && !showFooterToolbar;
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
        iconName: "icon-device_rotate",
        mode: "small",
        visible: <any>new ComputedUpdater<boolean>(() => {
          const showFooterToolbar = this.creator.showFooterToolbar;
          const showSimulatorInTestSurveyTab = this.creator.showSimulatorInTestSurveyTab;
          return this.creator.activeTab === "test" && showSimulatorInTestSurveyTab && !showFooterToolbar;
        }),
        action: () => {
          this.model.simulator.landscape = !this.model.simulator.landscape;
        },
        title: <any>new ComputedUpdater<string>(() => {
          return getLocString(this.model.simulator.landscape ? "pe.landscapeOrientation" : "pe.portraitOrientation");
        })
      });
      items.push(this.orientationSelectorAction);
    }

    if (this.creator.showInvisibleElementsInTestSurveyTab) {
      this.invisibleToggleAction = new Action({
        id: "showInvisible",
        iconName: "icon-invisible_items",
        mode: "small",
        needSeparator: true,
        visible: <any>new ComputedUpdater<boolean>(() => {
          const modelIsRunning = this.model.isRunning;
          return this.creator.activeTab === "test" && modelIsRunning;
        }),
        css: <any>new ComputedUpdater<string>(() => {
          return this.model.showInvisibleElements ? "sv-action-bar-item--active" : "";
        }),
        title: getLocString("ts.showInvisibleElements"),
        action: () => {
          this.model.showInvisibleElements = !this.model.showInvisibleElements;
        }
      });
      items.push(this.invisibleToggleAction);
    }

    this.languageListModel = new ListModel(
      [],
      (item: any) => {
        this.model.activeLanguage = item.id;
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
      visible: <any>new ComputedUpdater<boolean>(() => this.creator.activeTab === "test"),
      component: "sv-action-bar-item-dropdown",
      title: <any>new ComputedUpdater<string>(() => {
        return editorLocalization.getLocaleName(this.model.activeLanguage);
      }),
      action: () => {
        this.languagePopupModel.toggleVisibility();
      },
      popupModel: this.languagePopupModel
    });
    items.push(this.languageSelectorAction);

    return items;
  }
}
