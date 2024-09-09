import * as ko from "knockout";
import { getActionDropdownButtonTarget } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./side-bar-property-grid-header.html");

ko.components.register("svc-side-bar-property-grid-header", {
  viewModel: {
    createViewModel: (params: any) => {
      new ImplementorBase(params.model);
      return {
        model: params.model,
        getTarget: getActionDropdownButtonTarget
      };
    }
  },
  template: template.default
});