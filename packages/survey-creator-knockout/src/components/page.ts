import * as ko from "knockout";
import { ImplementorBase, Survey } from "survey-knockout-ui";
import { SurveyCreator } from "../creator";
import { PageViewModel } from "@survey/creator";

//import "./page.scss";
const template = require("./page.html");
// import template from "./page.html";

ko.components.register("svc-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator: SurveyCreator = params.creator;
      const model = new PageViewModel<Survey>(creator, ko.unwrap(params.page));
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
