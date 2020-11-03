import * as ko from "knockout";
import { Survey } from "survey-knockout";
import { SurveyCreator } from "../../creator";
import { ElementWrapperFactory } from "../../element-wrapper-factory";

import "./tab-json-editor.scss";
const template = require("./tab-json-editor.html");
// import template from "./content.html";

export class TabJsonEditorViewModel {
  public creator: SurveyCreator;
  private _survey: Survey;
  private _surveySubscription: ko.Computed;
  constructor(creator: SurveyCreator, survey: Survey) {
    this.creator = creator;
    this._survey = survey;
    this._surveySubscription = ko.computed(() => {
      new ElementWrapperFactory(this.survey, this.creator);
    });
  }
  get survey() {
    return ko.unwrap(this._survey);
  }
  dispose() {
    this._surveySubscription.dispose();
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
