import * as ko from "knockout";

ko.bindingHandlers["trueclick"] = {
  init: function (element, valueAccessor, allBindingsAccessor) {
    element.onclick = () => true;
  },
};

ko.bindingHandlers["clickNoFocus"] = {
  init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
    element.onclick = (ev) => {
      valueAccessor().call(viewModel, viewModel, ev);
    };
  },
};

ko.bindingHandlers["afterRenderParent"] = {
  init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
    element.style.display = "none";
    valueAccessor() && valueAccessor()([element.parentElement]);
  },
};

ko.bindingHandlers["creatorStyle"] = {
  update: function (element, valueAccessor, allBindings) {
    if (element && element.style.length) {
      for (let index = element.style.length - 1; index >= 0; index--) {
        const style = element.style[index] as string;
        if (style && (style.indexOf("--sjs-") === 0 || style.indexOf("--ctr-") === 0 || style.indexOf("--lbr-") === 0)) {
          element.style.removeProperty(style);
        }
      }
    }
    var value = ko.utils.unwrapObservable(valueAccessor()) || {};
    Object.keys(value).forEach(key => {
      if (key.indexOf("--") === 0) {
        element.style.setProperty(key, value[key]);
      } else {
        element.style[key] = value[key];
      }
    });
  }
};