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

export class DragDropHelper extends Base {
  public static edgeHeight: number = 20;
  public static nestedPanelDepth: number = -1;
  public static prevEvent = { element: null, x: -1, y: -1 };

  public ghostElement: any = null;
  public sourceElement: IElement = null;
  public page: PageModel = null;

  @property() draggedOverQuestion: SurveyElement;

  constructor(private creator: CreatorBase<SurveyModel>) {
    super();
  }

  public get survey(): SurveyModel {
    return this.creator.survey;
  }

  public get draggedItemType() {
    if (!this.sourceElement) return "toolbox-item";
    return this.sourceElement.getType();
  }

  public startDragToolboxItem(
    event: IPortableDragEvent,
    sourceElementJson: JsonObject
  ) {
    return this.dragStartHandler(event, sourceElementJson, null);
  }

  public startDragQuestion(event: IPortableDragEvent, sourceElement: IElement) {
    var sourceElementJson = new JsonObject().toJsonObject(sourceElement);
    sourceElementJson["type"] = sourceElement.getType();

    return this.dragStartHandler(event, sourceElementJson, sourceElement);
  }

  public startDragItemValue(
    event: IPortableDragEvent,
    question: IElement,
    item: ItemValue
  ) {
    var sourceElementJson = new JsonObject().toJsonObject(item);
    sourceElementJson["type"] = item.getType();
    return this.dragStartHandler(event, null, <any>item);
  }

  private dragStartHandler(
    event: IPortableDragEvent,
    sourceElementJson: JsonObject,
    sourceElement: IElement
  ) {
    event.stopPropagation(); // prevent call startDrag event on Parent
    event.dataTransfer.effectAllowed = "move";

    this.ghostElement = this.createGhostElement(sourceElementJson);
    this.sourceElement = sourceElement;

    return true;
  }

  public doDragDropOver(
    event: IPortableDragEvent,
    draggedOverElement: any,
    isEdge: boolean = false
  ) {
    event.stopPropagation();
    event.preventDefault();

    if (this.draggedItemType === "itemvalue") {
      event.dataTransfer.effectAllowed = "none";
      return;
    }

    if (this.ghostElement === draggedOverElement) return;

    this.draggedOverQuestion = draggedOverElement;

    event = this.isCanDragContinue(event, draggedOverElement);

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
    this.moveTo(draggedOverElement, bottomInfo.isBottom, isEdge);
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
    this.clear();
    this.clearData();
  }

  public doDrop(event: IPortableDragEvent) {
    var newElement;
    event.stopPropagation();
    event.preventDefault();

    if (!!this.page) {
      newElement = this.page.dragDropFinish();
    }

    this.creator.selectElement(newElement);
    this.end();
  }

  public doLeavePage(event: IPortableDragEvent) {
    this.moveTo(null, false);
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

  private createGhostElement(json: any): any {
    if (!json || !json.type) return null;
    var ghostElement = this.creator.createNewElement(json);
    if (ghostElement["setSurveyImpl"]) {
      ghostElement["setSurveyImpl"](this.survey);
    } else {
      ghostElement["setData"](this.survey);
    }
    ghostElement.renderWidth = "100%";
    return ghostElement;
  }

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
        this.ghostElement,
        DragDropHelper.nestedPanelDepth
      );
    }
  }

  private clearData() {
    var prevEvent = DragDropHelper.prevEvent;
    prevEvent.element = null;
    prevEvent.x = -1;
    prevEvent.y = -1;

    // We should reset  to null due to the https://surveyjs.answerdesk.io/ticket/details/T1003 - onQuestionAdded not fired after D&D
    this.ghostElement = null;
    this.sourceElement = null;
  }
}
