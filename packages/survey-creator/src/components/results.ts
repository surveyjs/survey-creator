import * as ko from "knockout";
import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-knockout";

import "./results.scss";

var templateHtml = require("./results.html");
var rowTemplateHtml = require("./results-table-row.html");

export class SurveyResultsModel {

  constructor(private survey: Survey.SurveyModel) {
    this.koResultText(JSON.stringify(survey.data, null, 4));
    var addCollapsed = (items: any[]) => {
      items.forEach((item: any) => {
        if (!!item && item.isNode) {
          item.collapsed = ko.observable(true);
          item.data = addCollapsed(item.data || []);
        }
      });
      return items.filter((item) => !!item);
    };
    var plainData = survey.getPlainData({ includeEmpty: false });
    plainData = addCollapsed(plainData);
    this.koResultData(plainData);
  }

  koResultViewType = ko.observable("table");
  koResultText = ko.observable("");
  koResultData = ko.observableArray();

  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  public get surveyResultsText() {
    return this.getLocString("ed.surveyResults");
  }
  public get resultsTitle() {
    return this.getLocString("ed.resultsTitle");
  }
  public get resultsName() {
    return this.getLocString("ed.resultsName");
  }
  public get resultsValue() {
    return this.getLocString("ed.resultsValue");
  }
  public get resultsDisplayValue() {
    return this.getLocString("ed.resultsDisplayValue");
  }

  public selectTableClick(model: SurveyResultsModel) {
    model.koResultViewType("table");
  }
  public selectJsonClick(model: SurveyResultsModel) {
    model.koResultViewType("text");
  }

}

ko.components.register("survey-results", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new SurveyResultsModel(params.survey);
    }
  },
  template: templateHtml,
});

ko.components.register("survey-results-table-row", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.model;
      return model;
    }
  },
  template: rowTemplateHtml,
});
