import { createDropdownActionModel, IAction, ListModel } from "survey-core";
import { ICreatorPlugin, SurveyCreatorModel, saveToFileHandler, getLocString } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";
import { listComponentCss } from "./presets-theme/list-theme";
import { basic, advanced, expert } from "./default-settings";
export class TabPresetsPlugin implements ICreatorPlugin {
  public model: CreatorPresetEditorModel;
  public static iconName = "icon-settings";
  private activeTab;
  private currentPresetIndex = 0;
  private currentValue;
  private designerPlugin;
  private toolboxCompact;
  private defaultJson;

  private presetsList: ListModel;

  private showPresets() {
    this.activeTab = this.creator.activeTab;
    this.creator.activeTab = "presets";
  }

  private hidePresets() {
    this.creator.onActiveTabChanging.remove(this.preventTabSwitch);
    this.creator.activeTab = this.activeTab;
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addTab({ name: "presets", locTitleNaqme: "presets.plugin.presetsTab", plugin: this, iconName: TabPresetsPlugin.iconName });
    creator.tabs.filter(t => t.id == "presets")[0].css = "svc-tabbed-menu-item-container--presets";
    this.designerPlugin = creator.getPlugin("designer");
    const settingsPage = this.creator.sidebar.getPageById("creatorTheme");
    settingsPage.componentData.showPresets = () => this.showPresets();
    settingsPage.componentName = "svc-presets-property-grid";
    this.toolboxCompact = creator.toolbox.forceCompact;
  }

  public saveToFileHandler = saveToFileHandler;

  private preventTabSwitch = (_, options) => {
    options.allow = false;
  };

  public activate(): void {
    this.creator.onActiveTabChanging.add(this.preventTabSwitch);
    this.model = new CreatorPresetEditorModel({}, this.creator, this.defaultJson);
    this.defaultJson = { ...this.model.defaultJson };
    if (this.currentValue) {
      this.model.model.data = this.currentValue;
    }
    this.designerPlugin.activateSidebar();
    this.model.model.onComplete.add(() => this.hidePresets());

    const presets = this.model?.model.editablePresets.map(p => <IAction>{ id: p.fullPath, locTitleName: "presets." + p.fullPath + ".navigationTitle" });
    let settingsAction: IAction;

    const keep = (item: IAction) => {
      settingsAction.popupModel.show();
    };
    const tools = [
      { id: "save", locTitleName: "presets.plugin.save", markerIconName: "check-24x24", needSeparator: true, action: () => this.hidePresets() },
      { id: "defaultSettings", locTitleName: "presets.plugin.defaultSettings", needSeparator: true, css: "sps-list__item--label", enabled: false },
      { id: "basic", locTitleName: "presets.plugin.basic", action: (item: IAction) => { keep(item); this.model.json = basic; } },
      { id: "advanced", locTitleName: "presets.plugin.advanced", action: (item: IAction) => { keep(item); this.model.json = advanced; } },
      { id: "expert", locTitleName: "presets.plugin.expert", action: (item: IAction) => { keep(item); this.model.json = expert; } },
      { id: "file", locTitleName: "presets.plugin.file", needSeparator: true, css: "sps-list__item--label", enabled: false },
      { id: "import", locTitleName: "presets.plugin.import", markerIconName: "import-24x24", action: (item: IAction) => { keep(item); this.model?.loadJsonFile(); } },
      { id: "export", locTitleName: "presets.plugin.export", markerIconName: "download-24x24", action: (item: IAction) => { keep(item); this.model?.downloadJsonFile(); } },
      { id: "edit", locTitleName: "presets.plugin.edit", needSeparator: true, css: "sps-list__item--label", enabled: false },
      { id: "reset-current", locTitleName: "presets.plugin.resetLanguages", action: () => { this.model?.resetToDefaults("page_languages"); } },
      { id: "reset", locTitleName: "presets.plugin.resetAll", css: "sps-list__item--alert", action: () => { this.model?.resetToDefaults(); } },
    ];

    presets.forEach(p => {
      p.action = (item)=>{
        this.presetsList.selectedItem = item;
        keep(item);
        this.model.model.currentPage = this.model.model.getPageByName(item.id);
      };
    });
    settingsAction = createDropdownActionModel({
      id: "presets-menu",
      locTooltipName: "ed.creatorPresetsTitle",
      iconName: "navmenu-24x24",
      css: "sps-menu-floating-action",
      action: () => {
        if (settingsAction.popupModel.isVisible) {
          setTimeout(() => settingsAction.popupModel.hide(), 1);
        }
      }
    }, {
      items: [
        { id: "creator-presets", locTitleName: "presets.plugin.creatorPresets", css: "sps-list__item--label", enabled: false },
        ...presets,
        ...tools],
      showPointer: false,
      verticalPosition: "top",
      horizontalPosition: "center",
      searchEnabled: false,
      cssClass: "sps-popup-menu sps-popup-menu--always-on-top",
      cssClasses: listComponentCss,
      onHide: () => { settingsAction.iconName = "navmenu-24x24"; },
      onShow: () => { settingsAction.iconName = "close-24x24"; }
    }, this.creator);
    const bottomActions = this.designerPlugin.tabControlModel.bottomToolbar.actions;
    bottomActions.forEach(a => a.visible = false);
    bottomActions.unshift(settingsAction);
    this.presetsList = settingsAction.popupModel.contentComponentData.model;
    const resetCurrentAction = this.presetsList.getActionById("reset-current");
    this.presetsList.selectedItem = this.presetsList.actions[0];
    this.model.model.onCurrentPageChanged.add((_, options) => {
      this.presetsList.selectedItem = this.presetsList.actions[this.model.model.currentPageNo + 1];
      resetCurrentAction.title = getLocString("presets.plugin.resetToDefaults").replace("{0}", this.model.model.currentPage.navigationTitle);
      resetCurrentAction.action = () => { this.model?.resetToDefaults(this.presetsList.selectedItem.id); };
    });

    setTimeout(() => {
      presets[this.currentPresetIndex].action(presets[this.currentPresetIndex]);
    }, 100);
  }

  public deactivate(): boolean {
    this.creator.toolbox.forceCompact = this.toolboxCompact;
    this.currentValue = this.model?.model.data;
    const bottomActions = this.designerPlugin.tabControlModel.bottomToolbar.actions;
    bottomActions.forEach(a => a.visible = true);
    bottomActions.splice(0, 1);
    this.currentPresetIndex = this.model?.model.currentPageNo || 0;
    if (this.model) {
      this.model.dispose();
    }
    this.model = undefined;
    return true;
  }

  public onLocaleChanged() {
    //this.presetsList.actions.forEach(a => a.locStrsChanged());
    if (this.model) {
      this.model.onLocaleChanged();
    }
  }
}