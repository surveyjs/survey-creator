import * as ko from "knockout";
import { editorLocalization } from "./editorLocalization";
import {
  ISurveyObjectEditorOptions,
  SurveyPropertyEditorBase,
} from "./propertyEditors/propertyEditorBase";
import { SurveyObjects } from "./surveyObjects";
import { QuestionConverter } from "./questionconverter";
import {
  PropertyGridObjectEditorModel,
  SurveyPropertyEditorShowWindow,
  SurveyElementEditorTabModel,
} from "./questionEditors/questionEditor";
import { SurveyTextWorker } from "./textWorker";
import { UndoRedoManager, IUndoRedoChange } from "./undoredomanager";
import { SurveyHelper, ObjType } from "./surveyHelper";
import { DragDropHelper } from "./dragdrophelper";
import { QuestionToolbox } from "./toolbox";
import { SurveyJSON5 } from "./json5";
var templateEditorHtml = require("html-loader?interpolate!val-loader!./templates/entry.html");
import * as Survey from "survey-knockout";
import {
  SurveyForDesigner,
  createAfterRenderHandler,
  createAfterRenderPageHandler,
  createAfterRenderHeaderHandler,
} from "./surveyjsObjects";
import { StylesManager } from "./stylesmanager";
import { itemAdorner } from "./adorners/item-editor";
import { SurveyLiveTester } from "./tabs/test";
import { Translation } from "./tabs/translation";
import { SurveyLogic } from "./tabs/logic";
import { Commands } from "./commands";

import { PagesEditor } from "./pages-editor";
import { isPropertyVisible } from "./utils/utils";
import { SurveyObjectProperty } from "./objectProperty";
import { CreatorBase } from "./creator-base";
import { IAction } from "survey-knockout";
import { EditableObject } from "./propertyEditors/editableObject";

type ContainerLocation = "left" | "right" | "top" | "none" | boolean;

/**
 * Survey Creator is WYSIWYG editor.
 */

export class SurveyCreator
  extends CreatorBase<SurveyForDesigner>
  implements ISurveyObjectEditorOptions
{
  public static defaultNewSurveyText: string = "{ pages: [ { name: 'page1'}] }";
  private renderedElement: HTMLElement;

  private questionEditorWindow: SurveyPropertyEditorShowWindow;

  private surveyLive: SurveyLiveTester;
  private translationValue: Translation;
  private logicValue: SurveyLogic;
  protected surveyObjects: SurveyObjects;
  private toolboxValue: QuestionToolbox;
  public undoRedoManager: UndoRedoManager;
  private saveSurveyFuncValue: (
    no: number,
    onSaveCallback: (no: number, isSuccess: boolean) => void
  ) => void;
  private stateValue: string = "";
  private dragDropHelper: DragDropHelper = null;
  private koShowSurveyTitle: ko.Observable<"ifentered" | "always" | "never">;
  private koAllowControlSurveyTitleVisibility: ko.Observable<boolean>;
  private closeModalOutsideValue: "off" | "cancel" | "apply" = "off";
  private pageEditModeValue: "standard" | "single" = "standard";
  private showApplyButtonValue: boolean = true;
  private hideExpressionHeaderValue: ko.Observable<boolean>;

  /**
   * If set to true (default value) the creator scrolls to a new element. A new element can be added from Toolbox or by copying.
   */
  public scrollToNewElement: boolean = true;

  /**
   * This property is assign to the survey.surveyId property on showing in the "Embed Survey" tab.
   * @see showEmbeddedSurveyTab
   */
  public surveyId: string = null;
  /**
   * This property is assign to the survey.surveyPostId property on showing in the "Embed Survey" tab.
   * @see showEmbeddedSurveyTab
   */
  public surveyPostId: string = null;
  /**
   * This callback is called on changing "Generate Valid JSON" option.
   */
  public generateValidJSONChangedCallback: (generateValidJSON: boolean) => void;
  /**
   * The event is called in case of UI notifications. By default all notifications are done via built-in alert () function.
   * In case of any subscriptions to this event all notifications will be redirected into the event handler.
   * <br/> options.message is a message to show.
   */
  public onNotify: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called before undo happens.
   * <br/> options.canUndo a boolean value. It is true by default. Set it false to hide prevent undo operation.
   */
  public onBeforeUndo: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called before redo happens.
   * <br/> options.canRedo a boolean value. It is true by default. Set it false to hide prevent redo operation.
   */
  public onBeforeRedo: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called after undo happens.
   * <br/> options.state is an undo/redo item.
   */
  public onAfterUndo: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called after redo happens.
   * <br/> options.state is an undo/redo item.
   */
  public onAfterRedo: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called on changing the selected element. You may change the new selected element by changing the property options.newSelectedElement to your own
   * <br/> options.newSelectedElement the element that is going to be selected in the survey desiger: question, panel, page or survey.
   */
  public onSelectedElementChanging: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called after the selected element is changed.
   * <br/> options.newSelectedElement the new selected element in the survey desiger: question, panel, page or survey.
   */
  public onSelectedElementChanged: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called when creator tab has been rendered.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.tabName the name of the rendered tab
   * <br/> options.elements the rendered elements
   * <br/> options.model current context model
   * <br/> options.tabData the data of the rendered tab
   */
  public onEditorTabRendered: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called when creator active tab is changed.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.tabName the name of new active tab
   */
  public onActiveTabChanged: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event allows you to custom sort properties in the Property Grid. It is a compare function. You should set options.result to -1 or 1 by comparing options.property1 and options.property2.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.property1 the left object property (Survey.JsonObjectProperty object).
   * <br/> options.property2 the right object property (Survey.JsonObjectProperty object).
   * <br/> options.result the result of comparing. It can be 0 (use default behavior),  -1 options.property1 is less than options.property2 or 1 options.property1 is more than options.property2
   */
  public onCustomSortProperty: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event allows you modify DOM element for a property in the Property Grid. For example, you may change its styles.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object, Survey, Page, Panel or Question
   * <br/> options.htmlElement the html element that renders the property display name and its editor.
   * <br/> options.property object property (Survey.JsonObjectProperty object).
   * <br/> options.propertyEditor the property Editor.
   */
  public onPropertyAfterRender: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called on adding a new question into the survey. Typically, when a user dropped a Question from the Question Toolbox into designer Survey area.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.question a new added survey question. Survey.Question object
   * <br/> options.page the survey Page object where question has been added.
   */
  public onQuestionAdded: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called when an end-user double click on an element (question/panel).
   * <br/> sender the survey creator object that fires the event
   * <br/> options.element an instance of the element
   */
  public onElementDoubleClick: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called on adding a new panel into the survey.  Typically, when a user dropped a Panel from the Question Toolbox into designer Survey area.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.panel a new added survey panel. Survey.Panel object
   * <br/> options.page the survey Page object where question has been added.
   */
  public onPanelAdded: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called on adding a new page into the survey.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.page the new survey Page object.
   */
  public onPageAdded: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called when a survey is changed in the designer. A new page/question/page is added or existing is removed, a property is changed and so on.
   * <br/> sender the survey creator object that fires the event
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
   * <br/> options.newType: new type of the creator view: editor or designer
   * <br/>
   * <br/> options.type: "DO_DROP"
   * <br/> options.page: the page of the drap/drop operation
   * <br/> options.source: the source dragged object
   * <br/> options.target: the drop target
   * <br/> options.newElement: a new element. It is defined if a user drops question or panel from the toolbox
   * <br/>
   * <br/> options.type: "TRANSLATIONS_CHANGED"
   */
  public onModified: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is fired on changing question, panel or page name.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the object (question, panel or page)
   * <br/> options.oldName the previous name of the element
   * <br/> options.newName the new name of the element
   */
  public onElementNameChanged: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is fired when the survey creator is initialized and a survey object (Survey.Survey) is created.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.survey  the survey object showing in the creator.
   */
  public onDesignerSurveyCreated: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is fired when the survey creator runs the survey in the test mode.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.survey  the survey object showing in the "Test survey" tab.
   */
  public onTestSurveyCreated: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * Use this event to show a check and custom error in property grid and adorners of the selected elements.
   * Returns true if selected element is null or there is no errors.
   * <br/> options.errors an array of error messages if any.
   */
  public onValidateSelectedElement: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.editor the instance of Property Editor.
   * @see onPropertyValueChanging
   */
  public onPropertyEditorObjectAssign: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * Use this event to modify the survey that used on setting value for condition/expression properties, like visibleIf, enableIf and so on.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.editor the instance of Property Editor.
   * <br/> options.valueQuestionName the name of the question that shows in the survey for choosing the value
   * <br/> options.survey the instance of the survey that allows to choose the value. You may modify it before it shows to the end-user
   */
  public onConditionValueSurveyCreated: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * Use this event to process key down event in a property editor
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName  the name of the edited property.
   * <br/> options.editor the instance of Property Editor.
   * <br/> options.event the instance of mouse event.
   */
  public onPropertyEditorKeyDown: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * Use this event to disable user interactions with a question or panel on the design surface.
   *
   * The event handler accepts the following arguments:
   *
   * - `sender`- A Survey Creator instance that raised the event.
   * - `options.obj` - A survey element instance (question or panel) for which you can disable user interactions.
   * - `options.allowAddToToolbox` - Allows users to save the current survey element configuration in the Toolbox.
   * - `options.allowChangeRequired` - Allows users to make the survey element required.
   * - `options.allowChangeType` - Allows users to change the survey element type.
   * - `options.allowCopy` - Allows users to duplicate the survey element.
   * - `options.allowDelete` - Allows users to delete the survey element.
   * - `options.allowDragging` - Allows users to drag and drop the survey element.
   * - `options.allowEdit` - Allows users to edit survey element properties on the design surface. If you disable this property, users can edit the properties only in the Property Grid.
   * - `options.allowShowHideTitle` - Specifies whether users can change the `titleLocation` property to "hidden" or "default".
   *
   * To disable a user interaction, set the correponding `allow...` property to `false`.
   */
  public onElementAllowOperations: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * Use this event to show the description on the top or/and bottom of the property modal editor.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object which property is edited in the Property Editor.
   * <br/> options.propertyName the property name
   * <br/> options.htmlTop the html  that you want to see on the top of the modal window
   * <br/> options.htmlBottom the html that you want to see on the bottom of the modal window
   */
  public onShowPropertyModalEditorDescription: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * @Deprecated Obsolete, please use onGetObjectDisplayName event
   * Use this event to change the text showing in the dropdown of the property grid.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.obj the survey object.
   * <br/> options.text the current object text, commonly it is a name. You must change this attribute
   * @see onGetObjectDisplayName
   */
  public onGetObjectTextInPropertyGrid: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();

  /**
   * The event is called when end-user addes new element (question or panel) into the survey toolbox.
   * It calls before adding the element into toolbox and it allows to change the toolbox item attributes using options.itemOptions parameter
   * <br/> sender the survey creator object that fires the event
   * <br/> options.element is a new added element
   * <br/> options.itemOptions a json object that allows you to override question properties. Attributes are: name, title, isCopied, iconName, json and category.
   * @see onCustomElementAddedIntoToolbox
   */
  public onCustomElementAddingIntoToolbox: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called when end-user addes new element (question or panel) into the survey toolbox.
   * <br/> sender the survey creator object that fires the event
   * <br/> options.element is a new added element
   * @see onCustomElementAddingIntoToolbox
   */
  public onCustomElementAddedIntoToolbox: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is fired on clearing the files.
   * <br/> sender the survey creator object that fires the event
   * <br/> There are following properties in options:
   * <br/> files - value to clear (it can be a byte array or an URI of a resource)
   * <br/> callback - called on clear complete
   * @see clearFiles
   */
  public onClearFile: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is fired on uploading the files.
   * <br/> sender the survey creator object that fires the event
   * <br/> There are two properties in options:
   * <br/> files the Javascript File objects array
   * <br/> callback called on upload complete
   * @see uploadFile
   */
  public onUploadFile: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is fired then one need to choose files.
   * <br/> sender the survey creator object that fires the event
   * <br/> input file input HTML element
   * <br/> callback need to be called after files has been chosen
   * @see uploadFile
   */
  public onOpenFileChooser: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The method is called when the translation from csv file is imported.
   * @see translation
   * @see showTranslationTab
   */
  public onTranslationImported: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The method is called on after render translation item. You can modify the html element using this event
   * <br/> options.item - translation item
   * <br/> options.htmlElement - text area for editing
   * <br/> options.locale - the name of the editing locale
   * <br/> options.onDestroyCallback - a function callback that is called on remove htmlElement from DOM.
   * @see translation
   * @see showTranslationTab
   */
  public onTranslateItemAfterRender: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * Use this event to control drag&drop operations.
   * <br/> sender the survey creator object that fires the event.
   * <br/> options.survey the editing survey object.
   * <br/> options.allow set it to false to disable dragging.
   * <br/> options.target a target element that is dragging.
   * <br/> options.source a source element. It can be null, if it is a new element, dragging from toolbox.
   * <br/> options.parent a page or panel where target element is dragging.
   * <br/> options.insertBefore an element before the target element is dragging. It can be null if parent container (page or panel) is empty or dragging an element under the last element of the container.
   * <br/> options.insertAfter an element after the target element is dragging. It can be null if parent container (page or panel) is empty or dragging element to the top of the parent container.
   */
  public onDragDropAllow: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * Use this event to get access rendered adorder.
   * <br/> sender the survey creator object that fires the event.
   * <br/> options.survey the editing survey object.
   * <br/> options.question the survey element of the adorner.
   * <br/> options.adorner the adorner id.
   * <br/> options.element a root adorner element.
   * <br/> options.context a context for adorner element, e.g. current item of a select base question.
   */
  public onAdornerRendered: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  /**
   * The event is called after user closes the popup element editor.
   * <br/> options.element the edited element.
   * <br/> options.isCanceled indicated user clicked Cancel.
   */
  public onElementEditorClosed: Survey.Event<
    (sender: SurveyCreator, options: any) => any,
    any
  > = new Survey.Event<(sender: SurveyCreator, options: any) => any, any>();
  selectFromStringEditor: boolean;

  /**
   * You need to set this property to true if you want to inplace edit item values instead of texts.
   * @see inplaceEditForValues
   */
  public get inplaceEditForValues() {
    return itemAdorner.inplaceEditForValues;
  }
  public set inplaceEditForValues(val) {
    itemAdorner.inplaceEditForValues = val;
  }

  protected onSetReadOnly(newVal: boolean) {
    super.onSetReadOnly(newVal);
    this.render(null, this.options);
  }

  public koCanUndo: any;
  public koCanRedo: any;

  public commands: any;

  // models from MVVM
  public propertyGridObjectEditorModel: PropertyGridObjectEditorModel;
  public pagesEditorModel: PagesEditor;
  // EO models from MVVM

  koIsShowDesigner: any;
  koCanDeleteObject: any;
  koObjects: any;
  koSelectedObject: ko.Observable<any>;
  koShowSaveButton: any;
  koShowPropertyGrid: ko.Observable<ContainerLocation>;
  koShowToolbox: ko.Observable<ContainerLocation>;
  koShowElementEditorAsPropertyGrid: ko.Observable<boolean>;
  koHideAdvancedSettings: ko.Observable<boolean>;
  koTestSurveyWidth: any;
  koDesignerHeight: ko.Observable<any>;
  koShowPagesToolbox: ko.Observable<ContainerLocation>;
  generateValidJSONClick: any;
  generateReadableJSONClick: any;
  doUndoClick: any;
  doRedoClick: any;
  deleteObjectClick: any;
  koState = ko.observable("");

  saveButtonClick: any;
  draggingToolboxItem: any;
  clickToolboxItem: any;
  dragEnd: any;
  /**
   * The Survey Creator constructor.
   * @param renderedElement HtmlElement or html element id where survey creator will be rendered
   * @param options survey creator options. The following options are available:
   * showDesignerTab, showJSONEditorTab, showTestSurveyTab, showEmbeddedSurveyTab, showTranslationTab, showLogicTab,
   * showOptions, showPropertyGrid, showToolbox,
   * allowModifyPages, pageEditingMode, showDropdownPageSelector, readOnly,
   * questionTypes, generateValidJSON, isAutoSave, designerHeight, showErrorOnFailedSave, closeModalOutside, useTabsInElementEditor,
   * showObjectTitles, inplaceEditForValues, showTitlesInExpressions, allowEditExpressionsInTextEditor,
   * showPagesInTestSurveyTab, showDefaultLanguageInTestSurveyTab, showInvisibleElementsInTestSurveyTab, showSimulatorInTestSurveyTab,
   * showSurveyTitle, allowControlSurveyTitleVisibility, hideExpressionHeaderInLogicTab,
   * maxLogicItemsInCondition
   */

  constructor(renderedElement: any = null, options: any = null) {
    super(options);
    this.koCanDeleteObject = ko.observable(false);
    this.koCanUndo = ko.observable(false);
    this.koCanRedo = ko.observable(false);

    this.toolboxValue = new QuestionToolbox(
      this.options && this.options.questionTypes
        ? this.options.questionTypes
        : null,
      this
    );
    this.surveyLive = new SurveyLiveTester(this);
    this.logicValue = new SurveyLogic(this.createSurvey({}, "logic"), this);
    var self = this;

    StylesManager.applyTheme(StylesManager.currentTheme());

    self.onTitleInplaceEditorStartEdit = null;

    this.koShowSaveButton = ko.observable(false);
    this.koTestSurveyWidth = ko.observable("100%");
    this.saveButtonClick = function () {
      self.doSave();
    };
    this.koObjects = ko.observableArray();
    window["sel"] = this.koSelectedObject;
    this.koSelectedObject.subscribe(function (newValue) {
      self.selectedObjectChanged(!!newValue ? newValue.value : null);
    });
    this.koGenerateValidJSON.subscribe(function (newValue) {
      if (!self.options) self.options = {};
      self.options.generateValidJSON = newValue;
      if (self.generateValidJSONChangedCallback)
        self.generateValidJSONChangedCallback(newValue);
    });
    this.surveyObjects = new SurveyObjects(
      this.koObjects,
      this.koSelectedObject,
      function (obj: Survey.Base): string {
        return self.getObjectDisplayName(obj, "property-grid");
      }
    );
    this.surveyObjects.getItemTextCallback = function (obj, text) {
      var options = { obj: obj, text: text };
      self.onGetObjectTextInPropertyGrid.fire(self, options);
      return options.text;
    };

    this.propertyGridObjectEditorModel = new PropertyGridObjectEditorModel(
      this
    );

    if (this.showElementEditorAsPropertyGrid) {
      this.propertyGridObjectEditorModel.koIsOldTableAppearance(false);
    } else {
      self.propertyGridObjectEditorModel.koIsOldTableAppearance(true);
    }

    this.koShowElementEditorAsPropertyGrid.subscribe(function (newValue) {
      if (newValue) {
        self.propertyGridObjectEditorModel.koIsOldTableAppearance(false);
      } else {
        self.propertyGridObjectEditorModel.koIsOldTableAppearance(true);
      }
    });

    this.propertyGridObjectEditorModel.onAfterRenderCallback =
      this.onEditorAfterRenderCallback;
    this.propertyGridObjectEditorModel.onSortPropertyCallback = function (
      obj: any,
      property1: Survey.JsonObjectProperty,
      property2: Survey.JsonObjectProperty
    ): number {
      return self.onCustomSortPropertyObjectProperty(obj, property1, property2);
    };
    this.propertyGridObjectEditorModel.onPropertyChanged = function (
      obj: any,
      prop: Survey.JsonObjectProperty,
      oldValue: any
    ) {
      self.onPropertyChanged(obj, prop, oldValue);
    };
    this.propertyGridObjectEditorModel["onCorrectValueBeforeSet"] = function (
      obj: any,
      prop: Survey.JsonObjectProperty,
      newValue: any
    ): any {
      return self.onPropertyCorrectValueBeforeSet(obj, prop, newValue);
    };

    this.questionEditorWindow = new SurveyPropertyEditorShowWindow();

    this.koViewType.subscribe(function (newValue) {
      self.onActiveTabChanged.fire(self, { tabName: newValue });
    });
    this.koIsShowDesigner = ko.computed(function () {
      return self.koViewType() == "designer";
    });
    this.generateValidJSONClick = function () {
      self.koGenerateValidJSON(true);
    };
    this.generateReadableJSONClick = function () {
      self.koGenerateValidJSON(false);
    };
    this.deleteObjectClick = function () {
      self.deleteCurrentObject();
    };
    this.draggingToolboxItem = function (item, e) {
      if (!this.readOnly) {
        self.doDraggingToolboxItem(item.json, e);
      }
    };
    this.clickToolboxItem = function (item) {
      self.doClickToolboxItem(item.json);
    };
    this.dragEnd = function (item, e) {
      self.dragDropHelper.end();
    };

    this.doUndoClick = function () {
      var options = { canUndo: true };
      self.onBeforeUndo.fire(self, options);
      if (options.canUndo) {
        var item = self.undoRedoManager.undo();
        // self.doUndoRedo(item); TODO undoredo
        self.onAfterUndo.fire(self, { state: item });
      }
    };
    this.doRedoClick = function () {
      var options = { canRedo: true };
      self.onBeforeRedo.fire(self, options);
      if (options.canRedo) {
        var item = self.undoRedoManager.redo();
        // self.doUndoRedo(item);
        self.onAfterRedo.fire(self, { state: item });
      }
    };

    this.text = "";

    this.pagesEditorModel = new PagesEditor(this);

    if (renderedElement) {
      this.render(renderedElement);
    }

    const commands = new Commands(self);
    self.commands = commands.getCommands();
    this.addToolbarItems();
  }

  private onEditorAfterRenderCallback = (
    obj: any,
    htmlElement: HTMLElement,
    prop: SurveyObjectProperty
  ) => {
    if (this.onPropertyAfterRender.isEmpty) {
      return;
    }
    var options = {
      obj: obj,
      htmlElement: htmlElement,
      property: prop.property,
      propertyEditor: prop.editor,
    };
    this.onPropertyAfterRender.fire(this, options);
  };
  setOptions(options) {
    this.koShowPropertyGrid = ko.observable<ContainerLocation>(true);
    this.koShowElementEditorAsPropertyGrid = ko.observable(false);
    this.koHideAdvancedSettings = ko.observable(false);
    this._topContainer = ko.observableArray<string>([
      "toolbar",
      "pages-editor",
    ]);
    this.hideExpressionHeaderValue = ko.observable<boolean>(false);
    this.koShowToolbox = ko.observable<ContainerLocation>(true);
    this._leftContainer = ko.observableArray<string>(["toolbox"]);
    this._rightContainer = ko.observableArray<string>(["property-grid"]);
    this.koSelectedObject = ko.observable();
    this.koAllowControlSurveyTitleVisibility = ko.observable(true);
    this.koDesignerHeight = ko.observable<any>("1000px");
    this.koShowSurveyTitle = ko.observable("ifentered");
    this.koShowPagesToolbox = ko.observable<ContainerLocation>(true);

    super.setOptions(options);
    options = this.options;

    this.inplaceEditForValues =
      typeof options.inplaceEditForValues !== "undefined"
        ? options.inplaceEditForValues
        : false;

    this.showPropertyGrid =
      typeof options.showPropertyGrid !== "undefined"
        ? options.showPropertyGrid
        : true;

    this.koShowElementEditorAsPropertyGrid(
      typeof options.showElementEditorAsPropertyGrid !== "undefined"
        ? options.showElementEditorAsPropertyGrid
        : true
    );

    this.scrollToNewElement =
      typeof options.scrollToNewElement !== "undefined"
        ? options.scrollToNewElement
        : true;
    if (options.designerHeight !== undefined) {
      this.koDesignerHeight(options.designerHeight);
    }
    if (options.objectsIntend) {
      SurveyObjects.intend = options.objectsIntend;
    }

    if (typeof options.closeModalOutside !== "undefined") {
      this.closeModalOutsideValue = options.closeModalOutside;
    }

    if (typeof options.pageEditMode !== "undefined") {
      this.pageEditModeValue = options.pageEditMode;
      if (this.pageEditModeValue === "single") {
        this._topContainer.remove("pages-editor");
        Survey.Serializer.findProperty("question", "page").visible = false;
        Survey.Serializer.findProperty("panel", "page").visible = false;
        this.showJSONEditorTab = false;
      }
    }
    this.hideExpressionHeaderValue(options.hideExpressionHeader === true);

    this.showToolbox =
      typeof options.showToolbox !== "undefined" ? options.showToolbox : true;

    if (typeof options.showPagesToolbox !== "undefined") {
      this.koShowPagesToolbox(options.showPagesToolbox);
    }

    if (typeof options.showSurveyTitle === "string") {
      this.showSurveyTitle = options.showSurveyTitle;
    }
    if (typeof options.allowControlSurveyTitleVisibility !== "undefined") {
      this.allowControlSurveyTitleVisibility =
        !!options.allowControlSurveyTitleVisibility;
    }
  }

  // get toolboxItems() {
  //   return this.options && this.options.questionTypes
  //     ? this.options.questionTypes
  //     : null;
  // }

  themeCss = ko.computed(() => {
    return ["bootstrap", "bootstrapmaterial", "modern"].indexOf(
      StylesManager.currentTheme()
    ) === -1
      ? "sv_default_css"
      : "sv_" + StylesManager.currentTheme() + "_css";
  });

  private updateKoCanUndoRedo() {
    this.koCanUndo(!this.readOnly && this.undoRedoManager.canUndo());
    this.koCanRedo(!this.readOnly && this.undoRedoManager.canRedo());
  }

  protected addToolbarItems() {
    const commands = this.commands;
    Object.keys(commands).forEach((key) => {
      let command = commands[key];
      let toolbarItem = command.toolbar;
      if (!toolbarItem) return;

      if (!toolbarItem.action) {
        toolbarItem.action = () => {
          if (this.readOnly) return;
          this.execute(command);
        };
      }

      this.toolbarItems.push(toolbarItem);
    });
  }

  /**
   * Use this method to force update this element in editor.
   * @param element Survey.Question is element to update
   */
  public update(element: Survey.Question) {
    element["koElementType"].notifySubscribers();
  }
  /**
   * Call this method to render the Survey Creator.
   * @param element HtmlElement or html element id where survey creator will be rendered
   * @param options survey creator options. The following options are available: showJSONEditorTab, showTestSurveyTab, showEmbeddedSurveyTab,
   * showTranslationTab, showLogicTab, showOptions, generateValidJSON, isAutoSave, designerHeight.
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
    new Survey.dxSurveyService().loadSurvey(
      surveyId,
      function (success: boolean, result: string, response: any) {
        if (success && result) {
          self.text = JSON.stringify(result);
        }
      }
    );
  }
  /**
   * Set JSON as text  into survey. Clear undo/redo states optionally.
   * @param value JSON as text
   * @param clearState default false. Set this parameter to true to clear undo/redo states.
   */
  public changeText(value: string, clearState = false) {
    super.changeText(value, clearState);
    var textWorker = new SurveyTextWorker(value);
    if (textWorker.isJsonCorrect) {
      this.initSurveyWithJSON(textWorker.survey.toJSON(), clearState);
    } else {
      this.koViewType("editor");
    }
  }
  protected initSurveyWithJSON(json: any, clearState: boolean) {
    this.initSurvey(json);
    if (this.showDesignerTab) {
      this.showDesigner();
    }
    this.setUndoRedoCurrentState(clearState);
  }
  public get surveyLiveTester(): SurveyLiveTester {
    return this.surveyLive;
  }
  /**
   * Toolbox object. Contains information about Question toolbox items.
   * @see QuestionToolbox
   */
  public get toolbox(): QuestionToolbox {
    return this.toolboxValue;
  }
  // public set toolbox(newValue: QuestionToolbox) {
  //   this.toolboxValue = newValue;
  // }
  /**
   * Return the translation mode object.
   * @see showTranslationTab
   */
  public get translation(): Translation {
    return this.translationValue;
  }
  public set translation(newValue: Translation) {
    this.translationValue = newValue;
  }
  /**
   * Return the logic mode object.
   * @see showLogicTab
   */
  public get logic(): SurveyLogic {
    return this.logicValue;
  }
  // public set logic(logic: SurveyLogic) {
  //   this.logicValue = logic;
  // }
  /**
   * The list of toolbar items. You may add/remove/replace them.
   * @see IAction
   */
  public toolbarItems = ko.observableArray<IAction>();
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
   * Returns the creator state. It may return empty string or "saving" and "saved".
   */
  public get state(): string {
    return this.stateValue;
  }
  protected setState(value: string) {
    this.stateValue = value;
    this.koState(this.state);
  }
  /**
   * This function triggers user notification (via the alert() function if no onNotify event handler added).
   * @see onNotify
   */
  public notify(msg: string) {
    if (this.onNotify.isEmpty) {
      alert(msg);
    } else {
      this.onNotify.fire(this, { message: msg });
    }
  }
  /**
   * The delay on saving survey JSON on autoSave in ms. It is 500 ms by default.
   * If during this period of time an end-user modify survey, then the last version will be saved only. Set to 0 to save immediately.
   * @see isAutoSave
   */
  public autoSaveDelay: number = 500;
  private autoSaveTimerId = null;
  protected doAutoSave() {
    if (this.autoSaveDelay <= 0) {
      this.doSave();
      return;
    }
    if (!!this.autoSaveTimerId) {
      clearTimeout(this.autoSaveTimerId);
    }
    var self = this;
    this.autoSaveTimerId = setTimeout(function () {
      clearTimeout(self.autoSaveTimerId);
      self.autoSaveTimerId = null;
      self.doSave();
    }, this.autoSaveDelay);
  }
  saveNo: number = 0;
  protected doSave() {
    this.setState("saving");
    if (this.saveSurveyFunc) {
      this.saveNo++;
      this.saveSurveyFunc(this.saveNo, (no: number, isSuccess: boolean) => {
        if (this.saveNo !== no) return;
        if (isSuccess) {
          this.setState("saved");
        } else {
          if (this.showErrorOnFailedSave) {
            this.notify(this.getLocString("ed.saveError"));
          }
          this.setState("modified");
        }
      });
    }
  }
  public setModified(options: any = null) {
    super.setModified(options); // TODO: move to super class
    this.setState("modified");
    this.setUndoRedoCurrentState();
    this.onModified.fire(this, options);
    this.isAutoSave && this.doAutoSave();
  }
  /**
   * Returns true if Creator is currently doing undo or redo opertaions
   */
  public get isProcessingUndoRedo(): boolean {
    return this.undoRedoManager.isProcessingUndoRedo;
  }
  /**
   * Undo the latest user operation. Returns true if it performes successful.
   */
  public undo = () => {
    this.doUndoClick();
  };
  /**
   * Redo the latest undo operation. Returns true if it performes successful.
   */
  public redo = () => {
    this.doRedoClick();
  };
  private setUndoRedoCurrentState(clearState: boolean = false) {
    // if (clearState) { TODO undoredo
    //   this.undoRedoManager.clear();
    // }
    // var selObj = this.koSelectedObject() ? this.koSelectedObject().value : null;
    // this.undoRedoManager.setCurrent(this.surveyValue(), selObj ? selObj.name : null);
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
   * Set it to false to completely hide the Property Grid on the right. It allows to edit the properties of the selected object (question/panel/page/survey).
   */
  public get showPropertyGrid() {
    return (
      this.koShowPropertyGrid() !== false &&
      this.koShowPropertyGrid() !== "none"
    );
  }
  public set showPropertyGrid(value: ContainerLocation) {
    if (this.koShowPropertyGrid() != value) {
      this._leftContainer.remove("property-grid");
      this._rightContainer.remove("property-grid");
      if (value === "right" || value === true) {
        this._rightContainer.push("property-grid");
      }
      if (value === "left") {
        this._leftContainer.push("property-grid");
      }
      this.koShowPropertyGrid(value);
      this.koHideAdvancedSettings(!this.showPropertyGrid);
      if (value !== false && value !== "none" && !!this.selectedElement) {
        this.setNewObjToPropertyGrid(this.selectedElement);
      }
    }
  }
  /**
   * Set it to "always", "never" or "ifentered". The "ifentered" is the default value means show survey title only in case of user entered it.
   */
  public get showSurveyTitle() {
    return this.koShowSurveyTitle();
  }
  public set showSurveyTitle(value) {
    this.koShowSurveyTitle(value);
  }
  /**
   * Set it to false if you want to deny user to hide/show survey title.
   */
  public get allowControlSurveyTitleVisibility() {
    return this.koAllowControlSurveyTitleVisibility();
  }
  public set allowControlSurveyTitleVisibility(value) {
    this.koAllowControlSurveyTitleVisibility(value);
  }
  /**
   * Set it to false to  hide the pages toolbox on the top.
   */
  public get showPagesToolbox() {
    return (
      this.koShowPagesToolbox() !== false &&
      this.koShowPagesToolbox() !== "none"
    );
  }
  public set showPagesToolbox(value: ContainerLocation) {
    this.koShowPagesToolbox(value);
  }
  /**
   * You have to set this property to false via options on creating SurveyJS Creator to use popup editor and old property grid.
   */
  public get showElementEditorAsPropertyGrid() {
    return this.koShowElementEditorAsPropertyGrid();
  }
  /**
   * Set it to false to  hide the question toolbox on the left.
   */
  public get showToolbox() {
    return this.koShowToolbox() !== false && this.koShowToolbox() !== "none";
  }
  public set showToolbox(value: ContainerLocation) {
    if (this.koShowToolbox() != value) {
      this._leftContainer.remove("toolbox");
      this._rightContainer.remove("toolbox");
      if (value === "left" || value === true) {
        this._leftContainer.push("toolbox");
      }
      if (value === "right") {
        this._rightContainer.push("toolbox");
      }
      this.koShowToolbox(value);
    }
  }
  /**
   * @Deprecated Obsolete from v1.5.1
   * Set it to false to temporary hide the Property Grid on the right side of the creator. User will be able to show the Property Grid again via the click on the 'Advanced' label. It allows to edit the properties of the selected object (question/panel/page/survey).
   */
  public get hideAdvancedSettings() {
    return this.koHideAdvancedSettings();
  }
  public set hideAdvancedSettings(value: boolean) {
    this.koHideAdvancedSettings(value);
    if (
      this.koShowPropertyGrid() === "right" ||
      this.koShowPropertyGrid() === true
    ) {
      if (
        this._rightContainer().length === 1 ||
        (this._rightContainer().length > 1 && !value)
      ) {
        this.rightContainerVisible(!value);
      }
    }
    if (this.koShowPropertyGrid() === "left") {
      if (
        this._leftContainer().length === 1 ||
        (this._leftContainer().length > 1 && !value)
      ) {
        this.leftContainerVisible(!value);
      }
    }
  }
  private _showExternalHelpLink = ko.observable(false);
  get showExternalHelpLink() {
    return this._showExternalHelpLink();
  }
  set showExternalHelpLink(value) {
    this._showExternalHelpLink(value);
  }
  private _placeholderHtml = ko.observable("");
  get placeholderHtml() {
    return this._placeholderHtml();
  }
  set placeholderHtml(value) {
    this._placeholderHtml(value);
  }

  public get hideExpressionHeader() {
    return this.hideExpressionHeaderValue();
  }

  /**
   * Set it to "cancel" or "apply" to enable closing modal windows by clicking outside popup.
   * If "apply" is set, then changes will be saved, otherwise not. By default value is "off"
   */
  public get closeModalOutside() {
    return this.closeModalOutsideValue;
  }
  public set closeModalOutside(value: "off" | "cancel" | "apply") {
    this.closeModalOutsideValue = value;
  }
  /**
   * Set it to "single" to design surface in single page mode. By default value is "standard"
   */
  public get pageEditMode() {
    return this.pageEditModeValue;
  }
  private _leftContainer: ko.ObservableArray<string>;
  public get leftContainer() {
    return this._leftContainer();
  }
  public leftContainerVisible = ko.observable(true);
  public leftContainerActiveItem = ko.observable<string>("toolbox");
  private _rightContainer: ko.ObservableArray<string>;
  public get rightContainer() {
    return this._rightContainer();
  }
  public rightContainerVisible = ko.observable(true);
  public rightContainerActiveItem = ko.observable<string>("property-grid");
  private _topContainer: ko.ObservableArray<string>;
  public layoutChangedIndicator = ko.observable(0);
  public get topContainer() {
    return this._topContainer();
  }
  public canShowObjectProperty(object: any, propertyName: string) {
    if (!object || !object.getType) {
      return true;
    }
    if (EditableObject.isCopyObject(object) && propertyName === "page")
      return false;
    var property = Survey.Serializer.findProperty(
      object.getType(),
      propertyName
    );
    return SurveyHelper.isPropertyVisible(object, property, this);
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
      result: 0,
    };
    this.onCustomSortProperty.fire(this, options);
    return options.result;
  }

  /**
   * Add a new page into the editing survey. Returns the new created page instance
   */
  public addPage = (): Survey.Page => {
    var name = SurveyHelper.getNewPageName(this.survey.pages);
    var page = <Survey.Page>this.survey.addNewPage(name);
    this.selectedElement = page;
    return page;
  };
  public deletePage = () => {
    this.deleteCurrentObject();
  };
  public movePage = (page: Survey.PageModel, indexFrom: number) => {
    var indexTo = this.survey.pages.indexOf(page);
    this.setModified({
      type: "PAGE_MOVED",
      page: page,
      indexFrom: indexFrom,
      indexTo: indexTo,
    });
  };
  public addPageToUI(page: Survey.Page) {
    this.surveyObjects.addPage(page);
  }
  private doOnQuestionAdded(question: Survey.Question, parentPanel: any) {
    if (!this.dragDropHelper.isMoving) {
      question.name = this.generateUniqueName(question, question.name);
      var page = this.getPageByElement(question);
      var options = { question: question, page: page };
      this.addingObject = question;
      this.onQuestionAdded.fire(this, options);
      this.addingObject = null;
    }
    if (parentPanel.elements.indexOf(question) !== -1) {
      this.surveyObjects.addElement(question, parentPanel);
    }
  }
  private doOnElementRemoved(element: Survey.Base) {
    this.surveyObjects.removeObject(element);
  }
  private doOnPanelAdded(panel: Survey.Panel, parentPanel: any) {
    if (!this.dragDropHelper.isMoving) {
      var page = this.getPageByElement(panel);
      var options = { panel: panel, page: page };
      this.addingObject = panel;
      this.onPanelAdded.fire(this, options);
      this.addingObject = null;
    }
    if (parentPanel.elements.indexOf(panel) !== -1) {
      this.surveyObjects.addElement(panel, parentPanel);
    }
  }
  private doOnPageAdded(page: Survey.Page) {
    var options = { page: page };
    this.addingObject = page;
    this.onPageAdded.fire(this, options);
    this.addingObject = null;
  }
  public updateObjectTextInPropertyGrid(obj: Survey.Base) {
    if (!!this.surveyObjects) {
      this.surveyObjects.nameChanged(obj);
    }
  }
  private onPropertyChanged(
    obj: any,
    property: Survey.JsonObjectProperty,
    oldValue: any
  ) {
    var value = obj[property.name];
    if (property.name == "name") {
      this.onElementNameChanged.fire(this, {
        obj: obj,
        oldName: oldValue,
        newName: value,
      });
    }
    if (
      property.name == "name" ||
      property.name == "title" ||
      !this.onGetObjectTextInPropertyGrid.isEmpty ||
      !this.onGetObjectDisplayName.isEmpty
    ) {
      this.surveyObjects.nameChanged(obj);
    }
    if (property.name === "name") {
      this.dirtyPageUpdate(); //TODO why this is need ? (ko problem)
    } else if (property.name === "page") {
      this.selectedElement = value;
      this.selectedElement = obj;
    }
  }

  private onPropertyCorrectValueBeforeSet(
    obj: any,
    property: Survey.JsonObjectProperty,
    newValue: any
  ) {
    if (property.name === "page" && typeof newValue === "string") {
      return obj.survey.getPageByName(newValue);
    }
    return newValue;
  }
  protected doPropertyGridChanged() {
    if (!this.showPropertyGrid) return;
    this.propertyGridObjectEditorModel.objectChanged();
  }
  private setNewObjToPropertyGrid(newObj: any) {
    if (!this.showPropertyGrid) return;
    this.propertyGridObjectEditorModel.selectedObject = newObj;
  }
  protected canSwitchViewType(newType: string): boolean {
    if (newType && this.koViewType() == newType) return false;
    if (
      (this.koViewType() == "translation" || this.koViewType() == "logic") &&
      newType == "designer"
    ) {
      this.survey.render();
    }
    if (this.koViewType() != "editor") return true;
    var textWorker = new SurveyTextWorker(this.text);
    if (!textWorker.isJsonCorrect) {
      this.notify(this.getLocString("ed.correctJSON"));
      return false;
    }
    if (
      !this.readOnly &&
      !!this.getSurveyJSONTextCallback &&
      this.getSurveyJSONTextCallback().isModified
    ) {
      this.initSurvey(new Survey.JsonObject().toJsonObject(textWorker.survey));
      this.setModified({ type: "VIEW_TYPE_CHANGED", newType: newType });
    }
    return true;
  }
  /**
   * Returns the current show view name. The possible returns values are:
   * "designer", "editor", "test", "embed", "logic" and "translation".
   * @see showDesigner
   * @see showTestSurvey
   * @see showJsonEditor
   * @see showLogicEditor
   * @see showTranslationEditor
   * @see showEmbedEditor
   */
  public get showingViewName(): string {
    return this.koViewType();
  }

  /**
   * Make a "Survey Designer" tab active.
   */
  public showDesigner() {
    this.makeNewViewActive("designer");
  }
  /**
   * Make a "JSON Editor" tab active.
   */
  public showJsonEditor() {
    this.makeNewViewActive("editor");
  }
  /**
   * Make a "Test Survey" tab active.
   */
  public showTestSurvey() {
    this.makeNewViewActive("test");
  }
  /**
   * Make a "Embed Survey" tab active.
   */
  public showEmbedEditor() {
    this.makeNewViewActive("embed");
  }
  /**
   * Make a "Translation" tab active.
   */
  public showTranslationEditor() {
    this.makeNewViewActive("translation");
  }
  /**
   * Make a "Logic" tab active.
   */
  public showLogicEditor() {
    if (!this.canSwitchViewType("logic")) return;
    this.koViewType("logic");
  }
  private getPageByElement(obj: Survey.Base): Survey.Page {
    var page = this.survey.getPageByElement(<Survey.IElement>(<any>obj));
    if (page) return <Survey.Page>page;
    return this.surveyObjects.getSelectedObjectPage(obj);
  }
  /**
   * Get or set the current selected object in the Creator. It can be a question, panel, page or survey itself.
   */
  public get selectedElement(): any {
    return !!this.koSelectedObject() ? this.koSelectedObject().value : null;
  }
  public set selectedElement(val: any) {
    if (this.selectedElement !== val) {
      this.surveyObjects.selectObject(val);
    }
  }

  public selectElement(element: any) {
    this.selectedElement = element;
  }

  /**
   * Check for errors in property grid and adorners of the selected elements.
   * Returns true if selected element is null or there is no errors.
   */
  public validateSelectedElement(): boolean {
    var isValid = true;
    if (!this.selectedElement) return isValid;
    if (!!this.propertyGridObjectEditorModel) {
      isValid = !this.propertyGridObjectEditorModel.hasErrors();
    }
    var options = { errors: [] };
    this.onValidateSelectedElement.fire(this, options);
    return isValid && options.errors.length == 0;
  }
  private selectedObjectChanged(obj: Survey.Base) {
    var options = { newSelectedElement: obj };
    this.onSelectedElementChanging.fire(this, options);
    if (obj != options.newSelectedElement) {
      this.selectedElement = options.newSelectedElement;
      return;
    }
    var canDeleteObject = false;
    this.setNewObjToPropertyGrid(obj);
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
      if (
        this.renderedElement &&
        id &&
        this.survey.currentPage &&
        !obj["selectedOnClick"]
      ) {
        let el = <HTMLElement>this.renderedElement.querySelector("#" + id);
        SurveyHelper.scrollIntoViewIfNeeded(el);
      }
    } else {
      this.disableSurveySelectedElementChanging = true;
      this.survey.selectedElement = null;
      this.disableSurveySelectedElementChanging = false;
    }
    this.koCanDeleteObject(canDeleteObject);
    this.onSelectedElementChanged.fire(this, options);
  }
  private applyBinding() {
    if (this.renderedElement == null) return;
    var self = this;
    ko.cleanNode(this.renderedElement);
    ko.applyBindings(
      this,
      this.renderedElement,
      (context: any) => (context.$creator = this)
    );
    ko.tasks.runEarly();
    var surveyjs = <HTMLElement>(
      this.renderedElement.querySelector(".svd_surveyjs_designer_container")
    );
    if (surveyjs) {
      surveyjs.onkeydown = function (e) {
        if (self.readOnly) return;
        if (!e) return;
        // if (e.keyCode == 46) self.deleteQuestion();
        if (e.keyCode == 38 || e.keyCode == 40) {
          self.selectQuestion(e.keyCode == 38);
        }
      };
    }

    const container = self.renderedElement.querySelector(".svd_container");
    container["onkeydown"] = function (e) {
      self.onKeyDownHandler(e, self);
    };
    this.initSurveyOnRender();
    this.setUndoRedoCurrentState(true);
  }
  protected initSurveyOnRender() {
    var json = this.JSON;
    if (!json || Object.keys(json).length === 0) {
      json = this.getDefaultSurveyJson();
    }
    this.initSurvey(json);
  }
  private getDefaultSurveyJson(): any {
    var json = new SurveyJSON5().parse(SurveyCreator.defaultNewSurveyText);
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
  /**
   * Use this method to create keyboard shortcuts
   * @param e keydown event
   * @param creator creator instance
   */
  public onKeyDownHandler(e, creator) {
    const evtobj: KeyboardEvent = window.event ? event : e;
    const commands = creator.commands;
    let command, hotKey;
    Object.keys(creator.commands || {}).forEach((key) => {
      command = commands[key];
      hotKey = evtobj.metaKey ? command.macOsHotkey : command.hotKey;
      if (!hotKey) return;

      if (!!hotKey.ctrlKey !== evtobj.ctrlKey) return;
      if (!!hotKey.shiftKey !== evtobj.shiftKey) return;
      if (hotKey.keyCode !== evtobj.keyCode) return;

      creator.execute(command);
    });
  }

  public execute(command) {
    const name = command.name;
    if (!command || !name || !this[name] || typeof this[name] !== "function")
      return;
    return this[name].apply(this, [].slice.call(arguments, 1));
  }
  private addingObject: Survey.Base;
  private onSurveyPropertyValueChangedCallback(
    name: string,
    oldValue: any,
    newValue: any,
    sender: Survey.Base,
    arrayChanges: Survey.ArrayChanges
  ) {
    if (this.addingObject == sender) return;
    this.undoRedoManager.startTransaction(name + " changed");
    this.undoRedoManager.onPropertyValueChanged(
      name,
      oldValue,
      newValue,
      sender,
      arrayChanges
    );
    this.updateConditionsOnQuestionNameChanged(sender, name, oldValue);
    this.undoRedoManager.stopTransaction();
  }
  private updateConditionsOnQuestionNameChanged(
    obj: Survey.Base,
    propertyName: string,
    oldValue: any
  ) {
    if (!this.isObjQuestion(obj)) return;
    if (propertyName === "name" && !obj["valueName"]) {
      this.updateConditions(oldValue, obj["name"]);
    }
    if (propertyName === "valueName") {
      var oldName = !!oldValue ? oldValue : obj["name"];
      var newName = !!obj["valueName"] ? obj["valueName"] : obj["name"];
      this.updateConditions(oldName, newName);
    }
  }
  private isObjQuestion(obj: Survey.Base) {
    var classInfo = Survey.Serializer.findClass(obj.getType());

    while (!!classInfo && !!classInfo.parentName) {
      if (classInfo.name === "question") return true;
      classInfo = Survey.Serializer.findClass(classInfo.parentName);
    }
    return !!classInfo && classInfo.name === "question";
  }
  private disableSurveySelectedElementChanging: boolean = false;
  private initSurvey(json: any) {
    var self = this;
    var newSurvey = <SurveyForDesigner>(
      this.createSurvey({}, "designer", SurveyForDesigner)
    );
    this.undoRedoManager = new UndoRedoManager();
    newSurvey.getEditor = () => self;
    ko.computed(() => {
      var optionValue = this.showSurveyTitle;
      var showValue = optionValue !== "never";
      if (showValue) {
        showValue =
          optionValue === "always" ||
          (optionValue === "ifentered" &&
            newSurvey.locTitle["koRenderedHtml"]()) ||
          newSurvey.locLogo["koRenderedHtml"]();
      }
      newSurvey.koShowHeader(showValue);
    });
    ko.computed(() => {
      newSurvey.isReadOnly(this.readOnly);
    });
    newSurvey.emptyPageTemplate = "se-empty-placeholder";
    newSurvey.emptyPageTemplateData = this;
    newSurvey.onPropertyValueChangedCallback = (
      name: string,
      oldValue: any,
      newValue: any,
      sender: Survey.Base,
      arrayChanges: Survey.ArrayChanges
    ) => {
      this.onSurveyPropertyValueChangedCallback(
        name,
        oldValue,
        newValue,
        sender,
        arrayChanges
      );
    };
    this.undoRedoManager.canUndoRedoCallback = () => {
      this.updateKoCanUndoRedo();
    };
    this.undoRedoManager.changesFinishedCallback = (
      changes: IUndoRedoChange
    ) => {
      this.setModified({
        type: "PROPERTY_CHANGED",
        name: changes.propertyName,
        target: changes.object,
        oldValue: changes.oldValue,
        newValue: changes.newValue,
      });
    };
    this.updateKoCanUndoRedo();
    this.dragDropHelper = new DragDropHelper(
      <Survey.ISurvey>newSurvey,
      function (options) {
        self.setModified(options);
      },
      this.renderedElement,
      this.undoRedoManager
    );
    this.dragDropHelper.readOnly = this.readOnly;
    newSurvey.setJsonObject(json);
    if (newSurvey.isEmpty) {
      newSurvey.setJsonObject(this.getDefaultSurveyJson());
    }
    Survey.surveyLocalization.currentLocale = newSurvey["locale"];
    newSurvey.dragDropHelper = this.dragDropHelper;
    newSurvey.onUpdateElementAllowingOptions = function (options) {
      self.onElementAllowOperations.fire(self, options);
    };
    var afterRenderElementHandler = createAfterRenderHandler(this, newSurvey);
    var afterRenderElementPageHandler = createAfterRenderPageHandler(
      this,
      newSurvey
    );
    var afterRenderHeaderHandler = createAfterRenderHeaderHandler(
      this,
      newSurvey
    );
    newSurvey.onAfterRenderPage.add((sender, options) => {
      afterRenderElementPageHandler(options.htmlElement, options.page);
    });
    newSurvey.onAfterRenderQuestion.add((sender, options) => {
      afterRenderElementHandler(
        options.htmlElement,
        options.question,
        false,
        true
      );
    });
    newSurvey.onAfterRenderPanel.add((sender, options) => {
      if (options.panel.getType() === "flowpanel") {
        afterRenderElementHandler(
          options.htmlElement,
          options.panel,
          true,
          options.panel.koIsDragging()
        );
        var pnlEl = options.htmlElement.querySelector("f-panel");
        if (!!pnlEl) {
          if (!!pnlEl.className) {
            pnlEl.className += " svd_flowpanel";
          } else {
            pnlEl.className = "svd_flowpanel";
          }
        }
      } else {
        options.panel.emptyElement = addEmptyPanelElement(
          newSurvey,
          options.htmlElement,
          options.panel.dragDropHelper(),
          options.panel
        );
        if (options.panel.elements.length > 0) {
          options.panel.emptyElement.style.display = "none";
        }
        afterRenderElementHandler(
          options.htmlElement,
          options.panel,
          true,
          options.panel.koIsDragging()
        );
      }
    });
    newSurvey.onAfterRenderHeader.add((sender, options) => {
      afterRenderHeaderHandler(options.htmlElement, sender);
    });
    newSurvey.onDragDropAllow.add(function (sender, options) {
      options.survey = sender;
      self.onDragDropAllow.fire(self, options);
    });
    newSurvey.onGetMenuItems.add((sender, options) => {
      if (this.readOnly) {
        return;
      }

      let opts = options.obj.allowingOptions;
      if (!opts) opts = {};

      if (this.showModalOnElementEditing && opts.allowShowEditor) {
        options.items.push({
          name: "editelement",
          text: this.getLocString("survey.edit"),
          hasTitle: true,
          onClick: (question) => this.showQuestionEditor(question),
        });
      }

      if (opts.allowDelete) {
        var deleteLocaleName = options.obj.isPanel
          ? "survey.deletePanel"
          : "survey.deleteQuestion";
        options.items.push({
          name: "delete",
          text: self.getLocString(deleteLocaleName),
          onClick: function (selObj) {
            self.deleteObject(selObj);
          },
        });
      }

      if (
        opts.allowShowHideTitle &&
        typeof options.obj.titleLocation !== "undefined" &&
        isPropertyVisible(options.obj, "title")
      ) {
        var isShowTitle = ko.observable<boolean>(
          options.obj.titleLocation !== "hidden"
        );
        options.items.push({
          name: "showtitle",
          text: this.getLocString("pe.showTitle"),
          icon: ko.computed(() => {
            if (isShowTitle()) {
              return "icon-actionshowtitle";
            }
            return "icon-actionhidetitle";
          }),
          onClick: (question: Survey.Question) => {
            if (question.titleLocation !== "hidden") {
              question.titleLocation = "hidden";
              if (question.getType() === "boolean") {
                question["showTitle"] = false;
              }
            } else {
              question.titleLocation = "default";
              if (question.getType() === "boolean") {
                question["showTitle"] = true;
              }
            }
            isShowTitle(question.titleLocation !== "hidden");
          },
        });
      }

      if (
        opts.allowChangeRequired &&
        typeof options.obj.isRequired !== "undefined" &&
        isPropertyVisible(options.obj, "isRequired")
      ) {
        var isRequired = ko.computed(() => options.obj.isRequired);
        options.items.push({
          name: "isrequired",
          text: this.getLocString("pe.isRequired"),
          icon: ko.computed(() => {
            if (isRequired()) {
              return "icon-actionisrequired";
            }
            return "icon-actionnotrequired";
          }),
          onClick: (question: Survey.Question) => {
            var property = Survey.Serializer.findProperty(
              question.getType(),
              "isRequired"
            );
            if (
              !property ||
              !this.onIsPropertyReadOnlyCallback(
                question,
                property,
                property.readOnly,
                undefined,
                undefined
              )
            ) {
              question.isRequired = !question.isRequired;
            }
          },
        });
      }

      if (options.items.length > 0) {
        options.items.push({ template: "action-separator" });
      }

      if (opts.allowCopy) {
        options.items.push({
          name: "copy",
          text: self.getLocString("survey.copy"),
          onClick: function (selObj) {
            self.fastCopyQuestion(selObj);
          },
        });
      }

      if (opts.allowAddToToolbox) {
        options.items.push({
          name: "addtotoolbox",
          text: self.getLocString("survey.addToToolbox"),
          onClick: function (selObj) {
            self.addCustomToolboxQuestion(selObj);
          },
        });
      }

      if (opts.allowChangeType) {
        if (options.items.length > 0) {
          options.items.push({ template: "action-separator" });
        }
        var currentType = options.obj.getType();
        var convertClasses = QuestionConverter.getConvertToClasses(
          currentType,
          this.toolbox.itemNames
        );
        var allowChangeType = convertClasses.length > 0;
        var createTypeByClass = (className) => {
          return {
            name: this.getLocString("qt." + className),
            value: className,
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
          },
        });
      }

      if (!this.showModalOnElementEditing && opts.allowShowEditor) {
        options.items.push({
          name: "editelement",
          text: this.getLocString("ed.property-grid"),
          template: "sca-show-property-grid",
          hasTitle: true,
          onClick: (question) => this.showQuestionEditor(question),
        });
      }

      if (opts.allowDragging) {
        options.items.push({
          name: "dragelement",
          needFocus: false,
          text: self.getLocString("survey.drag"),
          onClick: function (selObj) {},
        });
      }

      self.onDefineElementMenuItems.fire(self, options);
    });

    this.onDesignerSurveyCreated.fire(this, { survey: newSurvey });
    // this.survey.render(this.surveyjs);
    newSurvey.onSelectedElementChanged.add((sender: Survey.Survey, options) => {
      if (self.disableSurveySelectedElementChanging) return;
      self.selectedElement = sender["selectedElement"];
    });
    newSurvey.onEditButtonClick.add((sender: Survey.Survey) => {
      self.showQuestionEditor(self.selectedElement);
    });
    newSurvey.onElementDoubleClick.add((sender: Survey.Survey, options) => {
      self.onElementDoubleClick.fire(self, options);
    });
    newSurvey.onProcessHtml.add((sender: Survey.Survey, options) => {
      options.html = self.processHtml(options.html);
    });
    newSurvey.onQuestionAdded.add((sender: Survey.Survey, options) => {
      self.doOnQuestionAdded(options.question, options.parentPanel);
    });
    newSurvey.onQuestionRemoved.add((sender: Survey.Survey, options) => {
      self.doOnElementRemoved(options.question);
    });
    newSurvey.onPanelAdded.add((sender: Survey.Survey, options) => {
      self.doOnPanelAdded(options.panel, options.parentPanel);
    });
    newSurvey.onPanelRemoved.add((sender: Survey.Survey, options) => {
      self.doOnElementRemoved(options.panel);
    });
    newSurvey.onPageAdded.add((sender: Survey.Survey, options) => {
      if (self.surveyObjects.hasObject(options.page)) return;
      self.doOnPageAdded(options.page);
      self.addPageToUI(options.page);
      self.setModified({ type: "PAGE_ADDED", newValue: options.page });
    });

    this.surveyValue(newSurvey);
    this.surveyObjects.survey = newSurvey;
    this.selectedElement = newSurvey;
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
    var newElement = this.createNewElement(json);
    json = (<Survey.Base>(<any>newElement)).toJSON();
    json["type"] = newElement.getType();
    this.dragDropHelper.startDragToolboxItem(e, newElement.name, json);
  }

  private doClickToolboxItem(json: any) {
    if (!this.readOnly) {
      var newElement = this.createNewElement(json);
      this.doClickQuestionCore(newElement);
    }
  }
  public dragOverQuestionsEditor(data, e) {
    data.survey.dragDropHelper.doDragDropOver(e, data.survey.currentPage);
    return false;
  }
  public dropOnQuestionsEditor(data, e) {
    data.survey.dragDropHelper.doDrop(e);
  }
  protected doClickQuestionCore(
    element: Survey.IElement,
    modifiedType: string = "ADDED_FROM_TOOLBOX"
  ) {
    super.doClickQuestionCore(element, modifiedType);
    if (this.renderedElement && this.scrollToNewElement) {
      SurveyHelper.scrollIntoViewIfNeeded(
        this.renderedElement.querySelector("#" + element["id"])
      );
    }
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
  private getSelectedObjAsQuestion(): Survey.Question {
    var obj = this.selectedElement;
    if (!obj) return null;
    return SurveyHelper.getObjectType(obj) == ObjType.Question
      ? <Survey.Question>obj
      : null;
  }
  public deleteCurrentObject() {
    this.deleteObject(this.selectedElement);
  }
  /**
   * Show the creator dialog. The element can be a question, panel, page or survey. If property grid is used instead of dialog window (default behavior), then focus goes into the property grid.
   * @param element The survey element
   * @see showModalElementEditor
   */
  public showElementEditor(
    element: Survey.Base,
    onClose: (isCanceled: boolean) => any
  ) {
    this.showQuestionEditor(element, onClose);
  }
  private updateConditions(oldName: string, newName: string) {
    if (oldName === newName) return;
    new SurveyLogic(this.survey, this).renameQuestion(oldName, newName);
  }
  public get showModalOnElementEditing(): boolean {
    return !this.showElementEditorAsPropertyGrid || !this.showPropertyGrid;
  }
  public showQuestionEditor = (
    element: Survey.Base,
    onClose: (isCanceled: boolean) => any = null
  ) => {
    if (!this.showModalOnElementEditing) {
      this.hideAdvancedSettings = false;
      this.setNewObjToPropertyGrid(element);
      this.leftContainerActiveItem("property-grid");
      this.rightContainerActiveItem("property-grid");
      this.propertyGridObjectEditorModel.focusEditor();
      return;
    }
    this.showModalElementEditor(element, onClose);
  };
  /**
   * Show the creator dialog. The element can be a question, panel, page or survey.
   * @param element The survey element
   * @param onClose Callback function on closing dialog window. It has isCanceled boolean paratemer. It is true if a user cancel changes.
   * @see onElementEditorClosed
   */
  public showModalElementEditor(
    element: Survey.Base,
    onClose: (isCanceled: boolean) => any = null
  ) {
    var self = this;
    var elWindow = this.renderedElement
      ? <HTMLElement>(
          this.renderedElement.querySelector("#surveyquestioneditorwindow")
        )
      : null;
    var isCanceled = true;
    var oldName = element["name"];
    var oldValueName = element["valueName"];
    this.questionEditorWindow.show(
      element,
      elWindow,
      function (question) {
        self.onQuestionEditorChanged(question);
        isCanceled = false;
        if (oldName !== question["name"]) {
          self.updateConditionsOnQuestionNameChanged(question, "name", oldName);
          self.onElementNameChanged.fire(self, {
            obj: question,
            oldName: oldName,
            newName: question["name"],
          });
        }
        if (oldValueName !== question["valueName"]) {
          self.updateConditionsOnQuestionNameChanged(
            question,
            "valueName",
            oldValueName
          );
        }
      },
      this,
      function () {
        if (onClose) onClose(isCanceled);
        self.onElementEditorClosed.fire(self, {
          isCanceled: isCanceled,
          element: element,
        });
      },
      this.onEditorAfterRenderCallback
    );
  }
  public onQuestionEditorChanged(question: Survey.Question) {
    if (!!question.name && !this.isNameUnique(question, question.name)) {
      question.name = this.generateUniqueName(question, question.name);
    }
    this.surveyObjects.nameChanged(question);
    this.doPropertyGridChanged();
    this.dirtyPageUpdate(); //TODO why this is need ? (ko problem)
    this.setModified({
      type: "QUESTION_CHANGED_BY_EDITOR",
      question: question,
    });
  }

  //TODO why this is need ? (ko problem)
  private dirtyPageUpdate = () => {
    var selectedObject = this.selectedElement;
    if (!selectedObject) return;
    if (SurveyHelper.getObjectType(selectedObject) !== ObjType.Page) {
      if (
        SurveyHelper.getObjectType(selectedObject) === ObjType.Question &&
        !!selectedObject["koElementType"]
      ) {
        selectedObject["koElementType"].notifySubscribers();
      }
      return;
    }
    this.selectedElement = selectedObject;
  };

  /**
   * Add a question into Toolbox object
   * @param question an added Survey.Question
   * @see toolbox
   */
  public addCustomToolboxQuestion(question: Survey.Question) {
    var options = {};
    this.onCustomElementAddingIntoToolbox.fire(this, {
      element: question,
      itemOptions: options,
    });
    this.toolbox.addCopiedItem(question, options);
    this.onCustomElementAddedIntoToolbox.fire(this, { element: question });
  }
  /**
   * Create a new page with the same elements and place it next to the current one. It returns the new created Survey.Page
   * @param page A copied Survey.Page
   */
  public copyPage = (page: Survey.PageModel): Survey.PageModel => {
    var newPage = <Survey.Page>(<any>this.copyElement(page));
    var index = this.survey.pages.indexOf(page);
    if (index > -1) {
      this.survey.pages.splice(index + 1, 0, newPage);
    } else {
      this.survey.pages.push(newPage);
    }
    this.addPageToUI(newPage);
    return newPage;
  };

  protected deleteObjectCore(obj: any) {
    this.surveyObjects.removeObject(obj);
    super.deleteObjectCore(obj);
  }

  //implements ISurveyObjectEditorOptions
  get showApplyButtonInEditors(): boolean {
    return this.showApplyButtonValue;
  }
  set showApplyButtonInEditors(value: boolean) {
    this.showApplyButtonValue = value;
  }
  onEditorTabRenderedCallback = (
    tabName: string,
    elements: HTMLDivElement[],
    model: any,
    tabData: any
  ) => {
    this.onEditorTabRendered.fire(this, {
      tabName,
      elements,
      model,
      tabData,
    });
  };
  onIsEditorReadOnlyCallback(
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    readOnly: boolean
  ): boolean {
    return this.onIsPropertyReadOnlyCallback(
      obj,
      editor.property,
      readOnly,
      editor.parentObj,
      editor.parentProperty
    );
  }
  onTitleInplaceEditorStartEdit(inputElem: HTMLInputElement): void {}
  onPropertyEditorKeyDownCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    event: KeyboardEvent
  ) {
    var options = {
      propertyName: propertyName,
      obj: obj,
      editor: editor,
      event: event,
    };
    this.onPropertyEditorKeyDown.fire(this, options);
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
      htmlBottom: "",
    };
    this.onShowPropertyModalEditorDescription.fire(this, options);
    var res = { top: options.htmlTop, bottom: options.htmlBottom };
    return res;
  }
  onConditionValueSurveyCreatedCallBack(
    valueQuestionName: string,
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    survey: Survey.Survey
  ) {
    var options = {
      valueQuestionName: valueQuestionName,
      propertyName: propertyName,
      obj: obj,
      editor: editor,
      survey: survey,
    };
    this.onConditionValueSurveyCreated.fire(this, options);
  }
  startUndoRedoTransaction() {
    this.undoRedoManager.startTransaction("Edit Element in Modal Window");
  }
  stopUndoRedoTransaction() {
    this.undoRedoManager.stopTransaction();
  }
  protected startTransaction(name: string) {
    this.undoRedoManager.startTransaction(name);
  }
  protected stopTransation() {
    this.undoRedoManager.stopTransaction();
  }

  onAdornerRenderedCallback(
    question: Survey.Question,
    adorner: string,
    element: HTMLElement,
    context?: any
  ) {
    if (!this.onAdornerRendered.isEmpty) {
      setTimeout(() => {
        ko.tasks.runEarly();
        var options = {
          survey: this.survey,
          question: question,
          adorner: adorner,
          element: element,
          context: context,
        };
        this.onAdornerRendered.fire(this, options);
      }, 1);
    }
  }
  /**
   * Clear the files on a server
   * @param files files data (byte array or URI) to clear
   * @param clearCallback a call back function to get the status on removed the files
   */
  public clearFiles(
    files: any[],
    clearCallback: (status: string, data: any) => any
  ) {
    if (this.onClearFile.isEmpty) {
      clearCallback("success", null);
    } else {
      this.onClearFile.fire(this, {
        files: files || [],
        callback: clearCallback,
      });
    }
  }
  /**
   * Upload the files on a server
   * @param files files to upload
   * @param uploadingCallback a call back function to get the status on uploading the file and operation result - URI of the uploaded file
   */
  public uploadFiles(
    files: File[],
    uploadingCallback: (status: string, data: any) => any
  ) {
    if (this.onUploadFile.isEmpty) {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        uploadingCallback("success", fileReader.result);
      };
      fileReader.readAsDataURL(files[0]);
    } else {
      this.onUploadFile.fire(this, {
        files: files || [],
        callback: uploadingCallback,
      });
    }
  }
  /**
   * Open file chooser dialog
   * @param input file input element
   * @param onFilesChosen a call back function to process chosen files
   */
  public chooseFiles(
    input: HTMLInputElement,
    onFilesChosen: (files: File[]) => void
  ) {
    if (this.onOpenFileChooser.isEmpty) {
      if (!window["FileReader"]) return;
      input.value = "";
      input.onchange = (event) => {
        if (!window["FileReader"]) return;
        if (!input || !input.files || input.files.length < 1) return;
        let files = [];
        for (let i = 0; i < input.files.length; i++) {
          files.push(input.files[i]);
        }
        onFilesChosen(files);
      };
      input.click();
    } else {
      this.onOpenFileChooser.fire(this, {
        input: input,
        callback: onFilesChosen,
      });
    }
  }

  private getAccordionTabs(): SurveyElementEditorTabModel[] {
    let aTabs;

    if (this.showElementEditorAsPropertyGrid) {
      aTabs = this.propertyGridObjectEditorModel.koElementEditor().koTabs();
    } else if (this.useTabsInElementEditor) {
      aTabs = [];
    } else {
      aTabs = this.questionEditorWindow.koEditor().koTabs();
    }

    return aTabs;
  }

  /**
   * Collapse all property editor tabs (accordions) in properties panel
   */
  public collapseAllPropertyTabs(): void {
    this.getAccordionTabs().forEach((tab: SurveyElementEditorTabModel) => {
      tab.collapse();
    });
  }

  /**
   * Expand all property editor tabs (accordions) in properties panel
   */
  public expandAllPropertyTabs(): void {
    this.getAccordionTabs().forEach((tab: SurveyElementEditorTabModel) => {
      tab.expand();
    });
  }

  /**
   * Expand certain property editor tab (accordion) in properties panel
   * name - tab category name
   */
  public expandPropertyTab(name: string): void {
    this.getAccordionTabs().forEach((tab: SurveyElementEditorTabModel) => {
      if (tab.name !== name) return;
      tab.expand();
    });
  }

  /**
   * Collapse certain property editor tab (accordion) in properties panel
   * name - tab category name
   */
  public collapsePropertyTab(name: string): void {
    this.getAccordionTabs().forEach((tab: SurveyElementEditorTabModel) => {
      if (tab.name === name) tab.collapse();
    });
  }
}

export class SurveyEditor extends SurveyCreator {
  constructor(renderedElement: any = null, options: any = null) {
    super(renderedElement, options);
  }
}

function addEmptyPanelElement(
  survey: SurveyForDesigner,
  root: HTMLElement,
  dragDropHelper: any,
  panel: any
): HTMLElement {
  var eDiv: HTMLDivElement = document.createElement("div");
  eDiv.className = "well card card-block svd-empty-panel";
  eDiv.ondragover = function (e) {
    dragDropHelper.doDragDropOver(e, panel);
  };
  var eSpan: HTMLSpanElement = document.createElement("span");
  eSpan.textContent = survey.getEditorLocString("survey.dropQuestion");
  eDiv.appendChild(eSpan);
  root.appendChild(eDiv);
  return eDiv;
}
