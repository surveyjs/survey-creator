import {
  Action, AdaptiveActionContainer, Base, EventBase, IDialogOptions, ILocalizableString, ItemValue,
  JsonObjectProperty, LocalizableString, PageModel, PanelModel, PopupBaseViewModel, Question,
  QuestionButtonGroupModel, QuestionDropdownModel, QuestionMatrixDropdownModel,
  QuestionMatrixDynamicModel, SurveyModel, property,
  settings as surveySettings, surveyLocalization
} from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { editorLocalization } from "../../editorLocalization";
import { editableStringRendererName, isContentElement } from "../../creator-base";
import { ITranslationDropdownOwner, translationDropdownComponentName } from "./translation-dropdown";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { StringEditorConnector } from "../string-editor";
import { QuestionLinkValueModel } from "../link-value";
import { showConfirmDialog } from "../../utils/confirm-dialog";
import { updateMatixActionsAppearance } from "../../utils/actions";
import { SurveyElementActionContainer } from "../action-container-view-model";
import { getActualLocaleName } from "../../utils/creator-locstrings";
import { ITranslationLocales, Translation, TranslationGroup, TranslationItem } from "./translation";

// The default locale is stored as "" on the model; the settings survey dropdowns need a
// non-empty value for it (an empty dropdown value would render as "no selection").
const defaultLocaleSettingValue = "default";
// A non-breaking space: rendered instead of an empty header string of the source pane to keep
// the row one text line high (see setupSourceEmptySpaces).
const emptySpaceText = "\u00A0";

// The owner of the progress-counting tree of the languages matrix: the whole-survey
// used-strings filter (showAllStrings = false) of the base class. A separate owner is needed
// because the side-by-side model's own root uses different filters - all strings in the forms
// view, an optional single-page scope in the grid view.
class TranslationUsedStringsOwner implements ITranslationLocales {
  constructor(private owner: Translation) { }
  public get locales(): Array<string> { return []; }
  public get showAllStrings(): boolean { return false; }
  public get readOnly(): boolean { return true; }
  public getLocaleName(loc: string): string { return this.owner.getLocaleName(loc); }
  public availableTranlationsChangedCallback: () => void;
  public tranlationChangedCallback: (locale: string, name: string, value: string, context: any) => void;
  public translateItemAfterRender(): void { }
  public fireOnObjCreating(): void { }
  public removeLocale(): void { }
  public canShowProperty(obj: Base, prop: JsonObjectProperty, isEmpty: boolean, isShowing: boolean): boolean {
    return this.owner.canShowProperty(obj, prop, isEmpty, isShowing);
  }
  // The element strings dialog scopes its tree via canShowElementGroup - the used-strings
  // tree built over the same owner must stay within the same scope.
  public canShowElementGroup(obj: Base): boolean {
    const owner = <ITranslationLocales>this.owner;
    return !owner.canShowElementGroup || owner.canShowElementGroup(obj);
  }
  public getEditLocale(): string { return ""; }
  public get isEditMode(): boolean { return false; }
  public getProcessedTranslationItemText(locale: string, name: ILocalizableString, newValue: string): string {
    return newValue;
  }
}

// The translation state of a target-pane element for the current target language:
// "none" - no used strings with a stored text (nothing to translate), "untranslated" - at
// least one used string has no stored target-locale text, "translated" - all of them do.
export type TranslationElementState = "none" | "untranslated" | "translated";

export class TranslationSideBySide extends Translation implements ITranslationDropdownOwner {
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
  // ITranslationDropdownOwner: the shared collapse state of the flattened dropdown/tagbox
  // choice lists, keyed by the question name - the panes must expand/collapse together.
  private choicesCollapsedState: { [questionName: string]: boolean } = {};
  public onChoicesCollapsedChanged = new EventBase<Base, any>();

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
    // titleLocationLeft = false: the language dropdown titles sit on top of the editors,
    // as in the designer's property grid.
    setSurveyJSONForPropertyGrid(json, true, false);
    const res = this.options.createSurvey(json, "translation_settings", this, (survey: SurveyModel): void => {
      survey.css = propertyGridCss;
      // The page plays the role of a property grid category content, as in the designer.
      survey.css.page.root += " spg-panel__content";
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
    res.onMatrixCellCreated.add((sender, options) => {
      if (options.question.name !== "languages" || options.column.name !== "displayName") return;
      const cellQuestion = <QuestionLinkValueModel>options.cell.question;
      cellQuestion.allowClear = false;
      cellQuestion.showClear = false;
      const matrix = <QuestionMatrixDynamicModel>options.question;
      const row = options.row;
      cellQuestion.linkClickCallback = () => {
        // Resolved at click time: a row can be reused for a different locale after a refresh.
        const locale = this.getLanguagesRowLocale(matrix, row);
        if (locale !== undefined)this.selectLanguage(locale);
      };
    });
    res.onGetMatrixRowActions.add((sender, options) => {
      if (options.question.name !== "languages") return;
      const matrix = <QuestionMatrixDynamicModel>options.question;
      const row = options.row;
      const locale = this.getLanguagesRowLocale(matrix, row);
      // The default language is the reference every translation is measured against - no delete.
      if (!locale || this.readOnly) return;
      options.actions.push(new Action({
        id: "delete-language",
        iconName: "icon-delete",
        iconSize: "auto",
        tooltip: editorLocalization.getString("pe.delete"),
        showTitle: false,
        location: "end",
        action: () => {
          const currentLocale = this.getLanguagesRowLocale(matrix, row);
          if (!!currentLocale)this.deleteLanguage(currentLocale);
        }
      }));
      updateMatixActionsAppearance(options.actions);
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
        },
        {
          type: "matrixdynamic",
          name: "languages",
          title: editorLocalization.getString("ed.translationLanguages"),
          titleLocation: "top",
          columns: [
            { name: "displayName", cellType: "linkvalue" },
            { name: "progress", cellType: "expression", expression: "{row.progress}" }
          ],
          showHeader: false,
          allowAddRows: false,
          allowRemoveRows: false,
          rowCount: 0
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
      this.updateLanguagesMatrixSelection();
    } finally {
      this._updatingSettingsSurvey = false;
    }
  }
  public get languagesQuestion(): QuestionMatrixDynamicModel {
    const survey = this.settingsSurvey;
    return !!survey ? <QuestionMatrixDynamicModel>survey.getQuestionByName("languages") : undefined;
  }
  // The matrix row set: the default locale ("") first, then every locale with at least one
  // stored string. No synthetic rows - a freshly targeted language appears only once its
  // first string is stored (the target dropdown already shows what is being translated).
  public getLanguages(): Array<string> {
    const res: Array<string> = [""];
    if (!this.survey) return res;
    this.survey.getUsedLocales().forEach(loc => {
      if (!loc || loc === surveyLocalization.defaultLocale || res.indexOf(loc) >= 0) return;
      if (!!this.localeInitialVisibleCallback && !this.localeInitialVisibleCallback(loc)) return;
      res.push(loc);
    });
    return res;
  }
  // The whole-survey used-strings items: the progress denominator of the languages matrix.
  // Never scoped by the grid view's page filter and independent of the view's strings filter.
  public getUsedStringsItems(): Array<TranslationItem> {
    return this.createUsedStringsRoot().allLocItems;
  }
  private createUsedStringsRoot(): TranslationGroup {
    const root = new TranslationGroup("survey", this.survey, new TranslationUsedStringsOwner(this));
    root.setAsRoot();
    root.reset();
    return root;
  }
  public isItemTranslated(item: TranslationItem, locale: string): boolean {
    return !!item.locString.getLocaleText(locale);
  }
  public getTranslationProgress(locale: string, items?: Array<TranslationItem>): { translated: number, total: number } {
    const usedItems = items || this.getUsedStringsItems();
    let translated = 0;
    usedItems.forEach(item => {
      if (this.isItemTranslated(item, locale)) translated++;
    });
    return { translated: translated, total: usedItems.length };
  }
  public updateLanguagesMatrix(): void {
    const question = this.languagesQuestion;
    if (!question || this.isDisposed || !this.survey) return;
    const items = this.getUsedStringsItems();
    question.value = this.getLanguages().map(loc => {
      return {
        name: loc,
        displayName: this.getLocaleName(loc),
        progress: this.getLanguageProgressText(loc, items)
      };
    });
    this.updateLanguagesMatrixSelection();
  }
  // The default language is the reference - a progress value is meaningless there, it shows
  // the total only.
  private getLanguageProgressText(locale: string, items: Array<TranslationItem>): string {
    if (!locale) {
      return editorLocalization.getString("ed.translationStringsCount")["format"](items.length);
    }
    const progress = this.getTranslationProgress(locale, items);
    return progress.translated + "/" + progress.total;
  }
  // The current target's row shows as selected (the linkvalue cell's isSelected drives the css).
  private updateLanguagesMatrixSelection(): void {
    const question = this.languagesQuestion;
    if (!question) return;
    const val = question.value;
    if (!Array.isArray(val) || val.length === 0) return;
    const target = this.targetLocale || "";
    const rows = question.visibleRows;
    for (let i = 0; i < rows.length && i < val.length; i++) {
      const cellQuestion = <QuestionLinkValueModel>rows[i].cells[0].question;
      if (!!cellQuestion && cellQuestion.getType() === "linkvalue") {
        cellQuestion.isSelected = (val[i].name || "") === target;
      }
    }
  }
  private getLanguagesRowLocale(matrix: QuestionMatrixDynamicModel, row: any): string {
    const index = matrix.visibleRows.indexOf(row);
    const val = matrix.value;
    if (index < 0 || !Array.isArray(val) || index >= val.length || !val[index]) return undefined;
    return val[index].name || "";
  }
  // A matrix language click behaves exactly like picking the language in the target dropdown;
  // per the dropdowns' mutual-exclusion rule, taking over the source's language resets the
  // source to the default one.
  public selectLanguage(locale: string): void {
    if (this.isDisposed) return;
    if (!!locale && (this.sourceLocale || "") === locale) {
      this.sourceLocale = "";
    }
    this.targetLocale = locale;
  }
  public deleteLanguage(locale: string): void {
    if (!locale || this.isDisposed || !surveySettings.showDialog) return;
    showConfirmDialog(<any>this.options, {
      title: editorLocalization.getString("ed.translationDeleteLanguageTitle"),
      message: editorLocalization.getString("ed.translationDeleteLanguageMessage")["format"](this.getLocaleName(locale)),
      iconName: "icon-warning-24x24",
      category: "danger",
      showCloseButton: false,
      applyText: editorLocalization.getString("pe.delete"),
      cancelText: surveyLocalization.getString("cancel"),
      onApply: () => {
        this.deleteLanguageCore(locale);
        return true;
      },
      onCancel: () => { }
    });
  }
  private deleteLanguageCore(locale: string): void {
    // The deletion always covers the whole survey; the grid view's root can be scoped to a
    // single page, so it goes through a temporary unscoped model then (like the CSV export).
    if (!!this.filteredPage) {
      this.runWithoutSurveyReaction(() => {
        const translation = new Translation(this.survey, this.options, false);
        translation.doUndoableAction = (action, title) => this.doUndoableAction(action, title);
        translation.translationStringVisibilityCallback = this.translationStringVisibilityCallback;
        translation.deleteLocaleStrings(locale);
        translation.dispose();
      });
      this.reset();
    } else {
      this.deleteLocaleStrings(locale);
    }
    if ((this.targetLocale || "") === locale) {
      this.targetLocale = "";
    }
    if (!this.isSideBySideGrid) {
      this.rebuildInstances();
    }
  }
  // Bulk write operations (CSV import, apply-translations, locale deletion) run through
  // runWithoutSurveyReaction and refresh the languages matrix once via the reset that follows;
  // a single string edit refreshes it immediately.
  private _bulkTextAction: boolean = false;
  public runWithoutSurveyReaction(fn: () => void): void {
    const wasBulk = this._bulkTextAction;
    this._bulkTextAction = true;
    try {
      super.runWithoutSurveyReaction(fn);
    } finally {
      this._bulkTextAction = wasBulk;
    }
  }
  public performItemLocTextAction(item: TranslationItem, locale: string, newText: string): void {
    super.performItemLocTextAction(item, locale, newText);
    if (!this._bulkTextAction) {
      this.updateLanguagesMatrix();
      this.updateElementTranslationStates();
    }
  }
  public reset(alwaysReset: boolean = true): void {
    super.reset(alwaysReset);
    this.updateLanguagesMatrix();
    this.updateElementTranslationStates();
  }
  // The forms view's per-element indicator: every target-pane element with a title row (the
  // survey, pages, panels with strings, questions) shows the translation state of the strings
  // its translate action covers - the element's own strings, including the ones reachable
  // only through its strings dialog (matrix column choices, validators, survey-level strings),
  // but not the nested elements, which show indicators of their own. States are keyed by the
  // element type and name, so a pane copy and its real-survey element resolve to the same entry.
  private elementStates: { [key: string]: TranslationElementState } = {};
  private elementStateActions: { [key: string]: Action } = {};
  public getElementTranslationState(element: Base): TranslationElementState {
    const key = this.getElementStateKey(element);
    return (!!key ? this.elementStates[key] : undefined) || "none";
  }
  private getElementStateKey(element: any): string {
    if (!element) return undefined;
    if (element instanceof SurveyModel) return "survey";
    if (element.isPage) return "page:" + element.name;
    if (element.isPanel) return "panel:" + element.name;
    if (element.isQuestion) return "question:" + element.name;
    return undefined;
  }
  public updateElementTranslationStates(): void {
    if (this.isDisposed || this.isSideBySideGrid || !this.survey) return;
    this.elementStates = this.computeElementStates();
    for (const key in this.elementStateActions) {
      this.applyElementStateToAction(this.elementStateActions[key], this.elementStates[key] || "none");
    }
  }
  // Only the used strings with a stored text count: an element whose items exist merely
  // through value/name fallbacks (a freshly added question with no texts) has nothing to
  // translate. An element's state covers exactly the strings its dialog edits: its own
  // strings plus the non-element groups below it (matrix column choices, validators, ...).
  // Nested pages, panels and questions carry indicators of their own, so their counts do
  // not roll up into the parent.
  private computeElementStates(): { [key: string]: TranslationElementState } {
    const states: { [key: string]: TranslationElementState } = {};
    const locale = this.targetLocale || "";
    const calc = (group: TranslationGroup): { translated: number, total: number } => {
      const counts = { translated: 0, total: 0 };
      group.locItems.forEach(item => {
        if ((<LocalizableString>item.locString).isEmpty) return;
        counts.total++;
        if (this.isItemTranslated(item, locale)) counts.translated++;
      });
      group.groups.forEach(child => {
        const childCounts = calc(child);
        if (!this.getElementStateKey(child.obj)) {
          counts.translated += childCounts.translated;
          counts.total += childCounts.total;
        }
      });
      const key = this.getElementStateKey(group.obj);
      if (!!key) {
        states[key] = this.getStateFromCounts(counts);
      }
      return counts;
    };
    calc(this.createUsedStringsRoot());
    return states;
  }
  private getStateFromCounts(counts: { translated: number, total: number }): TranslationElementState {
    if (counts.total === 0) return "none";
    // With the default language as the target every used string has a text by definition -
    // the warning state is meaningless there.
    if (!!this.targetLocale && counts.translated < counts.total) return "untranslated";
    return "translated";
  }
  // The untranslated state is the one where the button is a genuine call to action, so its
  // tooltip is the action title itself - the warning icon already carries the state.
  private static elementStateAppearance = {
    none: { iconName: "icon-remove_16x16", tooltip: "ed.translationStateNothingToTranslate" },
    untranslated: { iconName: "icon-warning-24x24", tooltip: "ed.translateStrings" },
    translated: { iconName: "icon-check-16x16", tooltip: "ed.translationStateAllTranslated" }
  };
  // The state icon replaces the translate action's language icon and the state text becomes
  // the whole tooltip; the title keeps the stable accessible name in every state.
  private applyElementStateToAction(action: Action, state: TranslationElementState): void {
    const info = TranslationSideBySide.elementStateAppearance[state];
    action.iconName = info.iconName;
    action.tooltip = editorLocalization.getString(info.tooltip);
    action.css = "svc-translation-state svc-translation-state--" + state;
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
      if (name === "targetLocale") {
        this.updateElementTranslationStates();
      }
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
      // The indicator actions of the fresh copies read the per-element states at creation
      // time - compute them before the title actions are set up.
      this.updateElementTranslationStates();
      const json = this.survey.toJSON();
      this.sourceSurvey = this.createInstance(json, "translation_source");
      this.targetSurvey = this.createInstance(json, "translation_target");
      this.setupSourceSurvey(this.sourceSurvey);
      this.setupTargetSurvey(this.targetSurvey);
      this.setupSourceEmptySpaces();
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
    this.onCreatorSurveyPropertyChangedCore(obj, propName);
    // Any real-survey change can move the counters, change the denominator (structural
    // changes) or add/remove a locale row (an undo restoring/removing the last string).
    this.updateLanguagesMatrix();
    this.updateElementTranslationStates();
  }
  private onCreatorSurveyPropertyChangedCore(obj: Base, propName: string): void {
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
  public get maxVisibleChoices(): number {
    const creator = this.creatorModel;
    return !!creator ? creator.maxVisibleChoices : 10;
  }
  public isChoicesCollapsed(questionName: string): boolean {
    // Collapsed by default, as in the designer.
    return this.choicesCollapsedState[questionName] !== false;
  }
  public setChoicesCollapsed(questionName: string, value: boolean): void {
    this.choicesCollapsedState[questionName] = value;
    this.onChoicesCollapsedChanged.fire(this, { questionName: questionName, collapsed: value });
  }
  // Dropdown/tagbox choices live in a popup that never opens in design mode, so the panes
  // flatten them into a rendered list; matrix cells and other template content are excluded -
  // their strings are copies that must not be edited (see showQuestionStringsDialog).
  private isFlattenedChoicesQuestion(element: any): boolean {
    return element instanceof Question && !isContentElement(element) &&
      (element.isDescendantOf("dropdown") || element.isDescendantOf("tagbox"));
  }
  private createInstance(json: any, reason: string): SurveyModel {
    return this.options.createSurvey(json, reason, this, (survey: SurveyModel): void => {
      this.makeSurveyIdSpaceUnique(survey);
      survey.setDesignMode(true);
      survey.lazyRenderEnabled = true;
      // The panes are page-driven by the page dropdown; the runtime navigation UI
      // (navigation bar, progress bar, TOC) is not shown.
      survey.showNavigationButtons = false;
      survey.showProgressBar = false;
      survey.showTOC = false;
      // The advanced header is a visual cover whose cells shrink-wrap the title, leaving
      // no room for the survey translate action next to it. The panes always render the
      // basic header - the cover design is not what is being translated.
      survey.headerView = "basic";
      // The survey header (title, description, logo) is survey-level content, not page
      // content - the panes show it above the first page only instead of on every page.
      this.showSurveyHeaderOnFirstPageOnly(survey);
      // Marks the pane for the string editor: choice edits always go into the locale text,
      // never into the choice value (creator.inplaceEditChoiceValues does not apply here).
      (<any>survey).isTranslationSurface = true;
      this.setupTitlePlaceholders(survey);
      // Both panes flatten dropdown/tagbox choices - identical layout keeps the rows of the
      // two panes aligned; the source pane stays read-only through its string renderer.
      survey.onElementWrapperComponentName.add((_, opt) => {
        if (opt.wrapperName === "content-component" && this.isFlattenedChoicesQuestion(opt.element)) {
          opt.componentName = translationDropdownComponentName;
        }
      });
      // The content wrapper's data comes through the "component" request in every framework
      // (see ReactSurveyElementsWrapper.wrapQuestionContent and its Vue/Angular equivalents).
      survey.onElementWrapperComponentData.add((_, opt) => {
        if (opt.wrapperName === "component" && this.isFlattenedChoicesQuestion(opt.element)) {
          opt.data = { translation: this };
        }
      });
      this.restoreRunnerElementStyles(survey);
    });
  }
  // The panes are design-mode surveys, so the header parts render whenever the corresponding
  // survey property is visible (see renderedHasTitle/renderedHasDescription/renderedHasLogo).
  // Route those checks through a page-driven flag; it is read via getPropertyValue, so the
  // UI bindings of every framework re-evaluate the header when the flag changes.
  private showSurveyHeaderOnFirstPageOnly(survey: SurveyModel): void {
    const headerProperties = ["title", "description", "logo"];
    const basePropertyVisible = survey.isPropertyVisible.bind(survey);
    survey.isPropertyVisible = (propName: string): boolean => {
      if (headerProperties.indexOf(propName) >= 0 && !survey.getPropertyValue("showSurveyHeader")) return false;
      // The logo is an image, not an inline-editable string (its per-locale URL is edited
      // through the survey strings dialog), and in design mode an empty logo would even
      // render as a src-less placeholder image. The panes never show it: this keeps the
      // full title row for the title text and its translate action, which sits at the
      // pane's right edge as in the page/question title rows.
      if (propName === "logo") return false;
      return basePropertyVisible(propName);
    };
    const updateFlag = (): void => {
      survey.setPropertyValue("showSurveyHeader", survey.pages.indexOf(survey.currentPage) <= 0);
    };
    updateFlag();
    survey.onCurrentPageChanged.add(updateFlag);
  }
  // Empty titles must still host the translate actions. The survey and page title rows always
  // render in design mode, so they only get a placeholder text (shown by the target pane's
  // string editor). A panel renders its title row only when the title has a text: a panel with
  // translatable strings (a title in another locale or a description) gets the row forced in
  // both panes to keep them aligned; a panel without any strings is left alone - no row,
  // no placeholder and no translate action.
  private setupTitlePlaceholders(survey: SurveyModel): void {
    (<any>survey.locTitle).placeholder = "pe.surveyTitlePlaceholder";
    survey.pages.forEach(page => {
      (<any>page.locTitle).placeholder = "pe.pageTitlePlaceholder";
    });
    survey.getAllPanels().forEach(panelObj => {
      const panel = <PanelModel>panelObj;
      if (!this.panelHasTranslatableStrings(panel)) return;
      (<any>panel.locTitle).placeholder = "pe.panelTitlePlaceholder";
      if (!panel.hasTitle) {
        panel.setPropertyValue("hasTextInTitle", true);
      }
    });
  }
  private panelHasTranslatableStrings(panel: PanelModel): boolean {
    return !panel.locTitle.isEmpty || !panel.locDescription.isEmpty;
  }
  // The target pane keeps a visible header row even for an empty string: an empty title shows
  // the placeholder in its string editor, a description shows the target-locale text when one
  // is stored. The source pane renders plain strings, so the same rows would collapse to zero
  // height and pull the panes out of vertical alignment - an empty source header string renders
  // a blank space instead while its target counterpart has content. Covers the survey, the
  // pages and the panels whose title row is forced (see setupTitlePlaceholders).
  private sourceEmptySpaceStrings: Array<LocalizableString> = [];
  private setupSourceEmptySpaces(): void {
    this.sourceEmptySpaceStrings = [];
    const addEmptySpace = (source: ILocalizableString, target: ILocalizableString): void => {
      const locStr = <LocalizableString>source;
      locStr.onGetTextCallback = (text: string): string => {
        if (!!text) return text;
        const targetHasContent = !!(<any>target).placeholder || !!(<LocalizableString>target).pureText;
        return targetHasContent ? emptySpaceText : "";
      };
      this.sourceEmptySpaceStrings.push(locStr);
    };
    addEmptySpace(this.sourceSurvey.locTitle, this.targetSurvey.locTitle);
    addEmptySpace(this.sourceSurvey.locDescription, this.targetSurvey.locDescription);
    this.sourceSurvey.pages.forEach(page => {
      const targetPage = this.targetSurvey.getPageByName(page.name);
      if (!targetPage) return;
      addEmptySpace(page.locTitle, targetPage.locTitle);
      addEmptySpace(page.locDescription, targetPage.locDescription);
    });
    this.sourceSurvey.getAllPanels().forEach(panelObj => {
      const panel = <PanelModel>panelObj;
      // Only panels with a title row: a panel without translatable strings renders no row in
      // either pane, and a blank space would force one (hasTitle checks the rendered text).
      if (!(<any>panel.locTitle).placeholder) return;
      const targetPanel = <PanelModel>this.targetSurvey.getPanelByName(panel.name);
      if (!targetPanel) return;
      addEmptySpace(panel.locTitle, targetPanel.locTitle);
      addEmptySpace(panel.locDescription, targetPanel.locDescription);
    });
  }
  // Design-mode surveys get neither the "with frame" nor the "nested" css classes: the designer
  // draws its own question boxes over frameless elements, and the default theme keeps all
  // element spacing on these classes. The panes render without the designer surface, so the
  // runtime classes are restored here - otherwise elements would be flat, without paddings.
  private restoreRunnerElementStyles(survey: SurveyModel): void {
    const appendRunnerClass = (element: any, cssClasses: any, rootName: string): void => {
      const parent = element.parent;
      const hasFrame = !!parent && (parent.isPage || parent.showPanelAsPage);
      const runnerClass = hasFrame ? cssClasses.withFrame : cssClasses.nested;
      if (!!runnerClass && !!cssClasses[rootName]) {
        cssClasses[rootName] += " " + runnerClass;
      }
    };
    survey.onUpdateQuestionCssClasses.add((sender, options) => {
      appendRunnerClass(options.question, options.cssClasses, "mainRoot");
    });
    survey.onUpdatePanelCssClasses.add((sender, options) => {
      // The panel event passes the full classes structure, the panel's own classes are inside.
      appendRunnerClass(options.panel, options.cssClasses.panel, "container");
    });
  }
  private setupSourceSurvey(survey: SurveyModel): void {
    // No renderer at all: suppresses the built-in design-mode string editor, the source pane is read-only.
    survey.getRendererForString = (): string => undefined;
    // The target pane and the page dropdown follow a source page change through the
    // selectedPageName observer.
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
    survey.onGetQuestionTitleActions.add((_, options) => {
      if (isContentElement(options.question)) return;
      options.actions.push(this.createTranslateAction("svc-translate-question",
        () => this.showQuestionStringsDialog(options.question), options.question));
    });
    survey.onGetPageTitleActions.add((_, options) => {
      options.actions.push(this.createTranslateAction("svc-translate-page",
        () => this.showPageStringsDialog(options.page), options.page));
    });
    survey.onGetPanelTitleActions.add((_, options) => {
      if (isContentElement(options.panel)) return;
      if (!this.panelHasTranslatableStrings(options.panel)) return;
      options.actions.push(this.createTranslateAction("svc-translate-panel",
        () => this.showPanelStringsDialog(options.panel), options.panel));
    });
    this.addSurveyTitleTranslateAction(survey);
  }
  // The translate action doubles as the element's translation state indicator: its icon,
  // css modifier and tooltip follow the state of the element's string subtree. The title
  // is the same for every element type - the action sits on the element's own title row.
  private createTranslateAction(id: string, doAction: () => void, paneElement: Base): Action {
    const title = editorLocalization.getString("ed.translateStrings");
    const action = new Action({
      id: id,
      iconName: "icon-language",
      iconSize: "auto",
      tooltip: title,
      title: title,
      showTitle: false,
      action: doAction
    });
    const key = this.getElementStateKey(paneElement);
    if (!!key) {
      this.elementStateActions[key] = action;
      this.applyElementStateToAction(action, this.elementStates[key] || "none");
    }
    return action;
  }
  // The survey header has no title-actions support of its own (SurveyModel is not a
  // SurveyElement), so the target pane instance gets the title toolbar contract members
  // directly; the title UI components of every framework read them off the element.
  private surveyTitleToolbar: AdaptiveActionContainer;
  private addSurveyTitleTranslateAction(survey: SurveyModel): void {
    const toolbar = new AdaptiveActionContainer();
    const actionBarCss = survey.getCss().actionBar;
    if (!!actionBarCss) toolbar.cssClasses = actionBarCss;
    toolbar.setActionsAppearance({ style: "neutral", size: "small", mode: "secondary" });
    toolbar.locOwner = survey;
    toolbar.containerCss = "sv-action-title-bar";
    toolbar.setItems([this.createTranslateAction("svc-translate-survey",
      () => this.showSurveyStringsDialog(), survey)]);
    toolbar.flushUpdates();
    this.surveyTitleToolbar = toolbar;
    Object.defineProperty(survey, "hasTitleActions", { get: (): boolean => true, configurable: true });
    survey.getTitleToolbar = (): AdaptiveActionContainer => toolbar;
  }
  // The translate title action of a target-pane element opens a dialog with a source/target
  // strings grid built over the real survey's element, so the edits go through the regular
  // undoable translation item path (and mirror into the panes). It covers the strings that
  // cannot be edited inline - the choices of matrix dropdown columns (whose cells render over
  // copies of the column data), survey-level strings, page/panel strings of other locales etc.
  public createElementStringsModel(realObj: Base): Translation {
    const model = new TranslationElementStrings(this.survey, realObj, this.options);
    model.doUndoableAction = (action, title) => this.doUndoableAction(action, title);
    model.translationStringVisibilityCallback = this.translationStringVisibilityCallback;
    model.readOnly = this.readOnly;
    model.useSourceTargetColumns = true;
    model.sourceLocale = this.sourceLocale;
    model.targetLocale = this.targetLocale;
    // The dialog opens in the "used strings only" mode (showAllStrings is false by default);
    // its grid holds a filter switcher (see TranslationElementStrings).
    model.reset();
    // An element without stored strings (e.g. a page with an empty title) would show the
    // "no strings" placeholder, which hides the grid along with the filter switcher -
    // fall back to all strings so the dialog is never a dead end. The used-only option
    // is disabled: choosing it would bring the empty grid back.
    if (model.isEmpty) {
      model.hasUsedStrings = false;
      model.showAllStrings = true;
    }
    return model;
  }
  public showQuestionStringsDialog(paneQuestion: Question): void {
    this.showElementStringsDialog(!!this.survey ? this.survey.getQuestionByName(paneQuestion.name) : undefined);
  }
  public showPageStringsDialog(panePage: PageModel): void {
    this.showElementStringsDialog(!!this.survey ? this.survey.getPageByName(panePage.name) : undefined);
  }
  public showPanelStringsDialog(panePanel: PanelModel): void {
    this.showElementStringsDialog(!!this.survey ? this.survey.getPanelByName(panePanel.name) : undefined);
  }
  public showSurveyStringsDialog(): void {
    this.showElementStringsDialog(this.survey);
  }
  public showElementStringsDialog(realObj: Base): void {
    if (!realObj || !surveySettings.showDialog) return;
    const model = this.createElementStringsModel(realObj);
    const prevLocale = surveyLocalization.currentLocale;
    surveyLocalization.currentLocale = editorLocalization.currentLocale;
    const popup: PopupBaseViewModel = surveySettings.showDialog(<IDialogOptions>{
      componentName: "svc-tab-translation",
      data: { model: model },
      onApply: (): boolean => true,
      onHide: () => model.dispose(),
      cssClass: "svc-property-editor st-translation-dialog svc-creator-popup",
      title: this.getElementStringsDialogTitle(realObj),
      displayMode: this.options.isMobileView ? "overlay" : "popup"
    }, this.options.rootElement);
    // The grid edits apply immediately (and are undoable), so the dialog gets a single
    // closing button instead of the apply/cancel pair.
    const actions = popup.footerToolbar.actions;
    actions.splice(1, actions.length - 1);
    actions[0].title = editorLocalization.getString("pe.doneEditing");
    popup.locale = editorLocalization.locale;
    surveyLocalization.currentLocale = prevLocale;
  }
  private getElementStringsDialogTitle(obj: Base): string {
    if (obj === <Base>this.survey) {
      return this.survey.title || editorLocalization.getString("ed.surveyTypeName");
    }
    // A question's title falls back to its name by itself; pages and panels need the explicit one.
    return (<any>obj).title || (<any>obj).name;
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
    if (!!this.surveyTitleToolbar) {
      this.surveyTitleToolbar.dispose();
      this.surveyTitleToolbar = undefined;
    }
    [this.sourceSurvey, this.targetSurvey].forEach(survey => {
      if (!survey) return;
      survey.getRendererForString = undefined;
      survey.getRendererContextForString = undefined;
      survey.onPropertyValueChangedCallback = undefined;
      survey.dispose();
    });
    this.sourceSurvey = undefined;
    this.targetSurvey = undefined;
    this.sourceEmptySpaceStrings = [];
    this.byTargetLocStr = new Map<ILocalizableString, TranslationItem>();
    this.byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();
    this.choicesCollapsedState = {};
    this.elementStateActions = {};
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
      // A target locale change does not touch the source instance's strings, but it can change
      // whether an empty source header string keeps its row height (see setupSourceEmptySpaces).
      this.sourceEmptySpaceStrings.forEach(locStr => locStr.strChanged());
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

// The model of the element strings dialog: a Translation scoped to a single element of the
// real survey - the survey itself, a page, a panel or a question. The grid rows bind to the
// real localizable strings (a column's choices are the column templateQuestion's own items),
// never to the pane copies.
export class TranslationElementStrings extends Translation {
  constructor(survey: SurveyModel, private elementValue: Base, options: ISurveyCreatorOptions = null) {
    super(survey, options, true);
  }
  protected getRootTranslationObj(): { obj: Base, name: string } {
    return { obj: this.elementValue, name: (<any>this.elementValue).name || "survey" };
  }
  // The survey/page/panel dialogs cover only the element's own strings - the nested survey
  // elements carry translate actions of their own. The question dialog keeps its whole
  // subtree (column choices, template elements): those strings cannot be reached elsewhere.
  public canShowElementGroup(obj: Base): boolean {
    if ((<any>this.elementValue).isQuestion) return true;
    const el = <any>obj;
    return !el.isPage && !el.isPanel && !el.isQuestion;
  }
  protected get isSourceColumnReadOnly(): boolean {
    return true;
  }
  protected getSurveyStringsArea(): string {
    return "translation-tab:question-popup-editor";
  }
  // Cleared when the element has no stored strings and the dialog fell back to the
  // all-strings mode (see createElementStringsModel).
  public hasUsedStrings: boolean = true;
  // The all/used strings filter of the dialog: the toolbar dropdown of the translation tab is
  // not available there, so the switcher sits on top of the strings grid, in the header survey.
  protected onSurveyStringsHeaderCreated(survey: SurveyModel): void {
    super.onSurveyStringsHeaderCreated(survey);
    this.setupMachineTranslationButton(survey);
    const filter = new QuestionButtonGroupModel("stringsFilter");
    filter.titleLocation = "hidden";
    filter.allowClear = false;
    const usedItem = new ItemValue("used", editorLocalization.getString("ed.translationShowUsedStringsOnly"));
    if (!this.hasUsedStrings) {
      // Via the expression, not setIsEnabled: the survey's condition runs reset the direct value.
      usedItem.enableIf = "false";
    }
    filter.choices = [
      usedItem,
      new ItemValue("all", editorLocalization.getString("ed.translationShowAllStrings"))
    ];
    survey.pages[0].addQuestion(filter, 0);
    filter.value = this.showAllStrings ? "all" : "used";
    survey.onValueChanged.add((_, options) => {
      if (options.name === "stringsFilter") {
        // The property's onSet resets the model, which recreates both grid surveys
        // (including this header with a fresh filter question holding the new value).
        this.showAllStrings = options.value === "all";
      }
    });
  }
  // The auto-translate button on top of the strings grid, as in the whole-survey
  // machine-translation dialog (see TranslationEditor.setupNavigationButtons). It covers
  // the used strings only, whatever the current all/used filter is, and fills the empty
  // target texts only, so it is disabled once every used string has a target text.
  private machineTranslationAction: Action;
  private setupMachineTranslationButton(survey: SurveyModel): void {
    if (!this.options.getHasMachineTranslation() || this.readOnly) return;
    const navigationBar = new SurveyElementActionContainer();
    survey.createNavigationBarCallback = () => navigationBar;
    survey.showCompleteButton = false;
    survey.showNavigationButtons = true;
    survey.navigationButtonsLocation = "top";
    navigationBar.allowResponsiveness();
    navigationBar.setActionsAppearance({ style: "brand", mode: "tertiary", size: "small" });
    this.machineTranslationAction = new Action({
      id: "svc-translation-machine",
      iconName: "icon-language",
      iconSize: "auto",
      css: "svc-action-bar-item--right",
      locTitleName: "ed.translateUsigAI",
      component: "sv-action-bar-item",
      enabled: this.getStringsToTranslate().length > 0,
      action: () => this.doMachineTranslation()
    });
    survey.addNavigationItem(this.machineTranslationAction);
  }
  public doMachineTranslation(): void {
    const items = this.getStringsToTranslate();
    if (items.length === 0) return;
    const strings = items.map(item => this.getSourceTextToTranslate(item));
    const toLocale = this.targetLocale || "";
    const callback = (translated: Array<string>): void => {
      if (!Array.isArray(translated) || this.isDisposed) return;
      // One undoable transaction over the locale-aware item actions; the grid cells are
      // refreshed from the updated strings in one go below.
      this.options.startUndoRedoTransaction("Translate to " + getActualLocaleName(toLocale));
      try {
        for (let i = 0; i < Math.min(items.length, translated.length); i++) {
          if (!!translated[i]) {
            this.setItemLocText(items[i], toLocale, translated[i]);
          }
        }
      } finally {
        this.options.stopUndoRedoTransaction();
      }
      this.updateStringsSurveyData();
    };
    this.options.doMachineTranslation(getActualLocaleName(this.sourceLocale), getActualLocaleName(toLocale), strings, callback);
  }
  // The strings the auto-translate button fills: the element's used strings with a stored
  // text (a fresh element whose rows exist merely through value/name fallbacks has nothing
  // to translate, matching the element state indicator) that have a source text and no
  // target text yet. Collected over a used-strings tree, so the set does not depend on the
  // dialog's current all/used filter.
  public getStringsToTranslate(): Array<TranslationItem> {
    const res = new Array<TranslationItem>();
    const targetLoc = this.targetLocale || "";
    if ((this.sourceLocale || "") === targetLoc) return res;
    this.createUsedStringsRoot().allLocItems.forEach(item => {
      if ((<LocalizableString>item.locString).isEmpty) return;
      if (!item.getLocText(targetLoc) && !!this.getSourceTextToTranslate(item)) {
        res.push(item);
      }
    });
    return res;
  }
  private createUsedStringsRoot(): TranslationGroup {
    const rootInfo = this.getRootTranslationObj();
    const root = new TranslationGroup(rootInfo.name, rootInfo.obj, new TranslationUsedStringsOwner(this));
    root.setAsRoot();
    root.reset();
    return root;
  }
  // A used string without a stored source text falls back to the value/name the grid shows in
  // its source cell (a question's name, a choice's value), as the whole-survey dialog does.
  private getSourceTextToTranslate(item: TranslationItem): string {
    const loc = this.sourceLocale || "";
    let res = item.getLocText(loc);
    if (!res && !loc) {
      res = item.getDefaultLocaleText(true);
    }
    return res;
  }
  // Grid edits and the auto-translate writes go through here - the button follows the
  // remaining untranslated strings.
  public performItemLocTextAction(item: TranslationItem, locale: string, newText: string): void {
    super.performItemLocTextAction(item, locale, newText);
    if (!!this.machineTranslationAction && !this.isDisposed) {
      this.machineTranslationAction.enabled = this.getStringsToTranslate().length > 0;
    }
  }
}
