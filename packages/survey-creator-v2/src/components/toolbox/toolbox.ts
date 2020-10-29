import * as ko from "knockout";
import { SurveyCreator } from '../../creator';

import "./toolbox.scss";
const template = require("./toolbox.html");
// import template from "./toolbox.html";

export class ToolboxViewModel {
  public categories: ko.ObservableArray<object> = ko.observableArray();
  public creator: SurveyCreator;
  constructor(private _categories: object[], creator: SurveyCreator) {
    this.creator = creator;
    this.categories(_categories);
  }
}

ko.components.register("svc-toolbox", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new ToolboxViewModel(params.categories, params.creator);
    },
  },
  template: template,
});
