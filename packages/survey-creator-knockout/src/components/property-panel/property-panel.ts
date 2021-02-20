import { PropertyGridModel } from "@survey/creator";
import * as ko from "knockout";
import { Base, ImplementorBase, property, SurveyModel } from "survey-knockout";
import { creatorCss } from "../../survey-theme/creator-css";
//import "./property-panel.scss";
//import "../../survey-theme/survey.scss";
const template = require("./property-panel.html");

export class PropertyGridViewModel extends Base {
  @property() survey: SurveyModel;

  constructor(private model: PropertyGridModel, public title: string) {
    super();
    this.model.objValueChangedCallback = () => {
      this.survey = this.model.survey;
      this.survey.showQuestionNumbers = "off";
      this.survey.css = creatorCss;
    };
    this.model.objValueChangedCallback();
  }
}

ko.components.register("svc-property-panel", {
  viewModel: {
    createViewModel: (params: any) => {
      const model = new PropertyGridViewModel(params.model, params.title);
      new ImplementorBase(model);
      return model;
    },
  },
  template: template,
});
