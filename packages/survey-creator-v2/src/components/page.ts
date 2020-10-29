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
}

ko.components.register("svc-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new PageViewModel(params.creator, params.page);
    },
  },
  template: template,
});
