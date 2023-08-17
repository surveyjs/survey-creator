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
  createDropdownActionModel
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { editorLocalization, getLocString } from "../editorLocalization";
import { QuestionConverter } from "../questionconverter";
import { IPortableDragEvent, IPortableMouseEvent } from "../utils/events";
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

export interface QuestionCarryForwardParams {
  question: Question;
  text: string;
  onClick: () => void;
}

export class QuestionAdornerViewModel extends SurveyElementAdornerBase {
  @property() isDragged: boolean;
  @property({ defaultValue: "" }) currentAddQuestionType: string;
  placeholderComponent: string;
  placeholderComponentData: any;

  private dragOrClickHelper: DragOrClickHelper;

  constructor(
    creator: CreatorBase,
    surveyElement: SurveyElement,
    public templateData: SurveyTemplateRendererTemplateData
  ) {
    super(creator, surveyElement);
    this.actionContainer.sizeMode = "small";
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

  select(model: QuestionAdornerViewModel, event: IPortableMouseEvent) {
    if (!model.surveyElement.isInteractiveDesignElement) {
      return;
    }
    event.stopPropagation();
    event.cancelBubble = true;
    model.creator.selectElement(model.surveyElement, undefined, false);
    return true;
  }

  rootCss() {
    return this.surveyElement.isQuestion && !(<Question>this.surveyElement).startWithNewLine ? " svc-question__adorner--start-with-new-line" : "";
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

    if (this.dragTypeOverMe === DragTypeOverMeEnum.MultilineLeft || this.dragTypeOverMe === DragTypeOverMeEnum.Left) {
      result += " svc-question__content--drag-over-left";
    } else {
      result = result.replace(" svc-question__content--drag-over-left", "");
    }

    if (this.dragTypeOverMe === DragTypeOverMeEnum.MultilineRight || this.dragTypeOverMe === DragTypeOverMeEnum.Right) {
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

    return result;
  }

  get isDragMe(): boolean {
    return this.surveyElement.isDragMe;
  }

  get dragTypeOverMe() {
    return this.element.dragTypeOverMe;
  }
  public get isUsingCarryForward(): boolean {
    return (<any>this.element)?.isUsingCarryForward;
  }
  public createCarryForwardParams(): QuestionCarryForwardParams {
    if(!this.isUsingCarryForward) return null;
    const name = (<any>this.element)?.choicesFromQuestion;
    if(!name) return null;
    const question = this.creator.survey.getQuestionByName(name);
    if(!question) return null;
    return { question: question, text: this.creator.getLocString("ed.carryForwardChoicesCopied"),
      onClick: () => { this.creator.selectElement(question); } };
  }

  dispose() {
    this.surveyElement.unRegisterFunctionOnPropertyValueChanged("isRequired", "isRequiredAdorner");
    this.surveyElement.unRegisterFunctionOnPropertyValueChanged("inputType", "inputTypeAdorner");
    if (!!this.surveyElement["setCanShowOptionItemCallback"]) {
      (<any>this.surveyElement).setCanShowOptionItemCallback(undefined);
    }
  }
  get isDraggable() {
    return true;
  }
  public hover(event: MouseEvent, element: HTMLElement | any) {
    if (!this.surveyElement.isInteractiveDesignElement) {
      return;
    }
    this.updateActionsProperties();
    toggleHovered(event, element);
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

  public get placeholderText(): string {
    if (this.surveyElement instanceof QuestionHtmlModel) {
      return getLocString("ed.htmlPlaceHolder");
    }
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
  public getConvertToTypesActions(): Array<IAction> {
    const convertClasses: string[] = QuestionConverter.getConvertToClasses(
      this.currentType, this.creator.toolbox.itemNames, true
    );
    const res = [];
    let lastItem = null;
    convertClasses.forEach((className: string) => {
      const item = this.creator.toolbox.items.filter(item => item.name == className)[0];
      const needSeparator = lastItem && item.category != lastItem.category;
      const action = this.creator.createIActionBarItemByClass(item.name, item.title, item.iconName, needSeparator);
      lastItem = item;
      res.push(action);
    });
    return res;
  }
  private get currentType(): string {
    return this.surveyElement.getType();
  }

  private createConvertToAction() {
    const availableTypes = this.getConvertToTypesActions();
    const allowChangeType: boolean = availableTypes.length > 0;
    const newAction = this.createDropdownModel("convertTo", availableTypes,
      allowChangeType, 0, this.currentType,
      (item: any) => {
        this.creator.convertCurrentQuestion(item.id);
      });
    return newAction;
  }
  private createConvertInputType() {
    let prop = null;
    if (this.surveyElement.getType() === "text") prop = Serializer.findProperty("text", "inputType");
    if (this.surveyElement.getType() === "rating") prop = Serializer.findProperty("rating", "rateDisplayMode");
    if (!prop || !isPropertyVisible(this.surveyElement, prop.name)) return null;
    const propName = prop.name;
    const questionSubType = this.surveyElement.getPropertyValue(propName);
    const items = prop.getChoices(this.surveyElement, (chs: any) => { });
    const availableTypes = [];
    items.forEach(item => {
      availableTypes.push({ id: item, title: editorLocalization.getPropertyValueInEditor(prop.name, item) });
    });
    const newAction = this.createDropdownModel("convertInputType", availableTypes, true, 1, questionSubType,
      (item: any) => {
        this.surveyElement.setPropertyValue(propName, item.id);
        newAction.title = item.title;
      });
    this.surveyElement.registerFunctionOnPropertyValueChanged(
      propName,
      () => {
        const item = this.getSelectedItem(availableTypes, this.surveyElement.getPropertyValue(propName));
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
  private createDropdownModel(id: string, actions: IAction[],
    enabled: boolean, index: number, selValue: string,
    onSelectionChanged: (item: any) => void): Action {
    const selItem = this.getSelectedItem(actions, selValue);
    let actionTitle = !!selItem ? selItem.title : selValue;

    const newAction = createDropdownActionModel({
      id: id,
      css: "sv-action--convertTo sv-action-bar-item--secondary",
      iconName: "icon-drop-down-arrow_16x16",
      iconSize: 16,
      title: actionTitle,
      enabled: enabled,
      visibleIndex: index,
      disableShrink: true,
      action: (newType) => {
        newAction.popupModel.displayMode = this.creator.isMobileView ? "overlay" : "popup";
      },
    }, {
      items: actions,
      onSelectionChanged: onSelectionChanged,
      allowSelection: true,
      selectedItem: selItem,
      horizontalPosition: "center"
    });
    return newAction;
  }

  private createRequiredAction() {
    (<Question>this.surveyElement).isRequired;
    const requiredAction = new Action({
      id: "isrequired",
      ariaChecked: <any>new ComputedUpdater<boolean>(() => this.isRequired),
      ariaRole: "checkbox",
      css: this.isRequired ? "sv-action-bar-item--secondary" : "",
      title: this.creator.getLocString("pe.isRequired"),
      visibleIndex: 20,
      iconName: this.isRequired ? "icon-switch-active_16x16" : "icon-switch-inactive_16x16",
      iconSize: 16,
      action: () => {
        if (
          this.creator.isCanModifyProperty(
            <any>this.surveyElement,
            "isRequired"
          )
        ) {
          this.isRequired = !this.isRequired;
        }
      }
    });
    this.surveyElement.registerFunctionOnPropertyValueChanged(
      "isRequired",
      () => {
        requiredAction.iconName = this.isRequired ? "icon-switch-active_16x16" : "icon-switch-inactive_16x16";
        requiredAction.css = this.isRequired ? "sv-action-bar-item--secondary" : "";
      },
      "isRequiredAdorner"
    );
    return requiredAction;
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
  protected duplicate() {
    setTimeout(() => {
      var newElement = this.creator.fastCopyQuestion(this.surveyElement);
      this.creator.selectElement(newElement);
    }, 1);
  }
  addNewQuestion(): void {
    this.creator.addNewQuestionInPage((type) => { }, this.surveyElement instanceof PanelModelBase ? this.surveyElement : null,
      this.currentAddQuestionType || settings.designer.defaultAddQuestionType);
  }
  questionTypeSelectorModel = this.creator.getQuestionTypeSelectorModel(
    (type) => {
      this.currentAddQuestionType = type;
    },
    this.surveyElement instanceof PanelModelBase ? this.surveyElement : null
  );
  public get addNewQuestionText(): string {
    if (!this.currentAddQuestionType && this.creator)
      return this.creator.getLocString("ed.addNewQuestion");
    return !!this.creator ? this.creator.getAddNewQuestionText(this.currentAddQuestionType) : "";
  }
}
