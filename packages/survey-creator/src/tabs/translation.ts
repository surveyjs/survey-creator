import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { unparse, parse } from "papaparse";
import { editorLocalization } from "../editorLocalization";
import { SurveyCreator } from "../editor";
import { settings } from "../settings";

import "./translation.scss";
import { IAction } from "survey-knockout";
import { SurveyHelper } from "../surveyHelper";
var templateHtml = require("./translation.html");
var groupTemplateHtml = require("./translation-group.html");

export class TranslationItemBase {
  constructor(public name: string) { }
  public get isGroup() {
    return false;
  }
  public fillLocales(locales: Array<string>) { }
  public mergeLocaleWithDefault(loc: string) { }
}

export class TranslationItem extends TranslationItemBase {
  private values: Survey.HashTable<ko.Observable<string>>;
  public customText: string;
  public afterRender: any;
  public koReadOnly: any = ko.observable(false);
  constructor(
    public name: string,
    public locString: Survey.LocalizableString,
    public defaultValue: string = "",
    private translation: ITranslationLocales,
    private context: any
  ) {
    super(name);
    if (!!this.translation) {
      this.koReadOnly = this.translation.koReadOnly;
    }
    this.values = {};
    var self = this;
    this.afterRender = function (el: any, data: any) {
      if (!!self.translation) {
        self.translation.translateItemAfterRender(self, el, data.locale);
      }
    };
  }
  public get text() {
    return !!this.customText ? this.customText : this.localizableName;
  }
  public get localizableName(): string {
    return editorLocalization.getPropertyName(this.name);
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
  public koValue(loc: string): ko.Observable<string> {
    if (!this.values[loc]) {
      var val = ko.observable(this.getLocText(loc));
      var self = this;
      val.subscribe((newValue) => {
        self.setLocText(loc, newValue);
      });
      this.values[loc] = val;
    }
    return this.values[loc];
  }

  public fillLocales(locales: Array<string>) {
    var keys = this.getKeys();
    for (var i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (
        !!key &&
        locales.indexOf(key) < 0 &&
        key !== Survey.LocalizableString.defaultLocale
      ) {
        locales.push(key);
      }
    }
  }
  private getKeys(): Array<string> {
    if (this.locString["getLocales"]) return this.locString["getLocales"]();
    var json = this.locString.getJson();
    if (!json || typeof json === "string") return [];
    var res = [];
    for (var key in json) {
      res.push(key);
    }
    return res;
  }
  public mergeLocaleWithDefault(loc: string) {
    var locText = this.locString.getLocaleText(loc);
    if (!locText) return;
    this.locString.setLocaleText("", locText);
    this.locString.setLocaleText(loc, null);
  }
}

export interface ITranslationLocales {
  koLocales: any;
  showAllStrings: boolean;
  koReadOnly: any;
  getLocaleName(loc: string): string;
  availableTranlationsChangedCallback: () => void;
  tranlationChangedCallback: (
    locale: string,
    name: string,
    value: string,
    context: any
  ) => void;
  translateItemAfterRender(item: TranslationItem, el: any, locale: string);
  canShowProperty(obj: Survey.Base, prop: Survey.JsonObjectProperty, isEmpty: boolean): boolean;
}

export class TranslationGroup extends TranslationItemBase {
  private isRootValue: boolean = false;
  koExpanded: any;
  koShowHeader: any;
  private itemValues: Array<TranslationItemBase>;
  constructor(
    public name,
    public obj: any,
    public translation: ITranslationLocales = null,
    public text: string = ""
  ) {
    super(name);
    if (!this.text) {
      this.text = name;
    }
    this.koExpanded = ko.observable(false);
    this.koShowHeader = ko.observable(true);
    this.reset();
  }
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
    this.koExpanded(true);
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
  public get koLocales() {
    return !!this.translation ? this.translation.koLocales : null;
  }
  public get localeCount(): number {
    if (!this.koLocales()) return 0;
    var locales = this.koLocales();
    var res = 0;
    for (var i = 0; i < locales.length; i++) {
      if (locales[i].koVisible()) res++;
    }
    return res;
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
  public reset() {
    this.itemValues = [];
    this.fillItems();
  }
  public fillLocales(locales: Array<string>) {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].fillLocales(locales);
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
  private fillItems() {
    if (this.isItemValueArray(this.obj)) {
      this.createItemValues();
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
        var group = new TranslationGroup(
          property.name,
          value,
          this.translation,
          editorLocalization.getPropertyName(property.name)
        );
        if (group.hasItems) {
          this.itemValues.push(group);
        }
      } else {
        this.createGroups(value, property);
      }
    }
    this.sortItems();
    this.keepOnGroupExpanded();
  }
  private keepOnGroupExpanded() {
    if (this.items.length == 1 && this.groups.length == 1) {
      var gr = this.groups[0];
      gr.koExpanded(true);
      if (gr.obj.getType() == "page") {
        gr.koShowHeader(false);
      }
    }
  }
  public expandAll() {
    this.expandCollapseAll(true);
  }
  public collapseAll() {
    this.expandCollapseAll(false);
  }
  private expandCollapseAll(isExpand: boolean) {
    if (!this.isRoot) {
      this.koExpanded(isExpand);
    }
    for (var i = 0; i < this.groups.length; i++) {
      if (isExpand) {
        this.groups[i].expandAll();
      } else {
        this.groups[i].collapseAll();
      }
    }
    this.keepOnGroupExpanded();
  }
  private sortItems() {
    if (!settings.traslation.sortByName) return;
    this.itemValues.sort(function (
      a: TranslationItemBase,
      b: TranslationItemBase
    ) {
      if (!a.name) return -1;
      if (!b.name) return 1;
      return a.name.localeCompare(b.name);
    });
  }
  private getLocalizedProperties(obj: any): Array<Survey.JsonObjectProperty> {
    var res = [];
    var properties = Survey.Serializer.getPropertiesByObj(obj);
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      if (!property.isSerializable || !property.isLocalizable) continue;
      if (property.readOnly || !property.visible) continue;
      res.push(property);
    }
    return res;
  }
  private getArrayProperties(obj: any): Array<Survey.JsonObjectProperty> {
    var res = [];
    var properties = Survey.Serializer.getPropertiesByObj(obj);
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
  private createTranslationItem(obj: any, property: Survey.JsonObjectProperty): TranslationItem {
    const defaultValue = this.getDefaultValue(obj, property);
    const locStr = <Survey.LocalizableString>obj[property.serializationProperty];
    if (!locStr) return null;
    if (!this.showAllStrings && !defaultValue && locStr.isEmpty) return null;
    if (!!this.translation && !!this.translation.canShowProperty && !this.translation.canShowProperty(this.obj, property, locStr.isEmpty)) return null;
    return new TranslationItem(
      property.name,
      locStr,
      defaultValue,
      this.translation,
      obj
    );
  }
  private getDefaultValue(
    obj: any,
    property: Survey.JsonObjectProperty
  ): string {
    if (
      property.name == "title" &&
      property.isLocalizable &&
      !!property.serializationProperty
    ) {
      var locStr = <Survey.LocalizableString>(
        obj[property.serializationProperty]
      );
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
  private createGroups(value: any, property: Survey.JsonObjectProperty) {
    for (var i = 0; i < value.length; i++) {
      var obj = value[i];
      if (!!obj && obj.getType) {
        var name = obj["name"];
        var text = editorLocalization.getPropertyName(name);
        if (!name) {
          var index = "[" + i.toString() + "]";
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
  private createItemValues() {
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

export class Translation implements ITranslationLocales {
  public static csvDelimiter = ",";
  public static newLineDelimiter = "\n";
  public koLocales: any;
  public koRoot: any;
  public koAvailableLanguages: any;
  public koSelectedLanguageToAdd: any;
  public koShowAllStrings: any;
  public koFilteredPage: any;
  public koFilteredPages: any;
  public koIsEmpty: any;
  public koExportToCSVFile: any;
  public koImportFromCSVFile: any;
  public koCanMergeLocaleWithDefault: any;
  public koMergeLocaleWithDefault: any;
  public koMergeLocaleWithDefaultText: any;
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
  public translationStringVisibilityCallback: (obj: Survey.Base, propertyName: string, visible: boolean) => boolean;
  private rootValue: TranslationGroup;
  private surveyValue: Survey.Survey;

  /**
   * The list of toolbar items. You may add/remove/replace them.
   * @see IAction
   */
  public toolbarItems = ko.observableArray<IAction>();

  constructor(
    survey: Survey.Survey,
    showAllStrings: boolean = false,
    public koReadOnly = ko.computed(() => false),
    private onCanShowProperty?: (obj: Survey.Base, prop: Survey.JsonObjectProperty) => boolean,
    private onLocaleSelected?: (locale: string) => boolean
  ) {
    this.koLocales = ko.observableArray([
      {
        locale: "",
        koVisible: ko.observable(true),
        koEnabled: ko.observable(true),
      },
    ]);
    this.koRoot = ko.observable(null);
    this.koShowAllStrings = ko.observable(showAllStrings);
    this.koIsEmpty = ko.observable(true);
    this.koAvailableLanguages = ko.observableArray();
    this.koSelectedLanguageToAdd = ko.observable(null);
    this.koFilteredPage = ko.observable();
    this.koCanMergeLocaleWithDefault = ko.observable(false);
    this.koMergeLocaleWithDefaultText = ko.computed(function () {
      if (!this.koCanMergeLocaleWithDefault()) return "";
      var locText = this.getLocaleName(this.defaultLocale);
      return editorLocalization.getString("ed.translationMergeLocaleWithDefault")["format"](locText);
    }, this);
    this.koFilteredPages = ko.observableArray([
      {
        value: null,
        text: this.showAllPagesText,
      },
    ]);
    var self = this;
    this.koSelectedLanguageToAdd.subscribe(function (newValue) {
      if (!!newValue) {
        self.addLocale(newValue);
      }
    });
    this.koShowAllStrings.subscribe(function (newValue) {
      self.reset();
    });
    this.koFilteredPage.subscribe(function (newValue) {
      self.reset();
    });
    this.koExportToCSVFile = function () {
      self.exportToSCVFile("survey_translation.csv");
    };
    this.koImportFromCSVFile = function (el) {
      if (el.files.length < 1) return;
      self.importFromCSVFile(el.files[0]);
      el.value = "";
    };
    this.koMergeLocaleWithDefault = function () {
      self.mergeLocaleWithDefault();
    };
    this.survey = survey;

    const items: Array<IAction> = [];
    items.push(<IAction>{
      id: "svd-translation-language-selector",
      title: "",
      tooltip: this.selectLanguageOptionsCaption,
      ariaLabel: this.selectLanguageOptionsCaption,
      component: "svd-dropdown",
      action: ko.computed({
        read: () => this.koSelectedLanguageToAdd(),
        write: (val: any) => this.koSelectedLanguageToAdd(val),
      }),
      items: <any>this.koAvailableLanguages,
    });
    items.push({
      id: "svd-translation-show-all-strings",
      title: this.showAllStringsText,
      tooltip: this.showAllStringsText,
      component: "svd-boolean",
      action: ko.computed({
        read: () => this.koShowAllStrings(),
        write: (val: any) => this.koShowAllStrings(val),
      }),
    });
    items.push(<IAction>{
      id: "svd-translation-pages-selector",
      title: "",
      tooltip: "",
      ariaLabel: this.showAllPagesText,
      component: "svd-dropdown",
      action: ko.computed({
        read: () => this.koFilteredPage(),
        write: (val: any) => this.koFilteredPage(val),
      }),
      items: this.koFilteredPages,
    });

    this.toolbarItems(items);
  }
  public get survey(): Survey.Survey {
    return this.surveyValue;
  }
  public set survey(val: Survey.Survey) {
    this.surveyValue = val;
    this.updateFilteredPages();
    this.reset();
  }
  public get root(): TranslationGroup {
    return this.rootValue;
  }
  public get filteredPage(): Survey.Page {
    return this.koFilteredPage();
  }
  public set filteredPage(val: Survey.Page) {
    this.koFilteredPage(val);
  }
  public reset() {
    var rootObj = !!this.filteredPage ? this.filteredPage : this.survey;
    var rootName = !!this.filteredPage ? rootObj["name"] : "survey";
    this.rootValue = new TranslationGroup(rootName, rootObj, this);
    this.root.setAsRoot();
    this.root.reset();
    this.resetLocales();
    this.koIsEmpty(!this.root.hasItems);
    this.koRoot(this.root);
  }
  public get locales(): Array<string> {
    var res = [];
    var locales = this.koLocales();
    for (var i = 0; i < locales.length; i++) {
      res.push(locales[i].locale);
    }
    return res;
  }
  public get defaultLocale(): string {
    return Survey.surveyLocalization.defaultLocale;
  }
  public getLocaleName(loc: string) {
    return editorLocalization.getLocaleName(loc, this.defaultLocale);
  }
  public hasLocale(locale: string): boolean {
    var locales = this.koLocales();
    for (var i = 0; i < locales.length; i++) {
      if (locales[i].locale == locale) return true;
    }
    return false;
  }
  public addLocale(locale: string) {
    if (!this.hasLocale(locale)) {
      var locs = this.locales;
      locs.push(locale);
      this.setLocales(locs);
    }
  }
  public resetLocales() {
    var locales = [""];
    this.root.fillLocales(locales);
    this.setLocales(locales);
  }
  public getSelectedLocales(): Array<string> {
    var res = [];
    var locs = this.koLocales();
    for (var i = 0; i < locs.length; i++) {
      if (locs[i].koVisible()) res.push(locs[i].locale);
    }
    return res;
  }
  public setSelectedLocales(selectedLocales: Array<string>) {
    selectedLocales = selectedLocales || [];
    for (var i = 0; i < selectedLocales.length; i++) {
      if (!this.hasLocale(selectedLocales[i])) {
        this.addLocale(selectedLocales[i]);
      }
    }
    var res = [];
    var locs = this.koLocales();
    for (var i = 0; i < locs.length; i++) {
      var enabled = this.isLocaleEnabled(locs[i].locale);
      locs[i].koVisible(
        enabled && selectedLocales.indexOf(locs[i].locale) > -1
      );
      locs[i].koEnabled(enabled);
    }
    return res;
  }
  public get selectLanguageOptionsCaption() {
    return editorLocalization.getString("ed.translationAddLanguage");
  }
  public canShowProperty(obj: Survey.Base, prop: Survey.JsonObjectProperty, isEmpty: boolean): boolean {
    const result = !isEmpty || !this.onCanShowProperty || this.onCanShowProperty(obj, prop);
    return this.translationStringVisibilityCallback ? this.translationStringVisibilityCallback(obj, prop.name, result) : result;
  }
  public get showAllStrings(): boolean {
    return this.koShowAllStrings();
  }
  public set showAllStrings(val: boolean) {
    this.koShowAllStrings(val);
  }
  public get showAllStringsText(): string {
    return editorLocalization.getString("ed.translationShowAllStrings");
  }
  public get showAllPagesText(): string {
    return editorLocalization.getString("ed.translationShowAllPages");
  }
  public get noStringsText(): string {
    return editorLocalization.getString("ed.translationNoStrings");
  }
  public get exportToCSVText(): string {
    return editorLocalization.getString("ed.translationExportToSCVButton");
  }
  public get importFromCSVText(): string {
    return editorLocalization.getString("ed.translationImportFromSCVButton");
  }
  public exportToCSV(): string {
    let res = [];
    let headerRow = [];
    let visibleLocales = this.getVisibleLocales();
    headerRow.push("description ↓ - language →");
    for (let i = 0; i < visibleLocales.length; i++) {
      headerRow.push(!!visibleLocales[i] ? visibleLocales[i] : "default");
    }
    res.push(headerRow);
    let itemsHash = <Survey.HashTable<TranslationItem>>{};
    this.fillItemsHash("", this.root, itemsHash);
    for (let key in itemsHash) {
      let row = [key];
      let item = itemsHash[key];
      for (let i = 0; i < visibleLocales.length; i++) {
        let val = item.locString.getLocaleText(visibleLocales[i]);
        row.push(!val && i == 0 ? item.defaultValue : val);
      }
      res.push(row);
    }
    let prefix = settings.traslation.exportPrefix;
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
        columns: null, //or array of strings
      })
    );
  }

  public importFromNestedArray(rows: string[][]) {
    var self = this;
    let locales = rows.shift().slice(1);
    if (locales[0] === "default") {
      locales[0] = "";
    }
    let translation = new Translation(this.survey, true);
    let itemsHash = <Survey.HashTable<TranslationItem>>{};
    this.fillItemsHash("", translation.root, itemsHash);
    rows.forEach((row) => {
      let name = row.shift().trim();
      if (!name) return;
      let item = itemsHash[name];
      if (!item) return;
      self.updateItemWithStrings(item, row, locales);
    });
    this.reset();
    if (this.importFinishedCallback) this.importFinishedCallback();
  }

  public exportToSCVFile(fileName: string) {
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
      },
    });
  }
  public mergeLocaleWithDefault() {
    if (!this.hasLocale(this.defaultLocale)) return;
    this.root.mergeLocaleWithDefault(this.defaultLocale);
    this.koLocales([
      {
        locale: "",
        koVisible: ko.observable(true),
        koEnabled: ko.observable(true),
      },
    ]);
    this.reset();
  }
  public expandAll() {
    if (!this.root) return;
    this.root.expandAll();
  }
  public collapseAll() {
    if (!this.root) return;
    this.root.collapseAll();
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
    item: TranslationItem,
    values: Array<string>,
    locales: Array<string>
  ) {
    for (let i = 0; i < values.length && i < locales.length; i++) {
      let val = values[i].trim();
      if (!val) continue;
      item.koValue(locales[i])(val);
    }
  }

  private getVisibleLocales(): Array<string> {
    return this.koLocales()
      .filter((locale) => locale.koVisible())
      .map((locale) => locale.locale);
  }

  private fillItemsHash(
    parentName: string,
    group: TranslationGroup,
    itemsHash: Survey.HashTable<TranslationItem>
  ) {
    let name = parentName ? parentName + "." + group.name : group.name;
    group.locItems.forEach((item) => {
      itemsHash[name + "." + item.name] = item;
    });
    group.groups.forEach((group) => this.fillItemsHash(name, group, itemsHash));
  }
  private setLocales(locs: Array<string>) {
    var locales = this.koLocales();
    for (var i = 0; i < locs.length; i++) {
      let loc = locs[i];
      if (this.hasLocale(loc)) continue;
      let enabled = this.isLocaleEnabled(loc);
      let selected = enabled && (!this.onLocaleSelected || this.onLocaleSelected(loc));
      locales.push({
        locale: loc,
        koVisible: ko.observable(selected),
        koEnabled: ko.observable(enabled),
      });
    }
    this.koLocales(locales);
    this.koCanMergeLocaleWithDefault(this.hasLocale(this.defaultLocale));
    this.updateAvailableTranlations();
  }
  private isLocaleEnabled(locale: string): boolean {
    if (!locale) return true;
    var supported = Survey.surveyLocalization.supportedLocales;
    if (!supported || supported.length <= 0) return true;
    return supported.indexOf(locale) > -1;
  }
  private updateAvailableTranlations() {
    var res = [];
    var locales = (<any>Survey.surveyLocalization).getLocales(true);
    for (var i = 0; i < locales.length; i++) {
      var loc = locales[i];
      if (!loc) continue;
      if (this.hasLocale(loc)) continue;
      if (loc == this.defaultLocale) continue;
      res.push({ value: loc, text: editorLocalization.getLocaleName(loc) });
    }
    this.koSelectedLanguageToAdd(null);
    res.unshift({ value: null, text: this.selectLanguageOptionsCaption });
    this.koAvailableLanguages(res);
    !!this.availableTranlationsChangedCallback &&
      this.availableTranlationsChangedCallback();
  }
  private updateFilteredPages() {
    var res = [{ value: null, text: this.showAllPagesText }];
    for (var i = 0; i < this.survey.pages.length; i++) {
      var page = this.survey.pages[i];
      res.push({ value: page, text: page.name });
    }
    this.koFilteredPages(res);
  }
  dispose() {
    this.importFinishedCallback = undefined;
    this.availableTranlationsChangedCallback = undefined;
    this.tranlationChangedCallback = undefined;
  }
}

export class TranslationViewModel {
  public model: Translation;

  constructor(creator: SurveyCreator) {
    this.model = new Translation(
      creator.survey,
      false,
      ko.computed(() => creator.readOnly),
      (obj: Survey.Base, prop: Survey.JsonObjectProperty): boolean => {
        return SurveyHelper.isPropertyVisible(obj, prop, creator);
      },
      (locale: string): boolean => {
        let options = { locale: locale, isSelected: true };
        creator.onTranslationLocaleInitiallySelected.fire(creator, options);
        return options.isSelected;
      }
    );
    this.model.translationStringVisibilityCallback = (obj: Survey.Base, propertyName: string, visible: boolean) => {
      const options = { obj: obj, propertyName: propertyName, visible: visible };
      !creator.onTranslationStringVisibility.isEmpty && creator.onTranslationStringVisibility.fire(creator, options);
      return options.visible;
    };
    this.model.importFinishedCallback = function () {
      creator.onTranslationImported.fire(creator, {});
    };
    this.model.translateItemAfterRenderCallback = function (item: TranslationItem, el: any, locale: string) {
      if (creator.onTranslateItemAfterRender.isEmpty) return;
      var options = {
        item: item,
        htmlElement: el,
        locale: locale,
        onDestroyCallback: undefined,
      };
      ko.utils.domNodeDisposal.addDisposeCallback(el, () => {
        if (!!options.onDestroyCallback) {
          options.onDestroyCallback();
        }
      });
      creator.onTranslateItemAfterRender.fire(creator, options);
    };
    this.model.availableTranlationsChangedCallback = () => {
      creator.setModified({ type: "TRANSLATIONS_CHANGED" });
    };
    this.model.tranlationChangedCallback = (locale: string, name: string, value: string, context: any) => {
      creator.setModified({
        type: "TRANSLATIONS_CHANGED",
        locale,
        name,
        value,
        context,
      });
    };
    this.model.reset();
  }
}

ko.components.register("survey-translation", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const creator: SurveyCreator = params.creator;
      const viewModel = new TranslationViewModel(creator);

      var subscrViewType = creator.koViewType.subscribe((viewType) => {
        if (viewType === "translation") {
          viewModel.model.survey = creator.survey;
        }
      });

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        subscrViewType.dispose();
        creator.translation.dispose();
        creator.translation = undefined;
      });

      creator.translation = viewModel.model;
      return viewModel.model;
    },
  },
  template: templateHtml,
});

ko.components.register("svd-translation-group", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.model;
      return model;
    },
  },
  template: groupTemplateHtml,
});
