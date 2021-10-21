import { Action, IAction, ListModel, PopupModel, surveyLocalization, SurveyModel } from "survey-core";
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
    return simulatorDevices[this.model.simulator.device].title || getLocString("pe.simulator")
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
    this.languageSelectorAction.title = editorLocalization.getLocaleName(this.model.activeLanguage);
    this.languageSelectorAction.visible = true;

    this.setDevice(this.model.simulator.device);
    this.deviceListModel.selectedItem = { id: this.model.simulator.device };
    this.deviceSelectorAction.visible = this.creator.showSimulatorInTestSurveyTab;
    this.orientationSelectorAction.title = getLocString("pe.landscapeOrientation");
    this.orientationSelectorAction.visible = this.creator.showSimulatorInTestSurveyTab;

    this.invisibleToggleAction.css = this.model.showInvisibleElements ? "sv-action-bar-item--active" : "";
    this.invisibleToggleAction.title = getLocString("ts.showInvisibleElements");
    this.invisibleToggleAction.visible = this.model.isRunning;

    if (this.creator.showSimulatorInTestSurveyTab !== undefined) {
      this.deviceSelectorAction.visible = this.creator.showSimulatorInTestSurveyTab;
      this.orientationSelectorAction.visible = this.creator.showSimulatorInTestSurveyTab;
    }
    if (this.creator.showDefaultLanguageInTestSurveyTab != undefined) {
      this.setDefaultLanguageOption(this.creator.showDefaultLanguageInTestSurveyTab);
    }
    if (this.creator.showInvisibleElementsInTestSurveyTab !== undefined) {
      this.invisibleToggleAction.visible = this.creator.showInvisibleElementsInTestSurveyTab;
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
    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "isRunning") {
        this.invisibleToggleAction.visible = this.model.isRunning;
        this.testAgainAction.visible = !this.model.isRunning;
      }
    })
  }
  public deactivate(): boolean {
    this.model.onSurveyCreatedCallback = undefined;
    this.model = undefined;

    this.languageSelectorAction.visible = false;
    this.deviceSelectorAction.visible = false;
    this.orientationSelectorAction.visible = false;
    this.invisibleToggleAction.visible = false;
    return true;
  }
  public createActions() {
    const items: Array<Action> = [];

    this.testAgainAction = new Action({
      id: "testSurveyAgain",
      visible: false,
      title: getLocString("ed.testSurveyAgain"),
      action: () => {
        this.model.testAgain();
      }
    });
    items.push(this.testAgainAction);

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
      visible: false,
      action: () => {
        devicePopupModel.toggleVisibility();
      },
      popupModel: devicePopupModel
    });
    items.push(this.deviceSelectorAction);
    devicePopupModel.onHide = () => { this.deviceSelectorAction.enabled = true; };
    devicePopupModel.onShow = () => { this.deviceSelectorAction.enabled = false; }

    this.orientationSelectorAction = new Action({
      id: "orientationSelector",
      iconName: "icon-device_rotate",
      mode: "small",
      visible: false,
      action: () => {
        this.model.simulator.landscape = !this.model.simulator.landscape;
        this.orientationSelectorAction.title = getLocString(this.model.simulator.landscape ? "pe.landscapeOrientation" : "pe.portraitOrientation");
      }
    });
    items.push(this.orientationSelectorAction);

    this.invisibleToggleAction = new Action({
      id: "showInvisible",
      iconName: "icon-invisible_items",
      mode: "small",
      needSeparator: true,
      visible: false,
      action: () => {
        this.model.showInvisibleElements = !this.model.showInvisibleElements;
        this.invisibleToggleAction.css = this.model.showInvisibleElements ? "sv-action-bar-item--active" : "";
      }
    });
    items.push(this.invisibleToggleAction);

    this.languageListModel = new ListModel(
      [],
      (item: any) => {
        this.model.activeLanguage = item.id;
        this.languageSelectorAction.title = editorLocalization.getLocaleName(item.id);
        this.languagePopupModel.toggleVisibility();
      },
      true
    )
    this.languagePopupModel = new PopupModel(
      "sv-list",
      { model: this.languageListModel },
      "bottom",
      "center"
    );
    this.languagePopupModel.onHide = () => { this.languageSelectorAction.enabled = true; };
    this.languagePopupModel.onShow = () => { this.languageSelectorAction.enabled = false; }

    this.languageSelectorAction = new Action({
      id: "languageSelector",
      iconName: "icon-language",
      visible: false,
      component: "sv-action-bar-item-dropdown",
      action: () => {
        this.languagePopupModel.toggleVisibility();
      },
      popupModel: this.languagePopupModel
    });
    items.push(this.languageSelectorAction);

    return items;
  }
}
