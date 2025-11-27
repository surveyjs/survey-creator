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
  DragOrClickHelper,
  CssClassBuilder,
  HashTable,
  surveyLocalization,
  ComputedUpdater,
  AnimationBoolean,
  IAnimationConsumer,
  VerticalResponsivityManager,
  UpdateResponsivenessMode,
  ILocalizableOwner,
  LocalizableString
} from "survey-core";
import { SurveyCreatorModel, toolboxLocationType } from "./creator-base";
import { editorLocalization, getLocString } from "./editorLocalization";
import { settings } from "./creator-settings";
import { DragDropSurveyElements } from "./dragdrop-survey-elements";
import { SearchManagerToolbox } from "./components/toolbox/toolbox-search-manager";
import { listComponentCss } from "./components/list-theme";

export type overflowBehaviorType = "hideInMenu" | "scroll";

/**
 * A toolbox item configuration.
 *
 * `IQuestionToolboxItem` objects are used in such Toolbox API methods as [`addItem(item, index)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#addItem), [`replaceItem(item)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#replaceItem), [`addSubitem(subitem, index)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolboxitem#addSubitem), and others.
 *
 * [Toolbox Customization](https://surveyjs.io/survey-creator/documentation/toolbox-customization (linkStyle))
 */
export interface IQuestionToolboxItem extends IAction {
  /**
   * A toolbox item identifier.
   *
   * > Toolbox item names must be unique.
   */
  name: string;
  /**
   * An icon name.
   *
   * [UI Icons](https://surveyjs.io/form-library/documentation/icons (linkStyle))
   */
  iconName?: string;
  /**
   * A JSON object used to create a new question or panel when users click this toolbox item. It must contain the `type` property.
   *
   * [View Toolbox Customization Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-customization/ (linkStyle))
   */
  json: any;
  /**
   * A user-friendly toolbox item title.
   */
  title?: string;
  className?: string;
  /**
   * A toolbox item tooltip.
   *
   * If `tooltip` is undefined, the [`title`](#title) property value is used instead.
   */
  tooltip?: string;
  isCopied?: boolean;
  /**
   * A category to which this toolbox item belongs.
   *
   * Out-of-the-box categories include `"general"`, `"choice"`, `"text"`, `"containers"`, `"matrix"`, and `"misc"`.
   *
   * Default value: `"general"`
   */
  category?: string;
  /**
   * Specifies whether users can interact with the toolbox item.
   *
   * Default value: `true`
   */
  enabled?: boolean;
  showInToolboxOnly?: boolean;
  getArea?: (el: HTMLElement) => HTMLElement;
  clearSubitems?(): void;
  addSubitem?(subitem: IQuestionToolboxItem, index: number): void;
  removeSubitem?(subitem: IQuestionToolboxItem | string): void;
  propName?: string;
  propValue?: any;
}

export interface IQuestionToolbox extends ILocalizableOwner {
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
    this.createLocalizableString("title", this.toolbox);
  }
  public get locTitle(): LocalizableString { return this.getLocalizableString("title"); }
  public get title(): string {
    return this.locTitle.text;
  }
  public set title(val: string) {
    this.setLocalizableStringText("title", val);
  }
  @property() name: string;
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "name") {
      this.locTitle.localizationName = newValue ? "toolboxCategories." + newValue : "";
    }
  }
  @propertyArray() items: Array<QuestionToolboxItem>;
  @property({ defaultValue: false }) collapsedValue: boolean;
  @property({ defaultValue: false }) forceExpand: boolean;
  public get collapsed(): boolean {
    return !this.forceExpand && this.collapsedValue;
  }
  public set collapsed(val: boolean) {
    this.collapsedValue = val;
  }
  public get iconName() {
    return this.collapsed ? "icon-chevrondown-24x24" : "icon-chevronup-24x24";
  }
  public get iconClassName() {
    const suffixName = this.collapsed ? "expand" : "collapse";
    return "svc-toolbox__category-header__button svc-string-editor__button--" + suffixName;
  }

  @property() empty: boolean;

  public toggleState() {
    if (this.toolbox) {
      this.toolbox.toggleCategoryState(this.name);
    }
  }
}
function getLocalizedToolboxItemName(str: string, item: IQuestionToolboxItem): string {
  if (!!str) return str;
  if (item.propName) {
    return editorLocalization.getPropertyValueInEditor(item.propName, item.propValue);
  }
  return editorLocalization.getString("qt." + item.id);
}
/**
 * A toolbox item instance.
 *
 * An object of this class is returned by the `QuestionToolbox`'s [`getItemByName(name)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#getItemByName) method.
 */
export class QuestionToolboxItem extends Action implements IQuestionToolboxItem {
  public propName: string;
  public propValue: string;
  public showInToolboxOnly: boolean = false;
  public needDefaultSubitem: boolean = undefined;
  @property() isDisabledByRestriction: boolean;
  static getItemClassNames(iconName?: string): string {
    return new CssClassBuilder()
      .append("svc-toolbox__item")
      .append("svc-toolbox__item--has-icon", !!iconName)
      .append("svc-toolbox__item--" + iconName, !!iconName)
      .toString();
  }
  constructor(private item: IQuestionToolboxItem) {
    super(item);
    this.locTitle.onGetTextCallback = (str: string): string => getLocalizedToolboxItemName(str, this);
    this.showInToolboxOnly = item.showInToolboxOnly === true;
    this.locStrsChanged();
    const originalCss = this.css;
    this.css = new ComputedUpdater(() => {
      return new CssClassBuilder()
        .append("svc-toolbox__tool")
        .append("svc-toolbox__tool--action")
        .append(originalCss)
        .append("svc-toolbox__tool--pressed", this.isPressed)
        .append("svc-toolbox__tool--has-icon", !!this.iconName)
        .append("svc-toolbox__tool--has-subitems", !!(this.items?.length > 0))
        .append("svc-toolbox__tool--disabled", this.enabled === false)
        .append("sv-action--hidden", !this.isVisible)
        .toString();
    }) as any;
  }
  elementId?: string;
  /**
   * A user-friendly toolbox item title.
   */
  public get title(): string {
    return this.getTitle();
  }
  public set title(val: string) {
    this.setTitle(val);
  }
  protected getId(): string {
    return super.getId() || this.name;
  }
  /**
   * Specifies whether users can interact with the toolbox item.
   *
   * Default value: `true`
   */
  public get enabled(): boolean {
    return this.getEnabled();
  }
  public set enabled(val: boolean) {
    this.setEnabled(val);
  }
  public getEnabled(): boolean {
    if (this.isDisabledByRestriction) return false;
    return super.getEnabled() !== false;
  }
  className: string;

  public get renderedCss(): string {
    return new CssClassBuilder()
      .append("svc-toolbox__item")
      .append(this.className)
      .append("svc-toolbox__item--has-subitems", this.hasSubItems).toString();
  }
  /**
   * An icon name.
   *
   * [UI Icons](https://surveyjs.io/form-library/documentation/icons (linkStyle))
   */
  iconName: string;
  /**
   * A toolbox item identifier.
   *
   * > Toolbox item names must be unique.
   */
  name: string;
  /**
   * A JSON object used to create a new question or panel when users click this toolbox item. It must contain the `type` property.
   *
   * [View Toolbox Customization Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-customization/ (linkStyle))
   */
  json: any;
  /**
   * A toolbox item tooltip.
   *
   * If `tooltip` is undefined, the [`title`](#title) property value is used instead.
   */
  tooltip: string;
  isCopied: boolean;
  /**
   * A category to which this toolbox item belongs.
   *
   * Out-of-the-box categories include `"general"`, `"choice"`, `"text"`, `"containers"`, `"matrix"`, and `"misc"`.
   *
   * Default value: `"general"`
   */
  category: string;
  toJSON() {
    return this.item;
  }
  get typeName(): string {
    if (!!this.json && !!this.json.type) return this.json.type;
    return this.name;
  }
  get isPanel(): boolean {
    const type = this.typeName;
    return !!type && Serializer.isDescendantOf(type, "panelbase");
  }

  public getArea(target: HTMLElement): HTMLElement {
    return target.closest("#scrollableDiv-designer") as HTMLElement;
  }

  public hasText(text: string) {
    if (!text) return;
    const textLowerCase = text.toLowerCase();
    return this.title.toLowerCase().indexOf(textLowerCase) >= 0 || this.name.toLowerCase().indexOf(textLowerCase) >= 0;
  }

  /**
   * Finds a subitem with a specified name in the collection of subitems belonging to this toolbox item.
   *
   * [Manage Toolbox Subitems](https://surveyjs.io/survey-creator/documentation/toolbox-customization#manage-toolbox-subitems (linkStyle))
   * @param name A subitem [`name`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem#name).
   * @returns A [`QuestionToolboxItem`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolboxitem) object that represents the subitem instance.
   */
  public getSubitem(name: string): QuestionToolboxItem {
    return this.items?.filter(i => i.id === name)[0];
  }

  protected getGroupComponentName(): string {
    return QuestionToolbox.defaultItemGroupComponent;
  }
  public addSubitems(items: Array<QuestionToolboxItem>) {
    if (!items || items.length < 1) return;

    this.setSubItems({ items: items });
    this.popupModel.getAreaCallback = this.getArea;
  }
  /**
   * Removes all subitems from this toolbox item.
   *
   * [Manage Toolbox Subitems](https://surveyjs.io/survey-creator/documentation/toolbox-customization#manage-toolbox-subitems (linkStyle))
   * @see removeSubitem
   * @see addSubitem
   */
  public clearSubitems(): void {
    if (this.hasSubItems) {
      this.needDefaultSubitem = undefined;
      this.items = [];
      this.component = "";
      this.popupModel.dispose();
    }
  }
  /**
   * Adds a subitem to this toolbox item.
   *
   * [Manage Toolbox Subitems](https://surveyjs.io/survey-creator/documentation/toolbox-customization#manage-toolbox-subitems (linkStyle))
   * @param subitem An [`IQuestionToolboxItem`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem) object that represents a subitem configuration.
   * @param index *(Optional)* A zero-based index at which to insert the subitem. If you do not specify this parameter, the subitem is added to the end.
   * @see removeSubitem
   * @see clearSubitems
   */
  public addSubitem(subitem: IQuestionToolboxItem, index: number = -1): void {
    if (!subitem) return;
    this.needDefaultSubitem = undefined;
    const newItem: QuestionToolboxItem = new QuestionToolboxItem(subitem);
    newItem.iconName = "";
    if (!newItem.className) newItem.className = QuestionToolboxItem.getItemClassNames(newItem.iconName);
    newItem.className = new CssClassBuilder().append(newItem.className).append("svc-toolbox__item-subtype").toString();
    let array: Array<QuestionToolboxItem> = (this.items || []).slice();
    if (index === -1) {
      array.push(newItem);
    } else {
      array.splice(index, 0, newItem);
    }
    this.addSubitems(array);
  }
  /**
   * Removes a specific subitem from this toolbox item.
   *
   * [Manage Toolbox Subitems](https://surveyjs.io/survey-creator/documentation/toolbox-customization#manage-toolbox-subitems (linkStyle))
   * @param subitem A subitem [`name`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem#name) or an [`IQuestionToolboxItem`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem) object that represents a subitem configuration.
   * @see clearSubitems
   * @see addSubitem
   */
  public removeSubitem(subitem: IQuestionToolboxItem | string): void {
    if (!this.hasSubItems || !subitem) return;
    this.needDefaultSubitem = undefined;
    const id: string = (subitem as IQuestionToolboxItem)?.id || subitem as string;
    if (!id) return;

    const removedItem = this.getSubitem(id);
    let array: Array<QuestionToolboxItem> = (this.items || []).slice();
    const removedIndex = array.indexOf(removedItem);
    if (removedIndex > -1) {
      array.splice(removedIndex, 1);
    }
    if (array.length == 0) {
      this.clearSubitems();
    } else {
      this.addSubitems(array);
    }
  }

  public get subitemsButtonIcon() {
    return "icon-next_16x16";
  }
}

/**
 * An object that enables you to modify Survey Creator's Toolbox. To access this object, use the [`toolbox`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#toolbox) property on a Survey Creator instance:
 *
 * ```js
 * const creatorOptions = { ... };
 * const creator = new SurveyCreator.SurveyCreator(creatorOptions);
 * creator.toolbox.settingName = "value";
 *
 * // In modular applications:
 * import { SurveyCreatorModel } from "survey-creator-core";
 *
 * const creatorOptions = { ... };
 * const creator = new SurveyCreatorModel(creatorOptions);
 * creator.toolbox.settingName = "value";
 * ```
 *
 * [Toolbox Customization](https://surveyjs.io/survey-creator/documentation/toolbox-customization (linkStyle))
 */
export class QuestionToolbox
  extends AdaptiveActionContainer<QuestionToolboxItem>
  implements IQuestionToolbox {
  public static MINELEMENTCOUNT = 10;
  static defaultIconName = "icon-default";
  static defaultItemComponent = "svc-toolbox-item";
  static defaultItemGroupComponent = "svc-toolbox-item-group";
  static defaultCategories = {
    choice: ["radiogroup", "rating", "slider", "checkbox", "dropdown", "tagbox", "boolean", "file", "imagepicker", "ranking"],
    text: ["text", "comment", "multipletext"],
    containers: ["panel", "paneldynamic"],
    matrix: ["matrix", "matrixdropdown", "matrixdynamic"],
    misc: ["html", "expression", "image", "signaturepad"]
  };
  private _orderedQuestions = [
    "radiogroup", "rating", "slider", "checkbox", "dropdown", "tagbox", "boolean", "file", "imagepicker", "ranking",
    "text", "comment", "multipletext",
    "panel", "paneldynamic",
    "matrix", "matrixdropdown", "matrixdynamic",
    "html", "expression", "image", "signaturepad"
  ];
  private _containerElementValue: HTMLElement;
  private _rootElementValue: HTMLElement;
  public presetDefaultItems: Array<IQuestionToolboxItem>;

  public get itemSelector(): string {
    return ".svc-toolbox__category>.svc-toolbox__tool--action";
  }
  public get containerSelector(): string {
    return ".sv-scroll__scroller";
  }

  public static getQuestionDefaultSettings(questionType: string): any {
    if (!settings.toolbox || !settings.toolbox.defaultJSON) return undefined;
    return settings.toolbox.defaultJSON[questionType];
  }
  public static getSubTypePropertyName(questionType: string): string {
    let propertyName = "";
    if (questionType === "text") propertyName = "inputType";
    if (questionType === "rating") propertyName = "rateType";
    return propertyName;
  }
  public get orderedQuestions(): string[] {
    return this._orderedQuestions;
  }
  public set orderedQuestions(questions: string[]) {
    this._orderedQuestions = questions;
    this.reorderItems();
  }
  public copiedItemMaxCount: number = 3;
  private allowExpandMultipleCategoriesValue: boolean = false;
  private keepAllCategoriesExpandedValue: boolean = false;
  @property({ defaultValue: false }) private showCategoryTitlesValue: boolean;
  private dragOrClickHelper: DragOrClickHelper;

  public get toolboxNoResultsFound() { return getLocString("ed.toolboxNoResultsFound"); }

  //koItems = ko.observableArray();
  /**
   * Contains toolbox categories and allows you to modify them.
   *
   * [View Demo](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcategories (linkStyle))
   * @see defineCategories
   * @see showCategoryTitles
   */
  @propertyArray() categories: Array<QuestionToolboxCategory>;
  /**
   * Gets or sets the currently expanded category. Applies only if [`allowExpandMultipleCategories`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#allowExpandMultipleCategories) and [`keepAllCategoriesExpanded`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#keepAllCategoriesExpanded) are `false` and [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) is `true`.
   *
   * Default value: `""`
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
    if (overflowBehavior == "scroll" && this.creator && !this.creator.isTouch ||
      this.creator && this.creator.toolboxLocation === "sidebar") {
      this.isResponsivenessDisabled = true;
      this.raiseUpdate({ updateResponsivenessMode: UpdateResponsivenessMode.Hard });
      return;
    }
    if (this.hasCategories && this.showCategoryTitles) {
      if (isCompact) {
        this.isResponsivenessDisabled = false;
        this.raiseUpdate({ updateResponsivenessMode: UpdateResponsivenessMode.Hard });
      } else {
        this.isResponsivenessDisabled = true;
        this.setActionsMode("large");
      }
      return;
    }
    this.isResponsivenessDisabled = false;
    this.raiseUpdate({ updateResponsivenessMode: UpdateResponsivenessMode.Hard });
  }
  /**
   * Indicates whether the Toolbox is currently in [compact mode](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#forceCompact).
   */
  @property({
    defaultValue: false,
    onSet: (val: boolean, target: QuestionToolbox) => {
      target.updateResponsiveness(val, target.overflowBehavior);
      target.compactAnimation.sync(!(val && !target.isFocused));
    }
  }) isCompact: boolean;

  @property({ defaultValue: false }) isCompactRendered: boolean;
  @property({ defaultValue: false }) isFlyoutToCompactRunning: boolean;

  private getAnimationOptions(): IAnimationConsumer {
    const onBeforeRunAnimation = (el: HTMLElement) => {
      el.style.setProperty("--animation-width", getComputedStyle(el).width);
    };
    return {
      getAnimatedElement: () => {
        return this.rootElement?.querySelector(".svc-toolbox__panel");
      },
      isAnimationEnabled: () => this.animationAllowed,
      getRerenderEvent: () => this.onElementRerendered,
      getLeaveOptions: () => {
        return {
          cssClass: "svc-toolbox__panel--leave",
          onAfterRunAnimation: () => { this.isFlyoutToCompactRunning = false; },
          onBeforeRunAnimation: onBeforeRunAnimation
        };
      },
      getEnterOptions: () => {
        return {
          cssClass: "svc-toolbox__panel--enter",
          onBeforeRunAnimation: onBeforeRunAnimation
        };
      }
    };
  }

  public compactAnimation = new AnimationBoolean(this.getAnimationOptions(), (val: boolean) => {
    this.isCompactRendered = !val;
  }, () => !this.isCompactRendered);

  @property({
    defaultValue: false,
    onSet: (val: boolean, target: QuestionToolbox) => {
      if (target.animationAllowed) target.isFlyoutToCompactRunning = target.isCompact && !val;
      target.compactAnimation.sync(!(target.isCompact && !val));
    }
  }) isFocused: boolean;
  /**
   * Specifies how the Toolbox behaves when it contains more items than can fit on the screen.
   *
   * Possible values:
   *
   * - `"scroll"` (default) - Enables scrolling to help users reach the items that do not fit on the screen.
   * - `"hideInMenu"` - Hides the overflow items in a three-dot menu.
   */
  @property({
    defaultValue: "scroll",
    onSet: (val: overflowBehaviorType, target: QuestionToolbox) => {
      target.updateResponsiveness(target.isCompact, val);
    }
  }) overflowBehavior: overflowBehaviorType;
  /**
   * Specifies whether the Toolbox should be in compact or full mode.
   *
   * Possible values:
   *
   * - `true` - Toolbox is always in compact mode.
   * - `false` - Toolbox is always in full mode.
   * - `undefined` (default) - Toolbox switches between the full and compact modes automatically based on available width.
   *
   * [View Toolbox Customization Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-customization/ (linkStyle))
   * @see isCompact
   */
  @property() forceCompact: boolean;

  /**
   * Specifies whether to display a search field that allows users to find question and panel types within the Toolbox.
   *
   * Default value: `true`
   */
  @property({
    defaultValue: true,
    onSet: (val: boolean, target: QuestionToolbox) => {
      target.searchManager.isVisible = val;
    }
  }) searchEnabled: boolean;

  /**
   * Specifies whether toolbox items support subitems.
   *
   * Default value: `true`
   *
   * [Manage Toolbox Subitems](https://surveyjs.io/survey-creator/documentation/toolbox-customization#manage-toolbox-subitems (linkStyle))
   */
  @property({ defaultValue: true }) showSubitems: boolean;

  public searchManager = new SearchManagerToolbox();
  @property() showPlaceholder: boolean;
  @property({ defaultValue: true }) showSeparators: boolean;

  constructor(
    private supportedQuestions: Array<string> = null,
    public creator: SurveyCreatorModel = null,
    useDefaultCategories = false
  ) {
    super();
    this.subItemsShowDelay = 0;
    this.searchManager.isVisible = this.searchEnabled;
    this.searchManager.toolbox = this;
    this.searchItem = new Action({
      id: "searchItem-id",
      css: "svc-toolbox__tool svc-toolbox__search-button",
      innerCss: "svc-toolbox__item sv-dots__item",
      iconName: "icon-search",
      iconSize: "auto",
      component: "sv-action-bar-item",
      title: surveyLocalization.getString("ed.toolboxSearch"),
      showTitle: false,
      action: () => {
        if (!this.enabled) return;
        (this.rootElement.querySelector("input") as HTMLInputElement).focus();
        this.isFocused = true;
      },
      enabled: this.enabled
    });
    this.updateResponsiveness(this.isCompact, this.overflowBehavior);
    this.createDefaultItems(supportedQuestions, useDefaultCategories);
    this.initDotsItem();
  }

  private initDotsItem() {
    this.dotsItem.innerCss = "svc-toolbox__item svc-toolbox__item--dots sv-dots__item";
    this.dotsItem.css = new ComputedUpdater(() => {
      return new CssClassBuilder()
        .append("svc-toolbox__tool svc-toolbox__tool--dots")
        .append("sv-action--hidden", !this.dotsItem.isVisible)
        .toString();
    }) as any;

    this.dotsItem.popupModel.horizontalPosition = "right";
    this.dotsItem.popupModel.verticalPosition = "top";
    this.dragOrClickHelper = new DragOrClickHelper<IQuestionToolboxItem>((pointerDownEvent, _targets, itemModel) => {
      if (!this.enabled) return;
      const json = this.creator.getJSONForNewElement(itemModel.json);
      this.dotsItem.popupModel.hide();
      this.creator?.onDragDropItemStart();
      this.dragDropHelper.startDragToolboxItem(pointerDownEvent, json, itemModel);
    }, false);
    this.hiddenItemsListModel.onPointerDown = (pointerDownEvent: PointerEvent, item: IQuestionToolboxItem) => {
      if (!this.creator.readOnly && this.enabled) {
        this.dragOrClickHelper.onPointerDown(pointerDownEvent, item);
      }
    };
    this.dotsItem.popupModel.cssClass += " svc-toolbox-popup svc-creator-popup";
    this.dotsItem.data.locOwner = this.creator;
    this.hiddenItemsListModel.cssClasses = listComponentCss;
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
  private onActiveCategoryChanged(newValue: string) {
    const categories: Array<QuestionToolboxCategory> = this.categories;
    //if(!this.allowExpandMultipleCategories) {
    for (var i = 0; i < categories.length; i++) {
      var category = categories[i];
      category.collapsed = category.name !== newValue;
    }
    //}
  }

  public get showSearch() {
    return this.searchEnabled && this.items.length > QuestionToolbox.MINELEMENTCOUNT;
  }

  public get showInSingleCategory() {
    return this.isCompactRendered || this.categories.length == 1 || !this.showCategoryTitles;
  }

  public setRootElement(element: HTMLElement) {
    this._rootElementValue = element;
    this._containerElementValue = element?.querySelector(this.containerSelector);
  }
  public get containerElement() {
    return this._containerElementValue;
  }
  public get rootElement() {
    return this._rootElementValue;
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
      .append("svc-toolbox--no-separators", !this.showSeparators)
      .append("svc-toolbox--flyout-to-compact-running", this.isFlyoutToCompactRunning)
      .append("svc-toolbox--compact", this.isCompactRendered)
      .append("svc-toolbox--flyout", this.isCompact && this.isFocused)
      .append("svc-toolbox--scrollable", this.overflowBehavior == "scroll")
      .append("svc-toolbox--disabled", !this.enabled)
      .toString();
  }
  public setLocation(toolboxLocation: toolboxLocationType) {
    if (toolboxLocation === "sidebar") {
      this.getVisibleActions().forEach((item) => (item.mode = "small"));
    } else {
      this.dotsItem.popupModel.horizontalPosition = this.creator.toolboxLocation == "right" ? "left" : "right";
    }
    this.updateResponsiveness(this.isCompact, this.overflowBehavior);
  }

  public get jsonText() {
    return JSON.stringify(this.actions);
  }
  public set jsonText(value: string) {
    this.actions = (value ? JSON.parse(value) : []).map(action => new QuestionToolboxItem(action));
    this.onItemsChanged();
  }
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
   * An array of toolbox items.
   * @see getItemByName
   * @see addItem
   * @see removeItem
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
  public get copiedItems(): Array<QuestionToolboxItem> {
    const result: QuestionToolboxItem[] = [];
    for (let i: number = 0; i < this.actions.length; i++) {
      if (this.actions[i].isCopied) result.push(this.actions[i]);
    }
    return result;
  }
  public addItems(
    items: Array<IQuestionToolboxItem>,
    clearAll: boolean = false
  ) {
    if (clearAll) {
      this.clearItems();
    }
    for (let i: number = 0; i < items.length; i++) {
      this.actions.push(this.getOrCreateToolboxItem(items[i]));
    }
    this.onItemsChanged();
  }
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
      className: QuestionToolboxItem.getItemClassNames(iconName),
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
  private getOrCreateToolboxItem(item: IQuestionToolboxItem): QuestionToolboxItem {
    if (item instanceof QuestionToolboxItem) {
      item.locTitle.owner = this.creator;
      return item;
    }
    return this.createActionCore(this, item) as QuestionToolboxItem;
  }
  private createSubTypes(parentItem: QuestionToolboxItem): void {
    let property = null;
    const propName = QuestionToolbox.getSubTypePropertyName(parentItem.id);
    if (propName) property = Serializer.findProperty(parentItem.id, propName);
    if (!property || !property.visible) return;

    const newItems: Array<QuestionToolboxItem> = property.choices.map(ch => {
      const newJson = { ...parentItem.json };
      newJson[propName] = ch;
      const newId = parentItem.id != ch ? ch : parentItem.id + "-default";

      const item = new QuestionToolboxItem({
        id: newId,
        name: newId,
        className: QuestionToolboxItem.getItemClassNames() + " svc-toolbox__item-subtype",
        json: newJson,
        iconName: null,
        category: null,
        isCopied: false,
        component: QuestionToolbox.defaultItemComponent,
        propName: propName,
        propValue: ch
      });
      return item;
    });
    if (newItems) {
      parentItem.addSubitems(newItems);
    }
  }
  /**
   * Adds a new item to the Toolbox.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/page-break-and-page-merge/ (linkStyle))
   * @param item A [toolbox item configuration](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem).
   * @param index *(Optional)* A zero-based index at which to insert the item. If you do not specify this parameter, the item is added to the end.
   * @see removeItem
   * @see replaceItem
   * @see items
   */
  public addItem(item: IQuestionToolboxItem, index?: number) {
    const action = this.getOrCreateToolboxItem(item);
    if (index === undefined) {
      this.actions.push(action);
    } else {
      this.actions.splice(index, 0, action);
    }
    this.onItemsChanged();
  }
  protected createActionCore(owner: Base, item: IAction): Action {
    item.iconName = item.iconName || QuestionToolbox.defaultIconName;
    const newItem = new QuestionToolboxItem(item as IQuestionToolboxItem);
    newItem.locTitle.owner = this.creator;
    if (owner === this) {
      this.createSubTypes(newItem);
    }
    return newItem;
  }
  private get dragDropHelper(): DragDropSurveyElements {
    return this.creator.dragDropSurveyElements;
  }
  /**
   * Adds a new toolbox item and deletes an existing item with the same name (if there is any).
   * @param item A [toolbox item configuration](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem).
   * @see addItem
   */
  public replaceItem(item: IQuestionToolboxItem): boolean {
    const index: number = this.indexOf(item.name);
    if (index < 0) return;
    this.actions[index] = this.getOrCreateToolboxItem(item);
    this.onItemsChanged();
    return true;
  }
  /**
   * Removes a [toolbox item](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem) with a specified name.
   * @param name A toolbox item's [`name`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem#name).
   * @returns `true` if the item is successfully deleted or `false` otherwise.
   * @see clearItems
   * @see addItem
   * @see items
   */
  public removeItem(name: string): boolean {
    const index: number = this.indexOf(name);
    if (index < 0) return false;
    this.actions.splice(index, 1);
    this.onItemsChanged();
    return true;
  }
  /**
   * Removes all items from the Toolbox.
   * @see removeItem
   * @see addItem
   * @see items
   */
  public clearItems() {
    this.actions = [];
    this.onItemsChanged();
  }
  public clearCopiedItems() {
    const removedItems: IQuestionToolboxItem[] = this.copiedItems;
    for (let i: number = 0; i < removedItems.length; i++) {
      this.removeItem(removedItems[i].name);
    }
  }
  /**
   * Returns a [toolbox item](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolboxitem) with a specified name.
   *
   * [View Toolbox Customization Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-customization/ (linkStyle))
   * @param name A toolbox item's [`name`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem#name).
   * @returns A toolbox item or `null` if a toolbox item with the specified name isn't found.
   */
  public getItemByName(name: string): QuestionToolboxItem {
    if (!name) return null;
    const index: number = this.indexOf(name);
    return index > -1 ? this.actions[index] : null;
  }
  /**
   * Specifies whether more than one category can be in the expanded state at a time. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) is `true`.
   *
   * If this property is `false`, the currently expanded category collapses when a user expands another category.
   *
   * Default value: `false`
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-categories/ (linkStyle))
   * @see keepAllCategoriesExpanded
   */
  public get allowExpandMultipleCategories(): boolean {
    return this.allowExpandMultipleCategoriesValue;
  }
  public set allowExpandMultipleCategories(val: boolean) {
    this.allowExpandMultipleCategoriesValue = val;
    this.updateCategoriesState();
  }
  /**
   * Specifies whether to expand all categories without the capability to collapse any of them. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) is `true`.
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-categories/ (linkStyle))
   * @see allowExpandMultipleCategories
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
   * Default value: `false`
   *
   * [View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-categories/ (linkStyle))
   *
   * > If this property is disabled, the Toolbox hides the titles but continues to display horizontal lines that divide categories. To remove these lines as well, call the [`removeCategories()`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#removeCategories) method.
   * @see allowExpandMultipleCategories
   * @see keepAllCategoriesExpanded
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
      action.locStrsChanged();
    });
    if (Array.isArray(this.categories)) {
      this.categories.forEach(category => {
        category.locStrsChanged();
      });
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
   * Changes the category of a toolbox item.
   * @param itemName A toolbox item's [`name`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem#name).
   * @param categoryName A new category name. Out-of-the-box category names include `"general"`, `"choice"`, `"text"`, `"containers"`, `"matrix"`, and `"misc"`.
   * @see defineCategories
   */
  public changeCategory(itemName: string, categoryName: string) {
    this.changeCategories([{ name: itemName, category: categoryName }]);
  }
  /**
   * Changes the categories of multiple toolbox items.
   * @param items An array of objects with the following structure: `{ name: "toolboxItemName", category: "newCategoryName" }`.
   * @see defineCategories
   */
  public changeCategories(items: Array<any>) {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
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
    const items = this.getDefaultItems(this.supportedQuestions, false, true, true);
    const itemsHash = {};
    items.forEach(item => {
      item.visible = false;
      itemsHash[item.id] = item;
    });
    if (Array.isArray(this.presetDefaultItems)) {
      this.presetDefaultItems.forEach(item => {
        const action = itemsHash[item.name];
        if (action) {
          for (let key in item) {
            action[key] = item[key];
          }
        } else {
          if (!!item.json) {
            const tItem = new QuestionToolboxItem(<IQuestionToolboxItem>item);
            itemsHash[tItem.id] = tItem;
            items.push(tItem);
          }
        }
      });
    }
    const categoriesTitles: { [key: string]: string } = {};
    const actionList = new Array<IQuestionToolboxItem>();
    categories.forEach(category => {
      if (!!category.category && !!category.title) {
        categoriesTitles[category.category] = category.title;
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
        const item = itemsHash[name];
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
    if (displayMisc) {
      items.forEach(item => {
        if (!item.visible) {
          item.visible = true;
          item.category = "misc";
          actionList.push(item);
        }
      });
    }
    this.setItems(actionList);
    this.onItemsChanged(false, categoriesTitles);
  }

  /**
   * Removes all categories from the Toolbox.
   *
   * [View Toolbox Customization Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-customization/ (linkStyle))
   */
  public removeCategories() {
    const allTypes: string[] = ElementFactory.Instance.getAllToolboxTypes();
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
   * Expands a category with a specified name. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) is `true`.
   *
   * If [`allowExpandMultipleCategories`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#allowExpandMultipleCategories) is `false`, all other categories become collapsed.
   * @param categoryName A category name. Out-of-the-box category names include `"general"`, `"choice"`, `"text"`, `"containers"`, `"matrix"`, and `"misc"`.
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
   * Collapses a category with a specified name. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) and [`allowExpandMultipleCategories`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#allowExpandMultipleCategories) are `true`.
   * @param categoryName A category name. Out-of-the-box category names include `"general"`, `"choice"`, `"text"`, `"containers"`, `"matrix"`, and `"misc"`.
   * @see expandCategory
   */
  public collapseCategory(categoryName: string) {
    if (!this.allowExpandMultipleCategories) return;
    var category = this.getCategoryByName(categoryName);
    if (category) {
      category.collapsed = true;
    }
  }
  /**
   * Expands all categories. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) and [`allowExpandMultipleCategories`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#allowExpandMultipleCategories) are `true`.
   * @see collapseAllCategories
   */
  public expandAllCategories() {
    this.expandCollapseAllCategories(false);
  }
  /**
   * Collapses all categories. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) and [`allowExpandMultipleCategories`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#allowExpandMultipleCategories) are `true`.
   * @see expandAllCategories
   */
  public collapseAllCategories() {
    this.expandCollapseAllCategories(true);
  }
  @property({
    defaultValue: true,
    onSet: (val: boolean, target: QuestionToolbox) => {
      target.items.forEach(i => i.enabled = val);
      target.searchManager.enabled = val;
      target.searchItem.enabled = val;
    }
  }) enabled: boolean;
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
  protected onItemsChanged(changeActions: boolean = true, categoriesTitles?: { [key: string]: string }) {
    var categories = new Array<QuestionToolboxCategory>();
    var categoriesHash = {};
    var prevActiveCategory = this.activeCategory;
    for (let i = 0; i < this.actions.length; i++) {
      const item = this.actions[i];
      item.innerItem.action = () => {
        this.creator.clickToolboxItem((<any>item).json);
      };
      if (item.visible === false) continue;
      const categoryName = item.category ? item.category : "general";
      if (!categoriesHash[categoryName]) {
        const category = this.createCategory();
        category.name = categoryName;
        const categoryTitle = categoriesTitles ? categoriesTitles[categoryName] : undefined;
        if (categoryTitle) {
          category.title = categoryTitle;
        }
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
    if (changeActions) {
      let newItems = [];
      this.categories.forEach((cat) => {
        newItems = newItems.concat(cat.items);
      });
      this.actions = newItems;
    }
    this.hasCategories = categories.length > 1;
    //this.updateCategoriesState();
    this.updateItemSeparators();
    this.updateResponsiveness(this.isCompact, this.overflowBehavior);
  }
  protected createCategory(): QuestionToolboxCategory {
    return new QuestionToolboxCategory(this);
  }
  protected getRenderedActions(): Array<QuestionToolboxItem> {
    const actions = this.actions;
    if (actions.length === 1 && !!actions[0].iconName)
      return actions;
    return actions.concat([<QuestionToolboxItem>this.dotsItem]);
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
    supportedQuestions = supportedQuestions || this.supportedQuestions;
    this.clearItems();
    this.getDefaultItems(supportedQuestions, useDefaultCategories, true, true).forEach(item => this.addToolBoxItem(item, this.actions));
    this.onItemsChanged();
  }
  public getDefaultItems(supportedQuestions: Array<string>, useDefaultCategories: boolean,
    includeCustomWidgets: boolean, includeComponents: boolean): Array<QuestionToolboxItem> {
    let res = this.getDefaultQuestionItems(supportedQuestions, useDefaultCategories);
    if (includeCustomWidgets) {
      res = res.concat(this.getRegisterCustomWidgets());
    }
    if (includeComponents) {
      res = res.concat(this.getRegisterComponentQuestions());
    }
    return res;
  }
  private actionsHash: { [index: string]: QuestionToolboxItem };
  protected patchAction(action: QuestionToolboxItem) {
    super.patchAction(action);
    this.actionsHash = undefined;
  }
  public getActionById(name : string): QuestionToolboxItem {
    if (!this.actionsHash) {
      this.actionsHash = {};
    }
    let res = this.actionsHash[name];
    if (!res) {
      res = super.getActionById(name);
      this.actionsHash[name] = res;
    }
    return res;
  }
  private getDefaultQuestionItems(supportedQuestions: Array<string>, useDefaultCategories: boolean): Array<QuestionToolboxItem> {
    const res = [];
    const questions = this.getQuestionTypes(supportedQuestions);
    const defaultCategories = useDefaultCategories ? this.getDefaultQuestionCategories() : {};

    for (var i = 0; i < questions.length; i++) {
      const name = questions[i];
      let question = ElementFactory.Instance.createElement(name, "q1");
      if (!question) {
        question = Serializer.createClass(name);
      }
      const json = this.getQuestionJSON(question);
      delete json.name;
      const iconName = "icon-" + name;
      const item: IQuestionToolboxItem = {
        id: name,
        name: name,
        iconName: iconName,
        className: QuestionToolboxItem.getItemClassNames(iconName),
        json: json,
        isCopied: false,
        category: (defaultCategories[name] || "")
      };
      res.push(this.getOrCreateToolboxItem(item));
    }
    return res;
  }
  private getRegisterComponentQuestions(): Array<QuestionToolboxItem> {
    const res = [];
    ComponentCollection.Instance.items.forEach(item => {
      const action = this.createToolboxItemFromJSON(item.json);
      if (!!action) {
        res.push(action);
      }
    });
    return res;
  }
  private getRegisterCustomWidgets(): Array<QuestionToolboxItem> {
    const res = [];
    CustomWidgetCollection.Instance.widgets.forEach(widget => {
      if (widget.canShowInToolbox) {
        const action = this.createToolboxItemFromJSON(widget.widgetJson);
        if (!!action) {
          res.push(action);
        }
      }
    });
    return res;
  }
  private addToolBoxItem(action: QuestionToolboxItem, actions: QuestionToolboxItem[]): void {
    if (!action) return;
    const existingAction = this.getActionByIdFromArray(action.id, actions);
    if (!!existingAction) {
      actions.splice(actions.indexOf(existingAction), 1, action);
    } else {
      const index = Array.isArray(this.supportedQuestions) ? this.supportedQuestions.indexOf(action.id) : -1;
      if (index > -1) {
        actions.splice(index, 0, action);
      } else {
        actions.push(action);
      }
    }
  }
  private getActionByIdFromArray(id: string, actions: QuestionToolboxItem[]): QuestionToolboxItem {
    for (let i = 0; i < actions.length; i++) {
      if (actions[i].id === id) return actions[i];
    }
    return undefined;
  }

  private createToolboxItemFromJSON(json: any): QuestionToolboxItem {
    if (json.showInToolbox === false || json.internal === true || !json.name) return undefined;
    const iconName: string = json.iconName ? json.iconName : QuestionToolbox.defaultIconName;
    let title: string = typeof json.title === "string" ? json.title : undefined;
    var elementJson = json.defaultJSON ? JSON.parse(JSON.stringify(json.defaultJSON)) : {};
    if (!elementJson.type) {
      elementJson.type = json.name;
    }
    delete elementJson.name;
    var category = json.category ? json.category : "";
    const titles = typeof json.title === "object" ? json.title : undefined;
    if (!!titles) {
      title = undefined;
    }
    const item: IQuestionToolboxItem = <any>new Action(<any>{
      id: json.name,
      name: json.name,
      iconName: iconName,
      titles: titles,
      title: title,
      tooltip: title,
      className: QuestionToolboxItem.getItemClassNames(iconName),
      json: elementJson,
      isCopied: false,
      category: category
    });
    const res = this.getOrCreateToolboxItem(item);
    return res;
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
    const allTypes: string[] = ElementFactory.Instance.getAllToolboxTypes();
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
        allTypes.indexOf(name) > -1 &&
        !this.isHiddenCustomWidget(name)
      )
        questions.push(name);
    }
    return questions;
  }
  public createResponsivityManager(container: HTMLDivElement): VerticalResponsivityManager {
    return new VerticalResponsivityManager(container, this);
  }
  public afterRender(container: HTMLDivElement) {
    this.setRootElement(container);
    this.initResponsivityManager(this.containerElement as HTMLDivElement);
  }
  public beforeDestroy() {
    this.setRootElement(undefined);
    this.resetResponsivityManager();
  }
  //public dispose(): void { } Don't we need to dispose toolbox?
}
