import {
  Base, IAction, ItemValue, JsonObjectProperty, LocalizableString, MatrixDropdownColumn, PageModel, PanelModel,
  PopupBaseViewModel, Question, SurveyModel, IElement, ISurveyElement, IPanel, ITheme
} from "survey-core";
import { SurveyLogicItem } from "./components/tabs/logic-items";
import { ICreatorPlugin } from "./creator-settings";

export interface ElementDeletingEvent {
  /**
   * A survey element to be deleted.
   */
  element: Base;
  /**
   * The element type: `"question"`, `"panel"`, or `"page"`.
   */
  elementType: string;
  /**
   * A Boolean property that you can set to `false` if you want to cancel element deletion.
   */
  allowing: boolean;
}

export interface PropertyGetReadOnlyEvent {
  /**
   * A property whose read-only status you can change.
   */
  property: JsonObjectProperty;
  /**
   * A property that nests `options.property` (`choices` for an item value, `columns` for a matrix column, `rows` for a matrix row etc.). `options.parentProperty` has a value only for nested properties.
   */
  parentProperty: JsonObjectProperty;
  /**
   * A survey element (question, panel, page, or the survey itself) for which you can change the read-only status. 
   */
  obj: Base;
  /**
   * A survey element that contains `options.parentProperty`. `options.parentObj` has a value only for nested properties.
   */
  parentObj: Base;
  /**
   * A Boolean value that specifies the property's read-only status.
   */
  readOnly: boolean;
}

export interface ElementGetDisplayNameEvent {
  /**
   * A survey element (survey, page, question, or panel) whose name has been requested.
   */
  obj: Base;
  /**
  * A Survey Creator UI element that requests the display name. Contains one of the following values:
  *   - `"page-selector"` - Page selector on the design surface.
  *   - `"condition-editor"` - Condition pop-up window or drop-down menus that allow users to select questions in the Logic tab.
  *   - `"logic-tab:question-filter"` - Question filter in the Logic tab.
  *   - `"logic-tab:question-selector"` - Question selector on editing actions in the Logic tab.
  *   - `"preview-tab:page-list"` - Page list in the Preview tab.
  *   - `"preview-tab:selected-page"` - Selected page name in the Preview tab.
  *   - `"property-grid:property-editor"` - Property editors in the Property Grid.
  *   - `"property-grid-header:element-list"` - Survey element list in the header of the Property Grid.
  *   - `"property-grid-header:selected-element"` - Selected survey element in the header of the Property Grid.
  *   - `"translation-tab"` - Translation tab.
   */
  area: string;
  /**
   * A survey element's display text. Modify this property to set a custom display text for the survey element.
   */
  displayName: string;
}

export interface HtmlToMarkdownEvent {
  /**
   * The instance of a survey element (survey, page, panel, question) that the user configures.
   */
  element: Base;
  /**
   * The name of a property whose value has been edited.
   */
  name: string;
  /**
   * HTML content. Pass this field's value to an HTML-to-Markdown converter.
   */
  html: string;
  /**
   * A text string that may contain Markdown. Assign the result of the HTML-to-Markdown conversion to this field.
   */
  text: string;
}

export interface ElementAllowOperationsEvent {
  /**
   * A survey element (question or panel) for which you can disable user interactions.
   */
  obj: Base;
  /**
   * Allows users to mark the survey element as required.
   */
  allowChangeRequired: boolean;
  /**
   * Allows users to change the survey element type.
   */
  allowChangeType: boolean;
  /**
   * Allows users to change the [`inputType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#inputType) property of Single-Line Input questions.
   */
  allowChangeInputType: boolean;
  /**
   * Allows users to duplicate the survey element.
   */
  allowCopy: boolean;
  /**
   * Allows users to delete the survey element.
   */
  allowDelete: boolean;
  /**
   * Allows users to drag and drop the survey element.
   */
  allowDragging: boolean;
  /**
   * Allows users to edit survey element properties on the design surface. If you disable this property, users can edit the properties only in the Property Grid.
   */
  allowEdit: boolean;
  /**
   * Controls the visibility of the Settings button that allows users to open the Property Grid for survey element configuration. Set this property to `true` or `false` to display or hide the Settings button at all times. The default value `undefined` displays the Settings button only when Survey Creator has small width.
   */
  allowShowSettings: boolean | undefined;
}

export interface ElementGetActionsEvent {
  /**
   * A survey element (question, panel, or page) whose adorners you can customize.
   */
  obj: Base;
  /**
   * An array of adorner actions. You can add, modify, or remove actions from this array.
   */
  items: IAction[];
}
export interface PropertyAddingEvent {
  /**
   * A property being added.
   */
  property: JsonObjectProperty;
  /**
   * A property that nests `options.property` (`choices` for an item value, `columns` for a matrix column, `rows` for a matrix row etc.). `options.parentProperty` has a value only for nested properties.
   */
  parentProperty: JsonObjectProperty;
  /**
   * A survey element that contains `options.property`: page, panel, question, the survey itself, item value (choice option), matrix column, etc.
   */
  obj: Base;
  /**
   * A survey element that contains `options.parentProperty`. `options.parentObj` has a value only for nested properties.
   */
  parentObj: Base;
  /**
   * A Boolean property that you can set to `false` if you do not want to add the property.
   */
  canShow: boolean;
}

export interface PropertyGridSurveyCreatedEvent {
  /**
   * A survey element being edited in the Property Grid.
   */
  obj: Base;
  /**
   * A survey that represents the Property Grid. Use the `SurveyModel` API to modify the survey.
   */
  survey: SurveyModel;
}

export interface PropertyEditorCreatedEvent {
  /**
   * A property editor. It is an object of the [`Question`](https://surveyjs.io/form-library/documentation/question) type because the Property Grid is [built upon a regular survey](https://surveyjs.io/survey-creator/documentation/creator-v2-whats-new#survey-creator-ui-elements-are-surveys).
   */
  editor: Question;
  /**
   * A property that corresponds to the created property editor.
   */
  property: JsonObjectProperty;
  /**
   * A survey element being edited in the Property Grid.
   */
  obj: Base;
}

export interface PropertyEditorUpdateTitleActionsEvent {
  /**
   * A survey element being edited in the Property Grid.
   */
  obj: Base;
  /**
   * A property editor that contains the title actions. It is an object of the [`Question`](https://surveyjs.io/form-library/documentation/question) type because the Property Grid is [built upon a regular survey](https://surveyjs.io/survey-creator/documentation/creator-v2-whats-new#survey-creator-ui-elements-are-surveys).
   */
  editor: Question;
  /**
   * A property that corresponds to the property editor.
   */
  property: JsonObjectProperty;
  /**
   * A list of title actions.
   */
  titleActions: IAction[];
}

export interface PropertyGridShowPopupEvent {
  /**
   * The instance of a survey element (question or panel) that users are configuring in the Property Grid.
   */
  obj: Base;
  /**
   * A property being edited.
   */
  property: JsonObjectProperty;
  /**
   * A property editor. It is an object of the [`Question`](https://surveyjs.io/form-library/documentation/question) type because the Property Grid is [built upon a regular survey](https://surveyjs.io/survey-creator/documentation/creator-v2-whats-new#survey-creator-ui-elements-are-surveys).
   */
  editor: Question;
  /**
   * An editor inside the pop-up window.
   */
  popupEditor: any;
  /**
   * A pop-up window model. Use `options.popupModel.footerToolbar` to access the actions at the bottom of the window.
   */
  popupModel: PopupBaseViewModel;
}

export interface CollectionItemAllowOperationsEvent {
  /**
   * A survey element (survey, page, panel, question) that contains the collection to which the target item belongs.
   */
  obj: Base;
  /**
   * A property that contains the collection to which the target item belongs.
   */
  property: JsonObjectProperty;
  /**
   * The property's name: `columns`, `rows`, `choices`, `rateValues`, etc.
   */
  propertyName: string;
  /**
   * An array of collection items to which the target item belongs ([`columns`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#columns) or [`rows`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#rows) in matrix questions, [`choices`](https://surveyjs.io/form-library/documentation/api-reference/questionselectbase#choices) in select-based questions, etc.).
   */
  collection: Base[];
  /**
   * A target collection item.
   */
  item: Base;
  /**
   * A Boolean property that you can set to `false` if you want to prevent the target item from being added to the collection.
   */
  allowAdd: boolean;
  /**
   * A Boolean property that you can set to `false` if you want to prevent the target item from being deleted.
   */
  allowDelete: boolean;
  /**
   * A Boolean property that you can set to `false` if you want to prevent the target item from being edited.
   */
  allowEdit: boolean;
}

export interface CollectionItemAddedEvent {
  /**
   * A survey element (survey, page, panel, question) that contains the collection to which the target item belongs.
   */
  obj: Base;
  /**
   * The property's name: `columns`, `rows`, `choices`, `rateValues`, etc.
   */
  propertyName: string;
  /**
   * A new collection item. Overwrite its `value` or `text` property if you want to change the item's value or display text.
   */
  newItem: ItemValue;
  /**
   * An array of collection items to which the target item belongs ([`columns`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#columns) or [`rows`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#rows) in matrix questions, [`choices`](https://surveyjs.io/form-library/documentation/api-reference/questionselectbase#choices) in select-based questions, etc.).
   */
  itemValues: ItemValue[];
}
export interface FastEntryItemsEvent {
  /**
   * An array of entered text lines.
   */
  lines: string[];
  /**
   * An array of collection items that were created based on the entered text lines. Overwrite an item's `value` or `text` property if you want to change the value or display text of this item.
   */
  items: ItemValue[];
}

export interface MatrixColumnAddedEvent {
  /**
   * A Multi-Select or Dynamic Matrix to which a new column is being added.
   */
  matrix: Question;
  /**
   * A new matrix column. Edit its properties if you want to modify this column.
   */
  newColumn: MatrixDropdownColumn;
  /**
   * An array of matrix columns.
   */
  columns: MatrixDropdownColumn[];
}

export interface TablePropertyEditorOptions {
  /**
   * A Boolean property that you can set to `false` if you want to disallow users to add and delete table rows.
   */
  allowAddRemoveItems: boolean;
  /**
   * A Boolean property that you can set to `false` if you want to disallow users to delete all table rows.
   */
  allowRemoveAllItems: boolean;
  /**
   * A Boolean property that you can set to `false` if you want to disallow users to edit table content as text in a pop-up window.
   */
  allowBatchEdit: boolean;
}
export interface ConfigureTablePropertyEditorEvent {
  /**
   * A survey element (survey, page, panel, question) for which the table property editor is created.
   */
  obj: Base;
  /**
   * The name of the property with which the editor is associated: [`"columns"`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#columns), [`"rows"`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#rows), [`"choices"`](https://surveyjs.io/form-library/documentation/api-reference/questionselectbase#choices), etc.
   */
  propertyName: string;
  /**
   * An obejct with table property editor settings that you can modify.
   */
  editorOptions: TablePropertyEditorOptions;
}

export interface PropertyDisplayCustomErrorEvent {
  /**
   * A survey element (survey, page, panel, question) whose property is being validated.
   */
  obj: Base;
  /**
   * The name of a property being validated.
   */
  propertyName: string;
  /**
   * The property value.
   */
  value: any;
  /**
   * An error message you want to display. If `options.value` is valid, this parameter contains an empty string.
   */
  error: string;
}

export interface PropertyValueChangingEvent {
  /**
   * A survey element (question, panel, page, or the survey itself) whose property is being edited.
   */
  obj: Base;
  /**
   * The name of a property being modified.
   */
  propertyName: string;
  /**
   * An old property value.
   */
  value: any;
  /**
   * A new property value. Modify this parameter if you want to override the property value.
   */
  newValue: any;
}

export interface PropertyValueChangedEvent {
  /**
   * A survey element (question, panel, page, or the survey itself) whose property has changed.
   */
  obj: Base;
  /**
   * The name of the modified property.
   */
  propertyName: string;
  /**
   * A new property value.
   */
  value: any;
}

export interface ConditionGetQuestionListEvent {
  /**
   * A survey element (question, panel, page, or the survey itself) for which the condition editor is displayed.
   */
  obj: Base;
  /**
   * The name of a property being configured: `enableIf`, `requiredIf`, `visibleIf`, etc.
   */
  propertyName: string;
  /**
   * A condition editor instance.
   */
  editor: any;
  /**
   * A list of questions available for selection.
   */
  list: any;
  /**
   * The sort order of questions within the list: `"asc"` (default) or `"none"`. Set this property to `"none"` to disable sorting.
   */
  sortOrder: string;
}

export interface GetConditionOperatorEvent {
  /**
   * The name of a question for which conditions are displayed.
   */
  questionName: string;
  /**
   * A condition operator for which the event is raised: `"empty"`, `"notempty"`, `"equal"`, `"notequal"`, `"contains"`, `"notcontains"`, `"anyof"`, `"allof"`, `"greater"`, `"less"`, `"greaterorequal"`, or `"lessorequal"`.
   */
  operator: string;
  /**
   * A Boolean property that you can set to `false` if you want to hide the condition operator.
   */
  show: boolean;
}

export interface LogicRuleGetDisplayTextEvent {
  /**
   * A logical expression associated with the logic rule. 
   */
  expression: string;
  /**
   * The same expression in a user-friendly format.
   */
  expressionText: string;
  /**
   * An object that describes the logic rule. Contains an array of actions and other properties.
   */
  logicItem: SurveyLogicItem;
  /**
   * A user-friendly display text for the logic rule. Modify this parameter if you want to override the display text.
   */
  text: string;
}

export interface ModifiedEvent {
  /**
  * A value that indicates the modification: `"ADDED_FROM_TOOLBOX"`, `"PAGE_ADDED"`, `"PAGE_MOVED"`, `"QUESTION_CONVERTED"`, `"QUESTION_CHANGED_BY_EDITOR"`, `"PROPERTY_CHANGED"`, `"ELEMENT_REORDERED"`, `"OBJECT_DELETED"`, `"VIEW_TYPE_CHANGED"`, `"DO_DROP"`, `"TRANSLATIONS_CHANGED"`, `"JSON_EDITOR"`, `"THEME_MODIFIED"`
  * 
  * Depending on the `options.type` value, the `options` object contains parameters listed below:
  * 
  * `options.type`: `"ADDED_FROM_TOOLBOX"`
  * - `options.question` - An added question.
  * 
  * `options.type`: `"PAGE_ADDED"`
  * - `options.newValue` - An added page.
  *
  * `options.type`: `"PAGE_MOVED"`
  * - `options.page` - A moved page.
  * - `options.indexFrom` - A previous index.
  * - `options.indexTo` - A current index.
  *
  * `options.type`: `"QUESTION_CONVERTED"`
  * - `options.className` - The name of a class to which a question has been converted.
  * - `options.oldValue` - An object of a previous class.
  * - `options.newValue` - An object of a class specified by `options.className`.
  *
  * `options.type`: `"QUESTION_CHANGED_BY_EDITOR"`
  * - `options.question` - A question that has been edited in a pop-up editor.
  *
  * `options.type`: `"PROPERTY_CHANGED"`
  * - `options.name` - The name of the changed property.
  * - `options.target` - An object that contains the changed property.
  * - `options.oldValue` - A previous value of the changed property.
  * - `options.newValue` - A new value of the changed property.
  *
  * `options.type`: `"ELEMENT_REORDERED"`
  * - `options.arrayName` - The name of the changed array.
  * - `options.parent` - An object that contains the changed array.
  * - `options.element` - A reordered element.
  * - `options.indexFrom` - A previous index.
  * - `options.indexTo` - A current index.
  *
  * `options.type`: `"OBJECT_DELETED"`
  * - `options.target` - A deleted object.
  *
  * `options.type`: `"VIEW_TYPE_CHANGED"`
  * - `options.newType` - A current view: `"editor"` or `"designer"`.
  *
  * `options.type`: `"DO_DROP"`
  * - `options.page` - A parent page of the dragged element.
  * - `options.source` - A dragged element.
  * - `options.target` - A drop target.
  * - `options.newElement` - A new element. This parameter is defined only if users drag a question or panel from the Toolbox.
  */
  type: string;
  question?: Question;
  name?: string;

  oldValue?: any;
  newValue?: any;

  page?: PageModel;
  indexFrom?: number;
  indexTo?: number;

  className?: string;

  source?: Base;
  target?: Base;

  parent?: Base;
  element?: Base;
  newElement?: Base;

  arrayName?: string;

  newType?: string;
}

export interface QuestionAddedEvent {
  /**
   * The question users added.
   */
  question: Question;
  /**
   * A page to which the question was added.
   */
  page: PageModel;
  /**
   * A value that indicates how the question was added: dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox-customization) (`"DROPPED_FROM_TOOLBOX"`), created using the Add Question button (`"ADDED_FROM_PAGEBUTTON"`), duplicated (`"ELEMENT_COPIED"`), or converted from another question type (`"ELEMENT_CONVERTED"`).
   */
  reason: string;
}

export interface PanelAddedEvent {
  /**
   * The panel users added.
   */
  panel: PanelModel;
  /**
   * A page to which the panel was added.
   */
  page: PageModel;
  /**
   * A value that indicates how the panel was added: dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox-customization) (`"DROPPED_FROM_TOOLBOX"`), created using the Add Question button (`"ADDED_FROM_PAGEBUTTON"`), or duplicated (`"ELEMENT_COPIED"`).
   */
  reason: string;
}

export interface PageAddedEvent {
  /**
   * The page users added.
   */
  page: PageModel;
}

export interface PageGetFooterActionsEvent {
  /**
   * An array of actions. You can add, modify, or remove actions from this array.
   */
  actions: IAction[];
  /**
   * A page for which the event is raised.
   */
  page: PageModel;
  /**
   * Adds a new question of a specified [`type`](https://surveyjs.io/form-library/documentation/api-reference/question#getType) to the page.
   * @param type The type of the question to add.
   */
  addNewQuestion: (type: string) => void;
}

export interface SurveyInstanceCreatedEvent {
  /**
   * A Survey Creator UI element for which a survey is instantiated. Contains one of the following values:
   *   - `"designer-tab"` - A preview survey in the Designer tab.
   *   - `"preview-tab"` - A preview survey in the Preview tab.
   *   - `"property-grid"` - A survey that represents the Property Grid.
   *   - `"default-value-popup-editor"` - A survey that allows you to specify the default or correct value (for quizzes) in a pop-up window.
   *   - `"logic-rule:condition-editor"` - A survey that allows you to configure conditions in a logic rule.
   *   - `"logic-rule:action-editor"` - A survey that allows you to configure actions in a logic rule.
   *   - `"logic-tab:condition-list"` - A survey that displays the list of logic rules in the Logic tab.
   *   - `"theme-tab"` - A preview survey in the Themes tab.
   *   - `"theme-tab:property-grid"` - A survey that represents the Property Grid in the Themes tab.
   *   - `"translation-tab:language-list"` - A survey that displays the language list in the Translations tab.
   *   - `"translation-tab:table"` - A survey that displays the translation table in the Translations tab.
   *   - `"translation-tab:table-header"` - A survey that displays the header of the translation table in the Translations tab.
   *   - `"translation-tab:table-popup-editor"` - A survey that displays a translation table for an individual language in a pop-up window. 
   *   - `"table-values-popup-editor"` - A survey that allows you to edit values of a table (Choices, Rows, Columns, etc.) in a pop-up window.
   *   - `"matrix-cell-values-popup-editor"` - A survey that allows you to [specify cell texts of a Single-Select Matrix](https://surveyjs.io/form-library/examples/scoring-rubric-example/) in a pop-up window.
   *   - `"matrix-cell-question-popup-editor"` - A survey that allows you to configure a question within a cell of a [Multi-Select](https://surveyjs.io/form-library/examples/multi-select-matrix-question/) or [Dynamic Matrix](https://surveyjs.io/form-library/examples/dynamic-matrix-add-new-rows/) in a pop-up window.
   */
  area: string;
  /**
   * A survey that represents the Survey Creator UI element to be displayed. Use the [`SurveyModel`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model) API to modify the survey.
   */
  survey: SurveyModel;
  /**
   * Obsolete. Use `options.area` instead.
   */
  reason: string;
  model?: Base;
}

export interface DesignerSurveyCreatedEvent {
  /**
   * A survey to be displayed in the Designer tab.
   */
  survey: SurveyModel;
}

export interface PreviewSurveyCreatedEvent {
  /**
   * A survey to be displayed in the Preview tab.
   */
  survey: SurveyModel;
}

export interface NotifyEvent {
  /**
   * A message to display.
   */
  message: string;
  /**
   * A notification type: `"info"` or `"error"`.
   */
  type: string;
}

export interface ElementFocusingEvent {
  /**
   * An element that is going to be focused.
   */
  newSelectedElement: Base;
}

export interface ElementFocusedEvent {
  /**
   * The [focused element](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#selectedElement).
   */
  newSelectedElement: Base;
}

export interface OpenFileChooserEvent {
  /**
   * A file input HTML element.
   */
  input: HTMLInputElement;
  /**
   * A survey element (question, panel, page, or survey) or a theme JSON schema for which this event is raised.
   */
  element: Base | ITheme;
  /**
   * The type of the element passed as the `options.element` parameter.\
   * Possible values: `"theme"`, `"header"`, or any value returned from the [`getType()`](https://surveyjs.io/form-library/documentation/api-reference/question#getType) method.
   */
  elementType: String;
  /**
   * The name of the survey element property or theme property for which files are being selected.
   */
  propertyName: String;
  /**
   * A choice item for which the event is raised. This parameter has a value only when the dialog window is opened to select images for an [Image Picker](https://surveyjs.io/form-library/documentation/api-reference/image-picker-question-model) question.
   */
  item: ItemValue;
  /**
   * A callback function to which you should pass selected files.
   * @param files An array of selected files.
   */
  callback: (files: Array<File>) => void;
}

export interface UploadFileEvent {
  /**
   * A survey element (question, panel, page, or survey) or a theme JSON schema for which this event is raised.
   */
  element: Base | ITheme;
  /**
   * The type of the element passed as the `options.element` parameter.\
   * Possible values: `"theme"`, `"header"`, or any value returned from the [`getType()`](https://surveyjs.io/form-library/documentation/api-reference/question#getType) method.
   */
  elementType: String;
  /**
   * The name of the survey element property or theme property for which files are being uploaded.
   */
  propertyName: String;
  /**
   * Files to upload.
   */
  files: File[];
  /**
   * A callback function that you should call when a file is uploaded successfully or when file upload fails. Pass `"success"` or `"error"` as the `status` argument. If the file upload is successful, pass the file's URL as the `fileUrl` argument.
   * @param status A string value that indicates a successful or failed file upload: `"success"` or `"error"`.
   * @param fileUrl The URL of a successfully uploaded file.
   */
  callback: (status: string, fileUrl?: string) => void;
  /**
   * Obsolete. Use the `options.element` parameter instead.
   */
  question: Question;
}

export interface TranslationStringVisibilityEvent {
  /**
   * A survey element (survey, page, panel, question) whose string translations are edited in the Translation tab.
   */
  obj: Base;
  /**
   * The name of a property being translated.
   */
  propertyName: string;
  /**
   * A Boolean value that specifies the property visibility. Set it to `false` to hide the property.
   */
  visible: boolean;
}

export interface TranslationImportItemEvent {
  /**
   * The current locale code (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
   */
  locale: string;
  /**
   * A full name of the translated string. It is composed of names of all parent elements, for example: `"mySurvey.page1.question2.title"`.
   */
  name: string;
  /**
   * A text string to be imported. You can modify this property to import a different string or set this property to `undefined` to cancel the import.
   */
  text: string;
}

export interface TranslationImportedEvent {
}

export interface TranslationExportItemEvent {
  /**
   * A survey element (survey, page, panel, question) whose string translations are being exported to CSV.
   */
  obj: Base;
  /**
   * The current locale code (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
   */
  locale: string;
  /**
   * A full name of the translated string. It is composed of names of all parent elements, for example: `"mySurvey.page1.question2.title"`.
   */
  name: string;
  /**
   * A `LocalizableString` instance. Call the `options.locString.getLocaleText(locale)` method if you need to get a text string for a specific locale.
   */
  locString: LocalizableString;
  /**
   * A text string to be exported. The string is taken from the current locale. You can modify this property to export a different string.
   */
  text: string;
}

export interface TranslationItemChangingEvent {
  /**
   * A survey element instance (survey, page, panel, question) whose string translation is being changed.
   */
  obj: Base;
  /**
   * The current locale code (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
   */
  locale: string;
  /**
   * An object that you can use to manipulate a localization string. Call the `options.locString.getLocaleText(locale)` method if you need to get a text string for a specific locale.
   */
  locString: LocalizableString;
  /**
   * A new value for the string translation.
   */
  newText: string;
}

export interface MachineTranslateEvent {
  /**
   * A locale from which you want to translate strings. Contains a locale code (`"en"`, `"de"`, etc.).
   */
  fromLocale: string;
  /**
   * A locale to which you want to translate strings. Contains a locale code (`"en"`, `"de"`, etc.).
   */
  toLocale: string;
  /**
   * Strings to translate.
   */
  strings: Array<string>;
  /**
  * A callback function that accepts translated strings. If the translation failed, pass an empty array or call this function without arguments.
   * @param strings An array of translated strings.
   */
  callback: (strings: Array<string>) => void;
}

export interface DragDropAllowEvent {
  /**
   * A survey element being dragged.
   */
  draggedElement: IElement;
  /**
   * A survey element from which `draggedElement` is being dragged. This parameter is `null` if `draggedElement` is being dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox).
   */
  fromElement: IPanel;
  /**
   * A survey element to which `draggedElement` is being dragged.
   */
  toElement: IElement;
  /**
   * A survey element before which `draggedElement` will be placed. This parameter is `null` if the parent container (page or panel) has no elements or if `draggedElement` will be placed below all other elements within the container.
   */
  insertBefore: IElement;
  /**
   * A survey element after which `draggedElement` will be placed. This parameter is `null` if the parent container (page or panel) has no elements or if `draggedElement` will be placed above all other elements within the container.
   */
  insertAfter: IElement;
  /**
   * A parent container (page or panel) within which `draggedElement` will be placed.
   */
  parent: ISurveyElement;
  /**
   * A survey within which the drag and drop operation occured.
   */
  survey?: SurveyModel;
  /**
   * A Boolean property that you can set to `false` if you want to cancel the drag and drop operation.
   */
  allow: boolean;
  /**
   * Obsolete. Use `options.draggedElement` instead.
   */
  target?: IElement;
  /**
   * Obsolete. Use `options.toElement` instead.
   */
  source?: IElement;
}

export interface CreateCustomMessagePanelEvent {
  /**
   * A question for which the event is raised.
   */
  question: Question;
  /**
   * A notification message that you want to display. Assign a custom string value to this parameter.
   */
  messageText: string;
  /**
   * A caption text for the action link. Assign a custom string value to this parameter.
   */
  actionText: string;
  /**
   * A function that is called when users click the action link. Assign a custom function to this parameter.
   */
  onClick: () => void;
}

export interface ActiveTabChangingEvent {
  /**
   * A tab that is going to become active: `"designer"`, `"test"`, `"theme"`, `"editor"`, `"logic"`, or `"translation"`. 
   */
  tabName: string;
  /**
   * Specifies whether the active tab can be switched. Set this property to `false` if you want to cancel the switch.
   */
  allow: boolean;
}

export interface ActiveTabChangedEvent {
  /**
   * A tab that has become active: `"designer"`, `"test"`, `"theme"`, `"editor"`, `"logic"`, or `"translation"`.
   */
  tabName: string;
  plugin: ICreatorPlugin;
  model: Base;
}

export interface BeforeUndoEvent {
  /**
   * A Boolean value that you can set to `false` if you want to prevent the undo operation.
   */
  canUndo: boolean;
}

export interface BeforeRedoEvent {
  /**
   * A Boolean value that you can set to `false` if you want to prevent the redo operation.
   */
  canRedo: boolean;
}

export interface PageAddingEvent {
  /**
   * A page to be added.
   */
  page: PageModel;
  /**
   * Set this property to `false` if you do not want to add the page.
   */
  allow: boolean;
}

export interface DragStartEndEvent {
  /**
   * A survey element being dragged.
   */
  draggedElement: IElement;
  /**
   * A survey element from which `draggedElement` is being dragged. This parameter is `null` if `draggedElement` is being dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox).
   */
  fromElement: IElement;
  /**
   * A survey element to which `draggedElement` is being dragged.
   */
  toElement: IElement;
}