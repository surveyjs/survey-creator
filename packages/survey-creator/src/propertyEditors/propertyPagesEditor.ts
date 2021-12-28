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
import { EditableObject } from "./editableObject";

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
    var propertyNames = ["name", "title"];
    if (!!this.object) {
      propertyNames = this.getPropertiesNames("page@" + this.object.getType(), [
        "name",
        "title",
      ]);
    }
    return this.getPropertiesByNames("page", propertyNames);
  }
  protected createEditorItem(item: any): SurveyNestedPropertyEditorItem {
    var res = super.createEditorItem(item);
    res.koHasDetails(false);
    return res;
  }
  protected canDeleteItem(item: any): boolean {
    var survey = EditableObject.getSurvey(this.object);
    if (!survey) return true;
    return (
      !this.options ||
      this.options.onCanDeleteItemCallback(
        this.object,
        item,
        survey.currentPage !== item
      )
    );
  }
  protected createEditorOptions(): any {
    return { allowAddRemoveItems: true, allowRemoveAllItems: false };
  }
  protected startDragItem() {
    var survey = EditableObject.getSurvey(this.object);
    if (!!survey) {
      survey["onContainsPageCallback"] = function () {
        return true;
      };
    }
  }
  protected endDragItem() {
    var survey = EditableObject.getSurvey(this.object);
    if (!!survey) {
      survey["onContainsPageCallback"] = null;
    }
  }
}

SurveyPropertyEditorFactory.registerEditor("surveypages", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyPagesEditor(property);
});
