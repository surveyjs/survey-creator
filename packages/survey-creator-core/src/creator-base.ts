import * as Survey from "survey-core";
import {
  Base,
  SurveyModel,
  ListModel,
  Question,
  PanelModel,
  PageModel,
  PopupModel,
  property,
  propertyArray,
  IElement,
  Serializer,
  JsonObjectProperty,
  ActionContainer,
  AdaptiveActionContainer,
  IAction,
  Action,
  IPanel,
  SurveyElement,
  ItemValue,
  QuestionSelectBase,
  QuestionRowModel,
  LocalizableString
} from "survey-core";
import { ISurveyCreatorOptions, settings, ICollectionItemAllowOperations } from "./settings";
import { editorLocalization } from "./editorLocalization";
import { SurveyJSON5 } from "./json5";
import { DragDropSurveyElements, DragDropChoices } from "survey-core";
import { QuestionConverter } from "./questionconverter";
import { SurveyTextWorker } from "./textWorker";
import { QuestionToolbox } from "./toolbox";
import { getNextValue } from "./utils/utils";
import { PropertyGridModel } from "./property-grid";
import { ObjType, SurveyHelper } from "./survey-helper";
import { ICreatorSelectionOwner } from "./selection-owner";
import { SelectionHistory } from "./selection-history";

import { TabEmbedPlugin } from "./components/tabs/embed";
import { TabJsonEditorAcePlugin } from "./components/tabs/json-editor-ace";
import { TabJsonEditorTextareaPlugin } from "./components/tabs/json-editor-textarea";
import { TabTestPlugin } from "./components/tabs/test-plugin";
import { SurveyLogic } from "./components/tabs/logic";
import { TabTranslationPlugin } from "./components/tabs/translation-plugin";
import { TabLogicPlugin } from "./components/tabs/logic-plugin";
import { defaultV2Css } from "survey-core";
import { Notifier } from "./components/notifier";
import { UndoRedoManager } from "./plugins/undo-redo/undo-redo-manager";
import { ignoreUndoRedo, UndoRedoPlugin, undoRedoTransaction } from "./plugins/undo-redo";
import { TabDesignerPlugin } from "./components/tabs/designer-plugin";
import { UndoRedoController } from "./plugins/undo-redo/undo-redo-controller";
import { CreatorResponsivityManager } from "./creator-responsivity-manager";
import { SidebarModel } from "./components/side-bar/side-bar-model";
import { ICreatorOptions } from "./creator-options";

import "./components/creator.scss";
import "./components/string-editor.scss";
import "./creator-theme/creator.scss";

export interface IKeyboardShortcut {
  name?: string;
  hotKey: { ctrlKey?: boolean, keyCode: number };
  macOsHotkey?: { shiftKey?: boolean, keyCode: number };
  execute: (context: any) => void;
}

export interface ICreatorPlugin {
  activate: () => void;
  update?: () => void;
  deactivate?: () => boolean;
  dispose?: () => void;
  model: Base;
}

export interface ICreatorAction extends IAction {
  locTitleName?: string;
  locTooltipName?: string;
  onUpdateTitle?: () => string;
  onUpdateTooltip?: () => string;
}

export class CreatorAction extends Action implements ICreatorAction {
  constructor(item: ICreatorAction) {
    super(item);
    this.updateTitle();
  }
  locTitleName?: string;
  locTooltipName?: string;
  onUpdateTitle?: () => string;
  onUpdateTooltip?: () => string;
  public updateTitle(): void {
    if (!!this.onUpdateTooltip) {
      this.setTooltip(this.onUpdateTooltip());
    } else {
      if (!!this.locTooltipName) {
        this.setTooltip(editorLocalization.getString(this.locTooltipName));
      }
    }
    if (!!this.onUpdateTitle) {
      this.setTitle(this.onUpdateTitle());
    } else {
      if (!!this.locTitleName) {
        this.setTitle(editorLocalization.getString(this.locTitleName));
      }
    }
  }
  private setTitle(newVal: string): void {
    this.title = newVal;
    if (!!this.innerItem) {
      this.innerItem.title = newVal;
    }
  }
  private setTooltip(newVal: string): void {
    this.tooltip = newVal;
    if (!!this.innerItem) {
      this.innerItem.tooltip = newVal;
    }
  }
}

export interface ITabbedMenuItem extends ICreatorAction {
  componentContent: string;
  renderTab?: () => any;
}
export class TabbedMenuItem extends CreatorAction implements ITabbedMenuItem {
  constructor(item: ITabbedMenuItem) {
    super(item);
  }
  componentContent: string;
  renderTab?: () => any;
}
export class TabbedMenuContainer extends AdaptiveActionContainer<TabbedMenuItem> {
  constructor() {
    super();
    this.dotsItemPopupModel.horizontalPosition = "center";
    this.minVisibleItemsCount = 1;
  }
}

export class ToolbarActionContainer extends ActionContainer {
  constructor(private creator: CreatorBase) {
    super();
  }
  protected getRenderedActions(): Array<Action> {
    let actions = this.actions;
    const expandAction = this.creator.sidebar.getExpandAction();
    var index = actions.indexOf(expandAction);
    if (index !== -1) {
      actions.splice(index, 1);
      actions.push(expandAction);
    }
    return actions;
  }
}

export type toolboxLocationType = "left" | "right" | "sidebar";

/**
 * Base class for Survey Creator.
 */
export class CreatorBase extends Base
  implements ISurveyCreatorOptions, ICreatorSelectionOwner {
  /**
   * Specifies whether to display the Designer tab.
   *
   * Default value: `true`
   */
  @property({ defaultValue: true }) showDesignerTab: boolean;
  /**
   * Specifies whether to display the JSON Editor tab.
   *
   * Default value: `true`
   */
  @property({ defaultValue: true }) showJSONEditorTab: boolean;
  /**
   * Obsolete. Please use showPreviewTab property
   * @see showPreviewTab
   */
  @property({ defaultValue: true }) showTestSurveyTab: boolean;
  /**
   * Specifies whether to display the Preview tab.
   *
   * Default value: `true`
   */
  public get showPreviewTab(): boolean { return this.showTestSurveyTab; }
  public set showPreviewTab(val: boolean) { this.showTestSurveyTab = val; }
  /**
   * Specifies whether to display the Embed Survey tab.
   *
   * Default value: `false`
   */
  @property({ defaultValue: false }) showEmbeddedSurveyTab: boolean;
  /**
   * Specifies whether to display the Translation tab.
   *
   * Default value: `false`
   */
  @property({ defaultValue: false }) showTranslationTab: boolean;
  /**
   * Specifies whether to display the Logic tab.
   *
   * Default value: `false`
   */
  @property({ defaultValue: false }) showLogicTab: boolean;
  @property({ defaultValue: false }) useTableViewInLogicTab: boolean;
  /**
   * Set delay for page hover
   */
  @property({ defaultValue: 200 }) pageHoverDelay: number;
  /**
   * You need to set this property to true if you want to inplace edit item values instead of texts.
   */
  @property({ defaultValue: false }) inplaceEditForValues: boolean;
  /**
  * Obsolete. Use the [`showSurveyTitle`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#showSurveyTitle) property instead.
  */
  get allowEditSurveyTitle(): boolean {
    return this.getPropertyValue("allowEditSurveyTitle", true);
  }
  set allowEditSurveyTitle(val: boolean) {
    this.setPropertyVisibility("survey", val, "title", "description", "logo", "showTitle", "logoWidth", "logoHeight");
    this.setPropertyValue("allowEditSurveyTitle", val);
    this.designerPropertyGrid && this.designerPropertyGrid.refresh();
  }
  /**
   * Specifies whether users can see and edit the survey title and related survey properties.
   *
   * Default value: `true`
   */
  get showSurveyTitle(): boolean {
    return this.allowEditSurveyTitle;
  }
  set showSurveyTitle(val: boolean) {
    this.allowEditSurveyTitle = val;
  }
  /**
   * Removes the Free Trial bar.
   *
   * Default value: `false`
   *
   * **IMPORTANT**: You can enable this property only if you have a Survey Creator commercial license. It is illegal to enable this property without a license.
   */
  @property({ defaultValue: false }) haveCommercialLicense: boolean;
  public get licenseText(): string {
    return this.getLocString("survey.license");
  }
  /**
   * Specifies whether to call the [saveSurveyFunc](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#saveSurveyFunc) each time survey settings are changed.
   *
   * Default value: `false`
   */
  @property({ defaultValue: false }) isAutoSave: boolean;
  @property() showOptions: boolean;
  @property({ defaultValue: false }) showSearch: boolean;
  @property({ defaultValue: true }) generateValidJSON: boolean;
  @property({ defaultValue: "" }) currentAddQuestionType: string;
  private isRTLValue: boolean = false;
  private alwaySaveTextInPropertyEditorsValue: boolean = false;
  private toolbarValue: ActionContainer;
  private responsivityManager: CreatorResponsivityManager;
  footerToolbar: ActionContainer;

  private pageEditModeValue: "standard" | "single" | "bypage" = "standard";
  /**
   * Set pageEditMode option to "single" to use creator in a single page mode. By default value is "standard".
   * You can set this option in creator constructor only
   */
  public get pageEditMode(): "standard" | "single" | "bypage" {
    return this.pageEditModeValue;
  }
  protected set pageEditMode(val: "standard" | "single" | "bypage") {
    this.pageEditModeValue = val;
    if (this.pageEditModeValue === "single") {
      this.setPropertyVisibility("survey", false, "pages");
      this.setPropertyVisibility("question", false, "page");
      this.setPropertyVisibility("panel", false, "page");
      this.showJSONEditorTab = (this.options.showJSONEditorTab === true);
      Survey.settings.allowShowEmptyTitleInDesignMode = false;
      Survey.settings.allowShowEmptyDescriptionInDesignMode = false;
    }
    if (this.pageEditModeValue === "bypage") {
      this.showPageNavigator = true;
    }
  }

  @property() surveyValue: SurveyModel;

  public get toolbarItems(): Array<Action> {
    return this.toolbarValue.actions;
  }
  public get toolbar(): ActionContainer {
    return this.toolbarValue;
  }
  public dragDropSurveyElements: DragDropSurveyElements;
  public dragDropChoices: DragDropChoices;

  private selectedElementValue: Base;
  private newQuestions: Array<any> = [];
  private newPanels: Array<any> = [];
  private newQuestionChangedNames: {};
  private selectionHistoryControllerValue: SelectionHistory;

  private saveSurveyFuncValue: (
    no: number,
    onSaveCallback: (no: number, isSuccess: boolean) => void
  ) => void;

  @property() viewType: string;

  /**
   * Returns the current show view name. The possible returns values are:
   * "designer", "editor", "test", "embed", "logic" and "translation".
   * @see showDesigner
   * @see showPreview
   * @see showJsonEditor
   * @see showLogicEditor
   * @see showTranslationEditor
   * @see showEmbedEditor
   */
  public get showingViewName(): string {
    return this.activeTab;
  }
  public get isDesignerShowing(): boolean {
    return this.activeTab === "designer";
  }
  public showDesigner() {
    this.activeTab = "designer";
  }

  public get isTestSurveyShowing(): boolean {
    return this.isPreviewShowing;
  }
  /**
   * Return true if Preview tab is currently active
   */
  public get isPreviewShowing(): boolean {
    return this.activeTab === "test";
  }
  public showTestSurvey() {
    this.showPreview();
  }
  /**
   * Show Preview tab
   */
  public showPreview() {
    this.activeTab = "test";
  }

  protected plugins: { [name: string]: ICreatorPlugin } = {};

  public addPluginTab(
    name: string,
    plugin: ICreatorPlugin,
    title?: string,
    componentContent?: string,
    index?: number
  ) {
    const locStrName = !title ? "ed." + name : (title.indexOf("ed.") == 0 ? title : "");
    const tab: TabbedMenuItem = new TabbedMenuItem({
      id: name,
      locTitleName: locStrName,
      title: title,
      componentContent: componentContent ? componentContent : "svc-tab-" + name,
      data: plugin,
      action: () => { this.makeNewViewActive(name); },
      active: this.viewType === name,
      disableHide: this.viewType === name
    });
    if (index >= 0 && index < this.tabs.length) {
      this.tabs.splice(index, 0, tab);
    } else {
      this.tabs.push(tab);
    }
    this.addPlugin(name, plugin);
  }
  public addPlugin(name: string, plugin: ICreatorPlugin) {
    this.plugins[name] = plugin;
  }
  public getPlugin<P extends ICreatorPlugin = ICreatorPlugin>(name: string): P {
    return this.plugins[name] as P;
  }

  /**
   * The event is called on deleting an element (question/panel/page) from the survey. Typically, when a user click the delete from the element menu.
   *- sender the survey creator object that fires the event
   *- options.element an instance of the deleting element
   *- options.elementType the type of the element: 'question', 'panel' or 'page'.
   *- options.allowing set it to false to cancel the element deleting
   */
  public onElementDeleting: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  /**
   * The event is called on setting a readOnly property of the property editor. By default the property.readOnly property is used.
   * You may changed it and make the property editor read only or enabled for a particular object.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object, Survey, Page, Panel or Question
   *- options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
   *- options.readOnly a boolean value. It has value equals to options.readOnly property by default. You may change it.
   *- options.parentObj the parent object. It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is a question (dropdown, radigroup, checkbox, matrices and so on).
   *- options.parentProperty the parent property (Survey.JsonObjectProperty object). It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is choices, columns, rows, triggers and so on.
   */
  public onGetPropertyReadOnly: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  /**
   * The event is fired when the survey creator creates a survey object (Survey.Survey).
   *- sender the survey creator object that fires the event
   *- options.survey the survey object showing in the creator.
   *- options.reason indicates what component of the creator requests the survey. There are several reason types: "designer" - survey for designer survey, "test" - survey for "Preview" tab and "conditionEditor", "defaultValueEditor", "restfulEditor" - surveys for different property editors.
   */
  public onSurveyInstanceCreated: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  /**
   * The event allows to display the custom name for objects: questions, pages and panels. By default the object name is using. You may show object title by setting showObjectTitles property to true.
   * Use this event, if you want custom display name for objects.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object, Survey, Page, Panel or Question
   *- options.reason the name of the UI that requests the object display name.
   *- options.displayName change this property to show your custom display name for the object
   *
   * The list of possible values in options.reason:
   *- "condition" - raised from Condition modal window or on setup condition in a logic tab
   *- "survey-tester" - raised from page selector list in "Preview" tab
   *- "survey-tester-selected" - raised on setting page selector title in "Preview" tab
   *- "survey-translation" - raised from translation tab
   *- "property-grid" - raised from showing object selector for property grid in "Designer" tab.
   *- "property-grid-title" - raised on rendering selected object title in property grid in "Designer" tab.
   * @see showObjectTitles
   */
  public onGetObjectDisplayName: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  /**
   * This event is raised after a user has edited a text value on the design surface. This value may include HTML markup. You can handle the `onHtmlToMarkdown` event to convert the HTML markup to Markdown.
   *
   * The event handler accepts the following arguments:
   *
   * - `sender` - A Survey Creator instance that raised the event.
   * - `options.element` - The instance of a survey element (survey, page, panel, question) that the user configures.
   * - `options.name` - The name of a property whose value has been edited.
   * - `options.html` - HTML content. Pass this field's value to an HTML-to-Markdown converter.
   * - `options.text` - A text string that may contain Markdown. Assign the result of the HTML-to-Markdown conversion to this field.
   */
  public onHtmlToMarkdown: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

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
   *
   * To disable a user interaction, set the correponding `allow...` property to `false`.
   */
  public onElementAllowOperations: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  /**
   * Use this event to add/remove/modify the element (question/panel) menu items.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object which property is edited in the Property Editor.
   *- options.items the list of menu items. It has two required fields: text and onClick: function(obj: Survey.Base) {} and optional name field.
   * @see onElementAllowOperations
   */
  public onDefineElementMenuItems: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called before showing a property in the Properties Grid or in the Question Editor.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object, Survey, Page, Panel or Question
   *- options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
   *- options.canShow a boolean value. It is true by default. Set it false to hide the property from the Properties Grid and in the Question Editor.
   *- options.parentObj the parent object. It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is a question (dropdown, radigroup, checkbox, matrices and so on).
   *- options.parentProperty the parent property (Survey.JsonObjectProperty object). It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is choices, columns, rows, triggers and so on.
   *
   * [Example: Hide a category in the Properties Grid](https://surveyjs.io/Examples/Survey-Creator?id=hidecategoryinpropertiesgrid)
   */
  public onShowingProperty: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * @Deprecated Obsolete, please use onShowingProperty event.
   * The event is called before showing a property in the Property Grid or in Question Editor.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object, Survey, Page, Panel or Question
   *- options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
   *- options.canShow a boolean value. It is true by default. Set it false to hide the property from the Property Grid or in Question Editor
   *- options.parentObj the parent object. It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is a question (dropdown, radigroup, checkbox, matrices and so on).
   *- options.parentProperty the parent property (Survey.JsonObjectProperty object). It is null for non-nested properties. It is not null for itemvalue or column objects. The parent object is choices, columns, rows, triggers and so on.
   */
  public onCanShowProperty: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = this.onShowingProperty;
  /**
   * The event is called after a survey that represents the Property Grid is created and all its questions (property editors) are setup.
   * You can use this event to modify this survey to change the property grid behavior
   *- options.obj the survey object that is currently editing in the property grid
   *- options.survey the property grid survey
   */
  public onPropertyGridSurveyCreated: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
    * The event is called after a property editor (in fact a survey question) has been created and all it's properties have been assign.
    * You can use this event to modify the property editor properties or set event handlers to customize it's behavior
    *- options.obj the survey object that is currently editing in the property grid
    *- options.property the property that the current property editor is editing
    *- options.editor the property editor. In fact it is a survey question. We are using a heavily customizable survey as a property grid in Creator V2. It means that every property editor is a question.
    */
  public onPropertyEditorCreated: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called after a property editor setups its title actions.
   * You can use this event to modify the property editor title actions
   *- options.obj the survey object that is currently editing in the property grid
   *- options.property the property that the current property editor is editing
   *- options.editor the property editor. In fact it is a survey question. We are using a heavily customizable survey as a property grid in Creator V2. It means that every property editor is a question.
   *- options.titleActions the list of title actions.
   */
  public onPropertyEditorUpdateTitleActions: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
    * The event is called before rendering a delete button in the Property Grid or in Question Editor.
    * Obsolete, please use onCollectionItemAllowOperations
    *- sender the survey creator object that fires the event
    *- options.obj the survey Question
    *- options.item the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
    *- options.canDelete a boolean value. It is true by default. Set it false to remove delete button from the Property Grid or in Question Editor
    * @see onCollectionItemAllowOperations
    */
  public onCanDeleteItem: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called on deleting a collection item from the Property Editor. For example: column in columns editor or item in choices and so on.
   * Obsolete, please use onCollectionItemAllowOperations
   *- sender the survey creator object that fires the event
   *- options.obj the survey object: Question, Panel, Page or Survey
   *- options.property the collection property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
   *- options.propertyName the collection property name
   *- options.collection the editing collection where deleting item is located. It is can be columns in the matrices or choices in dropdown question and so on.
   *- options.item the collection item that we are going to delete
   *- options.allowDelete a boolean value. It is true by default. Set it false to abondome the element removing from the collection
   * @see onCollectionItemAllowOperations
   */
  public onCollectionItemDeleting: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called before rendering a collection item from the Property Editor. For example: column in columns editor or item in choices and so on.
   * You can make detail/edit and remove buttons invsible and/or disable editing.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object: Question, Panel, Page or Survey
   *- options.property the collection property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
   *- options.propertyName the collection property name
   *- options.collection the editing collection where deleting item is located. It is can be columns in the matrices or choices in dropdown question and so on.
   *- options.item the collection item that we are going to delete
   *- options.allowDelete a boolean value. It is true by default. Set it false to abondome the element removing from the collection
   *- options.allowEdit a boolean value. It is true by default. Set it false to disable editing.
   */
  public onCollectionItemAllowOperations: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
    * The event is called on adding a new Survey.ItemValue object. It uses as an element in choices array in Radiogroup, checkbox and dropdown questions or Matrix columns and rows properties.
    * Use this event, to set ItemValue.value and ItemValue.text properties by default or set a value to the custom property.
    *- sender the survey creator object that fires the event
    *- options.obj the object that contains the itemsValues array, for example selector, rating and single choice matrix questions.
    *- options.propertyName  the object property Name. It can be "choices" for selector questions or rateValues for rating question or columns/rows for single choice matrix.
    *- options.newItem a new created Survey.ItemValue object.
    *- options.itemValues an editing Survey.ItemValue array. newItem object is not added yet into this array.
    */
  public onItemValueAdded: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called when a user adds a new column into MatrixDropdown or MatrixDynamic questions. Use it to set some properties of Survey.MatrixDropdownColumn by default, for example name or a custom property.
   *- sender the survey creator object that fires the event
   *- options.matrix a matrix question where column is located, matrix.columns.
   *- options.newColumn a new created Survey.MatrixDropdownColumn object.
   *- options.columns editable columns objects. They can be different from options.matrix.columns. options.columns and options.matrix.columns are equal after user press Apply or Cancel and options.columns will be set to options.matrix.columns or reset to initial state.
   */
  public onMatrixColumnAdded: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * Use this event to control Property Editors UI.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object which property is edited in the Property Editor.
   *- options.propertyName  the name of the edited property.
   *- options.editorOptions  options that can be changed.
   *- options.editorOptions.allowAddRemoveItems a boolean property, true by default. Set it false to disable add/remove items in array properties. For example 'choices', 'columns', 'rows'.
   *- options.editorOptions.allowRemoveAllItems a boolean property, true by default. Set it false to disable remove all items in array properties. For example 'choices', 'columns', 'rows'.
   *- options.editorOptions.showTextView a boolean property, true by default. Set it false to disable "Manual Entry" tab for "choices" property.
   *- options.editorOptions.itemsEntryType a string property, 'form' by default. Set it 'fast' to show "Manual Entry" tab for "choices" property by default.
   */
  public onSetPropertyEditorOptions: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called on generation a new name for a new created element.
   *- sender the survey creator object that fires the event
   *- options.element a new created survey element. It can be question, panel or page
   *- options.name a new suggested name, that is unique for the current survey. You can suggest your own name. If it is unique, creator will assign it to the element.
   *- options.isUnique a boolean property, set this property to false, if you want to ask Creator to generate another name
   */
  public onGenerateNewName: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * Use this event to show a custom error in the Question Editor on pressing Apply or OK buttons, if the values are not set correctly. The error will be displayed under the property editor.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object which property is edited in the Property Editor.
   *- options.propertyName  the name of the edited property.
   *- options.value the property value.
   *- options.error the error you want to display. Set the empty string (the default value) or null if there is no errors.
   * @see onPropertyValueChanging
   */
  public onPropertyValidationCustomError: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * An event that is raised each time a user edits a survey object property.
   * Use this event to correct or validate the property value while the user enters it.
   *
   * The event handler accepts the following arguments:
   *
   * - `sender`- A Survey Creator instance that raised the event.
   * - `options.obj` - A survey object instance (question or panel) whose property is being edited.
   * - `options.propertyName` - The name of the property.
   * - `options.value` - A property value entered by a user.
   * - `options.newValue` - A corrected property value. Specify this field if you want to override the `options.value`.
   * - `options.doValidation` - Enable this field to validate the property value while the user enters it.
   * @see onPropertyValidationCustomError
   * @see onSurveyPropertyValueChanged
   */
  public onPropertyValueChanging: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * An event that is raised after a property in a survey object has changed.
   *
   * - `sender`- A Survey Creator instance that raised the event.
   * - `options.obj` - A survey object instance (question or panel) whose property has changed.
   * - `options.propertyName` - The name of the property.
   * - `options.value` - A new property value.
   * @see onPropertyValidationCustomError
   * @see onPropertyValueChanging
   */
  public onSurveyPropertyValueChanged: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
    * Use this event to modify the list (name and titles) of the questions available in a condition editor.
    *- sender the survey creator object that fires the event
    *- options.obj the survey object which property is edited in the Property Editor.
    *- options.propertyName  the name of the edited property.
    *- options.editor the instance of Property Editor.
    *- options.list the list of the questions available for condition
    */
  public onConditionQuestionsGetList: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * Use this event to modify the title in a condition editor. The title is changing during editing. In case of empty or incorrect expression it tells that expression is incorrect
   *- sender the survey creator object that fires the event.
   *- options.expression the current expression. If the expression is empty or incorrect then the value is empty.
   *- options.title the default value of the title. You can change the default value.
   */
  public onConditionGetTitle: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called when a survey is changed in the designer. A new page/question/page is added or existing is removed, a property is changed and so on.
   *- sender the survey creator object that fires the event
   * options object contains the information about certain modifications
   *- options.type contains string constant describing certain modification
   * Available values:
   *
   *- options.type: "ADDED_FROM_TOOLBOX"
   *- options.question: newly added question
   *
   *- options.type: "PAGE_ADDED"
   *- options.newValue: newly created page
   *
   *- options.type: "PAGE_MOVED"
   *- options.page: page has been moved
   *- options.indexFrom: pevious index
   *- options.indexTo: new index
   *
   *- options.type: "QUESTION_CONVERTED"
   *- options.className: the converted class name
   *- options.oldValue: pevious object
   *- options.newValue: the new object, converted from oldVale to the given class name
   *
   *- options.type: "QUESTION_CHANGED_BY_EDITOR"
   *- options.question: question has been edited in the popup question editor
   *
   *- options.type: "PROPERTY_CHANGED"
   *- options.name: the name of the property has been changed
   *- options.target: the object containing the changed property
   *- options.oldValue: the previous value of the changed property
   *- options.newValue: the new value of the changed property
   *
   *- options.type: "OBJECT_DELETED"
   *- options.target: deleted object
   *
   *- options.type: "VIEW_TYPE_CHANGED"
   *- options.newType: new type of the creator view: editor or designer
   *
   *- options.type: "DO_DROP"
   *- options.page: the page of the drap/drop operation
   *- options.source: the source dragged object
   *- options.target: the drop target
   *- options.newElement: a new element. It is defined if a user drops question or panel from the toolbox
   *
   *- options.type: "TRANSLATIONS_CHANGED"
   *- options.type: "JSON_EDITOR"
   */
  public onModified: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called on adding a new question into the survey. Typically, when a user dropped a Question from the Question Toolbox into designer Survey area.
   *- sender the survey creator object that fires the event
   *- options.question a new added survey question. Survey.Question object
   *- options.page the survey Page object where question has been added.
   */
  public onQuestionAdded: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called on adding a new panel into the survey.  Typically, when a user dropped a Panel from the Question Toolbox into designer Survey area.
   *- sender the survey creator object that fires the event
   *- options.panel a new added survey panel. Survey.Panel object
   *- options.page the survey Page object where question has been added.
   */
  public onPanelAdded: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called on adding a new page into the survey.
   *- sender the survey creator object that fires the event
   *- options.page the new survey Page object.
   */
  public onPageAdded: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is fired when the survey creator is initialized and a survey object (Survey.Survey) is created.
   *- sender the survey creator object that fires the event
   *- options.survey  the survey object showing in the creator.
   */
  public onDesignerSurveyCreated: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is fired when the survey creator creates survey in Preview tab for testing.
   *- sender the survey creator object that fires the event
   *- options.survey  the survey object showing in the "Preview" tab.
   */
  public onPreviewSurveyCreated: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
    * Obsolete. Please use onPreviewSurveyCreated event.
    * @see onPreviewSurveyCreated
    */
  public onTestSurveyCreated: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = this.onPreviewSurveyCreated;
  /**
   * The event is called in case of UI notifications. By default all notifications are done via built-in alert () function.
   * In case of any subscriptions to this event all notifications will be redirected into the event handler.
   *- options.message is a message to show.
   */
  public onNotify: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called on changing the selected element. You may change the new selected element by changing the property options.newSelectedElement to your own
   *- options.newSelectedElement the element that is going to be selected in the survey desiger: question, panel, page or survey.
   */
  public onSelectedElementChanging: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called after the selected element is changed.
   *- options.newSelectedElement the new selected element in the survey desiger: question, panel, page or survey.
   */
  public onSelectedElementChanged: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is fired then one need to choose files.
   *- sender the survey creator object that fires the event
   * input file input HTML element
   * callback need to be called after files has been chosen
   * @see uploadFile
   */
  public onOpenFileChooser: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is fired on uploading the files.
   *- sender the survey creator object that fires the event
   * There are two properties in options:
   * files the Javascript File objects array
   * callback called on upload complete,
   * which takes two string arguments:
   * a status and an image link
   * @see uploadFile
   */
  public onUploadFile: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
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
  public onTranslationStringVisibility: Survey.Event<(sender: CreatorBase, options: any) => any, any> = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * Use this event to define is the locale initially selected (default value) and ready for translaion or it is unselected.
   *
   * The event handler accepts the following arguments:
   *
   * - `sender` - A Survey Creator instance that raised the event.
   * - `options.locale` - the locale name, like 'en', 'de' and so on.
   * - `options.isSelected` - it is true by default. Set it to false to make the translation unselected.
   */
  public onTranslationLocaleInitiallySelected: Survey.Event<(sender: CreatorBase, options: any) => any, any> = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * Use this event to modify the imported localizable text. To block importing a particular localization text, set the options.text into undefined.
   *
   * The event handler accepts the following arguments:
   *
   * - `sender` - A Survey Creator instance that raised the event.
   * - `options.locale` - the locale name, like 'en', 'de' and so on.
   * - `options.name` - The full name of the localizable string, it can be: "survey.page1.question2.title"
   * - `options.text` - The imported text for the locale for this item. Set it to undefined or empty string to block importing for this item
   */
  public onTranslationImportItem: Survey.Event<(sender: CreatorBase, options: any) => any, any> = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
  * The method is called when the translation from csv file is imported.
  * @see translation
  * @see showTranslationTab
  */
  public onTranslationImported: Survey.Event<(sender: CreatorBase, options: any) => any, any> = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  /**
   * Use this event to control drag&drop operations.
   *- sender the survey creator object that fires the event.
   *- options.survey the editing survey object.
   *- options.allow set it to false to disable dragging.
   *- options.target a target element that is dragging.
   *- options.source a source element. It can be null, if it is a new element, dragging from toolbox.
   *- options.parent a page or panel where target element is dragging.
   *- options.insertBefore an element before the target element is dragging. It can be null if parent container (page or panel) is empty or dragging an element under the last element of the container.
   *- options.insertAfter an element after the target element is dragging. It can be null if parent container (page or panel) is empty or dragging element to the top of the parent container.
   */
  public onDragDropAllow: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  /**
   * Use this event to override/disable element adorners - wrapping component name.
   *- sender the survey creator object that fires the event.
   *- options.element a survey object to be wrapped.
   *- options.reason why we need to wrap an element.
   *- options.conponentName component wrapper name.
   */
  public onGetElementWrapperComponentName: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  /**
   * Use this event to override/disable element adorners - wrapping component data.
   *- sender the survey creator object that fires the event.
   *- options.element a survey object to be wrapped.
   *- options.reason why we need to wrap an element.
   *- options.conponentData component wrapper data.
   */
  public onGetElementWrapperComponentData: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  /**
   * This callback is used internally for providing survey JSON text.
   */
  public getSurveyJSONTextCallback: () => { text: string, isModified: boolean };
  /**
   * This callback is used internally for setting survey JSON text.
   */
  public setSurveyJSONTextCallback: (text: string) => void;

  // /**
  //  * You need to set this property to true if you want to use tabs instead of accordion in the popup element's editor.
  //  */
  // public useTabsInElementEditor = false;

  /**
   * Limits the number of items in a logical expression.
   *
   * Default value: -1 (unlimited)
   */
  public maxLogicItemsInCondition: number = -1;

  /**
   * Specifies whether UI elements display survey, page, and question titles instead of their names.
   *
   * Default value: `false`
   *
   * @see onGetObjectDisplayName
   */
  public showObjectTitles = false;

  /**
   * Specifies whether to display question titles instead of names when users edit logical expressions.
   *
   * Default value: `false`
   */
  public showTitlesInExpressions = false;
  /**
   * Specifies whether users can edit expressions in the Logic tab as plain text.
   *
   * If you set this property to `false`, users can only use UI elements to edit logical expressions.
   *
   * Default value: `true`
   *
   * @see showLogicTab
   */
  public allowEditExpressionsInTextEditor = true;

  /**
   * Limits the number of columns that users can add to [Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel), [Matrix Dynamic](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel), and [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumColumnsCount`)
   */
  public maximumColumnsCount: number =
    settings.propertyGrid.maximumColumnsCount;
  /**
   * Limits the number of choices that users can add to [Checkbox](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radiogroup](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumChoicesCount`)
   */
  public maximumChoicesCount: number =
    settings.propertyGrid.maximumChoicesCount;
  /**
   * Limits the number of rows that users can add to [Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel) and [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumRowsCount`)
   */
  public maximumRowsCount: number = settings.propertyGrid.maximumRowsCount;
  /**
   * Limits the number of rate value that users can add to [Rating](https://surveyjs.io/Documentation/Library?id=questionratingmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumRateValues`)
   */
  public maximumRateValues: number = settings.propertyGrid.maximumRateValues;
  /**
   * Obsolete. Use the [`showPagesInPreviewTab`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#showPagesInPreviewTab) property instead.
   */
  public showPagesInTestSurveyTab = true;
  /**
   * Specifies whether to show the page selector at the bottom of the Preview tab.
   *
   * Default value: `true`
   */
  public get showPagesInPreviewTab(): boolean { return this.showPagesInTestSurveyTab; }
  public set showPagesInPreviewTab(val: boolean) { this.showPagesInTestSurveyTab = val; }

  /**
   * Obsolete. Use the [`showSimulatorInPreviewTab`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#showSimulatorInPreviewTab) property instead.
   */
  public showSimulatorInTestSurveyTab = true;
  /**
   * Specifies whether the Preview tab displays the Device button that allows users to preview the survey on different device types.
   *
   * Default value: `true`
   */
  public get showSimulatorInPreviewTab(): boolean { return this.showSimulatorInTestSurveyTab; }
  public set showSimulatorInPreviewTab(val: boolean) { this.showSimulatorInTestSurveyTab = val; }

  /**
   * A [UI theme](https://surveyjs.io/Documentation/Library?id=get-started-react#configure-styles) used to display the survey in the Preview tab.
   *
   * Accepted values: `"modern"`, `"default"`, `"defaultV2"`
   *
   * Default value: `"defaultV2"`
   */
  public themeForPreview: string = "defaultV2";

  /**
   * Specifies whether users can add, edit, and delete survey pages.
   *
   * Default value: `true`
   */
  public allowModifyPages = true;

  /**
   * Obsolete. Use the [`showDefaultLanguageInPreviewTab`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#showDefaultLanguageInPreviewTab) property instead.
   */
  public showDefaultLanguageInTestSurveyTab: boolean | string = "auto";
  /**
   * Specifies whether the Preview tab displays the language selector.
   *
   * Accepted values:
   *
   * - `"auto"` (default)
   * Display the language selector only if the survey is translated to more than one language.
   *
   * - `true`
   * Always display the language selector regardless of how many languages are used in the survey.
   *
   * - `false`
   * Never display the language selector.
   *
   * - `"all"`
   * Always display the language selector with [all supported languages](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization).
   *
   * **See also**: [Localization & Globalization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
   */
  public get showDefaultLanguageInPreviewTab(): boolean | string { return this.showDefaultLanguageInTestSurveyTab; }
  public set showDefaultLanguageInPreviewTab(val: boolean | string) { this.showDefaultLanguageInTestSurveyTab = val; }

  /**
   * Obsolete. Use the [`showInvisibleElementsInPreviewTab`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#showInvisibleElementsInPreviewTab) property instead.
   */
  public showInvisibleElementsInTestSurveyTab = true;
  /**
   * Specifies whether the Preview tab displays a checkbox that allows users to show or hide invisible survey elements.
   *
   * Default value: `true`
   */
  public get showInvisibleElementsInPreviewTab(): boolean { return this.showInvisibleElementsInTestSurveyTab; }
  public set showInvisibleElementsInPreviewTab(val: boolean) { this.showInvisibleElementsInTestSurveyTab = val; }

  /**
   * Set this property to true if you want to show "page selector" in the toolabar instead of "pages editor"
   */
  public showPageSelectorInToolbar = false;

  /**
   * Specifies whether users can switch between UI themes in the Preview tab.
   *
   * Default value: `true`
   *
   * [View the "Switch Between Themes" demo](https://surveyjs.io/Examples/Creator?id=theme-switcher)
   */
  public allowChangeThemeInPreview = true;

  public tabbedMenu: AdaptiveActionContainer<TabbedMenuItem> = new TabbedMenuContainer();

  get tabs() {
    return this.tabbedMenu.actions;
  }
  set tabs(val: Array<TabbedMenuItem>) {
    this.tabbedMenu.actions = val;
  }
  /**
   * Returns the localized string by its id
   * @param str the string id.
   */
  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  /**
   * Specifies whether to show an error message if a survey is not saved in the database.
   *
   * Default value: `true`
   */
  public showErrorOnFailedSave: boolean = true;

  protected onSetReadOnly(newVal: boolean) { }

  /**
   * Gets or sets the survey locale. The default value it is empty, this means the 'en' locale is used.
   * You can set it to 'de' - German, 'fr' - French and so on.
   */
  public get locale(): string {
    return editorLocalization.currentLocale;
  }
  public set locale(value: string) {
    if (editorLocalization.currentLocale === value) return;
    editorLocalization.currentLocale = value;
    this.toolbox.updateTitles();
    this.refreshPlugin();
    const selEl = this.selectedElement;
    if (!!selEl) {
      this.selectElement(null);
      this.selectElement(selEl);
    }
    this.locStrsChanged();
    this.tabs.forEach(item => (<TabbedMenuItem>item).updateTitle());
    this.updateActionsLocale(this.toolbar.actions);
  }
  private updateActionsLocale(actions: Array<Action>): void {
    if(!Array.isArray(actions)) return;
    actions.forEach(item => {
      if (!!(<any>item).updateTitle) {
        (<any>item).updateTitle();
      }
      if(!!item.popupModel && !!item.popupModel.contentComponentData && !!item.popupModel.contentComponentData.model) {
        const model = item.popupModel.contentComponentData.model;
        this.updateActionsLocale(model.actions);
      }
    });
  }
  private refreshPlugin() {
    const plugin = this.currentPlugin;
    if (!!plugin) {
      if (plugin.deactivate) {
        plugin.deactivate();
      }
      const viewType = this.viewType;
      this.viewType = "";
      plugin.activate();
      this.viewType = viewType;
    }
  }
  /**
   * Enables the read-only mode. If you set this property to `true`, users cannot change the initial survey configuration.
   *
   * Default value: `false`
   */
  public get readOnly() {
    return this.getPropertyValue("readOnly", false);
    //return this.koReadOnly();
  }
  public set readOnly(newVal: boolean) {
    const text = this.text;
    this.setPropertyValue("readOnly", newVal);
    this.onSetReadOnly(newVal);
    this.text = text;
  }

  /**
   * Specifies whether to enable support for right-to-left languages.
   *
   * Default value: `false`
   */
  public get isRTL() {
    return this.isRTLValue;
  }
  public set isRTL(value: boolean) {
    this.isRTLValue = value;
  }
  /**
   * The event is called when creator is going to change the active tab.
   *- sender the survey creator object that fires the event
   *- options.tabName the name of new active tab
   */
  public onActiveTabChanging: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  /**
   * The event is called when creator active tab is changed.
   *- sender the survey creator object that fires the event
   *- options.tabName the name of new active tab
   */
  public onActiveTabChanged: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * Get/set the active tab.
   * The following values are available: "designer", "editor", "test", "embed", "logic" and "translation".
   * Please note, not all tabs are visible.
   */
  public get activeTab(): string {
    return this.viewType;
  }
  public set activeTab(val: string) {
    this.makeNewViewActive(val);
  }
  /**
   * Change the active view/tab. It will return false if it can't change the current tab.
   * @param viewName name of new active view (tab). The following values are available: "designer", "editor", "test", "embed", "logic" and "translation".
   */
  public makeNewViewActive(viewName: string): boolean {
    if (viewName == this.viewType) return false;
    const chaningOptions = { tabName: viewName, allow: true };
    this.onActiveTabChanging.fire(this, chaningOptions);
    if (!chaningOptions.allow) return;
    if (!this.canSwitchViewType()) return false;
    const plugin = this.activatePlugin(viewName);
    this.viewType = viewName;
    this.onActiveTabChanged.fire(this, { tabName: viewName, plugin: plugin, model: !!plugin ? plugin.model : undefined });
    return true;
  }
  private canSwitchViewType(): boolean {
    const plugin: ICreatorPlugin = this.currentPlugin;
    return !plugin || !plugin.deactivate || plugin.deactivate();
  }
  private activatePlugin(newType: string): ICreatorPlugin {
    const plugin: ICreatorPlugin = this.getPlugin(newType);
    if (!!plugin) {
      plugin.activate();
    }
    return plugin;
  }
  private get currentPlugin(): ICreatorPlugin {
    return this.getPlugin(this.activeTab);
  }

  public toolbox: QuestionToolbox;
  public get toolboxCategories(): Array<any> {
    return this.toolbox.categories;
  }
  public sidebar: SidebarModel;

  constructor(protected options: ICreatorOptions, options2?: ICreatorOptions) {
    super();
    if (
      !!options2 ||
      typeof this.options === "string" ||
      this.options instanceof String
    ) {
      this.options = !!options2 ? options2 : {};
      SurveyHelper.warnText("Creator constructor has one parameter, as creator options, in V2.");
    }
    this.toolbarValue = new ToolbarActionContainer(this);
    this.selectionHistoryControllerValue = new SelectionHistory(this);
    this.sidebar = new SidebarModel(this);
    this.setOptions(this.options);
    this.patchMetadata();
    this.initSurveyWithJSON({}, false);
    this.toolbox = new QuestionToolbox(this.options && this.options.questionTypes ? this.options.questionTypes : null, this);
    this.updateToolboxIsCompact();
    this.initTabs();
    this.initDragDrop();
    const expandAction = this.sidebar.getExpandAction();
    !!expandAction && this.toolbar.actions.push(expandAction);
  }
  public updateToolboxIsCompact(newVal?: boolean) {
    if (!this.toolbox) return;
    const hasValue = newVal != undefined && newVal != null;
    if (this.toolbox.forceCompact !== undefined) {
      this.toolbox.isCompact = this.toolbox.forceCompact;
    } else if (this.toolboxLocation == "right") {
      this.toolbox.isCompact = this.showSidebar || (hasValue && newVal);
    } else if (hasValue) {
      this.toolbox.isCompact = newVal;
    }
  }

  @property({ defaultValue: true }) showToolboxValue: boolean;
  public get showToolbox() {
    return this.showToolboxValue;
  }
  public set showToolbox(val: boolean) {
    if (<any>val !== true && <any>val !== false) {
      SurveyHelper.warnText("showToolbox is a boolean property now.");
    }
    if (<any>val === "none" || val === false || <any>val === "top") {
      this.showToolboxValue = false;
    } else if (val === true) {
      this.showToolboxValue = true;
    } else {
      this.toolboxLocation = val;
      this.showToolboxValue = true;
    }
  }
  private showSidebarValue: boolean = true;
  public onShowSidebarVisibilityChanged: Survey.Event<(sender: CreatorBase, options: any) => any, any> = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * Set this this property grid false to hide the property grid.
   */
  public get showSidebar(): boolean {
    return this.showSidebarValue;
  }
  public set showSidebar(val: boolean) {
    if (<any>val !== true && <any>val !== false) {
      SurveyHelper.warnText("showSidebar is a boolean property now.");
      return;
    }
    if (this.showSidebar === val) return;
    this.setShowSidebar(val, true);
    if (!this.onShowPropertyGridVisiblityChanged.isEmpty) {
      SurveyHelper.warnNonSupported("onShowPropertyGridVisiblityChanged", "onShowSidebarVisibilityChanged");
      this.onShowPropertyGridVisiblityChanged.fire(this, { show: val });
    }
  }
  public setShowSidebar(value: boolean, isManualMode = false) {
    this.showSidebarValue = value;
    if (isManualMode) {
      if (value) {
        this.sidebar.expandedManually = true;
      } else {
        this.sidebar.collapsedManually = true;
      }
    }
    this.updateToolboxIsCompact();
    this.onShowSidebarVisibilityChanged.fire(this, { show: value });
  }
  //#region Obsolete properties and functins
  public onShowPropertyGridVisiblityChanged: Survey.Event<(sender: CreatorBase, options: any) => any, any> = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  public get showPropertyGrid(): boolean {
    SurveyHelper.warnNonSupported("showPropertyGrid", "showSidebar");
    return this.showSidebar;
  }
  public set showPropertyGrid(val: boolean) {
    SurveyHelper.warnNonSupported("showPropertyGrid", "showSidebar");
    if (<any>val !== true && <any>val !== false) {
      SurveyHelper.warnText("showSidebar is a boolean property.");
      return;
    }
    this.showSidebar = val;
  }
  public rightContainerActiveItem(name: string) {
    SurveyHelper.warnNonSupported("rightContainerActiveItem");
  }
  public leftContainerActiveItem(name: string) {
    SurveyHelper.warnNonSupported("leftContainerActiveItem");
  }
  //#endregion Obsolete properties and functins

  //#region Undo/Redo
  /**
   * The event is called before undo happens.
   *- options.canUndo a boolean value. It is true by default. Set it false to hide prevent undo operation.
   */
  public onBeforeUndo: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called before redo happens.
   *- options.canRedo a boolean value. It is true by default. Set it false to hide prevent redo operation.
   */
  public onBeforeRedo: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called after undo happens.
   *- options.state is an undo/redo item.
   */
  public onAfterUndo: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();
  /**
   * The event is called after redo happens.
   *- options.state is an undo/redo item.
   */
  public onAfterRedo: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  public get undoRedoManager(): UndoRedoManager {
    const plugin = this.getPlugin<UndoRedoPlugin>("undoredo");
    return plugin && plugin.model.undoRedoManager;
  }
  public get undoRedoController(): UndoRedoController {
    const plugin = this.getPlugin<UndoRedoPlugin>("undoredo");
    return plugin && plugin.model;
  }
  /**
   * This method starts undo/redo transaction: all changes will be stored as one undo/redo item.
   */
  startUndoRedoTransaction(name: string = "") {
    this.undoRedoController && this.undoRedoController.startTransaction(name);
  }
  /**
   * This method stops undo/redo transaction.
   */
  stopUndoRedoTransaction() {
    this.undoRedoController && this.undoRedoController.stopTransaction();
  }
  /**
   * Returns true if Creator is currently doing undo or redo opertaions
   */
  public get isProcessingUndoRedo(): boolean {
    return this.undoRedoManager && this.undoRedoManager.isProcessingUndoRedo;
  }
  /**
   * This method performs undo uperation if possible.
   */
  public undo() {
    this.undoRedoController && this.undoRedoController.undo();
  }
  /**
   * This method performs redo uperation if possible.
   */
  public redo() {
    this.undoRedoController && this.undoRedoController.redo();
  }
  //#endregion Undo/Redo

  public get selectionHistoryController(): SelectionHistory {
    return this.selectionHistoryControllerValue;
  }

  public get currentPage(): PageModel {
    return this.survey.currentPage;
  }
  public set currentPage(value: PageModel) {
    this.survey.currentPage = value;
  }
  @undoRedoTransaction()
  public addPage(pagetoAdd?: PageModel): PageModel {
    let page = pagetoAdd;
    if (!page) {
      const name: string = SurveyHelper.getNewPageName(this.survey.pages);
      page = this.survey.addNewPage(name);
    } else {
      this.survey.addPage(page);
    }
    this.selectElement(page);
    return page;
  }
  protected initTabs() {
    this.initPlugins();
    this.initFooterToolbar();
    if (this.tabs.length > 0) {
      this.makeNewViewActive(this.tabs[0].id);
    }
  }
  private initPlugins(): void {
    this.addPlugin("undoredo", new UndoRedoPlugin(this));
    if (this.showDesignerTab) {
      new TabDesignerPlugin(this);
    }
    if (this.showPreviewTab) {
      new TabTestPlugin(this);
    }
    if (this.showLogicTab) {
      new TabLogicPlugin(this);
    }
    if (this.showJSONEditorTab) {
      if (TabJsonEditorAcePlugin.hasAceEditor()) {
        new TabJsonEditorAcePlugin(this);
      } else {
        new TabJsonEditorTextareaPlugin(this);
      }
    }
    if (this.showEmbeddedSurveyTab) {
      new TabEmbedPlugin(this);
    }
    if (this.showTranslationTab) {
      new TabTranslationPlugin(this);
    }
  }
  private initFooterToolbar(): void {
    if (!this.footerToolbar) {
      this.footerToolbar = new ActionContainer();
      ["undoredo", "designer", "test"].forEach((pluginKey: string) => {
        const plugin = this.getPlugin(pluginKey);
        if (!!plugin && !!plugin["addFooterActions"]) {
          plugin["addFooterActions"]();
        }
      });
    }
  }
  public getOptions(): ICreatorOptions {
    return this.options || {};
  }
  protected setOptions(options: ICreatorOptions): void {
    if (!options) options = {};
    const obsoleteOptions = {};
    obsoleteOptions["showTestSurveyTab"] = "showPreviewTab";
    obsoleteOptions["showDefaultLanguageInTestSurveyTab"] = "showDefaultLanguageInPreviewTab";
    obsoleteOptions["showInvisibleElementsInPreviewTab"] = "showInvisibleElementsInTestSurveyTab";
    for (let key in obsoleteOptions) {
      if (options[key] === undefined) continue;
      const newKey = obsoleteOptions[key];
      if (options[newKey] === undefined) {
        options[newKey] = options[key];
        delete options[key];
      }
    }
    this.options = options;
    for (let key in options) {
      this[key] = options[key];
    }
  }
  private setPropertyPlaceHolder(className: string, propertyName: string, value: string) {
    const prop: any = Serializer.findProperty(className, propertyName);
    if (!!prop) {
      prop.placeholder = value;
    }
  }
  private setPropertyVisibility(className: string, visible: boolean, ...properties: string[]) {
    if (!Array.isArray(properties)) return;
    for (var i = 0; i < properties.length; i++) {
      const prop = Serializer.findProperty(className, properties[i]);
      if (!!prop) {
        prop.visible = visible;
      }
    }
  }
  private patchMetadata(): void {
    this.setPropertyPlaceHolder("survey", "title", "pe.surveyTitlePlaceholder");
    this.setPropertyPlaceHolder("survey", "description", "pe.surveyDescriptionPlaceholder");
    this.setPropertyVisibility("survey", false, "logoPosition");
    if (this.pageEditMode !== "single") {
      this.setPropertyPlaceHolder("page", "title", "pe.pageTitlePlaceholder");
      this.setPropertyPlaceHolder("page", "description", "pe.pageDescriptionPlaceholder");
    }
  }

  isCanModifyProperty(obj: Base, propertyName: string): boolean {
    const property: JsonObjectProperty = Serializer.findProperty(
      obj.getType(),
      propertyName
    );
    let parentObj, parentProperty: JsonObjectProperty;
    if (obj instanceof ItemValue) {
      parentObj = obj.locOwner;
      parentProperty = Survey.Serializer.findProperty(
        parentObj.getType(),
        obj.ownerPropertyName
      );

      const allowQuestionOperations = this.getElementAllowOperations(parentObj);
      if (allowQuestionOperations.allowEdit === false)
        return false;

      const options: ICollectionItemAllowOperations = { allowDelete: true, allowEdit: true };
      this.onCollectionItemAllowingCallback(parentObj,
        property,
        parentObj.getPropertyValue(parentProperty.name),
        obj,
        options
      );
      if (options.allowEdit === false) {
        return false;
      }

      if (this.onIsPropertyReadOnlyCallback(
        parentObj,
        parentProperty,
        parentProperty.readOnly,
        null,
        null
      )) {
        return false;
      }
    }
    if (obj instanceof SurveyElement) {
      const allowElementOperations = this.getElementAllowOperations(obj);
      if (allowElementOperations.allowEdit === false)
        return false;
    }
    return (
      !property ||
      !this.onIsPropertyReadOnlyCallback(
        obj,
        property,
        property.readOnly,
        parentObj,
        parentProperty
      )
    );
  }

  onIsPropertyReadOnlyCallback(
    obj: Base,
    property: JsonObjectProperty,
    readOnly: boolean,
    parentObj: Base,
    parentProperty: JsonObjectProperty
  ): boolean {
    const proposedValue = this.readOnly || readOnly;
    if (this.onGetPropertyReadOnly.isEmpty) return proposedValue;
    const options = {
      obj: obj,
      property: property,
      readOnly: proposedValue,
      propertyName: property.name,
      parentObj: parentObj,
      parentProperty: parentProperty
    };
    this.onGetPropertyReadOnly.fire(this, options);
    return options.readOnly;
  }

  /**
   * The editing survey object (Survey.Survey)
   */
  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  private existingPages: {};
  protected initSurveyWithJSON(json: any, clearState: boolean) {
    // currentPlugin.deactivate && currentPlugin.deactivate();
    this.existingPages = {};
    const survey = this.createSurvey({});
    survey.css = defaultV2Css;
    survey.setDesignMode(true);
    survey.lazyRendering = true;
    survey.setJsonObject(json);
    survey.logoPosition = "right";
    if (survey.isEmpty) {
      survey.setJsonObject(this.getDefaultSurveyJson());
    }
    survey.pages.forEach((page: PageModel) => {
      this.existingPages[page.id] = true;
    });
    this.onDesignerSurveyCreated.fire(this, { survey: survey });
    survey.onQuestionAdded.add((sender: SurveyModel, options) => {
      this.doOnQuestionAdded(options.question, options.parentPanel);
    });
    survey.onPanelAdded.add((sender: SurveyModel, options) => {
      this.doOnPanelAdded(options.panel, options.parentPanel);
    });
    survey.onPageAdded.add((sender: SurveyModel, options) => {
      if (!!this.existingPages[options.page.id]) return;
      this.existingPages[options.page.id] = true;
      this.doOnPageAdded(options.page);
    });
    survey.onDragDropAllow.add((sender, options) => {
      options.survey = sender;
      this.onDragDropAllow.fire(this, options);
    });

    this.setSurvey(survey);
    const currentPlugin = this.getPlugin(this.activeTab);
    if (!!currentPlugin && !!currentPlugin.update) {
      currentPlugin.update();
    }
  }

  protected initDragDrop() {
    this.initDragDropSurveyElements();
    this.initDragDropChoices();
  }
  public onBeforeDrop: Survey.Event<() => any, any> = new Survey.Event<() => any, any>();
  public onAfterDrop: Survey.Event<() => any, any> = new Survey.Event<() => any, any>();
  private initDragDropSurveyElements() {
    DragDropSurveyElements.restrictDragQuestionBetweenPages =
      settings.dragDrop.restrictDragQuestionBetweenPages;
    this.dragDropSurveyElements = new DragDropSurveyElements(null, this);
    this.dragDropSurveyElements.onBeforeDrop.add((sender, options) => {
      this.onBeforeDrop.fire(null, null);
      this.startUndoRedoTransaction("drag drop");
    });
    this.dragDropSurveyElements.onAfterDrop.add((sender, options) => {
      this.stopUndoRedoTransaction();
      this.selectElement(options.draggedElement, undefined, false);
      this.onAfterDrop.fire(null, null);
    });
  }
  private initDragDropChoices() {
    this.dragDropChoices = new DragDropChoices(null, this);
    this.dragDropChoices.onBeforeDrop.add((sender, options) => {
      this.startUndoRedoTransaction("drag drop");
    });
    this.dragDropChoices.onAfterDrop.add((sender, options) => {
      this.stopUndoRedoTransaction();
      this.selectElement(options.draggedElement, undefined, false);
    });
  }

  public updateElementsOnLocaleChanged(obj: Base, propertyName: string): void {
    if (obj.getType() !== "survey" || propertyName !== "locale") return;
    const pages = this.survey.pages;
    for (var i = 0; i < pages.length; i++) {
      pages[i].locStrsChanged();
    }
  }
  public updateConditionsOnNameChanged(obj: Base, propertyName: string, oldValue: any): void {
    if (this.isObjQuestion(obj)) {
      if (propertyName === "name" && !obj["valueName"]) {
        this.updateLogicOnQuestionNameChanged(oldValue, obj["name"]);
      }
      if (propertyName === "valueName") {
        const oldName = !!oldValue ? oldValue : obj["name"];
        const newName = !!obj["valueName"] ? obj["valueName"] : obj["name"];
        this.updateLogicOnQuestionNameChanged(oldName, newName);
      }
    }
    if(propertyName === "name" && obj.isDescendantOf("matrixdropdowncolumn")) {
      this.updateLogicOnColumnNameChanged(obj, oldValue, obj["name"]);
    }
  }
  private surveyLogicForUpdate: SurveyLogic;
  private surveyLogicRenaming: boolean;
  private getSurveyLogicForUpdate(): SurveyLogic {
    if(!!this.surveyLogicForUpdate && this.surveyLogicForUpdate.survey !== this.survey) {
      this.surveyLogicForUpdate = undefined;
    }
    if(!this.surveyLogicForUpdate) {
      this.surveyLogicForUpdate = this.createSurveyLogicForUpdate();
    }
    return this.surveyLogicForUpdate;
  }
  private clearSurveyLogicForUpdate(obj: Base, propertyName: string, value: any): void {
    if(this.surveyLogicRenaming || !this.surveyLogicForUpdate || !obj || !propertyName) return;
    if(this.needClearSurveyLogicForUpdate(obj, propertyName, value)) {
      this.surveyLogicForUpdate = undefined;
    }
  }
  private needClearSurveyLogicForUpdate(obj: Base, propertyName: string, value: any): boolean {
    if(Array.isArray(value)) {
      return true;
    }
    const prop = Serializer.findProperty(obj.getType(), propertyName);
    return !!prop && ["expression", "condition", "questionvalue", "question"].indexOf(prop.type) > -1;
  }
  private updateSurveyLogicValues(obj: Base, propertyName: string, oldValue: any): void {
    if(!obj || !propertyName || Survey.Helpers.isValueEmpty(oldValue)) return;
    if(propertyName === "value" && obj.isDescendantOf("itemvalue")) {
      this.updateSurveyLogicItemValue(<ItemValue>obj, oldValue);
    }
  }
  private updateSurveyLogicItemValue(item: ItemValue, oldValue: any): void {
    if(!item.locOwner || !settings.logic.updateExpressionsOnChanging.choiceValue) return;
    if(["choices", "rateValues", "columns"].indexOf(item.ownerPropertyName) < 0) return;
    this.surveyLogicRenaming = true;
    this.getSurveyLogicForUpdate().renameItemValue(item, oldValue);
    this.surveyLogicRenaming = false;
  }
  protected createSurveyLogicForUpdate(): SurveyLogic {
    return new SurveyLogic(this.survey, this);
  }
  private updateLogicOnQuestionNameChanged(oldName: string, newName: string) {
    if (oldName === newName || !settings.logic.updateExpressionsOnChanging.questionName) return;
    this.surveyLogicRenaming = true;
    this.getSurveyLogicForUpdate().renameQuestion(oldName, newName);
    this.surveyLogicRenaming = false;
  }
  private updateLogicOnColumnNameChanged(column: Base, oldName: string, newName: string) {
    if (!oldName || oldName === newName || !settings.logic.updateExpressionsOnChanging.columnName) return;
    this.surveyLogicRenaming = true;
    this.getSurveyLogicForUpdate().renameColumn(<Survey.MatrixDropdownColumn>column, oldName);
    this.surveyLogicRenaming = false;
  }
  public isObjQuestion(obj: Base): boolean {
    return this.isObjThisType(obj, "question");
  }
  public isObjPage(obj: Base): boolean {
    return this.isObjThisType(obj, "page");
  }
  private isObjThisType(obj: Base, typeName: string): boolean {
    var classInfo = Survey.Serializer.findClass(obj.getType());

    while (!!classInfo && !!classInfo.parentName) {
      if (classInfo.name === typeName) return true;
      classInfo = Survey.Serializer.findClass(classInfo.parentName);
    }
    return !!classInfo && classInfo.name === typeName;
  }

  @ignoreUndoRedo()
  private doOnQuestionAdded(question: Question, parentPanel: any) {
    question.name = this.generateUniqueName(question, question.name);
    var page = this.getPageByElement(question);
    var options = { question: question, page: page };
    this.onQuestionAdded.fire(this, options);
    /*
    if (parentPanel.elements.indexOf(question) !== -1) {
      this.surveyObjects.addElement(question, parentPanel);
    }
    */
  }
  @ignoreUndoRedo()
  private doOnPanelAdded(panel: PanelModel, parentPanel: any) {
    var page = this.getPageByElement(panel);
    var options = { panel: panel, page: page };
    this.onPanelAdded.fire(this, options);
    /*
    if (parentPanel.elements.indexOf(panel) !== -1) {
      this.surveyObjects.addElement(panel, parentPanel);
    }
    */
  }
  @ignoreUndoRedo()
  private doOnPageAdded(page: PageModel) {
    var options = { page: page };
    this.onPageAdded.fire(this, options);
    this.setModified({ type: "PAGE_ADDED", newValue: options.page });
  }
  private getPageByElement(obj: Base): PageModel {
    return this.survey.getPageByElement(<IElement>(<any>obj));
  }

  private getDefaultSurveyJson(): any {
    var json = settings.defaultNewSurveyJSON;
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

  protected setSurvey(survey: SurveyModel) {
    if (!!this.surveyValue) {
      this.surveyValue.dispose();
    }
    this.surveyValue = survey;
    this.selectElement(survey);
    this.selectionHistoryController.reset();
  }

  private getSurveyTextFromDesigner() {
    if (!this.survey) return "";
    var json = (<any>this.survey).toJSON();
    json = this.singlePageJSON(json);
    const indent = settings.jsonEditor.indentation;
    if (this.generateValidJSON) {
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
    var textWorker = new SurveyTextWorker(value);
    if (textWorker.isJsonCorrect) {
      this.initSurveyWithJSON(textWorker.survey.toJSON(), clearState);
    } else {
      this.viewType = "editor";
    }
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
    if (this.viewType != "editor") {
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
    obj: Base,
    reason: string = undefined,
    displayName: string = undefined
  ): string {
    if (!displayName) {
      displayName = SurveyHelper.getObjectName(obj, this.showObjectTitles);
    }
    var options = { obj: obj, displayName: displayName, reason: reason };
    this.onGetObjectDisplayName.fire(this, options);
    return options.displayName;
  }

  public createSurvey(json: any = {}, reason: string = "designer"): SurveyModel {
    const survey = this.createSurveyCore(json, reason);
    survey["needRenderIcons"] = false;
    if (reason != "designer" && reason != "test") {
      (<any>survey).locale = editorLocalization.currentLocale;
    }
    this.onSurveyInstanceCreated.fire(this, { survey: survey, reason: reason });
    return survey;
  }
  protected createSurveyCore(json: any = {}, reason: string): SurveyModel {
    if (reason === "designer" || reason === "modal-question-editor")
      return new DesignTimeSurveyModel(this, json);
    return new SurveyModel(json);
  }
  private _stateValue: string;
  /**
   * Returns the creator state. It may return empty string or "saving" and "saved".
   */
  public get state(): string {
    return !!this._stateValue ? this._stateValue : "";
  }
  protected setState(value: string) {
    this._stateValue = value;
    this.onStateChanged.fire(this, { val: value });
    if (!!value) {
      this.notify(this.getLocString("ed." + value));
      const actions = this.toolbarItems.filter(a => a.id === "svd-save");
      if (Array.isArray(actions) && actions.length > 0) {
        actions[0].enabled = this.state === "modified";
        actions[0].active = this.state === "modified";
      }
    }
  }
  public onStateChanged: Survey.Event<
    (sender: CreatorBase, options: any) => any,
    any
  > = new Survey.Event<(sender: CreatorBase, options: any) => any, any>();

  notifier = new Notifier();

  public setModified(options: any = null): void {
    this.setState("modified");
    this.onModified.fire(this, options);
    this.isAutoSave && this.doAutoSave();
  }
  public notifySurveyPropertyChanged(options: any): void {
    this.clearSurveyLogicForUpdate(options.target, options.name, options.newValue);
    this.updateSurveyLogicValues(options.target, options.name, options.oldValue);
    if (!this.onSurveyPropertyValueChanged.isEmpty) {
      options.propertyName = options.name;
      options.obj = options.target;
      options.value = options.newValue;
      this.onSurveyPropertyValueChanged.fire(this, options);
    }
    options.type = "PROPERTY_CHANGED";
    this.setModified(options);
  }
  /**
   * This function triggers user notification (via the alert() function if no onNotify event handler added).
   * @see onNotify
   */
  public notify(msg: string, type: "info" | "error" = "info") {
    if (this.onNotify.isEmpty) {
      this.notifier.notify(msg, type);
      // alert(msg);
    } else {
      this.onNotify.fire(this, { message: msg });
    }
  }

  protected convertQuestion(obj: Survey.Question, className: string) {
    var newQuestion = QuestionConverter.convertObject(obj, className, this.getDefaultElementJSON(obj.getType()));
    this.setModified({
      type: "QUESTION_CONVERTED",
      className: className,
      oldValue: obj,
      newValue: newQuestion
    });
    return newQuestion;
  }
  private getDefaultElementJSON(elType: string): any {
    if (!this.toolbox) return null;
    const item = this.toolbox.getItemByName(elType);
    return !!item ? item.json : null;
  }
  private singlePageJSON(json: any) {
    if (this.pageEditMode === "single") {
      const pages = json.pages;
      if (Array.isArray(pages) && pages.length > 0) {
        if (pages[0].elements !== undefined) {
          json.elements = pages[0].elements;
        }
        delete json.pages;
      }
    }
    return json;
  }
  /**
   * The Survey JSON. Use it to get Survey JSON or change it.
   * @see text
   */
  public get JSON(): any {
    const json = (<any>this.survey).toJSON();
    return this.singlePageJSON(json);
  }
  public set JSON(val: any) {
    if (this.viewType == "editor") {
      this.setTextValue(JSON.stringify(val));
    } else {
      this.initSurveyWithJSON(val, true);
    }
  }
  public loadSurvey(surveyId: string): void {
    new Survey.dxSurveyService().loadSurvey(
      surveyId,
      (success: boolean, result: string, response: any) => {
        if (success && result) {
          this.JSON = result;
        }
      }
    );
  }
  protected doClickQuestionCore(
    element: IElement,
    modifiedType: string = "ADDED_FROM_TOOLBOX",
    index: number = -1,
    panel: IPanel = null
  ) {
    if (this.survey.pageCount == 0) {
      this.survey.addNewPage();
    }
    var parent: IPanel = this.currentPage;
    var selectedElement = this.getSelectedSurveyElement();
    if (selectedElement && selectedElement.parent && selectedElement["page"] == parent &&
      (<any>selectedElement !== <any>panel)) {
      parent = selectedElement.parent;
      if (index < 0) {
        index = parent.elements.indexOf(selectedElement);
        if (index > -1) index++;
      }
    }
    if (panel) {
      parent = panel;
    }
    const currentRow = this.findRowByElement(selectedElement, parent);
    if (currentRow && this.isRowMultiline(currentRow)) {
      this.addElemenMultiline(parent, element, index, currentRow);
    } else {
      parent.addElement(element, index);
    }

    this.setModified({ type: modifiedType, question: element });
  }

  private isRowMultiline(row) {
    return row.elements.length > 1;
  }

  private findRowByElement(element, parent) {
    if (!element) return null;
    if (element.isPage) return element.rows[element.rows.length - 1];
    return parent.rows.find(row => row.elements.indexOf(element) !== -1);
  }

  private addElemenMultiline(parent: any, element: any, index, currentRow: any) {
    const elsCount = currentRow.elements.length;
    const prevElement = currentRow.elements[elsCount - 1];
    prevElement.startWithNewLine = true;
    parent.addElement(element, index);
    prevElement.startWithNewLine = false;
  }

  public setNewNames(element: Survey.ISurveyElement) {
    this.newQuestions = [];
    this.newPanels = [];
    this.newQuestionChangedNames = {};
    this.setNewNamesCore(element);
    this.updateNewElementExpressions(element);
  }
  private updateNewElementExpressions(element: Survey.ISurveyElement) {
    var survey = this.createSurvey({}, "updateNewElementExpressions");
    survey.setDesignMode(true);
    if (element.isPage) {
      survey.addPage(<Survey.PageModel>element);
    } else {
      survey.addNewPage("p1");
      survey.pages[0].addElement(<IElement>element);
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

  protected getNewName(type: string, isPanel?: boolean): string {
    if (type == "page") return SurveyHelper.getNewPageName(this.survey.pages);
    if (isPanel) return this.getNewPanelName();
    return this.getNewQuestionName();
  }
  protected getNewQuestionName(): string {
    return SurveyHelper.getNewQuestionName(this.getAllQuestions());
  }
  protected getNewPanelName(): string {
    return SurveyHelper.getNewPanelName(this.getAllPanels());
  }

  protected setNewNamesCore(element: Survey.ISurveyElement) {
    var elType = element["getType"]();
    var newName = this.getNewName(elType, element.isPanel);
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

  public createNewElement(json: any): IElement {
    var newElement = Survey.Serializer.createClass(json["type"]);
    new Survey.JsonObject().toObject(json, newElement);
    this.setNewNames(newElement);
    return newElement;
  }

  public copyElement(element: Base): IElement {
    var json = new Survey.JsonObject().toJsonObject(element);
    json.type = element.getType();
    return this.createNewElement(json);
  }

  /**
   * Copy a question to the active page
   * @param question A copied Survey.Question
   */
  public fastCopyQuestion(question: Base): Survey.IElement {
    var newElement = this.copyElement(question);
    var index = !!question["parent"]
      ? question["parent"].elements.indexOf(question) + 1
      : -1;
    this.doClickQuestionCore(newElement, "ELEMENT_COPIED", index);
    return newElement;
  }
  /**
   * Get or set the current selected object in the Creator. It can be a question, panel, page or survey itself.
   */
  public get selectedElement(): Base {
    return this.selectedElementValue;
  }
  public set selectedElement(val: Base) {
    this.selectElement(val);
  }
  /**
   * @Deprecated Obsolete. Please use deleteCurrentElement.
   * @see deleteCurrentElement
   */
  public deleteCurrentObject() {
    this.deleteCurrentElement();
  }
  /**
   * Delete a currently selected element in the survey. It can be a question, a panel or a page.
   */
  public deleteCurrentElement() {
    this.deleteObject(this.selectedElement);
  }
  /**
   * Delete an element in the survey. It can be a question, a panel or a page.
   * @param element a survey element.
   */
  public deleteElement(element: Base) {
    this.deleteObject(element);
  }
  /**
   * Create a new page with the same elements and place it next to the current one. It returns the new created Survey.Page
   * @param page A copied Survey.Page
   */
  public copyPage(page: PageModel): PageModel {
    var newPage = <PageModel>(<any>this.copyElement(page));
    var index = this.survey.pages.indexOf(page);
    if (index > -1) {
      this.survey.pages.splice(index + 1, 0, newPage);
    } else {
      this.survey.pages.push(newPage);
    }
    return newPage;
  }

  protected deleteObjectCore(obj: any) {
    if (obj.isPage) {
      var newPage = this.getNextPage(obj);
      this.survey.removePage(obj);
      this.selectElement(!!newPage ? newPage : this.survey);
    } else {
      this.deletePanelOrQuestion(obj);
    }
    this.setModified({
      type: "OBJECT_DELETED",
      target: obj
    });
    this.updateConditionsOnRemove(obj);
  }
  private getNextPage(page: PageModel): PageModel {
    var index = this.survey.pages.indexOf(page);
    if (index < 0 || this.survey.pages.length == 1) return null;
    if (index == this.survey.pages.length - 1) index--;
    else index++;
    if (index < 0 || index > this.survey.pages.length - 1) return null;
    return this.survey.pages[index];
  }
  @undoRedoTransaction()
  protected deleteObject(obj: any) {
    var options = {
      element: obj,
      elementType: SurveyHelper.getObjectType(obj),
      allowing: true
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
    var logic = new SurveyLogic(<any>this.survey, <any>this);
    for (var i = 0; i < questions.length; i++) {
      logic.removeQuestion(questions[i].getValueName());
    }
  }

  public isElementSelected(element: Base): boolean {
    if (!element || element.isDisposed) return false;
    return element.getPropertyValue("isSelectedInDesigner");
  }

  public selectElement(element: any, propertyName?: string, focus = true) {
    if (!!element && (element.isDisposed || ((element.isQuestion || element.isPanel) && !element.parent))) return;
    var oldValue = this.selectedElement;
    if (oldValue !== element) {
      this.selectedElementValue = this.onSelectingElement(element);
      if (oldValue !== this.selectedElementValue) {
        if (!!oldValue && !oldValue.isDisposed) {
          oldValue.setPropertyValue("isSelectedInDesigner", false);
        }
        if (!!this.selectedElementValue) {
          this.selectedElementValue.setPropertyValue(
            "isSelectedInDesigner",
            true
          );
        }
      }
    }
    if (oldValue !== element || !!propertyName) {
      this.selectionChanged(this.selectedElement, propertyName, focus);
    }
    var selEl: any = this.getSelectedSurveyElement();
    if (oldValue !== element && focus && !!document && !!selEl) {
      setTimeout(() => {
        const el = document.getElementById(selEl.id);
        if (!!el) {
          el.scrollIntoView({ block: "center" });
          if (!propertyName) {
            el.parentElement && el.parentElement.focus();
          }
        }
      }, 100);
    }
  }
  private getSelectedSurveyElement(): IElement {
    var sel: any = this.selectedElement;
    if (!sel || sel.getType() == "survey") return null;
    return sel.isInteractiveDesignElement && sel.id ? sel : null;
  }
  private onSelectingElement(val: Base): Base {
    var options = { newSelectedElement: val };
    this.onSelectedElementChanging.fire(this, options);
    return options.newSelectedElement;
  }

  //#region Obsolete designerPropertyGrid
  protected get designerPropertyGrid(): PropertyGridModel {
    const propertyGridTab = this.sidebar.getTabById("propertyGrid");
    if (!propertyGridTab) return null;
    return propertyGridTab.model ? (propertyGridTab.model.propertyGridModel as any as PropertyGridModel) : null;
  }
  /**
   * Collapse certain property editor tab (category) in properties panel/grid
   * name - tab category name
   * @see collapseAllPropertyGridCategories
   * @see expandPropertyGridCategory
   * @see expandAllPropertyGridCategories
   */
  public collapsePropertyGridCategory(name: string) {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.collapseCategory(name);
    }
  }
  /**
   * Expand certain property editor tab (category) in properties panel/grid
   * name - tab category name
   * @see collapsePropertyGridCategory
   * @see collapseAllPropertyGridCategories
   * @see expandAllPropertyGridCategories
   */
  public expandPropertyGridCategory(name: string) {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.expandCategory(name);
    }
  }
  /**
   * Expand all property editor tabs (categories) in properties panel/grid
   * @see collapsePropertyGridCategory
   * @see expandPropertyGridCategory
   * @see expandAllPropertyGridCategories
   */
  public collapseAllPropertyGridCategories() {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.collapseAllCategories();
    }
  }
  /**
   * Expand all property editor tabs (categories) in properties panel/grid
   * @see collapsePropertyGridCategory
   * @see collapseAllPropertyGridCategories
   * @see expandPropertyGridCategory
   */
  public expandAllPropertyGridCategories() {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.expandAllCategories();
    }
  }
  /**
   * @Deprecated Obsolete. Collapse all property editor tabs (categories) in properties panel/grid
   * @see collapseAllPropertyGridCategories
   *
   */
  public collapseAllPropertyTabs(): void {
    this.collapseAllPropertyGridCategories();
  }
  /**
   * @Deprecated Obsolete. Expand all property editor tabs (categories) in properties panel/grid
   * @see expandAllPropertyGridCategories
   */
  public expandAllPropertyTabs(): void {
    this.expandAllPropertyGridCategories();
  }
  /**
   * @Deprecated Obsolete. Expand certain property editor tab (category) in properties panel/grid
   * name - tab category name
   * @see expandPropertyGridCategory
   */
  public expandPropertyTab(name: string): void {
    this.expandPropertyGridCategory(name);
  }
  /**
   * @Deprecated Obsolete. Collapse certain property editor tab (category) in properties panel/grid
   * name - tab category name
   * @see collapsePropertyGridCategory
   */
  public collapsePropertyTab(name: string): void {
    this.collapsePropertyGridCategory(name);
  }
  //#endregion Obsolete designerPropertyGrid

  /**
   * Check for errors in property grid and adorners of the selected elements.
   * Returns true if selected element is null or there is no errors.
   */
  public validateSelectedElement(): boolean {
    var isValid = true;
    if (!this.selectedElement) return isValid;
    if (!!this.designerPropertyGrid) {
      isValid = this.designerPropertyGrid.validate();
    }
    /*
    var options = { errors: [] };
    this.onValidateSelectedElement.fire(this, options);
    return isValid && options.errors.length == 0;
    */
    return isValid;
  }
  private selectionChanged(element: Base, propertyName?: string, focus = true) {
    this.survey.currentPage = this.getCurrentPageByElement(element);
    this.selectionHistoryController.onObjSelected(element);
    if (this.designerPropertyGrid) {
      this.designerPropertyGrid.obj = element;

      if (!propertyName) {
        propertyName = this.designerPropertyGrid.currentlySelectedProperty;
      }

      if (!!propertyName) {
        this.designerPropertyGrid.selectProperty(propertyName, focus || !this.selectFromStringEditor);
      }
      this.selectFromStringEditor = false;
    }
    var options = { newSelectedElement: element };
    this.onSelectedElementChanged.fire(this, options);
  }
  private getCurrentPageByElement(element: Base): PageModel {
    if (!element) return undefined;
    if (element["isPage"]) return element as PageModel;
    if (!!element["page"]) return element["page"];
    if (!!element["parentQuestion"]) return this.getCurrentPageByElement(element["parentQuestion"]);
    return undefined;
  }
  public clickToolboxItem(newElement: any, panel: IPanel = null) {
    if (!this.readOnly) {
      if (newElement["getType"] === undefined) {
        newElement = this.createNewElement(newElement);
      }
      this.survey.lazyRendering = false;
      this.doClickQuestionCore(newElement, "ADDED_FROM_TOOLBOX", -1, panel);
      this.selectElement(newElement);
    }
  }
  public getJSONForNewElement(json: any): any {
    var newElement: Base = <any>this.createNewElement(json);
    json = newElement.toJSON();
    json["type"] = newElement.getType();
    return json;
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
      if (!window || !window["FileReader"]) return;
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
        callback: onFilesChosen
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
        callback: uploadingCallback
      });
    }
  }

  public initKeyboardShortcuts(rootNode: HTMLElement) {
    if (!!rootNode) {
      rootNode.addEventListener("keydown", this.onKeyDownHandler);
    }
  }
  public removeKeyboardShortcuts(rootNode: HTMLElement) {
    if (!!rootNode) {
      rootNode.removeEventListener("keydown", this.onKeyDownHandler);
    }
  }
  protected onKeyDownHandler = (event: KeyboardEvent) => {
    let shortcut;
    let hotKey;
    Object.keys(this.shortcuts || {}).forEach((key) => {
      shortcut = this.shortcuts[key];
      hotKey = event.metaKey ? shortcut.macOsHotkey : shortcut.hotKey;
      if (!hotKey) return;

      if (!!hotKey.ctrlKey !== !!event.ctrlKey) return;
      if (!!hotKey.shiftKey !== !!event.shiftKey) return;
      if (hotKey.keyCode !== event.keyCode) return;
      if (hotKey.keyCode < 48 && isTextInput(event.target)) return;
      shortcut.execute(this.selectElement);
    });
  }
  private shortcuts: { [index: string]: IKeyboardShortcut } = {};
  public registerShortcut(name: string, shortcut: IKeyboardShortcut) {
    this.shortcuts[name] = shortcut;
  }
  public unRegisterShortcut(name: string) {
    delete this.shortcuts[name];
  }

  protected deletePanelOrQuestion(obj: Base): void {
    var parent = obj["parent"];
    var elements = parent.elements;
    var objIndex = elements.indexOf(obj);
    if (objIndex == elements.length - 1) {
      objIndex--;
    }
    if (this.pageEditMode === "single" && parent.getType() === "page") {
      parent = this.survey;
    }
    obj["delete"]();
    this.selectElement(objIndex > -1 ? elements[objIndex] : parent);
  }
  protected onCanShowObjectProperty(
    object: any,
    property: JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean {
    var options = {
      obj: object,
      property: property,
      canShow: true,
      showMode: showMode,
      parentObj: parentObj,
      parentProperty: parentProperty
    };
    this.onCanShowProperty.fire(this, options);
    return options.canShow;
  }
  protected canDeleteItem(
    object: any,
    item: Base,
    allowDelete: boolean
  ): boolean {
    var options = { obj: object, item: item, canDelete: allowDelete };
    this.onCanDeleteItem.fire(this, options);
    return options.canDelete;
  }
  private getErrorOnPropertyChanging(
    obj: Base,
    propertyName: string,
    value: any
  ): string {
    if (propertyName !== "name") return null;
    if (SurveyHelper.getObjectType(obj) === ObjType.Unknown) return null;
    var hasError = false;
    if (SurveyHelper.getObjectType(obj) === ObjType.Column) {
      hasError = !!(<any>obj).colOwner
        ? !this.isNameUniqueInArray((<any>obj).colOwner.columns, obj, value)
        : false;
    } else {
      hasError = this.generateUniqueName(obj, value) !== value;
    }

    return hasError ? this.getLocString("pe.propertyNameIsNotUnique") : null;
  }
  protected generateUniqueName(el: Base, newName: string): string {
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
  protected isNameUnique(el: Base, newName: string): boolean {
    if (!this.isNameUniqueInArray(this.survey.pages, el, newName)) return false;
    if (!this.isNameUniqueInArray(this.survey.getAllPanels(), el, newName))
      return false;
    return this.isNameUniqueInArray(this.survey.getAllQuestions(), el, newName);
  }
  private isNameUniqueInArray(
    elements: Array<any>,
    el: Base,
    newName: string
  ): boolean {
    if (!Array.isArray(elements)) return true;
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
    property: JsonObjectProperty,
    showMode: string = null,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean {
    return this.onCanShowObjectProperty(
      object,
      property,
      showMode,
      parentObj,
      parentProperty
    );
  }
  onPropertyGridSurveyCreatedCallback(
    object: any,
    survey: SurveyModel
  ) {
    const options = { obj: object, survey: survey };
    this.onPropertyGridSurveyCreated.fire(this, options);
  }
  onPropertyEditorCreatedCallback(
    object: any,
    property: JsonObjectProperty,
    editor: Question
  ): void {
    const options = { obj: object, property: property, editor: editor };
    this.onPropertyEditorCreated.fire(this, options);
  }
  onPropertyEditorUpdateTitleActionsCallback(
    object: any,
    property: JsonObjectProperty,
    editor: Question,
    titleActions: IAction[]
  ): void {
    const options = { obj: object, property: property, editor: editor, titleActions: titleActions };
    this.onPropertyEditorUpdateTitleActions.fire(this, options);
  }
  onCanDeleteItemCallback(
    object: any,
    item: Base,
    allowDelete: boolean
  ): boolean {
    return this.canDeleteItem(object, item, allowDelete);
  }
  onCollectionItemDeletingCallback(
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base
  ): boolean {
    if (this.onCollectionItemDeleting.isEmpty) return true;
    var options = {
      obj: obj,
      property: property,
      propertyName: property.name,
      collection: collection,
      item: item,
      allowDelete: true
    };
    this.onCollectionItemDeleting.fire(this, options);
    return options.allowDelete;
  }
  onCollectionItemAllowingCallback(
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base,
    itemOptions: ICollectionItemAllowOperations
  ): void {
    if (this.onCollectionItemAllowOperations.isEmpty) return;
    var options = {
      obj: obj,
      property: property,
      propertyName: property && property.name,
      collection: collection,
      item: item,
      allowEdit: itemOptions.allowEdit,
      allowDelete: itemOptions.allowDelete
    };
    this.onCollectionItemAllowOperations.fire(this, options);
    itemOptions.allowEdit = options.allowEdit;
    itemOptions.allowDelete = options.allowDelete;
  }
  onItemValueAddedCallback(
    obj: Base,
    propertyName: string,
    itemValue: Survey.ItemValue,
    itemValues: Array<Survey.ItemValue>
  ) {
    var options = {
      obj: obj,
      propertyName: propertyName,
      newItem: itemValue,
      itemValues: itemValues
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
    obj: Base,
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
    obj: Base,
    value: any
  ): string {
    var error = this.getErrorOnPropertyChanging(obj, propertyName, value);
    if (!!error) return error;
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
  onGetElementEditorTitleCallback(obj: Base, title: string): string {
    return title;
  }
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Base,
    editor: any,
    list: any[]
  ): void {
    var options = {
      propertyName: propertyName,
      obj: obj,
      editor: editor,
      list: list
    };
    this.onConditionQuestionsGetList.fire(this, options);
    if (options.list !== list) {
      list.splice(0, list.length);
      for (var i = 0; i < options.list.length; i++) {
        list.push(options.list[i]);
      }
    }
  }
  onConditionGetTitleCallback(
    expression: string,
    title: string
  ): string {
    var options = {
      expression: expression,
      title: title,
    };
    this.onConditionGetTitle.fire(this, options);
    return options.title;
  }
  /**
   * The delay on saving survey JSON on autoSave in ms. It is 500 ms by default.
   * If during this period of time an end-user modify survey, then the last version will be saved only. Set to 0 to save immediately.
   * @see isAutoSave
   */
  public autoSaveDelay: number = settings.autoSave.delay;
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
  public doSave() {
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

  @property({ defaultValue: false }) showSaveButton: boolean;

  /**
   * Assign to this property a function that will be called on clicking the 'Save' button or on any change if isAutoSave equals true.
   * @see isAutoSave
   */
  public get saveSurveyFunc() {
    return this.saveSurveyFuncValue;
  }
  public set saveSurveyFunc(value: any) {
    this.saveSurveyFuncValue = value;
    this.showSaveButton = value != null && !this.isAutoSave;
  }
  @undoRedoTransaction()
  public convertCurrentQuestion(newType: string) {
    var el = this.selectedElement;
    if (!el || el.getType() === newType) return;
    if (SurveyHelper.getObjectType(el) !== ObjType.Question) return;
    el = this.convertQuestion(<Survey.Question>el, newType);
    this.selectElement(el);
  }

  public getAddNewQuestionText(currentAddQuestionType: string = null) {
    if (!currentAddQuestionType)
      currentAddQuestionType = this.currentAddQuestionType;
    if (!!currentAddQuestionType) {
      const str = this.getLocString("ed.addNewTypeQuestion");
      if (!!str && !!str["format"])
        return str["format"](
          this.toolbox.items.filter((item) => item.name == currentAddQuestionType)[0].title
        );
    }
    return this.getLocString("ed.addNewQuestion");
  }

  public get addNewQuestionText() {
    return this.getAddNewQuestionText();
  }

  public getQuestionTypeSelectorModel(beforeAdd: (type: string) => void, panel: IPanel = null) {
    var availableTypes = this.toolbox.items.map((item) => {
      return this.createIActionBarItemByClass(item.name, item.title, item.iconName);
    });
    const popupModel = new PopupModel(
      "sv-list",
      {
        model: new ListModel(
          availableTypes,
          (item: any) => {
            this.currentAddQuestionType = item.id;
            this.addNewQuestionInPage(beforeAdd, panel);
            popupModel.toggleVisibility();
          },
          false
        )
      },
      "bottom",
      "center"
    );

    return {
      iconName: "icon-more",
      title: this.getLocString("ed.addNewQuestion"),
      action: () => {
        popupModel.displayMode = this.isMobileView ? "overlay" : "popup";
        popupModel.toggleVisibility();
      },
      popupModel: popupModel
    };
  }
  @undoRedoTransaction()
  public addNewQuestionInPage(beforeAdd: (string) => void, panel: IPanel = null, type: string = null) {
    if (!type)
      type = this.currentAddQuestionType;
    if (!type) type = settings.designer.defaultAddQuestionType;
    beforeAdd(type);
    let json = { type: type };
    const toolboxItem = this.toolbox.getItemByName(type);
    if (!!toolboxItem && !!toolboxItem.json) {
      json = toolboxItem.json;
    }
    let newElement = this.createNewElement(json);
    this.clickToolboxItem(newElement, panel);
  }
  createIActionBarItemByClass(className: string, title: string, iconName: string): Action {
    return new Action({
      title: title,
      id: className,
      iconName: iconName
    });
  }

  public onElementMenuItemsChanged(element: any, items: Action[]) {
    this.onDefineElementMenuItems.fire(this, {
      obj: element,
      items: items
    });
  }
  public getElementAllowOperations(element: SurveyElement): any {
    var options = {
      obj: element,
      element: element,
      allowDelete: true,
      allowCopy: true,
      allowDragging: true,
      allowChangeType: true,
      allowChangeRequired: true,
      allowEdit: undefined
    };
    this.onElementAllowOperations.fire(this, options);
    return options;
  }
  public getNextItemValue(question: Survey.QuestionSelectBase) {
    const itemText = Survey.surveyLocalization.getString("choices_Item");
    const values = question.choices.map((item: Survey.ItemValue) => item.value);
    const nextValue = getNextValue(itemText, values);
    return nextValue;
  }
  public createNewItemValue(question: Survey.QuestionSelectBase) {
    const nextValue = this.getNextItemValue(question);
    return question.createItemValue(nextValue);
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "viewType") {
      this.tabs.forEach((tab) => {
        const isActive = this.viewType === tab.id;
        tab.active = isActive;
        tab.disableHide = isActive;
      });
    }
  }
  public initResponsivityManager(container: HTMLDivElement): void {
    this.responsivityManager = new CreatorResponsivityManager(container, this);
  }
  public resetResponsivityManager(): void {
    if (!!this.responsivityManager) {
      this.responsivityManager.dispose();
      this.responsivityManager = undefined;
    }
  }
  @property({ defaultValue: false }) showHeaderInEmptySurvey;
  @property({ defaultValue: true }) showPageNavigator;
  @property({ getDefaultValue: () => { return settings.layout.showTabs; } }) showTabs;
  @property({ getDefaultValue: () => { return settings.layout.showToolbar; } }) showToolbar;
  @property({ getDefaultValue: () => { return settings.layout.allowCollapseSidebar; } }) allowCollapseSidebar;
  @property({ defaultValue: false }) isMobileView;
  @property({
    defaultValue: "left", onSet: (newValue, target: CreatorBase) => {
      if (!target.toolbox) return;
      target.toolbox.setLocation(newValue);
      target.updateToolboxIsCompact();
    }
  }) toolboxLocation: toolboxLocationType;
  @property({ defaultValue: "right" }) sidebarLocation: "left" | "right";
  selectFromStringEditor: boolean;

  @property({
    defaultValue: false, onSet: (newValue: boolean, target: CreatorBase) => {
      if (!newValue) {
        throw new Error("Creator is disposed");
      }
    }
  }) isCreatorDisposed: boolean;

  dispose(): void {
    this.isCreatorDisposed = true;
    this.tabs = [];
    Object.keys(this.plugins).forEach(pluginName => {
      const plugin = this.plugins[pluginName];
      if (typeof plugin.deactivate === "function") {
        plugin.deactivate();
      }
      if (typeof plugin.dispose === "function") {
        plugin.dispose();
      }
    });
    super.dispose();
  }
}

export class StylesManager {
  public static get currentTheme(): string {
    SurveyHelper.warnNonSupported("StylesManager");
    return undefined;
  }
  public static set currentTheme(val: string) {
    SurveyHelper.warnNonSupported("StylesManager");
  }
  public static applyTheme(name?: string) {
    SurveyHelper.warnNonSupported("StylesManager");
  }
}

export class DesignTimeSurveyModel extends SurveyModel {
  constructor(public creator: CreatorBase, jsonObj?: any) {
    super(jsonObj);
  }
  public isPopupEditorContent = false;

  public getElementWrapperComponentName(element: any, reason?: string): string {
    let componentName = getElementWrapperComponentName(
      element,
      reason,
      this.isPopupEditorContent
    );

    const options = {
      element,
      reason,
      componentName: componentName || super.getElementWrapperComponentName(element, reason)
    };
    this.creator.onGetElementWrapperComponentName.fire(this, options);

    return options.componentName;
  }
  public getQuestionContentWrapperComponentName(element: any, reason?: string): string {
    let componentName = getQuestionContentWrapperComponentName(element);
    return (
      componentName || super.getQuestionContentWrapperComponentName(element)
    );
  }

  public getElementWrapperComponentData(element: any, reason?: string): any {
    const data = getElementWrapperComponentData(element, reason, this.creator);

    const options = {
      element,
      reason,
      componentData: data || super.getElementWrapperComponentData(element)
    };
    this.creator.onGetElementWrapperComponentData.fire(this, options);

    return options.componentData;
  }

  public getRowWrapperComponentName(row: QuestionRowModel): string {
    return "svc-row";
  }
  public getRowWrapperComponentData(row: QuestionRowModel): any {
    return {
      creator: this.creator,
      row
    };
  }

  public getItemValueWrapperComponentName(item: ItemValue, question: QuestionSelectBase): string {
    return getItemValueWrapperComponentName(item, question);
  }
  public getItemValueWrapperComponentData(item: ItemValue, question: QuestionSelectBase): any {
    return getItemValueWrapperComponentData(item, question, this.creator);
  }

  public getRendererForString(element: Base, name: string): string {
    if (!this.creator.readOnly && isStringEditable(element, name)) {
      return editableStringRendererName;
    }
    return undefined;
  }
  public getRendererContextForString(element: Base, locStr: LocalizableString): any {
    if (!this.creator.readOnly && isStringEditable(element, locStr.name)) {
      return {
        creator: this.creator,
        element,
        locStr
      };
    }
    return <any>locStr;
  }
}

export const editableStringRendererName = "svc-string-editor";
export function getElementWrapperComponentName(element: any, reason: string, isPopupEditorContent: boolean): string {
  if (reason === "logo-image") {
    return "svc-logo-image";
  }
  if (reason === "cell" || reason === "column-header" || reason === "row-header") {
    return "svc-matrix-cell";
  }
  if (!element.isContentElement) {
    if (element instanceof Question) {
      const isDropdown = element.isDescendantOf("dropdown");
      if (isPopupEditorContent) {
        return isDropdown ? "svc-cell-dropdown-question" : "svc-cell-question";
      }
      if (element.customWidget) {
        return "svc-widget-question";
      }
      if (isDropdown) {
        return "svc-dropdown-question";
      }
      if (element.isDescendantOf("image")) {
        return "svc-image-question";
      }
      return "svc-question";
    }
    if (element instanceof PanelModel) {
      return "svc-panel";
    }
  }
  return undefined;
}
export function getQuestionContentWrapperComponentName(element) {
  if (element.isDescendantOf("rating") && !element.isContentElement) {
    return "svc-rating-question-content";
  }
  return undefined;
}
export function getElementWrapperComponentData(
  element: any,
  reason: string,
  creator: CreatorBase
): any {
  if (reason === "logo-image") return creator;
  if (
    reason === "cell" ||
    reason === "column-header" ||
    reason === "row-header"
  ) {
    return {
      creator: creator,
      element: element,
      question: element.question,
      row: element.row,
      column: element.column
    };
  }
  const hasWrapper = getElementWrapperComponentName(element, reason, false);
  if (!hasWrapper) return undefined;
  if (element instanceof Question)
    return creator;
  if (element instanceof PanelModel)
    return creator;
  return null;
}
export function getItemValueWrapperComponentName(
  item: ItemValue,
  question: QuestionSelectBase
): string {
  if (question.isContentElement) {
    return SurveyModel.TemplateRendererComponentName;
  }
  if (question.isDescendantOf("imagepicker")) {
    return "svc-image-item-value";
  }
  return "svc-item-value";
}
export function getItemValueWrapperComponentData(
  item: ItemValue,
  question: QuestionSelectBase,
  creator: CreatorBase
): any {
  if (question.isContentElement) {
    return item;
  }
  return {
    creator: creator,
    question,
    item
  };
}
export function isStringEditable(element: any, name: string): boolean {
  const parentIsMatrix = !!element.data && element.parentQuestion instanceof Survey.QuestionMatrixDropdownModelBase;
  return !parentIsMatrix && (!element.isContentElement || element.isEditableTemplateElement);
}
export function isTextInput(target: any): boolean {
  if (!target.tagName) return false;
  const tagName = target.tagName.toLowerCase();
  if (["input", "textarea"].indexOf(tagName) !== -1) return true;
  if (["span", "div"].indexOf(tagName) !== -1) {
    return target.isContentEditable;
  }
  return false;
}

export function registerAdorner(name, adorner) {
  SurveyHelper.warnNonSupported("regsterAdorner", "onGetElementWrapperComponentName and onGetElementWrapperComponentData");
}
export function removeAdorners(names: string[] = undefined) {
  SurveyHelper.warnNonSupported("removeAdorners", "onGetElementWrapperComponentName and onGetElementWrapperComponentData");
}