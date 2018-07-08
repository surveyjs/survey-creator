import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "./propertyEditorBase";
import { SurveyHelper } from "../surveyHelper";
import { editorLocalization } from "../editorLocalization";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem,
  SurveyNestedPropertyEditorColumn
} from "./propertyNestedPropertyEditor";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyTextItemsEditor extends SurveyNestedPropertyEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "textitems";
  }
  protected getEditorName(): string {
    if (!this.koEditItem()) return "";
    return editorLocalization
      .getString("pe.columnEdit")
      ["format"](this.koEditItem().koName());
  }
  protected createNewEditorItem(): any {
    var newItem = new Survey.MultipleTextItem(this.getNewName());
    //newColumn.colOwner = TODO set colOwner.
    return new SurveyPropertyTextItemsItem(newItem, this.columns, this.options);
  }
  protected createEditorItem(item: any) {
    return new SurveyPropertyTextItemsItem(item, this.columns, this.options);
  }
  protected createItemFromEditorItem(editorItem: any) {
    return editorItem.item;
  }
  protected getProperties(): Array<Survey.JsonObjectProperty> {
    var names = this.getPropertiesNames("multipletext@items", [
      "isRequired",
      "name",
      "title"
    ]);
    return this.getPropertiesByNames("multipletextitem", names);
  }
  private getNewName(): string {
    var objs = [];
    var items = this.koItems();
    for (var i = 0; i < items.length; i++) {
      objs.push({ name: items[i].koName() });
    }
    return SurveyHelper.getNewName(objs, "text");
  }
}

export class SurveyPropertyTextItemsItem extends SurveyNestedPropertyEditorItem {
  /*
  koName: any;
  koTitle: any;
  koIsRequired: any;
  koHasError: any;
  */
  constructor(
    public item: Survey.MultipleTextItem,
    public columns: Array<SurveyNestedPropertyEditorColumn>,
    options: ISurveyObjectEditorOptions
  ) {
    super(item, columns, options);
    /*
    this.koName = ko.observable(item.name);
    this.koTitle = ko.observable(item.name === item.title ? "" : item.title);
    this.koIsRequired = ko.observable(this.item.isRequired);
    this.koHasError = ko.observable(false);
    */
  }
  protected createSurveyQuestionEditor() {
    return new SurveyQuestionEditor(
      this.item,
      null,
      "multipletextitem",
      this.options
    );
  }
  /*
  public hasError(): boolean {
    if (super.hasError()) return true;
    this.koHasError(!this.koName());
    return this.koHasError();
  }
  public apply() {
    super.apply();
    this.item.name = this.koName();
    this.item.title = this.koTitle();
    this.item.isRequired = this.koIsRequired();
  }*/
}

SurveyPropertyEditorFactory.registerEditor("textitems", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyTextItemsEditor(property);
});
