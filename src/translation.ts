import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { editorLocalization } from "./editorLocalization";

export class TranslationItemBase {
  constructor(public name: string) {}
  public get isGroup() {
    return false;
  }
  public fillLocales(locales: Array<string>) {}
  public mergeLocaleWithDefault(loc: string) {}
}

export class TranslationItem extends TranslationItemBase {
  private values: Survey.HashTable<any>;
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
    return editorLocalization.getPropertyName(this.name);
  }
  public koValue(loc: string): any {
    if (!!this.values[loc]) return this.values[loc];
    var val = ko.observable(this.locString.getLocaleText(loc));
    var self = this;
    val.subscribe(function(newValue) {
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
  public mergeLocaleWithDefault(loc: string) {
    for (var i = 0; i < this.itemValues.length; i++) {
      this.itemValues[i].mergeLocaleWithDefault(loc);
    }
  }
  private fillItems() {
    if (this.isItemValueArray(this.obj)) {
      this.createItemValues();
      return;
    }
    if (!this.obj || !this.obj.getType) return;
    var properties = Survey.Serializer.getPropertiesByObj(this.obj);
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
            new TranslationItem(
              property.name,
              locStr,
              defaultValue,
              this.translation,
              this.obj
            )
          );
        }
      } else {
        var value = this.obj[property.name];
        if (!!value && Array.isArray(value) && value.length > 0) {
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
        this.obj.getType() != "page" &&
        (!!locStr.onGetTextCallback || locStr["onRenderedHtmlCallback"])
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
      if (canAdd) {
        this.itemValues.push(
          new TranslationItem(
            val.value,
            val.locText,
            val.value,
            this.translation,
            val
          )
        );
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
  public koExportToSCVFile: any;
  public koImportFromSCVFile: any;
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
  constructor(survey: Survey.Survey, showAllStrings: boolean = false) {
    this.koLocales = ko.observableArray([
      { locale: "", koVisible: ko.observable(true) }
    ]);
    this.koRoot = ko.observable(null);
    this.koShowAllStrings = ko.observable(showAllStrings);
    this.koIsEmpty = ko.observable(true);
    this.koAvailableLanguages = ko.observableArray();
    this.koSelectedLanguageToAdd = ko.observable(null);
    this.koFilteredPage = ko.observable();
    this.koCanMergeLocaleWithDefault = ko.observable(false);
    this.koMergeLocaleWithDefaultText = ko.computed(function() {
      if (!this.koCanMergeLocaleWithDefault()) return "";
      var locText = this.getLocaleName(this.defaultLocale);
      return editorLocalization
        .getString("ed.translationMergeLocaleWithDefault")
        ["format"](locText);
    }, this);
    this.koFilteredPages = ko.observableArray([
      {
        value: null,
        text: this.showAllPagesText
      }
    ]);
    var self = this;
    this.koSelectedLanguageToAdd.subscribe(function(newValue) {
      if (!!newValue) {
        self.addLocale(newValue.value);
      }
    });
    this.koShowAllStrings.subscribe(function(newValue) {
      self.reset();
    });
    this.koFilteredPage.subscribe(function(newValue) {
      self.reset();
    });
    this.koExportToSCVFile = function() {
      self.exportToSCVFile("survey_translation.csv");
    };
    this.koImportFromSCVFile = function(el) {
      if (el.files.length < 1) return;
      self.importFromSCVFile(el.files[0]);
      el.value = "";
    };
    this.koMergeLocaleWithDefault = function() {
      self.mergeLocaleWithDefault();
    };
    this.survey = survey;
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
      locs[i].koVisible(selectedLocales.indexOf(locs[i].locale) > -1);
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
    var res = [];
    var title = "";
    var visLocales = this.getVisibleLocales();
    for (var i = 0; i < visLocales.length; i++) {
      title +=
        Translation.csvDelimiter +
        (!!visLocales[i] ? visLocales[i] : "default");
    }
    res.push(title);
    var itemsHash = {};
    this.fillItemsHash("", this.root, itemsHash);
    for (var key in itemsHash) {
      var line = key;
      var item = <TranslationItem>itemsHash[key];
      for (var i = 0; i < visLocales.length; i++) {
        var val = item.locString.getLocaleText(visLocales[i]);
        if (!val && i == 0) {
          val = item.defaultValue;
        }
        line += Translation.csvDelimiter + val;
      }
      res.push(line);
    }
    return res.join(Translation.newLineDelimiter);
  }
  public importFromCSV(str: string) {
    if (!str) return;
    var lines = str.split(Translation.newLineDelimiter);
    if (lines.length < 2) return;
    var locales = this.readLocales(lines[0]);
    var translation = new Translation(this.survey, true);
    var itemsHash = [];
    this.fillItemsHash("", translation.root, itemsHash);
    for (var i = 1; i < lines.length; i++) {
      if (!lines[i]) continue;
      var vals = lines[i].split(Translation.csvDelimiter);
      var name = vals[0].trim();
      if (!name) continue;
      var item = itemsHash[name];
      if (!item) continue;
      this.updateItemWithStrings(item, vals, locales);
    }
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
  public importFromSCVFile(file: File) {
    var fileReader = new FileReader();
    var self = this;
    fileReader.onload = function(e) {
      self.importFromCSV(<string>fileReader.result);
    };
    fileReader.readAsText(file);
  }
  public mergeLocaleWithDefault() {
    if (!this.hasLocale(this.defaultLocale)) return;
    this.root.mergeLocaleWithDefault(this.defaultLocale);
    this.koLocales([{ locale: "", koVisible: ko.observable(true) }]);
    this.reset();
  }
  private updateItemWithStrings(
    item: TranslationItem,
    values: Array<string>,
    locales: Array<string>
  ) {
    for (var i = 0; i < values.length - 1 && i < locales.length; i++) {
      var val = values[i + 1].trim();
      if (!val) continue;
      item.koValue(locales[i])(val);
    }
  }
  private getVisibleLocales(): Array<string> {
    var res = [];
    var locales = this.koLocales();
    for (var i = 0; i < locales.length; i++) {
      if (locales[i].koVisible()) {
        res.push(locales[i].locale);
      }
    }
    return res;
  }
  private readLocales(str: string): Array<string> {
    var res = [];
    if (!str) return res;
    var locs = str.split(Translation.csvDelimiter);
    for (var i = 1; i < locs.length; i++) {
      var loc = locs[i].trim();
      if (loc == "default") loc = "";
      res.push(loc);
    }
    return res;
  }
  private fillItemsHash(
    parentName: string,
    group: TranslationGroup,
    itemsHash: any
  ) {
    var name = parentName;
    if (!!name) name += ".";
    name += group.name;
    var items = group.locItems;
    for (var i = 0; i < items.length; i++) {
      itemsHash[name + "." + items[i].name] = items[i];
    }
    var groups = group.groups;
    for (var i = 0; i < groups.length; i++) {
      this.fillItemsHash(name, groups[i], itemsHash);
    }
  }
  private setLocales(locs: Array<string>) {
    var locales = this.koLocales();
    for (var i = 0; i < locs.length; i++) {
      var loc = locs[i];
      if (this.hasLocale(loc)) continue;
      locales.push({ locale: loc, koVisible: ko.observable(true) });
    }
    this.koLocales(locales);
    this.koCanMergeLocaleWithDefault(this.hasLocale(this.defaultLocale));
    this.updateAvailableTranlations();
  }
  private updateAvailableTranlations() {
    var res = [];
    var locales = Survey.surveyLocalization.getLocales();
    for (var i = 0; i < locales.length; i++) {
      var loc = locales[i];
      if (!loc) continue;
      if (this.hasLocale(loc)) continue;
      if (loc == this.defaultLocale) continue;
      res.push({ value: loc, text: editorLocalization.getLocaleName(loc) });
    }
    this.koSelectedLanguageToAdd(null);
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
}
