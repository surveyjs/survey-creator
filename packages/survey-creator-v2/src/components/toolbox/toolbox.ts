import * as ko from "knockout";
import { SurveyCreator } from '../../creator';

import "./toolbox.scss";
const template = require("./toolbox.html");
// import template from "./toolbox.html";

export class ToolboxViewModel {
  private _categoriesSubscription: ko.Computed;
  public categories = ko.observableArray<any>();
  public creator: SurveyCreator;
  public invisibleItems = ko.observableArray<any>();

  constructor(private _categories: any[] | ko.Computed<Array<any>>, creator: SurveyCreator) {
    this.creator = creator;
    this._categoriesSubscription = ko.computed(() => {
      let categories = ko.unwrap(_categories);
      categories.forEach((category: any) => {
        (ko.unwrap(category.items) || []).forEach(item => {
          item.isVisible = ko.observable(true);
        });
      });
      this.categories(categories)
    });
  }
  showFirstN(visibleItemsCount: number) {
    let leftItemsToShow = visibleItemsCount;
    this.invisibleItems([]);
    this.categories().forEach((category: any) => {
      (ko.unwrap(category.items) || []).forEach(item => {
        item.isVisible(leftItemsToShow >= 0);
        if(leftItemsToShow < 0) {
          this.invisibleItems.push(item);
        }
        leftItemsToShow--;
      });
    });
  }
  dispose() {
    this._categoriesSubscription.dispose();
  }
}

ko.components.register("svc-toolbox", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new ToolboxViewModel(params.categories, params.creator);
      var previousHeight = 0;
      let updateVisibleItems = setInterval(() => {
        var toolboxElement: HTMLDivElement = componentInfo.element.querySelector(
          ".svc-toolbox"
        );
        if (!!toolboxElement) {
          let delta = toolboxElement.scrollHeight - toolboxElement.offsetHeight;
          if(delta > 20 || toolboxElement.offsetHeight - previousHeight > 40) {
            if(delta > 20) {
              model.showFirstN(toolboxElement.offsetHeight / 40 - 2);
              ko.tasks.runEarly();
              // console.log("srink");
            } else {
              if(toolboxElement.offsetHeight - previousHeight > 40) {
                model.showFirstN(Number.MAX_VALUE);
                ko.tasks.runEarly();
                // console.log("expand");
              }
            }
            previousHeight = toolboxElement.offsetHeight;
          }
        }
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
