import * as ko from "knockout";
const template = require("./add-question.html");
export let AddNewQuestionViewModel: any;
export * from "./add-question-type-selector";

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
