import * as ko from "knockout";

const template = require("./question-editor-content.html");
// import template from "./question-editor-content.html";

ko.components.register("svc-question-editor-content", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    },
  },
  template: template,
});
