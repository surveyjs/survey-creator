import { property, Base, propertyArray, SurveyModel, HashTable, LocalizableString, JsonObjectProperty, Serializer, PageModel, surveyLocalization, ILocalizableString, ItemValue, QuestionCheckboxModel, PopupModel, ListModel, PanelModelBase, QuestionMatrixDropdownModel, PanelModel, Action, IAction, QuestionCommentModel, MatrixDropdownCell, QuestionTextBase, ComputedUpdater, createDropdownActionModel, Helpers } from "survey-core";
import { unparse, parse } from "papaparse";
import { editorLocalization } from "../../editorLocalization";
import { EmptySurveyCreatorOptions, ISurveyCreatorOptions, settings } from "../../creator-settings";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";

require("./translation.scss");
import { SurveyHelper } from "../../survey-helper";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { translationCss } from "./translation-theme";
import { capitalize } from "../../utils/utils";

export class TranslationItemBase extends Base {
  constructor(public name: string, protected translation: ITranslationLocales) {
    super();
  }
  public get isGroup() {
    return false;
  }
  public fillLocales(locales: Array<string>) { }
  public mergeLocaleWithDefault(loc: string) { }
  public makeObservable() {
    this.fireOnObjCreating();
  }
  public deleteLocaleStrings(locale: string): void { }
  protected fireOnObjCreating(obj: Base = null) {
    if (this.translation) {
      if (!obj) obj = this;
      this.translation.fireOnObjCreating(obj);
    }
  }
}

export class TranslationItemString extends Base {
  constructor(public locString: ILocalizableString, public locale: string) {
    super();
    this.text = this.locString.getLocaleText(this.locale);
  }
  @property() text: string;
  @property() placeholder: string;
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "text") {
      this.locString.setLocaleText(this.locale, newValue);
    }
  }
  public getType(): string {
    return "translationitemstring";
  }
}

export class TranslationItem extends TranslationItemBase {
  private hashValues: HashTable<TranslationItemString>;
  public customText: string;
  public afterRender: any;
  constructor(
    public name: string,
    public locString: ILocalizableString,
    public defaultValue: string = "",
    translation: ITranslationLocales,
    public context: any, private property: JsonObjectProperty = null
  ) {
    super(name, translation);
    if (!!this.translation) {
      this.readOnly = this.translation.readOnly;
    }
    this.hashValues = {};
    var self = this;
    this.afterRender = function (el: any, data: any) {
      if (!!self.translation) {
        self.translation.translateItemAfterRender(self, el, data.locale);
      }
    };
    this.fireOnObjCreating();
  }
  public get maxLength(): number {
    return !!this.property ? this.property.maxLength : -1;
  }
  public makeObservable() {
    super.makeObservable();
    for (var loc in this.hashValues) {
      this.fireOnObjCreating(this.hashValues[loc]);
    }
  }
  public getType(): string {
    return "translationitem";
  }
  @property({ defaultValue: false }) readOnly: boolean;
  public get text() {
    return !!this.customText ? this.customText : this.localizableName;
  }
  public get localizableName(): string {
    const type = this.context && this.context.getType && this.context.getType();
    return editorLocalization.getPropertyNameInEditor(type, this.name);
  }
  public getLocText(loc: string): string {
    return this.locString.getLocaleText(loc);
  }
  public setLocText(loc: string, newValue: string) {
    this.locString.setLocaleText(loc, newValue);
    !!this.translation.tranlationChangedCallback &&
      this.translation.tranlationChangedCallback(
        loc,
        this.name,
        newValue,
        this.context
      );
  }
  public values(loc: string): TranslationItemString {
    if (!this.hashValues[loc]) {
      var val = new TranslationItemString(this.locString, loc);
      if (!loc) {
        val.placeholder = this.defaultValue;
      }
      this.hashValues[loc] = val;
      this.fireOnObjCreating(val);
    }
    return this.hashValues[loc];
  }
  public fillLocales(locales: Array<string>) {
    var keys = this.getKeys();
    for (var i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (
        !!key &&
        locales.indexOf(key) < 0 &&
        key !== LocalizableString.defaultLocale
      ) {
        locales.push(key);
      }
    }
  }
  public toJSON(): any {
    var json = this.locString.getJson();
    json = this.correctJSON(json);
    if (!json || typeof json === "string") return { default: json };
    return json;
  }
  private correctJSON(json: any): any {
    if (!json || typeof json === "string") return json;
    if (Array.isArray(json)) return json.join("\n");
    for (let key in json) {
      if (Array.isArray(json[key])) {
        json[key] = json[key].join("\n");
      }
    }
    return json;
  }
  private getKeys(): Array<string> {
    return this.locString.getLocales();
  }
  public mergeLocaleWithDefault(loc: string): void {
    var locText = this.locString.getLocaleText(loc);
    if (!locText) return;
    this.locString.setLocaleText("", locText);
    this.locString.setLocaleText(loc, null);
  }
  public deleteLocaleStrings(locale: string): void {
    this.setLocText(locale, "");
  }
  public getPlaceholder(locale: string): string {
    const placeholderText = editorLocalization.getString("ed.translationPlaceHolder", locale);
    if (this.context instanceof SurveyModel) {
      return surveyLocalization.getString(this.name, locale) || placeholderText;
    }
    if (!(this.context instanceof PageModel) && this.name === "title") {
      return this.getPlaceholderText(locale) || this.context.name;
    }
    if (this.context.ownerPropertyName === "choices" && this.context.getType() === "itemvalue") {
      return this.getPlaceholderText(locale) || this.getItemValuePlaceholderText() || placeholderText;
    }
    return placeholderText;
  }
  public getTextForExport(loc: string): string {
    const res = this.locString.getLocaleText(loc);
    if (!!res) return res;
    const index = loc.indexOf("-");
    if (index < 0) return "";
    return this.getPlaceholderText(loc);
  }
  public getPlaceholderText(loc: string): string {
    if (!loc || loc === "default") return "";
    const root = this.getRootDialect(loc);
    return this.locString.getLocaleText(root);
  }
  private getRootDialect(loc: string): string {
    const index = loc.indexOf("-");
    if (index < 0) return "";
    loc = loc.substring(0, index);
    return loc === surveyLocalization.defaultLocale ? "" : loc;
  }
  private getItemValuePlaceholderText(): string {
    const val = this.context.value;
    return !Helpers.isValueEmpty(val) ? val.toString() : "";
  }
}

export interface ITranslationLocales {
  locales: Array<string>;
  showAllStrings: boolean;
  readOnly: boolean;
  getLocaleName(loc: string): string;
  availableTranlationsChangedCallback: () => void;
  tranlationChangedCallback: (
    locale: string,
    name: string,
    value: string,
    context: any
  ) => void;
  translateItemAfterRender(item: TranslationItem, el: any, locale: string);
  fireOnObjCreating(obj: Base);
  removeLocale(loc: string): void;
  canShowProperty(obj: Base, prop: JsonObjectProperty, isEmpty: boolean): boolean;
  getProcessedTranslationItemText(locale: string, name: ILocalizableString, newValue: string, context: any): string;
}

export class TranslationGroup extends TranslationItemBase {
  private isRootValue: boolean = false;
  private itemValues: Array<TranslationItemBase>;
  constructor(public name, public obj: any, translation: ITranslationLocales = null, public text: string = "", public hasIndent: boolean = false) {
    super(name, translation);
    if (!this.text) {
      this.text = name;
    }
    this.reset();
    this.fireOnObjCreating();
  }
  public getType(): string {
    return "translationgroup";
  }
  @property({ defaultValue: true }) showHeader: boolean;
  public get items(): Array<TranslationItemBase> {
    return this.itemValues;
  }
  public get locItems(): Array<TranslationItem> {
    return this.itemValues.filter(
      (item) => item instanceof TranslationItem
    ) as Array<TranslationItem>;
  }
  public get isRoot(): boolean {
    return this.isRootValue;
  }
  setAsRoot() {
    this.isRootValue = true;
  }
  public getItemByName(name: string): TranslationItemBase {
    for (var i = 0; i < this.itemValues.length; i++) {
      if (this.itemValues[i].name == name) return this.itemValues[i];
    }
    return null;
  }
  public get groups(): Array<TranslationGroup> {
    return this.itemValues.filter(
      (item) => item instanceof TranslationGroup
    ) as Array<TranslationGroup>;
  }

  public get isGroup() {
    return true;
  }
  public get locales() {
    return !!this.translation ? this.translation.locales : null;
  }
  public get removeLocaleText() {
    return editorLocalization.getString("pe.remove");
  }
  public get localeCount(): number {
    return !!Array.isArray(this.locales) ? this.locales.length : 0;
  }
  public get locWidth(): string {
    var count = this.localeCount;
    if (count < 2) return "100%";
    return Math.floor(100 / count).toString() + "%";
  }
  public getLocaleName(loc: string) {
    return this.translation
      ? this.translation.getLocaleName(loc)
      : editorLocalization.getLocaleName(loc);
  }
  public removeLocale = (loc: string) => {
    this.translation && this.translation.removeLocale(loc);
  };
  public reset() {
    this.itemValues = [];
    this.fillItems();
  }
  public fillLocales(locales: Array<string>) {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].fillLocales(locales);
    }
  }
  public makeObservable() {
    super.makeObservable();
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].makeObservable();
    }
  }
  public get showAllStrings(): boolean {
    return !!this.translation ? this.translation.showAllStrings : true;
  }
  public get hasItems(): boolean {
    if (this.locItems.length > 0) return true;
    var groups = this.groups;
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].hasItems) return true;
    }
    return false;
  }
  public mergeLocaleWithDefault(loc: string) {
    this.itemValues.forEach((item) => item.mergeLocaleWithDefault(loc));
  }
  public deleteLocaleStrings(locale: string): void {
    this.items.forEach(item => item.deleteLocaleStrings(locale));
  }
  private fillItems() {
    if (this.isItemValueArray(this.obj)) {
      this.createItemValuesLocale();
      return;
    }
    if (!this.obj || !this.obj.getType) return;
    var properties = this.getLocalizedProperties(this.obj);
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      var item = this.createTranslationItem(this.obj, properties[i]);
      if (!!item) {
        this.itemValues.push(item);
      }
    }
    properties = this.getArrayProperties(this.obj);
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      var value = this.obj[property.name];
      //If ItemValue array?
      if (this.isItemValueArray(value)) {
        if (this.canShowProperty(property, Array.isArray(value) && value.length > 0)) {
          const group = new TranslationGroup(
            property.name,
            value,
            this.translation,
            editorLocalization.getPropertyName(property.name),
            true
          );
          if (group.hasItems) {
            this.itemValues.push(group);
          }
        }
      } else {
        this.createGroups(value, property);
      }
    }
    this.sortItems();
  }
  private sortItems() {
    if (!settings.translation.sortByName) return;
    this.itemValues.sort(function (
      a: TranslationItemBase,
      b: TranslationItemBase
    ) {
      if (!a.name) return -1;
      if (!b.name) return 1;
      return a.name.localeCompare(b.name);
    });
  }
  private getLocalizedProperties(obj: any): Array<JsonObjectProperty> {
    var res = [];
    var properties = Serializer.getPropertiesByObj(obj);
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      if (!property.isSerializable || !property.isLocalizable) continue;
      if (property.readOnly || !property.visible) continue;
      res.push(property);
    }
    return res;
  }
  private getArrayProperties(obj: any): Array<JsonObjectProperty> {
    var res = [];
    var properties = Serializer.getPropertiesByObj(obj);
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      if (property.isSerializable === false) continue;
      var value = obj[property.name];
      if (!!value && Array.isArray(value) && value.length > 0) {
        res.push(property);
      }
    }
    return res;
  }
  private canShowProperty(property: JsonObjectProperty, isEmpty: boolean): boolean {
    if (!!this.translation && !this.translation.canShowProperty(this.obj, property, isEmpty)) return false;
    return true;
  }
  private createTranslationItem(obj: any, property: JsonObjectProperty): TranslationItem {
    const defaultValue = this.getDefaultValue(obj, property);
    const locStr = <LocalizableString>obj[property.serializationProperty];
    if (!locStr) return null;
    if (!this.showAllStrings && !defaultValue && locStr.isEmpty) return null;
    if (!this.canShowProperty(property, locStr.isEmpty)) return null;
    return new TranslationItem(
      property.name,
      locStr,
      defaultValue,
      this.translation,
      obj,
      property
    );
  }
  private getDefaultValue(obj: any, property: JsonObjectProperty): string {
    if (
      property.name == "title" &&
      property.isLocalizable &&
      !!property.serializationProperty
    ) {
      var locStr = <LocalizableString>obj[property.serializationProperty];
      if (
        !!locStr &&
        obj.getType() != "page" &&
        (!!locStr.onGetTextCallback || locStr["onRenderedHtmlCallback"])
      )
        return obj["name"];
    }
    return "";
  }
  private isItemValueArray(val: any) {
    return (
      !!val &&
      Array.isArray(val) &&
      val.length > 0 &&
      !!val[0] &&
      !!val[0]["getType"] &&
      !!val[0]["setData"] &&
      !!val[0]["setLocText"]
    );
  }
  private createGroups(value: any, property: JsonObjectProperty) {
    for (let i = 0; i < value.length; i++) {
      const obj = value[i];
      if (!!obj && obj.getType) {
        let name = obj["name"];
        let text = name;
        if (!name) {
          const index = "[" + i.toString() + "]";
          name = property.name + index;
          text = editorLocalization.getPropertyName(property.name) + index;
        }
        var group = new TranslationGroup(name, obj, this.translation, text);
        if (group.hasItems) {
          this.itemValues.push(group);
        }
      }
    }
  }
  private createItemValuesLocale() {
    for (var i = 0; i < this.obj.length; i++) {
      var val = this.obj[i];
      var canAdd =
        this.showAllStrings || !val.locText.isEmpty || isNaN(val.value);
      if (!canAdd) continue;
      var item = new TranslationItem(
        val.value,
        val.locText,
        val.value,
        this.translation,
        val
      );
      this.itemValues.push(item);
      this.addCustomPropertiesForItemValue(this.obj[i], item);
    }
  }
  private addCustomPropertiesForItemValue(
    itemValue: any,
    textItem: TranslationItem
  ) {
    var locProperties = this.getLocalizedProperties(itemValue);
    for (var i = 0; i < locProperties.length; i++) {
      if (locProperties[i].name == "text") continue;
      var item = this.createTranslationItem(itemValue, locProperties[i]);
      if (!!item) {
        item.customText = textItem.text + " (" + item.localizableName + ")";
        item.name = itemValue.value + "." + item.name;
        this.itemValues.push(item);
      }
    }
  }
}

export class Translation extends Base implements ITranslationLocales {
  public static csvDelimiter = ",";
  public static newLineDelimiter = "\n";
  public exportToCSVFileUI: any;
  public importFromCSVFileUI: any;
  public importItemCallback: (name: string, locale: string, text: string) => string;
  public importFinishedCallback: () => void;
  public translateItemAfterRenderCallback: (
    item: TranslationItem,
    el: any,
    locale: string
  ) => void;
  public availableTranlationsChangedCallback: () => void;
  public tranlationChangedCallback: (
    locale: string,
    name: string,
    value: string,
    context: any
  ) => void;
  public translationStringVisibilityCallback: (obj: Base, propertyName: string, visible: boolean) => boolean;
  public localeInitialVisibleCallback: (locale: string) => boolean;
  private surveyValue: SurveyModel;
  private settingsSurveyValue: SurveyModel;
  private onBaseObjCreatingCallback: (obj: Base) => void;
  private addLanguageAction: Action;
  public chooseLanguageActions: Array<IAction> = [];

  constructor(
    survey: SurveyModel,
    private options: ISurveyCreatorOptions = null,
    private hasUI: boolean = true
  ) {
    super();
    if (!this.options) this.options = new EmptySurveyCreatorOptions();
    var self = this;
    this.exportToCSVFileUI = function () {
      self.exportToSCVFile(settings.translation.exportFileName);
    };
    this.importFromCSVFileUI = function (el) {
      if (el.files.length < 1) return;
      self.importFromCSVFile(el.files[0]);
      el.value = "";
    };
    this.settingsSurveyValue = this.createSettingsSurvey();
    this.surveyValue = survey;
    this.setupToolbarItems();
    this.calcIsChooseLanguageEnabled();
  }
  getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, context: any): string {
    return this.options.getProcessedTranslationItemText(locale, locString, newText, context);
  }
  public getType(): string {
    return "translation";
  }
  @propertyArray() locales: Array<string>;
  @property() canMergeLocaleWithDefault: boolean;
  @property() mergeLocaleWithDefaultText: string;
  @property({
    defaultValue: false, onSet: (_, target: Translation) => {
      target.updateReadOnly();
    }
  }) readOnly: boolean;
  @property() root: TranslationGroup;
  @property({
    defaultValue: false, onSet: (_, target: Translation) => {
      target.reset();
    }
  }) showAllStrings: boolean;
  @property({
    onSet: (_, target: Translation) => {
      target.reset();
    }
  }) filteredPage: PageModel;
  @property() stringsSurvey: SurveyModel;
  @property() stringsHeaderSurvey: SurveyModel;
  @property({ defaultValue: true }) isEmpty: boolean;

  public makeObservable(onBaseObjCreating: (obj: Base) => void) {
    this.onBaseObjCreatingCallback = onBaseObjCreating;
    this.fireOnObjCreating(this);
    this.root.makeObservable();
  }
  public fireOnObjCreating(obj: Base) {
    if (!this.onBaseObjCreatingCallback) return;
    this.onBaseObjCreatingCallback(obj);
  }
  public get settingsSurvey(): SurveyModel {
    return this.settingsSurveyValue;
  }
  public get localesQuestion(): QuestionCheckboxModel {
    return <QuestionCheckboxModel>(
      this.settingsSurvey.getQuestionByName("locales")
    );
  }
  public deleteLocaleStrings(locale: string): void {
    if(!this.root) {
      this.reset();
    }
    if(!this.root) return;
    this.root.deleteLocaleStrings(locale);
  }
  protected createSettingsSurvey(): SurveyModel {
    var json = this.getSettingsSurveyJSON();
    setSurveyJSONForPropertyGrid(json);
    var res = this.options.createSurvey(json, "translation_settings");
    res.css = propertyGridCss;
    res.css.root += " st-properties";
    res.onValueChanged.add((sender, options) => {
      if (options.name == "locales") {
        this.updateLocales();
      }
    });
    res.onGetPanelTitleActions.add((sender, options) => {
      if (options.panel.name == "languages") {
        options.titleActions = [this.addLanguageAction];
      }
    });
    return res;
  }

  @property({ defaultValue: true }) private isChooseLanguageEnabled: boolean;

  private calcIsChooseLanguageEnabled() {
    this.isChooseLanguageEnabled = this.chooseLanguageActions.filter((item: IAction) => item.visible).length > 0;
  }

  private updateLocales() {
    if (!this.localesQuestion) return;
    var res = [""];
    var val = this.localesQuestion.value;
    if (!Array.isArray(val)) val = [];
    for (var i = 0; i < val.length; i++) {
      res.push(val[i]);
    }
    this.locales = res;
    this.canMergeLocaleWithDefault = this.hasLocale(this.defaultLocale);
  }
  private getSettingsSurveyJSON(): any {
    const defaultLanguageText = this.getLocaleName("");
    return {
      elements: [
        {
          type: "panel",
          name: "languages",
          elements: [
            {
              type: "checkbox",
              name: "defaultLanguage",
              titleLocation: "hidden",
              readOnly: true,
              choices: [defaultLanguageText],
              defaultValue: [defaultLanguageText]
            },
            {
              type: "checkbox",
              name: "locales",
              choicesVisibleIf: "{selLocales} contains {item}",
              titleLocation: "hidden",
              maxSelectedChoices: settings.translation.maximumSelectedLocales
            }
          ],
          title: editorLocalization.getString("ed.translationLanguages")
        }
      ]
    };
  }
  public getSurveyLocales() {
    const usedLocales = new Array<ItemValue>();
    var sLocales = surveyLocalization.supportedLocales;
    var locales =
      Array.isArray(sLocales) && sLocales.length > 0
        ? sLocales
        : (<any>surveyLocalization).getLocales();
    var addedLocales = {};
    for (var i = 0; i < locales.length; i++) {
      this.addLocaleIntoChoices(locales[i], usedLocales, addedLocales);
    }
    locales = this.settingsSurvey.getValue("selLocales");
    if (!locales) locales = [];
    for (var i = 0; i < locales.length; i++) {
      this.addLocaleIntoChoices(locales[i], usedLocales, addedLocales);
    }
    return [usedLocales, locales];
  }
  private updateSettingsSurveyLocales() {
    let [choices, locales] = this.getSurveyLocales();
    this.localesQuestion.choices = choices;
    const selectedLocales = [];
    if (!locales) locales = [];
    for (var i = 0; i < locales.length; i++) {
      if (!!this.localeInitialVisibleCallback && !this.localeInitialVisibleCallback(locales[i])) continue;
      selectedLocales.push(locales[i]);
    }
    const maxLocales = settings.translation.maximumSelectedLocales;
    if (maxLocales > 0 && selectedLocales.length > maxLocales) {
      selectedLocales.splice(maxLocales);
    }
    this.localesQuestion.value = selectedLocales;
  }
  private resetStringsSurvey() {
    if (!this.hasUI) return;
    this.stringsSurvey = this.createStringsSurvey();
    this.stringsHeaderSurvey = this.createStringsHeaderSurvey();
    this.updateReadOnly();
  }
  private createStringsSurvey(): SurveyModel {
    var json = { autoGrowComment: true };
    setSurveyJSONForPropertyGrid(json, false);
    var survey: SurveyModel = this.options.createSurvey(json, "translation_strings");
    survey.lazyRendering = true;
    survey.skeletonComponentName = "sd-translation-line-skeleton";
    survey.startLoadingFromJson();
    survey.css = translationCss;
    survey.addNewPage("page");
    this.addTranslationGroupIntoStringsSurvey(survey.pages[0], this.root, null);
    survey.data = this.getStringsSurveyData(survey);
    survey.endLoadingFromJson();
    const getTransationItem = (question: QuestionMatrixDropdownModel, rowName: any): TranslationItem => {
      var itemValue = ItemValue.getItemByValue(question.rows, rowName);
      return !!itemValue ? itemValue["translationData"] : null;
    };
    survey.onMatrixCellCreated.add((sender: SurveyModel, options: any) => {
      if (options.cell.question instanceof QuestionCommentModel) {
        const cellQuestion = <QuestionCommentModel>options.cell.question;
        const item = getTransationItem(options.question, options.row.name);
        this.setPlaceHolder(cellQuestion, item, options.columnName);
        const isMultiLine = !!item ? item.locString.getIsMultiple() : false;
        cellQuestion.acceptCarriageReturn = isMultiLine;
        if (!!item) {
          cellQuestion.maxLength = item.maxLength;
        }
        if (!isMultiLine) {
          cellQuestion.rows = 1;
        }
      }
    });
    survey.onMatrixCellValueChanging.add((_: SurveyModel, options: any) => {
      const item = getTransationItem(options.question, options.row.name);
      if(!!item) {
        options.value = this.getProcessedTranslationItemText(options.columnName, item.locString, options.value, item.context);
      }
    });
    survey.onMatrixCellValueChanged.add((sender: SurveyModel, options: any) => {
      const item = getTransationItem(options.question, options.row.name);
      if (!!item) {
        item.setLocText(options.columnName, options.value);
        const colName = options.columnName;
        options.row.cells.forEach(cell => {
          if (colName === "default" || cell.column.name.indexOf(colName + "-") === 0)
            this.setPlaceHolder(<QuestionCommentModel>cell.question, item, cell.column.name);
        });
      }
    });
    survey.currentPage = survey.pages[0];
    return survey;
  }
  private setPlaceHolder(cellQuestion: QuestionCommentModel, item: TranslationItem, locale: string) {
    cellQuestion.placeholder = item.getPlaceholder(locale);
  }
  private createStringsHeaderSurvey() {
    let json = {};
    setSurveyJSONForPropertyGrid(json, false);
    let survey: SurveyModel = this.options.createSurvey(json, "translation_strings_header");
    survey.css = translationCss;
    const newPage = survey.addNewPage("page");

    let matrix = <QuestionMatrixDropdownModel>(Serializer.createClass("matrixdropdown"));
    matrix.name = "stringsHeader";
    matrix.titleLocation = "hidden";
    this.addLocaleColumns(matrix);

    newPage.addQuestion(matrix);
    survey.currentPage = survey.pages[0];
    return survey;
  }
  private addTranslationGroupIntoStringsSurvey(
    panel: PanelModelBase,
    group: TranslationGroup,
    parent: TranslationGroup
  ) {
    for (var i = 0; i < group.items.length; i++) {
      if (group.items[i].isGroup) continue;
      let item = <TranslationItem>group.items[i];
      let matrix = <QuestionMatrixDropdownModel>(
        Serializer.createClass("matrixdropdown")
      );
      matrix.cellType = "comment";
      matrix.titleLocation = "hidden";
      matrix.name = this.getStringsSurveyQuestionName(group, parent) + i;
      matrix.showHeader = false;
      panel.addQuestion(matrix);
      this.addLocaleColumns(matrix);
      // let matrix = <QuestionMatrixDropdownModel>panel.questions[0];
      var itemValue = new ItemValue(item.name, item.text);
      itemValue["translationData"] = item;
      matrix.rows.push(itemValue);
    }
    for (var i = 0; i < group.items.length; i++) {
      if (!group.items[i].isGroup) continue;
      let item = <TranslationGroup>group.items[i];
      var pnl = <PanelModel>Serializer.createClass("panel");
      pnl.name = item.name;
      panel.addElement(pnl);
      pnl.title = item.text;
      if (item.hasIndent) {
        pnl.cssClasses.panel.content += " st-panel-indent";
      }
      this.addTranslationGroupIntoStringsSurvey(pnl, item, group);
    }
  }
  private addLocaleColumns(matrix: QuestionMatrixDropdownModel) {
    var locs = this.getSelectedLocales();
    matrix.addColumn("default", this.getLocaleName(""));
    for (var i = 0; i < locs.length; i++) {
      matrix.addColumn(locs[i], this.getLocaleName(locs[i]));
    }
  }
  private getStringsSurveyQuestionName(
    group: TranslationGroup,
    parent: TranslationGroup
  ): string {
    if (parent == null || group.obj.name == group.name)
      return group.name + "_props";
    return parent.name + "_" + group.name;
  }
  private getStringsSurveyData(survey: SurveyModel): any {
    var res = {};
    var questions = survey.getAllQuestions();
    for (var i = 0; i < questions.length; i++) {
      res[questions[i].name] = this.getStringsQuestionData(
        <QuestionMatrixDropdownModel>questions[i]
      );
    }
    return res;
  }
  private getStringsQuestionData(matrix: QuestionMatrixDropdownModel): any {
    var res = {};
    for (var i = 0; i < matrix.rows.length; i++) {
      var itemValue = matrix.rows[i];
      var item: TranslationItem = itemValue["translationData"];
      var value = item.toJSON();
      if (!!value) {
        res[itemValue.value] = value;
      }
    }
    return res;
  }
  private updateHeaderStringsSurveyColumns() {
    if (!this.stringsHeaderSurvey) return;
    let matrix = <QuestionMatrixDropdownModel>(
      this.stringsHeaderSurvey.getQuestionByName("stringsHeader")
    );
    matrix.columns = [];
    this.addLocaleColumns(matrix);
  }
  private updateStringsSurveyColumns() {
    if (!this.stringsSurvey) return;
    var questions = this.stringsSurvey.getAllQuestions();
    for (var i = 0; i < questions.length; i++) {
      var matrix = <QuestionMatrixDropdownModel>questions[i];
      matrix.beginUpdate();
      matrix.columns = [];
      this.addLocaleColumns(matrix);
      matrix.endUpdate();
    }
  }
  private addLocaleIntoChoices(
    loc: string,
    choices: Array<ItemValue>,
    addedLocales: any
  ) {
    if (!loc || addedLocales[loc]) return;
    addedLocales[loc] = true;
    choices.push(new ItemValue(loc, this.getLocaleName(loc)));
  }
  private addLocaleIntoValue(loc: string, updateValue: boolean) {
    this.addLocaleIntoValueCore("selLocales", loc);
    if (updateValue) {
      this.addLocaleIntoValueCore("locales", loc);
    }
  }
  private addLocaleIntoValueCore(valueName: string, loc: string) {
    if (!loc) return;
    var val = this.settingsSurvey.getValue(valueName);
    if (!Array.isArray(val)) val = [];
    if (val.indexOf(loc) < 0 && (valueName !== "locales" || val.length < settings.translation.maximumSelectedLocales)) {
      val.push(loc);
      this.settingsSurvey.setValue(valueName, val);
    }
  }
  private isLocaleVisible(locale: string): boolean {
    return locale !== surveyLocalization.defaultLocale && !this.hasLocale(locale);
  }
  private setupToolbarItems() {
    this.chooseLanguageActions = this.getSurveyLocales()[0].map((locale: ItemValue) => (
      new Action(
        {
          id: locale.value,
          title: this.getLocaleName(locale.value),
          data: locale,
          visible: this.isLocaleVisible(locale.value)
        }
      )
    ));

    this.addLanguageAction = createDropdownActionModel({
      id: "svc-translation-choose-language",
      iconName: "icon-add",
      enabled: <any>(new ComputedUpdater(() => this.isChooseLanguageEnabled)),
    }, {
      items: this.chooseLanguageActions,
      allowSelection: false,
      onSelectionChanged: (item: IAction) => {
        this.addLocale(item.id);
      }
    });
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "canMergeLocaleWithDefault") {
      this.mergeLocaleWithDefaultText = this.getMergeLocaleWithDefaultText();
    }
    if (name === "locales") {
      this.updateHeaderStringsSurveyColumns();
      this.updateStringsSurveyColumns();
    }
  }
  private getMergeLocaleWithDefaultText(): string {
    if (!this.canMergeLocaleWithDefault) return "";
    const locText = this.getLocaleName(this.defaultLocale);
    return editorLocalization.getString("ed.translationMergeLocaleWithDefault")["format"](locText);
  }

  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public set survey(val: SurveyModel) {
    this.surveyValue = val;
    this.settingsSurvey.setValue("selLocales", []);
    this.reset();
  }
  public reset(resetSelectedLocales: boolean = false): void {
    var rootObj = !!this.filteredPage ? this.filteredPage : this.survey;
    var rootName = !!this.filteredPage ? rootObj["name"] : "survey";
    this.root = new TranslationGroup(rootName, rootObj, this);
    this.root.setAsRoot();
    this.root.reset();
    this.resetLocales();
    this.isEmpty = !this.root.hasItems;
    this.updateSettingsSurveyLocales();
    this.updateLocales();
    this.resetStringsSurvey();
  }
  private updateReadOnly(): void {
    if (this.stringsSurvey) {
      this.stringsSurvey.mode = this.readOnly ? "display" : "edit";
    }
  }

  public canShowProperty(obj: Base, prop: JsonObjectProperty, isEmpty: boolean): boolean {
    const result = !isEmpty || SurveyHelper.isPropertyVisible(obj, prop, this.options);
    return this.translationStringVisibilityCallback ? this.translationStringVisibilityCallback(obj, prop.name, result) : result;
  }
  public get defaultLocale(): string {
    return surveyLocalization.defaultLocale;
  }
  public getLocaleName(loc: string) {
    return editorLocalization.getLocaleName(loc, this.defaultLocale);
  }
  public removeLocale(locale: string) {
    if (this.hasLocale(locale)) {
      const index = this.locales.indexOf(locale);
      const locales = this.locales;
      locales.splice(index, 1);
      this.locales = locales;
      this.canMergeLocaleWithDefault = this.hasLocale(this.defaultLocale);
    }
  }
  public hasLocale(locale: string): boolean {
    var locales = this.locales;
    for (var i = 0; i < locales.length; i++) {
      if (locales[i] == locale) return true;
    }
    return false;
  }
  public addLocale(locale: string) {
    if (!this.hasLocale(locale)) {
      this.addLocaleIntoValue(locale, true);
    }
    var actions = this.chooseLanguageActions.filter(item => { return item.id === locale; });
    if (Array.isArray(actions) && actions.length == 1) {
      actions[0].visible = this.isLocaleVisible(locale);
    }
    this.calcIsChooseLanguageEnabled();
  }
  public resetLocales(): void {
    var locales = [""];
    this.root.fillLocales(locales);
    this.setLocales(locales);
  }
  public getSelectedLocales(): Array<string> {
    var res = this.localesQuestion.value;
    return Array.isArray(res) ? res : [];
  }
  public setSelectedLocales(selectedLocales: Array<string>) {
    this.localesQuestion.value = selectedLocales;
  }
  public get noStringsText(): string {
    return editorLocalization.getString("ed.translationNoStrings");
  }
  public exportToCSV(): string {
    if(!this.root) {
      this.reset();
    }
    let res = [];
    let headerRow = [];
    let visibleLocales = this.locales;
    headerRow.push("description ↓ - language →");
    for (let i = 0; i < visibleLocales.length; i++) {
      headerRow.push(!!visibleLocales[i] ? visibleLocales[i] : "default");
    }
    res.push(headerRow);
    let itemsHash = <HashTable<TranslationItem>>{};
    this.fillItemsHash("", this.root, itemsHash);
    for (let key in itemsHash) {
      let row = [key];
      let item: TranslationItem = itemsHash[key];
      for (let i = 0; i < visibleLocales.length; i++) {
        const loc = visibleLocales[i];
        let val = item.getTextForExport(loc);
        val = !val && i == 0 ? item.defaultValue : val;
        val = this.options.getTranslationExportedText(item.context, item.name, item.locString, loc, val);
        row.push(!val && i == 0 ? item.defaultValue : val);
      }
      res.push(row);
    }
    let prefix = settings.translation.exportPrefix;
    if (!prefix) prefix = "";
    return (
      prefix +
      unparse(res, {
        quoteChar: '"',
        escapeChar: '"',
        delimiter: Translation.csvDelimiter,
        header: true,
        newline: Translation.newLineDelimiter,
        skipEmptyLines: false, //or 'greedy',
        columns: null //or array of strings
      })
    );
  }

  public importFromNestedArray(rows: string[][]) {
    let locales = rows.shift().slice(1);
    if (locales[0] === "default") {
      locales[0] = "";
    }
    let translation = new Translation(this.survey, this.options, false);
    translation.showAllStrings = true;
    let itemsHash = <HashTable<TranslationItem>>{};
    this.fillItemsHash("", translation.root, itemsHash);
    rows.forEach((row) => {
      let name = row.shift().trim();
      if (!name) return;
      let item = itemsHash[name];
      if (!item) return;
      this.updateItemWithStrings(name, item, row, locales);
    });
    this.reset();
    if (this.importFinishedCallback) this.importFinishedCallback();
  }

  public exportToSCVFile(fileName: string) {
    if (!window) return;
    var data = this.exportToCSV();
    var blob = new Blob([data], { type: "text/csv" });
    if (window.navigator["msSaveOrOpenBlob"]) {
      window.navigator["msSaveBlob"](blob, fileName);
    } else {
      var elem = window.document.createElement("a");
      elem.href = window.URL.createObjectURL(blob);
      elem.download = fileName;
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
    }
  }
  public importFromCSVFile(file: File) {
    var self = this;
    parse(file, {
      complete: function (results, file) {
        self.importFromNestedArray(<string[][]>results.data);
      }
    });
  }
  public mergeLocaleWithDefault() {
    if (!this.hasLocale(this.defaultLocale)) return;
    this.root.mergeLocaleWithDefault(this.defaultLocale);
    this.settingsSurveyValue.setValue("selLocales", []);
    this.settingsSurveyValue.setValue("locales", []);
    this.reset();
  }
  translateItemAfterRender(item: TranslationItem, el: any, locale: string) {
    if (!this.translateItemAfterRenderCallback) return;
    if (Array.isArray(el)) {
      for (var i = 0; i < el.length; i++) {
        if (el[i].tagName == "TEXTAREA") {
          el = el[i];
          break;
        }
      }
    }
    this.translateItemAfterRenderCallback(item, el, locale);
  }
  /**
   * Update a translation item with given values
   */
  private updateItemWithStrings(
    name: string,
    item: TranslationItem,
    values: Array<string>,
    locales: Array<string>
  ) {
    for (let i = 0; i < values.length && i < locales.length; i++) {
      let val = values[i].trim();
      if (!val) continue;
      if (this.importItemCallback) {
        val = this.importItemCallback(name, locales[i], val);
      }
      if (!!val) {
        item.values(locales[i]).text = val;
      }
    }
  }
  private fillItemsHash(
    parentName: string,
    group: TranslationGroup,
    itemsHash: HashTable<TranslationItem>
  ) {
    let name = parentName ? parentName + "." + group.name : group.name;
    group.locItems.forEach((item) => {
      itemsHash[name + "." + item.name] = item;
    });
    group.groups.forEach((group) => this.fillItemsHash(name, group, itemsHash));
  }
  private setLocales(locs: Array<string>) {
    this.settingsSurvey.setValue("setLocales", []);
    this.localesQuestion.value = [];
    for (var i = 0; i < locs.length; i++) {
      this.addLocaleIntoValue(locs[i], false);
    }
  }
  dispose() {
    this.isEmpty = true;
    if (!!this.stringsSurvey) {
      this.stringsSurvey.dispose();
      this.stringsSurvey = undefined;
    }
    if (!!this.stringsHeaderSurvey) {
      this.stringsHeaderSurvey.dispose();
      this.stringsHeaderSurvey = undefined;
    }
    if (!!this.settingsSurveyValue) {
      this.settingsSurveyValue.dispose();
      this.settingsSurveyValue = undefined;
    }
    this.importFinishedCallback = undefined;
    this.availableTranlationsChangedCallback = undefined;
    this.tranlationChangedCallback = undefined;
  }
}