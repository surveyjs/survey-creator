import * as Survey from "survey-knockout";

export var settings = {
  traslation: {
    sortByName: true,
  },
  operators: {
    empty: [],
    notempty: [],
    equal: ["!file"],
    notequal: ["!file"],
    contains: ["checkbox", "text", "comment"],
    notcontains: ["checkbox", "text", "comment"],
    anyof: ["selectbase"],
    allof: ["checkbox"],
    greater: ["!checkbox", "!imagepicker", "!boolean", "!file"],
    less: ["!checkbox", "!imagepicker", "!boolean", "!file"],
    greaterorequal: ["!checkbox", "!imagepicker", "!boolean", "!file"],
    lessorequal: ["!checkbox", "!imagepicker", "!boolean", "!file"],
  },
  //TODO add maximumColumnCount
};

export interface ISurveyCreatorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  readOnly: boolean;
  maxLogicItemsInCondition: number;
  showTitlesInExpressions: boolean;
  allowEditExpressionsInTextEditor: boolean;
  getObjectDisplayName(
    obj: Survey.Base,
    reason: string,
    displayName: string
  ): string;
  onCanShowPropertyCallback(
    object: any,
    property: Survey.JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: Survey.JsonObjectProperty
  ): boolean;
  onCanDeleteItemCallback(
    object: any,
    item: Survey.Base,
    allowDelete: boolean
  ): boolean;
  onCollectionItemDeletingCallback(
    obj: Survey.Base,
    property: Survey.JsonObjectProperty,
    collection: Array<Survey.Base>,
    item: Survey.Base
  ): boolean;
  onItemValueAddedCallback(
    obj: Survey.Base,
    propertyName: string,
    itemValue: Survey.ItemValue,
    itemValues: Array<Survey.ItemValue>
  );
  onMatrixDropdownColumnAddedCallback(
    matrix: Survey.Question,
    column: Survey.MatrixDropdownColumn,
    columns: Array<Survey.MatrixDropdownColumn>
  );
  onSetPropertyEditorOptionsCallback(
    propertyName: string,
    obj: Survey.Base,
    editorOptions: any
  );
  onGetErrorTextOnValidationCallback(
    propertyName: string,
    obj: Survey.Base,
    value: any
  ): string;
  onValueChangingCallback(options: any);
  onPropertyValueChanged(
    property: Survey.JsonObjectProperty,
    obj: any,
    newValue: any
  );
  onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string;
  startUndoRedoTransaction();
  stopUndoRedoTransaction();
  createSurvey(
    json: any,
    reason: string,
    surveyType?: new (json: any) => Survey.Survey
  );
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: any,
    list: any[]
  );
}

export class EmptySurveyCreatorOptions implements ISurveyCreatorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  readOnly: boolean;
  maxLogicItemsInCondition: number;
  showTitlesInExpressions: boolean;
  allowEditExpressionsInTextEditor: boolean;
  getObjectDisplayName(
    obj: Survey.Base,
    reason: string,
    displayName: string
  ): string {
    return displayName;
  }
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
    return allowDelete;
  }
  onCollectionItemDeletingCallback(
    obj: Survey.Base,
    property: Survey.JsonObjectProperty,
    collection: Array<Survey.Base>,
    item: Survey.Base
  ): boolean {
    return true;
  }
  onItemValueAddedCallback(
    obj: Survey.Base,
    propertyName: string,
    itemValue: Survey.ItemValue,
    itemValues: Array<Survey.ItemValue>
  ) {}
  onMatrixDropdownColumnAddedCallback(
    matrix: Survey.Question,
    column: Survey.MatrixDropdownColumn,
    columns: Array<Survey.MatrixDropdownColumn>
  ) {}
  onSetPropertyEditorOptionsCallback(
    propertyName: string,
    obj: Survey.Base,
    editorOptions: any
  ) {}
  onGetErrorTextOnValidationCallback(
    propertyName: string,
    obj: Survey.Base,
    value: any
  ): string {
    return null;
  }
  onValueChangingCallback(options: any) {}
  onPropertyValueChanged(
    property: Survey.JsonObjectProperty,
    obj: any,
    newValue: any
  ) {}
  onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string {
    return title;
  }
  startUndoRedoTransaction() {}
  stopUndoRedoTransaction() {}
  createSurvey(
    json: any,
    reason: string,
    surveyType?: new (json: any) => Survey.SurveyModel
  ) {
    return new Survey.SurveyModel(json);
  }
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: any,
    list: any[]
  ) {}
}
