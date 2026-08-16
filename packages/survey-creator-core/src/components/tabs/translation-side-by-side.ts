import {
  Action, AdaptiveActionContainer, Base, DomDocumentHelper, EventBase, Helpers, IDialogOptions, ILocalizableString,
  ItemValue, LocalizableString, PageModel, PanelModel, PopupBaseViewModel, Question,
  QuestionCommentModel, QuestionDropdownModel,
  QuestionMatrixDropdownModel, Serializer, SurveyModel, property,
  settings as surveySettings, surveyLocalization
} from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { applyCreatorUiLocaleToAction, editorLocalization, getLocString } from "../../editorLocalization";
import { editableStringRendererName, isContentElement } from "../../creator-base";
import { ITranslationDropdownOwner, translationDropdownComponentName } from "./translation-dropdown";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { StringEditorConnector } from "../string-editor";
import { QuestionLinkValueModel } from "../link-value";
import { getDefaultLocaleName, isDefaultLocale } from "../../survey-helper";
import { TranslationCopiesMap } from "./translation-copies-map";
import {
  TranslationBase, TranslationEditor, TranslationGroup, TranslationItem,
  createMachineTranslationAction, runItemsMachineTranslation
} from "./translation";

// A non-breaking space: rendered instead of an empty header string of the source pane to keep
// the row one text line high (see setupSourceEmptySpaces).
const emptySpaceText = "\u00A0";

// The name of the strings matrix of the element dialog. It is the only question of the dialog's
// own survey, so the name matters nowhere - but a matrix without one falls back to rendering its
// name as the title, and this is not a name a real survey question can have.
const stringsMatrixName = "svc-translation-strings";

// How long the strings dialog keeps trying to put the focus into the editor it was asked to open
// (see TranslationElementStrings.focusItem): a rendered dialog serves the request at once, and a
// slow one within a few frames - after a second of waiting the string is not being rendered at all.
const focusCellAttemptDelay = 50;
const focusCellMaxAttempts = 20;

// The share of the element strings matrix its first column - the string names - takes; the
// locale columns split the rest (see createStringsMatrix / addStringsMatrixColumns). A string
// name is a short label, so it keeps its width as the dialog grows and the editors take the
// room that adds (see the dialog's min-width in translation.scss).
const stringsRowTitleWidthPercent = 18;

// The list item of the target language dropdown: the language name and, at the right edge, how
// much of the survey is already translated into it. Set on the choices themselves and not as the
// question's itemComponent - the collapsed dropdown reads that one too (see
// QuestionDropdownModel.inputFieldComponentName) and it shows the language name alone.
export const translationLocaleItemComponentName = "svc-translation-locale-item";
// The precomputed "14 / 56" of a language choice, absent when nothing is translated yet. Held as
// a reactive property of the choice, not a plain field: a recount usually leaves the choice list
// value-equal, so the question keeps the very ItemValues it already has and only their property
// change can reach the rendered list.
export const translationLocaleProgressName = "translationProgress";
export function getTranslationLocaleProgress(item: any): string {
  return !!item && typeof item.getPropertyValue === "function"
    ? item.getPropertyValue(translationLocaleProgressName) : undefined;
}

// The link question below the target language dropdown: how much of the survey is translated
// into the selected language, and the way to the next string that is not.
const translationProgressQuestionName = "translationProgress";

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
  // The side-by-side property grid: a form/grid view switcher, the source and target language
  // dropdowns and the progress link of the target language (the standard mode shows its
  // locales matrix instead).
  protected createSettingsSurvey(): SurveyModel {
    const json = this.getSideBySideSettingsSurveyJSON();
    // titleLocationLeft = false: the language dropdown titles sit on top of the editors,
    // as in the designer's property grid.
    setSurveyJSONForPropertyGrid(json, true, false);
    const res = this.options.createSurvey(json, "translation_settings", this, (survey: SurveyModel): void => {
      survey.css = propertyGridCss;
      // The page plays the role of a property grid category content, as in the designer.
      survey.css.page.root += " spg-panel__content";
      // The rows are children of the page content, not of the page root, so the gap between
      // them belongs there - the designer's property grid spaces its category rows the same
      // way (see .spg-container--multi-page .spg-page__content).
      survey.css.page.content += " st-language-settings__content";
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
    this.setupTranslationProgressQuestion(res);
    return res;
  }
  // The progress link below the target dropdown: its text, its value and its clickability follow
  // the counts (see updateTranslationProgress); the link goes to the next string that has no
  // translation yet and the clear button drops the language's translations.
  private setupTranslationProgressQuestion(survey: SurveyModel): void {
    const question = <QuestionLinkValueModel>survey.getQuestionByName(translationProgressQuestionName);
    if (!question) return;
    // The clear button is shown by the model, not derived from "the value is not empty": the
    // value here is a count, and 0 is not an empty value - it is the counts that decide what
    // the question offers (see updateTranslationProgress).
    question.allowClear = false;
    question.showClear = false;
    question.linkClickCallback = (): void => this.selectFirstUntranslatedString();
    (<any>question).clearClickCallback = (): void => this.clearTargetLocaleStrings();
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
          type: "linkvalue",
          name: translationProgressQuestionName,
          titleLocation: "hidden",
          // Shown by updateTranslationProgress, which is also what fills it - until then it
          // would render the empty-value text of a link question.
          visible: false,
          // The link renders the progress text this model assigns (see updateTranslationProgress),
          // not the question's own value - the value is the number of translated strings.
          showValueInLink: true
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
      this.updateTranslationProgress();
    } finally {
      this._updatingSettingsSurvey = false;
    }
  }
  // The languages the survey has translations for: every locale with at least one stored string.
  // The default language is not one of them - it is what the translations are measured against,
  // not a translation. The set of languages that can be translated into is wider, see
  // getTargetLocales.
  private getTranslatedLocales(): Array<string> {
    const res: Array<string> = [];
    if (!this.survey) return res;
    this.survey.getUsedLocales().forEach(loc => {
      if (isDefaultLocale(loc) || res.indexOf(loc) >= 0) return;
      if (!!this.localeInitialVisibleCallback && !this.localeInitialVisibleCallback(loc)) return;
      res.push(loc);
    });
    return res;
  }
  // The whole-survey used-strings tree: the progress denominator of the language counts and the
  // source of the element indicator states. Never scoped by the grid view's page filter and
  // independent of the view's strings filter.
  //
  // Building it instantiates a TranslationGroup per object and a TranslationItem per string of
  // the survey, so it is kept between edits - every text edit refreshes both the counts and the
  // indicators, and rebuilding it twice per keystroke is what a large survey feels. It is dropped
  // by every full counts refresh (resetTranslationCounters, so also by a reset) and by a
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
  public resetTranslationCounters(): void {
    this.resetUsedStringsCache();
    this.updateTranslationCounters();
  }
  // Everything counted over the used strings: the per-language counters of the target dropdown
  // and the progress link of the current target language.
  private updateTranslationCounters(): void {
    if (this.isDisposed || !this.survey) return;
    this.refreshTargetLocaleChoices();
    this.updateTranslationProgress();
  }
  private deleteSurveyLocaleStrings(locale: string): void {
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
  }
  // The clear button of the progress link: the language keeps being translated - it loses its
  // texts and starts from zero.
  public clearTargetLocaleStrings(): void {
    const locale = this.targetLocale || "";
    if (!locale || this.isDisposed || this.readOnly) return;
    const creator = this.creatorModel;
    surveySettings.confirmActionAsync(getLocString("ed.translationClearProgress"), (confirm: boolean) => {
      if (!confirm || this.isDisposed || (this.targetLocale || "") !== locale) return;
      this.deleteSurveyLocaleStrings(locale);
      // The target language stays selected, so the panes keep editing it - they are rebuilt
      // over the survey that has no texts for it anymore.
      if (!this.isSideBySideGrid) {
        this.rebuildInstances();
      }
    }, {
      locale: editorLocalization.currentLocale,
      cssClass: "sv-popup--confirm svc-creator-popup",
      rootElement: !!creator ? creator.rootElement : undefined
    });
  }
  // Bulk write operations (CSV import, apply-translations, locale deletion) run through
  // runWithoutSurveyReaction and refresh the counters once via the reset that follows;
  // a single string edit refreshes them immediately.
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
      // A default-language edit moves the denominator of every count (it can add a used string),
      // so the tree is rebuilt then. Any other edit moves the counters of the edited language
      // alone, over the tree that is already there.
      if (isDefaultLocale(locale)) {
        this.resetTranslationCounters();
      } else {
        this.updateTargetLocaleProgress(locale);
        if ((this.targetLocale || "") === locale) {
          this.updateTranslationProgress();
        }
      }
      this.updateElementTranslationStates();
    }
  }
  private get translationProgressQuestion(): QuestionLinkValueModel {
    const survey = this.settingsSurvey;
    return !!survey ? <QuestionLinkValueModel>survey.getQuestionByName(translationProgressQuestionName) : undefined;
  }
  // The progress link of the target language: how many of the survey's used strings it already
  // has a text for. It says nothing without a target language, so it is hidden then.
  public updateTranslationProgress(): void {
    const question = this.translationProgressQuestion;
    if (!question || this.isDisposed) return;
    const locale = this.targetLocale || "";
    question.visible = !!locale;
    if (!locale) return;
    const progress = this.getTranslationProgress(locale);
    // The value goes in first: the question rewrites its link text and its clickability from
    // every value it gets, and both are set from the counts right below.
    question.value = progress.translated;
    question.linkValueText = editorLocalization.getString("ed.translationProgress")
      .replace("{0}", progress.translated.toString())
      .replace("{1}", progress.total.toString());
    // Nothing to clear - the language has no text of its own yet.
    question.showClear = progress.translated > 0;
    // Nothing left to go to - the link stops being a button.
    question.isClickable = progress.translated < progress.total;
  }
  // The progress link's action: the next string with no text in the target language - the first
  // one of the page the user is on, or, when that page is fully translated, the first one of the
  // next page that is not.
  public selectFirstUntranslatedString(): void {
    if (this.isDisposed) return;
    const infos = this.getUntranslatedStringInfos();
    if (infos.length === 0) return;
    const pageName = this.currentPageName;
    const info = (!!pageName ? infos.filter(item => item.pageName === pageName)[0] : undefined) || infos[0];
    this.selectTranslationItem(info);
  }
  // The page the editing surface is on: the page the panes show, or the page the grid is scoped
  // to ("" - the grid lists every page, so no page is preferred over another).
  private get currentPageName(): string {
    if (this.isSideBySideGrid) return !!this.filteredPage ? this.filteredPage.name : "";
    return this.selectedPageName || "";
  }
  // The untranslated used strings in the order the used-strings tree lists them, each with the
  // page it belongs to and the element that carries it. The survey's own strings are counted
  // with the first page: that is where the panes render the survey header.
  private getUntranslatedStringInfos(): Array<{ item: TranslationItem, pageName: string, element: Base }> {
    const res: Array<{ item: TranslationItem, pageName: string, element: Base }> = [];
    const locale = this.targetLocale || "";
    if (!locale || !this.survey) return res;
    const fill = (group: TranslationGroup, pageName: string, element: Base): void => {
      const obj = group.obj;
      if (!!this.getElementStateKey(obj)) {
        element = obj;
        if ((<any>obj).isPage) pageName = (<any>obj).name;
      }
      group.locItems.forEach(item => {
        if (!this.isItemTranslated(item, locale)) {
          res.push({ item: item, pageName: pageName, element: element });
        }
      });
      group.groups.forEach(child => fill(child, pageName, element));
    };
    const firstPage = this.survey.pages[0];
    fill(this.getUsedStringsRoot(), !!firstPage ? firstPage.name : "", this.survey);
    return res;
  }
  private selectTranslationItem(info: { item: TranslationItem, pageName: string, element: Base }): void {
    const locStr = info.item.locString;
    this.selectedLocString = locStr;
    const page = !!this.survey ? this.survey.getPageByName(info.pageName) : undefined;
    if (this.isSideBySideGrid) {
      // A grid scoped to another page is re-scoped first - the property's onSet rebuilds the
      // grid, so the cell is resolved afterwards.
      if (!!page && !!this.filteredPage && this.filteredPage !== page) {
        this.filteredPage = page;
      }
      this.focusGridCell(locStr);
      return;
    }
    if (!!page) {
      this.selectedPageName = page.name;
    }
    // The strings dialog of the owning element, not the inline editor of the pane: the pane
    // renders only a part of an element's strings (a title, a description, the choices of a
    // rendered list), and the dialog is the one surface that holds every one of them.
    this.showElementStringsDialog(info.element);
    this.focusElementStringsItem(locStr);
  }
  // The string the dialog is asked to focus while its matrix is not in the DOM yet: the model is
  // built here, and the dialog renders it with its next render. The request is kept until the
  // matrix reports it is rendered (see createStringsHostSurvey) - the immediate attempt below
  // covers a framework that renders the dialog synchronously.
  private focusedStringsItem: ILocalizableString;
  private focusElementStringsItem(locStr: ILocalizableString): void {
    if (!locStr || !this.elementStringsModel) return;
    this.focusedStringsItem = locStr;
    this.elementStringsModel.focusItem(locStr);
  }
  private applyFocusedStringsItem(): void {
    const locStr = this.focusedStringsItem;
    if (!locStr) return;
    this.focusedStringsItem = undefined;
    if (!!this.elementStringsModel) {
      this.elementStringsModel.focusItem(locStr);
    }
  }
  public reset(alwaysReset: boolean = true): void {
    super.reset(alwaysReset);
    this.resetTranslationCounters();
    this.updateElementTranslationStates();
  }
  // The forms view's per-element indicator: every target-pane element with a title row (the
  // survey, pages, panels with strings, questions) shows the translation state of the strings
  // its translate action covers - the element's own strings, including the ones reachable
  // only through its strings dialog (matrix column choices, validators, survey-level
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
  // Every used string counts - exactly the ones the element's strings block lists and the ones
  // the survey progress is measured against. A string without a stored text of its own is one
  // of them when it has a text to translate from anyway: a choice with no text is displayed
  // (and translated) by its value, a question with no title by its name; the used-strings tree
  // keeps those and drops the rest (see TranslationGroup.createTranslationItem and
  // createItemValuesLocale). Counting less here would leave the progress link pointing at
  // elements whose button says there is nothing to translate.
  // An element's state covers exactly the strings its block edits: its own strings plus the
  // non-element groups below it (matrix column choices, validators, ...). Nested pages, panels
  // and questions carry indicators of their own, so their counts do not roll up into the parent.
  private computeElementCounts(): { [key: string]: { translated: number, total: number } } {
    const states: { [key: string]: { translated: number, total: number } } = {};
    const locale = this.targetLocale || "";
    const calc = (group: TranslationGroup): { translated: number, total: number } => {
      const counts = { translated: 0, total: 0 };
      group.locItems.forEach(item => {
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
  // there is one (and nothing but the language icon otherwise) and a css modifier per state.
  // It renders without a visible title in two of the three states, so the tooltip is also its
  // accessible name - it follows the state.
  private applyElementStateToAction(action: Action, key: string): void {
    const counts = this.elementCounts[key];
    const state = this.getStateFromCounts(counts);
    const untranslated = !!counts ? counts.total - counts.translated : 0;
    action.title = untranslated > 0 ? untranslated.toString() : "";
    action.showTitle = untranslated > 0;
    action.tooltip = untranslated > 0
      ? editorLocalization.getString("ed.translationStateUntranslated").replace("{0}", untranslated.toString())
      : editorLocalization.getString(state === "translated" ? "ed.translationStateAllTranslated" : "ed.translationStateNothingToTranslate");
    action.css = "svc-translation-state svc-translation-state--" + state;
  }
  private updateSourceLocaleQuestion(question: QuestionDropdownModel, selected: string, excluded: string): void {
    if (!question) return;
    question.choices = this.createLocaleChoices(this.getSourceLocales(), selected, excluded);
    question.value = this.toLocaleSettingValue(selected);
  }
  private updateTargetLocaleQuestion(question: QuestionDropdownModel, selected: string, excluded: string): void {
    if (!question) return;
    this.updateTargetLocaleChoices(question, selected, excluded);
    // No target language selected: the dropdown holds no value and renders its placeholder.
    if (!selected) {
      question.clearValue();
    } else {
      question.value = selected;
    }
  }
  // The choice list of the target dropdown: every pickable language with the share of the survey
  // already translated into it, counted over the whole-survey used strings. Counted here, once
  // for the whole list (the item component only renders the text), and the list opens with the
  // languages that have something translated first.
  private updateTargetLocaleChoices(question: QuestionDropdownModel, selected: string, excluded: string): void {
    if (!question) return;
    const items = this.getUsedStringsItems();
    const progressTexts: { [key: string]: string } = {};
    const choices = this.getTargetLocales()
      // Same rule as createLocaleChoices: the language the source dropdown holds is not pickable
      // here, unless it is the current selection.
      .filter(loc => !excluded || loc !== excluded || loc === selected)
      .map(loc => {
        const choice = new ItemValue(this.toLocaleSettingValue(loc), this.getLocaleName(loc));
        const progress = this.getTranslationProgress(loc, items);
        // Nothing translated yet - no numbers at all, "0 / 56" is noise on a language the user
        // has not started.
        if (progress.translated > 0) {
          progressTexts[choice.value] = progress.translated + " / " + progress.total;
        }
        return choice;
      });
    choices.sort((a: ItemValue, b: ItemValue) => {
      const aStarted = !!progressTexts[a.value];
      const bStarted = !!progressTexts[b.value];
      if (aStarted !== bStarted) return aStarted ? -1 : 1;
      return (a.text || "").localeCompare(b.text || "");
    });
    // The list is replaced only when the languages themselves change - a recount alone must keep
    // the very ItemValues the dropdown renders. Assigning an equivalent list would build fresh
    // ItemValues, and the question would still render the old ones: it keeps its visibleChoices
    // when the new list is value-equal to them (updateVisibleChoices), and the counter is not
    // part of a choice's value. The counters reach the list as a property change of those items.
    if (this.getLocaleChoicesKey(choices) !== this.getLocaleChoicesKey(question.choices)) {
      question.choices = choices;
    }
    question.choices.forEach((choice: ItemValue) => {
      choice.setPropertyValue(translationLocaleProgressName, progressTexts[choice.value]);
      choice.component = translationLocaleItemComponentName;
    });
  }
  private getLocaleChoicesKey(choices: Array<ItemValue>): string {
    return (choices || []).map((choice: ItemValue) => choice.value + "|" + choice.text).join("\n");
  }
  // The counts and the order are kept current as the survey is translated - not recomputed when
  // the list opens: a dropdown locks its visible choices while its popup is shown
  // (isLockVisibleChoices), so a refresh made on opening would never reach the rendered list.
  public refreshTargetLocaleChoices(): void {
    const question = this.targetLocaleQuestion;
    if (!question || this.isDisposed) return;
    this._updatingSettingsSurvey = true;
    try {
      this.updateTargetLocaleChoices(question, this.targetLocale || "", this.sourceLocale || "");
    } finally {
      this._updatingSettingsSurvey = false;
    }
  }
  private get targetLocaleQuestion(): QuestionDropdownModel {
    const survey = this.settingsSurvey;
    return !!survey ? <QuestionDropdownModel>survey.getQuestionByName("targetLocale") : undefined;
  }
  // The single-language counterpart of the refresh above, for an edit that can only move one
  // language's counter.
  private updateTargetLocaleProgress(locale: string): void {
    const question = this.targetLocaleQuestion;
    if (!question || this.isDisposed) return;
    const choice = ItemValue.getItemByValue(question.choices, this.toLocaleSettingValue(locale));
    const progress = this.getTranslationProgress(locale, this.getUsedStringsItems());
    const text = progress.translated > 0 ? progress.translated + " / " + progress.total : undefined;
    // A language that has just got its first translation (or lost its last one) moves between
    // the two groups of the list, so the whole list is rebuilt then.
    if (!choice || !getTranslationLocaleProgress(choice) !== !text) {
      this.refreshTargetLocaleChoices();
      return;
    }
    choice.setPropertyValue(translationLocaleProgressName, text);
  }
  // Each dropdown's list hides the language selected in the other one, except its own selection.
  // An empty locale excludes nothing: the default language is a source-only entry, and an empty
  // target is not a language at all.
  private createLocaleChoices(locales: Array<string>, selected: string, excluded: string): Array<ItemValue> {
    return locales.filter(loc => !excluded || loc !== excluded || loc === selected)
      .map(loc => new ItemValue(this.toLocaleSettingValue(loc), this.getLocaleName(loc)));
  }
  // The choice list of the source dropdown - the languages that have something to translate from:
  // the default language first, then the ones the survey stores strings for. The currently
  // selected source is kept even when it loses its last string (an undo, a CSV import), so the
  // dropdown never holds a value without a matching choice.
  private getSourceLocales(): Array<string> {
    const res: Array<string> = [""];
    const add = (loc: string): void => {
      if (!isDefaultLocale(loc) && res.indexOf(loc) < 0) res.push(loc);
    };
    this.getTranslatedLocales().forEach(loc => add(loc));
    add(this.sourceLocale);
    return res;
  }
  // The choice list of the target dropdown - every language that can be translated into: the
  // supported locales plus the ones the survey already uses, so a translation can be started for
  // a language with no strings yet (unlike getTranslatedLocales). The default language is never
  // a target: it is the reference the translations are measured against.
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
        // The dialog survives a switch between two languages: it edits the real survey, and its
        // matrix follows the new locales.
        if (!!this.elementStringsModel) {
          this.elementStringsModel.updateLocales(this.sourceLocale, this.targetLocale);
        }
      }
      this.updateSettingsSurveyValues();
      if (name === "targetLocale") {
        // Nothing left to translate into - the open dialog has no target column anymore.
        if (!newValue) {
          this.hideElementStringsDialog();
        }
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
    if (!!scopedInfo)this.focusGridCell(scopedInfo.item.locString);
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
  // Resolved by the survey's localizable string, not by the translation item: the grid holds a
  // tree of its own, so an item found in another one (the used-strings tree) is not the item
  // its rows carry.
  private focusGridCell(locStr: ILocalizableString): void {
    const survey = this.stringsSurvey;
    if (!survey) return;
    const questions = survey.getAllQuestions();
    for (let i = 0; i < questions.length; i++) {
      const matrix = <QuestionMatrixDropdownModel>questions[i];
      const rows = matrix.rows;
      const rowItem = Array.isArray(rows) && rows.length > 0 ? <TranslationItem>rows[0]["translationData"] : undefined;
      if (!!rowItem && rowItem.locString === locStr) {
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
      this.setupSourceSurvey(this.sourceSurvey);
      // With no target language selected there is nothing to edit: the target pane is not
      // rendered, so its copy is not created either and the source pane is the whole surface.
      if (!!this.targetLocale) {
        this.targetSurvey = this.createInstance(json, "translation_target");
        this.setupTargetSurvey(this.targetSurvey);
        this.setupSourceEmptySpaces();
      }
      this.buildMappings();
      this.updateInstanceLocales();
      this.updateInstancePages();
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
  // the element strings dialog writes to it, and external code can too.
  public onCreatorSurveyPropertyChanged(obj: Base, propName: string): void {
    if (this._syncing || this.isDisposed) return;
    // The survey locale is read once, on activation, to preselect the target language - the tab
    // does not follow it afterwards, and the locale itself changes no string and no counter.
    if (obj === this.survey && propName === "locale") return;
    // The element strings dialog writes into the real survey string by string, so this runs per
    // edit there as well: a text change keeps the used-strings tree, a structural one rebuilds it.
    // Dropped here and not through resetTranslationCounters below, because the pane rebuild of a
    // structural change computes the indicator states of the fresh copies on its way (see
    // rebuildInstances).
    if (!this.getLocStrByName(obj, propName)) {
      this.resetUsedStringsCache();
    }
    this.onCreatorSurveyPropertyChangedCore(obj, propName);
    // Any real-survey change can move the counters, and a structural one their denominator.
    this.updateTranslationCounters();
    this.updateElementTranslationStates();
    // The dialog is over the real survey, so a pane rebuild leaves it alone - but a change that
    // took its element away leaves it nothing to edit.
    this.closeElementStringsDialogIfElementGone();
    // The open dialog edits the same strings as the panes - a change made elsewhere (an inline
    // editor, undo/redo, the machine translation) shows up in its cells.
    if (!!this.elementStringsModel) {
      this.elementStringsModel.updateMatrixData();
    }
  }
  // The dialog edits one element of the real survey; a change that removed or replaced it (a
  // deletion, an undo, a JSON reload) closes it. Resolved by name, like the indicator states.
  private closeElementStringsDialogIfElementGone(): void {
    const model = this.elementStringsModel;
    if (!model) return;
    const key = this.getElementStateKey(model.element);
    if (!key || this.getRealObjByStateKey(key) !== model.element) {
      this.hideElementStringsDialog();
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
      // A string of the open dialog that the panes do not render (a matrix column choice, a
      // validator text): it is a text change like any other, not the structural change the
      // rebuild below is for.
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
    // The title actions of the pane elements (the translation state indicators, the block's
    // caption buttons) report through the pane survey as well, and their own texts are never
    // mapped copies - forwarding them would read as a drifted mapping below and rebuild the
    // panes on every indicator refresh.
    if (sender instanceof Action) return;
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
      // The open dialog edits the same strings as the panes, and its usual refresh funnel
      // (onCreatorSurveyPropertyChanged) is closed here - it bails on the _syncing flag this
      // method holds. So an inline editor edit of a string the dialog lists is pushed into its
      // cells from here; an edit belonging to another element leaves the dialog alone.
      if (!!this.elementStringsModel && this.elementStringsModel.hasLocString(item.locString)) {
        this.elementStringsModel.updateMatrixData();
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
    this.hideElementStringsDialog();
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
        const item = this.copiesMap.getItemByEditableCopy(locStr);
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
  // The translate action doubles as the element's translation state indicator: it opens the
  // element's strings dialog, and its title shows how many strings are left to translate
  // (see applyElementStateToAction).
  // Its texts are assigned imperatively from editorLocalization, which is what keeps them in the
  // creator UI locale: the target pane runs in the target locale, so a locTitleName/locTooltipName
  // added here would be resolved in the language being translated into
  // (see applyCreatorUiLocaleToAction).
  private createTranslateAction(id: string, doAction: () => void, paneElement: Base): Action {
    const action = new Action({
      id: id,
      iconName: "icon-language",
      iconSize: "auto",
      showTitle: false,
      // The number of untranslated strings is the point of the button, and a title row has
      // little room for actions - a narrow element (a question that shares its row, a pane
      // resized down) makes its title bar shrink its actions, and a shrunk action renders as
      // its icon alone (see Action.hasTitle). The row wraps its text instead.
      disableShrink: true,
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
      () => this.showSurveyStringsDialog(), survey)]);
    toolbar.flushUpdates();
    this.surveyTitleToolbar = toolbar;
    Object.defineProperty(survey, "hasTitleActions", { get: (): boolean => true, configurable: true });
    survey.getTitleToolbar = (): AdaptiveActionContainer => toolbar;
  }
  // The translate title action of a target-pane element opens a dialog with a strings matrix
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
    // The dialog opens in the mode the user chose the last time (the caption's filter action);
    // "used strings only" - the strings that have something to translate - is the default.
    model.showAllElementStrings = this.showAllElementStrings;
    model.reset();
    // An element without stored strings (e.g. a page with an empty title) would show an empty
    // matrix - fall back to all strings so the dialog is never a dead end. The fallback is not
    // the user's choice: it is not stored, and the filter action cannot switch back, since
    // choosing the used strings would bring the empty matrix back.
    if (model.isEmpty) {
      model.forceShowAllElementStrings();
    }
    model.onShowAllStringsChanged = (value: boolean): void => {
      this.showAllElementStrings = value;
      if (!!this.onShowAllElementStringsChanged)this.onShowAllElementStringsChanged(value);
    };
    return model;
  }
  // The all/used strings mode of the element dialogs: chosen by the filter action in a dialog's
  // caption and kept for the next element. A plain field, not a survey property - nothing
  // renders it, it only seeds the next matrix. The plugin follows the callback to carry it
  // over a tab switch, which the tab model itself does not survive.
  public showAllElementStrings: boolean = false;
  public onShowAllElementStringsChanged: (value: boolean) => void;
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
  // The strings model of the element whose dialog is open, or undefined while no dialog is shown.
  @property() elementStringsModel: TranslationElementStrings;
  private elementStringsSurveyValue: SurveyModel;
  private elementStringsPopup: PopupBaseViewModel;
  // The survey the dialog renders - the strings matrix alone (see createStringsHostSurvey).
  public get elementStringsSurvey(): SurveyModel {
    return this.elementStringsSurveyValue;
  }
  // Only one element's strings are open at a time: the dialog is modal, and a dialog opened
  // through the progress link while another one is up replaces it.
  public showElementStringsDialog(realObj: Base): void {
    if (!realObj || this.isDisposed || this.isSideBySideGrid || !this.targetSurvey) return;
    if (!this.getElementStateKey(realObj)) return;
    this.hideElementStringsDialog();
    const model = this.createElementStringsModel(realObj);
    this.elementStringsModel = model;
    this.elementStringsSurveyValue = this.createStringsHostSurvey(model);
    // No dialog implementation at all (a headless environment): the model is still the open
    // one, so the tab keeps working through its API.
    if (!surveySettings.showDialog) return;
    // The dialog is creator UI, not survey content: it is built while the library's current
    // locale is the creator's one, so its own strings (the footer button, the close icon)
    // are not resolved in the language being translated into.
    const prevLocale = surveyLocalization.currentLocale;
    surveyLocalization.currentLocale = editorLocalization.currentLocale;
    const popup: PopupBaseViewModel = surveySettings.showDialog(<IDialogOptions>{
      componentName: "survey-widget",
      data: { model: this.elementStringsSurveyValue },
      onApply: (): boolean => true,
      onHide: () => this.onElementStringsDialogHidden(model),
      cssClass: "svc-property-editor st-translation-dialog st-element-strings-dialog svc-creator-popup",
      title: this.getElementStringsDialogTitle(realObj),
      displayMode: this.options.isMobileView ? "overlay" : "popup"
    }, this.options.rootElement);
    this.elementStringsPopup = popup;
    // The matrix edits apply immediately, so the dialog gets a single closing button instead
    // of the apply/cancel pair.
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
  // The dialog is gone - by its own button or because the model closed it. A dialog that has
  // already been replaced by a newer one reports here as well, and its model is not the open one.
  private onElementStringsDialogHidden(model: TranslationElementStrings): void {
    if (this.elementStringsModel !== model) return;
    this.elementStringsPopup = undefined;
    this.disposeElementStringsModel();
  }
  public hideElementStringsDialog(): void {
    const popup = this.elementStringsPopup;
    this.elementStringsPopup = undefined;
    // Hiding reports back through onHide, which disposes the model; the call below is what
    // closes a model shown without a dialog at all.
    if (!!popup) popup.model.hide();
    this.disposeElementStringsModel();
  }
  private disposeElementStringsModel(): void {
    const model = this.elementStringsModel;
    if (!model) return;
    // A focus request that was never served belonged to the model being closed here.
    this.focusedStringsItem = undefined;
    this.elementStringsModel = undefined;
    const hostSurvey = this.elementStringsSurveyValue;
    this.elementStringsSurveyValue = undefined;
    if (!!hostSurvey) hostSurvey.dispose();
    model.dispose();
    // The user has usually just translated something - the freed button shows the new count.
    this.updateElementTranslationStates();
  }
  // The dialog's own survey: a plain runtime survey holding the strings matrix alone. Runtime,
  // unlike the panes: its cells are editable without the design-mode workarounds, and its
  // content reports to no pane callback at all. It is rendered by the "survey-widget"
  // component, which every UI package registers - the dialog needs none of its own.
  private createStringsHostSurvey(model: TranslationElementStrings): SurveyModel {
    return this.options.createSurvey({}, "translation_element_strings", this, (survey: SurveyModel): void => {
      this.makeSurveyIdSpaceUnique(survey);
      survey.showNavigationButtons = false;
      survey.showProgressBar = false;
      survey.showTOC = false;
      survey.addNewPage("page");
      const matrix = model.createStringsMatrix(stringsMatrixName);
      model.setupStringsMatrix(survey);
      survey.pages[0].addElement(matrix);
      // The matrix is filled on creation, before it belongs to any survey - and a question
      // joining a survey re-reads its value from that survey's data (see Question.onSetData),
      // which is empty here. The texts are put back once the matrix is where they survive.
      model.updateMatrixData();
      // The matrix's own styles (the merged first cell, the caption row) are scoped to this class.
      survey.onUpdateQuestionCssClasses.add((_, options) => {
        if (options.question === matrix) {
          options.cssClasses.mainRoot += " st-element-strings";
        }
      });
      // The matrix title row is the dialog's caption row: it carries the auto-translate button
      // and the all/used strings filter.
      survey.onGetQuestionTitleActions.add((_, options) => {
        if (options.question === matrix) {
          options.actions.push(...model.captionActions);
        }
      });
      // The matrix is in the DOM now - a focus request made while it was being built can be served.
      survey.onAfterRenderQuestion.add((_, options) => {
        if (options.question === matrix)this.applyFocusedStringsItem();
      });
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

// The model of the element strings dialog: a Translation scoped to a single element of
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
  // Set by the owner - the all/used strings choice is kept for the next element.
  public onShowAllStringsChanged: (value: boolean) => void;
  // The caption row's actions - the title actions of the strings matrix: auto-translate (when
  // machine translation is available) and the all/used strings filter. The dialog is closed by
  // its own footer button, so the caption row carries no closing action.
  private captionActionsValue: Array<Action>;
  private stringsFilterAction: Action;
  public get captionActions(): Array<Action> {
    if (!this.captionActionsValue) {
      this.captionActionsValue = [];
      if (this.options.getHasMachineTranslation() && !this.readOnly) {
        // The dialog's survey has no locale of its own, but the actions are read whenever their
        // owner is - an action resolving a localizationName would follow whatever locale it is
        // rendered in, and never the creator UI one.
        this.machineTranslationAction = applyCreatorUiLocaleToAction(createMachineTranslationAction(() => this.doMachineTranslation()));
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
    }
    return this.captionActionsValue;
  }
  // The filter action shows the mode it switches to, like the toolbar dropdown items it replaces.
  private updateStringsFilterAction(): void {
    if (!this.stringsFilterAction) return;
    this.stringsFilterAction.title = editorLocalization.getString(
      this.showAllStrings ? "ed.translationShowUsedStringsOnly" : "ed.translationShowAllStrings");
  }
  // The dialog renders one matrix instead of the grid view's survey of matrices: an element has
  // few strings, and one question is all the dialog holds. Rows are the element's translation
  // items, the columns are the source and the target locale - the grid view's layout, scoped
  // to a single element.
  public createStringsMatrix(name: string): QuestionMatrixDropdownModel {
    const matrix = <QuestionMatrixDropdownModel>Serializer.createClass("matrixdropdown");
    matrix.name = name;
    matrix.cellType = "comment";
    // The matrix has no caption text: the dialog's own title names the element it belongs to.
    // The title row itself stays - it is what carries the caption's actions - but it renders
    // empty, without the question name a title-less question would fall back to.
    matrix.titleLocation = "top";
    matrix.locTitle.onGetTextCallback = (): string => "";
    // The header row names the two languages the columns edit, as the grid view's header row
    // does; the column of the string names has no header there either.
    matrix.showHeader = true;
    matrix.rowTitleWidth = stringsRowTitleWidthPercent + "%";
    this.addStringsMatrixColumns(matrix);
    this.stringsMatrix = matrix;
    this.fillStringsMatrix();
    return matrix;
  }
  // The locale columns of the dialog's matrix: the source/target pair of the grid view, with the
  // header titles the grid keeps in a header survey of its own - the dialog has a single matrix,
  // so its own header row carries them.
  private addStringsMatrixColumns(matrix: QuestionMatrixDropdownModel): void {
    this.addLocaleColumns(matrix);
    this.updateSourceTargetHeaderColumns(matrix, this.sourceLocale, this.targetLocale || "", !!this.targetLocale);
    // A column width reaches the rendered table through the header cells alone (see
    // QuestionMatrixDropdownRenderedTable.createHeaderCell), so the locale columns share what
    // the string names leave over there instead of being sized by their content.
    const width = Math.floor((100 - stringsRowTitleWidthPercent) / matrix.columns.length) + "%";
    matrix.columns.forEach(column => { column.width = width; });
  }
  // The first cell of a row: the name of the string the row edits - the property name, prefixed
  // with the path of the group it belongs to (a matrix column's choices, a validator).
  private getRowTitleText(path: string, item: TranslationItem): string {
    return (!!path ? path + ": " : "") + item.text;
  }
  private stringsMatrix: QuestionMatrixDropdownModel;
  // Rows are rebuilt in place on a filter switch: replacing the matrix would take the caption
  // row and its actions - the very button that switched the filter - with it.
  private fillStringsMatrix(): void {
    const matrix = this.stringsMatrix;
    if (!matrix || this.isDisposed) return;
    const rows: Array<ItemValue> = [];
    // The items of the whole scoped tree, the nested groups (matrix column choices, validators)
    // included: their names repeat across groups, so the row value is a position and the group
    // path goes into the row text instead.
    const addGroup = (group: TranslationGroup, path: string): void => {
      group.locItems.forEach(item => {
        const row = new ItemValue("row" + rows.length, this.getRowTitleText(path, item));
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
    matrix.rows = rows;
    matrix.rows.forEach((row: ItemValue) => {
      row["translationData"] = items[row.value];
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
    matrix.value = data;
  }
  // Puts the input focus into the dialog's editor of a string - the row's only cell is the
  // target locale one (see createStringsMatrix).
  public focusItem(locStr: ILocalizableString): void {
    const question = this.getItemCellQuestion(locStr);
    if (!question || this.isDisposed) return;
    // The cell is usually not in the DOM yet: the model is created and focused in one step, and
    // the dialog renders it afterwards. The request is kept until the input has the focus - every
    // framework whose matrix cells report themselves as rendered (react/vue/angular, see their
    // MatrixDropdownCell components) tries it again as soon as the cell is there, and the
    // retries below cover the ones that report nothing and a cell that renders later still.
    if (this.focusCell !== question) {
      this.stopFocusCell();
      this.focusCell = question;
      question.onAfterRenderElement.add(this.onFocusCellRendered);
    }
    this.focusCellAttempts = focusCellMaxAttempts;
    this.focusCellInput();
  }
  // The cell whose input is still owed the focus, and what is left of the waiting for it.
  private focusCell: Question;
  private focusCellAttempts: number = 0;
  private focusCellTimer: any;
  private onFocusCellRendered = (sender: any): void => {
    if (sender === this.focusCell) {
      this.focusCellInput();
    }
  };
  private focusCellInput(): void {
    const question = this.focusCell;
    if (!question || this.isDisposed) return;
    // The input itself, not question.focus(): the block usually renders inside a pane, and a
    // question of a design-mode survey focuses nothing at all (see Question.focus). The block's
    // cells are the one input of that survey the user types into, and they are made editable
    // for that (see onMatrixCellCreated).
    question.focusInputElement(false);
    // Served, or given up on: a cell that never renders must not keep the timer alive.
    if (this.isFocusCellFocused() || this.focusCellAttempts-- <= 0) {
      this.stopFocusCell();
      return;
    }
    if (!this.focusCellTimer) {
      this.focusCellTimer = setTimeout(() => {
        this.focusCellTimer = undefined;
        this.focusCellInput();
      }, focusCellAttemptDelay);
    }
  }
  private isFocusCellFocused(): boolean {
    const question = this.focusCell;
    if (!question) return false;
    const root: any = (<any>question.survey)?.rootElement?.getRootNode() || DomDocumentHelper.getDocument();
    const active = !!root ? root.activeElement : undefined;
    return !!active && active.id === question.inputId;
  }
  private stopFocusCell(): void {
    if (!!this.focusCellTimer) {
      clearTimeout(this.focusCellTimer);
      this.focusCellTimer = undefined;
    }
    if (!this.focusCell) return;
    this.focusCell.onAfterRenderElement.remove(this.onFocusCellRendered);
    this.focusCell = undefined;
  }
  private getItemCellQuestion(locStr: ILocalizableString): Question {
    const matrix = this.stringsMatrix;
    if (!matrix || !locStr) return undefined;
    const rows = matrix.visibleRows;
    for (let i = 0; i < rows.length; i++) {
      const item = this.getMatrixItem(rows[i]);
      if (!!item && item.locString === locStr) {
        const cells = rows[i].cells;
        return cells[cells.length - 1].question;
      }
    }
    return undefined;
  }
  private getMatrixItemValue(row: any): ItemValue {
    return !!this.stringsMatrix && !!row ? ItemValue.getItemByValue(this.stringsMatrix.rows, row.name) : undefined;
  }
  private getMatrixItem(row: any): TranslationItem {
    const itemValue = this.getMatrixItemValue(row);
    return !!itemValue ? itemValue["translationData"] : undefined;
  }
  // The survey the matrix is rendered in drives the cells; the handlers are removed with the
  // model, so a survey that outlives it keeps none of them.
  private hostSurvey: SurveyModel;
  public setupStringsMatrix(survey: SurveyModel): void {
    this.hostSurvey = survey;
    survey.onMatrixCellCreated.add(this.onMatrixCellCreated);
    survey.onMatrixCellValueChanging.add(this.onMatrixCellValueChanging);
    survey.onMatrixCellValueChanged.add(this.onMatrixCellValueChanged);
  }
  private onMatrixCellCreated = (_: SurveyModel, options: any): void => {
    if (options.question !== this.stringsMatrix) return;
    const cellQuestion = options.cell.question;
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
    if (!!this.hostSurvey) {
      this.hostSurvey.onMatrixCellCreated.remove(this.onMatrixCellCreated);
      this.hostSurvey.onMatrixCellValueChanging.remove(this.onMatrixCellValueChanging);
      this.hostSurvey.onMatrixCellValueChanged.remove(this.onMatrixCellValueChanged);
      this.hostSurvey = undefined;
    }
    this.stringsMatrix = undefined;
  }
  protected getRootTranslationObj(): { obj: Base, name: string } {
    return { obj: this.elementValue, name: (<any>this.elementValue).name || "survey" };
  }
  // The survey/page/panel dialogs cover only the element's own strings - the nested survey
  // elements carry translate actions of their own. The question dialog keeps its whole
  // subtree (column choices, template elements): those strings cannot be reached elsewhere.
  public canShowElementGroupCore(obj: Base): boolean {
    if ((<any>this.elementValue).isQuestion) return true;
    const el = <any>obj;
    return !el.isPage && !el.isPanel && !el.isQuestion;
  }
  // The dialog renders this model's own matrix - the strings grid surveys of the base class
  // (and their header survey) are never built for it.
  protected get hasStringsSurveyUI(): boolean {
    return false;
  }
  // Cleared when the element has no stored strings and the dialog fell back to the
  // all-strings mode (see createElementStringsModel).
  public hasUsedStrings: boolean = true;
  // The all/used strings filter of the element dialogs - deliberately not the base
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
    // The owner is told first: it stores the choice, and the next element's dialog opens in the
    // mode the user has just chosen.
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
  // A real-survey string edited elsewhere (the machine translation, undo/redo) shows up in
  // the matrix cells right away - the dialog and the panes edit the same strings.
  public updateMatrixData(): void {
    this.updateStringsMatrixData();
  }
  // A locale switch does not rebuild the panes (as long as a target language stays selected), so
  // the open dialog follows it here: both locales have a column of their own, so either change
  // rebuilds the columns - the rows are the element's strings and belong to no language.
  public updateLocales(sourceLocale: string, targetLocale: string): void {
    if (this.isDisposed) return;
    if ((this.sourceLocale || "") === (sourceLocale || "") && (this.targetLocale || "") === (targetLocale || "")) return;
    this.sourceLocale = sourceLocale;
    this.targetLocale = targetLocale;
    const matrix = this.stringsMatrix;
    if (!matrix) return;
    matrix.columns = [];
    this.addStringsMatrixColumns(matrix);
    this.updateStringsMatrixData();
  }
  // Whether the dialog's matrix covers the string - the owner asks before it treats an unmapped
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
  // The strings the auto-translate button fills: the element's used strings that have a source
  // text and no target text yet - the ones its state indicator counts as untranslated. A string
  // that stores nothing of its own is translated from the text it is displayed by (a choice's
  // value, a question's name), which is what the all-languages dialog sends as well (see
  // TranslationEditor.createStringsToTranslate). Collected over a used-strings tree, so the set
  // does not depend on the dialog's current all/used filter.
  public getStringsToTranslate(): Array<TranslationItem> {
    const res = new Array<TranslationItem>();
    const targetLoc = this.targetLocale || "";
    if ((this.sourceLocale || "") === targetLoc) return res;
    // The dialog's tree covers the element only (see getRootTranslationObj).
    this.createUsedStringsRoot(this.getRootTranslationObj()).allLocItems.forEach(item => {
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
    this.stopFocusCell();
    this.disposeStringsMatrix();
    if (!!this.captionActionsValue) {
      this.captionActionsValue.forEach(action => action.dispose());
      this.captionActionsValue = undefined;
    }
    this.machineTranslationAction = undefined;
    this.stringsFilterAction = undefined;
    super.dispose();
  }
}
