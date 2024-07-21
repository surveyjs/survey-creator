import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
const templateHtml = require("./simulator.html");

ko.components.register("survey-simulator", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      new ImplementorBase(params.model);
      return params.model;
    },
  },
  template: templateHtml.default,
});
