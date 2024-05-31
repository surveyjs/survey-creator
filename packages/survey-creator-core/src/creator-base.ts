import {
  Base, SurveyModel, ListModel, Question, PanelModel, PageModel, PopupModel, property, IElement, Serializer,
  JsonObjectProperty, ActionContainer, AdaptiveActionContainer, IAction, Action, IPanel, SurveyElement, ItemValue,
  QuestionSelectBase, QuestionRowModel, LocalizableString, ILocalizableString, ILocalizableOwner, PopupBaseViewModel,
  EventBase, hasLicense, slk, settings as SurveySettings, Event, Helpers as SurveyHelpers, MatrixDropdownColumn, JsonObject,
  dxSurveyService, ISurveyElement, PanelModelBase, surveyLocalization, QuestionMatrixDropdownModelBase, ITheme, Helpers,
  chooseFiles, createDropdownActionModel
} from "survey-core";
import { ICreatorPlugin, ISurveyCreatorOptions, settings, ICollectionItemAllowOperations } from "./creator-settings";
import { editorLocalization } from "./editorLocalization";
import { SurveyJSON5 } from "./json5";
import { DragDropChoices } from "survey-core";
import { IsTouch } from "survey-core";
import { QuestionConverter } from "./questionconverter";
import { SurveyTextWorker } from "./textWorker";
import { QuestionToolbox, QuestionToolboxItem } from "./toolbox";
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
import {
  ElementDeletingEvent, PropertyGetReadOnlyEvent, ElementGetDisplayNameEvent, HtmlToMarkdownEvent, ElementAllowOperationsEvent,
  ElementGetActionsEvent, PropertyAddingEvent, PropertyGridSurveyCreatedEvent, PropertyEditorCreatedEvent, PropertyEditorUpdateTitleActionsEvent,
  PropertyGridShowPopupEvent, CollectionItemAllowOperationsEvent, CollectionItemAddedEvent, FastEntryItemsEvent as FastEntryFinishedEvent, MatrixColumnAddedEvent, ConfigureTablePropertyEditorEvent,
  PropertyDisplayCustomErrorEvent, PropertyValueChangingEvent, PropertyValueChangedEvent, ConditionGetQuestionListEvent, GetConditionOperatorEvent,
  LogicRuleGetDisplayTextEvent, ModifiedEvent, QuestionAddedEvent, PanelAddedEvent, PageAddedEvent,
  PageGetFooterActionsEvent, SurveyInstanceCreatedEvent, DesignerSurveyCreatedEvent, PreviewSurveyCreatedEvent, NotifyEvent, ElementFocusingEvent,
  ElementFocusedEvent, OpenFileChooserEvent, UploadFileEvent, TranslationStringVisibilityEvent, TranslationImportItemEvent,
  TranslationImportedEvent, TranslationExportItemEvent, MachineTranslateEvent, TranslationItemChangingEvent, DragDropAllowEvent,
  CreateCustomMessagePanelEvent, ActiveTabChangingEvent, ActiveTabChangedEvent, BeforeUndoEvent, BeforeRedoEvent,
  PageAddingEvent, DragStartEndEvent
} from "./creator-events-api";

require("./components/creator.scss");
require("./components/string-editor.scss");
require("./creator-theme/creator.scss");

export interface IKeyboardShortcut {
  name?: string;
  affectedTab?: string;
  hotKey: { ctrlKey?: boolean, keyCode: number };
  macOsHotkey?: { shiftKey?: boolean, keyCode: number };
  execute: (context: any) => void;
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
  constructor(private creator: SurveyCreatorModel) {
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

export class CreatorEvent<T> extends EventBase<SurveyCreatorModel, T> { }

/**
 * A class with properties, methods, and events that allow you to configure Survey Creator and manage its elements.
 * 
 * [View Demo](https://surveyjs.io/survey-creator/examples/free-nps-survey-template/ (linkStyle))
 */
export class SurveyCreatorModel extends Base
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
   * @see activeTab
   * @see onSurveyInstanceCreated
   */
  @property({ defaultValue: true }) showDesignerTab: boolean;
  /**
   * Specifies whether to display the JSON Editor tab.
   *
   * Default value: `true`
   * @see activeTab
   */
  @property({ defaultValue: true }) showJSONEditorTab: boolean;

  @property({ defaultValue: true }) showTestSurveyTab: boolean;
  /**
   * Specifies whether to display the Preview tab.
   *
   * Default value: `true`
   * @see activeTab
   * @see onSurveyInstanceCreated
   */
  public get showPreviewTab(): boolean { return this.showTestSurveyTab; }
  public set showPreviewTab(val: boolean) { this.showTestSurveyTab = val; }
  /**
   * Specifies whether to display the Themes tab.
   *
   * Default value: `false`
   * 
   * Use the [`themeEditor`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#themeEditor) object to manage UI themes available in the Themes tab.
   * @see activeTab
   * @see saveThemeFunc
   */
  @property({ defaultValue: false }) showThemeTab: boolean;
  /**
   * Specifies whether to display the Translation tab.
   *
   * Default value: `false`
   * @see activeTab
   */
  @property({ defaultValue: false }) showTranslationTab: boolean;
  /**
   * Specifies whether to display the Logic tab.
   *
   * Default value: `false`
   * @see activeTab
   */
  @property({ defaultValue: false }) showLogicTab: boolean;
  @property({ defaultValue: false }) useTableViewInLogicTab: boolean;
  @property({ defaultValue: 200 }) pageHoverDelay: number;
  /**
   * Allows users to edit choice values instead of choice texts on the design surface.
   * 
   * Default value: `false` (users edit choice texts)
   * 
   * If you enable this property, users cannot edit choice texts because the Property Grid hides the Text column for choices, rate values, columns and rows in [Single-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model), and rows in [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) questions.
   * @see showObjectTitles
   */
  @property({ defaultValue: false }) inplaceEditForValues: boolean;
  /**
   * Specifies whether to display a table with survey results after completing a survey in the Preview tab.
   * 
   * Default value: `true`
   */
  @property({ defaultValue: true }) previewShowResults: boolean;
  get allowEditSurveyTitle(): boolean {
    return this.getPropertyValue("allowEditSurveyTitle", true);
  }
  set allowEditSurveyTitle(val: boolean) {
    this.setPropertyVisibility("survey", val, "title", "description", "logo", "logoFit", "showTitle", "logoWidth", "logoHeight");
    this.setPropertyValue("allowEditSurveyTitle", val);
    this.designerPropertyGrid && this.designerPropertyGrid.refresh();
  }
  /**
   * Specifies whether users can see and edit the survey header and related survey properties.
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
    return !!hasLicense && hasLicense(1);
  }
  public set haveCommercialLicense(val: boolean) {
    // eslint-disable-next-line no-console
    console.warn("As of v1.9.101, the haveCommercialLicense property is not supported. To activate your license, use the setLicenseKey(key) method as shown on the following page: https://surveyjs.io/remove-alert-banner");
  }
  public get licenseText(): string {
    return this.getLocString("survey.license");
  }
  public slk(val: string): void {
    slk(val);
  }
  /**
   * Specifies whether to automatically save a survey or theme JSON schema each time survey or theme settings are changed.
   * 
   * Default value: `false`
   * 
   * If you enable this property, Survey Creator calls the [`saveSurveyFunc`](#saveSurveyFunc) or [`saveThemeFunc`](#saveThemeFunc) function to save the survey or theme JSON schema. The schemas are saved with a 500-millisecond delay after users change settings. You can specify the [`autoSaveDelay`](#autoSaveDelay) property to increase or descrease the delay.
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
   * Specifies how Survey Creator users edit survey pages.
   * 
   * Accepted values:
   * 
   * - `"standard"` (default)       
   * Questions and panels are divided between pages. Users can scroll the design surface to reach a required page.
   * 
   * - `"single"`       
   * All questions and panels belong to a single page. Users cannot add or remove pages.
   * 
   * - `"bypage"`       
   * Questions and panels are divided between pages. Users can use the page navigator to switch to a required page.
   * @see allowModifyPages
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
  protected _findAction(id: string): Action {
    return this.toolbarItems.filter(a => a.id === id)[0];
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
  public get isPreviewShowing(): boolean {
    return this.activeTab === "test";
  }
  public showTestSurvey() {
    this.showPreview();
  }
  public showPreview() {
    this.activeTab = "test";
  }

  protected plugins: { [name: string]: ICreatorPlugin } = {};

  /**
   * Adds a custom tab to Survey Creator.
   * 
   * [View Demo](https://surveyjs.io/survey-creator/examples/modify-tab-bar/ (linkStyle))
   * @param name A unique tab ID. 
   * @param plugin An object that allows you to handle user interactions with the tab.
   * @param title A tab caption. If `title` is undefined, the `name` argument value is displayed instead. To localize the caption, add its translations to the `ed` object within [localization dictionaries](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization) and pass `ed.propertyName` as the `title` argument.
   * @param componentName The name of the component that renders tab markup. Default value: `"svc-tab-" + name`.
   * @param index A zero-based index that specifies the tab's position relative to other tabs.
   */
  public addPluginTab(
    name: string,
    plugin: ICreatorPlugin,
    title?: string,
    componentName?: string,
    index?: number
  ) {
    const tabName = name === "test" ? "preview" : name;
    const locStrName = !title ? "tabs." + tabName : (title.indexOf("ed.") == 0 ? title : "");
    if (!!locStrName) {
      title = undefined;
    }
    const tab: TabbedMenuItem = new TabbedMenuItem({
      id: name,
      locTitleName: locStrName,
      title: title,
      componentContent: componentName ? componentName : "svc-tab-" + name,
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
   * An event that is raised before a survey element (a question, panel, or page) is deleted.
   * @see deleteElement
   */
  public onElementDeleting: EventBase<SurveyCreatorModel, ElementDeletingEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementDeletingEvent>();

  /**
   * An event that is raised when Survey Creator sets the read-only status for a survey element property. Use this event to change the read-only status for individual properties.
   */
  public onGetPropertyReadOnly: EventBase<SurveyCreatorModel, PropertyGetReadOnlyEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyGetReadOnlyEvent>();

  /**
   * An event that is raised when Survey Creator [instantiates a survey to display a UI element](https://surveyjs.io/survey-creator/documentation/creator-v2-whats-new#survey-creator-ui-elements-are-surveys). Handle this event to customize the UI element by modifying the survey.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * [Design Mode Survey Instance](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#design-mode-survey-instance (linkStyle))
   * 
   * [Preview Mode Survey Instance](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#preview-mode-survey-instance (linkStyle))
   * 
   * > If you want this event raised at startup, assign a survey JSON schema to the [`JSON`](#JSON) property *after* you add a handler to the event. If the JSON schema should be empty, specify the `JSON` property with an empty object.
   */
  public onSurveyInstanceCreated: EventBase<SurveyCreatorModel, SurveyInstanceCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, SurveyInstanceCreatedEvent>();

  /**
   * An event that is raised when Survey Creator obtains a survey element name to display it in the UI.
   * 
   * Handle this event to replace survey element names in the UI with custom display texts. If you only want to replace the names with survey element titles, enable the [`showObjectTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showObjectTitles) property instead of handling this event.
   */
  public onGetObjectDisplayName: EventBase<SurveyCreatorModel, ElementGetDisplayNameEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementGetDisplayNameEvent>();

  /**
   * An event that is raised after a user has edited a text value on the design surface. This value may include HTML markup. You can handle the `onHtmlToMarkdown` event to convert the HTML markup to Markdown.
   */
  public onHtmlToMarkdown: EventBase<SurveyCreatorModel, HtmlToMarkdownEvent> = this.addCreatorEvent<SurveyCreatorModel, HtmlToMarkdownEvent>();

  /**
   * An event that is raised when Survey Creator obtains permitted operations for a survey element. Use this event to disable user interactions with a question, panel, or page on the design surface.
   *
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * To disable a user interaction, set the correponding `allow...` property to `false`.
   * 
   * [Specify Adorner Visibility](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#specify-adorner-availability (linkStyle))
   * @see onCollectionItemAllowOperations
   */
  public onElementAllowOperations: EventBase<SurveyCreatorModel, ElementAllowOperationsEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementAllowOperationsEvent>();

  /**
   * An event that is raised when Survey Creator obtains [adorners](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#specify-adorner-availability) for a survey element. Use this event to hide and modify predefined adorners or add a custom adorner.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * [View Demo](https://surveyjs.io/survey-creator/examples/create-custom-adorners/ (linkStyle))
   * @see onElementAllowOperations
   * @see onGetPageActions
   */
  public onDefineElementMenuItems: EventBase<SurveyCreatorModel, ElementGetActionsEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementGetActionsEvent>();
  /**
   * An event that is raised when Survey Creator adds properties to a survey element selected on the design surface. Handle this event if you cancel the addition of certain properties and thus [hide them from the Property Grid](https://surveyjs.io/survey-creator/documentation/property-grid-customization#hide-properties-from-the-property-grid).
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * [View Demo](https://surveyjs.io/survey-creator/examples/hide-category-from-property-grid/ (linkStyle))
   */
  public onShowingProperty: EventBase<SurveyCreatorModel, PropertyAddingEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyAddingEvent>();
  public onCanShowProperty: EventBase<SurveyCreatorModel, any> = this.onShowingProperty;
  /**
   * This event is obsolete. Use the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event instead.
   * @deprecated
   */
  public onPropertyGridSurveyCreated: EventBase<SurveyCreatorModel, PropertyGridSurveyCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyGridSurveyCreatedEvent>();
  /**
   * An event that is raised when a property editor is created in the Property Grid. Use this event to modify the property editor or add event handlers to it.
   * @see onSetPropertyEditorOptions
   * @see onSurveyInstanceCreated
   */
  public onPropertyEditorCreated: EventBase<SurveyCreatorModel, PropertyEditorCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyEditorCreatedEvent>();
  /**
   * An event that is raised when title actions are added to a property editor. Title actions are most often used to reveal hints for properties configured by users. Handle this event you want to add, remove, or modify the title actions.
   */
  public onPropertyEditorUpdateTitleActions: EventBase<SurveyCreatorModel, PropertyEditorUpdateTitleActionsEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyEditorUpdateTitleActionsEvent>();
  /**
   * An event that is raised before Survey Creator displays a pop-up window called from the Property Grid. This window allows users to edit choices, conditions, etc. Use this event to customize the pop-up window, for example, add custom action buttons.
   */
  public onPropertyGridShowModal: EventBase<SurveyCreatorModel, PropertyGridShowPopupEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyGridShowPopupEvent>();
  public onCanDeleteItem: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  public onCollectionItemDeleting: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  /**
   * An event that is raised when Survey Creator obtains permitted operations for a collection item (a choice option in Choices, a column or row in Columns, etc.). Use this event to prevent users from adding, deleting, or editing a particular collection item.
   * @see onElementAllowOperations
   */
  public onCollectionItemAllowOperations: EventBase<SurveyCreatorModel, CollectionItemAllowOperationsEvent> = this.addCreatorEvent<SurveyCreatorModel, CollectionItemAllowOperationsEvent>();
  /**
   * An event that is raised when users add a new collection item (a choice option to Choices, a column or row to Columns, etc.). Use this event to modify this item.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * > This event is not raised when users add a new column to a [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) or [Dynamic Matrix](https://surveyjs.io/form-library/documentation/api-reference/dynamic-matrix-table-question-model). For these cases, handle the [`onMatrixColumnAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onMatrixColumnAdded) event instead.
   * @see onFastEntryFinished
   * @see onCollectionItemAllowOperations
   */
  public onItemValueAdded: EventBase<SurveyCreatorModel, CollectionItemAddedEvent> = this.addCreatorEvent<SurveyCreatorModel, CollectionItemAddedEvent>();
  /**
   * An event that is raised when users finish editing collection items (choices, rows, columns) in a pop-up window.
   * 
   * Survey authors can specify collection items using a table UI in Property Grid (see the [`onItemValueAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onItemValueAdded) event) or a multi-line text editor in a pop-up window. Each line in the editor specifies the value and display text of one collection item in the following format: `value|text`. Use the `onFastEntryFinished` event to process the entered text lines as required.
   */
  public onFastEntryFinished: EventBase<SurveyCreatorModel, FastEntryFinishedEvent> = this.addCreatorEvent<SurveyCreatorModel, FastEntryFinishedEvent>();
  /**
   * An event that is raised when users add a new column to a [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) or [Dynamic Matrix](https://surveyjs.io/form-library/documentation/api-reference/dynamic-matrix-table-question-model). Use this event to modify this column.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * > This event is not raised when users add a new column to a [Single-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model). For this case, handle the [`onItemValueAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onItemValueAdded) event instead.
   * @see onCollectionItemAllowOperations
   */
  public onMatrixColumnAdded: EventBase<SurveyCreatorModel, MatrixColumnAddedEvent> = this.addCreatorEvent<SurveyCreatorModel, MatrixColumnAddedEvent>();
  /**
   * An event that is raised when a table property editor is created in the Property Grid. Use this event to configure the table property editor.
   * @see onPropertyEditorCreated
   */
  public onSetPropertyEditorOptions: EventBase<SurveyCreatorModel, ConfigureTablePropertyEditorEvent> = this.addCreatorEvent<SurveyCreatorModel, ConfigureTablePropertyEditorEvent>();

  public onGenerateNewName: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  /**
   * An event that is raised when Survey Creator validates a modified value of a survey element property. Use this event to display a custom error message when the value is incorrect.
   * @see onPropertyValueChanging
   * @see onSurveyPropertyValueChanged
   */
  public onPropertyValidationCustomError: EventBase<SurveyCreatorModel, PropertyDisplayCustomErrorEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyDisplayCustomErrorEvent>();
  /**
   * An event that is raised each time a user modifies a survey element property. Use this event to validate or correct a property value while the user changes it.
   * @see onPropertyValidationCustomError
   * @see onSurveyPropertyValueChanged
   */
  public onPropertyValueChanging: EventBase<SurveyCreatorModel, PropertyValueChangingEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyValueChangingEvent>();
  /**
   * An event that is raised after a survey element property has changed.
   * @see onPropertyValidationCustomError
   * @see onPropertyValueChanging
   */
  public onSurveyPropertyValueChanged: EventBase<SurveyCreatorModel, PropertyValueChangedEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyValueChangedEvent>();
  /**
   * An event that is raised when a condition editor renders a list of questions available for selection. Use this event to modify this list.
   */
  public onConditionQuestionsGetList: EventBase<SurveyCreatorModel, ConditionGetQuestionListEvent> = this.addCreatorEvent<SurveyCreatorModel, ConditionGetQuestionListEvent>();

  public onConditionGetTitle: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  /**
   * An event that is raised when Survey Creator populates a condition editor with operators. Use this event to hide individual condition operators.
   */
  public onGetConditionOperator: EventBase<SurveyCreatorModel, GetConditionOperatorEvent> = this.addCreatorEvent<SurveyCreatorModel, GetConditionOperatorEvent>();
  /**
   * An event that is raised when the Logic tab constructs a user-friendly display text for a logic rule. Use this event to modify this display text.
   */
  public onLogicItemDisplayText: EventBase<SurveyCreatorModel, LogicRuleGetDisplayTextEvent> = this.addCreatorEvent<SurveyCreatorModel, LogicRuleGetDisplayTextEvent>();
  /**
    * An event that is raised when users modify survey or theme settings.
    * @see state
    */
  public onModified: EventBase<SurveyCreatorModel, ModifiedEvent> = this.addCreatorEvent<SurveyCreatorModel, ModifiedEvent>();
  /**
   * An event that is raised when users add a question to the survey. Use this event to customize the question.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * [Customize Survey Elements on Creation](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#customize-survey-elements-on-creation (linkStyle))
   */
  public onQuestionAdded: EventBase<SurveyCreatorModel, QuestionAddedEvent> = this.addCreatorEvent<SurveyCreatorModel, QuestionAddedEvent>();
  /**
   * An event that is raised when users add a [Panel](https://surveyjs.io/form-library/documentation/api-reference/panel-model) element to the survey. Use this event to customize the panel.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * [Customize Survey Elements on Creation](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#customize-survey-elements-on-creation (linkStyle))
   */
  public onPanelAdded: EventBase<SurveyCreatorModel, PanelAddedEvent> = this.addCreatorEvent<SurveyCreatorModel, PanelAddedEvent>();
  /**
   * An event that is raised when a new page is added to the survey. Use this event to customize the page.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * [Customize Survey Elements on Creation](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#customize-survey-elements-on-creation (linkStyle))
   */
  public onPageAdded: EventBase<SurveyCreatorModel, PageAddedEvent> = this.addCreatorEvent<SurveyCreatorModel, PageAddedEvent>();

  /**
   * An event that is raised when Survey Creator renders action buttons under each page on the design surface. Use this event to add, remove, or modify the buttons.
   * @see onDefineElementMenuItems
   */
  public onGetPageActions: EventBase<SurveyCreatorModel, PageGetFooterActionsEvent> = this.addCreatorEvent<SurveyCreatorModel, PageGetFooterActionsEvent>();

  /**
   * This event is obsolete. Use the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event instead.
   * @deprecated
   */
  public onDesignerSurveyCreated: EventBase<SurveyCreatorModel, DesignerSurveyCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, DesignerSurveyCreatedEvent>();
  /**
   * This event is obsolete. Use the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event instead.
   * @deprecated
   */
  public onPreviewSurveyCreated: EventBase<SurveyCreatorModel, PreviewSurveyCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, PreviewSurveyCreatedEvent>();
  public onTestSurveyCreated: EventBase<SurveyCreatorModel, any> = this.onPreviewSurveyCreated;
  /**
   * An event that is raised when Survey Creator [displays a toast notification](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#notify). Use this event to implement custom toast notification.
   * @see notify
   */
  public onNotify: EventBase<SurveyCreatorModel, NotifyEvent> = this.addCreatorEvent<SurveyCreatorModel, NotifyEvent>();
  /**
   * An event that is raised before a survey element (question, panel, page, or the survey itself) is focused. Use this event to move focus to a different survey element.
   * @see onSelectedElementChanged
   * @see selectedElement
   */
  public onSelectedElementChanging: EventBase<SurveyCreatorModel, ElementFocusingEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementFocusingEvent>();
  /**
   * An event that is raised after a survey element (a question, panel, page, or the survey itself) is focused.
   * @see onSelectedElementChanging
   */
  public onSelectedElementChanged: EventBase<SurveyCreatorModel, ElementFocusedEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementFocusedEvent>();
  /**
   * An event that is raised when Survey Creator opens a dialog window for users to select files.
   * @see onUploadFile
   * @see uploadFiles
   */
  public onOpenFileChooser: EventBase<SurveyCreatorModel, OpenFileChooserEvent> = this.addCreatorEvent<SurveyCreatorModel, OpenFileChooserEvent>();
  /**
   * An event that is raised when a user selects a file to upload. Use this event to upload the file to your server.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * [View Demo](https://surveyjs.io/survey-creator/examples/file-upload/ (linkStyle))   
   * @see uploadFiles
   */
  public onUploadFile: EventBase<SurveyCreatorModel, UploadFileEvent> = this.addCreatorEvent<SurveyCreatorModel, UploadFileEvent>();
  /**
   * An event that is raised when the Translation tab displays a property for translation. Use this event to control the property visibility.
   */
  public onTranslationStringVisibility: EventBase<SurveyCreatorModel, TranslationStringVisibilityEvent> = this.addCreatorEvent<SurveyCreatorModel, TranslationStringVisibilityEvent>();
  public onTranslationLocaleInitiallySelected: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  /**
   * An event that is raised before a translated string is imported from a CSV file. Use this event to modify the string to be imported or cancel the import.
   * @see onTranslationExportItem
   * @see onTranslationImported
   */
  public onTranslationImportItem: EventBase<SurveyCreatorModel, TranslationImportItemEvent> = this.addCreatorEvent<SurveyCreatorModel, TranslationImportItemEvent>();
  /**
   * An event that is raised after all translated strings are imported from a CSV file.
   * @see onTranslationImportItem
   * @see onTranslationExportItem
   */
  public onTranslationImported: EventBase<SurveyCreatorModel, TranslationImportedEvent> = this.addCreatorEvent<SurveyCreatorModel, TranslationImportedEvent>();
  /**
   * An event that is raised before a translated string is exported to a CSV file. Use this event to modify the string to be exported.
   * @see onTranslationImportItem
   */
  public onTranslationExportItem: EventBase<SurveyCreatorModel, TranslationExportItemEvent> = this.addCreatorEvent<SurveyCreatorModel, TranslationExportItemEvent>();

  /**
   * An event that allows you to integrate a machine translation service, such as Google Translate or Microsoft Translator, into Survey Creator.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * 
   * Within the event handler, you need to pass translation strings and locale information to the translation service API. The service should return an array of translated strings that you need to pass to the `options.callback` function. The following code shows how to integrate the Microsoft Translator service into Survey Creator:
   * 
   * ```js
   * import { SurveyCreatorModel } from "survey-creator-core";
   * const creatorOptions = { ... };
   * const creator = new SurveyCreatorModel(creatorOptions);
   * 
   * const apiKey = "<your-microsoft-translator-api-key>";
   * const resourceRegion = "<your-azure-region>";
   * const endpoint = "https://api.cognitive.microsofttranslator.com/";
   * creator.onMachineTranslate.add((_, options) => {
   *   // Prepare strings for Microsoft Translator as an array of objects: [{ Text: "text to translate" }]
   *   const data = [];
   *   options.strings.forEach(str => { data.push({ Text: str }); });
   *   // Include required locales in the URL
   *   const params = "api-version=3.0&from=" + options.fromLocale + "&to=" + options.toLocale;
   *   const url = endpoint + "/translate?" + params;
   *   fetch(url, {
   *     method: "POST",
   *     headers: {
   *       "Content-Type": "application/json",
   *       "Ocp-Apim-Subscription-Key": apiKey,
   *       "Ocp-Apim-Subscription-Region": resourceRegion,
   *       "X-ClientTraceId": crypto.randomUUID()
   *     },
   *     body: JSON.stringify(data)
   *   }).then(response => response.json())
   *     .then(data => {
   *       // Convert data received from Microsoft Translator to a flat array
   *       const translatedStrings = [];
   *       for (let i = 0; i < data.length; i++) {
   *         translatedStrings.push(data[i].translations[0].text);
   *       }
   *       // Pass translated strings to Survey Creator
   *       options.callback(translatedStrings);
   * 
   *     }).catch(error => {
   *       // If translation was unsuccessful:
   *       options.callback();
   *       alert("Could not translate strings to the " + options.toLocale + " locale");
   *     });
   * });
   * ```
   * 
   * > Survey Creator does not include a machine translation service out of the box. Our component only provides a UI for calling the service API.
   */
  public onMachineTranslate: EventBase<SurveyCreatorModel, MachineTranslateEvent> = this.addCreatorEvent<SurveyCreatorModel, MachineTranslateEvent>();

  /**
   * An event that is raised before a string translation is changed. Use this event to override a new translation value.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * Refer to the following help topics for more information on localization:
   * 
   * - [Localization & Globalization in SurveyJS Form Library](https://surveyjs.io/form-library/documentation/survey-localization)
   * - [Localization & Globalization in Survey Creator](https://surveyjs.io/survey-creator/documentation/localization)
   */
  public onTranslationItemChanging: EventBase<SurveyCreatorModel, TranslationItemChangingEvent> = this.addCreatorEvent<SurveyCreatorModel, TranslationItemChangingEvent>();

  /**
   * An event that is raised when users drag and drop survey elements within the design surface. Use this event to control drag and drop operations.
   * @see onDragStart
   * @see onDragEnd
   */
  public onDragDropAllow: EventBase<SurveyCreatorModel, DragDropAllowEvent> = this.addCreatorEvent<SurveyCreatorModel, DragDropAllowEvent>();

  /**
   * An event that allows you to create a custom message panel.
   * 
   * For information on event handler parameters, refer to descriptions within the interface.
   * 
   * A message panel is displayed within a question box on the design surface. It contains a text message and an optional action link. The following image illustrates a built-in message panel that appears when a question sources its choice options from another question or from a web service:
   * 
   * <img src="https://surveyjs.io/stay-updated/release-notes/articles/v1.9.126/creator-message-panel.png" alt="Survey Creator: A message panel" width="75%">
   * 
   * To create a custom message panel, handle the `onCreateCustomMessagePanel` event. This event is raised for questions whose `isMessagePanelVisible` property set to `true`. The following code shows how to enable this property based on a condition. This code implements a custom data source selector for select-based questions (Dropdown, Checkboxes, Radio Button Group). When a survey author selects any data source other than "Custom", the `isMessagePanelVisible` property becomes enabled, indicating that the `onCreateCustomMessagePanel` event must be raised. A function that handles this event specifies custom message and action link texts and `onClick` event handler: 
   * 
   * ```js
   * import { Serializer } from "survey-core";
   * import { SurveyCreatorModel } from "survey-creator-core";
   * 
   * Serializer.addProperty("selectbase", {
   *   name: "choicesDataSource",
   *   displayName: "Data source",
   *   category: "choices",
   *   choices: [
   *     { text: "Country", value: "country" },
   *     { text: "Region", value: "region" },
   *     { text: "City", value: "city" },
   *     { text: "Custom", value: "custom" }
   *   ],
   *   onSetValue: function (obj: any, value: any) {
   *     // Set the custom property value 
   *     obj.setPropertyValue("choicesDataSource", value);
   *     // Display the message panel based on a condition
   *     obj.setPropertyValue("isMessagePanelVisible", value !== "custom");
   *   }
   * });
   * 
   * const creator = new SurveyCreatorModel({});
   * 
   * creator.onCreateCustomMessagePanel.add((_, options) => {
   *   options.messageText = "Choices for this question are loaded from a predefined data source. ";
   *   options.actionText = "Go to settings";
   *   // Focus the "Data source" editor within the Property Grid
   *   options.onClick = () => {
   *     creator.selectElement(options.question, "choicesDataSource");
   *   };
   * });
   * ```
   */
  public onCreateCustomMessagePanel: EventBase<SurveyCreatorModel, CreateCustomMessagePanelEvent> = this.addCreatorEvent<SurveyCreatorModel, CreateCustomMessagePanelEvent>();

  public getSurveyJSONTextCallback: () => { text: string, isModified: boolean };
  public setSurveyJSONTextCallback: (text: string) => void;

  // /**
  //  * You need to set this property to true if you want to use tabs instead of accordion in the popup element's editor.
  //  */
  // public useTabsInElementEditor = false;

  /**
   * Limits the number of items in a logical condition.
   *
   * Default value: -1 (unlimited)
   */
  public maxLogicItemsInCondition: number = -1;

  /**
   * Specifies whether drop-down menus and other UI elements display survey, page, and question titles instead of their names.
   *
   * Default value: `false`
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
   * @see showObjectTitles
   * @see onGetObjectDisplayName
   */
  public showTitlesInExpressions = false;
  /**
   * Specifies whether users can edit expressions in the Logic tab as plain text.
   *
   * If you set this property to `false`, users can only use UI elements to edit logical expressions.
   *
   * Default value: `true`
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
   * Limits the minimum number of choices in [Checkbox](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radiogroup](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions. Set this property if users should not delete choices below the specified limit.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.minimumChoicesCount`)
   */
  public minimumChoicesCount: number =
    settings.propertyGrid.minimumChoicesCount;
  /**
   * Limits the number of rows that users can add to [Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel) and [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumRowsCount`)
   */
  public maximumRowsCount: number = settings.propertyGrid.maximumRowsCount;
  /**
   * Limits the number of rate values that users can add to [Rating](https://surveyjs.io/Documentation/Library?id=questionratingmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maximumRateValues`)
   */
  public maximumRateValues: number = settings.propertyGrid.maximumRateValues;

  /**
   * Limits the number of nested panels within a [Panel](https://surveyjs.io/form-library/documentation/api-reference/panel-model) element.
   * 
   * Default value: -1 (unlimited)
   */
  public maxNestedPanels: number = -1;

  public showPagesInTestSurveyTab = true;
  /**
   * Specifies whether to show a page selector at the bottom of the Preview tab.
   *
   * Default value: `true`
   */
  public get showPagesInPreviewTab(): boolean { return this.showPagesInTestSurveyTab; }
  public set showPagesInPreviewTab(val: boolean) { this.showPagesInTestSurveyTab = val; }

  public showSimulatorInTestSurveyTab = true;
  /**
   * Specifies whether the Preview tab displays a Device button that allows users to preview the survey on different device types.
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
   * @see allowChangeThemeInPreview
   */
  public themeForPreview: string = "defaultV2";

  //#region Theme

  /**
   * An object that enables you to manage UI themes. Refer to the following API section for information on available properties, methods, and events: [`ThemeTabPlugin`](https://surveyjs.io/survey-creator/documentation/api-reference/themetabplugin).
   * @see showThemeTab
   * @see saveThemeFunc
   */
  get themeEditor(): ThemeTabPlugin {
    return this.getPlugin<ThemeTabPlugin>("theme");
  }

  /**
   * A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#isAutoSave) is triggered to save a theme JSON object.
   * 
   * For more information, refer to the [Save and Load Custom Themes](https://surveyjs.io/survey-creator/documentation/theme-editor#save-and-load-custom-themes) help topic.
   * @see showThemeTab
   * @see themeEditor
   * @see saveSurveyFunc
   */
  public get saveThemeFunc() {
    return this.saveThemeFuncValue;
  }
  public set saveThemeFunc(value: any) {
    this.saveThemeFuncValue = value;
  }

  public hasPendingThemeChanges: boolean = false;
  private _theme: ITheme = { cssVariables: {} };
  /**
   * Gets or sets a [theme](https://surveyjs.io/form-library/documentation/api-reference/itheme) for the survey being configured.
   * 
   * [Theme Editor](https://surveyjs.io/survey-creator/documentation/theme-editor (linkStyle))
   * @see showThemeTab
   * @see themeEditor
   * @see saveThemeFunc
   */
  public get theme(): ITheme {
    return this._theme;
  }
  public set theme(newTheme: ITheme) {
    this._theme = newTheme;
    this.hasPendingThemeChanges = true;
    if (this.activeTab !== "theme") {
      this.updatePlugin(this.activeTab);
    }
  }

  private _doSaveThemeCore(onSaveComplete?: () => void) {
    this.setState("saving");
    if (this.saveThemeFunc) {
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
        onSaveComplete && onSaveComplete();
      });
    }
  }
  /**
   * Calls the [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) function to save the theme JSON schema.
   * @see saveSurvey
   * @see save
   */
  public saveTheme() {
    this._doSaveThemeCore();
  }
  public saveThemeActionHandler() {
    if (this.syncSaveButtons) {
      this.save();
    } else {
      this.saveTheme();
    }
  }

  //#endregion Theme

  private _allowModifyPages = true;
  /**
   * Specifies whether users can add, edit, and delete survey pages.
   *
   * Default value: `true`
   * @see pageEditMode
   */
  public get allowModifyPages() {
    return this._allowModifyPages;
  }
  public set allowModifyPages(val: boolean) {
    this._allowModifyPages = val;
    this.changePageModifications(val);
  }

  public showDefaultLanguageInTestSurveyTab: boolean | string = "auto";
  /**
   * Specifies whether the Preview tab displays a language selector.
   *
   * Accepted values:
   *
   * - `"auto"` (default)       
   * Display the language selector only if the survey is translated into more than one language.
   *
   * - `true`       
   * Always display the language selector regardless of how many languages the survey uses.
   *
   * - `false`        
   * Never display the language selector.
   *
   * - `"all"`        
   * Always display the language selector with [all supported languages](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization).
   *
   * [Localization & Globalization](https://surveyjs.io/survey-creator/documentation/survey-localization-translate-surveys-to-different-languages (linkStyle))
   */
  public get showDefaultLanguageInPreviewTab(): boolean | string { return this.showDefaultLanguageInTestSurveyTab; }
  public set showDefaultLanguageInPreviewTab(val: boolean | string) { this.showDefaultLanguageInTestSurveyTab = val; }

  public showInvisibleElementsInTestSurveyTab = true;
  /**
   * Specifies whether the Preview tab displays a toggle that allows users to show or hide invisible survey elements.
   *
   * Default value: `true`
   */
  public get showInvisibleElementsInPreviewTab(): boolean { return this.showInvisibleElementsInTestSurveyTab; }
  public set showInvisibleElementsInPreviewTab(val: boolean) { this.showInvisibleElementsInTestSurveyTab = val; }

  /**
   * Specifies whether users can switch between UI themes in the Preview tab.
   *
   * Default value: `true`
   *
   * [View Demo](https://surveyjs.io/Examples/Creator?id=theme-switcher (linkStyle))
   * @see themeForPreview
   */
  public allowChangeThemeInPreview = true;

  public tabbedMenu: AdaptiveActionContainer<TabbedMenuItem>;

  get tabs() {
    return this.tabbedMenu.actions;
  }
  set tabs(val: Array<TabbedMenuItem>) {
    this.tabbedMenu.actions = val;
  }
  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  /**
   * Specifies whether to show an error message if a survey is not saved in a database.
   *
   * Default value: `true`
   */
  public showErrorOnFailedSave: boolean = true;

  protected onSetReadOnly(newVal: boolean) { }

  /**
   * Specifies the locale of the Survey Creator UI.
   * 
   * Default value: `""` (inherited from `editorLocalization.currentLocale`)
   * 
   * [Localization & Globalization](https://surveyjs.io/survey-creator/documentation/survey-localization-translate-surveys-to-different-languages (linkStyle))
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
   * @see makeNewViewActive
   */
  public onActiveTabChanging: EventBase<SurveyCreatorModel, ActiveTabChangingEvent> = this.addCreatorEvent<SurveyCreatorModel, ActiveTabChangingEvent>();

  /**
   * An event that is raised after the [active tab](#activeTab) is switched.
   * @see makeNewViewActive
   */
  public onActiveTabChanged: EventBase<SurveyCreatorModel, ActiveTabChangedEvent> = this.addCreatorEvent<SurveyCreatorModel, ActiveTabChangedEvent>();
  /**
   * Gets or sets the currently displayed tab.
   * 
   * Possible values:
   * 
   * - [`"designer"`](#showDesignerTab)
   * - [`"test"`](#showPreviewTab)
   * - [`"theme"`](#showThemeTab)
   * - [`"editor"`](#showJSONEditorTab)
   * - [`"logic"`](#showLogicTab)
   * - [`"translation"`](#showLogicTab)
   * @see makeNewViewActive
   */
  public get activeTab(): string {
    return this.viewType;
  }
  public set activeTab(val: string) {
    this.makeNewViewActive(val);
  }
  /**
   * Switches the [active tab](#activeTab). Returns `false` if the tab cannot be switched.
   * @param tabName A tab that you want to make active: `"designer"`, `"test"`, `"theme"`, `"editor"`, `"logic"`, or `"translation"`.
   * @returns `false` if the active tab cannot be switched, `true` otherwise.
   */
  public makeNewViewActive(tabName: string): boolean {
    if (tabName == this.viewType) return false;
    const plugin: ICreatorPlugin = this.currentPlugin;
    if (!!plugin && !!plugin.canDeactivateAsync) {
      plugin.canDeactivateAsync(() => {
        this.switchViewType(tabName);
      });
      return undefined;
    }
    return this.switchViewType(tabName);
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
    this.syncSaveButtons = this.options.saveSurveyAndTheme !== undefined ? this.options.saveSurveyAndTheme : this.options.syncSaveButtons;
    this.isTouch = IsTouch;
    const expandAction = this.sidebar.getExpandAction();
    !!expandAction && this.toolbar.actions.push(expandAction);
  }
  public addCreatorEvent<SurveyCreatorModel, T>(): EventBase<SurveyCreatorModel, T> {
    return this.addEvent<SurveyCreatorModel, T>();
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

  @property({ defaultValue: true }) allowShowToolbox: boolean;
  @property({ defaultValue: true }) showToolboxValue: boolean;
  public get showToolbox() {
    return this.showToolboxValue && this.allowShowToolbox;
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
  public onShowSidebarVisibilityChanged: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  /**
   * Specifies whether to show the sidebar that displays the Property Grid.
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
  public onShowPropertyGridVisiblityChanged: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
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
  //#endregion Obsolete properties and functions

  //#region Undo/Redo
  /**
   * An event that is raised before an undo operation.
   * @see undo
   * @see redo
   * @see onBeforeRedo
   */
  public onBeforeUndo: EventBase<SurveyCreatorModel, BeforeUndoEvent> = this.addCreatorEvent<SurveyCreatorModel, BeforeUndoEvent>();
  /**
   * An event that is raised before an redo operation.
   * @see redo
   * @see undo
   * @see onBeforeUndo
   */
  public onBeforeRedo: EventBase<SurveyCreatorModel, BeforeRedoEvent> = this.addCreatorEvent<SurveyCreatorModel, BeforeRedoEvent>();

  public get undoRedoManager(): UndoRedoManager {
    const plugin = this.getPlugin<UndoRedoPlugin>("undoredo");
    return plugin && plugin.model.undoRedoManager;
  }
  public get undoRedoController(): UndoRedoController {
    const plugin = this.getPlugin<UndoRedoPlugin>("undoredo");
    return plugin && plugin.model;
  }
  startUndoRedoTransaction(name: string = "") {
    this.undoRedoController && this.undoRedoController.startTransaction(name);
  }
  stopUndoRedoTransaction() {
    this.undoRedoController && this.undoRedoController.stopTransaction();
  }
  /**
   * Returns `true` if an undo or redo operation is in progress.
   * @see undo
   * @see redo
   */
  public get isProcessingUndoRedo(): boolean {
    return this.undoRedoManager && this.undoRedoManager.isProcessingUndoRedo;
  }
  /**
   * Cancels the last change if possible.
   * @see redo
   * @see onBeforeUndo
   */
  public undo() {
    this.undoRedoController && this.undoRedoController.undo();
  }
  /**
   * Repeats the last undone action if possible.
   * @see undo
   * @see onBeforeRedo
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
   * An event that is raised before a new page is added to the survey. Handle this event if you do not want to add the page. 
   */
  public onPageAdding: EventBase<SurveyCreatorModel, PageAddingEvent> = this.addCreatorEvent<SurveyCreatorModel, PageAddingEvent>();
  public canAddPage(pageToAdd?: PageModel) {
    const options = {
      page: pageToAdd,
      allow: true
    };
    this.onPageAdding.fire(this, options);
    return options.allow;
  }
  @undoRedoTransaction()
  public addPage(pageToAdd?: PageModel, changeSelection = true, beforeAdd?: () => boolean): PageModel {
    if (!this.canAddPage(pageToAdd)) {
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
      ["designer", "undoredo", "test", "theme"].forEach((pluginKey: string) => {
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
    parentProperty: JsonObjectProperty,
    creatorReadOnly?: boolean
  ): boolean {
    if (!property) return false;
    if (creatorReadOnly === undefined) {
      creatorReadOnly = this.readOnly;
    }
    const proposedValue = creatorReadOnly || readOnly;
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
   * A [survey](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model) being configured in the Designer tab.
   * @see onSurveyInstanceCreated
   */
  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  /**
   * Adds new items to the [`pages`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#pages), [`triggers`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#triggers), [`calculatedValues`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#calculatedValues), and [`completedHtmlOnCondition`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#completedHtmlOnCondition) arrays in the existing survey JSON schema.
   * 
   * Use this method to merge the collection properties of two survey JSON schemas:
   * 
   * ```js
   * import { SurveyCreatorModel } from "survey-creator-core";
   * const creatorOptions = { ... };
   * const creator = new SurveyCreatorModel(creatorOptions);
   * 
   * const surveyJson1 = { ... };
   * const surveyJson2 = { ... };
   * 
   * creator.JSON = surveyJson1;
   * creator.addCollectionItemsJson(surveyJson2);
   * // `creator.JSON` contains the merged survey JSON schema
   * ```
   * @param json A JSON object that contains the `pages`, `triggers`, `calculatedValues`, and/or `completedHtmlOnCondition` array(s).
   * @param insertPageIndex A zero-based index at which to insert new pages.
   */
  public addCollectionItemsJson(json: any, insertPageIndex?: number): void {
    const survey = new SurveyModel(json);
    this.updateAddingSurvey(survey);
    this.addSurveyPages(survey, insertPageIndex);
  }
  private updateAddingSurvey(survey: SurveyModel): void {
    this.updateAddingPages(survey);
    this.updateAddingPanels(survey);
    this.updateAddingQuestions(survey);
    this.updateAddingCalculatedValules(survey);
    this.updateAddingArrays(survey);
  }
  private updateAddingPages(survey: SurveyModel): void {
    this.updateAddingElements(survey, survey.pages, this.survey.pages,
      (el: SurveyElement, allElements: Array<SurveyElement>): void => {
        el.name = SurveyHelper.getNewPageName(allElements);
      });
  }
  private updateAddingExistingElements(): Array<SurveyElement> {
    return [].concat(this.survey.getAllQuestions(false, true)).concat(this.survey.getAllPanels());
  }
  private updateAddingPanels(survey: SurveyModel): void {
    this.updateAddingElements(survey, <any>survey.getAllPanels(), this.updateAddingExistingElements(),
      (el: SurveyElement, allElements: Array<SurveyElement>): void => {
        el.name = SurveyHelper.getNewPanelName(allElements);
      });
  }
  private updateAddingQuestions(survey: SurveyModel): void {
    const logic = new SurveyLogic(survey, this);
    this.updateAddingElements(survey, survey.getAllQuestions(false, true), this.updateAddingExistingElements(),
      (el: SurveyElement, allElements: Array<SurveyElement>): void => {
        const oldName = el.name;
        el.name = SurveyHelper.getNewQuestionName(allElements);
        logic.renameQuestion(oldName, el.name);
      });
  }
  private updateAddingCalculatedValules(survey: SurveyModel): void {
    const logic = new SurveyLogic(survey, this);
    this.updateAddingElements(survey, <any>survey.calculatedValues, <any>this.survey.calculatedValues,
      (el: SurveyElement, allElements: Array<SurveyElement>): void => {
        const oldName = el.name;
        el.name = SurveyHelper.getNewName(allElements, "var");
        logic.renameQuestion(oldName, el.name);
      });
  }
  private updateAddingArrays(survey: SurveyModel): void {
    survey.triggers.forEach(item => this.survey.triggers.push(item));
    survey.completedHtmlOnCondition.forEach(item => this.survey.completedHtmlOnCondition.push(item));
    survey.calculatedValues.forEach(item => this.survey.calculatedValues.push(item));
  }
  private updateAddingElements(survey: SurveyModel, changingElements: Array<SurveyElement>,
    existingElements: Array<SurveyElement>, onChange: (element: SurveyElement, allElements: Array<SurveyElement>) => void): void {
    const elementsToChange = [];
    const hash = {};
    existingElements.forEach(el => {
      if (!!el.name) {
        hash[el.name] = el;
      }
    });
    changingElements.forEach(el => {
      if (!!el.name && !!hash[el.name]) {
        elementsToChange.push(el);
      }
    });
    const allElements = existingElements.concat(changingElements);
    elementsToChange.forEach(el => {
      onChange(el, allElements);
    });
  }
  private addSurveyPages(survey: SurveyModel, indexPage?: number): void {
    if (indexPage === undefined || indexPage >= this.survey.pages.length) {
      indexPage = -1;
    }
    for (let i = 0; i < survey.pages.length; i++) {
      if (indexPage < 0) {
        this.survey.pages.push(survey.pages[i]);
      } else {
        this.survey.pages.splice(indexPage + i, 0, survey.pages[i]);
      }
    }
  }
  private existingPages: {};
  /**
   * Returns true if initial survey was empty. It was not set via JSON property and default new survey is empty as well.
   * @returns true if initial survey doesn't have any elements or properties
   */
  protected initSurveyWithJSON(json: any, clearState: boolean): void {
    if (!json) {
      json = { "logoPosition": "right" };
    }
    this.existingPages = {};
    const survey = this.createSurvey({}, "designer", undefined, (survey: SurveyModel) => {
      survey.css = defaultV2Css;
      survey.setIsMobile(!!this.isMobileView);
      survey.setDesignMode(true);
      survey.lazyRendering = true;
      survey.setJsonObject(json);
      if (survey.isEmpty) {
        survey.setJsonObject(this.getDefaultSurveyJson());
      }
    });
    survey.pages.forEach((page: PageModel) => {
      this.existingPages[page.id] = true;
    });
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
   * @see onDragEnd
   * @see onDragDropAllow
   */
  public onDragStart: EventBase<any, DragStartEndEvent> = new EventBase<any, DragStartEndEvent>();
  public onBeforeDrop: EventBase<any, DragStartEndEvent> = this.onDragStart;
  /**
   * An event that is raised when users finish dragging a survey element within the design surface.
   * @see onDragStart
   * @see onDragDropAllow
   */
  public onDragEnd: EventBase<any, DragStartEndEvent> = new EventBase<any, DragStartEndEvent>();
  public onAfterDrop: EventBase<any, DragStartEndEvent> = this.onDragEnd;
  private initDragDropSurveyElements() {
    DragDropSurveyElements.restrictDragQuestionBetweenPages =
      settings.dragDrop.restrictDragQuestionBetweenPages;
    this.dragDropSurveyElements = new DragDropSurveyElements(null, this);
    this.dragDropSurveyElements.onGetMaxNestedPanels = (): number => { return this.maxNestedPanels; };
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
   * A survey JSON schema as a string.
   * 
   * This property allows you to get or set the JSON schema of a survey being configured. Alternatively, you can use the [`JSON`](#JSON) property.
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

  public createSurvey(json: any, reason: string, model?: any, callback?: (survey: SurveyModel) => void, area?: string): SurveyModel {
    const survey = this.createSurveyCore(json, reason);

    if (reason !== "designer" && reason !== "test") { survey.fitToContainer = false; }

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
    if (callback) {
      callback(survey);
    }
    area = area || this.getSurveyInstanceCreatedArea(reason);
    this.onSurveyInstanceCreated.fire(this, {
      survey: survey,
      reason: reason,
      area: area,
      model: !!model ? model : this.currentPlugin?.model
    });
    if (reason === "designer") {
      this.onDesignerSurveyCreated.fire(this, { survey: survey });
    }
    if (reason === "test") {
      this.onPreviewSurveyCreated.fire(this, { survey: survey });
    }
    return survey;
  }
  private getSurveyInstanceCreatedArea(reason: string): string {
    const hash: any = {};
    hash["designer"] = "designer-tab";
    hash["test"] = "preview-tab";
    hash["property-grid"] = "property-grid";
    hash["default-value"] = "default-value-popup-editor";
    hash["condition-builder"] = "logic-rule:condition-editor";
    hash["logic-item-editor"] = "logic-rule:action-editor";
    hash["logic-items"] = "logic-tab:condition-list";
    hash["theme"] = "theme-tab";
    hash["theme_editor"] = "theme-tab:property-grid";
    hash["translation_settings"] = "translation-tab:language-list";
    hash["translation_strings"] = "translation-tab:table";
    hash["translation_strings_header"] = "translation-tab:table-header";
    hash["cells-editor"] = "matrix-cell-values-popup-editor";
    hash["fast-entry"] = "table-values-popup-editor";
    hash["modal-question-editor"] = "matrix-cell-question-popup-editor";
    const res = hash[reason];
    return !!res ? res : "internal-use";
  }
  protected createSurveyCore(json: any = {}, reason: string): SurveyModel {
    return new SurveyModel(json);
  }
  private _stateValue: string;
  /**
   * Indicates the state of Survey Creator.
   * 
   * Possible values:
   * 
   * - `""` - Survey Creator doesn't have unsaved changes.
   * - `"modified"` - Survey Creator has unsaved changes.
   * - `"saving"` - Changes are being saved.
   * - `"saved"` - Changes are successfully saved.
   * @see onModified
   */
  public get state(): string {
    return !!this._stateValue ? this._stateValue : "";
  }
  protected setState(value: string) {
    this._stateValue = value;
    this.onStateChanged.fire(this, { val: value });
    if (!!value) {
      this.notify(this.getLocString("ed." + value));
      this._updateSaveActions();
    }
  }
  public onStateChanged: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();

  notifier = new Notifier({
    root: "svc-notifier",
    rootWithButtons: "",
    info: "svc-notifier--info",
    error: "svc-notifier--error",
    success: "svc-notifier--success",
    button: "",
    shown: "svc-notifier--shown"
  });

  public setModified(options: any = null): void {
    this.setState("modified");
    this.onModified.fire(this, options);
    this.isAutoSave && this.doAutoSave();
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
   * Displays a toast notification with a specified message.
   * 
   * If you want to implement custom toast notification from scratch, handle the [`onNotify`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onNotify) event.
   * @param message A message to display.
   * @param type A notification type: `"info"` (default) or `"error"`.
   */
  public notify(message: string, type: "info" | "error" = "info") {
    if (this.onNotify.isEmpty) {
      this.notifier.notify(message, type);
      // alert(message);
    } else {
      this.onNotify.fire(this, { message, type });
    }
  }

  protected convertQuestion(obj: Question, className: string): Question {
    var newQuestion = <Question>QuestionConverter.convertObject(obj, className,
      this.getDefaultElementJSON(obj.getType()), this.getDefaultElementJSON(className));
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
    const json = this.toolbox.getItemByName(elType)?.json;
    return !!json ? Helpers.createCopy(json) : null;
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
   * A survey JSON schema.
   * 
   * This property allows you to get or set the JSON schema of a survey being configured. Alternatively, you can use the [`text`](#text) property.
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
        while (!!selectedElement.parent && selectedElement.parent.isPanel) {
          if (!!(<any>selectedElement).parentQuestion) {
            selectedElement = <IElement>(<any>selectedElement).parentQuestion;
          }
          else {
            selectedElement = <IElement><any>selectedElement.parent;
          }
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
    const survey = this.createSurvey({}, "updateNewElementExpressions", undefined, (survey: SurveyModel): void => {
      survey.setDesignMode(true);
      if (element.isPage) {
        survey.addPage(<PageModel>element);
      } else {
        survey.addNewPage("p1");
        survey.pages[0].addElement(<IElement>element);
      }
    });
    const logic = new SurveyLogic(survey);
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
    if (includeNewItems) {
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
    if (element.isPanel || element.isPage) {
      if (element.isPanel) {
        this.newPanels.push(element);
      }
      var panel = <PanelModelBase>(<any>element);
      panel.elements.forEach(el => this.setNewNamesCore(el));
    } else {
      this.newQuestions.push(element);
      const els = Array.isArray(element["templateElements"]) ? element["templateElements"] :
        (Array.isArray(element["detailElements"]) ? element["detailElements"] : undefined);
      if (els) {
        els.forEach(el => this.setNewNamesCore(el));
      }
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
   * Creates a copy of a specified question and inserts the copy next to this question.
   * @param question A question to copy.
   * @returns The instance of a new question.
   */
  public fastCopyQuestion(question: Base): IElement {
    var newElement = this.copyElement(question);
    var index = !!question["parent"]
      ? question["parent"].elements.indexOf(question) + 1
      : -1;
    if (index > -1) {
      const elements = (<any>question).parent.elements;
      if (index < elements.length && elements[index].startWithNewLine === false) {
        newElement.startWithNewLine = false;
      }
    }
    this.doClickQuestionCore(newElement, "ELEMENT_COPIED", index, question["parent"]);
    return newElement;
  }
  /**
   * Gets or sets the focused survey element: a question, panel, page, or the survey itself.
   * @see onSelectedElementChanging
   * @see onSelectedElementChanged
   */
  public get selectedElement(): Base {
    return this.selectedElementValue;
  }
  public set selectedElement(val: Base) {
    this.selectElement(val);
  }
  /**
   * Refreshes the Designer tab.
   * 
   * `refreshDesigner()` is useful if the Designer tab UI depends on an external variable. Call this method each time this variable changes to update the UI.
   */
  public refreshDesigner(): void {
    if (this.activeTab !== "designer") return;
    this.changeText(this.text);
  }
  public deleteCurrentObject() {
    this.deleteCurrentElement();
  }
  public deleteCurrentElement() {
    this.deleteObject(this.selectedElement);
  }
  /**
   * Deletes a survey element: a question, panel, or page.
   * 
   * If you want to delete the focused element, pass the [`selectedElement`](#selectedElement) property value to this method.
   * @param element A survey element to delete.
   * @see onElementDeleting
   */
  public deleteElement(element: Base) {
    this.deleteObject(element);
  }
  /**
   * Creates a copy of a specified page and inserts the copy next to this page.
   * @param page A [page](https://surveyjs.io/form-library/documentation/api-reference/page-model) to copy.
   * @returns The [instance of a new page](https://surveyjs.io/form-library/documentation/api-reference/page-model).
   * @see onPageAdding
   * @see onPageAdded
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
      if (this.survey.pageCount === 1) {
        const page = this.survey.pages[0];
        if (page.elements.length === 1 && obj === page.elements[0] && !SurveyHelper.isPagePropertiesAreModified(page)) {
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
    if (!this.checkOnElementDeleting(obj)) return;
    this.deleteObjectCore(obj);
  }
  protected updateConditionsOnRemove(obj: any) {
    if (!settings.logic.updateExpressionsOnDeleting.question) return;
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
  private checkOnElementDeleting(obj: any): boolean {
    const options = {
      element: obj,
      elementType: SurveyHelper.getObjectType(obj),
      allowing: true
    };
    this.onElementDeleting.fire(this, options);
    return options.allowing;
  }
  public isElementSelected(element: Base): boolean {
    if (!element || element.isDisposed) return false;
    return element.getPropertyValue("isSelectedInDesigner");
  }

  public selectElement(element: any, propertyName?: string, focus: boolean | string = true, startEdit = false) {
    if (!!element && (element.isDisposed || !element.getSurvey() || ((element.isQuestion || element.isPanel) && !element.parent))) return;
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
          const blockValue = !this.rootElement || this.rootElement.clientHeight - 64 > el.clientHeight ? "center" : "start";
          el.scrollIntoView({ block: blockValue });
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
    const propertyGridTab = this.sidebar.getTabById(this.sidebar.activeTab);
    if (!propertyGridTab) return null;
    return propertyGridTab.model ? (propertyGridTab.model.propertyGridModel as any as PropertyGridModel) : null;
  }
  public get propertyGrid(): SurveyModel {
    return this.designerPropertyGrid.survey;
  }
  /**
   * Collapses a specified category in Property Grid.
   * @param name A [category name](https://surveyjs.io/form-library/documentation/customize-question-types/add-custom-properties-to-a-form#category).
   * @see expandPropertyGridCategory
   */
  public collapsePropertyGridCategory(name: string) {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.collapseCategory(name);
    }
  }
  /**
   * Expands a specified category in Property Grid.
   * @param name A [category name](https://surveyjs.io/form-library/documentation/customize-question-types/add-custom-properties-to-a-form#category).
   * @see collapsePropertyGridCategory
   */
  public expandPropertyGridCategory(name: string) {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.expandCategory(name);
    }
  }
  /**
   * Collapses all categories in Property Grid.
   * @see expandAllPropertyGridCategories
   */
  public collapseAllPropertyGridCategories() {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.collapseAllCategories();
    }
  }
  /**
   * Expands all categories in Property Grid.
   * @see collapseAllPropertyGridCategories
   */
  public expandAllPropertyGridCategories() {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.expandAllCategories();
    }
  }
  public collapseAllPropertyTabs(): void {
    this.collapseAllPropertyGridCategories();
  }
  public expandAllPropertyTabs(): void {
    this.expandAllPropertyGridCategories();
  }
  public expandPropertyTab(name: string): void {
    this.expandPropertyGridCategory(name);
  }
  public collapsePropertyTab(name: string): void {
    this.collapsePropertyGridCategory(name);
  }
  //#endregion Obsolete designerPropertyGrid

  /**
   * Validates the property values of the [focused element](#selectedElement).
   * @returns `true` if all property values of the focused element are valid or if no element is focused, `false` otherwise.
   * @see onSelectedElementChanging
   * @see onSelectedElementChanged
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
   * Deletes all custom translation strings for a specified locale from Survey Creator and from the generated survey JSON schema.
   * @param locale A locale code (for example, "en").
   * @see locale
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
  public expandCategoryIfNeeded(): void {
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
   * Opens a dialog window for users to select files.
   * @param input A [file input HTML element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
   * @param callback A callback function that you can use to process selected files. Accepts an array of JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/API/File" target="_blank">File</a> objects.
   * @see onOpenFileChooser
   * @see onUploadFile
   */
  public chooseFiles(
    input: HTMLInputElement,
    callback: (files: File[]) => void,
    context?: { element: Base, item?: any, elementType?: string, propertyName?: string }
  ) {
    if (this.onOpenFileChooser.isEmpty) {
      chooseFiles(input, callback);
    } else {
      this.onOpenFileChooser.fire(this, {
        input: input,
        element: context && context.element || this.survey,
        elementType: context && context.elementType,
        item: context && context.item,
        propertyName: context && context.propertyName,
        callback: callback,
        context: context
      } as any);
    }
  }
  /**
   * Uploads files to a server.
   * @param files An array of JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/API/File" target="_blank">File</a> objects that represent files to upload.
   * @param question A [question instance](https://surveyjs.io/form-library/documentation/api-reference/question) for which files are uploaded.
   * @param callback A callback function that indicates the upload status&mdash;"success" or "error"&mdash;as the first argument. If a file is uploaded successfully, the second argument contains the file's URL.
   * @see onUploadFile
   */
  public uploadFiles(
    files: File[],
    question: Question,
    callback: (status: string, data: any) => any,
    context?: { element: Base, item?: any, elementType?: string, propertyName?: string }
  ) {
    if (this.onUploadFile.isEmpty) {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        callback("success", fileReader.result);
      };
      fileReader.readAsDataURL(files[0]);
    } else {
      this.onUploadFile.fire(this, {
        question: question,
        files: files || [],
        callback: callback,
        element: context && context.element || this.survey,
        elementType: context && context.elementType,
        propertyName: context && context.propertyName,
        context: context
      } as any);
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
  public findSuitableShortcuts(event: KeyboardEvent): IKeyboardShortcut[] {
    const shortcuts: IKeyboardShortcut[] = [];
    const availableShortcuts = Object.keys(this.shortcuts || {})
      .map((key) => this.shortcuts[key])
      .filter((shortcut: IKeyboardShortcut) => !shortcut.affectedTab || shortcut.affectedTab === this.activeTab);

    availableShortcuts.forEach((shortcut: IKeyboardShortcut) => {
      const hotKey: { ctrlKey?: boolean, shiftKey?: boolean, keyCode: number } = event.metaKey ? shortcut.macOsHotkey : shortcut.hotKey;
      if (!hotKey) return;

      if (!!hotKey.ctrlKey !== !!event.ctrlKey) return;
      if (!!hotKey.shiftKey !== !!event.shiftKey) return;
      if (hotKey.keyCode !== event.keyCode) return;
      shortcuts.push(shortcut);
    });
    return shortcuts;
  }
  protected onKeyDownHandler = (event: KeyboardEvent) => {
    this.findSuitableShortcuts(event).forEach((shortcut: IKeyboardShortcut) => {
      if ((event.keyCode < 48 || event.keyCode == 89 || event.keyCode == 90) && isTextInput(event.target)) return;
      shortcut.execute(this.selectedElement);
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
    if (obj["questions"]) {
      obj["questions"].forEach(q => this.updateConditionsOnRemove(q));
    }
    obj["delete"](false);
    if (parent.isPage && (this.pageEditMode === "single" || elements.length === 0)) {
      parent = this.survey;
    }
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
    const options = { element: el, name: newName, isDone: true };
    const list = [];
    do {
      this.generateUniqueNameCore(options);
      if (!options.isDone && list.indexOf(options.name) > -1) {
        options.name = this.checkForUniqueName(el, options.name);
        break;
      }
      list.push(options.name);
    } while (!options.isDone);
    return options.name;
  }
  protected generateUniqueNameCore(options: any): void {
    options.name = this.checkForUniqueName(options.element, options.name);
    const evnOptions = { element: options.element, name: options.name };
    this.onGenerateNewName.fire(this, evnOptions);
    if (options.name !== evnOptions.name) {
      options.name = evnOptions.name;
      options.name = this.checkForUniqueName(options.element, options.name);
      options.isDone = options.name === evnOptions.name;
    }
  }
  private checkForUniqueName(el: Base, newName: string): string {
    while (!this.isNameUnique(el, newName, false)) {
      newName = SurveyHelper.generateNewName(newName);
    }
    return newName;
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
    const options = { obj: <Base>object, survey: survey };
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
    if (!!item && item["isPage"]) {
      if (this.pageEditMode === "bypage") return item !== this.survey.currentPage;
      if (this.pageEditMode === "single") return false;
    }
    return this.canDeleteItem(object, item, allowDelete);
  }
  onCollectionItemDeletingCallback(
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base
  ): boolean {
    if ((<any>item)?.isPage && !this.checkOnElementDeleting(item)) return false;
    if (this.onCollectionItemDeleting.isEmpty) return true;
    const options = {
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
  ): void {
    var options = {
      obj: obj,
      propertyName: propertyName,
      newItem: itemValue,
      itemValues: itemValues
    };
    this.onItemValueAdded.fire(this, options);
  }
  onFastEntryCallback(items: Array<ItemValue>, lines: Array<string>): Array<ItemValue> {
    const options = {
      items: items,
      lines: lines
    };
    this.onFastEntryFinished.fire(this, options);
    return options.items;
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
    if (this.onConditionQuestionsGetList.isEmpty) return settings.logic.questionSortOrder;
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
      locString: <LocalizableString>locString,
      newText: newText
    };
    this.onTranslationItemChanging.fire(this, options);
    return options.newText;
  }
  getTranslationExportedText(obj: Base, name: string, locString: ILocalizableString, locale: string, text: string): string {
    if (this.onTranslationExportItem.isEmpty) return text;
    const options = {
      obj: obj,
      name: name,
      locString: <LocalizableString>locString,
      locale: locale,
      text: text
    };
    this.onTranslationExportItem.fire(this, options);
    return options.text;
  }
  getHasMachineTranslation(): boolean {
    return !this.onMachineTranslate.isEmpty;
  }
  doMachineTranslation(fromLocale: string, toLocale: string, strings: Array<string>, callback: (translated: Array<string>) => void): void {
    if (!this.getHasMachineTranslation()) {
      callback(undefined);
    } else {
      this.onMachineTranslate.fire(this, { fromLocale: fromLocale, toLocale: toLocale, strings: strings, callback: callback });
    }
  }
  translationLocalesOrder: Array<string> = [];
  /**
   * A delay between changing survey settings and saving the survey JSON schema, measured in milliseconds. Applies only when the [`isAutoSave`](#isAutoSave) property is `true`.
   * 
   * Default value: 500 (inherited from `settings.autoSave.delay`)
   * 
   * If a user changes the settings once again during the delay, only the latest version will be saved.
   */
  public autoSaveDelay: number = settings.autoSave.delay;
  private autoSaveTimerId = null;
  protected doAutoSave() {
    const saveFunc = () => this.doSave();
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
  private _doSaveCore(onSaveComplete?: () => void) {
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
        onSaveComplete && onSaveComplete();
      });
    }
  }
  /**
   * Calls the [`saveSurveyFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) function to save the survey JSON schema.
   * @see saveTheme
   * @see save
   */
  public saveSurvey() {
    this._doSaveCore();
  }
  public doSave() {
    this._doSaveCore();
  }
  public saveSurveyActionHandler() {
    if (this.syncSaveButtons) {
      this.save();
    } else {
      this.saveSurvey();
    }
  }

  private _updateSaveActions() {
    const action = this._findAction("svd-save");
    if (action) {
      action.enabled = this.state === "modified";
      action.active = this.state === "modified";
    }
    if (this.syncSaveButtons) {
      const action = this._findAction("svd-save-theme");
      if (action) {
        action.enabled = this.hasPendingThemeChanges;
        action.active = this.hasPendingThemeChanges;
      }
    }
  }

  /**
   * Calls the [`saveSurveyFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) and [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) functions to save the survey and theme JSON schemas.
   * @see saveSurvey
   * @see saveTheme
   */
  public save() {
    const themeSaveHandler = () => {
      if (this.hasPendingThemeChanges) {
        this._doSaveThemeCore(() => {
          this._updateSaveActions();
        });
      }
    };
    if (this.state === "modified") {
      this._doSaveCore(() => {
        themeSaveHandler();
      });
    } else themeSaveHandler();
  }

  protected _syncSaveActions = (sender: any, options: any) => {
    const saveAction = this._findAction("svd-save");
    const saveThemeAction = this._findAction("svd-save-theme");
    if (!saveAction || !saveThemeAction) {
      return;
    }
    if (sender === this) {
      saveThemeAction.enabled = saveAction.enabled;
    } else {
      saveAction.enabled = saveThemeAction.enabled;
    }
  }

  /**
   * Specifies whether to synchronize [Save buttons](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) in the Designer and Themes tabs.
   * 
   * Default value: `false`
   * 
   * When this property is disabled, the Save button in the Designer tab saves only the survey JSON schema, while the Save button in the Themes tab saves only the theme JSON schema. If you enable this property, both buttons will save both JSON schemas.
   * @see saveSurveyFunc
   * @see saveThemeFunc
   * @see save
   */
  @property({
    defaultValue: false, onSet(val, target: SurveyCreatorModel) {
      let themeTabPlugin: ThemeTabPlugin = target.getPlugin<ThemeTabPlugin>("theme");
      if (!themeTabPlugin) {
        return;
      }
      if (val) {
        target.onModified.add(target._syncSaveActions);
        themeTabPlugin.onThemePropertyChanged.add(target._syncSaveActions);
        themeTabPlugin.onThemeSelected.add(target._syncSaveActions);
      } else {
        target.onModified.remove(target._syncSaveActions);
        themeTabPlugin.onThemePropertyChanged.remove(target._syncSaveActions);
        themeTabPlugin.onThemeSelected.remove(target._syncSaveActions);
      }
    },
  }) syncSaveButtons: boolean;

  /**
   * Specifies whether to display a button that saves the survey or theme (executes the [`saveSurveyFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) or [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) function).
   * 
   * Default value: `false`
   * @see isAutoSave
   * @see syncSaveButtons
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
    this.addNewElementReason = "ELEMENT_CONVERTED";
    el = this.convertQuestion(<Question>el, newType);
    this.selectElement(el, null, "#convertTo button");
  }

  public getAddNewQuestionText(currentAddQuestionType: string = null) {
    if (!currentAddQuestionType)
      currentAddQuestionType = this.currentAddQuestionType;
    if (!!currentAddQuestionType) {
      const str = this.getLocString("ed.addNewTypeQuestion");
      const items = this.toolbox.items.filter((item) => item.name == currentAddQuestionType);
      if (Array.isArray(items) && items.length > 0 && !!str && !!str["format"]) {
        return str["format"](items[0].title);
      }
    }
    return this.getLocString("ed.addNewQuestion");
  }
  public get addNewQuestionText() {
    return this.getAddNewQuestionText();
  }
  public getAvailableToolboxItems(element?: SurveyElement, isAddNew: boolean = true): Array<QuestionToolboxItem> {
    const res: Array<QuestionToolboxItem> = [].concat(this.toolbox.items);
    if (!element || this.maxNestedPanels < 0) return res;
    if (!isAddNew && element.isPanel) return res;
    if (this.maxNestedPanels < SurveyHelper.getElementDeepLength(element)) {
      for (let i = res.length - 1; i >= 0; i--) {
        if (res[i].isPanel) {
          res.splice(i, 1);
        }
      }
    }
    return res;
  }
  public getQuestionTypeSelectorModel(beforeAdd: (type: string) => void, element?: SurveyElement) {
    let panel = !!element && element.isPanel ? <PanelModel>element : null;
    const getActions = () => {
      const availableTypes = this.getAvailableToolboxItems(element).map((item) => {
        return this.createIActionBarItemByClass(item.name, item.title, item.iconName, item.needSeparator);
      });
      return availableTypes;
    };

    const newAction = createDropdownActionModel({
      iconName: "icon-more",
      title: this.getLocString("ed.addNewQuestion"),
    }, {
      items: getActions(),
      onSelectionChanged: (item: any) => {
        this.currentAddQuestionType = item.id;
        this.addNewQuestionInPage(beforeAdd, panel);
      },
      onShow: () => {
        const listModel = newAction.popupModel.contentComponentData.model;
        listModel.setItems(getActions());
      },
      allowSelection: false,
      verticalPosition: "bottom",
      horizontalPosition: "center",
      displayMode: this.isTouch ? "overlay" : "popup"
    });

    return newAction;
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
      iconName: iconName,
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
      allowShowSettings: undefined,
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
  @property({ defaultValue: true }) public allowShowPageNavigator;
  @property({ defaultValue: true }) private showPageNavigatorValue;

  public get showPageNavigator() {
    return this.showPageNavigatorValue && this.allowShowPageNavigator;
  }
  public set showPageNavigator(val: boolean) {
    this.showPageNavigatorValue = val;
  }

  @property({ getDefaultValue: () => { return settings.layout.showTabs; } }) showTabs;
  @property({ getDefaultValue: () => { return settings.layout.showToolbar; } }) showToolbar;
  @property({ getDefaultValue: () => { return settings.layout.allowCollapseSidebar; } }) allowCollapseSidebar;
  @property({
    defaultValue: false, onSet: (val, creator: SurveyCreatorModel) => {
      creator.survey.setIsMobile(!!val);
    }
  }) isMobileView: boolean;
  @property({ defaultValue: false }) isTouch;
  /**
   * Specifies the Toolbox location.
   * 
   * Possible values:
   * 
   * - `"left"` (default) - Displays the Toolbox on the left side of the design surface.
   * - `"right"` - Displays the Toolbox on the right side of the design surface.
   * - `"sidebar"` - Displays the Toolbox as an overlay on top of the Property Grid. Use the [`sidebarLocation`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#sidebarLocation) property to specify the Property Grid position.
   */
  @property({
    defaultValue: "left", onSet: (newValue, target: SurveyCreatorModel) => {
      if (!target.toolbox) return;
      target.toolbox.setLocation(newValue);
      target.updateToolboxIsCompact();
    }
  }) toolboxLocation: toolboxLocationType;
  /**
   * Specifies the position of the sidebar that displays the Property Grid. Applies only when [`showSidebar`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSidebar) is `true`.
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
    defaultValue: false, onSet: (newValue: boolean, target: SurveyCreatorModel) => {
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

export class CreatorBase extends SurveyCreatorModel { }

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

export function initializeDesignTimeSurveyModel(model: any, creator: SurveyCreatorModel) {
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
function getQuestionFromElement(element: any): any {
  if (!element) return null;
  if (!!element.row) return element.row.data;
  if (!!element.column) return element.column.colOwner;
  return null;
}

export const editableStringRendererName = "svc-string-editor";
export function getElementWrapperComponentName(element: any, reason: string, isPopupEditorContent: boolean): string {
  if (reason === "logo-image") {
    return "svc-logo-image";
  }
  if (reason === "cell" || reason === "column-header" || reason === "row-header") {
    if (isContentElement(getQuestionFromElement(element))) return undefined;
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
  creator: SurveyCreatorModel
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
  creator: SurveyCreatorModel
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
  if (element.parentQuestion instanceof QuestionMatrixDropdownModelBase) {
    if (!!element.data || isContentElement(element.parentQuestion)) return false;
  }
  return !isContentElement(element) || element.isEditableTemplateElement;
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