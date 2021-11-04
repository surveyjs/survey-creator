import {
  Base,
  ItemValue,
  property,
  QuestionCheckboxModel,
  QuestionSelectBase,
  SurveyModel
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { DragDropChoices } from "survey-core";
import "./item-value.scss";
import { getLocString } from "../editorLocalization";

export class ItemValueWrapperViewModel extends Base {
  @property({ defaultValue: false }) isNew: boolean;
  @property({ defaultValue: false }) isDragging: boolean;
  @property({ defaultValue: false }) isDragDropGhost: boolean;
  @property({ defaultValue: false }) isDragDropMoveDown: boolean;
  @property({ defaultValue: false }) isDragDropMoveUp: boolean;
  @property({ defaultValue: null }) ghostPosition: string; // need fot image-item-value
  constructor(
    public creator: CreatorBase<SurveyModel>,
    public question: QuestionSelectBase,
    public item: ItemValue
  ) {
    super();
    this.isNew = !question.isItemInList(item);
    if (question.noneItem === item) {
    } else if (question.otherItem === item) {
    } else if (
      question.getType() === "checkbox" &&
      (<QuestionCheckboxModel>question).selectAllItem === item
    ) {
    } else if (this.isNew) {
      const nextValue = creator.getNextItemValue(question);
      item.value = nextValue;
    }
    this.dragDropHelper.onGhostPositionChanged.add(
      this.handleDragDropGhostPositionChanged
    );
  }

  // correct handle click vs drag
  private pointerDownEvent;
  private currentTarget;
  private startX;
  private startY;
  private currentX;
  private currentY;

  onPointerDown(pointerDownEvent: PointerEvent) {
    this.pointerDownEvent = pointerDownEvent;
    this.currentTarget = pointerDownEvent.currentTarget;
    this.startX = pointerDownEvent.pageX;
    this.startY = pointerDownEvent.pageY;
    document.addEventListener("pointermove", this.startDragItemValue);
  }

  startDragItemValue = (pointerMoveEvent: PointerEvent) => {
    this.currentX = pointerMoveEvent.pageX;
    this.currentY = pointerMoveEvent.pageY;
    if (this.isMicroMovement) return;
    this.clearListeners();

    const event = this.pointerDownEvent;
    this.dragDropHelper.startDrag(event, this.item, this.question, <HTMLElement>this.currentTarget);
  }
  public onPointerUp = (event) => {
    this.clearListeners();
  };
  // see https://stackoverflow.com/questions/6042202/how-to-distinguish-mouse-click-and-drag
  private get isMicroMovement() {
    const delta = 10;
    const diffX = Math.abs(this.currentX - this.startX);
    const diffY = Math.abs(this.currentY - this.startY);
    return diffX < delta && diffY < delta;
  }
  private clearListeners() {
    if (!this.pointerDownEvent) return;
    const toolboxItemHTMLElement = <HTMLElement>this.pointerDownEvent.target;
    document.removeEventListener("pointermove", this.startDragItemValue);
  }
  // EO correct handle click vs drag

  private get dragDropHelper(): DragDropChoices {
    return this.creator.dragDropChoices;
  }
  public dispose() {
    super.dispose();
    this.dragDropHelper.onGhostPositionChanged.remove(
      this.handleDragDropGhostPositionChanged
    );
  }
  private handleDragDropGhostPositionChanged = () => {
    this.ghostPosition = this.dragDropHelper.getGhostPosition(this.item);
    this.isDragDropGhost = this.item === this.dragDropHelper.draggedElement;

    if (this.item === this.dragDropHelper.prevDropTarget) {
      this.isDragDropMoveDown = this.item.isDragDropMoveDown;
      this.isDragDropMoveUp = this.item.isDragDropMoveUp;
    } else {
      this.isDragDropMoveDown = false;
      this.isDragDropMoveUp = false;
    }
  };
  get isDraggable() {
    return this.isDraggableItem(this.item);
  }
  public isDraggableItem(item: ItemValue) {
    if (this.creator.readOnly) return false;
    return this.question.choices.indexOf(item) !== -1;
  }

  public add(model: ItemValueWrapperViewModel) {
    if (model.question.noneItem === model.item) {
      model.question.hasNone = true;
    } else if (model.question.otherItem === model.item) {
      model.question.hasOther = true;
    } else if (
      model.question.getType() === "checkbox" &&
      (<QuestionCheckboxModel>model.question).selectAllItem === model.item
    ) {
      model.question.hasSelectAll = true;
    } else {
      const itemValue = model.creator.createNewItemValue(model.question);
      model.question.choices.push(itemValue);
      const nextValue = model.creator.getNextItemValue(model.question);
      model.item.value = nextValue;
    }
    this.isNew = !model.question.isItemInList(model.item);
  }
  public remove(model: ItemValueWrapperViewModel) {
    if (model.question.noneItem === model.item) {
      model.question.hasNone = false;
    } else if (model.question.otherItem === model.item) {
      model.question.hasOther = false;
    } else if (
      model.question.getType() === "checkbox" &&
      (<QuestionCheckboxModel>model.question).selectAllItem === model.item
    ) {
      model.question.hasSelectAll = false;
    } else {
      var index = model.question.choices.indexOf(model.item);
      model.question.choices.splice(index, 1);
    }
    this.isNew = !model.question["isItemInList"](model.item);
  }

  get allowRemove() {
    return !this.creator.readOnly;
  }
  get tooltip() {
    return getLocString(this.isNew ? "pe.addItem" : "pe.removeItem");
  }
  get dragTooltip() {
    return getLocString("pe.dragItem");
  }
  get allowAdd() {
    const isNew = !this.question.isItemInList(this.item);
    return !this.creator.readOnly && isNew;
  }
  public select(model: ItemValueWrapperViewModel, event: Event) {
    model.creator.selectElement(model.question, "choices", false);
    event && event.stopPropagation();
  }
}
