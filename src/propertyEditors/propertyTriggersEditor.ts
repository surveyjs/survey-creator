import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyOneSelectedEditor } from "./propertyOneSelectedEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { ExpressionToDisplayText } from "../expressionToDisplayText";
import { SurveyElementEditorContentModel } from "../questionEditors/questionEditor";
import { SurveyElementSelector } from "./surveyElementSelector";
import { EditableObject } from "./editableObject";

export class SurveyPropertyTriggersEditor extends SurveyPropertyOneSelectedEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "triggers";
  }
  public getItemText(item: any, counter: any = null): any {
    if (!item.expression)
      return editorLocalization.getString("pe.triggerNotSet");
    var res = new ExpressionToDisplayText(
      this.getSurvey(),
      this.options
    ).toDisplayText(item.expression);
    return editorLocalization.getString("pe.triggerRunIf") + ": " + res;
  }
  protected getAvailableClasses(): Array<any> {
    var classes = Survey.Serializer.getChildrenClasses("surveytrigger", true);
    var res = [];
    for (var i = 0; i < classes.length; i++) {
      var name = classes[i].name;
      if (name == "visibletrigger") continue;
      res.push({
        value: name,
        text: editorLocalization.getTriggerName(name),
      });
    }
    return res;
  }
  protected onCreateEditor(editor: SurveyElementEditorContentModel) {
    var expressionEditor = editor.getPropertyEditorByName("expression");
    if (!!expressionEditor && expressionEditor.editor) {
      expressionEditor.editor["isEditorShowing"] = true;
    }
  }
  private getSurvey(): Survey.SurveyModel {
    return !!this.object ? this.object : this.editingObject;
  }
}

export class SurveyPropertySelectItemsEditor extends SurveyPropertyEditorBase {
  private itemSelectorValue: SurveyElementSelector;
  public koItemSelector: any;
  public koSelectedForDelete: any;
  public koDummy: any;
  public koItems: any;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koItemSelector = ko.observable(null);
    this.koSelectedForDelete = ko.observableArray();
    this.koDummy = ko.observable(0);
    this.koItems = ko.computed(() => {
      this.koDummy();
      return this.originalValue;
    });
  }
  public get editorTypeTemplate(): string {
    return "triggersitems";
  }
  public deleteItems() {
    var items = this.koSelectedForDelete();
    for (var i = 0; i < items.length; i++) {
      this.deleteItem(items[i]);
    }
    this.resetItems();
  }
  public addItem() {
    if (this.originalValue.indexOf(this.itemSelectorValue.value) > -1) return;
    this.originalValue.push(this.itemSelectorValue.value);
    this.itemSelectorValue.value = "";
    this.resetItems();
  }
  public beforeShow() {
    super.beforeShow();
    var survey = EditableObject.getSurvey(this.object);
    this.itemSelectorValue = new SurveyElementSelector(
      survey,
      this.getElementType(),
      !!this.options && this.options.showTitlesInExpressions
    );
    this.koItemSelector(this.itemSelectorValue);
    this.resetItems();
  }
  protected getElementType(): string {
    return "question";
  }
  private deleteItem(item: string) {
    if (!Array.isArray(this.originalValue)) return;
    var index = this.originalValue.indexOf(item);
    if (index >= 0) {
      this.originalValue.splice(index, 1);
    }
  }
  private resetItems() {
    this.koDummy(this.koDummy() + 1);
  }
}

export class SurveyPropertySelectPagesEditor extends SurveyPropertySelectItemsEditor {
  public get editorType(): string {
    return "pages";
  }
  protected getElementType(): string {
    return "page";
  }
}

export class SurveyPropertySelectQuestionsEditor extends SurveyPropertySelectItemsEditor {
  public get editorType(): string {
    return "questions";
  }
}

SurveyPropertyEditorFactory.registerEditor("triggers", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyTriggersEditor(property);
});

SurveyPropertyEditorFactory.registerEditor("pages", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertySelectPagesEditor(property);
});

SurveyPropertyEditorFactory.registerEditor("questions", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertySelectQuestionsEditor(property);
});
