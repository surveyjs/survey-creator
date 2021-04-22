import {
  Base,
  IActionBarItem,
  PageModel,
  property,
  propertyArray,
  SurveyElementTemplateData,
  SurveyModel,
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { IPortableDragEvent, IPortableMouseEvent } from "../utils/events";

import "./page.scss";

export class PageViewModel<T extends SurveyModel> extends Base {
  @property({ defaultValue: false }) isGhost: boolean;
  @propertyArray() actions: Array<IActionBarItem>;
  @property({ defaultValue: false }) isSelected: boolean;
  public creator: CreatorBase<T>;
  public onPageSelectedCallback: () => void;
  private _page: PageModel;
  private selectedPropPageFunc: (sender: Base, options: any) => void;

  constructor(creator: CreatorBase<T>, page: PageModel) {
    super();
    this.creator = creator;

    this._page = page;
    this.selectedPropPageFunc = (sender: Base, options: any) => {
      if (options.name === "isSelectedInDesigner") {
        this.isSelected = options.newValue;
        if (options.newValue && this.onPageSelectedCallback) {
          this.onPageSelectedCallback();
        }
      }
    };
    this.page.onPropertyChanged.add(this.selectedPropPageFunc);

    this.isGhost = typeof this.page["_addToSurvey"] === "function";
    if (!this.isGhost) {
      this.actions = creator.getContextActions(this.page);
    }
    this.page.onFirstRendering();
    this.page.updateCustomWidgets();
    this.page.setWasShown(true);
  }
  public dispose() {
    super.dispose();
    this.page.onPropertyChanged.remove(this.selectedPropPageFunc);
    this.onPropertyValueChangedCallback = undefined;
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
      if (!this.onPageSelectedCallback) {
        this.onPageSelectedCallback();
      }
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
    return this.creator.dragDropHelper.onDragOver(event, model.page);
  }

  // binarySearchIndexByY(questionNodes, y) {
  //   let lo = 0;
  //   let hi = questionNodes.length - 1;
  //   while (lo <= hi) {
  //     const median = (lo + (hi - lo)) >> 1;
  //     const q = questionNodes[median];
  //     const rect = q.getBoundingClientRect();

  //     if (rect.top <= y && y <= rect.bottom) {
  //       return 0;
  //     }
  //     if (y > rect.bottom) {
  //       lo = median + 1;
  //     } else {
  //       hi = median - 1;
  //     }
  //   }
  //   return ~lo;
  // }
  drop(model: PageViewModel<T>, event: IPortableDragEvent) {
    this.addGhostPage();
    var survey: any = model.creator.survey;
    survey.currentPage = model.page;
    return this.creator.dragDropHelper.onDrop(event);
    // const page: any = event.currentTarget;
    // const questions = page.querySelectorAll(".svc-question__content");
    // let index = this.binarySearchIndexByY(questions, event.clientY);
    // if (index < 0) {
    //   index = ~index;
    //   if (index >= questions.length) {
    //     model.dropAtQuestion(questions, questions.length - 1, true, event);
    //   } else {
    //     model.dropAtQuestion(questions, index, false, event);
    //   }
    // } else {
    //   model.dropAtQuestion(questions, index, undefined, event);
    // }
  }
  // dropAtQuestion(
  //   questions,
  //   index: number,
  //   dropBelow: boolean,
  //   event: IPortableDragEvent
  // ) {
  //   if (index < 0) {
  //     // drop onto empty page
  //     this.creator.dragDropHelper.dropAtPage(this.page, event);
  //   } else {
  //     const questionName = questions[index].dataset.questionName as string;
  //     const question = this.creator.survey.getQuestionByName(questionName);
  //     this.creator.dragDropHelper.dropAt(question, event, dropBelow);
  //   }
  // }
}
