import { Action, ListModel, PopupModel, SurveyModel } from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { simulatorDevices } from "../simulator";
import { TestSurveyTabViewModel } from "./test";

export class TabTestPlugin implements ICreatorPlugin {
  private languageSelectorAction: Action;
  private languagePopupModel: PopupModel;
  private deviceSelectorAction: Action;
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
  private get testSurveyAgainText() {
    return getLocString("ed.testSurveyAgain");
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

    this.languageSelectorAction.title = editorLocalization.getLocaleName(this.model.activeLanguage);
    this.languageSelectorAction.visible = this.model.showDefaultLanguageInTestSurveyTab;

    this.setDevice(this.model.simulator.device);
    this.deviceSelectorAction.visible = this.model.showSimulator;
    this.orientationSelectorAction.title = getLocString("pe.landscapeOrientation");
    this.orientationSelectorAction.visible = this.model.showSimulator;
    this.invisibleToggleAction.css = this.model.showInvisibleElements ? "sv-action-bar-item--active" : "";
    this.invisibleToggleAction.title = getLocString("ts.showInvisibleElements");
    this.invisibleToggleAction.visible = this.model.isRunning;
  }
  public update(): void {
    if (!this.model) return;
    const options = {
      showPagesInTestSurveyTab: this.creator.showPagesInTestSurveyTab,
      showDefaultLanguageInTestSurveyTab: this.creator.showDefaultLanguageInTestSurveyTab,
      showInvisibleElementsInTestSurveyTab: this.creator.showInvisibleElementsInTestSurveyTab,
      showSimulatorInTestSurveyTab: this.creator.showSimulatorInTestSurveyTab
    };
    this.model.initialize(this.creator.JSON, options);
    this.languagePopupModel.contentComponentData.model.setItems(this.model.languages);
    this.model.show();
    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "showDefaultLanguageInTestSurveyTab") {
        this.languageSelectorAction.visible = this.model.showDefaultLanguageInTestSurveyTab;
      }
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
      title: this.testSurveyAgainText,
      action: () => {
        this.model.testAgain();
      }
    });
    items.push(this.testAgainAction);
    
    const deviceSelectorItems = Object.keys(simulatorDevices)
      .filter((key) => !!simulatorDevices[key].title)
      .map((key) => ({ id: key, title: simulatorDevices[key].title }));
    const devicePopupModel: PopupModel = new PopupModel(
      "sv-list",
      {
        model: new ListModel(
          deviceSelectorItems,
          (item: any) => {
            this.setDevice(item.id);
            devicePopupModel.toggleVisibility();
          },
          true
        )
      },
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

    this.languagePopupModel = new PopupModel(
      "sv-list",
      {
        model: new ListModel(
          [],
          (item: any) => {
            this.model.activeLanguage = item.id;
            this.languageSelectorAction.title = editorLocalization.getLocaleName(this.model.activeLanguage);
            this.languagePopupModel.toggleVisibility();
          },
          true
        )
      },
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
