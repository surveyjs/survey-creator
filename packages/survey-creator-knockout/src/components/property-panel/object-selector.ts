import { ObjectSelectorModel, ObjectSelectorItem } from "@survey/creator";
import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
const template = require("./object-selector.html");

ko.components.register("svc-object-selector", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var model: ObjectSelectorModel = params.model;
      new ImplementorBase(model);
      model.onCreateItemCallback = (item: ObjectSelectorItem) => {
        new ImplementorBase(item);
      };
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.onCreateItemCallback = null;
      });

      return { model: model };
    }
  },
  template: template
});
