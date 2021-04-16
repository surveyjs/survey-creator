import {
  Base,
  ItemValue,
  property,
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
  }

  public add(model: ItemValueWrapperViewModel) {}
  public remove(model: ItemValueWrapperViewModel) {
    var index = model.question.choices.indexOf(model.item);
    model.question.choices.splice(index, 1);
  }

  dragStart(model: ItemValueWrapperViewModel, event: IPortableDragEvent) {
    // const sourceElement = model.surveyElement;
    // return model.dragDropHelper.startDragQuestion(event, sourceElement);
  }
  dragOver(model: ItemValueWrapperViewModel, event: IPortableDragEvent) {
    // const draggedOverElement = model.surveyElement;
    // model.dragDropHelper.doDragDropOver(event, draggedOverElement, true);
  }
  dragEnd(model: ItemValueWrapperViewModel, event: IPortableDragEvent) {
    model.dragDropHelper.end();
  }

  private get dragDropHelper(): DragDropHelper {
    return this.creator.dragDropHelper;
  }
}
