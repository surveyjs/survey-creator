import * as ko from "knockout";
import { SurveyCreator } from "../creator";
import { Base, VerticalResponsivityManager } from "survey-core";
import { QuestionToolbox } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";
const template = require("./adaptive-toolbox.html");
export class ToolboxViewModel extends Base {
  private _categoriesSubscription: ko.Computed;
  public categories = ko.observableArray<any>();
  public creator: SurveyCreator;
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
  }
}
ko.components.register("svc-toolbox", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: ToolboxViewModel = new ToolboxViewModel(params.model);
      const container = componentInfo.element.nextElementSibling;
      let manager: VerticalResponsivityManager;
      setTimeout(() => {
        model.toolbox.setRootElement(container);
        manager = new VerticalResponsivityManager(model.toolbox.containerElement as HTMLDivElement, params.model.toolbox, params.model.toolbox.itemSelector);
      }, 1);

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        if (manager) manager.dispose();
        model.toolbox.setRootElement(undefined);
        model.dispose();
      });
      return model;
    },
  },
  template: template.default
});
