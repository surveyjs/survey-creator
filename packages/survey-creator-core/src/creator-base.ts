import {
  Base, SurveyModel, ListModel, Question, PanelModel, PageModel, PopupModel, property, IElement, Serializer,
  JsonObjectProperty, ActionContainer, AdaptiveActionContainer, IAction, Action, IPanel, SurveyElement, ItemValue,
  QuestionSelectBase, QuestionRowModel, LocalizableString, ILocalizableString, ILocalizableOwner, PopupBaseViewModel,
  EventBase, hasLicense, slk, glc, settings as SurveySettings, Event, Helpers as SurveyHelpers, MatrixDropdownColumn, JsonObject,
  ISurveyElement, PanelModelBase, surveyLocalization, QuestionMatrixDropdownModelBase, ITheme, Helpers,
  chooseFiles, createDropdownActionModel,
  CssClassBuilder,
  SvgRegistry,
  addIconsToThemeSet,
  SvgThemeSets,
  QuestionPanelDynamicModel,
  ChoiceItem
} from "survey-core";
import { ICreatorPlugin, ISurveyCreatorOptions, settings, ICollectionItemAllowOperations, ITabOptions } from "./creator-settings";
import { editorLocalization, setupLocale } from "./editorLocalization";
import { SurveyJSON5 } from "./json5";
import { DragDropChoices } from "survey-core";
import { IsTouch } from "survey-core";
import { QuestionConverter } from "./questionconverter";
import { SurveyTextWorker } from "./textWorker";
import { QuestionToolbox, QuestionToolboxItem } from "./toolbox";
import { assign, getOS } from "./utils/utils";
import { getNextItemValue, getNextItemText } from "./utils/creator-utils";
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
import { defaultCss, Notifier } from "survey-core";
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
import { DragDropSurveyElements } from "./dragdrop-survey-elements";
import { PageAdorner } from "./components/page";
import {
  ElementDeletingEvent, PropertyGetReadOnlyEvent, ElementGetDisplayNameEvent, ElementAllowOperationsEvent,
  ElementGetActionsEvent, PropertyShowingEvent, PropertyGridSurveyCreatedEvent, PropertyEditorCreatedEvent, PropertyEditorUpdateTitleActionsEvent,
  PropertyGridShowPopupEvent, CollectionItemAllowOperationsEvent, CollectionItemAddedEvent, FastEntryItemsEvent as FastEntryFinishedEvent, MatrixColumnAddedEvent, ConfigureTablePropertyEditorEvent,
  PropertyDisplayCustomErrorEvent, BeforePropertyChangedEvent, ConditionGetQuestionListEvent, GetConditionOperatorEvent,
  LogicRuleGetDisplayTextEvent, ModifiedEvent, QuestionAddedEvent, PanelAddedEvent, PageAddedEvent, QuestionConvertingEvent,
  PageGetFooterActionsEvent, SurveyInstanceCreatedEvent, DesignerSurveyCreatedEvent, PreviewSurveyCreatedEvent, NotifyEvent, ElementFocusingEvent,
  ElementFocusedEvent, OpenFileChooserEvent, UploadFileEvent, TranslationStringVisibilityEvent, TranslationImportItemEvent,
  TranslationImportedEvent, TranslationExportItemEvent, MachineTranslateEvent, TranslationItemChangingEvent, DragDropAllowEvent,
  CreateCustomMessagePanelEvent, ActiveTabChangingEvent, ActiveTabChangedEvent, BeforeUndoEvent, BeforeRedoEvent,
  PageAddingEvent, DragStartEndEvent,
  ElementGetExpandCollapseStateEvent,
  ElementGetExpandCollapseStateEventReason,
  AfterPropertyChangedEvent,
  PropertyValueChangingEvent,
  PropertyValueChangedEvent,
  PropertyAddingEvent,
  GetPropertyReadOnlyEvent,
  ElementSelectingEvent,
  ElementSelectedEvent,
  DefineElementMenuItemsEvent,
  CreatorThemePropertyChangedEvent,
  CreatorThemeSelectedEvent,
  AllowInplaceEditEvent,
  AllowAddElementEvent
} from "./creator-events-api";
import { ExpandCollapseManager } from "./expand-collapse-manager";
import designTabSurveyThemeJSON from "./designTabSurveyThemeJSON";
import { ICreatorTheme } from "./creator-theme/creator-themes";
import { SurveyElementAdornerBase } from "./components/survey-element-adorner-base";
import { TabbedMenuContainer, TabbedMenuItem } from "./tabbed-menu";
import { doMachineStringsTranslation } from "./utils/creator-locstrings";

import { iconsV1, iconsV2 } from "./svgbundle";
import { listComponentCss } from "./components/list-theme";

import "./components/creator.scss";
import "./components/string-editor.scss";
import "./creator-theme/creator.scss";
import { DomDocumentHelper } from "./utils/global_variables_utils";
import { deprecate } from "util";
import { TabJsonEditorBasePlugin } from "./components/tabs/json-editor-plugin";
import Default from "./themes/default-light";
import { legacyCssVariables } from "./themes/legacy-vars";

addIconsToThemeSet("v1", iconsV1);
addIconsToThemeSet("v2", iconsV2);

SvgRegistry.registerIcons(iconsV2);
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

export class FooterToolbarActionContainer extends ActionContainer {
  protected getDefaultCssClasses() {
    const defaultCss = super.getDefaultCssClasses();
    return {
      root: defaultCss.root + " svc-toolbar sv-action-bar sv-action-bar--default-size-mode",
      item: defaultCss.item + " svc-toolbar__item",
      itemWithTitle: defaultCss.itemWithTitle + " svc-toolbar__item--with-text",
      itemAsIcon: defaultCss.itemAsIcon + " svc-toolbar__item--icon",
      itemActive: defaultCss.itemActive + " svc-toolbar__item--active",
      itemPressed: defaultCss.itemPressed + " svc-toolbar__item--pressed",
      itemIcon: defaultCss.itemIcon + " svc-toolbar-item__icon",
      itemTitle: defaultCss.itemTitle + " svc-toolbar-item__title",
      itemTitleWithIcon: defaultCss.itemTitleWithIcon + " svc-toolbar-item__title--with-icon",
    };
  }
}
export class ToolbarActionContainer extends FooterToolbarActionContainer {
  constructor(private creator: SurveyCreatorModel) {
    super();
  }
  protected getRenderedActions(): Array<Action> {
    let actions = this.visibleActions;
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
   * Specifies whether to display the [Designer](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#designer-tab) tab.
   *
   * Default value: `true`
   * @see activeTab
   * @see onSurveyInstanceCreated
   */
  @property({ defaultValue: true }) showDesignerTab: boolean;
  /**
   * Specifies whether to display the [JSON Editor](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#json-editor-tab) tab.
   *
   * Default value: `true`
   * @see activeTab
   */
  @property({ defaultValue: true }) showJSONEditorTab: boolean;

  @property({ defaultValue: true }) showTestSurveyTab: boolean;
  /**
   * Specifies whether to display the [Preview](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#preview-tab) tab.
   *
   * Default value: `true`
   * @see activeTab
   * @see onSurveyInstanceCreated
   */
  public get showPreviewTab(): boolean { return this.showTestSurveyTab; }
  public set showPreviewTab(val: boolean) { this.showTestSurveyTab = val; }
  /**
   * Specifies whether to display the [Themes](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#themes-tab) tab.
   *
   * Default value: `false`
   *
   * Use the [`themeEditor`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#themeEditor) object to manage UI themes available in the Themes tab.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/change-form-theme/ (linkStyle))
   * @see activeTab
   * @see saveThemeFunc
   */
  @property({ defaultValue: false }) showThemeTab: boolean;
  /**
   * Specifies whether users can modify the [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme). Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"buttons"`.
   *
   * Default value: `true`
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/dynamic-ui-customization/ (linkStyle))
   */
  @property({ defaultValue: true }) showCreatorThemeSettings: boolean;
  /**
   * Specifies whether the "Zoom In", "Zoom Out", and "Zoom to 100%" buttons are available.
   *
   * Default value: `true`
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))
   */
  @property({ defaultValue: true }) allowZoom: boolean;
  /**
   * Specifies whether to display the [Translation](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#translation-tab) tab.
   *
   * Default value: `false`
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/create-multilingual-forms/ (linkStyle))
   * @see activeTab
   * @see clearTranslationsOnSourceTextChange
   */
  @property({ defaultValue: false }) showTranslationTab: boolean;
  /**
   * Specifies whether to display the [Logic](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#logic-tab) tab.
   *
   * Default value: `true`
   * @see activeTab
   */
  @property({ defaultValue: true }) showLogicTab: boolean;
  @property({ defaultValue: false }) useTableViewInLogicTab: boolean;
  @property({ defaultValue: 0 }) pageHoverDelay: number;
  /**
   * Allows users to edit choice values instead of choice texts on the design surface.
   *
   * Default value: `false` (users edit choice texts)
   *
   * If you enable this property, users cannot edit choice texts because the Property Grid hides the Text column for choices, rate values, columns and rows in [Single-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model), and rows in [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) questions.
   * @see useElementTitles
   * @see onAllowInplaceEdit
   */
  @property({ defaultValue: false }) inplaceEditChoiceValues: boolean;
  /**
   * @deprecated Use the [`inplaceEditChoiceValues`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#inplaceEditChoiceValues) property instead.
   */
  get inplaceEditForValues() {
    return this.inplaceEditChoiceValues;
  }
  set inplaceEditForValues(val) {
    this.inplaceEditChoiceValues = val;
  }

  /**
   * Specifies whether to display a table with survey results after completing a survey in the Preview tab.
   *
   * Default value: `true`
   */
  @property({ defaultValue: true }) previewShowResults: boolean;

  @property({ defaultValue: true }) private _showOneCategoryInPropertyGrid: boolean;
  get showOneCategoryInPropertyGrid(): boolean {
    return this._showOneCategoryInPropertyGrid;
  }
  set showOneCategoryInPropertyGrid(newValue: boolean) {
    this._showOneCategoryInPropertyGrid = newValue;
    Object.keys(this.plugins).forEach(name => {
      const plugin = this.plugins[name];
      if (!!plugin && "showOneCategoryInPropertyGrid" in plugin) {
        plugin.showOneCategoryInPropertyGrid = newValue;
      }
    });
  }
  /**
   * Specifies how users navigate categories in the Property Grid.
   *
   * Accepted values:
   *
   * - `"accordion"`\
   * The Property Grid displays a stacked list of categories that users can expand or collapse to reveal nested properties.
   *
   * - `"buttons"` (default)\
   * The Property Grid displays the properties of a currently selected category. Users can switch between categories using buttons on the right side of the Property Grid.
   *
   * [Accordion Mode Demo](https://surveyjs.io/survey-creator/examples/property-grid-accordion-view/ (linkStyle))
   *
   * [Buttons Mode Demo](https://surveyjs.io/survey-creator/examples/free-nps-survey-template/ (linkStyle))
   */
  get propertyGridNavigationMode(): "buttons" | "accordion" {
    return this.showOneCategoryInPropertyGrid ? "buttons" : "accordion";
  }
  set propertyGridNavigationMode(newValue: "buttons" | "accordion") {
    this.showOneCategoryInPropertyGrid = newValue === "buttons";
  }
  public trimValues: boolean = false;

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
  get showSurveyHeader(): boolean {
    return this.allowEditSurveyTitle;
  }
  set showSurveyHeader(val: boolean) {
    this.allowEditSurveyTitle = val;
  }
  /**
   * @deprecated Use the [`showSurveyHeader`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSurveyHeader) property instead.
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
    const d: any = !!glc ? glc(1) : false;
    if (!!d && d.toLocaleDateString) return this.getLocString("survey.license2").replace("{date}", d.toLocaleDateString());
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
   * If you enable this property, Survey Creator calls the [`saveSurveyFunc`](#saveSurveyFunc) or [`saveThemeFunc`](#saveThemeFunc) function to save the survey or theme JSON schema. The schemas are saved with a 500-millisecond delay after users change settings. You can specify the [`autoSaveDelay`](#autoSaveDelay) property to increase or decrease the delay.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/set-how-survey-configuration-changes-are-saved/ (linkStyle))
   */
  @property({ defaultValue: false }) autoSaveEnabled: boolean;
  /**
   * @deprecated Use the [`autoSaveEnabled`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#autoSaveEnabled) property instead.
   */
  get isAutoSave() {
    return this.autoSaveEnabled;
  }
  set isAutoSave(val) {
    this.autoSaveEnabled = val;
  }
  @property() showOptions: boolean;
  @property({ defaultValue: false }) showSearch: boolean;
  @property({ defaultValue: true }) generateValidJSON: boolean;
  @property({ defaultValue: "" }) _currentAddQuestionType: string;
  /**
   * Specifies whether the "Add Question" button remembers the type of the most recently added question and uses it for subsequent questions.
   *
   * Default value: `true`
   * @see addNewQuestionLast
   */
  rememberLastQuestionType: boolean = true;
  get currentAddQuestionType(): string {
    return this._currentAddQuestionType;
  }
  set currentAddQuestionType(val: string) {
    if (this.rememberLastQuestionType) {
      this._currentAddQuestionType = val;
    }
  }
  /**
   * Specifies a default device for survey preview in the Preview tab.
   *
   * Accepted values:
   *
   * - `"desktop"` (default)
   * - `"iPhoneSE"`
   * - `"iPhone15"`
   * - `"iPhone15Plus"`
   * - `"iPad"`
   * - `"iPadMini"`
   * - `"androidPhone"`
   * - `"androidTablet"`
   * - `"microsoftSurface"`
   */
  previewDevice: string;
  /**
   * Specifies the orientation of the selected device in the Preview tab.
   *
   * Accepted values:
   *
   * - `"landscape"` (default)
   * - `"portrait"`
   */
  @property({ defaultValue: "landscape" }) previewOrientation: "landscape" | "portrait";
  public set startEditTitleOnQuestionAdded(value: boolean) {
    this.startEditTitleOnQuestionAddedValue = value;
  }
  public get startEditTitleOnQuestionAdded() {
    return !this.isMobileView &&
      !((this.currentOS == "iOS" || this.currentOS == "Mac OS") && this.isTouch) &&
      !this.toolbox.searchManager.filterString &&
      this.startEditTitleOnQuestionAddedValue;
  }
  private startEditTitleOnQuestionAddedValue: boolean = true;
  private isRTLValue: boolean = false;
  private alwaySaveTextInPropertyEditorsValue: boolean = false;
  private toolbarValue: ActionContainer;
  public responsivityManager: CreatorResponsivityManager;
  public footerToolbar: ActionContainer;

  private changePageModifications(allow = false) {
    this.setPropertyVisibility("survey", allow, "pages");
    this.setPropertyVisibility("question", allow, "page");
    this.setPropertyVisibility("panel", allow, "page");
    const optJson = this.options.showJSONEditorTab;
    this.showJSONEditorTab = (optJson === true) || (optJson === undefined && allow);
  }

  private pageEditModeValue: "standard" | "single" | "bypage" = "standard";
  /**
   * Specifies how Survey Creator users edit survey pages.
   *
   * Accepted values:
   *
   * - `"standard"` (default)\
   * Questions and panels are divided between pages. Users can scroll the design surface to reach a required page.
   *
   * - `"single"`\
   * All questions and panels belong to a single page. Users cannot add or remove pages.
   *
   * - `"bypage"`\
   * Questions and panels are divided between pages. Users can use the page navigator to switch to a required page.
   *
   * [View Page-By-Page Mode Demo](https://surveyjs.io/survey-creator/examples/page-level-editing/ (linkStyle))
   * @see allowModifyPages
   */
  public get pageEditMode(): "standard" | "single" | "bypage" {
    return this.pageEditModeValue;
  }
  public set pageEditMode(val: "standard" | "single" | "bypage") {
    this.pageEditModeValue = val;
    const allowModifyPages = this.pageEditModeValue !== "single";
    this.changePageModifications(allowModifyPages);
    SurveySettings.designMode.showEmptyTitles = allowModifyPages;
    SurveySettings.designMode.showEmptyDescriptions = allowModifyPages;
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

  get viewType(): string {
    return this.getPropertyValue("viewType");
  }
  set viewType(val: string) {
    val = this.fixPluginName(val);
    this.setPropertyValue("viewType", val);
  }

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
    return this.activeTab === "preview";
  }
  public showTestSurvey() {
    this.showPreview();
  }
  public showPreview() {
    this.activeTab = "preview";
  }

  protected plugins: { [name: string]: ICreatorPlugin } = {};
  /**
   * @deprecated Use the [`addTab(tabOptions)`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#addTab) method instead.
   */
  public addPluginTab(
    name: string,
    plugin: ICreatorPlugin,
    title?: string,
    componentName?: string,
    index?: number
  ) {
    this.tabbedMenu.addTab(name, plugin, title, undefined, componentName, index);
    this.addPlugin(name, plugin);
  }
  /**
   * Adds a custom tab to Survey Creator.
   *
   * This method accepts an `ITabOptions` object with the following properties:
   *
   * - `name`: `string`\
   * A unique tab ID.
   *
   * - `plugin`: `ICreatorPlugin`\
   * An object that allows you to handle user interactions with the tab.
   *
   * - `title`: `string`\
   * *(Optional)* A tab caption. If `title` is undefined, the `name` property value is displayed instead. To localize the caption, add its translations to the `ed` object within [localization dictionaries](https://github.com/surveyjs/survey-creator/tree/90de47d2c9da49b06a7f97414026d70f7acf05c6/packages/survey-creator-core/src/localization) and pass `ed.propertyName` as the `title` property.
   *
   * - `iconName`: `string`\
   * *(Optional)* An [icon name](https://surveyjs.io/form-library/documentation/icons). Icons are used when the tab bar doesn't have enough width to display tab titles.
   *
   * - `componentName`: `string`\
   * *(Optional)* The name of the component that renders tab markup. Default value: `"svc-tab-" + name`.
   *
   * - `index`: `number`\
   * *(Optional)* A zero-based index that specifies the tab's position relative to other tabs.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/modify-tab-bar/ (linkStyle))
   * @param tabOptions An object that configures the custom tab.
   */
  public addTab(tabOptions: ITabOptions) {
    let {
      name,
      plugin,
      title,
      iconName,
      componentName,
      index
    } = tabOptions;
    if (!name || !plugin) {
      throw new Error("Plugin or name is not set");
    }
    this.tabbedMenu.addTab(name, plugin, title, iconName, componentName, index);
    this.addPlugin(name, plugin);
  }
  public addPlugin(name: string, plugin: ICreatorPlugin): void {
    this.plugins[name] = plugin;
  }
  private removePlugin(name: string): void {
    const plugin = this.getPlugin(name);
    if (!plugin) return;
    let index = this.getTabIndex(name);
    if (index > -1) {
      this.tabs.splice(index, 1);
    }
    delete this.plugins[name];
    if (plugin.dispose) {
      plugin.dispose();
    }
  }
  private getTabIndex(id: string): number {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].id === id) return i;
    }
    return -1;
  }
  public getPlugin<P extends ICreatorPlugin = ICreatorPlugin>(name: string): P {
    const pluginName = this.fixPluginName(name);
    return this.plugins[pluginName] as P;
  }

  private fixPluginName(pluginName: string) {
    if (pluginName === "test") {
      return "preview";
    } else if (pluginName === "editor") {
      return "json";
    }
    return pluginName;
  }

  /**
   * An event that is raised before a survey element (a question, panel, or page) is deleted.
   * @see deleteElement
   */
  public onElementDeleting: EventBase<SurveyCreatorModel, ElementDeletingEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementDeletingEvent>();
  /**
   * An event that is raised when Survey Creator sets the read-only status for a survey element property. Use this event to change the read-only status for individual properties.
   */
  public onPropertyGetReadOnly: EventBase<SurveyCreatorModel, PropertyGetReadOnlyEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyGetReadOnlyEvent>();
  /**
   * @deprecated Use the [`onPropertyGetReadOnly`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onPropertyGetReadOnly) event instead.
   */
  public onGetPropertyReadOnly: EventBase<SurveyCreatorModel, GetPropertyReadOnlyEvent> = this.onPropertyGetReadOnly;

  /**
   * An event that is raised when Survey Creator [instantiates a survey to display a UI element](https://surveyjs.io/survey-creator/documentation/property-grid-customization#add-custom-properties-to-the-property-grid). Handle this event to customize the UI element by modifying the survey.
   *
   * For information on event handler parameters, refer to descriptions within the interface.
   *
   * [Design Mode Survey Instance](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#design-mode-survey-instance (linkStyle))
   *
   * [Preview Mode Survey Instance](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#preview-mode-survey-instance (linkStyle))
   *
   * > If you want this event raised at startup, assign a survey JSON schema to the [`JSON`](#JSON) property *after* you add a handler to the event. If the JSON schema should be empty, specify the `JSON` property with an empty object.
   * @see onSurveyInstanceSetupHandlers
   */
  public onSurveyInstanceCreated: EventBase<SurveyCreatorModel, SurveyInstanceCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, SurveyInstanceCreatedEvent>();
  /**
   * An event that lets you attach event handlers to a [survey instance used for displaying a Survey Creator UI element](https://surveyjs.io/survey-creator/documentation/property-grid-customization#add-custom-properties-to-the-property-grid).
   *
   * For information on event handler parameters, refer to descriptions within the interface.
   *
   * > This event is raised *before* the survey instance is initialized with a survey JSON schema. Therefore, you cannot access individual questions, panels, and pages within the event handler. If you need to customize those survey elements, handle the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event instead.
   */
  public onSurveyInstanceSetupHandlers: EventBase<SurveyCreatorModel, SurveyInstanceCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, SurveyInstanceCreatedEvent>();

  /**
   * An event that is raised when Survey Creator obtains a survey element name to display it in the UI.
   *
   * Handle this event to replace survey element names in the UI with custom display texts. If you only want to replace the names with survey element titles, enable the [`useElementTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#useElementTitles) property instead of handling this event.
   */
  public onElementGetDisplayName: EventBase<SurveyCreatorModel, ElementGetDisplayNameEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementGetDisplayNameEvent>();
  /**
   * @deprecated Use the [`onElementGetDisplayName`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementGetDisplayName) event instead.
   */
  public onGetObjectDisplayName: EventBase<SurveyCreatorModel, ElementGetDisplayNameEvent> = this.onElementGetDisplayName;
  public onHtmlToMarkdown: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();

  /**
   * An event that is raised when Survey Creator obtains the expand/collapse state of a survey element on the design surface. Handle this event to set a required state.
   *
   * For information on event handler parameters, refer to descriptions within the interface.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))
   * @see [ICreatorOptions.collapseQuestions](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#collapseQuestions)
   * @see [ICreatorOptions.collapsePanels](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#collapsePanels)
   * @see [ICreatorOptions.collapsePages](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#collapsePages)
   * @see expandCollapseButtonVisibility
   * @see collapseAll
   * @see expandAll
   */
  public onElementGetExpandCollapseState: EventBase<SurveyCreatorModel, ElementGetExpandCollapseStateEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementGetExpandCollapseStateEvent>();
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
   * An event that is raised before adding an element to the survey. Use it to control which elements can be added by allowing or preventing the action.
   */
  public onAllowAddElement: EventBase<SurveyCreatorModel, AllowAddElementEvent> = this.addCreatorEvent<SurveyCreatorModel, AllowAddElementEvent>();

  /**
   * An event that is raised when Survey Creator obtains [adorners](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#specify-adorner-availability) for a survey element. Use this event to hide and modify predefined adorners or add a custom adorner.
   *
   * For information on event handler parameters, refer to descriptions within the interface.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/create-custom-adorners/ (linkStyle))
   * @see onElementAllowOperations
   * @see onPageGetFooterActions
   */
  public onElementGetActions: EventBase<SurveyCreatorModel, ElementGetActionsEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementGetActionsEvent>();
  /**
   * @deprecated Use the [`onElementGetActions`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementGetActions) event instead.
   */
  public onDefineElementMenuItems: EventBase<SurveyCreatorModel, DefineElementMenuItemsEvent> = this.onElementGetActions;
  /**
   * An event that is raised when Survey Creator adds properties to a survey element selected on the design surface. Handle this event if you want to cancel the addition of certain properties and thus [hide them from the Property Grid](https://surveyjs.io/survey-creator/documentation/property-grid-customization#hide-properties-from-the-property-grid).
   *
   * For information on event handler parameters, refer to descriptions within the interface.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/remove-properties-from-property-grid/ (linkStyle))
   */
  public onPropertyShowing: EventBase<SurveyCreatorModel, PropertyShowingEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyShowingEvent>();
  public onCanShowProperty: EventBase<SurveyCreatorModel, any> = this.onPropertyShowing;
  /**
   * @deprecated Use the [`onPropertyShowing`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onPropertyShowing) event instead.
   */
  public onShowingProperty: EventBase<SurveyCreatorModel, PropertyAddingEvent> = this.onPropertyShowing;
  /**
   * @deprecated Use the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event instead.
   */
  public onPropertyGridSurveyCreated: EventBase<SurveyCreatorModel, PropertyGridSurveyCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyGridSurveyCreatedEvent>();
  /**
   * An event that is raised when a property editor is created in the Property Grid. Use this event to modify the property editor or add event handlers to it.
   * @see onConfigureTablePropertyEditor
   * @see onSurveyInstanceCreated
   */
  public onPropertyEditorCreated: EventBase<SurveyCreatorModel, PropertyEditorCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyEditorCreatedEvent>();
  /**
   * An event that is raised when title actions are added to a property editor. Title actions are most often used to reveal property hints. Handle this event you want to add, remove, or modify the title actions.
   *
   * For information on event handler parameters, refer to descriptions within the interface.
   *
   * [View Demo](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onPropertyEditorUpdateTitleActions (linkStyle))
   */
  public onPropertyEditorUpdateTitleActions: EventBase<SurveyCreatorModel, PropertyEditorUpdateTitleActionsEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyEditorUpdateTitleActionsEvent>();
  /**
   * An event that is raised before Survey Creator displays a pop-up window called from the Property Grid. This window allows users to edit choices, conditions, etc. Use this event to customize the pop-up window, for example, add custom action buttons.
   */
  public onPropertyGridShowPopup: EventBase<SurveyCreatorModel, PropertyGridShowPopupEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyGridShowPopupEvent>();
  /**
   * @deprecated Use the [`onPropertyGridShowPopup`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onPropertyGridShowPopup) event instead.
   */
  public onPropertyGridShowModal: EventBase<SurveyCreatorModel, PropertyGridShowPopupEvent> = this.onPropertyGridShowPopup;
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
   * @deprecated Use the [`onConfigureTablePropertyEditor`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onConfigureTablePropertyEditor) event instead.
   */
  public onSetPropertyEditorOptions: EventBase<SurveyCreatorModel, ConfigureTablePropertyEditorEvent> = this.addCreatorEvent<SurveyCreatorModel, ConfigureTablePropertyEditorEvent>();
  /**
   * An event that is raised when a table property editor is created in the Property Grid. Use this event to configure the table property editor.
   * @see onPropertyEditorCreated
   */
  public onConfigureTablePropertyEditor: EventBase<SurveyCreatorModel, ConfigureTablePropertyEditorEvent> = this.addCreatorEvent<SurveyCreatorModel, ConfigureTablePropertyEditorEvent>();

  public onGenerateNewName: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  /**
   * An event that is raised when Survey Creator validates a modified value of a survey element property. Use this event to display a custom error message when the value is incorrect.
   * @see onBeforePropertyChanged
   * @see onAfterPropertyChanged
   */
  public onPropertyDisplayCustomError: EventBase<SurveyCreatorModel, PropertyDisplayCustomErrorEvent> = this.addCreatorEvent<SurveyCreatorModel, PropertyDisplayCustomErrorEvent>();
  /**
   * @deprecated Use the [`onPropertyDisplayCustomError`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onPropertyDisplayCustomError) event instead.
   */
  public onPropertyValidationCustomError: EventBase<SurveyCreatorModel, PropertyDisplayCustomErrorEvent> = this.onPropertyDisplayCustomError;
  /**
   * An event that is raised each time a user modifies a survey element property. Use this event to validate or correct a property value while the user changes it.
   * @see onPropertyDisplayCustomError
   * @see onAfterPropertyChanged
   */
  public onBeforePropertyChanged: EventBase<SurveyCreatorModel, BeforePropertyChangedEvent> = this.addCreatorEvent<SurveyCreatorModel, BeforePropertyChangedEvent>();
  /**
   * @deprecated Use the [`onBeforePropertyChanged`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onBeforePropertyChanged) event instead.
   */
  public onPropertyValueChanging: EventBase<SurveyCreatorModel, PropertyValueChangingEvent> = this.onBeforePropertyChanged;
  /**
   * An event that is raised after a survey element property has changed.
   * @see onPropertyDisplayCustomError
   * @see onBeforePropertyChanged
   */
  public onAfterPropertyChanged: EventBase<SurveyCreatorModel, AfterPropertyChangedEvent> = this.addCreatorEvent<SurveyCreatorModel, AfterPropertyChangedEvent>();
  /**
   * @deprecated Use the [`onAfterPropertyChanged`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onAfterPropertyChanged) event instead.
   */
  public onSurveyPropertyValueChanged: EventBase<SurveyCreatorModel, PropertyValueChangedEvent> = this.onAfterPropertyChanged;
  /**
   * An event that is raised when a condition editor renders a list of questions and variables available for selection. Use this event to modify this list.
   */
  public onConditionGetQuestionList: EventBase<SurveyCreatorModel, ConditionGetQuestionListEvent> = this.addCreatorEvent<SurveyCreatorModel, ConditionGetQuestionListEvent>();
  /**
   * @deprecated Use the [`onConditionGetQuestionList`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onConditionGetQuestionList) event instead.
   */
  public onConditionQuestionsGetList: EventBase<SurveyCreatorModel, ConditionGetQuestionListEvent> = this.onConditionGetQuestionList;

  public onConditionGetTitle: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  /**
   * An event that is raised when Survey Creator populates a condition editor with operators. Use this event to hide individual condition operators.
   */
  public onGetConditionOperator: EventBase<SurveyCreatorModel, GetConditionOperatorEvent> = this.addCreatorEvent<SurveyCreatorModel, GetConditionOperatorEvent>();
  /**
   * An event that is raised when the Logic tab constructs a user-friendly display text for a logic rule. Use this event to modify this display text.
   */
  public onLogicRuleGetDisplayText: EventBase<SurveyCreatorModel, LogicRuleGetDisplayTextEvent> = this.addCreatorEvent<SurveyCreatorModel, LogicRuleGetDisplayTextEvent>();
  /**
   * @deprecated Use the [`onLogicRuleGetDisplayText`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onLogicRuleGetDisplayText) event instead.
   */
  public onLogicItemDisplayText: EventBase<SurveyCreatorModel, LogicRuleGetDisplayTextEvent> = this.onLogicRuleGetDisplayText;
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
   * An event that is raised when a [question's type is being changed](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#how-to-change-the-question-type).
   */
  public onQuestionConverting: EventBase<SurveyCreatorModel, QuestionConvertingEvent> = this.addCreatorEvent<SurveyCreatorModel, QuestionConvertingEvent>();

  /**
   * An event that is raised when Survey Creator renders action buttons under each page on the design surface. Use this event to add, remove, or modify the buttons.
   * @see onElementGetActions
   */
  public onPageGetFooterActions: EventBase<SurveyCreatorModel, PageGetFooterActionsEvent> = this.addCreatorEvent<SurveyCreatorModel, PageGetFooterActionsEvent>();
  /**
   * @deprecated Use the [`onPageGetFooterActions`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onPageGetFooterActions) event instead.
   */
  public onGetPageActions: EventBase<SurveyCreatorModel, PageGetFooterActionsEvent> = this.onPageGetFooterActions;

  /**
   * @deprecated Use the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event instead.
   */
  public onDesignerSurveyCreated: EventBase<SurveyCreatorModel, DesignerSurveyCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, DesignerSurveyCreatedEvent>();
  /**
   * @deprecated Use the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event instead.
   */
  public onPreviewSurveyCreated: EventBase<SurveyCreatorModel, PreviewSurveyCreatedEvent> = this.addCreatorEvent<SurveyCreatorModel, PreviewSurveyCreatedEvent>();
  public onTestSurveyCreated: EventBase<SurveyCreatorModel, any> = this.onPreviewSurveyCreated;
  /**
   * An event that is raised when Survey Creator [displays a toast notification](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#notify). Use this event to implement custom toast notification.
   * @see notify
   */
  public onNotify: EventBase<SurveyCreatorModel, NotifyEvent> = this.addCreatorEvent<SurveyCreatorModel, NotifyEvent>();
  /**
   * An event that is raised before a survey element (question, panel, page, or the survey itself) is selected. Use this event if you want to select a different survey element.
   * @see onElementSelected
   * @see selectedElement
   */
  public onElementSelecting: EventBase<SurveyCreatorModel, ElementSelectingEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementSelectingEvent>();
  /**
   * @deprecated Use the [`onElementSelecting`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementSelecting) event instead.
   */
  public onSelectedElementChanging: EventBase<SurveyCreatorModel, ElementFocusingEvent> = this.onElementSelecting;
  /**
   * An event that is raised after a survey element (a question, panel, page, or the survey itself) is selected.
   * @see onElementSelecting
   */
  public onElementSelected: EventBase<SurveyCreatorModel, ElementSelectedEvent> = this.addCreatorEvent<SurveyCreatorModel, ElementSelectedEvent>();
  /**
   * @deprecated Use the [`onElementSelected`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementSelected) event instead.
   */
  public onSelectedElementChanged: EventBase<SurveyCreatorModel, ElementFocusedEvent> = this.onElementSelected;

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

  public onClearFile: EventBase<SurveyCreatorModel, UploadFileEvent> = this.addCreatorEvent<SurveyCreatorModel, UploadFileEvent>();
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
   * [Multilingual Form Demo](https://surveyjs.io/survey-creator/examples/create-multilingual-forms/ (linkStyle))
   *
   * [AI-Powered Translation Demo](https://surveyjs.io/survey-creator/examples/ai-translation/ (linkStyle))
   *
   * > Survey Creator does not include a machine translation service out of the box. Our component only provides a UI for calling the service API.
   * @see startMachineTranslationTo
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
   *
   * For information on event handler parameters, refer to descriptions within the interface.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/page-break-and-page-merge/ (linkStyle))
   * @see onDragStart
   * @see onDragEnd
   */
  public onDragDropAllow: EventBase<SurveyCreatorModel, DragDropAllowEvent> = this.addCreatorEvent<SurveyCreatorModel, DragDropAllowEvent>();

  public onDragOverLocationCalculating: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();

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
   * const creator = new SurveyCreatorModel();
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
  /**
   * An event that is raised when users change a property in a [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme).
   */
  public onCreatorThemePropertyChanged: EventBase<SurveyCreatorModel, CreatorThemePropertyChangedEvent> = this.addCreatorEvent<SurveyCreatorModel, CreatorThemePropertyChangedEvent>();
  /**
   * An event that is raised when users select a [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme) from the drop-down list of UI themes.
   */
  public onCreatorThemeSelected: EventBase<SurveyCreatorModel, CreatorThemeSelectedEvent> = this.addCreatorEvent<SurveyCreatorModel, CreatorThemeSelectedEvent>();

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
  public logicMaxItemsInCondition: number = -1;
  /**
   * @deprecated Use the [`logicMaxItemsInCondition`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#logicMaxItemsInCondition) property instead.
   */
  public get maxLogicItemsInCondition() {
    return this.logicMaxItemsInCondition;
  }
  public set maxLogicItemsInCondition(val) {
    this.logicMaxItemsInCondition = val;
  }

  /**
   * @deprecated Use the [`useElementTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#useElementTitles) property instead.
   */
  get showObjectTitles() {
    return this.useElementTitles;
  }
  set showObjectTitles(val) {
    this.useElementTitles = val;
  }

  /**
   * @deprecated Use the [`useElementTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#useElementTitles) property instead.
   */
  get showTitlesInExpressions() {
    return this.useElementTitles;
  }
  set showTitlesInExpressions(val) {
    this.useElementTitles = val;
  }

  /**
   * Specifies whether Survey Creator UI elements display survey, page, and question titles instead of their names.
   *
   * Default value: `false`
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/dynamically-modify-newly-added-questions/ (linkStyle))
   * @see onElementGetDisplayName
   */
  public useElementTitles = false;

  /**
   * Limits the number of visible choices. Users can click "Show more" to view hidden choices.
   *
   * Set this property to -1 if you do not want to hide any choices.
   *
   * Default value: 10
   */
  public maxVisibleChoices: number = 10;

  /**
   * Specifies whether users can edit expressions in the Logic tab as plain text.
   *
   * If you set this property to `false`, users can only use UI elements to edit logical expressions.
   *
   * Default value: `true`
   * @see showLogicTab
   */
  public logicAllowTextEditExpressions = true;
  /**
   * @deprecated Use the [`logicAllowTextEditExpressions`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#logicAllowTextEditExpressions) property instead.
   */
  get allowEditExpressionsInTextEditor() {
    return this.logicAllowTextEditExpressions;
  }
  set allowEditExpressionsInTextEditor(val) {
    this.logicAllowTextEditExpressions = val;
  }
  /**
   * Limits the number of columns that users can add to [Single-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel), [Multi-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel), and [Dynamic Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maxColumns`)
   */
  public maxColumns: number =
    settings.propertyGrid.maximumColumnsCount || settings.propertyGrid.maxColumns;
  /**
   * @deprecated Use the [`maxColumns`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#maxColumns) property instead.
   */
  public get maximumColumnsCount() { return this.maxColumns; }
  public set maximumColumnsCount(val) { this.maxColumns = val; }
  /**
   * Limits the number of choices that users can add to [Checkboxes](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radio Button Group](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maxChoices`)
   */
  public maxChoices: number =
    settings.propertyGrid.maximumChoicesCount || settings.propertyGrid.maxChoices;
  /**
   * @deprecated Use the [`maxChoices`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#maxChoices) property instead.
   */
  public get maximumChoicesCount() { return this.maxChoices; }
  public set maximumChoicesCount(val) { this.maxChoices = val; }

  /**
   * Limits the minimum number of choices in [Checkboxes](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radio Button Group](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions. Set this property if users should not delete choices below the specified limit.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.minChoices`)
   */
  public minChoices: number =
    settings.propertyGrid.minimumChoicesCount || settings.propertyGrid.minChoices;
  /**
   * @deprecated Use the [`minChoices`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#minChoices) property instead.
   */
  public get minimumChoicesCount() { return this.minChoices; }
  public set minimumChoicesCount(val) { this.minChoices = val; }
  /**
   * Limits the number of rows that users can add to [Single-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel) and [Multi-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maxRows`)
   */
  public maxRows: number = settings.propertyGrid.maximumRowsCount || settings.propertyGrid.maxRows;
  /**
   * @deprecated Use the [`maxRows`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#maxRows) property instead.
   */
  public get maximumRowsCount() { return this.maxRows; }
  public set maximumRowsCount(val) { this.maxRows = val; }
  /**
   * Limits the number of rate values that users can add to [Rating Scale](https://surveyjs.io/Documentation/Library?id=questionratingmodel) questions.
   *
   * Default value: 0 (unlimited, taken from `settings.propertyGrid.maxRateValues`)
   */
  public maxRateValues: number = settings.propertyGrid.maximumRateValues || settings.propertyGrid.maxRateValues;
  /**
   * @deprecated Use the [`maxRateValues`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#maxRateValues) property instead.
   */
  public get maximumRateValues() { return this.maxRateValues; }
  public set maximumRateValues(val) { this.maxRateValues = val; }

  /**
   * @deprecated Use the [`maxPanelNestingLevel`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#maxPanelNestingLevel) property instead.
   */
  public maxNestedPanels: number = -1;

  /**
   * Specifies the maximum depth allowed for nested [Panels](https://surveyjs.io/form-library/documentation/api-reference/panel-model) and [Dynamic Panels](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model) in the survey.
   *
   * This property behaves as follows:
   *
   * - A value of -1 applies no restriction on nesting depth.
   * - A value of 0 means that Panels and Dynamic Panels cannot contain other panels&mdash;only questions are allowed.
   * - Positive integers specify the maximum nesting level.
   *
   * Default value: -1 (unlimited)
   *
   * If you don't want users to nest certain element types within panels, specify the [`forbiddenNestedElements`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#forbiddenNestedElements) property.
   */
  public maxPanelNestingLevel: number = -1;

  /**
   * Specifies which element types are forbidden from being nested inside [Panels](https://surveyjs.io/form-library/documentation/api-reference/panel-model) and [Dynamic Panels](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model).
   *
   * This property is an object with the following structure:
   *
   * - `panel`: An array of element types that cannot be nested within a regular panel.
   * - `paneldynamic`: An array of element types that cannot be nested within a dynamic panel.
   *
   * In the following example, dynamic panels are disallowed inside regular panels, and both regular and dynamic panels are disallowed inside a dynamic panel:
   *
   * ```js
   * import { SurveyCreatorModel } from "survey-creator-core";
   * const creatorOptions = { ... };
   * const creator = new SurveyCreatorModel(creatorOptions);
   *
   * creator.forbiddenNestedElements = {
   *   panel: [ "paneldynamic" ],
   *   paneldynamic: [ "panel", "paneldynamic" ]
   * };
   * ```
   * @see maxPanelNestingLevel
   */
  public forbiddenNestedElements: { panel: string[], paneldynamic: string[] };

  public showPagesInTestSurveyTab = true;
  /**
   * Specifies whether to show a page selector at the bottom of the Preview tab.
   *
   * Default value: `true`
   */
  public get previewAllowSelectPage(): boolean { return this.showPagesInTestSurveyTab; }
  public set previewAllowSelectPage(val: boolean) { this.showPagesInTestSurveyTab = val; }
  /**
   * @deprecated Use the [`previewAllowSelectPage`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#previewAllowSelectPage) property instead.
   */
  public get showPagesInPreviewTab(): boolean { return this.showPagesInTestSurveyTab; }
  public set showPagesInPreviewTab(val: boolean) { this.showPagesInTestSurveyTab = val; }

  public showSimulatorInTestSurveyTab = true;
  /**
   * Specifies whether the Preview tab displays a Device button that allows users to preview the survey on different device types.
   *
   * Default value: `true`
   */
  public get previewAllowSimulateDevices(): boolean { return this.showSimulatorInTestSurveyTab; }
  public set previewAllowSimulateDevices(val: boolean) { this.showSimulatorInTestSurveyTab = val; }
  /**
   * @deprecated Use the [`previewAllowSimulateDevices`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#previewAllowSimulateDevices) property instead.
   */
  public get showSimulatorInPreviewTab(): boolean { return this.showSimulatorInTestSurveyTab; }
  public set showSimulatorInPreviewTab(val: boolean) { this.showSimulatorInTestSurveyTab = val; }
  /**
   * @deprecated Survey Creator no longer supports switching between UI themes in the Preview tab.
   */
  public previewTheme: string = "default";
  /**
   * @deprecated Survey Creator no longer supports switching between UI themes in the Preview tab.
   */
  public get themeForPreview() { return this.previewTheme; }
  public set themeForPreview(val) { this.previewTheme = val; }

  //#region Theme

  /**
   * An object that enables you to manage UI themes. Refer to the following API section for information on available properties, methods, and events: [`ThemeTabPlugin`](https://surveyjs.io/survey-creator/documentation/api-reference/themetabplugin).
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/save-custom-theme/ (linkStyle))
   * @see showThemeTab
   * @see saveThemeFunc
   */
  get themeEditor(): ThemeTabPlugin {
    return this.getPlugin<ThemeTabPlugin>("theme");
  }

  /**
   * A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#autoSaveEnabled) is triggered to save a theme JSON object.
   *
   * For more information, refer to the [Save and Load Custom Themes](https://surveyjs.io/survey-creator/documentation/theme-editor#save-and-load-custom-themes) help topic.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/change-form-theme/ (linkStyle))
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
    this.applyTheme(newTheme);
  }

  /**
   * Applies a [theme](https://surveyjs.io/form-library/documentation/api-reference/itheme) to the survey being configured.
   *
   * [Theme Editor](https://surveyjs.io/survey-creator/documentation/theme-editor (linkStyle))
   * @param surveyTheme An [`ITheme`](https://surveyjs.io/form-library/documentation/api-reference/itheme) object with theme settings.
   * @see theme
   * @see themeEditor
   * @see saveThemeFunc
   */
  public applyTheme(surveyTheme: ITheme): void {
    this._theme = surveyTheme;
    this.hasPendingThemeChanges = true;
    if (this.activeTab !== "theme") {
      this.updatePlugin(this.activeTab);
    }
    if (!!surveyTheme && surveyTheme.headerView) {
      this.survey.headerView = surveyTheme.headerView;
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
   * - `"auto"` (default)\
   * Display the language selector only if the survey is translated into more than one language.
   *
   * - `true`\
   * Always display the language selector regardless of how many languages the survey uses.
   *
   * - `false`\
   * Never display the language selector.
   *
   * - `"all"`\
   * Always display the language selector with [all supported languages](https://github.com/surveyjs/survey-creator/tree/90de47d2c9da49b06a7f97414026d70f7acf05c6/packages/survey-creator-core/src/localization).
   *
   * [Localization & Globalization](https://surveyjs.io/survey-creator/documentation/survey-localization-translate-surveys-to-different-languages (linkStyle))
   */
  public get previewAllowSelectLanguage(): boolean | string { return this.showDefaultLanguageInTestSurveyTab; }
  public set previewAllowSelectLanguage(val: boolean | string) { this.showDefaultLanguageInTestSurveyTab = val; }
  /**
   * @deprecated Use the [`previewAllowSelectLanguage`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#previewAllowSelectLanguage) property instead.
   */
  public get showDefaultLanguageInPreviewTab(): boolean | string { return this.showDefaultLanguageInTestSurveyTab; }
  public set showDefaultLanguageInPreviewTab(val: boolean | string) { this.showDefaultLanguageInTestSurveyTab = val; }

  public showInvisibleElementsInTestSurveyTab = true;
  /**
   * Specifies whether the Preview tab displays a toggle that allows users to show or hide invisible survey elements.
   *
   * Default value: `true`
   */
  public get previewAllowHiddenElements(): boolean { return this.showInvisibleElementsInTestSurveyTab; }
  public set previewAllowHiddenElements(val: boolean) { this.showInvisibleElementsInTestSurveyTab = val; }
  /**
   * @deprecated Use the [`previewAllowHiddenElements`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#previewAllowHiddenElements) property instead.
   */
  public get showInvisibleElementsInPreviewTab(): boolean { return this.showInvisibleElementsInTestSurveyTab; }
  public set showInvisibleElementsInPreviewTab(val: boolean) { this.showInvisibleElementsInTestSurveyTab = val; }

  /**
   * @deprecated Survey Creator no longer supports switching between UI themes in the Preview tab.
   */
  public previewAllowSelectTheme = true;
  /**
   * @deprecated Survey Creator no longer supports switching between UI themes in the Preview tab.
   */
  get allowChangeThemeInPreview() { return this.previewAllowSelectTheme; }
  set allowChangeThemeInPreview(val) { this.previewAllowSelectTheme = val; }

  public get tabResponsivenessMode(): string { return ""; }
  public set tabResponsivenessMode(val: string) {}
  public tabbedMenu: TabbedMenuContainer;

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
    this.updateLocalizedStrings();
    this.onLocaleChanded.fire(this, { locale: value });
  }
  public onLocaleChanded: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  public updateLocalizedStrings(): void {
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
    this.sidebar.locStrsChanged();
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
   * @see switchTab
   */
  public onActiveTabChanging: EventBase<SurveyCreatorModel, ActiveTabChangingEvent> = this.addCreatorEvent<SurveyCreatorModel, ActiveTabChangingEvent>();

  /**
   * An event that is raised after the [active tab](#activeTab) is switched.
   * @see switchTab
   */
  public onActiveTabChanged: EventBase<SurveyCreatorModel, ActiveTabChangedEvent> = this.addCreatorEvent<SurveyCreatorModel, ActiveTabChangedEvent>();
  /**
   * Gets or sets the currently displayed tab.
   *
   * Accepted values:
   *
   * - [`"designer"`](#showDesignerTab)
   * - [`"preview"`](#showPreviewTab)
   * - [`"theme"`](#showThemeTab)
   * - [`"json"`](#showJSONEditorTab)
   * - [`"logic"`](#showLogicTab)
   * - [`"translation"`](#showLogicTab)
   * @see switchTab
   */
  public get activeTab(): string {
    return this.viewType;
  }
  public set activeTab(val: string) {
    this.switchTab(val);
  }
  /**
   * Switches the [active tab](#activeTab). Returns `false` if the tab cannot be switched.
   * @param tabName A tab that you want to make active: `"designer"`, `"preview"`, `"theme"`, `"json"`, `"logic"`, or `"translation"`.
   * @returns `false` if the active tab cannot be switched, `true` otherwise.
   */
  public switchTab(tabName: string): boolean {
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
  /**
   * @deprecated Use the [`switchTab`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#switchTab) method instead.
   */
  public makeNewViewActive(tabName: string) {
    return this.switchTab(tabName);
  }
  private switchViewType(viewName: string): boolean {
    viewName = this.fixPluginName(viewName);
    let allow = true;
    if (!!this.currentPlugin?.defaultAllowingDeactivate) {
      allow = this.currentPlugin.defaultAllowingDeactivate();
      if (allow === undefined) return false;
    }
    const chaningOptions = { tabName: viewName, allow: allow, model: this.currentPlugin?.model };
    this.onActiveTabChanging.fire(this, chaningOptions);
    if (!chaningOptions.allow) return;
    if (!!this.currentPlugin?.deactivate && !this.currentPlugin.deactivate()) return;
    const plugin = this.activatePlugin(viewName);
    this.viewType = viewName;
    this.onActiveTabChanged.fire(this, { tabName: viewName, plugin: plugin, model: !!plugin ? plugin.model : undefined });
    return true;
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

  /**
   * Provides access to the [Toolbox API](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox).
   *
   * [Toolbox Customization](https://surveyjs.io/survey-creator/documentation/toolbox-customization (linkStyle))
   * @see showToolbox
   * @see toolboxLocation
   */
  public toolbox: QuestionToolbox;
  public get toolboxCategories(): Array<any> {
    return this.toolbox.categories;
  }

  /**
   * Specifies whether to remove the sidebar that contains the Property Grid from the Survey Creator UI.
   *
   * Default value: `false` (the sidebar is available)
   *
   * > Unlike [`showSidebar`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSidebar), which controls the sidebar's visibility, this property disables the sidebar feature entirely.
   */
  @property() removeSidebar: boolean;
  public sidebar: SidebarModel;
  public get isSidebarVisible() {
    return this.sidebar && !this.removeSidebar;
  }

  constructor(protected options: ICreatorOptions = {}, options2?: ICreatorOptions) {
    super();
    if (
      !!options2 ||
      typeof this.options === "string" ||
      this.options instanceof String
    ) {
      this.options = !!options2 ? options2 : {};
      SurveyHelper.warnText("Creator constructor has one parameter, as creator options, in V2.");
    }
    SvgRegistry.registerIcons(SvgThemeSets["v2"]);
    this.applyCreatorTheme(Default);
    this.previewDevice = options.previewDevice ?? "desktop";
    this.previewOrientation = options.previewOrientation;
    this.toolbarValue = new ToolbarActionContainer(this);
    this.toolbarValue.locOwner = this;
    this.tabbedMenu = new TabbedMenuContainer(this);
    this.tabbedMenu.locOwner = this;
    this.selectionHistoryControllerValue = new SelectionHistory(this);
    this.sidebar = new SidebarModel(this);
    this.setOptions(this.options);
    this.patchMetadata();
    this.initSurveyWithJSON(undefined, false);
    this.toolbox = new QuestionToolbox(this.options && this.options.questionTypes ? this.options.questionTypes : null, this, true);
    this.updateToolboxIsCompact();
    this.initDragDrop();
    this.initTabs();
    this.syncSaveButtons = this.options.saveSurveyAndTheme !== undefined ? this.options.saveSurveyAndTheme : this.options.syncSaveButtons;
    this.isTouch = IsTouch;
    this.currentOS = getOS();
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
    } else if (hasValue && this.toolbox.isCompact !== newVal) {
      this.toolbox.isCompact = newVal;
    }
  }

  @property({ defaultValue: true }) allowShowToolbox: boolean;
  @property({ defaultValue: true }) showToolboxValue: boolean;
  public get showToolbox() {
    return this.showToolboxValue && this.allowShowToolbox;
  }
  /**
   * Specifies whether to show the Toolbox.
   *
   * Default value: `true`
   *
   * [Toolbox Customization](https://surveyjs.io/survey-creator/documentation/toolbox-customization (linkStyle))
   * @see toolbox
   * @see toolboxLocation
   */
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
   * Opens or closes the sidebar that displays the Property Grid.
   *
   * Default value: `true`
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/customize-property-editors/ (linkStyle))
   * @see sidebarLocation
   * @see removeSidebar
   */
  public get showSidebar(): boolean {
    return this.showSidebarValue;
  }
  public set showSidebar(val: boolean) {
    if (<any>val !== true && <any>val !== false) {
      SurveyHelper.warnText("showSidebar is a boolean property now.");
      return;
    }
    this.setShowSidebar(val, true);
  }
  public setShowSidebar(value: boolean, isManualMode = false) {
    if (isManualMode) {
      if (value) {
        this.sidebar.expandedManually = true;
      } else {
        this.sidebar.collapsedManually = true;
      }
    }
    if (this.showSidebar === value) return;
    this.showSidebarValue = value;
    this.updateToolboxIsCompact();
    this.onShowSidebarVisibilityChanged.fire(this, { show: value });
    if (!this.onShowPropertyGridVisiblityChanged.isEmpty) {
      SurveyHelper.warnNonSupported("onShowPropertyGridVisiblityChanged", "onShowSidebarVisibilityChanged");
      this.onShowPropertyGridVisiblityChanged.fire(this, { show: value });
    }
  }
  //#region Obsolete properties and functins
  public onShowPropertyGridVisiblityChanged: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  /**
  * @deprecated Use the [`showSidebar`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSidebar) property instead.
  */
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
  startUndoRedoTransaction(name?: string): void {
    this.undoRedoController && this.undoRedoController.startTransaction(name);
  }
  stopUndoRedoTransaction(): void {
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
      const dd = this.dragDropSurveyElements;
      if (!dd || !dd.isDraggingExistingElement) {
        page.questions.forEach(question => {
          this.doOnQuestionAdded(question, page);
        });
      }
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
  }
  private getTabsInfo(): any {
    return {
      designer: { iconName: TabDesignerPlugin.iconName, init: () => new TabDesignerPlugin(this) },
      preview: { iconName: TabTestPlugin.iconName, init: () => new TabTestPlugin(this) },
      theme: { iconName: ThemeTabPlugin.iconName, init: () => new ThemeTabPlugin(this) }, //TODO change name
      logic: { iconName: TabLogicPlugin.iconName, init: () => new TabLogicPlugin(this) },
      json: { iconName: TabJsonEditorBasePlugin.iconName, init: () => TabJsonEditorAcePlugin.hasAceEditor() ? new TabJsonEditorAcePlugin(this) : new TabJsonEditorTextareaPlugin(this) },
      translation: { iconName: TabTranslationPlugin.iconName, init: () => new TabTranslationPlugin(this) }
    };
  }
  public getAvailableTabs(): Array<any> {
    const res = [];
    const tabInfo = this.getTabsInfo();
    for (let key in tabInfo) {
      res.push({ name: key, iconName: tabInfo[key].iconName });
    }
    return res;
  }
  public getTabNames(): Array<string> {
    const tabNames = this.getAvailableTabs().map(t => t.name);
    const res = [];
    this.tabs.forEach(tab => {
      const name = this.fixPluginName(tab.id);
      if (tabNames.indexOf(name) > -1) {
        res.push(name);
      }
    });
    return res;
  }
  //TODO-presets
  public setTabs(tabNames: Array<string>): void {
    if (!Array.isArray(tabNames)) return;
    const tabInfo = this.getTabsInfo();
    for (let i = tabNames.length - 1; i >= 0; i--) {
      if (!tabInfo[tabNames[i]]) tabNames.splice(i, 1);
    }
    if (tabNames.length === 0) return;
    for (let i = this.tabs.length - 1; i >= 0; i--) {
      const tabId = this.tabs[i].id;
      const id = this.fixPluginName(tabId);
      if (tabNames.indexOf(id) < 0) {
        this.removePlugin(tabId);
      }
    }
    tabNames.forEach(id => {
      if (tabInfo[id] && this.getTabIndex(id) < 0) {
        tabInfo[id].init();
      }
    });
    for (let i = 0; i < tabNames.length; i++) {
      const index = this.getTabIndex(tabNames[i]);
      if (index > -1 && index !== i) {
        const item = this.tabs[index];
        this.tabs.splice(index, 1);
        this.tabs.splice(i, 0, item);
      }
    }
    if (this.tabs.length > 0) {
      this.switchTab(this.tabs[0].id);
    }
  }
  private initPlugins(): void {
    this.addPlugin("undoredo", new UndoRedoPlugin(this));
    const tabs = [];
    if (this.showDesignerTab) {
      tabs.push("designer");
    }
    if (this.showPreviewTab) {
      tabs.push("preview");
    }
    if (this.showThemeTab) {
      tabs.push("theme");
    }
    if (this.showLogicTab) {
      tabs.push("logic");
    }
    if (this.showJSONEditorTab) {
      tabs.push("json");
    }
    if (this.showTranslationTab) {
      tabs.push("translation");
    }
    this.setTabs(tabs);
  }
  private initFooterToolbar(): void {
    if (!this.footerToolbar) {
      this.footerToolbar = new FooterToolbarActionContainer();
      ["designer", "undoredo", "preview", "theme"].forEach((pluginKey: string) => {
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
  private setPropertyVisibility(className: string, visible: boolean, ...properties: string[]) {
    if (!Array.isArray(properties)) return;
    for (var i = 0; i < properties.length; i++) {
      const prop = Serializer.findProperty(className, properties[i]);
      if (!!prop) {
        if (!visible) {
          this.hiddenProperties[prop.id] = true;
        } else {
          delete this.hiddenProperties[prop.id];
        }
      }
    }
  }
  private patchMetadata(): void {
    this.setPropertyVisibility("survey", false, "logoPosition");
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
    if (this.onPropertyGetReadOnly.isEmpty) return proposedValue;
    const options = {
      obj: obj,
      element: obj,
      property: property,
      readOnly: proposedValue,
      propertyName: property.name,
      parentObj: parentObj,
      parentElement: parentObj,
      parentProperty: parentProperty
    };
    this.onPropertyGetReadOnly.fire(this, options);
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
  private getSurfaceCss() {
    const result = JSON.parse(JSON.stringify(defaultCss));
    result.header += " svc-surface-header";

    return result;
  }
  /**
   * Returns true if initial survey was empty. It was not set via JSON property and default new survey is empty as well.
   * @returns true if initial survey doesn't have any elements or properties
   */
  protected initSurveyWithJSON(json: any, clearState: boolean): void {
    this.expandCollapseManager.clearExpandChoicesStates();
    if (!json) {
      json = { "headerView": "advanced" };
    }
    this.existingPages = {};
    const survey = this.createSurvey({}, "designer", undefined, (survey: SurveyModel) => {
      survey.skeletonHeight = 188;
      survey.css = this.getSurfaceCss();
      survey.setIsMobile(!!this.isMobileView);
      survey.setDesignMode(true);
      survey.lazyRenderEnabled = true;
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

    this.setSurvey(survey);
    this.expandCollapseManager.expandCollapseElements("loading", false);
    this.updatePlugin(this.activeTab);
    if (this.activeTab !== "designer") {
      this.updatePlugin("designer");
    }
    if (!!this.undoRedoController) {
      this.undoRedoController.updateSurvey();
    }
    this.doOnElementsChanged("");
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
  public onDragStart: EventBase<SurveyCreatorModel, DragStartEndEvent> = this.addCreatorEvent<SurveyCreatorModel, DragStartEndEvent>();
  public onBeforeDrop: EventBase<any, DragStartEndEvent> = this.onDragStart;
  /**
   * An event that is raised when users finish dragging a survey element within the design surface.
   * @see onDragStart
   * @see onDragDropAllow
   */
  public onDragEnd: EventBase<SurveyCreatorModel, DragStartEndEvent> = this.addCreatorEvent<SurveyCreatorModel, DragStartEndEvent>();
  public onAfterDrop: EventBase<any, DragStartEndEvent> = this.onDragEnd;
  /**
   * An event that is raised when users cancel dragging a survey element.
   * @see onDragStart
   * @see onDragEnd
   * @see onDragDropAllow
   */
  public onDragClear: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  private initDragDropSurveyElements() {
    DragDropSurveyElements.restrictDragQuestionBetweenPages =
      settings.dragDrop.restrictDragQuestionBetweenPages;
    this.dragDropSurveyElements = new DragDropSurveyElements(null, this);
    this.dragDropSurveyElements.isAllowedToAdd = this.isAllowedToAdd;
    this.dragDropSurveyElements.onGetMaxNestedPanels = (): number => { return this.maxNestedPanels; };
    this.dragDropSurveyElements.onGetMaxPanelNestingLevel = (): number => { return this.maxPanelNestingLevel; };
    this.dragDropSurveyElements.onDragOverLocationCalculating = (options) => { this.onDragOverLocationCalculating.fire(this, options); };
    let isDraggedFromToolbox = false;
    this.dragDropSurveyElements.onDragStart.add((sender, options) => {
      const element = sender.draggedElement;
      isDraggedFromToolbox = !element.parent && !element.isPage;
      if (!!element && (element.isPage || this.collapseOnDrag)) {
        this.designerStateManager?.suspend();
        this.collapseAllPagesOnDragStart(element);
      }
      this.onDragStart.fire(this, options);
      this.startUndoRedoTransaction("drag drop");
    });
    this.dragDropSurveyElements.onDragDropAllow.add((sender, options) => {
      (<any>options).survey = this.survey;
      this.onDragDropAllow.fire(this, options);
    });
    this.dragDropSurveyElements.onDragEnd.add((sender, options) => {
      this.stopUndoRedoTransaction();
      const editTitle = isDraggedFromToolbox && this.startEditTitleOnQuestionAdded;
      if (!options.draggedElement) return;
      this.selectElement(options.draggedElement, undefined, true, editTitle);
      this.onDragEnd.fire(this, options);
      if (!options.fromElement && !options.draggedElement.isPage) {
        this.setModified({ type: "ADDED_FROM_TOOLBOX", question: options.draggedElement });
      }
    });
    this.dragDropSurveyElements.onDragClear.add((sender, options) => {
      isDraggedFromToolbox = false;
      this.stopUndoRedoTransaction();
      if (!!options.draggedElement && (options.draggedElement.isPage || this.collapseOnDrag)) {
        this.designerStateManager?.release();
        this.restoreElementsState();
      }
      this.onDragClear.fire(this, options);
    });
  }
  public get designerStateManager() {
    return (this.getPlugin("designer") as TabDesignerPlugin)?.designerStateManager;
  }
  public collapseAllPagesOnDragStart(element: SurveyElement): void {
    this.expandCollapseManager.expandCollapseElements("drag-start", true, this.survey.pages.filter(p => !element || element.isPage || p !== (element as any).page));
  }
  public getElementExpandCollapseState(element: Question | PageModel | PanelModel, reason: ElementGetExpandCollapseStateEventReason, defaultValue: boolean): boolean {
    if (this.expandCollapseButtonVisibility == "never") return false;
    if (reason === "loading") {
      if (element instanceof Question) defaultValue = this.collapseQuestions;
      if (element instanceof PanelModel) defaultValue = this.collapsePanels;
      if (element instanceof PageModel) defaultValue = this.collapsePages;
    }
    const options: ElementGetExpandCollapseStateEvent = {
      element: element,
      reason: reason,
      collapsed: defaultValue
    };
    if (reason)this.onElementGetExpandCollapseState.fire(this, options);
    return options.collapsed;
  }

  private restoreState(element: SurveyElement) {
    const state = this.getElementExpandCollapseState(element as any, "drag-end", undefined);
    if (state !== undefined) {
      const adorner = SurveyElementAdornerBase.GetAdorner(element);
      if (!!adorner) {
        adorner.collapsed = state;
      }
    }
    SurveyElementAdornerBase.RestoreStateFor(element);
  }
  public restoreElementsState(): void {
    this.survey.pages.forEach(element => {
      if (element["draggedFrom"] !== undefined) {
        const adorner = SurveyElementAdornerBase.GetAdorner(element);
        adorner?.blockAnimations();
        this.restoreState(element);
        adorner?.releaseAnimations();
      } else {
        this.restoreState(element);
      }
    });
  }
  private initDragDropChoices() {
    this.dragDropChoices = new DragDropChoices(null, this);
    this.dragDropChoices.onDragStart.add((sender, options) => {
      this.startUndoRedoTransaction("drag drop");
      this.expandCollapseManager.collapseChoices((<any>this.dragDropChoices).parentElement.choices);
    });
    this.dragDropChoices.onDragEnd.add((sender, options) => {
      this.selectElement(options.draggedElement, undefined, false);
    });
    this.dragDropChoices.onDragClear.add((sender, options) => {
      this.expandCollapseManager.expandChoices();
      this.stopUndoRedoTransaction();
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
    if (this.isCreatingNewElement) return;
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

    while(!!classInfo && !!classInfo.parentName) {
      if (classInfo.name === typeName) return true;
      classInfo = Serializer.findClass(classInfo.parentName);
    }
    return !!classInfo && classInfo.name === typeName;
  }

  private addNewElementReason: string;
  public onDragDropItemStart(): void {
    this.addNewElementReason = "DROPPED_FROM_TOOLBOX";
  }
  private isCreatingNewElement: boolean;
  @ignoreUndoRedo()
  private doOnQuestionAdded(question: Question, parentPanel: any) {
    this.isCreatingNewElement = true;
    question.name = this.generateUniqueName(question, question.name);
    this.isCreatingNewElement = false;
    var page = this.getPageByElement(question);
    if (!page) return;
    var options = { question: question, page: page, reason: this.addNewElementReason };
    this.addNewElementReason = undefined;
    this.onQuestionAdded.fire(this, options);
  }
  public onElementTypeRestrictionChanged: EventBase<SurveyCreatorModel, any> = this.addCreatorEvent<SurveyCreatorModel, any>();
  private doOnElementsChanged(type: string): void {
    if (this.onAllowAddElement.isEmpty) return;
    const operations = ["ADDED_FROM_TOOLBOX", "ADDED_FROM_PAGEBUTTON", "ELEMENT_COPIED", "QUESTION_CONVERTED", "OBJECT_DELETED"];
    if (!!type && operations.indexOf(type) < 0) return;
    this.toolbox.items.forEach(item => {
      const options = { name: item.name, toolboxItem: item, json: item.json, allow: true };
      this.onAllowAddElement.fire(this, options);
      const restricted = !options.allow;
      if (item.isDisabledByRestriction !== restricted) {
        item.isDisabledByRestriction = restricted;
        this.onElementTypeRestrictionChanged.fire(this, { elType: item.name });
      }
    });
  }
  private isToolboxItemDisabledByRestriction(element: SurveyElement): boolean {
    const name = element?.getType();
    if (!name || this.onAllowAddElement.isEmpty) return false;
    const item = this.toolbox.getActionById(name);
    if (!!item && item.isDisabledByRestriction) return true;
    const elements = element["elements"] || element["templateElements"];
    if (Array.isArray(elements)) {
      for (let i = 0; i < elements.length; i++) {
        if (this.isToolboxItemDisabledByRestriction(elements[i])) return true;
      }
    }
    return false;
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
    const pType = this.isCopyingPage ? "ELEMENT_COPIED" : "PAGE_ADDED";
    this.setModified({ type: pType, newValue: options.page });
  }
  private getPageByElement(surveyElement: IElement): PageModel {
    return !!surveyElement && surveyElement.isPage ? surveyElement as PageModel : this.survey.getPageByElement(<IElement>(<any>surveyElement));
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
    this.moveElementsToTheEnd(json);
    const indent = settings.jsonEditor.indentation;
    if (this.generateValidJSON) {
      return JSON.stringify(json, null, indent);
    }
    return new SurveyJSON5().stringify(json, null, indent);
  }
  private moveElementsToTheEnd(json: any): void {
    if (!json) return;
    if (Array.isArray(json)) {
      json.forEach(el => this.moveElementsToTheEnd(el));
    } else {
      if (typeof json === "object") {
        if (!!json["elements"]) {
          const els = json["elements"];
          delete json["elements"];
          json["elements"] = els;
        }
        Object.keys(json).forEach(key => this.moveElementsToTheEnd(json[key]));
      }
    }
  }
  protected setTextValue(value: string) {
    if (!!this.setSurveyJSONTextCallback) {
      this.setSurveyJSONTextCallback(value);
    }
  }

  public changeText(value: string, clearState = false, trustJSON?: boolean): void {
    this.setTextValue(value);
    if (!value) {
      this.initSurveyWithJSON(undefined, clearState);
    } else {
      let jsonValue = trustJSON ? this.parseJSON(value) : undefined;
      if (!trustJSON) {
        const textWorker = new SurveyTextWorker(value);
        if (textWorker.isJsonCorrect) {
          jsonValue = this.parseJSON(value);
        } else if (!!textWorker.survey) {
          jsonValue = textWorker.survey.toJSON();
        }
      }
      if (!!jsonValue) {
        this.initSurveyWithJSON(jsonValue, clearState);
      } else {
        this.viewType = "json";
      }
    }
  }
  private parseJSON(val: string): any {
    return new SurveyJSON5().parse(val);
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
    if (this.viewType != "json") {
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
      displayName = SurveyHelper.getObjectName(obj, this.useElementTitles);
    }
    var options = { obj: obj, element: obj, displayName: displayName, area: area, reason: reason };
    this.onElementGetDisplayName.fire(this, options);
    return options.displayName;
  }
  private animationEnabled = true;
  public createSurvey(json: any, reason: string, model?: any, callback?: (survey: SurveyModel) => void, area?: string): SurveyModel {
    area = area || this.getSurveyInstanceCreatedArea(reason);
    const element = area === "property-grid" && model ? model.obj : undefined;
    const survey = this.createSurveyCore(json, area, element);
    if (reason !== "designer" && reason !== "preview" && reason !== "theme" && reason !== "property-grid" && reason !== "theme-tab:property-grid") {
      survey.fitToContainer = false;
      survey.applyTheme(designTabSurveyThemeJSON);
      survey.gridLayoutEnabled = false;
    }

    if (reason === "theme") {
      survey.showTimer = false;
    }
    if (reason === "designer" || reason === "modal-question-editor") {
      initializeDesignTimeSurveyModel(survey, this);
    }
    survey["needRenderIcons"] = false;
    if (reason != "designer" && reason != "preview" && reason !== "theme") {
      survey.locale = editorLocalization.currentLocale;
      if (!json["clearInvisibleValues"]) {
        survey.clearInvisibleValues = "onComplete";
      }
    }
    if (callback) {
      callback(survey);
    }
    this.onSurveyInstanceCreated.fire(this, {
      survey: survey,
      reason: reason,
      area: area,
      model: !!model ? model : this.currentPlugin?.model,
      obj: element,
      element: element
    });
    if (reason === "designer") {
      this.onDesignerSurveyCreated.fire(this, { survey: survey });
    }
    if (reason === "preview" || reason === "theme") {
      this.onPreviewSurveyCreated.fire(this, { survey: survey });
    }

    survey.onPopupVisibleChanged.add((_, options) => {
      if (!options.popup.getAreaCallback) options.popup.getAreaCallback = () => { return this.rootElement; };
      if (reason === "property-grid" && options.question?.parentQuestion?.isDescendantOf("matrixdropdownbase") && options.question?.parent?.getType() !== "panel") {
        options.popup.setWidthByTarget = false;
      }
    });
    return survey;
  }
  private getSurveyInstanceCreatedArea(reason: string): string {
    const hash: any = {};
    hash["designer"] = "designer-tab";
    hash["test"] = "preview-tab";
    hash["preview"] = "preview-tab";
    hash["default-value"] = "default-value-popup-editor";
    hash["condition-builder"] = "logic-rule:condition-editor";
    hash["logic-item-editor"] = "logic-rule:action-editor";
    hash["logic-items"] = "logic-tab:condition-list";
    hash["theme"] = "theme-tab";
    hash["translation_settings"] = "translation-tab:language-list";
    hash["translation_strings"] = "translation-tab:table";
    hash["translation_strings_header"] = "translation-tab:table-header";
    hash["cells-editor"] = "matrix-cell-values-popup-editor";
    hash["fast-entry"] = "table-values-popup-editor";
    hash["modal-question-editor"] = "matrix-cell-question-popup-editor";
    const res = hash[reason];
    return !!res ? res : reason;
  }
  protected createSurveyCore(json: any = {}, area: string, element: Base): SurveyModel {
    if (this.onSurveyInstanceSetupHandlers.isEmpty) return new SurveyModel(json);
    const model = new SurveyModel();
    const options = { survey: model, area: area, element: element, json: json };
    this.onSurveyInstanceSetupHandlers.fire(this, options);
    model.fromJSON(options.json);
    return model;
  }
  private _stateValue: string;
  /**
   * Indicates the state of Survey Creator.
   *
   * Accepted values:
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

  public expandCollapseManager = new ExpandCollapseManager(this);

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
    this.doOnElementsChanged(options.type);
    this.autoSaveEnabled && this.doAutoSave();
  }
  public notifySurveyPropertyChanged(options: any): void {
    this.clearSurveyLogicForUpdate(options.target, options.name, options.newValue);
    this.updateSurveyLogicValues(options.target, options.name, options.oldValue);
    const plugin = this.currentPlugin;
    if (!!plugin && !!plugin.onDesignerSurveyPropertyChanged) {
      plugin.onDesignerSurveyPropertyChanged(options.target, options.name);
    }
    if (!this.onAfterPropertyChanged.isEmpty) {
      options.propertyName = options.name;
      options.obj = options.target;
      options.element = options.target;
      options.value = options.newValue;
      this.onAfterPropertyChanged.fire(this, options);
    }
    this.clearLocalizationStrings(options.target, options.name);
    options.type = "PROPERTY_CHANGED";
    this.setModified(options);
  }
  private clearLocalizationStrings(el: any, name: string): void {
    if (this.clearTranslationsOnSourceTextChange) {
      if ((el.isQuestion || Serializer.isDescendantOf(el.getType(), "matrixdropdowncolumn")) && name === "name") {
        this.clearNonDefaultLocalesInStrByValue(el.locTitle);
      } else {
        if (el.isDescendantOf("itemvalue") && name === "value") {
          this.clearNonDefaultLocalesInStrByValue(el.locText);
        } else {
          const prop = Serializer.findProperty(el.getType(), name);
          if (prop && prop.isLocalizable && prop.serializationProperty) {
            const locStr = el[prop.serializationProperty];
            this.clearNonDefaultLocalesInStr(locStr);
          }
        }
      }
    }
  }
  private clearNonDefaultLocalesInStrByValue(locStr: LocalizableString): void {
    if (!locStr.isEmpty && !locStr.getLocaleText("")) {
      this.clearNonDefaultLocalesInStr(locStr);
    }
  }
  private clearNonDefaultLocalesInStr(locStr: LocalizableString): void {
    if (locStr) {
      const loc = locStr.lastChangedLoc;
      if (!!loc && loc !== surveyLocalization.defaultLocale) return;
      const ctrl = this.undoRedoController;
      if (ctrl) ctrl.ignoreChanges = true;
      const locs = locStr.getLocales();
      locs.forEach(l => {
        if (l !== surveyLocalization.defaultLocale && l !== "default") {
          locStr.setLocaleText(l, "");
        }
      });
      if (ctrl) ctrl.ignoreChanges = false;
    }
  }
  public notifySurveyItemMoved(options: any): void {
    options.type = "ELEMENT_REORDERED";
    this.setModified(options);
  }
  public notifySurveyItemConverted(newElement: Base, oldElement: Base): void {
    const options: any = { oldValue: oldElement, newValue: newElement };
    options.type = "QUESTION_CONVERTED";
    options.className = newElement.getType();
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

  protected convertQuestion(obj: Question, className: string, defaultJSON: any = null): Question {
    const objJSON = QuestionConverter.getObjJSON(obj, this.getDefaultElementJSON(obj.getType()));
    const options: QuestionConvertingEvent = {
      sourceQuestion: obj,
      targetType: className,
      json: objJSON
    };
    this.onQuestionConverting.fire(this, options);
    const newQuestion = <Question>QuestionConverter.convertObject(obj, className, options.json, this.getDefaultElementJSON(className), defaultJSON);
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
    if (this.storeSjsVersion) {
      json["sjsVersion"] = SurveySettings.version;
    }
    return json;
  }
  private storeSjsVersionValue: boolean;
  public get storeSjsVersion(): boolean {
    return this.storeSjsVersionValue === true;
  }
  public set storeSjsVersion(val: boolean) {
    this.storeSjsVersionValue = val;
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
    if (this.viewType == "json") {
      this.setTextValue(JSON.stringify(val));
    } else {
      this.initSurveyWithJSON(val, true);
    }
  }
  public loadSurvey(surveyId: string): void {
    // eslint-disable-next-line no-console
    console.warn("Self-hosted Form Library no longer supports integration with SurveyJS Demo Service. Learn more: https://surveyjs.io/stay-updated/release-notes/v2.0.0#form-library-removes-apis-for-integration-with-surveyjs-demo-service");
  }
  /**
   * Specifies where to add new questions when users click the "Add Question" button.
   *
   * Accepted values:
   *
   * - `true` (default) - New questions are added to the end of a survey page.
   * - `false` - New questions are added after the currently selected question on the design surface.
   * @see rememberLastQuestionType
   */
  public addNewQuestionLast: boolean = true;
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
        while(!!selectedElement.parent && selectedElement.parent.isPanel) {
          if (!!(<any>selectedElement).parentQuestion) {
            selectedElement = <IElement>(<any>selectedElement).parentQuestion;
          } else {
            selectedElement = <IElement><any>selectedElement.parent;
          }
        }
      }
      parent = selectedElement.parent;
      if (index < 0) {
        if (this.addNewQuestionLast && modifiedType === "ADDED_FROM_PAGEBUTTON") {
          index = parent.elements.length;
        } else {
          index = parent.elements.indexOf(selectedElement);
          if (index > -1) index++;
        }
      }
    }
    if (panel) {
      parent = panel;
    }
    this.addNewElementReason = modifiedType;
    element.setVisibleIndex(-1);
    parent.addElement(element, index);
    this.addNewElementReason = "";
    this.setModified({ type: modifiedType, question: element });
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
    const newElement = Serializer.createClass(json["type"]);
    new JsonObject().toObject(json, newElement);
    let needNewName = true;
    if (!!json.name) {
      if (newElement.isPage) {
        needNewName = !!this.survey.getPageByName(newElement.name);
      } else {
        if (newElement.isPanel) {
          needNewName = !!this.survey.getPanelByName(newElement.name);
        } else {
          needNewName = !!this.survey.getQuestionByName(newElement.name);
        }
      }
    }
    if (needNewName) {
      this.setNewNames(newElement);
    }
    return newElement;
  }

  public copyElement(element: Base): IElement {
    var json = new JsonObject().toJsonObject(element);
    json.type = element.getType();
    return this.createNewElement(json);
  }

  /**
   * Creates a copy of a specified question, inserts the copy next to this question, and (optionally) selects it on the design surface.
   * @param question A question to copy.
   * @param selectCopy *(Optional)* Pass `true` if you want to select the copy on the design surface. Default value: `false`.
   * @returns The instance of a new question.
   */
  public copyQuestion(question: Base, selectCopy?: boolean): IElement {
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
    if (selectCopy) {
      this.selectElement(newElement);
    }
    return newElement;
  }
  /**
   * @deprecated Use the [`copyQuestion`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#copyQuestion) method instead.
   */
  public fastCopyQuestion(question: Base, selectCopy?: boolean): IElement {
    return this.copyQuestion(question, selectCopy);
  }

  /**
   * Gets or sets the selected survey element: a question, panel, page, or the survey itself.
   * @see onElementSelecting
   * @see onElementSelected
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
    this.isCopyingPage = true;
    var newPage = <PageModel>(<any>this.copyElement(page));
    var index = this.survey.pages.indexOf(page);
    if (index > -1) {
      this.survey.pages.splice(index + 1, 0, newPage);
    } else {
      this.survey.pages.push(newPage);
    }
    this.isCopyingPage = false;
    newPage.questions.forEach(q => {
      this.addNewElementReason = "ELEMENT_COPIED";
      this.doOnQuestionAdded(q, q.parent);
    });
    const panels: any = newPage.getPanels();
    if (Array.isArray(panels)) panels.forEach(p => this.doOnPanelAdded(p, p.parent));
    this.addNewElementReason = "";
    return newPage;
  }
  private isCopyingPage: boolean;

  protected deleteObjectCore(obj: any) {
    if (obj.isPage) {
      var newPage = this.getNextPage(obj);
      obj.delete(false);
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
    if (!obj || obj.isDisposed) return;
    const allowedOperations = this.getElementAllowOperations(obj);
    if (!allowedOperations.allowDelete) return;
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
      allowing: true,
      allow: true
    };
    this.onElementDeleting.fire(this, options);
    return options.allowing && options.allow;
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
    if (oldValue !== element && !!DomDocumentHelper.getDocument() && !!selEl) {
      this.focusElement(element, focus, selEl, propertyName, startEdit);
    }
  }
  private ensurePagesVisibility(): void {
    this.survey.pages.forEach(page => {
      const pageAdorner = SurveyElementAdornerBase.GetAdorner(page) as PageAdorner;
      if (!!pageAdorner && !pageAdorner.needRenderContent) {
        pageAdorner.forceCheckVisibility();
      }
    });
  }
  private currentFocusInterval: any;
  private currentFocusTimeout: any;
  private renderPageTimeout: any;
  public focusElement(element: any, focus: string | boolean, selEl: any = null, propertyName: string = null, startEdit: boolean = null, onCallback: () => void = null) {
    if (!selEl) selEl = this.getSelectedSurveyElement();
    if (!selEl) return;
    const doFocus = () => this.focusElementCore(element, focus, selEl, propertyName, startEdit, onCallback);
    if (element && SurveyHelper.isChoiceItemPanel(element.parent)) {
      const panel = SurveyHelper.getChoiceIItemPanel(element);
      const item: ChoiceItem = panel["choiceItem"];
      const q: Question = <Question>(<any>item.choiceOwner);
      if (q.isCollapsed) q.expand();
      this.focusElement(q, false, null, null, null, () => {
        item.onExpandPanelAtDesign.fire(item, {});
        doFocus();
      });
    } else {
      doFocus();
    }
  }
  private focusElementCore(element: any, focus: string | boolean, selEl: any = null, propertyName: string = null, startEdit: boolean = null, onCallback: () => void = null) {
    const elementPage = this.getPageByElement(selEl);
    clearInterval(this.currentFocusInterval);
    clearTimeout(this.currentFocusTimeout);
    clearTimeout(this.renderPageTimeout);
    this.renderPageTimeout = setTimeout(() => {
      if (!!elementPage) {
        const pageAdorner = SurveyElementAdornerBase.GetAdorner(elementPage) as PageAdorner;
        if (!!pageAdorner && !pageAdorner.needRenderContent) {
          pageAdorner.needRenderContent = true;
        }
      }
      this.currentFocusTimeout = setTimeout(() => {
        this.currentFocusInterval = setInterval(() => {
          let el = this.getHtmlElementForScroll(selEl);
          if (!!selEl && (focus || startEdit && (!selEl.hasTitle || selEl.isPanel))) {
            if (!el || this.rootElement.getAnimations({ subtree: true }).filter((animation => animation.effect.getComputedTiming().activeDuration !== Infinity && (animation.pending || animation.playState !== "finished")))[0]) return;
            clearInterval(this.currentFocusInterval);
            if (!!el) {
              const isNeedScroll = SurveyHelper.isNeedScrollIntoView(el.parentElement ?? el, true);
              if (!!isNeedScroll) {
                const scrollIntoViewOptions: ScrollIntoViewOptions = { block: "start", behavior: this.animationEnabled ? "smooth" : undefined };
                if (!!elementPage) {
                  this.survey.scrollElementToTop(selEl, undefined, elementPage, selEl.id, true, scrollIntoViewOptions, this.rootElement, () => {
                    this.ensurePagesVisibility();
                  });
                } else {
                  SurveyHelper.scrollIntoViewIfNeeded(el.parentElement ?? el, () => { return scrollIntoViewOptions; }, true);
                }
              }
              if (!propertyName && el.parentElement && selEl.getType() !== "matrixdropdowncolumn") {
                let elToFocus: HTMLElement = (typeof (focus) === "string") ? el.parentElement.querySelector(focus) : el.parentElement;
                elToFocus && elToFocus.focus({ preventScroll: true });
              }
            }
          } else {
            clearInterval(this.currentFocusInterval);
          }
          if (startEdit && !!element) {
            StringEditorConnector.get((element as Question).locTitle).activateEditor();
          }
          onCallback && onCallback();
        }, 1);
      }, 100);
    }, 50);
  }
  private getChoiceItemQuestionToExpand(element: any): Question {
    const panel = SurveyHelper.getChoiceIItemPanel(element);
    const item: ChoiceItem = panel["choiceItem"];
    return <Question>(<any>item.choiceOwner);
  }

  private getHtmlElementForScroll(element: any): HTMLElement {
    const id = element.getType() === "matrixdropdowncolumn" ? element.colOwner.id : element.id;
    return this.rootElement?.querySelector(`#${id}`);
  }

  private getSelectedSurveyElement(): IElement {
    var sel: any = this.selectedElement;
    if (!sel || sel.getType() == "survey") return null;

    if (this.selectedElement.getType() === "matrixdropdowncolumn") {
      return (<any>this.selectedElement);
    }

    return sel.isInteractiveDesignElement && sel.id ? sel : null;
  }
  private onSelectingElement(val: Base): Base {
    var options = { element: val, newSelectedElement: val };
    this.onElementSelecting.fire(this, options);
    if (options.element != val) return options.element;
    if (options.newSelectedElement != val) return options.newSelectedElement;
    return val;
  }

  /**
   * Opens [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme) settings in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"buttons"`.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/dynamic-ui-customization/ (linkStyle))
   * @see closeCreatorThemeSettings
   * @see showCreatorThemeSettings
   */
  public openCreatorThemeSettings(): void {
    const designerPlugin = this.getPlugin("designer") as TabDesignerPlugin;
    if (designerPlugin) {
      designerPlugin.openCreatorThemeSettings();
    }
  }

  /**
   * Closes [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme) settings in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"buttons"`.
   * @see openCreatorThemeSettings
   * @see showCreatorThemeSettings
   */
  public closeCreatorThemeSettings(): void {
    const designerPlugin = this.getPlugin("designer") as TabDesignerPlugin;
    if (designerPlugin) {
      designerPlugin.closeCreatorThemeSettings();
    }
  }

  /**
   * Activates a specified category in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"buttons"`.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/add-properties-to-property-grid/ (linkStyle))
   * @param name A [category name](https://surveyjs.io/form-library/documentation/customize-question-types/add-custom-properties-to-a-form#category).
   */
  public activatePropertyGridCategory(name: string): void {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.activateCategory(name);
    }
  }

  //#region Obsolete designerPropertyGrid
  protected get designerPropertyGrid(): PropertyGridModel {
    const propertyGridTab = this.sidebar.getPageById("propertyGrid");
    if (!propertyGridTab) return null;
    return propertyGridTab.componentData ? (propertyGridTab.componentData.propertyGridModel as any as PropertyGridModel) : null;
  }
  public get propertyGrid(): SurveyModel {
    return this.designerPropertyGrid.survey;
  }
  /**
   * Collapses a specified category in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"accordion"`.
   * @param name A [category name](https://surveyjs.io/form-library/documentation/customize-question-types/add-custom-properties-to-a-form#category).
   * @see expandPropertyGridCategory
   */
  public collapsePropertyGridCategory(name: string) {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.collapseCategory(name);
    }
  }
  /**
   * Expands a specified category in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"accordion"`.
   * @param name A [category name](https://surveyjs.io/form-library/documentation/customize-question-types/add-custom-properties-to-a-form#category).
   * @see collapsePropertyGridCategory
   * @see activatePropertyGridCategory
   */
  public expandPropertyGridCategory(name: string) {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.expandCategory(name);
    }
  }
  /**
   * Collapses all categories in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"accordion"`.
   * @see expandAllPropertyGridCategories
   */
  public collapseAllPropertyGridCategories() {
    if (!!this.designerPropertyGrid) {
      this.designerPropertyGrid.collapseAllCategories();
    }
  }
  /**
   * Expands all categories in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"accordion"`.
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
   * @see onElementSelecting
   * @see onElementSelected
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
  private propertyGridDefinition: any;
  public getPropertyGridDefinition(): any {
    return this.propertyGridDefinition;
  }
  public setPropertyGridDefinition(val: any): void {
    this.propertyGridDefinition = val;
    if (this.designerPropertyGrid) {
      this.designerPropertyGrid.setPropertyGridDefinition(val);
    }
  }
  public expandCategoryIfNeeded(): void {
    if (!this.survey.isEmpty) {
      this.designerPropertyGrid.expandCategoryIfNeeded();
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
        this.sidebar.executeOnExpand(() => {
          this.designerPropertyGrid.selectProperty(propertyName, focus || !this.selectFromStringEditor);
        });
      }
      this.expandCategoryIfNeeded();
      this.selectFromStringEditor = false;
    }
    var options = { newSelectedElement: element, element: element };
    this.onElementSelected.fire(this, options);
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
      this.survey.lazyRenderEnabled = false;
      this.doClickQuestionCore(newElement, modifiedType, -1, panel);
      this.selectElement(newElement, null, !this.toolbox.searchManager.filterString, this.startEditTitleOnQuestionAdded);
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

  public clearFiles(
    value: any,
    question: Question,
    callback: (status: string, data: any) => any,
    context?: { element: Base, item?: any, elementType?: string, propertyName?: string }
  ) {
    if (this.onClearFile.isEmpty) {
      callback("success", value);
    } else {
      this.onClearFile.fire(this, {
        question: question,
        files: value || [],
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
  };
  private shortcuts: { [index: string]: IKeyboardShortcut } = {};
  public registerShortcut(name: string, shortcut: IKeyboardShortcut) {
    this.shortcuts[name] = shortcut;
  }
  public unRegisterShortcut(name: string) {
    delete this.shortcuts[name];
  }

  protected deletePanelOrQuestion(obj: Base): void {
    const changeSelection = obj === this.selectedElement;
    var parent = obj["parent"];
    const elements = parent.elements;
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
    if (changeSelection) {
      this.selectElement(objIndex > -1 ? elements[objIndex] : parent);
    }
  }
  hiddenProperties: any = {};
  protected onCanShowObjectProperty(
    object: any,
    property: JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean {
    if (this.hiddenProperties[property.id]) return false;
    var options = {
      obj: object,
      element: object,
      property: property,
      canShow: true,
      show: true,
      showMode: showMode,
      parentObj: parentObj,
      parentElement: parentObj,
      parentProperty: parentProperty
    };
    this.onCanShowProperty.fire(this, options);
    return options.canShow && options.show;
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
    } while(!options.isDone);
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
    while(!this.isNameUnique(el, newName, false)) {
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
    newName = newName.trim().toLowerCase();
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
  getElementAddornerCssCallback(obj: Base, className: string): string { return className; }
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
    const options = { obj: object, element: object, property: property, editor: editor };
    this.onPropertyEditorCreated.fire(this, options);
  }
  onPropertyEditorUpdateTitleActionsCallback(
    object: any,
    property: JsonObjectProperty,
    editor: Question,
    titleActions: IAction[]
  ): void {
    const options = { obj: object, element: object, property: property, editor: editor, titleActions: titleActions };
    this.onPropertyEditorUpdateTitleActions.fire(this, options);
  }
  onPropertyGridShowModalCallback(object: any,
    property: JsonObjectProperty,
    editor: Question,
    popupEditor: any,
    popupModel: PopupBaseViewModel): void {
    const options = { obj: object, element: object, property: property, editor: editor, popupEditor: popupEditor, popupModel: popupModel };
    this.onPropertyGridShowPopup.fire(this, options);
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
      element: obj,
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
      element: obj,
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
    const options: any = {
      propertyName: propertyName,
      obj: obj,
      element: obj,
      editorOptions: editorOptions,
      allowAddRemoveItems: editorOptions.allowAddRemoveItems,
      allowRemoveAllItems: editorOptions.allowRemoveAllItems,
      allowBatchEdit: editorOptions.allowBatchEdit
    };
    const keys = ["allowAddRemoveItems", "allowRemoveAllItems", "allowBatchEdit"];
    keys.forEach(key => options[key] = editorOptions[key]);
    this.onSetPropertyEditorOptions.fire(this, options);
    this.onConfigureTablePropertyEditor.fire(this, options);
    keys.forEach(key => editorOptions[key] = editorOptions[key] && options[key]);
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
      element: obj,
      value: value,
      error: ""
    };
    this.onPropertyDisplayCustomError.fire(this, options);
    return options.error;
  }
  onValueChangingCallback(options: any) {
    options.element = options.obj;
    options.oldValue = options.value;
    this.onBeforePropertyChanged.fire(this, options);
  }
  onGetElementEditorTitleCallback(obj: Base, title: string): string {
    return title;
  }
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Base,
    editor: any,
    list: any[],
    variables: string[]
  ): string {
    if (this.onConditionGetQuestionList.isEmpty) return settings.logic.questionSortOrder;
    var options = {
      propertyName: propertyName,
      obj: obj,
      element: obj,
      editor: editor,
      sortOrder: "asc",
      list: list,
      variables: variables
    };
    this.onConditionGetQuestionList.fire(this, options);
    if (options.list !== list) {
      list.splice(0, list.length);
      for (var i = 0; i < options.list.length; i++) {
        list.push(options.list[i]);
      }
    }
    return options.sortOrder;
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
    if (this.onLogicRuleGetDisplayText.isEmpty) return text;
    var options = {
      expression: expression,
      expressionText: expressionText,
      text: text,
      logicItem: logicItem
    };
    this.onLogicRuleGetDisplayText.fire(this, options);
    return options.text;
  }
  getProcessedTranslationItemText(locale: string, locString: ILocalizableString, newText: string, obj: any): string {
    if (this.onTranslationItemChanging.isEmpty) return newText;
    const options = {
      locale: locale,
      obj: obj,
      element: obj,
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
      element: obj,
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
   * Starts the translation of survey strings from the default language to one or more specified languages using a machine translation service, such as Google Translate or Microsoft Translator.
   *
   * This method only launches the operation by raising the [`onMachineTranslate`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onMachineTranslate) event. Handle this event to perform the actual translation.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/ai-translation/ (linkStyle))
   * @param locales An array of locale codes that correspond to target languages, for example, `[ "de", "fr" ]`.
   */
  public startMachineTranslationTo(locales: Array<string>): void {
    if (!this.getHasMachineTranslation()) return;
    doMachineStringsTranslation(this.survey, this, locales);
  }
  /**
   * A delay between changing survey settings and saving the survey JSON schema, measured in milliseconds. Applies only when the [`autoSaveEnabled`](#autoSaveEnabled) property is `true`.
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
  };

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
   * @see autoSaveEnabled
   * @see syncSaveButtons
   */
  @property({ defaultValue: false }) showSaveButton: boolean;

  /**
   * A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#autoSaveEnabled) is triggered to save a survey JSON schema.
   *
   * For more information, refer to the Save and Load Survey Model Schemas help topic for your framework: [Angular](https://surveyjs.io/survey-creator/documentation/get-started-angular#save-and-load-survey-model-schemas) | [Vue](https://surveyjs.io/survey-creator/documentation/get-started-vue#save-and-load-survey-model-schemas) | [React](https://surveyjs.io/survey-creator/documentation/get-started-react#save-and-load-survey-model-schemas) | [HTML/CSS/JavaScript](https://surveyjs.io/survey-creator/documentation/get-started-html-css-javascript#save-and-load-survey-model-schemas).
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/set-how-survey-configuration-changes-are-saved/ (linkStyle))
   * @see saveThemeFunc
   */
  public get saveSurveyFunc() {
    return this.saveSurveyFuncValue;
  }
  public set saveSurveyFunc(value: any) {
    this.saveSurveyFuncValue = value;
    this.showSaveButton = value != null && !this.autoSaveEnabled;
  }
  @undoRedoTransaction()
  public convertCurrentQuestion(newType: string, defaultJSON: any = null) {
    var el = this.selectedElement;
    if (!el || el.getType() === newType && !defaultJSON) return;
    const objType = SurveyHelper.getObjectType(el);
    if (objType !== ObjType.Question && objType !== ObjType.Panel) return;
    this.addNewElementReason = "ELEMENT_CONVERTED";
    el = this.convertQuestion(<Question>el, newType, defaultJSON);
    this.selectElement(el, null, ".svc-dropdown-action--convertTo button");
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
  public isAllowedNestingLevel(element: SurveyElement, childNesting = 0): boolean {
    const parentNesting = !!element ? SurveyHelper.getElementParentContainers(element, false).length : 0;
    return this.maxPanelNestingLevel < 0 || this.maxPanelNestingLevel >= childNesting + parentNesting;
  }
  public isAllowedNestedPanels(element: SurveyElement, childNesting = 0): boolean {
    if (!element) return true;
    return this.maxNestedPanels < 0 || this.maxNestedPanels >= childNesting + SurveyHelper.getElementDeepLength(element);
  }
  public isAllowedToAdd: (elementType: string, container: SurveyElement) => boolean = (elementType: string, container: SurveyElement) => {
    if (!this.forbiddenNestedElements || !elementType || !container) return true;
    const forbiddenElements = this.forbiddenNestedElements[container.getType()];
    if (!forbiddenElements || forbiddenElements.length === 0) return true;
    return !forbiddenElements.some((forbiddenElement) => {
      return Serializer.isDescendantOf(elementType, forbiddenElement);
    });
  };
  public getAvailableToolboxItems(element?: SurveyElement, isAddNew: boolean = true): Array<QuestionToolboxItem> {
    let availableToolboxItems: Array<QuestionToolboxItem> = [];
    this.toolbox.items.forEach((item) => { if (!item.showInToolboxOnly) availableToolboxItems.push(item); });

    const elementNesting = !!element && isAddNew && !!element.getPanelInDesignMode() ? 1 : 0;
    if (!this.isAllowedNestingLevel(element, elementNesting)) {
      for (let i = availableToolboxItems.length - 1; i >= 0; i--) {
        if (availableToolboxItems[i].isPanel || Serializer.isDescendantOf(availableToolboxItems[i].typeName, "paneldynamic")) {
          availableToolboxItems.splice(i, 1);
        }
      }
    } else if (!this.isAllowedNestedPanels(element, elementNesting)) {
      for (let i = availableToolboxItems.length - 1; i >= 0; i--) {
        if (availableToolboxItems[i].isPanel) {
          availableToolboxItems.splice(i, 1);
        }
      }
    }

    if (!element) return availableToolboxItems;
    if (!!element.getPanelInDesignMode()) {
      availableToolboxItems = availableToolboxItems.filter((item) => this.isAllowedToAdd(item.typeName, element));
    } else {
      const parentContainers = SurveyHelper.getElementParentContainers(element, false);
      if (!!parentContainers[0]) {
        availableToolboxItems = availableToolboxItems.filter((item) => this.isAllowedToAdd(item.typeName, parentContainers[0]));
      }
    }

    return availableToolboxItems;
  }
  _getActualElementToAddNewElements(element: SurveyElement<any>) {
    if (!element || !element.isPanel) return element;
    const parentQuestion = (element as PanelModel).parentQuestion;
    if (parentQuestion && Serializer.isDescendantOf(parentQuestion.getType(), "paneldynamic") && (parentQuestion as QuestionPanelDynamicModel).template === element) {
      return parentQuestion;
    }
    return element;
  }
  public getQuestionTypeSelectorModel(beforeAdd: (type: string) => void, element?: SurveyElement) {
    let panel = !!element && element.isPanel ? <PanelModel>element : null;
    const onSelectQuestionType = (questionType: string, json?: any) => {
      this.currentAddQuestionType = questionType;
      this.addNewQuestionInPage(beforeAdd, panel, questionType, json);
      newAction.popupModel.hide();
    };
    const getActions = () => {
      const ownerElement = this._getActualElementToAddNewElements(element);
      const availableTypes = this.getAvailableToolboxItems(ownerElement).map((item) => {
        return this.createIActionBarItemByClass(item, item.needSeparator, onSelectQuestionType);
      });
      return availableTypes;
    };

    const newAction = createDropdownActionModel({
      iconName: "icon-more",
      title: this.getLocString("ed.addNewQuestion"),
    }, {
      items: [],
      allowSelection: false,
      cssClass: "svc-creator-popup",
      cssClasses: listComponentCss,
      verticalPosition: "bottom",
      horizontalPosition: "center",
      displayMode: this.isTouch ? "overlay" : "popup"
    }, this);
    newAction.popupModel.getTargetCallback = undefined;
    newAction.popupModel.onVisibilityChanged.add((_: PopupModel, opt: { model: PopupModel, isVisible: boolean }) => {
      if (opt.isVisible) {
        const listModel = newAction.popupModel.contentComponentData.model;
        listModel.setItems(getActions());
        listModel.flushUpdates();
      }
    });
    return newAction;
  }

  public getUpdatedPageAdornerFooterActions(pageAdorner: PageAdorner, actions: Array<IAction>) {
    const options = {
      page: pageAdorner.page,
      addNewQuestion: (type: string) => { pageAdorner.addNewQuestion(pageAdorner, undefined, type); },
      actions
    };
    this.onPageGetFooterActions.fire(this, options);
    return options.actions;
  }
  private defaultAddQuestionTypeValue: string;
  public get defaultAddQuestionType(): string {
    return this.defaultAddQuestionTypeValue || settings.designer.defaultAddQuestionType;
  }
  public set defaultAddQuestionType(val: string) {
    this.defaultAddQuestionTypeValue = val;
  }

  @undoRedoTransaction()
  public addNewQuestionInPage(beforeAdd: (string) => void, panel: IPanel = null, type: string = null, initJson: any = null) {
    if (!type) type = this.currentAddQuestionType;
    if (!type) type = this.defaultAddQuestionType;
    beforeAdd(type);
    let json = initJson;
    if (!json) {
      const toolboxItem = this.toolbox.getItemByName(type);
      if (!!toolboxItem && !!toolboxItem.json) {
        json = toolboxItem.json;
      } else {
        json = { type: type };
      }
    }
    let newElement = this.createNewElement(json);

    this.clickToolboxItem(newElement, panel, "ADDED_FROM_PAGEBUTTON");
  }

  createIActionBarItemByClass(item: QuestionToolboxItem, needSeparator: boolean, onSelectQuestionType?: (questionType: string, json?: any) => void): Action {
    const action = new Action({
      title: item.title,
      id: item.name,
      iconName: item.iconName,
      iconSize: "auto",
      visible: item.visible,
      enabled: item.enabled,
      needSeparator: needSeparator,
      action: () => {
        onSelectQuestionType(item.typeName, item.json);
      }
    });

    if (!!item.items && item.items.length > 0 && this.toolbox.showSubitems) {
      const innerItems = item.items.map(i => new Action({
        id: i.id,
        title: i.title,
        action: () => {
          action.hidePopup();
          onSelectQuestionType(item.typeName, i.json);
        }
      }));
      action.setSubItems({ items: innerItems, cssClasses: listComponentCss });
    }
    return action;
  }

  public onElementMenuItemsChanged(element: any, items: Action[]) {
    this.onElementGetActions.fire(this, {
      obj: element,
      element: element,
      items: items,
      actions: items
    });
  }
  public getElementAllowOperations(element: SurveyElement): any {
    const allowDragDefault = !!element && (!element.isPage || element.isPage && this.allowDragPages);
    var options = {
      obj: element,
      element: element,
      allowDelete: true,
      allowCopy: !this.isToolboxItemDisabledByRestriction(element),
      allowDragging: allowDragDefault,
      allowDrag: allowDragDefault,
      allowChangeType: true,
      allowChangeInputType: true,
      allowChangeRequired: true,
      allowShowSettings: undefined,
      allowEdit: undefined,
      allowExpandCollapse: undefined
    };
    this.onElementAllowOperations.fire(this, options);
    options.allowDrag = options.allowDragging = options.allowDrag && options.allowDragging;
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
  @property({ defaultValue: true }) public allowShowSurfaceToolbar;
  @property({ defaultValue: true }) private showPageNavigatorValue;

  public get showPageNavigator() {
    return this.showPageNavigatorValue && this.allowShowPageNavigator;
  }
  public set showPageNavigator(val: boolean) {
    this.showPageNavigatorValue = val;
  }
  public showTabsDefault: boolean = settings.layout.showTabs;
  public showToolbarDefault: boolean = settings.layout.showToolbar;
  @property({ getDefaultValue: (obj: any) => { return obj.showTabsDefault; } }) showTabs;
  @property({ getDefaultValue: (obj: any) => { return obj.showToolbarDefault; } }) showToolbar;
  @property({ getDefaultValue: () => { return settings.layout.allowCollapseSidebar; } }) allowCollapseSidebar;
  @property({ getDefaultValue: () => { return settings.designer.showAddQuestionButton; } }) showAddQuestionButton;
  @property({
    defaultValue: false, onSet: (val, creator: SurveyCreatorModel) => {
      creator.survey.setIsMobile(!!val);
    }
  }) isMobileView: boolean;
  @property({ defaultValue: false }) isTouch;
  currentOS: string;
  /**
   * Specifies the Toolbox location.
   *
   * Accepted values:
   *
   * - `"left"` (default) - Displays the Toolbox on the left side of the design surface.
   * - `"right"` - Displays the Toolbox on the right side of the design surface.
   * - `"sidebar"` - Displays the Toolbox as an overlay on top of the Property Grid. Use the [`sidebarLocation`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#sidebarLocation) property to specify the Property Grid position.
   *
   * [Toolbox Customization](https://surveyjs.io/survey-creator/documentation/toolbox-customization (linkStyle))
   * @see showToolbox
   * @see toolbox
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
   * Accepted values:
   *
   * - `"right"` (default) - Displays the sidebar on the right side of the design surface.
   * - `"left"` - Displays the sidebar on the left side of the design surface.
   * @see toolboxLocation
   * @see removeSidebar
   */
  @property({ defaultValue: "right" }) sidebarLocation: "left" | "right";

  /**
   * Specifies the visibility of the buttons that expand and collapse survey elements on the design surface.
   *
   * Accepted values:
   *
   * - `"onhover"` (default) - Displays an expand/collapse button when a survey element is hovered over or selected.
   * - `"always"` - Displays the expand/collapse buttons permanently.
   * - `"never"` - Hides the expand/collapse buttons.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))
   * @see onElementGetExpandCollapseState
   * @see collapseOnDrag
   */
  @property({ defaultValue: "onhover" }) expandCollapseButtonVisibility?: "never" | "onhover" | "always";

  /**
   * Collapses all survey elements in the design surface.
   * @see expandAll
   * @see collapseElement
   */
  public collapseAll() {
    this.expandCollapseManager.expandCollapseElements(null, true);
  }
  /**
   * Expands all survey elements on the design surface.
   * @see collapseAll
   * @see expandElement
   */
  public expandAll() {
    this.expandCollapseManager.expandCollapseElements(null, false);
  }
  /**
   * Collapses an individual survey element on the design surface.
   * @param element A survey element to collapse.
   * @see expandElement
   * @see collapseAll
   */
  public collapseElement(element: SurveyElement) {
    SurveyElementAdornerBase.GetAdorner(element).collapsed = true;
  }
  /**
   * Expands an individual survey element on the design surface.
   * @param element A survey element to expand.
   * @see collapseElement
   * @see expandAll
   */
  public expandElement(element: SurveyElement) {
    SurveyElementAdornerBase.GetAdorner(element).collapsed = false;
  }

  collapsePages = false;
  collapsePanels = false;
  collapseQuestions = false;

  expandOnDragTimeOut: number = 1000;

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
  public getRootCss() {
    return new CssClassBuilder()
      .append("svc-creator")
      .append("svc-creator--mobile", this.isMobileView)
      .append("svc-creator--touch", this.isTouch)
      .append("svc-creator--disable-animations", !this.animationEnabled)
      .toString();
  }

  @property({ defaultValue: {} }) themeVariables: { [index: string]: string } = {};
  /**
   * A theme for the Survey Creator UI.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/dynamic-ui-customization/ (linkStyle))
   * @see applyCreatorTheme
   * @see showCreatorThemeSettings
   */
  @property() creatorTheme: ICreatorTheme;

  public preferredColorPalette: string = "light";

  /**
   * Applies a specified UI theme to Survey Creator.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/dynamic-ui-customization/ (linkStyle))
   * @param theme An `ICreatorTheme` object with theme settings.
   * @see creatorTheme
   * @see showCreatorThemeSettings
   */
  public applyCreatorTheme(theme: ICreatorTheme): void {
    this.syncTheme(theme);
    const designerPlugin = this.getPlugin("designer") as TabDesignerPlugin;
    if (designerPlugin) {
      designerPlugin.setTheme();
    }

  }

  private patchLegacyCSSVariables(newCssVariable: any) {
    Object.keys(legacyCssVariables).forEach((variable) => {
      if (!!newCssVariable[variable]) {
        newCssVariable[legacyCssVariables[variable]] = newCssVariable[variable];
        delete newCssVariable[variable];
      }
    });
  }

  public syncTheme(theme: ICreatorTheme, isLight?: boolean): void {
    if (!theme) return;
    this.creatorTheme = theme;

    const newCssVariable = {};
    assign(newCssVariable, Default.cssVariables, theme?.cssVariables);
    this.patchLegacyCSSVariables(newCssVariable);
    const designerPlugin = this.getPlugin("designer") as TabDesignerPlugin;
    if (designerPlugin && designerPlugin.model) {
      designerPlugin.model.updateSurfaceCssVariables();
    }
    this.creatorTheme.cssVariables = newCssVariable;
    this.themeVariables = newCssVariable;
    const iconsSetName = this.creatorTheme && this.creatorTheme["iconSet"] ? this.creatorTheme["iconSet"] : "v2";
    SvgRegistry.registerIcons(SvgThemeSets[iconsSetName]);

    if (isLight !== undefined) {
      this.preferredColorPalette = isLight ? "light" : "dark";
    }
  }

  private _allowDragPages = true;
  /**
   * Specifies whether users can drag and drop pages on the design surface.
   *
   * Default value: `true` if [`pageEditMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#pageEditMode) is `"standard"`; `false` otherwise.
   * @see collapseOnDrag
   */
  public get allowDragPages(): boolean {
    return this._allowDragPages && this.pageEditMode !== "single" && this.pageEditMode !== "bypage";
  }
  public set allowDragPages(newValue: boolean) {
    this._allowDragPages = newValue;
  }
  /**
   * Specifies whether to collapse pages on the design surface when users start dragging a survey element.
   *
   * Default value: `false`
   */
  public collapseOnDrag: boolean = false;
  /**
   * Specifies whether to clear translations to other languages when a source language translation is changed.
   *
   * Default value: `false`
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/ai-translation/ (linkStyle))
   * @see showTranslationTab
   */
  public clearTranslationsOnSourceTextChange: boolean = false;
  /**
   * Specifies how deeply choice options in Radio Button Group and Checkboxes questions can contain nested survey content such as questions or panels.
   *
   * - 0 - Disables content nesting for choice options.
   * - 1 - Allows first-level choice options to contain survey elements.
   * - 2 - Allows first- and second-level choice options to contain survey elements, and so on.
   *
   * Default value: 0
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/nest-sub-questions-within-choice-options/ (linkStyle))
   */
  public maxChoiceContentNestingLevel: number = 0;

  /**
   * An event that is raised to determine whether in-place editing is allowed for an element on the design surface. Use this event to enable or disable in-place editing for specific elements.
   * @see inplaceEditChoiceValues
   */
  public onAllowInplaceEdit: EventBase<SurveyCreatorModel, AllowInplaceEditEvent> = this.addCreatorEvent<SurveyCreatorModel, AllowInplaceEditEvent>();

  public isStringInplacelyEditable(element: Base, stringName: string, item?: ItemValue) {
    const options = { element, item, propertyName: stringName, allow: !this.readOnly && !!isStringEditable(element, stringName) };
    this.onAllowInplaceEdit.fire(this, options);
    return options.allow;
  }
}

export class CreatorBase extends SurveyCreatorModel { }

export function initializeDesignTimeSurveyModel(model: any, creator: SurveyCreatorModel) {
  model.creator = creator;
  model.isPopupEditorContent = false;
  model.onElementWrapperComponentName.add((_, opt) => {
    const compName = opt.componentName;
    if (opt.wrapperName === "component") {
      opt.componentName = getElementWrapperComponentName(opt.element, opt.reason, model.isPopupEditorContent);
    }
    if (opt.wrapperName === "content-component") {
      opt.componentName = getQuestionContentWrapperComponentName(opt.element);
    }
    if (opt.wrapperName === "row") {
      opt.componentName = getRowWrapperComponentName(opt.element);
    }
    if (Serializer.isDescendantOf(opt.wrapperName, "itemvalue")) {
      opt.componentName = getItemValueWrapperComponentName(opt.item, opt.element);
    }
    opt.componentName = opt.componentName || compName;
  });
  model.onElementWrapperComponentData.add((_, opt) => {
    const data = opt.data;
    if (opt.wrapperName === "component") {
      opt.data = getElementWrapperComponentData(opt.element, opt.reason, creator);
    }
    if (opt.wrapperName === "row") {
      opt.data = getRowWrapperComponentData(opt.element, creator);
    }
    if (Serializer.isDescendantOf(opt.wrapperName, "itemvalue")) {
      opt.data = getItemValueWrapperComponentData(opt.item, opt.element, creator);
    }
    opt.data = opt.data || data;
  });
  model.getRendererForString = (element: Base, name: string, item?: ItemValue): string => {
    if (creator.isStringInplacelyEditable(element, name, item)) {
      return editableStringRendererName;
    }
    return undefined;
  };

  model.getRendererContextForString = (element: Base, locStr: LocalizableString, item?: ItemValue): any => {
    if (creator.isStringInplacelyEditable(element, locStr.name, item)) {
      return {
        creator: creator,
        element,
        locStr
      };
    }
    return <any>locStr;
  };
  model.locTitle.placeholder = "pe.surveyTitlePlaceholder";
  model.locDescription.placeholder = "pe.surveyDescriptionPlaceholder";
}

function isContentElement(element: any) {
  let current = element;
  while(!!current) {
    if (current.isContentElement) {
      return true;
    }
    current = current.parent || current.parentQuestion;
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
export function getRowWrapperComponentName(row: QuestionRowModel): string {
  if (isContentElement(row.panel)) {
    return undefined;
  }
  return "svc-row";
}
export function getQuestionContentWrapperComponentName(element) {
  if (element.isDescendantOf("rating") && !isContentElement(element)) {
    return "svc-rating-question-content";
  }
  return undefined;
}
export function getRowWrapperComponentData(row: QuestionRowModel, creator: SurveyCreatorModel) {
  if (isContentElement(row.panel)) {
    return null;
  }
  return { creator: creator, row: row };
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