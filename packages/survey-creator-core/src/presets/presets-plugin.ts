import { createDropdownActionModel, IAction, ListModel, settings as libSettings, EventBase, LocalizableString } from "survey-core";
import { ICreatorPlugin, ICreatorPresetData, SurveyCreatorModel, saveToFileHandler, getLocString } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";
import { listComponentCss } from "./presets-theme/list-theme";
//import { basic, advanced, expert } from "./default-settings";
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

  private confirmReset(onApply: ()=>void) {
    libSettings.confirmActionAsync(getLocString("presets.plugin.resetConfirmation"),
      (confirm) => {
        if (confirm) {
          onApply();
        }
      },
      {
        applyTitle: getLocString("presets.plugin.resetConfirmationOk"),
        locale: this.creator.locale,
        cssClass: "sv-popup--confirm svc-creator-popup"
      }
    );

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

  /**
   * An event that is raised when...
   *
   * Parameters:
   *
   * - `sender`: `TabPresetsPlugin`\
   * A `TabPresetsPlugin` instance that raised the event.
   * - `options.preset`: [`ICreatorPresetData`](https://surveyjs.io/form-library/documentation/api-reference/...)\
   * A selected theme.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/.../ (linkStyle))
   * @see availableThemes
   * @see addTheme
   * @see removeTheme
   */
  public onPresetSaved = new EventBase<TabPresetsPlugin, { preset: ICreatorPresetData }>();

  protected saveHandler() {
    this.onPresetSaved.fire(this, { preset: this.model.json });
    this.hidePresets();
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

    //const presets = this.model?.model.editablePresets.map(p => <IAction>{ id: p.pageName, locTitleName: "presets." + p.fullPath + ".navigationTitle" });
    const presets = this.model?.model.pages.map(p => <IAction>{ id: p.name, title: p.navigationTitle });
    let settingsAction: IAction;

    const keep = (item: IAction) => {
      settingsAction.popupModel.show();
    };
    const tools = [
      { id: "save", title: getLocString("presets.plugin.save"), markerIconName: "check-24x24", needSeparator: true, action: () => this.saveHandler() }, //locTitleName: "presets.plugin.save"
      { id: "defaultSettings", title: getLocString("presets.plugin.defaultSettings"), needSeparator: true, css: "sps-list__item--label", enabled: false },
      //{ id: "basic", title: getLocString("presets.plugin.basic"), action: (item: IAction) => { keep(item); this.model.json = basic; } },
      //{ id: "advanced", title: getLocString("presets.plugin.advanced"), action: (item: IAction) => { keep(item); this.model.json = advanced; } },
      //{ id: "expert", title: getLocString("presets.plugin.expert"), action: (item: IAction) => { keep(item); this.model.json = expert; } },
      { id: "file", title: getLocString("presets.plugin.file"), needSeparator: true, css: "sps-list__item--label", enabled: false },
      { id: "import", title: getLocString("presets.plugin.import"), markerIconName: "import-24x24", action: (item: IAction) => { keep(item); this.model?.loadJsonFile(); } },
      { id: "export", title: getLocString("presets.plugin.export"), markerIconName: "download-24x24", action: (item: IAction) => { keep(item); this.model?.downloadJsonFile(); } },
      { id: "edit", title: getLocString("presets.plugin.edit"), needSeparator: true, css: "sps-list__item--label", enabled: false },
      { id: "reset-current", title: getLocString("presets.plugin.resetLanguages"), action: () => { this.confirmReset(()=>this.model?.resetToDefaults("page_languages")); } },
      { id: "reset", title: getLocString("presets.plugin.resetAll"), css: "sps-list__item--alert", action: () => { this.confirmReset(() => this.model?.resetToDefaults()); } },
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
      tooltip: getLocString("presets.plugin.creatorPresets"),
      iconName: "navmenu-24x24",
      css: "sps-menu-floating-action",
      action: () => {
        if (settingsAction.popupModel.isVisible) {
          setTimeout(() => settingsAction.popupModel.hide(), 1);
        }
      }
    }, {
      items: [
        { id: "creator-presets", title: getLocString("presets.plugin.creatorPresets"), css: "sps-list__item--label", enabled: false },
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
    }, this.model.model);
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