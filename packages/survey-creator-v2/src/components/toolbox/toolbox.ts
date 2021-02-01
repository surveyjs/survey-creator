import * as ko from "knockout";
import {
  AdaptiveElementImplementor,
  VerticalResponsibilityManager,
} from "survey-knockout";
import { SurveyCreator } from "../../creator";
import { AdaptiveElement } from "survey-knockout";
import "./toolbox.scss";
const template = require("./toolbox.html");
// import template from "./toolbox.html";

export class ToolboxViewModel extends AdaptiveElement {
  private _categoriesSubscription: ko.Computed;
  public categories = ko.observableArray<any>();
  public creator: SurveyCreator;

  constructor(
    private _categories: any[] | ko.Computed<Array<any>>,
    creator: SurveyCreator
  ) {
    super();

    this.dotsItemPopupModel.horizontalPosition = "right";
    this.dotsItemPopupModel.verticalPosition = "top";
    this.creator = creator;
    new AdaptiveElementImplementor(this);
    this._categoriesSubscription = ko.computed(() => {
      let categories = ko.unwrap(_categories);
      categories.forEach((category: any, categoryIndex) => {
        (ko.unwrap(category.items) || []).forEach((item, index) => {
          if (categoryIndex != 0 && index == 0) item.needSeparator = true;
          item.isVisible = ko.observable(true);
          this.items.push(item);
        });
      });
      this.categories(categories);
    });
  }

  public invisibleItemSelected(model: any): void {
    this.creator.clickToolboxItem(model.json);
  }

  dispose() {
    this._categoriesSubscription.dispose();
  }
}

ko.components.register("svc-toolbox", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new ToolboxViewModel(params.categories, params.creator);
      var container = componentInfo.element.querySelector(".svc-toolbox");
      var manager = new VerticalResponsibilityManager(container, model, 40);
      manager.getItemSizes = () => {
        var widths: number[] = [];
        container
          .querySelectorAll("div.svc-toolbox__tool")
          .forEach((actionContainer) => {
            widths.push((<HTMLDivElement>actionContainer).offsetHeight);
          });
        return widths;
      };
      let updateVisibleItems = setInterval(() => {
        manager.process();
      }, 100);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        clearInterval(updateVisibleItems);
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
