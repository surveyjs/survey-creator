import * as ko from "knockout";
import { PageModel } from "survey-knockout";
import { SurveyCreator } from "../creator";

import "./page.scss";
const template = require("./page.html");
// import template from "./page.html";

export class PageViewModel {
  private _isGhost = ko.observable(false);
  public creator: SurveyCreator;
  private _page: PageModel;
  public actions = ko.observableArray();

  constructor(creator: SurveyCreator, page: PageModel) {
    this.creator = creator;
    ko.computed(() => {
      this._page = page;
      this._isGhost(typeof this.page["_addToSurvey"] === "function");
      if(!this._isGhost()) {
        this.actions(creator.getContextActions(this.page));
      }
      this.page.onFirstRendering();
      this.page.updateCustomWidgets();
      this.page.setWasShown(true);
    });
  }

  get page() {
    return ko.unwrap(this._page);
  }

  private addGhostPage() {
    if(this._isGhost()) {
      this._isGhost(false);
      this.page["_addToSurvey"]();
    }
  }

  addNewQuestionText = "Add a New Question";
  addNewQuestion(model: PageViewModel, event: Event) {
    this.addGhostPage();
    model.creator.survey.currentPage = model.page;
    model.creator.clickToolboxItem({ type: "text" });
  }
  select(model: PageViewModel, event: Event) {
    if(!model._isGhost()) {
      model.creator.selectElement(model.page);
    }
  }
  get css() {
    if(this._isGhost()) {
      return "svc-page__content--new";
    }
    return this.creator.isElementSelected(this.page) ? "svc-page__content--selected" : "";
  }
  dragOver(model: PageViewModel, event: DragEvent) {
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      model.creator.dragDropHelper.ddTarget.moveToPage(<any>model.page);
      model.creator.dragDropHelper.doDragDropOver(event, model.page, true);
      return false;
    }
  }
  drop(model: PageViewModel, event: DragEvent) {
    var helper = model.creator.dragDropHelper;
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      helper.doDrop(event, true);
      this.addGhostPage();
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
