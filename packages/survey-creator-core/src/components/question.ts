import {
  SurveyElement,
  SurveyModel,
  SurveyTemplateRendererTemplateData,
  property,
  QuestionHtmlModel,
  PanelModelBase,
  Action,
  PopupModel,
  ListModel,
  Question,
  ItemValue,
  Serializer,
  DragTypeOverMeEnum,
  IAction
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { DragDropSurveyElements } from "survey-core";
import { getLocString } from "../editorLocalization";
import { QuestionConverter } from "../questionconverter";
import { IPortableDragEvent, IPortableMouseEvent } from "../utils/events";
import {
  isPropertyVisible,
  propertyExists,
  toggleHovered
} from "../utils/utils";
import { ActionContainerViewModel } from "./action-container-view-model";
import "./question.scss";

export class QuestionAdornerViewModel extends ActionContainerViewModel<SurveyModel> {
  @property() isDragged: boolean;
  @property({ defaultValue: "" }) currentAddQuestionType: string;

  constructor(
    creator: CreatorBase<SurveyModel>,
    surveyElement: SurveyElement,
    public templateData: SurveyTemplateRendererTemplateData
  ) {
    super(creator, surveyElement);
    if (
      surveyElement.isQuestion &&
      !!surveyElement["setCanShowOptionItemCallback"]
    ) {
      (<any>surveyElement).setCanShowOptionItemCallback(
        (item: ItemValue): boolean => {
          if (creator.readOnly) return false;
          if (item.value !== "newitem") return true;
          return (
            creator.maximumChoicesCount < 1 ||
            surveyElement["choices"].length < creator.maximumChoicesCount
          );
        }
      );
    }
    this.checkActionProperties();
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
    let result = this.creator.isElementSelected(this.surveyElement)
      ? "svc-question__content--selected"
      : "";

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

    if (this.dragTypeOverMe === DragTypeOverMeEnum.MultilineLeft) {
      result += " svc-question__content--drag-over-left";
    } else {
      result = result.replace(" svc-question__content--drag-over-left", "");
    }

    if (this.dragTypeOverMe === DragTypeOverMeEnum.MultilineRight) {
      result += " svc-question__content--drag-over-right";
    } else {
      result = result.replace(" svc-question__content--drag-over-right", "");
    }

    return result;
  }

  get isDragMe(): boolean {
    return this.surveyElement.isDragMe;
  }

  get dragTypeOverMe(): DragTypeOverMeEnum {
    let element = this.surveyElement.getType() === "paneldynamic" ?
      (<any>this.surveyElement).template :
      this.surveyElement;
    return element.dragTypeOverMe;
  }

  dispose() {
    this.surveyElement.unRegisterFunctionOnPropertyValueChanged(
      "isRequired",
      "isRequiredAdorner"
    );
    if (!!this.surveyElement["setCanShowOptionItemCallback"]) {
      (<any>this.surveyElement).setCanShowOptionItemCallback(undefined);
    }
  }
  get isDraggable() {
    return true;
  }
  public hover(event: MouseEvent, element: HTMLElement) {
    if (!this.surveyElement.isInteractiveDesignElement) {
      return;
    }
    toggleHovered(event, element);
  }
  protected updateElementAllowOptions(options: any, operationsAllow: boolean) {
    super.updateElementAllowOptions(options, operationsAllow);
    this.updateActionVisibility(
      "convertTo",
      operationsAllow && options.allowChangeType
    );
    const prop = Serializer.findProperty(this.surveyElement.getType(), "isRequired");
    const isPropReadOnly = this.creator.onIsPropertyReadOnlyCallback(this.surveyElement, prop, prop.readOnly, null, null);
    this.updateActionVisibility(
      "isrequired",
      operationsAllow && options.allowChangeRequired && !isPropReadOnly);
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

  startDragSurveyElement(event: PointerEvent) {
    const element = <any>this.surveyElement;
    const isElementSelected = this.creator.selectedElement === element;
    this.dragDropHelper.startDragSurveyElement(event, element, isElementSelected);
    return true;
  }

  public get allowEdit() {
    return !this.creator.readOnly;
  }
  public getConvertToTypesActions(): Array<IAction> {
    const convertClasses: string[] = QuestionConverter.getConvertToClasses(
      this.currentType, this.creator.toolbox.itemNames, true
    );
    return convertClasses.map((className) => {
      return this.creator.createIActionBarItemByClass(className);
    });
  }
  private get currentType() : string {
    return this.surveyElement.getType();
  }

  private createConverToAction() {
    const availableTypes = this.getConvertToTypesActions();
    const allowChangeType: boolean = availableTypes.length > 0;
    const curType = this.currentType;
    const selectedItems = availableTypes.filter(item => item.id === curType);
    const popupModel = new PopupModel(
      "sv-list",
      {
        model: new ListModel(
          availableTypes,
          (item: any) => {
            this.creator.convertCurrentQuestion(item.id);
          },
          true, selectedItems.length > 0 ? selectedItems[0]: undefined
        )
      },
      "bottom",
      "center"
    );
    let actionTitle = this.creator.getLocString("qt." + this.currentType);
    return new Action({
      id: "convertTo",
      css: "sv-action--first sv-action-bar-item--secondary",
      iconName: "icon-change-question-type_16x16",
      iconSize: 16,
      title: actionTitle,
      visibleIndex: 0,
      enabled: allowChangeType,
      component: "sv-action-bar-item-dropdown",
      disableShrink: true,
      action: (newType) => {
        popupModel.displayMode = this.creator.isMobileView ? "overlay" : "popup";
        popupModel.toggleVisibility();
      },
      popupModel: popupModel
    });
  }

  private createRequiredAction() {
    (<Question>this.surveyElement).isRequired;
    const requiredAction = new Action({
      id: "isrequired",
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

  protected buildActions(items: Array<Action>) {
    super.buildActions(items);
    let element = this.surveyElement;
    if (!element.isPanel) {
      items.push(this.createConverToAction());
    }

    if (
      typeof element["isRequired"] !== "undefined" &&
      propertyExists(element, "isRequired") &&
      isPropertyVisible(element, "isRequired")
    ) {
      items.push(this.createRequiredAction());
    }
  }
  protected duplicate() {
    var newElement = this.creator.fastCopyQuestion(this.surveyElement);
    this.creator.selectElement(newElement);
  }

  addNewQuestion() {
    this.creator.addNewQuestionInPage((type) => { }, this.surveyElement instanceof PanelModelBase? this.surveyElement:null, this.currentAddQuestionType || "text");
  }
  questionTypeSelectorModel = this.creator.getQuestionTypeSelectorModel(
    (type) => {
      this.currentAddQuestionType = type;
    },
    this.surveyElement instanceof PanelModelBase? this.surveyElement:null
  );
  public get addNewQuestionText(): string {
    if(!this.currentAddQuestionType && this.creator)
      return this.creator.getLocString("ed.addNewQuestion");
    return !!this.creator ? this.creator.getAddNewQuestionText(this.currentAddQuestionType):"";
  }
}
