import * as ko from "knockout";
import { QuestionSelectBase, RendererFactory } from "survey-core";
import {
  ButtonGroupItemViewModel,
  IButtonGroupItem,
} from "./button-group-item";

import "./button-group.scss";
const template = require("./button-group.html");

export class ButtonGroupViewModel {
  public model: any;
  public readOnly: boolean;
  public title: string;
  public choices: ko.MaybeObservableArray<IButtonGroupItem>;

  constructor(model: QuestionSelectBase) {
    this.model = model;
    this.readOnly = model.readOnly;
    this.title = model.title;
    this.choices = model.choices;
  }

  public onItemSelected: (item: ButtonGroupItemViewModel) => void;
}

ko.components.register("svc-button-group-question", {
  viewModel: {
    createViewModel: (params: any) => {
      const question = params.question;
      const viewModel = new ButtonGroupViewModel(question);
      viewModel.onItemSelected = (item: IButtonGroupItem) => {
        question.value = item.value;
      };
      return viewModel;
    },
  },
  template: template,
});

RendererFactory.Instance.registerRenderer(
  "checkbox",
  "button-group",
  "svc-button-group-question"
);
RendererFactory.Instance.registerRenderer(
  "radiogroup",
  "button-group",
  "svc-button-group-question"
);
RendererFactory.Instance.registerRenderer(
  "dropdown",
  "button-group",
  "svc-button-group-question"
);
