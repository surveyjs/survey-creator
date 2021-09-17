import { PropertyGridViewModel, CreatorBase, ResizeManager } from "@survey/creator";
import * as ko from "knockout";
import {
  ImplementorBase,
  QuestionButtonGroup,
  Survey
} from "survey-knockout-ui";
import { Serializer } from "survey-core";
import { QuestionFactory } from "survey-core";
//import "./property-panel.scss";
//import "../../survey-theme/survey.scss";
const template = require("./property-panel.html");

ko.components.register("svc-property-panel", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var creator: CreatorBase<Survey> = params.model;
      const model = new PropertyGridViewModel(creator);
      const resizeManager = new ResizeManager(componentInfo.element.children[0]);
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
        resizeManager.dispose();
      });
      return model;
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
