import {
  ObjectSelectorModel,
  CreatorBase,
  ObjectSelectorItem
} from "@survey/creator";
import * as ko from "knockout";
import {
  ImplementorBase,
  QuestionButtonGroup,
  Survey
} from "survey-knockout-ui";
import { Base } from "survey-core";
import { Serializer } from "survey-core";
import { QuestionFactory } from "survey-core";
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
        model.dispose();
      });

      return model;
    }
  },
  template: template
});
