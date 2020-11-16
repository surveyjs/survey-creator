import * as ko from "knockout";
import { Survey } from "survey-knockout";
import { SurveyCreator } from "../../creator";

import "./json-editor.scss";
const template = require("./json-editor.html");
// import template from "./json-editor.html";

export class TabJsonEditorViewModel {
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

ko.components.register("svc-tab-json-editor", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new TabJsonEditorViewModel(params.creator, params.survey);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
