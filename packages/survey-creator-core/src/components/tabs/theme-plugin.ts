import { notShortCircuitAnd } from "../../utils/utils";
import { Action, ComputedUpdater, createDropdownActionModel, surveyCss, defaultV2ThemeName } from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { simulatorDevices } from "../simulator";
import { ThemeSurveyTabViewModel } from "./theme";
import { SidebarTabModel } from "../side-bar/side-bar-tab-model";

export class TabThemePlugin implements ICreatorPlugin {
  private deviceSelectorAction: Action;
  private orientationSelectorAction: Action;
  private invisibleToggleAction: Action;
  private testAgainAction: Action;
  private designerAction: Action;
  private prevPageAction: Action;
  private nextPageAction: Action;
  private resetTheme: Action;
  private importAction: Action;
  private exportAction: Action;
  private inputFileElement: HTMLInputElement;
  private simulatorTheme: any = surveyCss[defaultV2ThemeName];
  private sidebarTab: SidebarTabModel;

  public model: ThemeSurveyTabViewModel;

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
    this.deviceSelectorAction.title = getLocString("pe.simulator");
  }
  private updateActions() {
    if (this.creator.showSimulatorInTestSurveyTab) {
      this.setDevice(this.model.simulator.device);
      this.deviceSelectorAction.data.selectedItem = { id: this.model.simulator.device };
      this.orientationSelectorAction.title = getLocString("pe.portraitOrientation");
    }

    if (this.creator.showInvisibleElementsInTestSurveyTab) {
      this.invisibleToggleAction.css = this.model.showInvisibleElements ? "sv-action-bar-item--active" : "";
      this.invisibleToggleAction.visible = this.model.isRunning;
    }
  }

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
    this.sidebarTab.visible = false;
    this.testAgainAction.visible = false;
    this.resetTheme.visible = false;
    this.importAction.visible = false;
    this.exportAction.visible = false;
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
        .map((key) => ({ id: key, title: simulatorDevices[key].title }));
      this.deviceSelectorAction = createDropdownActionModel({
        id: "deviceSelector",
        iconName: "icon-device-desktop",
        mode: "small",
        visible: <any>new ComputedUpdater<boolean>(() => {
          return notShortCircuitAnd(this.creator.activeTab === "theme", this.creator.showSimulatorInTestSurveyTab);
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
          return notShortCircuitAnd(this.creator.activeTab === "theme", this.creator.showSimulatorInTestSurveyTab);
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

    this.designerAction = new Action({
      id: "svd-designer",
      iconName: "icon-preview",
      needSeparator: true,
      action: () => { this.creator.makeNewViewActive("designer"); },
      active: <any>new ComputedUpdater<boolean>(() => this.creator.activeTab === "theme"),
      visible: <any>new ComputedUpdater<boolean>(() => {
        return (this.creator.activeTab === "theme");
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

    this.resetTheme = new Action({
      id: "resetTheme",
      iconName: "icon-reset",
      mode: "small",
      visible: <any>new ComputedUpdater<boolean>(() => {
        return (this.creator.activeTab === "theme");
      }),
      action: () => {
        this.model.resetTheme();
      }
    });
    items.push(this.resetTheme);

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
    this.creator.footerToolbar.actions.push(this.testAgainAction);
    this.invisibleToggleAction && (this.creator.footerToolbar.actions.push(this.invisibleToggleAction));
    this.creator.footerToolbar.actions.push(this.prevPageAction);
    this.creator.footerToolbar.actions.push(this.nextPageAction);
    this.creator.footerToolbar.actions.push(this.designerAction);
  }
}
