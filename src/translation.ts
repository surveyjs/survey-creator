import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { ArrayIterator } from "lodash";

export class TranslationItemBase {
  constructor(public name: string) {}
  public get isGroup() {
    return false;
  }
  public fillLocales(locales: Array<string>) {}
}

export class TranslationItem extends TranslationItemBase {
  private values: Survey.HashTable<any>;
  constructor(public name: string, public locString: Survey.LocalizableString) {
    super(name);
    this.values = {};
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
    for (var key in json) {
      if (!!key && locales.indexOf(key) < 0) {
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
    var properties = Survey.JsonObject.metaData.getProperties(
      this.obj.getType()
    );
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      if (!property.isSerializable && !property.isLocalizable) continue;
      if (property.isLocalizable) {
        this.itemValues.push(
          new TranslationItem(
            property.name,
            this.obj[property.serializationProperty]
          )
        );
      } else {
        var value = this.obj[property.name];
        if (!!value && Array.isArray(value)) {
          this.createGroups(value);
        }
      }
    }
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
}

export class Translation implements ITranslationLocales {
  public koLocales: any;
  public koRoot: any;
  private rootValue: TranslationGroup;
  private surveyValue: Survey.Survey;
  constructor(survey: Survey.Survey) {
    this.koLocales = ko.observableArray([""]);
    this.koRoot = ko.observable(null);
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
  private setLocales(locs: Array<string>) {
    this.koLocales(locs);
  }
}
