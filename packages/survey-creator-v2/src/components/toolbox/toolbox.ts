import * as ko from "knockout";
import { SurveyCreator } from '../../creator';

import "./toolbox.scss";
const template = require("./toolbox.html");
// import template from "./toolbox.html";

export class ToolboxViewModel {
  private _categoriesSubscription: ko.Computed;
  public categories: ko.ObservableArray<object> = ko.observableArray();
  public creator: SurveyCreator;
  constructor(private _categories: any[] | ko.Computed<Array<any>>, creator: SurveyCreator) {
    this.creator = creator;
    this._categoriesSubscription = ko.computed(() => this.categories(ko.unwrap(_categories)));
  }
  dispose() {
    this._categoriesSubscription.dispose();
  }
}

ko.components.register("svc-toolbox", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new ToolboxViewModel(params.categories, params.creator);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
