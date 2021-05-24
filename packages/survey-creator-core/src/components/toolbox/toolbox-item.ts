import { Base, SurveyModel } from "survey-core";
import { IQuestionToolboxItem } from "../../toolbox";
import { CreatorBase } from "../../creator-base";

export class ToolboxItemViewModel extends Base {
  constructor(
    protected item: IQuestionToolboxItem,
    protected creator: CreatorBase<SurveyModel>
  ) {
    super();
  }

  // correct handle click vs drag
  private clickWasDone = false;
  private pointerDownEvent;
  public onPointerDown(pointerDownEvent) {
    pointerDownEvent.preventDefault();
    this.pointerDownEvent = pointerDownEvent;
    const toolboxItemHTMLElement = <HTMLElement>this.pointerDownEvent.target;
    toolboxItemHTMLElement.addEventListener("pointerup", this.click);
    setTimeout(() => {
      document.addEventListener("pointermove", this.startDragToolboxItem);
    }, 300);
  }
  private click = (event) => {
    this.clearListeners();
    this.creator.clickToolboxItem(this.item.json);
    this.clickWasDone = true;
  };
  private startDragToolboxItem = (pointerMoveEvent) => {
    pointerMoveEvent.preventDefault();

    this.clearListeners();
    if (this.clickWasDone) {
      this.clickWasDone = false;
      return;
    }
    var json = this.creator.getJSONForNewElement(this.item.json);
    this.creator.dragDropHelper.startDragToolboxItem(
      this.pointerDownEvent,
      json
    );
    return true;
  };
  private clearListeners() {
    const toolboxItemHTMLElement = <HTMLElement>this.pointerDownEvent.target;
    document.removeEventListener("pointermove", this.startDragToolboxItem);
    toolboxItemHTMLElement.removeEventListener("pointerup", this.click);
  }
  // EO correct handle click vs drag
}
