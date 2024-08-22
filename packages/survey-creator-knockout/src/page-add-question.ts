import * as ko from "knockout";
const template = require("./page-add-question.html");
export let AddNewQuestionViewModel: any;

ko.components.register("svc-add-new-question-btn", {
  viewModel: {
    createViewModel: (params: any) => {
      return {
        data: params.item.data,
        buttonClass: params.buttonClass || "svc-btn",
        renderPopup: params.renderPopup === undefined ? true : params.renderPopup
      };
    }
  },
  template: template.default
});
