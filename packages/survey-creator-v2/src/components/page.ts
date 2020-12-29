import * as ko from "knockout";
import { PageModel } from "survey-knockout";
import { SurveyCreator } from "../creator";

import "./page.scss";
const template = require("./page.html");
// import template from "./page.html";

export class PageViewModel {
  private _isNewPage = false;
  public creator: SurveyCreator;
  public page: PageModel;
  public actions = ko.observableArray();

  private getTargetPage() {
    if (this._isNewPage) {
      let newPage = this.creator.survey.addNewPage(this.page.name);
      this.creator.setNewNames(<any>this.page);
      newPage.onFirstRendering();
      newPage.updateCustomWidgets();
      newPage.setWasShown(true);
      return newPage;
    }
    return this.page;
  }

  constructor(creator: SurveyCreator, page: PageModel) {
    this.creator = creator;
    this._isNewPage = !page;
    if(this._isNewPage) {
      this.page = creator.survey.createNewPage("");
      this.page.setSurveyImpl(creator.survey);
    } else {
      this.page = page;
      this.actions(creator.getContextActions(page));
    }
    this.page.onFirstRendering();
    this.page.updateCustomWidgets();
    this.page.setWasShown(true);
  }
  addNewQuestionText = "Add a New Question";
  addNewQuestion(model: PageViewModel, event: Event) {
    const targetPage = model.getTargetPage();
    model.creator.survey.currentPage = targetPage;
    model.creator.clickToolboxItem({ type: "text" });
  }
  select(model: PageViewModel, event: Event) {
    if(!this._isNewPage) {
      model.creator.selectElement(model.page);
    }
  }
  css() {
    return this.creator.isElementSelected(this.page) ? "svc-page__content--selected" : "";
  }
  dragOver(model: PageViewModel, event: DragEvent) {
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      model.creator.dragDropHelper.doDragDropOver(event, model.page, true);
      return false;
    }
  }
  drop(model: PageViewModel, event: DragEvent) {
    var helper = model.creator.dragDropHelper;
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      if(this._isNewPage) {
        const targetPage: any = model.getTargetPage();
        model.creator.dragDropHelper.ddTarget.moveToPage(targetPage);
      }
      helper.doDrop(event, true);
    }
  }
}

ko.components.register("svc-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator = params.creator;
      const scrollSubscription = ko.computed(() => {
        if(creator.isElementSelected(params.page)) {
          componentInfo.element.scrollIntoView();
        }
      });
      const model = new PageViewModel(creator, params.page);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        scrollSubscription.dispose();
      });
      return model;
    },
  },
  template: template,
});
