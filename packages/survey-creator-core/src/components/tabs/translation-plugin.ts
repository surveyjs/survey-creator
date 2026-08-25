import { ListModel, Action, IAction, Base, createDropdownActionModel, PageModel, ComputedUpdater, surveyLocalization } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { editorLocalization } from "../../editorLocalization";
import { SidebarPageModel } from "../side-bar/side-bar-page-model";
import { Translation, TranslationBase, createImportCSVAction, createExportCSVAction } from "./translation";
import { TranslationSideBySide } from "./translation-side-by-side";
import { TabControlModel } from "../side-bar/tab-control-model";
import { isDefaultLocale } from "../../survey-helper";

export class TabTranslationPlugin implements ICreatorPlugin {
  private filterStringsAction: Action;
  private filterPageAction: Action;
  private mergeLocaleWithDefaultAction: Action;
  private importCsvAction: Action;
  private exportCsvAction: Action;
  private translateStringsAction: Action;
  private sidebarTab: SidebarPageModel;
  private _showOneCategoryInPropertyGrid: boolean = true;
  private tabControlModel: TabControlModel;

  public model: TranslationBase;
  public static iconName = "icon-language";
  private _machineTranslationFromLocale: string | undefined;
  public get machineTranslationFromLocale(): string | undefined {
    return this._machineTranslationFromLocale;
  }
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

  private get isSideBySide(): boolean {
    return this.creator.translationMode === "sideBySide";
  }
  private get isSideBySideGrid(): boolean {
    return this.isSideBySide && this.creator.translationSideBySideView === "grid";
  }

  private updateSettingsSurvey(): void {
    this.model.settingsSurvey.locale = this.creator.locale;
    this.model.settingsSurvey.css.root += (this.showOneCategoryInPropertyGrid ? " spg-root--one-category" : "");
    this.model.settingsSurvey.rootCss += (this.showOneCategoryInPropertyGrid ? " spg-root--one-category" : "");
  }

  constructor(private creator: SurveyCreatorModel) {
    this.showOneCategoryInPropertyGrid = creator.showOneCategoryInPropertyGrid;
    this.tabControlModel = new TabControlModel(this.creator.sidebar);
    this.sidebarTab = this.creator.sidebar.addPage("translation");
    this.sidebarTab.locTitleName = "ed.translationPropertyGridTitle";
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  private wireModelCallbacks(model: TranslationBase): void {
    model.getMachineTranslationFromLocale = () => this._machineTranslationFromLocale;
    model.setMachineTranslationFromLocale = (locale: string) => {
      this._machineTranslationFromLocale = locale;
    };
    model.readOnly = this.creator.readOnly;
    model.translationStringVisibilityCallback = (obj: Base, propertyName: string, visible: boolean) => {
      const options = { obj: obj, element: obj, propertyName: propertyName, visible: visible };
      !this.creator.onTranslationStringVisibility.isEmpty && this.creator.onTranslationStringVisibility.fire(this.creator, options);
      return options.visible;
    };
    model.localeInitialVisibleCallback = (locale: string): boolean => {
      let options = { locale: locale, isSelected: true };
      this.creator.onTranslationLocaleInitiallySelected.fire(this.creator, options);
      return options.isSelected;
    };
    model.importItemCallback = (name: string, locale: string, text: string): string => {
      const options = { locale: locale, name: name, text: text };
      this.creator.onTranslationImportItem.fire(this.creator, options);
      return options.text;
    };
    model.importFinishedCallback = (): void => {
      this.creator.onTranslationImported.fire(this.creator, {});
    };
  }
  public activate(): void {
    if (this.isSideBySide) {
      this.activateSideBySide();
      return;
    }
    const model = new Translation(this.creator.survey, this.creator);
    this.model = model;
    this.wireModelCallbacks(model);
    this.updateSettingsSurvey();
    this.sidebarTab.componentData = model.settingsSurvey;
    this.sidebarTab.componentName = "survey-widget";
    this.creator.sidebar.activePage = this.sidebarTab.id;

    this.mergeLocaleWithDefaultAction.title = this.createMergeLocaleWithDefaultActionTitleUpdater();
    this.mergeLocaleWithDefaultAction.tooltip = this.createMergeLocaleWithDefaultActionTitleUpdater();
    this.mergeLocaleWithDefaultAction.visible = model.canMergeLocaleWithDefault;

    this.filterPageAction.visible = this.creator.survey.pageCount > 1;
    this.updateFilterPageAction(true);

    this.filterStringsAction.visible = true;
    this.updateFilterStrigsAction(true);

    this.importCsvAction.visible = true;
    this.exportCsvAction.visible = true;

    this.setFilterPageActionItems();

    model.onPropertyChanged.add((sender, options) => {
      if (options.name === "filteredPage") {
        this.updateFilterPageAction();
      }
      if (options.name === "showAllStrings") {
        this.updateFilterStrigsAction();
      }
      if (options.name === "canMergeLocaleWithDefault") {
        this.mergeLocaleWithDefaultAction.visible = model.canMergeLocaleWithDefault;
      }
      if (options.name === "mergeLocaleWithDefaultText") {
        this.mergeLocaleWithDefaultAction.title = model.mergeLocaleWithDefaultText;
        this.mergeLocaleWithDefaultAction.tooltip = model.mergeLocaleWithDefaultText;
      }
    });

    model.reset();
    this.creator.sidebar.hideSideBarVisibilityControlActions = this.showOneCategoryInPropertyGrid;
    this.updateTabControl();
  }
  // The all/used strings mode of the element strings blocks. The tab model is disposed with the
  // tab, so the user's choice is kept here, next to the machine-translation source locale.
  private showAllElementStrings: boolean = false;
  private activateSideBySide(): void {
    const model = new TranslationSideBySide(this.creator.survey, this.creator,
      this.creator.translationSideBySideView, this.creator.translationFormViewOrientation);
    this.model = model;
    this.wireModelCallbacks(model);
    model.showAllElementStrings = this.showAllElementStrings;
    model.onShowAllElementStringsChanged = (value: boolean): void => {
      this.showAllElementStrings = value;
    };
    model.importFinishedCallback = (): void => {
      this.creator.onTranslationImported.fire(this.creator, {});
      model.rebuildInstances();
    };
    // The property grid hosts the view switcher and the source/target language dropdowns.
    this.updateSettingsSurvey();
    this.sidebarTab.componentData = model.settingsSurvey;
    this.sidebarTab.componentName = "survey-widget";
    this.creator.sidebar.activePage = this.sidebarTab.id;

    model.reset();

    model.sourceLocale = "";
    model.targetLocale = this.calcDefaultTargetLocale();
    model.updateSettingsSurveyValues();

    this.filterPageAction.visible = true;
    if (this.isSideBySideGrid) {
      // The page and strings filters work exactly as in the default mode.
      this.setFilterPageActionItems();
      this.updateFilterPageAction(true);
      this.filterStringsAction.visible = true;
      this.updateFilterStrigsAction(true);
    } else {
      const pages = this.creator.survey.pages;
      model.selectedPageName = pages.length > 0 ? pages[0].name : "";
      model.rebuildInstances();
      this.updateSideBySidePagesAction();
    }
    this.importCsvAction.visible = true;
    this.exportCsvAction.visible = true;
    // The dialog is useful even without a machine-translation handler: it lists the strings
    // left to translate and hosts the CSV import/export actions.
    this.translateStringsAction.visible = true;
    // A fresh updater on every activation: it must track the locales of the model created
    // above - the previous model was disposed with the tab and no longer notifies.
    // Assigning a new ComputedUpdater disposes the previous one (see processComputedUpdater).
    this.translateStringsAction.enabled = <any>(new ComputedUpdater(() => {
      if (this.creator.readOnly) return false;
      // There must be something to translate into: an explicit target language that
      // differs from the source one.
      const target = model.targetLocale || "";
      return !!target && target !== (model.sourceLocale || "");
    }));

    model.onPropertyChanged.add((sender, options) => {
      if (options.name === "view") {
        this.onSideBySideViewChanged();
      }
      if (options.name === "selectedPageName") {
        this.updateSideBySidePagesAction();
      }
      if (options.name === "filteredPage") {
        this.updateFilterPageAction();
      }
      if (options.name === "showAllStrings") {
        this.updateFilterStrigsAction();
      }
    });
    this.creator.sidebar.hideSideBarVisibilityControlActions = this.showOneCategoryInPropertyGrid;
    // The language settings take little space - give the strings the rest of the tab.
    this.creator.sidebar.useMinWidth = true;
    this.updateTabControl();
  }
  public update(): void {
    if (!this.model) return;
    this.model.survey = this.creator.survey;
    if (this.isSideBySide && !this.isSideBySideGrid) {
      const model = <TranslationSideBySide>this.model;
      const pages = this.creator.survey.pages;
      model.selectedPageName = pages.length > 0 ? pages[0].name : "";
      model.rebuildInstances();
      this.updateSideBySidePagesAction();
      model.updateSettingsSurveyValues();
    } else if (this.isSideBySideGrid) {
      this.model.filteredPage = null;
      this.setFilterPageActionItems();
      this.updateFilterPageAction(true);
      (<TranslationSideBySide>this.model).updateSettingsSurveyValues();
    } else {
      this.model.filteredPage = null;
      this.updateFilterPageAction(true);
      this.updateTabControl();
    }
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
    this.translateStringsAction.visible = false;
    this.creator.sidebar.hideSideBarVisibilityControlActions = false;
    this.creator.sidebar.useMinWidth = false;
    this.creator.sidebar.header.reset();
    return true;
  }
  public onDesignerSurveyPropertyChanged(obj: Base, propName: string): void {
    if (!!this.model) {
      this.model.onCreatorSurveyPropertyChanged(obj, propName);
    }
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
      const action = new Action({
        id: "pg-languages",
        tooltip: languagesString,
        iconName: "pg-general-24x24",
        active: true,
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
  public get surveyStringsText(): string {
    return editorLocalization.getString("ed.translationSurveyStrings");
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
        // The action is visible in the multiple-languages mode only.
        (<Translation>this.model).mergeLocaleWithDefault();
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

    this.translateStringsAction = new Action({
      id: "svc-translation-dialog",
      iconName: "icon-language",
      iconSize: "auto",
      locTitleName: "ed.translateRemainingStrings",
      locTooltipName: "ed.translateRemainingStrings",
      visible: false,
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.showTranslateStringsDialog();
      }
    });
    this.translateStringsAction.enabled = <any>(new ComputedUpdater(() => !this.creator.readOnly));
    items.push(this.translateStringsAction);

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
        if (this.isSideBySide && !this.isSideBySideGrid) {
          (<TranslationSideBySide>this.model).selectedPageName = <string>item.id;
        } else {
          this.model.filteredPage = !!item.id ? this.creator.survey.getPageByName(item.id) : null;
        }
      },
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
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
    }, this.creator);
  }
  // The view switcher lives in the property grid; the model changed its view property -
  // sync the creator option and the toolbar filters that differ between the two views.
  private onSideBySideViewChanged(): void {
    if (!this.isSideBySide || !this.model) return;
    const model = <TranslationSideBySide>this.model;
    this.creator.translationSideBySideView = model.view;
    if (this.isSideBySideGrid) {
      // The page and strings filters work exactly as in the default mode.
      this.setFilterPageActionItems();
      this.updateFilterPageAction(true);
      this.filterStringsAction.visible = true;
      this.updateFilterStrigsAction(true);
    } else {
      this.filterStringsAction.visible = false;
      // The model synced the page from the grid selection while applying the view change -
      // fall back to the first page only when it holds no valid page.
      if (!model.selectedPageName || !this.creator.survey.getPageByName(model.selectedPageName)) {
        const pages = this.creator.survey.pages;
        model.selectedPageName = pages.length > 0 ? pages[0].name : "";
      }
      this.updateSideBySidePagesAction();
    }
  }
  // The pages dropdown of the form view: real pages only, no "All Pages" - the panes always
  // show a concrete page. The grid view uses the standard items set by setFilterPageActionItems.
  private updateSideBySidePagesAction(): void {
    const model = <TranslationSideBySide>this.model;
    if (!model || !model.isSideBySideForm) return;
    const items: Array<IAction> = this.creator.survey.pages.map((page) => (<IAction>{
      id: page.name,
      title: this.getPageDisplayText(page)
    }));
    const list = <ListModel>this.filterPageAction.data;
    list.setItems(items, false);
    const selectedId = model.selectedPageName;
    const selectedItem = list.actions.filter((el: IAction) => el.id === selectedId)[0];
    list.selectedItem = selectedItem;
    this.filterPageAction.title = !!selectedItem ? selectedItem.title : "";
  }
  private setFilterPageActionItems(): void {
    (<ListModel>this.filterPageAction.data).setItems([{ id: null, title: this.showAllPagesText }].concat(
      this.creator.survey.pages.map((page) => ({
        id: page.name,
        title: this.getPageDisplayText(page)
      }))
    ), false);
  }
  // The initial target language is taken from survey.locale, and only from it: the model does not
  // write the survey locale back and does not follow its later changes. An empty survey locale
  // (or the explicit name of the default one) means the default language, which is never a
  // translation target - the tab opens with no target selected then.
  private calcDefaultTargetLocale(): string {
    const locale = this.creator.survey.locale;
    return isDefaultLocale(locale) ? "" : locale;
  }
  private showTranslateStringsDialog(): void {
    const model = <TranslationSideBySide>this.model;
    if (!model) return;
    const editor = model.createTranslationEditor(model.targetLocale || "");
    editor.onApply = () => {
      model.reset();
      model.rebuildInstances();
    };
    editor.setFromLocale(model.sourceLocale || "");
    editor.showDialog();
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
