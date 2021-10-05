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
  ItemValue
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
    return this.surveyElement.isQuestion && !(<Question>this.surveyElement).startWithNewLine ? "svc-question__adorner--start-with-new-line" : "";
  }

  css() {
    let result = this.creator.isElementSelected(this.surveyElement)
      ? "svc-question__content--selected"
      : "";

    if (this.isEmptyElement) {
      result += " svc-question__content--empty";
    }

    if (this.isDragOverMe) {
      result += " svc-question__content--drag-overred";
    } else {
      result = result.replace(" svc-question__content--drag-overred", "");
    }

    return result;
  }

  get isDragOverMe(): boolean {
    if (this.surveyElement.getType() === "paneldynamic") {
      return (<any>this.surveyElement).template.isDragOverMe;
    }
    return this.surveyElement.isDragOverMe;
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
    this.updateActionVisibility(
      "isrequired",
      operationsAllow && options.allowChangeRequired
    );
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
    this.dragDropHelper.startDrag(event, <any>this.surveyElement);
    return true;
  }

  public get allowEdit() {
    return !this.creator.readOnly;
  }

  private createConverToAction() {
    var currentType = this.surveyElement.getType();
    const convertClasses: string[] = QuestionConverter.getConvertToClasses(
      currentType,
      this.creator.toolbox.itemNames
    );
    const allowChangeType: boolean = convertClasses.length > 0;

    var availableTypes = convertClasses.map((className) => {
      return this.creator.createIActionBarItemByClass(className);
    });
    const popupModel = new PopupModel(
      "sv-list",
      {
        model: new ListModel(
          availableTypes,
          (item: any) => {
            this.creator.convertCurrentQuestion(item.id);
          },
          false
        )
      },
      "bottom",
      "center"
    );

    return new Action({
      id: "convertTo",
      css: "sv-action--first sv-action-bar-item--secondary",
      iconName: "icon-change_16x16",
      iconSize: 16,
      title: this.creator.getLocString("qt." + currentType),
      visibleIndex: 0,
      enabled: allowChangeType,
      component: "sv-action-bar-item-dropdown",
      action: (newType) => {
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
      iconName: this.isRequired
        ? "icon-switchactive_16x16"
        : "icon-switchinactive_16x16",
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
        requiredAction.iconName = this.isRequired
          ? "icon-switchactive_16x16"
          : "icon-switchinactive_16x16";
        requiredAction.css = this.isRequired
          ? "sv-action-bar-item--secondary"
          : "";
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
}
