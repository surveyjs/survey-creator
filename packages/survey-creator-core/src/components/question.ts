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
import { DragDropSurveyElements } from "survey-core";
import { getLocString } from "../editorLocalization";
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

export class QuestionAdornerViewModel extends SurveyElementAdornerBase {
  @property() isDragged: boolean;
  @property({ defaultValue: "" }) currentAddQuestionType: string;

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
    this.dragTypeOverMe = <any>new ComputedUpdater(() => {
      let element = this.surveyElement.getType() === "paneldynamic" ?
        (<any>this.surveyElement).template :
        this.surveyElement;
      return element.dragTypeOverMe;
    });
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
    let result = typeof this.surveyElement.getType === "function" ? ("svc-question__content--" + this.surveyElement.getType()) : "";
    if(this.creator.isElementSelected(this.surveyElement)) {
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

  @property() dragTypeOverMe: DragTypeOverMeEnum;

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
    const prop = Serializer.findProperty(this.surveyElement.getType(), "isRequired");
    const isPropReadOnly = this.creator.onIsPropertyReadOnlyCallback(this.surveyElement, prop, prop.readOnly, null, null);
    this.updateActionVisibility("isrequired", operationsAllow && options.allowChangeRequired && !isPropReadOnly);
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
    convertClasses.forEach((className: string) => {
      const item = this.creator.toolbox.items.filter(item => item.name == className)[0];
      const action = this.creator.createIActionBarItemByClass(item.name, item.title, item.iconName, item.needSeparator);
      res.push(action);
    });
    return res;
  }
  private get currentType(): string {
    return this.surveyElement.getType();
  }

  private createConverToAction() {
    const availableTypes = this.getConvertToTypesActions();
    const allowChangeType: boolean = availableTypes.length > 0;
    const curType = this.currentType;
    const selectedItems = availableTypes.filter(item => item.id === curType);
    let actionTitle = selectedItems.length > 0 ? selectedItems[0].title : this.creator.getLocString("qt." + this.currentType);

    const newAction = createDropdownActionModel({
      id: "convertTo",
      css: "sv-action--convertTo sv-action-bar-item--secondary",
      iconName: "icon-drop-down-arrow_16x16",
      iconSize: 16,
      title: actionTitle,
      visibleIndex: 0,
      enabled: allowChangeType,
      disableShrink: true,
      action: (newType) => {
        newAction.popupModel.displayMode = this.creator.isMobileView ? "overlay" : "popup";
      },
    }, {
      items: availableTypes,
      onSelectionChanged: (item: any) => {
        this.creator.convertCurrentQuestion(item.id);
      },
      allowSelection: true,
      selectedItem: selectedItems.length > 0 ? selectedItems[0] : undefined,
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

  protected buildActions(items: Array<Action>) {
    super.buildActions(items);
    let element = this.surveyElement;
    items.push(this.createConverToAction());
    if (
      typeof element["isRequired"] !== "undefined" &&
      propertyExists(element, "isRequired") &&
      isPropertyVisible(element, "isRequired")
    ) {
      items.push(this.createRequiredAction());
    }
  }
  protected duplicate() {
    setTimeout(()=>{
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
