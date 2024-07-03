import { ListModel, Action, IAction, Base, createDropdownActionModel, PageModel, ComputedUpdater, surveyLocalization } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { editorLocalization } from "../../editorLocalization";
import { SidebarTabModel } from "../side-bar/side-bar-tab-model";
import { Translation, createImportCSVAction, createExportCSVAction } from "./translation";

export class TabTranslationPlugin implements ICreatorPlugin {
  private filterStringsAction: Action;
  private filterPageAction: Action;
  private mergeLocaleWithDefaultAction: Action;
  private importCsvAction: Action;
  private exportCsvAction: Action;
  private sidebarTab: SidebarTabModel;

  public model: Translation;

  constructor(private creator: SurveyCreatorModel) {
    creator.addPluginTab("translation", this);
    this.sidebarTab = this.creator.sidebar.addTab("translation");
    this.sidebarTab.caption = editorLocalization.getString("ed.translationPropertyGridTitle");
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  public activate(): void {
    this.model = new Translation(this.creator.survey, this.creator);
    this.model.settingsSurvey.locale = this.creator.locale;
    this.model.readOnly = this.creator.readOnly;
    this.model.translationStringVisibilityCallback = (obj: Base, propertyName: string, visible: boolean) => {
      const options = { obj: obj, propertyName: propertyName, visible: visible };
      !this.creator.onTranslationStringVisibility.isEmpty && this.creator.onTranslationStringVisibility.fire(this.creator, options);
      return options.visible;
    };
    this.model.localeInitialVisibleCallback = (locale: string): boolean => {
      let options = { locale: locale, isSelected: true };
      this.creator.onTranslationLocaleInitiallySelected.fire(this.creator, options);
      return options.isSelected;
    };
    this.model.importItemCallback = (name: string, locale: string, text: string): string => {
      const options = { locale: locale, name: name, text: text };
      this.creator.onTranslationImportItem.fire(this.creator, options);
      return options.text;
    };
    this.model.importFinishedCallback = (): void => {
      this.creator.onTranslationImported.fire(this.creator, {});
    };
    this.sidebarTab.model = this.model.settingsSurvey;
    this.sidebarTab.componentName = "survey-widget";
    this.creator.sidebar.activeTab = this.sidebarTab.id;

    this.mergeLocaleWithDefaultAction.title = this.createMergeLocaleWithDefaultActionTitleUpdater();
    this.mergeLocaleWithDefaultAction.tooltip = this.createMergeLocaleWithDefaultActionTitleUpdater();
    this.mergeLocaleWithDefaultAction.visible = this.model.canMergeLocaleWithDefault;

    this.filterPageAction.visible = this.creator.survey.pageCount > 1;
    this.updateFilterPageAction(true);

    this.filterStringsAction.visible = true;
    this.updateFilterStrigsAction(true);

    this.importCsvAction.visible = true;
    this.exportCsvAction.visible = true;

    this.filterPageAction.data.setItems([{ id: null, title: this.showAllPagesText }].concat(
      this.creator.survey.pages.map((page) => ({
        id: page.name,
        title: this.getPageDisplayText(page)
      }))
    ), false);

    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "filteredPage") {
        this.updateFilterPageAction();
      }
      if (options.name === "showAllStrings") {
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
    this.model.filteredPage = null;
    this.updateFilterPageAction(true);
  }
  public deactivate(): boolean {
    if (!!this.model) {
      this.model.dispose();
    }
    this.model = undefined;
    this.sidebarTab.visible = false;
    this.filterStringsAction.visible = false;
    this.filterPageAction.visible = false;
    this.mergeLocaleWithDefaultAction.title = undefined;
    this.mergeLocaleWithDefaultAction.tooltip = undefined;
    this.mergeLocaleWithDefaultAction.visible = false;
    this.importCsvAction.visible = false;
    this.exportCsvAction.visible = false;

    return true;
  }
  private createMergeLocaleWithDefaultActionTitleUpdater(): any {
    return <any>new ComputedUpdater<string>(() => {
      let loc = this.creator.locale;
      if (!loc) loc = "en";
      return editorLocalization.getString("ed.translationMergeLocaleWithDefault")["format"](surveyLocalization.defaultLocale);
    });
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
  public createActions(): Array<Action> {
    const items: Array<Action> = [];
    this.createFilterPageAction();
    items.push(this.filterPageAction);
    this.createFilterStringsAction();
    items.push(this.filterStringsAction);

    this.mergeLocaleWithDefaultAction = new Action({
      id: "svd-translation-merge_locale_withdefault",
      visible: false,
      component: "sv-action-bar-item",
      mode: "small",
      needSeparator: true,
      action: () => {
        this.model.mergeLocaleWithDefault();
      }
    });
    items.push(this.mergeLocaleWithDefaultAction);

    this.importCsvAction = createImportCSVAction(() => { this.model.importFromCSVFileDOM(); }, true);
    this.importCsvAction.enabled = <any>(new ComputedUpdater(() => !this.creator.readOnly)),
    this.importCsvAction.visible = false;
    items.push(this.importCsvAction);

    this.exportCsvAction = createExportCSVAction(() => { this.model.exportToCSVFileUI(); });
    this.exportCsvAction.visible = false;
    items.push(this.exportCsvAction);

    return items;
  }

  private createFilterPageAction() {
    this.filterPageAction = createDropdownActionModel({
      id: "svc-translation-filter-page",
      title: this.getFilterPageActionTitle(),
      visible: false,
      mode: "small",
    }, {
      items: [{ id: null, title: this.showAllPagesText }],
      allowSelection: true,
      onSelectionChanged: (item: IAction) => {
        this.model.filteredPage = !!item.id ? this.creator.survey.getPageByName(item.id) : null;
      },
      horizontalPosition: "center"
    });
  }
  private createFilterStringsAction() {
    this.filterStringsAction = createDropdownActionModel({
      id: "svc-translation-show-all-strings",
      title: this.getFilterStringsActionTitle(),
      visible: false,
      mode: "small",
    }, {
      items: [{ id: "show-all-strings", locTitleName: "ed.translationShowAllStrings" }, { id: "show-used-strings-only", locTitleName: "ed.translationShowUsedStringsOnly" }],
      allowSelection: true,
      onSelectionChanged: (item: IAction) => {
        this.model.showAllStrings = item.id === "show-all-strings";
      },
      horizontalPosition: "center"
    });
  }
  private updateFilterStrigsAction(updateSelectedItem: boolean = false) {
    const title = this.getFilterStringsActionTitle();
    this.filterStringsAction.title = title;
    if (updateSelectedItem) {
      this.filterStringsAction.needSeparator = this.filterPageAction.visible;
      const list = <ListModel>this.filterStringsAction.data;
      list.selectedItem = list.actions.filter((el: IAction) => el.title === title)[0];
    }
  }
  private updateFilterPageAction(updateSelectedItem: boolean = false) {
    this.filterPageAction.title = this.getFilterPageActionTitle();
    if (updateSelectedItem) {
      const list = <ListModel>this.filterPageAction.data;
      const id = this.model.filteredPage ? this.model.filteredPage.name : null;
      list.selectedItem = list.actions.filter((el: IAction) => el.id === id)[0];
    }
  }
  private getFilterPageActionTitle(): string {
    const pageDisplayName = this.model && this.model.filteredPage && this.getPageDisplayText(this.model.filteredPage);
    return pageDisplayName || this.showAllPagesText;
  }
  private getFilterStringsActionTitle(): string {
    return (this.model && !this.model.showAllStrings) ? this.showUsedStringsOnlyText : this.showAllStringsText;
  }
  private getPageDisplayText(page: PageModel): string {
    return this.creator.getObjectDisplayName(page, "translation-tab", "survey-translation", page.title);
  }
}
