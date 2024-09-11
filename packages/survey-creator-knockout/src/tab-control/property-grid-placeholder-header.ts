
import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./property-grid-placeholder-header.html");

ko.components.register("svc-side-bar-property-grid-placeholder-header", {
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
