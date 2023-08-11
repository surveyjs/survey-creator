import {
  StylesManager, Base, IAction, ItemValue,
  JsonObjectProperty, MatrixDropdownColumn, Question,
  SurveyModel, ILocalizableString, PopupBaseViewModel
} from "survey-core";

/**
 * List available question convert modes
 */
export enum QuestionConvertMode {
  AllTypes,
  CompatibleTypes
}
export var settings = {
  translation: {
    sortByName: false,
    //Set it to \xef\xbb\xbf; to tell system that it is UTF8 file. You can use other prefix as well
    exportPrefix: "",
    /**
     * The maximum number of locales that user can select at once for translation
     */
    maximumSelectedLocales: 7,
    /**
     * The name of the translation export file in csv format
     */
    exportFileName: "survey_translation.csv"
  },
  theme: {
    exportFileName: "survey_theme.json",
    fontFamily: "Open Sans"
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
  defaultNewSurveyJSON: {},
  designer: {
    /**
     * The default question type on clicking Add Question button.
     */
    defaultAddQuestionType: "text",
    /**
     * Set this property to false, to hide "Add Question" button on designer surface
     */
    showAddQuestionButton: true
  },
  logic: {
    get defaultOperator(): string { return settings.logic.defaultOperators.default; },
    set defaultOperator(val: string) { settings.logic.defaultOperators.default = val; },
    defaultOperators: {
      default: "equal",
      checkbox: "allof",
      tagbox: "allof"
    },
    visibleActions: [],
    logicItemTitleMaxChars: 50,
    openBracket: "{",
    closeBracket: "}",
    /**
     * Set these properties to false if you don't want to update expressions on changing question and column names and on changing choices values
     */
    updateExpressionsOnChanging: {
      questionName: true,
      columnName: true,
      choiceValue: true
    }
  },
  /**
   * Determines which types of questions the conversion will be available for.
   */
  questionConvertMode: QuestionConvertMode.AllTypes,
  propertyGrid: {
    useButtonGroup: true,
    maxCharsInButtonGroup: 25,
    showNavigationButtons: false,
    maximumColumnsCount: 0,
    maximumChoicesCount: 0,
    maximumRowsCount: 0,
    maximumRateValues: 0,
    generalTabName: "general",
    defaultExpandedTabName: "general"
  },
  toolbox: {
    /**
     * Use it to change the default question JSON on dropping it into designer or converting questions
     */
    defaultJSON: {
      dropdown: {
        choices: ["Item 1", "Item 2", "Item 3"]
      },
      tagbox: {
        choices: ["Item 1", "Item 2", "Item 3"]
      },
      checkbox: {
        choices: ["Item 1", "Item 2", "Item 3"]
      },
      radiogroup: {
        choices: ["Item 1", "Item 2", "Item 3"]
      },
      ranking: {
        choices: ["Item 1", "Item 2", "Item 3"]
      },
      imagepicker: {
        imageFit: "cover",
        choices: [
          {
            value: "Image 1",
            imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
          },
          {
            value: "Image 2",
            imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
          },
          {
            value: "Image 3",
            imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
          },
          {
            value: "Image 4",
            imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
          }
        ]
      },
      image: {
        imageFit: "cover",
        imageHeight: "auto",
        imageWidth: "100%"
      }
    }
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
    restrictDragQuestionBetweenPages: false,
    allowDragToTheSameLine: true
  },
  /**
   * Creator layout settings
   */
  layout: {
    showTabs: true,
    showToolbar: true,
    allowCollapseSidebar: true
  },
  jsonEditor: {
    indentation: 1
  }
};
export interface ICollectionItemAllowOperations {
  allowDelete: boolean;
  allowEdit: boolean;
  allowAdd: boolean;
}

export interface ISurveyCreatorOptions {
  isMobileView: boolean;
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
  enableLinkFileEditor: boolean;
  rootElement?: HTMLElement;
  getObjectDisplayName(obj: Base, area: string, reason: string, displayName: string): string;
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
  onPropertyGridSurveyCreatedCallback(
    object: any,
    survey: SurveyModel
  );
  onPropertyEditorUpdateTitleActionsCallback(
    object: any,
    property: JsonObjectProperty,
    editor: Question,
    titleActions: IAction[]
  );
  onPropertyGridShowModalCallback(object: any,
    property: JsonObjectProperty,
    editor: Question,
    popupEditor: any,
    popupModel: PopupBaseViewModel);
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
  ): string;
  onConditionGetTitleCallback(
    expression: string,
    title: string
  ): string;
  isConditionOperatorEnabled(questionName: string, question: Question, operator: string, isEnabled: boolean): boolean;
  onLogicGetTitleCallback(
    expression: string,
    displayExpression: string,
    text: string,
    logicItem: any
  ): string;
  getProcessedTranslationItemText(
    locale: string, locString: ILocalizableString, newText: string, obj: any
  ): string;
  getTranslationExportedText(obj: Base, name: string, locString: ILocalizableString, locale: string, text: string): string;
  uploadFiles(
    files: File[],
    question: Question,
    uploadingCallback: (status: string, data: any) => any
  ): void;
}

export class EmptySurveyCreatorOptions implements ISurveyCreatorOptions {
  rootElement: HTMLElement;
  enableLinkFileEditor: boolean;
  getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, obj: any): string {
    return newText;
  }
  isMobileView: boolean = false;
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

  getObjectDisplayName(obj: Base, area: string, reason: string, displayName: string): string {
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
  onPropertyGridSurveyCreatedCallback(
    object: any,
    survey: SurveyModel
  ) { }
  onPropertyEditorCreatedCallback(
    object: any,
    property: JsonObjectProperty,
    editor: Question
  ) { }
  onPropertyEditorUpdateTitleActionsCallback(
    object: any,
    property: JsonObjectProperty,
    editor: Question,
    titleActions: IAction[]
  ): void { }
  onPropertyGridShowModalCallback(object: any,
    property: JsonObjectProperty,
    editor: Question,
    popupEditor: any,
    popupModel: PopupBaseViewModel): void { }
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
  ): string { return "asc"; }
  onConditionGetTitleCallback(
    expression: string,
    title: string
  ): string {
    return title;
  }
  isConditionOperatorEnabled(questionName: string, question: Question, operator: string, isEnabled: boolean): boolean { return isEnabled; }
  onLogicGetTitleCallback(
    expression: string,
    displayExpression: string,
    text: string,
    logicItem: any
  ): string { return text; }
  getTranslationExportedText(obj: Base, name: string, locString: ILocalizableString, locale: string, text: string): string { return text; }
  uploadFiles(
    files: File[],
    question: Question,
    uploadingCallback: (status: string, data: any) => any
  ): void {}
}

StylesManager.applyTheme("defaultV2");