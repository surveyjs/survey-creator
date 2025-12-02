import {
  Base, IAction, ItemValue,
  JsonObjectProperty, MatrixDropdownColumn, Question,
  SurveyModel, ILocalizableString, PopupBaseViewModel, PageModel, ILocalizableOwner, LocalizableString
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
    noneof: ["selectbase"],
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
    includeComplexQuestions: false,
    visibleActions: new Array<string>(),
    invisibleTriggers: new Array<string>(),
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
    maxColumns: 0,
    minChoices: 0,
    maxChoices: 0,
    maxRows: 0,
    maxRateValues: 0,
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
    defaultJSON: <{ [index: string]: any }>{
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
        imageFit: "cover"
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
  },
  useLegacyIcons: false,
  pageContentLazyRendering: true,
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

export interface ITabOptions {
  name: string;
  plugin: ICreatorPlugin;
  title?: string;
  iconName?: string;
  componentName?: string;
  index?: number;
}

export interface ISurveyCreatorOptions {
  isMobileView: boolean;
  alwaySaveTextInPropertyEditors: boolean;
  readOnly: boolean;
  logicMaxItemsInCondition: number;
  logicAllowTextEditExpressions: boolean;
  useElementTitles: boolean;
  maxColumns: number;
  minChoices: number;
  maxChoices: number;
  maxRows: number;
  maxRateValues: number;

  maxPanelNestingLevel: number;
  forbiddenNestedElements: { panel: string[], paneldynamic: string[] };

  enableLinkFileEditor: boolean;
  inplaceEditChoiceValues: boolean;
  rootElement?: HTMLElement;
  previewShowResults: boolean;
  showOneCategoryInPropertyGrid: boolean;
  trimValues: boolean;
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
  onValueChangingCallback(options: any): void;
  onGetElementEditorTitleCallback(obj: Base, title: string): string;
  startUndoRedoTransaction(name?: string): void;
  stopUndoRedoTransaction(): void;
  createSurvey(json: any, reason: string, model?: any, callback?: (survey: SurveyModel) => void, area?: string): SurveyModel;
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Base,
    editor: any,
    list: any[],
    variables: string[]
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
  clearFiles(
    value: any,
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
  canAddPage(pageToAdd?: PageModel): boolean;
}

export class EmptySurveyCreatorOptions implements ISurveyCreatorOptions, ILocalizableOwner {
  logicMaxItemsInCondition: number;
  previewShowResults: boolean;
  rootElement: HTMLElement;
  enableLinkFileEditor: boolean;
  getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, obj: any): string {
    return newText;
  }
  isMobileView: boolean = false;
  alwaySaveTextInPropertyEditors: boolean;
  readOnly: boolean;
  useElementTitles: boolean;
  logicAllowTextEditExpressions: boolean = true;
  maxColumns: number = settings.propertyGrid.maxColumns;
  minChoices: number = settings.propertyGrid.minChoices;
  maxChoices: number = settings.propertyGrid.maxChoices;
  maxRows: number = settings.propertyGrid.maxRows;
  maxRateValues: number = settings.propertyGrid.maxRateValues;
  machineTranslationValue: boolean = false;
  inplaceEditChoiceValues: boolean = false;
  maxPanelNestingLevel: number = -1;
  forbiddenNestedElements: { panel: string[], paneldynamic: string[] };

  showOneCategoryInPropertyGrid: boolean;
  trimValues: boolean;

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
  startUndoRedoTransaction(name?: string): void { }
  stopUndoRedoTransaction(): void { }
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
  clearFiles(value: any, question: Question, callback: (status: string, data: any) => any, context?: { element: Base, item?: any, elementType?: string, propertyName?: string }): void {
  }
  getHasMachineTranslation(): boolean { return this.machineTranslationValue; }
  doMachineTranslation(fromLocale: string, toLocale: string, strings: Array<string>, callback: (translated: Array<string>) => void): void { }
  chooseFiles(input: HTMLInputElement, callback: (files: File[]) => void, context?: { element: Base, item?: any, elementType?: string, propertyName?: string }): void { }
  translationLocalesOrder: Array<string> = [];
  canAddPage(pageToAdd?: PageModel): boolean { return true; }

  // ILocalizableOwner implemented
  getLocale(): string {
    return "";
  }
  getMarkdownHtml(text: string, name: string, item?: any): string {
    return text;
  }
  getProcessedText(text: string): string {
    return text;
  }
  getRenderer(name: string): string {
    return name;
  }
  getRendererContext(locStr: LocalizableString) {
    return locStr;
  }
}