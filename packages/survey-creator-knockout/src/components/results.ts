import * as ko from "knockout";
import { SurveyResultsModel } from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";

var templateHtml = require("./results.html");
var rowTemplateHtml = require("./results-table-row.html");


ko.components.register("survey-results", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new SurveyResultsModel(params.survey);
    },
  },
  template: templateHtml,
});

ko.components.register("survey-results-table-row", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.model;
      new ImplementorBase(model);
      return model;
    },
  },
  template: rowTemplateHtml,
});
