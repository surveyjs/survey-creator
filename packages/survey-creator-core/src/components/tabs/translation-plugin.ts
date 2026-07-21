import { ListModel, Action, IAction, Base, createDropdownActionModel, PageModel, ComputedUpdater, surveyLocalization, ItemValue } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { editorLocalization } from "../../editorLocalization";
import { SidebarPageModel } from "../side-bar/side-bar-page-model";
import { Translation, createImportCSVAction, createExportCSVAction } from "./translation";
import { TranslationSideBySide } from "./translation-side-by-side";
import { TabControlModel } from "../side-bar/tab-control-model";

export class TabTranslationPlugin implements ICreatorPlugin {
  private filterStringsAction: Action;
  private filterPageAction: Action;
  private mergeLocaleWithDefaultAction: Action;
  private importCsvAction: Action;
  private exportCsvAction: Action;
  private sourceLocaleAction: Action;
  private destinationLocaleAction: Action;
  private machineTranslationAction: Action;
  private sidebarTab: SidebarPageModel;
  private _showOneCategoryInPropertyGrid: boolean = true;
  private tabControlModel: TabControlModel;
  private _sideBySideDestinationLocale: string | undefined;

  public model: Translation;
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
  private wireModelCallbacks(model: Translation): void {
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
    this.model = new Translation(this.creator.survey, this.creator);
    this.wireModelCallbacks(this.model);
    this.updateSettingsSurvey();
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
  private activateSideBySide(): void {
    const model = new TranslationSideBySide(this.creator.survey, this.creator);
    this.model = model;
    this.wireModelCallbacks(model);
    model.importFinishedCallback = (): void => {
      this.creator.onTranslationImported.fire(this.creator, {});
      model.rebuildInstances();
    };
    model.doUndoableAction = (action, title) => {
      const manager = this.creator.undoRedoManager;
      if (!!manager) {
        manager.performAction(action, title);
      } else {
        action.apply();
      }
    };
    this.sidebarTab.visible = false;
    this.creator.sidebar.hideSideBarVisibilityControlActions = true;

    model.reset();

    model.sourceLocale = "";
    model.destinationLocale = this.calcDefaultDestinationLocale(model, "");
    const pages = this.creator.survey.pages;
    model.selectedPageName = pages.length > 0 ? pages[0].name : "";
    model.showSurveyStrings = false;
    model.rebuildInstances();

    this.filterPageAction.visible = true;
    this.updateSideBySidePagesAction();
    this.sourceLocaleAction.visible = true;
    this.destinationLocaleAction.visible = true;
    this.updateLocaleActions();
    this.importCsvAction.visible = true;
    this.exportCsvAction.visible = true;
    this.machineTranslationAction.visible = this.creator.getHasMachineTranslation();

    model.onPropertyChanged.add((sender, options) => {
      if (options.name === "sourceLocale" || options.name === "destinationLocale") {
        this.updateLocaleActions();
      }
      if (options.name === "selectedPageName" || options.name === "showSurveyStrings") {
        this.updateSideBySidePagesAction();
      }
    });
  }
  public update(): void {
    if (!this.model) return;
    this.model.survey = this.creator.survey;
    if (this.isSideBySide) {
      const model = <TranslationSideBySide>this.model;
      const pages = this.creator.survey.pages;
      model.showSurveyStrings = false;
      model.selectedPageName = pages.length > 0 ? pages[0].name : "";
      model.rebuildInstances();
      this.updateSideBySidePagesAction();
      this.updateLocaleActions();
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
    this.sourceLocaleAction.visible = false;
    this.destinationLocaleAction.visible = false;
    this.machineTranslationAction.visible = false;
    this.creator.sidebar.hideSideBarVisibilityControlActions = false;
    this.creator.sidebar.header.reset();
    return true;
  }
  public onDesignerSurveyPropertyChanged(obj: Base, propName: string): void {
    if (this.isSideBySide && !!this.model) {
      (<TranslationSideBySide>this.model).onCreatorSurveyPropertyChanged(obj, propName);
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

    this.sourceLocaleAction = this.createLocaleDropdownAction("svc-translation-source-locale", "ed.translationSourceLanguage", (locale: string) => {
      (<TranslationSideBySide>this.model).sourceLocale = locale;
    });
    items.push(this.sourceLocaleAction);
    this.destinationLocaleAction = this.createLocaleDropdownAction("svc-translation-destination-locale", "ed.translationDestinationLanguage", (locale: string) => {
      this._sideBySideDestinationLocale = locale;
      (<TranslationSideBySide>this.model).destinationLocale = locale;
    });
    items.push(this.destinationLocaleAction);

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

    this.machineTranslationAction = new Action({
      id: "svc-translation-machine",
      iconName: "icon-language",
      iconSize: "auto",
      locTitleName: "ed.translateUsigAI",
      locTooltipName: "ed.translateUsigAI",
      visible: false,
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.showSideBySideMachineTranslation();
      }
    });
    this.machineTranslationAction.enabled = <any>(new ComputedUpdater(() => !this.creator.readOnly));
    items.push(this.machineTranslationAction);

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
        if (this.isSideBySide) {
          const model = <TranslationSideBySide>this.model;
          if (item.id === TranslationSideBySide.surveyStringsPageId) {
            model.showSurveyStrings = true;
          } else {
            model.showSurveyStrings = false;
            model.selectedPageName = <string>item.id;
          }
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
  private createLocaleDropdownAction(id: string, tooltipName: string, onSelected: (locale: string) => void): Action {
    return createDropdownActionModel({
      id: id,
      tooltip: editorLocalization.getString(tooltipName),
      visible: false,
      mode: "small",
    }, {
      items: [],
      allowSelection: true,
      onSelectionChanged: (item: IAction) => {
        onSelected(<string>item.id || "");
      },
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
    }, this.creator);
  }
  private updateSideBySidePagesAction(): void {
    const model = <TranslationSideBySide>this.model;
    if (!model || !model.isSideBySide) return;
    const items: Array<IAction> = this.creator.survey.pages.map((page) => (<IAction>{
      id: page.name,
      title: this.getPageDisplayText(page)
    }));
    items.push(<IAction>{ id: TranslationSideBySide.surveyStringsPageId, title: this.surveyStringsText });
    const list = <ListModel>this.filterPageAction.data;
    list.setItems(items, false);
    const selectedId = model.showSurveyStrings ? TranslationSideBySide.surveyStringsPageId : model.selectedPageName;
    const selectedItem = list.actions.filter((el: IAction) => el.id === selectedId)[0];
    list.selectedItem = selectedItem;
    this.filterPageAction.title = !!selectedItem ? selectedItem.title : "";
  }
  private updateLocaleActions(): void {
    const model = <TranslationSideBySide>this.model;
    if (!model || !model.isSideBySide) return;
    const locales = this.getSideBySideLocales(model);
    const source = model.sourceLocale || "";
    const destination = model.destinationLocale || "";
    this.updateLocaleAction(this.sourceLocaleAction, model, locales, source, destination);
    this.updateLocaleAction(this.destinationLocaleAction, model, locales, destination, source);
  }
  // Each dropdown's list hides the locale currently selected in the other one, so source is never equal to destination.
  private updateLocaleAction(action: Action, model: TranslationSideBySide, locales: Array<string>, selected: string, excluded: string): void {
    const items = locales.filter(loc => loc !== excluded).map(loc => (<IAction>{
      id: loc || null,
      title: model.getLocaleName(loc)
    }));
    const list = <ListModel>action.data;
    list.setItems(items, false);
    const selectedId = selected || null;
    list.selectedItem = list.actions.filter((el: IAction) => el.id === selectedId)[0];
    action.title = model.getLocaleName(selected);
  }
  // The default locale is represented by "" everywhere in this mode; its explicit name
  // (surveyLocalization.defaultLocale, e.g. "en") is filtered out to avoid a duplicated entry.
  private getSideBySideLocales(model: TranslationSideBySide): Array<string> {
    const res: Array<string> = [""];
    model.getSurveyLocales()[0].forEach((item: ItemValue) => {
      const loc = item.value;
      if (!!loc && loc !== surveyLocalization.defaultLocale && res.indexOf(loc) < 0) res.push(loc);
    });
    return res;
  }
  private calcDefaultDestinationLocale(model: TranslationSideBySide, source: string): string {
    const candidates: Array<string> = [];
    if (this._sideBySideDestinationLocale !== undefined) {
      candidates.push(this._sideBySideDestinationLocale);
    }
    candidates.push(this.creator.survey.locale);
    this.creator.survey.getUsedLocales().forEach((loc: string) => candidates.push(loc));
    model.getSurveyLocales()[0].forEach((item: ItemValue) => candidates.push(item.value));
    for (let i = 0; i < candidates.length; i++) {
      const loc = candidates[i];
      if (!!loc && loc !== surveyLocalization.defaultLocale && loc !== source) return loc;
    }
    return "";
  }
  private showSideBySideMachineTranslation(): void {
    const model = <TranslationSideBySide>this.model;
    if (!model) return;
    const editor = model.createTranslationEditor(model.destinationLocale || "");
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
