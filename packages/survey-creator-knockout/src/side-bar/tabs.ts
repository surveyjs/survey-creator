import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./tabs.html");

ko.components.register("svc-tabs", {
  viewModel: {
    createViewModel: (params: any) => {
      new ImplementorBase(params.model);
      return {
        model: params.model,
      };
    }
  },
  template: template.default
});