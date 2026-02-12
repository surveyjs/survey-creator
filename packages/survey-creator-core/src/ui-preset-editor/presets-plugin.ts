import { createDropdownActionModel, IAction, ListModel, settings as libSettings, EventBase, LocalizableString, hasLicense, glc, ActionContainer, Action, settings, IDialogOptions, SurveyModel, QuestionTextModel, QuestionMatrixDynamicModel, Serializer } from "survey-core";
import { ICreatorPlugin, ComponentContainerModel, UIPreset, SurveyCreatorModel, saveToFileHandler, getLocString, ICreatorPresetConfig, PredefinedCreatorPresets } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";
import { listComponentCss } from "./presets-theme/list-theme";
import { PresetsManager, IPresetListItem } from "./presets-manager";

interface IConfirmDialogOptions {
  title: string;
  message: string;
  iconName: string;
  showCloseButton: boolean;
  applyText: string;
  cancelText: string;
  onApply: () => boolean; onCancel: () => void;
}

export function confirm(creator: SurveyCreatorModel, options: IConfirmDialogOptions) {
  const locStrTitle = new LocalizableString(undefined as any, false);
  locStrTitle.defaultValue = options.title;
  const locStrMessage = new LocalizableString(undefined as any, false);
  locStrMessage.defaultValue = options.message;

  const contentModelElements = [
    { componentName: "sv-svg-icon", componentData: { iconName: options.iconName, size: "auto", className: "svc-creator-popup__icon" } },
    { componentName: "sv-string-viewer", componentData: {
      locStr: locStrTitle,
      locString: locStrTitle,
      model: locStrTitle,
      textCssClass: "svc-creator-popup__title" }
    },
    { componentName: "sv-string-viewer", componentData: {
      locStr: locStrMessage,
      locString: locStrMessage,
      model: locStrMessage,
      textCssClass: "svc-creator-popup__message" } },
  ];
  const contentModel = new ComponentContainerModel();
  contentModel.elements = contentModelElements;
  libSettings.showDialog({
    componentName: "svc-component-container",
    data: { model: contentModel },
    onApply: () => { return options.onApply(); },
    onCancel: () => { return options.onCancel(); },
    cssClass: "svc-creator-popup",
    displayMode: "popup",
    showCloseButton: options.showCloseButton,
  }, creator.rootElement);
}
/**
 * A class that instantiates the Preset Editor and provides APIs to manage its elements.
 */
export class UIPresetEditor implements ICreatorPlugin {
  static defaultPresetName = "expert";

  public model: CreatorPresetEditorModel;
  public static iconName = "icon-settings";
  private activeTab: string = "designer";
  private currentPresetIndex = 0;
  private currentValue;
  private designerPlugin;
  private toolboxCompact;
  private defaultJson;

  private presetsManager;

  private pagesList: ListModel;
  private presetsList: ListModel;

  private saveAction: Action;
  private saveCount = 0;

  /**
   * Custom function to handle preset saving. When set, it is called instead of the default save handler.
   * @param saveNo The sequential save number (0-based).
   * @param callback Call this when the custom save is complete to apply the default save behavior.
   */
  public savePresetFunc: (saveNo: number, callback: () => void) => void;

  /**
   * An event raised when the presets list is saved in the Edit Presets List dialog.
   *
   * Parameters:
   *
   * - `sender`: `UIPresetEditor`\
   * A `UIPresetEditor` instance that raised the event.
   * - `options.presets`: `IPresetListItem[]`\
   * The updated presets list.
   */
  public onPresetListSaved = new EventBase<UIPresetEditor, { presets: IPresetListItem[] }>();

  private showPresets() {
    this.activeTab = this.creator.activeTab;
    this.creator.activeTab = "presets";
  }

  private hidePresets() {
    if (this.presetsManager && !this.presetsManager.isSaved) {
      this.model.json = this.defaultJson;
      this.model.applyFromSurveyModel(false);
    }
    this.presetsManager.update();
    this.presetsManager.presetSelector.value = this.presetsList.selectedItem.id;
    this.creator.onActiveTabChanging.remove(this.preventTabSwitch);
    this.creator.activeTab = this.activeTab;
  }

  private confirmReset(onApply: ()=>void) {
    confirm(this.creator,
      {
        title: getLocString("presets.plugin.resetConfirmation"),
        message: getLocString("presets.plugin.resetConfirmationMessage"),
        applyText: getLocString("presets.plugin.resetConfirmationOk"),
        cancelText: getLocString("presets.plugin.resetConfirmationCancel"),
        iconName: "icon-warning-24x24",
        showCloseButton: false,
        onApply: () => { onApply(); return true; }, onCancel: () => { return true; }
      });
  }
  private confirmQuit(onApply: ()=>void, onDiscard: ()=>void) {
    confirm(this.creator, {
      title: getLocString("presets.plugin.quitConfirmation"),
      message: getLocString("presets.plugin.quitConfirmationMessage"),
      applyText: getLocString("presets.plugin.quitConfirmationOk"),
      cancelText: getLocString("presets.plugin.quitConfirmatioDiscard"),
      iconName: "icon-warning-24x24",
      showCloseButton: true,
      onApply: () => { onApply(); return true; }, onCancel: () => { onDiscard(); return true; }
    });
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addTab({ name: "presets", title: getLocString("presets.plugin.presetsTab"), plugin: this, iconName: UIPresetEditor.iconName });
    creator.tabs.filter(t => t.id == "presets")[0].css = "svc-tabbed-menu-item-container--presets";
    this.designerPlugin = creator.getPlugin("designer");
    const settingsPage = this.creator.sidebar.getPageById("creatorTheme");
    settingsPage.componentData.elements[0].componentName = "svc-presets-property-grid";
    settingsPage.componentData.elements[0].componentData.model.showPresets = () => this.showPresets();
    this.toolboxCompact = creator.toolbox.forceCompact;
    this.presetsManager = new PresetsManager(creator);
    this.presetsManager.onPresetListSaved = (presets) => {
      this.onPresetListSaved.fire(this, { presets });
    };
    this.presetsManager.selectPresetCallback = (preset: ICreatorPresetConfig) => {
      this.saveAction.enabled = PredefinedCreatorPresets.indexOf(preset.presetName) === -1;
      this.model.json = preset.json;
      this.setStatus("initial");
    };
    this.creator.onSurveyInstanceCreated.add((_, o) => {
      if (o.area == "designer-tab:creator-settings:preset") {
        this.presetsManager.presetSelector = o.survey.getQuestionByName("presetName");
        //this.presetsManager.addPresetsListEditor(o.survey, (item) => { });
        this.presetsManager.update();
      }
    });
  }

  /**
   * Adds a new UI preset to UI Preset Editor.
   * @param preset A [UI preset] to add.
   * @see removePreset
   */
  public addPreset(preset: UIPreset) {
    this.presetsManager.addPreset({ presetName: preset.name, json: preset.getJson() });
  }
  /**
   * Removes a UI theme from Theme Editor.
   * @param presetAccessor A [UI preset] to delete or a preset identifier.
   * @see addPreset
   */
  public removePreset(presetAccessor: string | UIPreset): void {
    this.presetsManager.removePreset(typeof(presetAccessor) === "string" ? presetAccessor : presetAccessor.name);
  }

  /**
   * Returns a preset by name.
   * @param name The preset identifier.
   * @returns The preset configuration or undefined if not found.
   */
  public getPreset(name: string): ICreatorPresetConfig | undefined {
    return this.presetsManager.getPreset(name);
  }

  /**
   * Returns the currently selected preset.
   */
  public getCurrentPreset(): ICreatorPresetConfig | undefined {
    return this.presetsManager.getCurrentPreset();
  }

  /**
   * Mutable array of all presets. Includes presets from register, add, or user-saved.
   * Each item has: name, visible, removable (true for custom presets), sortable.
   */
  public get presets(): IPresetListItem[] {
    return this.presetsManager.getPresetsArray();
  }

  private performSave() {
    if (this.savePresetFunc) {
      this.savePresetFunc(this.saveCount, () => {
        this.saveHandler();
      });
    } else {
      this.saveHandler();
    }
  }

  protected saveHandler() {
    this.defaultJson = JSON.parse(JSON.stringify(this.model.json));
    this.saveCount++;
    this.setStatus("saved");
  }
  protected saveAsHandler() {
    this.presetsManager.saveAs(this.model.json, ()=> { this.setStatus("saved"); });
  }
  protected setStatus(status: "saved" | "unsaved" | "initial") {
    this.presetsManager.setStatus(status === "unsaved");
    const statusAction = this.model.navigationBar.getActionById("presets-status");
    statusAction.visible = status === "unsaved";
    statusAction.title = getLocString(status === "unsaved" ? "presets.plugin.unsaved" : "presets.plugin.saved");
  }
  protected updateStatusAction(unsaved: boolean) {
    const statusAction = this.model.navigationBar.getActionById("presets-status");
    statusAction.visible = unsaved;
    statusAction.title = getLocString(unsaved ? "presets.plugin.unsaved" : "presets.plugin.saved");
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

    //const presets = this.model?.model.editablePresets.map(p => <IAction>{ id: p.pageName, locTitleName: "presets." + p.fullPath + ".navigationTitle" });
    const presets = this.model?.model.pages.map(p => <IAction>{ id: p.name, title: p.navigationTitle });

    this.model.model.onComplete.add(() => this.hidePresets());
    const defaultPresets = this.presetsManager.presetsMenuItems;

    const tools = [
      { id: "save", title: getLocString("presets.plugin.save"), enabled: false, action: () => this.performSave() }, //locTitleName: "presets.plugin.save"
      { id: "saveAs", title: getLocString("presets.plugin.saveAs"), action: () => this.saveAsHandler() }, //locTitleName: "presets.plugin.save"
      { id: "import", title: getLocString("presets.plugin.import"), markerIconName: "import-24x24", needSeparator: true, action: (item: IAction) => { this.model?.loadJsonFile(); } },
      { id: "export", title: getLocString("presets.plugin.export"), markerIconName: "download-24x24", action: (item: IAction) => { this.model?.downloadJsonFile(); } },
      { id: "reset-current", title: getLocString("presets.plugin.resetLanguages"), needSeparator: true, action: () => { this.confirmReset(()=>this.model?.resetToDefaults("page_languages")); } },
      { id: "reset", title: getLocString("presets.plugin.resetAll"), css: "sps-list__item--alert", action: () => { this.confirmReset(() => this.model?.resetToDefaults()); } },
    ];

    presets.forEach(p => {
      p.action = (item)=>{
        this.pagesList.selectedItem = item;
        this.model.model.currentPage = this.model.model.getPageByName(item.id);
      };
    });
    const popupOptions = {
      showPointer: false,
      verticalPosition: "bottom" as any,
      horizontalPosition: "center" as any,
      searchEnabled: false,
      cssClass: "sps-popup-menu sps-popup-menu--dropdown",
      cssClasses: listComponentCss,
    };

    let curentlySelectedPreset: IAction;
    const listAction = createDropdownActionModel({
      items: [],
      id: "presets-list",
      iconName: "icon-chevron_16x16",
      iconSize: 16,
      title: getLocString("presets.plugin.creatorPresets"),
      css: "sps-navigation-action",
    }, {
      ...popupOptions,
      items: defaultPresets,
      onSelectionChanged: (selectedItem) => {
        if (selectedItem.id === "editPresetsList") {
          this.presetsList.selectedItem = curentlySelectedPreset;
          if (curentlySelectedPreset?.title) listAction.title = curentlySelectedPreset.title;
        } else {
          curentlySelectedPreset = selectedItem;
        }
      },
      onBlur: () =>{ listAction.popupModel.hide(); }
    }, this.model.model);

    const pagesAction = createDropdownActionModel({
      items: [],
      id: "presets-pages",
      iconName: "icon-chevron_16x16",
      iconSize: 16,
      title: getLocString("presets.plugin.select"),
      css: "sps-navigation-action",
    }, {
      ...popupOptions,
      items: presets,
      onBlur: () =>{ pagesAction.popupModel.hide(); }
    }, this.model.model);

    const editAction = createDropdownActionModel({
      items: [],
      id: "presets-edit",
      iconName: "icon-chevron_16x16",
      iconSize: 16,
      title: getLocString("presets.plugin.edit"),
      css: "sps-navigation-action",
    }, {
      ...popupOptions,
      onSelectionChanged: () => { editAction.title = getLocString("presets.plugin.edit"); },
      items: tools,
      onBlur: () =>{ editAction.popupModel.hide(); }
    }, this.model.model);

    const statusAction = new Action({
      id: "presets-status",
      enabled: false,
      visible: false,
      title: "Saved",
      css: "sps-navigation-action sps-navigation-action--label sps-navigation-action--large-icon",
    });

    const quitAction = new Action({
      id: "presets-quit",
      iconName: "icon-exit-24x24",
      title: getLocString("presets.plugin.quit"),
      css: "sps-navigation-action sps-navigation-action--right sps-navigation-action--large-icon",
      action: () => { this.confirmQuit(() => this.hidePresets(), () => this.hidePresets()); }
    });

    const bottomActions = this.designerPlugin.tabControlModel.bottomToolbar.actions;
    bottomActions.forEach(a => a.visible = false);
    if (defaultPresets.length > 0)this.model.navigationBar.addAction(listAction);
    this.model.navigationBar.addAction(pagesAction);
    this.model.navigationBar.addAction(editAction);
    this.model.navigationBar.addAction(statusAction);
    this.model.navigationBar.addAction(quitAction);
    this.pagesList = pagesAction.popupModel.contentComponentData.model;
    this.presetsList = listAction.popupModel.contentComponentData.model;
    this.presetsManager.presetsList = this.presetsList;
    const resetCurrentAction = editAction.popupModel.contentComponentData.model.getActionById("reset-current");
    this.saveAction = editAction.popupModel.contentComponentData.model.getActionById("save");
    this.pagesList.selectedItem = this.pagesList.actions[0];
    pagesAction.title = this.pagesList.selectedItem.title || "";

    this.model.model.onCurrentPageChanged.add((_, options) => {
      this.pagesList.selectedItem = this.pagesList.actions[this.model.model.currentPageNo];
      pagesAction.title = this.pagesList.selectedItem.title || "";
      resetCurrentAction.title = getLocString("presets.plugin.resetToDefaults").replace("{0}", this.model.model.currentPage.navigationTitle);
      resetCurrentAction.action = () => { this.model?.resetToDefaults(this.pagesList.selectedItem.id); };
    });

    this.model.model.onValueChanged.add((sender, options) => {
      this.setStatus("unsaved");
    });

    this.presetsList.selectedItem = this.presetsList.actions.filter(a => a.id == this.presetsManager.presetSelector?.value)[0];
    curentlySelectedPreset = this.presetsList.selectedItem;
    if (this.presetsList.selectedItem) {
      this.presetsList.selectedItem.action(this.presetsList.selectedItem);
      listAction.title = this.presetsList.selectedItem.title || "";
    }
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