import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./tab-button.html");

ko.components.register("svc-tab-button", {
  viewModel: {
    createViewModel: (params: any) => {
      new ImplementorBase(params.model);
      return params;
    }
  },
  template: template.default
});