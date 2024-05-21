import { Base, SurveyModel, DragOrClickHelper, ActionContainer, ListModel, BaseAction } from "survey-core";
import { IQuestionToolboxItem } from "../../toolbox";
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

  public get allowAdd() {
    return !this.creator.readOnly;
  }

  private popupHideCompleteCallback = () => {
    this._node?.classList.remove("svc-toolbox__tool--hovered");
  }
  public onMouseOver(itemValue, mouseoverEvent) {
    this._node = mouseoverEvent.currentTarget;
    this._node.classList.add("svc-toolbox__tool--hovered");
    this.model.actions.forEach((action: any) => {
      if (action === itemValue) {
        action.showPopupDelayed(this.creator.toolbox.subItemsShowDelay);
      } else {
        action.hidePopup();
      }
    });
    //mouseoverEvent.stopPropagation();
  }

  public onMouseLeave(itemValue, mouseoverEvent) {
    itemValue.hidePopupDelayed(this.creator.toolbox.subItemsHideDelay, this.popupHideCompleteCallback);
  }

  public onPointerDown(pointerDownEvent) {
    pointerDownEvent.stopPropagation();

    this.hidePopup();
    if (!this.allowAdd) return;
    if (this.item.id.indexOf("dotsItem-id") === 0) return true; //toolbox responsive popup
    this.dragOrClickHelper.onPointerDown(pointerDownEvent);

    this._node = pointerDownEvent.currentTarget;
    this._node.classList.add("svc-toolbox__tool--pressed");
    document.addEventListener("pointerup", this.onPointerUp);
    this.creator?.onDragDropItemStart();
  }

  private _node: any
  private onPointerUp = (pointerUpEvent) => {
    this._node.classList.remove("svc-toolbox__tool--pressed");
    this._node = null;
    document.removeEventListener("pointerup", this.onPointerUp);
  }

  private startDragToolboxItem = (pointerDownEvent, currentTarget) => {
    var json = this.creator.getJSONForNewElement(this.item.json);
    this.dragDropHelper.startDragToolboxItem(pointerDownEvent, json, this.item);
    return true;
  };

  private hidePopup() {
    this.item.hidePopup();
    this.popupHideCompleteCallback ();
    if (this.model instanceof ListModel) {
      this.model.onItemClick(this.item);
    }
  }

  private get dragDropHelper(): DragDropSurveyElements {
    return this.creator.dragDropSurveyElements;
  }
}
