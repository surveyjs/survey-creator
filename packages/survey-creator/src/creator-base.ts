import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { editorLocalization } from "./editorLocalization";
import { QuestionConverter } from "./questionconverter";
import { SurveyTextWorker } from "./textWorker";
import { SurveyHelper, ObjType } from "./surveyHelper";
import { SurveyJSON5 } from "./json5";
import { SurveyLogic } from "./tabs/logic";
import { ISurveyCreatorOptions, settings } from "./settings";
import { EditableObject } from "./propertyEditors/editableObject";

export interface ICreatorOptions {
  [index: string]: any;
}

export class CreatorBaseEvent<T> extends Survey.EventBase<CreatorBase<T>, any> {
}

/**
 * Base class for Survey Creator.
 */
export class CreatorBase<T extends { [index: string]: any }> implements ISurveyCreatorOptions {
  private showDesignerTabValue = ko.observable<boolean>(false);
  private showJSONEditorTabValue = ko.observable<boolean>(false);
  private showTestSurveyTabValue = ko.observable<boolean>(false);
  private showEmbeddedSurveyTabValue = ko.observable<boolean>(false);
  private showTranslationTabValue = ko.observable<boolean>(false);
  private showLogicTabValue = ko.observable<boolean>(false);
  private isRTLValue: boolean = false;
  private haveCommercialLicenseValue = ko.observable(false);
  private alwaySaveTextInPropertyEditorsValue: boolean = false;
  private showDropdownPageSelectorValue = ko.observable(true);

  protected surveyValue = ko.observable<T>();

  private newQuestions: Array<any> = [];
  private newPanels: Array<any> = [];
  private newQuestionChangedNames: {};

  koAutoSave = ko.observable(false);
  koShowOptions = ko.observable();
  koGenerateValidJSON = ko.observable(true);
  koShowState = ko.observable(false);
  koViewType = ko.observable("designer");

  /**
   * The event is called on deleting an element (question/panel/page) from the survey. Typically, when a user click the delete from the element menu.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.element an instance of the deleting element
   * <br/> options.elementType the type of the element: 'question', 'panel' or 'page'.
   * <br/> options.allowing set it to false to cancel the element deleting
   */
  public onElementDeleting: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();

  /**
   * The event is called on setting a readOnly property of the property editor. By default the property.readOnly property is used.
   * You may changed it and make the property editor read only or enabled for a particular object.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
   * <br/> options.readOnly a boolean value. It has value equals to options.readOnly property by default. You may change it.
   * <br/> options.parentObj the parent object. It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is a question (dropdown, radigroup, checkbox, matrices and so on).
   * <br/> options.parentProperty the parent property (Survey.JsonObjectProperty object). It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is choices, columns, rows, triggers and so on.
   */
  public onGetPropertyReadOnly: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();

  /**
   * The event is fired when the survey creator creates a survey object (Survey.Survey).
   * <br/> sender the survey creator object that fires the event
   * <br/> options.survey the survey object showing in the creator.
   * <br/> options.reason indicates what component of the creator requests the survey. There are several reason types: "designer" - survey for designer survey, "test" - survey for "Test Survey" tab and "conditionEditor", "defaultValueEditor", "restfulEditor" - surveys for different property editors.
   */
  public onSurveyInstanceCreated: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();

  /**
   * The event allows to display the custom name for objects: questions, pages and panels. By default the object name is using. You may show object title by setting showObjectTitles property to true.
   * Use this event, if you want custom display name for objects.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.reason the name of the UI that requests the object display name
   * <br/> options.displayName change this property to show your custom display name for the object
   * @see showObjectTitles
   */
  public onGetObjectDisplayName: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();

  /**
   * Use this event to add/remove/modify the element (question/panel) menu items.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object which property is edited in the Property Editor.
   * <br/> options.items the list of menu items. It has two required fields: text and onClick: function(obj: Survey.Base) {} and optional name field.
   * @see onElementAllowOperations
   */
  public onDefineElementMenuItems: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * The event is called before showing a property in the Properties Grid or in the Question Editor.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
   * <br/> options.canShow a boolean value. It is true by default. Set it false to hide the property from the Properties Grid and in the Question Editor.
   * <br/> options.parentObj the parent object. It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is a question (dropdown, radigroup, checkbox, matrices and so on).
   * <br/> options.parentProperty the parent property (Survey.JsonObjectProperty object). It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is choices, columns, rows, triggers and so on.
   * <br/>
   * <br/> [Example: Hide a category in the Properties Grid](https://surveyjs.io/Examples/Survey-Creator?id=hidecategoryinpropertiesgrid)
   */
  public onShowingProperty: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * @Deprecated Obsolete, please use onShowingProperty event.
   * The event is called before showing a property in the Property Grid or in Question Editor.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
   * <br/> options.canShow a boolean value. It is true by default. Set it false to hide the property from the Property Grid or in Question Editor
   * <br/> options.parentObj the parent object. It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is a question (dropdown, radigroup, checkbox, matrices and so on).
   * <br/> options.parentProperty the parent property (Survey.JsonObjectProperty object). It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is choices, columns, rows, triggers and so on.
   */
  public onCanShowProperty: CreatorBaseEvent<T
  > = this.onShowingProperty;
  /**
   * The event is called before rendering a delete button in the Property Grid or in Question Editor.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey Question
   * <br/> options.item the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
   * <br/> options.canDelete a boolean value. It is true by default. Set it false to remove delete button from the Property Grid or in Question Editor
   */
  public onCanDeleteItem: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * The event is called on deleting a collection item from the Property Editor. For example: column in columns editor or item in choices and so on.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object: Question, Panel, Page or Survey
   * <br/> options.property the collection property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
   * <br/> options.propertyName the collection property name
   * <br/> options.collection the editing collection where deleting item is located. It is can be columns in the matrices or choices in dropdown question and so on.
   * <br/> options.item the collection item that we are going to delete
   * <br/> options.allowDelete a boolean value. It is true by default. Set it false to abondome the element removing from the collection
   */
  public onCollectionItemDeleting: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * The event is called on adding a new Survey.ItemValue object. It uses as an element in choices array in Radiogroup, checkbox and dropdown questions or Matrix columns and rows properties.
   * Use this event, to set ItemValue.value and ItemValue.text properties by default or set a value to the custom property.
   * <br/> sender the survey creator object that fires the event
   * <br /> options.obj the object that contains the itemsValues array, for example selector, rating and single choice matrix questions.
   * <br/> options.propertyName  the object property Name. It can be "choices" for selector questions or rateValues for rating question or columns/rows for single choice matrix.
   * <br/> options.newItem a new created Survey.ItemValue object.
   * <br/> options.itemValues an editing Survey.ItemValue array. newItem object is not added yet into this array.
   */
  public onItemValueAdded: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * The event is called when a user adds a new column into MatrixDropdown or MatrixDynamic questions. Use it to set some properties of Survey.MatrixDropdownColumn by default, for example name or a custom property.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.matrix a matrix question where column is located, matrix.columns.
   * <br/> options.newColumn a new created Survey.MatrixDropdownColumn object.
   * <br/> options.columns editable columns objects. They can be different from options.matrix.columns. options.columns and options.matrix.columns are equal after user press Apply or Cancel and options.columns will be set to options.matrix.columns or reset to initial state.
   */
  public onMatrixColumnAdded: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * Use this event to control Property Editors UI.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.editorOptions  options that can be changed.
   * <br/> options.editorOptions.allowAddRemoveItems a boolean property, true by default. Set it false to disable add/remove items in array properties. For example 'choices', 'columns', 'rows'.
   * <br/> options.editorOptions.allowRemoveAllItems a boolean property, true by default. Set it false to disable remove all items in array properties. For example 'choices', 'columns', 'rows'.
   * <br/> options.editorOptions.showTextView a boolean property, true by default. Set it false to disable "Fast Entry" tab for "choices" property.
   * <br/> options.editorOptions.itemsEntryType a string property, 'form' by default. Set it 'fast' to show "Fast Entry" tab for "choices" property by default.
   */
  public onSetPropertyEditorOptions: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * The event is called on generation a new name for a new created element.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.element a new created survey element. It can be question, panel or page
   * <br/> options.name a new suggested name, that is unique for the current survey. You can suggest your own name. If it is unique, creator will assign it to the element.
   * <br/> options.isUnique a boolean property, set this property to false, if you want to ask Creator to generate another name
   */
  public onGenerateNewName: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * Use this event to show a custom error in the Question Editor on pressing Apply or OK buttons, if the values are not set correctly. The error will be displayed under the property editor.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.value the property value.
   * <br/> options.error the error you want to display. Set the empty string (the default value) or null if there is no errors.
   * @see onPropertyValueChanging
   */
  public onPropertyValidationCustomError: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.value the property value.
   * <br/> options.newValue set the corrected value into this property. Leave it null if you are ok with the entered value.
   * <br/> options.doValidation set the value to true to call the property validation. If there is an error, the user sees it immediately.
   * @see onPropertyValidationCustomError
   */
  public onPropertyValueChanging: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * Use this event to modify the list (name and titles) of the questions available in a condition editor.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.editor the instance of Property Editor.
   * <br/> options.list the list of the questions available for condition
   */
  public onConditionQuestionsGetList: CreatorBaseEvent<T
  > = new CreatorBaseEvent<T>();
  /**
   * Use this event to modify the list of the strings available in the Translation tab.
   *
   * The event handler accepts the following arguments:
   *
   * - `sender` - A Survey Creator instance that raised the event.
   * - `options.obj` - A survey object instance (survey, page, panel, question) whose string translations are being edited in the Translation tab.
   * - `options.propertyName` - The name of a property being translated.
   * - `options.visible` - A Boolean value that specifies the property visibility. Set it to `false` to hide the property.
   */
  public onTranslationStringVisibility: CreatorBaseEvent<T> = new CreatorBaseEvent<T>();
  /**
   * Use this event to define is the locale initially selected (default value) and ready for translaion or it is unselected.
   *
   * The event handler accepts the following arguments:
   *
   * - `sender` - A Survey Creator instance that raised the event.
   * - `options.locale` - the locale name, like 'en', 'de' and so on.
   * - `options.isSelected` - it is true by default. Set it to false to make the translation unselected.
   */
  public onTranslationLocaleInitiallySelected: CreatorBaseEvent<T> = new CreatorBaseEvent<T>();

  /**
   * This callback is used internally for providing survey JSON text.
   */
  public getSurveyJSONTextCallback: () => { text: string, isModified: boolean };
  /**
   * This callback is used internally for setting survey JSON text.
   */
  public setSurveyJSONTextCallback: (text: string) => void;

  /**
   * You need to set this property to true if you want to use tabs instead of accordion in the popup element's editor.
   */
  public useTabsInElementEditor = false;
  /**
   * You need to set this property to value bigger than 0 to disable adding more logic items in condition than this value.
   */
  public maxLogicItemsInCondition: number = -1;

  /**
   * You need to set this property to true if you want to show titles instead of names in pages editor and object selector.
   * @see onShowObjectDisplayName
   */
  public showObjectTitles = false;

  /**
   * You need to set this property to true if you want to show titles instead of names in expression editor.
   */
  public showTitlesInExpressions = false;
  /**
   * You need to set this property to false to allow your users build expressions visually only, without editing them in text editor.
   */
  public allowEditExpressionsInTextEditor = true;
  /**
   * You need to set this property to number more than 0 to limit the number of columns that users can create for matrix dynamic/matrix dropdown questions.
   */
  public maximumColumnsCount = 0;

  /**
   * Set this property to false to hide the pages selector in the Test Survey Tab
   */
  public showPagesInTestSurveyTab = true;

  /**
   * Set this property to false to hide the device simulator in the Test Survey Tab
   */
  public showSimulatorInTestSurveyTab = true;

  /**
   * Set this property to false to disable pages adding, editing and deleting
   */
  public allowModifyPages = true;

  /**
   * The default value is _"auto"_. It shows the language selector if there are more than two languages are using in the survey.
   * It shows only used languages in the survey.
   * Set this property to _false_ to hide the default language selector in the Test Survey Tab.
   * Set it to _true_ to show this selector even if there is only one language in the survey
   * Set it to _all_ to show the selector with all available languages (30+)
   */
  public showDefaultLanguageInTestSurveyTab: boolean | string = "auto";

  /**
   * Set this property to false to hide the show invisible element checkbox in the Test Survey Tab
   */
  public showInvisibleElementsInTestSurveyTab = true;

  /**
   * Set this property to true if you want to show "page selector" in the toolabar instead of "pages editor"
   */
  public showPageSelectorInToolbar = false;

  public tabs = ko.observableArray();

  /**
   * Returns the localized string by its id
   * @param str the string id.
   */
  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  /**
   * Set it to true to show "JSON Editor" tab and to false to hide the tab
   */
  public get showDesignerTab() {
    return this.showDesignerTabValue();
  }
  public set showDesignerTab(value: boolean) {
    this.showDesignerTabValue(value);
  }
  /**
   * Set it to true to show "JSON Editor" tab and to false to hide the tab
   */
  public get showJSONEditorTab() {
    return this.showJSONEditorTabValue();
  }
  public set showJSONEditorTab(value: boolean) {
    this.showJSONEditorTabValue(value);
  }
  /**
   * Set it to true to show "Test Survey" tab and to false to hide the tab
   */
  public get showTestSurveyTab() {
    return this.showTestSurveyTabValue();
  }
  public set showTestSurveyTab(value: boolean) {
    this.showTestSurveyTabValue(value);
  }
  /**
   * @Deprecated Obsolete, use showEmbeddedSurveyTab
   */
  public get showEmbededSurveyTab() {
    return this.showEmbeddedSurveyTab;
  }
  public set showEmbededSurveyTab(value: boolean) {
    this.showEmbeddedSurveyTab = value;
  }

  /**
   * Set it to true to show "Embed Survey" tab and to false to hide the tab
   */
  public get showEmbeddedSurveyTab() {
    return this.showEmbeddedSurveyTabValue();
  }
  public set showEmbeddedSurveyTab(value: boolean) {
    this.showEmbeddedSurveyTabValue(value);
  }

  /**
   * Set it to true to show "Logic" tab and to false to hide the tab
   */
  public get showLogicTab() {
    return this.showLogicTabValue();
  }
  public set showLogicTab(value: boolean) {
    this.showLogicTabValue(value);
  }
  /**
   * Set it to true to show "Translation" tab and to false to hide the tab
   */
  public get showTranslationTab() {
    return this.showTranslationTabValue();
  }
  public set showTranslationTab(value: boolean) {
    this.showTranslationTabValue(value);
  }

  /**
   * A boolean property, false by default. Set it to true to call protected doSave method automatically on survey changing.
   */
  public get isAutoSave() {
    return this.koAutoSave();
  }
  public set isAutoSave(newVal) {
    this.koAutoSave(newVal);
  }
  /**
   * Set it to false to suppress an alert message about error on saving the survey into database.
   */
  public showErrorOnFailedSave: boolean = true;

  koReadOnly = ko.observable(false);

  protected onSetReadOnly(newVal: boolean) { }

  /**
   * A boolean property, false by default. Set it to true to deny editing.
   */
  public get readOnly() {
    return this.koReadOnly();
  }
  public set readOnly(newVal: boolean) {
    const text = this.text;
    this.koReadOnly(newVal);
    this.onSetReadOnly(newVal);
    this.text = text;
  }

  /**
   * You have right to set this property to true if you have bought the commercial licence only.
   * It will remove the text about non-commerical usage on the top of the widget.
   * Setting this property true without having a commercial licence is illegal.
   * @see haveCommercialLicense
   */
  public get haveCommercialLicense() {
    const checker = (<any>Survey).hasLicense;
    if (!!checker && checker(1)) return true;
    return this.haveCommercialLicenseValue();
  }
  public set haveCommercialLicense(val) {
    this.haveCommercialLicenseValue(val);
  }

  /**
   * Set it to true to activate RTL support
   */
  public get isRTL() {
    return this.isRTLValue;
  }
  public set isRTL(value: boolean) {
    this.isRTLValue = value;
  }

  public get showState() {
    return this.koShowState();
  }

  public set showState(newVal) {
    this.koShowState(newVal);
  }

  /**
   * Change the active view/tab. It will return false if it can't change the current tab.
   * @param viewName name of new active view (tab). The following values are available: "designer", "editor", "test", "embed" and "translation".
   */
  public makeNewViewActive(viewName: string): boolean {
    if (!this.canSwitchViewType(viewName)) return false;
    this.onViewTypeChanged(viewName);
    this.koViewType(viewName);
    return true;
  }

  protected onViewTypeChanged(newType: string) { }

  protected canSwitchViewType(newType: string) {
    return true;
  }

  constructor(protected options: ICreatorOptions) {
    this.setOptions(options);
    this.initTabs();
  }

  protected initTabs() {
    ko.computed(() => {
      this.tabs([]);
      if (this.showDesignerTab) {
        this.tabs.push({
          name: "designer",
          title: this.getLocString("ed.designer"),
          template: "se-tab-designer",
          data: this,
          action: () => this.makeNewViewActive("designer"),
        });
      }
      if (this.showTestSurveyTab) {
        this.tabs.push({
          name: "test",
          title: this.getLocString("ed.testSurvey"),
          template: "se-tab-test",
          data: this,
          action: () => this.makeNewViewActive("test"),
        });
      }
      if (this.showLogicTab) {
        this.tabs.push({
          name: "logic",
          title: this.getLocString("ed.logic"),
          template: "se-tab-logic",
          data: this,
          action: () => this.makeNewViewActive("logic"),
        });
      }
      if (this.showJSONEditorTab) {
        this.tabs.push({
          name: "editor",
          title: this.getLocString("ed.jsonEditor"),
          template: "se-tab-json-editor",
          data: this,
          action: () => this.makeNewViewActive("editor"),
        });
      }
      if (this.showEmbeddedSurveyTab) {
        this.tabs.push({
          name: "embed",
          title: this.getLocString("ed.embedSurvey"),
          template: "se-tab-embed",
          data: this,
          action: () => this.makeNewViewActive("embed"),
        });
      }
      if (this.showTranslationTab) {
        this.tabs.push({
          name: "translation",
          title: this.getLocString("ed.translation"),
          template: "se-tab-translation",
          data: this,
          action: () => this.makeNewViewActive("translation"),
        });
      }
      if (this.tabs().length > 0) {
        this.koViewType(this.tabs()[0].name);
      }
    });
  }

  public getOptions() {
    return this.options || {};
  }

  protected setOptions(options: ICreatorOptions) {
    if (!options) options = {};
    if (!options.hasOwnProperty("generateValidJSON"))
      options.generateValidJSON = true;
    this.options = options;
    this.showDesignerTabValue(
      typeof options.showDesignerTab !== "undefined"
        ? options.showDesignerTab
        : true
    );
    this.showLogicTabValue(
      typeof options.showLogicTab !== "undefined" ? options.showLogicTab : false
    );
    this.showJSONEditorTabValue(
      typeof options.showJSONEditorTab !== "undefined"
        ? options.showJSONEditorTab
        : true
    );
    this.showTestSurveyTabValue(
      typeof options.showTestSurveyTab !== "undefined"
        ? options.showTestSurveyTab
        : true
    );
    this.showEmbeddedSurveyTabValue(
      typeof options.showEmbeddedSurveyTab !== "undefined"
        ? options.showEmbeddedSurveyTab
        : typeof options.showEmbededSurveyTab !== "undefined"
          ? options.showEmbededSurveyTab
          : false
    );
    this.showTranslationTabValue(
      typeof options.showTranslationTab !== "undefined"
        ? options.showTranslationTab
        : false
    );
    this.showLogicTabValue(
      typeof options.showLogicTab !== "undefined" ? options.showLogicTab : false
    );

    this.haveCommercialLicense =
      typeof options.haveCommercialLicense !== "undefined"
        ? options.haveCommercialLicense
        : false;

    this.showObjectTitles =
      typeof options.showObjectTitles !== "undefined"
        ? options.showObjectTitles
        : false;
    this.showTitlesInExpressions =
      typeof options.showTitlesInExpressions !== "undefined"
        ? options.showTitlesInExpressions
        : false;
    this.allowEditExpressionsInTextEditor =
      typeof options.allowEditExpressionsInTextEditor !== "undefined"
        ? options.allowEditExpressionsInTextEditor
        : true;
    if (typeof options.maximumColumnsCount !== "undefined") {
      this.maximumColumnsCount = options.maximumColumnsCount;
    }
    this.useTabsInElementEditor =
      typeof options.useTabsInElementEditor !== "undefined"
        ? options.useTabsInElementEditor
        : false;
    this.maxLogicItemsInCondition =
      typeof options.maxLogicItemsInCondition !== "undefined"
        ? options.maxLogicItemsInCondition
        : -1;
    this.showState =
      typeof options.showState !== "undefined" ? options.showState : false;
    this.koShowOptions(
      typeof options.showOptions !== "undefined" ? options.showOptions : false
    );

    this.koGenerateValidJSON(this.options.generateValidJSON);
    this.isAutoSave =
      typeof options.isAutoSave !== "undefined" ? options.isAutoSave : false;
    this.showErrorOnFailedSave =
      typeof options.showErrorOnFailedSave !== "undefined"
        ? options.showErrorOnFailedSave
        : true;
    this.isRTLValue =
      typeof options.isRTL !== "undefined" ? options.isRTL : false;

    if (typeof options.readOnly !== "undefined") {
      this.koReadOnly(options.readOnly);
    }
    if (typeof options.showPagesInTestSurveyTab !== "undefined") {
      this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
    }
    if (typeof options.showSimulatorInTestSurveyTab !== "undefined") {
      this.showSimulatorInTestSurveyTab = options.showSimulatorInTestSurveyTab;
    }
    if (typeof options.showDefaultLanguageInTestSurveyTab !== "undefined") {
      this.showDefaultLanguageInTestSurveyTab =
        options.showDefaultLanguageInTestSurveyTab;
    }
    if (typeof options.showInvisibleElementsInTestSurveyTab !== "undefined") {
      this.showInvisibleElementsInTestSurveyTab =
        options.showInvisibleElementsInTestSurveyTab;
    }
    if (typeof options.allowModifyPages !== "undefined") {
      this.allowModifyPages = options.allowModifyPages;
    }
    if (this.options.showPageSelectorInToolbar) {
      this.showPageSelectorInToolbar = true;
      this.showDropdownPageSelectorValue(false);
    }
    if (typeof options.showDropdownPageSelector !== "undefined") {
      this.showDropdownPageSelectorValue(options.showDropdownPageSelector);
    }
  }

  onIsPropertyReadOnlyCallback(
    obj: Survey.Base,
    property: Survey.JsonObjectProperty,
    readOnly: boolean,
    parentObj: Survey.Base,
    parentProperty: Survey.JsonObjectProperty
  ): boolean {
    var proposedValue = this.readOnly || readOnly;
    if (this.onGetPropertyReadOnly.isEmpty) return proposedValue;
    var options = {
      obj: obj,
      property: property,
      readOnly: proposedValue,
      propertyName: property.name,
      parentObj: parentObj,
      parentProperty: parentProperty,
    };
    this.onGetPropertyReadOnly.fire(this, options);
    return options.readOnly;
  }

  /**
   * The editing survey object (Survey.Survey)
   */
  public get survey() {
    return this.surveyValue();
  }

  private getSurveyTextFromDesigner() {
    var json = (<any>this.survey).toJSON();
    const indent = settings.jsonEditor.indentation;
    if (this.options && this.options.generateValidJSON) {
      return JSON.stringify(json, null, indent);
    }
    return new SurveyJSON5().stringify(json, null, indent);
  }

  protected setTextValue(value: string) {
    if (!!this.setSurveyJSONTextCallback) {
      this.setSurveyJSONTextCallback(value);
    }
  }

  /**
   * Set JSON as text  into survey. Clear undo/redo states optionally.
   * @param value JSON as text
   * @param clearState default false. Set this parameter to true to clear undo/redo states.
   */
  public changeText(value: string, clearState = false) {
    this.setTextValue(value);
  }

  /**
   * The Survey JSON as a text. Use it to get Survey JSON or change it.
   * @see JSON
   */
  public get text(): string {
    if (!!this.getSurveyJSONTextCallback) {
      return this.getSurveyJSONTextCallback().text;
    }
    return this.getSurveyTextFromDesigner();
  }
  public set text(value: string) {
    this.changeText(value, true);
  }

  public getSurveyJSON(): any {
    if (this.koViewType() != "editor") {
      return new Survey.JsonObject().toJsonObject(this.survey);
    }
    var surveyJsonText = this.text;
    var textWorker = new SurveyTextWorker(surveyJsonText);
    if (textWorker.isJsonCorrect) {
      return new Survey.JsonObject().toJsonObject(textWorker.survey);
    }
    return null;
  }

  public getObjectDisplayName(
    obj: Survey.Base,
    reason: string,
    displayName: string = undefined
  ): string {
    if (!displayName) {
      displayName = SurveyHelper.getObjectName(obj, this.showObjectTitles);
    }
    var options = { obj: obj, displayName: displayName, reason: reason };
    this.onGetObjectDisplayName.fire(this, options);
    return options.displayName;
  }

  public createSurvey(
    json: any = {},
    reason: string = "designer",
    surveyType = Survey.Survey
  ) {
    var survey = new surveyType(json);
    if (reason != "designer" && reason != "test") {
      survey.locale = editorLocalization.currentLocale;
    }
    this.onSurveyInstanceCreated.fire(this, { survey: survey, reason: reason });
    return survey;
  }

  public setModified(options: any = null) { }

  protected convertCurrentObject(obj: Survey.Question, className: string) {
    this.startTransaction("Convert question to: " + className);
    var newQuestion = QuestionConverter.convertObject(obj, className);
    this.stopTransation();
    this.setModified({
      type: "QUESTION_CONVERTED",
      className: className,
      oldValue: obj,
      newValue: newQuestion,
    });
  }

  protected initSurveyWithJSON(json: any, clearState: boolean) { }

  /**
   * The Survey JSON. Use it to get Survey JSON or change it.
   * @see text
   */
  public get JSON(): any {
    if (!this.survey) return {};
    return (<any>this.survey).toJSON();
  }
  public set JSON(val: any) {
    if (this.koViewType() == "editor") {
      this.setTextValue(JSON.stringify(val));
    } else {
      this.initSurveyWithJSON(val, true);
    }
  }
  /**
   * Set it to false hide the dropdown page selector in the page editor above the design surface
   */
  public get showDropdownPageSelector() {
    return this.showDropdownPageSelectorValue();
  }
  protected doClickQuestionCore(
    element: Survey.IElement,
    modifiedType: string = "ADDED_FROM_TOOLBOX"
  ) {
    var parent = this.survey.currentPage;
    var index = -1;
    var elElement = this.survey.selectedElement;
    if (elElement && elElement.parent) {
      parent = elElement.parent;
      index = parent.elements.indexOf(this.survey.selectedElement);
      if (index > -1) index++;
    }
    parent.addElement(element, index);
    this.setModified({ type: modifiedType, question: element });
  }

  public setNewNames(element: Survey.IElement) {
    this.newQuestions = [];
    this.newPanels = [];
    this.newQuestionChangedNames = {};
    this.setNewNamesCore(element);
    this.updateNewElementExpressions(element);
  }
  private updateNewElementExpressions(element: Survey.ISurveyElement) {
    var survey = new Survey.SurveyModel();
    survey.setDesignMode(true);
    if (element.isPage) {
      survey.addPage(<Survey.PageModel>element);
    } else {
      survey.addNewPage("p1");
      survey.pages[0].addElement(<Survey.IElement>element);
    }
    var logic = new SurveyLogic(survey);
    for (var key in this.newQuestionChangedNames) {
      logic.renameQuestion(key, this.newQuestionChangedNames[key]);
    }
  }

  protected getAllQuestions(): Array<any> {
    var result = [];
    for (var i = 0; i < this.survey.pages.length; i++) {
      this.addElements(this.survey.pages[i].elements, false, result);
    }
    this.addElements(this.newPanels, false, result);
    this.addElements(this.newQuestions, false, result);
    return result;
  }

  protected getAllPanels(): Array<any> {
    var result = [];
    for (var i = 0; i < this.survey.pages.length; i++) {
      this.addElements(this.survey.pages[i].elements, true, result);
    }
    this.addElements(this.newPanels, true, result);
    this.addElements(this.newQuestions, true, result);
    return result;
  }

  protected addElements(
    elements: Array<any>,
    isPanel: boolean,
    result: Array<any>
  ) {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].isPanel === isPanel) {
        result.push(elements[i]);
      }
      this.addElements(SurveyHelper.getElements(elements[i]), isPanel, result);
    }
  }

  protected getNewName(type: string): string {
    if (type == "page") return SurveyHelper.getNewPageName(this.survey.pages);
    return type == "panel" || type == "flowpanel"
      ? this.getNewPanelName()
      : this.getNewQuestionName();
  }
  protected getNewQuestionName(): string {
    return SurveyHelper.getNewQuestionName(this.getAllQuestions());
  }
  protected getNewPanelName(): string {
    return SurveyHelper.getNewPanelName(this.getAllPanels());
  }

  protected setNewNamesCore(element: Survey.IElement) {
    var elType = element["getType"]();
    var newName = this.getNewName(elType);
    if (newName != element.name) {
      this.newQuestionChangedNames[element.name] = newName;
      element.name = newName;
    }
    if (element.isPanel || elType == "page") {
      if (element.isPanel) {
        this.newPanels.push(element);
      }
      var panel = <Survey.PanelModelBase>(<any>element);
      for (var i = 0; i < panel.elements.length; i++) {
        this.setNewNamesCore(panel.elements[i]);
      }
    } else {
      this.newQuestions.push(element);
    }
  }

  protected createNewElement(json: any): Survey.IElement {
    var newElement = Survey.Serializer.createClass(json["type"]);
    new Survey.JsonObject().toObject(json, newElement);
    this.setNewNames(newElement);
    return newElement;
  }

  public copyElement(element: Survey.Base): Survey.IElement {
    var json = new Survey.JsonObject().toJsonObject(element);
    json.type = element.getType();
    return this.createNewElement(json);
  }

  /**
   * Copy a question to the active page
   * @param question A copied Survey.Question
   */
  public fastCopyQuestion(question: Survey.Base) {
    var newElement = this.copyElement(question);
    this.doClickQuestionCore(newElement, "ELEMENT_COPIED");
  }

  /**
   * Delete an element in the survey. It can be a question, a panel or a page.
   * @param element a survey element.
   */
  public deleteElement(element: Survey.Base) {
    this.deleteObject(element);
  }

  protected deleteObjectCore(obj: any) {
    var objType = SurveyHelper.getObjectType(obj);
    if (objType == ObjType.Page) {
      this.survey.removePage(obj);
    } else {
      this.deletePanelOrQuestion(obj, objType);
    }
    this.setModified({
      type: "OBJECT_DELETED",
      target: obj,
    });
    this.updateConditionsOnRemove(obj);
  }

  protected deleteObject(obj: any) {
    var options = {
      element: obj,
      elementType: SurveyHelper.getObjectType(obj),
      allowing: true,
    };
    this.onElementDeleting.fire(this, options);
    if (!options.allowing) return;
    this.deleteObjectCore(obj);
  }

  protected updateConditionsOnRemove(obj: any) {
    var objType = SurveyHelper.getObjectType(obj);
    var questions;
    if (objType == ObjType.Question) {
      questions = [obj];
    } else {
      var questions = obj.questions;
    }
    if (!questions) return;
    // TODO: remove SurveyLogic call here
    var logic = new SurveyLogic(<any>this.survey, <any>this);
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].isQuestion) {
        logic.removeQuestion(questions[i].getValueName());
      }
    }
  }

  public selectElement(element: any) { }

  protected deletePanelOrQuestion(obj: Survey.Base, objType: ObjType): void {
    var parent = obj["parent"];
    var elements = parent.elements;
    var objIndex = elements.indexOf(obj);
    if (objIndex == elements.length - 1) {
      objIndex--;
    }
    if(obj["questions"]) {
      obj["questions"].forEach(q => this.updateConditionsOnRemove(q));
    }
    obj["delete"]();
    this.selectElement(objIndex > -1 ? elements[objIndex] : parent);
  }
  protected onCanShowObjectProperty(
    object: any,
    property: Survey.JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: Survey.JsonObjectProperty
  ): boolean {
    var options = {
      obj: object,
      property: property,
      canShow: true,
      showMode: showMode,
      parentObj: parentObj,
      parentProperty: parentProperty,
    };
    this.onCanShowProperty.fire(this, options);
    return options.canShow;
  }
  protected canDeleteItem(
    object: any,
    item: Survey.Base,
    allowDelete: boolean
  ): boolean {
    var options = { obj: object, item: item, canDelete: allowDelete };
    this.onCanDeleteItem.fire(this, options);
    return options.canDelete;
  }
  private getErrorOnPropertyChanging(
    obj: Survey.Base,
    propertyName: string,
    value: any
  ): string {
    if (propertyName !== "name") return null;
    var newName = this.generateUniqueName(obj, value);
    if (newName !== value)
      return this.getLocString("pe.propertyNameIsNotUnique");
    return null;
  }
  protected generateUniqueName(el: Survey.Base, newName: string): string {
    var options = { element: el, name: newName, isUnique: true };
    do {
      if (!options.isUnique) {
        options.name = SurveyHelper.generateNewName(options.name);
      }
      while (!this.isNameUnique(el, options.name)) {
        options.name = SurveyHelper.generateNewName(options.name);
      }
      options.isUnique = true;
      var oldName = options.name;
      this.onGenerateNewName.fire(this, options);
      if (oldName != options.name) {
        options.isUnique = this.isNameUnique(el, options.name);
      }
    } while (!options.isUnique);
    return options.name;
  }
  protected isNameUnique(el: Survey.Base, newName: string): boolean {
    if (!this.isNameUniqueInArray(this.survey.pages, el, newName)) return false;
    if (!this.isNameUniqueInArray(this.survey.getAllPanels(), el, newName))
      return false;
    return this.isNameUniqueInArray(this.survey.getAllQuestions(), el, newName);
  }
  private isNameUniqueInArray(
    elements: Array<any>,
    el: Survey.Base,
    newName: string
  ): boolean {
    el = EditableObject.getOriginalObject(el);
    newName = newName.toLowerCase();
    for (var i = 0; i < elements.length; i++) {
      if (elements[i] != el && elements[i].name.toLowerCase() == newName)
        return false;
    }
    return true;
  }
  protected doPropertyGridChanged() { }

  //implements ISurveyCreatorOptions
  get alwaySaveTextInPropertyEditors(): boolean {
    return this.alwaySaveTextInPropertyEditorsValue;
  }
  set alwaySaveTextInPropertyEditors(value: boolean) {
    this.alwaySaveTextInPropertyEditorsValue = value;
  }
  onCanShowPropertyCallback(
    object: any,
    property: Survey.JsonObjectProperty,
    showMode: string = null,
    parentObj: any,
    parentProperty: Survey.JsonObjectProperty
  ): boolean {
    return this.onCanShowObjectProperty(
      object,
      property,
      showMode,
      parentObj,
      parentProperty
    );
  }
  onCanDeleteItemCallback(
    object: any,
    item: Survey.Base,
    allowDelete: boolean
  ): boolean {
    return this.canDeleteItem(object, item, allowDelete);
  }
  onCollectionItemDeletingCallback(
    obj: Survey.Base,
    property: Survey.JsonObjectProperty,
    collection: Array<Survey.Base>,
    item: Survey.Base
  ): boolean {
    if (this.onCollectionItemDeleting.isEmpty) return true;
    var options = {
      obj: obj,
      property: property,
      propertyName: property.name,
      collection: collection,
      item: item,
      allowDelete: true,
    };
    this.onCollectionItemDeleting.fire(this, options);
    return options.allowDelete;
  }
  onItemValueAddedCallback(
    obj: Survey.Base,
    propertyName: string,
    itemValue: Survey.ItemValue,
    itemValues: Array<Survey.ItemValue>
  ) {
    var options = {
      obj: obj,
      propertyName: propertyName,
      newItem: itemValue,
      itemValues: itemValues,
    };
    this.onItemValueAdded.fire(this, options);
  }
  onMatrixDropdownColumnAddedCallback(
    matrix: Survey.Question,
    column: Survey.MatrixDropdownColumn,
    columns: Array<Survey.MatrixDropdownColumn>
  ) {
    var options = { newColumn: column, matrix: matrix, columns: columns };
    this.onMatrixColumnAdded.fire(this, options);
  }
  onSetPropertyEditorOptionsCallback(
    propertyName: string,
    obj: Survey.Base,
    editorOptions: any
  ) {
    var options = {
      propertyName: propertyName,
      obj: obj,
      editorOptions: editorOptions,
    };
    this.onSetPropertyEditorOptions.fire(this, options);
  }
  onGetErrorTextOnValidationCallback(
    propertyName: string,
    obj: Survey.Base,
    value: any
  ): string {
    var error = this.getErrorOnPropertyChanging(obj, propertyName, value);
    if (!!error) return error;
    var options = {
      propertyName: propertyName,
      obj: obj,
      value: value,
      error: "",
    };
    this.onPropertyValidationCustomError.fire(this, options);
    return options.error;
  }
  onValueChangingCallback(options: any) {
    this.onPropertyValueChanging.fire(this, options);
  }
  public onPropertyValueChanged(
    property: Survey.JsonObjectProperty,
    obj: any,
    newValue: any
  ) {
    var oldValue = obj[property.name];
    this.setModified({
      type: "PROPERTY_CHANGED",
      name: property.name,
      target: obj,
      oldValue: oldValue,
      newValue: newValue,
    });
    //TODO add a flag to a property, may change other properties
    if (
      property.name == "hasComment" ||
      property.name == "hasNone" ||
      property.name == "hasOther" ||
      property.name == "hasSelectAll" ||
      property.name == "showCommentArea" ||
      property.name == "showNoneItem" ||
      property.name == "showOtherItem" ||
      property.name == "showSelectAllItem" ||
      property.name == "locale"
    ) {
      this.doPropertyGridChanged();
    }
    return null;
  }
  onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string {
    return title;
  }
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: any,
    list: any[]
  ) {
    var options = {
      propertyName: propertyName,
      obj: obj,
      editor: editor,
      list: list,
    };
    this.onConditionQuestionsGetList.fire(this, options);
    if (options.list !== list) {
      list.splice(0, list.length);
      for (var i = 0; i < options.list.length; i++) {
        list.push(options.list[i]);
      }
    }
  }
  startUndoRedoTransaction() {
    //TODO
  }
  stopUndoRedoTransaction() {
    //TODO
  }
  protected startTransaction(name: string) {

  }
  protected stopTransation() { }
}
