import {
  IElement,
  PageModel,
  SurveyModel,
  JsonObject,
  Base,
  ItemValue,
  property,
  QuestionSelectBase
} from "survey-core";
import { CreatorBase } from "./creator-base";

export class DragDropHelper extends Base {
  public static edgeHeight: number = 30;
  public static nestedPanelDepth: number = -1;
  public static prevEvent = {
    element: null,
    x: -1,
    y: -1
  };
  public static newGhostPage: PageModel = null;
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
  private itemValueParentQuestion: QuestionSelectBase = null;

  private get survey(): SurveyModel {
    return this.creator.survey;
  }

  private get dropTargetDataAttributeName() {
    if (this.draggedSurveyElement.getType() === "itemvalue") {
      return "[data-svc-drop-target-item-value]";
    }
    return "[data-svc-drop-target-element-name]";
  }

  constructor(private creator: CreatorBase<SurveyModel>) {
    super();
  }

  public startDragToolboxItem(
    event: PointerEvent,
    draggedElementJson: JsonObject
  ) {
    const draggedElement = this.createElementFromJson(draggedElementJson);
    this.startDragSurveyElement(event, draggedElement);
  }

  public startDragSurveyElement(event: PointerEvent, draggedElement: IElement) {
    this.startDrag(event, draggedElement);
  }

  public startDragItemValue(
    event: PointerEvent,
    question: QuestionSelectBase,
    item: ItemValue
  ) {
    const draggedElement = <any>item;
    this.itemValueParentQuestion = question;
    this.startDrag(event, draggedElement);
  }

  public startDrag(event: PointerEvent, draggedElement: IElement) {
    this.draggedSurveyElement = draggedElement;
    this.ghostSurveyElement = this.createGhostSurveyElement();
    this.draggedElementShortcut = this.createDraggedElementShortcut();

    document.body.append(this.draggedElementShortcut);
    this.moveShortcutElement(event);

    document.addEventListener("pointermove", this.moveDraggedElement);
    this.draggedElementShortcut.addEventListener("pointerup", this.drop);
  }

  public getItemValueGhostPosition(item) {
    if (this.dropTargetSurveyElement !== item) return null;
    if (this.isBottom) return "bottom";
    return "top";
  }

  private createGhostSurveyElement(): any {
    const json = {
      type: "html",
      name: DragDropHelper.ghostSurveyElementName,
      html: '<div class="svc-drag-drop-ghost"></div>'
    };
    return this.createElementFromJson(json);
  }

  private createDraggedElementShortcut() {
    const draggedElementShortcut = document.createElement("div");
    draggedElementShortcut.innerText =
      this.draggedSurveyElement["title"] ||
      this.draggedSurveyElement["text"] ||
      this.draggedSurveyElement["name"];
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

    const shortcutHeight = this.draggedElementShortcut.offsetHeight;
    const shortcutWidth = this.draggedElementShortcut.offsetWidth;
    const shortcutXCenter = shortcutWidth / 2;
    const shortcutYCenter = shortcutHeight / 2;

    const documentOffsetHeight = document.documentElement.offsetHeight;
    const documentClientHeight = document.documentElement.clientHeight;
    const documentOffsetWidth = document.documentElement.offsetWidth;
    const documentClientWidth = document.documentElement.clientWidth;

    if (event.clientX + shortcutXCenter >= documentClientWidth) {
      this.draggedElementShortcut.style.left =
        event.pageX -
        event.clientX +
        documentClientWidth -
        shortcutWidth +
        "px";
      this.draggedElementShortcut.style.top =
        event.pageY - shortcutYCenter + "px";
      return;
    }

    if (event.clientX - shortcutXCenter <= 0) {
      this.draggedElementShortcut.style.left =
        event.pageX - event.clientX + "px";
      this.draggedElementShortcut.style.top =
        event.pageY - shortcutYCenter + "px";
      return;
    }

    if (event.clientY + shortcutYCenter >= documentClientHeight) {
      this.draggedElementShortcut.style.left =
        event.pageX - shortcutXCenter + "px";
      this.draggedElementShortcut.style.top =
        event.pageY -
        event.clientY +
        documentClientHeight -
        shortcutHeight +
        "px";
      return;
    }

    if (event.clientY - shortcutYCenter <= 0) {
      this.draggedElementShortcut.style.left =
        event.pageX - shortcutXCenter + "px";
      this.draggedElementShortcut.style.top =
        event.pageY - event.clientY + "px";
      return;
    }

    this.draggedElementShortcut.style.left =
      event.pageX - shortcutXCenter + "px";
    this.draggedElementShortcut.style.top =
      event.pageY - shortcutYCenter + "px";
  }

  private doScroll(clientY, clientX) {
    clearInterval(this.scrollIntervalId);
    const startScrollBoundary = 50;

    // need to import getScrollableParent method
    // let scrollableParentElement = getScrollableParent(dropZoneElement)
    //   .parentNode;
    let scrollableParentElement = document.querySelector(
      ".svc-tab-designer.sd-root-modern"
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
        scrollableParentElement.scrollLeft += 5;
      }, 10);
    } else if (clientX - left <= startScrollBoundary) {
      this.scrollIntervalId = setInterval(() => {
        scrollableParentElement.scrollLeft -= 5;
      }, 10);
    }
  }

  private handleItemValueDragOver(event: PointerEvent) {
    this.draggedElementShortcut.style.cursor = "grabbing";

    const dragInfo = this.getDragInfo(event);
    let dropTargetSurveyElement = dragInfo.dropTargetSurveyElement;
    let isEdge = dragInfo.isEdge;
    let isBottom = dragInfo.isBottom;

    // shouldn't allow to drop on "adorners" (selectall, none, other)
    if (
      this.itemValueParentQuestion.choices.indexOf(dropTargetSurveyElement) ===
      -1
    ) {
      this.banDropHere();
      return;
    }

    if (dropTargetSurveyElement === this.draggedSurveyElement) {
      this.banDropHere();
      return true;
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
  }

  private handleSurveyElementDragOver(event: PointerEvent) {
    this.draggedElementShortcut.style.cursor = "grabbing";

    const dragInfo = this.getDragInfo(event);
    let dropTargetSurveyElement = dragInfo.dropTargetSurveyElement;
    let isEdge = dragInfo.isEdge;
    let isBottom = dragInfo.isBottom;

    if (!dropTargetSurveyElement) {
      this.banDropSurveyElement();
      return;
    }

    if (dropTargetSurveyElement === this.ghostSurveyElement) {
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

  private getDragInfo(event: PointerEvent) {
    let dropTargetHTMLElement = this.findDropTargetHTMLElementFromPoint(
      event.clientX,
      event.clientY
    );

    if (!dropTargetHTMLElement) {
      return { dropTargetSurveyElement: null, isEdge: true, isBottom: true };
    }

    let dropTargetSurveyElement =
      this.getDropTargetSurveyElementFromHTMLElement(dropTargetHTMLElement);

    let isEdge = true;

    if (this.draggedSurveyElement.getType() !== "itemvalue") {
      if (dropTargetSurveyElement.isPanel) {
        const panelDragInfo = this.getPanelDragInfo(
          dropTargetHTMLElement,
          dropTargetSurveyElement,
          event
        );
        dropTargetSurveyElement = panelDragInfo.dropTargetSurveyElement;
        isEdge = panelDragInfo.isEdge;
      }
    }

    if (dropTargetSurveyElement === this.draggedSurveyElement) {
      dropTargetSurveyElement = null;
    }

    let isBottom = this.calculateIsBottom(dropTargetHTMLElement, event.clientY);

    if (
      // TODO we can't drop on not empty page directly for now
      dropTargetSurveyElement &&
      dropTargetSurveyElement.getType() === "page" &&
      dropTargetSurveyElement.elements.length !== 0
    ) {
      const elements = dropTargetSurveyElement.elements;
      dropTargetSurveyElement = isBottom
        ? elements[elements.length - 1]
        : elements[0];
    }

    return { dropTargetSurveyElement, isEdge, isBottom };
  }

  private getPanelDragInfo(HTMLElement, surveyElement, event) {
    let isEdge = this.calculateIsEdge(HTMLElement, event.clientY);
    let dropTargetSurveyElement = surveyElement;

    if (!isEdge) {
      HTMLElement = this.findDeepestDropTargetChild(HTMLElement);

      dropTargetSurveyElement =
        this.getDropTargetSurveyElementFromHTMLElement(HTMLElement);
    }

    return { dropTargetSurveyElement, isEdge };
  }

  private banDropHere = () => {
    this.dropTargetSurveyElement = null;
    this.draggedElementShortcut.style.cursor = "not-allowed";
  };

  private banDropSurveyElement = () => {
    this.removeGhostElementFromSurvey();
    this.banDropHere();
  };

  private getDropTargetSurveyElementFromHTMLElement(element: HTMLElement) {
    let result;
    let dropTargetName = element.dataset.svcDropTargetElementName;

    if (!dropTargetName) {
      dropTargetName = element.dataset.svcDropTargetItemValue;
    }

    if (dropTargetName === DragDropHelper.ghostSurveyElementName) {
      return this.ghostSurveyElement;
    }

    // drop to page
    if (dropTargetName === "newGhostPage") {
      result = DragDropHelper.newGhostPage;
    } else {
      result = this.survey.getPageByName(dropTargetName);
    }

    // drop to element (question or panel)
    if (!result) {
      let element;
      this.survey.pages.forEach((page) => {
        element = page.getElementByName(dropTargetName);
        if (element) result = element;
      });
    }

    // drop to item-value
    if (!result) {
      result = this.itemValueParentQuestion.choices.filter(
        (choice) => choice.value === dropTargetName
      )[0];
    }

    return result;
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
    const selector = this.dropTargetDataAttributeName;

    this.draggedElementShortcut.hidden = true;
    let draggedOverNode = document.elementFromPoint(clientX, clientY);
    this.draggedElementShortcut.hidden = false;

    if (!draggedOverNode) return null;

    let dropTargetHTMLElement =
      draggedOverNode.querySelector(selector) ||
      draggedOverNode.closest(selector);

    return <HTMLElement>dropTargetHTMLElement;
  }

  private findDeepestDropTargetChild(parent): HTMLElement {
    const selector = "[data-svc-drop-target-element-name]";

    let result = parent;
    while (!!parent) {
      result = parent;
      parent = parent.querySelector(selector);
    }

    return <HTMLElement>result;
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
    this.creator.undoRedoManager.startTransaction("drag drop");
    const newElement = this.pageOrPanel.dragDropFinish();
    this.creator.undoRedoManager.stopTransaction();

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

  private drop = () => {
    if (this.draggedSurveyElement.getType() === "itemvalue") {
      this.doDropItemValue();
    } else {
      this.doDropSurveyElement();
    }
    this.clear();
  };

  private doDropSurveyElement() {
    if (this.dropTargetSurveyElement) {
      // console.log("drop on: " + this.draggedOverElement["title"]);
      this.insertRealElementIntoSurvey();
    }
  }

  private doDropItemValue = () => {
    const isTop = !this.isBottom;
    const choices = this.itemValueParentQuestion.choices;
    const oldIndex = choices.indexOf(this.draggedSurveyElement);
    let newIndex = choices.indexOf(this.dropTargetSurveyElement);

    if (oldIndex < newIndex && isTop) {
      newIndex--;
    } else if (oldIndex > newIndex && this.isBottom) {
      newIndex++;
    }

    choices.splice(oldIndex, 1);
    choices.splice(newIndex, 0, this.draggedSurveyElement);
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
    this.itemValueParentQuestion = null;
    this.isBottom = null;
    this.isEdge = null;
    this.scrollIntervalId = null;
  };
}
