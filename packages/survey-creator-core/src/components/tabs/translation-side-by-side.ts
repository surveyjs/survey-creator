import {
  Action, AdaptiveActionContainer, Base, EventBase, Helpers, ILocalizableString, ItemValue,
  LocalizableString, PageModel, PanelModel, PanelModelBase, Question,
  MatrixDynamicRowModel, QuestionCommentModel, QuestionDropdownModel, QuestionHtmlModel,
  QuestionMatrixDropdownModel, QuestionMatrixDynamicModel, Serializer, SurveyModel, property
} from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { editorLocalization } from "../../editorLocalization";
import { editableStringRendererName, isContentElement } from "../../creator-base";
import { ITranslationDropdownOwner, translationDropdownComponentName } from "./translation-dropdown";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { StringEditorConnector } from "../string-editor";
import { QuestionLinkValueModel } from "../link-value";
import { updateMatrixRemoveAction, updateMatixActionsAppearance } from "../../utils/actions";
import { getDefaultLocaleName, isDefaultLocale } from "../../survey-helper";
import { TranslationCopiesMap } from "./translation-copies-map";
import {
  TranslationBase, TranslationEditor, TranslationGroup, TranslationItem,
  createMachineTranslationAction, runItemsMachineTranslation
} from "./translation";

// A non-breaking space: rendered instead of an empty header string of the source pane to keep
// the row one text line high (see setupSourceEmptySpaces).
const emptySpaceText = "\u00A0";

// The name of both host questions - the strings matrix in the target pane and the spacer that
// keeps the source pane the same height. They live in two different surveys (the panes), so the
// name is unique where it matters, and it is not a name a real survey question can have.
const stringsHostName = "svc-translation-strings-host";

// The translation state of a target-pane element for the current target language:
// "none" - no used strings with a stored text (nothing to translate), "untranslated" - at
// least one used string has no stored target-locale text, "translated" - all of them do.
export type TranslationElementState = "none" | "untranslated" | "translated";

export class TranslationSideBySide extends TranslationBase implements ITranslationDropdownOwner {
  @property() selectedPageName: string;
  @property() sourceSurvey: SurveyModel;
  @property() targetSurvey: SurveyModel;
  // The editing surface of the side-by-side mode: "forms" - two design-mode survey copies
  // rendered side by side, "grid" - the strings grid with a source and a target column.
  // Changing it rebuilds the surface in place on the same model, so the locales chosen in
  // the property grid survive the switch.
  @property({ defaultValue: "forms" }) view: "forms" | "grid";

  // The bridge between the real survey strings and their copies in the two panes; the target
  // copy is the editable one.
  private copiesMap = new TranslationCopiesMap();
  private _updatingSettingsSurvey: boolean = false;
  // The real survey's localizable string behind the editable string the user focused last -
  // a cell of the strings grid or an inline string editor of the forms target pane. Used to
  // restore the selection (or at least the page) when the view changes.
  private selectedLocString: ILocalizableString;
  // ITranslationDropdownOwner: the shared collapse state of the flattened dropdown/tagbox
  // choice lists, keyed by the question name - the panes must expand/collapse together.
  private choicesCollapsedState: { [questionName: string]: boolean } = {};
  // The locale of the languages matrix row being removed - see the row removal events.
  private removingLocale: string = "";
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
        const locale = this.getLocaleByMatrixRow(matrix, row);
        if (locale !== undefined)this.selectLanguage(locale);
      };
    });
    // The matrix asks for the confirmation itself (confirmDelete); the row is gone by the time
    // the strings are deleted, so the locale is remembered before the removal.
    res.onMatrixRowRemoving.add((sender, options) => {
      if (options.question.name !== "languages") return;
      this.removingLocale = this.getLocaleByMatrixRow(<QuestionMatrixDynamicModel>options.question, options.row);
    });
    res.onMatrixRowRemoved.add((sender, options) => {
      if (options.question.name !== "languages") return;
      const locale = this.removingLocale;
      this.removingLocale = "";
      if (!!locale)this.deleteLanguage(locale);
    });
    // The library's remove action renders as a titled button outside the runtime themes; both
    // helpers turn it into the icon button of the creator's property grid matrices.
    res.onGetMatrixRowActions.add((sender, options) => {
      if (options.question.name !== "languages") return;
      updateMatrixRemoveAction(<QuestionMatrixDynamicModel>options.question, options.actions, <MatrixDynamicRowModel>options.row);
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
          // The target language is optional: clearing it stops the translation editing
          // (no target pane, no target column).
          allowClear: true
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
          confirmDelete: true,
          confirmDeleteText: editorLocalization.getString("ed.translationDeleteLanguage"),
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
      const source = this.sourceLocale || "";
      const target = this.targetLocale || "";
      this.updateSourceLocaleQuestion(<QuestionDropdownModel>survey.getQuestionByName("sourceLocale"), source, target);
      this.updateTargetLocaleQuestion(<QuestionDropdownModel>survey.getQuestionByName("targetLocale"), target, source);
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
  // The matrix row set - the languages the survey has translations for: every locale with at least
  // one stored string. The default language is not one of them - it is what the translations are
  // measured against, not a translation. No synthetic rows either - a freshly targeted language
  // appears only once its first string is stored (the target dropdown already shows what is being
  // translated). The pickable set is wider, see getTargetLocales.
  private getMatrixLanguages(): Array<string> {
    const res: Array<string> = [];
    if (!this.survey) return res;
    this.survey.getUsedLocales().forEach(loc => {
      if (isDefaultLocale(loc) || res.indexOf(loc) >= 0) return;
      if (!!this.localeInitialVisibleCallback && !this.localeInitialVisibleCallback(loc)) return;
      res.push(loc);
    });
    return res;
  }
  // The whole-survey used-strings tree: the progress denominator of the languages matrix and the
  // source of the element indicator states. Never scoped by the grid view's page filter and
  // independent of the view's strings filter.
  //
  // Building it instantiates a TranslationGroup per object and a TranslationItem per string of
  // the survey, so it is kept between edits - every text edit refreshes both the matrix and the
  // indicators, and rebuilding it twice per keystroke is what a large survey feels. It is dropped
  // by every full refresh of the matrix (updateLanguagesMatrix, so also by a reset) and by a
  // structural change of the survey (see onCreatorSurveyPropertyChanged). A text edit keeps it:
  // a string that has no text in any language yet is not in the tree, so its first translation
  // moves no counter until the next full refresh.
  private usedStringsRootValue: TranslationGroup;
  private usedStringsItemsValue: Array<TranslationItem>;
  private resetUsedStringsCache(): void {
    this.usedStringsRootValue = undefined;
    this.usedStringsItemsValue = undefined;
  }
  protected getUsedStringsRoot(): TranslationGroup {
    if (!this.usedStringsRootValue) {
      this.usedStringsRootValue = this.createUsedStringsRoot();
    }
    return this.usedStringsRootValue;
  }
  public getUsedStringsItems(): Array<TranslationItem> {
    if (!this.usedStringsItemsValue) {
      this.usedStringsItemsValue = this.getUsedStringsRoot().allLocItems;
    }
    return this.usedStringsItemsValue;
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
  // The full refresh: the used strings may differ from the cached tree, so it is dropped first.
  public updateLanguagesMatrix(): void {
    this.resetUsedStringsCache();
    this.updateLanguagesMatrixCore();
  }
  // Refills the rows from the current used-strings tree. The row set follows getMatrixLanguages(),
  // so a language that has just got its first string gets a row here as well. A survey without
  // translations has no rows at all - the matrix is hidden then, an empty one says nothing.
  private updateLanguagesMatrixCore(): void {
    const question = this.languagesQuestion;
    if (!question || this.isDisposed || !this.survey) return;
    const items = this.getUsedStringsItems();
    const locales = this.getMatrixLanguages();
    question.value = locales.map(loc => {
      return {
        name: loc,
        displayName: this.getLocaleName(loc),
        progress: this.getLanguageProgressText(loc, items)
      };
    });
    question.visible = locales.length > 0;
    this.updateLanguagesMatrixSelection();
  }
  private getLanguageProgressText(locale: string, items: Array<TranslationItem>): string {
    const progress = this.getTranslationProgress(locale, items);
    return progress.translated + "/" + progress.total;
  }
  // The current target's row shows as selected (the linkvalue cell's isSelected drives the css).
  private updateLanguagesMatrixSelection(): void {
    const question = this.languagesQuestion;
    if (!question) return;
    const selectedRow = this.getMatrixRowByLocale(question, this.targetLocale);
    question.visibleRows.forEach(row => {
      const cellQuestion = this.getLanguageCellQuestion(row);
      if (!!cellQuestion) cellQuestion.isSelected = row === selectedRow;
    });
  }
  // The language cell of a languages matrix row - the linkvalue the user clicks to retarget.
  private getLanguageCellQuestion(row: any): QuestionLinkValueModel {
    const cellQuestion = !!row && !!row.cells[0] ? row.cells[0].question : undefined;
    return !!cellQuestion && cellQuestion.getType() === "linkvalue" ? <QuestionLinkValueModel>cellQuestion : undefined;
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
  // The languages matrix asks for a confirmation itself (confirmDelete), so this is the plain
  // deletion - it removes the locale strings of the whole survey.
  public deleteLanguage(locale: string): void {
    if (!locale || this.isDisposed) return;
    // The deletion always covers the whole survey; the grid view's root can be scoped to a
    // single page, so it goes through a temporary unscoped model then (like the CSV export).
    if (!!this.filteredPage) {
      this.runWithoutSurveyReaction(() => {
        const translation = this.createHeadlessTranslation();
        translation.translationStringVisibilityCallback = this.translationStringVisibilityCallback;
        translation.deleteLocaleStrings(locale);
        translation.dispose();
      });
      this.reset();
    } else {
      this.deleteLocaleStrings(locale);
    }
    // The deleted language has no strings and no matrix row left - neither dropdown may keep
    // pointing at it.
    if ((this.sourceLocale || "") === locale) {
      this.sourceLocale = "";
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
      const row = this.getMatrixRowByLocale(this.languagesQuestion, locale);
      // A default-language edit moves the denominator of every row (it can add a used string), and
      // a language with no row yet needs one. Any other edit moves the progress of the edited
      // language alone - including a cleared text: the language keeps its row showing no progress
      // until the next full refresh drops it.
      if (!row || isDefaultLocale(locale)) {
        this.updateLanguagesMatrix();
      } else {
        this.updateLanguageProgress(locale);
      }
      this.updateElementTranslationStates();
    }
  }
  // Rewrites the progress text of one language, leaving the other rows untouched: the used
  // strings are counted for that language only and the text goes into its own cell.
  private updateLanguageProgress(locale: string): void {
    const row = this.getMatrixRowByLocale(this.languagesQuestion, locale);
    const progressQuestion = !!row ? row.getQuestionByName("progress") : undefined;
    if (!progressQuestion) {
      // The tree still describes the survey here - only the row could not be resolved.
      this.updateLanguagesMatrixCore();
      return;
    }
    progressQuestion.value = this.getLanguageProgressText(locale, this.getUsedStringsItems());
  }
  public reset(alwaysReset: boolean = true): void {
    super.reset(alwaysReset);
    this.updateLanguagesMatrix();
    this.updateElementTranslationStates();
  }
  // The forms view's per-element indicator: every target-pane element with a title row (the
  // survey, pages, panels with strings, questions) shows the translation state of the strings
  // its translate action covers - the element's own strings, including the ones reachable
  // only through its inline strings matrix (matrix column choices, validators, survey-level
  // strings), but not the nested elements, which show indicators of their own. Counts are keyed
  // by the element type and name, so a pane copy and its real-survey element resolve to the
  // same entry.
  private elementCounts: { [key: string]: { translated: number, total: number } } = {};
  private elementStateActions: { [key: string]: Action } = {};
  public getElementTranslationState(element: Base): TranslationElementState {
    return this.getStateFromCounts(this.getElementCounts(element));
  }
  // The number the button shows: the strings of the element that have no target text yet.
  public getElementUntranslatedCount(element: Base): number {
    const counts = this.getElementCounts(element);
    return !!counts ? counts.total - counts.translated : 0;
  }
  private getElementCounts(element: Base): { translated: number, total: number } {
    const key = this.getElementStateKey(element);
    return !!key ? this.elementCounts[key] : undefined;
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
    // The indicators live on the target pane's title actions - with no target language there is
    // no pane to carry them and no language to measure the strings against.
    if (!this.targetLocale) {
      this.elementCounts = {};
      return;
    }
    this.elementCounts = this.computeElementCounts();
    for (const key in this.elementStateActions) {
      this.applyElementStateToAction(this.elementStateActions[key], key);
    }
  }
  // Only the used strings with a stored text count: an element whose items exist merely
  // through value/name fallbacks (a freshly added question with no texts) has nothing to
  // translate. An element's state covers exactly the strings its dialog edits: its own
  // strings plus the non-element groups below it (matrix column choices, validators, ...).
  // Nested pages, panels and questions carry indicators of their own, so their counts do
  // not roll up into the parent.
  private computeElementCounts(): { [key: string]: { translated: number, total: number } } {
    const states: { [key: string]: { translated: number, total: number } } = {};
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
        states[key] = counts;
      }
      return counts;
    };
    calc(this.getUsedStringsRoot());
    return states;
  }
  private getStateFromCounts(counts: { translated: number, total: number }): TranslationElementState {
    if (!counts || counts.total === 0) return "none";
    if (counts.translated < counts.total) return "untranslated";
    return "translated";
  }
  // The button carries the element's state itself: the number of untranslated strings when
  // there is one (and nothing but the chevron otherwise), a css modifier per state and the
  // chevron direction of its inline strings matrix. It renders without a visible title in two
  // of the three states, so the tooltip is also its accessible name - it follows the state.
  private applyElementStateToAction(action: Action, key: string): void {
    const counts = this.elementCounts[key];
    const state = this.getStateFromCounts(counts);
    const untranslated = !!counts ? counts.total - counts.translated : 0;
    const expanded = !!key && key === this.expandedElementKey;
    action.title = untranslated > 0 ? untranslated.toString() : "";
    action.showTitle = untranslated > 0;
    action.tooltip = untranslated > 0
      ? editorLocalization.getString("ed.translationStateUntranslated").replace("{0}", untranslated.toString())
      : editorLocalization.getString(state === "translated" ? "ed.translationStateAllTranslated" : "ed.translationStateNothingToTranslate");
    action.css = "svc-translation-state svc-translation-state--" + state +
      (expanded ? " svc-translation-state--expanded" : "");
  }
  private updateSourceLocaleQuestion(question: QuestionDropdownModel, selected: string, excluded: string): void {
    if (!question) return;
    question.choices = this.createLocaleChoices(this.getSourceLocales(), selected, excluded);
    question.value = this.toLocaleSettingValue(selected);
  }
  private updateTargetLocaleQuestion(question: QuestionDropdownModel, selected: string, excluded: string): void {
    if (!question) return;
    question.choices = this.createLocaleChoices(this.getTargetLocales(), selected, excluded);
    // No target language selected: the dropdown holds no value and renders its placeholder.
    if (!selected) {
      question.clearValue();
    } else {
      question.value = selected;
    }
  }
  // Each dropdown's list hides the language selected in the other one, except its own selection.
  // An empty locale excludes nothing: the default language is a source-only entry, and an empty
  // target is not a language at all.
  private createLocaleChoices(locales: Array<string>, selected: string, excluded: string): Array<ItemValue> {
    return locales.filter(loc => !excluded || loc !== excluded || loc === selected)
      .map(loc => new ItemValue(this.toLocaleSettingValue(loc), this.getLocaleName(loc)));
  }
  // The choice list of the source dropdown - the languages that have something to translate from:
  // the default language first, then the ones the survey stores strings for (the matrix rows).
  // The currently selected source is kept even when it loses its last string (an undo, a CSV
  // import), so the dropdown never holds a value without a matching choice.
  private getSourceLocales(): Array<string> {
    const res: Array<string> = [""];
    const add = (loc: string): void => {
      if (!isDefaultLocale(loc) && res.indexOf(loc) < 0) res.push(loc);
    };
    this.getMatrixLanguages().forEach(loc => add(loc));
    add(this.sourceLocale);
    return res;
  }
  // The choice list of the target dropdown - every language that can be translated into: the
  // supported locales plus the ones the survey already uses, so a translation can be started for
  // a language with no strings yet (unlike the matrix rows, see getMatrixLanguages). The default
  // language is never a target: it is the reference the translations are measured against.
  private getTargetLocales(): Array<string> {
    const res: Array<string> = [];
    const add = (loc: string): void => {
      if (!isDefaultLocale(loc) && res.indexOf(loc) < 0) res.push(loc);
    };
    this.getSurveyLocales()[0].forEach((item: ItemValue) => add(item.value));
    if (!!this.survey) {
      this.survey.getUsedLocales().forEach(loc => add(loc));
    }
    return res;
  }
  // The default locale is stored as "" on the model; the settings survey dropdowns need a
  // non-empty value for it (an empty dropdown value would render as "no selection").
  private toLocaleSettingValue(locale: string): string {
    return locale || getDefaultLocaleName();
  }
  private getLocaleFromSettingValue(value: any): string {
    return !value || value === getDefaultLocaleName() ? "" : <string>value;
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "view") {
      this.applyView();
      this.updateSettingsSurveyValues();
    }
    if (name === "sourceLocale" || name === "targetLocale") {
      // The target pane exists only while a language is being translated, so a change that flips
      // the presence of a target creates or drops it - along with the copies mapping, which knows
      // which strings are editable. A switch between two languages only re-locales the copies.
      // The instances may not be built yet (the plugin sets the locales before it builds them).
      if (name === "targetLocale" && !oldValue !== !newValue && this.isSideBySideForms && !!this.sourceSurvey) {
        this.rebuildInstances();
      } else {
        this.updateInstanceLocales();
      }
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
    const copyLocStr = this.copiesMap.getEditableCopy(this.selectedLocString);
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
        // The target locale column is the last one - and the only one when no target is selected.
        cells[cells.length - 1].question.focus();
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
      // a page filter that no longer belongs to it (survey replaced, page removed).
      if (!!this.filteredPage && this.survey.pages.indexOf(this.filteredPage) < 0) {
        this.filteredPage = null; // the property's onSet rebuilds the grid
        return;
      }
      this.reset();
      return;
    }
    const wasSyncing = this._syncing;
    this._syncing = true;
    // The panes are recreated below, so the open block goes with them - it is restored on the
    // fresh copies afterwards. A rebuild is not something the user asks for (it follows a
    // structural change, a locale switch, a self-heal), and it must not take their block away.
    const expandedKey = this.expandedElementKey;
    try {
      this.disposeInstances();
      if (!this.root) {
        this.reset();
      }
      // The indicator actions of the fresh copies read the per-element states at creation
      // time - compute them before the title actions are set up.
      this.updateElementTranslationStates();
      const json = this.survey.toJSON();
      this.sourceSurvey = this.createInstance(json, "translation_source", false);
      this.setupSourceSurvey(this.sourceSurvey);
      // With no target language selected there is nothing to edit: the target pane is not
      // rendered, so its copy is not created either and the source pane is the whole surface.
      if (!!this.targetLocale) {
        this.targetSurvey = this.createInstance(json, "translation_target", true);
        this.setupTargetSurvey(this.targetSurvey);
        this.setupSourceEmptySpaces();
      }
      this.buildMappings();
      this.updateInstanceLocales();
      this.updateInstancePages();
      // The element may be gone with the change that caused the rebuild - then there is
      // nothing to restore, and showElementStrings resolves that to "no block".
      if (!!expandedKey) {
        this.showElementStrings(this.getRealObjByStateKey(expandedKey));
      }
    } finally {
      this._syncing = wasSyncing;
    }
  }
  // The real-survey element an element state key stands for. Resolved by name, so the entry
  // survives a change that replaced the object (an undo, a JSON reload).
  private getRealObjByStateKey(key: string): Base {
    if (!key || !this.survey) return undefined;
    if (key === "survey") return this.survey;
    const index = key.indexOf(":");
    const type = key.substring(0, index);
    const name = key.substring(index + 1);
    if (type === "page") return this.survey.getPageByName(name);
    if (type === "panel") return this.survey.getPanelByName(name);
    return this.survey.getQuestionByName(name);
  }
  // Called (through the plugin's onDesignerSurveyPropertyChanged hook) when the real survey changes:
  // the element strings dialogs write to it, and external code can too.
  public onCreatorSurveyPropertyChanged(obj: Base, propName: string): void {
    if (this._syncing || this.isDisposed) return;
    // The survey locale is read once, on activation, to preselect the target language - the tab
    // does not follow it afterwards, and the locale itself changes no string and no counter.
    if (obj === this.survey && propName === "locale") return;
    // The element strings dialogs write into the real survey string by string, so this runs per
    // edit there as well: a text change keeps the used-strings tree, a structural one rebuilds it.
    // Dropped here and not through updateLanguagesMatrix below, because the pane rebuild of a
    // structural change computes the indicator states of the fresh copies on its way (see
    // rebuildInstances).
    if (!this.getLocStrByName(obj, propName)) {
      this.resetUsedStringsCache();
    }
    this.onCreatorSurveyPropertyChangedCore(obj, propName);
    // Any real-survey change can move the counters, change the denominator (structural
    // changes) or add/remove a locale row (a change restoring/removing the last string).
    this.updateLanguagesMatrixCore();
    this.updateElementTranslationStates();
    // The open block edits the same strings as the panes - a change made elsewhere (an inline
    // editor, undo/redo, the machine translation) shows up in its cells. A structural change
    // has closed it above (the pane rebuild), so there is nothing to refresh then.
    if (!!this.elementStringsModel) {
      this.elementStringsModel.updateMatrixData();
    }
  }
  private onCreatorSurveyPropertyChangedCore(obj: Base, propName: string): void {
    if (this.isSideBySideGrid) {
      // The base implementation refreshes the grid cells on a localizable string change and
      // rebuilds the grid on a structural one.
      super.onCreatorSurveyPropertyChanged(obj, propName);
      return;
    }
    // The source pane is mapped as well, and it is the only pane when no target is selected.
    if (!this.sourceSurvey) return;
    const realLocStr = this.getLocStrByName(obj, propName);
    if (!this.copiesMap.hasReal(realLocStr)) {
      // A string of the open block that the panes do not render (a matrix column choice, a
      // validator text): it is a text change like any other, not the structural change the
      // rebuild below is for. Rebuilding here would drop the block the user is typing in.
      if (!!realLocStr && !!this.elementStringsModel && this.elementStringsModel.hasLocString(realLocStr)) return;
      // Not a mapped localizable string - a structural change (element added/removed, etc.).
      this.rebuildInstances();
      return;
    }
    this._syncing = true;
    try {
      this.copiesMap.mirrorIntoCopies(realLocStr);
    } finally {
      this._syncing = false;
    }
  }
  // The target copy's onPropertyValueChangedCallback: forwards inline edits to the real survey.
  public forwardTargetChange(name: string, sender: Base): void {
    if (this._syncing || this.isDisposed) return;
    // The strings host is not a mapped copy: its own localizable html property would read as
    // a drifted mapping below and rebuild the panes, closing the block that was just opened.
    if (this.isStringsHost(sender)) return;
    const copyLocStr = this.getLocStrByName(sender, name);
    if (!copyLocStr) return;
    const item = this.copiesMap.getItemByEditableCopy(copyLocStr);
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
        this.copiesMap.mirrorIntoCopies(item.locString);
      }
    } finally {
      this._syncing = false;
    }
  }
  // The grid can be scoped to a single page; CSV export must still cover the whole survey,
  // exactly like the forms view does.
  public exportToCSV(): string {
    if (!this.isSideBySideGrid) return super.exportToCSV();
    const translation = this.createHeadlessTranslation();
    translation.showAllStrings = true;
    translation.translationStringVisibilityCallback = this.translationStringVisibilityCallback;
    translation.localeInitialVisibleCallback = this.localeInitialVisibleCallback;
    try {
      return translation.exportToCSV();
    } finally {
      translation.dispose();
    }
  }
  // The "Translate remaining strings" dialog of the side-by-side mode: the same machine
  // translation editor the all-languages mode opens from its languages matrix.
  public createTranslationEditor(locale: string): TranslationEditor {
    const res = new TranslationEditor(this.survey, locale, this.options, this.translationStringVisibilityCallback, this);
    res.onApply = () => {
      this.reset();
    };
    return res;
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
    this.resetUsedStringsCache();
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
  private createInstance(json: any, reason: string, isTarget: boolean): SurveyModel {
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
      // The rendered height of the strings matrix is known to the DOM only - the source pane's
      // spacer follows it (see setElementStringsHeight).
      if (isTarget) {
        survey.onAfterRenderQuestion.add((_, opt) => {
          if (this.isStringsHost(opt.question))this.observeStringsHost(opt.htmlElement);
        });
      }
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
    // Nothing to align to when the target pane is not rendered (no target language).
    if (!this.sourceSurvey || !this.targetSurvey) return;
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
      // The strings host is not survey content: it renders the block (or its spacer) alone,
      // without the question paddings that would push the two panes out of alignment.
      if (this.isStringsHost(options.question)) {
        options.cssClasses.mainRoot += " st-element-strings-host";
        return;
      }
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
      // The strings matrix is not survey content: its caption and row labels are plain texts,
      // and its cells are the editors - none of them is an inplace-editable survey string.
      survey.getRendererForString = (element: Base, name: string, item?: ItemValue): string => {
        if (this.isStringsHost(element)) return undefined;
        return creator.isStringInplacelyEditable(element, name, item) ? editableStringRendererName : undefined;
      };
      survey.getRendererContextForString = (element: Base, locStr: LocalizableString, item?: ItemValue): any => {
        if (!this.isStringsHost(element) && creator.isStringInplacelyEditable(element, locStr.name, item)) {
          return { creator: creator, element: element, locStr: locStr };
        }
        return <any>locStr;
      };
      // Remembers the string behind the focused inline editor for the selection sync with the grid view.
      creator.onStringEditorFocusedCallback = (locStr: LocalizableString): void => {
        if (this.isDisposed) return;
        const item = this.copiesMap.getItemByEditableCopy(locStr);
        if (!!item)this.selectedLocString = item.locString;
      };
    }
    survey.onPropertyValueChangedCallback = (name: string, oldValue: any, newValue: any, sender: Base): void => {
      this.forwardTargetChange(name, sender);
    };
    survey.onGetQuestionTitleActions.add((_, options) => {
      // The strings matrix is a pane question of its own: its title is the block's caption and
      // its title actions are the caption's buttons (auto-translate, all/used strings, close).
      // Its cells carry the same mark but no caption of their own.
      if (this.isStringsHost(options.question)) {
        if (!!this.elementStringsModel && !options.question.parentQuestion) {
          options.actions.push(...this.elementStringsModel.captionActions);
        }
        return;
      }
      if (isContentElement(options.question)) return;
      options.actions.push(this.createTranslateAction("svc-translate-question",
        () => this.toggleQuestionStrings(options.question), options.question));
    });
    survey.onGetPageTitleActions.add((_, options) => {
      options.actions.push(this.createTranslateAction("svc-translate-page",
        () => this.togglePageStrings(options.page), options.page));
    });
    survey.onGetPanelTitleActions.add((_, options) => {
      if (isContentElement(options.panel)) return;
      if (!this.panelHasTranslatableStrings(options.panel)) return;
      options.actions.push(this.createTranslateAction("svc-translate-panel",
        () => this.togglePanelStrings(options.panel), options.panel));
    });
    this.addSurveyTitleTranslateAction(survey);
  }
  // The translate action doubles as the element's translation state indicator and as the
  // expander of its inline strings matrix: the chevron shows whether the matrix is open, the
  // title shows how many strings are left to translate (see applyElementStateToAction).
  private createTranslateAction(id: string, doAction: () => void, paneElement: Base): Action {
    const action = new Action({
      id: id,
      iconName: "icon-chevron_16x16",
      iconSize: "auto",
      showTitle: false,
      appearance: { style: "neutral", mode: "secondary", size: "small" },
      action: doAction
    });
    const key = this.getElementStateKey(paneElement);
    if (!!key) {
      this.elementStateActions[key] = action;
      this.applyElementStateToAction(action, key);
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
      () => this.toggleSurveyStrings(), survey)]);
    toolbar.flushUpdates();
    this.surveyTitleToolbar = toolbar;
    Object.defineProperty(survey, "hasTitleActions", { get: (): boolean => true, configurable: true });
    survey.getTitleToolbar = (): AdaptiveActionContainer => toolbar;
  }
  // The translate title action of a target-pane element opens a source/target strings grid
  // built over the real survey's element, so the edits go through the regular translation item
  // path (and mirror into the panes). It covers the strings that cannot be edited inline - the
  // choices of matrix dropdown columns (whose cells render over copies of the column data),
  // survey-level strings, page/panel strings of other locales etc.
  public createElementStringsModel(realObj: Base): TranslationElementStrings {
    const model = new TranslationElementStrings(this.survey, realObj, this.options);
    model.translationStringVisibilityCallback = this.translationStringVisibilityCallback;
    model.readOnly = this.readOnly;
    model.useSourceTargetColumns = true;
    model.sourceLocale = this.sourceLocale;
    model.targetLocale = this.targetLocale;
    // The block opens in the mode the user chose the last time (the caption's filter action);
    // "used strings only" - the strings that have something to translate - is the default.
    model.showAllElementStrings = this.showAllElementStrings;
    model.reset();
    // An element without stored strings (e.g. a page with an empty title) would show an empty
    // matrix - fall back to all strings so the block is never a dead end. The fallback is not
    // the user's choice: it is not stored, and the filter action cannot switch back, since
    // choosing the used strings would bring the empty matrix back.
    if (model.isEmpty) {
      model.forceShowAllElementStrings();
    }
    model.onShowAllStringsChanged = (value: boolean): void => {
      this.showAllElementStrings = value;
      if (!!this.onShowAllElementStringsChanged)this.onShowAllElementStringsChanged(value);
    };
    // Building and refilling the matrix is the block's business alone - the panes must not react
    // to it at all. Everything inside the matrix (its rows, its cells) reports to the target
    // pane's property callback, where a single unrecognized string would rebuild both panes.
    model.runWithoutPaneReaction = (fn: () => void): void => {
      const wasSyncing = this._syncing;
      this._syncing = true;
      try {
        fn();
      } finally {
        this._syncing = wasSyncing;
      }
    };
    return model;
  }
  // The all/used strings mode of the element blocks: chosen by the filter action in a block's
  // caption and kept for the next element. A plain field, not a survey property - nothing
  // renders it, it only seeds the next matrix. The plugin follows the callback to carry it
  // over a tab switch, which the tab model itself does not survive.
  public showAllElementStrings: boolean = false;
  public onShowAllElementStringsChanged: (value: boolean) => void;
  public toggleQuestionStrings(paneQuestion: Question): void {
    this.toggleElementStrings(!!this.survey ? this.survey.getQuestionByName(paneQuestion.name) : undefined);
  }
  public togglePageStrings(panePage: PageModel): void {
    this.toggleElementStrings(!!this.survey ? this.survey.getPageByName(panePage.name) : undefined);
  }
  public togglePanelStrings(panePanel: PanelModel): void {
    this.toggleElementStrings(!!this.survey ? this.survey.getPanelByName(panePanel.name) : undefined);
  }
  public toggleSurveyStrings(): void {
    this.toggleElementStrings(this.survey);
  }
  // The strings matrix of the element whose button is expanded, or undefined while no element
  // is expanded. The panes' host questions render it (see addStringsHost).
  @property() elementStringsModel: TranslationElementStrings;
  // The rendered height of the open strings block, reported by its UI component - the source
  // pane's spacer is drawn that high to keep the two panes row-aligned (see setElementStringsHeight).
  @property({ defaultValue: 0 }) elementStringsHeight: number;
  private expandedElementKey: string;
  private stringsHosts: Array<Question> = [];
  public isElementStringsExpanded(element: Base): boolean {
    const key = this.getElementStateKey(element);
    return !!key && key === this.expandedElementKey;
  }
  public toggleElementStrings(realObj: Base): void {
    if (!realObj || this.isDisposed) return;
    if (this.isElementStringsExpanded(realObj)) {
      this.hideElementStrings();
    } else {
      this.showElementStrings(realObj);
    }
  }
  // Only one element's strings are open at a time: the block of the previous element is
  // removed from both panes before this one is added.
  private _showingElementStrings: boolean = false;
  public showElementStrings(realObj: Base): void {
    // Building the block reads the real survey; should that ever report a change of its own,
    // the pane rebuild it triggers would restore the block and land back here.
    if (this._showingElementStrings) return;
    this._showingElementStrings = true;
    try {
      this.closeElementStrings();
      const key = this.getElementStateKey(realObj);
      if (!key || this.isDisposed || this.isSideBySideGrid || !this.targetSurvey) return;
      const model = this.createElementStringsModel(realObj);
      model.onClose = (): void => this.hideElementStrings();
      this.elementStringsModel = model;
      this.expandedElementKey = key;
      this.addStringsHost(this.targetSurvey, realObj, true);
      this.addStringsHost(this.sourceSurvey, realObj, false);
      this.updateElementTranslationStates();
    } finally {
      this._showingElementStrings = false;
    }
  }
  public hideElementStrings(): void {
    this.closeElementStrings();
    // The user has usually just translated something - the freed button shows the new count.
    this.updateElementTranslationStates();
  }
  // The removal itself: also the way a pane rebuild drops the block, where recomputing the
  // states is the caller's business (the fresh actions read them at creation time).
  private closeElementStrings(): void {
    const model = this.elementStringsModel;
    this.observeStringsHost(undefined);
    this.stringsHosts.forEach(host => {
      const parent = <PanelModelBase>host.parent;
      if (!!parent) parent.removeElement(host);
      host.dispose();
    });
    this.stringsHosts = [];
    this.sourceStringsSpacer = undefined;
    this.expandedElementKey = undefined;
    this.elementStringsModel = undefined;
    this.elementStringsHeight = 0;
    if (!!model) model.dispose();
  }
  // The height of the rendered strings matrix; the source pane's spacer follows it. Repeated
  // identical values are dropped - the reporter is a resize observer, and the spacer's own
  // re-render must not feed it back.
  public setElementStringsHeight(height: number): void {
    const value = Math.round(height || 0);
    if (this.isDisposed || this.elementStringsHeight === value) return;
    this.elementStringsHeight = value;
    if (!!this.sourceStringsSpacer) {
      this.sourceStringsSpacer.html = "<div style=\"height:" + value + "px\"></div>";
    }
  }
  private sourceStringsSpacer: QuestionHtmlModel;
  private stringsHostObserver: any;
  private observeStringsHost(element?: HTMLElement): void {
    if (!!this.stringsHostObserver) {
      this.stringsHostObserver.disconnect();
      this.stringsHostObserver = undefined;
    }
    if (!element) return;
    this.setElementStringsHeight(element.offsetHeight);
    // No ResizeObserver (jsdom, older browsers): the spacer keeps the height measured once.
    if (typeof ResizeObserver === "undefined") return;
    this.stringsHostObserver = new ResizeObserver(() => this.setElementStringsHeight(element.offsetHeight));
    this.stringsHostObserver.observe(element);
  }
  // Whether the object belongs to a strings block: the host questions themselves and everything
  // inside the matrix - its row items, its rendered rows and its cell questions. They all report
  // their property changes to the pane survey (see Base.doPropertyValueChangedCallback), where
  // an unknown string reads as a drifted mapping and rebuilds the panes - the block's own
  // content must never be taken for that.
  public isStringsHost(element: Base): boolean {
    let obj: any = element;
    // The owner chains are short; the counter is a guard against a cycle, not a depth limit.
    for (let i = 0; !!obj && i < 10; i++) {
      if (!!obj.isTranslationStringsHost) return true;
      obj = obj.parentQuestion || obj.locOwner || obj.owner || obj.data;
    }
    return false;
  }
  // The host questions are added to the pane copies after the mappings are built and removed
  // before they are rebuilt, so they never enter the copy trees (see buildMappings). The target
  // pane gets the element's strings matrix - the same source/target grid the grid view renders,
  // as a plain matrix question with the caption as its title. The source pane gets an empty
  // html question as high as the matrix, so the two panes keep the same rows.
  private addStringsHost(survey: SurveyModel, realObj: Base, isTarget: boolean): void {
    const position = this.getStringsHostPosition(survey, realObj);
    if (!position || !position.parent) return;
    let host: Question;
    if (isTarget) {
      host = this.elementStringsModel.createStringsMatrix(stringsHostName);
      this.elementStringsModel.setupStringsMatrix(survey);
    } else {
      const spacer = new QuestionHtmlModel(stringsHostName);
      spacer.titleLocation = "hidden";
      this.sourceStringsSpacer = spacer;
      host = spacer;
    }
    host.startWithNewLine = true;
    (<any>host).isTranslationStringsHost = true;
    position.parent.addElement(host, position.index);
    this.stringsHosts.push(host);
  }
  // Where the block goes, resolved against the real element and applied to the pane copy:
  // below the clicked question (below its whole row when the question shares one), at the top
  // of a clicked page or panel, and at the top of the first page for the survey itself - the
  // panes render the survey header above the first page only (showSurveyHeaderOnFirstPageOnly).
  private getStringsHostPosition(survey: SurveyModel, realObj: any): { parent: PanelModelBase, index: number } {
    if (!survey) return undefined;
    if (realObj === <any>this.survey) {
      return { parent: survey.pages[0], index: 0 };
    }
    if (realObj.isPage) {
      return { parent: survey.getPageByName(realObj.name), index: 0 };
    }
    if (realObj.isPanel) {
      return { parent: <PanelModelBase>survey.getPanelByName(realObj.name), index: 0 };
    }
    const question = survey.getQuestionByName(realObj.name);
    const parent = !!question ? <PanelModelBase>question.parent : undefined;
    if (!parent) return undefined;
    const elements = parent.elements;
    let index = elements.indexOf(question) + 1;
    // The elements that follow on the same row (startWithNewLine = false) belong to the
    // question's row - the block goes below the row, not into it.
    while(index < elements.length && !elements[index].startWithNewLine) {
      index++;
    }
    return { parent: parent, index: index };
  }
  // The creator instance when the model is created by the translation plugin. The options object
  // is checked structurally so the model stays constructible with EmptySurveyCreatorOptions in tests.
  private get creatorModel(): any {
    const options = <any>this.options;
    return !!options && typeof options.isStringInplacelyEditable === "function" ? options : undefined;
  }
  private disposeInstances(): void {
    // The block's host questions live in the panes that are about to go, and a pane copy
    // holding one must never be mapped again - the strings block does not survive a rebuild.
    this.closeElementStrings();
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
    this.copiesMap.clear();
    this.choicesCollapsedState = {};
    this.elementStateActions = {};
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
  // Without a target pane no copy is editable - the mapping is built with the source copy alone,
  // so the real survey's changes still mirror into it.
  private buildMappings(): void {
    const editableRoot = !!this.targetSurvey ? this.createCopyRoot(this.targetSurvey) : null;
    this.copiesMap.build(this.root, editableRoot, this.createCopyRoot(this.sourceSurvey));
  }
  private createCopyRoot(survey: SurveyModel): TranslationGroup {
    const root = new TranslationGroup("survey", survey, this);
    root.setAsRoot();
    root.reset();
    return root;
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

// The model of the inline element strings block: a Translation scoped to a single element of
// the real survey - the survey itself, a page, a panel or a question. The grid rows bind to the
// real localizable strings (a column's choices are the column templateQuestion's own items),
// never to the pane copies.
export class TranslationElementStrings extends TranslationBase {
  constructor(survey: SurveyModel, private elementValue: Base, options: ISurveyCreatorOptions = null) {
    super(survey, options, true);
  }
  public get element(): Base {
    return this.elementValue;
  }
  // Set by the owner - the close action of the caption row and the element's own button do
  // the same thing.
  public onClose: () => void;
  // Set by the owner - the all/used strings choice is kept for the next element.
  public onShowAllStringsChanged: (value: boolean) => void;
  // Set by the owner - runs the matrix updates with the panes' reaction to their own content
  // suppressed (see createElementStringsModel).
  public runWithoutPaneReaction: (fn: () => void) => void;
  private updateMatrix(fn: () => void): void {
    if (!this.runWithoutPaneReaction) {
      fn();
    } else {
      this.runWithoutPaneReaction(fn);
    }
  }
  // The caption row's actions - the title actions of the strings matrix: auto-translate (when
  // machine translation is available), the all/used strings filter and the closing button,
  // which the css pins to the right edge of the row.
  private captionActionsValue: Array<Action>;
  private stringsFilterAction: Action;
  public get captionActions(): Array<Action> {
    if (!this.captionActionsValue) {
      this.captionActionsValue = [];
      if (this.options.getHasMachineTranslation() && !this.readOnly) {
        this.machineTranslationAction = createMachineTranslationAction(() => this.doMachineTranslation());
        this.machineTranslationAction.enabled = this.getStringsToTranslate().length > 0;
        this.captionActionsValue.push(this.machineTranslationAction);
      }
      this.stringsFilterAction = new Action({
        id: "svc-translation-strings-filter",
        appearance: { style: "brand", mode: "tertiary", size: "small" },
        // An element with no stored strings shows all of them and cannot switch back - the
        // used-strings list is empty there (see createElementStringsModel).
        enabled: this.hasUsedStrings,
        // The setter switches the matrix over and hands the choice to the owner, which opens
        // the next element's matrix with it.
        action: () => {
          this.showAllElementStrings = !this.showAllElementStrings;
        }
      });
      this.updateStringsFilterAction();
      this.captionActionsValue.push(this.stringsFilterAction);
      this.captionActionsValue.push(new Action({
        id: "svc-translation-strings-close",
        iconName: "icon-clear_16x16",
        iconSize: "auto",
        showTitle: false,
        css: "st-element-strings__close",
        appearance: { style: "neutral", mode: "secondary", size: "small" },
        locTooltipName: "ed.translationElementStringsClose",
        action: () => {
          if (!!this.onClose)this.onClose();
        }
      }));
    }
    return this.captionActionsValue;
  }
  // The filter action shows the mode it switches to, like the toolbar dropdown items it replaces.
  private updateStringsFilterAction(): void {
    if (!this.stringsFilterAction) return;
    this.stringsFilterAction.title = editorLocalization.getString(
      this.showAllStrings ? "ed.translationShowUsedStringsOnly" : "ed.translationShowAllStrings");
  }
  // The block renders one matrix instead of the grid view's survey of matrices: an element has
  // few strings, and a single question fits into the pane as any other question does. Rows are
  // the element's translation items, columns the source and the target locale.
  public createStringsMatrix(name: string): QuestionMatrixDropdownModel {
    const matrix = <QuestionMatrixDropdownModel>Serializer.createClass("matrixdropdown");
    matrix.name = name;
    matrix.cellType = "comment";
    // The block has no caption text: it is rendered at the element it belongs to, and its two
    // columns are the source and the target pane the user is already looking at. The title row
    // itself stays - it is what carries the caption's actions - but it renders empty, without
    // the question name a title-less question would fall back to.
    matrix.titleLocation = "top";
    matrix.locTitle.onGetTextCallback = (): string => "";
    matrix.showHeader = false;
    this.addLocaleColumns(matrix);
    this.stringsMatrix = matrix;
    this.fillStringsMatrix();
    return matrix;
  }
  private stringsMatrix: QuestionMatrixDropdownModel;
  // Rows are rebuilt in place on a filter switch: the matrix is a pane question, so replacing
  // it would take the block's title actions and its rendered position with it.
  private fillStringsMatrix(): void {
    const matrix = this.stringsMatrix;
    if (!matrix || this.isDisposed) return;
    const rows: Array<ItemValue> = [];
    // The items of the whole scoped tree, the nested groups (matrix column choices, validators)
    // included: their names repeat across groups, so the row value is a position and the group
    // path goes into the row text instead.
    const addGroup = (group: TranslationGroup, path: string): void => {
      group.locItems.forEach(item => {
        const row = new ItemValue("row" + rows.length, (!!path ? path + ": " : "") + item.text);
        row["translationData"] = item;
        rows.push(row);
      });
      group.groups.forEach(child => addGroup(child, (!!path ? path + ": " : "") + child.text));
    };
    if (!!this.root) addGroup(this.root, "");
    // Replaced in one assignment, never pushed row by row: a single-row push takes the matrix's
    // incremental update path (tryUpdateRowsIncrementally), so N pushes are N row updates of the
    // rendered table; the assignment is one change, and the table is rebuilt once. It rebuilds
    // the ItemValues from their json and drops everything else, so the translation items are
    // re-attached by row value.
    const items: { [key: string]: TranslationItem } = {};
    rows.forEach(row => { items[row.value] = <TranslationItem>row["translationData"]; });
    this.updateMatrix(() => {
      matrix.rows = rows;
      matrix.rows.forEach((row: ItemValue) => {
        row["translationData"] = items[row.value];
        // The rows report their own strings to the pane survey - marked, so the pane knows
        // they are the block's content and not a survey string of its own.
        (<any>row).isTranslationStringsHost = true;
      });
    });
    this.updateStringsMatrixData();
  }
  private updateStringsMatrixData(): void {
    const matrix = this.stringsMatrix;
    if (!matrix || this.isDisposed) return;
    const data = {};
    matrix.rows.forEach((row: ItemValue) => {
      const item = <TranslationItem>row["translationData"];
      const value = !!item ? item.toJSON() : undefined;
      if (!Helpers.isValueEmpty(value)) {
        data[row.value] = value;
      }
    });
    this.updateMatrix(() => { matrix.value = data; });
  }
  private getMatrixItem(row: any): TranslationItem {
    const itemValue = !!this.stringsMatrix && !!row ? ItemValue.getItemByValue(this.stringsMatrix.rows, row.name) : undefined;
    return !!itemValue ? itemValue["translationData"] : undefined;
  }
  // The pane the matrix is rendered in drives the cells; the handlers are removed with the
  // block, so a pane that outlives it keeps none of them.
  private paneSurvey: SurveyModel;
  public setupStringsMatrix(survey: SurveyModel): void {
    this.paneSurvey = survey;
    survey.onMatrixCellCreated.add(this.onMatrixCellCreated);
    survey.onMatrixCellValueChanging.add(this.onMatrixCellValueChanging);
    survey.onMatrixCellValueChanged.add(this.onMatrixCellValueChanged);
  }
  private onMatrixCellCreated = (_: SurveyModel, options: any): void => {
    if (options.question !== this.stringsMatrix) return;
    const cellQuestion = options.cell.question;
    // The cells report their strings to the pane survey like any other question there - marked,
    // so the pane knows they are the block's content (see isStringsHost).
    cellQuestion.isTranslationStringsHost = true;
    // The pane is a design-mode survey, where every input renders read-only (isInputReadOnly)
    // and disabled (isDisabledAttr, which the text area passes to the DOM element) - the
    // translation cells are the one place in it where the user types into an input.
    cellQuestion.forceIsInputReadOnly = false;
    Object.defineProperty(cellQuestion, "isDisabledAttr", { get: (): boolean => false, configurable: true });
    if (!(cellQuestion instanceof QuestionCommentModel)) return;
    const item = this.getMatrixItem(options.row);
    cellQuestion.autoGrow = true;
    cellQuestion.allowResize = false;
    cellQuestion.placeholder = !!item ? item.getPlaceholder(options.columnName) : "";
    let isMultiLine = false;
    if (!!item) {
      cellQuestion.maxLength = item.maxLength;
      const loc = item.locString;
      isMultiLine = loc.getIsMultiple();
      cellQuestion.acceptCarriageReturn = isMultiLine || (<LocalizableString>loc).allowLineBreaks;
    }
    if (!isMultiLine) {
      cellQuestion.rows = 1;
    }
  };
  private onMatrixCellValueChanging = (_: SurveyModel, options: any): void => {
    if (options.question !== this.stringsMatrix) return;
    const item = this.getMatrixItem(options.row);
    if (!!item) {
      options.value = this.getProcessedTranslationItemText(options.columnName, item.locString, options.value, item.context);
    }
  };
  private onMatrixCellValueChanged = (_: SurveyModel, options: any): void => {
    if (options.question !== this.stringsMatrix) return;
    const item = this.getMatrixItem(options.row);
    if (!!item) {
      this.setItemLocText(item, options.columnName, options.value);
    }
  };
  private disposeStringsMatrix(): void {
    if (!!this.paneSurvey) {
      this.paneSurvey.onMatrixCellCreated.remove(this.onMatrixCellCreated);
      this.paneSurvey.onMatrixCellValueChanging.remove(this.onMatrixCellValueChanging);
      this.paneSurvey.onMatrixCellValueChanged.remove(this.onMatrixCellValueChanged);
      this.paneSurvey = undefined;
    }
    this.stringsMatrix = undefined;
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
  // The block renders its own matrix in the target pane - the strings grid surveys of the base
  // class (and their header survey) are never built for it.
  protected get hasStringsSurveyUI(): boolean {
    return false;
  }
  // Cleared when the element has no stored strings and the block fell back to the
  // all-strings mode (see createElementStringsModel).
  public hasUsedStrings: boolean = true;
  // The all/used strings filter of the element blocks - deliberately not the base
  // showAllStrings, which is the strings grid's own reactive filter (the tab toolbar drives it,
  // and its onSet resets the model behind the caller's back). This one belongs to the element
  // matrices alone: it is a plain field, it applies the change itself in one step, and its
  // value is handed to the owner to open the next element's matrix with.
  private showAllElementStringsValue: boolean = false;
  public get showAllElementStrings(): boolean {
    return this.showAllElementStringsValue;
  }
  public set showAllElementStrings(val: boolean) {
    if (this.showAllElementStringsValue === val) return;
    // The owner is told first: it stores the choice, so that a pane rebuild - should anything
    // still cause one - restores the block in the mode the user has just chosen, not the one
    // before it.
    if (!!this.onShowAllStringsChanged)this.onShowAllStringsChanged(val);
    this.applyShowAllElementStrings(val);
  }
  // The empty-element fallback (see createElementStringsModel): the same switch without the
  // storing - it is not a choice the user made.
  public forceShowAllElementStrings(): void {
    this.hasUsedStrings = false;
    this.applyShowAllElementStrings(true);
  }
  private applyShowAllElementStrings(val: boolean): void {
    this.showAllElementStringsValue = val;
    // The tree filter is read off the base property (see TranslationGroup.showAllStrings), so
    // it follows - set directly, because its reactive onSet would reset the model a second time.
    this.setPropertyValueDirectly("showAllStrings", val);
    // Before the first reset there is no tree and no matrix to rebuild yet.
    if (!!this.root) {
      this.reset();
    } else {
      this.updateStringsFilterAction();
    }
  }
  // The all/used strings switch rebuilds the tree; the matrix rows follow it, and so does the
  // action's own title.
  public reset(alwaysReset: boolean = true): void {
    super.reset(alwaysReset);
    this.updateStringsFilterAction();
    this.fillStringsMatrix();
  }
  // A real-survey string edited elsewhere (the pane's inline editor, undo/redo) shows up in
  // the matrix cells right away - the block and the panes edit the same strings.
  public updateMatrixData(): void {
    this.updateStringsMatrixData();
  }
  // Whether the block's matrix covers the string - the owner asks before it treats an unmapped
  // string change as a structural one (see onCreatorSurveyPropertyChangedCore).
  public hasLocString(locStr: ILocalizableString): boolean {
    if (!locStr || !this.root) return false;
    return this.root.allLocItems.some(item => item.locString === locStr);
  }
  // The auto-translate button of the caption row (see captionActions), as in the whole-survey
  // machine-translation dialog (see TranslationEditor.setupNavigationButtons). It covers
  // the used strings only, whatever the current all/used filter is, and fills the empty
  // target texts only, so it is disabled once every used string has a target text.
  private machineTranslationAction: Action;
  public doMachineTranslation(): void {
    // The results go into the real survey directly; the grid cells are refreshed in one go after.
    runItemsMachineTranslation(this.options, this.getStringsToTranslate(), this.sourceLocale, this.targetLocale || "",
      (item: TranslationItem, text: string): void => {
        if (!this.isDisposed)this.setItemLocText(item, this.targetLocale || "", text);
      },
      (): void => {
        if (!this.isDisposed)this.updateStringsMatrixData();
      });
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
    // The dialog's tree covers the element only (see getRootTranslationObj).
    this.createUsedStringsRoot(this.getRootTranslationObj()).allLocItems.forEach(item => {
      if ((<LocalizableString>item.locString).isEmpty) return;
      if (!item.getLocText(targetLoc) && !!item.getTextToTranslateFrom(this.sourceLocale)) {
        res.push(item);
      }
    });
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
  public dispose(): void {
    this.disposeStringsMatrix();
    if (!!this.captionActionsValue) {
      this.captionActionsValue.forEach(action => action.dispose());
      this.captionActionsValue = undefined;
    }
    this.machineTranslationAction = undefined;
    this.stringsFilterAction = undefined;
    this.onClose = undefined;
    super.dispose();
  }
}
