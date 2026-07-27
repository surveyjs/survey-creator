import {
  Base, ILocalizableString, ItemValue, LocalizableString, QuestionDropdownModel,
  QuestionMatrixDropdownModel, SurveyModel, property, surveyLocalization
} from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { editorLocalization } from "../../editorLocalization";
import { editableStringRendererName } from "../../creator-base";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { StringEditorConnector } from "../string-editor";
import { Translation, TranslationGroup, TranslationItem } from "./translation";

// The default locale is stored as "" on the model; the settings survey dropdowns need a
// non-empty value for it (an empty dropdown value would render as "no selection").
const defaultLocaleSettingValue = "default";

export class TranslationSideBySide extends Translation {
  @property() selectedPageName: string;
  @property() sourceSurvey: SurveyModel;
  @property() targetSurvey: SurveyModel;
  // The editing surface of the side-by-side mode: "forms" - two design-mode survey copies
  // rendered side by side, "grid" - the strings grid with a source and a target column.
  // Changing it rebuilds the surface in place on the same model, so the locales chosen in
  // the property grid survive the switch.
  @property({ defaultValue: "forms" }) view: "forms" | "grid";

  private byTargetLocStr = new Map<ILocalizableString, TranslationItem>();
  private byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();
  private _updatingSettingsSurvey: boolean = false;
  // The real survey's localizable string behind the editable string the user focused last -
  // a cell of the strings grid or an inline string editor of the forms target pane. Used to
  // restore the selection (or at least the page) when the view changes.
  private selectedLocString: ILocalizableString;

  constructor(survey: SurveyModel, options: ISurveyCreatorOptions = null, view: "forms" | "grid" = "forms") {
    super(survey, options, true);
    // Directly: applyView is for later view switches, the plugin resets the fresh model itself.
    this.setPropertyValueDirectly("view", view);
    this.useSourceTargetColumns = this.isSideBySideGrid;
    // The forms view maps every localizable string of the survey copies; the grid view keeps
    // the default ("used strings only") and lets the user switch via the toolbar dropdown.
    if (!this.isSideBySideGrid) {
      this.showAllStrings = true;
    }
  }
  public get isSideBySide(): boolean {
    return true;
  }
  public get isSideBySideGrid(): boolean {
    return this.view === "grid";
  }
  // The strings grid of the base class is the grid view's surface; the forms view renders
  // the survey copies instead.
  protected get hasStringsSurveyUI(): boolean {
    return this.isSideBySideGrid;
  }
  // The side-by-side property grid: a form/grid view switcher plus the source and target
  // language dropdowns (the standard mode shows the languages matrix instead).
  protected createSettingsSurvey(): SurveyModel {
    const json = this.getSideBySideSettingsSurveyJSON();
    setSurveyJSONForPropertyGrid(json);
    const res = this.options.createSurvey(json, "translation_settings", this, (survey: SurveyModel): void => {
      survey.css = propertyGridCss;
      survey.css.root += " st-properties";
      survey.rootCss += " st-properties";
    });
    res.onValueChanged.add((sender, options) => {
      if (this._updatingSettingsSurvey || this.isDisposed) return;
      if (options.name === "viewMode") {
        this.view = options.value === "grid" ? "grid" : "forms";
      }
      if (options.name === "sourceLocale") {
        this.sourceLocale = this.getLocaleFromSettingValue(options.value);
      }
      if (options.name === "targetLocale") {
        this.targetLocale = this.getLocaleFromSettingValue(options.value);
      }
    });
    return res;
  }
  private getSideBySideSettingsSurveyJSON(): any {
    return {
      elements: [
        {
          type: "buttongroup",
          name: "viewMode",
          titleLocation: "hidden",
          choices: [
            { value: "forms", text: editorLocalization.getString("ed.translationSideBySideViewForms") },
            { value: "grid", text: editorLocalization.getString("ed.translationSideBySideViewGrid") }
          ]
        },
        {
          type: "dropdown",
          name: "sourceLocale",
          title: editorLocalization.getString("ed.translationSourceLanguage"),
          allowClear: false
        },
        {
          type: "dropdown",
          name: "targetLocale",
          title: editorLocalization.getString("ed.translationTargetLanguage"),
          allowClear: false
        }
      ]
    };
  }
  // Pushes the model state (view, locales and the locale choice lists) into the settings survey.
  // Called on activation and on every related model property change.
  public updateSettingsSurveyValues(): void {
    const survey = this.settingsSurvey;
    if (!survey || this.isDisposed) return;
    this._updatingSettingsSurvey = true;
    try {
      const locales = this.getSideBySideLocales();
      const source = this.sourceLocale || "";
      const target = this.targetLocale || "";
      this.updateLocaleQuestion(<QuestionDropdownModel>survey.getQuestionByName("sourceLocale"), locales, source, target);
      this.updateLocaleQuestion(<QuestionDropdownModel>survey.getQuestionByName("targetLocale"), locales, target, source);
      const viewQuestion = survey.getQuestionByName("viewMode");
      if (!!viewQuestion) viewQuestion.value = this.view;
    } finally {
      this._updatingSettingsSurvey = false;
    }
  }
  // Each dropdown's list hides the locale currently selected in the other one, except its own
  // selection - by default both sides can be the default language.
  private updateLocaleQuestion(question: QuestionDropdownModel, locales: Array<string>, selected: string, excluded: string): void {
    if (!question) return;
    question.choices = locales.filter(loc => loc !== excluded || loc === selected)
      .map(loc => new ItemValue(this.toLocaleSettingValue(loc), this.getLocaleName(loc)));
    question.value = this.toLocaleSettingValue(selected);
  }
  // The default locale is represented by "" everywhere in this mode; its explicit name
  // (surveyLocalization.defaultLocale, e.g. "en") is filtered out to avoid a duplicated entry.
  public getSideBySideLocales(): Array<string> {
    const res: Array<string> = [""];
    const add = (loc: string): void => {
      if (!!loc && loc !== surveyLocalization.defaultLocale && res.indexOf(loc) < 0) res.push(loc);
    };
    this.getSurveyLocales()[0].forEach((item: ItemValue) => add(item.value));
    if (!!this.survey) {
      this.survey.getUsedLocales().forEach(loc => add(loc));
    }
    return res;
  }
  private toLocaleSettingValue(locale: string): string {
    return locale || defaultLocaleSettingValue;
  }
  private getLocaleFromSettingValue(value: any): string {
    return !value || value === defaultLocaleSettingValue ? "" : <string>value;
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "view") {
      this.applyView();
      this.updateSettingsSurveyValues();
    }
    if (name === "sourceLocale" || name === "targetLocale") {
      if (name === "targetLocale") {
        this.updateSurveyLocale();
      }
      this.updateInstanceLocales();
      this.updateSettingsSurveyValues();
    }
    if (name === "selectedPageName") {
      this.updateInstancePages();
    }
  }
  // Rebuilds the editing surface after a view change: the grid view builds the strings grid
  // over the current survey, the forms view builds the two survey copies.
  private applyView(): void {
    if (this.isDisposed) return;
    this.useSourceTargetColumns = this.isSideBySideGrid;
    if (this.isSideBySideGrid) {
      this.disposeInstances();
      if (this.showAllStrings) {
        this.showAllStrings = false; // its reset builds the grid
      } else {
        this.reset();
      }
      this.applySelectionToGrid();
    } else {
      this.applySelectedPageToForms();
      // The page scope is a grid-view concept: a scoped root would cut the string mappings
      // and the CSV export down to one page. Cleared here and re-applied on the way back.
      if (!!this.filteredPage) {
        this.filteredPage = null;
      }
      this.showAllStrings = true;
      this.rebuildInstances();
      this.activateSelectedStringEditor();
    }
  }
  // forms -> grid: the grid opens scoped to the page the panes showed (the selected string's
  // page when one is known), then the grid cell of the last focused string (when its row is
  // present) gets the input focus.
  private applySelectionToGrid(): void {
    // The scope was cleared on entering the forms view, so the root covers the whole survey here.
    const info = this.findSelectedItemInfo();
    const pageName = !!info && !!info.pageName ? info.pageName : this.selectedPageName;
    const page = !!pageName ? this.survey.getPageByName(pageName) : undefined;
    if (!!page && this.filteredPage !== page) {
      this.filteredPage = page; // the property's onSet rebuilds the grid
    }
    // Re-resolved: the scoping above rebuilt the root tree and the strings survey.
    const scopedInfo = this.findSelectedItemInfo();
    if (!!scopedInfo)this.focusGridCell(scopedInfo.item);
  }
  // grid -> forms: the panes open on the page of the last focused string (or on the grid's
  // page scope). Called before the instances are rebuilt, while root is still the grid tree.
  private applySelectedPageToForms(): void {
    const info = this.findSelectedItemInfo();
    let pageName = !!info ? info.pageName : "";
    if (!pageName && !!this.filteredPage) pageName = this.filteredPage.name;
    if (!!pageName && !!this.survey.getPageByName(pageName)) {
      this.selectedPageName = pageName;
    }
  }
  // Focuses the fresh target-pane editor of the selected string once it is rendered.
  private activateSelectedStringEditor(): void {
    const copies = !!this.selectedLocString ? this.byRealLocStr.get(this.selectedLocString) : undefined;
    const copyLocStr = !!copies ? copies.filter(copy => this.byTargetLocStr.has(copy))[0] : undefined;
    if (!copyLocStr) return;
    const connector = StringEditorConnector.get(<LocalizableString>copyLocStr);
    connector.setAutoFocus();
    connector.activateEditor();
  }
  // The selected string's translation item in the current root tree along with the name of
  // the survey page it belongs to ("" for survey-level strings).
  private findSelectedItemInfo(): { item: TranslationItem, pageName: string } {
    if (!this.selectedLocString || !this.root) return undefined;
    let res: { item: TranslationItem, pageName: string };
    const search = (group: TranslationGroup, pageName: string): boolean => {
      const obj = group.obj;
      if (!!obj && !!obj.isPage) pageName = obj.name;
      const items = group.items;
      for (let i = 0; i < items.length; i++) {
        if (items[i].isGroup) {
          if (search(<TranslationGroup>items[i], pageName)) return true;
        } else if ((<TranslationItem>items[i]).locString === this.selectedLocString) {
          res = { item: <TranslationItem>items[i], pageName: pageName };
          return true;
        }
      }
      return false;
    };
    search(this.root, "");
    return res;
  }
  private focusGridCell(item: TranslationItem): void {
    const survey = this.stringsSurvey;
    if (!survey) return;
    const questions = survey.getAllQuestions();
    for (let i = 0; i < questions.length; i++) {
      const matrix = <QuestionMatrixDropdownModel>questions[i];
      const rows = matrix.rows;
      if (Array.isArray(rows) && rows.length > 0 && rows[0]["translationData"] === item) {
        const cells = matrix.visibleRows[0].cells;
        cells[cells.length - 1].question.focus(); // the target locale column is the last one
        return;
      }
    }
  }
  // Remembers the string behind the focused grid cell for the selection sync with the forms view.
  protected onSurveyStringsCreated(survey: SurveyModel): void {
    super.onSurveyStringsCreated(survey);
    survey.onFocusInQuestion.add((sender, options) => {
      const matrix = <QuestionMatrixDropdownModel>options.question.parentQuestion;
      const rows = !!matrix ? matrix.rows : undefined;
      const item = <TranslationItem>(Array.isArray(rows) && rows.length > 0 ? rows[0]["translationData"] : undefined);
      if (!!item)this.selectedLocString = item.locString;
    });
  }
  public rebuildInstances(): void {
    if (this.isDisposed) return;
    if (this.isSideBySideGrid) {
      // No survey copies to rebuild - re-create the grid over the current survey, dropping
      // a page filter that no longer belongs to it (survey replaced, structural undo).
      if (!!this.filteredPage && this.survey.pages.indexOf(this.filteredPage) < 0) {
        this.filteredPage = null; // the property's onSet rebuilds the grid
        return;
      }
      this.reset();
      return;
    }
    const wasSyncing = this._syncing;
    this._syncing = true;
    try {
      this.disposeInstances();
      if (!this.root) {
        this.reset();
      }
      const json = this.survey.toJSON();
      this.sourceSurvey = this.createInstance(json, "translation_source");
      this.targetSurvey = this.createInstance(json, "translation_target");
      this.setupSourceSurvey(this.sourceSurvey);
      this.setupTargetSurvey(this.targetSurvey);
      this.buildMappings();
      this.updateInstanceLocales();
      this.updateInstancePages();
    } finally {
      this._syncing = wasSyncing;
    }
  }
  // Called (through the plugin's onDesignerSurveyPropertyChanged hook) when the real survey changes:
  // undo/redo rollbacks or any external modification.
  public onCreatorSurveyPropertyChanged(obj: Base, propName: string): void {
    if (this._syncing || this.isDisposed) return;
    if (obj === this.survey && propName === "locale") {
      this.followSurveyLocale();
      return;
    }
    if (this.isSideBySideGrid) {
      // The base implementation refreshes the grid cells on a localizable string change and
      // rebuilds the grid on a structural one.
      super.onCreatorSurveyPropertyChanged(obj, propName);
      return;
    }
    if (!this.targetSurvey) return;
    const realLocStr = this.getLocStrByName(obj, propName);
    const copies = !!realLocStr ? this.byRealLocStr.get(realLocStr) : undefined;
    if (!copies) {
      // Not a mapped localizable string - a structural change (element added/removed, etc.).
      this.rebuildInstances();
      return;
    }
    this._syncing = true;
    try {
      this.mirrorLocStrIntoCopies(realLocStr, copies);
    } finally {
      this._syncing = false;
    }
  }
  // The target copy's onPropertyValueChangedCallback: forwards inline edits to the real survey.
  public forwardTargetChange(name: string, sender: Base): void {
    if (this._syncing || this.isDisposed) return;
    const copyLocStr = this.getLocStrByName(sender, name);
    if (!copyLocStr) return;
    const item = this.byTargetLocStr.get(copyLocStr);
    const locale = this.targetLocale || "";
    if (!item) {
      // An editable string the mapping does not know about - the trees drifted, self-heal.
      // The value typed into the copy cannot be forwarded reliably, so it is dropped with the rebuild.
      this.rebuildInstances();
      return;
    }
    const stored = copyLocStr.getLocaleText(locale) || "";
    const processed = this.getProcessedTranslationItemText(locale, item.locString, stored, item.context) || "";
    const current = item.locString.getLocaleText(locale) || "";
    if (processed === current) return;
    this._syncing = true;
    try {
      this.performItemLocTextAction(item, locale, processed);
      if (processed !== stored) {
        // The options hook rewrote the text - reflect the processed value back into the copies.
        const copies = this.byRealLocStr.get(item.locString);
        if (!!copies)this.mirrorLocStrIntoCopies(item.locString, copies);
      }
    } finally {
      this._syncing = false;
    }
  }
  // The grid can be scoped to a single page; CSV export must still cover the whole survey,
  // exactly like the forms view does.
  public exportToCSV(): string {
    if (!this.isSideBySideGrid) return super.exportToCSV();
    const translation = new Translation(this.survey, this.options, false);
    translation.showAllStrings = true;
    translation.translationStringVisibilityCallback = this.translationStringVisibilityCallback;
    translation.localeInitialVisibleCallback = this.localeInitialVisibleCallback;
    try {
      return translation.exportToCSV();
    } finally {
      translation.dispose();
    }
  }
  // Keeps the vertical scrollbars of the two panes in sync. The UI components pass their
  // scrollable containers here; passing null/undefined (on unmount) detaches the listener.
  public setSourceScrollElement(element: HTMLElement): void {
    this.setScrollElement(0, element);
  }
  public setTargetScrollElement(element: HTMLElement): void {
    this.setScrollElement(1, element);
  }
  private scrollElements: Array<HTMLElement> = [undefined, undefined];
  private scrollHandlers: Array<() => void> = [undefined, undefined];
  private setScrollElement(index: number, element: HTMLElement): void {
    const prev = this.scrollElements[index];
    if (prev === element) return;
    if (!!prev) prev.removeEventListener("scroll", this.scrollHandlers[index]);
    this.scrollElements[index] = element || undefined;
    this.scrollHandlers[index] = undefined;
    if (!element) return;
    const handler = (): void => this.syncScroll(index);
    this.scrollHandlers[index] = handler;
    element.addEventListener("scroll", handler);
  }
  // Mirrors scrollTop into the other pane. The mirrored pane's echo scroll event finds the
  // values already equal and stops, so no re-entrancy flag is needed.
  private syncScroll(index: number): void {
    const from = this.scrollElements[index];
    const to = this.scrollElements[1 - index];
    if (!from || !to || to.scrollTop === from.scrollTop) return;
    to.scrollTop = from.scrollTop;
  }
  public dispose(): void {
    this.setSourceScrollElement(undefined);
    this.setTargetScrollElement(undefined);
    this.disposeInstances();
    this.selectedLocString = undefined;
    super.dispose();
  }
  private createInstance(json: any, reason: string): SurveyModel {
    return this.options.createSurvey(json, reason, this, (survey: SurveyModel): void => {
      this.makeSurveyIdSpaceUnique(survey);
      survey.setDesignMode(true);
      survey.lazyRenderEnabled = true;
      // The panes show the navigation buttons the runtime survey would show: the callback
      // gets the final say over the design-mode guard.
      survey.isNavigationButtonsShowingCallback = (show: string): string => show;
      // Required questions must not block Next while navigating the panes.
      survey.validationEnabled = false;
    });
  }
  private setupSourceSurvey(survey: SurveyModel): void {
    // No renderer at all: suppresses the built-in design-mode string editor, the source pane is read-only.
    survey.getRendererForString = (): string => undefined;
    // Completing or previewing the copy would swap the pane away from the translation surface.
    this.suppressNavigationActions(survey, ["sv-nav-preview", "sv-nav-complete"]);
    // Prev/Next/Start navigate the source copy for real; the target pane and the page
    // dropdown follow through the selectedPageName observer.
    survey.onCurrentPageChanged.add((sender: SurveyModel): void => {
      if (this.isDisposed || !sender.currentPage) return;
      this.selectedPageName = sender.currentPage.name;
    });
  }
  private setupTargetSurvey(survey: SurveyModel): void {
    const creator = this.creatorModel;
    if (!!creator) {
      survey.getRendererForString = (element: Base, name: string, item?: ItemValue): string => {
        return creator.isStringInplacelyEditable(element, name, item) ? editableStringRendererName : undefined;
      };
      survey.getRendererContextForString = (element: Base, locStr: LocalizableString, item?: ItemValue): any => {
        if (creator.isStringInplacelyEditable(element, locStr.name, item)) {
          return { creator: creator, element: element, locStr: locStr };
        }
        return <any>locStr;
      };
      // Remembers the string behind the focused inline editor for the selection sync with the grid view.
      creator.onStringEditorFocusedCallback = (locStr: LocalizableString): void => {
        if (this.isDisposed) return;
        const item = this.byTargetLocStr.get(locStr);
        if (!!item)this.selectedLocString = item.locString;
      };
    }
    survey.onPropertyValueChangedCallback = (name: string, oldValue: any, newValue: any, sender: Base): void => {
      this.forwardTargetChange(name, sender);
    };
    // Clicking a target nav button means "edit this caption" - it must never navigate,
    // preview or complete. Page changes reach this pane only through selectedPageName.
    this.suppressNavigationActions(survey,
      ["sv-nav-start", "sv-nav-prev", "sv-nav-next", "sv-nav-preview", "sv-nav-complete"]);
  }
  private suppressNavigationActions(survey: SurveyModel, ids: Array<string>): void {
    ids.forEach(id => {
      const action = survey.navigationBar.getActionById(id);
      if (!!action) action.action = (): void => {};
    });
  }
  // The creator instance when the model is created by the translation plugin. The options object
  // is checked structurally so the model stays constructible with EmptySurveyCreatorOptions in tests.
  private get creatorModel(): any {
    const options = <any>this.options;
    return !!options && typeof options.isStringInplacelyEditable === "function" ? options : undefined;
  }
  private disposeInstances(): void {
    const creator = this.creatorModel;
    if (!!creator)creator.onStringEditorFocusedCallback = undefined;
    [this.sourceSurvey, this.targetSurvey].forEach(survey => {
      if (!survey) return;
      survey.getRendererForString = undefined;
      survey.getRendererContextForString = undefined;
      survey.onPropertyValueChangedCallback = undefined;
      survey.isNavigationButtonsShowingCallback = undefined;
      survey.dispose();
    });
    this.sourceSurvey = undefined;
    this.targetSurvey = undefined;
    this.byTargetLocStr = new Map<ILocalizableString, TranslationItem>();
    this.byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();
  }
  // Keeps the real survey's locale in sync with the language being translated. An empty
  // target means the default language; an explicit default-locale name on the survey
  // ("en") is the same language, so it is left untouched in that case.
  private updateSurveyLocale(): void {
    if (!this.survey || this.isDisposed) return;
    const locale = this.targetLocale || "";
    const current = this.survey.locale || "";
    if (current === locale || (!locale && current === surveyLocalization.defaultLocale)) return;
    const wasSyncing = this._syncing;
    this._syncing = true;
    try {
      this.survey.locale = locale;
    } finally {
      this._syncing = wasSyncing;
    }
  }
  private updateInstanceLocales(): void {
    const wasSyncing = this._syncing;
    // Changing the locale fires strChanged on every localizable string of the copy;
    // the flag keeps that cascade out of forwardTargetChange.
    this._syncing = true;
    try {
      if (!!this.sourceSurvey)this.sourceSurvey.locale = this.sourceLocale || "";
      if (!!this.targetSurvey)this.targetSurvey.locale = this.targetLocale || "";
    } finally {
      this._syncing = wasSyncing;
    }
  }
  private updateInstancePages(): void {
    const name = this.selectedPageName;
    if (!name) return;
    [this.sourceSurvey, this.targetSurvey].forEach(survey => {
      if (!survey) return;
      const page = survey.getPageByName(name);
      if (!!page) survey.currentPage = page;
    });
  }
  private buildMappings(): void {
    this.byTargetLocStr = new Map<ILocalizableString, TranslationItem>();
    this.byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();
    const realItems = this.collectItems(this.root, new Map<string, TranslationItem>());
    const targetItems = this.collectItems(this.createCopyRoot(this.targetSurvey), new Map<string, TranslationItem>());
    const srcItems = this.collectItems(this.createCopyRoot(this.sourceSurvey), new Map<string, TranslationItem>());
    realItems.forEach((item: TranslationItem, key: string) => {
      const copies = new Array<ILocalizableString>();
      const targetItem = targetItems.get(key);
      if (!!targetItem) {
        this.byTargetLocStr.set(targetItem.locString, item);
        copies.push(targetItem.locString);
      }
      const srcItem = srcItems.get(key);
      if (!!srcItem) {
        copies.push(srcItem.locString);
      }
      if (copies.length > 0) {
        this.byRealLocStr.set(item.locString, copies);
      }
    });
  }
  private createCopyRoot(survey: SurveyModel): TranslationGroup {
    const root = new TranslationGroup("survey", survey, this);
    root.setAsRoot();
    root.reset();
    return root;
  }
  private collectItems(group: TranslationGroup, items: Map<string, TranslationItem>): Map<string, TranslationItem> {
    group.locItems.forEach(item => items.set(group.fullName + "." + item.name, item));
    group.groups.forEach(child => this.collectItems(child, items));
    return items;
  }
  // An external survey.locale change (an undo/redo rollback) - follow it instead of rebuilding.
  protected followSurveyLocale(): void {
    const locale = this.survey.locale;
    this.targetLocale = !!locale && locale !== surveyLocalization.defaultLocale ? locale : "";
  }
  private mirrorLocStrIntoCopies(realLocStr: ILocalizableString, copies: Array<ILocalizableString>): void {
    const json = (<LocalizableString>realLocStr).getJson();
    copies.forEach(copy => {
      (<LocalizableString>copy).setJson(json);
      (<LocalizableString>copy).strChanged();
    });
  }
}

// The grid alternative of the side-by-side mode: instead of two rendered survey panes it shows
// the strings grid of the base Translation class with a source and a target locale column.
// Page filtering (filteredPage) and the all/used strings filter work as in the standard mode.
// Kept as a constructor shortcut - the behavior lives in TranslationSideBySide's "grid" view.
export class TranslationSideBySideGrid extends TranslationSideBySide {
  constructor(survey: SurveyModel, options: ISurveyCreatorOptions = null) {
    super(survey, options, "grid");
  }
}
