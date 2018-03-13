import * as ko from "knockout";
import { editorLocalization } from "./editorLocalization";
import { SurveyObjectEditor } from "./objectEditor";
import {
  ISurveyObjectEditorOptions,
  SurveyPropertyEditorBase
} from "./propertyEditors/propertyEditorBase";
import { SurveyPagesEditor } from "./pagesEditor";
import { SurveyLiveTester } from "./surveylive";
import { SurveyEmbedingWindow } from "./surveyEmbedingWindow";
import { SurveyObjects } from "./surveyObjects";
import { QuestionConverter } from "./questionconverter";
import { SurveyPropertyEditorShowWindow } from "./questionEditors/questionEditor";
import { SurveyJSONEditor } from "./surveyJSONEditor";
import { SurveyTextWorker } from "./textWorker";
import { SurveyUndoRedo, UndoRedoItem } from "./undoredo";
import { SurveyHelper, ObjType } from "./surveyHelper";
import { DragDropHelper } from "./dragdrophelper";
import { QuestionToolbox } from "./questionToolbox";
import { SurveyJSON5 } from "./json5";
var templateEditorHtml = require("html-loader?interpolate!val-loader!./templates/entry.html");
import * as Survey from "survey-knockout";
import { SurveyForDesigner } from "./surveyjsObjects";

/**
 * The toolbar item description
 */
export interface IToolbarItem {
  /**
   * Unique string id
   */
  id: string;
  /**
   * Set this property to false to make the toolbar item invisible.
   */
  visible: KnockoutObservable<boolean> | boolean;
  /**
   * Toolbar item title
   */
  title: KnockoutObservable<string> | string;
  /**
   * Set this property to false to disable the toolbar item.
   */
  enabled?: KnockoutObservable<boolean> | boolean;
  /**
   * A callback that calls on toolbar item click.
   */
  action?: () => void;
  /**
   * css class
   */
  css?: KnockoutObservable<string> | string;
  innerCss?: KnockoutObservable<string> | string;
  data?: any;
  template?: string;
  items?: KnockoutObservableArray<IToolbarItem>;
}
/**
 * Survey Editor is WYSIWYG editor.
 */
export class SurveyEditor implements ISurveyObjectEditorOptions {
  public static defaultNewSurveyText: string = "{ pages: [ { name: 'page1'}] }";
  private _haveCommercialLicense = ko.observable(false);
  private renderedElement: HTMLElement;
  private surveyjs: HTMLElement;

  private jsonEditor: SurveyJSONEditor;
  private selectedObjectEditorValue: SurveyObjectEditor;
  private questionEditorWindow: SurveyPropertyEditorShowWindow;
  private pagesEditor: SurveyPagesEditor;
  private surveyLive: SurveyLiveTester;
  private surveyEmbeding: SurveyEmbedingWindow;
  private surveyObjects: SurveyObjects;
  private toolboxValue: QuestionToolbox;
  private undoRedo: SurveyUndoRedo;
  private surveyValue = ko.observable<SurveyForDesigner>();
  private saveSurveyFuncValue: (
    no: number,
    onSaveCallback: (no: number, isSuccess: boolean) => void
  ) => void;
  private options: any;
  private stateValue: string = "";
  private dragDropHelper: DragDropHelper = null;
  private showJSONEditorTabValue: boolean;
  private showTestSurveyTabValue: boolean;
  private showEmbededSurveyTabValue: boolean;
  private select2: any = null;
  private alwaySaveTextInPropertyEditorsValue: boolean = false;
  private showApplyButtonValue: boolean = true;
  private isRTLValue: boolean = false;

  /**
   * You have right to set this property to true if you have bought the commercial licence only.
   * It will remove the text about non-commerical usage on the top of the widget.
   * Setting this property true without having a commercial licence is illegal.
   * @see haveCommercialLicense
   */
  public get haveCommercialLicense() {
    return this._haveCommercialLicense();
  }
  public set haveCommercialLicense(val) {
    this._haveCommercialLicense(val);
  }
  /**
   * This property is assign to the survey.surveyId property on showing in the "Embed Survey" tab.
   * @see showEmbededSurveyTab
   */
  public surveyId: string = null;
  /**
   * This property is assign to the survey.surveyPostId property on showing in the "Embed Survey" tab.
   * @see showEmbededSurveyTab
   */
  public surveyPostId: string = null;
  /**
   * This callback is called on changing "Generate Valid JSON" option.
   */
  public generateValidJSONChangedCallback: (generateValidJSON: boolean) => void;
  /**
   * The event is called before showing a property in the Property Grid or in Question Editor.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
   * <br/> options.canShow a boolean value. It is true by default. Set it false to hide the property from the Property Grid or in Question Editor
   */
  public onCanShowProperty: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event allows you to custom sort properties in the Property Grid. It is a compare function. You should set options.result to -1 or 1 by comparing options.property1 and options.property2.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.property1 the left object property (Survey.JsonObjectProperty object).
   * <br/> options.property2 the right object property (Survey.JsonObjectProperty object).
   * <br/> options.result the result of comparing. It can be 0 (use default behavior),  -1 options.property1 is less than options.property2 or 1 options.property1 is more than options.property2
   */
  public onCustomSortProperty: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event allows you modify DOM element for a property in the Property Grid. For example, you may change it's styles.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.htmlElement the html element (html table row in our case) that renders the property display name and it's editor.
   * <br/> options.property object property (Survey.JsonObjectProperty object).
   * <br/> options.propertyEditor the property Editor.
   */
  public onPropertyAfterRender: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event is called on deleting an element (question/panel/page) from the survey. Typically, when a user click the delete from the element menu.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.element an instance of the deleting element
   * <br/> options.elementType the type of the element: 'question', 'panel' or 'page'.
   * <br/> options.allowing set it to false to cancel the element deleting
   */
  public onElementDeleting: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event is called on adding a new question into the survey. Typically, when a user dropped a Question from the Question Toolbox into designer Survey area.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.question a new added survey question. Survey.QuestionBase object
   * <br/> options.page the survey Page object where question has been added.
   */
  public onQuestionAdded: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event is called when an end-user double click on an element (question/panel).
   * <br/> sender the survey editor object that fires the event
   * <br/> options.element an instance of the element
   */
  public onElementDoubleClick: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event is called on adding a new Survey.ItemValue object. It uses as an element in choices array in Radiogroup, checkbox and dropdown questions or Matrix columns and rows properties.
   * Use this event, to set ItemValue.value and ItemValue.text properties by default or set a value to the custom property.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.property  the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
   * <br/> options.newItem a new created Survey.ItemValue object.
   */
  public onItemValueAdded: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event is called when a user adds a new column into MatrixDropdown or MatrixDynamic questions. Use it to set some properties of Survey.MatrixDropdownColumn by default, for example name or a custom property.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.newColumn a new created Survey.MatrixDropdownColumn object.
   */
  public onMatrixColumnAdded: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event is called on adding a new panel into the survey.  Typically, when a user dropped a Panel from the Question Toolbox into designer Survey area.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.panel a new added survey panel. Survey.Panel object
   * <br/> options.page the survey Page object where question has been added.
   */
  public onPanelAdded: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event is called on adding a new page into the survey.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.page the new survey Page object.
   */
  public onPageAdded: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event is called when a survey is changed in the designer. A new page/question/page is added or existing is removed, a property is changed and so on.
   * <br/> sender the survey editor object that fires the event
   * <br/> options object contains the information about certain modifications
   * <br/> options.type contains string constant describing certain modification
   * <br/> Available values:
   * <br/>
   * <br/> options.type: "ADDED_FROM_TOOLBOX"
   * <br/> options.question: newly added question
   * <br/>
   * <br/> options.type: "PAGE_ADDED"
   * <br/> options.newValue: newly created page
   * <br/>
   * <br/> options.type: "PAGE_MOVED"
   * <br/> options.page: page has been moved
   * <br/> options.indexFrom: pevious index
   * <br/> options.indexTo: new index
   * <br/>
   * <br/> options.type: "QUESTION_CONVERTED"
   * <br/> options.className: the converted class name
   * <br/> options.oldValue: pevious object
   * <br/> options.newValue: the new object, converted from oldVale to the given class name
   * <br/>
   * <br/> options.type: "QUESTION_CHANGED_BY_EDITOR"
   * <br/> options.question: question has been edited in the popup question editor
   * <br/>
   * <br/> options.type: "PROPERTY_CHANGED"
   * <br/> options.name: the name of the property has been changed
   * <br/> options.target: the object containing the changed property
   * <br/> options.oldValue: the previous value of the changed property
   * <br/> options.newValue: the new value of the changed property
   * <br/>
   * <br/> options.type: "OBJECT_DELETED"
   * <br/> options.target: deleted object
   * <br/>
   * <br/> options.type: "VIEW_TYPE_CHANGED"
   * <br/> options.newType: new type of the editor view: editor or designer
   * <br/>
   * <br/> options.type: "DO_DROP"
   * <br/> options.page: the page of the drap/drop operation
   * <br/> options.source: the source dragged object
   * <br/> options.target: the drop target
   * <br/> options.newElement: a new element. It is defined if a user drops question or panel from the toolbox
   */
  public onModified: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event is fired when the Survey Editor is initialized and a survey object (Survey.Survey) is created.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.survey  the survey object showing in the editor.
   */
  public onDesignerSurveyCreated: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * The event is fired when the Survey Editor runs the survey in the test mode.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.survey  the survey object showing in the "Test survey" tab.
   */
  public onTestSurveyCreated: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * Use this event to control Property Editors UI.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.obj  the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.editorOptions  options that can be changed.
   * <br/> options.editorOptions.allowAddRemoveItems a boolean property, true by default. Set it false to disable add/remove items in array properties. For example 'choices', 'columns', 'rows'.
   * <br/> options.editorOptions.showTextView a boolean property, true by default. Set it false to disable "Fast Entry" tab for "choices" property.
   */
  public onSetPropertyEditorOptions: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * Use this event to show a custom error in the Question Editor on pressing Apply or OK buttons, if the values are not set correctly. The error will be displayed under the property editor.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.obj  the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.value the property value.
   * <br/> options.error the error you want to display. Set the empty string (the default value) or null if there is no errors.
   * @see onPropertyValueChanging
   */
  public onPropertyValidationCustomError: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
   * <br/> sender the survey editor object that fires the event
   * <br/> options.obj  the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.value the property value.
   * <br/> options.newValue set the corrected value into this property. Leave it null if you are ok with the entered value.
   * <br/> options.doValidation set the value to true to call the property validation. If there is an error, the user sees it immediately.
   * @see onPropertyValidationCustomError
   */
  public onPropertyValueChanging: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
   * <br/> sender the survey editor object that fires the event
   * <br/> options.obj  the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.editor the instance of Property Editor.
   * @see onPropertyValueChanging
   */
  public onPropertyEditorObjectAssign: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * Use this event to disable some operations for an element (question/panel).
   * <br/> sender the survey editor object that fires the event
   * <br/> options.obj  the survey object question/panel
   * <br/> options.allowDelete set it to false to disable deleting the object
   * <br/> options.allowEdit set it to false to disable calling the modal Editor
   * <br/> options.allowCopy set it to false to disable copying the object
   * <br/> options.allowAddToToolbox set it to false to disable adding element to Toolbox
   * <br/> options.allowDragging set it to false to disable adding element to Toolbox
   * <br/> options.allowChangeType set it to false to disable changing element type
   */
  public onElementAllowOperations: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * Use this event to add/remove/modify the element (question/panel) menu items.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.obj  the survey object which property is edited in the Property Editor.
   * <br/> options.items the list of menu items. It has two requried fields: text and onClick: function(obj: Survey.Base) {} and optional name field.
   * @see onElementAllowOperations
   */
  public onDefineElementMenuItems: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  /**
   * Use this event to show the description on the top or/and bottom of the property modal editor.
   * <br/> sender the survey editor object that fires the event
   * <br/> options.obj  the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName the property name
   * <br/> options.htmlTop the html  that you want to see on the top of the modal window
   * <br/> options.htmlBottom the html that you want to see on the bottom of the modal window
   */
  public onShowPropertyModalEditorDescription: Survey.Event<
    (sender: SurveyEditor, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyEditor, options: any) => any, any>();
  koAutoSave = ko.observable(false);
  /**
   * A boolean property, false by default. Set it to true to call protected doSave method automatically on survey changing.
   */
  public get isAutoSave() {
    return this.koAutoSave();
  }
  public set isAutoSave(newVal) {
    this.koAutoSave(newVal);
  }
  koShowState = ko.observable(false);
  /**
   * A boolean property, false by default. Set it to true to show the state in the toolbar (saving/saved).
   */
  public get showState() {
    return this.koShowState();
  }
  public set showState(newVal) {
    this.koShowState(newVal);
  }

  koIsShowDesigner: any;
  koViewType: any;
  koCanDeleteObject: any;
  koObjects: any;
  koSelectedObject: any;
  koShowSaveButton: any;
  koGenerateValidJSON: any;
  koShowOptions: any;
  koShowPropertyGrid: any;
  koTestSurveyWidth: any;
  koDesignerHeight: any;
  koShowPagesToolbox: any;
  selectDesignerClick: any;
  selectEditorClick: any;
  selectTestClick: any;
  selectEmbedClick: any;
  generateValidJSONClick: any;
  generateReadableJSONClick: any;
  doUndoClick: any;
  doRedoClick: any;
  deleteObjectClick: any;
  koState = ko.observable("");
  runSurveyClick: any;
  embedingSurveyClick: any;
  saveButtonClick: any;
  draggingToolboxItem: any;
  clickToolboxItem: any;
  dragEnd: any;
  /**
   * The Survey Editor constructor.
   * @param renderedElement HtmlElement or html element id where Survey Editor will be rendered
   * @param options Survey Editor options. The following options are available: showJSONEditorTab, showTestSurveyTab, showEmbededSurveyTab, showPropertyGrid, questionTypes, showOptions, generateValidJSON, isAutoSave, designerHeight.
   */
  constructor(renderedElement: any = null, options: any = null) {
    this.koShowOptions = ko.observable();
    this.koGenerateValidJSON = ko.observable(true);
    this.koShowPropertyGrid = ko.observable(true);
    this.koDesignerHeight = ko.observable();
    this.koShowPagesToolbox = ko.observable(true);
    this.setOptions(options);
    this.koCanDeleteObject = ko.observable(false);

    var self = this;

    this.koShowSaveButton = ko.observable(false);
    this.koTestSurveyWidth = ko.observable("100%");
    this.saveButtonClick = function() {
      self.doSave();
    };
    this.koObjects = ko.observableArray();
    this.koSelectedObject = ko.observable();
    this.koSelectedObject.subscribe(function(newValue) {
      self.selectedObjectChanged(newValue != null ? newValue.value : null);
    });
    this.koGenerateValidJSON.subscribe(function(newValue) {
      if (!self.options) self.options = {};
      self.options.generateValidJSON = newValue;
      if (self.generateValidJSONChangedCallback)
        self.generateValidJSONChangedCallback(newValue);
    });
    this.surveyObjects = new SurveyObjects(
      this.koObjects,
      this.koSelectedObject
    );
    this.undoRedo = new SurveyUndoRedo();

    this.selectedObjectEditorValue = new SurveyObjectEditor(this);
    this.selectedObjectEditorValue.onCanShowPropertyCallback = function(
      object: any,
      property: Survey.JsonObjectProperty
    ) {
      return self.onCanShowObjectProperty(object, property);
    };
    this.selectedObjectEditorValue.onSortPropertyCallback = function(
      obj: any,
      property1: Survey.JsonObjectProperty,
      property2: Survey.JsonObjectProperty
    ): number {
      return self.onCustomSortPropertyObjectProperty(obj, property1, property2);
    };
    this.selectedObjectEditorValue.onPropertyValueChanged.add(
      (sender, options) => {
        self.onPropertyValueChanged(
          options.property,
          options.object,
          options.newValue
        );
      }
    );
    this.selectedObjectEditorValue.onAfterRenderCallback = function(
      obj,
      htmlElement,
      prop
    ) {
      if (self.onPropertyAfterRender.isEmpty) return;
      var options = {
        obj: obj,
        htmlElement: htmlElement,
        property: prop.property,
        propertyEditor: prop.editor
      };
      self.onPropertyAfterRender.fire(self, options);
    };
    this.questionEditorWindow = new SurveyPropertyEditorShowWindow();
    this.questionEditorWindow.onCanShowPropertyCallback = function(
      object: any,
      property: Survey.JsonObjectProperty
    ) {
      return self.onCanShowObjectProperty(object, property);
    };
    this.pagesEditor = new SurveyPagesEditor();
    this.pagesEditor = new SurveyPagesEditor();
    this.pagesEditor.onAddNewPageCallback = () => {
      self.addPage();
    };
    this.pagesEditor.onSelectPageCallback = (page: Survey.Page) => {
      self.surveyObjects.selectObject(page);
    };
    this.pagesEditor.onMovePageCallback = (
      indexFrom: number,
      indexTo: number
    ) => {
      self.movePage(indexFrom, indexTo);
    };
    this.pagesEditor.onDeletePageCallback = (page: Survey.Page) => {
      self.deleteCurrentObject();
    };
    this.pagesEditor.onCopyPageCallback = (page: Survey.Page) => {
      self.copyPage(page);
    };
    this.pagesEditor.onModifiedCallback = options => {
      self.setModified(options);
    };
    this.pagesEditor.onShowPageEditDialog = (page: Survey.QuestionBase) => {
      self.showQuestionEditor(page);
    };
    this.pagesEditor.onShowSurveyEditDialog = () => {
      self.showQuestionEditor(this.survey);
    };
    this.pagesEditor.onSelectSurveyCallback = () => {
      self.surveyObjects.selectObject(this.survey);
    };
    this.surveyLive = new SurveyLiveTester();
    this.surveyEmbeding = new SurveyEmbedingWindow();
    this.toolboxValue = new QuestionToolbox(
      this.options && this.options.questionTypes
        ? this.options.questionTypes
        : null
    );

    this.koViewType = ko.observable("designer");
    this.koIsShowDesigner = ko.computed(function() {
      return self.koViewType() == "designer";
    });
    this.selectDesignerClick = function() {
      self.showDesigner();
    };
    this.selectEditorClick = function() {
      self.showJsonEditor();
    };
    this.selectTestClick = function() {
      self.showTestSurvey();
    };
    this.selectEmbedClick = function() {
      self.showEmbedEditor();
    };
    this.generateValidJSONClick = function() {
      self.koGenerateValidJSON(true);
    };
    this.generateReadableJSONClick = function() {
      self.koGenerateValidJSON(false);
    };
    this.runSurveyClick = function() {
      self.showLiveSurvey();
    };
    this.embedingSurveyClick = function() {
      self.showSurveyEmbeding();
    };
    this.deleteObjectClick = function() {
      self.deleteCurrentObject();
    };
    this.draggingToolboxItem = function(item, e) {
      self.doDraggingToolboxItem(item.json, e);
    };
    this.clickToolboxItem = function(item) {
      self.doClickToolboxItem(item.json);
    };
    this.dragEnd = function(item, e) {
      self.dragDropHelper.end();
    };

    this.doUndoClick = function() {
      self.doUndoRedo(self.undoRedo.undo());
    };
    this.doRedoClick = function() {
      self.doUndoRedo(self.undoRedo.redo());
    };

    this.jsonEditor = new SurveyJSONEditor();

    if (renderedElement) {
      this.render(renderedElement);
    }

    this.text = "";

    this.toolbarItems.push({
      id: "svd-undo",
      visible: this.koIsShowDesigner,
      enabled: this.undoRedo.koCanUndo,
      action: this.doUndoClick,
      title: this.getLocString("ed.undo")
    });
    this.toolbarItems.push({
      id: "svd-redo",
      visible: this.koIsShowDesigner,
      enabled: this.undoRedo.koCanRedo,
      action: this.doRedoClick,
      title: this.getLocString("ed.redo")
    });
    this.toolbarItems.push({
      id: "svd-options",
      visible: ko.computed(
        () => this.koIsShowDesigner() && this.koShowOptions()
      ),
      title: this.getLocString("ed.options"),
      template: "svd-toolbar-options",
      items: ko.observableArray([
        {
          id: "svd-valid-json",
          visible: true,
          css: ko.computed(() => (this.koGenerateValidJSON() ? "active" : "")),
          action: this.generateValidJSONClick,
          title: this.getLocString("ed.generateValidJSON")
        },
        {
          id: "svd-readable-json",
          visible: true,
          css: ko.computed(() => (!this.koGenerateValidJSON() ? "active" : "")),
          action: this.generateReadableJSONClick,
          title: this.getLocString("ed.generateReadableJSON")
        }
      ])
    });
    this.toolbarItems.push({
      id: "svd-test",
      visible: ko.computed(() => this.koViewType() === "test"),
      title: ko.computed(
        () =>
          this.getLocString("ed.testSurveyWidth") +
          " " +
          this.koTestSurveyWidth()
      ),
      template: "svd-toolbar-options",
      items: ko.observableArray([
        {
          id: "svd-100-json",
          visible: true,
          action: () => this.koTestSurveyWidth("100%"),
          title: "100%"
        },
        {
          id: "svd-1200px-json",
          visible: true,
          action: () => this.koTestSurveyWidth("1200px"),
          title: "1200px"
        },
        {
          id: "svd-1000px-json",
          visible: true,
          action: () => this.koTestSurveyWidth("1000px"),
          title: "1000px"
        },
        {
          id: "svd-800px-json",
          visible: true,
          action: () => this.koTestSurveyWidth("800px"),
          title: "800px"
        },
        {
          id: "svd-600px-json",
          visible: true,
          action: () => this.koTestSurveyWidth("600px"),
          title: "600px"
        },
        {
          id: "svd-400px-json",
          visible: true,
          action: () => this.koTestSurveyWidth("400px"),
          title: "400px"
        }
      ])
    });
    this.toolbarItems.push({
      id: "svd-save",
      visible: this.koShowSaveButton,
      action: this.saveButtonClick,
      innerCss: "svd_save_btn",
      title: this.getLocString("ed.saveSurvey")
    });
    this.toolbarItems.push({
      id: "svd-state",
      visible: this.koShowState,
      css: "svd_state",
      innerCss: ko.computed(() => "icon-" + this.koState()),
      title: ko.computed(() => this.getLocString("ed." + this.koState())),
      template: "svd-toolbar-state"
    });
  }
  protected setOptions(options: any) {
    if (!options) options = {};
    if (!options.hasOwnProperty("generateValidJSON"))
      options.generateValidJSON = true;
    this.options = options;
    this.showJSONEditorTabValue =
      typeof options.showJSONEditorTab !== "undefined"
        ? options.showJSONEditorTab
        : true;
    this.showTestSurveyTabValue =
      typeof options.showTestSurveyTab !== "undefined"
        ? options.showTestSurveyTab
        : true;
    this.showEmbededSurveyTabValue =
      typeof options.showEmbededSurveyTab !== "undefined"
        ? options.showEmbededSurveyTab
        : false;
    this.haveCommercialLicense =
      typeof options.haveCommercialLicense !== "undefined"
        ? options.haveCommercialLicense
        : false;
    this.koShowOptions(
      typeof options.showOptions !== "undefined" ? options.showOptions : false
    );
    this.koShowPropertyGrid(
      typeof options.showPropertyGrid !== "undefined"
        ? options.showPropertyGrid
        : true
    );
    this.koGenerateValidJSON(this.options.generateValidJSON);
    this.isAutoSave =
      typeof options.isAutoSave !== "undefined" ? options.isAutoSave : false;
    this.isRTLValue =
      typeof options.isRTL !== "undefined" ? options.isRTL : false;
    if (options.designerHeight) {
      this.koDesignerHeight(options.designerHeight);
    }
    if (options.objectsIntend) {
      SurveyObjects.intend = options.objectsIntend;
    }
    if (typeof options.showPagesToolbox !== "undefined") {
      this.koShowPagesToolbox(options.showPagesToolbox);
    }
  }
  /**
   * The editing survey object (Survey.Survey)
   */
  public get survey(): SurveyForDesigner {
    return this.surveyValue();
  }
  public get selectedObjectEditor(): SurveyObjectEditor {
    return this.selectedObjectEditorValue;
  }
  /**
   * Call this method to render the survey editor.
   * @param element HtmlElement or html element id where Survey Editor will be rendered
   * @param options Survey Editor options. The following options are available: showJSONEditorTab, showTestSurveyTab, showEmbededSurveyTab, showOptions, generateValidJSON, isAutoSave, designerHeight.
   */
  public render(element: any = null, options: any = null) {
    if (options) this.setOptions(options);
    var self = this;
    if (element && typeof element == "string") {
      element = document.getElementById(element);
    }
    if (element) {
      this.renderedElement = element;
    }
    element = this.renderedElement;
    if (!element) return;
    element.innerHTML = templateEditorHtml;
    self.applyBinding();
  }
  public loadSurvey(surveyId: string) {
    var self = this;
    new Survey.dxSurveyService().loadSurvey(surveyId, function(
      success: boolean,
      result: string,
      response: any
    ) {
      if (success && result) {
        self.text = JSON.stringify(result);
      }
    });
  }
  /**
   * The Survey JSON as a text. Use it to get Survey JSON or change it.
   */
  public get text() {
    if (this.koIsShowDesigner()) return this.getSurveyTextFromDesigner();
    return this.jsonEditor.text;
  }
  public set text(value: string) {
    this.changeText(value, true);
  }
  /**
   * Set JSON as text  into survey. Clear undo/redo states optionally.
   * @param value JSON as text
   * @param clearState default false. Set this parameter to true to clear undo/redo states.
   */
  public changeText(value: string, clearState = false) {
    var textWorker = new SurveyTextWorker(value);
    if (textWorker.isJsonCorrect) {
      this.initSurvey(new Survey.JsonObject().toJsonObject(textWorker.survey));
      this.showDesigner();
      this.setUndoRedoCurrentState(clearState);
    } else {
      this.setTextValue(value);
      this.koViewType("editor");
    }
  }
  /**
   * Toolbox object. Contains information about Question toolbox items.
   * @see QuestionToolbox
   */
  public get toolbox(): QuestionToolbox {
    return this.toolboxValue;
  }
  /**
   * The list of toolbar items. You may add/remove/replace them.
   * @see IToolbarItem
   */
  public toolbarItems = ko.observableArray<IToolbarItem>();
  /**
   * Get and set the maximum of copied questions/panels in the toolbox. The default value is 3
   */
  public get customToolboxQuestionMaxCount(): number {
    return this.toolbox.copiedItemMaxCount;
  }
  public set customToolboxQuestionMaxCount(value: number) {
    this.toolbox.copiedItemMaxCount = value;
  }
  /**
   * Returns the Editor state. It may return empty string or "saving" and "saved".
   */
  public get state(): string {
    return this.stateValue;
  }
  protected setState(value: string) {
    this.stateValue = value;
    this.koState(this.state);
  }
  saveNo: number = 0;
  protected doSave() {
    this.setState("saving");
    if (this.saveSurveyFunc) {
      this.saveNo++;
      var self = this;
      this.saveSurveyFunc(this.saveNo, function doSaveCallback(
        no: number,
        isSuccess: boolean
      ) {
        self.setState("saved");
        if (self.saveNo == no) {
          if (isSuccess) self.setState("saved");
          //else TODO
        }
      });
    }
  }
  protected setModified(options: any = null) {
    this.setState("modified");
    this.setUndoRedoCurrentState();
    this.onModified.fire(this, options);
    this.isAutoSave && this.doSave();
  }
  private setUndoRedoCurrentState(clearState: boolean = false) {
    if (clearState) {
      this.undoRedo.clear();
    }
    var selObj = this.koSelectedObject() ? this.koSelectedObject().value : null;
    this.undoRedo.setCurrent(this.surveyValue(), selObj ? selObj.name : null);
  }
  /**
   * Assign to this property a function that will be called on clicking the 'Save' button or on any change if isAutoSave equals true.
   * @see isAutoSave
   */
  public get saveSurveyFunc() {
    return this.saveSurveyFuncValue;
  }
  public set saveSurveyFunc(value: any) {
    this.saveSurveyFuncValue = value;
    this.koShowSaveButton(value != null && !this.isAutoSave);
  }
  /**
   * Set it to true to show "Options" menu and to false to hide the menu
   */
  public get showOptions() {
    return this.koShowOptions();
  }
  public set showOptions(value: boolean) {
    this.koShowOptions(value);
  }
  /**
   * Set it to false to hide the Property Grid on the right. It allows to edit the properties of the selected object (question/panel/page/survey).
   */
  public get showPropertyGrid() {
    return this.koShowPropertyGrid();
  }
  public set showPropertyGrid(value: boolean) {
    this.koShowPropertyGrid(value);
  }
  /**
   * Set it to true to show "JSON Editor" tab and to false to hide the tab
   */
  public get showJSONEditorTab() {
    return this.showJSONEditorTabValue;
  }
  public set showJSONEditorTab(value: boolean) {
    this.showJSONEditorTabValue = value;
  }
  /**
   * Set it to true to show "Test Survey" tab and to false to hide the tab
   */
  public get showTestSurveyTab() {
    return this.showTestSurveyTabValue;
  }
  public set showTestSurveyTab(value: boolean) {
    this.showTestSurveyTabValue = value;
  }
  /**
   * Set it to true to show "Embed Survey" tab and to false to hide the tab
   */
  public get showEmbededSurveyTab() {
    return this.showEmbededSurveyTabValue;
  }
  public set showEmbededSurveyTab(value: boolean) {
    this.showEmbededSurveyTabValue = value;
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

  protected onCanShowObjectProperty(
    object: any,
    property: Survey.JsonObjectProperty
  ): boolean {
    var options = { obj: object, property: property, canShow: true };
    this.onCanShowProperty.fire(this, options);
    return options.canShow;
  }
  protected onCustomSortPropertyObjectProperty(
    object: any,
    property1: Survey.JsonObjectProperty,
    property2: Survey.JsonObjectProperty
  ): number {
    if (this.onCustomSortProperty.isEmpty) return 0;
    var options = {
      obj: object,
      property1: property1,
      property2: property2,
      result: 0
    };
    this.onCustomSortProperty.fire(this, options);
    return options.result;
  }

  private setTextValue(value: string) {
    this.jsonEditor.text = value;
  }
  /**
   * Add a new page into the editing survey.
   */
  public addPage() {
    var name = SurveyHelper.getNewPageName(this.survey.pages);
    var page = <Survey.Page>this.surveyValue().addNewPage(name);
    this.addPageToUI(page);
    this.setModified({ type: "PAGE_ADDED", newValue: page });
  }
  /**
   * Returns the localized string by it's id
   * @param str the string id.
   */
  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }
  private movePage(indexFrom: number, indexTo: number) {
    var page = <Survey.Page>this.survey.pages[indexFrom];
    this.survey.pages.splice(indexFrom, 1);
    this.survey.pages.splice(indexTo, 0, page);
    this.pagesEditor.survey = this.survey;
    this.surveyObjects.selectObject(page);
    this.setModified({
      type: "PAGE_MOVED",
      page: page,
      indexFrom: indexFrom,
      indexTo: indexTo
    });
  }
  private addPageToUI(page: Survey.Page) {
    this.pagesEditor.survey = this.surveyValue();
    this.surveyObjects.addPage(page);
  }
  private doOnQuestionAdded(question: Survey.QuestionBase, parentPanel: any) {
    if (!this.dragDropHelper.isMoving) {
      var page = this.getPageByElement(question);
      var options = { question: question, page: page };
      this.onQuestionAdded.fire(this, options);
    }
    this.surveyObjects.addElement(question, parentPanel);
    this.survey.render();
  }
  private doOnElementRemoved(question: Survey.QuestionBase) {
    this.surveyObjects.removeObject(question);
    this.survey.render();
  }
  private doOnPanelAdded(panel: Survey.Panel, parentPanel: any) {
    var page = this.getPageByElement(panel);
    var options = { panel: panel, page: page };
    this.onPanelAdded.fire(this, options);
    this.surveyObjects.addElement(panel, parentPanel);
    this.survey.render();
  }
  private doOnPageAdded(page: Survey.Page) {
    var options = { page: page };
    this.onPageAdded.fire(this, options);
  }
  private onPropertyValueChanged(
    property: Survey.JsonObjectProperty,
    obj: any,
    newValue: any
  ) {
    var isDefault = property.isDefaultValue(newValue);
    var oldValue = obj[property.name];
    obj[property.name] = newValue;
    if (property.name == "name") {
      this.surveyObjects.nameChanged(obj);
      if (SurveyHelper.getObjectType(obj) == ObjType.Page) {
        this.pagesEditor.changeName(<Survey.Page>obj);
      }
    }
    this.setModified({
      type: "PROPERTY_CHANGED",
      name: property.name,
      target: obj,
      oldValue: oldValue,
      newValue: newValue
    });
    //TODO add a flag to a property, may change other properties
    if (
      property.name == "locale" ||
      property.name == "hasComment" ||
      property.name == "hasOther"
    ) {
      this.selectedObjectEditorValue.objectChanged();
    }
    this.survey.render();
  }
  private doUndoRedo(item: UndoRedoItem) {
    this.initSurvey(item.surveyJSON);
    if (item.selectedObjName) {
      var selObj = this.findObjByName(item.selectedObjName);
      if (selObj) {
        this.surveyObjects.selectObject(selObj);
      }
    }
    this.setState("modified");
    this.isAutoSave && this.doSave();
  }
  private findObjByName(name: string): Survey.Base {
    var page = this.survey.getPageByName(name);
    if (page) return page;
    var question = <Survey.QuestionBase>this.survey.getQuestionByName(name);
    if (question) return question;
    return null;
  }
  private canSwitchViewType(newType: string): boolean {
    if (newType && this.koViewType() == newType) return false;
    if (this.koViewType() == "designer") {
      this.jsonEditor.text = this.getSurveyTextFromDesigner();
    }
    if (this.koViewType() != "editor") return true;
    if (!this.jsonEditor.isJsonCorrect) {
      alert(this.getLocString("ed.correctJSON"));
      return false;
    }
    this.initSurvey(
      new Survey.JsonObject().toJsonObject(this.jsonEditor.survey)
    );
    this.setModified({ type: "VIEW_TYPE_CHANGED", newType: newType });
    return true;
  }
  /**
   * Make a "Survey Designer" tab active.
   */
  public showDesigner() {
    if (!this.canSwitchViewType("designer")) return;
    this.koViewType("designer");
  }
  /**
   * Make a "JSON Editor" tab active.
   */
  public showJsonEditor() {
    if (this.koViewType() == "editor") return;
    this.jsonEditor.show(this.getSurveyTextFromDesigner());
    this.koViewType("editor");
  }
  /**
   * Make a "Test Survey" tab active.
   */
  public showTestSurvey() {
    if (!this.canSwitchViewType(null)) return;
    this.showLiveSurvey();
    this.koViewType("test");
  }
  /**
   * Make a Embed Survey" tab active.
   */
  public showEmbedEditor() {
    if (!this.canSwitchViewType("embed")) return;
    this.showSurveyEmbeding();
    this.koViewType("embed");
  }
  private getSurveyTextFromDesigner() {
    var json = new Survey.JsonObject().toJsonObject(this.survey);
    if (this.options && this.options.generateValidJSON)
      return JSON.stringify(json, null, 1);
    return new SurveyJSON5().stringify(json, null, 1);
  }
  private getPageByElement(obj: Survey.Base): Survey.Page {
    var page = this.survey.getPageByElement(<Survey.IElement>(<any>obj));
    if (page) return <Survey.Page>page;
    return this.surveyObjects.getSelectedObjectPage(obj);
  }
  private selectedObjectChanged(obj: Survey.Base) {
    var canDeleteObject = false;
    this.selectedObjectEditorValue.selectedObject = obj;
    var objType = SurveyHelper.getObjectType(obj);
    if (objType == ObjType.Page) {
      this.survey.currentPage = <Survey.Page>obj;
      canDeleteObject = this.survey.pages.length > 1;
    }
    if (objType == ObjType.Question || objType == ObjType.Panel) {
      this.survey.selectedElement = obj;
      canDeleteObject = true;
      this.survey.currentPage = this.getPageByElement(obj);
      var id = obj["id"];
      if (this.renderedElement && id && this.survey.currentPage) {
        let el = <HTMLElement>this.renderedElement.querySelector("#" + id);
        let pageEl = <HTMLElement>this.renderedElement.querySelector(
          "#" + this.survey.currentPage.id
        );
        SurveyHelper.scrollIntoViewIfNeeded(el, pageEl);
      }
    } else {
      this.survey.selectedElement = null;
    }
    this.pagesEditor.setSelectedObject(obj);
    this.koCanDeleteObject(canDeleteObject);
    //Select2 work-around
    if (this.renderedElement && this.select2) {
      var el = <HTMLElement>this.renderedElement.querySelector(
        "#select2-objectSelector-container"
      ); //TODO
      if (el) {
        var item = this.surveyObjects.koSelected();
        if (item && item.text) {
          el.innerText = item.text();
        }
      }
    }
  }
  private applyBinding() {
    if (this.renderedElement == null) return;
    ko.cleanNode(this.renderedElement);
    ko.applyBindings(this, this.renderedElement);
    this.surveyjs = <HTMLElement>this.renderedElement.querySelector(
      "#surveyjs"
    );
    if (this.surveyjs) {
      var self = this;
      this.surveyjs.onkeydown = function(e) {
        if (!e) return;
        // if (e.keyCode == 46) self.deleteQuestion();
        if (e.keyCode == 38 || e.keyCode == 40) {
          self.selectQuestion(e.keyCode == 38);
        }
      };
    }

    this.initSurvey(this.getDefaultSurveyJson());
    this.setUndoRedoCurrentState(true);

    this.jsonEditor.init(<HTMLElement>this.renderedElement.querySelector(
      "#surveyjsJSONEditor"
    ));
    if (typeof jQuery !== "undefined" && jQuery()["select2"]) {
      var options: any = {
        width: "100%"
      };
      if (this.isRTLValue) {
        options.dir = "rtl";
      }
      this.select2 = jQuery("#objectSelector")["select2"](options);
    }
  }
  private getDefaultSurveyJson(): any {
    var json = new SurveyJSON5().parse(SurveyEditor.defaultNewSurveyText);
    if (
      json["pages"] &&
      json["pages"]["length"] > 0 &&
      json["pages"][0]["name"]
    ) {
      json["pages"][0]["name"] =
        editorLocalization.getString("ed.newPageName") + "1";
    }
    return json;
  }
  private initSurvey(json: any) {
    var self = this;
    this.surveyValue(new SurveyForDesigner());
    this.dragDropHelper = new DragDropHelper(
      <Survey.ISurvey>this.survey,
      function(options) {
        self.setModified(options);
      },
      this.renderedElement
    );
    this.surveyValue()["getEditor"] = () => self;
    this.surveyValue()["setJsonObject"](json); //TODO
    if (this.surveyValue().isEmpty) {
      this.surveyValue()["setJsonObject"](this.getDefaultSurveyJson()); //TODO
    }
    this.surveyValue()["dragDropHelper"] = this.dragDropHelper;
    this.surveyValue().onUpdateElementAllowingOptions = function(options) {
      self.onElementAllowOperations.fire(self, options);
    };
    this.surveyValue().onGetMenuItems.add((sender, options) => {
      let opts = options.obj.allowingOptions;
      if (!opts) opts = {};

      if (opts.allowEdit) {
        options.items.push({
          name: "editElement",
          text: this.getLocString("survey.edit"),
          onClick: question => this.showQuestionEditor(question)
        });
      }

      if (opts.allowDelete) {
        var deleteLocaleName = options.obj.isPanel
          ? "survey.deletePanel"
          : "survey.deleteQuestion";
        options.items.push({
          name: "delete",
          text: self.getLocString(deleteLocaleName),
          onClick: function(selObj) {
            self.deleteCurrentObject();
          }
        });
      }

      if (opts.allowCopy) {
        options.items.push({
          name: "copy",
          text: self.getLocString("survey.copy"),
          onClick: function(selObj) {
            self.fastCopyQuestion(selObj);
          }
        });
      }

      if (opts.allowAddToToolbox) {
        options.items.push({
          name: "addToToolbox",
          text: self.getLocString("survey.addToToolbox"),
          onClick: function(selObj) {
            self.addCustomToolboxQuestion(selObj);
          }
        });
      }

      if (opts.allowChangeType) {
        var currentType = options.obj.getType();
        var convertClasses = QuestionConverter.getConvertToClasses(currentType);
        var allowChangeType = convertClasses.length > 0;
        var createTypeByClass = className => {
          return {
            name: this.getLocString("qt." + className),
            value: className
          };
        };
        var availableTypes = [createTypeByClass(currentType)];
        for (var i = 0; i < convertClasses.length; i++) {
          var className = convertClasses[i];
          availableTypes.push(createTypeByClass(className));
        }
        options.items.push({
          text: this.getLocString("qt." + currentType),
          title: this.getLocString("survey.convertTo"),
          type: currentType,
          allowChangeType: allowChangeType,
          template: "convert-action",
          availableTypes: availableTypes,
          onConvertType: (data, event) => {
            var newType = event.target.value;
            this.convertCurrentObject(options.obj, newType);
          }
        });
      }

      self.onDefineElementMenuItems.fire(self, options);
    });

    this.onDesignerSurveyCreated.fire(this, { survey: this.surveyValue() });
    this.survey.render(this.surveyjs);
    this.surveyObjects.survey = this.survey;
    this.pagesEditor.survey = this.survey;
    this.pagesEditor.setSelectedPage(<Survey.Page>this.survey.currentPage);
    this.surveyValue().onSelectedElementChanged.add(
      (sender: Survey.Survey, options) => {
        self.surveyObjects.selectObject(sender["selectedElement"]);
      }
    );
    this.surveyValue().onEditButtonClick.add((sender: Survey.Survey) => {
      self.showQuestionEditor(self.koSelectedObject().value);
    });
    this.surveyValue().onElementDoubleClick.add(
      (sender: Survey.Survey, options) => {
        self.onElementDoubleClick.fire(self, options);
      }
    );
    this.surveyValue().onProcessHtml.add((sender: Survey.Survey, options) => {
      options.html = self.processHtml(options.html);
    });
    this.surveyValue().onCurrentPageChanged.add(
      (sender: Survey.Survey, options) => {
        self.pagesEditor.setSelectedPage(<Survey.Page>sender.currentPage);
      }
    );
    this.surveyValue().onQuestionAdded.add((sender: Survey.Survey, options) => {
      self.doOnQuestionAdded(options.question, options.parentPanel);
    });
    this.surveyValue().onQuestionRemoved.add(
      (sender: Survey.Survey, options) => {
        self.doOnElementRemoved(options.question);
      }
    );
    this.surveyValue().onPanelAdded.add((sender: Survey.Survey, options) => {
      self.doOnPanelAdded(options.panel, options.parentPanel);
    });
    this.surveyValue().onPanelRemoved.add((sender: Survey.Survey, options) => {
      self.doOnElementRemoved(options.panel);
    });
    var pAdded = <any>this.surveyValue()["onPageAdded"];
    if (pAdded && pAdded.add) {
      pAdded.add((sender: Survey.Survey, options) => {
        self.doOnPageAdded(options.page);
      });
    }
  }
  private processHtml(html: string): string {
    if (!html) return html;
    var scriptRegEx = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    while (scriptRegEx.test(html)) {
      html = html.replace(scriptRegEx, "");
    }
    return html;
  }
  private doDraggingToolboxItem(json: any, e) {
    this.dragDropHelper.startDragToolboxItem(
      e,
      this.getNewName(json["type"]),
      json
    );
  }
  private newQuestions: Array<any> = [];
  private newPanels: Array<any> = [];
  private doClickToolboxItem(json: any) {
    var newElement = this.createNewElement(json);
    this.doClickQuestionCore(newElement);
  }
  private copyElement(element: Survey.Base): Survey.IElement {
    var json = new Survey.JsonObject().toJsonObject(element);
    json.type = element.getType();
    return this.createNewElement(json);
  }
  public isCurrentPageEmpty = ko.computed(
    () =>
      !!this.surveyValue() &&
      !!this.surveyValue().koCurrentPage() &&
      this.surveyValue()
        .koCurrentPage()
        .koRows().length === 0
  );
  public dragOverQuestionsEditor(data, e) {
    data.survey.dragDropHelper.doDragDropOver(e, data.survey.currentPage);
    return false;
  }
  public dropOnQuestionsEditor(data, e) {
    data.survey.dragDropHelper.doDrop(e);
  }
  private createNewElement(json: any): Survey.IElement {
    var newElement = Survey.JsonObject.metaData.createClass(json["type"]);
    new Survey.JsonObject().toObject(json, newElement);
    this.setNewNames(newElement);
    return newElement;
  }
  private setNewNames(element: Survey.IElement) {
    this.newQuestions = [];
    this.newPanels = [];
    this.setNewNamesCore(element);
  }
  private setNewNamesCore(element: Survey.IElement) {
    var elType = element["getType"]();
    element.name = this.getNewName(elType);
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
  private getNewName(type: string): string {
    if (type == "page") return SurveyHelper.getNewPageName(this.survey.pages);
    return type == "panel" ? this.getNewPanelName() : this.getNewQuestionName();
  }
  private getNewQuestionName(): string {
    return SurveyHelper.getNewQuestionName(this.getAllQuestions());
  }
  private getNewPanelName(): string {
    return SurveyHelper.getNewPanelName(this.getAllPanels());
  }
  private getAllQuestions(): Array<any> {
    var result = [];
    for (var i = 0; i < this.survey.pages.length; i++) {
      this.addElements(this.survey.pages[i].elements, false, result);
    }
    this.addElements(this.newPanels, false, result);
    this.addElements(this.newQuestions, false, result);
    return result;
  }
  private getAllPanels(): Array<any> {
    var result = [];
    for (var i = 0; i < this.survey.pages.length; i++) {
      this.addElements(this.survey.pages[i].elements, true, result);
    }
    this.addElements(this.newPanels, true, result);
    this.addElements(this.newQuestions, true, result);
    return result;
  }
  private addElements(
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
  private doClickQuestionCore(
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
    if (this.renderedElement) {
      this.dragDropHelper.scrollToElement(
        <HTMLElement>this.renderedElement.querySelector("#" + element["id"])
      );
    }
    this.setModified({ type: modifiedType, question: element });
  }
  private deleteQuestion() {
    var question = this.getSelectedObjAsQuestion();
    if (question) {
      this.deleteCurrentObject();
    }
  }
  private selectQuestion(isUp: boolean) {
    var question = this.getSelectedObjAsQuestion();
    if (question) {
      this.surveyObjects.selectNextQuestion(isUp);
    }
  }
  private getSelectedObjAsQuestion(): Survey.QuestionBase {
    var obj = this.koSelectedObject().value;
    if (!obj) return null;
    return SurveyHelper.getObjectType(obj) == ObjType.Question
      ? <Survey.QuestionBase>obj
      : null;
  }
  private deleteCurrentObject() {
    this.deleteObject(this.koSelectedObject().value);
  }
  private editCurrentObject() {
    this.showQuestionEditor(this.koSelectedObject().value);
  }
  private convertCurrentObject(obj: Survey.QuestionBase, className: string) {
    var newQuestion = QuestionConverter.convertObject(obj, className);
    this.setModified({
      type: "QUESTION_CONVERTED",
      className: className,
      oldValue: obj,
      newValue: newQuestion
    });
  }
  /**
   * Show the Editor dialog. The element can be a question, panel, page or survey
   * @param element The survey element
   */
  public showElementEditor(
    element: Survey.Base,
    onClose: (isCanceled: boolean) => any
  ) {
    this.showQuestionEditor(element, onClose);
  }
  public showQuestionEditor(
    element: Survey.Base,
    onClose: (isCanceled: boolean) => any = null
  ) {
    var self = this;
    var elWindow = this.renderedElement
      ? <HTMLElement>this.renderedElement.querySelector(
          "#surveyquestioneditorwindow"
        )
      : null;
    var isCanceled = true;
    this.questionEditorWindow.show(
      element,
      elWindow,
      function(question) {
        self.onQuestionEditorChanged(question);
        isCanceled = false;
      },
      this,
      function() {
        if (onClose) onClose(isCanceled);
      }
    );
  }
  public onQuestionEditorChanged(question: Survey.QuestionBase) {
    this.surveyObjects.nameChanged(question);
    this.selectedObjectEditorValue.objectChanged();
    this.pagesEditor.updatePages();
    this.pagesEditor.setSelectedPage(<any>question);
    this.setModified({
      type: "QUESTION_CHANGED_BY_EDITOR",
      question: question
    });
    this.survey.render();
  }
  /**
   * Add a question into Toolbox object
   * @param question an added Survey.Question
   * @see toolbox
   */
  public addCustomToolboxQuestion(question: Survey.QuestionBase) {
    this.toolbox.addCopiedItem(question);
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
   * Create a new page with the same elements and place it next to the current one. It returns the new created Survey.Page
   * @param page A copied Survey.Page
   */
  public copyPage(page: Survey.PageModel): Survey.PageModel {
    var newPage = <Survey.Page>(<any>this.copyElement(page));
    var index = this.survey.pages.indexOf(page);
    if (index > -1) {
      this.survey.pages.splice(index + 1, 0, newPage);
    } else {
      this.survey.pages.push(newPage);
    }
    this.addPageToUI(newPage);
    this.setModified({ type: "PAGE_ADDED", newValue: newPage });
    return newPage;
  }
  /**
   * Delete an element in the survey. It can be a question, a panel or a page.
   * @param element a survey element.
   */
  public deleteElement(element: Survey.Base) {
    this.deleteObject(element);
  }
  private deleteObject(obj: any) {
    var options = {
      element: obj,
      elementType: SurveyHelper.getObjectType(obj),
      allowing: true
    };
    this.onElementDeleting.fire(this, options);
    if (!options.allowing) return;
    this.surveyObjects.removeObject(obj);
    var objType = SurveyHelper.getObjectType(obj);
    if (objType == ObjType.Page) {
      this.survey.removePage(obj);
      this.pagesEditor.removePage(obj);
    } else {
      this.survey.currentPage.removeElement(obj);
      this.survey.selectedElement = null;
      this.surveyObjects.selectObject(this.survey.currentPage);
    }
    this.setModified({
      type: "OBJECT_DELETED",
      target: obj
    });
    this.survey.render();
  }
  private showLiveSurvey() {
    var self = this;
    this.surveyLive.onSurveyCreatedCallback = function(survey: Survey.Survey) {
      self.onTestSurveyCreated.fire(self, { survey: survey });
    };
    this.surveyLive.setJSON(this.getSurveyJSON());
    this.surveyLive.show();
  }
  private showSurveyEmbeding() {
    var json = this.getSurveyJSON();
    this.surveyEmbeding.json = json;
    this.surveyEmbeding.surveyId = this.surveyId;
    this.surveyEmbeding.surveyPostId = this.surveyPostId;
    this.surveyEmbeding.generateValidJSON =
      this.options && this.options.generateValidJSON;
    this.surveyEmbeding.show();
  }
  private getSurveyJSON(): any {
    if (this.koIsShowDesigner())
      return new Survey.JsonObject().toJsonObject(this.survey);
    if (this.jsonEditor.isJsonCorrect)
      return new Survey.JsonObject().toJsonObject(this.jsonEditor.survey);
    return null;
  }
  private createAnnotations(text: string, errors: any[]): AceAjax.Annotation[] {
    var annotations = new Array<AceAjax.Annotation>();
    for (var i = 0; i < errors.length; i++) {
      var error = errors[i];
      var annotation: AceAjax.Annotation = {
        row: error.position.start.row,
        column: error.position.start.column,
        text: error.text,
        type: "error"
      };
      annotations.push(annotation);
    }
    return annotations;
  }
  //implements ISurveyObjectEditorOptions
  get alwaySaveTextInPropertyEditors(): boolean {
    return this.alwaySaveTextInPropertyEditorsValue;
  }
  set alwaySaveTextInPropertyEditors(value: boolean) {
    this.alwaySaveTextInPropertyEditorsValue = value;
  }
  get showApplyButtonInEditors(): boolean {
    return this.showApplyButtonValue;
  }
  set showApplyButtonInEditors(value: boolean) {
    this.showApplyButtonValue = value;
  }
  onItemValueAddedCallback(propertyName: string, itemValue: Survey.ItemValue) {
    var options = { propertyName: propertyName, newItem: itemValue };
    this.onItemValueAdded.fire(this, options);
  }
  onMatrixDropdownColumnAddedCallback(column: Survey.MatrixDropdownColumn) {
    var options = { newColumn: column };
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
      editorOptions: editorOptions
    };
    this.onSetPropertyEditorOptions.fire(this, options);
  }
  onGetErrorTextOnValidationCallback(
    propertyName: string,
    obj: Survey.Base,
    value: any
  ): string {
    var options = {
      propertyName: propertyName,
      obj: obj,
      value: value,
      error: ""
    };
    this.onPropertyValidationCustomError.fire(this, options);
    return options.error;
  }
  onValueChangingCallback(options: any) {
    this.onPropertyValueChanging.fire(this, options);
  }
  onPropertyEditorObjectSetCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase
  ) {
    var options = { propertyName: propertyName, obj: obj, editor: editor };
    this.onPropertyEditorObjectAssign.fire(this, options);
  }
  onPropertyEditorModalShowDescriptionCallback(
    propertyName: string,
    obj: Survey.Base
  ): any {
    var options = {
      obj: obj,
      propertyName: propertyName,
      htmlTop: "",
      htmlBottom: ""
    };
    this.onShowPropertyModalEditorDescription.fire(this, options);
    var res = { top: options.htmlTop, bottom: options.htmlBottom };
    return res;
  }
}

Survey.Survey.cssType = "bootstrap";

var koSurveyTemplate = new Survey.SurveyTemplateText()["text"];
koSurveyTemplate = koSurveyTemplate.replace(
  "name: 'survey-content', afterRender: koEventAfterRender",
  "name: 'survey-content', data: survey"
);
//koSurveyTemplate = "<div data-bind='data: survey'>" + koSurveyTemplate + "</div>";

ko.components.register("survey-widget", {
  viewModel: function(params) {
    this.survey = params.survey;
  },
  template: koSurveyTemplate
});
