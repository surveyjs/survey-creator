import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { getNextValue } from "../utils/utils";
import { SurveyQuestionEditorDefinition } from "../questionEditors/questionEditorDefinition";
import { SurveyNestedPropertyEditor } from "./propertyNestedPropertyEditor";
import { SurveyPropertyModalEditor } from "../entries";

export class SurveyPropertyItemValuesEditor extends SurveyNestedPropertyEditor {
  private detailDefinition: any;
  private optionsShowTextView: boolean = true;
  koItemsText: any;
  koShowTextView: any;
  changeToTextViewClick: any;
  changeToFormViewClick: any;
  private koItemsTextDelayed: any;
  private isUpdatingItemText: boolean = false;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koShowTextView = ko.observable(true);
    var self = this;
    if (property) {
      this.detailDefinition =
        SurveyQuestionEditorDefinition.definition[this.getItemValueClassName()];
    }
    this.koItemsText = ko.observable("");
    this.koItemsTextDelayed = ko
      .pureComputed(this.koItemsText)
      .extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 400 } });
    this.koItemsTextDelayed.subscribe(function(newValue) {
      self.updateItemsTextOnTyping(newValue);
    });

    this.koActiveView.subscribe(function(newValue) {
      if (newValue == "form") self.updateItems(self.koItemsText());
      else self.updateItemsText();
    });
    this.changeToTextViewClick = function() {
      self.koActiveView("text");
    };
    this.changeToFormViewClick = function() {
      self.koActiveView("form");
    };

    this.modalName =
      "modelEditor" + "itemvalues" + SurveyPropertyModalEditor.idCounter;
    SurveyPropertyModalEditor.idCounter++;
    this.modalNameTarget = "#" + this.modalName;
  }
  public get editorType(): string {
    return "itemvalue[]";
  }
  public get editorTypeTemplate(): string {
    return "itemvalues";
  }
  public get hasDetailButton(): boolean {
    return !!this.detailDefinition;
  }
  protected getItemValueClassName() {
    return this.property ? this.editorType + "@" + this.property.name : "";
  }
  protected getEditorName(): string {
    if (!this.koEditItem() || !this.koEditItem().obj) return "";
    return editorLocalization
      .getString("pe.itemEdit")
      ["format"](this.koEditItem().obj.value);
  }
  public beforeShow() {
    super.beforeShow();
    var props = this.getDefinedProperties();
    if (!!props && props.length > 0) {
      this.createColumns();
    }
    this.updateShowTextViewVisibility();
  }
  protected getProperties(): Array<Survey.JsonObjectProperty> {
    var props = this.getDefinedProperties();
    if (!!props && props.length > 0) return props;
    return this.getDefaultProperties();
  }
  protected getDefinedProperties(): Array<any> {
    if (!this.property || !this.object || !this.object.getType) return [];
    var properties = this.getDefinedListProperties(
      this.object.getType() + "@" + this.property.name
    );
    var res = [];
    for (var i = 0; i < properties.length; i++) {
      res.push(properties[i].property);
    }
    return res;
  }
  protected getDefaultProperties(): Array<Survey.JsonObjectProperty> {
    var properties = Survey.Serializer.getProperties(this.property.className);
    var res = [];
    for (var i = 0; i < properties.length; i++) {
      if (!properties[i].visible) continue;
      res.push(properties[i]);
    }
    return res;
  }
  protected createEditorOptions(): any {
    var options = super.createEditorOptions();
    options.showTextView = true;
    options.itemsEntryType =
      (this.options["options"] &&
        this.options["options"].itemValuesEditorEntryType) ||
      "form";
    return options;
  }
  protected onSetEditorOptions(editorOptions: any) {
    super.onSetEditorOptions(editorOptions);
    this.optionsShowTextView = editorOptions.showTextView;
    this.updateShowTextViewVisibility();
    this.koActiveView(editorOptions.itemsEntryType || "form");
  }
  protected createNewItem(): any {
    var nextValue = null;
    var values = [];
    var items = this.origionalValue;
    if (Array.isArray(items)) {
      values = items.map(function(item) {
        return item.itemValue;
      });
    }
    var itemText = this.property.getBaseValue();
    if (!itemText) {
      itemText = Survey.surveyLocalization.getString("choices_Item");
    }
    nextValue = getNextValue(itemText, values);

    var itemValue = this.createEditorItemValueCore(nextValue);
    if (this.options) {
      this.options.onItemValueAddedCallback(
        this.object,
        this.editablePropertyName,
        itemValue,
        values
      );
    }
    return itemValue;
  }
  protected getItemClassName(item: any): string {
    var className = this.getItemValueClassName();
    return !!className ? className : item.getType();
  }
  private createEditorItemValueCore(item: any) {
    var itemValue = Survey.Serializer.createClass(this.property.className);
    itemValue.setData(item);

    if (this.object) {
      //itemValue["survey"] = this.object.survey;
      //itemValue["object"] = this.object;
    }
    //itemValue.locOwner = this;
    return itemValue;
  }
  private isTextLocalized(item) {
    return Object.keys(item.locText.values).length > 1;
  }
  protected onValueChanged() {
    super.onValueChanged();
    if (this.isBeforeShowCalled) {
      if (this.koActiveView() !== "form") {
        this.updateItemsText();
      }
    }
    this.updateShowTextViewVisibility();
  }
  private isUpdatingOnTyping: boolean = false;
  private updateItemsTextOnTyping(newValue: any) {
    if (this.isUpdatingItemText) return;
    this.isUpdatingOnTyping = true;
    this.updateItems(newValue);
    this.isUpdatingOnTyping = false;
  }
  private updateItemsText() {
    if (this.isUpdatingOnTyping) return;
    this.isUpdatingItemText = true;
    this.koItemsText(this.getItemsText());
    this.isUpdatingItemText = false;
  }
  protected onListDetailViewChanged() {
    super.onListDetailViewChanged();
    this.updateShowTextViewVisibility();
  }
  protected updateItems(text: string) {
    var items = [];
    if (text) {
      var properties = this.getProperties();
      var texts = text.split("\n");
      for (var i = 0; i < texts.length; i++) {
        if (!texts[i]) continue;
        var elements = texts[i].split(Survey.ItemValue.Separator);
        var valueItem = Survey.Serializer.createClass(this.property.className);
        properties.forEach((p, i) => {
          valueItem[p.name] = elements[i];
        });
        items.push(valueItem);
      }
    }
    this.updateArrayValue(items);
  }
  protected getItemsText(): string {
    var items = [];
    for (var i = 0; i < this.origionalValue.length; i++) {
      items.push(this.createItemViewModel(this.origionalValue[i]));
    }
    return items
      .filter(item => !item.cells[0].hasError)
      .map(item =>
        item.cells
          .map(cell => cell.value || "")
          .join(Survey.ItemValue.Separator)
          .replace(/\|$/, "")
      )
      .join("\n");
  }
  private updateShowTextViewVisibility() {
    if (!this.koShowTextView) return;
    if (!this.optionsShowTextView || this.columns.length == 0) {
      this.koShowTextView(false);
      return;
    }

    this.koShowTextView(
      this.isValuePropertyVisible() &&
        !this.hasVisibleIfOrEnableIf() &&
        !this.hasMultipleLanguage()
    );
  }
  private hasMultipleLanguage(): boolean {
    var items = this.origionalValue;
    if (!items || !Array.isArray(items)) return false;
    for (var i = 0; i < items.length; i++) {
      if (items[i].locText.hasNonDefaultText()) return true;
    }
    return false;
  }
  private isValuePropertyVisible(): boolean {
    var valueProp = Survey.Serializer.findProperty("itemvalue", "value");
    return !!valueProp && valueProp.visible && !valueProp.readOnly;
  }
  private hasVisibleIfOrEnableIf(): boolean {
    var items = this.origionalValue;
    if (!items || !Array.isArray(items)) return false;
    for (var i = 0; i < items.length; i++) {
      if (!!items[i].visibleIf || items[i].enableIf) return true;
    }
    return false;
  }
  protected hasDetailsProperties(): boolean {
    return true;
  }
}

SurveyPropertyEditorFactory.registerEditor(
  "itemvalue[]",
  function(property: Survey.JsonObjectProperty): SurveyPropertyEditorBase {
    return new SurveyPropertyItemValuesEditor(property);
  },
  "itemvalue"
);
