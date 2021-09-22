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
    sortByName: true,
    //Set it to \xef\xbb\xbf; to tell system that it is UTF8 file. You can use other prefix as well
    exportPrefix: ""
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
  defaultNewSurveyJSON: { pages: [{ name: "page1" }] },
  logic: {
    visibleActions: [],
    logicItemTitleMaxChars: 50
  },
  /**
   * Determines which types of questions the conversion will be available for.
   */
  questionConvertMode: QuestionConvertMode.AllTypes,
  propertyGrid: {
    allowCollapse: true,
    useButtonGroup: true,
    maxCharsInButtonGroup: 25,
    showNavigationButtons: false,
    maximumColumnsCount: 0,
    maximumChoicesCount: 0,
    maximumRowsCount: 0,
    maximumRateValues: 0,
    generalTabName: "general"
  },
  /**
   * Notification settings
   */
  notifications: {
    lifetime: 2000
  },
  /**
   * Auto save parameters
   */
  autoSave: {
    delay: 500
  },
  /**
   * Drag Drop Settings
   */
  dragDrop: {
    restrictDragQuestionBetweenPages: false
  },
  /**
   * Creator layout settings
   */
  layout: {
    showTabs: true,
    showToolbar: true
  }
};
export interface ICollectionItemAllowOperations {
  allowDelete: boolean;
  allowEdit: boolean;
}

export interface ISurveyCreatorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  readOnly: boolean;
  maxLogicItemsInCondition: number;
  showTitlesInExpressions: boolean;
  showObjectTitles: boolean;
  allowEditExpressionsInTextEditor: boolean;
  maximumColumnsCount: number;
  maximumChoicesCount: number;
  maximumRowsCount: number;
  maximumRateValues: number;
  getObjectDisplayName(obj: Base, reason: string, displayName: string): string;
  onCanShowPropertyCallback(
    object: any,
    property: JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean;
  onPropertyEditorCreatedCallback(
    object: any,
    property: JsonObjectProperty,
    editor: Question
  );
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
  onCollectionItemAllowingCallback(
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base,
    options: ICollectionItemAllowOperations
  ): void;
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
  onConditionGetTitleCallback(
    expression: string,
    title: string
  ): string;
}

export class EmptySurveyCreatorOptions implements ISurveyCreatorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  readOnly: boolean;
  maxLogicItemsInCondition: number;
  showTitlesInExpressions: boolean;
  showObjectTitles: boolean;
  allowEditExpressionsInTextEditor: boolean = true;
  maximumColumnsCount: number = settings.propertyGrid.maximumColumnsCount;
  maximumChoicesCount: number = settings.propertyGrid.maximumChoicesCount;
  maximumRowsCount: number = settings.propertyGrid.maximumRowsCount;
  maximumRateValues: number = settings.propertyGrid.maximumRateValues;

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
  onPropertyEditorCreatedCallback(
    object: any,
    property: JsonObjectProperty,
    editor: Question
  ) { }
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
  onCollectionItemAllowingCallback(
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base,
    options: ICollectionItemAllowOperations
  ): void { }
  onItemValueAddedCallback(
    obj: Base,
    propertyName: string,
    itemValue: ItemValue,
    itemValues: Array<ItemValue>
  ) { }
  onMatrixDropdownColumnAddedCallback(
    matrix: Question,
    column: MatrixDropdownColumn,
    columns: Array<MatrixDropdownColumn>
  ) { }
  onSetPropertyEditorOptionsCallback(
    propertyName: string,
    obj: Base,
    editorOptions: any
  ) { }
  onGetErrorTextOnValidationCallback(
    propertyName: string,
    obj: Base,
    value: any
  ): string {
    return null;
  }
  onValueChangingCallback(options: any) { }
  onGetElementEditorTitleCallback(obj: Base, title: string): string {
    return title;
  }
  startUndoRedoTransaction() { }
  stopUndoRedoTransaction() { }
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
  ) { }
  onConditionGetTitleCallback(
    expression: string,
    title: string
  ): string {
    return title;
  }
}
