import * as ko from "knockout";
import {
  AdaptiveActionBarItemWrapper,
  AdaptiveElementImplementor,
  VerticalResponsibilityManager,
} from "survey-knockout";
import { SurveyCreator } from "../../creator";
import { AdaptiveElement } from "survey-knockout";
//import "./toolbox.scss";
import { IQuestionToolboxItem } from "@survey/creator";
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
    this._categoriesSubscription = ko.computed(() => {
      const wrappedItems: AdaptiveActionBarItemWrapper[] = [];
      const categories = ko.unwrap(_categories);
      categories.forEach((category: any, categoryIndex) => {
        (ko.unwrap(category.items) || []).forEach((item, index) => {
          const wrapper = new AdaptiveActionBarItemWrapper(this, item);
          if (categoryIndex != 0 && index == 0) {
            wrapper.needSeparator = true;
          }
          wrappedItems.push(wrapper);
        });
      });
      this.items = wrappedItems;
      this.categories(categories);
    });
    new AdaptiveElementImplementor(this);
  }

  public static getToolboxItem(
    wrapper: AdaptiveActionBarItemWrapper
  ): IQuestionToolboxItem {
    const item: IQuestionToolboxItem = <any>wrapper.wrappedItem;
    return item;
  }

  public invisibleItemSelected(model: AdaptiveActionBarItemWrapper): void {
    this.creator.clickToolboxItem(ToolboxViewModel.getToolboxItem(model).json);
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
