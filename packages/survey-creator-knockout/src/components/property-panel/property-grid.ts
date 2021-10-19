import { PropertyGridViewModelBase, PropertyGridViewModel, CreatorBase, ResizeManager } from "@survey/creator";
import * as ko from "knockout";
import { ImplementorBase, QuestionButtonGroup } from "survey-knockout-ui";
import { QuestionFactory, Serializer } from "survey-core";
//import "./property-grid.scss";
//import "../../survey-theme/survey.scss";
const template = require("./property-grid.html");

ko.components.register("svc-property-grid", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const subscrib = ko.computed(() => {
        const model: PropertyGridViewModelBase = ko.unwrap(params.model);
        new ImplementorBase(model);
      });
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        subscrib.dispose();
      });
      return params;
    }
  },
  template: template
});

Serializer.overrideClassCreator("buttongroup", function () {
  return new QuestionButtonGroup("");
});

QuestionFactory.Instance.registerQuestion("buttongroup", (name) => {
  var q = new QuestionButtonGroup(name);
  q.choices = QuestionFactory.DefaultChoices;
  return q;
});
