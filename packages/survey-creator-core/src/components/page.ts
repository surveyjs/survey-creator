import {
  Base,
  IActionBarItem,
  PageModel,
  property,
  propertyArray,
  SurveyModel,
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { IPortableDragEvent, IPortableMouseEvent } from "../utils/events";

import "./page.scss";

export class PageViewModel<T extends SurveyModel> extends Base {
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
  addNewQuestion(model: PageViewModel<T>, event: IPortableMouseEvent) {
    this.addGhostPage();
    var survey: any = model.creator.survey;
    survey.currentPage = model.page;
    model.creator.clickToolboxItem({ type: "text" });
  }
  select(model: PageViewModel<T>, event: IPortableMouseEvent) {
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
  dragOver(model: PageViewModel<T>, event: IPortableDragEvent) {
    event.preventDefault();
    //model.creator.dragDropHelper2.dragOver(, event)
    /*
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      model.creator.dragDropHelper.ddTarget.moveToPage(<any>model.page);
      model.creator.dragDropHelper.doDragDropOver(event, model.page, true);
      return false;
    }
    */
  }
  binarySearchIndexByY(questionNodes, y) {
    let lo = 0;
    let hi = questionNodes.length - 1;
    while (lo <= hi) {
      const median = (lo + (hi - lo)) >> 1;
      const q = questionNodes[median];
      const rect = q.getBoundingClientRect();

      if (rect.top <= y && y <= rect.bottom) {
        return 0;
      }
      if (y > rect.bottom) {
        lo = median + 1;
      } else {
        hi = median - 1;
      }
    }
    return ~lo;
  }
  drop(model: PageViewModel<T>, event: IPortableDragEvent) {
    const page: any = event.currentTarget;
    const questions = page.querySelectorAll(".svc-question__content");
    let index = this.binarySearchIndexByY(questions, event.clientY);
    if (index < 0) {
      index = ~index;
      if (index >= questions.length) {
        model.dropAtQuestion(questions, questions.length - 1, true, event);
      } else {
        model.dropAtQuestion(questions, index, false, event);
      }
    } else {
      model.dropAtQuestion(questions, index, undefined, event);
    }
  }
  dropAtQuestion(
    questions,
    index: number,
    dropBelow: boolean,
    event: IPortableDragEvent
  ) {
    if (index < 0) {
      // drop onto empty page
      this.creator.dragDropHelper.dropAtPage(this.page, event);
    } else {
      const questionName = questions[index].dataset.questionName as string;
      const question = this.creator.survey.getQuestionByName(questionName);
      this.creator.dragDropHelper.dropAt(question, event, dropBelow);
    }
  }
}
