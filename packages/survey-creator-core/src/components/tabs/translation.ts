import {
  property, Base, SurveyModel, LocalizableString, surveyLocalization, ILocalizableString,
  ItemValue, FunctionFactory, Action, IAction,
  ComputedUpdater, createDropdownActionModel, QuestionMatrixDynamicModel,
  QuestionMatrixDropdownModel,
  PopupBaseViewModel, IDialogOptions, settings as surveySettings,
  CssClassBuilder,
  createPopupModelWithListModel,
  MatrixDynamicRowModel
} from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { ISurveyCreatorOptions, settings } from "../../creator-settings";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import "./translation.scss";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { updateMatrixRemoveAction, updateMatixActionsAppearance } from "../../utils/actions";
import {
  TranslationBase, TranslationItem, createMachineTranslationAction,
  createStringsHeaderNavigationBar, runItemsMachineTranslation
} from "./translation-base";

export * from "./translation-base";

let isLocaleEnableIfExecuting: boolean;
function localeEnableIf(params: any): boolean {
  if (isLocaleEnableIfExecuting || !this.question || !this.row) return false;
  const matrix = this.question.parentQuestion;
  if (!matrix) return false;
  isLocaleEnableIfExecuting = true;
  const index = matrix.visibleRows.indexOf(this.row);
  isLocaleEnableIfExecuting = false;
  if (index < 0) return false;
  const val = matrix.value;
  if (!Array.isArray(val)) return true;
  const rowVal = val[index];
  if (!rowVal) return true;
  const isDefault = !rowVal.name;
  if (rowVal.isSelected) {
    // A selected locale can be unselected, unless it is the default locale and the only selected one.
    if (!isDefault) return true;
    let selectedCount = 0;
    for (let i = 0; i < val.length; i++) {
      if (val[i].isSelected) selectedCount++;
    }
    return selectedCount > 1;
  }
  if (isDefault) return true; // the default locale can always be shown
  let selectedCounter = 0;
  for (let i = 0; i < val.length; i++) {
    if (!!val[i].name && val[i].isSelected) selectedCounter++;
  }
  return selectedCounter < settings.translation.maximumSelectedLocales;
}

FunctionFactory.Instance.register("localeEnableIf", localeEnableIf);

// The all-languages mode of the Translation tab: the strings grid shows a column per selected
// locale, the property grid hosts the languages matrix with visibility checkboxes and the
// add-language dropdown. Also the base of the machine-translation dialog model (see
// TranslationForEditor), whose single-locale edit mode stores its state in the same matrix.
export class Translation extends TranslationBase {
  private addLanguageAction: Action;
  public chooseLanguageActions: Array<IAction> = [];

  constructor(
    survey: SurveyModel,
    options: ISurveyCreatorOptions = null,
    hasUI: boolean = true
  ) {
    super(survey, options, hasUI);
    this.setupToolbarItems();
    this.updateChooseLanguageActions();
  }
  @property() canMergeLocaleWithDefault: boolean;
  @property() mergeLocaleWithDefaultText: string;
  private editLocale: string;
  private editModeValue: boolean = false;
  public getEditLocale(): string { return this.editLocale; }
  public setEditMode(locale: string): void {
    this.editModeValue = true;
    this.editLocale = locale;
    this.addLocale(locale);
  }
  public get isEditMode(): boolean { return this.editModeValue; }
  public applyEditLocale(): void {
    if (!this.isEditMode || !this.root) return;
    this.root.applyEditLocale(this.editLocale);
  }
  public get localesQuestion(): QuestionMatrixDynamicModel {
    return <QuestionMatrixDynamicModel>(
      this.settingsSurvey.getQuestionByName("locales")
    );
  }
  private removingLocale: string;
  protected createSettingsSurvey(): SurveyModel {
    const json = this.getSettingsSurveyJSON();
    setSurveyJSONForPropertyGrid(json);
    const res = this.options.createSurvey(json, "translation_settings", this, (survey: SurveyModel): void => {
      survey.css = propertyGridCss;
      survey.css.root += " st-properties";
      survey.rootCss += " st-properties";
    });
    res.onValueChanged.add((sender, options) => {
      if (options.name == "locales") {
        this.updateLocales();
      }
    });
    res.onMatrixCellValueChanged.add((sender, options) => {
      if (options.question === this.localesQuestion) {
        // Runs after the cell change is applied, so re-selecting the default locale updates the rendered cell.
        this.ensureSelectedLocale();
      }
    });
    res.onMatrixRenderRemoveButton.add((sender, options) => {
      const val = options.question.value;
      if (Array.isArray(val) && options.rowIndex >= 0 && options.rowIndex < val.length && !val[options.rowIndex].name) {
        options.allow = false; // the default locale can't be removed
      }
    });
    res.onMatrixRowRemoving.add((sender, options) => {
      this.removingLocale = options.question.value[options.rowIndex].name;
    });
    res.onMatrixRowRemoved.add((sender, options) => {
      if (!!this.removingLocale) {
        this.deleteLocaleStrings(this.removingLocale);
      }
    });
    res.onGetQuestionTitleActions.add((sender, options) => {
      options.actions = [this.addLanguageAction];
    });
    res.onGetMatrixRowActions.add((sender, options) => {
      const q = options.question;
      let locale: string | undefined = undefined;
      if (Array.isArray(q.value)) {
        const rowIndex = q.visibleRows.indexOf(options.row);
        if (rowIndex >= 0 && rowIndex < q.value.length) {
          locale = q.value[rowIndex].name;
        }
      }
      // The default locale's remove action is already suppressed by onMatrixRenderRemoveButton, so this is a no-op for it.
      updateMatrixRemoveAction(<QuestionMatrixDynamicModel>q, options.actions, <MatrixDynamicRowModel>options.row);
      if (this.options.getHasMachineTranslation() && locale !== undefined) {
        options.actions.splice(0, 0, new Action({
          iconName: "icon-language",
          iconSize: "auto",
          locTooltipName: "ed.translateUsigAI",
          visibleIndex: 5,
          location: "end",
          action: () => this.showTranslationEditor(locale)
        }));
      }
      updateMatixActionsAppearance(options.actions);
    });
    return res;
  }

  @property({ defaultValue: true }) private isChooseLanguageEnabled: boolean;

  private calcIsChooseLanguageEnabled() {
    this.isChooseLanguageEnabled = this.chooseLanguageActions.filter((item: IAction) => item.visible).length > 0;
  }
  private refreshAddLanguageActionListModel() {
    const listModel = this.addLanguageAction.data;
    if (listModel) {
      listModel.refresh();
    }
  }

  private updateLocales() {
    // The side-by-side settings survey has no locales question - the locale columns are driven
    // by sourceLocale/targetLocale there, not by this list.
    if (!this.localesQuestion) return;
    // Ordered list of the locales (including the default one represented as "") that are shown as columns.
    const selected = this.getOrderedLocales(true);
    // Persist the full order (including the default locale and its position) so it can be restored on reset.
    this.options.translationLocalesOrder = this.getOrderedLocales(false);
    this.locales = selected;
    this.canMergeLocaleWithDefault = this.hasLocale(this.defaultLocale);
    this.localesQuestion.allowRowReorder = Array.isArray(this.localesQuestion.value) && this.localesQuestion.value.length > 1;
  }
  private getSettingsSurveyJSON(): any {
    return {
      elements: [
        {
          type: "matrixdynamic",
          name: "locales",
          title: editorLocalization.getString("ed.translationLanguages"),
          confirmDelete: true,
          titleLocation: "top",
          confirmDeleteText: editorLocalization.getString("ed.translationDeleteLanguage"),
          columns: [
            { name: "isSelected", cellType: "boolean", renderAs: "checkbox", enableIf: "localeEnableIf()" },
            { name: "displayName", cellType: "expression", expression: "{row.displayName}" }
          ],
          showHeader: false,
          allowAddRows: false,
          rowCount: 0
        }
      ]
    };
  }
  private updateSettingsSurveyLocales(prevVisibleLocales: Array<string>) {
    let [choices, locales] = this.getSurveyLocales();
    if (!locales) locales = [];
    const maxLocales = settings.translation.maximumSelectedLocales;
    const selectedLocales = this.getSelectedLocales();
    for (var i = 0; i < locales.length; i++) {
      if (maxLocales > 0 && selectedLocales.length >= maxLocales) break;
      const loc = locales[i];
      if (selectedLocales.indexOf(loc) > -1 || prevVisibleLocales.indexOf(loc) > -1) continue;
      if (!!this.localeInitialVisibleCallback && !this.localeInitialVisibleCallback(loc)) continue;
      selectedLocales.push(loc);
    }
    this.setSelectedLocales(selectedLocales);
  }
  private addLocaleIntoValue(loc: string, updateValue: boolean) {
    const visLocs = this.getVisibleLocales();
    if (visLocs.indexOf(loc) < 0) {
      visLocs.push(loc);
      this.setVisibleLocales(visLocs);
    }
    if (updateValue) {
      const selLocs = this.getSelectedLocales();
      if (selLocs.indexOf(loc) < 0 && selLocs.length < settings.translation.maximumSelectedLocales) {
        selLocs.push(loc);
        this.setSelectedLocales(selLocs);
      }
    }
  }
  private isLocaleVisible(locales: string[], locale: string): boolean {
    return locale !== surveyLocalization.defaultLocale && locales.indexOf(locale) < 0;
  }
  private setupToolbarItems() {
    this.chooseLanguageActions = this.getSurveyLocales()[0].map((locale: ItemValue) => (
      new Action(
        {
          id: locale.value,
          title: this.getLocaleName(locale.value),
          data: locale
        }
      )
    ));

    this.addLanguageAction = createDropdownActionModel({
      id: "svc-translation-choose-language",
      iconName: "icon-add",
      iconSize: "auto",
      tooltip: editorLocalization.getString("ed.addLanguageTooltip"),
      enabled: <any>(new ComputedUpdater(() => this.isChooseLanguageEnabled && !this.readOnly)),
    }, {
      items: this.chooseLanguageActions,
      allowSelection: false,
      cssClass: "svc-creator-popup",
      onSelectionChanged: (item: IAction) => {
        this.addLocale(item.id);
      }
    }, this.options as any);
  }
  protected getColumnLocales(): Array<string> {
    if (this.isEditMode) {
      // In the auto-translate dialog the default locale is not shown as a separate column.
      // The editable "Target" column is the base; the read-only "Source" column is added by the TranslationEditor.
      return [this.getEditLocale()];
    }
    return this.getOrderedLocales(true);
  }
  protected getExportLocales(): Array<string> {
    return this.locales;
  }
  protected hasNewLocales(locStr: ILocalizableString): boolean {
    const known = this.getVisibleLocales();
    const locs = locStr.getLocales();
    for (let i = 0; i < locs.length; i++) {
      const loc = locs[i];
      // The default-locale name ("en") counts: strings can be stored under it.
      if (!!loc && loc !== LocalizableString.defaultLocale && known.indexOf(loc) < 0) return true;
    }
    return false;
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "canMergeLocaleWithDefault") {
      this.mergeLocaleWithDefaultText = this.getMergeLocaleWithDefaultText();
    }
  }
  private getMergeLocaleWithDefaultText(): string {
    if (!this.canMergeLocaleWithDefault) return "";
    const locText = this.getLocaleName(this.defaultLocale);
    return editorLocalization.getString("ed.translationMergeLocaleWithDefault")["format"](locText);
  }
  public reset(alwaysReset: boolean = true): void {
    if (!alwaysReset && !!this.root) return;
    super.reset(alwaysReset);
    this.updateChooseLanguageActions();
  }
  protected updateLocalesOnReset(prevVisibleLocales: Array<string>): void {
    this.updateSettingsSurveyLocales(prevVisibleLocales);
    this.updateLocales();
  }
  public removeLocale(locale: string): void {
    super.removeLocale(locale);
    this.canMergeLocaleWithDefault = this.hasLocale(this.defaultLocale);
  }
  public addLocale(locale: string) {
    if (!this.hasLocale(locale)) {
      this.addLocaleIntoValue(locale, true);
    }
    this.updateChooseLanguageActions();
  }
  private updateChooseLanguageActions(): void {
    const actions = this.chooseLanguageActions;
    let locales = this.getVisibleLocales();
    if (Array.isArray(actions)) {
      actions.forEach(item => item.visible = this.isLocaleVisible(locales, item.data.value));
    }
    this.refreshAddLanguageActionListModel();
    this.calcIsChooseLanguageEnabled();
  }
  public resetLocales(): void {
    var locales = [""];
    this.root.fillLocales(locales);
    this.getVisibleLocales().forEach(loc => {
      if (locales.indexOf(loc) < 0) locales.push(loc);
    });
    const sortedLocales = this.options.translationLocalesOrder;
    if (Array.isArray(sortedLocales) && sortedLocales.length > 0) {
      const sortFunc = (a: string, b: string, arr: Array<string>): number => {
        let i1 = arr.indexOf(a);
        let i2 = arr.indexOf(b);
        if (i1 < 0) i1 = 100;
        if (i2 < 0) i2 = 100;
        return i1 < i2 ? -1 : (i1 > i2 ? 1 : 0);
      };
      locales.sort((a: string, b: string): number => {
        const res = sortFunc(a, b, sortedLocales);
        return res === 0 ? sortFunc(a, b, locales) : res;
      });
    }
    this.setSelectedAndVisibleLocales(locales, this.getSelectedLocales(), true);
  }
  public getSelectedLocales(): Array<string> {
    return this.getSelectedLocalesCore(true);
  }
  public setSelectedLocales(selectedLocales: Array<string>): void {
    this.setSelectedAndVisibleLocales(this.getVisibleLocales(), selectedLocales, true);
  }
  public getVisibleLocales(): Array<string> {
    return this.getSelectedLocalesCore(false);
  }
  public setVisibleLocales(locales: Array<string>): void {
    this.setSelectedAndVisibleLocales(locales, this.getSelectedLocales(), false);
  }
  private getSelectedLocalesCore(isSelected: boolean): Array<string> {
    if (!this.localesQuestion) return [];
    const val = this.localesQuestion.value;
    if (!Array.isArray(val) || val.length === 0) return [];
    const res = [];
    val.forEach(item => { if (!!item.name && (!isSelected || item.isSelected)) res.push(item.name); });
    return res;
  }
  // Returns the locale names (including the default locale represented as "") in the order they are displayed.
  private getOrderedLocales(onlySelected: boolean): Array<string> {
    if (!this.localesQuestion) return [];
    const val = this.localesQuestion.value;
    if (!Array.isArray(val)) return [];
    const res: Array<string> = [];
    val.forEach(item => {
      if (!item || item.name === undefined || item.name === null) return;
      if (!onlySelected || item.isSelected) res.push(item.name);
    });
    return res;
  }
  // There must always be at least one selected locale. When the last selected locale is unselected, select the default locale.
  // Must be called when the matrix is not updating its rows (e.g. from onMatrixCellValueChanged), so the value
  // reassignment below refreshes the rendered checkbox cells.
  private ensureSelectedLocale(): void {
    if (!this.localesQuestion) return;
    const val = this.localesQuestion.value;
    if (!Array.isArray(val) || val.length === 0) return;
    if (val.some(item => !!item && item.isSelected)) return;
    this.localesQuestion.value = val.map(item => (!!item && item.name === "") ? { ...item, isSelected: true } : item);
  }
  private isDefaultLocaleSelected(): boolean {
    if (!this.localesQuestion) return true;
    const val = this.localesQuestion.value;
    if (!Array.isArray(val)) return true;
    for (let i = 0; i < val.length; i++) {
      if (!!val[i] && val[i].name === "") return val[i].isSelected !== false;
    }
    return true;
  }
  // Builds the resulting locale names list, keeping the current order (and the default locale position) where possible.
  private getOrderedLocaleNames(locales: Array<string>): Array<string> {
    const current = this.getOrderedLocales(false);
    const res: Array<string> = [];
    current.forEach(loc => {
      if (loc === "" || locales.indexOf(loc) > -1) res.push(loc);
    });
    locales.forEach(loc => { if (res.indexOf(loc) < 0) res.push(loc); });
    if (res.indexOf("") < 0) res.unshift("");
    return res;
  }
  private setSelectedAndVisibleLocales(locales: Array<string>, selectedLocales: Array<string>, includeSelected: boolean): void {
    if (!this.localesQuestion) return;
    if (!Array.isArray(selectedLocales)) selectedLocales = [];
    if (includeSelected && selectedLocales.length > 0) {
      const res: Array<string> = selectedLocales.slice();
      locales.forEach(loc => { if (res.indexOf(loc) < 0) res.push(loc); });
      locales = res;
    }
    const val: Array<any> = [];
    if (this.isEditMode) {
      val.push({ isSelected: true, name: "", displayName: this.getLocaleName("") });
      const editLocale = this.getEditLocale();
      if (!!editLocale) {
        val.push({ isSelected: true, name: editLocale, displayName: this.getLocaleName(editLocale) });
      }
    } else {
      const locDefault = this.defaultLocale;
      const defSelected = this.isDefaultLocaleSelected();
      this.getOrderedLocaleNames(locales).forEach(loc => {
        const isSelected = loc === "" ? defSelected : (loc === locDefault || selectedLocales.indexOf(loc) > -1);
        val.push({ isSelected: isSelected, name: loc, displayName: this.getLocaleName(loc) });
      });
    }
    this.localesQuestion.value = val;
  }
  public mergeLocaleWithDefault() {
    this.reset(false);
    if (!this.hasLocale(this.defaultLocale)) return;
    // The reaction on the own writes is suppressed - the grid is rebuilt by the reset below.
    this.runWithoutSurveyReaction(() => {
      this.root.mergeLocaleWithDefault(this.defaultLocale);
    });
    this.setVisibleLocales([]);
    this.setSelectedLocales([]);
    this.reset();
  }
  public createTranslationEditor(locale: string): TranslationEditor {
    const res = new TranslationEditor(this.survey, locale, this.options, this.translationStringVisibilityCallback, this);
    res.onApply = () => {
      this.reset();
    };
    return res;
  }
  public showTranslationEditor(locale: string): void {
    this.createTranslationEditor(locale).showDialog();
  }
}
export class TranslationForEditor extends Translation {
  constructor(
    survey: SurveyModel,
    options: ISurveyCreatorOptions,
    private surveyStringsHeaderCreatedCallback: (survey: SurveyModel) => void
  ) {
    super(survey, options, true);
  }
  protected getSurveyStringsArea(): string { return "translation-tab:table-popup-editor"; }
  protected getSurveyStringsHeaderArea(): string { return "translation-tab:table-header-popup-editor"; }
  protected onSurveyStringsHeaderCreated(survey: SurveyModel): void {
    this.surveyStringsHeaderCreatedCallback(survey);
  }
}
export class TranslationEditor {
  public fromLocales: Array<string> = [];
  private survey: SurveyModel;
  private translationValue: Translation;
  private options: ISurveyCreatorOptions;
  private fromLocale: string;
  private locale: string;
  private translationTab: TranslationBase;
  public onApply: () => void;
  constructor(survey: SurveyModel, locale: string, options: ISurveyCreatorOptions, translationStringVisibilityCallback?: (obj: Base, propertyName: string, visible: boolean) => boolean, translationTab?: TranslationBase) {
    this.survey = survey;
    this.options = options;
    this.locale = locale;
    this.translationTab = translationTab;
    this.translationValue = new TranslationForEditor(this.survey, this.options, (survey: SurveyModel) => {
      this.setupNavigationButtons(survey);
    });
    this.translationValue.translationStringVisibilityCallback = translationStringVisibilityCallback;
    this.translation.setEditMode(this.locale);
    this.translation.reset();
    this.fillFromLocales();
    this.fromLocale = this.getInitialFromLocale();
    this.updateFromLocaleAction();
    this.updateMatricesColumns();
  }
  // The "Source" column is shown immediately by selecting the first item ("Default") from the "Translate from" dropdown.
  private getInitialFromLocale(): string {
    const persisted = this.translationTab?.getMachineTranslationFromLocale?.();
    if (persisted !== undefined && this.isValidFromLocale(persisted)) {
      return persisted;
    }
    let res = "";
    if (res === (this.locale || "")) {
      // When translating into the default locale, the default can't be the source: pick the first available source instead.
      res = this.fromLocales.length > 0 ? this.fromLocales[0] : this.locale;
    }
    return res;
  }
  private isValidFromLocale(locale: string): boolean {
    const loc = locale || "";
    if (loc === (this.locale || "")) return false;
    if (loc === "") return !this.isDefaultLocaleTarget;
    return this.fromLocales.indexOf(loc) >= 0;
  }
  public get translation(): Translation { return this.translationValue; }
  public showDialog(): void {
    const dialogTitle = editorLocalization.getString("ed.translationDialogTitle") + " (" + this.translation.getLocaleName(this.locale) + ")";

    if (this.translation.stringsSurvey.getAllQuestions(true).length === 0) {
      const locStr = new LocalizableString(this.translation.stringsSurvey);
      locStr.text = editorLocalization.getString("ed.translationNoStrings");
      const popup = surveySettings.showDialog(<IDialogOptions>{
        componentName: "sv-string-viewer",
        data: { model: locStr },
        onApply: (): boolean => { return true; },
        cssClass: "svc-creator-popup",
        title: dialogTitle,
        displayMode: "popup"
      }, this.options.rootElement);
      const actions = popup.footerToolbar.actions;
      actions.splice(1, actions.length - 1);
      actions[0].title = "OK";
      return;
    }
    const popupModel: PopupBaseViewModel = surveySettings.showDialog(
      <IDialogOptions>{
        componentName: "svc-tab-translation",
        data: {
          model: this.translation
        },
        onApply: (): boolean => {
          this.apply();
          return true;
        },
        onHide: () => {
          this.dispose();
        },
        cssClass: "svc-property-editor st-translation-dialog svc-creator-popup",
        title: dialogTitle,
        displayMode: this.options.isMobileView ? "overlay" : "popup"
      }, this.options.rootElement);
    popupModel.locale = editorLocalization.locale;
  }
  public doMachineTranslation(): void {
    // The results go into the dialog's working copy; they reach the real survey on apply.
    runItemsMachineTranslation(this.options, this.createStringsToTranslate(), this.fromLocale, this.locale,
      (item: TranslationItem, text: string): void => {
        item.values(this.locale).text = text;
      },
      (): void => this.translation.updateStringsSurveyData());
  }
  public apply(): void {
    // The tab model's per-string reaction is suppressed - onApply rebuilds its grid in one go.
    if (!!this.translationTab) {
      this.translationTab.runWithoutSurveyReaction(() => this.translation.applyEditLocale());
    } else {
      this.translation.applyEditLocale();
    }
    if (this.onApply) {
      this.onApply();
    }
  }
  public cancel(): void {
    this.dispose();
  }
  public dispose(): void {
    this.translationValue.dispose();
  }
  public setFromLocale(locale: string): void {
    if (this.fromLocale === locale) return;
    this.fromLocale = locale;
    this.translationTab?.setMachineTranslationFromLocale?.(locale);
    this.updateMatricesColumns();
    this.updateFromLocaleAction();
  }
  private updateMatricesColumns(): void {
    if (!this.translation.stringsHeaderSurvey) return;
    this.translation.stringsHeaderSurvey.getAllQuestions().forEach(
      q => {
        this.updateMatrixColumns(<QuestionMatrixDropdownModel>q);
        this.updateHeaderMatrixColumns(<QuestionMatrixDropdownModel>q);
      }
    );
    const questions = this.translation.stringsSurvey.getAllQuestions();
    for (let i = 0; i < questions.length; i++) {
      this.updateMatrixColumns(<QuestionMatrixDropdownModel>questions[i]);
    }
  }
  private updateHeaderMatrixColumns(matrix: QuestionMatrixDropdownModel) {
    this.translation.updateSourceTargetHeaderColumns(matrix, this.fromLocale, this.locale);
  }
  private updateMatrixColumns(matrix: QuestionMatrixDropdownModel): void {
    // The base matrix has the editable "Target" column only; the read-only "Source" column is shown at the first position.
    this.translation.updateMatrixSourceColumn(matrix, this.fromLocale, this.locale, true);
  }
  private fillFromLocales(): void {
    this.fromLocales = [];
    const items = this.createStringsToTranslate();
    items.forEach(item => {
      item.fillLocales(this.fromLocales);
    });
  }
  private setupNavigationButtons(survey: SurveyModel): void {
    const navigationBar = createStringsHeaderNavigationBar(survey);
    navigationBar.addAction(this.createLocaleFromAction());
    const actionCss = "svc-action-bar-item--right";
    if (this.options.getHasMachineTranslation()) {
      survey.addNavigationItem(createMachineTranslationAction(() => { this.doMachineTranslation(); }));
    }
    const importAction = createImportCSVAction(() => { this.translation.importFromCSVFileDOM(); }, false, true);
    importAction.css = actionCss;
    const exportAction = createExportCSVAction(() => { this.translation.exportToCSVFileUI(); }, true);
    exportAction.css = actionCss;
    survey.addNavigationItem(importAction);
    survey.addNavigationItem(exportAction);
  }
  private createStringsToTranslate(): Array<TranslationItem> {
    const res = new Array<TranslationItem>();
    this.translation.root.allLocItems.forEach(item => {
      if (item.getTextToTranslateFrom(this.fromLocale)) {
        res.push(item);
      }
    });
    return res;
  }
  private get isDefaultLocaleTarget(): boolean {
    return !this.locale;
  }
  private getFromLocaleItems(): Array<any> {
    // When the target is the default locale, the default locale itself can't be a source, so it is not shown.
    const items: Array<any> = this.isDefaultLocaleTarget ? [] : [{ id: null, title: this.getActionTranslateFromText("") }];
    this.fromLocales.forEach(locale => {
      items.push({ id: locale, title: this.getActionTranslateFromText(locale) });
    });
    return items;
  }
  private createLocaleFromAction(): IAction {
    const defaultLocaleTitle = this.getActionTranslateFromText("");
    const onActionTypesPopupShow = () => {
      const listModel = action.popupModel.contentComponentData.model;
      listModel.setItems(this.getFromLocaleItems());
    };

    const actionTypesPopupModel = createPopupModelWithListModel({
      items: this.getFromLocaleItems(),
      onSelectionChanged: (item: IAction) => {
        const id = item.id || "";
        this.setFromLocale(id);
        action.title = this.getActionTranslateFromText(id);
      },
      allowSelection: true,
      locOwner: this.options as any
    }, {
      verticalPosition: "bottom",
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
      onShow: onActionTypesPopupShow
    });

    const action = new Action({
      id: "svc-translation-fromlocale",
      component: "svc-translate-from-action",
      css: "st-translation-machine-from",
      location: "start",
      title: defaultLocaleTitle,
      innerCss: "st-translation-machine-from__btn",
      data: {
        additionalTitleCss: "st-translation-machine-from__title",
        additionalTitle: editorLocalization.getString("ed.translateUsigAIFrom")
      },
      popupModel: actionTypesPopupModel,
      action: () => {
        actionTypesPopupModel.toggleVisibility();
      }
    });

    return action;
  }
  private updateFromLocaleAction() {
    if (!this.translation.stringsHeaderSurvey) return;
    const action = this.translation.stringsHeaderSurvey.navigationBar.getActionById("svc-translation-fromlocale");
    if (!!action) {
      action.title = this.getActionTranslateFromText(this.fromLocale || "");
      action.enabled = this.fromLocales.length > 0;
      action.iconName = action.enabled ? "icon-chevron_16x16" : undefined;
      action.iconSize = "auto";
      action.data.containerCss = new CssClassBuilder()
        .append("st-translation-machine-from__container")
        .append("st-translation-machine-from__container--disabled", !action.enabled)
        .toString();
      const listModel = action.popupModel && action.popupModel.contentComponentData && action.popupModel.contentComponentData.model;
      if (!!listModel) {
        listModel.setItems(this.getFromLocaleItems());
      }
    }
  }
  private getActionTranslateFromText(loc: string): string {
    loc = loc || "";
    return this.translation.getLocaleName(loc);
  }
}
export function createImportCSVAction(action: () => void, needSeparator: boolean, isInEditor: boolean = false): Action {
  return new Action({
    id: "svc-translation-import",
    iconName: "icon-load",
    iconSize: "auto",
    locTitleName: "ed.translationImportFromSCVButton",
    locTooltipName: "ed.translationImportFromSCVButton",
    mode: isInEditor ? "large" : "small",
    component: "sv-action-bar-item",
    needSeparator: needSeparator,
    action: action
  });
}
export function createExportCSVAction(action: () => void, isInEditor: boolean = false): Action {
  return new Action({
    id: "svc-translation-export",
    iconName: "icon-download",
    iconSize: "auto",
    locTitleName: "ed.translationExportToSCVButton",
    locTooltipName: "ed.translationExportToSCVButton",
    mode: isInEditor ? "large" : "small",
    component: "sv-action-bar-item",
    action: action
  });
}
