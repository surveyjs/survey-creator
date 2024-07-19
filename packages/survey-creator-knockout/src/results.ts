import * as ko from "knockout";
import { SurveyResultsModel } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";
const templateHtml = require("./results.html");
const rowTemplateHtml = require("./results-table-row.html");

ko.components.register("survey-results", {
  viewModel: {
    createViewModel: (params) => {
      const model: SurveyResultsModel = new SurveyResultsModel(ko.unwrap(params.survey));
      new ImplementorBase(model);
      return model;
    }
  },
  template: templateHtml.default
});

ko.components.register("survey-results-table-row", {
  viewModel: {
    createViewModel: (params) => {
      const model = params.model;
      new ImplementorBase(model);
      return { model };
    }
  },
  template: rowTemplateHtml.default
});
