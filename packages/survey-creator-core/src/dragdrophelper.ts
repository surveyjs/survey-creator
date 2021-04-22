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

  private ghostElement: any = null;
  private sourceElement: IElement = null;
  private draggedOverElement: IElement = null;
  private pageOrPanel: PageModel = null;
  private isBottom: boolean = null;
  private isEdge: boolean = null;

  private get survey(): SurveyModel {
    return this.creator.survey;
  }

  private get sourceElementType() {
    if (!this.sourceElement) return "toolbox-item";
    return this.sourceElement.getType();
  }

  constructor(private creator: CreatorBase<SurveyModel>) {
    super();
  }

  public onDragStartToolboxItem(
    event: IPortableDragEvent,
    sourceElementJson: JsonObject
  ) {
    const sourceElement = this.createElementFromJson(sourceElementJson);
    return this.onDragStart(event, sourceElement);
  }

  public onDragStartQuestion(
    event: IPortableDragEvent,
    sourceElement: IElement
  ) {
    return this.onDragStart(event, sourceElement);
  }

  public onDragStartItemValue(
    event: IPortableDragEvent,
    question: IElement,
    item: ItemValue
  ) {
    event.stopPropagation();
    event.dataTransfer.effectAllowed = "move";

    this.sourceElement = <any>item;
    return true;
  }

  private onDragStart(event: IPortableDragEvent, sourceElement: IElement) {
    event.stopPropagation(); // prevent call startDrag event on Parent
    event.dataTransfer.effectAllowed = "move";

    this.ghostElement = this.createGhostElement();
    this.sourceElement = sourceElement;

    return true;
  }

  private createGhostElement(): any {
    const json = {
      type: "html",
      name: "svd-drag-drog-ghost-element",
      html:
        '<div style="width: 100%; height:4px; background: #FF9814; position: absolute;"></div>',
    };
    return this.createElementFromJson(json);
  }

  private createElementFromJson(json) {
    var element = this.creator.createNewElement(json);
    if (element["setSurveyImpl"]) {
      element["setSurveyImpl"](this.survey);
    } else {
      element["setData"](this.survey);
    }
    element.renderWidth = "100%";
    return element;
  }

  public onDragOver(
    event: IPortableDragEvent,
    draggedOverElement: any,
    isEdge: boolean = false
  ) {
    event.stopPropagation();

    if (this.sourceElementType === "itemvalue") {
      event.dataTransfer.effectAllowed = "none";
      return true;
    }

    event.preventDefault();

    if (this.ghostElement === draggedOverElement) return;

    event = this.isCanDragContinue(event, draggedOverElement);

    if (!event) {
      return true;
    }
    var bottomInfo = this.isAtLowerPartOfCurrentTarget(event);
    if (draggedOverElement.isPage && draggedOverElement.elements.length > 0) {
      var lastEl =
        draggedOverElement.elements[draggedOverElement.elements.length - 1];
      if (!this.isBottomThanElement(event, lastEl)) return true;
      draggedOverElement = lastEl;
      isEdge = true;
      bottomInfo.isEdge = true;
      bottomInfo.isBottom = true;
    }

    isEdge = draggedOverElement.isPanel
      ? isEdge && this.calculateIsBottom(event).isEdge
      : true;
    if (
      draggedOverElement.isPanel &&
      !isEdge &&
      draggedOverElement.elements.length > 0
    )
      return true;

    this.draggedOverElement = draggedOverElement;
    this.isEdge = isEdge;
    this.isBottom = bottomInfo.isBottom;

    this.insertGhostElementIntoSurvey(
      this.draggedOverElement,
      this.isBottom,
      this.isEdge
    );

    return true;
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

  private calculateIsBottom(event: IPortableDragEvent): any {
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

  public onDrop(event: IPortableDragEvent) {
    var newElement;
    event.stopPropagation();
    event.preventDefault();

    newElement = this.insertRealElementIntoSurvey(
      this.draggedOverElement,
      this.sourceElement,
      this.pageOrPanel,
      this.isBottom,
      this.isEdge
    );

    this.creator.selectElement(newElement);
  }

  private insertGhostElementIntoSurvey(
    draggedOverElement: any,
    isBottom: boolean,
    isEdge: boolean = false
  ): boolean {
    const newPage = draggedOverElement.isPage
      ? draggedOverElement
      : draggedOverElement.page;

    if (!!this.pageOrPanel && this.pageOrPanel.name !== newPage.name) {
      this.removeGhostElementFromSurvey(this.pageOrPanel);
    }

    this.pageOrPanel = newPage;
    this.pageOrPanel.dragDropStart(
      this.sourceElement,
      this.ghostElement,
      DragDropHelper.nestedPanelDepth
    );

    return this.pageOrPanel.dragDropMoveTo(
      draggedOverElement,
      isBottom,
      isEdge
    );
  }

  private insertRealElementIntoSurvey(
    draggedOverElement,
    element,
    page,
    isBottom,
    isEdge
  ) {
    this.removeGhostElementFromSurvey(page);
    page.dragDropStart(null, element, DragDropHelper.nestedPanelDepth);
    page.dragDropMoveTo(draggedOverElement, isBottom, isEdge);
    return page.dragDropFinish();
  }

  private removeGhostElementFromSurvey(page) {
    if (!!page) page.dragDropFinish(true);
  }

  public onDragEnd() {
    this.removeGhostElementFromSurvey(this.pageOrPanel);

    var prevEvent = DragDropHelper.prevEvent;
    prevEvent.element = null;
    prevEvent.x = -1;
    prevEvent.y = -1;

    this.draggedOverElement = null;
    this.pageOrPanel = null;
    this.ghostElement = null;
    this.sourceElement = null;
    this.isBottom = null;
    this.isEdge = null;
  }
}
