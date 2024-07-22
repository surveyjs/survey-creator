import * as ko from "knockout";

const template = require("./question-error.html").default;

export var QuestionErrorComponent: any;

ko.components.register("svc-question-error", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    }
  },
  template: template,
});
