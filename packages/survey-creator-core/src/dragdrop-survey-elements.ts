import { DragDropAllowEvent, DragDropCore, getIconNameFromProxy, IElement, IPanel, IShortcutText, ISurveyElement, JsonObject, PageModel, PanelModel, PanelModelBase, QuestionPanelDynamicModel, QuestionRowModel, Serializer, SurveyElement, SurveyModel } from "survey-core";
import { settings } from "./creator-settings";
import { IQuestionToolboxItem } from "./toolbox";
import { SurveyHelper } from "./survey-helper";
import { SurveyElementAdornerBase } from "./components/survey-element-adorner-base";
import { DropIndicatorPosition, ElType } from "./drag-drop-enums";

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
    }
    else {
      return DropIndicatorPosition.Left;
    }
  }
  else {
    if (dy >= - tg * dx + rect.height) {
      return DropIndicatorPosition.Right;
    }
    else {
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
  public onDragOverLocationCalculating: (options: any) => void;
  public get maxNestedPanels(): number { return this.onGetMaxNestedPanels ? this.onGetMaxNestedPanels() : -1; }

  // private isRight: boolean;
  // protected prevIsRight: boolean;

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
    const draggedElementShortcut = document.createElement("div");
    draggedElementShortcut.style.display = "flex";
    const textSpan = document.createElement("span");

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
    const span = document.createElement("span");
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

  private isPanelDynamic(element: ISurveyElement) {
    return element instanceof QuestionPanelDynamicModel;
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

    // drop to matrix detail panel
    if ((dropTarget.getType() === "matrixdropdown" || dropTarget.getType() === "matrixdynamic") && (<any>dropTarget).detailPanelMode !== "none" && this.insideElement) {
      dropTarget = (<any>dropTarget).detailPanel;
    }

    // drop to question

    //question inside paneldymanic
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

    if (this.draggedElement.getType() === "paneldynamic" && dropTarget === this.draggedElement.template) {
      return false;
    }
    if (this.maxNestedPanels >= 0 && this.draggedElement.isPanel) {
      const pnl: any = <PanelModel>this.draggedElement;
      if (pnl.deepNested === undefined) {
        pnl.deepNested = this.getMaximumNestedPanelCount(pnl, 0);
      }
      let len = SurveyHelper.getElementDeepLength(dropTarget);
      if (dragOverLocation !== DropIndicatorPosition.Inside && dropTarget.isPanel) len--;
      if (this.maxNestedPanels < len + pnl.deepNested) return false;
    }

    if (
      DragDropSurveyElements.restrictDragQuestionBetweenPages &&
      this.shouldRestricDragQuestionBetweenPages(dropTarget)
    ) {
      return false;
    }

    return true;
  }
  private getMaximumNestedPanelCount(panel: PanelModel, deep: number): number {
    let max = deep;
    panel.elements.forEach(el => {
      if (el.isPanel) {
        const pDeep = this.getMaximumNestedPanelCount(<PanelModel>el, deep + 1);
        if (pDeep > max) {
          max = pDeep;
        }
      }
    });
    return max;
  }

  protected doBanDropHere = () => {
    this.removeDragOverMarker(this.dragOverIndicatorElement);
    this.removeDragOverMarker(this.dropTarget);
  }

  private shouldRestricDragQuestionBetweenPages(dropTarget: any): boolean {
    const oldPage = (<any>this.draggedElement)["page"];
    const newPage = dropTarget.isPage ? dropTarget : dropTarget["page"];

    // if oldPage === null then it is drop from the toolbox
    return oldPage && oldPage !== newPage;
  }

  protected findDeepestDropTargetChild(parent: HTMLElement): HTMLElement {
    const selector = this.dropTargetDataAttributeName;

    let result = parent;
    while (!!parent) {
      result = parent;
      parent = parent.querySelector(selector);
    }

    return <HTMLElement>result;
  }
  private isAllowDragOver(dropTarget: ISurveyElement, dragOverLocation: DropIndicatorPosition): boolean {
    if (!this.survey || this.survey.onDragDropAllow.isEmpty) return true;
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
    this.survey.onDragDropAllow.fire(this.survey, allowOptions);
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
    if (this.dragOverIndicatorElement != oldDragOverIndicatorElement) this.removeDragOverMarker(oldDragOverIndicatorElement);
    if (this.dropTarget != oldDropTarget) this.removeDragOverMarker(oldDropTarget);
  }
  private dragDropFindRow(findElement: ISurveyElement, panel: PanelModelBase): QuestionRowModel {
    if (!findElement || findElement.isPage) return null;
    var element = <IElement>findElement;
    var rows = panel.rows;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].elements.indexOf(element) > -1) return rows[i];
    }
    for (var i = 0; i < panel.elements.length; i++) {
      var pnl = panel.elements[i].getPanel();
      if (!pnl) continue;
      var row = this.dragDropFindRow(element, <PanelModelBase>pnl);
      if (!!row) return row;
    }
    return null;

  }
  private isSameElement(target: ISurveyElement): boolean {
    while (!!target) {
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

  private getDragDropElementType(element: any) {
    if (element.isPage) return ElType.Page;
    if (element.isPanel) return ElType.Panel;
    if (element instanceof QuestionPanelDynamicModel) return ElType.DynamicPanel;
    return ElType.Question;
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

    if (document && document.elementsFromPoint && this.isDragInsideItself(<Array<HTMLElement>>document.elementsFromPoint(event.clientX, event.clientY))) {
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

    if (!this.draggedElement.isPage && dropTarget && ((dropTarget.isPanel || dropTarget.isPage) && dropTarget.elements.length === 0 || this.isPanelDynamic(dropTarget) && dropTarget.template.elements.length == 0)) {
      if (dropTarget.isPage || this.insideElement) {
        dragOverLocation = DropIndicatorPosition.Inside;
      }
    }

    if (!this.draggedElement.isPage && dropTarget.isPage && dropTargetAdorner.collapsed) {
      dragOverLocation = DropIndicatorPosition.Inside;
    }

    if ((dropTarget.isPanel || this.isPanelDynamic(dropTarget)) && this.insideElement && dropTargetAdorner.collapsed) {
      dragOverLocation = DropIndicatorPosition.Inside;
    }

    if (!this.draggedElement.isPage && dropTarget.isPage && dropTarget.elements.length !== 0 && !dropTargetAdorner.collapsed) {
      dragOverLocation = null;
    }

    // const dropTargetType = this.getDragDropElementType(dropTarget);
    // const draggedElementType = this.getDragDropElementType(this.draggedElement);
    // switch (dropTargetType) {
    //   case ElType.Page: {
    //     console.log("dropTargetType", dropTargetType);
    //     break;
    //   }
    //   case ElType.Panel: {
    //     console.log("dropTargetType", dropTargetType);
    //     break;
    //   }
    //   case ElType.DynamicPanel: {
    //     console.log("dropTargetType", dropTargetType);
    //     break;
    //   }
    //   case ElType.Question: {
    //     console.log("dropTargetType", dropTargetType);
    //     break;
    //   }
    //   // case ElType.EmptySurvey: {
    //   //   console.log("dropTargetType", dropTargetType);
    //   //   break;
    //   // }
    // }

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
      switch (this.dragOverLocation) {
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
      if (this.isPanelDynamic(dest)) dest = dest.template;
      (<PanelModelBase>dest).insertElement(src);
    } else {
      const destParent = dest.parent || dest.page;
      if (destParent) (<PanelModelBase>destParent).insertElement(src, dest, convertLocation());
    }
    (page.survey as SurveyModel).stopMovingQuestion();
    return dragged;
  }

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
    this.removeDragOverMarker(this.prevDropTarget);
    this.removeDragOverMarker(this.dropTarget);
    this.removeDragOverMarker(this.dragOverIndicatorElement);
    if (this.draggedElement && this.draggedElementAdorner) {
      this.draggedElementAdorner.isBeingDragged = false;
    }
    super.clear();
  }

  private getTargetParent(dropTarget: any): any {
    let targetParent = dropTarget.isPage || dropTarget.isPanel ? dropTarget : dropTarget.parent;

    if (dropTarget.getType() === "paneldynamic") {
      targetParent = dropTarget.templateValue;
    }

    return targetParent;
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
