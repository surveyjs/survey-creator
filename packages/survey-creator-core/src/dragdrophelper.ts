import * as Survey from "survey-knockout";
import { IElement, PageModel } from "survey-knockout";
export class DragDropTargetElement {
  private nestedPanelDepth: number;
  public page: PageModel;
  public target: any;
  public source: IElement;
  constructor(
    page: PageModel,
    target: any,
    source: IElement,
    nestedPanelDepth: number = -1
  ) {
    this.nestedPanelDepth = nestedPanelDepth;
    this.page = page;
    this.target = target;
    this.source = source;
    page.dragDropStart(source, target, nestedPanelDepth);
  }
  public moveTo(
    destination: any,
    isBottom: boolean,
    isEdge: boolean = false
  ): boolean {
    this.moveToPage(destination.page);
    return this.page.dragDropMoveTo(destination, isBottom, isEdge);
  }
  public doDrop(): any {
    return this.page.dragDropFinish();
  }
  public clear() {
    this.page.dragDropFinish(true);
  }
  public moveToPage(page: PageModel) {
    if (!!page && page !== this.page) {
      this.clear();
      this.page = page;
      this.page.dragDropStart(this.source, this.target, this.nestedPanelDepth);
    }
  }
}

export class DragDropHelper {
  public static edgeHeight: number = 20;
  public static nestedPanelDepth: number = -1;
  static dataStart: string = "{element:";
  static dragData: any = { text: "", json: null };
  static prevEvent = { element: null, x: -1, y: -1 };
  private onModifiedCallback: (options?: any) => any;
  public ddTarget: DragDropTargetElement = null;
  static counter: number = 1;
  private data: Survey.ISurvey;
  constructor(
    data: Survey.ISurvey,
    onModifiedCallback: (options?: any) => any
  ) {
    this.data = data;
    this.onModifiedCallback = onModifiedCallback;
  }
  public get survey(): Survey.Survey {
    return <Survey.Survey>this.data;
  }
  public startDragQuestion(event: DragEvent, element: any) {
    var json = new Survey.JsonObject().toJsonObject(element);
    json["type"] = element.getType();
    this.prepareData(event, element.name, json, element);
  }
  public startDragToolboxItem(
    event: DragEvent,
    elementName: string,
    elementJson: any
  ) {
    this.prepareData(event, elementName, elementJson, null);
    event.cancelBubble = true;
  }
  public isSurveyDragging(event: DragEvent): boolean {
    if (!event) return false;
    var data = this.getData(event).text;
    return data && data.indexOf(DragDropHelper.dataStart) == 0;
  }
  public doDragDropOver(
    event: DragEvent,
    element: any,
    isEdge: boolean = false
  ) {
    event = this.isCanDragContinue(event, element);
    if (!event) return;
    var bottomInfo = this.isBottom(event);
    if (element.isPage && element.elements.length > 0) {
      var lastEl = element.elements[element.elements.length - 1];
      if (!this.isBottomThanElement(event, lastEl)) return;
      element = lastEl;
      isEdge = true;
      bottomInfo.isEdge = true;
      bottomInfo.isBottom = true;
    }

    isEdge = element.isPanel ? isEdge && bottomInfo.isEdge : true;
    if (element.isPanel && !isEdge && element.elements.length > 0) return;
    this.ddTarget.moveTo(element, bottomInfo.isBottom, isEdge);
  }
  public doDragDropOverFlow(event: DragEvent, element: any) {
    if (!!this.ddTarget) {
      event = this.isCanDragContinue(event, element);
      if (!event) return true;
      var bottomInfo = this.isBottom(event);
      return this.ddTarget.moveTo(
        element,
        bottomInfo.isBottom,
        bottomInfo.isEdge
      );
    }
    return true;
  }
  private isCanDragContinue(event: DragEvent, element: any): DragEvent {
    event = this.getEvent(event);
    if (
      !element ||
      !this.isSurveyDragging(event) ||
      this.isSamePlace(event, element)
    )
      return null;
    return event;
  }
  public end() {
    if (this.ddTarget) {
      this.ddTarget.clear();
    }
    this.clearData();
  }
  public get isMoving(): boolean {
    return this.ddTarget && !!this.ddTarget.source;
  }
  public doDrop(event: DragEvent, prevedDefault: boolean = true) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (this.isSurveyDragging(event)) {
      if (prevedDefault) {
        event.preventDefault();
      }
      var newElement = this.ddTarget.doDrop();
      if (this.onModifiedCallback)
        this.onModifiedCallback({
          type: "DO_DROP",
          page: this.ddTarget.page,
          source: this.ddTarget.source,
          target: this.ddTarget.target,
          newElement: this.ddTarget.source ? null : newElement,
          moveToParent: newElement.parent,
          moveToIndex: !!newElement.parent
            ? newElement.parent.elements.indexOf(newElement)
            : -1,
        });
    }
    this.end();
  }
  public doLeavePage(event: DragEvent) {
    if (!!this.ddTarget) {
      this.ddTarget.moveTo(null, false);
    }
  }
  private createTargetElement(elementName: string, json: any): any {
    if (!elementName || !json) return null;
    var targetElement = null;
    targetElement = Survey.Serializer.createClass(json["type"]);
    new Survey.JsonObject().toObject(json, targetElement);
    targetElement.name = elementName;
    if (targetElement["setSurveyImpl"]) {
      targetElement["setSurveyImpl"](this.survey);
    } else {
      targetElement["setData"](this.survey);
    }
    targetElement.renderWidth = "100%";
    return targetElement;
  }
  private isBottom(event: DragEvent): any {
    event = this.getEvent(event);
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
  private isBottomThanElement(event: DragEvent, lastEl: any): boolean {
    var el = lastEl.renderedElement;
    if (!el) return false;
    event = this.getEvent(event);
    var elY = <number>el.offsetTop + <number>el.clientHeight;
    var y = event.offsetY;
    if (event.hasOwnProperty("layerX")) {
      y = event["layerY"] - <number>event.currentTarget["offsetTop"];
    }
    return y > elY;
  }
  private isSamePlace(event: DragEvent, element: any): boolean {
    var prev = DragDropHelper.prevEvent;
    if (
      prev.element != element ||
      Math.abs(event.clientX - prev.x) > 5 ||
      Math.abs(event.clientY - prev.y) > 5
    ) {
      prev.element = element;
      prev.x = event.clientX;
      prev.y = event.clientY;
      return false;
    }
    return true;
  }
  private getEvent(event: DragEvent): DragEvent {
    return event["originalEvent"] ? event["originalEvent"] : event;
  }
  private prepareData(
    event: DragEvent,
    elementName: string,
    json: any,
    source: Survey.IElement
  ) {
    var str = DragDropHelper.dataStart + elementName + "}";
    this.setData(event, str);
    var targetElement = this.createTargetElement(elementName, json);
    this.ddTarget = new DragDropTargetElement(
      this.survey.currentPage,
      targetElement,
      source,
      DragDropHelper.nestedPanelDepth
    );
  }
  private setData(event: DragEvent, text: string) {
    event = this.getEvent(event);
    if (event.dataTransfer) {
      event.dataTransfer.setData("Text", text);
      event.dataTransfer.effectAllowed = "copy";
    }
    DragDropHelper.dragData = { text: text };
  }
  private getData(event: DragEvent): any {
    event = this.getEvent(event);
    if (event.dataTransfer) {
      var text = event.dataTransfer.getData("Text");
      if (text) {
        DragDropHelper.dragData.text = text;
      }
    }
    return DragDropHelper.dragData;
  }
  private clearData() {
    this.ddTarget = null; // We should reset ddTarget to null due to the https://surveyjs.answerdesk.io/ticket/details/T1003 - onQuestionAdded not fired after D&D
    DragDropHelper.dragData = { text: "", json: null };
    var prev = DragDropHelper.prevEvent;
    prev.element = null;
    prev.x = -1;
    prev.y = -1;
  }
}
