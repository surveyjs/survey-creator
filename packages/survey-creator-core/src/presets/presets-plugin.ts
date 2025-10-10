import { createDropdownActionModel, IAction } from "survey-core";
import { ICreatorPlugin, SurveyCreatorModel, saveToFileHandler, getLocString } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";
import { listComponentCss } from "./presets-theme/list-theme";
export class TabPresetsPlugin implements ICreatorPlugin {
  public model: CreatorPresetEditorModel;
  public static iconName = "icon-settings";
  private activeTab;
  private currentPresetIndex = 0;
  private currentValue;
  private designerPlugin;
  private toolboxCompact;
  private defaultJson;

  private showPresets() {
    this.activeTab = this.creator.activeTab;
    this.creator.activeTab = "presets";
  }

  private hidePresets() {
    this.creator.onActiveTabChanging.remove(this.preventTabSwitch);
    this.creator.activeTab = this.activeTab;
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addTab({ name: "presets", title: getLocString("presets.plugin.presetsTab"), plugin: this, iconName: TabPresetsPlugin.iconName });
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

    const presets = this.model?.model.pages.map(p => <IAction>{ id: p.name, title: p.navigationTitle });
    const tools = [
      { id: "save", title: getLocString("presets.plugin.save"), css: "sps-list__item--positive", markerIconName: "check-24x24", needSeparator: true, action: () => this.hidePresets() },
      { id: "import", title: getLocString("presets.plugin.import"), markerIconName: "import-24x24", action: () => { this.model?.loadJsonFile(); } },
      { id: "export", title: getLocString("presets.plugin.export"), markerIconName: "download-24x24", action: () => { this.model?.downloadJsonFile(); } },
      { id: "reset-current", title: getLocString("presets.plugin.resetLanguages"), needSeparator: true, action: () => { this.model?.resetToDefaults("page_languages"); } },
      { id: "reset", title: getLocString("presets.plugin.resetAll"), action: () => { this.model?.resetToDefaults(); } },
    ];
    let settingsAction;
    let presetsList;
    presets.forEach(p => {
      p.action = (item)=>{
        presetsList.selectedItem = item;
        settingsAction.popupModel.show();
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
      items: [...presets, ...tools],
      showPointer: false,
      verticalPosition: "top",
      horizontalPosition: "center",
      cssClass: "sps-popup-menu sps-popup-menu--always-on-top",
      cssClasses: listComponentCss,
      onHide: () => { settingsAction.iconName = "navmenu-24x24"; },
      onShow: () => { settingsAction.iconName = "close-24x24"; }
    }, this.creator);
    const bottomActions = this.designerPlugin.tabControlModel.bottomToolbar.actions;
    bottomActions.forEach(a => a.visible = false);
    bottomActions.unshift(settingsAction);
    presetsList = settingsAction.popupModel.contentComponentData.model;
    const resetCurrentAction = presetsList.getActionById("reset-current");
    presetsList.selectedItem = presetsList.actions[0];
    this.model.model.onCurrentPageChanged.add((_, options) => {
      presetsList.selectedItem = presetsList.actions[this.model.model.currentPageNo];
      resetCurrentAction.title = getLocString("presets.plugin.resetToDefaults").replace("{0}", this.model.model.currentPage.navigationTitle);
      resetCurrentAction.action = () => { this.model?.resetToDefaults(presetsList.selectedItem.id); };
    });
    presets[this.currentPresetIndex].action(presets[this.currentPresetIndex]);
    setTimeout(() => settingsAction.popupModel.show(), 100);
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
}