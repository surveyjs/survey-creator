import {
  IElement,
  PageModel,
  SurveyModel,
  JsonObject,
  Base,
  ItemValue,
  property,
  settings,
  QuestionSelectBase
} from "survey-core";
import { CreatorBase } from "./creator-base";
import { IPortableDragEvent } from "./utils/events";

export class DragDropHelper extends Base {
  public static edgeHeight: number = 20;
  public static nestedPanelDepth: number = -1;
  public static prevEvent = {
    element: null,
    x: -1,
    y: -1
  };

  private draggedElement: IElement = null;
  private draggedElementShortcut: HTMLElement = null;
  private scrollIntervalId: ReturnType<typeof setTimeout> = null;
  private ghostElement: IElement = null;
  @property() draggedOverElement: IElement = null;
  @property() isBottom: boolean = null;
  private isEdge: boolean = null;
  private pageOrPanel: PageModel = null;
  private itemValueDraggedQuestion: QuestionSelectBase = null;

  private get survey(): SurveyModel {
    return this.creator.survey;
  }

  private get draggedElementType() {
    if (!this.draggedElement) return "toolbox-item";
    return this.draggedElement.getType();
  }

  constructor(private creator: CreatorBase<SurveyModel>) {
    super();
  }

  public startDrag(draggedElement: IElement) {
    this.draggedElement = draggedElement;
    this.draggedElementShortcut = this.createDraggedElementShortcut();

    document.body.append(this.draggedElementShortcut);
    document.addEventListener("pointermove", this.moveDraggedElementShortcut);
    this.draggedElementShortcut.addEventListener("pointerup", this.drop);
  }

  private moveDraggedElementShortcut = (event: PointerEvent) => {
    let newDraggedOverElement;

    this.doScroll(event.clientY, event.clientX);

    if (!this.ghostElement) this.ghostElement = this.createGhostElement();

    let shortcutXCenter = this.draggedElementShortcut.offsetWidth / 2;
    let shortcutYCenter = this.draggedElementShortcut.offsetHeight / 2;

    if (
      this.isShortcutElementMoveOutOfDocument(
        event.pageX,
        event.pageY,
        shortcutXCenter,
        shortcutYCenter
      )
    )
      return;

    this.draggedElementShortcut.style.left =
      event.clientX - shortcutXCenter + "px";
    this.draggedElementShortcut.style.top =
      event.clientY - shortcutYCenter + "px";

    let newDraggedOverHTMLElement = this.getDraggedOverHTMLElementFromPoint(
      event.clientX,
      event.clientY
    );

    if (!newDraggedOverHTMLElement) {
      this.removeGhostElementFromSurvey();
      this.draggedElementShortcut.style.cursor = "not-allowed";
      return;
    }

    if (
      newDraggedOverHTMLElement.dataset.svcDroppableElementName ===
      "svc-drag-drop-ghost"
    ) {
      console.log("aaaaa");
      this.draggedElementShortcut.style.cursor = "grabbing";
      return;
    }

    newDraggedOverElement = this.survey.getQuestionByName(
      newDraggedOverHTMLElement.dataset.svcDroppableElementName
    );

    if (
      !newDraggedOverElement ||
      newDraggedOverElement === this.draggedElement
    ) {
      this.draggedOverElement = null;
      this.removeGhostElementFromSurvey();
      this.draggedElementShortcut.style.cursor = "not-allowed";
      return;
    }

    this.draggedElementShortcut.style.cursor = "grabbing";

    // IS BOTTOM IS EDGE
    // const bottomInfo = this.isAtLowerPartOfCurrentTarget(event);
    // this.isEdge = bottomInfo.isEdge;
    // this.isBottom = bottomInfo.isBottom;
    const rect = newDraggedOverHTMLElement.getBoundingClientRect();
    const middle = Math.abs(rect.y) + rect.height / 2;
    let newIsEdge = true;
    let newIsBottom = event.clientY >= middle;
    // IS BOTTOM IS EDGE

    if (
      newDraggedOverElement === this.draggedOverElement &&
      newIsEdge === this.isEdge &&
      newIsBottom === this.isBottom
    )
      return;

    this.isEdge = newIsEdge;
    this.isBottom = newIsBottom;

    this.draggedOverElement = newDraggedOverElement;

    this.insertGhostElementIntoSurvey();
  };

  private drop = () => {
    clearInterval(this.scrollIntervalId);
    if (this.draggedOverElement) {
      console.log("drop on: " + this.draggedOverElement.name);
      this.insertRealElementIntoSurvey();
    }

    document.removeEventListener(
      "pointermove",
      this.moveDraggedElementShortcut
    );
    this.draggedElementShortcut.removeEventListener("pointerup", this.drop);
    document.body.removeChild(this.draggedElementShortcut);
    this.onDragEnd();
  };

  private getDraggedOverHTMLElementFromPoint(x, y): HTMLElement {
    const selector = "[data-svc-droppable-element-name]";
    this.draggedElementShortcut.hidden = true;
    let draggedOverNode = document.elementFromPoint(x, y);
    this.draggedElementShortcut.hidden = false;

    let droppableElement =
      draggedOverNode.closest(selector) ||
      draggedOverNode.querySelector(selector);

    if (!droppableElement) {
      window["draggedOverNode"] = draggedOverNode;
      console.dir(draggedOverNode);
    }

    return <HTMLElement>droppableElement;
  }
  private createDraggedElementShortcut() {
    const draggedElementShortcut = document.createElement("div");
    draggedElementShortcut.innerText = this.draggedElement.name;
    draggedElementShortcut.style.height = "40px";
    draggedElementShortcut.style.minWidth = "100px";
    draggedElementShortcut.style.borderRadius = "100px";
    draggedElementShortcut.style.backgroundColor = "white";
    draggedElementShortcut.style.padding = "10px";

    draggedElementShortcut.style.cursor = "grabbing";
    draggedElementShortcut.style.position = "absolute";
    draggedElementShortcut.style.zIndex = "1000";
    return draggedElementShortcut;
  }
  private doScroll(clientY, clientX) {
    clearInterval(this.scrollIntervalId);
    const startScrollBoundary = 50;
    // let scrollableParentElement = getScrollableParent(dropZoneElement)
    //   .parentNode;
    let scrollableParentElement = document.querySelector(
      ".svc-tab-designer.sv-root-modern"
    );

    let top = scrollableParentElement.getBoundingClientRect().top;
    let bottom = scrollableParentElement.getBoundingClientRect().bottom;
    let left = scrollableParentElement.getBoundingClientRect().left;
    let right = scrollableParentElement.getBoundingClientRect().right;

    if (clientY - top <= startScrollBoundary) {
      this.scrollIntervalId = setInterval(() => {
        scrollableParentElement.scrollTop -= 5;
      }, 10);
    } else if (bottom - clientY <= startScrollBoundary) {
      this.scrollIntervalId = setInterval(() => {
        scrollableParentElement.scrollTop += 5;
      }, 10);
    } else if (right - clientX <= startScrollBoundary) {
      this.scrollIntervalId = setInterval(() => {
        scrollableParentElement.scrollLeft += 1;
      }, 10);
    } else if (clientX - left <= startScrollBoundary) {
      this.scrollIntervalId = setInterval(() => {
        scrollableParentElement.scrollLeft -= 1;
      }, 10);
    }
  }
  private createGhostElement(): any {
    const json = {
      type: "html",
      name: "svc-drag-drop-ghost",
      html: '<div class="svc-drag-drop-ghost"></div>'
    };
    return this.createElementFromJson(json);
  }
  private insertGhostElementIntoSurvey(): boolean {
    this.removeGhostElementFromSurvey();

    this.ghostElement.name = "svc-drag-drop-ghost"; //TODO

    this.pageOrPanel = this.draggedOverElement.isPage
      ? this.draggedOverElement
      : this.draggedOverElement["page"];

    this.pageOrPanel.dragDropStart(
      this.draggedElement,
      this.ghostElement,
      DragDropHelper.nestedPanelDepth
    );

    return this.pageOrPanel.dragDropMoveTo(
      this.draggedOverElement,
      this.isBottom,
      this.isEdge
    );
  }
  private insertRealElementIntoSurvey() {
    this.removeGhostElementFromSurvey();
    this.pageOrPanel.dragDropStart(
      this.draggedElement,
      this.draggedElement,
      DragDropHelper.nestedPanelDepth
    );
    this.pageOrPanel.dragDropMoveTo(
      this.draggedOverElement,
      this.isBottom,
      this.isEdge
    );
    const newElement = this.pageOrPanel.dragDropFinish();
    this.creator.selectElement(newElement);
  }
  private removeGhostElementFromSurvey() {
    if (!!this.pageOrPanel) this.pageOrPanel.dragDropFinish(true);
  }
  private createElementFromJson(json) {
    const element = this.creator.createNewElement(json);
    if (element["setSurveyImpl"]) {
      element["setSurveyImpl"](this.survey);
    } else {
      element["setData"](this.survey);
    }
    element.renderWidth = "100%";
    return element;
  }
  private isShortcutElementMoveOutOfDocument(
    pageX,
    pageY,
    shortcutXCenter,
    shortCutYCenter
  ) {
    if (pageX + shortcutXCenter >= document.documentElement.clientWidth)
      return true;
    if (pageY + shortCutYCenter >= document.documentElement.clientHeight)
      return true;
    if (pageX - shortcutXCenter <= 0) return true;
    if (pageY - shortCutYCenter <= 0) return true;

    return false;
  }

  //TODO =====================================

  public onDragStartToolboxItem(
    event: IPortableDragEvent,
    draggedElementJson: JsonObject
  ) {
    const draggedElement = this.createElementFromJson(draggedElementJson);
    return this.onDragStart(event, draggedElement);
  }

  public onDragStartQuestion(
    event: IPortableDragEvent,
    draggedElement: IElement
  ) {
    return this.onDragStart(event, draggedElement);
  }

  public onDragStartItemValue(
    event: IPortableDragEvent,
    question: QuestionSelectBase,
    item: ItemValue
  ) {
    event.stopPropagation();

    // shouldn't allow drag start on adorners (selectall, none, other)
    if (question.choices.indexOf(item) === -1) return false;

    event.dataTransfer.effectAllowed = "move";

    this.itemValueDraggedQuestion = question;
    this.draggedElement = <any>item;
    return true;
  }

  private onDragStart(event: IPortableDragEvent, draggedElement: IElement) {
    event.stopPropagation(); // prevent call startDrag event on Parent

    event.dataTransfer.effectAllowed = "move";

    this.ghostElement = this.createGhostElement();
    this.draggedElement = draggedElement;

    return true;
  }

  public onDragOverItemValue(
    event: IPortableDragEvent,
    question: QuestionSelectBase,
    item: any
  ) {
    if (this.draggedElementType !== "itemvalue") {
      return true; // ban drop here
    }

    // shouldn't allow drag over on adorners (selectall, none, other)
    if (question.choices.indexOf(item) === -1) return true;

    event.stopPropagation();

    if (item === this.draggedElement) {
      this.draggedOverElement = null;
      return true; // ban drop here
    }

    if (this.itemValueDraggedQuestion !== question) {
      this.draggedOverElement = null;
      return true; // ban drop here
    }

    event.preventDefault(); // alow drop here without return;

    this.draggedOverElement = item;

    const bottomInfo = this.isAtLowerPartOfCurrentTarget(event);
    this.isEdge = bottomInfo.isEdge;
    this.isBottom = bottomInfo.isBottom;
  }

  public getItemValueGhostPosition(item) {
    if (this.draggedOverElement !== item) return null;
    if (this.isBottom) return "bottom";
    return "top";
  }

  public onDragOver(event: IPortableDragEvent, draggedOverElement: any) {
    event.stopPropagation();

    if (this.draggedElementType === "itemvalue") {
      this.removeGhostElementFromSurvey();
      this.draggedOverElement = null;
      return true; // ban drop here
    }

    if (draggedOverElement === this.draggedElement) {
      this.removeGhostElementFromSurvey();
      return true; // ban drop here
    }

    event.preventDefault(); // alow drop here without return;

    if (this.isSamePlace(event, draggedOverElement)) {
      return false; // alow drop here
    }

    this.draggedOverElement = draggedOverElement;

    const bottomInfo = this.isAtLowerPartOfCurrentTarget(event);
    this.isEdge = bottomInfo.isEdge;
    this.isBottom = bottomInfo.isBottom;

    //TODO
    if (draggedOverElement.isPage && draggedOverElement.elements.length > 0) {
      const lastEl =
        draggedOverElement.elements[draggedOverElement.elements.length - 1];
      if (!this.isBottomThanElementForPage(event, lastEl)) return false; // alow drop here
      draggedOverElement = lastEl;
      this.isEdge = true;
    }

    if (draggedOverElement.isPanel) {
      this.isEdge = this.isEdge && this.calculateIsBottomForPanel(event).isEdge;
    } else {
      this.isEdge = true;
    }

    if (
      draggedOverElement.isPanel &&
      !this.isEdge &&
      draggedOverElement.elements.length > 0
    )
      return false; // alow drop here
    //EO TODO

    this.insertGhostElementIntoSurvey();

    return false; // alow drop here
  }

  private isSamePlace(event, draggedOverElement: any): boolean {
    const prevEvent = DragDropHelper.prevEvent;

    if (
      (prevEvent.element !== draggedOverElement &&
        Math.abs(event.clientX - prevEvent.x) > 5) ||
      Math.abs(event.clientY - prevEvent.y) > 5
    ) {
      prevEvent.element = draggedOverElement;
      prevEvent.x = event.clientX;
      prevEvent.y = event.clientY;
      return false;
    }
    return true;
  }

  private isAtLowerPartOfCurrentTarget(event): any {
    const target = event.currentTarget;
    if (!target["getBoundingClientRect"]) {
      return true;
    }
    const bounds: DOMRect = (<any>target).getBoundingClientRect();
    const middle = (bounds.bottom + bounds.top) / 2;
    75;

    return {
      isBottom: event.clientY >= middle,
      isEdge:
        event.clientY - bounds.bottom <= DragDropHelper.edgeHeight ||
        bounds.top - event.clientY <= DragDropHelper.edgeHeight
    };
  }

  private calculateIsBottomForPanel(event: IPortableDragEvent): any {
    //event = this.getEvent(event);
    const height = <number>event.currentTarget["clientHeight"];
    let y = event.offsetY;
    if (event.hasOwnProperty("layerX")) {
      y = event["layerY"] - <number>event.currentTarget["offsetTop"];
    }
    return {
      isBottom: y > height / 2,
      isEdge:
        y <= DragDropHelper.edgeHeight ||
        height - y <= DragDropHelper.edgeHeight
    };
  }

  private isBottomThanElementForPage(
    event: IPortableDragEvent,
    lastEl: any
  ): boolean {
    const el = lastEl.renderedElement;
    if (!el) return false;
    //event = this.getEvent(event);
    const elY = <number>el.offsetTop + <number>el.clientHeight;
    let y = event.offsetY;
    if (event.hasOwnProperty("layerX")) {
      y = event["layerY"] - <number>event.currentTarget["offsetTop"];
    }
    return y > elY;
  }

  public onDropItemValue(event: IPortableDragEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.doDropItemValue(
      this.itemValueDraggedQuestion,
      this.draggedElement,
      this.draggedOverElement,
      this.isBottom
    );

    return true;
  }
  private doDropItemValue(
    itemValuedraggedQuestion,
    draggedElement,
    draggedOverElement,
    isBottom
  ) {
    const isTop = !isBottom;
    const choices = itemValuedraggedQuestion.choices;
    const oldIndex = choices.indexOf(draggedElement);
    let newIndex = choices.indexOf(draggedOverElement);

    if (oldIndex < newIndex && isTop) {
      newIndex--;
    } else if (oldIndex > newIndex && isBottom) {
      newIndex++;
    }

    choices.splice(oldIndex, 1);
    choices.splice(newIndex, 0, draggedElement);
  }

  public onDrop(event: IPortableDragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.insertRealElementIntoSurvey();
  }

  public onDragEnd() {
    this.removeGhostElementFromSurvey();

    const prevEvent = DragDropHelper.prevEvent;
    prevEvent.element = null;
    prevEvent.x = -1;
    prevEvent.y = -1;

    this.draggedOverElement = null;
    this.draggedElementShortcut = null;
    this.ghostElement = null;
    this.draggedElement = null;
    this.pageOrPanel = null;
    this.itemValueDraggedQuestion = null;
    this.isBottom = null;
    this.isEdge = null;
    this.scrollIntervalId = null;
  }
}
