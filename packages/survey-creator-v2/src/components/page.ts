import * as ko from "knockout";
import { Page } from "survey-knockout";
import { SurveyCreator } from "../creator";

import "./page.scss";
const template = require("./page.html");
// import template from "./page.html";

export class PageViewModel {
  public creator: SurveyCreator;
  public page: Page;
  constructor(creator: SurveyCreator, page: Page) {
    this.creator = creator;
    this.page = page;
    page.onFirstRendering();
    page.updateCustomWidgets();
    page.setWasShown(true);
  }
  addNewQuestionText = "Add a New Question";
  addNewQuestion(model: PageViewModel, event: Event) {
  }
  select(model: PageViewModel, event: Event) {
    model.creator.selectElement(model.page);
  }
  css() {
    return this.creator.isElementSelected(this.page) ? "svc-page__content--selected" : "";
  }
}

ko.components.register("svc-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator = params.creator;
      ko.computed(() => {
        if(creator.isElementSelected(params.page)) {
          componentInfo.element.scrollIntoView();
        }
      });
      return new PageViewModel(creator, params.page);
    },
  },
  template: template,
});
