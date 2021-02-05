import * as ko from "knockout";
import { ItemValue, RendererFactory } from "survey-knockout";

import "./dropdown-editor.scss";
const template = require("./dropdown.html");

export class DropdownEditorViewModel {
  public hasValue: ko.Computed<boolean>;
  public koValue: ko.Observable<any>;
  public isExpanded: ko.Observable<boolean> = ko.observable(false);
  public isFocused: ko.Observable<boolean> = ko.observable(false);
  constructor(public question: any) {}

  public selectItem = (itemValue: ItemValue) => {
    this.question.value = itemValue.value;
    this.isExpanded(false);
    this.isFocused(true);
  };

  public toggle() {
    this.isExpanded(!this.isExpanded());
  }

  public onBlur() {
    this.isExpanded(false);
  }
}

ko.components.register("sjs-dropdown", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new DropdownEditorViewModel(params.question);
    },
  },
  template: template,
});

RendererFactory.Instance.registerRenderer(
  "dropdown",
  "dropdown",
  "sjs-dropdown"
);
