import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { editorLocalization } from "../editorLocalization";

export interface SurveyElementSelectorItem {
  name: string;
  text: string;
  koEnabled: any;
}

export class SurveyElementSelector {
  private showTitle: boolean;
  private optionsCaptionValue: string;
  private disableCallback: boolean = false;
  public koElements: any;
  public koValue: any;
  public onValueChangedCallback: (val: string) => void;
  constructor(
    public survey: Survey.SurveyModel,
    elementType: string = "question",
    showTitle: boolean = false,
    optionsCaptionName: string = ""
  ) {
    this.showTitle = showTitle;
    this.optionsCaptionValue = !!optionsCaptionName
      ? editorLocalization.getString(optionsCaptionName)
      : "";
    this.koValue = ko.observable("");
    var self = this;
    this.koValue.subscribe(function(newValue) {
      if (self.disableCallback || !self.onValueChangedCallback) return;
      self.onValueChangedCallback(newValue);
    });
    this.koElements = ko.observableArray(this.buildElements(elementType));
  }
  public get value(): string {
    return this.koValue();
  }
  public set value(val: string) {
    this.disableCallback = true;
    this.koValue(val);
    this.disableCallback = false;
  }
  public get optionsCaption() {
    return this.optionsCaption;
  }
  private buildElements(elementType: string): Array<SurveyElementSelectorItem> {
    var elements = [];
    if (elementType == "question") {
      elements = this.survey.getAllQuestions();
    }
    var res = [];
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      res.push({
        name: el.name,
        text: el.name,
        koEnabled: ko.observable(true)
      });
    }
    return res;
  }
}
