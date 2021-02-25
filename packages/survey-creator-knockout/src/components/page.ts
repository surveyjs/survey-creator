import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { SurveyCreator } from "../creator";
import { PageViewModel } from "@survey/creator";

//import "./page.scss";
const template = require("./page.html");
// import template from "./page.html";

ko.components.register("svc-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator = params.creator;
      const scrollSubscription = ko.computed(() => {
        if (creator.isElementSelected(params.page)) {
          componentInfo.element.scrollIntoView();
        }
      });
      const model = new PageViewModel<SurveyCreator>(
        creator,
        ko.unwrap(params.page)
      );
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        scrollSubscription.dispose();
      });
      return model;
    },
  },
  template: template,
});
