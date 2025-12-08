import {
  SurveyElement,
  SurveyTemplateRendererTemplateData,
  property,
  QuestionHtmlModel,
  PanelModelBase,
  Action,
  Question,
  ItemValue,
  Serializer,
  IAction,
  ComputedUpdater,
  DragOrClickHelper,
  QuestionSelectBase,
  createDropdownActionModel,
  CssClassBuilder,
  QuestionPanelDynamicModel,
  ListModel,
  Helpers,
  PanelModel,
  classesToSelector,
  QuestionFactory,
  PopupModel,
  QuestionCompositeModel
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { editorLocalization, getLocString } from "../editorLocalization";
import { QuestionConverter } from "../questionconverter";
import { IPortableEvent } from "../utils/events";
import { SurveyElementActionContainer } from "./action-container-view-model";
import { SurveyElementAdornerBase } from "./survey-element-adorner-base";
import "./question.scss";
import { settings } from "../creator-settings";
import { StringItemsNavigatorBase } from "./string-editor";
import { DragDropSurveyElements } from "../dragdrop-survey-elements";
import { DropIndicatorPosition } from "../drag-drop-enums";
import { QuestionToolbox, QuestionToolboxItem } from "../toolbox";
import { listComponentCss } from "./list-theme";
import { SurveyHelper } from "../survey-helper";

export interface QuestionBannerParams {
  text: string;
  actionText: string;
  onClick: () => void;
}

export class QuestionAdornerViewModel extends SurveyElementAdornerBase {
  @property({ defaultValue: "" }) _currentAddQuestionType: string;
  get currentAddQuestionType(): string {
    return this._currentAddQuestionType;
  }
  set currentAddQuestionType(val: string) {
    if (!this.creator || this.creator.rememberLastQuestionType) {
      this._currentAddQuestionType = val;
    }
  }

  placeholderComponent: string;
  placeholderComponentData: any;

  private dragOrClickHelper: DragOrClickHelper;
  constructor(
    creator: SurveyCreatorModel,
    surveyElement: SurveyElement,
    public templateData: SurveyTemplateRendererTemplateData
  ) {
    super(creator, surveyElement);
    this.checkActionProperties();
    this.dragOrClickHelper = new DragOrClickHelper(this.startDragSurveyElement);
    StringItemsNavigatorBase.setQuestion(this);
  }
  protected onElementTypeRestrictionChanged(elType: string): void {
    super.onElementTypeRestrictionChanged(elType);
    if (this.currentAddQuestionType === elType) {
      this.currentAddQuestionType = "";
    }
  }
  protected canSelectElement(): boolean {
    return super.canSelectElement() && this.surveyElement.isInteractiveDesignElement;
  }
  select(model: QuestionAdornerViewModel, event: IPortableEvent) {
    if (!model.canSelectElement()) return;
    const creator = model.creator;
    const selEl = model.surveyElement;
    const el: any = document?.activeElement;
    if (creator.selectedElement !== selEl && !!el && !!el.blur && el.tagName.toLocaleLowerCase() === "input") {
      el.blur();
    }
    event.stopPropagation();
    event.cancelBubble = true;
    creator.selectElement(selEl, undefined, false);
    return true;
  }

  rootCss() {
    const isStartWithNewLine = this.surveyElement.isQuestion && !(<Question>this.surveyElement).startWithNewLine;
    return new CssClassBuilder()
      .append(super.getCss())
      .append("svc-question__adorner")
      .append("svc-question__adorner--selected", !!this.creator.isElementSelected(this.surveyElement))
      .append("svc-question__adorner--collapsed", this.renderedCollapsed)
      .append("svc-question__adorner--start-with-new-line", isStartWithNewLine)
      .append("svc-question__adorner--collapse-" + this.creator.expandCollapseButtonVisibility, true).toString();
  }

  css() {
    const isInsideCollapsed = this.dropIndicatorPosition === DropIndicatorPosition.Inside && this.collapsed;

    if (!this.surveyElement.isInteractiveDesignElement) return "";

    if (isInsideCollapsed) {
      this.dragIn();
    } else {
      this.dragOut();
    }

    let result: string = new CssClassBuilder()
      .append("svc-question__content")
      .append("svc-question__content--composite-question", this.surveyElement instanceof QuestionCompositeModel)
      .append("svc-question__content--" + this.surveyElement.getType(), typeof this.surveyElement.getType === "function")
      .append("svc-question__content--selected", !!this.creator.isElementSelected(this.surveyElement))
      .append("svc-question__content--empty", this.isEmptyElement)
      .append("svc-question__content--empty-template", this.isEmptyTemplate)
      .append("svc-question__content--collapsed", this.renderedCollapsed)
      .append("svc-question__content--title-hidden", !this.surveyElement.hasTitle || (!this.surveyElement.isPanel && (this.surveyElement as Question).getTitleLocation() === "hidden"))
      .append("svc-question__content--title-bottom", !!(this.surveyElement as Question).hasTitleOnBottom)
      .append("svc-question__content--dragged", this.isBeingDragged)
      .append("svc-question__content--collapsed-drag-over-inside", isInsideCollapsed)
      .append("svc-question__content--drag-over-inside", this.dropIndicatorPosition === DropIndicatorPosition.Inside && !this.collapsed)
      .append("svc-question__content--drag-over-top", this.dropIndicatorPosition === DropIndicatorPosition.Top)
      .append("svc-question__content--drag-over-bottom", this.dropIndicatorPosition === DropIndicatorPosition.Bottom)
      .append("svc-question__content--drag-over-right", this.dropIndicatorPosition === DropIndicatorPosition.Right)
      .append("svc-question__content--drag-over-left", this.dropIndicatorPosition === DropIndicatorPosition.Left)
      .toString();

    if (!isInsideCollapsed && this.creator) {
      result = this.creator.getElementAddornerCssCallback(this.surveyElement, result);
    }
    return result;
  }

  private get isTitleLeft() {
    return (!this.surveyElement.isPanel && (this.surveyElement as Question).getTitleLocation() === "left");
  }
  protected getAnimatedElement() {
    const cssClasses = this.surveyElement.isPanel ? this.surveyElement.cssClasses.panel : this.surveyElement.cssClasses;
    let cssContent = cssClasses.content;
    if (this.surveyElement.isDescendantOf("rating")) {
      cssContent = "svc-rating-question-content";
    }
    if (this.isTitleLeft) {
      return this.rootElement?.querySelector(`:scope ${classesToSelector((this.surveyElement as Question).getRootCss())}`);
    }
    if (cssContent) {
      return this.rootElement?.querySelector(`:scope ${classesToSelector(cssContent)}`) as HTMLElement;
    }
    return null;
  }

  protected getInnerAnimatedElements(): Array<HTMLElement> {
    const cssRoot = this.surveyElement.isPanel ? (this.surveyElement as PanelModel).getContainerCss() : (this.surveyElement as Question).getRootCss();
    const cssDescription = (this.surveyElement as unknown as Question | PanelModel).cssDescription;
    const selectorArray = [
      `:scope > .svc-question__content > *:not(.svc-question__drag-area):not(${classesToSelector(cssRoot)})`,
    ];
    if (!this.isTitleLeft && cssDescription) selectorArray.push(`:scope ${classesToSelector(cssDescription)}`);
    const res = [].slice.call(this.rootElement?.querySelectorAll(selectorArray.join(",")));
    res.push(this.rootElement);
    return res;
  }

  protected expandWithDragIn() {
    super.expandWithDragIn();
    this.dropIndicatorPosition = null;
    this.creator.dragDropSurveyElements.dropTarget = null;
  }
  public get isBannerShowing(): boolean {
    return this.isUsingCarryForward || this.isUsingRestfull || this.isMessagePanelVisible;
  }
  private get isUsingCarryForward(): boolean {
    return (<any>this.element)?.isUsingCarryForward;
  }
  private get isUsingRestfull(): boolean {
    return (<any>this.element)?.isUsingRestful;
  }
  private get isMessagePanelVisible(): boolean {
    return (this.element)?.getPropertyValue("isMessagePanelVisible");
  }
  get cssCollapsedHiddenHeader(): string {
    const css = new CssClassBuilder()
      .append((this.element as PanelModel | Question).cssHeader)
      .append("svc-element__header--hidden")
      .append("svc-element__header--lazy", !this.needToRenderContent)
      .toString();
    return css;
  }
  get cssCollapsedHiddenTitle(): string {
    return this.element.cssTitle + " svc-element__title--hidden";
  }
  public createBannerParams(): QuestionBannerParams {
    return this.createCarryForwardParams() || this.createUsingRestfulParams() || this.createCustomMessagePanel();
  }
  private createCarryForwardParams(): QuestionBannerParams {
    if (!this.isUsingCarryForward) return null;
    const name = (<any>this.element)?.choicesFromQuestion;
    if (!name) return null;
    const question = this.creator.survey.getQuestionByName(name);
    if (!question) return null;
    return {
      actionText: SurveyHelper.getObjectName(question, this.creator.useElementTitles),
      text: this.creator.getLocString("ed.carryForwardChoicesCopied"),
      onClick: () => { this.creator.selectElement(question); }
    };
  }
  private createUsingRestfulParams(): QuestionBannerParams {
    if (!this.isUsingRestfull) return null;
    return {
      actionText: this.creator.getLocString("ed.choicesLoadedFromWebLinkText"),
      text: this.creator.getLocString("ed.choicesLoadedFromWebText"),
      onClick: () => { this.creator.selectElement(this.element, "choicesByUrl"); }
    };
  }
  private createCustomMessagePanel(): QuestionBannerParams {
    if (!this.isMessagePanelVisible) return null;
    const res: any = {
      question: this.element,
      actionText: "",
      messageText: "",
      onClick: () => { }
    };
    if (this.creator) {
      this.creator.onCreateCustomMessagePanel.fire(this.creator, res);
    }
    res.text = res.messageText;
    return res;
  }
  protected detachElement(surveyElement: SurveyElement): void {
    if (surveyElement) {
      if (this.surveyElement instanceof QuestionHtmlModel) {
        surveyElement.unRegisterFunctionOnPropertyValueChanged("html", "isEmptyAdorner");
      }
      if (this.surveyElement instanceof PanelModelBase) {
        surveyElement.unRegisterFunctionOnPropertiesValueChanged(["rows", "elements"], "isEmptyAdorner");
      }
      surveyElement.unRegisterFunctionOnPropertyValueChanged("isRequired", "isRequiredAdorner");
      surveyElement.unRegisterFunctionOnPropertiesValueChanged(["inputType", "rateType"], "inputTypeAdorner");
      if (!!surveyElement["setCanShowOptionItemCallback"]) {
        (<any>surveyElement).setCanShowOptionItemCallback(undefined);
      }
    }
    this.resetPropertyValue("isEmptyElement");
    super.detachElement(this.element);
  }
  protected attachElement(surveyElement: SurveyElement): void {
    super.attachElement(surveyElement);
    if (surveyElement) {
      if (
        surveyElement.isQuestion &&
        !!surveyElement["setCanShowOptionItemCallback"]
      ) {
        (<any>surveyElement).setCanShowOptionItemCallback(
          (item: ItemValue): boolean => {
            if (this.creator.readOnly) return false;
            if (item !== (<QuestionSelectBase>this.surveyElement).newItem) return true;
            return (
              this.creator.maxChoices < 1 || surveyElement["choices"].length < this.creator.maxChoices
            );
          }
        );
      }
      if (this.surveyElement instanceof QuestionHtmlModel) {
        surveyElement.registerFunctionOnPropertyValueChanged("html", (newValue: any) => {
          this.updateIsEmptyElement();
        }, "isEmptyAdorner");
      }
      if (this.surveyElement instanceof PanelModelBase) {
        surveyElement.registerFunctionOnPropertiesValueChanged(["rows", "elements"], (newValue: any) => {
          this.updateIsEmptyElement();
        }, "isEmptyAdorner");
      }
      surveyElement.registerFunctionOnPropertyValueChanged("isRequired", (newValue: any) => {
        if (this.isActionContainerCreated) {
          const requiredAction = this.actionContainer.getActionById("isrequired");
          this.updateRequiredAction(requiredAction);
        }
      }, "isRequiredAdorner");
    }
  }
  get isDraggable() {
    return true;
  }
  get hoverDelay(): number {
    if (this.creator["animationEnabled"]) {
      return this.creator.pageHoverDelay;
    }
    return 0;
  }
  public hover(event: MouseEvent, element: HTMLElement | any) {
    if (!this.surveyElement.isInteractiveDesignElement) {
      return;
    }
    super.hover(event, element);
  }
  protected createActionContainer(): SurveyElementActionContainer {
    const actionContainer = super.createActionContainer();
    const defaultCssClasses = {
      root: "svc-survey-element-toolbar sv-action-bar",
      item: "svc-survey-element-toolbar__item",
      itemWithTitle: "svc-survey-element-toolbar__item--with-text",
      itemAsIcon: "svc-survey-element-toolbar__item--icon",
      itemActive: "svc-survey-element-toolbar__item--active",
      itemPressed: "svc-survey-element-toolbar__item--pressed",
      itemIcon: "svc-survey-element-toolbar-item__icon",
      itemTitle: "svc-survey-element-toolbar-item__title",
      itemTitleWithIcon: "svc-survey-element-toolbar-item__title--with-icon",
    };

    actionContainer.sizeMode = "small";
    actionContainer.cssClasses = defaultCssClasses;
    (<SurveyElementActionContainer>actionContainer).dotsItem.css += " svc-survey-element-toolbar__dots-item";
    return actionContainer;
  }
  protected updateActionsPropertiesCore(): void {
    super.updateActionsPropertiesCore();
    if (this.isActionContainerCreated) {
      this.updateActionsLocations();
    }
  }
  protected updateActionsVisibility(isTop: boolean): void {
    super.updateActionsVisibility(isTop);
    if (!isTop) {
      this.updateActionsLocations();
    }
  }
  private updateActionsLocations(): void {
    const actions = this.actionContainer.getVisibleActions();
    let switchToStartLocation = false;
    for (var i = actions.length - 1; i >= 0; i--) {
      if (actions[i].id === "convertTo" || actions[i].id === "convertInputType") {
        actions[i].css = "svc-dropdown-action--convertTo";
        if (!switchToStartLocation) {
          actions[i].css += " svc-dropdown-action--convertTo-last";
        }
        switchToStartLocation = true;
      }
      if (!actions[i].innerItem.location) actions[i].innerItem.location = switchToStartLocation ? "start" : "end";
    }
  }
  protected updateElementAllowOptions(options: any, operationsAllow: boolean) {
    super.updateElementAllowOptions(options, operationsAllow);
    this.updateActionVisibility("convertTo", operationsAllow && options.allowChangeType);
    this.updateActionVisibilityByProp("isrequired", "isRequired", operationsAllow && options.allowChangeRequired);
    this.updateActionVisibilityByProp("convertInputType", "inputType", options.allowChangeInputType);
    this.updateActionVisibilityByProp("convertInputType", "rateType", options.allowChangeInputType);
  }
  private updateActionVisibilityByProp(actionName: string, propName: string, allow: boolean): void {
    const prop = Serializer.findProperty(this.surveyElement.getType(), propName);
    if (!prop) return;
    const isPropReadOnly = this.creator.onIsPropertyReadOnlyCallback(this.surveyElement, prop, prop.readOnly, null, null);
    this.updateActionVisibility(actionName, allow && !isPropReadOnly);
  }
  get isEmptyElement(): boolean {
    return this.getPropertyValue("isEmptyElement", undefined, () => this.getIsEmptyElement());
  }
  set isEmptyElement(val: boolean) {
    this.setPropertyValue("isEmptyElement", val);
  }
  protected getIsEmptyElement(): boolean {
    if (this.surveyElement instanceof QuestionHtmlModel) {
      return !this.surveyElement.html;
    }
    if (this.surveyElement instanceof PanelModelBase) {
      const panel = this.surveyElement as any as PanelModelBase;
      return !panel.rows || panel.rows.length <= 0 || panel.elements.length === 0;
    }
    return false;
  }
  protected updateIsEmptyElement() {
    this.isEmptyElement = this.getIsEmptyElement();
  }
  public get isEmptyTemplate(): boolean {
    if (this.surveyElement instanceof QuestionPanelDynamicModel) {
      return this.surveyElement.templateElements.length == 0;
    }
    return false;
  }

  public get showHiddenTitle() {
    return (!this.element.hasTitle || this.isTitleLeft || !this.needToRenderContent) && this.element.isInteractiveDesignElement;
  }
  public get placeholderText(): string {
    if (this.surveyElement instanceof QuestionHtmlModel) {
      return getLocString("ed.htmlPlaceHolder");
    }
    if (this.creator.isMobileView)
      return getLocString("ed.panelPlaceHolderMobile");
    return getLocString("ed.panelPlaceHolder");
  }

  private get dragDropHelper(): DragDropSurveyElements {
    return this.creator.dragDropSurveyElements;
  }

  onPointerDown(pointerDownEvent: PointerEvent) {
    this.dragOrClickHelper.onPointerDown(pointerDownEvent);
  }

  startDragSurveyElement = (event: PointerEvent) => {
    const element = <any>this.surveyElement;
    const isElementSelected = this.creator.selectedElement === element;
    this.dragDropHelper.startDragSurveyElement(event, element, isElementSelected);
    return true;
  };

  private getConvertToTypes(): Array<QuestionToolboxItem> {
    const availableItems = this.creator.getAvailableToolboxItems(this.element, false);
    const itemNames = [];
    availableItems.forEach(item => {
      if (itemNames.indexOf(item.typeName) == -1) {
        itemNames.push(item.typeName);
      }
    });
    const convertClasses: string[] = QuestionConverter.getConvertToClasses(this.currentType, itemNames, true);

    const res = [];
    convertClasses.forEach((className: string) => {
      const items = this.creator.toolbox.items.filter(item => item.name == className);
      if (Array.isArray(items) && items.length > 0) {
        const item = items[0];
        res.push(item);
      }
    });
    return res;
  }

  private buildDefaultJsonMap(availableItems: QuestionToolboxItem[]) {
    const defaultJsons = {};
    function addItemJson(toolboxItem: QuestionToolboxItem) {
      const type = toolboxItem.json?.type || toolboxItem.id;
      if (toolboxItem.json) {
        const json = toolboxItem.json;
        if (!defaultJsons[type]) defaultJsons[type] = [];
        defaultJsons[type].push(json);
      }
    }
    availableItems.forEach((toolboxItem: QuestionToolboxItem) => {
      addItemJson(toolboxItem);
      (toolboxItem.items || []).forEach((toolboxSubitem: QuestionToolboxItem) => {
        addItemJson(toolboxSubitem);
      });
    });
    return defaultJsons;
  }
  private convertQuestion(questionType: string, json: any, defaultJsons: any) {
    const type = json?.type || questionType;
    let newJson = {};
    (defaultJsons[type] || []).forEach((djson) => {
      if (this.jsonIsCorresponded(djson)) {
        newJson = { ...json };
        Object.keys(djson).forEach(p => {
          if (p != "type" && !newJson.hasOwnProperty(p)) newJson[p] = undefined;
        });
      }
    });
    this.creator.convertCurrentQuestion(type, newJson);
  }
  public getConvertToTypesActions(): Array<IAction> {
    const availableItems = this.getConvertToTypes();
    const defaultJsons = this.buildDefaultJsonMap(availableItems);
    const newItems = [];
    let lastItem = null;
    availableItems.forEach((item: QuestionToolboxItem) => {
      const needSeparator = lastItem && item.category != lastItem.category;
      const action = this.creator.createIActionBarItemByClass(item, needSeparator, (questionType: string, json?: any) => {
        this.convertQuestion(questionType, json, defaultJsons);
      });
      lastItem = item;
      newItems.push(action);
    });
    return newItems;
  }
  private get currentType(): string {
    return this.surveyElement.getType();
  }

  private createConvertToAction() {
    // const actions = this.getConvertToTypesActions();
    // const allowChangeType: boolean = actions.length > 0;
    // const selItem = this.getSelectedItem(actions, this.currentType);
    // let actionTitle = !!selItem ? selItem.title : editorLocalization.getString("qt." + this.currentType);
    const availableItems = this.creator.getAvailableToolboxItems(this.element, false);
    const currItem = availableItems.filter(item => item.name === this.currentType)[0];

    const actionData: IAction = {
      id: "convertTo",
      css: "sv-action--convertTo",
      enabled: true,
      visibleIndex: 0,
      title: !!currItem ? currItem.title : editorLocalization.getString("qt." + this.currentType),
      iconName: "icon-chevron_16x16",
      iconSize: "auto"
    };
    const newAction = this.createDropdownModel({
      actionData: actionData,
      items: [],
      updateListModel: (listModel: ListModel) => {
        this.updateQuestionTypeOrSubtypeListModel(listModel, false);
      }
    });
    newAction.iconName = <any>new ComputedUpdater(() => {
      if (newAction.mode === "small") {
        return this.creator.toolbox.getItemByName(this.element.getType())?.iconName;
      }
      return "icon-chevron_16x16";
    });
    newAction.disableHide = true;
    return newAction;
  }
  public static checkForNeedDefaultSubitems(items: QuestionToolboxItem[]) {
    items.filter(i => i.needDefaultSubitem === undefined).forEach((item: QuestionToolboxItem) => {
      item.needDefaultSubitem = false;
      if (item.items?.length > 0) {
        item.needDefaultSubitem = true;
        item.items.forEach(subitem => {
          const question = QuestionFactory.Instance.createQuestion(item.json.type, "question");
          if (QuestionAdornerViewModel.jsonsAreCompatible(question, subitem.json)) item.needDefaultSubitem = false;
        });
      }
    });
  }

  private static jsonsAreCompatible(element: SurveyElement, json: any): boolean {
    let question = element;
    const keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
      const p = keys[i];
      if (p === "type") continue;
      let propertyValue = question.getPropertyValue(p);
      if (propertyValue === undefined) {
        propertyValue = p === "type" ? question.getType() : question.getDefaultPropertyValue(p);
      }
      if (!Helpers.isTwoValueEquals(json[p], propertyValue)) return false;
    }
    return true;
  }
  private jsonIsCorresponded(json: any) {
    return QuestionAdornerViewModel.jsonsAreCompatible(this.element, json);
  }

  private toolboxItemIsCorresponded(toolboxItem: QuestionToolboxItem, someItemSelectedAlready: boolean) {
    const elementType = this.element.getType();
    const json = toolboxItem.json;
    if (toolboxItem.id == elementType || toolboxItem.json.type == elementType) {
      return !someItemSelectedAlready || this.jsonIsCorresponded(json);
    }
  }

  private cleanDefaultsFromJson(type: any, toolboxItemJson: any) {
    const question = QuestionFactory.Instance.createQuestion(type, "question");
    if (!question) return toolboxItemJson;
    question.fromJSON(toolboxItemJson);
    const json = question.toJSON();
    json["type"] = type;
    delete json.name;
    return json;
  }
  protected allowExpandCollapseByDblClick(element: any) {
    return element.classList.contains("svc-question__content") ||
      element.closest(".svc-question__drag-area") && !element.closest(".svc-question__top-actions") ||
      element.closest(".sd-element__header") && !element.closest(".svc-string-editor");
  }

  protected updateQuestionTypeOrSubtypeListModel(listModel: ListModel, subtypeOnly: boolean) {
    const availableItems = this.getConvertToTypes();
    QuestionAdornerViewModel.checkForNeedDefaultSubitems(availableItems);
    const defaultJsons = this.buildDefaultJsonMap(availableItems);
    const newItems: Array<IAction> = [];
    let lastItem: QuestionToolboxItem;
    let selectedAction: IAction;
    let selectedSubaction: IAction = undefined;
    let selectedSubactions = undefined;

    const toolboxItemToAction = (item, needSeparator = false) => {
      return this.creator.createIActionBarItemByClass(item, needSeparator, (questionType, json) => { this.convertQuestion(questionType, json, defaultJsons); });
    };

    availableItems.forEach((item: QuestionToolboxItem) => {
      const needSeparator = lastItem && item.category != lastItem.category;
      const action = toolboxItemToAction(item, needSeparator);
      if (this.toolboxItemIsCorresponded(item, !!selectedAction)) {
        selectedAction = action;
        if (item.items) {
          selectedSubactions = item.items.map(subitem => toolboxItemToAction(subitem));
        }
      }
      if (item.items?.length > 0 && this.creator.toolbox.showSubitems) {
        const subactions = [];
        let selectedSubactionLocal: IAction = undefined;
        item.items.forEach(subitem => {
          const subaction = toolboxItemToAction(subitem,);
          if (this.toolboxItemIsCorresponded(subitem, !!selectedAction)) selectedSubactionLocal = subitem;
          subactions.push(subaction);
        });
        if (item.needDefaultSubitem && subactions.length > 0) {
          const defaultSubaction = toolboxItemToAction(item);
          defaultSubaction.id = action.id + "-default";
          defaultSubaction.iconName = undefined;
          defaultSubaction.markerIconName = undefined;
          defaultSubaction.items = [];
          defaultSubaction.component = undefined;
          subactions.unshift(defaultSubaction);
          if (selectedAction == action && !selectedSubactionLocal) selectedSubactionLocal = defaultSubaction;
        }
        action.setSubItems({ items: subactions, cssClasses: listComponentCss });
        if (selectedSubactionLocal) {
          selectedAction = action;
          selectedSubaction = selectedSubactionLocal;
          selectedSubactions = subactions;
        }
      }
      lastItem = item;
      newItems.push(action);
    });

    if (subtypeOnly) {
      if (selectedSubactions) {
        listModel.setItems(selectedSubactions);
        listModel.selectedItem = selectedSubaction;
        return !!selectedSubactions;
      }
    } else {
      const _listModel = selectedAction?.popupModel?.contentComponentData.model;
      if (_listModel) _listModel.selectedItem = selectedSubaction;
      listModel.setItems(newItems);
      listModel.selectedItem = selectedAction;
    }
  }

  private createConvertInputType() {
    if (!this.surveyElement || this.surveyElement.isPanel) {
      return null;
    }
    const listModel = new ListModel({
      items: [],
      cssClasses: listComponentCss,
    });
    this.updateQuestionTypeOrSubtypeListModel(listModel, true);
    const propName = QuestionToolbox.getSubTypePropertyName(this.surveyElement.getType());
    if (!listModel.selectedItem && !propName) return null;
    const actionData: IAction = {
      id: "convertInputType",
      visibleIndex: 1,
      title: listModel.selectedItem?.title || editorLocalization.getPropertyValueInEditor(propName, this.surveyElement.getPropertyValue(propName)) || "SUBTYPE",
      disableShrink: true,
      iconName: "icon-chevron_16x16"
    };
    const newAction = this.createDropdownModel({
      actionData: actionData,
      items: [],
      updateListModel: (listModel: ListModel) => {
        this.updateQuestionTypeOrSubtypeListModel(listModel, true);
      }
    });
    this.surveyElement.registerFunctionOnPropertiesValueChanged(
      [propName],
      (newValue) => {
        const popup = newAction.popupModel;
        const list = popup.contentComponentData.model;
        this.updateQuestionTypeOrSubtypeListModel(list, true);
        newAction.title = list.selectedItem?.title || editorLocalization.getPropertyValueInEditor(propName, newValue) || "SUBTYPE";
      },
      "inputTypeAdorner"
    );
    return newAction;
  }
  private getSelectedItem(actions: IAction[], id: string): IAction {
    const selectedItems = actions.filter(item => item.id === id);
    return selectedItems.length > 0 ? selectedItems[0] : undefined;
  }
  private createDropdownModel(options: { actionData: IAction, items: Array<IAction>, updateListModel: (listModel: ListModel) => void }): Action {
    const newAction = createDropdownActionModel({
      id: options.actionData.id,
      iconName: options.actionData.iconName,
      iconSize: "auto",
      title: options.actionData.title,
      enabled: options.actionData.enabled,
      visibleIndex: options.actionData.visibleIndex,
      disableShrink: options.actionData.disableShrink,
      location: "start",
      action: (newType) => {
      },
    }, {
      items: [],
      allowSelection: true,
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
      cssClasses: listComponentCss,
    }, this.creator);
    newAction.popupModel.onVisibilityChanged.add((_: PopupModel, opt: { model: PopupModel, isVisible: boolean }) => {
      if (opt.isVisible) {
        const listModel = newAction.popupModel.contentComponentData.model;
        options.updateListModel(listModel);
        listModel.flushUpdates();
        newAction.popupModel.isFocusedContent = listModel.showFilter;
      }
    });
    const listModel = newAction.popupModel.contentComponentData.model;
    // options.updateListModel(listModel);
    if (listModel.selectedItem) newAction.title = listModel.selectedItem.title;
    newAction.popupModel.displayMode = this.creator.isTouch ? "overlay" : "popup";
    return newAction;
  }

  private updateRequiredAction(requiredAction: Action) {
    if (!requiredAction) return;
    const isRequired = (this.surveyElement as Question)?.isRequired;
    requiredAction.ariaChecked = isRequired;
    requiredAction.active = isRequired;
    requiredAction.innerItem.title = isRequired ? this.creator.getLocString("pe.removeRequiredMark") : this.creator.getLocString("pe.markRequired");
  }

  private createRequiredAction() {
    (<Question>this.surveyElement).isRequired;
    const actionSetup = {
      id: "isrequired",
      ariaRole: "checkbox",
      css: "svc-action-bar-item--right sv-action--isrequired",
      innerCss: "svc-required-action",
      visibleIndex: 20,
      iconName: "icon-required",
      iconSize: "auto",
      action: () => {
        if (
          this.creator.isCanModifyProperty(
            <any>this.surveyElement,
            "isRequired"
          )
        ) {
          (this.surveyElement as Question).isRequired = this.getUpdatedPropertyValue("isRequired", !(this.surveyElement as Question)?.isRequired);
        }
      }
    };
    const innerAction = new Action(actionSetup);
    const requiredAction = new Action(actionSetup);
    requiredAction.title = this.creator.getLocString("pe.isRequired");
    requiredAction.innerItem = innerAction;
    this.updateRequiredAction(requiredAction);
    return requiredAction;
  }
  protected getUpdatedPropertyValue(propName: string, newValue: any): any {
    const options = {
      obj: this.element,
      propertyName: propName,
      value: this.element[propName],
      newValue: newValue,
      doValidation: false
    };
    this.creator.onValueChangingCallback(options);
    return options.newValue;
  }
  protected buildActions(items: Array<Action>): void {
    super.buildActions(items);
    let element = this.surveyElement;
    items.push(this.createConvertToAction());
    const inputTypeConverter = this.createConvertInputType();
    if (!!inputTypeConverter) {
      items.push(inputTypeConverter);
    }
    if (typeof element["isRequired"] !== "undefined" && !!element.getType
      && SurveyHelper.isPropertyVisible(element, Serializer.findProperty(element.getType(), "isRequired"), this.creator)) {
      items.push(this.createRequiredAction());
    }
  }
  protected duplicate(): void {
    setTimeout(() => {
      this.creator.copyQuestion(this.surveyElement, true);
    }, 1);
  }
  addNewQuestion = () => {
    this.creator.addNewQuestionInPage((type) => { }, this.surveyElement instanceof PanelModelBase ? this.surveyElement : null,
      this.currentAddQuestionType || this.creator.defaultAddQuestionType);
  };
  questionTypeSelectorModel = this.creator.getQuestionTypeSelectorModel((type) => { this.currentAddQuestionType = type; }, this.surveyElement);
  public get addNewQuestionText(): string {
    if (!this.currentAddQuestionType && this.creator)
      return this.creator.getLocString("ed.addNewQuestion");
    return !!this.creator ? this.creator.getAddNewQuestionText(this.currentAddQuestionType) : "";
  }
}
