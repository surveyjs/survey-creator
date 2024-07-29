import * as ko from "knockout";
import { SurveyModel } from "survey-core";
import { SurveyCreatorModel, LogoImageViewModel } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";
const template = require("./logo-image.html");

ko.components.register("svc-logo-image", {
  viewModel: {
    createViewModel: (params: SurveyCreatorModel, componentInfo: any) => {
      const model = new LogoImageViewModel(params, componentInfo.element.nextElementSibling);
      new ImplementorBase(model);
      return model;
    },
  },
  template: template.default
});
