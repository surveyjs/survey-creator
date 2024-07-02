import { Base, DragOrClickHelper, ActionContainer, ListModel } from "survey-core";
import { IQuestionToolboxItem, QuestionToolboxItem } from "../../toolbox";
import { SurveyCreatorModel } from "../../creator-base";
import { DragDropSurveyElements } from "../../survey-elements";
export class ToolboxToolViewModel extends Base {
  private dragOrClickHelper: DragOrClickHelper;
  constructor(
    protected item: IQuestionToolboxItem,
    protected creator: SurveyCreatorModel,
    protected model: ActionContainer
  ) {
    super();
    this.dragOrClickHelper = new DragOrClickHelper(this.startDragToolboxItem);
  }

  public click = (event) => {
    if (!this.allowAdd) return;
    this.creator.clickToolboxItem(this.item.json);
    this.hidePopup();
  };

  public get toolboxItem() {
    return this.item as QuestionToolboxItem;
  }

  public get allowAdd() {
    return !this.creator.readOnly;
  }

  public onMouseOver(itemValue, mouseoverEvent) {
    this.model.mouseOverHandler(itemValue);
  }

  public onMouseLeave(itemValue, mouseoverEvent) {
    itemValue.hidePopupDelayed(this.creator.toolbox.subItemsHideDelay);
  }

  public onPointerDown(pointerDownEvent) {
    pointerDownEvent.stopPropagation();

    if (!this.allowAdd) return;
    if (this.item.id.indexOf("dotsItem-id") === 0) return true; //toolbox responsive popup
    this.dragOrClickHelper.onPointerDown(pointerDownEvent);

    this.toolboxItem.isPressed = true;
    document.addEventListener("pointerup", this.onPointerUp);
    this.creator?.onDragDropItemStart();
  }

  private onPointerUp = (pointerUpEvent) => {
    this.hidePopup();
    this.toolboxItem.isPressed = false;
    document.removeEventListener("pointerup", this.onPointerUp);
  }

  private startDragToolboxItem = (pointerDownEvent, currentTarget) => {
    var json = this.creator.getJSONForNewElement(this.item.json);
    this.dragDropHelper.startDragToolboxItem(pointerDownEvent, json, this.item);
    return true;
  };

  private hidePopup() {
    this.toolboxItem.hidePopup();
    this.toolboxItem.isHovered = false;
  }

  private get dragDropHelper(): DragDropSurveyElements {
    return this.creator.dragDropSurveyElements;
  }
}
