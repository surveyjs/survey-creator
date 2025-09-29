import { ListModel, Action, IAction, Base, createDropdownActionModel, PageModel, ComputedUpdater, surveyLocalization } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { editorLocalization } from "../../editorLocalization";
import { SidebarPageModel } from "../side-bar/side-bar-page-model";
import { Translation, createImportCSVAction, createExportCSVAction } from "./translation";
import { TabControlModel } from "../side-bar/tab-control-model";
import { MenuButton } from "../../utils/actions";
import { listComponentCss } from "../list-theme";

export class TabTranslationPlugin implements ICreatorPlugin {
  private filterStringsAction: Action;
  private filterPageAction: Action;
  private mergeLocaleWithDefaultAction: Action;
  private importCsvAction: Action;
  private exportCsvAction: Action;
  private sidebarTab: SidebarPageModel;
  private _showOneCategoryInPropertyGrid: boolean = true;
  private tabControlModel: TabControlModel;

  public model: Translation;
  public static iconName = "icon-language";
  public get showOneCategoryInPropertyGrid(): boolean {
    return this._showOneCategoryInPropertyGrid;
  }
  public set showOneCategoryInPropertyGrid(newValue) {
    if (this._showOneCategoryInPropertyGrid !== newValue) {
      this._showOneCategoryInPropertyGrid = newValue;
      this.creator.sidebar.hideSideBarVisibilityControlActions = newValue;
      if (this.creator.activeTab === "translation") {
        this.updateTabControl();
      }
    }
  }

  private updateSettingsSurvey(): void {
    this.model.settingsSurvey.locale = this.creator.locale;
    this.model.settingsSurvey.css.root += (this.showOneCategoryInPropertyGrid ? " spg-root--one-category" : "");
    this.model.settingsSurvey.rootCss += (this.showOneCategoryInPropertyGrid ? " spg-root--one-category" : "");
  }

  constructor(private creator: SurveyCreatorModel) {
    creator.addTab({ name: "translation", plugin: this, iconName: TabTranslationPlugin.iconName });
    this.showOneCategoryInPropertyGrid = creator.showOneCategoryInPropertyGrid;
    this.tabControlModel = new TabControlModel(this.creator.sidebar);
    this.sidebarTab = this.creator.sidebar.addPage("translation");
    this.sidebarTab.locTileName = "ed.translationPropertyGridTitle";
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  public activate(): void {
    this.model = new Translation(this.creator.survey, this.creator);
    this.updateSettingsSurvey();
    this.model.readOnly = this.creator.readOnly;
    this.model.translationStringVisibilityCallback = (obj: Base, propertyName: string, visible: boolean) => {
      const options = { obj: obj, element: obj, propertyName: propertyName, visible: visible };
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
    this.sidebarTab.componentData = this.model.settingsSurvey;
    this.sidebarTab.componentName = "survey-widget";
    this.creator.sidebar.activePage = this.sidebarTab.id;

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
    this.creator.sidebar.hideSideBarVisibilityControlActions = this.showOneCategoryInPropertyGrid;
    this.updateTabControl();
  }
  public update(): void {
    if (!this.model) return;
    this.model.survey = this.creator.survey;
    this.model.filteredPage = null;
    this.updateFilterPageAction(true);
    this.updateTabControl();
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
    this.creator.sidebar.hideSideBarVisibilityControlActions = false;
    this.creator.sidebar.header.reset();
    return true;
  }
  private updateTabControl() {
    if (this.showOneCategoryInPropertyGrid) {
      this.updateTabControlActions();
      this.creator.sidebar.sideAreaComponentName = "svc-tab-control";
      this.creator.sidebar.sideAreaComponentData = this.tabControlModel;
      this.creator.sidebar.header.componentName = "svc-side-bar-header";
      this.creator.sidebar.header.componentData = this.creator.sidebar.header;
    } else {
      this.creator.sidebar.sideAreaComponentName = "";
      this.creator.sidebar.sideAreaComponentData = undefined;
      this.creator.sidebar.header.componentName = "";
      this.creator.sidebar.header.componentData = undefined;
    }
  }
  private updateTabControlActions() {
    if (this.showOneCategoryInPropertyGrid) {
      const languagesString = editorLocalization.getString("ed.translationLanguages");
      const action = new MenuButton({
        id: "pg-languages",
        tooltip: languagesString,
        iconName: "pg-general-24x24",
        active: true,
        pressed: false,
        action: () => {
          this.creator.sidebar.expandSidebar();
          this.creator.sidebar.header.title = languagesString;
          action.active = true;
        }
      });

      this.tabControlModel.topToolbar.setItems([action]);
      this.creator.sidebar.header.title = languagesString;
      this.creator.sidebar.header.subTitle = this.sidebarTab.caption;
    }
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
    this.importCsvAction.enabled = <any>(new ComputedUpdater(() => !this.creator.readOnly));
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
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
      cssClasses: listComponentCss,
    }, this.creator);
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
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
      cssClasses: listComponentCss,
    }, this.creator);
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
