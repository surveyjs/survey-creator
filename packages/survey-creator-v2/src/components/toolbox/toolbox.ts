import * as ko from "knockout";
import { VerticalResponsibilityManager } from "survey-knockout";
import { SurveyCreator } from "../../creator";
import "./toolbox.scss";
const template = require("./toolbox.html");
// import template from "./toolbox.html";

export class ToolboxViewModel {
  private _categoriesSubscription: ko.Computed;
  public categories = ko.observableArray<any>();
  public creator: SurveyCreator;
  public invisibleItems = ko.observableArray<any>();
  public showInvisibleItems = ko.observable(false);

  constructor(
    private _categories: any[] | ko.Computed<Array<any>>,
    creator: SurveyCreator
  ) {
    this.creator = creator;
    this._categoriesSubscription = ko.computed(() => {
      let categories = ko.unwrap(_categories);
      categories.forEach((category: any) => {
        (ko.unwrap(category.items) || []).forEach((item) => {
          item.isVisible = ko.observable(true);
        });
      });
      this.categories(categories);
    });
  }
  showFirstN(visibleItemsCount: number) {
    let leftItemsToShow = visibleItemsCount;
    this.invisibleItems([]);
    this.categories().forEach((category: any) => {
      (ko.unwrap(category.items) || []).forEach((item) => {
        item.isVisible(leftItemsToShow >= 0);
        if (leftItemsToShow < 0) {
          this.invisibleItems.push(item);
        }
        leftItemsToShow--;
      });
    });
  }

  public invisibleItemSelected = (model: any) => {
    this.showInvisibleItems(false);
    // alert(JSON.stringify(item));
    this.creator.clickToolboxItem(model.json);
  };

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
