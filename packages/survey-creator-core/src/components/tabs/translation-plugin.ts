import { SurveyModel, PopupModel, ListModel, Action, IAction, Base } from "survey-core";
import { CreatorBase, ICreatorPlugin, CreatorAction } from "../../creator-base";
import { editorLocalization } from "../../editorLocalization";
import { SidebarTabModel } from "../side-bar/side-bar-tab-model";
import { Translation } from "./translation";

export class TabTranslationPlugin implements ICreatorPlugin {
  private filterStringsAction: Action;
  private filterPageAction: Action;
  private mergeLocaleWithDefaultAction: Action;
  private importCsvAction: Action;
  private exportCsvAction: Action;
  private inputFileElement: HTMLInputElement;
  private pagePopupModel: PopupModel;
  private stringsPopupModel: PopupModel;
  private sidebarTab: SidebarTabModel;

  public model: Translation;

  constructor(private creator: CreatorBase) {
    creator.addPluginTab("translation", this);
    this.sidebarTab = this.creator.sidebar.addTab("translation");
    this.sidebarTab.caption = editorLocalization.getString("ed.translationPropertyGridTitle");
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  public activate(): void {
    this.model = new Translation(this.creator.survey, this.creator);
    this.sidebarTab.allowShow = this.model.showSettings;
    this.model.readOnly = this.creator.readOnly;
    this.model.translationStringVisibilityCallback = (obj: Base, propertyName: string, visible: boolean) => {
      const options = { obj: obj, propertyName: propertyName, visible: visible };
      !this.creator.onTranslationStringVisibility.isEmpty && this.creator.onTranslationStringVisibility.fire(self, options);
      return options.visible;
    };
    this.model.localeInitialVisibleCallback = (locale: string): boolean => {
      let options = { locale: locale, isSelected: true };
      this.creator.onTranslationLocaleInitiallySelected.fire(this.creator, options);
      return options.isSelected;
    };
    this.sidebarTab.model = this.model.settingsSurvey;
    this.sidebarTab.componentName = "survey-widget";
    this.creator.sidebar.activeTab = this.sidebarTab.id;

    this.mergeLocaleWithDefaultAction.title = this.model.mergeLocaleWithDefaultText;
    this.mergeLocaleWithDefaultAction.tooltip = this.model.mergeLocaleWithDefaultText;
    this.mergeLocaleWithDefaultAction.visible = this.model.canMergeLocaleWithDefault;

    this.filterPageAction.visible = this.creator.survey.pageCount > 1;
    this.updateFilterPageAction(true);

    this.filterStringsAction.visible = true;
    this.updateFilterStrigsAction(true);

    this.importCsvAction.visible = true;
    this.exportCsvAction.visible = true;

    this.pagePopupModel.contentComponentData.model.setItems([{ id: null, title: this.showAllPagesText }].concat(
      this.creator.survey.pages.map((page) => ({
        id: page.name,
        title: this.creator.getObjectDisplayName(page, "survey-translation", page.title)
      }))
    ), false);

    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "filteredPage") {
        this.updateFilterPageAction();
      }
      if(options.name === "showAllStrings") {
        this.updateFilterStrigsAction();
      }
      if (options.name === "canMergeLocaleWithDefault") {
        this.mergeLocaleWithDefaultAction.visible = this.model.canMergeLocaleWithDefault;
      }
      if (options.name === "mergeLocaleWithDefaultText") {
        this.mergeLocaleWithDefaultAction.title = this.model.mergeLocaleWithDefaultText;
        this.mergeLocaleWithDefaultAction.tooltip = this.model.mergeLocaleWithDefaultText;
      }
    });

    this.model.reset();
  }
  public update(): void {
    if (!this.model) return;
    this.model.survey = this.creator.survey;
  }
  public deactivate(): boolean {
    this.model = undefined;
    this.sidebarTab.visible = false;
    this.filterStringsAction.visible = false;
    this.filterPageAction.visible = false;
    this.mergeLocaleWithDefaultAction.visible = false;
    this.importCsvAction.visible = false;
    this.exportCsvAction.visible = false;

    return true;
  }
  public get selectLanguageOptionsCaption() {
    return editorLocalization.getString("ed.translationAddLanguage");
  }
  public get showAllStringsText(): string {
    return editorLocalization.getString("ed.translationShowAllStrings");
  }
  public get showUsedStringsOnlyText(): string {
    return editorLocalization.getString("ed.translationShowUsedStringsOnly");
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
    const translationMergeLocaleWithDefaultStr = (): string => editorLocalization.getString("ed.translationMergeLocaleWithDefault")["format"]("");
    this.createFilterPageAction();
    items.push(this.filterPageAction);
    this.createFilterStringsAction();
    items.push(this.filterStringsAction);

    this.mergeLocaleWithDefaultAction = new CreatorAction({
      id: "svd-translation-merge_locale_withdefault",
      visible: false,
      //visible: this.model.canMergeLocaleWithDefault,
      onUpdateTitle: () => { return translationMergeLocaleWithDefaultStr(); },
      onUpdateTooltip: () => { return translationMergeLocaleWithDefaultStr(); },
      component: "sv-action-bar-item",
      mode: "small",
      needSeparator: true,
      action: () => {
        this.model.mergeLocaleWithDefault();
      }
    });
    items.push(this.mergeLocaleWithDefaultAction);

    this.importCsvAction = new CreatorAction({
      id: "svc-translation-import",
      iconName: "icon-load",
      locTitleName: "ed.translationImportFromSCVButton",
      locTooltipName: "ed.translationImportFromSCVButton",
      visible: false,
      mode: "small",
      component: "sv-action-bar-item",
      needSeparator: true,
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

    this.exportCsvAction = new CreatorAction({
      id: "svc-translation-export",
      iconName: "icon-download",
      locTitleName: "ed.translationExportToSCVButton",
      locTooltipName: "ed.translationExportToSCVButton",
      visible: false,
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.model.exportToSCVFile("survey_translation.csv");
      }
    });
    items.push(this.exportCsvAction);

    return items;
  }

  private createFilterPageAction() {
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
  }
  private createFilterStringsAction() {
    this.stringsPopupModel = new PopupModel<{ model: ListModel }>(
      "sv-list",
      {
        model: new ListModel(
          [{ id: "show-all-strings", title: this.showAllStringsText }, { id: "show-used-strings-only", title: this.showUsedStringsOnlyText }],
          (item: IAction) => {
            this.model.showAllStrings = item.id === "show-all-strings";
            this.stringsPopupModel.toggleVisibility();
          },
          true
        )
      },
      "bottom",
      "center"
    );
    this.filterStringsAction = new Action({
      id: "svc-translation-show-all-strings",
      title: this.getFilterStringsActionTitle(),
      visible: false,
      component: "sv-action-bar-item-dropdown",
      mode: "small",
      popupModel: this.stringsPopupModel,
      action: () => {
        this.stringsPopupModel.toggleVisibility();
      }
    });
  }
  private updateFilterStrigsAction(updateSelectedItem: boolean = false) {
    const title = this.getFilterStringsActionTitle();
    this.filterStringsAction.title = title;
    if(updateSelectedItem) {
      this.filterStringsAction.needSeparator = this.filterPageAction.visible;
      const list = <ListModel>this.stringsPopupModel.contentComponentData.model;
      list.selectedItem = list.actions.filter((el: IAction) => el.title === title)[0];
    }
  }
  private updateFilterPageAction(updateSelectedItem: boolean = false) {
    this.filterPageAction.title = this.getFilterPageActionTitle();
    if(updateSelectedItem) {
      const list = <ListModel>this.pagePopupModel.contentComponentData.model;
      const id = this.model.filteredPage ? this.model.filteredPage.name : null;
      list.selectedItem = list.actions.filter((el: IAction) => el.id === id)[0];
    }
  }
  private getFilterPageActionTitle(): string {
    const pageDisplayName = this.model && this.model.filteredPage && this.creator.getObjectDisplayName(this.model.filteredPage, "survey-translation", this.model.filteredPage.title);
    return pageDisplayName || this.showAllPagesText;
  }
  private getFilterStringsActionTitle(): string {
    return (this.model && !this.model.showAllStrings) ? this.showUsedStringsOnlyText: this.showAllStringsText;
  }
}
