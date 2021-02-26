import * as ko from "knockout";
import { SurveySimulatorComponent } from "@survey/creator";

import { ImplementorBase } from "survey-knockout-ui";

var templateHtml = require("./simulator.html");

ko.components.register("survey-simulator", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const component = new SurveySimulatorComponent(params.options);
      new ImplementorBase(component);
      return component;
    },
  },
  template: templateHtml,
});
