import { Base, SurveyModel } from "survey-core";
import { IQuestionToolboxItem } from "../../toolbox";
import { CreatorBase } from "../../creator-base";
import { DragDropSurveyElements } from "survey-core";
import { DragOrClickHelper } from "../../utils/dragOrClickHelper";

export class ToolboxToolViewModel extends Base {
  private dragOrClickHelper: DragOrClickHelper;
  constructor(
    protected item: IQuestionToolboxItem,
    protected creator: CreatorBase<SurveyModel>
  ) {
    super();
    this.dragOrClickHelper = new DragOrClickHelper(this.startDragToolboxItem);
  }

  public click = (event) => {
    if (!this.allowAdd) return;
    this.creator.clickToolboxItem(this.item.json);
  };

  public get allowAdd() {
    return !this.creator.readOnly;
  }

  public onPointerDown(pointerDownEvent) {
    if (!this.allowAdd) return;
    if (this.item.id === 'dotsItem-id') return true; //toolbox responsive popup
    this.dragOrClickHelper.onPointerDown(pointerDownEvent);

    this._node = pointerDownEvent.currentTarget;
    this._node.classList.add("svc-toolbox__tool--pressed");
    document.addEventListener("pointerup", this.onPointerUp);
  }

  private _node: any
  private onPointerUp = (pointerUpEvent) => {
    this._node.classList.remove("svc-toolbox__tool--pressed");
    this._node = null;
    document.removeEventListener("pointerup", this.onPointerUp);
  }

  private startDragToolboxItem = (pointerDownEvent, currentTarget) => {
    var json = this.creator.getJSONForNewElement(this.item.json);
    this.dragDropHelper.startDragToolboxItem(pointerDownEvent, json);
    return true;
  };

  private get dragDropHelper(): DragDropSurveyElements {
    return this.creator.dragDropSurveyElements;
  }
}
