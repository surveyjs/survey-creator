import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TestSurveyTabViewModel } from "survey-creator-core";

const template = require("./test-complete.html");
// import template from "./test-complete.html";

ko.components.register("svc-complete-page", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: TestSurveyTabViewModel = params.model;
      new ImplementorBase(model.testAgainAction);
      return {
        testAgainAction: model.testAgainAction
      };
    },
  },
  template: template.default
});
