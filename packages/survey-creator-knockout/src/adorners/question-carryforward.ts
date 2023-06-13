import * as ko from "knockout";
import { QuestionAdornerViewModel } from "survey-creator-core";
const template = require("./question-carryforward.html");

ko.components.register("svc-question-carryforward", {
  viewModel: {
    createViewModel: (
      params: QuestionAdornerViewModel,
      componentInfo: any
    ) => {
      return params.createCarryForwardParams();
    }
  },
  template: template
});
