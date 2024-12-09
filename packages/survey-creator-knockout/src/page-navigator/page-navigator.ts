import * as ko from "knockout";
import { PageNavigatorViewModel, PagesController } from "survey-creator-core";
import {
  PageModel,
  IAction,
  Action,
  SurveyModel,
} from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./page-navigator.html");
// import template from "./page-navigator.html";

export class PageNavigatorView extends PageNavigatorViewModel {
  constructor(pagesController: PagesController, pageEditMode: string) {
    super(pagesController, pageEditMode);
  }
  protected createActionBarCore(item: IAction): Action {
    var res = super.createActionBarCore(item);
    new ImplementorBase(res);
    return res;
  }
}

ko.components.register("svc-page-navigator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new PageNavigatorView(params.controller, params.pageEditMode);
      const implementor = new ImplementorBase(model);
      if (params.pageEditMode !== "bypage") {
        model.attachToUI(componentInfo.element);
      }
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
        implementor.dispose();
      });
      return model;
    },
  },
  template: template.default,
});
