
import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./side-bar-header.html");

ko.components.register("svc-side-bar-header", {
  viewModel: {
    createViewModel: (params: any) => {
      new ImplementorBase(params.model);
      return {
        model: params.model,
      };
    },
  },
  template: template.default
});
