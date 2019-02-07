import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyHelper } from "./surveyHelper";

if (!!ko.options) {
  ko.options.useOnlyNativeEvents = true;
}

export class DragDropTargetElement {
  public nestedPanelDepth: number = -1;
  constructor(
    public page: Survey.Page,
    public target: any,
    public source: any
  ) {
    page.dragDropStart(source, target); //, DragDropTargetElement.nestedPanelPath);
  }
  public moveTo(
    destination: any,
    isBottom: boolean,
    isEdge: boolean = false
  ): boolean {
    //console.log(!!destination ? destination.name : "null");
    return this.page.dragDropMoveTo(destination, isBottom, isEdge);
  }
  public doDrop(): any {
    this.clearCore();
    return this.page.dragDropFinish();
  }
  public clear() {
    this.clearCore();
    this.page.dragDropFinish(true);
  }
  private clearCore() {
    if (!!this.target) {
      this.target["koIsDragging"](false);
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
  private scrollableElement: HTMLElement = null;
  private ddTarget: DragDropTargetElement = null;
  private prevCoordinates: { x: number; y: number };
  static counter: number = 1;
  private id: number = DragDropHelper.counter++;
  constructor(
    public data: Survey.ISurvey,
    onModifiedCallback: (options?: any) => any,
    parent: HTMLElement = null
  ) {
    this.onModifiedCallback = onModifiedCallback;
    this.scrollableElement =
      parent && <HTMLElement>parent.querySelector("#scrollableDiv");
    this.prevCoordinates = { x: -1, y: -1 };
  }
  public attachToElement(domElement, surveyElement) {
    var isFlowPanel =
      surveyElement.isPanel &&
      typeof surveyElement.getChildrenLayoutType === "function" &&
      surveyElement.getChildrenLayoutType() === "flow";
    var isFlowPanelInChrome = isFlowPanel && !!window["chrome"];

    domElement.style.opacity = surveyElement.koIsDragging() ? 0.4 : 1;
    domElement.draggable =
      surveyElement.allowingOptions.allowDragging && !isFlowPanel;
    if (isFlowPanelInChrome) {
      domElement.onpaste = function doPaste(e, el) {
        e.preventDefault();
        var clipData = window["clipboardData"];
        if (!!clipData) {
          var content = clipData.getData("text");
          if (window.getSelection) {
            var selObj = window.getSelection();
            var selRange = selObj.getRangeAt(0);
            selRange.deleteContents();
            selRange.insertNode(document.createTextNode(content));
          }
        } else if ((e.originalEvent || e).clipboardData) {
          content = (e.originalEvent || e).clipboardData.getData("text/plain");
          document.execCommand("insertText", false, content);
        }
        return true;
      };
    }
    domElement.ondragover = function(e) {
      if (!surveyElement.allowingOptions.allowDragging) return false;
      if (isFlowPanel)
        return surveyElement
          .dragDropHelper()
          .doDragDropOverFlow(e, surveyElement);
      if (!e["markEvent"]) {
        e["markEvent"] = true;
        surveyElement.dragDropHelper().doDragDropOver(e, surveyElement, true);
        return false;
      }
    };
    domElement.ondrop = function(e) {
      var helper = surveyElement.dragDropHelper();
      var preventDefault = !(
        isFlowPanel &&
        !!helper.ddTarget &&
        !!helper.ddTarget.source &&
        helper.ddTarget.source.parent == surveyElement
      );
      //Fix the bug for chrome in contenteditable
      if (isFlowPanelInChrome) {
        var content = e.dataTransfer.getData("text");
        var dropRange = null;
        if (!!document.caretRangeFromPoint) {
          dropRange = document.caretRangeFromPoint(e.clientX, e.clientY);
        } else {
          if (!!document.caretPositionFromPoint) {
            dropRange = document.caretPositionFromPoint(e.clientX, e.clientY);
          }
        }
        if (!!dropRange) {
          preventDefault = true;
          e.preventDefault();
          if (surveyElement["isDragStarted"]) {
            var selObj = window.getSelection();
            if (!!selObj && selObj.rangeCount > 0) {
              var selRange = selObj.getRangeAt(0);
              if (!!selRange) {
                selRange.deleteContents();
              }
            }
          }
          dropRange.insertNode(document.createTextNode(content));
          let selection = window.getSelection();
          if (!!selection) {
            selection.removeAllRanges();
            selection.addRange(dropRange);
          }
        }
      }
      if (!e["markEvent"]) {
        e["markEvent"] = true;
        helper.doDrop(e, preventDefault);
      }
    };
    if (!isFlowPanel) {
      domElement.ondragstart = function(e: DragEvent) {
        var target: any = e.target || e.srcElement;
        if (
          !!target &&
          !!target.contains &&
          target.contains(document.activeElement)
        ) {
          e.preventDefault();
          return false;
        }
        if (!surveyElement.allowingOptions.allowDragging) return false;
        if (!e["markEvent"]) {
          e["markEvent"] = true;
          surveyElement.dragDropHelper().startDragQuestion(e, surveyElement);
        }
        e.cancelBubble = true;
      };
    }
    if (isFlowPanelInChrome) {
      domElement.ondragstart = function(e: DragEvent) {
        surveyElement.isDragStarted = true;
      };
    }
    domElement.ondragend = function(e) {
      delete surveyElement["isDragStarted"];
      surveyElement.dragDropHelper().end();
    };
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
    event = this.getEvent(event);
    if (this.isSameCoordinates(event)) return;
    this.checkScrollY(event);
    if (
      !element ||
      !this.isSurveyDragging(event) ||
      this.isSamePlace(event, element)
    )
      return;
    var bottomInfo = this.isBottom(event);
    if (element.isPage && element.elements.length > 0) {
      var lastEl = element.elements[element.elements.length - 1];
      if (!this.isBottomThanElement(event, lastEl)) return;
      element = lastEl;
      bottomInfo.isEdge = true;
      bottomInfo.isBottom = true;
    }

    isEdge = element.isPanel ? isEdge && bottomInfo.isEdge : true;
    if (element.isPanel && !isEdge && element.elements.length > 0) return;
    this.ddTarget.moveTo(element, bottomInfo.isBottom, isEdge);
  }
  public doDragDropOverFlow(event: DragEvent, element: any) {
    if (!!this.ddTarget) {
      return this.ddTarget.moveTo(element, false, false);
    }
    return true;
  }
  public end() {
    if (this.ddTarget) {
      this.ddTarget.clear();
    }
    this.isScrollStop = true;
    this.clearData();
  }
  public get isMoving(): boolean {
    return this.ddTarget && this.ddTarget.source;
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
            : -1
        });
    }
    this.end();
  }
  public doLeavePage(event: DragEvent) {
    if (!!this.ddTarget) {
      this.ddTarget.moveTo(null, false);
    }
  }
  public scrollToElement(el: HTMLElement) {
    if (!this.scrollableElement || !el) return;
    el.scrollIntoView(false);
  }
  private createTargetElement(elementName: string, json: any): any {
    if (!elementName || !json) return null;
    var targetElement = null;
    targetElement = Survey.JsonObject.metaData.createClass(json["type"]);
    new Survey.JsonObject().toObject(json, targetElement);
    targetElement.name = elementName;
    if (targetElement["setSurveyImpl"]) {
      targetElement["setSurveyImpl"](this.survey);
    } else {
      targetElement["setData"](this.survey);
    }
    targetElement.renderWidth = "100%";
    targetElement["koIsDragging"](true);
    return targetElement;
  }
  private isBottom(event: DragEvent): any {
    event = this.getEvent(event);
    var height = <number>event.currentTarget["clientHeight"];
    var y = event.offsetY;
    if (event.hasOwnProperty("layerX")) {
      y = event.layerY - <number>event.currentTarget["offsetTop"];
    }

    return {
      isBottom: y > height / 2,
      isEdge:
        y <= DragDropHelper.edgeHeight ||
        height - y <= DragDropHelper.edgeHeight
    };
  }
  private isBottomThanElement(event: DragEvent, lastEl: any): boolean {
    var el = lastEl.renderedElement;
    if (!el) return false;
    event = this.getEvent(event);
    var elY = <number>el.offsetTop + <number>el.clientHeight;
    var y = event.offsetY;
    if (event.hasOwnProperty("layerX")) {
      y = event.layerY - <number>event.currentTarget["offsetTop"];
    }
    return y > elY;
  }
  private isSameCoordinates(event: DragEvent): boolean {
    var res =
      Math.abs(event.pageX - this.prevCoordinates.x) > 5 ||
      Math.abs(event.pageY - this.prevCoordinates.y) > 5;
    if (res) {
      this.prevCoordinates.x = event.pageX;
      this.prevCoordinates.y = event.pageY;
    }
    return !res;
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
  private isScrollStop: boolean = true;
  private static ScrollDelay: number = 30;
  private static ScrollOffset: number = 100;
  private checkScrollY(e: DragEvent) {
    if (!this.scrollableElement) return;
    var y = this.getScrollableElementPosY(e);
    if (y < 0) return;
    this.isScrollStop = true;
    var height = <number>this.scrollableElement["clientHeight"];
    if (y < DragDropHelper.ScrollOffset && y >= 0) {
      this.isScrollStop = false;
      this.doScrollY(-1);
    }
    if (height - y < DragDropHelper.ScrollOffset && height >= y) {
      this.isScrollStop = false;
      this.doScrollY(1);
    }
  }
  private doScrollY(step: number) {
    var el = this.scrollableElement;
    var scrollY = el.scrollTop + step;
    if (scrollY < 0) {
      this.isScrollStop = true;
      return;
    }
    el.scrollTop = scrollY;
    var self = this;
    if (!this.isScrollStop) {
      setTimeout(function() {
        self.doScrollY(step);
      }, DragDropHelper.ScrollDelay);
    }
  }
  private getScrollableElementPosY(e: DragEvent): number {
    if (!this.scrollableElement || !e.currentTarget) return -1;
    var el = e.currentTarget;
    var offsetTop = 0;
    while (el && el != this.scrollableElement) {
      offsetTop += <number>el["offsetTop"];
      el = el["offsetParent"];
    }
    return (
      e.offsetY +
      <number>e.currentTarget["offsetTop"] -
      this.scrollableElement.offsetTop -
      this.scrollableElement.scrollTop
    );
  }
  private getEvent(event: DragEvent): DragEvent {
    return event["originalEvent"] ? event["originalEvent"] : event;
  }
  private getY(element: HTMLElement): number {
    var result = 0;

    while (element) {
      result += element.offsetTop - element.scrollTop + element.clientTop;
      element = <HTMLElement>element.offsetParent;
    }
    return result;
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
      <Survey.Page>this.survey.currentPage,
      targetElement,
      source
    );
    this.ddTarget.nestedPanelDepth = DragDropHelper.nestedPanelDepth;
  }
  private setData(event: DragEvent, text: string) {
    if (event["originalEvent"]) {
      event = event["originalEvent"];
    }
    if (event.dataTransfer) {
      event.dataTransfer.setData("Text", text);
      event.dataTransfer.effectAllowed = "copy";
    }
    DragDropHelper.dragData = { text: text };
  }
  private getData(event: DragEvent): any {
    if (event["originalEvent"]) {
      event = event["originalEvent"];
    }
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
    this.prevCoordinates.x = -1;
    this.prevCoordinates.y = -1;
  }
}
