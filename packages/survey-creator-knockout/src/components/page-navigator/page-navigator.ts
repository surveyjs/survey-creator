import * as ko from "knockout";
import { PageNavigatorViewModel } from "@survey/creator";
import { PageModel, ActionBarItem, SurveyModel } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./page-navigator.html");
// import template from "./page-navigator.html";

ko.components.register("svc-page-navigator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new PageNavigatorViewModel<SurveyModel>(
        params.creator.pagesController
      );
      new ImplementorBase(model);
      var itemsSubscription = ko.computed(() => {
        model.setItems(
          ko
            .unwrap(params.creator.pagesController.pages)
            .map((page: PageModel) => {
              const item: ActionBarItem = model.createActionBarItem(page);
              new ImplementorBase(item);
              return item;
            })
        );
      });

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        itemsSubscription.dispose();
      });
      return model;
    },
  },
  template: template,
});
