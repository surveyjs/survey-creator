import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { editorLocalization } from "./editorLocalization";
import { ArrayIterator } from "lodash";
import { TSImportEqualsDeclaration } from "babel-types";

export class TranslationItemBase {
  constructor(public name: string) {}
  public get isGroup() {
    return false;
  }
  public fillLocales(locales: Array<string>) {}
}

export class TranslationItem extends TranslationItemBase {
  private values: Survey.HashTable<any>;
  constructor(
    public name: string,
    public locString: Survey.LocalizableString,
    public defaultValue: string = ""
  ) {
    super(name);
    this.values = {};
  }
  public get text() {
    return editorLocalization.getPropertyName(this.name);
  }
  public koValue(loc: string): any {
    if (!!this.values[loc]) return this.values[loc];
    var val = ko.observable(this.locString.getLocaleText(loc));
    var self = this;
    val.subscribe(function(newValue) {
      self.locString.setLocaleText(loc, newValue);
    });
    this.values[loc] = val;
    return val;
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
}

export interface ITranslationLocales {
  koLocales: any;
  showAllStrings: boolean;
  getLocaleName(loc: string): string;
}

export class TranslationGroup extends TranslationItemBase {
  koExpanded: any;
  private itemValues: Array<TranslationItemBase>;
  constructor(
    public name,
    public obj: any,
    public translation: ITranslationLocales = null
  ) {
    super(name);
    this.koExpanded = ko.observable(false);
    this.reset();
  }
  public get items(): Array<TranslationItemBase> {
    return this.itemValues;
  }
  public get locItems(): Array<TranslationItem> {
    var res = [];
    for (var i = 0; i < this.items.length; i++) {
      if (!this.items[i].isGroup) {
        res.push(this.items[i]);
      }
    }
    return res;
  }
  public get groups(): Array<TranslationGroup> {
    var res = [];
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].isGroup) {
        res.push(this.items[i]);
      }
    }
    return res;
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
  private fillItems() {
    if (this.isItemValueArray(this.obj)) {
      this.createItemValues();
      return;
    }
    if (!this.obj || !this.obj.getType) return;
    var properties = Survey.JsonObject.metaData.getPropertiesByObj(this.obj);
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      if (!property.isSerializable && !property.isLocalizable) continue;
      if (property.isLocalizable) {
        if (!property.readOnly && property.visible) {
          var defaultValue = this.getDefaultValue(property);
          var locStr = <Survey.LocalizableString>(
            this.obj[property.serializationProperty]
          );
          if (!locStr) continue;
          if (!this.showAllStrings && !defaultValue && locStr.isEmpty) continue;
          this.itemValues.push(
            new TranslationItem(property.name, locStr, defaultValue)
          );
        }
      } else {
        var value = this.obj[property.name];
        if (!!value && Array.isArray(value) && value.length > 0) {
          //If ItemValue array?
          if (this.isItemValueArray(value)) {
            this.itemValues.push(
              new TranslationGroup(property.name, value, this.translation)
            );
          } else {
            this.createGroups(value, property);
          }
        }
      }
    }
    this.itemValues.sort(function(
      a: TranslationItemBase,
      b: TranslationItemBase
    ) {
      if (!a.name) return -1;
      if (!b.name) return 1;
      return a.name.localeCompare(b.name);
    });
  }
  private getDefaultValue(property: Survey.JsonObjectProperty): string {
    if (
      property.name == "title" &&
      property.isLocalizable &&
      !!property.serializationProperty
    ) {
      var locStr = <Survey.LocalizableString>(
        this.obj[property.serializationProperty]
      );
      if (
        !!locStr &&
        (!!locStr.onGetTextCallback || locStr.onRenderedHtmlCallback)
      )
        return this.obj["name"];
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
      !!val[0]["setData"]
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
      this.itemValues.push(
        new TranslationItem(val.value, val.locText, val.value)
      );
    }
  }
}

export class Translation implements ITranslationLocales {
  public koLocales: any;
  public koRoot: any;
  public koAvailableLanguages: any;
  public koSelectedLanguageToAdd: any;
  public koShowAllStrings: any;
  private rootValue: TranslationGroup;
  private surveyValue: Survey.Survey;
  constructor(survey: Survey.Survey, showAllStrings: boolean = false) {
    this.koLocales = ko.observableArray([
      { locale: "", koVisible: ko.observable(true) }
    ]);
    this.koRoot = ko.observable(null);
    this.koShowAllStrings = ko.observable(showAllStrings);
    this.koAvailableLanguages = ko.observableArray();
    this.koSelectedLanguageToAdd = ko.observable(null);
    var self = this;
    this.koSelectedLanguageToAdd.subscribe(function(newValue) {
      if (!!newValue) {
        self.addLocale(newValue.value);
      }
    });
    this.koShowAllStrings.subscribe(function(newValue) {
      self.reset();
    });
    this.survey = survey;
  }
  public get survey(): Survey.Survey {
    return this.surveyValue;
  }
  public set survey(val: Survey.Survey) {
    this.surveyValue = val;
    this.rootValue = new TranslationGroup("", this.survey, this);
    this.reset();
  }
  public get root(): TranslationGroup {
    return this.rootValue;
  }
  public reset() {
    this.root.reset();
    this.resetLocales();
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
    if (!loc) {
      loc = this.defaultLocale;
    }
    return editorLocalization.getLocaleName(loc);
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
  private setLocales(locs: Array<string>) {
    var locales = this.koLocales();
    for (var i = 0; i < locs.length; i++) {
      var loc = locs[i];
      if (this.hasLocale(loc)) continue;
      locales.push({ locale: loc, koVisible: ko.observable(true) });
    }
    this.koLocales(locales);
    this.updateAvailableTranlations();
  }
  private updateAvailableTranlations() {
    var res = [];
    var locales = Survey.surveyLocalization.locales;
    for (var loc in locales) {
      if (this.hasLocale(loc)) continue;
      if (loc == this.defaultLocale) continue;
      res.push({ value: loc, text: editorLocalization.getLocaleName(loc) });
    }
    this.koSelectedLanguageToAdd(null);
    this.koAvailableLanguages(res);
  }
}
