import * as Survey from "survey-knockout";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions,
} from "../src/propertyEditors/propertyEditorBase";

export class EditorOptionsTests implements ISurveyObjectEditorOptions {
  additionalConditionQuestions: Array<any>;
  doValueChangingCallback: (options: any) => any;
  alwaySaveTextInPropertyEditors: boolean;
  showApplyButtonInEditors: boolean;
  useTabsInElementEditor: boolean;
  maxLogicItemsInCondition: number = -1;
  readOnly: boolean;
  propertyName: string;
  getObjectDisplayName(
    obj: Survey.Base,
    reason: string,
    displayName: string
  ): string {
    if (!!displayName) return displayName;
    return obj["name"];
  }
  showTitlesInExpressions: boolean;
  allowEditExpressionsInTextEditor: boolean = true;
  maximumColumnsCount: number;
  onCanShowPropertyCallback(
    object: any,
    property: Survey.JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: Survey.JsonObjectProperty
  ): boolean {
    return true;
  }
  onCanDeleteItemCallback(
    object: any,
    item: Survey.Base,
    allowDelete: boolean
  ): boolean {
    return true;
  }
  onCollectionItemDeletingCallback(
    obj: Survey.Base,
    property: Survey.JsonObjectProperty,
    collection: Array<Survey.Base>,
    item: Survey.Base
  ): boolean {
    return true;
  }
  onIsPropertyReadOnlyCallback(
    obj: Survey.Base,
    property: Survey.JsonObjectProperty,
    readOnly: boolean
  ): boolean {
    return false;
  }
  onIsEditorReadOnlyCallback(
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    readOnly: boolean
  ): boolean {
    return false;
  }
  onItemValueAddedCallback(
    obj: Survey.Base,
    propertyName: string,
    itemValue: Survey.ItemValue,
    itemValues: Array<Survey.ItemValue>
  ) {
    itemValue.value = "item" + (itemValues.length + 1);
    this.propertyName = propertyName;
  }
  onMatrixDropdownColumnAddedCallback(
    matrix: Survey.Question,
    column: Survey.MatrixDropdownColumn,
    columns: Array<Survey.MatrixDropdownColumn>
  ) {
    column.name = "column1";
    matrix["columnCount"] = columns.length;
  }
  onSetPropertyEditorOptionsCallback(
    propertyName: string,
    obj: Survey.Base,
    editorOptions: any
  ) {
    if (propertyName == "choices" && obj["name"] == "hideAddRemove") {
      editorOptions.allowAddRemoveItems = false;
      editorOptions.allowRemoveAllItems = false;
    }
  }
  onPropertyEditorKeyDownCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    event: KeyboardEvent
  ) {}
  onGetErrorTextOnValidationCallback(
    propertyName: string,
    obj: Survey.Base,
    value: any
  ): string {
    return "";
  }
  onValueChangingCallback(options: any) {
    if (!!this.doValueChangingCallback) this.doValueChangingCallback(options);
  }
  public lastPropertyValueChangedName;
  onPropertyValueChanged(
    property: Survey.JsonObjectProperty,
    obj: any,
    newValue: any
  ) {
    this.lastPropertyValueChangedName = property.name;
  }
  onPropertyEditorObjectSetCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase
  ) {}
  onPropertyEditorModalShowDescriptionCallback(
    propertyName: string,
    obj: Survey.Base
  ): any {
    var res = { top: "", bottom: "" };
    if (obj["name"] == "showOnTop") res.top = "topValue";
    if (obj["name"] == "showOnBottom") res.bottom = "bottomValue";
    return res;
  }
  onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string {
    return title;
  }
  onConditionValueSurveyCreatedCallBack(
    valueQuestionName: string,
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    survey: Survey.Survey
  ) {}
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    list: any[]
  ) {
    if (!this.additionalConditionQuestions) return;
    for (var i = 0; i < this.additionalConditionQuestions.length; i++) {
      list.push(this.additionalConditionQuestions[i]);
    }
  }
  startUndoRedoTransaction() {}
  stopUndoRedoTransaction() {}
  public createSurvey(
    json: any = {},
    reason: string = "designer",
    surveyType = Survey.Survey
  ) {
    return new surveyType(json);
  }
}
