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
  public static edgeHeight: number = 30;
  public static nestedPanelDepth: number = -1;
  public static prevEvent = {
    element: null,
    x: -1,
    y: -1
  };
  public static newGhostPage: PageModel = null;
  public static dropTargetHTMLSelector = "[data-svc-drop-target-element-name]";
  public static ghostSurveyElementName =
    "svc-drag-drop-ghost-survey-element-name"; // before renaming use globa search (we have also css selectors)

  private draggedSurveyElement: IElement = null;
  @property() dropTargetSurveyElement: IElement = null;

  private draggedElementShortcut: HTMLElement = null;
  private scrollIntervalId: ReturnType<typeof setTimeout> = null;
  private ghostSurveyElement: IElement = null;
  @property() isBottom: boolean = null;
  private isEdge: boolean = null;
  private pageOrPanel: PageModel = null;
  private itemValueDraggedQuestion: QuestionSelectBase = null;

  private get survey(): SurveyModel {
    return this.creator.survey;
  }

  private get draggedElementType() {
    if (!this.draggedSurveyElement) return "toolbox-item";
    return this.draggedSurveyElement.getType();
  }

  constructor(private creator: CreatorBase<SurveyModel>) {
    super();
  }

  public startDragToolboxItem(draggedElementJson: JsonObject) {
    const draggedElement = this.createElementFromJson(draggedElementJson);
    this.startDrag(draggedElement);
  }

  public startDrag(draggedElement: IElement) {
    this.draggedSurveyElement = draggedElement;
    this.ghostSurveyElement = this.createGhostSurveyElement();
    this.draggedElementShortcut = this.createDraggedElementShortcut();

    document.body.append(this.draggedElementShortcut);
    document.addEventListener("pointermove", this.moveDraggedElement);
    this.draggedElementShortcut.addEventListener("pointerup", this.drop);
  }

  private moveDraggedElement = (event: PointerEvent) => {
    this.moveShortcutElement(event);

    if (this.draggedSurveyElement.getType() === "itemvalue") {
      this.handleItemValueDragOver(event);
    } else {
      this.handleSurveyElementDragOver(event);
    }
  };

  private moveShortcutElement(event: PointerEvent) {
    this.doScroll(event.clientY, event.clientX);

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
  }

  private handleItemValueDragOver(event: PointerEvent) {}

  private handleSurveyElementDragOver(event: PointerEvent) {
    this.draggedElementShortcut.style.cursor = "grabbing";

    let dropTargetHTMLElement = this.findDropTargetHTMLElementFromPoint(
      event.clientX,
      event.clientY
    );

    if (!dropTargetHTMLElement) {
      this.banDropSurveyElement();
      // console.log("1");
      return;
    }

    if (this.checkHTMLElementIsGhost(dropTargetHTMLElement)) return;

    let { dropTargetSurveyElement, isEdge, isBottom } = this.getDragInfo(
      event,
      dropTargetHTMLElement
    );

    if (!dropTargetSurveyElement) {
      this.banDropSurveyElement();
      // console.log("2");
      return;
    }

    if (
      dropTargetSurveyElement === this.dropTargetSurveyElement &&
      isEdge === this.isEdge &&
      isBottom === this.isBottom
    )
      return;

    this.isEdge = isEdge;
    this.isBottom = isBottom;
    this.dropTargetSurveyElement = dropTargetSurveyElement;
    this.insertGhostElementIntoSurvey();
  }

  private banDropSurveyElement = () => {
    this.dropTargetSurveyElement = null;
    this.removeGhostElementFromSurvey();
    this.draggedElementShortcut.style.cursor = "not-allowed";
  };

  private drop = () => {
    if (this.dropTargetSurveyElement) {
      // console.log("drop on: " + this.draggedOverElement["title"]);
      this.insertRealElementIntoSurvey();
    }

    this.clear();
  };

  private clear = () => {
    clearInterval(this.scrollIntervalId);

    document.removeEventListener("pointermove", this.moveDraggedElement);
    this.draggedElementShortcut.removeEventListener("pointerup", this.drop);
    document.body.removeChild(this.draggedElementShortcut);

    this.removeGhostElementFromSurvey();

    const prevEvent = DragDropHelper.prevEvent;
    prevEvent.element = null;
    prevEvent.x = -1;
    prevEvent.y = -1;

    this.dropTargetSurveyElement = null;
    this.draggedElementShortcut = null;
    this.ghostSurveyElement = null;
    this.draggedSurveyElement = null;
    this.pageOrPanel = null;
    this.itemValueDraggedQuestion = null;
    this.isBottom = null;
    this.isEdge = null;
    this.scrollIntervalId = null;
  };

  private getDragInfo(event: PointerEvent, dropTargetHTMLElement: HTMLElement) {
    let dropTargetSurveyElement =
      this.getDropTargetSurveyElementFromHTMLElement(dropTargetHTMLElement);

    let isEdge = true;

    if (dropTargetSurveyElement.isPanel) {
      const panelDragInfo = this.getPanelDragInfo(
        dropTargetHTMLElement,
        dropTargetSurveyElement,
        event
      );
      dropTargetSurveyElement = panelDragInfo.dropTargetSurveyElement;
      isEdge = panelDragInfo.isEdge;
    }

    if (dropTargetSurveyElement === this.draggedSurveyElement) {
      dropTargetSurveyElement = null;
    }

    let isBottom = this.calculateIsBottom(dropTargetHTMLElement, event.clientY);
    return { dropTargetSurveyElement, isEdge, isBottom };
  }

  private getPanelDragInfo(HTMLElement, surveyElement, event) {
    let isEdge = this.calculateIsEdge(HTMLElement, event.clientY);
    let dropTargetSurveyElement = surveyElement;

    if (!isEdge) {
      HTMLElement = this.findDeepestDropTargetChild(HTMLElement);

      if (this.checkHTMLElementIsGhost(HTMLElement)) return; //TODO

      dropTargetSurveyElement =
        this.getDropTargetSurveyElementFromHTMLElement(HTMLElement);
    }
    return { dropTargetSurveyElement, isEdge };
  }

  private getDropTargetSurveyElementFromHTMLElement(element: HTMLElement) {
    let result;
    let elementOrPageName = element.dataset.svcDropTargetElementName;

    if (elementOrPageName === "newGhostPage") {
      result = DragDropHelper.newGhostPage;
    } else {
      result = this.survey.getPageByName(elementOrPageName);
    }

    if (!result) {
      let element;
      this.survey.pages.forEach((page) => {
        element = page.getElementByName(elementOrPageName);
        if (element) result = element;
      });
    }

    return result;
  }

  private checkHTMLElementIsGhost(element) {
    return (
      element.dataset.svcDropTargetElementName ===
      DragDropHelper.ghostSurveyElementName
    );
  }

  private calculateMiddleOfHTMLElement(HTMLElement) {
    const rect = HTMLElement.getBoundingClientRect();
    return rect.y + rect.height / 2;
  }

  private calculateIsBottom(HTMLElement, clientY) {
    const middle = this.calculateMiddleOfHTMLElement(HTMLElement);
    return clientY >= middle;
  }

  private calculateIsEdge(HTMLElement, clientY) {
    const middle = this.calculateMiddleOfHTMLElement(HTMLElement);
    return Math.abs(clientY - middle) >= DragDropHelper.edgeHeight;
  }

  private findDropTargetHTMLElementFromPoint(clientX, clientY): HTMLElement {
    const selector = DragDropHelper.dropTargetHTMLSelector;
    this.draggedElementShortcut.hidden = true;
    let draggedOverNode = document.elementFromPoint(clientX, clientY);
    this.draggedElementShortcut.hidden = false;

    let dropTargetHTMLElement =
      draggedOverNode.closest(selector) ||
      draggedOverNode.querySelector(selector);

    // if (!dropTargetHTMLElement) {
    //   window["draggedOverNode"] = draggedOverNode;
    //   // console.dir(draggedOverNode);
    // }

    return <HTMLElement>dropTargetHTMLElement;
  }

  private findDeepestDropTargetChild(parent): HTMLElement {
    const selector = DragDropHelper.dropTargetHTMLSelector;

    let result = parent;
    while (!!parent) {
      result = parent;
      parent = parent.querySelector(selector);
    }

    return <HTMLElement>result;
  }

  private createDraggedElementShortcut() {
    const draggedElementShortcut = document.createElement("div");
    draggedElementShortcut.innerText = this.draggedSurveyElement["title"];
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

  private createGhostSurveyElement(): any {
    const json = {
      type: "html",
      name: DragDropHelper.ghostSurveyElementName,
      html: '<div class="svc-drag-drop-ghost"></div>'
    };
    return this.createElementFromJson(json);
  }

  private insertGhostElementIntoSurvey(): boolean {
    this.removeGhostElementFromSurvey();

    this.ghostSurveyElement.name = DragDropHelper.ghostSurveyElementName; //TODO why do we need setup it manually see createGhostSurveyElement method

    this.pageOrPanel = this.dropTargetSurveyElement.isPage
      ? this.dropTargetSurveyElement
      : this.dropTargetSurveyElement["page"];

    this.pageOrPanel.dragDropStart(
      this.draggedSurveyElement,
      this.ghostSurveyElement,
      DragDropHelper.nestedPanelDepth
    );

    return this.pageOrPanel.dragDropMoveTo(
      this.dropTargetSurveyElement,
      this.isBottom,
      this.isEdge
    );
  }

  private insertRealElementIntoSurvey() {
    this.removeGhostElementFromSurvey();

    // ghost new page
    if (
      this.dropTargetSurveyElement.isPage &&
      this.dropTargetSurveyElement["_isGhost"]
    ) {
      this.dropTargetSurveyElement["_addGhostPageViewMobel"]();
    }
    // EO ghost new page

    this.pageOrPanel.dragDropStart(
      this.draggedSurveyElement,
      this.draggedSurveyElement,
      DragDropHelper.nestedPanelDepth
    );

    this.pageOrPanel.dragDropMoveTo(
      this.dropTargetSurveyElement,
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
    this.draggedSurveyElement = <any>item;
    return true;
  }

  private onDragStart(event: IPortableDragEvent, draggedElement: IElement) {
    event.stopPropagation(); // prevent call startDrag event on Parent

    event.dataTransfer.effectAllowed = "move";

    this.ghostSurveyElement = this.createGhostSurveyElement();
    this.draggedSurveyElement = draggedElement;

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

    if (item === this.draggedSurveyElement) {
      this.dropTargetSurveyElement = null;
      return true; // ban drop here
    }

    if (this.itemValueDraggedQuestion !== question) {
      this.dropTargetSurveyElement = null;
      return true; // ban drop here
    }

    event.preventDefault(); // alow drop here without return;

    this.dropTargetSurveyElement = item;

    const bottomInfo = this.isAtLowerPartOfCurrentTarget(event);
    this.isEdge = bottomInfo.isEdge;
    this.isBottom = bottomInfo.isBottom;
  }

  public getItemValueGhostPosition(item) {
    if (this.dropTargetSurveyElement !== item) return null;
    if (this.isBottom) return "bottom";
    return "top";
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

  public onDropItemValue(event: IPortableDragEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.doDropItemValue(
      this.itemValueDraggedQuestion,
      this.draggedSurveyElement,
      this.dropTargetSurveyElement,
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
}
