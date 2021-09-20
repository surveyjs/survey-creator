import { PropertyGridViewModelBase, PropertyGridViewModel, CreatorBase, ResizeManager } from "@survey/creator";
import * as ko from "knockout";
import { ImplementorBase, QuestionButtonGroup } from "survey-knockout-ui";
import { QuestionFactory, Serializer } from "survey-core";
//import "./property-panel.scss";
//import "../../survey-theme/survey.scss";
const template = require("./property-panel.html");

ko.components.register("svc-property-panel", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const resizeManager: ResizeManager = new ResizeManager(componentInfo.element.children[0]);
      const subscrib = ko.computed(() => {
        const model: PropertyGridViewModelBase = ko.unwrap(params.model);
        new ImplementorBase(model);
      });
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        subscrib.dispose();
        resizeManager.dispose();
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
