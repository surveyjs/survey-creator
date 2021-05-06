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
} from 'survey-core';
import { CreatorBase } from './creator-base';
import { IPortableDragEvent } from './utils/events';

export class DragDropHelper extends Base {
  public static edgeHeight: number = 20;
  public static nestedPanelDepth: number = -1;
  public static prevEvent = { element: null, x: -1, y: -1 };

  private ghostElement: any = null;
  private sourceElement: IElement = null;
  @property() draggedOverElement: IElement = null;
  @property() isBottom: boolean = null;
  private isEdge: boolean = null;
  private pageOrPanel: PageModel = null;

  private itemValueSourceQuestion: QuestionSelectBase = null;

  private get survey(): SurveyModel {
    return this.creator.survey;
  }

  private get sourceElementType() {
    if (!this.sourceElement) return 'toolbox-item';
    return this.sourceElement.getType();
  }

  constructor(private creator: CreatorBase<SurveyModel>) {
    super();
  }

  public onDragStartToolboxItem(
    event: IPortableDragEvent,
    sourceElementJson: JsonObject
  ) {
    const sourceElement = this.createElementFromJson(sourceElementJson);
    return this.onDragStart(event, sourceElement);
  }

  public onDragStartQuestion(
    event: IPortableDragEvent,
    sourceElement: IElement
  ) {
    return this.onDragStart(event, sourceElement);
  }

  public startDragQuestion(event: PointerEvent, sourceElement: IElement) {
    this.ghostElement = this.createGhostElement();
    this.sourceElement = sourceElement;

    const draggedElement = document.createElement('div');
    draggedElement.innerText = sourceElement.name;
    draggedElement.style.height = '40px';
    draggedElement.style.minWidth = '100px';
    draggedElement.style.borderRadius = '100px';
    draggedElement.style.backgroundColor = 'white';
    draggedElement.style.padding = '10px';

    draggedElement.style.cursor = 'grabbing';
    draggedElement.style.position = 'absolute';
    draggedElement.style.zIndex = '1000';
    document.body.append(draggedElement);

    let shiftX = draggedElement.offsetWidth / 2;
    let shiftY = draggedElement.offsetHeight / 2;

    const moveAt = (pageX, pageY) => {
      draggedElement.style.left = pageX - shiftX + 'px';
      draggedElement.style.top = pageY - shiftY + 'px';
    };

    moveAt(event.pageX, event.pageY);

    const onPoinerMove = (event) => {
      moveAt(event.pageX, event.pageY);

      draggedElement.hidden = true;
      let draggedOverElement = document.elementFromPoint(
        event.clientX,
        event.clientY
      );
      draggedElement.hidden = false;

      if (!draggedOverElement) return;

      let dropZoneElement = <HTMLElement>(
        draggedOverElement.closest('.svc-drop-zone')
      );

      if (!dropZoneElement) return;

      this.draggedOverElement = this.survey.getQuestionByName(
        dropZoneElement.dataset.svcName
      );
    };

    document.addEventListener('pointermove', onPoinerMove);

    draggedElement.onpointerup = () => {
      console.log('drop on: ' + this.draggedOverElement.name);
      this.draggedOverElement;
      document.removeEventListener('pointermove', onPoinerMove);
      draggedElement.onpointerup = null;
      document.body.removeChild(draggedElement);
      this.onDragEnd();
    };
  }

  public onDragStartItemValue(
    event: IPortableDragEvent,
    question: QuestionSelectBase,
    item: ItemValue
  ) {
    event.stopPropagation();

    // shouldn't allow drag start on adorners (selectall, none, other)
    if (question.choices.indexOf(item) === -1) return false;

    event.dataTransfer.effectAllowed = 'move';

    this.itemValueSourceQuestion = question;
    this.sourceElement = <any>item;
    return true;
  }

  private onDragStart(event: IPortableDragEvent, sourceElement: IElement) {
    event.stopPropagation(); // prevent call startDrag event on Parent

    event.dataTransfer.effectAllowed = 'move';

    this.ghostElement = this.createGhostElement();
    this.sourceElement = sourceElement;

    return true;
  }

  private createGhostElement(): any {
    const json = {
      type: 'html',
      name: 'svd-drag-drog-ghost-element',
      html: '<div class="svc-drag-drop-ghost"></div>'
    };
    return this.createElementFromJson(json);
  }

  private createElementFromJson(json) {
    const element = this.creator.createNewElement(json);
    if (element['setSurveyImpl']) {
      element['setSurveyImpl'](this.survey);
    } else {
      element['setData'](this.survey);
    }
    element.renderWidth = '100%';
    return element;
  }

  public onDragOverItemValue(
    event: IPortableDragEvent,
    question: QuestionSelectBase,
    item: any
  ) {
    if (this.sourceElementType !== 'itemvalue') {
      return true; // ban drop here
    }

    // shouldn't allow drag over on adorners (selectall, none, other)
    if (question.choices.indexOf(item) === -1) return true;

    event.stopPropagation();

    if (item === this.sourceElement) {
      this.draggedOverElement = null;
      return true; // ban drop here
    }

    if (this.itemValueSourceQuestion !== question) {
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
    if (this.isBottom) return 'bottom';
    return 'top';
  }

  public onDragOver(event: IPortableDragEvent, draggedOverElement: any) {
    event.stopPropagation();

    if (this.sourceElementType === 'itemvalue') {
      this.removeGhostElementFromSurvey(this.pageOrPanel);
      this.draggedOverElement = null;
      return true; // ban drop here
    }

    if (draggedOverElement === this.sourceElement) {
      this.removeGhostElementFromSurvey(this.pageOrPanel);
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

    this.insertGhostElementIntoSurvey(
      this.draggedOverElement,
      this.isBottom,
      this.isEdge
    );

    return false; // alow drop here
  }

  private isSamePlace(
    event: IPortableDragEvent,
    draggedOverElement: any
  ): boolean {
    const prev = DragDropHelper.prevEvent;
    if (
      prev.element != draggedOverElement ||
      Math.abs(event.clientX - prev.x) > 5 ||
      Math.abs(event.clientY - prev.y) > 5
    ) {
      prev.element = draggedOverElement;
      prev.x = event.clientX;
      prev.y = event.clientY;
      return false;
    }
    return true;
  }

  private isAtLowerPartOfCurrentTarget(event: IPortableDragEvent): any {
    const target = event.currentTarget;
    if (!target['getBoundingClientRect']) {
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
    const height = <number>event.currentTarget['clientHeight'];
    let y = event.offsetY;
    if (event.hasOwnProperty('layerX')) {
      y = event['layerY'] - <number>event.currentTarget['offsetTop'];
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
    if (event.hasOwnProperty('layerX')) {
      y = event['layerY'] - <number>event.currentTarget['offsetTop'];
    }
    return y > elY;
  }

  public onDropItemValue(event: IPortableDragEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.doDropItemValue(
      this.itemValueSourceQuestion,
      this.sourceElement,
      this.draggedOverElement,
      this.isBottom
    );

    return true;
  }
  private doDropItemValue(
    itemValueSourceQuestion,
    sourceElement,
    draggedOverElement,
    isBottom
  ) {
    const isTop = !isBottom;
    const choices = itemValueSourceQuestion.choices;
    const oldIndex = choices.indexOf(sourceElement);
    let newIndex = choices.indexOf(draggedOverElement);

    if (oldIndex < newIndex && isTop) {
      newIndex--;
    } else if (oldIndex > newIndex && isBottom) {
      newIndex++;
    }

    choices.splice(oldIndex, 1);
    choices.splice(newIndex, 0, sourceElement);
  }

  public onDrop(event: IPortableDragEvent) {
    let newElement;
    event.stopPropagation();
    event.preventDefault();

    newElement = this.insertRealElementIntoSurvey(
      this.draggedOverElement,
      this.sourceElement,
      this.pageOrPanel,
      this.isBottom,
      this.isEdge
    );

    this.creator.selectElement(newElement);
  }

  private insertGhostElementIntoSurvey(
    draggedOverElement: any,
    isBottom: boolean,
    isEdge: boolean = false
  ): boolean {
    this.removeGhostElementFromSurvey(this.pageOrPanel);

    this.pageOrPanel = draggedOverElement.isPage
      ? draggedOverElement
      : draggedOverElement.page;

    this.pageOrPanel.dragDropStart(
      this.sourceElement,
      this.ghostElement,
      DragDropHelper.nestedPanelDepth
    );

    return this.pageOrPanel.dragDropMoveTo(
      draggedOverElement,
      isBottom,
      isEdge
    );
  }

  private insertRealElementIntoSurvey(
    draggedOverElement,
    element,
    page,
    isBottom,
    isEdge
  ) {
    this.removeGhostElementFromSurvey(page);
    page.dragDropStart(null, element, DragDropHelper.nestedPanelDepth);
    page.dragDropMoveTo(draggedOverElement, isBottom, isEdge);
    return page.dragDropFinish();
  }

  private removeGhostElementFromSurvey(page) {
    if (!!page) page.dragDropFinish(true);
  }

  public onDragEnd() {
    this.removeGhostElementFromSurvey(this.pageOrPanel);

    const prevEvent = DragDropHelper.prevEvent;
    prevEvent.element = null;
    prevEvent.x = -1;
    prevEvent.y = -1;

    this.draggedOverElement = null;
    this.ghostElement = null;
    this.sourceElement = null;
    this.pageOrPanel = null;
    this.itemValueSourceQuestion = null;
    this.isBottom = null;
    this.isEdge = null;
  }
}
