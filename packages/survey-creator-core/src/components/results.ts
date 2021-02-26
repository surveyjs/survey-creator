import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-core";
import { property, propertyArray } from "survey-core";

import "./results.scss";

export class SurveyResultsModel {
  constructor(private survey: Survey.SurveyModel) {
    this.resultText = JSON.stringify(survey.data, null, 4);
    var addCollapsed = (items: any[]) => {
      items.forEach((item: any) => {
        if (!!item && item.isNode) {
          // item.collapsed = ko.observable(true);
          item.data = addCollapsed(item.data || []);
        }
      });
      return items.filter((item) => !!item);
    };
    var plainData = survey.getPlainData({ includeEmpty: false });
    plainData = addCollapsed(plainData);
    this.resultData = plainData;
  }

  @property({ defaultValue: "table" }) resultViewType: string;
  @property({ defaultValue: "" }) resultText: string;
  @propertyArray() resultData: Array<any>;

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
    model.resultViewType = "table";
  }
  public selectJsonClick(model: SurveyResultsModel) {
    model.resultViewType = "text";
  }
}
