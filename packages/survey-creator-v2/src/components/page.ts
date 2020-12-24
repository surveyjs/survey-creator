import * as ko from "knockout";
import { Page } from "survey-knockout";
import { SurveyCreator } from "../creator";

import "./page.scss";
const template = require("./page.html");
// import template from "./page.html";

export class PageViewModel {
  public creator: SurveyCreator;
  public page: Page;
  public actions = ko.observableArray();

  constructor(creator: SurveyCreator, page: Page) {
    this.creator = creator;
    this.page = page;
    page.onFirstRendering();
    page.updateCustomWidgets();
    page.setWasShown(true);
    this.actions(creator.getContextActions(page));
  }
  addNewQuestionText = "Add a New Question";
  addNewQuestion(model: PageViewModel, event: Event) {
    model.creator.survey.currentPage = model.page;
    this.creator.clickToolboxItem({ type: "text" });
  }
  select(model: PageViewModel, event: Event) {
    model.creator.selectElement(model.page);
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
