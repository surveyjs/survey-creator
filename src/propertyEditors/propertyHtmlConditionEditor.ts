import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { editorLocalization } from "../entries";

export class SurveyPropertyHtmlConditionEditor extends SurveyPropertyItemsEditor {
  public selectedObjectEditor: any;
  public koSelected: any;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    this.selectedObjectEditor = ko.observable(null);
    this.koSelected = ko.observable(null);
    this.koSelected.subscribe(function(newValue) {
      if (!!self.selectedObjectEditor()) {
        self.selectedObjectEditor().apply();
      }
      var editor =
        newValue != null
          ? new SurveyQuestionEditor(
              newValue.htmlConditionItem,
              null,
              null,
              self.options
            )
          : null;
      self.selectedObjectEditor(editor);
    });
    this.onDeleteClick = function() {
      self.koItems.remove(self.koSelected());
    };
  }
  public get editorType(): string {
    return "htmlconditions";
  }
  protected AddItem() {
    super.AddItem();
    this.koSelected(this.koItems()[this.koItems().length - 1]);
  }
  protected onValueChanged() {
    super.onValueChanged();
    if (this.koSelected) {
      this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
    }
  }
  protected createEditorItem(item: any) {
    var jsonObj = new Survey.JsonObject();
    var htmlConditionItem = Survey.JsonObject.metaData.createClass(
      "htmlconditionitem"
    );
    jsonObj.toObject(item, htmlConditionItem);
    this.setItemProperties(htmlConditionItem);
    htmlConditionItem.survey = this.object;
    return new SurveyPropertyHtmlConditionItem(htmlConditionItem);
  }
  protected createNewEditorItem(): any {
    return this.createEditorItem(
      Survey.JsonObject.metaData.createClass("htmlconditionitem")
    );
  }

  protected createItemFromEditorItem(editorItem: any) {
    var item = <SurveyPropertyHtmlConditionItem>editorItem;
    return item.htmlConditionItem;
  }
  private setItemProperties(validator: any) {
    if (this.object) {
      validator["survey"] = this.object.survey;
    }
    validator.locOwner = this;
  }
}

export class SurveyPropertyHtmlConditionItem {
  public koText: any;
  constructor(public htmlConditionItem: Survey.Base) {
    this.koText = ko.observable(this.text);
    var self = this;
    htmlConditionItem.registerFunctionOnPropertyValueChanged(
      "expression",
      function() {
        self.objectChanged();
      }
    );
  }
  public get text() {
    var expression = this.htmlConditionItem["expression"];
    return (
      editorLocalization.getString("ed.completedHtmlOnConditionItemText") +
      " " +
      (!!expression ? expression : "?")
    );
  }
  public objectChanged() {
    this.koText(this.text);
  }
}

SurveyPropertyEditorFactory.registerEditor("htmlconditions", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyHtmlConditionEditor(property);
});
