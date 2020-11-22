import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { unparse, parse } from "papaparse";
import { editorLocalization } from "../editorLocalization";
import { SurveyCreator } from "../editor";
import { IToolbarItem } from "../components/toolbar";

import "./translation.scss";
var templateHtml = require("html-loader?interpolate!val-loader!./translation.html");
var groupTemplateHtml = require("html-loader?interpolate!val-loader!./translation-group.html");

export class TranslationItemBase {
  constructor(public name: string) {}
  public get isGroup() {
    return false;
  }
  public fillLocales(locales: Array<string>) {}
  public mergeLocaleWithDefault(loc: string) {}
}

export class TranslationItem extends TranslationItemBase {
  private values: Survey.HashTable<ko.Observable<string>>;
  public customText: string;
  constructor(
    public name: string,
    public locString: Survey.LocalizableString,
    public defaultValue: string = "",
    private translation: ITranslationLocales,
    private context: any
  ) {
    super(name);
    this.values = {};
  }
  public get text() {
    return !!this.customText ? this.customText : this.localizableName;
  }
  public get localizableName(): string {
    return editorLocalization.getPropertyName(this.name);
  }

  public koValue(loc: string): ko.Observable<string> {
    if (!this.values[loc]) {
      var val = ko.observable(this.locString.getLocaleText(loc));
      var self = this;
      val.subscribe((newValue) => {
        self.locString.setLocaleText(loc, newValue);
        !!self.translation.tranlationChangedCallback &&
          self.translation.tranlationChangedCallback(
            loc,
            self.name,
            newValue,
            self.context
          );
      });
      this.values[loc] = val;
    }
    return this.values[loc];
  }

  public fillLocales(locales: Array<string>) {
    var json = this.locString.getJson();
    if (!json || typeof json === "string") return;
    for (var key in json) {
      if (
        !!key &&
        locales.indexOf(key) < 0 &&
        key !== Survey.LocalizableString.defaultLocale
      ) {
        locales.push(key);
      }
    }
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
  getLocaleName(loc: string): string;
  availableTranlationsChangedCallback: () => void;
  tranlationChangedCallback: (
    locale: string,
    name: string,
    value: string,
    context: any
  ) => void;
}

export class TranslationGroup extends TranslationItemBase {
  koExpanded: any;
  koShowHeader: any;
  private itemValues: Array<TranslationItemBase>;
  constructor(
    public name,
    public obj: any,
    public translation: ITranslationLocales = null
  ) {
    super(name);
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
          this.translation
        );
        if (group.hasItems) {
          this.itemValues.push(group);
        }
      } else {
        this.createGroups(value, property);
      }
    }
    this.itemValues.sort(function (
      a: TranslationItemBase,
      b: TranslationItemBase
    ) {
      if (!a.name) return -1;
      if (!b.name) return 1;
      return a.name.localeCompare(b.name);
    });
    if (this.items.length == 1 && this.groups.length == 1) {
      var gr = this.groups[0];
      gr.koExpanded(true);
      if (gr.obj.getType() == "page") {
        gr.koShowHeader(false);
      }
    }
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
  private createTranslationItem(
    obj: any,
    property: Survey.JsonObjectProperty
  ): TranslationItem {
    var defaultValue = this.getDefaultValue(obj, property);
    var locStr = <Survey.LocalizableString>obj[property.serializationProperty];
    if (!locStr) return null;
    if (!this.showAllStrings && !defaultValue && locStr.isEmpty) return null;
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
        if (!name) {
          name = property.name + "[" + i.toString() + "]";
        }
        var group = new TranslationGroup(name, obj, this.translation);
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
  public static csvDelimiter = "|";
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
  public availableTranlationsChangedCallback: () => void;
  public tranlationChangedCallback: (
    locale: string,
    name: string,
    value: string,
    context: any
  ) => void;
  private rootValue: TranslationGroup;
  private surveyValue: Survey.Survey;

  /**
   * The list of toolbar items. You may add/remove/replace them.
   * @see IToolbarItem
   */
  public toolbarItems = ko.observableArray<IToolbarItem>();

  constructor(survey: Survey.Survey, showAllStrings: boolean = false) {
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
      return editorLocalization
        .getString("ed.translationMergeLocaleWithDefault")
        ["format"](locText);
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

    let items: Array<IToolbarItem> = [];
    items.push({
      id: "svd-translation-language-selector",
      title: "",
      tooltip: this.selectLanguageOptionsCaption,
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
    items.push({
      id: "svd-translation-language-selector",
      title: "",
      tooltip: "",
      component: "svd-dropdown",
      action: ko.computed({
        read: () => this.koFilteredPage(),
        write: (val: any) => this.koFilteredPage(val),
      }),
      items: <any>this.koFilteredPages,
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
    return !!this.survey.locale
      ? this.survey.locale
      : Survey.surveyLocalization.defaultLocale;
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
    return unparse(res, {
      quotes: true,
      quoteChar: '"',
      escapeChar: '"',
      delimiter: Translation.csvDelimiter,
      header: true,
      newline: Translation.newLineDelimiter,
      skipEmptyLines: false, //or 'greedy',
      columns: null, //or array of strings
    });
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
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, fileName);
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
      var loc = locs[i];
      if (this.hasLocale(loc)) continue;
      var enabled = this.isLocaleEnabled(loc);
      locales.push({
        locale: loc,
        koVisible: ko.observable(enabled),
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

ko.components.register("survey-translation", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      let creator: SurveyCreator = params.creator;

      let model = new Translation(creator.createSurvey({}, "translation"));
      model.importFinishedCallback = function () {
        creator.onTranslationImported.fire(self, {});
      };
      model.availableTranlationsChangedCallback = () => {
        creator.setModified({ type: "TRANSLATIONS_CHANGED" });
      };
      model.tranlationChangedCallback = (
        locale: string,
        name: string,
        value: string,
        context: any
      ) => {
        creator.setModified({
          type: "TRANSLATIONS_CHANGED",
          locale,
          name,
          value,
          context,
        });
      };

      var subscrViewType = creator.koViewType.subscribe((viewType) => {
        if (viewType === "translation") {
          model.survey = creator.survey;
        }
      });

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        subscrViewType.dispose();
        creator.translation.dispose();
        creator.translation = undefined;
      });

      creator.translation = model;
      return model;
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
