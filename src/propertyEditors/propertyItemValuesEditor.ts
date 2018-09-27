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
  }
  public get editorType(): string {
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
  protected get itemValueClasseName(): string {
    var className = this.property ? this.property.type : "itemvalue";
    if (className == this.editorType) className = "itemvalue";
    return className;
  }
  protected getDefinedProperties(): Array<any> {
    if (this.property && this.object && this.object.getType) {
      var properties = SurveyQuestionEditorDefinition.getProperties(
        this.object.getType() + "@" + this.property.name
      );
      if (properties && properties.length > 0) {
        return this.getPropertiesByNames(this.itemValueClasseName, properties);
      }
    }
    return [];
  }
  protected getDefaultProperties(): Array<Survey.JsonObjectProperty> {
    var properties = Survey.JsonObject.metaData.getProperties(
      this.itemValueClasseName
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
    nextValue = getNextValue("item", values);

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
      this.columns,
      this.options,
      this.getItemValueClassName()
    );
  }
  protected createEditorItem(item: any): any {
    var itemValue = this.createEditorItemCore(null);
    itemValue.setData(item);
    return new SurveyPropertyItemValuesEditorItem(
      itemValue,
      this.columns,
      this.options,
      this.getItemValueClassName()
    );
  }
  private createEditorItemCore(item: any) {
    var itemValue = new Survey.ItemValue(item);
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
    var itemValue = new Survey.ItemValue(null);
    itemValue.setData(item);
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
        var valueItem = new Survey.ItemValue("");
        var item: any = {};
        properties.forEach((p, i) => {
          valueItem[p.name] = elements[i];
          item[p.name] = elements[i];
        });
        item.text = valueItem.hasText ? valueItem.text : "";
        items.push(item);
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

    this.koShowTextView(!this.hasVisibleIf());
  }
  private hasVisibleIf(): boolean {
    var items = this.koItems();
    for (var i = 0; i < items.length; i++) {
      if (items[i].item.visibleIf) return true;
    }
    return false;
  }
}

export class SurveyPropertyItemValuesEditorItem extends SurveyNestedPropertyEditorItem {
  constructor(
    public item: Survey.ItemValue,
    public columns: Array<SurveyNestedPropertyEditorColumn>,
    options: ISurveyObjectEditorOptions,
    private className: string = ""
  ) {
    super(item, columns, options);
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
  "itemvalues",
  function(property: Survey.JsonObjectProperty): SurveyPropertyEditorBase {
    return new SurveyPropertyItemValuesEditor(property);
  },
  "itemvalue"
);
