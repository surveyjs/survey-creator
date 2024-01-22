import { Base, IAction, ItemValue, JsonObjectProperty, MatrixDropdownColumn, PopupBaseViewModel, Question, SurveyModel } from "survey-core";

export interface ElementDeletingEvent {
  /**
   * A survey element to be deleted.
   */
  element: Base;
  /**
   * The element type. Possible values: "question", "panel" and "page"
   */
  elementType: string;
  /**
   * A Boolean property that you can set to `false` if you want to cancel element deletion.
   */
  allowing: boolean;
}

export interface GetPropertyReadOnlyEvent {
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

export interface GetObjectDisplayNameEvent {
  /**
   * A survey element (survey, page, question, or panel) whose name has been requested.
   */
  obj: Base;
  /**
  * A Survey Creator UI element that requests the display name. Contains one of the following values:
  *   - `"page-selector"` - Page selector on the design surface
  *   - `"condition-editor"` - Condition pop-up window or drop-down menus that allow users to select questions in the Logic tab
  *   - `"logic-tab:question-filter"` - Question filter in the Logic tab
  *   - `"logic-tab:question-selector"` - Question selector on editing actions in the Logic tab
  *   - `"preview-tab:page-list"` - Page list in the Preview tab
  *   - `"preview-tab:selected-page"` - Selected page name in the Preview tab
  *   - `"property-grid:property-editor"` - Property editors in the Property Grid
  *   - `"property-grid-header:element-list"` - Survey element list in the header of the Property Grid
  *   - `"property-grid-header:selected-element"` - Selected survey element in the header of the Property Grid
  *   - `"translation-tab"` - Translation tab
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
}

export interface DefineElementMenuItemsEvent {
  /**
   * A survey element (question, panel, or page) whose adorners you can customize.
   */
  obj: Base;
  /**
   * An array of adorner actions. You can add, modify, or remove actions from this array.
   */
  items: IAction[];
}
export interface ShowingPropertyEvent {
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
   * A survey that respresents the Property Grid. Use the `SurveyModel` API to modify the survey.
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

export interface PropertyGridShowModalEvent {
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

export interface ItemValueAddedEvent {
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
   * An array of collection items to which the target item belongs ([`columns`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#columns) or [`rows`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#rows) in matrix questions, [`choices`](https://surveyjs.io/form-library/documentation/api-reference/questionselectbase#choices) in select-based questions, etc.). This array does not include `options.newItem`.
   */
  itemValues: ItemValue[];
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
   * An array of matrix columns. This array does not include `options.newColumn`.
   */
  columns: MatrixDropdownColumn[];
}

export interface SetPropertyEditorOptions {
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
export interface SetPropertyEditorOptionsEvent {
  /**
   * A survey element (survey, page, panel, question) for which the table property editor is created.
   */
  obj: Base;
  /**
   * The name of the property with which the editor is associated: [`"columns"`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#columns), [`"rows"`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#rows), [`"choices"`](https://surveyjs.io/form-library/documentation/api-reference/questionselectbase#choices), etc.
   */
  propertyName: string;
  /**
   * options that you can modify
   */
  editorOptions: SetPropertyEditorOptions;
}

export interface PropertyValidationCustomErrorEvent {
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

export interface SurveyPropertyValueChangedEvent {
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

export interface ConditionQuestionsGetListEvent {
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
   * `"asc"` (default) | `"none"`\
   * The sort order of questions within the list. Set this property to `"none"` to disable sorting.
   */
  sortOrder: string;
}