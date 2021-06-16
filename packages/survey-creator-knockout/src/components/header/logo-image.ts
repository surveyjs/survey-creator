import * as ko from "knockout";
import { SurveyModel } from "survey-core";
import { CreatorBase, LogoImageViewModel } from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
const template: string = require("./logo-image.html");

ko.components.register("svc-logo-image", {
  viewModel: {
    createViewModel: (params: CreatorBase<SurveyModel>, componentInfo: any) => {
      const model = new LogoImageViewModel(params, componentInfo.element.nextElementSibling);
      new ImplementorBase(model);
      return model;
    },
  },
  template: template
});
