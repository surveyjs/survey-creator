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
}

export class TranslationGroup extends TranslationItemBase {
  koExpanded: any;
  itemValues: Array<TranslationItemBase>;
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
    return !!this.koLocales ? this.koLocales().length : 0;
  }
  public get locWidth(): string {
    var count = this.localeCount;
    if (count < 2) return "100%";
    return Math.floor(100 / count).toString() + "%";
  }
  public getLocaleName(loc: string) {
    return editorLocalization.getLocaleName(loc);
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
  private fillItems() {
    if (this.isItemValueArray(this.obj)) {
      this.createItemValues();
      return;
    }
    if (!this.obj || !this.obj.getType) return;
    var properties = Survey.JsonObject.metaData.getProperties(
      this.obj.getType()
    );
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      if (!property.isSerializable && !property.isLocalizable) continue;
      if (property.isLocalizable) {
        if (!property.readOnly && property.visible) {
          this.itemValues.push(
            new TranslationItem(
              property.name,
              this.obj[property.serializationProperty],
              this.getDefaultValue(property)
            )
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
            this.createGroups(value);
          }
        }
      }
    }
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
  private createGroups(value: any) {
    for (var i = 0; i < value.length; i++) {
      var obj = value[i];
      if (!!obj && obj.getType) {
        this.itemValues.push(
          new TranslationGroup(obj["name"], obj, this.translation)
        );
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
  private rootValue: TranslationGroup;
  private surveyValue: Survey.Survey;
  constructor(survey: Survey.Survey) {
    this.koLocales = ko.observableArray([""]);
    this.koRoot = ko.observable(null);
    this.koAvailableLanguages = ko.observableArray();
    this.koSelectedLanguageToAdd = ko.observable(null);
    var self = this;
    this.koSelectedLanguageToAdd.subscribe(function(newValue) {
      if (!!newValue) {
        self.addLocale(newValue.value);
      }
    });
    this.survey = survey;
  }
  public get survey(): Survey.Survey {
    return this.surveyValue;
  }
  public set survey(val: Survey.Survey) {
    this.surveyValue = val;
    this.rootValue = new TranslationGroup("survey", this.survey, this); //TODO translate
    this.reset();
    this.koRoot(this.root);
  }
  public get root(): TranslationGroup {
    return this.rootValue;
  }
  public reset() {
    this.root.reset();
    this.resetLocales();
  }
  public get locales(): Array<string> {
    return this.koLocales();
  }
  public addLocale(locale: string) {
    if (this.locales.indexOf(locale) < 0) {
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
  private setLocales(locs: Array<string>) {
    this.koLocales(locs);
    this.updateAvailableTranlations();
  }
  private updateAvailableTranlations() {
    var res = [];
    var locales = Survey.surveyLocalization.locales;
    for (var loc in locales) {
      if (this.locales.indexOf(loc) > -1) continue;
      if (loc == Survey.surveyLocalization.defaultLocale) continue;
      res.push({ value: loc, text: editorLocalization.getLocaleName(loc) });
    }
    this.koSelectedLanguageToAdd(null);
    this.koAvailableLanguages(res);
  }
}
