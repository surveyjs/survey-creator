import { createDropdownActionModel, Base, SurveyModel, Action, ComputedUpdater, CurrentPageChangedEvent, PageVisibleChangedEvent, QuestionDropdownModel, ActionContainer, IAction } from "survey-core";
import { ICreatorPlugin, SurveyCreatorModel, listComponentCss, saveToFileHandler, TabControlModel, SidebarPageModel, PropertyGridViewModel, PropertyGridModel } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";

export class TabPresetsPlugin implements ICreatorPlugin {
  public model: CreatorPresetEditorModel | undefined;
  public static iconName = "icon-settings";
  private currentPresetIndex = 0;
  private currentValue;
  private designerPlugin;
  private toolboxCompact;
  private defaultJson;

  constructor(private creator: SurveyCreatorModel) {
    creator.addTab({ name: "presets", title: "Presets", plugin: this, iconName: TabPresetsPlugin.iconName });
    this.designerPlugin = creator.getPlugin("designer");
    this.toolboxCompact = creator.toolbox.forceCompact;
  }

  public saveToFileHandler = saveToFileHandler;

  public activate(): void {
    this.model = new CreatorPresetEditorModel({}, this.creator, this.defaultJson);
    this.defaultJson = { ...this.model.defaultJson };
    if (this.currentValue) {
      this.model.model.data = this.currentValue;
    }
    this.model.model.currentPageNo = this.currentPresetIndex;
    this.designerPlugin.activateSidebar();

    const presets = this.model?.model.pages.map(p => <IAction>{ id: p.name, title: p.navigationTitle });
    const tools = [
      { id: "save", title: "Save & Exit", markerIconName: "check-24x24", needSeparator: true },
      { id: "import", title: "Import", markerIconName: "import-24x24", action: () => { this.model?.loadJsonFile(); } },
      { id: "export", title: "Export", markerIconName: "download-24x24", action: () => { this.model?.downloadJsonFile(); } },
      { id: "reset", title: "Reset all changes", markerIconName: "restore-24x24", needSeparator: true },
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
      iconName: "navmenu-24x24"
    }, {
      items: [...presets, ...tools],
      verticalPosition: "top",
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
      cssClasses: listComponentCss,
      // onHide: () => { this.languageSelectorAction.enabled = true; },
      // onShow: () => { this.languageSelectorAction.enabled = false; }
    }, this.creator);
    const bottomActions = this.designerPlugin.tabControlModel.bottomToolbar.actions;
    bottomActions.forEach(a => a.visible = false);
    bottomActions.unshift(settingsAction);
    presetsList = settingsAction.popupModel.contentComponentData.model;
    presetsList.selectedItem = presetsList.actions[0];
    this.model.model.onCurrentPageChanged.add((_, options) => {
      presetsList.selectedItem = presetsList.actions[this.model.model.currentPageNo];
    });
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