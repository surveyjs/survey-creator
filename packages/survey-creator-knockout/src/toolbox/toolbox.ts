import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { SurveyCreator } from "../creator";
import { Base } from "survey-core";
import { QuestionToolbox } from "survey-creator-core";
const template = require("./toolbox.html");

export class ToolboxViewModel extends Base {
  private _categoriesSubscription: ko.Computed;
  public categories = ko.observableArray<any>();
  public creator: SurveyCreator;
  // private _isCompact = ko.observable(true);
  // private _isCompactSubscription: ko.Computed;
  // public get isCompact() {
  //   return this._isCompact();
  // }
  // public set isCompact(val: boolean) {
  //   this._isCompact(val);
  // }

  constructor(creator: SurveyCreator) {
    super();
    this.creator = creator;
    new ImplementorBase(this.toolbox);
    this._categoriesSubscription = ko.computed(() => {
      const categories = ko.unwrap(this.toolbox.categories);
      categories.forEach((category: any, categoryIndex) => {
        new ImplementorBase(category);
      });
      // this._isCompactSubscription = ko.computed(() => this.isCompact = ko.unwrap(this.toolbox.isCompact));
      this.categories(categories);
    });
  }

  public get toolbox(): QuestionToolbox {
    return this.creator.toolbox;
  }

  dispose() {
    this._categoriesSubscription.dispose();
    this.toolbox.setRootElement(null);
    // this._isCompactSubscription.dispose();
  }
}

ko.components.register("svc-toolbox", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: ToolboxViewModel = new ToolboxViewModel(params.model);
      return model;
    },
  },
  template: template.default
});
