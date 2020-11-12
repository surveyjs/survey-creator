import * as ko from "knockout";
import { Survey } from "survey-knockout";
import { SurveyCreator } from "../../creator";

import "./embed.scss";
const template = require("./embed.html");
// import template from "./embed.html";

export class TabEmbedViewModel {
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

ko.components.register("svc-tab-embed", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new TabEmbedViewModel(params.creator, params.survey);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
