import {
  Base,
  ItemValue,
  property,
  QuestionCheckboxModel,
  QuestionSelectBase,
  Serializer,
  SurveyModel,
  DragOrClickHelper
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { DragDropChoices } from "survey-core";
import "./item-value.scss";
import { getLocString } from "../editorLocalization";

import { ICollectionItemAllowOperations } from "../settings";
import { StringEditorConnector, StringEditorViewModelBase } from "./string-editor";

export class ItemValueWrapperViewModel extends Base {
  @property({ defaultValue: false }) isNew: boolean;
  @property({ defaultValue: false }) isDragging: boolean;
  @property({ defaultValue: false }) isDragDropGhost: boolean;
  @property({ defaultValue: false }) isDragDropMoveDown: boolean;
  @property({ defaultValue: false }) isDragDropMoveUp: boolean;
  @property({ defaultValue: null }) ghostPosition: string; // need fot image-item-value
  constructor(
    public creator: CreatorBase,
    public question: QuestionSelectBase,
    public item: ItemValue
  ) {
    super();

    this.updateIsNew(question, item);
    const updateFromProperty = () => {
      this.updateIsNew(question, item);
    };
    if (question.noneItem === item) {
      question.registerFunctionOnPropertyValueChanged("showNoneItem", updateFromProperty);
    } else if (question.otherItem === item) {
      question.registerFunctionOnPropertyValueChanged("showOtherItem", updateFromProperty);
    } else if (
      question.isDescendantOf("checkbox") &&
      (<QuestionCheckboxModel>question).selectAllItem === item
    ) {
      question.registerFunctionOnPropertyValueChanged("showSelectAllItem", updateFromProperty);
    } else if (this.isNew) {
      question.visibleChoicesChangedCallback = () => {
        this.updateNewItemValue();
      };
      this.updateNewItemValue();
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

    if (!this.creator.isCanModifyProperty(question, "choices")) {
      this.canTouchItems = false;
    }
    StringEditorConnector.get(item.locText).setItemValue(this);
  }

  private dragOrClickHelper: DragOrClickHelper;
  private allowItemOperations: ICollectionItemAllowOperations;
  private canTouchItems: boolean = true;

  private isBanStartDrag(pointerDownEvent: PointerEvent): boolean {
    const isContentEditable = (<HTMLElement>pointerDownEvent.target).getAttribute("contenteditable") === "true";
    return this.isNew || isContentEditable;
  }
  private updateNewItemValue() {
    if (!this.creator || !this.question || !this.question.newItem) return;
    this.question.newItem.value = this.creator.getNextItemValue(this.question);
  }

  onPointerDown(pointerDownEvent: PointerEvent) {
    if (this.isBanStartDrag(pointerDownEvent)) return;
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
      this.isDragDropMoveDown = (<any>this.item).isDragDropMoveDown;
      this.isDragDropMoveUp = (<any>this.item).isDragDropMoveUp;
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
      return;
    } else if (model.question.otherItem === model.item) {
      model.question.hasOther = true;
      return;
    } else if (
      model.question.isDescendantOf("checkbox") &&
      (<QuestionCheckboxModel>model.question).selectAllItem === model.item
    ) {
      (<any>model.question).hasSelectAll = true;
      return;
    } else {
      this.addNewItem(model.item, model.question, model.creator);
    }
    this.updateIsNew(model.question, model.item);
  }
  public addNewItem(item: ItemValue, question: QuestionSelectBase, creator: CreatorBase) {
    item.value = "newitem";
    const itemValue = creator.createNewItemValue(question);
    question.choices.push(itemValue);
    this.updateNewItemValue();
    if (this.creator) this.creator.onItemValueAddedCallback(question, "choices", itemValue, question.choices);
    StringEditorConnector.get(itemValue.locText).setAutoFocus();
  }

  public remove(model: ItemValueWrapperViewModel) {
    if (model.question.noneItem === model.item) {
      model.question.hasNone = false;
    } else if (model.question.otherItem === model.item) {
      model.question.hasOther = false;
    } else if (
      model.question.isDescendantOf("checkbox") &&
      (<QuestionCheckboxModel>model.question).selectAllItem === model.item
    ) {
      (<any>model.question).hasSelectAll = false;
    } else {
      var index = model.question.choices.indexOf(model.item);
      model.question.choices.splice(index, 1);
    }
    this.updateIsNew(model.question, model.item);
  }
  private updateIsNew(question: QuestionSelectBase, item: ItemValue) {
    this.isNew = !question.isItemInList(item);
  }

  get allowRemove() {
    const isNew = !this.question.isItemInList(this.item);
    return !this.creator.readOnly && this.canTouchItems && (this.allowItemOperations.allowDelete) && !isNew;
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
