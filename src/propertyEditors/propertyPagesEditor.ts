import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions,
} from "./propertyEditorBase";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { editorLocalization } from "../editorLocalization";
import {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem,
} from "./propertyNestedPropertyEditor";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { SurveyHelper } from "../surveyHelper";

export class SurveyPropertyPagesEditor extends SurveyNestedPropertyEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "surveypages";
  }
  public get editorTypeTemplate(): string {
    return "nested-items";
  }
  protected getEditorName(): string {
    if (!this.koEditItem()) return "";
    return editorLocalization
      .getString("pe.columnEdit")
      ["format"](this.koEditItem().obj.name);
  }
  protected getItemClassName(item: any): string {
    return "page";
  }
  protected createNewItem(): any {
    var newName = SurveyHelper.getNewPageName(this.originalValue);
    return new Survey.Page(newName);
  }
  protected getColumnsProperties(): Array<Survey.JsonObjectProperty> {
    return this.getPropertiesByNames("page", ["name", "title"]);
  }
  protected createEditorItem(item: any): SurveyNestedPropertyEditorItem {
    var res = super.createEditorItem(item);
    res.koHasDetails(false);
    var self = this;
    res.koCanDeleteItem = ko.computed(function () {
      return (
        self.originalValue.length > 1 &&
        (!self.options ||
          self.options.onCanDeleteItemCallback(self.object, item))
      );
    });
    return res;
  }
}

SurveyPropertyEditorFactory.registerEditor("surveypages", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyPagesEditor(property);
});
