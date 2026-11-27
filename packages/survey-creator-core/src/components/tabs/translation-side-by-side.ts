import {
  Action, AdaptiveActionContainer, Base, DomDocumentHelper, EventBase, IActionAppearance, IDialogOptions, ILocalizableString,
  ILocalizableOwner, ItemValue, LocalizableString, PageModel, PanelModel, PanelModelBase, PopupBaseViewModel, Question,
  QuestionButtonGroupModel, QuestionDropdownModel, QuestionHtmlModel, QuestionRowModel,
  Serializer, SurveyElement, SurveyModel, property,
  settings as surveySettings, surveyLocalization
} from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { editorLocalization } from "../../editorLocalization";
import { editableStringRendererName, isContentElement, SurveyCreatorModel } from "../../creator-base";
import { ITranslationDropdownOwner, translationDropdownComponentName } from "./translation-dropdown";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { StringEditorConnector } from "../string-editor";
import { showConfirmDialog } from "../../utils/confirm-dialog";
import { getDefaultLocaleName, isDefaultLocale } from "../../survey-helper";
import { TranslationCopiesMap } from "./translation-copies-map";
import { TranslationRowEqualizer, equalizerSourceSide, equalizerTargetSide } from "./translation-row-equalizer";
import { TranslationTable } from "./translation-table";
import { TranslationUntranslatedStrings, getUntranslatedTargetPlaceholder } from "./translation-untranslated-strings";
import {
  TranslationBase, TranslationGroup, TranslationItem,
  runItemsMachineTranslation, createTranslationPanelButton, escapeTranslationHtmlText,
  getTranslationActionsPanelJSON, getTranslationPanelButtonAppearance, setupTranslationButtonsPanel
} from "./translation";

// A non-breaking space: rendered instead of an empty header string of the source pane to keep
// the row one text line high (see setupSourceEmptySpaces).
const emptySpaceText = "\u00A0";

// The key of the isNeedRender subscriptions that pair the lazily rendered rows of the two
// panes (see TranslationSideBySide.setupLazyRowPairs).
const lazyRowPairKey = "svc-translation-lazy-rows";

// The Used Strings / All Strings button group of the element strings dialog and its values.
export const translationStringsFilterName = "svc-translation-strings-filter";
const translationStringsFilterUsed = "used";
const translationStringsFilterAll = "all";

// How long the strings dialog keeps trying to put the focus into the editor it was asked to open
// (see TranslationElementStrings.focusItem): a rendered dialog serves the request at once, and a
// slow one within a few frames - after a second of waiting the string is not being rendered at all.
const focusCellAttemptDelay = 50;
const focusCellMaxAttempts = 20;

// The text of an html string, for a place that renders plain text only (the element strings dialog
// title). Parsed into an inert document: nothing in it loads or runs. Without DOMParser (no DOM, so
// nothing is rendered) it is the given fallback text: markup is never stripped by a regular
// expression, which leaves fragments of nested or broken tags behind.
function getHtmlText(html: string, fallbackText: string): string {
  if (typeof DOMParser === "undefined") return fallbackText;
  return new DOMParser().parseFromString(html, "text/html").body.textContent || "";
}

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

// The side panel below the language dropdowns (see getSideBySideSettingsSurveyJSON): a panel with
// the progress text and the translation buttons in its footer, then the "Actions" group with the
// CSV buttons that the standard mode has as well (see TranslationBase.setupCsvActionsPanel).
const translationProgressQuestionName = "translationProgress";
const translationButtonsPanelName = "translationButtons";

// The translation state of a target-pane element for the current target language:
// "none" - no used strings with a stored text (nothing to translate), "untranslated" - at
// least one used string has no stored target-locale text, "translated" - all of them do.
export type TranslationElementState = "none" | "untranslated" | "translated";

// The translate action of a target-pane element (see applyElementStateToAction): a white button
// with the trigger ring (showBorder), the same in every state.
const translateActionIconName = "icon-language";
const translateActionDoneIconName = "icon-check-16x16";
const translateActionAppearance: IActionAppearance = { style: "neutral", mode: "tertiary-surface", size: "small", showBorder: true };

export class TranslationSideBySide extends TranslationBase implements ITranslationDropdownOwner {
  @property() selectedPageName: string;
  @property() sourceSurvey: SurveyModel;
  @property() targetSurvey: SurveyModel;
  // The editing surface of the side-by-side mode: "form" - two design-mode survey copies
  // rendered side by side, "grid" - the strings grid with a source and a target column.
  // Changing it rebuilds the surface in place on the same model, so the locales chosen in
  // the property grid survive the switch.
  @property({ defaultValue: "form" }) view: "form" | "grid";

  // How the two panes of the form view are arranged: "horizontal" - the source pane left of
  // the target pane, "vertical" - the source pane above the target pane. Follows the creator's
  // translationFormViewOrientation option; the grid view ignores it.
  @property({ defaultValue: "horizontal" }) orientation: "horizontal" | "vertical";

  // The bridge between the real survey strings and their copies in the two panes; the target
  // copy is the editable one.
  private copiesMap = new TranslationCopiesMap();
  private _updatingSettingsSurvey: boolean = false;
  // The real survey's localizable string behind the editable string the user focused last -
  // a cell of the strings grid or an inline string editor of the form view's target pane. Used to
  // restore the selection (or at least the page) when the view changes.
  private selectedLocString: ILocalizableString;
  // ITranslationDropdownOwner: the shared collapse state of the flattened dropdown/tagbox
  // choice lists, keyed by the question name - the panes must expand/collapse together.
  private choicesCollapsedState: { [questionName: string]: boolean } = {};
  public onChoicesCollapsedChanged = new EventBase<Base, any>();
  // Keeps the paired rows of the two panes the same height (see setupRowEqualization).
  public readonly rowEqualizer = new TranslationRowEqualizer();
  // The rows of the two survey copies paired for the lazy rendering (see setupLazyRowPairs).
  private lazyRowPairs: Array<Array<QuestionRowModel>> = [];

  constructor(survey: SurveyModel, options: ISurveyCreatorOptions = null, view: "form" | "grid" = "form",
    orientation: "horizontal" | "vertical" = "horizontal") {
    super(survey, options, true);
    // Directly: applyView is for later view switches, the plugin resets the fresh model itself.
    this.setPropertyValueDirectly("view", view);
    this.orientation = orientation;
    this.useSourceTargetColumns = this.isSideBySideGrid;
    // The form view maps every localizable string of the survey copies; the grid view keeps
    // the default ("used strings only") and lets the user switch via the toolbar dropdown.
    // Set directly: the property's onSet would build the tree here, before the owner sets the
    // callbacks and the read-only flag the tree depends on - the owner resets the model itself.
    if (!this.isSideBySideGrid) {
      this.setPropertyValueDirectly("showAllStrings", true);
    }
  }
  public get isSideBySide(): boolean {
    return true;
  }
  // The class of the element the two panes live in: their arrangement and, when no target
  // language is selected, the source-pane-only layout.
  public get sideBySideRootCss(): string {
    let css = "st-side-by-side";
    if (this.orientation === "vertical") css += " st-side-by-side--vertical";
    if (!this.targetSurvey) css += " st-side-by-side--no-target";
    return css;
  }
  // In the grid view the page filtering (filteredPage) and the all/used strings filter work
  // as in the standard mode.
  public get isSideBySideGrid(): boolean {
    return this.view === "grid";
  }
  // The strings grid of the base class is the grid view's surface; the form view renders
  // the survey copies instead.
  protected get hasStringsSurveyUI(): boolean {
    return this.isSideBySideGrid;
  }
  // How the grid was left for the form view: on "All Pages" it comes back on "All Pages".
  private gridLeftOnAllPages: boolean = false;
  // The grid view is a grouped table: a collapsible group per page (see TranslationTable).
  protected createStringsTable(): TranslationTable {
    return new TranslationTable(this, { layout: "pages" });
  }
  protected onSurveyReplaced(): void {
    super.onSurveyReplaced();
    this.gridLeftOnAllPages = false;
    // The "Untranslated strings" dialog lists the strings of the survey it was opened over.
    this.hideUntranslatedStringsDialog();
  }
  // An untranslated target shows the text it is translated from, muted (the placeholder colour).
  public getStringsCellPlaceholder(item: TranslationItem, columnName: string): string {
    return getUntranslatedTargetPlaceholder(this, item, columnName) || super.getStringsCellPlaceholder(item, columnName);
  }
  // The side-by-side property grid: a form/grid view switcher, the source and target language
  // dropdowns, the progress of the target language with the translation buttons, and the CSV
  // actions (the standard mode shows its locales matrix instead).
  // Runs in the base constructor, before the fields of this class are set: the buttons are created
  // when the panels first ask for them (see getSettingsActions).
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
      this.setupSettingsPanels(survey);
    });
    res.onValueChanged.add((sender, options) => {
      if (this._updatingSettingsSurvey || this.isDisposed) return;
      if (options.name === "viewMode") {
        this.view = options.value === "grid" ? "grid" : "form";
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
          title: editorLocalization.getString("ed.translationView"),
          choices: [
            { value: "form", text: editorLocalization.getString("ed.translationSideBySideViewForm") },
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
          type: "panel",
          name: translationButtonsPanelName,
          // The progress text, filled by updateTranslationProgress. It is empty without a target
          // language: the question stays, since the panel and its buttons are shown only while one
          // of its elements is.
          elements: [{ type: "html", name: translationProgressQuestionName }]
        },
        getTranslationActionsPanelJSON()
      ]
    };
  }
  // The two panels of the side panel render their buttons as their footer actions.
  private setupSettingsPanels(survey: SurveyModel): void {
    setupTranslationButtonsPanel(survey, translationButtonsPanelName, () => this.getSettingsActions().translation);
    this.setupCsvActionsPanel(survey);
    survey.onUpdateQuestionCssClasses.add((_, options) => {
      if (options.question.name === translationProgressQuestionName) options.cssClasses.root += " st-language-settings__progress";
    });
  }
  // The buttons of the side panel: Autotranslate all, Translate manually and Clear all below the
  // progress text, then the CSV import and download. Their states follow the counts, the locales and
  // the read-only state (see updateSettingsActions).
  private settingsActionsValue: { translation: Array<Action>, csv: Array<Action> };
  private autoTranslateAllAction: Action;
  private translateManuallyAction: Action;
  private clearAllAction: Action;
  public getSettingsActions(): { translation: Array<Action>, csv: Array<Action> } {
    // A disposed model creates nothing: its readOnly subscription would outlive it.
    if (this.isDisposed && !this.settingsActionsValue) return { translation: [], csv: [] };
    if (!this.settingsActionsValue) {
      const create = createTranslationPanelButton;
      const panelButtonAppearance = getTranslationPanelButtonAppearance;
      this.autoTranslateAllAction = create("svc-translation-auto-translate-all", "ed.translateUsigAI",
        panelButtonAppearance("brand", "primary"), () => this.autoTranslateAll());
      this.autoTranslateAllAction.visible = this.options.getHasMachineTranslation();
      this.translateManuallyAction = create("svc-translation-translate-manually", "ed.translationTranslateManually",
        panelButtonAppearance("brand", "secondary"), () => this.showUntranslatedStringsDialog());
      this.clearAllAction = create("svc-translation-clear-all", "ed.translationClearAll",
        panelButtonAppearance("neutral", "secondary"), () => this.clearTargetLocaleStrings());
      this.settingsActionsValue = {
        translation: [this.autoTranslateAllAction, this.translateManuallyAction, this.clearAllAction],
        csv: this.getCsvActions()
      };
      // The read-only state of the creator can change while the tab is open (see onEditingReadOnlyChanged).
      this.subscribeOnCreatorReadOnly();
      this.updateSettingsActions();
    }
    return this.settingsActionsValue;
  }
  public getSettingsAction(id: string): Action {
    const actions = this.getSettingsActions();
    return actions.translation.concat(actions.csv).filter(action => action.id === id)[0];
  }
  // There is something to translate into: a target language that differs from the source one (the
  // rule of the former "Translate remaining strings" toolbar action).
  public get canTranslateManually(): boolean {
    const target = this.targetLocale || "";
    return !this.isEditingReadOnly && !!target && target !== (this.sourceLocale || "");
  }
  private updateSettingsActions(): void {
    if (!this.settingsActionsValue || this.isDisposed) return;
    const target = this.targetLocale || "";
    const progress = !!target && !!this.survey ? this.getTranslationProgress(target) : { translated: 0, total: 0 };
    // Something it can send: an untranslated used string with a text to translate from (a source
    // other than the default language falls back to nothing). Not while a request is pending.
    const source = this.sourceLocale || "";
    this.autoTranslateAllAction.enabled = this.canTranslateManually && !this.isAutoTranslating && progress.translated < progress.total &&
      this.getUsedStringsItems().some(item => !this.isItemTranslated(item, target) && !!item.getTextToTranslateFrom(source));
    this.translateManuallyAction.enabled = this.canTranslateManually;
    this.clearAllAction.enabled = !this.isEditingReadOnly && progress.translated > 0;
  }
  protected onEditingReadOnlyChanged(): void {
    super.onEditingReadOnlyChanged();
    this.updateSettingsActions();
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
  private usedLocStringsValue: Set<ILocalizableString>;
  private resetUsedStringsCache(): void {
    this.usedStringsRootValue = undefined;
    this.usedStringsItemsValue = undefined;
    this.usedLocStringsValue = undefined;
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
  // Whether a real-survey string is one of the used strings - one the counts are measured over.
  private isUsedLocString(locStr: ILocalizableString): boolean {
    if (!this.usedLocStringsValue) {
      const res = new Set<ILocalizableString>();
      this.getUsedStringsItems().forEach(item => res.add(item.locString));
      this.usedLocStringsValue = res;
    }
    return this.usedLocStringsValue.has(locStr);
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
  // and the progress text and buttons of the current target language.
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
  // Clear all: the language keeps being translated - it loses its texts and starts from zero, after
  // the confirmation alert. The deletion is one undo transaction (see deleteLocaleStrings).
  // The collaboration plugin's translation guard does not see it: the guard hooks the removal of a
  // row of the multiple-languages locales matrix, and this mode has no such matrix.
  public clearTargetLocaleStrings(): void {
    const locale = this.targetLocale || "";
    if (!locale || this.isDisposed || this.isEditingReadOnly || !surveySettings.showDialog) return;
    // The alert only needs the creator's root element; the options carry it in tests as well.
    showConfirmDialog(<SurveyCreatorModel><any>(this.creatorModel || this.options), {
      category: "danger",
      iconName: "icon-delete-24x24",
      title: editorLocalization.getString("ed.translationClearAllTitle"),
      message: editorLocalization.getString("ed.translationClearAllMessage"),
      applyText: editorLocalization.getString("pe.clear"),
      // survey-core's own "Cancel": the creator has no string of its own for it.
      cancelText: surveyLocalization.getString("cancel", editorLocalization.currentLocale),
      showCloseButton: false,
      onApply: (): boolean => {
        if (!this.isDisposed && (this.targetLocale || "") === locale) {
          this.deleteSurveyLocaleStrings(locale);
          // The target language stays selected, so the panes keep editing it - they are rebuilt
          // over the survey that has no texts for it anymore.
          if (!this.isSideBySideGrid) {
            this.rebuildInstances();
          }
        }
        return true;
      },
      onCancel: (): void => { }
    });
  }
  // Autotranslate all: every used string of the survey that has no text in the target language is
  // sent to the creator's machine translation (onMachineTranslate), from the source language. The
  // results are written in one undo transaction, and the panes, the grid and the counts are
  // refreshed once.
  // While a request is pending the button is disabled: a second click would send (and pay for) the
  // same strings again. A locale switch releases it, so a handler that never answers does not keep
  // the button disabled for good.
  private isAutoTranslating: boolean = false;
  public autoTranslateAll(): void {
    if (this.isDisposed || !this.canTranslateManually || this.isAutoTranslating) return;
    const source = this.sourceLocale || "";
    const target = this.targetLocale || "";
    const items = this.getStringsToAutoTranslate();
    if (items.length === 0) return;
    const survey = this.survey;
    const results: Array<{ item: TranslationItem, text: string }> = [];
    this.setAutoTranslating(true);
    runItemsMachineTranslation(this.options, items, source, target,
      (item: TranslationItem, text: string): void => { results.push({ item: item, text: text }); },
      (): void => {
        this.setAutoTranslating(false);
        // A survey replaced while the request was pending: the strings belong to the old one.
        if (this.survey === survey)this.applyAutoTranslation(target, results);
      });
  }
  private setAutoTranslating(val: boolean): void {
    if (this.isAutoTranslating === val) return;
    this.isAutoTranslating = val;
    this.updateSettingsActions();
  }
  // The used strings of the whole survey with a text to translate from and none in the target
  // language: the ones the progress text counts as not translated. Collected over a fresh tree -
  // the cached one is kept over text edits (see getUsedStringsRoot).
  public getStringsToAutoTranslate(): Array<TranslationItem> {
    const source = this.sourceLocale || "";
    const target = this.targetLocale || "";
    if (!target || source === target || !this.survey) return [];
    return this.createUsedStringsRoot().allLocItems.filter(item =>
      !item.getLocText(target) && !!item.getTextToTranslateFrom(source));
  }
  private applyAutoTranslation(target: string, results: Array<{ item: TranslationItem, text: string }>): void {
    if (this.isDisposed || results.length === 0) return;
    this.runWithoutSurveyReaction(() => {
      this.options.startUndoRedoTransaction("Auto-translate strings: " + target);
      try {
        results.forEach(res => this.performItemLocTextAction(res.item, target, res.text));
      } finally {
        this.options.stopUndoRedoTransaction();
      }
    });
    // The surfaces follow in one go: the grid's cells, or the panes' copies of the written strings
    // (a pane rebuild would lose the scroll position).
    if (this.isSideBySideGrid) {
      this.updateStringsSurveyData();
    } else if (!!this.sourceSurvey) {
      const wasSyncing = this._syncing;
      this._syncing = true;
      try {
        results.forEach(res => this.copiesMap.mirrorIntoCopies(res.item.locString));
      } finally {
        this._syncing = wasSyncing;
      }
      this.onPaneTextChanged();
    }
    // An open dialog shows the written texts too: the writes above bypass the change notifications
    // it follows.
    if (!!this.untranslatedStringsModel)this.untranslatedStringsModel.updateStringsSurveyData();
    if (!!this.elementStringsModel)this.elementStringsModel.updateMatrixData();
    this.resetTranslationCounters();
    this.updateElementTranslationStates();
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
  private get translationProgressQuestion(): QuestionHtmlModel {
    const survey = this.settingsSurvey;
    return !!survey ? <QuestionHtmlModel>survey.getQuestionByName(translationProgressQuestionName) : undefined;
  }
  // The progress text: how many of the survey's used strings the target language already has a text
  // for - plain text, not a link. Empty without a target language. The buttons below it follow the
  // same counts.
  public get translationProgressText(): string {
    const locale = this.targetLocale || "";
    if (!locale || !this.survey) return "";
    const progress = this.getTranslationProgress(locale);
    return editorLocalization.getString("ed.translationProgress")
      .replace("{0}", progress.translated.toString())
      .replace("{1}", progress.total.toString());
  }
  public updateTranslationProgress(): void {
    if (this.isDisposed) return;
    const question = this.translationProgressQuestion;
    if (!!question) {
      question.html = escapeTranslationHtmlText(this.translationProgressText);
    }
    this.updateSettingsActions();
  }
  // Puts the input focus into the open dialog's editor of a string (#8075): the dialog does it for
  // its first untranslated string when it opens (see showElementStringsDialog).
  public focusElementStringsItem(locStr: ILocalizableString): void {
    if (!locStr || !this.elementStringsModel) return;
    // A shown dialog focuses its first focusable element a moment later (the Used / All Strings
    // switch), and that would take the focus from a cell rendered and focused before it. Aimed at
    // the cell's input, the dialog's own focus lands where the request does - and the dialog still
    // gives the focus back to where it was when it closes.
    const inputId = this.elementStringsModel.getItemInputId(locStr);
    if (!!this.elementStringsPopup && !!inputId) {
      this.elementStringsPopup.model.focusFirstInputSelector = "[id=\"" + inputId + "\"]";
    }
    this.elementStringsModel.focusItem(locStr);
  }
  public reset(alwaysReset: boolean = true): void {
    super.reset(alwaysReset);
    this.resetTranslationCounters();
    this.updateElementTranslationStates();
  }
  // The form view's per-element indicator: every target-pane element with a title row (the
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
  // createItemValuesLocale). Counting less here would leave the progress text counting strings in
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
  // The button carries the element's state itself, with a css modifier per state:
  // - none: the language icon alone;
  // - untranslated: the progress "translated/total" and no icon;
  // - translated: the language icon followed by a check. The check is the action's marker icon
  //   (the trailing icon every action renderer draws), so the standard action renderer of every
  //   framework shows both glyphs.
  // It renders without a visible title in two of the three states, so the tooltip is also its
  // accessible name - it follows the state.
  private applyElementStateToAction(action: Action, key: string): void {
    const counts = this.elementCounts[key];
    const state = this.getStateFromCounts(counts);
    const isProgress = state === "untranslated";
    const untranslated = isProgress ? counts.total - counts.translated : 0;
    action.title = isProgress ? counts.translated + "/" + counts.total : "";
    action.showTitle = isProgress;
    action.iconName = isProgress ? undefined : translateActionIconName;
    action.markerIconName = state === "translated" ? translateActionDoneIconName : undefined;
    action.tooltip = isProgress
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
      if (name === "targetLocale" && !oldValue !== !newValue && this.isSideBySideForm && !!this.sourceSurvey) {
        this.rebuildInstances();
      } else {
        this.updateInstanceLocales();
        if (name === "sourceLocale") {
          this.refreshUntranslatedTexts();
        }
        // The dialog survives a switch between two languages: it edits the real survey, and its
        // matrix follows the new locales.
        if (!!this.elementStringsModel) {
          this.elementStringsModel.updateLocales(this.sourceLocale, this.targetLocale);
        }
      }
      this.updateSettingsSurveyValues();
      // The "Untranslated strings" dialog lists the strings of the languages it was opened for.
      this.hideUntranslatedStringsDialog();
      this.setAutoTranslating(false);
      if (name === "targetLocale") {
        // Nothing left to translate into - the open dialog has no target column anymore.
        if (!newValue) {
          this.hideElementStringsDialog();
        }
        this.updateElementTranslationStates();
      }
    }
    if (name === "readOnly") {
      this.updateSettingsActions();
    }
    if (name === "selectedPageName") {
      this.updateInstancePages();
      // The rows of the previous page leave the DOM - their pairs are dropped.
      this.rowEqualizer.scheduleUpdate();
    }
    if (name === "orientation") {
      this.updateScrollMirror();
    }
  }
  // Rebuilds the editing surface after a view change: the grid view builds the strings grid
  // over the current survey, the form view builds the two survey copies.
  private applyView(): void {
    if (this.isDisposed) return;
    this.useSourceTargetColumns = this.isSideBySideGrid;
    if (this.isSideBySideGrid) {
      // Read while root is still the form view's tree.
      const entry = this.getGridEntryPages();
      this.disposeInstances();
      // The group of the page the panes showed is expanded; on the first entry it is the only one.
      if (!!entry.groupPageName)this.stringsTable.markPageExpanded(entry.groupPageName);
      if (this.showAllStrings) {
        this.showAllStrings = false; // its reset builds the grid
      } else {
        this.reset();
      }
      this.applySelectionToGrid(entry.filterPage, entry.groupPageName);
    } else {
      this.applySelectedPageToForm();
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
  // The pages of the form -> grid switch: the page the grid is scoped to when it was left on a page
  // (the selected string's page when one is known, else the page the panes showed), and the page
  // whose group holds the selection on "All Pages" (survey-level strings open the first group).
  private getGridEntryPages(): { filterPage: PageModel, groupPageName: string } {
    const info = this.findSelectedItemInfo();
    const pageName = !!info && !!info.pageName ? info.pageName : this.selectedPageName;
    const page = !!pageName && !!this.survey ? this.survey.getPageByName(pageName) : undefined;
    const pages = !!this.survey ? this.survey.pages : [];
    const firstPageName = pages.length > 0 ? pages[0].name : "";
    const groupPageName = !!info && !info.pageName ? firstPageName : (!!page ? page.name : firstPageName);
    return { filterPage: page, groupPageName: groupPageName };
  }
  // form -> grid: a grid left on "All Pages" comes back on "All Pages", with the group of the
  // selection (or of the page the panes showed) expanded and scrolled into the view; a grid left on
  // a page is scoped to that page. Then the grid cell of the last focused string (when its row is
  // present) gets the input focus.
  private applySelectionToGrid(page: PageModel, groupPageName: string): void {
    // The scope was cleared on entering the form view, so the root covers the whole survey here.
    if (!this.gridLeftOnAllPages && !!page && this.filteredPage !== page) {
      this.filteredPage = page; // the property's onSet rebuilds the grid
    } else if (!this.filteredPage && !!groupPageName) {
      this.stringsTable.scrollGroupIntoView(groupPageName);
    }
    // Re-resolved: the scoping above rebuilt the root tree and the strings survey.
    const scopedInfo = this.findSelectedItemInfo();
    if (!!scopedInfo)this.stringsTable.focusCell(scopedInfo.item.locString);
  }
  // grid -> form: the panes open on the page of the last focused string (or on the grid's
  // page scope). Called before the instances are rebuilt, while root is still the grid tree.
  private applySelectedPageToForm(): void {
    this.gridLeftOnAllPages = !this.filteredPage;
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
  // Remembers the string behind the focused grid cell for the selection sync with the form view.
  protected onSurveyStringsCreated(survey: SurveyModel): void {
    super.onSurveyStringsCreated(survey);
    survey.onFocusInQuestion.add((sender, options) => {
      const item = this.stringsTable.getCellItem(options.question);
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
      // With no target language selected there is nothing to edit: the target pane is not
      // rendered, so its copy is not created either and the source pane is the whole surface.
      if (!!this.targetLocale) {
        this.targetSurvey = this.createInstance(json, "translation_target");
        this.setupSourceEmptySpaces();
      }
      this.buildMappings();
      this.setupUntranslatedTexts();
      this.updateInstanceLocales();
      this.updateInstancePages();
      this.setupLazyRowPairs();
    } finally {
      this._syncing = wasSyncing;
    }
  }
  // The real-survey element an element state key stands for. Resolved by name, so the entry
  // survives a change that replaced the object (an undo, a JSON reload).
  private getRealObjByStateKey(key: string): Base {
    return this.getSurveyObjByStateKey(this.survey, key);
  }
  private getSurveyObjByStateKey(survey: SurveyModel, key: string): Base {
    if (!key || !survey) return undefined;
    if (key === "survey") return survey;
    const index = key.indexOf(":");
    const type = key.substring(0, index);
    const name = key.substring(index + 1);
    if (type === "page") return survey.getPageByName(name);
    if (type === "panel") return survey.getPanelByName(name);
    return survey.getQuestionByName(name);
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
    // The "Untranslated strings" dialog follows a text change made elsewhere (an undo) in its cells;
    // its own edits are filtered out by its syncing flag. A structural change closes it: its rows
    // are the strings of the survey as it was, and a rebuild would give it a survey the shown
    // dialog does not render (the element dialog closes when its element goes, for the same reason).
    if (!!this.untranslatedStringsModel) {
      if (!this.getLocStrByName(obj, propName)) {
        this.hideUntranslatedStringsDialog();
      } else {
        this.untranslatedStringsModel.onCreatorSurveyPropertyChanged(obj, propName);
      }
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
    this.onPaneTextChanged();
  }
  // A text of a pane changed its length. The equalizer's observer sees a row that grows, but
  // not one whose text got shorter - the row is held at the pair's min-height and its box does
  // not change - so every text change asks for a recomputation explicitly.
  private onPaneTextChanged(): void {
    this.rowEqualizer.scheduleUpdate();
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
    this.onPaneTextChanged();
  }
  // The grid can be scoped to a single page; CSV export must still cover the whole survey,
  // exactly like the form view does.
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
  // The "Untranslated strings" dialog (Translate manually): the used strings of the whole survey that
  // have no text in the target language when it opens, in the grid view's table (see
  // TranslationUntranslatedStrings). It replaces the multiple-languages machine-translation dialog in
  // this mode. Its edits are written at once, so it has a single closing button and no cancel.
  @property() untranslatedStringsModel: TranslationUntranslatedStrings;
  private untranslatedStringsPopup: PopupBaseViewModel;
  public createUntranslatedStringsModel(): TranslationUntranslatedStrings {
    const model = new TranslationUntranslatedStrings(this.survey, this.options, this.sourceLocale || "", this.targetLocale || "");
    model.translationStringVisibilityCallback = this.translationStringVisibilityCallback;
    model.readOnly = this.readOnly;
    model.reset();
    return model;
  }
  public showUntranslatedStringsDialog(): void {
    if (this.isDisposed || !this.canTranslateManually) return;
    this.hideUntranslatedStringsDialog();
    const model = this.createUntranslatedStringsModel();
    this.untranslatedStringsModel = model;
    // No dialog implementation at all (a headless environment): the model is still the open one.
    if (!surveySettings.showDialog) return;
    // Creator UI, not survey content: built in the creator's locale (see showElementStringsDialog).
    const prevLocale = surveyLocalization.currentLocale;
    surveyLocalization.currentLocale = editorLocalization.currentLocale;
    const popup: PopupBaseViewModel = surveySettings.showDialog(<IDialogOptions>{
      componentName: "survey-widget",
      data: { model: model.stringsSurvey },
      title: editorLocalization.getString("ed.translationDialogTitle"),
      showCloseButton: true,
      onApply: (): boolean => true,
      onHide: () => this.onUntranslatedStringsDialogHidden(model),
      cssClass: "svc-property-editor st-translation-dialog st-untranslated-strings-dialog svc-creator-popup",
      displayMode: this.options.isMobileView ? "overlay" : "popup"
    }, this.options.rootElement);
    this.untranslatedStringsPopup = popup;
    // A single Done: the apply action (the primary one); the other footer actions are dropped.
    const apply = popup.footerToolbar.getActionById("apply");
    const actions = popup.footerToolbar.actions;
    actions.splice(0, actions.length, apply);
    apply.title = editorLocalization.getString("pe.doneEditing");
    popup.locale = editorLocalization.locale;
    surveyLocalization.currentLocale = prevLocale;
  }
  private onUntranslatedStringsDialogHidden(model: TranslationUntranslatedStrings): void {
    if (this.untranslatedStringsModel !== model) return;
    this.untranslatedStringsPopup = undefined;
    this.disposeUntranslatedStringsModel();
  }
  public hideUntranslatedStringsDialog(): void {
    const popup = this.untranslatedStringsPopup;
    this.untranslatedStringsPopup = undefined;
    if (!!popup) popup.model.hide();
    this.disposeUntranslatedStringsModel();
  }
  private disposeUntranslatedStringsModel(): void {
    const model = this.untranslatedStringsModel;
    if (!model) return;
    this.untranslatedStringsModel = undefined;
    model.dispose();
    // Every edit has already reached the panes and the counts; the title actions are refreshed
    // once more, as when an element strings dialog closes.
    this.updateElementTranslationStates();
  }
  // The vertical arrangement gives each pane its own scrollbar and keeps them in sync by
  // mirroring scrollTop. The UI components pass their pane elements here in every arrangement;
  // passing null/undefined (on unmount) detaches the listener. In the horizontal arrangement
  // the panes share one scroll container (see translation.scss) and do not scroll on their
  // own, so no listener is attached there.
  public setSourceScrollElement(element: HTMLElement): void {
    this.setScrollElement(0, element);
  }
  public setTargetScrollElement(element: HTMLElement): void {
    this.setScrollElement(1, element);
  }
  private scrollElements: Array<HTMLElement> = [undefined, undefined];
  private scrollHandlers: Array<() => void> = [undefined, undefined];
  public get isScrollMirrorEnabled(): boolean {
    return this.orientation === "vertical";
  }
  private setScrollElement(index: number, element: HTMLElement): void {
    const prev = this.scrollElements[index];
    if (prev === element) return;
    this.detachScrollHandler(index);
    this.scrollElements[index] = element || undefined;
    this.attachScrollHandler(index);
  }
  private attachScrollHandler(index: number): void {
    const element = this.scrollElements[index];
    if (!element || !this.isScrollMirrorEnabled || !!this.scrollHandlers[index]) return;
    const handler = (): void => this.syncScroll(index);
    this.scrollHandlers[index] = handler;
    element.addEventListener("scroll", handler);
  }
  private detachScrollHandler(index: number): void {
    const element = this.scrollElements[index];
    const handler = this.scrollHandlers[index];
    if (!!element && !!handler) element.removeEventListener("scroll", handler);
    this.scrollHandlers[index] = undefined;
  }
  // An orientation change: the mirror follows it on the elements already registered.
  private updateScrollMirror(): void {
    [0, 1].forEach(index => {
      this.detachScrollHandler(index);
      this.attachScrollHandler(index);
    });
  }
  // Mirrors scrollTop into the other pane. The mirrored pane's echo scroll event finds the
  // values already equal and stops, so no re-entrancy flag is needed.
  private syncScroll(index: number): void {
    const from = this.scrollElements[index];
    const to = this.scrollElements[1 - index];
    if (!from || !to || to.scrollTop === from.scrollTop) return;
    to.scrollTop = from.scrollTop;
  }
  // The rows of the two panes are equalized pair by pair: a question root, and the title and
  // description rows of the survey header, of a page and of a panel. Containers (pages, panels,
  // the rows of the flow layout) are never equalized - padding a panel and its children would
  // double-pad; leaf rows only, the parent heights follow. The nodes come from the surveys' own
  // render hooks and are paired by the element name / row name, which are the same in both
  // copies - and a row rendered on one side only (a panel without a title row) has no pair.
  private setupRowEqualization(survey: SurveyModel, side: number): void {
    survey.onAfterRenderQuestion.add((_, options) => {
      if (isContentElement(options.question)) return;
      this.rowEqualizer.setNode("question:" + options.question.name, side, options.htmlElement);
    });
    survey.onAfterRenderHeader.add((_, options) => {
      this.setHeaderRowNodes("survey", side, options.htmlElement, ".sd-title", ".sd-description", undefined);
    });
    survey.onAfterRenderPage.add((_, options) => {
      this.setHeaderRowNodes("page:" + options.page.name, side, options.htmlElement, ".sd-page__title", ".sd-page__description", ".sd-page");
    });
    survey.onAfterRenderPanel.add((_, options) => {
      if (isContentElement(options.panel)) return;
      this.setHeaderRowNodes("panel:" + options.panel.name, side, options.htmlElement, ".sd-panel__title", ".sd-panel__description", ".sd-panel");
    });
  }
  private setHeaderRowNodes(key: string, side: number, root: HTMLElement, titleSelector: string,
    descriptionSelector: string, containerSelector: string): void {
    if (!root || typeof root.querySelectorAll !== "function") return;
    const title = this.findOwnRowNode(root, titleSelector, containerSelector);
    const description = this.findOwnRowNode(root, descriptionSelector, containerSelector);
    if (!!title)this.rowEqualizer.setNode(key + ":title", side, title);
    if (!!description)this.rowEqualizer.setNode(key + ":description", side, description);
  }
  // The row of the container itself, not of a nested one (a panel inside a panel).
  private findOwnRowNode(root: HTMLElement, selector: string, containerSelector: string): HTMLElement {
    const nodes = root.querySelectorAll(selector);
    for (let i = 0; i < nodes.length; i++) {
      const node = <HTMLElement>nodes[i];
      if (!containerSelector || typeof node.closest !== "function" || node.closest(containerSelector) === root) return node;
    }
    return undefined;
  }
  // The lazy rendering decides row by row whether a row is rendered or still a skeleton, from
  // the row's own position - and a skeleton has no question root to pair, so a row rendered in
  // one pane facing a skeleton in the other is a mismatch the equalizer cannot see. The rows of
  // the two copies are paired here (the same JSON, the same row set) and a row that renders
  // makes its counterpart render too.
  private setupLazyRowPairs(): void {
    this.clearLazyRowPairs();
    const source = this.sourceSurvey;
    const target = this.targetSurvey;
    if (!source || !target) return;
    const pairRows = (sourceContainer: PanelModelBase, targetContainer: PanelModelBase): void => {
      const sourceRows = sourceContainer.rows;
      const targetRows = targetContainer.rows;
      const count = Math.min(sourceRows.length, targetRows.length);
      for (let i = 0; i < count; i++) {
        this.pairLazyRows(sourceRows[i], targetRows[i]);
      }
    };
    source.pages.forEach(page => {
      const targetPage = target.getPageByName(page.name);
      if (!!targetPage) pairRows(page, targetPage);
    });
    source.getAllPanels().forEach(panelObj => {
      const panel = <PanelModel>panelObj;
      if (isContentElement(panel)) return;
      const targetPanel = <PanelModel>target.getPanelByName(panel.name);
      if (!!targetPanel) pairRows(panel, targetPanel);
    });
  }
  private pairLazyRows(sourceRow: QuestionRowModel, targetRow: QuestionRowModel): void {
    const link = (from: QuestionRowModel, to: QuestionRowModel): void => {
      from.registerFunctionOnPropertyValueChanged("isNeedRender", () => {
        if (from.isNeedRender && !to.isNeedRender) to.isNeedRender = true;
      }, lazyRowPairKey);
    };
    link(sourceRow, targetRow);
    link(targetRow, sourceRow);
    if (sourceRow.isNeedRender !== targetRow.isNeedRender) {
      sourceRow.isNeedRender = true;
      targetRow.isNeedRender = true;
    }
    this.lazyRowPairs.push([sourceRow, targetRow]);
  }
  private clearLazyRowPairs(): void {
    this.lazyRowPairs.forEach(pair => pair.forEach(row => {
      row.unRegisterFunctionOnPropertyValueChanged("isNeedRender", lazyRowPairKey);
    }));
    this.lazyRowPairs = [];
  }
  public dispose(): void {
    this.setSourceScrollElement(undefined);
    this.setTargetScrollElement(undefined);
    this.rowEqualizer.dispose();
    this.hideElementStringsDialog();
    this.hideUntranslatedStringsDialog();
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
    // A collapsed list is a shorter row (see onPaneTextChanged).
    this.rowEqualizer.scheduleUpdate();
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
      // Runs before onSurveyInstanceCreated, so its handlers can override what the panes set up
      // (getRendererForString and the like), as they can for the designer survey.
      if (reason === "translation_source")this.setupSourceSurvey(survey);
      if (reason === "translation_target")this.setupTargetSurvey(survey);
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
    this.setupRowEqualization(survey, equalizerSourceSide);
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
    this.setupRowEqualization(survey, equalizerTargetSide);
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
    // Read by the string editor of a translation surface: it renders an untranslated string muted.
    (<any>survey).isUntranslatedString = (locStr: ILocalizableString): boolean => this.isTargetStringUntranslated(locStr);
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
      iconName: translateActionIconName,
      iconSize: "auto",
      showTitle: false,
      // The progress is the point of the button, and a title row has little room for actions -
      // a narrow element (a question that shares its row, a pane resized down) makes its title
      // bar shrink its actions, and a shrunk action renders as its icon alone (see
      // Action.hasTitle). The row wraps its text instead.
      disableShrink: true,
      // For the same reason it never goes into the title bar's "more" menu: its width changes with
      // the state, and a title bar measures its actions once.
      disableHide: true,
      appearance: Object.assign({}, translateActionAppearance),
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
    toolbar.setActionsAppearance(Object.assign({}, translateActionAppearance));
    toolbar.locOwner = survey;
    toolbar.containerCss = "sv-action-title-bar";
    toolbar.setItems([this.createTranslateAction("svc-translate-survey",
      () => this.showSurveyStringsDialog(), survey)]);
    toolbar.flushUpdates();
    this.surveyTitleToolbar = toolbar;
    Object.defineProperty(survey, "hasTitleActions", { get: (): boolean => true, configurable: true });
    Object.defineProperty(survey, "hasVisibleTitleActions", { get: (): boolean => true, configurable: true });
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
    // The dialog opens in the mode the user chose the last time (its Used / All Strings switch);
    // "used strings only" - the strings that have something to translate - is the default.
    model.showAllElementStrings = this.showAllElementStrings;
    model.reset();
    // An element without stored strings (e.g. a page with an empty title) would show an empty
    // table - fall back to all strings so the dialog is never a dead end. The fallback is not
    // the user's choice: it is not stored, and Used Strings is disabled, since choosing it would
    // bring the empty table back.
    if (model.isEmpty) {
      model.forceShowAllElementStrings();
    }
    model.onShowAllStringsChanged = (value: boolean): void => {
      this.showAllElementStrings = value;
      if (!!this.onShowAllElementStringsChanged)this.onShowAllElementStringsChanged(value);
    };
    return model;
  }
  // The all/used strings mode of the element dialogs: chosen by a dialog's Used / All Strings switch
  // and kept for the next element. A plain field, not a survey property - nothing renders it, it
  // only seeds the next dialog. The plugin follows the callback to carry it
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
  private elementStringsPopup: PopupBaseViewModel;
  // The survey the dialog renders: the switch and the strings table (see TranslationElementStrings).
  public get elementStringsSurvey(): SurveyModel {
    return !!this.elementStringsModel ? this.elementStringsModel.dialogSurvey : undefined;
  }
  // Only one element's strings are open at a time: the dialog is modal, and opening one while
  // another one is up replaces it.
  public showElementStringsDialog(realObj: Base): void {
    if (!realObj || this.isDisposed || this.isSideBySideGrid || !this.targetSurvey) return;
    if (!this.getElementStateKey(realObj)) return;
    this.hideElementStringsDialog();
    const model = this.createElementStringsModel(realObj);
    this.elementStringsModel = model;
    const survey = model.buildDialogSurvey();
    // No dialog implementation at all (a headless environment): the model is still the open
    // one, so the tab keeps working through its API.
    if (!surveySettings.showDialog) return;
    // The dialog is creator UI, not survey content: it is built while the library's current
    // locale is the creator's one, so its own strings (the footer button, the close icon)
    // are not resolved in the language being translated into.
    const prevLocale = surveyLocalization.currentLocale;
    surveyLocalization.currentLocale = editorLocalization.currentLocale;
    try {
      const popup: PopupBaseViewModel = surveySettings.showDialog(<IDialogOptions>{
        componentName: "survey-widget",
        data: { model: survey },
        // The element title, as plain text (see TranslationElementStrings.elementTitleText).
        title: model.elementTitleText,
        showCloseButton: true,
        onApply: (): boolean => true,
        onHide: () => this.onElementStringsDialogHidden(model),
        cssClass: "svc-property-editor st-translation-dialog st-element-strings-dialog svc-creator-popup",
        displayMode: this.options.isMobileView ? "overlay" : "popup"
      }, this.options.rootElement);
      this.elementStringsPopup = popup;
      // The cells write at once, so close and Done do the same: a single Done, the apply action (the
      // primary one); the other footer actions are dropped. A custom dialog without it keeps its own.
      const apply = popup.footerToolbar.getActionById("apply");
      if (!!apply) {
        const actions = popup.footerToolbar.actions;
        actions.splice(0, actions.length, apply);
        apply.title = editorLocalization.getString("pe.doneEditing");
      }
      popup.locale = editorLocalization.locale;
    } finally {
      surveyLocalization.currentLocale = prevLocale;
    }
    // The first string the element's translate action counts as untranslated: the used strings, as
    // in its count - in the All Strings mode the first empty row can be a string with nothing to
    // translate from.
    this.focusElementStringsItem(model.getFirstUntranslatedLocString(locStr => this.isUsedLocString(locStr)));
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
    this.elementStringsModel = undefined;
    // The model disposes its survey, and a focus request it has not served yet.
    model.dispose();
    // The user has usually just translated something - the freed button shows the new count.
    this.updateElementTranslationStates();
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
    // The rendered rows of the disposed copies leave the DOM - no pairs, natural heights.
    this.clearLazyRowPairs();
    this.rowEqualizer.clear();
    if (!!this.surveyTitleToolbar) {
      this.surveyTitleToolbar.dispose();
      this.surveyTitleToolbar = undefined;
    }
    [this.sourceSurvey, this.targetSurvey].forEach(survey => {
      if (!survey) return;
      survey.getRendererForString = undefined;
      survey.getRendererContextForString = undefined;
      survey.onPropertyValueChangedCallback = undefined;
      (<any>survey).isUntranslatedString = undefined;
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
    // The texts of the target pane changed their length - the pairs are re-measured.
    this.rowEqualizer.scheduleUpdate();
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
  // A target-pane string with no text of its own in the target language shows the text being
  // translated, muted (see isTargetStringUntranslated). survey-core falls back to the default
  // language, which is the source only while the source is the default language - for any other
  // source the text is taken from the source language here. A string without a source text
  // keeps survey-core's fallback. The string's own text callback (a question title shows the
  // name when it has no text, a choice its value) runs on the result, as before.
  private setupUntranslatedTexts(): void {
    if (!this.targetSurvey) return;
    this.getEditableLocStrCopies().forEach(locStr => {
      const prevCallback = locStr.onGetTextCallback;
      const wasPure = !prevCallback || !!locStr.isTextCallbackPure;
      locStr.onGetTextCallback = (text: string, nonProcessedText?: string): string => {
        const sourceText = this.getUntranslatedSourceText(locStr);
        if (!!sourceText) {
          text = sourceText;
          nonProcessedText = sourceText;
        }
        return !!prevCallback ? prevCallback(text, nonProcessedText) : text;
      };
      // The callback reads the locales of this model, never a survey value.
      locStr.isTextCallbackPure = wasPure;
    });
  }
  // The rules are shared with the grid view (TranslationItem.getUntranslatedText). A default-language
  // source needs no substitution: survey-core already shows its text. The copy's own target text
  // is checked too, since that is what the pane renders.
  private getUntranslatedSourceText(locStr: LocalizableString): string {
    const source = this.sourceLocale || "";
    const target = this.targetLocale || "";
    if (!target || isDefaultLocale(source) || !!locStr.getLocaleText(target)) return "";
    const item = this.copiesMap.getItemByEditableCopy(locStr);
    return !!item ? item.getUntranslatedText(target, source) : "";
  }
  // A string of the target pane that has no text of its own in the target language: the pane
  // shows the source text in its place, and the string editor renders it muted
  // (svc-string-editor--untranslated) until a translation is typed in. These are the used
  // strings - the ones the element's translate action counts, so a muted text and the action's
  // state agree (rating values, for example, are not counted) - and every string that shows a
  // source text in place of its own: the used-strings tree is kept over text edits, so a string
  // that got its first text a moment ago is not in it yet, and its shown text must not pass for
  // a translation (the string editor does not store it on blur).
  public isTargetStringUntranslated(locStr: ILocalizableString): boolean {
    const target = this.targetLocale || "";
    if (!target || !this.targetSurvey) return false;
    const item = this.copiesMap.getItemByEditableCopy(locStr);
    if (!item || !!locStr.getLocaleText(target)) return false;
    return this.isUsedLocString(item.locString) || !!this.getUntranslatedSourceText(<LocalizableString>locStr);
  }
  // The mapped strings of the target pane that render a text (an ILocalizableString can also be
  // a LocalizableStrings, a list of texts such as a question's dataList).
  private getEditableLocStrCopies(): Array<LocalizableString> {
    return <Array<LocalizableString>>this.copiesMap.getEditableCopies().filter(copy => copy instanceof LocalizableString);
  }
  // A source language change re-renders the untranslated target strings, which show its texts.
  private refreshUntranslatedTexts(): void {
    if (!this.targetSurvey) return;
    const wasSyncing = this._syncing;
    this._syncing = true;
    try {
      this.getEditableLocStrCopies().forEach(locStr => locStr.strChanged());
    } finally {
      this._syncing = wasSyncing;
    }
    this.rowEqualizer.scheduleUpdate();
  }
  // Without a target pane no copy is editable - the mapping is built with the source copy alone,
  // so the real survey's changes still mirror into it.
  private buildMappings(): void {
    const editableRoot = !!this.targetSurvey ? this.createCopyRoot(this.targetSurvey) : null;
    this.copiesMap.build(this.root, editableRoot, this.createCopyRoot(this.sourceSurvey));
  }
  private createCopyRoot(survey: SurveyModel): TranslationGroup {
    // Built by the constructor; see TranslationBase.reset for why setAsRoot needs no rebuild.
    const root = new TranslationGroup("survey", survey, this);
    root.setAsRoot();
    return root;
  }
}

// The model of the element strings dialog: a translation scoped to a single element of the real
// survey (the survey itself, a page, a panel or a question). Its survey is the grid view's table in
// the "element" layout (String / Source / Target, no groups), with the Used Strings / All Strings
// switch above the rows. The rows bind to the real localizable strings (a column's choices are the
// column templateQuestion's own items), never to the pane copies, and the cells write at once.
export class TranslationElementStrings extends TranslationBase {
  constructor(survey: SurveyModel, private elementValue: Base, options: ISurveyCreatorOptions = null) {
    super(survey, options, true);
  }
  public get element(): Base {
    return this.elementValue;
  }
  // The title of the element the dialog edits, in the language it is translated from (not the edited
  // survey's current language, which is the target one), then in the default language, as the
  // survey shows a missing translation. Without a title: the element's name, or the survey's type name.
  public get elementTitle(): string {
    const element = <any>this.element;
    const locTitle: LocalizableString = element.locTitle;
    const text = !!locTitle ? locTitle.getLocaleText(this.sourceLocale || "") || locTitle.getLocaleText("") : "";
    if (!!text) return text;
    return element === <any>this.survey ? editorLocalization.getString("ed.surveyTypeName") : element.name;
  }
  // The dialog title. A popup title is plain text, so a title the application renders as markdown
  // (through the markdown event of the edited survey) shows the text of that markup, not its syntax.
  public get elementTitleText(): string {
    const text = this.elementTitle;
    const html = (<ILocalizableOwner><any>this.element).getMarkdownHtml(text, "title");
    return !!html ? getHtmlText(html, text) : text;
  }
  // Set by the owner - the all/used strings choice is kept for the next element.
  public onShowAllStringsChanged: (value: boolean) => void;
  protected createStringsTable(): TranslationTable {
    return new TranslationTable(this, { layout: "element" });
  }
  // An untranslated target shows the text it is translated from, muted, as in the grid view.
  public getStringsCellPlaceholder(item: TranslationItem, columnName: string): string {
    return getUntranslatedTargetPlaceholder(this, item, columnName) || super.getStringsCellPlaceholder(item, columnName);
  }
  // The dialog's survey, built once by buildDialogSurvey. The strings survey of the base class is
  // never built for this model (see hasStringsSurveyUI): a shown dialog keeps rendering the survey it
  // was opened with, so the filter switch rebuilds the rows inside it (see reset).
  private dialogSurveyValue: SurveyModel;
  public get dialogSurvey(): SurveyModel {
    return this.dialogSurveyValue;
  }
  protected get hasStringsSurveyUI(): boolean {
    return false;
  }
  // onSurveyInstanceCreated gets the reason (and so the area) the dialog has always had.
  public buildDialogSurvey(): SurveyModel {
    if (!this.dialogSurveyValue && !this.isDisposed) {
      this.dialogSurveyValue = this.stringsTable.createSurvey(this.root, (survey: SurveyModel): void => {
        // A dialog holds a few strings: every row renders at once, so a string can get the focus.
        survey.lazyRenderEnabled = false;
        survey.pages[0].addElement(this.createStringsFilterQuestion(), 0);
        survey.onValueChanged.add(this.onDialogSurveyValueChanged);
      }, undefined, "translation_element_strings");
    }
    return this.dialogSurveyValue;
  }
  // The Used Strings / All Strings switch: a button group, which is a radio group for the keyboard.
  // An element with no stored strings shows all of them and cannot switch back: the used-strings list
  // is empty there (see TranslationSideBySide.createElementStringsModel). The choice is disabled by
  // its enableIf, because survey-core enables every choice without one when it runs the conditions.
  private createStringsFilterQuestion(): QuestionButtonGroupModel {
    const question = <QuestionButtonGroupModel>Serializer.createClass("buttongroup");
    question.name = translationStringsFilterName;
    // The title is not shown, but it is the group's accessible name (a hidden title falls back to the name).
    question.title = editorLocalization.getString("ed.translationStringsFilter");
    question.titleLocation = "hidden";
    // A mode is always chosen: in a narrow dialog the switch renders as a dropdown, which could be cleared.
    question.allowClear = false;
    const used = new ItemValue(translationStringsFilterUsed, editorLocalization.getString("ed.translationUsedStrings"));
    if (!this.hasUsedStrings) used.enableIf = "false";
    const all = new ItemValue(translationStringsFilterAll, editorLocalization.getString("ed.translationShowAllStrings"));
    question.choices = [used, all];
    question.value = this.showAllElementStrings ? translationStringsFilterAll : translationStringsFilterUsed;
    return question;
  }
  public get stringsFilterQuestion(): QuestionButtonGroupModel {
    const survey = this.dialogSurveyValue;
    return !!survey ? <QuestionButtonGroupModel>survey.getQuestionByName(translationStringsFilterName) : undefined;
  }
  private onDialogSurveyValueChanged = (_: SurveyModel, options: any): void => {
    if (options.name !== translationStringsFilterName || this.isDisposed) return;
    this.showAllElementStrings = options.value === translationStringsFilterAll;
  };
  // The first row whose target has no text of its own, among the strings isCounted accepts: the dialog
  // puts the focus there when it opens.
  public getFirstUntranslatedLocString(isCounted?: (locStr: ILocalizableString) => boolean): ILocalizableString {
    const target = this.targetLocale || "";
    if (!target) return undefined;
    const item = this.stringsTable.rowItems.filter(rowItem =>
      !rowItem.locString.getLocaleText(target) && (!isCounted || isCounted(rowItem.locString)))[0];
    return !!item ? item.locString : undefined;
  }
  // The dialogs follow one another, each with a model of its own: the id space is numbered across all
  // of them, so a dialog that is still leaving never shares an input id with the one replacing it.
  private static dialogSurveyCount = 0;
  protected makeSurveyIdSpaceUnique(survey: SurveyModel): void {
    survey.elementIdPrefix = (survey.elementIdPrefix || "") + (++TranslationElementStrings.dialogSurveyCount) + "-";
  }
  // Puts the input focus into the dialog's editor of a string: the target cell of its row.
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
  // The id of the input of the dialog's editor of a string.
  public getItemInputId(locStr: ILocalizableString): string {
    const question = this.getItemCellQuestion(locStr);
    return !!question ? question.inputId : undefined;
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
    return !!locStr && !!this.dialogSurveyValue ? this.stringsTable.getTargetCellQuestion(locStr) : undefined;
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
  // Cleared when the element has no stored strings and the dialog fell back to the
  // all-strings mode (see createElementStringsModel).
  public hasUsedStrings: boolean = true;
  // The all/used strings filter of the element dialogs - deliberately not the base
  // showAllStrings, which is the strings grid's own reactive filter (the tab toolbar drives it,
  // and its onSet resets the model behind the caller's back). This one belongs to the element
  // dialogs alone: it is a plain field, it applies the change itself in one step, and its
  // value is handed to the owner to open the next element's dialog with.
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
    // Before the first reset there is no tree and no survey to rebuild yet.
    if (!!this.root) {
      this.reset();
    }
    // A switch made through the model, not by the button group, shows on the button group too. Its
    // value change comes back to the setter above, which finds nothing to do.
    const question = this.stringsFilterQuestion;
    if (!!question) question.value = val ? translationStringsFilterAll : translationStringsFilterUsed;
  }
  // The all/used strings switch rebuilds the tree; the rows of the shown survey follow it.
  public reset(alwaysReset: boolean = true): void {
    super.reset(alwaysReset);
    if (!!this.dialogSurveyValue) {
      this.stopFocusCell();
      this.stringsTable.refill(this.root);
    }
  }
  // A real-survey string edited elsewhere (Autotranslate all, undo/redo, the panes) shows up in the
  // cells right away - the dialog and the panes edit the same strings.
  public updateMatrixData(): void {
    this.updateStringsSurveyData();
  }
  // A locale switch does not rebuild the panes (as long as a target language stays selected), so the
  // open dialog follows it here: the table rebuilds its locale columns on either change (see
  // TranslationBase.onPropertyValueChanged). The rows are the element's strings and belong to no
  // language.
  public updateLocales(sourceLocale: string, targetLocale: string): void {
    if (this.isDisposed) return;
    this.sourceLocale = sourceLocale;
    this.targetLocale = targetLocale;
  }
  // Whether the dialog covers the string - the owner asks before it treats an unmapped string change
  // as a structural one (see onCreatorSurveyPropertyChangedCore).
  public hasLocString(locStr: ILocalizableString): boolean {
    if (!locStr || !this.root) return false;
    return this.root.allLocItems.some(item => item.locString === locStr);
  }
  public dispose(): void {
    this.stopFocusCell();
    const survey = this.dialogSurveyValue;
    this.dialogSurveyValue = undefined;
    if (!!survey) survey.onValueChanged.remove(this.onDialogSurveyValueChanged);
    super.dispose();
    if (!!survey) survey.dispose();
  }
}
