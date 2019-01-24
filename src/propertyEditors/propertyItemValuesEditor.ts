import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyObjectProperty } from "../objectProperty";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { getNextValue } from "../utils/utils";
import { SurveyQuestionEditorDefinition } from "../questionEditors/questionEditorDefinition";
import {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem,
  SurveyNestedPropertyEditorEditorCell,
  SurveyNestedPropertyEditorColumn
} from "./propertyNestedPropertyEditor";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { SurveyPropertyModalEditor } from "../entries";

export class SurveyPropertyItemValuesEditor extends SurveyNestedPropertyEditor {
  private detailDefinition: any;
  private optionsShowTextView: boolean = true;
  koItemsText: any;
  koShowTextView: any;
  changeToTextViewClick: any;
  changeToFormViewClick: any;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koShowTextView = ko.observable(true);
    var self = this;
    if (property) {
      this.detailDefinition =
        SurveyQuestionEditorDefinition.definition[this.getItemValueClassName()];
    }
    this.koItemsText = ko.observable("");
    this.koActiveView.subscribe(function(newValue) {
      if (newValue == "form") self.updateItems(self.koItemsText());
      else self.koItemsText(self.getItemsText());
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
    if (!this.koEditItem() || !this.koEditItem().item) return "";
    return editorLocalization
      .getString("pe.itemEdit")
      ["format"](this.koEditItem().item.value);
  }
  public beforeShow() {
    super.beforeShow();
    var props = this.getDefinedProperties();
    if (!!props && props.length > 0) {
      this.createColumns();
    }
  }
  protected getProperties(): Array<Survey.JsonObjectProperty> {
    var props = this.getDefinedProperties();
    if (!!props && props.length > 0) return props;
    return this.getDefaultProperties();
  }
  protected getDefinedProperties(): Array<any> {
    if (this.property && this.object && this.object.getType) {
      var properties = SurveyQuestionEditorDefinition.getProperties(
        this.object.getType() + "@" + this.property.name
      );
      if (properties && properties.length > 0) {
        return this.getPropertiesByNames(this.property.className, properties);
      }
    }
    return [];
  }
  protected getDefaultProperties(): Array<Survey.JsonObjectProperty> {
    var properties = Survey.JsonObject.metaData.getProperties(
      this.property.className
    );
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
  protected createNewEditorItem(): any {
    var nextValue = null;
    var values = this.koItems().map(function(item) {
      return item.item.itemValue;
    });
    var itemText = Survey.surveyLocalization.getString("choices_Item");
    nextValue = getNextValue(itemText, values);

    var itemValue = this.createEditorItemCore(nextValue);
    if (this.options) {
      this.options.onItemValueAddedCallback(
        this.editablePropertyName,
        itemValue,
        values
      );
    }
    return new SurveyPropertyItemValuesEditorItem(
      itemValue,
      () => this.columns,
      this.options,
      this.getItemValueClassName()
    );
  }
  protected createEditorItem(item: any): any {
    var itemValue = this.createEditorItemCore(null);
    itemValue.setData(item);
    return new SurveyPropertyItemValuesEditorItem(
      itemValue,
      () => this.columns,
      this.options,
      this.getItemValueClassName()
    );
  }
  private createEditorItemCore(item: any) {
    var itemValue = Survey.JsonObject.metaData.createClass(
      this.property.className
    );
    itemValue.setData(item);

    if (this.object) {
      itemValue["survey"] = this.object.survey;
      itemValue["object"] = this.object;
    }
    itemValue.locOwner = this;
    return itemValue;
  }
  protected createItemFromEditorItem(editorItem: any) {
    var item = editorItem.item;
    var alwaySaveTextInPropertyEditors =
      this.options && this.options.alwaySaveTextInPropertyEditors;
    if (
      !alwaySaveTextInPropertyEditors &&
      item.text == item.value &&
      !this.isTextLocalized(item)
    ) {
      item.text = null;
    }
    var itemValue = Survey.JsonObject.metaData.createClass(item.getType());
    itemValue.setData(item);
    delete itemValue["survey"];
    delete itemValue["object"];
    return itemValue;
  }
  private isTextLocalized(item) {
    return Object.keys(item.locText.values).length > 1;
  }
  protected onValueChanged() {
    super.onValueChanged();
    if (this.isShowingModal) {
      if (this.koActiveView() !== "form") {
        this.koItemsText(this.getItemsText());
      }
    }
    this.updateShowTextViewVisibility();
  }
  protected onBeforeApply() {
    if (this.koActiveView() !== "form") {
      this.updateItems(this.koItemsText());
    }
    super.onBeforeApply();
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
        var valueItem = Survey.JsonObject.metaData.createClass(
          this.property.className
        );
        properties.forEach((p, i) => {
          valueItem[p.name] = elements[i];
        });
        items.push(valueItem);
      }
    }
    this.koItems(this.getItemsFromValue(items));
  }
  protected getItemsText(): string {
    return this.koItems()
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
      !this.hasVisibleIfOrEnableIf() && !this.hasMultipleLanguage()
    );
  }
  private hasMultipleLanguage(): boolean {
    var items = this.koItems();
    for (var i = 0; i < items.length; i++) {
      //TODO replace with locText.hasNonDefaultText()
      var json = items[i].item.locText.getJson();
      if (!!json && typeof json !== "string") {
        var keys = Object.keys(json);
        if (keys.length > 1) return true;
        return keys[0] != "default";
      }
    }
    return false;
  }
  private hasVisibleIfOrEnableIf(): boolean {
    var items = this.koItems();
    for (var i = 0; i < items.length; i++) {
      if (!!items[i].item.visibleIf || items[i].item.enableIf) return true;
    }
    return false;
  }
}

export class SurveyPropertyItemValuesEditorItem extends SurveyNestedPropertyEditorItem {
  constructor(
    public item: Survey.ItemValue,
    getColumns: () => Array<SurveyNestedPropertyEditorColumn>,
    options: ISurveyObjectEditorOptions,
    private className: string = ""
  ) {
    super(item, getColumns, options);
  }
  protected createSurveyQuestionEditor() {
    return new SurveyQuestionEditor(
      this.item,
      null,
      this.className,
      this.options
    );
  }
}

SurveyPropertyEditorFactory.registerEditor(
  "itemvalue[]",
  function(property: Survey.JsonObjectProperty): SurveyPropertyEditorBase {
    return new SurveyPropertyItemValuesEditor(property);
  },
  "itemvalue"
);
