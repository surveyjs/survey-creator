import {
  Base, SurveyModel, ListModel, Question, PanelModel, PageModel, PopupModel, property, IElement, Serializer,
  JsonObjectProperty, ActionContainer, AdaptiveActionContainer, IAction, Action, IPanel, SurveyElement, ItemValue,
  QuestionSelectBase, QuestionRowModel, LocalizableString, ILocalizableString, ILocalizableOwner, PopupBaseViewModel,
  EventBase, hasLicense, settings as SurveySettings, Event, Helpers as SurveyHelpers, MatrixDropdownColumn, JsonObject,
  dxSurveyService, ISurveyElement, PanelModelBase, surveyLocalization, QuestionMatrixDropdownModelBase, ITheme
} from "survey-core";
import { ISurveyCreatorOptions, settings, ICollectionItemAllowOperations } from "./creator-settings";
import { editorLocalization } from "./editorLocalization";
import { SurveyJSON5 } from "./json5";
import { DragDropChoices } from "survey-core";
import { IsTouch } from "survey-core";
import { QuestionConverter } from "./questionconverter";
import { SurveyTextWorker } from "./textWorker";
import { QuestionToolbox } from "./toolbox";
import { getNextItemValue, getNextItemText } from "./utils/utils";
import { PropertyGridModel } from "./property-grid";
import { ObjType, SurveyHelper } from "./survey-helper";
import { ICreatorSelectionOwner } from "./selection-owner";
import { SelectionHistory } from "./selection-history";

import { TabJsonEditorAcePlugin } from "./components/tabs/json-editor-ace";
import { TabJsonEditorTextareaPlugin } from "./components/tabs/json-editor-textarea";
import { TabTestPlugin } from "./components/tabs/test-plugin";
import { SurveyLogic } from "./components/tabs/logic";
import { TabTranslationPlugin } from "./components/tabs/translation-plugin";
import { TabLogicPlugin } from "./components/tabs/logic-plugin";
import { defaultV2Css, Notifier } from "survey-core";
import { UndoRedoManager } from "./plugins/undo-redo/undo-redo-manager";
import { ignoreUndoRedo, UndoRedoPlugin, undoRedoTransaction } from "./plugins/undo-redo";
import { TabDesignerPlugin } from "./components/tabs/designer-plugin";
import { UndoRedoController } from "./plugins/undo-redo/undo-redo-controller";
import { CreatorResponsivityManager } from "./creator-responsivity-manager";
import { SidebarModel } from "./components/side-bar/side-bar-model";
import { ICreatorOptions } from "./creator-options";
import { Translation } from "../src/components/tabs/translation";
import { StringEditorConnector } from "./components/string-editor";
import { ThemeTabPlugin } from "./components/tabs/theme-plugin";
import { DragDropSurveyElements } from "./survey-elements";
import { PageAdorner } from "./components/page";

require("./components/creator.scss");
require("./components/string-editor.scss");
require("./creator-theme/creator.scss");

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
  canDeactivateAsync?: (onSuccess: () => void) => void;
  defaultAllowingDeactivate?: () => boolean | undefined;
  dispose?: () => void;
  onDesignerSurveyPropertyChanged?: (obj: Base, propName: string) => void;
  model: Base;
}
//Obsolete
export class CreatorAction extends Action {
}

export interface ITabbedMenuItem extends IAction {
  componentContent: string;
  renderTab?: () => any;
}
export class TabbedMenuItem extends Action implements ITabbedMenuItem {
  constructor(item: ITabbedMenuItem) {
    super(item);
  }
  componentContent: string;
  renderTab?: () => any;
}
export class TabbedMenuContainer extends AdaptiveActionContainer<TabbedMenuItem> {
  constructor() {
    super();
    this.dotsItem.popupModel.horizontalPosition = "center";
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

export class CreatorEvent extends EventBase<CreatorBase, any> { }

/**
 * Base class for Survey Creator.
 */
export class CreatorBase extends Base
  implements ISurveyCreatorOptions, ICreatorSelectionOwner, ILocalizableOwner {
  //ILocalizableOwner
  public getMarkdownHtml(text: string, name: string): string { return null; }
  public getRenderer(name: string): string { return null; }
  public getRendererContext(locStr: LocalizableString): any { return locStr; }
  public getProcessedText(text: string): string { return text; }
  public getLocale(): string { return this.locale; }
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
   * Specifies whether to display the Themes tab.
   *
   * Default value: `false`
   */
  @property({ defaultValue: false }) showThemeTab: boolean;
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
    this.setPropertyVisibility("survey", val, "title", "description", "logo", "logoFit", "showTitle", "logoWidth", "logoHeight");
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
  public get haveCommercialLicense(): boolean {
    if (!!hasLicense && hasLicense(1)) return true;
    return this.getPropertyValue("haveCommercialLicense", false);
  }
  public set haveCommercialLicense(val: boolean) {
    this.setPropertyValue("haveCommercialLicense", val);
  }
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
  /**
   * Specifies the orientation of the selected device in the Preview tab.
   *
   * Possible values:
   * - `"landscape"` (default)
   * - `"portrait"`
   */
  @property({ defaultValue: "landscape" }) previewOrientation: "landscape" | "portrait";
  public set startEditTitleOnQuestionAdded(value: boolean) {
    this.startEditTitleOnQuestionAddedValue = value;
  }
  public get startEditTitleOnQuestionAdded() {
    return !this.isMobileView && this.startEditTitleOnQuestionAddedValue;
  }
  private startEditTitleOnQuestionAddedValue: boolean = true;
  private isRTLValue: boolean = false;
  private alwaySaveTextInPropertyEditorsValue: boolean = false;
  private toolbarValue: ActionContainer;
  private responsivityManager: CreatorResponsivityManager;
  footerToolbar: ActionContainer;

  private changePageModifications(allow = false) {
    this.setPropertyVisibility("survey", allow, "pages");
    this.setPropertyVisibility("question", allow, "page");
    this.setPropertyVisibility("panel", allow, "page");
    this.showJSONEditorTab = (this.options.showJSONEditorTab === true);
  }

  private pageEditModeValue: "standard" | "single" | "bypage" = "standard";
  /**
   * Contains the value of the [`pageEditMode`](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions#pageEditMode) property specified in the constructor.
   */
  public get pageEditMode(): "standard" | "single" | "bypage" {
    return this.pageEditModeValue;
  }
  public set pageEditMode(val: "standard" | "single" | "bypage") {
    this.pageEditModeValue = val;
    const allowModifyPages = this.pageEditModeValue !== "single";
    this.changePageModifications(allowModifyPages);
    SurveySettings.allowShowEmptyTitleInDesignMode = allowModifyPages;
    SurveySettings.allowShowEmptyDescriptionInDesignMode = allowModifyPages;
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

  private saveThemeFuncValue: (
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
    if (!!locStrName) {
      title = undefined;
    }
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
  public onElementDeleting: CreatorEvent = new CreatorEvent();

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
  public onGetPropertyReadOnly: CreatorEvent = new CreatorEvent();

  /**
   * The event is fired when the survey creator creates a survey object (Survey.Survey).
   *- sender the survey creator object that fires the event
   *- options.survey the survey object showing in the creator.
   *- options.reason indicates what component of the creator requests the survey. There are several reason types: "designer" - survey for designer survey, "test" - survey for "Preview" tab and "conditionEditor", "defaultValueEditor", "restfulEditor" - surveys for different property editors.
   */
  public onSurveyInstanceCreated: CreatorEvent = new CreatorEvent();

  /**
   * An event that is raised when Survey Creator obtains a survey element name to display it in the UI.
   * 
   * Handle this event to replace survey element names in the UI with custom display texts.
   * If you only want to replace the names with survey element titles, enable the [`showObjectTitles`](https://surveyjs.io/survey-creator/documentation/surveycreator#showObjectTitles) property instead of handling this event.
   * 
   * The event handler accepts the following arguments:
   * 
   * - `sender`- A Survey Creator instance that raised the event.
   * - `options.obj` - The instance of a survey element (survey, page, question, or panel) whose name has been requested.
   * - `options.area` - A Survey Creator UI element that requests the display name.
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
   * - `options.displayName` - Modify this property to set a custom display text for the survey element.
   * - `options.reason` - Obsolete. Use the `options.area` property instead.
   *   - `"condition"` - Use the `"condition-editor"` value of `options.area` instead.
   *   - `"survey-tester"` - Use the `"preview-tab:page-list"` value of `options.area` instead.
   *   - `"survey-tester-selected"` - Use the `"preview-tab:selected-page"` value of `options.area` instead.
   *   - `"survey-translation"` - Use the `"translation-tab"` value of `options.area` instead.
   *   - `"property-editor"` - Use the `"property-grid:property-editor"` value of `options.area` instead.
   *   - `"property-grid"` - Use the `"property-grid-header:element-list"` value of `options.area` instead.
   *   - `"property-grid-title"` - Use the `"property-grid-header:selected-element"` value of `options.area` instead.
   */
  public onGetObjectDisplayName: CreatorEvent = new CreatorEvent();

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
  public onHtmlToMarkdown: CreatorEvent = new CreatorEvent();

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
   * - `options.allowChangeInputType` - Allows users to change the [`inputType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#inputType) property of Single-Line Input questions.
   * - `options.allowCopy` - Allows users to duplicate the survey element.
   * - `options.allowDelete` - Allows users to delete the survey element.
   * - `options.allowDragging` - Allows users to drag and drop the survey element.
   * - `options.allowEdit` - Allows users to edit survey element properties on the design surface. If you disable this property, users can edit the properties only in the Property Grid.
   *
   * To disable a user interaction, set the correponding `allow...` property to `false`.
   */
  public onElementAllowOperations: CreatorEvent = new CreatorEvent();

  /**
   * Use this event to add/remove/modify the element (question/panel) menu items.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object which property is edited in the Property Editor.
   *- options.items the list of menu items. It has two required fields: text and onClick: function(obj: Survey.Base) {} and optional name field.
   * @see onElementAllowOperations
   */
  public onDefineElementMenuItems: CreatorEvent = new CreatorEvent();
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
  public onShowingProperty: CreatorEvent = new CreatorEvent();
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
  public onCanShowProperty: CreatorEvent = this.onShowingProperty;
  /**
   * The event is called after a survey that represents the Property Grid is created and all its questions (property editors) are setup.
   * You can use this event to modify this survey to change the property grid behavior
   *- options.obj the survey object that is currently editing in the property grid
   *- options.survey the property grid survey
   */
  public onPropertyGridSurveyCreated: CreatorEvent = new CreatorEvent();
  /**
    * The event is called after a property editor (in fact a survey question) has been created and all it's properties have been assign.
    * You can use this event to modify the property editor properties or set event handlers to customize it's behavior
    *- options.obj the survey object that is currently editing in the property grid
    *- options.property the property that the current property editor is editing
    *- options.editor the property editor. In fact it is a survey question. We are using a heavily customizable survey as a property grid in Creator V2. It means that every property editor is a question.
    */
  public onPropertyEditorCreated: CreatorEvent = new CreatorEvent();
  /**
   * The event is called after a property editor setups its title actions.
   * You can use this event to modify the property editor title actions
   *- options.obj the survey object that is currently editing in the property grid
   *- options.property the property that the current property editor is editing
   *- options.editor the property editor. In fact it is a survey question. We are using a heavily customizable survey as a property grid in Creator V2. It means that every property editor is a question.
   *- options.titleActions the list of title actions.
   */
  public onPropertyEditorUpdateTitleActions: CreatorEvent = new CreatorEvent();
  /**
   * An event that is raised before Survey Creator displays a pop-up window called from the Property Grid. This window allows users to edit choices, conditions, and so on.
   *
   * Use this event to customize the pop-up window, for example, add custom action buttons.
   *
   * Parameters:
   *
   * - `sender` - A Survey Creator instance that raised the event.
   * - `options.obj` - An instance of a survey element (question or panel) that users are configuring in the Property Grid.
   * - `options.property`- A `JsonObjectProperty` object with metadata about the property being edited.
   * - `options.editor` - A property editor. It is an object of the [`Question`](https://surveyjs.io/form-library/documentation/question) type because the Property Grid is [built upon a regular survey](https://surveyjs.io/survey-creator/documentation/creator-v2-whats-new#survey-creator-ui-elements-are-surveys).
   * - `options.popupEditor` - An editor inside the pop-up window.
   * - `options.popupModel` - A `PopupBaseViewModel` object that describes the pop-up window model. Use `options.popupModel.footerToolbar` to access the actions at the bottom of the window.
   */
  public onPropertyGridShowModal: CreatorEvent = new CreatorEvent();
  /**
    * The event is called before rendering a delete button in the Property Grid or in Question Editor.
    * @Deprecated Obsolete, please use onCollectionItemAllowOperations
    *- sender the survey creator object that fires the event
    *- options.obj the survey Question
    *- options.item the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
    *- options.canDelete a boolean value. It is true by default. Set it false to remove delete button from the Property Grid or in Question Editor
    * @see onCollectionItemAllowOperations
    */
  public onCanDeleteItem: CreatorEvent = new CreatorEvent();
  /**
   * The event is called on deleting a collection item from the Property Editor. For example: column in columns editor or item in choices and so on.
   * @Deprecated Obsolete, please use onCollectionItemAllowOperations
   *- sender the survey creator object that fires the event
   *- options.obj the survey object: Question, Panel, Page or Survey
   *- options.property the collection property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
   *- options.propertyName the collection property name
   *- options.collection the editing collection where deleting item is located. It is can be columns in the matrices or choices in dropdown question and so on.
   *- options.item the collection item that we are going to delete
   *- options.allowDelete a boolean value. It is true by default. Set it false to abondome the element removing from the collection
   * @see onCollectionItemAllowOperations
   */
  public onCollectionItemDeleting: CreatorEvent = new CreatorEvent();
  /**
   * The event is called before rendering a collection item in a property editor. For example: a column in a column editor, or an item in Choices and so on.
   * Use this event to prevent a collection item from being edited or removed from a collection. 
   *- sender the survey creator object that fires the event
   *- options.obj the survey object: Question, Panel, Page or Survey
   *- options.property the collection property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
   *- options.propertyName the collection property name
   *- options.collection a collection where a target item is located. It is can be Columns in Matrices or Choices in Dropdown question and so on.
   *- options.item a target collection item
   *- options.allowDelete a boolean value. It is `true` by default. Set it false to prevent an item from being removed from the collection
   *- options.allowAdd a boolean value. It is `true` by default. Set it false to prevent an item from being added to the collection
   *- options.allowEdit a boolean value. It is `true` by default. Set it `false` to disable editing.
   */
  public onCollectionItemAllowOperations: CreatorEvent = new CreatorEvent();
  /**
    * The event is called on adding a new Survey.ItemValue object. It uses as an element in choices array in Radiogroup, checkbox and dropdown questions or Matrix columns and rows properties.
    * Use this event, to set ItemValue.value and ItemValue.text properties by default or set a value to the custom property.
    *- sender the survey creator object that fires the event
    *- options.obj the object that contains the itemsValues array, for example selector, rating and single choice matrix questions.
    *- options.propertyName  the object property Name. It can be "choices" for selector questions or rateValues for rating question or columns/rows for single choice matrix.
    *- options.newItem a new created Survey.ItemValue object.
    *- options.itemValues an editing Survey.ItemValue array. newItem object is not added yet into this array.
    */
  public onItemValueAdded: CreatorEvent = new CreatorEvent();
  /**
   * The event is called when a user adds a new column into MatrixDropdown or MatrixDynamic questions. Use it to set some properties of Survey.MatrixDropdownColumn by default, for example name or a custom property.
   *- sender the survey creator object that fires the event
   *- options.matrix a matrix question where column is located, matrix.columns.
   *- options.newColumn a new created Survey.MatrixDropdownColumn object.
   *- options.columns editable columns objects. They can be different from options.matrix.columns. options.columns and options.matrix.columns are equal after user press Apply or Cancel and options.columns will be set to options.matrix.columns or reset to initial state.
   */
  public onMatrixColumnAdded: CreatorEvent = new CreatorEvent();
  /**
   * Use this event to control Property Editors UI.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object which property is edited in the Property Editor.
   *- options.propertyName  the name of the edited property.
   *- options.editorOptions  options that can be changed.
   *- options.editorOptions.allowAddRemoveItems a boolean property, true by default. Set it false to disable add/remove items in array properties. For example 'choices', 'columns', 'rows'.
   *- options.editorOptions.allowRemoveAllItems a boolean property, true by default. Set it false to disable remove all items in array properties. For example 'choices', 'columns', 'rows'.
   *- options.editorOptions.allowBatchEdit a boolean property, true by default. Set it false to hide the "Edit" button for the "choices" property.
   *- options.editorOptions.itemsEntryType a string property, 'form' by default. Set it 'fast' to show "Manual Entry" tab for "choices" property by default.
   */
  public onSetPropertyEditorOptions: CreatorEvent = new CreatorEvent();
  /**
   * The event is called on generation a new name for a new created element.
   *- sender the survey creator object that fires the event
   *- options.element a new created survey element. It can be question, panel or page
   *- options.name a new suggested name, that is unique for the current survey. You can suggest your own name. If it is unique, creator will assign it to the element.
   *- options.isUnique a boolean property, set this property to false, if you want to ask Creator to generate another name
   */
  public onGenerateNewName: CreatorEvent = new CreatorEvent();
  /**
   * Use this event to show a custom error in the Question Editor on pressing Apply or OK buttons, if the values are not set correctly. The error will be displayed under the property editor.
   *- sender the survey creator object that fires the event
   *- options.obj the survey object which property is edited in the Property Editor.
   *- options.propertyName  the name of the edited property.
   *- options.value the property value.
   *- options.error the error you want to display. Set the empty string (the default value) or null if there is no errors.
   * @see onPropertyValueChanging
   */
  public onPropertyValidationCustomError: CreatorEvent = new CreatorEvent();
  /**
   * An event that is raised each time a user modifies a survey object property. Use this event to validate or correct a property value while the user enters it.
   *
   * The event handler accepts the following arguments:
   *
   * - `sender`- A Survey Creator instance that raised the event.
   * - `options.obj` - A survey object instance (question or panel) whose property is being edited.
   * - `options.propertyName` - The name of the property.
   * - `options.value` - An old property value.
   * - `options.newValue` - A new property value. Specify this field if you want to override the entered value.
   * @see onPropertyValidationCustomError
   * @see onSurveyPropertyValueChanged
   */
  public onPropertyValueChanging: CreatorEvent = new CreatorEvent();
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
  public onSurveyPropertyValueChanged: CreatorEvent = new CreatorEvent();
  /**
    * Use this event to modify the list (name and titles) of the questions available in a condition editor.
    *- sender the survey creator object that fires the event
    *- options.obj the survey object which property is edited in the Property Editor.
    *- options.propertyName  the name of the edited property.
    *- options.editor the instance of Property Editor.
    *- options.list the list of the questions available for condition
    *- options.sortOrder "asc" (default) | "none". Change it to "none", if you don't want to sort your condition list
    */
  public onConditionQuestionsGetList: CreatorEvent = new CreatorEvent();
  /**
   * Use this event to modify the title in a condition editor. The title is changing during editing. In case of empty or incorrect expression it tells that expression is incorrect
   *- sender the survey creator object that fires the event.
   *- options.expression the current expression. If the expression is empty or incorrect then the value is empty.
   *- options.title the default value of the title. You can change the default value.
   */
  public onConditionGetTitle: CreatorEvent = new CreatorEvent();
  /**
   * An event that is raised when Survey Creator populates a condition editor with operators. Use this event to hide individual condition operators.
   * 
   * Parameters:
   * 
   * - `sender`: `CreatorBase`\
   * A Survey Creator instance that raised the event.
   * - `options.questionName`: `String`\
   * The name of a question for which conditions are displayed.
   * - `options.questionName`: `String`\
   * The type of a question for which conditions are displayed.
   * The name of a question for which conditions are displayed.
   * - `options.operator`: `"empty"` | `"notempty"` | `"equal"` | `"notequal"` | `"contains"` | `"notcontains"` | `"anyof"` | `"allof"` | `"greater"` | `"less"` | `"greaterorequal"` | `"lessorequal"`\
   * A condition opeator for which the event is raised.
   * - `options.show`: `Boolean`\
   * A Boolean property that you can set to `false` if you want to hide the condition operator.
   * 
   */
  public onGetConditionOperator: CreatorEvent = new CreatorEvent();
  /**
   * Use this event to modify the display text of a logic item in the Logic tab.
   * 
   * The event handler accepts the following arguments:
   * 
   * - `sender` - A Survey Creator instance that raised the event.
   * - `options.expression` - A logical expression associated with the logic item. 
   * - `options.expressionText` - The same expression in a user-friendly format. It may contain question titles instead of question names.
   * - `options.logicItem` - A logic item object. Contains an array of actions and other properties.
   * - `options.text` - The expression and actions in a user-friendly format. Redefine this property if you want to change the display text.
   */
  public onLogicItemDisplayText: CreatorEvent = new CreatorEvent();
  /**
    * An event that is raised when users modify survey or theme settings.
    * 
    * Parameters:
    * 
    * - `sender`: `CreatorBase`\
    * A Survey Creator instance that raised the event.
    * 
    * - `options.type`: `"ADDED_FROM_TOOLBOX"` | `"PAGE_ADDED"` | `"PAGE_MOVED"` | `"QUESTION_CONVERTED"` | `"QUESTION_CHANGED_BY_EDITOR"` | `"PROPERTY_CHANGED"` | `"ELEMENT_REORDERED"` | `"OBJECT_DELETED"` | `"VIEW_TYPE_CHANGED"` | `"DO_DROP"` | `"TRANSLATIONS_CHANGED"` | `"JSON_EDITOR"` | `"THEME_MODIFIED"`\
    * A value that indicates the modification.
    * 
    * Depending on the `options.type` value, the `options` object contains parameters listed below:
    * 
    * `options.type`: `"ADDED_FROM_TOOLBOX"`\
    * - `options.question` - An added question.
    * 
    * `options.type`: `"PAGE_ADDED"`\
    * - `options.newValue` - An added page.
    *
    * `options.type`: `"PAGE_MOVED"`\
    * - `options.page` - A moved page.
    * - `options.indexFrom` - A previous index.
    * - `options.indexTo` - A current index.
    *
    * `options.type`: `"QUESTION_CONVERTED"`\
    * - `options.className` - The name of a class to which a question has been converted.
    * - `options.oldValue` - An object of a previous class.
    * - `options.newValue` - An object of a class specified by `options.className`.
    *
    * `options.type`: `"QUESTION_CHANGED_BY_EDITOR"`\
    * - `options.question` - A question that has been edited in a pop-up editor.
    *
    * `options.type`: `"PROPERTY_CHANGED"`\
    * - `options.name` - The name of the changed property.
    * - `options.target` - An object that contains the changed property.
    * - `options.oldValue` - A previous value of the changed property.
    * - `options.newValue` - A new value of the changed property.
    *
    * `options.type`: `"ELEMENT_REORDERED"`\
    * - `options.arrayName` - The name of the changed array.
    * - `options.parent` - An object that contains the changed array.
    * - `options.element` - A reordered element.
    * - `options.indexFrom` - A previous index.
    * - `options.indexTo` - A current index.
    *
    * `options.type`: `"OBJECT_DELETED"`\
    * - `options.target` - A deleted object.
    *
    * `options.type`: `"VIEW_TYPE_CHANGED"`\
    * - `options.newType` - A current view: `"editor"` or `"designer"`.
    *
    * `options.type`: `"DO_DROP"`\
    * - `options.page` - A parent page of the dragged element.
    * - `options.source` - A dragged element.
    * - `options.target` - A drop target.
    * - `options.newElement` - A new element. This parameter is defined only if users drag a question or panel from the Toolbox.
    */
  public onModified: CreatorEvent = new CreatorEvent();
  /**
   * The event is called on adding a new question into the survey. Typically, when a user dropped a Question from the Question Toolbox into designer Survey area.
   *- sender the survey creator object that fires the event
   *- options.question a new added survey question. Survey.Question object
   *- options.page the survey Page object where question has been added.
   *- options.reason how question has been added via UI: ADDED_FROM_TOOLBOX, ADDED_FROM_PAGEBUTTON, ELEMENT_COPIED.
   */
  public onQuestionAdded: CreatorEvent = new CreatorEvent();
  /**
   * The event is called on adding a new panel into the survey.  Typically, when a user dropped a Panel from the Question Toolbox into designer Survey area.
   *- sender the survey creator object that fires the event
   *- options.panel a new added survey panel. Survey.Panel object
   *- options.page the survey Page object where question has been added.
   */
  public onPanelAdded: CreatorEvent = new CreatorEvent();
  /**
   * The event is called on adding a new page into the survey.
   *- sender the survey creator object that fires the event
   *- options.page the new survey Page object.
   */
  public onPageAdded: CreatorEvent = new CreatorEvent();

  /**
   * An event that is raised when Survey Creator renders action buttons under each page on the design surface. Use this event to add, remove, or modify the buttons.
   * 
   * Parameters:
   * 
   * - `sender`: `CreatorBase`\
   * A Survey Creator instance that raised the event.
   * - `options.actions`: [`IAction[]`](/form-library/documentation/api-reference/iaction)\
   * An array of actions. You can add or remove actions from this array.
   * - `options.page`: [`PageModel`](/form-library/documentation/api-reference/page-model)\
   * A page for which the event is raised.
   * - `options.addNewQuestion(type)`: Method\
   * Adds a new question of a specified [`type`](/form-library/documentation/api-reference/question#getType) to the page.
   */
  public onGetPageActions: CreatorEvent = new CreatorEvent();

  /**
   * The event is fired when the survey creator is initialized and a survey object (Survey.Survey) is created.
   *- sender the survey creator object that fires the event
   *- options.survey  the survey object showing in the creator.
   */
  public onDesignerSurveyCreated: CreatorEvent = new CreatorEvent();
  /**
   * The event is fired when the survey creator creates survey in Preview tab for testing.
   *- sender the survey creator object that fires the event
   *- options.survey  the survey object showing in the "Preview" tab.
   */
  public onPreviewSurveyCreated: CreatorEvent = new CreatorEvent();
  /**
    * Obsolete. Please use onPreviewSurveyCreated event.
    * @see onPreviewSurveyCreated
    */
  public onTestSurveyCreated: CreatorEvent = this.onPreviewSurveyCreated;
  /**
   * The event is called in case of UI notifications. By default all notifications are done via built-in alert () function.
   * In case of any subscriptions to this event all notifications will be redirected into the event handler.
   *- options.message is a message to show.
   */
  public onNotify: CreatorEvent = new CreatorEvent();
  /**
   * The event is called on changing the selected element. You may change the new selected element by changing the property options.newSelectedElement to your own
   *- options.newSelectedElement the element that is going to be selected in the survey desiger: question, panel, page or survey.
   */
  public onSelectedElementChanging: CreatorEvent = new CreatorEvent();
  /**
   * The event is called after the selected element is changed.
   *- options.newSelectedElement the new selected element in the survey desiger: question, panel, page or survey.
   */
  public onSelectedElementChanged: CreatorEvent = new CreatorEvent();
  /**
   * The event is fired then one need to choose files.
   * 
   * - `sender` - the survey creator object that fires the event
   * - `options.input` - file input HTML element
   * - `options.callback` - need to be called after files has been chosen
   * @see uploadFiles
   */
  public onOpenFileChooser: CreatorEvent = new CreatorEvent();
  /**
   * The event is fired on uploading the files.
   * 
   * - `sender` - the survey creator object that fires the event
   * - `options.files` - the Javascript File objects array
   * - `options.callback(status, imageLink)` - called on upload complete
   * 
   *  [View Demo](https://surveyjs.io/survey-creator/examples/file-upload/ (linkStyle))   
   * @see uploadFiles
   */
  public onUploadFile: CreatorEvent = new CreatorEvent();
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
  public onTranslationStringVisibility: CreatorEvent = new CreatorEvent();
  /**
   * Use this event to define is the locale initially selected (default value) and ready for translaion or it is unselected.
   *
   * The event handler accepts the following arguments:
   *
   * - `sender` - A Survey Creator instance that raised the event.
   * - `options.locale` - the locale name, like 'en', 'de' and so on.
   * - `options.isSelected` - it is true by default. Set it to false to make the translation unselected.
   */
  public onTranslationLocaleInitiallySelected: CreatorEvent = new CreatorEvent();
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
  public onTranslationImportItem: CreatorEvent = new CreatorEvent();
  /**
  * The event is called when the translation from csv file is imported.
  * @see translation
  * @see showTranslationTab
  */
  public onTranslationImported: CreatorEvent = new CreatorEvent();
  /**
   * Use this event to modify a translated string before it is exported to CSV.
   *
   * The event handler accepts the following arguments:
   *
   * - `sender` - A Survey Creator instance that raised the event.
   * - `options.obj` - A survey object instance (survey, page, panel, question) whose string translations are being exported to CSV.
   * - `options.locale` - The current locale identifier (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
   * - `options.name` - A full name of the translated string. It is composed of names of all parent elements, for example: `"mySurvey.page1.question2.title"`.
   * - `options.locString` - A `LocalizableString` instance. Call the `options.locString.getLocaleText(locale)` method if you need to get a text string for a specific locale.
   * - `options.text` - A text string to be exported. The string is taken from the current locale. Redefine this property if you want to export a different string.
   */
  public onTranslationExportItem: CreatorEvent = new CreatorEvent();

  /**
   * An event that is raised before a string translation is changed. Use this event to override a new translation value.
   * 
   * Parameters:
   *
   * - `sender`: `CreatorBase`\
   * A Survey Creator instance that raised the event.
   * - `options.obj`: `any`\
   * A survey object instance (survey, page, panel, question) whose string translation is being changed.
   * - `options.locale`: `String`\
   * The current locale identifier (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
   * - `options.locString`: `LocalizableString`\
   * An object that you can use to manipulate a localization string. Call the `options.locString.getLocaleText(locale)` method if you need to get a text string for a specific locale.
   * - `options.newText`: `String`\
   * A new value for the string translation.
   * 
   * Refer to the following help topics for more information on localization:
   * 
   * - [Localization & Globalization in SurveyJS Form Library](https://surveyjs.io/form-library/documentation/survey-localization)
   * - [Localization & Globalization in Survey Creator](https://surveyjs.io/survey-creator/documentation/localization)
   */
  public onTranslationItemChanging: CreatorEvent = new CreatorEvent();

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
  public onDragDropAllow: CreatorEvent = new CreatorEvent();

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
   * Limits the number of visible choices. Users can click "Show more" to view hidden choices.
   * 
   * Set this property to -1 if you do not want to hide any choices.
   * 
   * Default value: 10
   */
  public maxVisibleChoices: number = 10;

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

  @property({ defaultValue: false }) hasPendingThemeChanges: boolean;
  @property({ defaultValue: true }) isThemePristine: boolean;

  private _theme: ITheme = { cssVariables: {} };
  public get theme(): ITheme { return this._theme; }
  public set theme(newTheme: ITheme) {
    this._theme = newTheme;
    this.raiseThemeChanged();
  }

  public raiseThemeChanged(): void {
    this.hasPendingThemeChanges = true;
    const options = {
      propertyName: "theme",
      obj: this,
      value: this.theme,
      type: "THEME_MODIFIED"
    };
    this.setModified(options);
  }

  private _allowModifyPages = true;
  /**
   * Specifies whether users can add, edit, and delete survey pages.
   *
   * Default value: `true`
   */
  public get allowModifyPages() {
    return this._allowModifyPages;
  }
  public set allowModifyPages(val: boolean) {
    this._allowModifyPages = val;
    this.changePageModifications(val);
  }

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
   * Display the language selector only if the survey is translated into more than one language.
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
   * [View Demo](https://surveyjs.io/Examples/Creator?id=theme-switcher (linkStyle))
   */
  public allowChangeThemeInPreview = true;

  public tabbedMenu: AdaptiveActionContainer<TabbedMenuItem>;

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
    return this.getPropertyValue("locale", editorLocalization.currentLocale);
  }
  public set locale(value: string) {
    if (editorLocalization.currentLocale === value) return;
    editorLocalization.currentLocale = value;
    this.setPropertyValue("locale", value);
    this.toolbox.updateTitles();
    this.refreshPlugin();
    const selEl = this.selectedElement;
    if (!!selEl) {
      this.selectElement(null);
      this.selectElement(selEl);
    }
    this.locStrsChanged();
  }
  public locStrsChanged(): void {
    super.locStrsChanged();
    this.tabbedMenu.locStrsChanged();
    this.toolbar.locStrsChanged();
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
   * An event that is raised before the [active tab](#activeTab) is switched. Use this event to allow or cancel the switch.
   * 
   * Parameters:
   * 
   * - `sender`: `CreatorBase`\
   * A Survey Creator instance that raised the event.
   * - `options.tabName`: `"designer"` | `"test"` | `"theme"` | `"editor"` | `"embed"` | `"logic"` | `"translation"`\
   * A tab that is going to become active.
   * - `options.allow`: `Boolean`\
   * Specifies whether the active tab can be switched. Set this property to `false` if you want to cancel the switch.
   */
  public onActiveTabChanging: CreatorEvent = new CreatorEvent();

  /**
   * An event that is raised after the [active tab](#activeTab) is switched.
   * 
   * Parameters:
   * 
   * - `sender`: `CreatorBase`\
   * A Survey Creator instance that raised the event.
   * - `options.tabName`: `"designer"` | `"test"` | `"theme"` | `"editor"` | `"embed"` | `"logic"` | `"translation"`\
   * A tab that has become active.
   */
  public onActiveTabChanged: CreatorEvent = new CreatorEvent();
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
    const plugin: ICreatorPlugin = this.currentPlugin;
    if (!!plugin && !!plugin.canDeactivateAsync) {
      plugin.canDeactivateAsync(() => {
        this.switchViewType(viewName);
      });
      return undefined;
    }
    return this.switchViewType(viewName);
  }
  private switchViewType(viewName: string): boolean {
    let allow = true;
    if (!!this.currentPlugin?.defaultAllowingDeactivate) {
      allow = this.currentPlugin.defaultAllowingDeactivate();
      if (allow === undefined) return false;
    }
    const chaningOptions = { tabName: viewName, allow: allow, model: this.currentPlugin?.model };
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
    this.previewOrientation = options.previewOrientation;
    this.toolbarValue = new ToolbarActionContainer(this);
    this.toolbarValue.locOwner = this;
    this.tabbedMenu = new TabbedMenuContainer();
    this.tabbedMenu.locOwner = this;
    this.selectionHistoryControllerValue = new SelectionHistory(this);
    this.sidebar = new SidebarModel(this);
    this.setOptions(this.options);
    this.patchMetadata();
    this.initSurveyWithJSON(undefined, false);
    this.toolbox = new QuestionToolbox(this.options && this.options.questionTypes ? this.options.questionTypes : null, this, true);
    this.updateToolboxIsCompact();
    this.initTabs();
    this.initDragDrop();
    this.isTouch = IsTouch;
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
  @property() showSidebarValue: boolean = true;
  public onShowSidebarVisibilityChanged: CreatorEvent = new CreatorEvent();
  /**
   * Specifies whether to show the sidebar that displays Property Grid.
   * 
   * Default value: `true`
   * @see sidebarLocation
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
  public onShowPropertyGridVisiblityChanged: CreatorEvent = new CreatorEvent();
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
  public onBeforeUndo: CreatorEvent = new CreatorEvent();
  /**
   * The event is called before redo happens.
   *- options.canRedo a boolean value. It is true by default. Set it false to hide prevent redo operation.
   */
  public onBeforeRedo: CreatorEvent = new CreatorEvent();
  /**
   * The event is called after undo happens.
   *- options.state is an undo/redo item.
   */
  public onAfterUndo: CreatorEvent = new CreatorEvent();
  /**
   * The event is called after redo happens.
   *- options.state is an undo/redo item.
   */
  public onAfterRedo: CreatorEvent = new CreatorEvent();

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
  /**
   * An event that is raised before a new page is added to the survey.
   * 
   * Parameters:
   *
   * - `sender`: `CreatorBase`\
   * A Survey Creator instance that raised the event.
   * - `options.page`: [`PageModel`](https://surveyjs.io/form-library/documentation/api-reference/page-model)\
   * An added page.
   * - `options.allow`: `Boolean`\
   * Set this property to `false` if you do not want to add the page.
   */
  public onPageAdding: CreatorEvent = new CreatorEvent();
  @undoRedoTransaction()
  public addPage(pageToAdd?: PageModel, changeSelection = true, beforeAdd?: () => boolean): PageModel {
    const options = {
      page: pageToAdd,
      allow: true
    };
    this.onPageAdding.fire(this, options);
    if (!options.allow) {
      return null;
    }
    if (beforeAdd !== undefined) {
      if (!beforeAdd()) {
        return;
      }
    }
    let page = pageToAdd;
    if (!page) {
      page = this.addNewPageIntoSurvey();
    } else {
      this.survey.addPage(page);
    }
    if (changeSelection) {
      this.selectElement(page);
    }
    return page;
  }
  private addNewPageIntoSurvey(): PageModel {
    const name: string = SurveyHelper.getNewPageName(this.survey.pages);
    return this.survey.addNewPage(name);
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
    if (this.showThemeTab) {
      new ThemeTabPlugin(this);
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
      parentProperty = Serializer.findProperty(
        parentObj.getType(),
        obj.ownerPropertyName || propertyName
      );
      let allowEdit = true;
      if (parentObj instanceof QuestionSelectBase) allowEdit = (parentObj as QuestionSelectBase).isItemInList(obj);

      const allowQuestionOperations = this.getElementAllowOperations(parentObj);
      if (allowQuestionOperations.allowEdit === false)
        return false;

      const options: ICollectionItemAllowOperations = { allowDelete: true, allowEdit: allowEdit, allowAdd: true };
      this.onCollectionItemAllowingCallback(parentObj,
        property,
        parentObj.getPropertyValue(parentProperty?.name),
        obj,
        options
      );
      if (options.allowEdit === false) {
        return false;
      }

      if (this.onIsPropertyReadOnlyCallback(
        parentObj,
        parentProperty,
        parentProperty?.readOnly,
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
  private isInitialSurveyEmptyValue: boolean;
  /**
   * Returns true if initial survey was empty. It was not set via JSON property and default new survey is empty as well.
   * @returns true if initial survey doesn't have any elements or properties
   */
  public get isInitialSurveyEmpty(): boolean { return this.isInitialSurveyEmptyValue; }
  protected initSurveyWithJSON(json: any, clearState: boolean): void {
    if (!json) {
      json = { "logoPosition": "right" };
    }
    // currentPlugin.deactivate && currentPlugin.deactivate();
    this.existingPages = {};
    const survey = this.createSurvey({});
    survey.css = defaultV2Css;
    survey.setDesignMode(true);
    survey.lazyRendering = true;
    survey.setJsonObject(json);
    this.isInitialSurveyEmptyValue = survey.isEmpty;
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
      (<any>options).survey = sender;
      this.onDragDropAllow.fire(this, options);
    });

    this.setSurvey(survey);
    this.updatePlugin(this.activeTab);
    if (this.activeTab !== "designer") {
      this.updatePlugin("designer");
    }
    if (!!this.undoRedoController) {
      this.undoRedoController.updateSurvey();
    }
  }
  private updatePlugin(name: string): void {
    const plugin = this.getPlugin(this.activeTab);
    if (!!plugin && !!plugin.update) {
      plugin.update();
    }
  }
  protected initDragDrop() {
    this.initDragDropSurveyElements();
    this.initDragDropChoices();
  }
  /**
   * An event that is raised when users start to drag a survey element within the design surface.
   * 
   * Parameters:
   * 
   * - `sender`: `CreatorBase`\
   * A Survey Creator instance that raised the event.
   * - `options.draggedElement`: `any`\
   * A survey element being dragged.
   * - `options.fromElement`: `any`\
   * A survey element from which `draggedElement` is being dragged.
   * - `options.toElement`: `any`\
   * A survey element to which `draggedElement` is being dragged.
   * @see onDragEnd
   */
  public onDragStart: Event<() => any, any, any> = new Event<() => any, any, any>();
  public onBeforeDrop: Event<() => any, any, any> = this.onDragStart;
  /**
   * An event that is raised when users finish dragging a survey element within the design surface.
   * 
   * Parameters:
   * 
   * - `sender`: `CreatorBase`\
   * A Survey Creator instance that raised the event.
   * - `options.draggedElement`: `any`\
   * A survey element that was dragged.
   * - `options.fromElement`: `any`\
   * A survey element from which `draggedElement` was dragged.
   * - `options.toElement`: `any`\
   * A survey element to which `draggedElement` was dragged.
   */
  public onDragEnd: Event<() => any, any, any> = new Event<() => any, any, any>();
  public onAfterDrop: Event<() => any, any, any> = this.onDragEnd;
  private initDragDropSurveyElements() {
    DragDropSurveyElements.restrictDragQuestionBetweenPages =
      settings.dragDrop.restrictDragQuestionBetweenPages;
    this.dragDropSurveyElements = new DragDropSurveyElements(null, this);
    let isDraggedFromToolbox = false;
    this.dragDropSurveyElements.onDragStart.add((sender, options) => {
      isDraggedFromToolbox = !sender.draggedElement.parent;
      this.onDragStart.fire(sender, options);
      this.startUndoRedoTransaction("drag drop");
    });
    this.dragDropSurveyElements.onDragEnd.add((sender, options) => {
      this.stopUndoRedoTransaction();
      const editTitle = isDraggedFromToolbox && this.startEditTitleOnQuestionAdded;
      this.selectElement(options.draggedElement, undefined, false, editTitle);
      isDraggedFromToolbox = false;
      this.onDragEnd.fire(sender, options);
    });
  }
  private initDragDropChoices() {
    this.dragDropChoices = new DragDropChoices(null, this);
    this.dragDropChoices.onDragStart.add((sender, options) => {
      this.startUndoRedoTransaction("drag drop");
    });
    this.dragDropChoices.onDragEnd.add((sender, options) => {
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
      if (propertyName === "name" && obj.isDescendantOf("selectbase")) {
        this.updateChoicesFromQuestionOnColumnNameChanged(oldValue, obj["name"]);
      }
    }
    if (propertyName === "name" && obj.isDescendantOf("matrixdropdowncolumn")) {
      this.updateLogicOnColumnNameChanged(obj, oldValue, obj["name"]);
    }
  }
  private surveyLogicForUpdate: SurveyLogic;
  private surveyLogicRenaming: boolean;
  private getSurveyLogicForUpdate(): SurveyLogic {
    if (!!this.surveyLogicForUpdate && this.surveyLogicForUpdate.survey !== this.survey) {
      this.surveyLogicForUpdate = undefined;
    }
    if (!this.surveyLogicForUpdate) {
      this.surveyLogicForUpdate = this.createSurveyLogicForUpdate();
    }
    return this.surveyLogicForUpdate;
  }
  private clearSurveyLogicForUpdate(obj: Base, propertyName: string, value: any): void {
    if (this.surveyLogicRenaming || !this.surveyLogicForUpdate || !obj || !propertyName) return;
    if (this.needClearSurveyLogicForUpdate(obj, propertyName, value)) {
      this.surveyLogicForUpdate = undefined;
    }
  }
  private needClearSurveyLogicForUpdate(obj: Base, propertyName: string, value: any): boolean {
    if (Array.isArray(value)) {
      return true;
    }
    const prop = Serializer.findProperty(obj.getType(), propertyName);
    return !!prop && ["expression", "condition", "questionvalue", "question"].indexOf(prop.type) > -1;
  }
  private updateSurveyLogicValues(obj: Base, propertyName: string, oldValue: any): void {
    if (!obj || !propertyName || SurveyHelpers.isValueEmpty(oldValue)) return;
    if (propertyName === "value" && obj.isDescendantOf("itemvalue")) {
      this.updateSurveyLogicItemValue(<ItemValue>obj, oldValue);
    }
  }
  private updateSurveyLogicItemValue(item: ItemValue, oldValue: any): void {
    if (!item.locOwner || !settings.logic.updateExpressionsOnChanging.choiceValue) return;
    if (["choices", "rateValues", "columns", "rows"].indexOf(item.ownerPropertyName) < 0) return;
    this.surveyLogicRenaming = true;
    const logicUpdater = this.getSurveyLogicForUpdate();
    if (item.ownerPropertyName === "rows") {
      logicUpdater.renameRowValue(item, oldValue);
    } else {
      logicUpdater.renameItemValue(item, oldValue);
    }
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
    this.getSurveyLogicForUpdate().renameColumn(<MatrixDropdownColumn>column, oldName);
    this.surveyLogicRenaming = false;
  }
  private updateChoicesFromQuestionOnColumnNameChanged(oldName: string, newName: string) {
    const questions = this.getAllQuestions();
    questions.forEach(q => {
      if (q.choicesFromQuestion === oldName) {
        q.choicesFromQuestion = newName;
      }
    });
  }
  public isObjQuestion(obj: Base): boolean {
    return this.isObjThisType(obj, "question");
  }
  public isObjPage(obj: Base): boolean {
    return this.isObjThisType(obj, "page");
  }
  private isObjThisType(obj: Base, typeName: string): boolean {
    var classInfo = Serializer.findClass(obj.getType());

    while (!!classInfo && !!classInfo.parentName) {
      if (classInfo.name === typeName) return true;
      classInfo = Serializer.findClass(classInfo.parentName);
    }
    return !!classInfo && classInfo.name === typeName;
  }

  private addNewElementReason: string;
  public onDragDropItemStart(): void {
    this.addNewElementReason = "DROPPED_FROM_TOOLBOX";
  }
  @ignoreUndoRedo()
  private doOnQuestionAdded(question: Question, parentPanel: any) {
    question.name = this.generateUniqueName(question, question.name);
    var page = this.getPageByElement(question);
    var options = { question: question, page: page, reason: this.addNewElementReason };
    this.addNewElementReason = undefined;
    this.onQuestionAdded.fire(this, options);
  }
  @ignoreUndoRedo()
  private doOnPanelAdded(panel: PanelModel, parentPanel: any) {
    var page = this.getPageByElement(panel);
    var options = { panel: panel, page: page, reason: this.addNewElementReason };
    this.onPanelAdded.fire(this, options);
    this.addNewElementReason = undefined;
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
  public changeText(value: string, clearState = false): void {
    this.setTextValue(value);
    if (!value) {
      this.initSurveyWithJSON(undefined, clearState);
    } else {
      const textWorker = new SurveyTextWorker(value);
      if (textWorker.isJsonCorrect || !!textWorker.survey) {
        this.initSurveyWithJSON(textWorker.survey.toJSON(), clearState);
      } else {
        this.viewType = "editor";
      }
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
      return new JsonObject().toJsonObject(this.survey);
    }
    var surveyJsonText = this.text;
    var textWorker = new SurveyTextWorker(surveyJsonText);
    if (textWorker.isJsonCorrect) {
      return new JsonObject().toJsonObject(textWorker.survey);
    }
    return null;
  }

  public getObjectDisplayName(
    obj: Base,
    area: string,
    reason: string = undefined,
    displayName: string = undefined
  ): string {
    if (!displayName) {
      displayName = SurveyHelper.getObjectName(obj, this.showObjectTitles);
    }
    var options = { obj: obj, displayName: displayName, area: area, reason: reason };
    this.onGetObjectDisplayName.fire(this, options);
    return options.displayName;
  }

  public createSurvey(json: any = {}, reason: string = "designer"): SurveyModel {
    const survey = this.createSurveyCore(json, reason);
    if (reason === "designer" || reason === "modal-question-editor") {
      initializeDesignTimeSurveyModel(survey, this);
    }
    survey["needRenderIcons"] = false;
    if (reason != "designer" && reason != "test") {
      survey.locale = editorLocalization.currentLocale;
      if (!json["clearInvisibleValues"]) {
        survey.clearInvisibleValues = "onComplete";
      }
    }
    this.onSurveyInstanceCreated.fire(this, { survey: survey, reason: reason });
    return survey;
  }
  protected createSurveyCore(json: any = {}, reason: string): SurveyModel {
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
  public onStateChanged: CreatorEvent = new CreatorEvent();

  notifier = new Notifier({
    root: "svc-notifier",
    info: "svc-notifier--info",
    error: "svc-notifier--error",
    success: "svc-notifier--success",
    button: "",
    shown: "svc-notifier--shown"
  });

  public setModified(options: any = null): void {
    this.setState("modified");
    this.onModified.fire(this, options);
    this.isAutoSave && this.doAutoSave(options.type === "THEME_MODIFIED" ? () => this.doSaveTheme() : () => this.doSave());
  }
  public notifySurveyPropertyChanged(options: any): void {
    this.clearSurveyLogicForUpdate(options.target, options.name, options.newValue);
    this.updateSurveyLogicValues(options.target, options.name, options.oldValue);
    const plugin = this.currentPlugin;
    if (!!plugin && !!plugin.onDesignerSurveyPropertyChanged) {
      plugin.onDesignerSurveyPropertyChanged(options.target, options.name);
    }
    if (!this.onSurveyPropertyValueChanged.isEmpty) {
      options.propertyName = options.name;
      options.obj = options.target;
      options.value = options.newValue;
      this.onSurveyPropertyValueChanged.fire(this, options);
    }
    options.type = "PROPERTY_CHANGED";
    this.setModified(options);
  }
  public notifySurveyItemMoved(options: any): void {
    options.type = "ELEMENT_REORDERED";
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

  protected convertQuestion(obj: Question, className: string): Question {
    var newQuestion = <Question>QuestionConverter.convertObject(obj, className, this.getDefaultElementJSON(obj.getType()));
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
    new dxSurveyService().loadSurvey(
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
      this.addNewPageIntoSurvey();
    }
    var parent: IPanel = this.currentPage;
    if (this.pageEditMode === "bypage") {
      const desigerTab = this.getPlugin("designer").model as any;
      const pagesController = desigerTab.pagesController;
      parent = pagesController.page2Display;
    }
    var selectedElement = this.getSelectedSurveyElement();
    if (selectedElement && selectedElement.parent && selectedElement["page"] == parent &&
      (<any>selectedElement !== <any>panel)) {
      if (!panel) {
        while (selectedElement.parent !== null && selectedElement.parent.isPanel) {
          selectedElement = <IElement><any>selectedElement.parent;
        }
      }
      parent = selectedElement.parent;
      if (index < 0) {
        index = parent.elements.indexOf(selectedElement);
        if (index > -1) index++;
      }
    }
    if (panel) {
      parent = panel;
    }
    this.addNewElementReason = modifiedType;
    const currentRow = this.findRowByElement(selectedElement, parent);
    element.setVisibleIndex(-1);
    if (currentRow && this.isRowMultiline(currentRow)) {
      this.addElemenMultiline(parent, element, index, currentRow);
    } else {
      parent.addElement(element, index);
    }
    this.addNewElementReason = "";
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

  public setNewNames(element: ISurveyElement) {
    this.newQuestions = [];
    this.newPanels = [];
    this.newQuestionChangedNames = {};
    this.setNewNamesCore(element);
    this.updateNewElementExpressions(element);
  }
  private updateNewElementExpressions(element: ISurveyElement) {
    var survey = this.createSurvey({}, "updateNewElementExpressions");
    survey.setDesignMode(true);
    if (element.isPage) {
      survey.addPage(<PageModel>element);
    } else {
      survey.addNewPage("p1");
      survey.pages[0].addElement(<IElement>element);
    }
    var logic = new SurveyLogic(survey);
    for (var key in this.newQuestionChangedNames) {
      logic.renameQuestion(key, this.newQuestionChangedNames[key]);
    }
  }

  protected getAllQuestions(includeNewItems: boolean = true): Array<any> {
    return this.getAllElements(false, includeNewItems);
  }
  protected getAllPanels(includeNewItems: boolean = true): Array<any> {
    return this.getAllElements(true, includeNewItems);
  }
  private getAllElements(isPanel: boolean, includeNewItems: boolean): Array<any> {
    const result = SurveyHelper.getAllElements(this.survey, isPanel);
    if(includeNewItems) {
      SurveyHelper.addElements(this.newPanels, isPanel, result);
      SurveyHelper.addElements(this.newQuestions, isPanel, result);
    }
    return result;
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

  protected setNewNamesCore(element: ISurveyElement) {
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
      var panel = <PanelModelBase>(<any>element);
      for (var i = 0; i < panel.elements.length; i++) {
        this.setNewNamesCore(panel.elements[i]);
      }
    } else {
      this.newQuestions.push(element);
    }
  }

  public createNewElement(json: any): IElement {
    var newElement = Serializer.createClass(json["type"]);
    new JsonObject().toObject(json, newElement);
    this.setNewNames(newElement);
    return newElement;
  }

  public copyElement(element: Base): IElement {
    var json = new JsonObject().toJsonObject(element);
    json.type = element.getType();
    return this.createNewElement(json);
  }

  /**
   * Copy a question to the active page
   * @param question A copied Survey.Question
   */
  public fastCopyQuestion(question: Base): IElement {
    var newElement = this.copyElement(question);
    var index = !!question["parent"]
      ? question["parent"].elements.indexOf(question) + 1
      : -1;
    this.doClickQuestionCore(newElement, "ELEMENT_COPIED", index, question["parent"]);
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
    newPage.questions.forEach(q => {
      this.addNewElementReason = "ELEMENT_COPIED";
      this.doOnQuestionAdded(q, q.parent);
    });
    const panels: any = newPage.getPanels();
    if (Array.isArray(panels)) panels.forEach(p => this.doOnPanelAdded(p, p.parent));
    this.addNewElementReason = "";
    return newPage;
  }

  protected deleteObjectCore(obj: any) {
    if (obj.isPage) {
      var newPage = this.getNextPage(obj);
      this.survey.removePage(obj);
      this.selectElement(!!newPage ? newPage : this.survey);
    } else {
      if (this.isInitialSurveyEmpty && this.survey.pageCount === 1) {
        const page = this.survey.pages[0];
        if (page.elements.length === 1 && obj === page.elements[0]) {
          this.deleteObjectCore(page);
          return;
        }
      }
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

  public selectElement(element: any, propertyName?: string, focus: boolean | string = true, startEdit = false) {
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
      this.selectionChanged(this.selectedElement, propertyName, !!focus);
    }
    var selEl: any = this.getSelectedSurveyElement();
    if (oldValue !== element && !!document && !!selEl) {
      this.focusElement(element, focus, selEl, propertyName, startEdit);
    }
  }
  public focusElement(element: any, focus: string | boolean, selEl: any = null, propertyName: string = null, startEdit: boolean = null) {
    if (!selEl) selEl = this.getSelectedSurveyElement();
    setTimeout(() => {
      if (!!selEl && (focus || startEdit && (!selEl.hasTitle || selEl.isPanel))) {
        const el = document.getElementById(selEl.id);
        if (!!el) {
          el.scrollIntoView({ block: "center" });
          if (!propertyName && el.parentElement) {
            let elToFocus: HTMLElement = (typeof (focus) === "string") ? el.parentElement.querySelector(focus) : el.parentElement;
            elToFocus && elToFocus.focus();
          }
        }
      }
      if (startEdit && !!element) {
        StringEditorConnector.get((element as Question).locTitle).activateEditor();
      }
    }, 100);
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
  public get propertyGrid(): SurveyModel {
    return this.designerPropertyGrid.survey;
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
  /**
   * Deletes all custom translation strings for the passed locale from Survey Creator and from the generated survey JSON schema.
   * @param locale A locale code (for example, "en").
   */
  public deleteLocaleStrings(locale: string): void {
    const translation = new Translation(this.survey);
    translation.deleteLocaleStrings(locale);
  }
  private getPropertyGridExpandedCategory(): string {
    if (!this.designerPropertyGrid) return undefined;
    const panels = this.designerPropertyGrid.survey.getAllPanels();
    for (var i = 0; i < panels.length; i++) {
      if ((<PanelModel>panels[i]).isExpanded) return panels[i].name;
    }
    return "";
  }
  private expandCategoryIfNeeded(): void {
    const expandedTabName = settings.propertyGrid.defaultExpandedTabName;
    if (!!expandedTabName && !this.getPropertyGridExpandedCategory() && !this.survey.isEmpty) {
      const panel = <PanelModel>this.designerPropertyGrid.survey.getPanelByName(expandedTabName);
      if (!!panel) {
        panel.expand();
      }
    }
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
      this.expandCategoryIfNeeded();
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
  public clickToolboxItem(newElement: any, panel: IPanel = null, modifiedType: string = "ADDED_FROM_TOOLBOX") {
    if (!this.readOnly) {
      if (newElement["getType"] === undefined) {
        newElement = this.createNewElement(newElement);
      }
      this.survey.lazyRendering = false;
      this.doClickQuestionCore(newElement, modifiedType, -1, panel);
      this.selectElement(newElement, null, true, this.startEditTitleOnQuestionAdded);
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
    question: Question,
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
        question: question,
        files: files || [],
        callback: uploadingCallback
      });
    }
  }

  private _rootElementValue: HTMLElement;
  public get rootElement(): HTMLElement {
    return this._rootElementValue;
  }
  public setRootElement(element: HTMLElement) {
    this._rootElementValue = element;
    this.initKeyboardShortcuts(element);
    this.initResponsivityManager(element as HTMLDivElement);
  }
  public unsubscribeRootElement() {
    this.removeKeyboardShortcuts(this._rootElementValue);
    this.resetResponsivityManager();
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
    if (obj["questions"]) {
      obj["questions"].forEach(q => this.updateConditionsOnRemove(q));
    }
    obj["delete"](false);
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
      while (!this.isNameUnique(el, options.name, false)) {
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
  protected isNameUnique(el: Base, newName: string, includeNewItems: boolean = true): boolean {
    if (!this.isNameUniqueInArray(this.survey.pages, el, newName)) return false;
    if (!this.isNameUniqueInArray(this.getAllPanels(includeNewItems), el, newName))
      return false;
    return this.isNameUniqueInArray(this.getAllQuestions(includeNewItems), el, newName);
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
  onPropertyGridShowModalCallback(object: any,
    property: JsonObjectProperty,
    editor: Question,
    popupEditor: any,
    popupModel: PopupBaseViewModel): void {
    const options = { obj: object, property: property, editor: editor, popupEditor: popupEditor, popupModel: popupModel };
    this.onPropertyGridShowModal.fire(this, options);
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
      allowDelete: itemOptions.allowDelete,
      allowAdd: itemOptions.allowAdd
    };
    this.onCollectionItemAllowOperations.fire(this, options);
    itemOptions.allowEdit = options.allowEdit;
    itemOptions.allowDelete = options.allowDelete;
    itemOptions.allowAdd = options.allowAdd;
  }
  onItemValueAddedCallback(
    obj: Base,
    propertyName: string,
    itemValue: ItemValue,
    itemValues: Array<ItemValue>
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
    matrix: Question,
    column: MatrixDropdownColumn,
    columns: Array<MatrixDropdownColumn>
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
  ): string {
    if (this.onConditionQuestionsGetList.isEmpty) return "asc";
    var options = {
      propertyName: propertyName,
      obj: obj,
      editor: editor,
      sortOrder: "asc",
      list: list
    };
    this.onConditionQuestionsGetList.fire(this, options);
    if (options.list !== list) {
      list.splice(0, list.length);
      for (var i = 0; i < options.list.length; i++) {
        list.push(options.list[i]);
      }
    }
    return options.sortOrder;
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
  isConditionOperatorEnabled(questionName: string, question: Question, operator: string, isEnabled: boolean): boolean {
    if (this.onGetConditionOperator.isEmpty) return isEnabled;
    const options = {
      questionName: questionName,
      question: question,
      questionType: !!question ? question.getType() : "",
      operator: operator,
      show: isEnabled
    };
    this.onGetConditionOperator.fire(this, options);
    return options.show;
  }
  onLogicGetTitleCallback(
    expression: string,
    expressionText: string,
    text: string,
    logicItem: any
  ): string {
    if (this.onLogicItemDisplayText.isEmpty) return text;
    var options = {
      expression: expression,
      expressionText: expressionText,
      text: text,
      logicItem: logicItem
    };
    this.onLogicItemDisplayText.fire(this, options);
    return options.text;
  }
  getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, obj: any): string {
    if (this.onTranslationItemChanging.isEmpty) return newText;
    const options = {
      locale: locale,
      obj: obj,
      locString: locString,
      newText: newText
    };
    this.onTranslationItemChanging.fire(this, options);
    return options.newText;
  }
  getTranslationExportedText(obj: Base, name: string, locString: ILocalizableString, locale: string, text: string): string {
    if (this.onTranslationExportItem.isEmpty) return text;
    const options = {
      obj: obj,
      locString: locString,
      locale: locale,
      text: text
    };
    this.onTranslationExportItem.fire(this, options);
    return options.text;
  }
  /**
   * The delay on saving survey JSON on autoSave in ms. It is 500 ms by default.
   * If during this period of time an end-user modify survey, then the last version will be saved only. Set to 0 to save immediately.
   * @see isAutoSave
   */
  public autoSaveDelay: number = settings.autoSave.delay;
  private autoSaveTimerId = null;
  protected doAutoSave(saveFunc = () => this.doSave()) {
    if (this.autoSaveDelay <= 0) {
      saveFunc();
      return;
    }
    if (!!this.autoSaveTimerId) {
      clearTimeout(this.autoSaveTimerId);
    }
    var self = this;
    this.autoSaveTimerId = setTimeout(function () {
      clearTimeout(self.autoSaveTimerId);
      self.autoSaveTimerId = null;
      saveFunc();
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
          this.setState("modified");
          if (this.showErrorOnFailedSave) {
            this.notify(this.getLocString("ed.saveError"), "error");
          }
        }
      });
    }
  }
  public doSaveTheme() {
    this.setState("saving");
    if (this.hasPendingThemeChanges && this.saveThemeFunc) {
      this.saveNo++;
      this.saveThemeFunc(this.saveNo, (no: number, isSuccess: boolean) => {
        if (this.saveNo !== no) return;
        if (isSuccess) {
          this.setState("saved");
          this.hasPendingThemeChanges = false;
        } else {
          this.setState("modified");
          if (this.showErrorOnFailedSave) {
            this.notify(this.getLocString("ed.saveError"), "error");
          }
        }
      });
    }
  }

  /**
   * A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#isAutoSave) is triggered to save a theme JSON object.
   * 
   * For more information, refer to the [Save and Load Custom Themes](/survey-creator/documentation/theme-editor#save-and-load-custom-themes) help topic.
   * @see showThemeTab
   * @see saveSurveyFunc
   */
  public get saveThemeFunc() {
    return this.saveThemeFuncValue;
  }
  public set saveThemeFunc(value: any) {
    this.saveThemeFuncValue = value;
  }

  /**
   * Specifies whether to display a button that saves the survey or theme (executes the [`saveSurveyFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) or [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) function).
   * @see isAutoSave
   */
  @property({ defaultValue: false }) showSaveButton: boolean;

  /**
   * A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#isAutoSave) is triggered to save a survey JSON schema.
   * 
   * For more information, refer to the Save and Load Survey Model Schemas help topic for your framework: [Angular](https://surveyjs.io/survey-creator/documentation/get-started-angular#save-and-load-survey-model-schemas) | [Vue](https://surveyjs.io/survey-creator/documentation/get-started-vue#save-and-load-survey-model-schemas) | [React](https://surveyjs.io/survey-creator/documentation/get-started-react#save-and-load-survey-model-schemas) | [Knockout / jQuery](https://surveyjs.io/survey-creator/documentation/get-started-knockout-jquery).
   * @see saveThemeFunc
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
    const objType = SurveyHelper.getObjectType(el);
    if (objType !== ObjType.Question && objType !== ObjType.Panel) return;
    el = this.convertQuestion(<Question>el, newType);
    this.selectElement(el, null, "#convertTo button");
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
      return this.createIActionBarItemByClass(item.name, item.title, item.iconName, item.needSeparator);
    });
    const listModel = new ListModel(
      availableTypes,
      (item: any) => {
        this.currentAddQuestionType = item.id;
        this.addNewQuestionInPage(beforeAdd, panel);
        popupModel.toggleVisibility();
      },
      false
    );
    listModel.locOwner = this;
    const popupModel = new PopupModel(
      "sv-list", { model: listModel },
      "bottom",
      "center"
    );

    return <any>{
      iconName: "icon-more",
      title: this.getLocString("ed.addNewQuestion"),
      action: () => {
        popupModel.displayMode = this.isMobileView ? "overlay" : "popup";
        popupModel.toggleVisibility();
      },
      popupModel: popupModel
    };
  }

  public getUpdatedPageAdornerFooterActions(pageAdorner: PageAdorner, actions: Array<IAction>) {
    const options = {
      page: pageAdorner.page,
      addNewQuestion: (type: string) => { pageAdorner.addNewQuestion(pageAdorner, undefined, type); },
      actions
    };
    this.onGetPageActions.fire(this, options);
    return options.actions;
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
    this.clickToolboxItem(newElement, panel, "ADDED_FROM_PAGEBUTTON");
  }
  createIActionBarItemByClass(className: string, title: string, iconName: string, needSeparator: boolean): Action {
    const action = new Action({
      title: title,
      id: className,
      iconName: iconName
    });
    action.needSeparator = needSeparator;
    return action;
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
      allowChangeInputType: true,
      allowChangeRequired: true,
      allowEdit: undefined
    };
    this.onElementAllowOperations.fire(this, options);
    return options;
  }

  public getChoicesItemBaseTitle() {
    return this.getLocString("ed.choices_Item") || surveyLocalization.getString("choices_Item");
  }

  public getNextItemValue(question: QuestionSelectBase): string | number {
    const itemText = this.getChoicesItemBaseTitle();
    return getNextItemValue(itemText, question.choices);
  }
  public createNewItemValue(question: QuestionSelectBase, callEvent: boolean = true, callback?: (res: ItemValue) => void): ItemValue {
    const nextValue = this.getNextItemValue(question);
    const res = question.createItemValue(nextValue);
    res.text = getNextItemText(question.choices);
    question.choices.push(res);
    if (callback) {
      callback(res);
    }
    if (callEvent) {
      const propName = !!res.ownerPropertyName ? res.ownerPropertyName : "choices";
      this.onItemValueAddedCallback(question, propName, res, question.choices);
    }
    return res;
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
  @property({ defaultValue: false }) isTouch;
  /**
   * Specifies Toolbox location.
   * 
   * Possible values:
   * 
   * - `"left"` (default) - Displays Toolbox on the left side of the design surface.
   * - `"right"` - Displays Toolbox on the right side of the design surface.
   * - `"sidebar"` - Displays Toolbox as an overlay on top of Property Grid. Use the [`sidebarLocation`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#sidebarLocation) property to specify Property Grid position.
   */
  @property({
    defaultValue: "left", onSet: (newValue, target: CreatorBase) => {
      if (!target.toolbox) return;
      target.toolbox.setLocation(newValue);
      target.updateToolboxIsCompact();
    }
  }) toolboxLocation: toolboxLocationType;
  /**
   * Specifies the position of the sidebar that displays Property Grid. Applies only when [`showSidebar`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSidebar) is `true`.
   * 
   * Possible values:
   * 
   * - `"right"` (default) - Displays the sidebar on the right side of the design surface.
   * - `"left"` - Displays the sidebar on the left side of the design surface.
   * @see toolboxLocation
   */
  @property({ defaultValue: "right" }) sidebarLocation: "left" | "right";
  selectFromStringEditor: boolean;

  @property({
    defaultValue: false, onSet: (newValue: boolean, target: CreatorBase) => {
      if (!newValue) {
        throw new Error("Creator is disposed");
      }
    }
  }) isCreatorDisposed: boolean;

  public dispose(): void {
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
  @property({ defaultValue: true }) enableLinkFileEditor: boolean;
}
export class SurveyCreatorModel extends CreatorBase { }

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

export function initializeDesignTimeSurveyModel(model: any, creator: CreatorBase) {
  model.creator = creator;
  model.isPopupEditorContent = false;

  const getElementWrapperComponentNamePrev = model.getElementWrapperComponentName;
  model.getElementWrapperComponentName = (element: any, reason?: string): string => {
    let componentName = getElementWrapperComponentName(
      element,
      reason,
      model.isPopupEditorContent
    );

    return componentName || getElementWrapperComponentNamePrev.call(model, element, reason);
  };

  const getQuestionContentWrapperComponentNamePrev = model.getQuestionContentWrapperComponentName;
  model.getQuestionContentWrapperComponentName = (element: any, reason?: string): string => {
    let componentName = getQuestionContentWrapperComponentName(element);
    return (
      componentName || getQuestionContentWrapperComponentNamePrev.call(model, element, reason)
    );
  };

  const getElementWrapperComponentDataPrev = model.getElementWrapperComponentData;
  model.getElementWrapperComponentData = (element: any, reason?: string): any => {
    const data = getElementWrapperComponentData(element, reason, creator);

    return data || getElementWrapperComponentDataPrev.call(model, element, reason);
  };

  model.getRowWrapperComponentName = (row: QuestionRowModel): string => {
    return "svc-row";
  };

  model.getRowWrapperComponentData = (row: QuestionRowModel): any => {
    return {
      creator: creator,
      row
    };
  };

  model.getItemValueWrapperComponentName = (item: ItemValue, question: QuestionSelectBase): string => {
    return getItemValueWrapperComponentName(item, question);
  };

  model.getItemValueWrapperComponentData = (item: ItemValue, question: QuestionSelectBase): any => {
    return getItemValueWrapperComponentData(item, question, creator);
  };

  model.getRendererForString = (element: Base, name: string): string => {
    if (!creator.readOnly && isStringEditable(element, name)) {
      return editableStringRendererName;
    }
    return undefined;
  };

  model.getRendererContextForString = (element: Base, locStr: LocalizableString): any => {
    if (!creator.readOnly && isStringEditable(element, locStr.name)) {
      return {
        creator: creator,
        element,
        locStr
      };
    }
    return <any>locStr;
  };
}

function isContentElement(element: any) {
  let current = element;
  while (!!current) {
    if (current.isContentElement) {
      return true;
    }
    current = current.parentQuestion;
  }
  return false;
}

export const editableStringRendererName = "svc-string-editor";
export function getElementWrapperComponentName(element: any, reason: string, isPopupEditorContent: boolean): string {
  if (reason === "logo-image") {
    return "svc-logo-image";
  }
  if (reason === "cell" || reason === "column-header" || reason === "row-header") {
    return "svc-matrix-cell";
  }
  if (!isContentElement(element)) {
    if (element instanceof Question) {
      const isDropdown = element.isDescendantOf("dropdown") || element.isDescendantOf("tagbox");
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
  if (element.isDescendantOf("rating") && !isContentElement(element)) {
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
  if (isContentElement(question)) {
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
  const parentIsMatrix = !!element.data && element.parentQuestion instanceof QuestionMatrixDropdownModelBase;
  return !parentIsMatrix && (!isContentElement(element) || element.isEditableTemplateElement);
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
  SurveyHelper.warnNonSupported("registerAdorner", "This functionality is no longer supported.");
}
export function removeAdorners(names: string[] = undefined) {
  SurveyHelper.warnNonSupported("removeAdorners", "This functionality is no longer supported.");
}
