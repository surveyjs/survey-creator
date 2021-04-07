import * as ko from "knockout";
import { PageNavigatorViewModel, PagesController } from "@survey/creator";
import {
  PageModel,
  IActionBarItem,
  ActionBarItem,
  SurveyModel,
} from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./page-navigator.html");
// import template from "./page-navigator.html";

export class PageNavigatorView extends PageNavigatorViewModel<SurveyModel> {
  constructor(private pagesController: PagesController<SurveyModel>) {
    super(pagesController);
  }
  protected createActionBarCore(item: IActionBarItem): ActionBarItem {
    var res = super.createActionBarCore(item);
    new ImplementorBase(res);
    return res;
  }
}

ko.components.register("svc-page-navigator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new PageNavigatorView(params.creator.pagesController);
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
