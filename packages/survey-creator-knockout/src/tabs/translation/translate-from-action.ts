import * as ko from "knockout";
import { Action } from "survey-core";
const template = require("./translate-from-action.html");

ko.components.register("svc-translate-from-action", {
  viewModel: {
    createViewModel: (
      params: { data: Action },
      componentInfo: any
    ) => {
      return params;
    }
  },
  template: template.default
});
