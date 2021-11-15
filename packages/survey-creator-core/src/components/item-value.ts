import {
  Base,
  ItemValue,
  property,
  QuestionCheckboxModel,
  QuestionSelectBase,
  Serializer,
  SurveyModel
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { DragDropChoices } from "survey-core";
import "./item-value.scss";
import { getLocString } from "../editorLocalization";

import { DragOrClickHelper } from "../utils/dragOrClickHelper";
import { ICollectionItemAllowOperations } from "../settings";

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
    this.dragOrClickHelper = new DragOrClickHelper(this.startDragItemValue);

    this.allowItemOperations = { allowDelete: undefined, allowEdit: undefined };

    this.creator.onCollectionItemAllowingCallback(question,
      Serializer.findProperty(question.getType(), this.item.ownerPropertyName),
      question.visibleChoices,
      this.item,
      this.allowItemOperations
    );
    if (this.allowItemOperations.allowDelete === undefined) {
      this.allowItemOperations.allowDelete = true;
    }

    if(!this.creator.isCanModifyProperty(question, "choices")) {
      this.canTouchItems = false;
    }
  }

  private dragOrClickHelper: DragOrClickHelper;
  private allowItemOperations: ICollectionItemAllowOperations;
  private canTouchItems: boolean = true;

  onPointerDown(pointerDownEvent: PointerEvent) {
    if (this.isNew) return;
    this.dragOrClickHelper.onPointerDown(pointerDownEvent);
  }

  startDragItemValue = (pointerDownEvent: PointerEvent, currentTarget: any) => {
    this.dragDropHelper.startDrag(pointerDownEvent, this.item, this.question, <HTMLElement>currentTarget);
  }

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
    if (this.creator.readOnly || !this.canTouchItems) return false;
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
    return !this.creator.readOnly && this.canTouchItems && (this.allowItemOperations.allowDelete);
  }
  get tooltip() {
    return getLocString(this.isNew ? "pe.addItem" : "pe.removeItem");
  }
  get dragTooltip() {
    return getLocString("pe.dragItem");
  }
  get allowAdd() {
    const isNew = !this.question.isItemInList(this.item);
    return !this.creator.readOnly && this.canTouchItems && isNew;
  }
  public select(model: ItemValueWrapperViewModel, event: Event) {
    model.creator.selectElement(model.question, "choices", false);
    event && event.stopPropagation();
  }
}
