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
    this.subscribeToDragDropHelper();
  }
  dispose() {
    super.dispose();
    this.unsubscribeToDragDropHelper();
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
  @property({ defaultValue: null }) ghostPosition: string;
  private handleDragDropHelperChanges = (sender, options) => {
    if (options.name === "isBottom") {
      this.ghostPosition = this.dragDropHelper.getGhostPosition(
        this.item
      );
    }
  };
  private subscribeToDragDropHelper = () => {
    this.dragDropHelper.onPropertyChanged.add(this.handleDragDropHelperChanges);
  };
  private unsubscribeToDragDropHelper = () => {
    this.dragDropHelper.onPropertyChanged.remove(
      this.handleDragDropHelperChanges
    );
  };
  startDragItemValue(event: PointerEvent) {
    this.dragDropHelper.startDrag(event, this.item, this.question,);
  }
  private get dragDropHelper(): DragDropChoices {
    return this.creator.dragDropChoices;
  }
  get isDraggable() {
    return this.isDraggableItem(this.item);
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
