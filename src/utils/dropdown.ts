import * as ko from "knockout";
import "./dropdown.scss";
var templateHtml = require("./dropdown.html");

export class DropdownViewModel {
  constructor(
    public items,
    public action,
    public optionsValue = "value",
    public optionsText = "text",
    public afterRender = null,
    public valueAllowUnset = null,
    public optionsCaption = null,
    public ariaLabel = null,
    public title = null,
    public disable = null,
    public hasFocus = null
  ) {}
}

ko.components.register("svd-dropdown", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.item;
      return new DropdownViewModel(
        model.items,
        model.action,
        model.optionsValue,
        model.optionsText,
        model.afterRender,
        model.valueAllowUnset,
        model.optionsCaption,
        model.ariaLabel,
        model.title,
        model.disable,
        model.hasFocus
      );
    },
  },
  template: templateHtml,
});
