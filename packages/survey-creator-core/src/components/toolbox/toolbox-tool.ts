import { Base, DragOrClickHelper, ActionContainer, ListModel, PopupModel, CssClassBuilder } from "survey-core";
import { IQuestionToolboxItem, QuestionToolbox, QuestionToolboxItem } from "../../toolbox";
import { SurveyCreatorModel } from "../../creator-base";
import { DragDropSurveyElements } from "../../dragdrop-survey-elements";
export class ToolboxToolViewModel extends Base {
  private dragOrClickHelper: DragOrClickHelper;
  constructor(
    protected item: IQuestionToolboxItem,
    protected creator: SurveyCreatorModel,
    protected model: ActionContainer
  ) {
    super();
    this.dragOrClickHelper = new DragOrClickHelper(this.startDragToolboxItem);

    if (!this.isDotsItem()) {
      const popup = item.popupModel as PopupModel;
      if (!!popup) {
        const className = new CssClassBuilder()
          .append(popup.cssClass)
          .append("svc-toolbox-subtypes")
          .toString();

        popup.cssClass = className;
        popup.isFocusedContainer = false;
        popup.contentComponentName = "svc-toolbox-list";
        popup.contentComponentData["creator"] = creator;
        popup.isFocusedContent = false;
      }
    }
    if (typeof item.enabled === "undefined") {
      item.enabled = true;
    }
  }

  public click = (event) => {
    if (!this.allowAdd) return;
    if (!this.toolboxItem.enabled) return;
    this.creator.clickToolboxItem(this.item.json);
    this.hidePopup();
  };

  public get toolboxItem() {
    return this.item as QuestionToolboxItem;
  }

  public get itemComponent(): string {
    if (!!this.creator && !this.creator.toolbox.showSubitems && this.toolboxItem.hasSubItems) {
      return QuestionToolbox.defaultItemComponent;
    }
    return this.item.component || QuestionToolbox.defaultItemComponent;
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
    if (this.isDotsItem()) return true; //toolbox responsive popup
    this.dragOrClickHelper.onPointerDown(pointerDownEvent);

    this.toolboxItem.isPressed = true;
    document.addEventListener("pointerup", this.onPointerUp);
    this.creator?.onDragDropItemStart();
  }

  private onPointerUp = (pointerUpEvent) => {
    this.hidePopup();
    this.toolboxItem.isPressed = false;
    document.removeEventListener("pointerup", this.onPointerUp);
  };

  private startDragToolboxItem = (pointerDownEvent: PointerEvent) => {
    if (!this.toolboxItem.enabled) return;
    var json = this.creator.getJSONForNewElement(this.item.json);
    this.dragDropHelper.startDragToolboxItem(pointerDownEvent, json, this.item);
    return true;
  };

  private isDotsItem() {
    return this.item.id.indexOf("dotsItem-id") === 0;
  }

  private hidePopup() {
    this.toolboxItem.hidePopup();
    this.toolboxItem.isHovered = false;
  }

  private get dragDropHelper(): DragDropSurveyElements {
    return this.creator.dragDropSurveyElements;
  }
}
