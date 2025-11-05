import { DragDropAllowEvent, DragDropCore, EventBase, getIconNameFromProxy, IElement, IPanel, ISurveyElement, JsonObject, PageModel, PanelModelBase, QuestionRowModel, Serializer, SurveyElement, SurveyModel } from "survey-core";
import { settings } from "./creator-settings";
import { IQuestionToolboxItem } from "./toolbox";
import { SurveyHelper } from "./survey-helper";
import { SurveyElementAdornerBase } from "./components/survey-element-adorner-base";
import { DropIndicatorPosition, ElType } from "./drag-drop-enums";
import { DomDocumentHelper } from "./utils/global_variables_utils";

export function calculateIsEdge(dropTargetNode: HTMLElement, clientY: number) {
  const rect = dropTargetNode.getBoundingClientRect();
  return clientY - rect.top <= DragDropSurveyElements.edgeHeight || rect.bottom - clientY <= DragDropSurveyElements.edgeHeight;
}
export function calculateIsSide(dropTargetNode: HTMLElement, clientX: number) {
  const rect = dropTargetNode.getBoundingClientRect();
  return clientX - rect.left <= DragDropSurveyElements.edgeHeight || rect.right - clientX <= DragDropSurveyElements.edgeHeight;
}

export function calculateDragOverLocation(clientX: number, clientY: number, rect: DOMRectInit, direction: "top-bottom" | "left-right" = null): DropIndicatorPosition {
  const tg = rect.height / rect.width;
  const dx = clientX - rect.x;
  const dy = clientY - rect.y;

  if (direction == "top-bottom") {
    if (dy >= rect.height / 2) {
      return DropIndicatorPosition.Bottom;
    } else {
      return DropIndicatorPosition.Top;
    }
  }
  if (direction == "left-right") {
    if (dx >= rect.width / 2) {
      return DropIndicatorPosition.Right;
    } else {
      return DropIndicatorPosition.Left;
    }
  }

  if (dy >= tg * dx) {
    if (dy >= - tg * dx + rect.height) {
      return DropIndicatorPosition.Bottom;
    } else {
      return DropIndicatorPosition.Left;
    }
  } else {
    if (dy >= - tg * dx + rect.height) {
      return DropIndicatorPosition.Right;
    } else {
      return DropIndicatorPosition.Top;
    }
  }
}

export class DragDropSurveyElements extends DragDropCore<any> {
  public static newGhostPage: PageModel = null;
  public static restrictDragQuestionBetweenPages: boolean = false;
  public static edgeHeight: number = 30;
  public static nestedPanelDepth: number = -1;
  public static ghostSurveyElementName = "sv-drag-drop-ghost-survey-element-name"; // before renaming use globa search (we have also css selectors)

  public insideElement = null;
  protected prevIsEdge: any = null;
  // protected ghostSurveyElement: IElement = null;
  protected dragOverIndicatorElement: any = null;
  protected dragOverLocation: DropIndicatorPosition;

  protected get draggedElementAdorner(): SurveyElementAdornerBase | null {
    if (!this.draggedElement) return null;
    return SurveyElementAdornerBase.GetAdorner(this.draggedElement);
  }

  protected get dropTargetAdorner(): SurveyElementAdornerBase | null {
    if (!this.dropTarget) return null;
    return SurveyElementAdornerBase.GetAdorner(this.dropTarget);
  }

  protected get draggedElementType(): string {
    if (!!this.draggedElement && this.draggedElement.isPage) {
      return "survey-page";
    }
    return "survey-element";
  }
  protected isDraggedElementSelected: boolean = false;
  public onGetMaxNestedPanels: () => number;
  public onGetMaxPanelNestingLevel: () => number;
  public onDragOverLocationCalculating: (options: any) => void;
  public get maxNestedPanels(): number { return this.onGetMaxNestedPanels ? this.onGetMaxNestedPanels() : -1; }
  public get maxPanelNestingLevel(): number { return this.onGetMaxPanelNestingLevel ? this.onGetMaxPanelNestingLevel() : -1; }
  public isAllowedToAdd: (elementType: string, container: SurveyElement) => boolean = (elementType: string, container: SurveyElement): boolean => true;

  public startDragToolboxItem(
    event: PointerEvent,
    draggedElementJson: JsonObject,
    toolboxItemModel: IQuestionToolboxItem
  ): void {
    const draggedElement: any = this.createElementFromJson(draggedElementJson);
    draggedElement.toolboxItemTitle = toolboxItemModel.title;
    draggedElement.toolboxItemIconName = toolboxItemModel.iconName;
    this.startDrag(event, draggedElement);
  }
  public get isDraggingExistingElement(): boolean {
    return !!this.draggedElement && this.isDraggedElementSelected;
  }

  public startDragSurveyElement(
    event: PointerEvent,
    draggedElement: any,
    isElementSelected?: boolean
  ): void {
    this.isDraggedElementSelected = isElementSelected;
    this.startDrag(event, draggedElement);
  }

  protected getShortcutText(draggedElement: any): string {
    if (draggedElement.isPage) return draggedElement.name;
    return (<any>draggedElement).toolboxItemTitle || super.getShortcutText(draggedElement);
  }

  protected createDraggedElementShortcut(text: string, draggedElementNode?: HTMLElement, event?: PointerEvent): HTMLElement {
    const draggedElementShortcut = DomDocumentHelper.createElement("div");
    draggedElementShortcut.style.display = "flex";
    const textSpan = DomDocumentHelper.createElement("span");

    textSpan.className = "svc-dragged-element-shortcut__text";
    textSpan.innerText = text;
    if (this.draggedElement.toolboxItemIconName) {
      draggedElementShortcut.appendChild(this.createDraggedElementIcon());
    }
    draggedElementShortcut.appendChild(textSpan);
    draggedElementShortcut.className = this.getDraggedElementClass();
    return draggedElementShortcut;
  }

  protected createDraggedElementIcon(): HTMLElement {
    const span = DomDocumentHelper.createElement("span");
    span.className = "svc-dragged-element-shortcut__icon";

    const iconName = getIconNameFromProxy(this.draggedElement.toolboxItemIconName);
    const svgString = `<svg class="sv-svg-icon" role="img"><use xlink:href="#${iconName}"></use></svg>`;
    span.innerHTML = svgString;

    return span;
  }

  protected getDraggedElementClass() {
    let result = "svc-dragged-element-shortcut";
    if (!!this.draggedElement.toolboxItemIconName) result += " svc-dragged-element-shortcut--has-icon";
    if (this.isDraggedElementSelected) result += " svc-dragged-element-shortcut--selected";
    return result;
  }

  protected createElementFromJson(json: object): HTMLElement {
    const element: any = this.createNewElement(json);
    if (element["setSurveyImpl"]) {
      element["setSurveyImpl"](this.survey);
    } else {
      element["setData"](this.survey);
    }
    element.renderWidth = "100%";
    return element;
  }

  private createNewElement(json: any): IElement {
    var newElement = Serializer.createClass(json["type"]);
    new JsonObject().toObject(json, newElement);
    return newElement;
  }

  protected findDropTargetNodeByDragOverNode(dragOverNode: HTMLElement): HTMLElement {
    const ghostRow = dragOverNode.closest(".svc-row--ghost");
    if (!!ghostRow) {
      const ghostDataAttrSelector: string = "[data-sv-drop-target-survey-element='sv-drag-drop-ghost-survey-element-name']";
      const ghostNode: HTMLElement = dragOverNode.closest(ghostDataAttrSelector) || dragOverNode.querySelector(ghostDataAttrSelector);
      if (!!ghostNode) {
        return ghostNode;
      }
    }

    const dropTargetNode: HTMLElement = dragOverNode.closest(this.dropTargetDataAttributeName);
    return dropTargetNode;
  }

  protected getDropTargetByDataAttributeValue(dataAttributeValue: string, dropTargetNode: HTMLElement, event: PointerEvent): any {
    const oldDragOverIndicatorElement = this.dragOverIndicatorElement;

    if (!dataAttributeValue) {
      // panel dynamic
      const nearestDropTargetElement = dropTargetNode.parentElement.closest<HTMLElement>(this.dropTargetDataAttributeName);
      dataAttributeValue = this.getDataAttributeValueByNode(nearestDropTargetElement);
    }

    if (!dataAttributeValue) {
      throw new Error("Can't find drop target survey element name");
    }

    if (dataAttributeValue === DragDropSurveyElements.ghostSurveyElementName) {
      return this.prevDropTarget;
    }

    // drop to new page
    if (dataAttributeValue === "newGhostPage") {
      return DragDropSurveyElements.newGhostPage;
    }

    // drop to page
    let page: any = this.survey.getPageByName(dataAttributeValue);
    if (page) {
      return page;
    }

    // drop to question or panel
    let dropTarget: any;
    let dragOverElement: any;

    this.survey.pages.forEach((page: PageModel) => {
      const question = page.getElementByName(dataAttributeValue);
      if (question) {
        dropTarget = question;
        dragOverElement = question;
      }
    });
    if (!dropTarget.page) {
      const nearestDropTargetPageElement = dropTargetNode.parentElement.closest<HTMLElement>("[data-sv-drop-target-page]");
      dataAttributeValue = nearestDropTargetPageElement.dataset.svDropTargetPage;
      let page: any = this.survey.getPageByName(dataAttributeValue);
      dropTarget.__page = page;
    }
    this.dragOverIndicatorElement = dragOverElement;
    if (this.dragOverIndicatorElement != oldDragOverIndicatorElement) {
      this.removeDragOverMarker(oldDragOverIndicatorElement);
    }
    return dropTarget;
    // EO drop to question or panel
  }

  protected isDropTargetValid(dropTarget: any, dropTargetNode?: HTMLElement, dragOverLocation: DropIndicatorPosition = DropIndicatorPosition.Top): boolean {
    if (!dropTarget) return false;
    if (dropTarget === this.draggedElement) return false;

    const draggedPanel = this.draggedElement.getPanelInDesignMode();
    if (dropTarget === draggedPanel) return false;
    let container = !dropTarget.isPage && dragOverLocation === DropIndicatorPosition.Inside ? dropTarget : dropTarget.parent;
    if (container && !container.isInteractiveDesignElement) {
      container = container.parent || container.parentQuestion;
    }
    if (!this.isAllowedToAdd(this.draggedElement && this.draggedElement.getType && this.draggedElement.getType(), container || dropTarget)) {
      return false;
    }
    if (!!draggedPanel) {
      const childPanelsMaxNesting = SurveyHelper.getMaximumNestedPanelDepth(draggedPanel, 0);
      if (this.maxPanelNestingLevel >= 0) {
        let len = SurveyHelper.getElementParentContainers(dropTarget, false).length;
        if (dragOverLocation === DropIndicatorPosition.Inside && !!dropTarget.getPanelInDesignMode()) len++;
        if (this.maxPanelNestingLevel < len + childPanelsMaxNesting) return false;
      } else if (this.maxNestedPanels >= 0 && this.draggedElement.isPanel) {
        let len = SurveyHelper.getElementDeepLength(dropTarget);
        if (dragOverLocation !== DropIndicatorPosition.Inside && dropTarget.isPanel) len--;
        if (this.maxNestedPanels < len + childPanelsMaxNesting) return false;
      }
    }

    if (
      DragDropSurveyElements.restrictDragQuestionBetweenPages &&
      this.shouldRestricDragQuestionBetweenPages(dropTarget)
    ) {
      return false;
    }

    return true;
  }

  protected doBanDropHere = () => {
    this.removeDragOverMarker(this.dragOverIndicatorElement);
    this.removeDragOverMarker(this.dropTarget);
  };

  private shouldRestricDragQuestionBetweenPages(dropTarget: any): boolean {
    const oldPage = (<any>this.draggedElement)["page"];
    const newPage = dropTarget.isPage ? dropTarget : dropTarget["page"];

    // if oldPage === null then it is drop from the toolbox
    return oldPage && oldPage !== newPage;
  }

  protected findDeepestDropTargetChild(parent: HTMLElement): HTMLElement {
    const selector = this.dropTargetDataAttributeName;

    let result = parent;
    while(!!parent) {
      result = parent;
      parent = parent.querySelector(selector);
    }

    return <HTMLElement>result;
  }

  /**
   * An event that is raised when users drag and drop survey elements while designing the survey in [Survey Creator](https://surveyjs.io/survey-creator/documentation/overview). Use this event to control drag and drop operations.
   */
  public onDragDropAllow: EventBase<DragDropCore<any>, DragDropAllowEvent> = new EventBase<DragDropCore<any>, DragDropAllowEvent>();

  private isAllowDragOver(dropTarget: ISurveyElement, dragOverLocation: DropIndicatorPosition): boolean {
    if (this.onDragDropAllow.isEmpty) return true;
    const allowOptions: DragDropAllowEvent = {
      allow: true,
      parent: this.parentElement,
      source: this.draggedElement,
      toElement: <IElement>dropTarget,
      draggedElement: this.draggedElement,
      fromElement: this.draggedElement.parent,
      target: <IElement>dropTarget,
      insertAfter: undefined,
      insertBefore: undefined,
      allowDropNextToAnother: true
    };
    if (dragOverLocation === DropIndicatorPosition.Bottom || dragOverLocation === DropIndicatorPosition.Right) {
      allowOptions.insertAfter = <IElement>dropTarget;
    }
    if (dragOverLocation === DropIndicatorPosition.Top || dragOverLocation === DropIndicatorPosition.Left) {
      allowOptions.insertBefore = <IElement>dropTarget;
    }
    this.onDragDropAllow.fire(this, allowOptions);
    if (!allowOptions.allowDropNextToAnother) {
      if (dragOverLocation === DropIndicatorPosition.Left) {
        this.dragOverLocation = DropIndicatorPosition.Top;
      }
      if (dragOverLocation === DropIndicatorPosition.Right) {
        this.dragOverLocation = DropIndicatorPosition.Bottom;
      }
    }
    return allowOptions.allow;
  }
  public dragOverCore(dropTarget: ISurveyElement, dragOverLocation: DropIndicatorPosition): void {
    const oldDragOverIndicatorElement = this.dragOverIndicatorElement;
    const oldDropTarget = this.dropTarget;
    if (this.isSameElement(dropTarget)) {
      this.allowDropHere = false;
      return;
    }
    this.dropTarget = dropTarget;
    this.dragOverLocation = dragOverLocation;

    this.parentElement = this.dropTarget.isPage
      ? this.dropTarget
      : ((<any>this.dropTarget).page || (<any>this.dropTarget).__page);
    if (!this.isAllowDragOver(dropTarget, dragOverLocation)) {
      this.allowDropHere = false;
      return;
    }

    if (dragOverLocation == DropIndicatorPosition.Inside) {
      this.dragOverIndicatorElement = this.dropTarget;
      this.dropTargetAdorner.dropIndicatorPosition = DropIndicatorPosition.Inside;
    } else {
      const row = this.dragDropFindRow(this.dropTarget, this.parentElement);

      if (!!row && row.elements.length > 1 && (this.dragOverLocation === DropIndicatorPosition.Top || this.dragOverLocation === DropIndicatorPosition.Bottom)) {
        this.dragOverIndicatorElement = row;
        const adorner = SurveyElementAdornerBase.GetAdorner(row);
        if (adorner) {
          adorner.dropIndicatorPosition = this.dragOverLocation;
        }
      } else {
        this.dragOverIndicatorElement = this.dropTarget;
        if (this.draggedElement.isPage) {
          if (this.dragOverLocation === DropIndicatorPosition.Top || this.dragOverLocation === DropIndicatorPosition.Bottom) {
            this.dropTargetAdorner.dropIndicatorPosition = this.dragOverLocation;
          } else {
            this.dropTargetAdorner.dropIndicatorPosition = this.dragOverLocation;
          }
        } else {
          this.dropTargetAdorner.dropIndicatorPosition = this.dragOverLocation;
        }
      }
    }
    if (this.dragOverIndicatorElement != oldDragOverIndicatorElement)this.removeDragOverMarker(oldDragOverIndicatorElement);
    if (this.dropTarget != oldDropTarget)this.removeDragOverMarker(oldDropTarget);
  }
  private dragDropFindRow(findElement: ISurveyElement, panel: PanelModelBase): QuestionRowModel {
    if (!findElement || findElement.isPage) return null;
    var element = <IElement>findElement;
    var rows = panel.rows;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].elements.indexOf(element) > -1) return rows[i];
    }
    for (var i = 0; i < panel.elements.length; i++) {
      var pnls = panel.elements[i].getPanels();
      if (Array.isArray(pnls)) {
        for (var j = 0; j < pnls.length; j++) {
          var row = this.dragDropFindRow(element, <PanelModelBase>pnls[j]);
          if (!!row) return row;
        }
      }
    }
    return null;
  }
  private isSameElement(target: ISurveyElement): boolean {
    while(!!target) {
      if (target === this.draggedElement) return true;
      target = target.parent;
    }
    return false;
  }

  private isDragInsideItself(dragOverNodes: Array<HTMLElement>): boolean {
    let result = false;
    dragOverNodes.forEach((node) => {
      if (node.classList.contains("svc-question__content--dragged")) {
        result = true;
      }
    });
    return result;
  }

  public dragOver(event: PointerEvent): void {
    const dropTargetNode = this.findDropTargetNodeFromPoint(
      event.clientX,
      event.clientY
    );

    if (!dropTargetNode) {
      this.banDropHere();
      return;
    }

    const _document = DomDocumentHelper.getDocument();
    if (_document && _document.elementsFromPoint && this.isDragInsideItself(<Array<HTMLElement>>_document.elementsFromPoint(event.clientX, event.clientY))) {
      this.banDropHere();
      return null;
    }

    const oldinsideElement = this.insideElement;
    this.insideElement = !calculateIsEdge(dropTargetNode, event.clientY) && !calculateIsSide(dropTargetNode, event.clientX);
    const dropTarget = this.getDropTargetByNode(dropTargetNode, event);

    const dropTargetAdorner = SurveyElementAdornerBase.GetAdorner(dropTarget);
    if (!!oldinsideElement != !!this.insideElement) {
      dropTargetAdorner.dropIndicatorPosition = null;
    }
    const dropTargetRect = dropTargetNode.getBoundingClientRect();
    const calcDirection = !settings.dragDrop.allowDragToTheSameLine || (!!this.draggedElement && this.draggedElement.isPage) ? "top-bottom" : null;
    let dragOverLocation = calculateDragOverLocation(event.clientX, event.clientY, dropTargetRect, calcDirection);

    const dropPanel = dropTarget.getPanelInDesignMode();
    const elPanels = dropPanel || (dropTarget.isPage ? dropTarget : undefined);
    if (!this.draggedElement.isPage && dropTarget && !!elPanels && elPanels.elements.length === 0) {
      if (dropTarget.isPage || this.insideElement) {
        dragOverLocation = DropIndicatorPosition.Inside;
      }
    }

    if (!this.draggedElement.isPage && dropTarget.isPage && dropTargetAdorner.collapsed) {
      dragOverLocation = DropIndicatorPosition.Inside;
    }

    if (!!dropPanel && this.insideElement && dropTargetAdorner.collapsed) {
      dragOverLocation = DropIndicatorPosition.Inside;
    }

    if (!this.draggedElement.isPage && dropTarget.isPage && dropTarget.elements.length !== 0 && !dropTargetAdorner.collapsed) {
      dragOverLocation = null;
    }

    const options = {
      survey: this.survey,
      draggedSurveyElement: this.draggedElement,
      dragOverSurveyElement: dropTarget,
      clientX: event.clientX,
      clientY: event.clientY,
      dragOverRect: dropTargetRect,
      insideElement: this.insideElement,
      dragOverLocation
    };
    if (this.onDragOverLocationCalculating) {
      this.onDragOverLocationCalculating(options);
      dragOverLocation = options.dragOverLocation;
      this.insideElement = options.insideElement;
    }
    const isDropTargetValid = this.isDropTargetValid(
      dropTarget,
      dropTargetNode,
      dragOverLocation
    );

    if (!isDropTargetValid) {
      this.banDropHere();
      return;
    }

    this.allowDropHere = true;

    this.dragOverCore(dropTarget, dragOverLocation);
  }

  protected onStartDrag(): void {
    // this.ghostSurveyElement = this.createGhostSurveyElement();
    if (this.draggedElementAdorner) {
      this.draggedElementAdorner.isBeingDragged = true;
    }
  }
  public moveElementInPanel(panel: IPanel, src: IElement, target: IElement, targetIndex: number) {
    var srcIndex = (<PanelModelBase>src.parent).elements.indexOf(src);
    if (targetIndex > srcIndex) {
      targetIndex--;
    }
    if (src === target && srcIndex === targetIndex) {
      return;
    }
    panel.removeElement(src);
    panel.addElement(target, targetIndex);
  }

  protected doDrop = () => {
    if (!this.dropTarget) return;
    if (!this.dragOverLocation) return;

    const page = this.parentElement;
    const dragged = this.draggedElement;
    const src = this.draggedElement;

    if (dragged.isPage && dragged instanceof PageModel) {
      const survey = dragged.survey as SurveyModel;
      survey.startMovingPage();
      const indexOfDraggedPage = survey.pages.indexOf(dragged);
      survey.pages.splice(indexOfDraggedPage, 1);
      const indexOfDropTarget = survey.pages.indexOf(this.dropTarget) + (this.dragOverLocation === DropIndicatorPosition.Top ? 0 : 1);
      survey.pages.splice(indexOfDropTarget, 0, dragged);
      survey.stopMovingPage();

      if (indexOfDraggedPage !== indexOfDropTarget) {
        dragged["draggedFrom"] = indexOfDraggedPage < indexOfDropTarget ? indexOfDraggedPage : indexOfDraggedPage + 1;
      }
      return dragged;
    }

    const convertLocation = () => {
      switch(this.dragOverLocation) {
        case "top": return "top";
        case "bottom": return "bottom";
        case "right": return "right";
        case "left": return "left";
        default: return "bottom";
      }
    };

    const srcContainer = src.parent || src.page;
    if (!!srcContainer) {
      (page.survey as SurveyModel).startMovingQuestion();
      srcContainer.removeElement(src);
    }
    let dest = this.dragOverIndicatorElement?.isPanel ? this.dragOverIndicatorElement : this.dropTarget;

    if (this.dragOverLocation === DropIndicatorPosition.Inside) {
      dest = dest.getPanelInDesignMode() || dest;
      (<PanelModelBase>dest).insertElement(src);
    } else {
      const destParent = dest.parent || dest.page;
      if (destParent) (<PanelModelBase>destParent).insertElement(src, dest, convertLocation());
    }
    (page.survey as SurveyModel).stopMovingQuestion();
    return dragged;
  };

  private removeDragOverMarker(dropTarget: SurveyElement): void {
    if (dropTarget) {
      const adorner = SurveyElementAdornerBase.GetAdorner(dropTarget);
      if (adorner) {
        adorner.dropIndicatorPosition = null;
      }
    }
  }

  public clear(): void {
    this.insideElement = null;
    this.isDraggedElementSelected = false;
    this.removeDragOverMarker(this.prevDropTarget);
    this.removeDragOverMarker(this.dropTarget);
    this.removeDragOverMarker(this.dragOverIndicatorElement);
    if (this.draggedElement && this.draggedElementAdorner) {
      this.draggedElementAdorner.isBeingDragged = false;
    }
    super.clear();
  }

  private getTargetParent(dropTarget: any): any {
    const designPanel = dropTarget.getPanelInDesignMode();
    if (!!designPanel) return designPanel;
    return dropTarget.isPage ? dropTarget : dropTarget.parent;
  }

  protected getTargetRow(dropTarget: any): QuestionRowModel {
    const targetParent = this.getTargetParent(dropTarget);
    let targetRow: any;

    targetParent.rows.forEach((row: any) => {
      if (row.elements.indexOf(dropTarget) !== -1) {
        targetRow = row;
      }
    });

    return targetRow;
  }
}
