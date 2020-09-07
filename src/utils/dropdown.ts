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
    public hasFocus = null,
    public select3
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
        model.hasFocus,
        params.select3
      );
    },
  },
  template: templateHtml,
});

ko.bindingHandlers["sjsselect3"] = {
  init: function (element, valueAccessor, allBindingsAccessor) {
    var value = valueAccessor();
    if (value !== undefined && typeof jQuery !== "undefined" && jQuery()["select2"]) {
      var options: any = {
        width: "100%",
      };
      // TODO: pass RTL setting
      // if (editor.isRTLValue) {
      //   options.dir = "rtl";
      // }
      var $objectSelector = jQuery(element);
      $objectSelector["select2"](options);
      $objectSelector.on("select2:select", (sel_evt: any) => {
        if(ko.isWriteableObservable(value)) {
          value(sel_evt.target.value);
        }
      });
      var subscription = ko.computed(() => {
        var item = ko.unwrap(value);
        var el = <HTMLElement>(
          element.parentElement && element.parentElement.querySelector(".select2-selection__rendered")
        );
        if (el) {
          if (item && item.text) {
            el.innerText = item.text();
          }
        }

      });
      ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
        subscription.dispose();
        $objectSelector.off("select2:select");
        $objectSelector["select2"]('destroy');
      });
    }
  },
};