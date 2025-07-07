import { createDropdownActionModel, Base, SurveyModel, Action, ComputedUpdater, CurrentPageChangedEvent, PageVisibleChangedEvent, QuestionDropdownModel, ActionContainer } from "survey-core";
import { TabDesignerPluginBase, SurveyCreatorModel, listComponentCss, TabControlModel, SidebarPageModel, PropertyGridViewModel, PropertyGridModel } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";

export class TabPresetsPlugin extends TabDesignerPluginBase {
  public model: CreatorPresetEditorModel | undefined;
  public static iconName = "icon-settings";
  public propertyGridViewModel: PropertyGridViewModel;
  constructor(creator: SurveyCreatorModel) {
    super(creator);
    creator.addTab({ name: "presets", plugin: this, iconName: TabPresetsPlugin.iconName });
    this.propertyGridTab = this.creator.sidebar.addPage("propertyGridPresets", "svc-property-grid", this.propertyGridViewModel);

    const settingsAction = createDropdownActionModel({
      id: "presets-menu",
      locTooltipName: "ed.creatorPresetsTitle",
      iconName: "gear-24x24",
      mode: <any>new ComputedUpdater<string>(() => {
        return this.creator.isMobileView ? "small" : "large";
      }),
    }, {
      items: [{ id: "show-all-strings", locTitleName: "ed.translationShowAllStrings" }, { id: "show-used-strings-only", locTitleName: "ed.translationShowUsedStringsOnly" }],
      allowSelection: true,
      onSelectionChanged: (item: any) => {
        // this.model.activeLanguage = item.id;
        // this.languageSelectorAction.title = editorLocalization.getLocaleName(item.id);
      },
      verticalPosition: "top",
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
      cssClasses: listComponentCss,
      // onHide: () => { this.languageSelectorAction.enabled = true; },
      // onShow: () => { this.languageSelectorAction.enabled = false; }
    }, this.creator);

    this.tabControlModel.bottomToolbar.setItems([settingsAction]);
  }

  public activate(): void {
    this.model = new CreatorPresetEditorModel({}, this.creator);
    this.updateActivePage();
    this.updateTabControl();
  }

  public deactivate(): boolean {
    if (this.model) {
      this.model.dispose();
    }
    this.model = undefined;
    return true;
  }
}