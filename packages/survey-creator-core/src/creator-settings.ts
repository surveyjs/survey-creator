import {
  StylesManager, Base, IAction, ItemValue,
  JsonObjectProperty, MatrixDropdownColumn, Question,
  SurveyModel, ILocalizableString, PopupBaseViewModel, SurveyElement
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
  themeEditor: {
    exportFileName: "survey_theme.json",
    defaultFontFamily: "Open Sans",
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
    questionSortOrder: "asc",
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
    },
    /**
     * Set these properties to false if you don't want to update expressions on deleting question
     */
    updateExpressionsOnDeleting: {
      question: true
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
    enableSearch: true,
    maximumColumnsCount: 0,
    minimumChoicesCount: 0,
    maximumChoicesCount: 0,
    maximumRowsCount: 0,
    maximumRateValues: 0,
    generalTabName: "general",
    defaultExpandedTabName: "general",
    allowExpandMultipleCategories: false
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
    indentation: 2,
    exportFileName: "survey.json"
  }
};
export interface ICollectionItemAllowOperations {
  allowDelete: boolean;
  allowEdit: boolean;
  allowAdd: boolean;
}

export interface ICreatorPlugin {
  activate: () => void;
  update?: () => void;
  deactivate?: () => boolean;
  canDeactivateAsync?: (onSuccess: () => void) => void;
  defaultAllowingDeactivate?: () => boolean | undefined;
  dispose?: () => void;
  onDesignerSurveyPropertyChanged?: (obj: Base, propName: string) => void;
  model: Base;
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
  minimumChoicesCount: number;
  maximumChoicesCount: number;
  maximumRowsCount: number;
  maximumRateValues: number;
  maxNestedPanels: number;
  enableLinkFileEditor: boolean;
  inplaceEditForValues: boolean;
  rootElement?: HTMLElement;
  previewShowResults: boolean;
  getObjectDisplayName(obj: Base, area: string, reason: string, displayName: string): string;
  getElementAddornerCssCallback(obj: Base, className: string): string;
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
  onFastEntryCallback(items: Array<ItemValue>, lines: Array<string>): Array<ItemValue>;
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
  createSurvey(json: any, reason: string, model?: any, callback?: (survey: SurveyModel) => void, area?: string);
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Base,
    editor: any,
    list: any[],
    variables: string[]
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
    callback: (status: string, data: any) => any,
    context?: { element: Base, item?: any, elementType?: string, propertyName?: string }
  ): void;
  getHasMachineTranslation(): boolean;
  doMachineTranslation(fromLocale: string, toLocale: string, strings: Array<string>, callback: (translated: Array<string>) => void): void;
  chooseFiles(
    input: HTMLInputElement,
    callback: (files: File[]) => void,
    context?: { element: Base, item?: any, elementType?: string, propertyName?: string }
  ): void;
  translationLocalesOrder: Array<string>;
}

export class EmptySurveyCreatorOptions implements ISurveyCreatorOptions {
  previewShowResults: boolean;
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
  minimumChoicesCount: number = settings.propertyGrid.minimumChoicesCount;
  maximumChoicesCount: number = settings.propertyGrid.maximumChoicesCount;
  maximumRowsCount: number = settings.propertyGrid.maximumRowsCount;
  maximumRateValues: number = settings.propertyGrid.maximumRateValues;
  machineTranslationValue: boolean = false;
  inplaceEditForValues: boolean = false;
  maxNestedPanels: number = -1;

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
  getElementAddornerCssCallback(obj: Base, className: string): string { return className; }
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
  onFastEntryCallback(items: Array<ItemValue>, lines: Array<string>): Array<ItemValue> {
    return items;
  }
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
  createSurvey(json: any, reason: string, model?: any, callback?: (survey: SurveyModel) => void, area?: string): SurveyModel {
    const survey = new SurveyModel(json);
    if (!!callback) {
      callback(survey);
    }
    return survey;
  }
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Base,
    editor: any,
    list: any[],
    variables: string[]
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
    callback: (status: string, data: any) => any
  ): void { }
  getHasMachineTranslation(): boolean { return this.machineTranslationValue; }
  doMachineTranslation(fromLocale: string, toLocale: string, strings: Array<string>, callback: (translated: Array<string>) => void): void { }
  chooseFiles(input: HTMLInputElement, callback: (files: File[]) => void, context?: { element: Base, item?: any, elementType?: string, propertyName?: string }): void { }
  translationLocalesOrder: Array<string> = [];
}

StylesManager.applyTheme("defaultV2");