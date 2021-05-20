import {
  Base,
  ItemValue,
  property,
  QuestionCheckboxBase,
  QuestionCheckboxModel,
  QuestionSelectBase,
  surveyLocalization,
  SurveyModel
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { DragDropHelper } from "../dragdrophelper";
import { IPortableDragEvent } from "../entries";

import "./item-value.scss";

export class ItemValueWrapperViewModel extends Base {
  @property({ defaultValue: false }) isNew: boolean;
  constructor(
    protected creator: CreatorBase<SurveyModel>,
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
  }

  public isDraggableItem(item: ItemValue) {
    if (
      this.question.noneItem === item ||
      this.question.otherItem === item ||
      (this.question.getType() === "checkbox" &&
        (<QuestionCheckboxModel>this.question).selectAllItem === item)
    ) {
      return false;
    }
    return true;
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

  startDrag() {
    this.dragDropHelper.startDragItemValue(this.question, this.item);
    return true;
  }

  public getGhostPosition(): string {
    return this.dragDropHelper.getItemValueGhostPosition(this.item);
  }
  private get dragDropHelper(): DragDropHelper {
    return this.creator.dragDropHelper;
  }
  get isDraggable() {
    return this.isDraggableItem(this.item);
  }
}
