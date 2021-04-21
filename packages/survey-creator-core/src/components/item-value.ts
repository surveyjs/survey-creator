import {
  Base,
  ItemValue,
  property,
  QuestionCheckboxBase,
  QuestionCheckboxModel,
  QuestionSelectBase,
  SurveyModel,
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { DragDropHelper } from "../dragdrophelper";
import { IPortableDragEvent } from "../entries";

import "./item-value.scss";

export class ItemValueWrapperViewModel extends Base {
  @property({ defaultValue: false }) isNew: boolean;
  constructor(
    private creator: CreatorBase<SurveyModel>,
    public question: QuestionSelectBase,
    public item: ItemValue
  ) {
    super();
    this.isNew = !question["isItemInList"](item);
  }

  public add(model: ItemValueWrapperViewModel) {
    if(model.question.noneItem === model.item) {
      model.question.hasNone = true;
    } else if(model.question.otherItem === model.item) {
      model.question.hasOther = true;
    } else if(model.question.getType() === "checkbox" && (<QuestionCheckboxModel>model.question).selectAllItem === model.item) {
      model.question.hasSelectAll = true;
    } else {
      model.question.choices.push(model.item);
    }
    this.isNew = !model.question["isItemInList"](model.item);
  }
  public remove(model: ItemValueWrapperViewModel) {
    if(model.question.noneItem === model.item) {
      model.question.hasNone = false;
    } else if(model.question.otherItem === model.item) {
      model.question.hasOther = false;
    } else if(model.question.getType() === "checkbox" && (<QuestionCheckboxModel>model.question).selectAllItem === model.item) {
      model.question.hasSelectAll = false;
    } else {
      var index = model.question.choices.indexOf(model.item);
      model.question.choices.splice(index, 1);
    }
    this.isNew = !model.question["isItemInList"](model.item);
  }

  dragStart(model: ItemValueWrapperViewModel, event: IPortableDragEvent) {
    return model.dragDropHelper.onDragStartItemValue(
      event,
      model.question,
      model.item
    );
  }
  dragOver(model: ItemValueWrapperViewModel, event: IPortableDragEvent) {
    // const draggedOverElement = model.surveyElement;
    // model.dragDropHelper.doDragDropOver(event, draggedOverElement, true);
  }
  dragEnd(model: ItemValueWrapperViewModel, event: IPortableDragEvent) {
    model.dragDropHelper.onDragEnd();
  }

  private get dragDropHelper(): DragDropHelper {
    return this.creator.dragDropHelper;
  }
  get isDraggable() {
    return true;
  }
}
