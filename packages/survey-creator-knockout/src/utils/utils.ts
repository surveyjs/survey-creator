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