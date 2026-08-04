import {
  property, Base, propertyArray, SurveyModel, HashTable, LocalizableString, JsonObjectProperty,
  Serializer, PageModel, surveyLocalization, ILocalizableString, ItemValue, Action,
  PanelModelBase, QuestionMatrixDropdownModel, QuestionMatrixDynamicModel, PanelModel, QuestionCommentModel,
  Helpers, settings as surveySettings,
  MatrixDropdownColumn,
  MatrixCells,
  QuestionMatrixModel,
  DomDocumentHelper, DomWindowHelper
} from "survey-core";
import { SurveyElementActionContainer } from "../action-container-view-model";
import { getActualLocaleName } from "../../utils/creator-locstrings";
import { unparse, parse } from "papaparse";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { EmptySurveyCreatorOptions, ISurveyCreatorOptions, settings } from "../../creator-settings";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { SurveyHelper, getDefaultLocaleName } from "../../survey-helper";
import { translationCss } from "./translation-theme";
import { CreatorDomHelper } from "../../dom-helper";

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
  public getPlaceholder(locale: string, ignorePlaceHolder: boolean = false): string {
    const textLocale = !!locale && locale !== getDefaultLocaleName() ? locale : surveyLocalization.defaultLocale;
    const placeholderText = !ignorePlaceHolder ? editorLocalization.getString("ed.translationPlaceHolder", textLocale) : "";
    return this.getPlaceHolderCore(locale) || placeholderText;
  }
  private getPlaceHolderCore(locale: string): string {
    const res = this.getPlaceholderText(locale);
    if (!!res) return res;
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
    const index = loc.indexOf("-");
    if (index < 0) return "";
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

// The shared core of every translation model: the tab in both modes (all-languages and
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
  public get isSideBySideForms(): boolean {
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
    onSet: (_, target: TranslationBase) => {
      target.reset();
    }
  }) filteredPage: PageModel;
  @property() stringsSurvey: SurveyModel;
  @property() stringsHeaderSurvey: SurveyModel;
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
        this.root.deleteLocaleStrings(locale);
      } finally {
        this.options.stopUndoRedoTransaction();
      }
    });
    this.removeLocale(locale);
    this.reset();
  }
  // The property grid content of the tab. The base model has none - each mode builds its own
  // settings survey (the all-languages locales matrix, the side-by-side language dropdowns).
  protected createSettingsSurvey(): SurveyModel {
    return undefined;
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
    this.stringsHeaderSurvey = this.createStringsHeaderSurvey();
    this.updateReadOnly();
  }
  protected getSurveyStringsArea(): string { return undefined; }
  protected getSurveyStringsHeaderArea(): string { return undefined; }
  protected onSurveyStringsCreated(survey: SurveyModel): void { }
  protected onSurveyStringsHeaderCreated(survey: SurveyModel): void { }
  private createStringsSurvey(): SurveyModel {
    var json = { autoGrowComment: true, allowResizeComment: false };
    setSurveyJSONForPropertyGrid(json, false);
    const survey: SurveyModel = this.options.createSurvey(json, "translation_strings", this, (survey: SurveyModel): void => {
      this.makeSurveyIdSpaceUnique(survey);
      survey.lazyRenderEnabled = true;
      survey.skeletonComponentName = "sd-translation-line-skeleton";
      survey.startLoadingFromJson();
      survey.css = translationCss;
      survey.addNewPage("page");
      this.addTranslationGroupIntoStringsSurvey(survey.pages[0], this.root);
      survey.data = this.getStringsSurveyData(survey);
      survey.endLoadingFromJson();
      this.onSurveyStringsCreated(survey);
    }, this.getSurveyStringsArea());
    const getTransationItem = (question: QuestionMatrixDropdownModel, rowName: any): TranslationItem => {
      var itemValue = ItemValue.getItemByValue(question.rows, rowName);
      return !!itemValue ? itemValue["translationData"] : null;
    };
    survey.onMatrixCellCreated.add((sender: SurveyModel, options: any) => {
      if (options.cell.question instanceof QuestionCommentModel) {
        const cellQuestion = <QuestionCommentModel>options.cell.question;
        const item = getTransationItem(options.question, options.row.name);
        this.setPlaceHolder(cellQuestion, item, options.columnName);
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
      }
    });
    survey.onMatrixCellValueChanging.add((_: SurveyModel, options: any) => {
      const item = getTransationItem(options.question, options.row.name);
      if (!!item) {
        options.value = this.getProcessedTranslationItemText(options.columnName, item.locString, options.value, item.context);
      }
    });
    survey.onMatrixCellValueChanged.add((sender: SurveyModel, options: any) => {
      const item = getTransationItem(options.question, options.row.name);
      if (!!item) {
        this.setItemLocText(item, options.columnName, options.value);
        const colName = options.columnName;
        options.row.cells.forEach(cell => {
          if (colName === getDefaultLocaleName() || cell.column.name.indexOf(colName + "-") === 0)
            this.setPlaceHolder(<QuestionCommentModel>cell.question, item, cell.column.name);
        });
      }
    });
    survey.onUpdatePanelCssClasses.add((sender: SurveyModel, options) => {
      if (options.panel["__translationHasIndent"]) {
        options.cssClasses.panel.content += " st-panel-indent";
      }
    });
    survey.currentPage = survey.pages[0];
    return survey;
  }
  private setPlaceHolder(cellQuestion: QuestionCommentModel, item: TranslationItem, locale: string) {
    cellQuestion.placeholder = item.getPlaceholder(locale);
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
  protected setItemLocText(item: TranslationItem, locale: string, text: string): void {
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
  // by definition; the all-languages mode checks against its visible-locales list.
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
  private createStringsHeaderSurvey() {
    let json = {};
    setSurveyJSONForPropertyGrid(json, false);
    const survey: SurveyModel = this.options.createSurvey(json, "translation_strings_header", this, (survey: SurveyModel): void => {
      this.makeSurveyIdSpaceUnique(survey);
      survey.css = translationCss;
      const newPage = survey.addNewPage("page");

      const matrix = <QuestionMatrixDropdownModel>(Serializer.createClass("matrixdropdown"));
      matrix.name = "stringsHeader";
      matrix.titleLocation = "hidden";
      this.addLocaleColumns(matrix);

      newPage.addQuestion(matrix, 0);
      survey.currentPage = survey.pages[0];
      this.onSurveyStringsHeaderCreated(survey);
    }, this.getSurveyStringsHeaderArea());
    return survey;
  }
  private addTranslationGroupIntoStringsSurvey(
    panel: PanelModelBase,
    group: TranslationGroup) {
    for (var i = 0; i < group.items.length; i++) {
      if (group.items[i].isGroup) continue;
      let item = <TranslationItem>group.items[i];
      let matrix = <QuestionMatrixDropdownModel>(
        Serializer.createClass("matrixdropdown")
      );
      matrix.cellType = "comment";
      matrix.titleLocation = "hidden";
      matrix.name = group.fullName + i;
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
        pnl["__translationHasIndent"] = true;
      }
      this.addTranslationGroupIntoStringsSurvey(pnl, item);
    }
  }
  protected getLocaleColumnName(loc: string): string {
    return !loc ? getDefaultLocaleName() : loc;
  }
  // Shows a source column before the target column (removing a previously added source column
  // first); no source column when the locales are equal. Shared by the machine-translation
  // dialog (a read-only source) and the side-by-side grid (an editable one, like any locale
  // column in the standard mode).
  public updateMatrixSourceColumn(matrix: QuestionMatrixDropdownModel, sourceLoc: string, targetLoc: string, isReadOnly: boolean = false): void {
    if (matrix.columns.length === 2) {
      matrix.columns.splice(0, 1);
    }
    const loc = sourceLoc || "";
    if (loc === (targetLoc || "")) return;
    const column = new MatrixDropdownColumn(this.getLocaleColumnName(loc), this.getLocaleName(loc));
    column.readOnly = isReadOnly;
    matrix.columns.splice(0, 0, column);
  }
  // Columns are [Source, Target] (or [Target] only when the locales are equal).
  public updateSourceTargetHeaderColumns(matrix: QuestionMatrixDropdownModel, sourceLoc: string, targetLoc: string): void {
    const cols = matrix.columns;
    if (cols.length > 1) {
      cols[0].title = this.getSourceTargetHeaderTitle("translationSource", sourceLoc || "");
      cols[1].title = this.getSourceTargetHeaderTitle("translationTarget", targetLoc);
    } else {
      cols[0].title = this.getSourceTargetHeaderTitle("translationTarget", targetLoc);
    }
  }
  private getSourceTargetHeaderTitle(strName: string, locale: string): string {
    return editorLocalization.getString("ed." + strName) + this.getLocaleName(locale);
  }
  // The side-by-side grid keeps its source column editable (like any locale column); the
  // matrix strings popup makes it read-only.
  protected get isSourceColumnReadOnly(): boolean {
    return false;
  }
  protected addLocaleColumns(matrix: QuestionMatrixDropdownModel): void {
    if (this.useSourceTargetColumns) {
      const target = this.targetLocale || "";
      matrix.addColumn(this.getLocaleColumnName(target), this.getLocaleName(target));
      this.updateMatrixSourceColumn(matrix, this.sourceLocale, target, this.isSourceColumnReadOnly);
      if (matrix.name === "stringsHeader") {
        this.updateSourceTargetHeaderColumns(matrix, this.sourceLocale, target);
      }
      return;
    }
    this.getColumnLocales().forEach(loc => {
      matrix.addColumn(this.getLocaleColumnName(loc), this.getLocaleName(loc));
    });
  }
  // The locale columns of the strings grid when the source/target pair is not used. The
  // all-languages mode shows its ordered selected locales (or the single edit locale in the
  // machine-translation dialog).
  protected getColumnLocales(): Array<string> {
    return [""];
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
  public updateStringsSurveyData(): void {
    const survey = this.stringsSurvey;
    if (survey) {
      survey.data = this.getStringsSurveyData(survey);
    }
  }
  private getStringsQuestionData(matrix: QuestionMatrixDropdownModel): any {
    var res = {};
    for (var i = 0; i < matrix.rows.length; i++) {
      var itemValue = matrix.rows[i];
      var item: TranslationItem = itemValue["translationData"];
      var value = item.toJSON();
      if (!Helpers.isValueEmpty(value)) {
        res[itemValue.value] = value;
      }
    }
    return res;
  }
  protected updateHeaderStringsSurveyColumns(): void {
    if (!this.stringsHeaderSurvey) return;
    let matrix = <QuestionMatrixDropdownModel>(
      this.stringsHeaderSurvey.getQuestionByName("stringsHeader")
    );
    matrix.columns = [];
    this.addLocaleColumns(matrix);
  }
  protected updateStringsSurveyColumns(): void {
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
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "locales") {
      this.updateHeaderStringsSurveyColumns();
      this.updateStringsSurveyColumns();
    }
    if (name === "useSourceTargetColumns" ||
      (this.useSourceTargetColumns && (name === "sourceLocale" || name === "targetLocale"))) {
      this.updateStringsSurveyColumnsAndData();
    }
  }
  // Re-runs the column setup on the header and data matrices, keeping the entered values.
  protected updateStringsSurveyColumnsAndData(): void {
    this.updateHeaderStringsSurveyColumns();
    this.updateStringsSurveyColumns();
    this.updateStringsSurveyData();
  }
  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public set survey(val: SurveyModel) {
    this.surveyValue = val;
    this.setVisibleLocales([]);
    this.reset();
  }
  // The object the translation tree is built over. Overridden to scope the strings grid
  // to a single element (the side-by-side matrix strings popup).
  protected getRootTranslationObj(): { obj: Base, name: string } {
    return !!this.filteredPage ? { obj: this.filteredPage, name: this.filteredPage.name } : { obj: this.survey, name: "survey" };
  }
  public reset(alwaysReset: boolean = true): void {
    if (!alwaysReset && !!this.root) return;
    const prevVisibleLocales = this.getVisibleLocales();
    const rootInfo = this.getRootTranslationObj();
    const rootObj = rootInfo.obj;
    const rootName = rootInfo.name;
    this.root = new TranslationGroup(rootName, rootObj, this);
    this.root.setAsRoot();
    this.root.reset();
    this.resetLocales();
    this.isEmpty = !this.root.hasItems;
    this.updateLocalesOnReset(prevVisibleLocales);
    this.resetStringsSurvey();
  }
  // Called between the tree rebuild and the strings-grid rebuild, so a mode can refresh its
  // locale bookkeeping (the all-languages settings survey) before the grid columns are built.
  protected updateLocalesOnReset(prevVisibleLocales: Array<string>): void { }
  private updateReadOnly(): void {
    if (this.settingsSurvey) {
      this.settingsSurvey.readOnly = this.readOnly;
    }
    if (this.stringsSurvey) {
      this.stringsSurvey.readOnly = this.readOnly;
    }
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
  // The visible-locales bookkeeping belongs to the all-languages mode (its locales matrix);
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
  // first, filtered by localeInitialVisibleCallback. The all-languages mode overrides this with
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
    const root = new TranslationGroup(info.name, info.obj, new TranslationUsedStringsOwner(this));
    root.setAsRoot();
    root.reset();
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
    if (!window) return;
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
    super.dispose();
  }
}

// The top navigation bar of a strings-grid header survey: hosts the machine-translation
// button and the other dialog actions in the machine-translation and element strings dialogs.
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
    if (!Array.isArray(translated)) return;
    for (let i = 0; i < Math.min(items.length, translated.length); i++) {
      if (!!translated[i]) {
        applyTranslation(items[i], translated[i]);
      }
    }
    onCompleted();
  };
  options.doMachineTranslation(getActualLocaleName(fromLocale), getActualLocaleName(toLocale), strings, callback);
}
