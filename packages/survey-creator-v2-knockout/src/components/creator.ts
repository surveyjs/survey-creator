import * as ko from "knockout";
import { SurveyCreator } from "../creator";

//import "./creator.scss";
const template = require("./creator.html");
// import template from "./creator.html";

export class CreatorViewModel {
  public creator: SurveyCreator;
  constructor(creator: SurveyCreator) {
    this.creator = creator;
  }
  dispose() {}
}

ko.components.register("survey-creator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new CreatorViewModel(params.creator);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
