import { Base, SurveyModel } from "survey-core";
import { IQuestionToolboxItem } from "../../toolbox";
import { CreatorBase } from "../../creator-base";

export class ToolboxItemViewModel extends Base {
  constructor(protected item: IQuestionToolboxItem, protected creator: CreatorBase<SurveyModel>) {
    super();
  }

  
  // correct handle click vs drag
  private clickWasDone = false;
  private onPointerDownEvent;
  public onPointerDown(event) {
    this.onPointerDownEvent = event;
    const toolboxItemHTMLElement = <HTMLElement>this.onPointerDownEvent.target;
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
  private startDragToolboxItem = () => {
    this.clearListeners();
    if (this.clickWasDone) {
      this.clickWasDone = false;
      return;
    }
    const event = this.onPointerDownEvent;
    var json = this.creator.getJSONForNewElement(this.item.json);
    this.creator.dragDropHelper.startDragToolboxItem(event, json);
    return true;
  };
  private clearListeners() {
    const toolboxItemHTMLElement = <HTMLElement>this.onPointerDownEvent.target;
    document.removeEventListener("pointermove", this.startDragToolboxItem);
    toolboxItemHTMLElement.removeEventListener("pointerup", this.click);
  }
  // EO correct handle click vs drag
}
