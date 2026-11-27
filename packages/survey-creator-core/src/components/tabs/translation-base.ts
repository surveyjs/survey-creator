import {
  property, Base, propertyArray, SurveyModel, HashTable, LocalizableString, JsonObjectProperty,
  Serializer, PageModel, surveyLocalization, ILocalizableString, ItemValue, Action,
  QuestionMatrixDynamicModel,
  Helpers, settings as surveySettings,
  MatrixCells,
  QuestionMatrixModel, Question, QuestionPanelDynamicModel,
  DomDocumentHelper, DomWindowHelper, IActionAppearance, PanelModel, QuestionHtmlModel
} from "survey-core";
import { SurveyElementActionContainer } from "../action-container-view-model";
import { getActualLocaleName } from "../../utils/creator-locstrings";
import { unparse, parse } from "papaparse";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { EmptySurveyCreatorOptions, ISurveyCreatorOptions, settings } from "../../creator-settings";
import { SurveyHelper, getDefaultLocaleName, isDefaultLocale } from "../../survey-helper";
import { CreatorDomHelper } from "../../dom-helper";
import { ITranslationTableLocales, TranslationTable } from "./translation-table";

// The library localizes a few strings outside their localizable string: the property itself stays
// empty and the text the survey renders comes from the error class that falls back to it (see
// error.ts in survey-core, and the boolean's getRequiredErrorText for requireTrueErrorText). Their
// survey-core string names are listed here, keyed by the property name, so the grid can show them
// like any other string the library localizes itself. Entries take precedence over the string's own
// localizationName - otherErrorText carries one that names no string at all.
const localizationNameByProperty: { [key: string]: string | ((obj: any) => string) } = {
  requiredErrorText: (obj: any): string => !!obj && (obj.isPanel || obj.isPage) ? "requiredErrorInPanel" : "requiredError",
  requireTrueErrorText: "requireTrueError",
  otherErrorText: "otherRequiredError"
};

// Questions and panels, nested ones included: the size the strings grid follows. Cheap - counting
// the strings themselves would mean building the translation tree. Not getAllQuestions(false, false, true):
// it builds the rows of every page, which the designer defers until a page renders.
function getSurveyElementCount(survey: SurveyModel): number {
  return getQuestionsCount(survey.getAllQuestions()) + survey.getAllPanels().length;
}
function getQuestionsCount(questions: Array<Question>): number {
  return questions.reduce((count, question) => count + getNestedQuestionsCount(question), 0);
}
function getNestedQuestionsCount(question: Question): number {
  // In the designer a dynamic panel lists its template questions only after it has rendered.
  if (question.isDescendantOf("paneldynamic")) return 1 + getQuestionsCount((<QuestionPanelDynamicModel>question).template.questions);
  return question.getNestedQuestions(false, true, true).length;
}

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
  public applyEditLocale(locale: string): void { }
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
  public isReadOnly: boolean;
  @property() text: string;
  @property() placeholder: string;
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (!this.isReadOnly && name === "text") {
      this.locString.setLocaleText(this.locale, newValue);
    }
  }
  public getLocText(loc: string): string {
    return this.locString.getLocaleText(loc) || this.text;
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
  public applyEditLocale(locale: string): void {
    const itemStr = this.values(locale);
    const text = itemStr?.getLocText(locale);
    if (!!text) {
      this.setLocText(locale, text);
    }
  }
  public values(loc: string): TranslationItemString {
    if (!this.hashValues[loc]) {
      var val = new TranslationItemString(this.locString, loc);
      val.isReadOnly = !!this.translation?.isEditMode;
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
    const keys = Object.keys(this.hashValues);
    if (keys.length > 0) {
      keys.forEach(loc => {
        const text = this.hashValues[loc].text;
        if (!!text) {
          if (!json) json = {};
          if (typeof json === "string") {
            json = { default: json };
          }
          // The default locale ("") is stored in JSON under the default-locale key, matching the matrix column name.
          json[loc ? loc : getDefaultLocaleName()] = text;
        }
      });
    }
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
    this.setLocText(locale, undefined);
  }
  public getDefaultLocaleText(ignorePlaceHolder: boolean = false): string {
    let res = this.locString.getLocaleText("");
    if (!res) {
      res = this.getPlaceholder("", ignorePlaceHolder);
    }
    return res;
  }
  // The text the machine translation translates from: the stored text of the source locale,
  // falling back to the value/name the grid shows in its cell (a question's name, a choice's
  // value) when the source is the default locale.
  public getTextToTranslateFrom(locale: string): string {
    const loc = locale || "";
    let res = this.getLocText(loc);
    if (!res && !loc) {
      res = this.getDefaultLocaleText(true);
    }
    return res;
  }
  // The text a string shows in place of its missing translation to the locale: the text being
  // translated from fromLocale (see getTextToTranslateFrom). Empty when the string has a text of
  // its own in the locale, or takes one from its root language (getRootLanguageText: "pt-br"
  // shows the "pt" text), since that is what the survey shows.
  public getUntranslatedText(locale: string, fromLocale: string): string {
    const loc = locale || "";
    if (!loc || !!this.getLocText(loc) || !!this.getRootLanguageText(loc)) return "";
    return this.getTextToTranslateFrom(fromLocale);
  }
  public getPlaceholder(locale: string, ignorePlaceHolder: boolean = false): string {
    const placeholderText = !ignorePlaceHolder ? editorLocalization.getString("ed.translationPlaceHolder", this.getTextLocale(locale)) : "";
    return this.getPlaceHolderCore(locale) || placeholderText;
  }
  // The text a string that stores nothing of its own still renders: the library resolves it from
  // its own string table by the string's localization name (a question's "Other" caption, the
  // survey's navigation buttons, the boolean labels, ...). Such a string is empty in every locale,
  // so without this its row would show no text at all - neither a source nor a placeholder.
  public getLocalizationText(locale: string): string {
    const name = this.getLocalizationStringName();
    return !!name ? surveyLocalization.getString(name, this.getTextLocale(locale)) || "" : "";
  }
  private getLocalizationStringName(): string {
    const byProperty = localizationNameByProperty[this.name];
    if (!!byProperty) {
      return typeof byProperty === "function" ? byProperty(this.context) : byProperty;
    }
    const locStr = <LocalizableString>this.locString;
    if (!locStr) return undefined;
    return !!locStr.sharedData ? locStr.sharedData.localizationName : locStr.localizationName;
  }
  // The text the source side of a translation shows: the text stored for the locale, falling back
  // to the built-in localized text of a string that stores none.
  public getSourceText(locale: string): string {
    return this.getLocText(locale || "") || this.getLocalizationText(locale);
  }
  // The locale a text is looked up in: the grid column names the default locale explicitly
  // (see getLocaleColumnName), the string tables know it as the current default one.
  private getTextLocale(locale: string): string {
    return !!locale && locale !== getDefaultLocaleName() ? locale : surveyLocalization.defaultLocale;
  }
  private getPlaceHolderCore(locale: string): string {
    const res = this.getPlaceholderText(locale);
    if (!!res) return res;
    const localizationText = this.getLocalizationText(locale);
    if (!!localizationText) return localizationText;
    if (this.context instanceof SurveyModel) {
      return surveyLocalization.getString(this.name, locale);
    }
    if (!(this.context instanceof PageModel) && this.name === "title") {
      return this.context.name;
    }
    const className = this.context.getType && this.context.getType();
    if (Serializer.isDescendantOf(className, "itemvalue")) {
      return this.getItemValuePlaceholderText();
    }
    return "";
  }
  public getTextForExport(loc: string): string {
    const val = this.hashValues[loc];
    if (!!val && !!val.text) return val.text;
    const res = this.locString.getLocaleText(loc);
    if (!!res) return res;
    return this.getRootLanguageText(loc);
  }
  // The text a regional locale ("pt-br") takes from its root language ("pt"); empty for a locale
  // that is not regional.
  public getRootLanguageText(loc: string): string {
    if (!loc || loc.indexOf("-") < 0) return "";
    return this.getPlaceholderText(loc);
  }
  public getPlaceholderText(loc: string): string {
    if (!loc || loc === getDefaultLocaleName()) return "";
    const root = this.getRootDialect(loc);
    return this.locString.getLocaleText(root);
  }
  private getRootDialect(loc: string): string {
    const index = loc.indexOf("-");
    if (index < 0) return "";
    loc = loc.substring(0, index);
    return isDefaultLocale(loc) ? "" : loc;
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
  canShowProperty(obj: Base, prop: JsonObjectProperty, isEmpty: boolean, isShowing: boolean): boolean;
  canShowElementGroup?(obj: Base): boolean;
  getEditLocale(): string;
  readonly isEditMode: boolean;
  getProcessedTranslationItemText(locale: string, name: ILocalizableString, newValue: string, context: any): string;
}

export class TranslationGroup extends TranslationItemBase {
  private isRootValue: boolean = false;
  private itemValues: Array<TranslationItemBase>;
  private parentValue: TranslationGroup;
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
  public get allLocItems(): Array<TranslationItem> {
    const res = new Array<TranslationItem>();
    this.fillLocItems(res);
    return res;
  }
  private fillLocItems(items: Array<TranslationItem>): void {
    this.itemValues.forEach(item => {
      if (item.isGroup) {
        (<TranslationGroup>item).fillLocItems(items);
      } else {
        items.push(<TranslationItem>item);
      }
    });
  }
  public get isRoot(): boolean {
    return this.isRootValue;
  }
  setAsRoot() {
    this.isRootValue = true;
  }
  public setParent(parent: TranslationGroup): void {
    this.parentValue = parent;
  }
  public get parent(): TranslationGroup { return this.parentValue; }
  public get fullName(): string {
    const propsName = this.obj.name === this.name || this.isRoot ? "_props" : "";
    const name = this.name + propsName;
    if (this.isRoot || !this.parent) return name;
    const parentName = this.parent.getNameForChild();
    return (!!parentName ? parentName + "_" : "") + name;
  }
  protected getNameForChild(): string {
    if (this.isRoot) return "";
    return this.isFinalNameObj ? this.name : this.fullName;
  }
  protected get isFinalNameObj(): boolean {
    return this.obj.isQuestion || this.obj.isPage || this.obj.isPanel;
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
  public applyEditLocale(locale: string): void {
    this.items.forEach(item => item.applyEditLocale(locale));
  }
  private fillItems() {
    if (this.isItemValueArray(this.obj)) {
      this.createItemValuesLocale();
      return;
    }
    if (!this.obj || !this.obj.getType) return;
    var properties = this.getLocalizedProperties(this.obj);
    for (var i = 0; i < properties.length; i++) {
      const item = this.createTranslationItem(this.obj, properties[i]);
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
          this.addNewGroup(new TranslationGroup(
            property.name,
            value,
            this.translation,
            editorLocalization.getPropertyName(property.name),
            true
          ));
        }
      } else {
        this.createGroups(value, property);
      }
    }
    this.createMatrixCellsGroup();
    this.sortItems();
  }
  private createMatrixCellsGroup(): void {
    Serializer.getPropertiesByObj(this.obj).forEach(prop => {
      if (prop.type === "cells" && this.canShowProperty(prop, true)) {
        this.createMatrixCellsGroupCore(prop);
      }
    });
  }
  private createMatrixCellsGroupCore(prop: JsonObjectProperty): void {
    const cells = <MatrixCells>this.obj[prop.name];
    if (cells.isEmpty) return;
    const matrix = <QuestionMatrixModel>this.obj;
    const root = new TranslationGroup(prop.name, cells, this.translation, editorLocalization.getPropertyName(prop.name));
    const defaultName = surveySettings.matrix.defaultRowName;
    const rows = [{ value: defaultName, text: editorLocalization.getString("qt.default") }];
    matrix.rows.forEach(row => rows.push({ value: row.value, text: row.text }));
    rows.forEach(row => {
      matrix.columns.forEach(col => {
        const locStr = cells.getCellDisplayLocText(row.value, col);
        if (!!locStr) {
          const name = editorLocalization.getPropertyName(row.text, "") + ", " + editorLocalization.getPropertyName(col.title);
          const item = new TranslationItem(name, locStr, "", this.translation, locStr);
          root.items.push(item);
        }
      });
    });
    this.addNewGroup(root);
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
    const res = [];
    const properties = Serializer.getPropertiesByObj(obj);
    for (let i = 0; i < properties.length; i++) {
      const property = properties[i];
      if (property.readOnly || !property.visible || !property.isSerializable || !property.isLocalizable) continue;
      const isShowing = ["url", "file"].indexOf(property.type) < 0;
      if (this.canShowProperty(property, !!obj[property.name], isShowing)) {
        res.push(property);
      }
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
  private canShowProperty(property: JsonObjectProperty, isEmpty: boolean, isShowing: boolean = true): boolean {
    const obj = Array.isArray(this.obj) ? (this.obj.length > 0 ? <any>this.obj[0] : undefined) : this.obj;
    if (!obj) return false;
    if (!!this.translation) return this.translation.canShowProperty(obj, property, isEmpty, isShowing);
    return isShowing;
  }
  private createTranslationItem(obj: any, property: JsonObjectProperty): TranslationItem {
    const locStr = <LocalizableString>obj[property.serializationProperty];
    if (!locStr) return null;
    const defaultValue = this.getDefaultValue(obj, property);
    if (!this.showAllStrings && !defaultValue && locStr.isEmpty) return null;
    if (!!this.translation?.isEditMode && !!locStr.getLocaleText(this.translation.getEditLocale())) return null;
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
      if (!!locStr && !obj.isPage && !obj.isPanel && !!locStr.onGetTextCallback)
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
        if (!!this.translation && !!this.translation.canShowElementGroup && !this.translation.canShowElementGroup(obj)) continue;
        let name = obj["name"];
        let text = name;
        if (!name) {
          const index = "[" + i.toString() + "]";
          name = property.name + index;
          text = editorLocalization.getPropertyName(property.name) + index;
        }
        this.addNewGroup(new TranslationGroup(name, obj, this.translation, text));
      }
    }
  }
  private addNewGroup(group: TranslationGroup): void {
    group.setParent(this);
    if (group.hasItems) {
      this.itemValues.push(group);
    }
  }
  private createItemValuesLocale() {
    const inEditMode = !!this.translation?.isEditMode;
    const editLocale = this.translation?.getEditLocale();
    for (var i = 0; i < this.obj.length; i++) {
      var val = this.obj[i];
      var canAdd =
        this.showAllStrings || !val.locText.isEmpty || isNaN(val.value);
      if (inEditMode && val.locText.getLocaleText(editLocale)) {
        canAdd = false;
      }
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

// The owner of a used-strings tree (see TranslationBase.createUsedStringsRoot): a read-only
// used-strings filter (showAllStrings = false) independent of the owner model's own filters.
// The visibility rules (canShowProperty, canShowElementGroup) still delegate to the owner,
// so the tree covers exactly the strings the owner's surface can show.
class TranslationUsedStringsOwner implements ITranslationLocales {
  constructor(private owner: TranslationBase) { }
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
  // The element strings dialog scopes its tree to an element - the used-strings tree built over
  // the same owner must stay within the same scope. The grid's page scope is not applied here:
  // the tree covers the whole survey by design (see createUsedStringsRoot).
  public canShowElementGroup(obj: Base): boolean {
    return this.owner.canShowElementGroupCore(obj);
  }
  public getEditLocale(): string { return ""; }
  public get isEditMode(): boolean { return false; }
  public getProcessedTranslationItemText(locale: string, name: ILocalizableString, newValue: string): string {
    return newValue;
  }
}

// The shared core of every translation model: the tab in both modes (multiple-languages and
// side-by-side), the machine-translation dialog and the element strings dialog. It owns the
// translation tree, the strings grid surveys, the CSV import/export and the write path to the
// real survey. It knows nothing about the property grid - each mode builds its own settings
// survey via the createSettingsSurvey override.
export class TranslationBase extends Base implements ITranslationLocales {
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
  public getMachineTranslationFromLocale?: () => string | undefined;
  public setMachineTranslationFromLocale?: (locale: string) => void;
  // Suppresses the reaction on the real survey's property-change notifications while the model
  // itself is writing into it (the grid edit's own echo must not refresh/rebuild the grid).
  protected _syncing: boolean = false;
  private surveyValue: SurveyModel;
  private settingsSurveyValue: SurveyModel;
  private onBaseObjCreatingCallback: (obj: Base) => void;

  constructor(
    survey: SurveyModel,
    protected options: ISurveyCreatorOptions = null,
    private hasUI: boolean = true
  ) {
    super();
    if (!this.options)this.options = new EmptySurveyCreatorOptions();
    var self = this;
    this.exportToCSVFileUI = function () {
      self.exportToSCVFile(settings.translation.exportFileName);
    };
    this.importFromCSVFileUI = function (file: File) {
      self.importFromCSVFile(file);
    };
    this.settingsSurveyValue = this.createSettingsSurvey();
    this.surveyValue = survey;
  }
  getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, context: any): string {
    return this.options.getProcessedTranslationItemText(locale, locString, newText, context);
  }
  public getType(): string {
    return "translation";
  }
  public get isSideBySide(): boolean {
    return false;
  }
  public get isSideBySideGrid(): boolean {
    return false;
  }
  // True when the side-by-side mode shows its two rendered survey panes (the UI components'
  // single switch between the panes and the strings-grid markup).
  public get isSideBySideForm(): boolean {
    return this.isSideBySide && !this.isSideBySideGrid;
  }
  @propertyArray() locales: Array<string>;
  // When true, the strings grid shows exactly two columns - sourceLocale and targetLocale -
  // instead of a column per selected locale, and updates them (keeping the entered values)
  // whenever one of the two locales changes.
  @property({ defaultValue: false }) useSourceTargetColumns: boolean;
  @property() sourceLocale: string;
  @property() targetLocale: string;
  @property({
    defaultValue: false, onSet: (_, target: TranslationBase) => {
      target.updateReadOnly();
    }
  }) readOnly: boolean;
  @property() root: TranslationGroup;
  @property({
    defaultValue: false, onSet: (_, target: TranslationBase) => {
      target.reset();
    }
  }) showAllStrings: boolean;
  @property({
    onSet: (val: PageModel, target: TranslationBase) => {
      if (!!val) target.lastFilteredPageName = val.name;
      if (!target.isPageFilterResetSuspended) target.reset();
    }
  }) filteredPage: PageModel;
  private isPageFilterResetSuspended = false;
  // The name of the last page the grid was scoped to: a grid that must stay scoped (see
  // canShowAllPages) goes back to it after the survey is replaced or the filter is cleared.
  private lastFilteredPageName: string = "";
  // Set by the translation tab only - the dialogs built on the same classes keep their own scope.
  public limitAllPagesOnLargeSurvey: boolean = false;
  // False when the strings grid must be scoped to a single page: building and rendering it over the
  // whole survey takes about 1 ms per element, so a large multi-page survey gets no "All Pages"
  // (see settings.translation.maxElementsForAllPages). Collapsed page panels are not rendered, but
  // their string matrices are built, and the build is most of that time.
  public get canShowAllPages(): boolean {
    if (!this.limitAllPagesOnLargeSurvey || !this.survey || this.survey.pages.length < 2) return true;
    const max = settings.translation.maxElementsForAllPages;
    if (!(max > 0)) return true;
    return getSurveyElementCount(this.survey) <= max;
  }
  // The page scope is imposed by the size limit rather than chosen, so the bulk operations (the
  // locales list, CSV export, locale deletion and merge) still cover the whole survey.
  protected get isPageScopeForced(): boolean {
    return !!this.filteredPage && !this.canShowAllPages;
  }
  private applyPageScopeLimit(): void {
    if (!this.hasStringsSurveyUI || this.canShowAllPages) return;
    const pages = this.survey.pages;
    if (!!this.filteredPage && pages.indexOf(this.filteredPage) > -1) return;
    const lastPage = !!this.lastFilteredPageName ? this.survey.getPageByName(this.lastFilteredPageName) : null;
    // The caller builds the tree right after, so the filter's own rebuild is suspended.
    this.isPageFilterResetSuspended = true;
    try {
      this.filteredPage = lastPage || pages[0];
    } finally {
      this.isPageFilterResetSuspended = false;
    }
  }
  private isPageScopeIgnored = false;
  // A tree over the whole survey with the model's own filters, whatever page the grid is scoped to.
  protected createWholeSurveyRoot(): TranslationGroup {
    this.isPageScopeIgnored = true;
    try {
      const root = new TranslationGroup("survey", this.survey, this);
      root.setAsRoot();
      return root;
    } finally {
      this.isPageScopeIgnored = false;
    }
  }
  // The tree the bulk operations work on (see isPageScopeForced).
  protected getBulkOperationsRoot(): TranslationGroup {
    return this.isPageScopeForced ? this.createWholeSurveyRoot() : this.root;
  }
  // The locales stored anywhere in the survey, in the form TranslationGroup.fillLocales gives them
  // (no default locale key), without building a tree over the whole survey.
  protected fillSurveyLocales(locales: Array<string>): void {
    const used = new Array<string>();
    this.survey.addUsedLocales(used);
    used.forEach(loc => {
      if (!!loc && loc !== LocalizableString.defaultLocale && locales.indexOf(loc) < 0) locales.push(loc);
    });
  }
  // Replaces the survey and drops the page filter with a single rebuild: on its own, the filter's
  // onSet would rebuild the tree over the old survey (or the old filter) just before the survey
  // setter rebuilds it again.
  public setSurveyAndClearPageFilter(survey: SurveyModel): void {
    this.isPageFilterResetSuspended = true;
    try {
      this.filteredPage = null;
    } finally {
      this.isPageFilterResetSuspended = false;
    }
    this.survey = survey;
  }
  // The strings survey's builder (see TranslationTable): it outlives the strings survey, which is
  // rebuilt on every reset, and keeps which page panels are expanded.
  private stringsTableValue: TranslationTable;
  public get stringsTable(): TranslationTable {
    if (!this.stringsTableValue) {
      this.stringsTableValue = this.createStringsTable();
    }
    return this.stringsTableValue;
  }
  // The grouped table of the grid view, the same in both modes.
  protected createStringsTable(): TranslationTable {
    return new TranslationTable(this);
  }
  @property() stringsSurvey: SurveyModel;
  private stringsSurveyInstanceId = 0;
  protected makeSurveyIdSpaceUnique(survey: SurveyModel): void {
    survey.elementIdPrefix = (survey.elementIdPrefix || "") + (++this.stringsSurveyInstanceId) + "-";
  }
  @property({ defaultValue: true }) isEmpty: boolean;
  // The edit mode (a dialog editing a single locale over a working copy of the strings) is a
  // feature of the machine-translation dialog - see Translation/TranslationForEditor.
  public getEditLocale(): string { return undefined; }
  public get isEditMode(): boolean { return false; }
  // Suppresses the model's reaction on the real survey's property-change notifications
  // while fn runs bulk writes; callers rebuild/refresh the grid themselves afterwards.
  public runWithoutSurveyReaction(fn: () => void): void {
    const wasSyncing = this._syncing;
    this._syncing = true;
    try {
      fn();
    } finally {
      this._syncing = wasSyncing;
    }
  }

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
  public deleteLocaleStrings(locale: string): void {
    if (!this.root) {
      this.reset();
    }
    if (!this.root) return;
    // The reaction on the own writes is suppressed - the grid is rebuilt by the reset below.
    this.runWithoutSurveyReaction(() => {
      this.options.startUndoRedoTransaction("Delete strings for locale: " + locale);
      try {
        this.getBulkOperationsRoot().deleteLocaleStrings(locale);
      } finally {
        this.options.stopUndoRedoTransaction();
      }
    });
    this.removeLocale(locale);
    this.reset();
  }
  // The property grid content of the tab. The base model has none - each mode builds its own
  // settings survey (the multiple-languages locales matrix, the side-by-side language dropdowns).
  protected createSettingsSurvey(): SurveyModel {
    return undefined;
  }
  // The "Actions" group of the settings survey, the same in both modes: the "Actions" caption and
  // the CSV import and download buttons. The settings survey JSON adds the panel
  // (getTranslationActionsPanelJSON); this sets it up. The buttons are created when the panel first
  // asks for them (see getCsvActions) - it runs in the base constructor.
  protected setupCsvActionsPanel(survey: SurveyModel): void {
    const caption = <QuestionHtmlModel>survey.getQuestionByName(translationActionsCaptionName);
    if (!!caption) caption.html = escapeTranslationHtmlText(editorLocalization.getString("ed.translationActions"));
    setupTranslationButtonsPanel(survey, translationActionsPanelName, () => this.getCsvActions());
    survey.onUpdateQuestionCssClasses.add((_, options) => {
      if (options.question.name === translationActionsCaptionName) options.cssClasses.root += " st-language-settings__caption";
    });
  }
  private csvActionsValue: Array<Action>;
  private importCsvAction: Action;
  public getCsvActions(): Array<Action> {
    // A disposed model creates nothing: its readOnly subscription would outlive it.
    if (this.isDisposed && !this.csvActionsValue) return [];
    if (!this.csvActionsValue) {
      const appearance = getTranslationPanelButtonAppearance("neutral", "secondary");
      this.importCsvAction = createTranslationPanelButton("svc-translation-import-csv", "ed.translationImportFromSCVButton",
        appearance, () => this.importFromCSVFileDOM(), "icon-import-24x24");
      const downloadCsvAction = createTranslationPanelButton("svc-translation-download-csv", "ed.translationDownloadCSV",
        appearance, () => this.exportToCSVFileUI(), "icon-download-24x24");
      this.csvActionsValue = [this.importCsvAction, downloadCsvAction];
      this.subscribeOnCreatorReadOnly();
      this.updateCsvActions();
    }
    return this.csvActionsValue;
  }
  // The model's own flag is set once, when the tab is activated; the creator's read-only state can
  // change while the tab is open.
  protected get isEditingReadOnly(): boolean {
    return this.readOnly || (!!this.options && !!this.options.readOnly);
  }
  private readOnlyHandlerKey: string;
  // Follows the creator's readOnly property while the side panel buttons exist. The options object is
  // checked structurally: the model stays constructible with EmptySurveyCreatorOptions.
  protected subscribeOnCreatorReadOnly(): void {
    const options = <any>this.options;
    if (!!this.readOnlyHandlerKey || !options || typeof options.registerFunctionOnPropertyValueChanged !== "function") return;
    // A key per model: the key of the dialog models' handlers must not replace the tab model's one.
    this.readOnlyHandlerKey = "svc-translation-settings-actions-" + (++translationReadOnlyHandlerCounter);
    options.registerFunctionOnPropertyValueChanged("readOnly", () => this.onEditingReadOnlyChanged(), this.readOnlyHandlerKey);
  }
  protected onEditingReadOnlyChanged(): void {
    this.updateCsvActions();
  }
  private updateCsvActions(): void {
    if (!this.csvActionsValue || this.isDisposed) return;
    this.importCsvAction.enabled = !this.isEditingReadOnly;
  }
  // The locale a row of a settings survey matrix stands for (the languages matrices of both
  // modes): the matrix value is a plain array following the visible rows order, and the default
  // locale is stored as "" there. Undefined when the row is not in the value - it is resolved at
  // click time, and a row can be reused for a different locale after a refresh.
  protected getLocaleByMatrixRow(matrix: QuestionMatrixDynamicModel, row: any): string {
    const index = matrix.visibleRows.indexOf(row);
    const val = matrix.value;
    if (index < 0 || !Array.isArray(val) || index >= val.length || !val[index]) return undefined;
    return val[index].name || "";
  }
  // The opposite lookup: the row standing for a locale ("" for the default one). Undefined when
  // the matrix has no row for it - a locale can be targeted before it has a single stored string.
  protected getMatrixRowByLocale(matrix: QuestionMatrixDynamicModel, locale: string): any {
    if (!matrix) return undefined;
    const val = matrix.value;
    if (!Array.isArray(val)) return undefined;
    const loc = locale || "";
    const rows = matrix.visibleRows;
    for (let i = 0; i < rows.length && i < val.length; i++) {
      if (!!val[i] && (val[i].name || "") === loc) return rows[i];
    }
    return undefined;
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
    locales = this.getVisibleLocales();
    for (var i = 0; i < locales.length; i++) {
      this.addLocaleIntoChoices(locales[i], usedLocales, addedLocales);
    }
    return [usedLocales, locales];
  }
  public importFromCSVFileDOM(): void {
    CreatorDomHelper.openFileDialog((file: File) => this.importFromCSVFileUI(file));
  }
  // Whether reset() (re)builds the strings-grid surveys; the side-by-side model overrides it
  // to build them only in its grid view.
  protected get hasStringsSurveyUI(): boolean {
    return this.hasUI;
  }
  private resetStringsSurvey() {
    if (!this.hasStringsSurveyUI) return;
    this.stringsSurvey = this.createStringsSurvey();
    this.updateReadOnly();
  }
  protected getSurveyStringsArea(): string { return undefined; }
  protected onSurveyStringsCreated(survey: SurveyModel): void { }
  protected createStringsSurvey(): SurveyModel {
    return this.stringsTable.createSurvey(this.root, (survey: SurveyModel): void => this.onSurveyStringsCreated(survey),
      this.getSurveyStringsArea());
  }
  // A survey of the tab, created through the creator (the area lets it be customized), with an
  // element id space of its own.
  public createTabSurvey(json: any, reason: string, onCreating: (survey: SurveyModel) => void, area?: string): SurveyModel {
    return this.options.createSurvey(json, reason, this, (survey: SurveyModel): void => {
      this.makeSurveyIdSpaceUnique(survey);
      onCreating(survey);
    }, area);
  }
  // An empty Target cell shows the text it is translated from, muted (the cell placeholder), or the
  // text of its root language ("pt" for "pt-br"); a Source cell shows the text the string is displayed
  // by (a choice's value, a question's name).
  public getStringsCellPlaceholder(item: TranslationItem, columnName: string): string {
    const locales = this.getTableLocales();
    const target = locales.targets.filter(loc => this.getLocaleColumnName(loc) === columnName)[0];
    if (target === undefined) return item.getPlaceholder(columnName);
    return this.getUntranslatedTargetText(item, target, locales.source) || item.getPlaceholder(columnName, true);
  }
  // getUntranslatedText has no answer for the default locale (it is the source everywhere else): the
  // machine-translation dialog translates into it from another language.
  private getUntranslatedTargetText(item: TranslationItem, target: string, source: string): string {
    if (!!target) return item.getUntranslatedText(target, source);
    return !item.getLocText("") ? item.getTextToTranslateFrom(source) : "";
  }
  // The text the group counts of the strings table measure.
  public getTargetText(item: TranslationItem, locale: string): string {
    return item.locString.getLocaleText(locale);
  }
  // The single write path for translation item edits on the real survey; subclasses hook it
  // to react to the change. No-op writes are filtered out.
  public performItemLocTextAction(item: TranslationItem, locale: string, newText: string): void {
    const current = item.locString.getLocaleText(locale) || "";
    if (newText === undefined || newText === null) {
      // Clearing. getLocaleText normalizes an absent entry and a stored empty string to "" -
      // check the stored keys so a stored empty string is still removed.
      if (!current && item.locString.getLocales().indexOf(locale) < 0) return;
    } else if ((newText || "") === current) return;
    item.setLocText(locale, newText);
  }
  public setItemLocText(item: TranslationItem, locale: string, text: string): void {
    this._syncing = true;
    try {
      this.performItemLocTextAction(item, locale, text);
    } finally {
      this._syncing = false;
    }
  }
  // Called (through the plugin's onDesignerSurveyPropertyChanged hook) when the real survey changes
  // while the tab is active: the element strings dialogs write to it, and external code can too.
  public onCreatorSurveyPropertyChanged(obj: Base, propName: string): void {
    if (this._syncing || this.isDisposed) return;
    const locStr = this.getLocStrByName(obj, propName);
    if (!locStr) {
      // Not a localizable string - a structural change (element added/removed, etc.).
      if (!!this.filteredPage && this.survey.pages.indexOf(this.filteredPage) < 0) {
        this.filteredPage = null; // the property's onSet rebuilds the grid
        return;
      }
      this.reset();
      return;
    }
    // The change brought in a locale the model does not track - a full rebuild re-derives
    // the locale list from the survey strings.
    if (this.hasNewLocales(locStr)) {
      this.reset();
      return;
    }
    // A localizable string changed on the real survey: refresh the grid cells.
    this.updateStringsSurveyData();
  }
  // Whether the change brought in a locale the model does not track yet, forcing a full rebuild.
  // The base model derives its locales from the survey strings on every reset, so nothing is new
  // by definition; the multiple-languages mode checks against its visible-locales list.
  protected hasNewLocales(locStr: ILocalizableString): boolean {
    return false;
  }
  // Resolves the localizable string a property change refers to. Some objects report the change
  // themselves while the string lives on a nested object (a matrix column's title is stored on its
  // template question), so the serialization metadata is used when the own-strings hash has no entry.
  protected getLocStrByName(obj: Base, name: string): ILocalizableString {
    if (!obj) return undefined;
    if (typeof (<any>obj).getLocalizableString === "function") {
      const res = (<any>obj).getLocalizableString(name);
      if (!!res) return res;
    }
    if (typeof obj.getType !== "function") return undefined;
    const prop = Serializer.findProperty(obj.getType(), name);
    if (!!prop && !!prop.serializationProperty) {
      return <ILocalizableString>(<any>obj)[prop.serializationProperty];
    }
    return undefined;
  }
  public getLocaleColumnName(loc: string): string {
    return !loc ? getDefaultLocaleName() : loc;
  }
  // The locale columns of the strings table and their roles (see ITranslationTableLocales). With the
  // source/target pair: [Source, Target]; the Target alone when the languages are the same; the Source
  // alone when no target language is selected (editable, exactly as it is next to a target column).
  // Otherwise the column locales of the mode, the source being the default locale.
  public getTableLocales(): ITranslationTableLocales {
    const source = this.sourceLocale || "";
    if (this.useSourceTargetColumns) {
      const target = this.targetLocale || "";
      if (!target) return { columns: [source], source: source, targets: [] };
      return { columns: source !== target ? [source, target] : [target], source: source, targets: [target] };
    }
    const columns = this.getColumnLocales();
    return { columns: columns, source: source, targets: columns.filter(loc => loc !== source) };
  }
  // The locale columns of the strings table when the source/target pair is not used. The
  // multiple-languages mode shows its ordered selected locales (or the source and the edit locale in
  // the machine-translation dialog).
  protected getColumnLocales(): Array<string> {
    return [""];
  }
  public updateStringsSurveyData(): void {
    if (!!this.stringsTableValue)this.stringsTableValue.updateData();
  }
  // The columns and the group counts of the strings survey.
  protected updateStringsSurveyColumns(): void {
    if (!!this.stringsTableValue)this.stringsTableValue.updateColumns();
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
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "locales") {
      this.updateStringsSurveyColumns();
    }
    if (name === "useSourceTargetColumns" ||
      (this.useSourceTargetColumns && (name === "sourceLocale" || name === "targetLocale"))) {
      this.updateStringsSurveyColumnsAndData();
    }
  }
  // Re-runs the column setup on the string matrices, keeping the entered values.
  protected updateStringsSurveyColumnsAndData(): void {
    this.updateStringsSurveyColumns();
    this.updateStringsSurveyData();
  }
  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public set survey(val: SurveyModel) {
    this.surveyValue = val;
    this.setVisibleLocales([]);
    this.onSurveyReplaced();
    this.reset();
  }
  // Called when another survey is assigned, before the model is rebuilt over it.
  protected onSurveyReplaced(): void {
    if (!!this.stringsTableValue)this.stringsTableValue.resetPageState();
  }
  // The object the translation tree is built over. Overridden to scope the strings grid
  // to a single element (the side-by-side matrix strings popup).
  protected getRootTranslationObj(): { obj: Base, name: string } {
    // The survey's own strings belong to the first page - a grid scoped to it is rooted on the
    // survey, so they are shown there, and the other pages are cut out by canShowElementGroup.
    if (!!this.filteredPage && !this.isFirstPageFiltered) return { obj: this.filteredPage, name: this.filteredPage.name };
    return { obj: this.survey, name: "survey" };
  }
  protected get isFirstPageFiltered(): boolean {
    return !!this.filteredPage && !!this.survey && this.survey.pages[0] === this.filteredPage;
  }
  // The element scope of a model (see TranslationElementStrings): unlike the page scope below,
  // it narrows the used-strings tree as well.
  public canShowElementGroupCore(obj: Base): boolean {
    return true;
  }
  public canShowElementGroup(obj: Base): boolean {
    if (!this.canShowElementGroupCore(obj)) return false;
    if (!this.isFirstPageFiltered || this.isPageScopeIgnored) return true;
    // The tree is rooted on the survey while the grid is scoped to the first page - every other
    // page is left out of it.
    const el = <any>obj;
    return !el.isPage || el === this.filteredPage;
  }
  public reset(alwaysReset: boolean = true): void {
    if (!alwaysReset && !!this.root) return;
    this.applyPageScopeLimit();
    this.stringsTable.updateFilteredPage(this.filteredPage);
    const prevVisibleLocales = this.getVisibleLocales();
    const rootInfo = this.getRootTranslationObj();
    const rootObj = rootInfo.obj;
    const rootName = rootInfo.name;
    // The constructor builds the tree. setAsRoot needs no rebuild after it: the root flag only
    // changes the names (fullName, getNameForChild), and they are computed when read.
    this.root = new TranslationGroup(rootName, rootObj, this);
    this.root.setAsRoot();
    this.resetLocales();
    this.isEmpty = !this.root.hasItems;
    this.updateLocalesOnReset(prevVisibleLocales);
    this.resetStringsSurvey();
  }
  // Called between the tree rebuild and the strings-grid rebuild, so a mode can refresh its
  // locale bookkeeping (the multiple-languages settings survey) before the grid columns are built.
  protected updateLocalesOnReset(prevVisibleLocales: Array<string>): void { }
  private updateReadOnly(): void {
    if (this.settingsSurvey) {
      this.settingsSurvey.readOnly = this.readOnly;
    }
    if (this.stringsSurvey) {
      this.stringsSurvey.readOnly = this.readOnly;
    }
    this.onEditingReadOnlyChanged();
  }
  public canShowProperty(obj: Base, prop: JsonObjectProperty, isEmpty: boolean, isShowing: boolean = true): boolean {
    const result = isShowing && (!isEmpty || SurveyHelper.isPropertyVisible(obj, prop, this.options));
    return this.translationStringVisibilityCallback ? this.translationStringVisibilityCallback(obj, prop.name, result) : result;
  }
  public get defaultLocale(): string {
    return surveyLocalization.defaultLocale;
  }
  public getLocaleName(loc: string, inEnglish?: boolean) {
    return editorLocalization.getLocaleName(loc, this.defaultLocale, inEnglish);
  }
  public removeLocale(locale: string) {
    if (this.hasLocale(locale)) {
      const index = this.locales.indexOf(locale);
      const locales = this.locales;
      locales.splice(index, 1);
      this.locales = locales;
    }
  }
  public hasLocale(locale: string): boolean {
    return this.locales.indexOf(locale) > -1;
  }
  // The visible-locales bookkeeping belongs to the multiple-languages mode (its locales matrix);
  // the base model derives everything from the survey strings on reset.
  public resetLocales(): void { }
  public getVisibleLocales(): Array<string> {
    return [];
  }
  public setVisibleLocales(locales: Array<string>): void { }
  public get noStringsText(): string {
    return editorLocalization.getString("ed.translationNoStrings");
  }
  public get placeholderTitleText(): string {
    if (this.options.isMobileView)
      return getLocString("ed.translationsPlaceholderTitleMobile");
    return getLocString("ed.translationsPlaceholderTitle");
  }
  public get placeholderDescriptionText(): string {
    if (this.options.isMobileView)
      return getLocString("ed.translationsPlaceholderDescriptionMobile");
    return getLocString("ed.translationsPlaceholderDescription");
  }
  // The locale columns of the CSV export: every locale with a stored string, the default one
  // first, filtered by localeInitialVisibleCallback. The multiple-languages mode overrides this with
  // its ordered visible-locales list.
  protected getExportLocales(): Array<string> {
    const res: Array<string> = [""];
    if (!!this.root) {
      this.root.fillLocales(res);
    }
    if (!this.localeInitialVisibleCallback) return res;
    return res.filter(loc => !loc || this.localeInitialVisibleCallback(loc));
  }
  // A UI-less model over the same survey for whole-survey bulk operations (CSV import, locale
  // deletion, export from a page-scoped grid).
  protected createHeadlessTranslation(): TranslationBase {
    return new TranslationBase(this.survey, this.options, false);
  }
  // The applied machine translation reaches the real survey directly, so the model rebuilds its
  // surface afterwards. The editor class lives in translation.ts, which imports this module -
  // the instance is passed in so the dependency stays one-way.
  protected setupTranslationEditor<T extends { onApply: () => void }>(editor: T): T {
    editor.onApply = () => {
      this.reset();
    };
    return editor;
  }
  // A tree over the used strings with stored texts, independent of the model's own filters
  // (showAllStrings, the grid's page scope): the progress denominators of the side-by-side
  // languages matrix and element indicators, and the auto-translate string sets. Covers the
  // whole survey unless rootInfo narrows it to an element.
  protected createUsedStringsRoot(rootInfo?: { obj: Base, name: string }): TranslationGroup {
    const info = rootInfo || { obj: this.survey, name: "survey" };
    // Built by the constructor; see reset for why setAsRoot needs no rebuild.
    const root = new TranslationGroup(info.name, info.obj, new TranslationUsedStringsOwner(this));
    root.setAsRoot();
    return root;
  }
  public exportToCSV(): string {
    if (!this.root) {
      this.reset();
    }
    let res = [];
    let headerRow = [];
    const visibleLocales = this.getExportLocales();
    headerRow.push("description ↓ - language →"); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    for (let i = 0; i < visibleLocales.length; i++) {
      headerRow.push(!!visibleLocales[i] ? visibleLocales[i] : getDefaultLocaleName());
    }
    res.push(headerRow);
    let itemsHash = <HashTable<TranslationItem>>{};
    this.fillItemsHash("", this.getBulkOperationsRoot(), itemsHash);
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
        delimiter: TranslationBase.csvDelimiter,
        header: true,
        newline: TranslationBase.newLineDelimiter,
        skipEmptyLines: false, //or 'greedy',
        columns: null //or array of strings
      })
    );
  }

  public importFromNestedArray(rows: string[][]) {
    let locales = rows.shift().slice(1);
    locales = locales.map((loc) => (loc === getDefaultLocaleName() || loc === "default") ? "" : loc);
    const translation = this.createHeadlessTranslation();
    translation.showAllStrings = true;
    let itemsHash = <HashTable<TranslationItem>>{};
    this.fillItemsHash("", translation.root, itemsHash);
    // The reaction on the own writes is suppressed - the grid is rebuilt by the reset below.
    this.runWithoutSurveyReaction(() => {
      rows.forEach((row) => {
        let name = row.shift().trim();
        if (!name) return;
        let item = itemsHash[name];
        if (!item) return;
        this.updateItemWithStrings(name, item, row, locales);
      });
    });
    this.reset();
    if (this.importFinishedCallback)this.importFinishedCallback();
  }

  public exportToSCVFile(fileName: string) {
    const window = DomWindowHelper.getWindow();
    const document = DomDocumentHelper.getDocument();
    if (!window || !document) return;
    var data = this.exportToCSV();
    var blob = new Blob([data], { type: "text/csv" });
    if (window.navigator["msSaveOrOpenBlob"]) {
      window.navigator["msSaveBlob"](blob, fileName);
    } else {
      var elem = document.createElement("a");
      elem.href = URL.createObjectURL(blob);
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
        // The grid is rebuilt after the import, so the TranslationItemString caches are
        // not updated here.
        this.performItemLocTextAction(item, locales[i], val);
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
  public dispose(): void {
    if (!!this.readOnlyHandlerKey) {
      (<any>this.options).unRegisterFunctionOnPropertyValueChanged("readOnly", this.readOnlyHandlerKey);
      this.readOnlyHandlerKey = undefined;
    }
    this.isEmpty = true;
    if (!!this.stringsTableValue) {
      this.stringsTableValue.dispose();
      this.stringsTableValue = undefined;
    }
    if (!!this.stringsSurvey) {
      this.stringsSurvey.dispose();
      this.stringsSurvey = undefined;
    }
    if (!!this.settingsSurveyValue) {
      this.settingsSurveyValue.dispose();
      this.settingsSurveyValue = undefined;
    }
    this.importFinishedCallback = undefined;
    this.availableTranlationsChangedCallback = undefined;
    this.tranlationChangedCallback = undefined;
    super.dispose();
  }
}

// The side panel (the settings survey) of the Translation tab renders its buttons as the footer
// actions of a panel: a panel is the one survey element that renders a row of actions as buttons.
// It needs a visible element to be shown, which is the html question with the text above its buttons.
// The "Actions" group with the CSV buttons is the same in both modes (see TranslationBase.setupCsvActionsPanel).
export const translationActionsPanelName = "translationActions";
export const translationActionsCaptionName = "translationActionsCaption";
export function getTranslationActionsPanelJSON(): any {
  return {
    type: "panel",
    name: translationActionsPanelName,
    // An html question has no title, so the caption is its text.
    elements: [{ type: "html", name: translationActionsCaptionName }]
  };
}
// The look of the side panel buttons: survey-core's medium actions (48px high), stretched to the
// panel width by translation.scss.
export function getTranslationPanelButtonAppearance(style: "brand" | "neutral", mode: "primary" | "secondary"): IActionAppearance {
  return { style: style, mode: mode, size: "medium" };
}
// A side panel button. The title is assigned from editorLocalization, which keeps it in the creator UI locale.
export function createTranslationPanelButton(id: string, titleName: string, appearance: IActionAppearance,
  action: () => void, iconName?: string): Action {
  return new Action({
    id: id,
    title: editorLocalization.getString(titleName),
    iconName: iconName,
    iconSize: "auto",
    appearance: appearance,
    action: action
  });
}
export function escapeTranslationHtmlText(text: string): string {
  return (text || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
// Turns a settings survey panel into a group of stacked buttons. The texts of its html questions
// are creator strings, shown as they are (the settings survey does not process them).
export function setupTranslationButtonsPanel(survey: SurveyModel, panelName: string, getActions: () => Array<Action>): void {
  const panel = <PanelModel>survey.getPanelByName(panelName);
  if (!panel) return;
  panel.questions.forEach((question: Question) => {
    if (question instanceof QuestionHtmlModel) question.ignoreHtmlProgressing = true;
  });
  // The buttons are stacked by translation.scss: an adaptive container would measure them as a
  // row and move the ones that do not fit into its "more" menu.
  panel.allowAdaptiveActions = false;
  panel.onGetFooterActionsCallback = getActions;
  panel.onGetFooterToolbarCssCallback = (): string => "st-language-settings__buttons";
  survey.onUpdatePanelCssClasses.add((_, options) => {
    if (options.panel.name === panelName) {
      options.cssClasses.panel.container += " st-language-settings__group";
    }
  });
}
let translationReadOnlyHandlerCounter = 0;

// The top navigation bar of a strings survey: hosts the toolbar of the machine-translation dialog
// ("Translate from", the machine-translation button, the CSV import and export) above the table.
export function createStringsHeaderNavigationBar(survey: SurveyModel): SurveyElementActionContainer {
  const navigationBar = new SurveyElementActionContainer();
  survey.createNavigationBarCallback = () => navigationBar;
  survey.showCompleteButton = false;
  survey.showNavigationButtons = true;
  survey.navigationButtonsLocation = "top";
  navigationBar.allowResponsiveness();
  navigationBar.setActionsAppearance({ style: "brand", mode: "tertiary", size: "small" });
  return navigationBar;
}

export function createMachineTranslationAction(doAction: () => void): Action {
  return new Action({
    id: "svc-translation-machine",
    iconName: "icon-language",
    iconSize: "auto",
    css: "svc-action-bar-item--right",
    locTitleName: "ed.translateUsigAI",
    component: "sv-action-bar-item",
    action: doAction
  });
}

// Sends the items' source texts to the machine-translation handler and applies the results
// item by item; empty results are skipped, so they never overwrite an existing text.
// applyTranslation decides where the translated text goes: the real survey (the element
// strings dialog) or the dialog's working copy (the machine-translation dialog).
export function runItemsMachineTranslation(
  options: ISurveyCreatorOptions,
  items: Array<TranslationItem>,
  fromLocale: string,
  toLocale: string,
  applyTranslation: (item: TranslationItem, text: string) => void,
  onCompleted: () => void
): void {
  if (items.length === 0) return;
  const strings = items.map(item => item.getTextToTranslateFrom(fromLocale));
  const callback = (translated: Array<string>): void => {
    // No result is a completed request too: the caller may be waiting for it (a disabled button).
    if (!Array.isArray(translated)) {
      onCompleted();
      return;
    }
    for (let i = 0; i < Math.min(items.length, translated.length); i++) {
      if (!!translated[i]) {
        applyTranslation(items[i], translated[i]);
      }
    }
    onCompleted();
  };
  options.doMachineTranslation(getActualLocaleName(fromLocale), getActualLocaleName(toLocale), strings, callback);
}
