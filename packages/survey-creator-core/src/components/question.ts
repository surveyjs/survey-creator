import {
  SurveyElement,
  SurveyModel,
  SurveyTemplateRendererTemplateData,
  property,
  QuestionHtmlModel,
  PanelModelBase,
  Action,
  Question,
  ItemValue,
  Serializer,
  DragTypeOverMeEnum,
  IAction,
  ComputedUpdater,
  DragOrClickHelper,
  QuestionSelectBase,
  createDropdownActionModel,
  CssClassBuilder,
  QuestionPanelDynamicModel,
  ListModel,
  QuestionTextModel,
  ActionContainer
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { editorLocalization, getLocString } from "../editorLocalization";
import { QuestionConverter } from "../questionconverter";
import { IPortableDragEvent, IPortableEvent, IPortableMouseEvent } from "../utils/events";
import {
  isPropertyVisible,
  propertyExists,
  toggleHovered
} from "../utils/utils";
import { SurveyElementAdornerBase } from "./action-container-view-model";
require("./question.scss");
import { settings } from "../creator-settings";
import { StringEditorConnector, StringItemsNavigatorBase } from "./string-editor";
import { DragDropSurveyElements } from "../survey-elements";
import { QuestionToolbox, QuestionToolboxItem } from "../toolbox";

export interface QuestionBannerParams {
  text: string;
  actionText: string;
  onClick: () => void;
}

export class QuestionAdornerViewModel extends SurveyElementAdornerBase {
  @property() isDragged: boolean;
  @property({ defaultValue: "" }) currentAddQuestionType: string;

  placeholderComponent: string;
  placeholderComponentData: any;

  private dragOrClickHelper: DragOrClickHelper;
  public topActionContainer: ActionContainer;
  constructor(
    creator: SurveyCreatorModel,
    surveyElement: SurveyElement,
    public templateData: SurveyTemplateRendererTemplateData
  ) {
    super(creator, surveyElement);
    this.actionContainer.sizeMode = "small";
    this.topActionContainer = new ActionContainer();
    this.topActionContainer.sizeMode = "small";
    this.topActionContainer.setItems([this.expandCollapseAction]);
    if (
      surveyElement.isQuestion &&
      !!surveyElement["setCanShowOptionItemCallback"]
    ) {
      (<any>surveyElement).setCanShowOptionItemCallback(
        (item: ItemValue): boolean => {
          if (creator.readOnly) return false;
          if (item !== (<QuestionSelectBase>this.surveyElement).newItem) return true;
          return (
            creator.maximumChoicesCount < 1 ||
            surveyElement["choices"].length < creator.maximumChoicesCount
          );
        }
      );
    }
    this.checkActionProperties();
    this.dragOrClickHelper = new DragOrClickHelper(this.startDragSurveyElement);
    StringItemsNavigatorBase.setQuestion(this);
  }

  get element() {
    return this.surveyElement;
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
      .append("svc-question__adorner--start-with-new-line", isStartWithNewLine)
      .append("svc-question__adorner--collapse-" + this.creator.expandCollapseButtonVisibility, true).toString();
  }

  css() {
    if (!this.surveyElement.isInteractiveDesignElement) return "";

    let result = "svc-question__content";
    result += typeof this.surveyElement.getType === "function" ? (" svc-question__content--" + this.surveyElement.getType()) : "";
    if (this.creator.isElementSelected(this.surveyElement)) {
      result += " svc-question__content--selected";
    }

    if (this.isEmptyElement) {
      result += " svc-question__content--empty";
    }
    if (this.isEmptyTemplate) {
      result += " svc-question__content--empty-template";
    }
    if (this.renderedCollapsed) {
      result += " svc-question__content--collapsed";
    }

    if (this.isDragMe) {
      result += " svc-question__content--dragged";
    } else {
      result = result.replace(" svc-question__content--dragged", "");
    }

    if (this.dragTypeOverMe === DragTypeOverMeEnum.InsideEmptyPanel) {
      result += " svc-question__content--drag-over-inside";
    } else {
      result = result.replace(" svc-question__content--drag-over-inside", "");
    }

    if (this.dragTypeOverMe === DragTypeOverMeEnum.Left) {
      result += " svc-question__content--drag-over-left";
    } else {
      result = result.replace(" svc-question__content--drag-over-left", "");
    }

    if (this.dragTypeOverMe === DragTypeOverMeEnum.Right) {
      result += " svc-question__content--drag-over-right";
    } else {
      result = result.replace(" svc-question__content--drag-over-right", "");
    }

    if (this.dragTypeOverMe === DragTypeOverMeEnum.Top) {
      result += " svc-question__content--drag-over-top";
    } else {
      result = result.replace(" svc-question__content--drag-over-top", "");
    }

    if (this.dragTypeOverMe === DragTypeOverMeEnum.Bottom) {
      result += " svc-question__content--drag-over-bottom";
    } else {
      result = result.replace(" svc-question__content--drag-over-bottom", "");
    }
    if (this.creator) {
      result = this.creator.getElementAddornerCssCallback(this.surveyElement, result);
    }
    return result;
  }

  get isDragMe(): boolean {
    return this.surveyElement.isDragMe;
  }

  get dragTypeOverMe() {
    return this.element.dragTypeOverMe;
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
      actionText: question.name,
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
  public dispose(): void {
    this.surveyElement.unRegisterFunctionOnPropertyValueChanged("isRequired", "isRequiredAdorner");
    this.surveyElement.unRegisterFunctionOnPropertyValueChanged("inputType", "inputTypeAdorner");
    if (!!this.surveyElement["setCanShowOptionItemCallback"]) {
      (<any>this.surveyElement).setCanShowOptionItemCallback(undefined);
    }
    super.dispose();
  }
  get isDraggable() {
    return true;
  }
  public hover(event: MouseEvent, element: HTMLElement | any) {
    if (!this.surveyElement.isInteractiveDesignElement) {
      return;
    }
    //this.updateActionsProperties();
    toggleHovered(event, element);
  }
  protected updateActionsProperties(): void {
    if (this.isDisposed) return;
    super.updateActionsProperties();
    const actions = this.actionContainer.visibleActions;
    let switchToStartLocation = false;
    for (var i = actions.length - 1; i >= 0; i--) {
      if (actions[i].id === "convertTo") switchToStartLocation = true;
      if (!actions[i].innerItem.location) actions[i].innerItem.location = switchToStartLocation ? "start" : "end";
    }
  }
  protected updateElementAllowOptions(options: any, operationsAllow: boolean) {
    super.updateElementAllowOptions(options, operationsAllow);
    this.updateActionVisibility("convertTo", operationsAllow && options.allowChangeType);
    this.updateActionVisibilityByProp("isrequired", "isRequired", operationsAllow && options.allowChangeRequired);
    this.updateActionVisibilityByProp("convertInputType", "inputType", options.allowChangeInputType);
    this.updateActionVisibilityByProp("convertInputType", "rateDisplayMode", options.allowChangeInputType);
  }
  private updateActionVisibilityByProp(actionName: string, propName: string, allow: boolean): void {
    const prop = Serializer.findProperty(this.surveyElement.getType(), propName);
    if (!prop) return;
    const isPropReadOnly = this.creator.onIsPropertyReadOnlyCallback(this.surveyElement, prop, prop.readOnly, null, null);
    this.updateActionVisibility(actionName, allow && !isPropReadOnly);
  }
  public get isEmptyElement(): boolean {
    if (this.surveyElement instanceof QuestionHtmlModel) {
      return !this.surveyElement.html;
    }

    if (this.surveyElement instanceof PanelModelBase) {
      const panel = this.surveyElement as any as PanelModelBase;
      return (
        !panel.rows || panel.rows.length <= 0 || panel.elements.length === 0
      );
    }

    return false;
  }
  public get isEmptyTemplate(): boolean {
    if (this.surveyElement instanceof QuestionPanelDynamicModel) {
      return this.surveyElement.templateElements.length == 0;
    }
    return false;
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

  get isRequired() {
    return (<any>this.surveyElement).isRequired;
  }
  set isRequired(newVal) {
    (<any>this.surveyElement).isRequired = newVal;
  }

  onPointerDown(pointerDownEvent: PointerEvent) {
    this.dragOrClickHelper.onPointerDown(pointerDownEvent);
  }

  startDragSurveyElement = (event: PointerEvent) => {
    const element = <any>this.surveyElement;
    const isElementSelected = this.creator.selectedElement === element;
    this.dragDropHelper.startDragSurveyElement(event, element, isElementSelected);
    return true;
  }

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
  public getConvertToTypesActions(parentAction?: Action): Array<IAction> {
    const availableItems = this.getConvertToTypes();

    const res = [];
    let lastItem = null;
    availableItems.forEach((item: QuestionToolboxItem) => {
      const needSeparator = lastItem && item.category != lastItem.category;
      const action = this.creator.createIActionBarItemByClass(item, needSeparator, (questionType: string, subtype?: string) => {
        if (this.surveyElement.getType() !== questionType) {
          this.creator.convertCurrentQuestion(questionType);
        }
        let propertyName = QuestionToolbox.getSubTypePropertyName(questionType);
        if (!!propertyName && !!subtype) this.creator.selectedElement.setPropertyValue(propertyName, subtype);
        parentAction?.hidePopup();
      });
      lastItem = item;
      res.push(action);
    });
    return res;
  }
  private get currentType(): string {
    return this.surveyElement.getType();
  }

  private createConvertToAction() {
    const actions = this.getConvertToTypesActions();
    const allowChangeType: boolean = actions.length > 0;
    const selItem = this.getSelectedItem(actions, this.currentType);
    let actionTitle = !!selItem ? selItem.title : editorLocalization.getString("qt." + this.currentType);

    const actionData: IAction = {
      id: "convertTo",
      enabled: allowChangeType,
      visibleIndex: 0,
      title: actionTitle,
      iconName: "icon-chevron_16x16"
    };
    const newAction = this.createDropdownModel({
      actionData: actionData,
      items: actions,
      updateListModel: (listModel: ListModel) => {
        const newItems = this.getConvertToTypesActions(newAction);
        listModel.setItems(newItems);
        listModel.selectedItem = this.getSelectedItem(newItems, this.currentType);

        let propertyName = QuestionToolbox.getSubTypePropertyName(this.currentType);
        newItems.forEach(action => {
          if (action.items?.length > 0) {
            const selectedSubItem = action.items.filter(item => item.id === this.element[propertyName])[0];
            if (selectedSubItem) {
              const _listModel = action.popupModel.contentComponentData.model;
              _listModel.selectedItem = selectedSubItem;
            }
          }
        });
      }
    });
    newAction.iconName = <any>new ComputedUpdater(() => {
      if (newAction.mode === "small") {
        return this.creator.toolbox.getItemByName(this.element.getType())?.iconName;
      }
      return "icon-chevron_16x16";
    });
    newAction.iconSize = <any>new ComputedUpdater(() => {
      return newAction.mode === "small" ? 24 : 16;
    });
    newAction.disableHide = true;
    return newAction;
  }

  private createConvertInputType() {
    const questionType = this.surveyElement.getType();
    const toolboxItem = this.creator.toolbox.items.filter(item => item.id === questionType)[0];
    if (!toolboxItem || !toolboxItem.items || toolboxItem.items.length < 1) return null;

    let propName = QuestionToolbox.getSubTypePropertyName(questionType);
    const questionSubType = this.surveyElement.getPropertyValue(propName);

    const getAvailableTypes = () => {
      return toolboxItem.items.map(item => {
        return {
          id: item.id,
          title: item.title,
          action: (item: any) => {
            const newValue = this.getUpdatedPropertyValue(propName, item.id);
            this.surveyElement.setPropertyValue(propName, newValue);
          }
        };
      });
    };
    const actionData: IAction = {
      id: "convertInputType",
      visibleIndex: 1,
      title: editorLocalization.getPropertyValueInEditor(propName, questionSubType),
      disableShrink: true,
      iconName: "icon-chevron_16x16"
    };
    const newAction = this.createDropdownModel({
      actionData: actionData,
      items: getAvailableTypes(),
      updateListModel: (listModel: ListModel) => {
        const newItems = getAvailableTypes();
        listModel.setItems(newItems);
        listModel.selectedItem = this.getSelectedItem(newItems, this.surveyElement.getPropertyValue(propName));
      }
    });

    this.surveyElement.registerFunctionOnPropertyValueChanged(
      propName,
      () => {
        const item = this.getSelectedItem(getAvailableTypes(), this.surveyElement.getPropertyValue(propName));
        if (!item) return;
        const popup = newAction.popupModel;
        const list = popup.contentComponentData.model;
        list.selectedItem = item;
        newAction.title = item.title;
      },
      "inputTypeAdorner"
    );
    newAction.removePriority = 1;
    return newAction;
  }
  private getSelectedItem(actions: IAction[], id: string): IAction {
    const selectedItems = actions.filter(item => item.id === id);
    return selectedItems.length > 0 ? selectedItems[0] : undefined;
  }
  private createDropdownModel(options: { actionData: IAction, items: Array<IAction>, updateListModel: (listModel: ListModel) => void }): Action {
    const newAction = createDropdownActionModel({
      id: options.actionData.id,
      css: "sv-action--convertTo sv-action-bar-item--secondary",
      iconName: options.actionData.iconName,
      iconSize: 16,
      title: options.actionData.title,
      enabled: options.actionData.enabled,
      visibleIndex: options.actionData.visibleIndex,
      disableShrink: options.actionData.disableShrink,
      location: "start",
      action: (newType) => {
      },
    }, {
      items: options.items,
      allowSelection: true,
      horizontalPosition: "center",
      onShow: () => {
        const listModel = newAction.popupModel.contentComponentData.model;
        options.updateListModel(listModel);
      },
    });
    newAction.popupModel.displayMode = this.creator.isTouch ? "overlay" : "popup";
    newAction.data.locOwner = this.creator;
    return newAction;
  }

  private createRequiredAction() {
    (<Question>this.surveyElement).isRequired;
    const requiredAction = new Action({
      id: "isrequired",
      ariaChecked: <any>new ComputedUpdater<boolean>(() => this.isRequired),
      ariaRole: "checkbox",
      css: "svc-action-bar-item--right sv-action-bar-item--secondary",
      title: this.creator.getLocString("pe.isRequired"),
      visibleIndex: 20,
      iconName: "icon-required",
      iconSize: 16,
      action: () => {
        if (
          this.creator.isCanModifyProperty(
            <any>this.surveyElement,
            "isRequired"
          )
        ) {
          this.isRequired = this.getUpdatedPropertyValue("isRequired", !this.isRequired);
        }
      }
    });
    requiredAction.innerCss = <string>(new ComputedUpdater<string>(() => new CssClassBuilder().append("svc-required-action").append("svc-required-action--active", this.isRequired).toString()) as any);
    requiredAction.innerItem.title = <string>(new ComputedUpdater<string>(() => {
      return this.isRequired ? this.creator.getLocString("pe.removeRequiredMark") : this.creator.getLocString("pe.markRequired");
    }) as any);
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
    items[items.length - 1].css += " sv-action--convertTo-last";
    if (
      typeof element["isRequired"] !== "undefined" &&
      propertyExists(element, "isRequired") &&
      isPropertyVisible(element, "isRequired")
    ) {
      items.push(this.createRequiredAction());
    }
  }
  protected duplicate(): void {
    setTimeout(() => {
      this.creator.fastCopyQuestion(this.surveyElement, true);
    }, 1);
  }
  addNewQuestion(): void {
    this.creator.addNewQuestionInPage((type) => { }, this.surveyElement instanceof PanelModelBase ? this.surveyElement : null,
      this.currentAddQuestionType || settings.designer.defaultAddQuestionType);
  }
  questionTypeSelectorModel = this.creator.getQuestionTypeSelectorModel((type) => { this.currentAddQuestionType = type; }, this.surveyElement);
  public get addNewQuestionText(): string {
    if (!this.currentAddQuestionType && this.creator)
      return this.creator.getLocString("ed.addNewQuestion");
    return !!this.creator ? this.creator.getAddNewQuestionText(this.currentAddQuestionType) : "";
  }
}
