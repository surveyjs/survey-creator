import { createDropdownActionModel, IAction, ListModel, settings as libSettings, EventBase, LocalizableString, hasLicense, glc, ActionContainer, Action } from "survey-core";
import { ICreatorPlugin, ICreatorPresetData, SurveyCreatorModel, saveToFileHandler, getLocString, PredefinedCreatorPresets, CreatorPresets } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";
import { listComponentCss } from "./presets-theme/list-theme";
import { HorizontalPosition, VerticalPosition } from "../../../../../survey-library/packages/survey-core/build/typings/src/utils/popup";
//import { basic, advanced, expert } from "./default-settings";

/**
 * A class that instantiates the Preset Editor and provides APIs to manage its elements.
 */
export class UIPresetEditor implements ICreatorPlugin {
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
    creator.addTab({ name: "presets", title: getLocString("presets.plugin.presetsTab"), plugin: this, iconName: UIPresetEditor.iconName });
    creator.tabs.filter(t => t.id == "presets")[0].css = "svc-tabbed-menu-item-container--presets";
    this.designerPlugin = creator.getPlugin("designer");
    const settingsPage = this.creator.sidebar.getPageById("creatorTheme");
    settingsPage.componentData.elements[0].componentName = "svc-presets-property-grid";
    settingsPage.componentData.elements[0].componentData.showPresets = () => this.showPresets();
    this.toolboxCompact = creator.toolbox.forceCompact;
  }

  /**
   * An event raised when a user clicks **Save & Exit** in the Preset Editor.
   *
   * Parameters:
   *
   * - `sender`: `UIPresetEditor`\
   * A `UIPresetEditor` instance that raised the event.
   * - `options.preset`: `ICreatorPresetData`\
   * A preset configuration that was applied to the Survey Creator.
   */
  public onPresetSaved = new EventBase<UIPresetEditor, { preset: ICreatorPresetData }>();

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

    const defaultPresets = PredefinedCreatorPresets.map(presetName => ({ id: presetName, title: getLocString("preset.names." + presetName), action: (item: IAction) => { keep(item); this.model.json = CreatorPresets[presetName].json; } })) as IAction[];
    if (defaultPresets.length > 0) {
      defaultPresets.unshift({ id: "defaultSettings", title: getLocString("presets.plugin.defaultSettings"), needSeparator: true, css: "sps-list__item--label", enabled: false });
    }

    const tools = [
      { id: "save", title: getLocString("presets.plugin.save"), markerIconName: "check-24x24", needSeparator: true, action: () => this.saveHandler() }, //locTitleName: "presets.plugin.save"
      { id: "file", title: getLocString("presets.plugin.file"), needSeparator: true, css: "sps-list__item--label", enabled: false },
      { id: "import", title: getLocString("presets.plugin.import"), markerIconName: "import-24x24", action: (item: IAction) => { this.model?.loadJsonFile(); } },
      { id: "export", title: getLocString("presets.plugin.export"), markerIconName: "download-24x24", action: (item: IAction) => { this.model?.downloadJsonFile(); } },
      { id: "edit", title: getLocString("presets.plugin.edit"), needSeparator: true, css: "sps-list__item--label", enabled: false },
      { id: "reset-current", title: getLocString("presets.plugin.resetLanguages"), action: () => { this.confirmReset(()=>this.model?.resetToDefaults("page_languages")); } },
      { id: "reset", title: getLocString("presets.plugin.resetAll"), css: "sps-list__item--alert", action: () => { this.confirmReset(() => this.model?.resetToDefaults()); } },
    ];

    presets.forEach(p => {
      p.action = (item)=>{
        this.presetsList.selectedItem = item;
        this.model.model.currentPage = this.model.model.getPageByName(item.id);
      };
    });
    const popupOptions = {
      showPointer: false,
      verticalPosition: "bottom" as VerticalPosition | undefined,
      horizontalPosition: "center" as HorizontalPosition | undefined,
      searchEnabled: false,
      cssClasses: listComponentCss
    };

    const listAction = createDropdownActionModel({
      items: [],
      id: "presets-list",
      iconName: "icon-chevron_16x16"
    }, {
      ...popupOptions,
      items: defaultPresets,
    }, this.model.model);

    const pagesAction = createDropdownActionModel({
      items: [],
      id: "presets-pages",
      iconName: "icon-chevron_16x16",
      css: "sps-navigation-action",
    }, {
      ...popupOptions,
      items: presets,
    }, this.model.model);

    const editAction = createDropdownActionModel({
      items: [],
      id: "presets-edit",
      iconName: "icon-chevron_16x16",
      title: getLocString("presets.plugin.edit"),
      css: "sps-navigation-action",
    }, {
      ...popupOptions,
      items: tools,
    }, this.model.model);

    const quitAction = new Action({
      id: "presets-quit",
      iconName: "icon-exit-24x24",
      title: getLocString("presets.plugin.quit"),
      css: "sps-navigation-action sps-navigation-action--right",
    });

    const bottomActions = this.designerPlugin.tabControlModel.bottomToolbar.actions;
    bottomActions.forEach(a => a.visible = false);
    if (defaultPresets.length > 0)this.model.navigationBar.addAction(listAction);
    this.model.navigationBar.addAction(pagesAction);
    this.model.navigationBar.addAction(editAction);
    this.model.navigationBar.addAction(quitAction);
    this.presetsList = pagesAction.popupModel.contentComponentData.model;
    const resetCurrentAction = editAction.popupModel.contentComponentData.model.getActionById("reset-current");
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

  public getLicenseText(hasCreatorLicense: boolean, creatorLicenseDateString: string): string {
    if (!hasLicense?.(8)) {
      const presetsLicenseDateString = glc?.(8)?.toLocaleDateString?.();
      if (presetsLicenseDateString) {
        return getLocString("presets.plugin.license2").replace("{date}", presetsLicenseDateString);
      }
      if (hasCreatorLicense) return getLocString("presets.plugin.license");
      return creatorLicenseDateString ?
        getLocString("presets.plugin.licenseCreator2").replace("{date}", creatorLicenseDateString) :
        getLocString("presets.plugin.licenseCreator");
    }
    return "";
  }
}