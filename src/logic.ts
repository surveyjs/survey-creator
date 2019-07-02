import * as ko from "knockout";
import * as Survey from "survey-knockout";

export class SurveyLogicItem {}

export class SurveyLogic {
  public items: any;
  constructor(public survey: Survey.SurveyModel) {
    this.items = ko.observableArray();
    this.buildItems();
  }
  protected buildItems() {}
}
