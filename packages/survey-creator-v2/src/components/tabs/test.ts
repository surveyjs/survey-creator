import * as ko from "knockout";
import { Survey } from "survey-knockout";
import { SurveyCreator } from "../../creator";

import "./test.scss";
const template = require("./test.html");
// import template from "./test.html";

export * from "@survey/creator/components/toolbar";
export * from "@survey/creator/components/simulator";
export * from "@survey/creator/components/results";
export * from "@survey/creator/utils/dropdown";
export * from "@survey/creator/utils/boolean";
export * from "@survey/creator/utils/svg-icon";
export * from "@survey/creator/utils/survey-widget";


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
