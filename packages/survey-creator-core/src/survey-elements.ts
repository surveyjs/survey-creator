import { DragDropCore, DragTypeOverMeEnum, IElement, IPanel, IShortcutText, ISurveyElement, JsonObject, PageModel, PanelModelBase, QuestionRowModel, Serializer, SurveyModel, settings } from "survey-core";

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

  if(dy >= tg * dx) {
    if(dy >= - tg * dx + rect.height) {
      return DragTypeOverMeEnum.Bottom;
    }
    else {
      return DragTypeOverMeEnum.Left;
    }
  }
  else {
    if(dy >= - tg * dx + rect.height) {
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

  protected isEdge: boolean = false;
  protected isSide: boolean = false;
  protected prevIsEdge: any = null;
  // protected ghostSurveyElement: IElement = null;
  protected dragOverIndicatorElement: any = null;
  protected dragOverLocation: DragTypeOverMeEnum;

  protected get draggedElementType(): string {
    return "survey-element";
  }
  protected isDraggedElementSelected: boolean = false;

  // private isRight: boolean;
  // protected prevIsRight: boolean;

  public startDragToolboxItem(
    event: PointerEvent,
    draggedElementJson: JsonObject,
    toolboxItemTitle: string
  ): void {
    const preventSaveTargetNode = true;
    const draggedElement: any = this.createElementFromJson(draggedElementJson);
    draggedElement.toolboxItemTitle = toolboxItemTitle;
    this.startDrag(event, draggedElement, null, null, preventSaveTargetNode);
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
    draggedElementShortcut.appendChild(this.createDraggedElementIcon());
    draggedElementShortcut.appendChild(textSpan);
    draggedElementShortcut.className = this.getDraggedElementClass();
    return draggedElementShortcut;
  }

  protected createDraggedElementIcon(): HTMLElement {
    const span = document.createElement("span");
    const type = this.draggedElement.getType();
    const svgString = `<svg class="sv-svg-icon" role="img" style="width: 24px; height: 24px;"><use xlink:href="#icon-${type}"></use></svg>`;

    span.className = "svc-dragged-element-shortcut__icon";
    span.innerHTML = svgString;
    return span;
  }

  protected getDraggedElementClass() {
    let result = "svc-dragged-element-shortcut";
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
    if (dropTarget.getType() === "paneldynamic" && !this.isEdge && !this.isSide) {
      dropTarget = (<any>dropTarget).template;
    }

    // drop to matrix detail panel
    if ((dropTarget.getType() === "matrixdropdown" || dropTarget.getType() === "matrixdynamic") && (<any>dropTarget).detailPanelMode !== "none" && !this.isEdge && !this.isSide) {
      dropTarget = (<any>dropTarget).detailPanel;
    }

    // drop to panel
    else if (dropTarget.isPanel) {
      dropTarget = this.getPanelDropTarget(dropTargetNode, dropTarget, event);
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

  protected isDropTargetValid(dropTarget: any, dropTargetNode?: HTMLElement): boolean {
    if (!dropTarget) return false;
    if (dropTarget === this.draggedElement) return false;

    if (this.draggedElement.getType() === "paneldynamic" && dropTarget === this.draggedElement.template) {
      return false;
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

  // protected calculateIsBottom(clientY: number, dropTargetNode?: HTMLElement): boolean {
  //   return false;
  // }

  // protected calculateIsBottom(
  //   clientY: number,
  //   dropTargetNode?: HTMLElement
  // ): boolean {
  //   // we shouldn't reculc isBottom if drag over ghost survey element
  //   if (this.getDataAttributeValueByNode(dropTargetNode) === DragDropSurveyElements.ghostSurveyElementName) {
  //     return this.isBottom;
  //   }
  //   const middle = this.calculateVerticalMiddleOfHTMLElement(dropTargetNode);
  //   return clientY >= middle;
  // }

  // protected calculateIsRight(
  //   clientX: number,
  //   dropTargetNode?: HTMLElement
  // ): boolean {
  //   // we shouldn't reculc isBottom if drag over ghost survey element
  //   if (this.getDataAttributeValueByNode(dropTargetNode) === DragDropSurveyElements.ghostSurveyElementName) {
  //     return this.isRight;
  //   }
  //   const middle = this.calculateHorizontalMiddleOfHTMLElement(dropTargetNode);
  //   return clientX >= middle;
  // }

  // protected isDropTargetDoesntChanged(newIsBottom: boolean): boolean {
  //   // if (this.dropTarget === this.ghostSurveyElement) return true;
  //   return (
  //     this.dropTarget === this.prevDropTarget && newIsBottom === this.isBottom
  //     && this.isEdge === this.prevIsEdge && this.isRight === this.prevIsRight
  //   );
  // }

  private shouldRestricDragQuestionBetweenPages(dropTarget: any): boolean {
    const oldPage = (<any>this.draggedElement)["page"];
    const newPage = dropTarget.isPage ? dropTarget : dropTarget["page"];

    // if oldPage === null then it is drop from the toolbox
    return oldPage && oldPage !== newPage;
  }

  private getPanelDropTarget(HTMLElement: HTMLElement, dropTarget: any, event: PointerEvent) {
    let isEdge = this.isEdge;

    if (!isEdge && dropTarget.questions.length !== 0) {
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

  public dragOverCore(dropTarget: ISurveyElement, dragOverLocation: DragTypeOverMeEnum, isEdge: boolean = false, isSide: boolean = false): void {
    this.removeDragOverMarker(this.dragOverIndicatorElement);
    this.removeDragOverMarker(this.dropTarget);
    if(dropTarget === this.draggedElement) {
      this.allowDropHere = false;
      return;
    }
    this.dropTarget = dropTarget;
    this.dragOverLocation = dragOverLocation;
    this.isEdge = isEdge;
    this.isSide = isSide;

    this.parentElement = this.dropTarget.isPage
      ? this.dropTarget
      : ((<any>this.dropTarget).page || (<any>this.dropTarget).__page);

    const dragOverIndicator = this.dragOverIndicatorElement || this.dropTarget;
    if (!this.isEdge && !this.isSide && this.isDragOverInsideEmptyPanel()) {
      dragOverIndicator.dragTypeOverMe = DragTypeOverMeEnum.InsideEmptyPanel;
    } else {
      const row = this.parentElement.dragDropFindRow(dragOverIndicator);
      if(!!row && row.elements.length > 1 && (this.dragOverLocation === DragTypeOverMeEnum.Top || this.dragOverLocation === DragTypeOverMeEnum.Bottom)) {
        row.dragTypeOverMe = this.dragOverLocation;
        this.dragOverIndicatorElement = row;
      } else {
        dragOverIndicator.dragTypeOverMe = this.dragOverLocation;
      }
    }
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

    this.isEdge = calculateIsEdge(dropTargetNode, event.clientY);
    this.isSide = calculateIsSide(dropTargetNode, event.clientX);
    const dropTarget = this.getDropTargetByNode(dropTargetNode, event);

    const isDropTargetValid = this.isDropTargetValid(
      dropTarget,
      dropTargetNode
    );

    if (!isDropTargetValid) {
      this.banDropHere();
      return;
    }

    this.allowDropHere = true;

    const dragOverLocation = calculateDragOverLocation(event.clientX, event.clientY, dropTargetNode);
    this.dragOverCore(dropTarget, dragOverLocation, this.isEdge, this.isSide);
  }

  // protected doDragOver(dropTargetNode?: HTMLElement, event?: PointerEvent): void {
  //   this.isRight = this.calculateIsRight(event.clientX, dropTargetNode);
  // }

  // protected afterDragOver(dropTargetNode: HTMLElement, event: PointerEvent): void {
  //   this.prevIsEdge = this.isEdge;
  //   this.prevIsRight = this.isRight;
  //   this.insertGhostElementIntoSurvey();
  // }

  protected onStartDrag(): void {
    // this.ghostSurveyElement = this.createGhostSurveyElement();
    this.draggedElement.isDragMe = true;
  }

  // protected doBanDropHere = (): void => {
  //   this.removeGhostElementFromSurvey();
  //   this.isEdge = null;
  // };

  private getElementIndexInPanel(target: IElement, row: QuestionRowModel): number {
    if (!row) return -1;
    var index = row.elements.indexOf(target);
    if (row.index == 0) return index;
    var prevRow = row.panel.rows[row.index - 1];
    var prevElement = prevRow.elements[prevRow.elements.length - 1];
    return index + row.panel.elements.indexOf(prevElement) + 1;
  }
  public moveElementInPanel(panel: IPanel, src: IElement, target: IElement, targetIndex: number) {
    var srcIndex = (<PanelModelBase>src.parent).elements.indexOf(src);
    if (targetIndex > srcIndex) {
      targetIndex--;
    }
    if(src === target && srcIndex === targetIndex) {
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
    const dest = this.dropTarget;

    const row = page.dragDropFindRow(dest);
    let targetIndex = this.getElementIndexInPanel(dest, row);
    if(this.dragOverLocation === DragTypeOverMeEnum.Right || this.dragOverLocation === DragTypeOverMeEnum.Bottom) {
      targetIndex++;
    }
    const elementsToSetSWNL = [];
    const elementsToResetSWNL = [];

    const srcRow = src && src.parent && (src.parent as PanelModelBase).dragDropFindRow(src);
    if (srcRow && srcRow.elements.length > 1) {
      elementsToSetSWNL.push(src);
      if(srcRow.elements[0] === src) {
        elementsToSetSWNL.push(srcRow.elements[1]);
      }
    }

    if(!!row) {
      const dragOverIndicator = this.dragOverIndicatorElement || this.dropTarget;
      const dragOverLocation = dragOverIndicator.dragTypeOverMe;
      if(dragOverLocation === DragTypeOverMeEnum.Left) {
        elementsToResetSWNL.push(dest);
        if(row.elements.indexOf(dest) === 0 || row.elements.indexOf(src) === 0 && row.elements.indexOf(dest) === 1) {
          elementsToSetSWNL.push(dragged);
        } else {
          elementsToResetSWNL.push(dragged);
        }
      }
      else if(dragOverLocation === DragTypeOverMeEnum.Right) {
        elementsToResetSWNL.push(dragged);
        if(row.elements.indexOf(dest) === 0) {
          elementsToSetSWNL.push(dragged);
        }
      } else if(row.elements.length > 1) {
        elementsToSetSWNL.push(dragged);
        if(dragOverLocation === DragTypeOverMeEnum.Top) {
          targetIndex = this.getElementIndexInPanel(row.elements[0], row);
        }
        else if(dragOverLocation === DragTypeOverMeEnum.Bottom) {
          targetIndex = this.getElementIndexInPanel(row.elements[row.elements.length - 1], row) + 1;
        }
      } else {
        elementsToSetSWNL.push(dragged);
      }
    }

    if(!!src && !!src.parent) {
      (page.survey as SurveyModel).startMovingQuestion();
      let isSamePanel = !!row && row.panel == src.parent;
      if(isSamePanel) {
        this.moveElementInPanel(row.panel, src, dragged, targetIndex);
        row.panel.updateRows();
        targetIndex = -1;
      } else {
        src.parent.removeElement(src);
      }
    }
    if(!this.isEdge && !this.isSide && (dest.isPanel || dest.isPage)) {
      dest.addElement(dragged);
      dest.updateRows();
    } else if(!!row && targetIndex > -1) {
      row.panel.addElement(dragged, targetIndex);
      row.panel.updateRows();
    }
    (page.survey as SurveyModel).stopMovingQuestion();

    elementsToSetSWNL.map((e) => { e.startWithNewLine = true; });
    elementsToResetSWNL.map((e) => { e.startWithNewLine = false; });

    return dragged;
  }

  // protected doDrop = (): any => {
  //   if (this.dropTarget) {
  //     (<HTMLElement>document.activeElement).blur();
  //     (<HTMLElement>settings.environment.root.activeElement).blur();
  //     return this.insertRealElementIntoSurvey();
  //   }

  //   return null;
  // };

  private removeDragOverMarker(dropTarget: { dragTypeOverMe: boolean }): void {
    if (!!dropTarget) {
      dropTarget.dragTypeOverMe = null;
    }
    const row = this.parentElement?.dragDropFindRow(dropTarget);
    if(!!row) {
      row.dragTypeOverMe = null;
    }
  }

  public clear(): void {
    this.isEdge = null;
    this.isSide = null;
    this.removeDragOverMarker(this.prevDropTarget);
    this.removeDragOverMarker(this.dropTarget);
    this.removeDragOverMarker(this.dragOverIndicatorElement);
    if (!!this.draggedElement) {
      this.draggedElement.isDragMe = false;
    }
    super.clear();
  }

  // protected doClear = (): void => {
  //   // this.removeGhostElementFromSurvey();
  //   this.isEdge = null;
  //   this.isSide = null;
  //   // this.ghostSurveyElement = null;
  //   this.removeDragOverMarker(this.prevDropTarget);
  //   this.removeDragOverMarker(this.dropTarget);
  //   this.removeDragOverMarker(this.dragOverIndicatorElement);
  //   if (!!this.draggedElement) {
  //     this.draggedElement.isDragMe = false;
  //   }
  //   // this.isRight = null;
  // };

  // protected insertGhostElementIntoSurvey(): boolean {
  //   this.removeGhostElementFromSurvey();

  //   let isTargetRowMultiple = this.calcTargetRowMultiple();

  //   this.ghostSurveyElement = this.createGhostSurveyElement(isTargetRowMultiple);

  //   this.ghostSurveyElement.name =
  //     DragDropSurveyElements.ghostSurveyElementName; // TODO why do we need setup it manually see createGhostSurveyElement method

  //   this.parentElement = this.dropTarget.isPage
  //     ? this.dropTarget
  //     : ((<any>this.dropTarget).page || (<any>this.dropTarget).__page);

  //   if (this.isDragOverInsideEmptyPanel()) {
  //     this.dropTarget.dragTypeOverMe = DragTypeOverMeEnum.InsideEmptyPanel;
  //     return;
  //   }

  //   if (!this.isEdge && isTargetRowMultiple) {
  //     this.dropTarget.dragTypeOverMe = this.isRight ?
  //       DragTypeOverMeEnum.MultilineRight :
  //       DragTypeOverMeEnum.MultilineLeft;
  //     return;
  //   }

  //   this.parentElement.dragDropStart(
  //     this.draggedElement,
  //     this.ghostSurveyElement,
  //     DragDropSurveyElements.nestedPanelDepth
  //   );

  //   const result = this.parentElement.dragDropMoveTo(
  //     this.dropTarget,
  //     isTargetRowMultiple ? this.isRight : this.isBottom,
  //     this.isEdge
  //   );

  //   return result;
  // }

  // private calcTargetRowMultiple() {
  //   const targetParent = this.getTargetParent(this.dropTarget);
  //   let targetRow: any = this.getTargetRow(this.dropTarget);
  //   const isTargetRowMultiple = targetRow && targetRow.elements.length > 1;

  //   const isTemplatePanelInPanelDynamic = targetParent.isPanel && !targetParent.name;

  //   if (this.isEdge && isTargetRowMultiple && !isTemplatePanelInPanelDynamic) {
  //     targetParent.__page = this.dropTarget.page || this.dropTarget.__page;
  //     this.dropTarget = targetParent;
  //     return false;
  //   }

  //   return isTargetRowMultiple;
  // }

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

  protected isDragOverInsideEmptyPanel(): boolean {
    const isEmptyPanel = this.dropTarget.isPanel && this.dropTarget.questions.length === 0;
    const isDragOverInside = !this.isEdge && !this.isSide;
    return isEmptyPanel && isDragOverInside;
  }

  // protected removeGhostElementFromSurvey(): void {
  //   const dropTarget = this.prevDropTarget || this.dropTarget;
  //   if (!!dropTarget) {
  //     dropTarget.dragTypeOverMe = null;
  //   }
  //   if (!!this.parentElement) this.parentElement.dragDropFinish(true);
  // }

  // private insertRealElementIntoSurvey() {
  //   this.removeGhostElementFromSurvey();

  //   const isTargetRowMultiple = this.calcTargetRowMultiple();

  //   // ghost new page
  //   if (this.dropTarget.isPage && (<any>this.dropTarget)["_isGhost"]) {
  //     (<any>this.dropTarget)["_addGhostPageViewModel"]();
  //   }
  //   // EO ghost new page

  //   //TODO need for dragDrop helper in library
  //   const json = new JsonObject().toJsonObject(this.draggedElement);
  //   json["type"] = this.draggedElement.getType();
  //   const fakeTargetElement = this.createFakeTargetElement(
  //     this.draggedElement.name,
  //     json
  //   );
  //   //

  //   this.parentElement.dragDropStart(
  //     this.draggedElement,
  //     fakeTargetElement,
  //     DragDropSurveyElements.nestedPanelDepth
  //   );

  //   this.parentElement.dragDropMoveTo(
  //     this.dropTarget,
  //     isTargetRowMultiple ? this.isRight : this.isBottom,
  //     this.isEdge
  //   );

  //   const newElement = this.parentElement.dragDropFinish();

  //   return newElement;
  // }

  // private createFakeTargetElement(elementName: string, json: any): any {
  //   if (!elementName || !json) return null;
  //   var targetElement = null;
  //   targetElement = Serializer.createClass(json["type"]);
  //   new JsonObject().toObject(json, targetElement);
  //   targetElement.name = elementName;
  //   if (targetElement["setSurveyImpl"]) {
  //     targetElement["setSurveyImpl"](this.survey);
  //   } else {
  //     targetElement["setData"](this.survey);
  //   }
  //   targetElement.renderWidth = "100%";
  //   return targetElement;
  // }

  // private createGhostSurveyElement(isMultipleRowDrag = false): any {
  //   let className = "sv-drag-drop-ghost";
  //   let minWidth = "300px";

  //   if (isMultipleRowDrag) {
  //     minWidth = "4px";
  //     className += " sv-drag-drop-ghost--vertical";
  //   }

  //   const json: any = {
  //     type: "html",
  //     minWidth,
  //     name: DragDropSurveyElements.ghostSurveyElementName,
  //     html: `<div class="${className}"></div>`,
  //   };

  //   const element = <any>this.createElementFromJson(json);
  //   element.startWithNewLine = !isMultipleRowDrag;

  //   if (isMultipleRowDrag) {
  //     element.maxWidth = "4px";
  //     element.renderWidth = "0px";
  //     element.paddingRight = "0px";
  //     element.paddingLeft = "0px";
  //   }

  //   return element;
  // }
}
