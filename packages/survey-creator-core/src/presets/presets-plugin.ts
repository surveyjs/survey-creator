import { createDropdownActionModel, Base, SurveyModel, Action, ComputedUpdater, CurrentPageChangedEvent, PageVisibleChangedEvent, QuestionDropdownModel, ActionContainer, IAction } from "survey-core";
import { TabDesignerPluginBase, SurveyCreatorModel, listComponentCss, saveToFileHandler, TabControlModel, SidebarPageModel, PropertyGridViewModel, PropertyGridModel } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";

export class TabPresetsPlugin extends TabDesignerPluginBase {
  public model: CreatorPresetEditorModel | undefined;
  public static iconName = "icon-settings";
  public propertyGridViewModel: PropertyGridViewModel;
  private currentPresetIndex = 0;
  constructor(creator: SurveyCreatorModel) {
    super(creator);
    creator.addTab({ name: "presets", plugin: this, iconName: TabPresetsPlugin.iconName });
    this.propertyGridTab = this.creator.sidebar.addPage("propertyGridPresets", "svc-property-grid", this.propertyGridViewModel);
  }

  public saveToFileHandler = saveToFileHandler;

  public activate(): void {
    this.model = new CreatorPresetEditorModel({}, this.creator);
    this.updateActivePage();
    this.updateTabControl();

    const presets = this.model?.model.pages.map(p => <IAction>{ id: p.name, title: p.navigationTitle });
    const tools = [
      { id: "save", title: "Save & Exit", markerIconName: "check-24x24", needSeparator: true },
      { id: "import", title: "Import", markerIconName: "import-24x24", action: () => { this.model?.loadJsonFile(); } },
      { id: "export", title: "Export", markerIconName: "download-24x24", action: () => { this.model?.downloadJsonFile(); } },
      { id: "reset", title: "Reset all changes", markerIconName: "restore-24x24", needSeparator: true },
    ];
    let settingsAction;
    presets.forEach(p => {
      p.action = (item)=>{
        settingsAction.popupModel.contentComponentData.model.selectedItem = item;
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

    this.tabControlModel.bottomToolbar.setItems([settingsAction]);
  }

  public deactivate(): boolean {
    if (this.model) {
      this.model.dispose();
    }
    this.model = undefined;
    return true;
  }
}