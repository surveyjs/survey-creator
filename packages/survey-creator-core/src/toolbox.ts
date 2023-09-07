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
  DragOrClickHelper
} from "survey-core";
import { CreatorBase, toolboxLocationType } from "./creator-base";
import { editorLocalization, getLocString } from "./editorLocalization";
import { localization } from "./entries";
import { settings } from "./creator-settings";
import { DragDropSurveyElements } from "./survey-elements";

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

export class QuestionToolboxCategory extends Base {
  constructor(private toolbox: IQuestionToolbox) {
    super();
  }
  @property() name: string;
  @propertyArray() items: Array<QuestionToolboxItem>;
  @property({ defaultValue: false }) collapsed: boolean;
  public toggleState() {
    if (this.toolbox) {
      this.toolbox.toggleCategoryState(this.name);
    }
  }
}
export class QuestionToolboxItem extends Action implements IQuestionToolboxItem {
  constructor(private item: IQuestionToolboxItem) {
    super(item);
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
}

/**
 * The list of Toolbox items.
 */
export class QuestionToolbox
  extends AdaptiveActionContainer<QuestionToolboxItem>
  implements IQuestionToolbox {
  static hiddenTypes = ["buttongroup", "linkvalue", "embeddedsurvey", "spinedit", "color", "fileedit", "textwithreset", "commentwithreset"];
  static defaultIconName = "icon-default";
  static defaultCategories = {
    toolboxChoiceCategory: ["radiogroup", "rating", "checkbox", "dropdown", "tagbox", "boolean", "file", "imagepicker", "ranking"],
    toolboxTextCategory: ["text", "comment", "multipletext"],
    toolboxContainersCategory: ["panel", "paneldynamic"],
    toolboxMatrixCategory: ["matrix", "matrixdropdown", "matrixdynamic"],
    toolboxMiscCategory: ["html", "expression", "image", "signaturepad"]
  }
  private _orderedQuestions = [
    "radiogroup", "rating", "checkbox", "dropdown", "tagbox", "boolean", "file", "imagepicker", "ranking",
    "text", "comment", "multipletext",
    "panel", "paneldynamic",
    "matrix", "matrixdropdown", "matrixdynamic",
    "html", "expression", "image", "signaturepad"
  ];

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

  //koItems = ko.observableArray();
  /**
   * Contains toolbox categories and allows you to modify them.
   * 
   * [View Demo](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcategories)
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

  /**
   * Indicates whether the toolbox is currently in compact mode.
   * @see forceCompact
   */
  @property({
    defaultValue: false,
    onSet: (val: boolean, target: QuestionToolbox) => {
      if (target.hasCategories && target.showCategoryTitles) {
        if (val) {
          target.isResponsivenessDisabled = false;
          target.raiseUpdate(true);
        } else {
          target.isResponsivenessDisabled = true;
          target.setActionsMode("large");
        }
      }
    }
  }) isCompact: boolean;
  /**
   * Specifies whether the toolbox should be in compact or full mode.
   * Accepts the following values:
   * - `true` - Toolbox is always in compact mode.
   * - `false` - Toolbox is always in full mode.
   * - `undefined` - Toolbox switches between the full and compact modes automatically based on available width.
   * @see isCompact
   */
  @property() forceCompact: boolean;

  constructor(
    private supportedQuestions: Array<string> = null,
    public creator: CreatorBase = null,
    useDefaultCategories = false
  ) {
    super();
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
          questionCategoryMap[name] = getLocString("ed." + key);
        }
      });
    });
    return questionCategoryMap;
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
    this.actions = value ? JSON.parse(value) : [];
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
      res.push(this.items[i].name);
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
      const newTitle = editorLocalization.getString("qt." + action.name);
      if (!!newTitle) {
        action.title = newTitle;
        action.tooltip = newTitle;
      }
    });
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
  public hiddenItemSelected(model: Action): void {
    this.creator.clickToolboxItem((<any>model).json);
  }
  private expandCollapseAllCategories(isCollapsed: boolean) {
    const categories = this.categories;
    for (var i = 0; i < categories.length; i++) {
      categories[i].collapsed = isCollapsed;
    }
  }
  private getCategoryByName(categoryName: string): any {
    const categories = this.categories;
    for (var i = 0; i < categories.length; i++) {
      var category = <any>categories[i];
      if (category.name === categoryName) return category;
    }
    return null;
  }
  protected onItemsChanged() {
    var categories = new Array<QuestionToolboxCategory>();
    var categoriesHash = {};
    var prevActiveCategory = this.activeCategory;
    for (var i = 0; i < this.actions.length; i++) {
      var item = this.actions[i];
      var categoryName = item.category ? item.category : editorLocalization.getString("ed.toolboxGeneralCategory");
      if (!categoriesHash[categoryName]) {
        var category = this.createCategory();
        category.name = categoryName;
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

    let newItems = [];
    this.categories.forEach((cat) => {
      newItems = newItems.concat(cat.items);
    });
    this.actions = newItems;

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

  public dispose() { }
}
