import * as ko from "knockout";
import { SurveyModel } from "survey-core";
const template: string = require("./logo-image.html");

export class LogoImageViewModel {
  constructor(private survey: SurveyModel) {
  }
  public get isLogoImageChoosen() {
    return !!this.survey.logo;
  }
}

ko.components.register("svc-logo-image", {
  viewModel: {
    createViewModel: (params: SurveyModel, componentInfo: any) => {
      return new LogoImageViewModel(params);
    },
  },
  template: template
});
