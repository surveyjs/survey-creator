import { DragDropAllowEvent, DragDropCore, DragTypeOverMeEnum, IElement, IPanel, IShortcutText, ISurveyElement, JsonObject, PageModel, PanelModelBase, QuestionRowModel, Serializer, SurveyModel } from "survey-core";
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
export function calculateDragOverLocation(clientX: number, clientY: number, dropTargetNode: HTMLElement): DragTypeOverMeEnum {
  const rect = dropTargetNode.getBoundingClientRect();
  const tg = rect.height / rect.width;
  const dx = clientX - rect.x;
  const dy = clientY - rect.y;

  if (!settings.dragDrop.allowDragToTheSameLine) {
    if (dy >= rect.height / 2) {
      return DragTypeOverMeEnum.Bottom;
    } else {
      return DragTypeOverMeEnum.Top;
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

export class DragDropSurveyElements extends DragDropCore<any> {
  public static newGhostPage: PageModel = null;
  public static restrictDragQuestionBetweenPages: boolean = false;
  public static edgeHeight: number = 30;
  public static nestedPanelDepth: number = -1;
  public static ghostSurveyElementName = "sv-drag-drop-ghost-survey-element-name"; // before renaming use globa search (we have also css selectors)

  private insideEmptyContainer = null;
  protected prevIsEdge: any = null;
  // protected ghostSurveyElement: IElement = null;
  protected dragOverIndicatorElement: any = null;
  protected dragOverLocation: DragTypeOverMeEnum;

  protected get draggedElementType(): string {
    return "survey-element";
  }
  protected isDraggedElementSelected: boolean = false;
  public onGetMaxNestedPanels: () => number;
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

    const iconName = this.draggedElement.toolboxItemIconName;
    const svgString = `<svg class="sv-svg-icon" role="img" style="width: 24px; height: 24px;"><use xlink:href="#${iconName}"></use></svg>`;
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
    this.removeDragOverMarker(this.dragOverIndicatorElement);
    this.dragOverIndicatorElement = null;

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
      if (page.elements.length !== 0) {
        // TODO we can't drop on not empty page directly for now
        return null;
      }
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

    // drop to paneldynamic
    if (dropTarget.getType() === "paneldynamic" && this.insideEmptyContainer) {
      dropTarget = (<any>dropTarget).template;
    }

    // drop to matrix detail panel
    if ((dropTarget.getType() === "matrixdropdown" || dropTarget.getType() === "matrixdynamic") && (<any>dropTarget).detailPanelMode !== "none" && this.insideEmptyContainer) {
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
      let len = SurveyHelper.getElementDeepLength(dropTarget);
      if (dragOverLocation !== DragTypeOverMeEnum.InsideEmptyPanel && dropTarget.isPanel) len--;
      if (this.maxNestedPanels < len) return false;
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
  }

  private shouldRestricDragQuestionBetweenPages(dropTarget: any): boolean {
    const oldPage = (<any>this.draggedElement)["page"];
    const newPage = dropTarget.isPage ? dropTarget : dropTarget["page"];

    // if oldPage === null then it is drop from the toolbox
    return oldPage && oldPage !== newPage;
  }

  private getPanelDropTarget(HTMLElement: HTMLElement, dropTarget: any, event: PointerEvent) {
    if (dropTarget.questions.length !== 0) {
      HTMLElement = this.findDeepestDropTargetChild(HTMLElement);
      dropTarget = this.getDropTargetByNode(HTMLElement, event);
    }

    return dropTarget;
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
    this.removeDragOverMarker(this.dragOverIndicatorElement);
    this.removeDragOverMarker(this.dropTarget);
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
    const dragOverIndicator = this.dragOverIndicatorElement || this.dropTarget;
    if (dragOverLocation == DragTypeOverMeEnum.InsideEmptyPanel) {
      dragOverIndicator.dragTypeOverMe = DragTypeOverMeEnum.InsideEmptyPanel;
    } else {
      const row = this.parentElement.dragDropFindRow(dragOverIndicator);
      if (!!row && row.elements.length > 1 && (this.dragOverLocation === DragTypeOverMeEnum.Top || this.dragOverLocation === DragTypeOverMeEnum.Bottom)) {
        row.dragTypeOverMe = this.dragOverLocation;
        this.dragOverIndicatorElement = row;
      } else {
        dragOverIndicator.dragTypeOverMe = this.dragOverLocation;
      }
    }
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
    this.insideEmptyContainer = !calculateIsEdge(dropTargetNode, event.clientY) && !calculateIsSide(dropTargetNode, event.clientX);
    const dropTarget = this.getDropTargetByNode(dropTargetNode, event);

    let dragOverLocation = calculateDragOverLocation(event.clientX, event.clientY, dropTargetNode);
    if (dropTarget && (dropTarget.isPanel || dropTarget.isPage) && dropTarget.elements.length === 0) {
      if (dropTarget.isPage || this.insideEmptyContainer) {
        dragOverLocation = DragTypeOverMeEnum.InsideEmptyPanel;
      }
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
    const dest = this.dragOverIndicatorElement?.isPanel ? this.dragOverIndicatorElement : this.dropTarget;
    const isTargetIsContainer = dest.isPanel || dest.isPage;
    if (isTargetIsContainer && this.dragOverLocation == DragTypeOverMeEnum.InsideEmptyPanel) {
      dest.insertElement(src);
    } else {
      (dest.parent || dest.page).insertElement(src, dest, convertLocation());
    }
    (page.survey as SurveyModel).stopMovingQuestion();
    return dragged;
  }

  private removeDragOverMarker(dropTarget: { dragTypeOverMe: boolean }): void {
    if (!!dropTarget) {
      dropTarget.dragTypeOverMe = null;
    }
    const row = this.parentElement?.dragDropFindRow(dropTarget);
    if (!!row) {
      row.dragTypeOverMe = null;
    }
  }

  public clear(): void {
    this.insideEmptyContainer = null;
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
