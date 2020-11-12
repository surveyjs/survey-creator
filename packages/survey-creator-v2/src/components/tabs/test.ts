import * as ko from "knockout";
import { Survey } from "survey-knockout";
import { SurveyCreator } from "../../creator";

import "./test.scss";
const template = require("./test.html");
// import template from "./test.html";

export class TabTestViewModel {
  public creator: SurveyCreator;
  private _survey: Survey;
  constructor(creator: SurveyCreator, survey: Survey) {
    this.creator = creator;
    this._survey = survey;
  }
  get survey() {
    return ko.unwrap(this._survey);
  }
  dispose() {
  }
}

ko.components.register("svc-tab-test", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new TabTestViewModel(params.creator, params.survey);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
