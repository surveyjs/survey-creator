import { notShortCircuitAnd } from "../../utils/utils";
import { Action, ComputedUpdater, createDropdownActionModel, surveyCss, defaultThemeName, IAction, ListModel, PopupModel, surveyLocalization } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { simulatorDevices } from "../simulator";
import { TestSurveyTabViewModel } from "./test";
import { listComponentCss } from "../list-theme";

export class TabTestPlugin implements ICreatorPlugin {
  private languageSelectorAction: Action;
  protected changeThemeAction: Action;
  private deviceSelectorAction: Action;
  private orientationSelectorAction: Action;
  private invisibleToggleAction: Action;
  private testAgainAction: Action;
  private designerAction: Action;
  private previewAction: Action;
  private prevPageAction: Action;
  private nextPageAction: Action;
  private simulatorTheme: any = surveyCss[defaultThemeName];

  public static iconName = "icon-preview";

  public model: TestSurveyTabViewModel;
  private _previewDevice: string = "";
  public get previewDevice(): string {
    if (!!this.model) {
      this._previewDevice = this.model.simulator.device;
    }
    return this._previewDevice;
  }
  public set previewDevice(newValue: string) {
    this.setDevice(newValue);
  }

  private setDevice(newValue: string) {
    this._previewDevice = newValue || "desktop";
    if (!!this.model) {
      this.model.simulator.device = newValue;
      this.model.simulator.resetZoomParameters();
    }
    let currentType = simulatorDevices[this._previewDevice].deviceType;
    this.orientationSelectorAction.enabled = currentType != "desktop";
    this.deviceSelectorAction.iconName = "icon-device-" + currentType;
    this.deviceSelectorAction.title = getLocString("pe.simulator");
    this.deviceSelectorAction.data.selectedItem = { id: this._previewDevice };
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
      this.invisibleToggleAction.active = this.model.showInvisibleElements;
      this.invisibleToggleAction.visible = this.model.isRunning;
    }
    if (this.creator.showDefaultLanguageInTestSurveyTab != undefined) {
      this.setDefaultLanguageOption(this.creator.showDefaultLanguageInTestSurveyTab);
    }
  }
  private setPreviewTheme(themeName: string): void {
    this.simulatorTheme = surveyCss[themeName] || surveyCss[defaultThemeName];
  }
  private createVisibleUpdater() {
    return <any>new ComputedUpdater<boolean>(() => { return this.creator.activeTab === "preview"; });
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addTab({ name: "preview", plugin: this, iconName: TabTestPlugin.iconName });
    this.setPreviewTheme(this.creator.previewTheme);
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  public activate(): void {
    const tabModel = new TestSurveyTabViewModel(this.creator, this.simulatorTheme);
    tabModel.simulator.device = this.previewDevice || this.creator.previewDevice || "desktop";
    tabModel.simulator.landscape = this.creator.previewOrientation != "portrait";
    this.model = tabModel;
    this.update();
  }
  public update(): void {
    if (!this.model) return;
    const options = {
      showPagesInTestSurveyTab: this.creator.showPagesInTestSurveyTab,
    };
    this.testAgainAction.locStrsChanged();
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
      this._previewDevice = this.model.simulator.device;
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
        css: "sv-action--deviceSelector",
        iconName: "icon-device-desktop",
        iconSize: "auto",
        mode: "small",
        visible: <any>new ComputedUpdater<boolean>(() => {
          return notShortCircuitAnd(this.creator.activeTab === "preview", this.creator.showSimulatorInTestSurveyTab, !this.creator.isTouch);
        }),
      }, {
        items: deviceSelectorItems,
        allowSelection: true,
        onSelectionChanged: (item: any) => { this.setDevice(item.id); },
        horizontalPosition: "center",
        cssClass: "svc-creator-popup",
        cssClasses: listComponentCss,
        onHide: () => { this.deviceSelectorAction.enabled = true; },
        onShow: () => { this.deviceSelectorAction.enabled = false; }
      }, this.creator);
      items.push(this.deviceSelectorAction);

      this.orientationSelectorAction = new Action({
        id: "orientationSelector",
        css: "sv-action--orientationSelector",
        iconName: "icon-device-rotate",
        iconSize: "auto",
        mode: "small",
        visible: <any>new ComputedUpdater<boolean>(() => {
          return notShortCircuitAnd(this.creator.activeTab === "preview", this.creator.showSimulatorInTestSurveyTab, !this.creator.isTouch);
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
        css: "sv-action--showInvisible",
        iconName: "icon-invisible-items",
        iconSize: "auto",
        mode: "small",
        needSeparator: <any>new ComputedUpdater<boolean>(() => {
          return !this.creator.isMobileView;
        }),
        locTitleName: "ts.showInvisibleElements",
        visible: false,
        action: () => {
          this.model.showInvisibleElements = !this.model.showInvisibleElements;
          this.invisibleToggleAction.active = !this.invisibleToggleAction.active;
          this.invisibleToggleAction.title = getLocString(!this.model.showInvisibleElements ? "ts.showInvisibleElements" : "ts.hideInvisibleElements");
        }
      });
      items.push(this.invisibleToggleAction);
    }

    this.languageSelectorAction = createDropdownActionModel({
      id: "languageSelector",
      iconName: "icon-language",
      iconSize: "auto",
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
      cssClass: "svc-creator-popup",
      cssClasses: listComponentCss,
      onHide: () => { this.languageSelectorAction.enabled = true; },
      onShow: () => { this.languageSelectorAction.enabled = false; }
    }, this.creator);
    items.push(this.languageSelectorAction);

    this.designerAction = new Action({
      id: "svd-designer",
      css: "sv-action--svd-designer",
      iconName: "icon-config",
      iconSize: "auto",
      action: () => { this.creator.switchTab("designer"); },
      visible: this.createVisibleUpdater(),
      locTitleName: "ed.designer",
      showTitle: false
    });

    this.previewAction = new Action({
      id: "svd-preview",
      css: "sv-action--svd-preview",
      iconName: "icon-preview",
      iconSize: "auto",
      active: true,
      visible: this.createVisibleUpdater(),
      locTitleName: "tabs.preview",
      showTitle: false,
      action: () => { }
    });

    this.prevPageAction = new Action({
      id: "prevPage",
      css: "sv-action--prevPage",
      iconName: "icon-arrow-left_16x16",
      iconSize: "auto",
      title: getLocString("ts.prevPage"),
      showTitle: false,
      needSeparator: <any>new ComputedUpdater<boolean>(() => {
        return this.creator.isMobileView;
      }),
      visible: false
    });

    this.nextPageAction = new Action({
      id: "nextPage",
      css: "sv-action--nextPage",
      iconName: "icon-arrow-right_16x16",
      iconSize: "auto",
      title: getLocString("ts.nextPage"),
      showTitle: false,
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
