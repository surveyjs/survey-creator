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
  constructor(private pagesController: PagesController, pageEditMode: string) {
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
      new ImplementorBase(model);
      const scrollableViewPort = componentInfo.element.parentElement.parentElement;
      if(params.pageEditMode !== "bypage") {
        scrollableViewPort.onscroll = function (this: GlobalEventHandlers, ev: Event) {
          return model.onContainerScroll(ev.currentTarget as HTMLDivElement);
        };
      }
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        scrollableViewPort.onscroll = undefined;
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
