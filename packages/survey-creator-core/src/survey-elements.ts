import { DragDropAllowEvent, DragDropCore, DragTypeOverMeEnum, getIconNameFromProxy, IElement, IPanel, IShortcutText, ISurveyElement, JsonObject, PageModel, PanelModel, PanelModelBase, QuestionPanelDynamicModel, QuestionRowModel, renamedIcons, Serializer, SurveyModel } from "survey-core";
import { settings } from "./creator-settings";
import { IQuestionToolboxItem } from "./toolbox";
import { SurveyHelper } from "./survey-helper";

export function calculateIsEdge(dropTargetNode: HTMLElement, clientY: number) {
  const rect = dropTargetNode.getBoundingClientRect();
  return clientY - rect.top <= DragDropSurveyElements.edgeHeight || rect.bottom - clientY <= DragDropSurveyElements.edgeHeight;
}
export function calculateIsSide(dropTargetNode: HTMLElement, clientX: number) {
  const rect = dropTargetNode.getBoundingClientRect();
  return clientX - rect.left <= DragDropSurveyElements.edgeHeight || rect.right - clientX <= DragDropSurveyElements.edgeHeight;
}

export function calculateDragOverLocation(clientX: number, clientY: number, rect: DOMRectInit, direction: "top-bottom" | "left-right" = null): DragTypeOverMeEnum {
  const tg = rect.height / rect.width;
  const dx = clientX - rect.x;
  const dy = clientY - rect.y;

  if (direction == "top-bottom") {
    if (dy >= rect.height / 2) {
      return DragTypeOverMeEnum.Bottom;
    } else {
      return DragTypeOverMeEnum.Top;
    }
  }
  if (direction == "left-right") {
    if (dx >= rect.width / 2) {
      return DragTypeOverMeEnum.Right;
    } else {
      return DragTypeOverMeEnum.Left;
    }
  }

  if (dy >= tg * dx) {
    if (dy >= - tg * dx + rect.height) {
      return DragTypeOverMeEnum.Bottom;
    }
    else {
      return DragTypeOverMeEnum.Left;
    }
  }
  else {
    if (dy >= - tg * dx + rect.height) {
      return DragTypeOverMeEnum.Right;
    }
    else {
      return DragTypeOverMeEnum.Top;
    }
  }
}

export function isPanelDynamic(element: ISurveyElement) {
  return element instanceof QuestionPanelDynamicModel;
}

export class DragDropSurveyElements extends DragDropCore<any> {
  public static newGhostPage: PageModel = null;
  public static restrictDragQuestionBetweenPages: boolean = false;
  public static edgeHeight: number = 30;
  public static nestedPanelDepth: number = -1;
  public static ghostSurveyElementName = "sv-drag-drop-ghost-survey-element-name"; // before renaming use globa search (we have also css selectors)

  public insideContainer = null;
  protected prevIsEdge: any = null;
  // protected ghostSurveyElement: IElement = null;
  protected dragOverIndicatorElement: any = null;
  protected dragOverLocation: DragTypeOverMeEnum;

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

  protected getShortcutText(draggedElement: IShortcutText): string {
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
    if ((dropTarget.getType() === "matrixdropdown" || dropTarget.getType() === "matrixdynamic") && (<any>dropTarget).detailPanelMode !== "none" && this.insideContainer) {
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

  protected isDropTargetValid(dropTarget: any, dropTargetNode?: HTMLElement, dragOverLocation: DragTypeOverMeEnum = DragTypeOverMeEnum.Top): boolean {
    if (!dropTarget) return false;
    if (dropTarget === this.draggedElement) return false;

    if (this.draggedElement.getType() === "paneldynamic" && dropTarget === this.draggedElement.template) {
      return false;
    }
    if (this.maxNestedPanels >= 0 && this.draggedElement.isPanel) {
      const pnl: any = <PanelModel>this.draggedElement;
      if(pnl.deepNested === undefined) {
        pnl.deepNested = this.getMaximumNestedPanelCount(pnl, 0);
      }
      let len = SurveyHelper.getElementDeepLength(dropTarget);
      if (dragOverLocation !== DragTypeOverMeEnum.InsideEmptyPanel && dropTarget.isPanel) len--;
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
      if(el.isPanel) {
        const pDeep = this.getMaximumNestedPanelCount(<PanelModel>el, deep + 1);
        if(pDeep > max) {
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
  private isAllowDragOver(dropTarget: ISurveyElement, dragOverLocation: DragTypeOverMeEnum): boolean {
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
    if (dragOverLocation === DragTypeOverMeEnum.Bottom || dragOverLocation === DragTypeOverMeEnum.Right) {
      allowOptions.insertAfter = <IElement>dropTarget;
    }
    if (dragOverLocation === DragTypeOverMeEnum.Top || dragOverLocation === DragTypeOverMeEnum.Left) {
      allowOptions.insertBefore = <IElement>dropTarget;
    }
    this.survey.onDragDropAllow.fire(this.survey, allowOptions);
    if (!allowOptions.allowDropNextToAnother) {
      if (dragOverLocation === DragTypeOverMeEnum.Left) {
        this.dragOverLocation = DragTypeOverMeEnum.Top;
      }
      if (dragOverLocation === DragTypeOverMeEnum.Right) {
        this.dragOverLocation = DragTypeOverMeEnum.Bottom;
      }
    }
    return allowOptions.allow;
  }
  public dragOverCore(dropTarget: ISurveyElement, dragOverLocation: DragTypeOverMeEnum): void {
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
    if (dragOverLocation == DragTypeOverMeEnum.InsideEmptyPanel) {
      this.dragOverIndicatorElement = this.dropTarget;
      this.dragOverIndicatorElement.dragTypeOverMe = DragTypeOverMeEnum.InsideEmptyPanel;
    } else {
      const row = this.parentElement.dragDropFindRow(this.dropTarget);
      if (!!row && row.elements.length > 1 && (this.dragOverLocation === DragTypeOverMeEnum.Top || this.dragOverLocation === DragTypeOverMeEnum.Bottom)) {
        row.dragTypeOverMe = this.dragOverLocation;
        this.dragOverIndicatorElement = row;
      } else {
        this.dropTarget.dragTypeOverMe = this.dragOverLocation;
        this.dragOverIndicatorElement = this.dropTarget;
      }
    }
    if (this.dragOverIndicatorElement != oldDragOverIndicatorElement) this.removeDragOverMarker(oldDragOverIndicatorElement);
    if (this.dropTarget != oldDropTarget) this.removeDragOverMarker(oldDropTarget);
  }
  private isSameElement(target: ISurveyElement): boolean {
    while (!!target) {
      if (target === this.draggedElement) return true;
      target = target.parent;
    }
    return false;
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
    const oldInsideContainer = this.insideContainer;
    this.insideContainer = !calculateIsEdge(dropTargetNode, event.clientY) && !calculateIsSide(dropTargetNode, event.clientX);
    const dropTarget = this.getDropTargetByNode(dropTargetNode, event);

    if (!!oldInsideContainer != !!this.insideContainer) dropTarget.dragTypeOverMe = null;
    const dropTargetRect = dropTargetNode.getBoundingClientRect();
    const calcDirection = !settings.dragDrop.allowDragToTheSameLine || (!!this.draggedElement && this.draggedElement.isPage) ? "top-bottom" : null;
    let dragOverLocation = calculateDragOverLocation(event.clientX, event.clientY, dropTargetRect, calcDirection);
    if (dropTarget && ((dropTarget.isPanel || dropTarget.isPage) && dropTarget.elements.length === 0 || isPanelDynamic(dropTarget) && dropTarget.template.elements.length == 0)) {
      if (dropTarget.isPage || this.insideContainer) {
        dragOverLocation = DragTypeOverMeEnum.InsideEmptyPanel;
      }
    }
    const options = {
      survey: this.survey,
      draggedSurveyElement: this.draggedElement,
      dragOverSurveyElement: dropTarget,
      clientX: event.clientX,
      clientY: event.clientY,
      dragOverRect: dropTargetRect,
      insideContainer: this.insideContainer,
      dragOverLocation
    };
    if (this.onDragOverLocationCalculating) {
      this.onDragOverLocationCalculating(options);
      dragOverLocation = options.dragOverLocation;
      this.insideContainer = options.insideContainer;
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
    this.draggedElement.isDragMe = true;
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
    const page = this.parentElement;
    const dragged = this.draggedElement;
    const src = this.draggedElement;

    if (dragged.isPage && dragged instanceof PageModel) {
      const survey = dragged.survey;
      const indexOfDraggedPage = survey.pages.indexOf(dragged);
      survey.pages.splice(indexOfDraggedPage, 1);
      const indexOfDropTarget = survey.pages.indexOf(this.dropTarget) + (this.dragOverLocation === DragTypeOverMeEnum.Top ? 0 : 1);
      survey.pages.splice(indexOfDropTarget, 0, dragged);

      if(indexOfDraggedPage !== indexOfDropTarget) {
        dragged["draggedFrom"] = indexOfDraggedPage < indexOfDropTarget ? indexOfDraggedPage : indexOfDraggedPage + 1;
      }
      return dragged;
    }

    const convertLocation = () => {
      switch (this.dragOverLocation) {
        case 4: return "top";
        case 5: return "right";
        case 6: return "bottom";
        case 7: return "left";
        default: return "bottom";
      }
    };

    const srcContainer = src.parent || src.page;
    if (!!srcContainer) {
      (page.survey as SurveyModel).startMovingQuestion();
      srcContainer.removeElement(src);
    }
    let dest = this.dragOverIndicatorElement?.isPanel ? this.dragOverIndicatorElement : this.dropTarget;
    if (isPanelDynamic(dest) && this.insideContainer) dest = dest.template;
    if (dest.isPage && dest.elements.length > 0 && !this.insideContainer) return;
    const isTargetIsContainer = dest.isPanel || dest.isPage;
    if (isTargetIsContainer && this.insideContainer) {
      dest.insertElement(src);
    } else {
      const destParent = dest.parent || dest.page;
      if (destParent) destParent.insertElement(src, dest, convertLocation());
    }
    (page.survey as SurveyModel).stopMovingQuestion();
    return dragged;
  }

  private removeDragOverMarker(dropTarget: { dragTypeOverMe: boolean }): void {
    if (!!dropTarget) {
      dropTarget.dragTypeOverMe = null;
    }
  }

  public clear(): void {
    this.insideContainer = null;
    this.removeDragOverMarker(this.prevDropTarget);
    this.removeDragOverMarker(this.dropTarget);
    this.removeDragOverMarker(this.dragOverIndicatorElement);
    if (!!this.draggedElement) {
      this.draggedElement.isDragMe = false;
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
