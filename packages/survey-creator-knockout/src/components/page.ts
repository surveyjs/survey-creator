import * as ko from "knockout";
import { ImplementorBase, Survey } from "survey-knockout-ui";
import { SurveyCreator } from "../creator";
import { CreatorBase, PageViewModel, toggleHovered } from "@survey/creator";
import { PageModel } from "survey-core";

//import "./page.scss";
const template = require("./page.html");
// import template from "./page.html";

export class KnockoutPageViewModel extends PageViewModel<Survey> {
  constructor(creator: CreatorBase<Survey>, page: PageModel) {
    super(creator, page)
  }
  public hover(event: MouseEvent, element: HTMLElement) {
    toggleHovered(event, element);
  }
}

ko.components.register("svc-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator: SurveyCreator = params.creator;
      const model = new KnockoutPageViewModel(creator, ko.unwrap(params.page));
      model.onPageSelectedCallback = () => {
        componentInfo.element.scrollIntoView();
      };
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
