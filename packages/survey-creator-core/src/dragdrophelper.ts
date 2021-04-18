import {
  IElement,
  PageModel,
  SurveyModel,
  JsonObject,
  SurveyElement,
  property,
  Base,
  ItemValue,
} from "survey-core";
import { CreatorBase } from "./creator-base";
import { IPortableDragEvent } from "./utils/events";

export class DragDropTargetElement {
  public page: PageModel = null;
  constructor(
    public fakeElement: any,
    public sourceElement: IElement,
    private nestedPanelDepth: number = -1
  ) {}
  public moveTo(
    destination: any,
    isBottom: boolean,
    isEdge: boolean = false
  ): boolean {
    const page = destination.isPage ? destination : destination.page;
    if (page) {
      this.moveToPage(page);
      return this.page.dragDropMoveTo(destination, isBottom, isEdge);
    }
    return false;
  }
  public doDrop(): any {
    if (!this.page) return;
    return this.page.dragDropFinish();
  }
  public clear() {
    if (!this.page) return;
    this.page.dragDropFinish(true);
  }
  public moveToPage(page: PageModel) {
    if (!!page && page !== this.page) {
      this.clear();
      this.page = page;
      this.page.dragDropStart(
        this.sourceElement,
        this.fakeElement,
        this.nestedPanelDepth
      );
    }
  }
}

export class DragDropHelper extends Base {
  public static edgeHeight: number = 20;
  public static nestedPanelDepth: number = -1;
  public static prevEvent = { element: null, x: -1, y: -1 };
  public static counter: number = 1;

  public ddTarget: DragDropTargetElement = null;

  @property() draggedOverQuestion: SurveyElement;

  constructor(private creator: CreatorBase<SurveyModel>) {
    super();
  }

  public get survey(): SurveyModel {
    return this.creator.survey;
  }

  public startDragToolboxItem(
    event: IPortableDragEvent,
    sourceElementJson: any
  ) {
    event.stopPropagation(); // prevent call startDrag event on Parent

    event.dataTransfer.effectAllowed = "move";

    this.ddTarget = new DragDropTargetElement(
      this.createFakeElement(sourceElementJson),
      null,
      DragDropHelper.nestedPanelDepth
    );

    return true;
  }

  public startDragQuestion(event: IPortableDragEvent, sourceElement: any) {
    event.stopPropagation(); // prevent call startDrag event on Parent

    var sourceElementJson = new JsonObject().toJsonObject(sourceElement);
    sourceElementJson["type"] = sourceElement.getType();

    event.dataTransfer.effectAllowed = "move";

    this.ddTarget = new DragDropTargetElement(
      this.createFakeElement(sourceElementJson),
      sourceElement,
      DragDropHelper.nestedPanelDepth
    );

    return true;
  }

  public startDragItemValueItem(
    event: IPortableDragEvent,
    question: SurveyElement,
    item: ItemValue
  ) {
    event.stopPropagation(); // prevent call startDrag event on Parent

    var dataTransferText = question.name + " : " + item.name;

    event.dataTransfer.effectAllowed = "move";

    // this.ddTarget = new DragDropTargetElement(
    //   this.createFakeElement(sourceElementJson),
    //   sourceElement,
    //   DragDropHelper.nestedPanelDepth
    // );

    return true;
  }

  public doDragDropOver(
    event: IPortableDragEvent,
    draggedOverElement: any,
    isEdge: boolean = false
  ) {
    event.stopPropagation();
    event.preventDefault();

    if (this.ddTarget.fakeElement === draggedOverElement) return;

    this.draggedOverQuestion = draggedOverElement;

    // console.log("over: " + draggedOverElement.name);

    event = this.isCanDragContinue(event, draggedOverElement);

    // console.log("isCanDragContinue: " + event);

    if (!event) {
      return;
    }
    var bottomInfo = this.isAtLowerPartOfCurrentTarget(event);
    if (draggedOverElement.isPage && draggedOverElement.elements.length > 0) {
      var lastEl =
        draggedOverElement.elements[draggedOverElement.elements.length - 1];
      if (!this.isBottomThanElement(event, lastEl)) return;
      draggedOverElement = lastEl;
      isEdge = true;
      bottomInfo.isEdge = true;
      bottomInfo.isBottom = true;
    }

    isEdge = draggedOverElement.isPanel
      ? isEdge && this.isBottom(event).isEdge
      : true;
    if (
      draggedOverElement.isPanel &&
      !isEdge &&
      draggedOverElement.elements.length > 0
    )
      return;
    this.ddTarget.moveTo(draggedOverElement, bottomInfo.isBottom, isEdge);
  }

  private isCanDragContinue(
    event: IPortableDragEvent,
    draggedOverElement: any
  ): IPortableDragEvent {
    const isSamePlace = this.isSamePlace(event, draggedOverElement);
    if (!draggedOverElement || isSamePlace) {
      return null;
    }
    return event;
  }

  public end() {
    this.draggedOverQuestion = undefined;
    if (this.ddTarget) {
      this.ddTarget.clear();
    }
    this.clearData();
  }

  public doDrop(event: IPortableDragEvent) {
    event.stopPropagation();
    event.preventDefault();
    var newElement = this.ddTarget.doDrop();
    this.creator.selectElement(newElement);
    this.end();
  }

  public doLeavePage(event: IPortableDragEvent) {
    if (!!this.ddTarget) {
      this.ddTarget.moveTo(null, false);
    }
  }

  private isAtLowerPartOfCurrentTarget(event: IPortableDragEvent): any {
    var target = event.currentTarget;
    if (!target["getBoundingClientRect"]) {
      return true;
    }
    const bounds: DOMRect = (<any>target).getBoundingClientRect();
    const middle = (bounds.bottom + bounds.top) / 2;

    return {
      isBottom: event.clientY >= middle,
      isEdge:
        event.clientY - bounds.bottom <= DragDropHelper.edgeHeight ||
        bounds.top - event.clientY <= DragDropHelper.edgeHeight,
    };
  }

  private isBottom(event: IPortableDragEvent): any {
    //event = this.getEvent(event);
    var height = <number>event.currentTarget["clientHeight"];
    var y = event.offsetY;
    if (event.hasOwnProperty("layerX")) {
      y = event["layerY"] - <number>event.currentTarget["offsetTop"];
    }
    return {
      isBottom: y > height / 2,
      isEdge:
        y <= DragDropHelper.edgeHeight ||
        height - y <= DragDropHelper.edgeHeight,
    };
  }

  private isBottomThanElement(event: IPortableDragEvent, lastEl: any): boolean {
    var el = lastEl.renderedElement;
    if (!el) return false;
    //event = this.getEvent(event);
    var elY = <number>el.offsetTop + <number>el.clientHeight;
    var y = event.offsetY;
    if (event.hasOwnProperty("layerX")) {
      y = event["layerY"] - <number>event.currentTarget["offsetTop"];
    }
    return y > elY;
  }

  private isSamePlace(
    event: IPortableDragEvent,
    draggedOverElement: any
  ): boolean {
    var prev = DragDropHelper.prevEvent;
    if (
      prev.element != draggedOverElement ||
      Math.abs(event.clientX - prev.x) > 5 ||
      Math.abs(event.clientY - prev.y) > 5
    ) {
      prev.element = draggedOverElement;
      prev.x = event.clientX;
      prev.y = event.clientY;
      return false;
    }
    return true;
  }

  private createFakeElement(json: any): any {
    if (!json || !json.type) return null;
    var targetElement = this.creator.createNewElement(json);
    if (targetElement["setSurveyImpl"]) {
      targetElement["setSurveyImpl"](this.survey);
    } else {
      targetElement["setData"](this.survey);
    }
    targetElement.renderWidth = "100%";
    return targetElement;
  }

  private clearData() {
    console.log("clearData");
    this.ddTarget = null; // We should reset ddTarget to null due to the https://surveyjs.answerdesk.io/ticket/details/T1003 - onQuestionAdded not fired after D&D
    var prev = DragDropHelper.prevEvent;
    prev.element = null;
    prev.x = -1;
    prev.y = -1;
  }
}
