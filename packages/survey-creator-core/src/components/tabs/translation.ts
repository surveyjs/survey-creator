import {
  property,
  Base,
  propertyArray,
  SurveyModel,
  HashTable,
  LocalizableString,
  JsonObjectProperty,
  Serializer,
  PageModel,
  surveyLocalization,
  ILocalizableString,
  ItemValue,
  QuestionCheckboxModel,
  PopupModel,
  ListModel,
  PanelModelBase,
  QuestionMatrixDropdownModel,
  PanelModel,
  Action,
  IAction,
  QuestionCommentModel
} from "survey-core";
import { unparse, parse } from "papaparse";
import { editorLocalization } from "../../editorLocalization";
import {
  EmptySurveyCreatorOptions,
  ISurveyCreatorOptions,
  settings
} from "../../settings";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";

import "./translation.scss";
import { SurveyHelper } from "../../survey-helper";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { translationCss } from "./translation-theme";

export class TranslationItemBase extends Base {
  constructor(public name: string, protected translation: ITranslationLocales) {
    super();
  }
  public get isGroup() {
    return false;
  }
  public fillLocales(locales: Array<string>) {}
  public mergeLocaleWithDefault(loc: string) {}
  public makeObservable() {
    this.fireOnObjCreating();
  }
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
    public locString: LocalizableString,
    public defaultValue: string = "",
    translation: ITranslationLocales,
    private context: any
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
    if (!json || typeof json === "string") return { default: json };
    return json;
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
  canShowProperty(obj: Base, prop: JsonObjectProperty): boolean;
}

export class TranslationGroup extends TranslationItemBase {
  private isRootValue: boolean = false;
  private itemValues: Array<TranslationItemBase>;
  constructor(
    public name,
    public obj: any,
    translation: ITranslationLocales = null,
    public text: string = ""
  ) {
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
  private createTranslationItem(
    obj: any,
    property: JsonObjectProperty
  ): TranslationItem {
    var defaultValue = this.getDefaultValue(obj, property);
    var locStr = <LocalizableString>obj[property.serializationProperty];
    if (!locStr) return null;
    if (!this.showAllStrings && !defaultValue && locStr.isEmpty) return null;
    if (
      locStr.isEmpty &&
      !!this.translation &&
      !this.translation.canShowProperty(obj, property)
    )
      return null;
    return new TranslationItem(
      property.name,
      locStr,
      defaultValue,
      this.translation,
      obj
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
  private surveyValue: SurveyModel;
  private settingsSurveyValue: SurveyModel;
  private onBaseObjCreatingCallback: (obj: Base) => void;
  private chooseLanguagePopupModel: PopupModel;

  constructor(
    survey: SurveyModel,
    private options: ISurveyCreatorOptions = null
  ) {
    super();
    if (!this.options) this.options = new EmptySurveyCreatorOptions();
    var self = this;
    this.exportToCSVFileUI = function () {
      self.exportToSCVFile("survey_translation.csv");
    };
    this.importFromCSVFileUI = function (el) {
      if (el.files.length < 1) return;
      self.importFromCSVFile(el.files[0]);
      el.value = "";
    };
    this.settingsSurveyValue = this.createSettingsSurvey();
    this.survey = survey;
    this.setupToolbarItems();
  }
  public getType(): string {
    return "translation";
  }
  @propertyArray() locales: Array<string>;
  @property() canMergeLocaleWithDefault: boolean;
  @property() mergeLocaleWithDefaultText: string;
  @property({ defaultValue: false }) readOnly: boolean;
  @property() root: TranslationGroup;
  @property({ defaultValue: false, onSet: (_, target: Translation) => {
    target.reset()
  } }) showAllStrings: boolean;
  @property({ onSet: (_, target: Translation) => {
    target.reset()
  } }) filteredPage: PageModel;
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
  protected createSettingsSurvey(): SurveyModel {
    var json = this.getSettingsSurveyJSON();
    setSurveyJSONForPropertyGrid(json);
    var res = this.options.createSurvey(json, "translation_settings");
    res.css = propertyGridCss;
    res.onValueChanged.add((sender, options) => {
      if (options.name == "locales") {
        this.updateLocales();
      }
    });
    res.onGetPanelTitleActions.add((sender, options) => {
      if (options.panel.name == "languages") {
        const addLanguageAction = new Action({
          id: "svc-translation-choose-language",
          iconName: "icon-add(small)",
          component: "sv-action-bar-item-dropdown",
          popupModel: this.chooseLanguagePopupModel,
          action: (language) => {
            this.chooseLanguagePopupModel.toggleVisibility();
          }
        });
        options.titleActions = [addLanguageAction];
      }
    });
    return res;
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
              titleLocation: "hidden"
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
    const [choices, locales] = this.getSurveyLocales();
    this.localesQuestion.choices = choices;
    this.localesQuestion.value = locales;
  }
  private resetStringsSurvey() {
    this.stringsSurvey = this.createStringsSurvey();
    this.stringsHeaderSurvey = this.createStringsHeaderSurvey();
  }
  private createStringsSurvey(): SurveyModel {
    var json = {};
    setSurveyJSONForPropertyGrid(json, false);
    var survey: SurveyModel = this.options.createSurvey(
      json,
      "translation_strings"
    );
    survey.css = translationCss;
    survey.addNewPage("page");
    this.addTranslationGroupIntoStringsSurvey(survey.pages[0], this.root, null);
    survey.data = this.getStringsSurveyData(survey);
    survey.onMatrixCellCreated.add((sender: SurveyModel, options: any) => {
      if(options.cell.question instanceof QuestionCommentModel){
        options.cell.question.rows = 1;
      }
    })
    survey.onMatrixCellValueChanged.add((sender: SurveyModel, options: any) => {
      var itemValue = ItemValue.getItemByValue(
        options.question.rows,
        options.row.name
      );
      if (!itemValue) return;
      var item: TranslationItem = itemValue["translationData"];
      item.setLocText(options.columnName, options.value);
    });
    survey.currentPage = survey.pages[0];
    return survey;
  }
  private createStringsHeaderSurvey() {
    let json = {};
    setSurveyJSONForPropertyGrid(json, false);
    let survey: SurveyModel = this.options.createSurvey(
      json,
      "translation_strings_header"
    );
    survey.css = translationCss;
    const newPage = survey.addNewPage("page");

    let matrix = <QuestionMatrixDropdownModel>(
      Serializer.createClass("matrixdropdown")
    );
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
      if (panel.questions.length == 0) {
        let matrix = <QuestionMatrixDropdownModel>(
          Serializer.createClass("matrixdropdown")
        );
        matrix.cellType = "comment";
        matrix.titleLocation = "hidden";
        matrix.name = this.getStringsSurveyQuestionName(group, parent);
        matrix.showHeader = false;
        panel.addQuestion(matrix);
        this.addLocaleColumns(matrix);
      }
      let matrix = <QuestionMatrixDropdownModel>panel.questions[0];
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
      this.addTranslationGroupIntoStringsSurvey(pnl, item, group);
    }
  }
  private addLocaleColumns(matrix: QuestionMatrixDropdownModel) {
    var locs = this.getSelectedLocales();
    matrix.rowTitleWidth = "300px";
    const width = "calc((100% - "+ matrix.rowTitleWidth +")/"+ (locs.length + 1) +")";
    const defaultColumn = matrix.addColumn("default", this.getLocaleName(""));
    defaultColumn.width = width;
    for (var i = 0; i < locs.length; i++) {
      let column = matrix.addColumn(locs[i], this.getLocaleName(locs[i]));
      column.width = width
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
      matrix.columns = [];
      this.addLocaleColumns(matrix);
    }
  }
  private addLocaleIntoChoices(
    loc: string,
    choices: Array<ItemValue>,
    addedLocales: any
  ) {
    if (!loc || addedLocales[loc]) return;
    addedLocales[loc] = true;
    choices.push(new ItemValue(loc, editorLocalization.getLocaleName(loc)));
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
    if (val.indexOf(loc) < 0) {
      val.push(loc);
      this.settingsSurvey.setValue(valueName, val);
    }
  }

  private setupToolbarItems() {
    this.chooseLanguagePopupModel = new PopupModel(
      "sv-list",
      {
        model: new ListModel(
          this.getSurveyLocales()[0].map((locale: ItemValue) => ({
            id: locale.value,
            title: locale.text,
            data: locale
          })),
          (item: IAction) => {
            this.addLocale(item.id);
            this.chooseLanguagePopupModel.toggleVisibility();
          },
          false
        )
      },
      "bottom",
      "left"
    );
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
    var locText = this.getLocaleName(this.defaultLocale);
    return editorLocalization
      .getString("ed.translationMergeLocaleWithDefault")
      ["format"](locText);
  }

  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public set survey(val: SurveyModel) {
    this.surveyValue = val;
    this.reset();
  }
  public reset() {
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
  public canShowProperty(obj: Base, prop: JsonObjectProperty): boolean {
    return SurveyHelper.isPropertyVisible(obj, prop, this.options);
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
  }
  public resetLocales() {
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
        columns: null //or array of strings
      })
    );
  }

  public importFromNestedArray(rows: string[][]) {
    var self = this;
    let locales = rows.shift().slice(1);
    if (locales[0] === "default") {
      locales[0] = "";
    }
    let translation = new Translation(this.survey);
    translation.showAllStrings = true;
    let itemsHash = <HashTable<TranslationItem>>{};
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
    item: TranslationItem,
    values: Array<string>,
    locales: Array<string>
  ) {
    for (let i = 0; i < values.length && i < locales.length; i++) {
      let val = values[i].trim();
      if (!val) continue;
      item.values(locales[i]).text = val;
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
    this.importFinishedCallback = undefined;
    this.availableTranlationsChangedCallback = undefined;
    this.tranlationChangedCallback = undefined;
  }
}