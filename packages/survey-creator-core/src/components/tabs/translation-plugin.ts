import {
  SurveyModel,
  PopupModel,
  ListModel,
  Action,
  IAction
} from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { PropertyGridViewModelBase } from "../../property-grid/property-grid-view-model";
import { settings } from "../../settings";
import { Translation } from "./translation";

export class TabTranslationPlugin implements ICreatorPlugin {
  private showAllStringsAction: Action;
  private filterPageAction: Action;
  private mergeLocaleWithDefaultAction: Action;
  private importCsvAction: Action;
  private exportCsvAction: Action;
  private expandAction: Action;
  private inputFileElement: HTMLInputElement;
  private pagePopupModel: PopupModel;

  public model: Translation;
  public propertyGrid: PropertyGridViewModelBase;

  constructor(private creator: CreatorBase<SurveyModel>) {
    creator.addPluginTab("translation", this);
    this.propertyGrid = new PropertyGridViewModelBase();
    this.propertyGrid.headerText = editorLocalization.getString("ed.translationPropertyGridTitle");
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  public activate(): void {
    this.model = new Translation(this.creator.survey, this.creator);
    this.propertyGrid.survey = this.model.settingsSurvey;

    this.mergeLocaleWithDefaultAction.title = this.model.mergeLocaleWithDefaultText;
    this.mergeLocaleWithDefaultAction.tooltip = this.model.mergeLocaleWithDefaultText;
    this.mergeLocaleWithDefaultAction.visible = this.model.canMergeLocaleWithDefault;

    this.showAllStringsAction.css = this.model.showAllStrings ? "sv-action-bar-item--secondary" : "";
    this.showAllStringsAction.iconName = this.model.showAllStrings ? "icon-switchactive_16x16" : "icon-switchinactive_16x16";
    this.showAllStringsAction.visible = true;

    this.filterPageAction.title = this.getFilterPageActionTitle();
    this.filterPageAction.visible = true;
    this.importCsvAction.visible = true;
    this.exportCsvAction.visible = true;
    this.expandAction && (this.expandAction.visible = !this.propertyGrid.visible);

    this.pagePopupModel.contentComponentData.model.items = [{ id: null, title: this.showAllPagesText }].concat(
      this.creator.survey.pages.map((page) => ({
        id: page.name,
        title: this.creator.getObjectDisplayName(
          page,
          "survey-translation",
          page.title
        )
      }))
    );

    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "filteredPage") {
        this.filterPageAction.title = this.getFilterPageActionTitle();
      }
      if (options.name === "canMergeLocaleWithDefault") {
        this.mergeLocaleWithDefaultAction.visible = this.model.canMergeLocaleWithDefault;
      }
      if (options.name === "mergeLocaleWithDefaultText") {
        this.mergeLocaleWithDefaultAction.title = this.model.mergeLocaleWithDefaultText;
        this.mergeLocaleWithDefaultAction.tooltip = this.model.mergeLocaleWithDefaultText;
      }
    });
  }
  public update(): void {
    if (!this.model) return;
    this.model.survey = this.creator.survey;
  }
  public deactivate(): boolean {
    this.model = undefined;
    this.showAllStringsAction.visible = false;
    this.filterPageAction.visible = false;
    this.mergeLocaleWithDefaultAction.visible = false;
    this.importCsvAction.visible = false;
    this.exportCsvAction.visible = false;
    this.expandAction && (this.expandAction.visible = false);

    return true;
  }
  public get selectLanguageOptionsCaption() {
    return editorLocalization.getString("ed.translationAddLanguage");
  }
  public get showAllStringsText(): string {
    return editorLocalization.getString("ed.translationShowAllStrings");
  }
  public get showAllPagesText(): string {
    return editorLocalization.getString("ed.translationShowAllPages");
  }
  public get exportToCSVText(): string {
    return editorLocalization.getString("ed.translationExportToSCVButton");
  }
  public get importFromCSVText(): string {
    return editorLocalization.getString("ed.translationImportFromSCVButton");
  }
  public createActions() {
    const items: Array<Action> = [];
    const translationMergeLocaleWithDefaultStr = editorLocalization.getString("ed.translationMergeLocaleWithDefault")["format"]("");
    this.pagePopupModel = new PopupModel<{ model: ListModel }>(
      "sv-list",
      {
        model: new ListModel(
          [{ id: null, title: this.showAllPagesText }],
          (item: IAction) => {
            this.model.filteredPage = !!item.id ? this.creator.survey.getPageByName(item.id) : null;
            this.pagePopupModel.toggleVisibility();
          },
          true
        )
      },
      "bottom",
      "center"
    );
    this.filterPageAction = new Action({
      id: "svc-translation-filter-page",
      title: this.getFilterPageActionTitle(),
      visible: false,
      component: "sv-action-bar-item-dropdown",
      mode: "small",
      popupModel: this.pagePopupModel,
      action: (newPage) => {
        this.pagePopupModel.toggleVisibility();
      }
    });
    items.push(this.filterPageAction);

    this.showAllStringsAction = new Action({
      id: "svc-translation-show-all-strings",
      // css: this.model.showAllStrings ? "sv-action-bar-item--secondary" : "",
      title: this.showAllStringsText,
      visible: false,
      // iconName: this.model.showAllStrings ? "icon-switchactive_16x16" : "icon-switchinactive_16x16",
      mode: "small",
      action: () => {
        this.model.showAllStrings = !this.model.showAllStrings;
        this.showAllStringsAction.css = this.model.showAllStrings ? "sv-action-bar-item--secondary" : "";
        this.showAllStringsAction.iconName = this.model.showAllStrings ? "icon-switchactive_16x16" : "icon-switchinactive_16x16";
      }
    });
    items.push(this.showAllStringsAction);

    this.mergeLocaleWithDefaultAction = new Action({
      id: "svd-translation-merge_locale_withdefault",
      visible: false,
      //visible: this.model.canMergeLocaleWithDefault,
      title: translationMergeLocaleWithDefaultStr,
      tooltip: translationMergeLocaleWithDefaultStr,
      component: "sv-action-bar-item",
      mode: "small",
      action: () => {
        this.model.mergeLocaleWithDefault();
      }
    });
    items.push(this.mergeLocaleWithDefaultAction);

    this.importCsvAction = new Action({
      id: "svc-translation-import",
      iconName: "icon-import_20x20",
      tooltip: this.importFromCSVText,
      title: this.importFromCSVText,
      visible: false,
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        if (!document) return;
        if (!this.inputFileElement) {
          this.inputFileElement = document.createElement("input");
          this.inputFileElement.type = "file";
          this.inputFileElement.style.display = "none";
          this.inputFileElement.onchange = () => {
            this.model.importFromCSVFileUI(this.inputFileElement);
          };
        }
        this.inputFileElement.click();
      }
    });
    items.push(this.importCsvAction);

    this.exportCsvAction = new Action({
      id: "svc-translation-export",
      iconName: "icon-export_20x20",
      tooltip: this.exportToCSVText,
      title: this.exportToCSVText,
      visible: false,
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.model.exportToSCVFile("survey_translation.csv");
      }
    });
    items.push(this.exportCsvAction);

    if (settings.propertyGrid.allowCollapse) {
      this.expandAction = this.propertyGrid.createExpandAction(!this.creator.showPropertyGrid);
      items.push(this.expandAction);
    }
    return items;
  }

  private getFilterPageActionTitle() {
    const pageDisplayName = this.model && this.model.filteredPage && this.creator.getObjectDisplayName(this.model.filteredPage, "survey-translation", this.model.filteredPage.title);
    return pageDisplayName || this.showAllPagesText;
  }
}
