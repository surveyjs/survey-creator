import * as ko from "knockout";

//import "./button.scss";
const template = require("./button.html");
// import template from "./button.html";
// console.log(template);

export class ButtonViewModel {
  public disabled: ko.MaybeObservable<boolean>;
  public css: ko.MaybeObservable<string>;
  constructor(
    title?: string,
    action?: () => void,
    disabled?: ko.MaybeObservable<boolean>,
    css?: ko.MaybeObservable<string>
  ) {
    this.title(title || "Button");
    this.action = () => !!action && action();
    this.disabled = disabled;
    this.css = css || ko.observable("svc-button");
  }
  title = ko.observable("Button");
  action = () => {
    alert("Button clicked");
  };
}

ko.components.register("svc-button", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new ButtonViewModel(
        params.title,
        params.action,
        params.disabled,
        params.css
      );
    },
  },
  template: template,
});
