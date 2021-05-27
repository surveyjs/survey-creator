import * as ko from "knockout";
import { SurveyModel } from "survey-core";
import { CreatorBase, LogoImageViewModel } from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
const template: string = require("./logo-image.html");

export class KnockoutLogoImageViewModel extends LogoImageViewModel {
  constructor(creator: CreatorBase<SurveyModel>, root: HTMLDivElement) {
    super(creator, root);
  }
}

ko.components.register("svc-logo-image", {
  viewModel: {
    createViewModel: (params: CreatorBase<SurveyModel>, componentInfo: any) => {
      const model = new KnockoutLogoImageViewModel(params, componentInfo.element.nextElementSibling);
      new ImplementorBase(model);
      return model;
    },
  },
  template: template
});
