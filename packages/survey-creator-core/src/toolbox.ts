import {
  Action,
  AdaptiveActionContainer,
  Base,
  ComponentCollection,
  CustomWidgetCollection,
  ElementFactory,
  IAction,
  JsonObject,
  property,
  propertyArray,
  Question,
  Serializer,
  SurveyModel,
  DragOrClickHelper,
  HashTable,
  ComputedUpdater,
  CssClassBuilder,
  surveyLocalization
} from "survey-core";
import { SurveyCreatorModel, toolboxLocationType } from "./creator-base";
import { editorLocalization, getLocString } from "./editorLocalization";
import { settings } from "./creator-settings";
import { DragDropSurveyElements } from "./survey-elements";
import { SearchManagerToolbox } from "./property-grid/search-manager";

export type overflowBehaviorType = "hideInMenu" | "scroll";

/**
 * The Toolbox item description.
 */
export interface IQuestionToolboxItem extends IAction {
  /**
   * A unique name
   */
  name: string;
  /**
   * Icon name
   */
  iconName: string;
  /**
   * The JSON that used to create a new question/panel. The 'type' attribute is required.
   */
  json: any;
  /**
   * Toolbox item title
   */
  title: string;
  className: string;
  /**
   * Toolbox item tooltip. It equals to title if it is empty
   */
  tooltip?: string;
  /**
   * True, if an end user added this item into Toolbox from the survey.
   */
  isCopied: boolean;
  /**
   * Toolbox item category. If it is empty, it goes to 'General' category.
   */
  category: string;
}

export interface IQuestionToolbox {
  toggleCategoryState(name: string);
}

export interface IToolboxCategoryDefinition {
  category: string;
  title?: string;
  items: Array<string | { name: string, title?: string }>;
}

export class QuestionToolboxCategory extends Base {
  constructor(private toolbox: IQuestionToolbox) {
    super();
  }
  @property() name: string;
  @property() title: string;
  @propertyArray() items: Array<QuestionToolboxItem>;
  @property({ defaultValue: false }) collapsedValue: boolean;
  @property({ defaultValue: false }) forceExpand: boolean;
  public get collapsed(): boolean {
    return !this.forceExpand && this.collapsedValue;
  }
  public set collapsed(val: boolean) {
    this.collapsedValue = val;
  }

  public get empty() {
    return this.items.filter(item => item.visible).length == 0;
  }

  public toggleState() {
    if (this.toolbox) {
      this.toolbox.toggleCategoryState(this.name);
    }
  }
}
export class QuestionToolboxItem extends Action implements IQuestionToolboxItem {
  constructor(private item: IQuestionToolboxItem) {
    super(item);
    if(!this.id) {
      this.id = this.name;
    }
  }
  className: string;
  iconName: string;
  name: string;
  json: any;
  tooltip: string;
  isCopied: boolean;
  category: string;
  toJSON() {
    return this.item;
  }
  get typeName(): string {
    if(!!this.json && !!this.json.type) return this.json.type;
    return this.name;
  }
  get isPanel(): boolean {
    const type = this.typeName;
    return !!type && Serializer.isDescendantOf(type, "panelbase");
  }
  public hasText(text: string) {
    if (!text) return;
    const textLowerCase = text.toLowerCase();
    return this.title.toLowerCase().indexOf(textLowerCase) >= 0 || this.name.toLowerCase().indexOf(textLowerCase) >= 0;
  }
}

/**
 * The list of Toolbox items.
 */
export class QuestionToolbox
  extends AdaptiveActionContainer<QuestionToolboxItem>
  implements IQuestionToolbox {
  public static MINELEMENTCOUNT: number = 10;
  static hiddenTypes = ["buttongroup", "linkvalue", "embeddedsurvey", "spinedit", "color", "fileedit", "textwithreset", "commentwithreset"];
  static defaultIconName = "icon-default";
  static defaultCategories = {
    choice: ["radiogroup", "rating", "checkbox", "dropdown", "tagbox", "boolean", "file", "imagepicker", "ranking"],
    text: ["text", "comment", "multipletext"],
    containers: ["panel", "paneldynamic"],
    matrix: ["matrix", "matrixdropdown", "matrixdynamic"],
    misc: ["html", "expression", "image", "signaturepad"]
  }
  private _orderedQuestions = [
    "radiogroup", "rating", "checkbox", "dropdown", "tagbox", "boolean", "file", "imagepicker", "ranking",
    "text", "comment", "multipletext",
    "panel", "paneldynamic",
    "matrix", "matrixdropdown", "matrixdynamic",
    "html", "expression", "image", "signaturepad"
  ];
  private _containerElementValue: HTMLElement;

  public get itemSelector(): string {
    return ".svc-toolbox__tool:not(.svc-toolbox__search-button):not(.sv-dots)";
  }
  public get containerSelector(): string {
    return ".svc-toolbox__scroller";
  }

  public static getQuestionDefaultSettings(questionType: string): any {
    if (!settings.toolbox || !settings.toolbox.defaultJSON) return undefined;
    return settings.toolbox.defaultJSON[questionType];
  }
  /**
   * Modify this array to change the toolbox items order.
   */
  public get orderedQuestions(): string[] {
    return this._orderedQuestions;
  }
  public set orderedQuestions(questions: string[]) {
    this._orderedQuestions = questions;
    this.reorderItems();
  }
  /**
   * The maximum number of copied toolbox items. If an user adding copiedItemMaxCount + 1 item, the first added item will be removed.
   */
  public copiedItemMaxCount: number = 3;
  private allowExpandMultipleCategoriesValue: boolean = false;
  private keepAllCategoriesExpandedValue: boolean = false;
  @property({ defaultValue: false }) private showCategoryTitlesValue: boolean;
  private dragOrClickHelper: DragOrClickHelper;

  public toolboxNoResultsFound = getLocString("ed.toolboxNoResultsFound");

  //koItems = ko.observableArray();
  /**
   * Contains toolbox categories and allows you to modify them.
   * 
   * [View Demo](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcategories (linkStyle))
   */
  @propertyArray() categories: Array<QuestionToolboxCategory>;
  /**
   * Set and get and active category. This property doesn't work if allowExpandMultipleCategories is true. Its default value is empty.
   * @see allowExpandMultipleCategories
   * @see expandCategory
   * @see collapseCategory
   */
  @property({
    defaultValue: "",
    onSet: (val: string, target: QuestionToolbox) => {
      target.onActiveCategoryChanged(val);
    }
  })
  activeCategory: string;
  @property({ defaultValue: false }) hasCategories: boolean;
  @property({ defaultValue: true }) canCollapseCategories: boolean;

  public updateResponsiveness(isCompact: boolean, overflowBehavior: overflowBehaviorType) {
    if (overflowBehavior == "scroll" && this.creator && !this.creator.isTouch) {
      this.isResponsivenessDisabled = true;
      return;
    }
    if (this.hasCategories && this.showCategoryTitles) {
      if (isCompact) {
        this.isResponsivenessDisabled = false;
        this.raiseUpdate(true);
      } else {
        this.isResponsivenessDisabled = true;
        this.setActionsMode("large");
      }
      return;
    }
    this.isResponsivenessDisabled = false;
    this.raiseUpdate(true);
  }
  /**
   * Indicates whether the toolbox is currently in compact mode.
   * @see forceCompact
   */
  @property({
    defaultValue: false,
    onSet: (val: boolean, target: QuestionToolbox) => {
      target.updateResponsiveness(val, target.overflowBehavior);
    }
  }) isCompact: boolean;

  @property({
    defaultValue: false,
  }) isFocused: boolean;
  /**
   * Indicates whether the toolbox is currently can have scrollbar.
   */
  @property({
    defaultValue: "scroll",
    onSet: (val: overflowBehaviorType, target: QuestionToolbox) => {
      target.updateResponsiveness(target.isCompact, val);
    }
  }) overflowBehavior: overflowBehaviorType;
  /**
   * Specifies whether the toolbox should be in compact or full mode.
   * Accepts the following values:
   * - `true` - Toolbox is always in compact mode.
   * - `false` - Toolbox is always in full mode.
   * - `undefined` - Toolbox switches between the full and compact modes automatically based on available width.
   * @see isCompact
   */
  @property() forceCompact: boolean;
  private categoriesTitles: HashTable<string> = {};

  /**
   * Specifies whether to display a search field that allows users to find question and panel types within the toolbox.
   * 
   * Default value: `true`
   */
  @property({
    defaultValue: true,
    onSet: (val: boolean, target: QuestionToolbox) => {
      target.searchManager.isVisible = val;
    }
  }) searchEnabled: boolean;
  @property({ defaultValue: false }) isScrollLocked: boolean;
  public lockScrollBar(val: boolean) {
    if (!this._containerElementValue) return;
    this.isScrollLocked = val && this._containerElementValue.scrollHeight > this._containerElementValue.clientHeight;
  }
  public searchManager = new SearchManagerToolbox();
  @property() showPlaceholder: boolean;

  constructor(
    private supportedQuestions: Array<string> = null,
    public creator: SurveyCreatorModel = null,
    useDefaultCategories = false
  ) {
    super();
    this.searchManager.isVisible = this.searchEnabled;
    this.searchManager.toolbox = this;
    this.searchItem = new Action({
      id: "searchItem-id",
      css: "svc-toolbox__search-button",
      innerCss: "sv-dots__item",
      iconName: "icon-search",
      component: "sv-action-bar-item",
      tooltip: surveyLocalization.getString("search"),
      action: () => {
        (document.querySelector(".svc-toolbox__panel input") as HTMLInputElement).focus();
        this.isFocused = true;
      }
    });
    this.updateResponsiveness(this.isCompact, this.overflowBehavior);
    this.createDefaultItems(supportedQuestions, useDefaultCategories);
    this.initDotsItem();
  }

  private initDotsItem() {
    this.dotsItem.popupModel.horizontalPosition = "right";
    this.dotsItem.popupModel.verticalPosition = "top";
    this.dragOrClickHelper = new DragOrClickHelper((pointerDownEvent: PointerEvent, currentTarget: HTMLElement, itemModel: any) => {
      const json = this.creator.getJSONForNewElement(itemModel.json);
      this.dotsItem.popupModel.toggleVisibility();
      this.creator?.onDragDropItemStart();
      this.dragDropHelper.startDragToolboxItem(pointerDownEvent, json, itemModel);
    });
    this.hiddenItemsListModel.onPointerDown = (pointerDownEvent: PointerEvent, item: any) => {
      if (!this.creator.readOnly) {
        this.dragOrClickHelper.onPointerDown(pointerDownEvent, item);
      }
    };
    this.dotsItem.popupModel.cssClass = "svc-toolbox-popup";
  }
  private getDefaultQuestionCategories() {
    const questionCategoryMap = {};
    Object.keys(QuestionToolbox.defaultCategories).forEach((key) => {
      const cat = QuestionToolbox.defaultCategories[key];
      cat.forEach((name) => {
        if (!this.supportedQuestions || this.supportedQuestions.indexOf(name) != -1) {
          questionCategoryMap[name] = key;
        }
      });
    });
    return questionCategoryMap;
  }
  private getCategoryTitle(name: string): string {
    if(this.categoriesTitles[name]) return this.categoriesTitles[name];
    return getLocString("toolboxCategories." + name);
  }
  private onActiveCategoryChanged(newValue: string) {
    const categories: Array<QuestionToolboxCategory> = this.categories;
    //if(!this.allowExpandMultipleCategories) {
    for (var i = 0; i < categories.length; i++) {
      var category = categories[i];
      category.collapsed = category.name !== newValue;
    }
    //}
  }

  public get isCompactRendered() {
    return this.isCompact && !this.isFocused;
  }

  public get showSearch() {
    return this.searchEnabled && this.items.length > QuestionToolbox.MINELEMENTCOUNT;
  }

  public get showInSingleCategory() {
    return this.isCompactRendered || this.categories.length == 1 || !this.showCategoryTitles;
  }

  public setRootElement(element: HTMLElement) {
    this._containerElementValue = element?.querySelector(this.containerSelector);
  }

  public get containerElement() {
    return this._containerElementValue;
  }

  public focusOut(e) {
    if (e.relatedTarget !== e.currentTarget &&
      !e.currentTarget.contains(e.relatedTarget)) {
      this.isFocused = false;
      this.searchManager.filterString = "";
    }
  }

  public searchItem: IAction;

  public get classNames() {
    return new CssClassBuilder()
      .append("svc-toolbox")
      .append("svc-toolbox--searchable", this.searchEnabled)
      .append("svc-toolbox--filtering", !!this.searchManager.filterString)
      .append("svc-toolbox--compact", this.isCompactRendered)
      .append("svc-toolbox--scroll-locked", this.isScrollLocked)
      .append("svc-toolbox--flyout", this.isCompact && this.isFocused)
      .append("svc-toolbox--scrollable", this.isResponsivenessDisabled).toString();
  }
  public setLocation(toolboxLocation: toolboxLocationType) {
    if (toolboxLocation === "sidebar") {
      this.visibleActions.forEach((item) => (item.mode = "small"));
    } else {
      this.dotsItem.popupModel.horizontalPosition = this.creator.toolboxLocation == "right" ? "left" : "right";
    }
  }

  /**
   * The Array of Toolbox items as Text JSON.
   */
  public get jsonText() {
    return JSON.stringify(this.actions);
  }
  public set jsonText(value: string) {
    this.actions = (value ? JSON.parse(value) : []).map(action => new QuestionToolboxItem(action));
    this.onItemsChanged();
  }
  /**
   * The Array of copied Toolbox items as Text JSON.
   */
  public get copiedJsonText(): string {
    return JSON.stringify(this.copiedItems);
  }
  public set copiedJsonText(value: string) {
    var newItems = value ? JSON.parse(value) : [];
    this.clearCopiedItems();
    for (let i: number = 0; i < newItems.length; i++) {
      newItems[i].isCopied = true;
      this.addItem(newItems[i]);
    }
  }
  /**
   * The Array of Toolbox items.
   */
  public get items(): Array<QuestionToolboxItem> {
    return this.actions;
  }
  public get itemNames(): Array<string> {
    const res: string[] = [];
    for (let i: number = 0; i < this.items.length; i++) {
      res.push(this.items[i].typeName);
    }
    return res;
  }
  /**
   * The Array of copied Toolbox items
   */
  public get copiedItems(): Array<QuestionToolboxItem> {
    const result: QuestionToolboxItem[] = [];
    for (let i: number = 0; i < this.actions.length; i++) {
      if (this.actions[i].isCopied) result.push(this.actions[i]);
    }
    return result;
  }
  /**
   * Add toolbox items into the Toolbox
   * @param items the list of new items
   * @param clearAll set it to true to clear all previous items.
   */
  public addItems(
    items: Array<IQuestionToolboxItem>,
    clearAll: boolean = false
  ) {
    if (clearAll) {
      this.clearItems();
    }
    for (let i: number = 0; i < items.length; i++) {
      this.actions.push(this.getActionByItem(items[i]));
    }
    this.onItemsChanged();
  }
  /**
   * Add a copied Question into Toolbox
   * @param question a copied Survey.Question
   * @param options a json object that allows you to override question properties. Attributes are: name, title, tooltip, isCopied, iconName, json and category.
   */
  public addCopiedItem(question: Question, options: any = null) {
    if (!options) options = {};
    const name: string = !!options.name ? options.name : question.name;
    const title: string = !!options.title ? options.title : name;
    const tooltip: string = !!options.tooltip ? options.tooltip : title;
    const iconName = !!options.iconName ? options.iconName : QuestionToolbox.defaultIconName;
    const item: IQuestionToolboxItem = {
      id: name,
      name: name,
      title: title,
      tooltip: tooltip,
      className: "svc-toolbox__item svc-toolbox__item--" + iconName,
      isCopied: options.isCopied !== false,
      iconName: iconName,
      json: !!options.json ? options.json : this.getQuestionJSON(question),
      category: !!options.category ? options.category : ""
    };
    if (this.replaceItem(item)) return;
    const copied: IQuestionToolboxItem[] = this.copiedItems;
    if (this.copiedItemMaxCount > 0 && copied.length == this.copiedItemMaxCount)
      this.removeItem(copied[this.copiedItemMaxCount - 1].name);
    this.addItem(item);
  }
  /**
   * Add a toolbox item
   * @param item the toolbox item description
   * @param index the toolbox index to place the item, the item is added to the end if index not passed
   * @see IQuestionToolboxItem
   */
  private getActionByItem(item: IQuestionToolboxItem) {
    if (item instanceof QuestionToolboxItem) {
      return item;
    }
    else {
      item.iconName = item.iconName ? item.iconName : QuestionToolbox.defaultIconName;
      return new QuestionToolboxItem(item);
    }
  }
  public addItem(item: IQuestionToolboxItem, index?: number) {
    this.correctItem(item);
    const action = this.getActionByItem(item);
    if (index === undefined) {
      this.actions.push(action);
    } else {
      this.actions.splice(index, 0, action);
    }
    this.onItemsChanged();
  }
  private correctItem(item: IQuestionToolboxItem) {
    if (!item.title) item.title = item.name;
    if (!item.tooltip) item.tooltip = item.title;
  }
  private get dragDropHelper(): DragDropSurveyElements {
    return this.creator.dragDropSurveyElements;
  }
  /**
   * Add a new toolbox item, add delete the old item with the same name
   * @param item the toolbox item description
   * @see IQuestionToolboxItem
   */
  public replaceItem(item: IQuestionToolboxItem): boolean {
    this.correctItem(item);
    const index: number = this.indexOf(item.name);
    if (index < 0) return;
    this.actions[index] = this.getActionByItem(item);
    this.onItemsChanged();
    return true;
  }
  /**
   * Remove a toolbox item by its name
   * @param name toolbox item name
   * @see IQuestionToolboxItem
   */
  public removeItem(name: string): boolean {
    const index: number = this.indexOf(name);
    if (index < 0) return false;
    this.actions.splice(index, 1);
    this.onItemsChanged();
    return true;
  }
  /**
   * Remove all toolbox items.
   */
  public clearItems() {
    this.actions = [];
    this.onItemsChanged();
  }
  /**
   * Remove all copied toolbox items.
   */
  public clearCopiedItems() {
    const removedItems: IQuestionToolboxItem[] = this.copiedItems;
    for (let i: number = 0; i < removedItems.length; i++) {
      this.removeItem(removedItems[i].name);
    }
  }
  /**
   * Returns toolbox item by its name. Returns null if there is no toolbox item with this name
   * @param name
   */
  public getItemByName(name: string): IQuestionToolboxItem {
    if(!name) return null;
    const index: number = this.indexOf(name);
    return index > -1 ? this.actions[index] : null;
  }
  /**
   * Set it to true, to allow end-user to expand more than one category. There will no active category in this case
   * @see activeCategory
   */
  public get allowExpandMultipleCategories(): boolean {
    return this.allowExpandMultipleCategoriesValue;
  }
  public set allowExpandMultipleCategories(val: boolean) {
    this.allowExpandMultipleCategoriesValue = val;
    this.updateCategoriesState();
  }
  /**
   * Set it to true to expand all categories and hide expand/collapse category buttons
   */
  public get keepAllCategoriesExpanded(): boolean {
    return this.keepAllCategoriesExpandedValue || !this.showCategoryTitlesValue;
  }
  public set keepAllCategoriesExpanded(val: boolean) {
    this.keepAllCategoriesExpandedValue = val;
    this.canCollapseCategories = !this.keepAllCategoriesExpanded;
    this.updateCategoriesState();
  }

  /**
   * Specifies whether to display category titles in the Toolbox.
   *
   * If you disable this property, the Toolbox hides the titles but continues to display horizontal lines that divide categories. To remove these lines as well, call the `removeCategories()` method.
   * @see removeCategories
   */
  public get showCategoryTitles(): boolean {
    return this.showCategoryTitlesValue;
  }
  public set showCategoryTitles(val: boolean) {
    this.showCategoryTitlesValue = val;
    this.updateCategoriesState();
  }
  public updateTitles(): void {
    this.actions.forEach(action => {
      this.updateActionTitle(action);
      this.updateActionTitle(action.innerItem);
    });
    if(Array.isArray(this.categories)) {
      this.categories.forEach(category => {
        category.title = this.getCategoryTitle(category.name);
      });
    }
  }
  private updateActionTitle(action: IAction): void {
    const newTitle = editorLocalization.getString("qt." + action.id);
    if (!!newTitle) {
      action.title = newTitle;
      action.tooltip = newTitle;
    }
  }
  private updateCategoriesState() {
    var noActive = this.allowExpandMultipleCategories || this.keepAllCategoriesExpanded;
    if (noActive) {
      this.activeCategory = "";
      if (this.keepAllCategoriesExpandedValue) {
        this.expandAllCategories();
      }
    } else {
      if (this.categories.length > 0) {
        this.activeCategory = (<any>this.categories[0]).name;
      }
    }
  }

  /**
   * Change the category of the toolbox item
   * @param name the toolbox item name
   * @param category new category name
   */
  public changeCategory(name: string, category: string) {
    this.changeCategories([{ name: name, category: category }]);
  }
  /**
   * Change categories for several toolbox items.
   * @param changedItems the array of objects {name: "your toolbox item name", category: "new category name"}
   */
  public changeCategories(changedItems: Array<any>) {
    for (var i = 0; i < changedItems.length; i++) {
      var item = changedItems[i];
      var toolboxItem = this.getItemByName(item.name);
      if (toolboxItem) {
        toolboxItem.category = item.category;
      }
    }
    this.onItemsChanged();
  }
  /**
   * Defines toolbox categories from scratch.
   * 
   * This method accepts an array of objects as the `categories` parameter. Each object defines a single category and lists items included into it. Unlisted items can be collected in the Misc category if you pass `true` as the `displayMisc` parameter. Optionally, you can override display titles for individual items.
   * 
   * The following code defines two toolbox categories: Dropdowns and Text Input. Items that do not fall into either category are collected in Misc. The `"comment"` item has a custom display title.
   * 
   * ```
   * creator.toolbox.defineCategories([{
   *   category: "Dropdowns",
   *   items: [
   *     "dropdown",
   *     "tagbox"
   *   ]
   * }, {
   *   category: "Text Input",
   *   items: [
   *     "text",
   *     // Override the display title
   *     { name: "comment", title: "Multi-Line Input" }
   *   ]
   * }], true);
   * ```
   * 
   * [View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-categories/ (linkStyle))
   * @param categories An array of new categories.
   * @param displayMisc Pass `true` if you want to collect unlisted toolbox items in the Misc category. Default value: `false`.
   */
  public defineCategories(categories: Array<IToolboxCategoryDefinition>, displayMisc: boolean = false): void {
    if (!Array.isArray(categories)) return;
    this.actions.forEach(item => {
      item.visible = false;
    });
    this.categoriesTitles = {};
    const actionList = new Array<IQuestionToolboxItem>();
    categories.forEach(category => {
      if(!!category.category && !!category.title) {
        this.categoriesTitles[category.category] = category.title;
      }
      if (!Array.isArray(category.items)) return;
      category.items.forEach(obj => {
        let name = undefined;
        let title = undefined;
        if (typeof obj === "string") {
          name = obj;
        } else {
          name = obj.name;
          title = obj.title;
        }
        const item = this.getItemByName(name);
        if (item) {
          item.category = category.category;
          item.visible = true;
          if (!!title) {
            item.title = title;
          }
          actionList.push(item);
        }
      });
    });
    this.actions.forEach(item => {
      if(!item.visible) {
        if(displayMisc) {
          item.visible = true;
          item.category = "misc";
        }
        actionList.push(item);
      }
    });
    this.setItems(actionList);
    this.onItemsChanged(false);
  }

  /**
   * Removes categories from the Toolbox.
   */
  public removeCategories() {
    const allTypes: string[] = ElementFactory.Instance.getAllTypes();
    this.changeCategories(allTypes.map(t => ({ name: t, category: null })));
    this.onItemsChanged();
  }
  public toggleCategoryState(categoryName: string) {
    if (this.keepAllCategoriesExpanded) return;
    if (this.allowExpandMultipleCategories) {
      var category = this.getCategoryByName(categoryName);
      if (category) {
        category.collapsed = !category.collapsed;
      }
    } else {
      this.activeCategory = categoryName;
    }
  }
  /**
   * Expand a category by its name. If allowExpandMultipleCategories is false (default value), all other categories become collapsed
   * @param categoryName the category name
   * @see allowExpandMultipleCategories
   * @see collapseCategory
   */
  public expandCategory(categoryName: string) {
    if (this.allowExpandMultipleCategories) {
      var category = this.getCategoryByName(categoryName);
      if (category) {
        category.collapsed = false;
      }
    } else {
      if (this.canCollapseCategories) {
        this.activeCategory = categoryName;
      }
    }
  }
  /**
   * Collapse a category by its name. If allowExpandMultipleCategories is false (default value) this function does nothing
   * @param categoryName the category name
   * @see allowExpandMultipleCategories
   */
  public collapseCategory(categoryName: string) {
    if (!this.allowExpandMultipleCategories) return;
    var category = this.getCategoryByName(categoryName);
    if (category) {
      category.collapsed = true;
    }
  }
  /**
   * Expand all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
   * @see allowExpandMultipleCategories
   */
  public expandAllCategories() {
    this.expandCollapseAllCategories(false);
  }
  /**
   * Collapse all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
   * @see allowExpandMultipleCategories
   */
  public collapseAllCategories() {
    this.expandCollapseAllCategories(true);
  }
  private expandCollapseAllCategories(isCollapsed: boolean) {
    const categories = this.categories;
    for (var i = 0; i < categories.length; i++) {
      categories[i].collapsed = isCollapsed;
    }
  }
  public getCategoryByName(categoryName: string): QuestionToolboxCategory {
    const categories = this.categories;
    for (var i = 0; i < categories.length; i++) {
      var category = <any>categories[i];
      if (category.name === categoryName) return category;
    }
    return null;
  }
  protected onItemsChanged(changeActions: boolean = true) {
    var categories = new Array<QuestionToolboxCategory>();
    var categoriesHash = {};
    var prevActiveCategory = this.activeCategory;
    for (let i = 0; i < this.actions.length; i++) {
      const item = this.actions[i];
      item.innerItem.action = () => {
        this.creator.clickToolboxItem((<any>item).json);
      };
      if(item.visible === false) continue;
      const categoryName = item.category ? item.category : "general";
      if (!categoriesHash[categoryName]) {
        const category = this.createCategory();
        category.name = categoryName;
        category.title = this.getCategoryTitle(categoryName);
        category.collapsed = categoryName !== prevActiveCategory && !this.keepAllCategoriesExpanded;
        categoriesHash[categoryName] = category;
        categories.push(category);
      }
      categoriesHash[categoryName].items.push(item);
    }
    this.categories = categories;
    if (!this.keepAllCategoriesExpanded) {
      if (!this.allowExpandMultipleCategories) {
        if (prevActiveCategory && categoriesHash[prevActiveCategory]) {
          this.activeCategory = prevActiveCategory;
        } else {
          this.activeCategory = categories.length > 0 ? categories[0].name : "";
        }
      } else {
        if (categories.length > 0) {
          categories[0].collapsed = false;
        }
      }
    }
    if(changeActions) {
      let newItems = [];
      this.categories.forEach((cat) => {
        newItems = newItems.concat(cat.items);
      });
      this.actions = newItems;
    }
    this.hasCategories = categories.length > 1;
    //this.updateCategoriesState();
    this.updateItemSeparators();
    this.raiseUpdate(false);
  }
  protected createCategory(): QuestionToolboxCategory {
    return new QuestionToolboxCategory(this);
  }
  private indexOf(name: string) {
    for (var i = 0; i < this.actions.length; i++) {
      if (this.actions[i].name == name) return i;
    }
    return -1;
  }
  private updateItemSeparators() {
    const categories = this.hasCategories ? this.categories : [{ items: this.actions }];
    categories.forEach((category: any, categoryIndex) => {
      (category.items || []).forEach((item, index) => {
        item.needSeparator = categoryIndex !== 0 && index == 0;
        if (item.innerItem) item.innerItem.needSeparator = item.needSeparator;
      });
    });
  }
  private reorderItems() {
    this.actions.sort((i1, i2) => {
      var index1 = this._orderedQuestions.indexOf(i1.name);
      if (index1 === -1) index1 = Number.MAX_VALUE;
      var index2 = this._orderedQuestions.indexOf(i2.name);
      if (index2 === -1) index2 = Number.MAX_VALUE;
      return index1 - index2;
    });
    this.onItemsChanged();
  }
  /**
   * Adds default items to the Toolbox. If the Toolbox contains any items before you call this method, they will be removed.
   * @param supportedQuestions Specifies which question and panel types to include in the Toolbox.
   * @param useDefaultCategories Pass `true` if you want to create default categories.
   */
  public createDefaultItems(supportedQuestions: Array<string>, useDefaultCategories: boolean) {
    this.clearItems();
    const questions = this.getQuestionTypes(supportedQuestions);
    const defaultCategories = useDefaultCategories ? this.getDefaultQuestionCategories() : {};

    for (var i = 0; i < questions.length; i++) {
      var name = questions[i];
      var question = ElementFactory.Instance.createElement(name, "q1");
      if (!question) {
        question = Serializer.createClass(name);
      }
      var json = this.getQuestionJSON(question);
      var title = editorLocalization.getString("qt." + name);
      const iconName = "icon-" + name;
      const item: IQuestionToolboxItem = {
        id: name,
        name: name,
        iconName: iconName,
        title: title,
        tooltip: title,
        className: "svc-toolbox__item svc-toolbox__item--" + iconName,
        json: json,
        isCopied: false,
        category: (defaultCategories[name] || "")
      };
      this.actions.push(this.getActionByItem(item));
    }
    this.registerCustomWidgets();
    this.registerComponentQuestions();
    this.onItemsChanged();
  }
  private registerCustomWidgets() {
    var inst = CustomWidgetCollection.Instance;
    if (!inst.getActivatedBy) return;
    var widgets = inst.widgets;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i].canShowInToolbox) {
        this.addItemFromJSON(widgets[i].widgetJson);
      }
    }
  }
  private registerComponentQuestions() {
    var items = this.getComponentItems();
    for (var i = 0; i < items.length; i++) {
      this.addItemFromJSON(items[i].json);
    }
  }
  private getComponentItems(): Array<any> {
    var instanceOwner = undefined; // CustomQuestionCollection;
    if (!instanceOwner) {
      instanceOwner = ComponentCollection;
    }
    if (!instanceOwner) return [];
    var items = instanceOwner.Instance["items"];
    return !!items ? items : [];
  }
  private addItemFromJSON(json: any) {
    if (json.showInToolbox === false) return;
    const iconName: string = json.iconName ? json.iconName : QuestionToolbox.defaultIconName;
    let title: string = editorLocalization.getString("qt." + json.name);
    if (!title || title == json.name) {
      title = json.title;
    }
    if (!title) {
      title = json.name;
    }
    var elementJson = json.defaultJSON ? json.defaultJSON : {};
    if (!elementJson.type) {
      elementJson.type = json.name;
    }
    var category = json.category ? json.category : "";
    const item: IQuestionToolboxItem = <any>new Action(<any>{
      id: json.name,
      name: json.name,
      iconName: iconName,
      title: title,
      tooltip: title,
      className: "svc-toolbox__item svc-toolbox__item--" + iconName,
      json: elementJson,
      isCopied: false,
      category: category
    });
    const action = this.getActionByItem(item);
    const existingAction = this.getActionById(item.id);
    if (!!existingAction) {
      this.actions.splice(this.actions.indexOf(existingAction), 1, action);
    } else {
      const index = Array.isArray(this.supportedQuestions) ? this.supportedQuestions.indexOf(item.id) : -1;
      if (index > -1) {
        this.actions.splice(index, 0, action);
      } else {
        this.actions.push(action);
      }
    }
  }
  private getQuestionJSON(question: any): any {
    var json = new JsonObject().toJsonObject(question);
    json.type = question.getType();
    let defaultSettings = QuestionToolbox.getQuestionDefaultSettings(json.type);
    if (defaultSettings) {
      for (var key in defaultSettings) {
        json[key] = defaultSettings[key];
      }
    }
    return json;
  }
  private isHiddenCustomWidget(name: string): boolean {
    const widget = CustomWidgetCollection.Instance.getCustomWidgetByName(name);
    return !!widget && !widget.showInToolbox;
  }
  private getQuestionTypes(supportedQuestions: Array<string>): string[] {
    const allTypes: string[] = ElementFactory.Instance.getAllTypes();
    if (!supportedQuestions || supportedQuestions.length == 0)
      supportedQuestions = allTypes;
    const questions: string[] = [];
    for (let i = 0; i < this.orderedQuestions.length; i++) {
      const name: string = this.orderedQuestions[i];
      if (supportedQuestions.indexOf(name) > -1 && allTypes.indexOf(name) > -1)
        questions.push(name);
    }
    for (let i = 0; i < supportedQuestions.length; i++) {
      var name: string = supportedQuestions[i];
      if (
        questions.indexOf(name) < 0 &&
        QuestionToolbox.hiddenTypes.indexOf(name) < 0 &&
        allTypes.indexOf(name) > -1 &&
        !this.isHiddenCustomWidget(name)
      )
        questions.push(name);
    }
    return questions;
  }

  //public dispose(): void { } Don't we need to dispose toolbox?
}
