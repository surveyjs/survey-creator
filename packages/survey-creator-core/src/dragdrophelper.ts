import {
  IElement,
  PageModel,
  ISurvey,
  SurveyModel,
  JsonObject,
  Serializer,
  SurveyElement,
  SurveyElementTemplateData,
  property,
  Question,
  Base,
} from "survey-core";
import { CreatorBase } from "./creator-base";
import { IPortableDragEvent } from "./utils/events";

// export class DragDropHelper<T extends SurveyModel> extends Base {
//   constructor(public creator: CreatorBase<T>) {
//     super();
//   }

//   get survey(): SurveyModel {
//     return this.creator.survey;
//   }

//   private createDragDataJsonText(element: SurveyElement) {
//     const json = new JsonObject().toJsonObject(element);
//     json["type"] = element.getType();
//     return JSON.stringify(json);
//   }
//   public createElementFromJsonText(jsonText: string): SurveyElement {
//     const json = JSON.parse(jsonText);
//     const instance: SurveyElement = Serializer.createClass(json["type"]);
//     new JsonObject().toObject(json, instance);

//     if (instance["setSurveyImpl"]) {
//       instance["setSurveyImpl"](this.survey);
//     } else {
//       instance["setData"](this.survey);
//     }

//     return instance;
//   }

//   // Drag-drop feedback
//   public createDragOverFeedback(jsonText: string): SurveyElementTemplateData {
//     const instance = this.createElementFromJsonText(jsonText);

//     // bad smell
//     let name = "survey-question";
//     if (instance.getType() == "panel") {
//       name = "survey-panel";
//     } else if (instance.getType() == "flowpanel") {
//       name = "survey-flowpanel";
//     }

//     return {
//       name: name,
//       data: instance,
//       afterRender: undefined,
//     };
//   }

//   private dragOverFeedbackInstance: SurveyElementTemplateData;
//   private cachedJsonText: string;
//   public get dragOverFeedback(): SurveyElementTemplateData {
//     if (!this.dragOverFeedbackInstance) {
//       const jsonText = this.cachedJsonText; // event.dataTransfer.getData("svc-item-json");

//       if (!!jsonText) {
//         this.dragOverFeedbackInstance = this.createDragOverFeedback(jsonText);
//       }
//     }
//     return this.dragOverFeedbackInstance;
//   }
//   @property() _showDragOverFeedbackAbove: boolean;
//   @property() _showDragOverFeedbackBelow: boolean;
//   @property() draggedOverQuestion: SurveyElement;
//   @property() draggedOverPage: PageModel;

//   private draggedSurveyElement: SurveyElement;
//   public showDragOverPage(page: PageModel): boolean {
//     return this.draggedOverPage !== undefined && page.elements.length <= 0;
//   }
//   public showDragOverFeedbackAbove(surveyElement: SurveyElement): boolean {
//     return (
//       surveyElement === this.draggedOverQuestion &&
//       this._showDragOverFeedbackAbove
//     );
//   }
//   public showDragOverFeedbackBelow(surveyElement: SurveyElement): boolean {
//     return (
//       surveyElement === this.draggedOverQuestion &&
//       this._showDragOverFeedbackBelow
//     );
//   }

//   public clearDragFeedback() {
//     this.draggedOverQuestion = undefined;
//     this.draggedOverPage = undefined;
//     this.dragOverFeedbackInstance = undefined;
//     this._showDragOverFeedbackAbove = false;
//     this._showDragOverFeedbackBelow = false;
//     this.cachedJsonText = undefined;
//     this.draggedSurveyElement = undefined;
//   }

//   // /Drag-drop feedback

//   public dragToolboxItem(jsonText: string, event: IPortableDragEvent) {
//     this.clearDragFeedback();
//     if (!this.creator.readOnly) {
//       event.dataTransfer.setData("svc-item-json", jsonText);
//       event.dataTransfer.effectAllowed = "move";

//       this.cachedJsonText = jsonText;
//     }
//   }

//   public dragStart(surveyElement: SurveyElement, event: IPortableDragEvent) {
//     const jsonText = this.createDragDataJsonText(surveyElement);
//     event.cancelBubble = true;
//     this.dragToolboxItem(jsonText, event);
//     this.draggedSurveyElement = surveyElement;
//     return true;
//   }

//   public dragOverPage(page: PageModel, event: IPortableDragEvent) {
//     event.preventDefault();
//     event.cancelBubble = true;
//     event.stopPropagation();

//     if (page.elements.length > 0) return;

//     this.draggedOverQuestion = undefined;
//     this.draggedOverPage = page;
//   }
//   public dragOver(surveyElement: SurveyElement, event: IPortableDragEvent) {
//     event.preventDefault();
//     event.cancelBubble = true;
//     event.stopPropagation();

//     this.draggedOverQuestion = surveyElement;
//     this.draggedOverPage = undefined;

//     const isBelow = this.isAtLowerPartOfCurrentTarget(event);
//     this._showDragOverFeedbackAbove = !isBelow;
//     this._showDragOverFeedbackBelow = isBelow;
//   }

//   drop(surveyElement: SurveyElement, event: IPortableDragEvent) {
//     this.dropAt(surveyElement, event, this._showDragOverFeedbackBelow);
//   }
//   public dropAtPage(page: PageModel, event: IPortableDragEvent) {
//     event.stopPropagation();
//     const jsonText = event.dataTransfer.getData("svc-item-json");
//     if (!!jsonText) {
//       const instance = this.createElementFromJsonText(jsonText);
//       page.addQuestion(instance as Question);
//       this.removeDraggedQuestion();
//       this.end();
//     }
//   }
//   public dropAt(
//     surveyElement: SurveyElement,
//     event: IPortableDragEvent,
//     below: boolean
//   ) {
//     event.stopPropagation();
//     if (!surveyElement) {
//       surveyElement = this.draggedOverQuestion as Question;
//     }
//     if (!surveyElement) {
//       return;
//     }

//     if (below === undefined) {
//       below = this.isAtLowerPartOfCurrentTarget(event);
//     }

//     const jsonText = event.dataTransfer.getData("svc-item-json");
//     if (!!jsonText) {
//       const instance = this.createElementFromJsonText(jsonText);
//       const parent: any = surveyElement.parent;
//       if (below) {
//         parent.insertElementAfter(instance, surveyElement);
//       } else {
//         parent.insertElementBefore(instance, surveyElement);
//       }

//       this.removeDraggedQuestion();
//     }
//     this.end();
//   }

//   public dragEnd(surveyElement: SurveyElement, event: IPortableDragEvent) {
//     this.clearDragFeedback();
//     this.end();
//   }

//   private removeDraggedQuestion() {
//     if (this.draggedSurveyElement && this.draggedSurveyElement.parent) {
//       this.draggedSurveyElement.parent.removeElement(
//         <IElement>(<any>this.draggedSurveyElement)
//       );
//     }
//   }

//   private isAtLowerPartOfCurrentTarget(event: IPortableDragEvent): boolean {
//     var target = event.currentTarget;
//     if (!target["getBoundingClientRect"]) {
//       return true;
//     }
//     const bounds: DOMRect = (<any>target).getBoundingClientRect();
//     const middle = (bounds.bottom + bounds.top) / 2;
//     return event.clientY >= middle;
//   }

//   public end() {
//     this.clearDragFeedback();
//   }
// }

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
  constructor(private creator: CreatorBase<SurveyModel>, onModifiedCallback: (options?: any) => any) {
    this.onModifiedCallback = onModifiedCallback;
  }
  private get data(): SurveyModel {
    return this.creator.survey;
  }
  public get survey(): SurveyModel {
    return this.data;
  }
  public startDragQuestion(event: IPortableDragEvent, element: any) {
    event.stopPropagation();

    var json = new JsonObject().toJsonObject(element);
    json["type"] = element.getType();
    this.prepareData(event, element.name, json, element);

    return true;
  }
  public startDragToolboxItem(
    event: IPortableDragEvent,
    json: any
  ) {
    this.prepareData(event, json.name, json, null);
    event.cancelBubble = true;
  }

  public isSurveyDragging(event: IPortableDragEvent): boolean {
    if (!event) return false;
    var data = this.getData(event).text;
    return data && data.indexOf(DragDropHelper.dataStart) == 0;
  }
  public doDragDropOver(
    event: IPortableDragEvent,
    element: any,
    isEdge: boolean = false
  ) {
    event.dataTransfer.dropEffect = "copy";
    event = this.isCanDragContinue(event, element);
    if (!event) {
      return;
    }
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
  public doDragDropOverFlow(event: IPortableDragEvent, element: any) {
    if (!!this.ddTarget) {
      event = this.isCanDragContinue(event, element);
      if (!event) {
        return true;
      }
      var bottomInfo = this.isBottom(event);
      return this.ddTarget.moveTo(
        element,
        bottomInfo.isBottom,
        bottomInfo.isEdge
      );
    }
    return true;
  }
  private isCanDragContinue(
    event: IPortableDragEvent,
    element: any
  ): IPortableDragEvent {
    //event = this.getEvent(event);
    if (
      !element ||
      !this.isSurveyDragging(event) ||
      this.isSamePlace(event, element)
    ) {
      return null;
    }
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
  public doDrop(event: IPortableDragEvent, prevedDefault: boolean = true) {
    event.stopPropagation();

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
  public doLeavePage(event: IPortableDragEvent) {
    if (!!this.ddTarget) {
      this.ddTarget.moveTo(null, false);
    }
  }
  private createTargetElement(elementName: string, json: any): any {
    if (!elementName || !json) return null;
    var targetElement = null;
    targetElement = Serializer.createClass(json["type"]);
    new JsonObject().toObject(json, targetElement);
    targetElement.name = elementName;
    if (targetElement["setSurveyImpl"]) {
      targetElement["setSurveyImpl"](this.survey);
    } else {
      targetElement["setData"](this.survey);
    }
    targetElement.renderWidth = "100%";
    return targetElement;
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
  private isSamePlace(event: IPortableDragEvent, element: any): boolean {
    return false;
    /*
    var prev = DragDropHelper.prevEvent;
    console.log(
      "DragDropHelper::isSamePlace:element=%o, prev.element=%o",
      element,
      prev.element
    );
    console.log("(prev.element != element) == " + (prev.element != element));
    console.log(
      "Math.abs(event.clientX - prev.x) > 5 == " +
        (Math.abs(event.clientX - prev.x) > 5)
    );
    console.log(
      "Math.abs(event.clientY - prev.y) > 5 == " +
        (Math.abs(event.clientY - prev.y) > 5)
    );
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
    */
  }
  // private getEvent(event: DragEvent): DragEvent {
  //   return event["originalEvent"] ? event["originalEvent"] : event;
  // }
  private prepareData(
    event: IPortableDragEvent,
    elementName: string,
    json: any,
    source: IElement
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
  private setData(event: IPortableDragEvent, text: string) {
    //event = this.getEvent(event);
    if (event.dataTransfer) {
      event.dataTransfer.setData("Text", text);
      event.dataTransfer.effectAllowed = "copy";
    }
    DragDropHelper.dragData = { text: text };
  }
  private getData(event: IPortableDragEvent): any {
    //event = this.getEvent(event);
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
