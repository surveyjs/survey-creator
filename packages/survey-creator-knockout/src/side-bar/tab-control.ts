import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./tab-control.html");

ko.components.register("svc-tab-control", {
  viewModel: {
    createViewModel: (params: any) => {
      new ImplementorBase(params.model);
      return params;
    }
  },
  template: template.default
});