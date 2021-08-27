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
  SurveyModel
} from "survey-core";
import { CreatorBase } from "./creator-base";
import { editorLocalization } from "./editorLocalization";

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
export class QuestionToolboxItem
  extends Action
  implements IQuestionToolboxItem
{
  constructor(private item: IQuestionToolboxItem) {
    super(item);
  }
  name: string;
  json: any;
  title: string;
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
  implements IQuestionToolbox
{
  static hiddenTypes = ["buttongroup", "linkvalue", "embeddedsurvey"];
  private _orderedQuestions = [
    "text",
    "checkbox",
    "radiogroup",
    "dropdown",
    "comment",
    "rating",
    "ranking",
    "imagepicker",
    "boolean",
    "image",
    "html",
    "signaturepad"
  ];

  private _questionDefaultSettings = {
    imagepicker: () => {
      return {
        choices: [
          {
            value: "lion",
            imageLink:
              "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
          },
          {
            value: "giraffe",
            imageLink:
              "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
          },
          {
            value: "panda",
            imageLink:
              "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
          },
          {
            value: "camel",
            imageLink:
              "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
          }
        ]
      };
    },
    image: () => {
      return {
        imageLink:
          "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
      };
    }
  };

  /**
   * Modify this array to change the toolbox items order.
   */
  public get orderedQuestions() {
    return this._orderedQuestions;
  }
  public set orderedQuestions(questions) {
    this._orderedQuestions = questions;
    this.reorderItems();
  }
  /**
   * The maximum number of copied toolbox items. If an user adding copiedItemMaxCount + 1 item, the first added item will be removed.
   */
  public copiedItemMaxCount: number = 3;
  private allowExpandMultipleCategoriesValue: boolean = false;
  private keepAllCategoriesExpandedValue: boolean = false;

  //koItems = ko.observableArray();
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

  @property({ defaultValue: false }) isCompact: boolean;

  constructor(
    supportedQuestions: Array<string> = null,
    public creator: CreatorBase<SurveyModel> = null
  ) {
    super();
    this.createDefaultItems(supportedQuestions);
    this.dotsItemPopupModel.horizontalPosition = "right";
    this.dotsItemPopupModel.verticalPosition = "top";
  }
  private onActiveCategoryChanged(newValue: string) {
    const categories: Array<any> = this.categories;
    for (var i = 0; i < categories.length; i++) {
      var category = categories[i];
      category.collapsed = category.name !== newValue;
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
    const item: IQuestionToolboxItem = {
      id: name,
      name: name,
      title: title,
      tooltip: tooltip,
      isCopied: options.isCopied !== false,
      iconName: !!options.iconName ? options.iconName : "icon-default",
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
    return item instanceof QuestionToolboxItem
      ? item
      : new QuestionToolboxItem(item);
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
    return this.keepAllCategoriesExpandedValue;
  }
  public set keepAllCategoriesExpanded(val: boolean) {
    this.keepAllCategoriesExpandedValue = val;
    this.canCollapseCategories = !this.keepAllCategoriesExpanded;
    this.updateCategoriesState();
  }
  private updateCategoriesState() {
    var noActive =
      this.allowExpandMultipleCategories || this.keepAllCategoriesExpanded;
    if (noActive) {
      this.activeCategory = "";
      if (this.keepAllCategoriesExpanded) {
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
  public invisibleItemSelected(model: Action): void {
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
      var categoryName = item.category
        ? item.category
        : editorLocalization.getString("ed.toolboxGeneralCategory");
      if (!categoriesHash[categoryName]) {
        var category = this.createCategory();
        category.name = categoryName;
        category.collapsed =
          categoryName !== prevActiveCategory &&
          !this.keepAllCategoriesExpanded;
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
    this.hasCategories = categories.length > 1;
    this.updateItemSeparators();
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
    this.categories.forEach((category: any, categoryIndex) => {
      (category.items || []).forEach((item, index) => {
        if (categoryIndex !== 0 && index == 0) {
          item.needSeparator = true;
        }
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
  private createDefaultItems(supportedQuestions: Array<string>) {
    this.clearItems();
    var questions = this.getQuestionTypes(supportedQuestions);
    for (var i = 0; i < questions.length; i++) {
      var name = questions[i];
      var question = ElementFactory.Instance.createElement(name, "q1");
      if (!question) {
        question = Serializer.createClass(name);
      }
      var json = this.getQuestionJSON(question);
      var title = editorLocalization.getString("qt." + name);
      const item: IQuestionToolboxItem = {
        id: name,
        name: name,
        iconName: "icon-" + name,
        title: title,
        tooltip: title,
        json: json,
        isCopied: false,
        category: ""
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
    const iconName: string = json.iconName ? json.iconName : "icon-default";
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
    this.actions.push(this.getActionByItem(item));
  }
  private getQuestionJSON(question: any): any {
    var json = new JsonObject().toJsonObject(question);
    json.type = question.getType();
    if (!!this._questionDefaultSettings[json.type]) {
      var defaultSettings = this._questionDefaultSettings[json.type]();
      for (var key in defaultSettings) {
        json[key] = defaultSettings[key];
      }
    }
    return json;
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
        allTypes.indexOf(name) > -1
      )
        questions.push(name);
    }
    return questions;
  }

  public dispose() {}
}
