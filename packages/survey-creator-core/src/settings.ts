import {
  Base,
  ItemValue,
  JsonObjectProperty,
  MatrixDropdownColumn,
  Question,
  SurveyModel
} from "survey-core";
/**
 * List available question convert modes
 */
export enum QuestionConvertMode {
  AllTypes, 
  CompatibleTypes
}
export var settings = {
  traslation: {
    sortByName: true
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
    lessorequal: ["!checkbox", "!imagepicker", "!boolean", "!file"]
  },
  visibleLogicActions: [],
  defaultNewSurveyJSON: { pages: [{ name: "page1" }] },
  /**
   * Determines which types of questions the conversion will be available for.
   */
   questionConvertMode: QuestionConvertMode.AllTypes

  //TODO add maximumColumnCount
};

export interface ISurveyCreatorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  readOnly: boolean;
  maxLogicItemsInCondition: number;
  showTitlesInExpressions: boolean;
  allowEditExpressionsInTextEditor: boolean;
  maximumColumnsCount: number;
  getObjectDisplayName(obj: Base, reason: string, displayName: string): string;
  onCanShowPropertyCallback(
    object: any,
    property: JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean;
  onIsPropertyReadOnlyCallback(
    obj: Base,
    property: JsonObjectProperty,
    readOnly: boolean,
    parentObj: Base,
    parentProperty: JsonObjectProperty
  ): boolean;
  onCanDeleteItemCallback(
    object: any,
    item: Base,
    allowDelete: boolean
  ): boolean;
  onCollectionItemDeletingCallback(
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base
  ): boolean;
  onItemValueAddedCallback(
    obj: Base,
    propertyName: string,
    itemValue: ItemValue,
    itemValues: Array<ItemValue>
  );
  onMatrixDropdownColumnAddedCallback(
    matrix: Question,
    column: MatrixDropdownColumn,
    columns: Array<MatrixDropdownColumn>
  );
  onSetPropertyEditorOptionsCallback(
    propertyName: string,
    obj: Base,
    editorOptions: any
  );
  onGetErrorTextOnValidationCallback(
    propertyName: string,
    obj: Base,
    value: any
  ): string;
  onValueChangingCallback(options: any);
  //onPropertyValueChanged(
  onSurveyElementPropertyValueChanged(
    property: JsonObjectProperty,
    obj: any,
    newValue: any
  );
  onGetElementEditorTitleCallback(obj: Base, title: string): string;
  startUndoRedoTransaction();
  stopUndoRedoTransaction();
  createSurvey(
    json: any,
    reason: string,
    surveyType?: new (json: any) => SurveyModel
  );
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Base,
    editor: any,
    list: any[]
  );
}

export class EmptySurveyCreatorOptions implements ISurveyCreatorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  readOnly: boolean;
  maxLogicItemsInCondition: number;
  showTitlesInExpressions: boolean;
  allowEditExpressionsInTextEditor: boolean = true;
  maximumColumnsCount: number;
  getObjectDisplayName(obj: Base, reason: string, displayName: string): string {
    return displayName;
  }
  onCanShowPropertyCallback(
    object: any,
    property: JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean {
    return true;
  }
  onIsPropertyReadOnlyCallback(
    obj: Base,
    property: JsonObjectProperty,
    readOnly: boolean,
    parentObj: Base,
    parentProperty: JsonObjectProperty
  ): boolean {
    return readOnly;
  }

  onCanDeleteItemCallback(
    object: any,
    item: Base,
    allowDelete: boolean
  ): boolean {
    return allowDelete;
  }
  onCollectionItemDeletingCallback(
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base
  ): boolean {
    return true;
  }
  onItemValueAddedCallback(
    obj: Base,
    propertyName: string,
    itemValue: ItemValue,
    itemValues: Array<ItemValue>
  ) {}
  onMatrixDropdownColumnAddedCallback(
    matrix: Question,
    column: MatrixDropdownColumn,
    columns: Array<MatrixDropdownColumn>
  ) {}
  onSetPropertyEditorOptionsCallback(
    propertyName: string,
    obj: Base,
    editorOptions: any
  ) {}
  onGetErrorTextOnValidationCallback(
    propertyName: string,
    obj: Base,
    value: any
  ): string {
    return null;
  }
  onValueChangingCallback(options: any) {}
  onSurveyElementPropertyValueChanged(
    //onPropertyValueChanged(
    property: JsonObjectProperty,
    obj: any,
    newValue: any
  ) {}
  onGetElementEditorTitleCallback(obj: Base, title: string): string {
    return title;
  }
  startUndoRedoTransaction() {}
  stopUndoRedoTransaction() {}
  createSurvey(
    json: any,
    reason: string,
    surveyType?: new (json: any) => SurveyModel
  ) {
    return new SurveyModel(json);
  }
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Base,
    editor: any,
    list: any[]
  ) {}
}
