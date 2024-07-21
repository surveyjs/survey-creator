import * as ko from "knockout";
import { QuestionAdornerViewModel } from "survey-creator-core";
const template = require("./question-banner.html");

ko.components.register("svc-question-banner", {
  viewModel: {
    createViewModel: (
      params: QuestionAdornerViewModel,
      componentInfo: any
    ) => {
      return params.createBannerParams();
    }
  },
  template: template.default
});
