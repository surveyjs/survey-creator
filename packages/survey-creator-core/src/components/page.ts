import {
  Base,
  IActionBarItem,
  PageModel,
  property,
  propertyArray,
} from "survey-core";
import { CreatorBase } from "../creator-base";

import "./page.scss";

export class PageViewModel<T extends { [index: string]: any }> extends Base {
  @property({ defaultValue: false }) isGhost: boolean;
  @propertyArray() actions: Array<IActionBarItem>;
  public creator: CreatorBase<T>;
  private _page: PageModel;

  constructor(creator: CreatorBase<T>, page: PageModel) {
    super();
    this.creator = creator;

    this._page = page;
    this.isGhost = typeof this.page["_addToSurvey"] === "function";
    if (!this.isGhost) {
      this.actions = creator.getContextActions(this.page);
    }
    this.page.onFirstRendering();
    this.page.updateCustomWidgets();
    this.page.setWasShown(true);
  }

  get page(): PageModel {
    return this._page;
  }

  private addGhostPage() {
    if (this.isGhost) {
      this.isGhost = false;
      this.page["_addToSurvey"]();
    }
  }

  addNewQuestionText = "Add a New Question";
  addNewQuestion(model: PageViewModel<T>, event: Event) {
    this.addGhostPage();
    var survey: any = model.creator.survey;
    survey.currentPage = model.page;
    model.creator.clickToolboxItem({ type: "text" });
  }
  select(model: PageViewModel<T>, event: Event) {
    if (!model.isGhost) {
      model.creator.selectElement(model.page);
    }
  }
  get css(): string {
    if (this.isGhost) {
      return "svc-page__content--new";
    }
    return this.creator.isElementSelected(this.page)
      ? "svc-page__content--selected"
      : "";
  }
  dragOver(model: PageViewModel<T>, event: DragEvent) {
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      model.creator.dragDropHelper.ddTarget.moveToPage(<any>model.page);
      model.creator.dragDropHelper.doDragDropOver(event, model.page, true);
      return false;
    }
  }
  drop(model: PageViewModel<T>, event: DragEvent) {
    var helper = model.creator.dragDropHelper;
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      helper.doDrop(event, true);
      this.addGhostPage();
    }
  }
}
