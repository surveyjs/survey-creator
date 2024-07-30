import * as ko from "knockout";
const template = require("./page-add-question.html");
export let AddNewQuestionViewModel: any;

ko.components.register("svc-add-new-question-btn", {
  viewModel: {
    createViewModel: (params: any) => {
      return params.item.data;
    },
  },
  template: template.default
});
