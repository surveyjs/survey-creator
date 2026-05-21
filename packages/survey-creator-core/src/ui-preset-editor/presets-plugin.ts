import { createDropdownActionModel, IAction, ListModel, settings as libSettings, EventBase, hasLicense, glc, Base, Action, settings, IDialogOptions, SurveyModel, QuestionTextModel, QuestionMatrixDynamicModel, Serializer, LocalizableString, PopupModel } from "survey-core";
import { ICreatorPlugin, SurveyCreatorModel, saveToFileHandler, getLocString, IPreset, PredefinedCreatorPresets, CreatorPresets } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";
import { PresetsManager, IPresetListItem } from "./presets-manager";
import { ComponentContainerModel, TabContainerViewModel, showConfirmDialog } from "survey-creator-core";

/**
 * A class that instantiates the UI Preset Editor and provides APIs to manage presets and their configuration.
 *
 * [UI Preset Editor Documentation](https://surveyjs.io/survey-creator/documentation/ui-preset-editor (linkStyle))
 *
 * [UI Preset Editor Demo](https://surveyjs.io/survey-creator/examples/ui-preset-editor/ (linkStyle))
 */
export class UIPresetEditor implements ICreatorPlugin {
  static defaultPresetName = "expert";

  public editor: CreatorPresetEditorModel;
  public model: TabContainerViewModel;
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
   * A function that handles saving a preset.
   *
   * Use the [`preset`](#preset) property to access the preset being saved.
   *
   * [How to Save and Load Presets](https://surveyjs.io/survey-creator/documentation/ui-preset-editor#save-and-load-custom-presets (linkStyle))
   * @param saveNo An incremental number that identifies the current change.
   * @param callback A callback function. Pass `saveNo` as the first argument. Set the second argument to `true` if the server successfully applied the change or `false` if it was rejected.
   */
  public savePresetFunc: (saveNo: number, callback: (no: number, isSuccess: boolean) => void) => void;

  /**
   * An event that is raised when the preset list is saved in the **Manage Presets** dialog.
   *
   * Parameters:
   *
   * - `sender`: `UIPresetEditor`\
   * A `UIPresetEditor` instance that raised the event.
   * - `options.presets`: [`IPresetListItem[]`](/survey-creator/documentation/api-reference/ipresetlistitem)\
   * The updated preset list.
   */
  public onPresetListSaved = new EventBase<UIPresetEditor, { presets: IPresetListItem[] }>();

  private showPresets() {
    this.activeTab = this.creator.activeTab;
    this.creator.activeTab = "presets";
  }

  private hidePresets() {
    if (this.presetsManager && !this.presetsManager.isSaved) {
      this.editor.json = this.defaultJson;
      this.editor.applyFromSurveyModel(false);
    }
    this.presetsManager.update();
    const selItem = this.presetsList?.selectedItem;
    if (selItem && this.presetsManager.presetSelector) {
      this.presetsManager.presetSelector.value = selItem.id !== PresetsManager.defaultConfigurationId ? selItem.id : "";
    }
    this.creator.onActiveTabChanging.remove(this.preventTabSwitch);
    this.creator.activeTab = this.activeTab;
  }

  private checkIfNotSaved(onApply: () => void) {
    if (this.presetsManager.isSaved) {
      onApply();
      return true;
    }
    return false;
  }
  private confirmReset(onApply: () => void) {
    showConfirmDialog(this.creator,
      {
        category: "danger",
        title: getLocString("presets.plugin.resetConfirmation"),
        message: getLocString("presets.plugin.resetConfirmationMessage"),
        applyText: getLocString("presets.plugin.resetConfirmationOk"),
        cancelText: getLocString("presets.plugin.resetConfirmationCancel"),
        iconName: "icon-warning-24x24",
        showCloseButton: false,
        onApply: () => { onApply(); return true; }, onCancel: () => { return true; }
      });
  }
  private confirmImport(onApply: () => void) {
    if (this.checkIfNotSaved(onApply)) return;
    showConfirmDialog(this.creator,
      {
        category: "danger",
        title: getLocString("presets.plugin.importConfirmation"),
        message: getLocString("presets.plugin.importConfirmationMessage"),
        applyText: getLocString("presets.plugin.importConfirmationOk"),
        cancelText: getLocString("presets.plugin.importConfirmationCancel"),
        iconName: "icon-warning-24x24",
        showCloseButton: false,
        onApply: () => { onApply(); return true; }, onCancel: () => { return true; }
      });
  }
  private confirmQuit(onApply: () => void, onDiscard: () => void) {
    if (this.checkIfNotSaved(onDiscard)) return;
    showConfirmDialog(this.creator, {
      title: getLocString("presets.plugin.quitConfirmation"),
      message: getLocString("presets.plugin.quitConfirmationMessage"),
      applyText: getLocString("presets.plugin.quitConfirmationSave"),
      cancelText: getLocString("presets.plugin.quitConfirmationDiscard"),
      iconName: "icon-warning-24x24",
      showCloseButton: true,
      onApply: () => { onApply(); return true; }, onCancel: () => { onDiscard(); return true; }
    });
  }

  constructor(private creator: SurveyCreatorModel) {
    this.model = new TabContainerViewModel();
    creator.addTab({ name: "presets", componentName: "svc-tab-container", title: getLocString("presets.plugin.presetsTab"), plugin: this, iconName: UIPresetEditor.iconName, isInternal: true });
    this.designerPlugin = creator.getPlugin("designer");
    const settingsPage = this.creator.sidebar.getPageById("creatorTheme");
    settingsPage.componentData.elements.unshift({
      componentName: "svc-side-bar-launch-card",
      componentData: {
        model: {
          onClick: () => this.showPresets(),
          title: getLocString("presets.plugin.buttonTitle"),
          description: getLocString("presets.plugin.buttonDescription")
        }
      }
    });
    this.toolboxCompact = creator.toolbox.forceCompact;
    this.presetsManager = new PresetsManager(creator);
    this.presetsManager.onPresetListSaved = (presets) => {
      this.onPresetListSaved.fire(this, { presets });
    };
    this.presetsManager.selectPresetCallback = (preset: IPreset) => {
      if (this.editor) {
        this.editor.json = preset.json;
        this.setStatus("initial");
      }
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
   * Adds a new preset to the UI Preset Editor.
   * @param preset An [`IPreset`](https://surveyjs.io/survey-creator/documentation/api-reference/ipreset) object to add.
   * @see removePreset
   */
  public addPreset(preset: IPreset) {
    this.presetsManager.addPreset(preset);
  }
  /**
   * Removes a preset from the UI Preset Editor.
   * @param presetAccessor An [`IPreset`](https://surveyjs.io/survey-creator/documentation/api-reference/ipreset) object to delete or a preset name.
   * @see addPreset
   */
  public removePreset(presetAccessor: string | IPreset): void {
    this.presetsManager.removePreset(typeof (presetAccessor) === "string" ? presetAccessor : presetAccessor.name);
  }

  /**
   * Returns a preset with the specified `name`.
   * @param name The preset name.
   * @returns An [`IPreset`](https://surveyjs.io/survey-creator/documentation/api-reference/ipreset) object or `undefined` if a preset with this `name` is not found.
   */
  public getPreset(name: string): IPreset | undefined {
    return this.presetsManager.getPreset(name);
  }

  /**
   * A [preset](/survey-creator/documentation/api-reference/ipreset) being configured in the UI Preset Editor.
   *
   * [UI Preset Editor Demo](https://surveyjs.io/survey-creator/examples/ui-preset-editor/ (linkStyle))
   * @see savePresetFunc
   */
  public get preset(): IPreset | undefined {
    const p = this.presetsManager.preset;
    if (p && this.editor) {
      return { ...p, json: this.editor.json };
    }
    return p;
  }

  /**
   * A mutable array of presets added to the UI Preset Editor either in code (using `registerUIPreset` or [`addPreset`](#addPreset)) or by the user.
   */
  public get availablePresets(): IPresetListItem[] {
    return this.presetsManager.getPresetsArray();
  }

  protected discardUnsaved() {
    this.editor.json = JSON.parse(JSON.stringify(this.defaultJson));
    this.editor.applyFromSurveyModel(false);
    this.setStatus("initial");
    this.creator.notify(getLocString("presets.plugin.discarded"));
  }

  protected performSave(closeOnSave = false) {
    if (this.savePresetFunc) {
      this.setStatus("saving");
      this.saveCount++;
      this.savePresetFunc(this.saveCount, (no: number, isSuccess: boolean) => {
        if (this.saveCount !== no) return;
        if (isSuccess) {
          this.saveHandler(closeOnSave);
        } else {
          this.setStatus("unsaved");
        }
      });
    } else {
      this.saveCount++;
      this.saveHandler(closeOnSave);
    }
  }

  protected saveHandler(closeOnSave = false) {
    this.defaultJson = JSON.parse(JSON.stringify(this.editor.json));
    this.setStatus("saved");
    if (closeOnSave) {
      this.hidePresets();
    }
  }
  private saveOrSaveAs(closeOnSave = false) {
    this.presetsManager.saveOrSaveAs(this.editor.json, () => { this.performSave(closeOnSave); });
  }
  protected saveAs(closeOnSave = false) {
    this.presetsManager.saveAs(this.editor.json, () => { this.performSave(closeOnSave); });
  }
  protected setStatus(status: "saved" | "unsaved" | "saving" | "initial") {
    this.presetsManager.setStatus(status === "unsaved");
    const statusAction = this.editor.navigationBar.getActionById("presets-status");
    statusAction.visible = status === "unsaved";
    statusAction.title = getLocString("presets.plugin.status." + status.toLowerCase());
  }
  public saveToFileHandler = saveToFileHandler;

  private preventTabSwitch = (_, options) => {
    options.allow = false;
  };

  private getActivePresetJson(): any {
    const presetName = this.creator.activePresetName || this.presetsManager.presetSelector?.value;
    if (presetName && CreatorPresets[presetName]) {
      return CreatorPresets[presetName].json || {};
    }
    return {};
  }

  public activate(): void {
    this.editor = new CreatorPresetEditorModel(this.getActivePresetJson(), this.creator, this.defaultJson);
    const survey = this.editor.model;
    const presetsTabClassName = "svc-tab-designer svc-tab-designer--presets";

    const surfaceContainer = new ComponentContainerModel({
      cssClass: presetsTabClassName,
      scrollable: true,
      elements: [
        { componentName: "sv-action-bar", componentData: { model: this.editor.navigationBar } },
        { componentName: "survey", componentData: { survey: survey, model: survey } }
      ]
    });

    let activeSurveyPopup: PopupModel | null = null;
    survey.onPopupVisibleChanged.add((_, options) => {
      if (options.visible) {
        activeSurveyPopup = options.popup;
      } else if (activeSurveyPopup === options.popup) {
        activeSurveyPopup = null;
      }
    });
    surfaceContainer.onScroll = () => {
      if (activeSurveyPopup?.isVisible) activeSurveyPopup.hide();
      this.editor.navigationBar.actions.forEach(a => a.hidePopup());
    };

    const presetsContainer = new ComponentContainerModel({
      wrapped: false,
      elements: [
        { componentName: "svc-component-container",
          componentData: {
            model: new ComponentContainerModel({
              elements: [{ componentName: "svc-toolbox", componentData: { model: this.creator } }],
              cssClass: "svc-flex-column"
            })
          }
        },
        { componentName: "svc-component-container", componentData: { model: surfaceContainer } }
      ]
    });
    this.model.containerModel = presetsContainer;
    this.creator.onActiveTabChanging.add(this.preventTabSwitch);

    this.defaultJson = { ...this.editor.defaultJson };
    if (this.currentValue) {
      this.editor.model.data = this.currentValue;
    }
    this.designerPlugin.activateSidebar();

    //const presets = this.model?.model.editablePresets.map(p => <IAction>{ id: p.pageName, locTitleName: "presets." + p.fullPath + ".navigationTitle" });
    const presets = this.editor?.model.visiblePages.map(p => <IAction>{ id: p.name, title: p.navigationTitle });

    this.editor.model.onComplete.add(() => this.hidePresets());
    const defaultPresets = this.presetsManager.presetsMenuItems;

    const tools = [
      { id: "save", title: getLocString("presets.plugin.save"), action: () => this.saveOrSaveAs() }, //locTitleName: "presets.plugin.save"
      { id: "saveAs", title: getLocString("presets.plugin.saveAs"), action: () => this.saveAs() }, //locTitleName: "presets.plugin.save"
      { id: "import", title: getLocString("presets.plugin.import"), markerIconName: "import-24x24", needSeparator: true, action: (item: IAction) => { this.confirmImport(() => { this.editor?.loadJsonFile(); }); } },
      { id: "export", title: getLocString("presets.plugin.export"), markerIconName: "download-24x24", action: (item: IAction) => { this.editor?.downloadJsonFile(); } },
      { id: "reset", title: getLocString("presets.plugin.resetAll"), needSeparator: true, appearance: { style: "alert" } as any, action: () => { this.confirmReset(() => { this.discardUnsaved(); }); } },
    ];

    presets.forEach(p => {
      p.action = (item) => {
        if (!this.editor) return;
        this.pagesList.selectedItem = item;
        this.editor.model.currentPage = this.editor.model.getPageByName(item.id);
      };
    });
    const popupOptions = {
      showPointer: false,
      verticalPosition: "bottom" as any,
      horizontalPosition: "center" as any,
      searchEnabled: false,
      cssClass: "sps-popup-menu sps-popup-menu--dropdown",
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
      onBlur: () => { listAction.popupModel.hide(); }
    }, this.editor.model);

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
      onBlur: () => { pagesAction.popupModel.hide(); }
    }, this.editor.model);

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
      onBlur: () => { editAction.popupModel.hide(); }
    }, this.editor.model);

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
      action: () => {
        this.confirmQuit(() => this.saveOrSaveAs(true), () => this.hidePresets());
      }
    });

    const bottomActions = this.designerPlugin.tabControlModel.bottomToolbar.actions;
    bottomActions.forEach(a => a.visible = false);
    if (defaultPresets.length > 0)this.editor.navigationBar.addAction(listAction);
    this.editor.navigationBar.addAction(pagesAction);
    this.editor.navigationBar.addAction(editAction);
    this.editor.navigationBar.addAction(statusAction);
    this.editor.navigationBar.addAction(quitAction);
    this.pagesList = pagesAction.popupModel.contentComponentData.model;
    this.presetsList = listAction.popupModel.contentComponentData.model;
    this.presetsManager.presetsList = this.presetsList;
    //const resetCurrentAction = editAction.popupModel.contentComponentData.model.getActionById("reset-current");
    this.saveAction = editAction.popupModel.contentComponentData.model.getActionById("save");
    this.pagesList.selectedItem = this.pagesList.actions[0];
    pagesAction.title = this.pagesList.selectedItem.title || "";

    this.editor.model.onCurrentPageChanged.add((_, options) => {
      this.pagesList.selectedItem = this.pagesList.actions[this.editor.model.currentPageNo];
      pagesAction.title = this.pagesList.selectedItem.title || "";
      //resetCurrentAction.title = getLocString("presets.plugin.resetToDefaults").replace("{0}", this.model.model.currentPage.navigationTitle);
      //resetCurrentAction.action = () => { this.model?.resetToDefaults(this.pagesList.selectedItem.id); };
    });

    this.editor.onJsonChangedCallback = () => {
      this.setStatus("unsaved");
    };

    const activePresetId = this.creator.activePresetName || this.presetsManager.presetSelector?.value;
    this.presetsList.selectedItem = this.presetsList.actions.filter(a => a.id == activePresetId)[0];
    const modelAlreadyInitialized = !!this.presetsList.selectedItem;
    if (!this.presetsList.selectedItem) {
      this.presetsList.selectedItem = this.presetsList.actions.filter(a => a.id === PresetsManager.defaultConfigurationId)[0];
    }
    curentlySelectedPreset = this.presetsList.selectedItem;
    if (this.presetsList.selectedItem) {
      if (!modelAlreadyInitialized) {
        this.presetsList.selectedItem.action(this.presetsList.selectedItem);
      }
      listAction.title = this.presetsList.selectedItem.title || "";
    }
    setTimeout(() => {
      const preset = presets[this.currentPresetIndex];
      if (!this.editor || !preset || !preset.action) return;
      preset.action(preset);
    }, 100);
  }

  public deactivate(): boolean {
    this.creator.toolbox.forceCompact = this.toolboxCompact;
    this.currentValue = this.editor?.model.data;
    const bottomActions = this.designerPlugin.tabControlModel.bottomToolbar.actions;
    bottomActions.forEach(a => a.visible = true);
    this.currentPresetIndex = this.editor?.model.currentPageNo || 0;
    if (this.editor) {
      this.editor.dispose();
    }
    this.editor = undefined;
    return true;
  }

  public onLocaleChanged() {
    //this.presetsList.actions.forEach(a => a.locStrsChanged());
    if (this.editor) {
      this.editor.onLocaleChanged();
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