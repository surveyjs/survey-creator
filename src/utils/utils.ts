import * as ko from "knockout";

export function getNextValue(prefix: string, values: string[]) {
  var index = values.reduce((res, val) => {
    if (typeof val === "string" && val.indexOf(prefix) === 0) {
      try {
        var candidate = parseInt(val.substring(prefix.length));
        if (candidate >= res) {
          return candidate + 1;
        }
      } catch (e) {}
    }
    return res;
  }, 1);
  return prefix + index;
}

export function findParentNode(className: string, sourceNode: HTMLElement) {
  var parent = sourceNode;
  while (
    (parent = parent.parentElement) &&
    !parent.classList.contains(className)
  );
  return parent;
}

export function focusFirstControl(renderedElements: HTMLElement[]) {
  for (var i = 0; i < renderedElements.length; i++) {
    if (typeof renderedElements[i].getElementsByClassName === "function") {
      var elements: NodeListOf<Element> | Array<HTMLElement> = renderedElements[
        i
      ].getElementsByClassName("form-control");
      if (
        elements.length === 0 &&
        renderedElements[i].className.indexOf("form-control") !== -1
      ) {
        elements = [renderedElements[i]];
      }
      if (elements.length > 0) {
        var element = <any>elements[0];
        if (element.tagName.toLowerCase() !== "a") {
          setTimeout(() => element.focus({ preventScroll: true }), 10);
          break;
        }
      }
    }
  }
}

ko.bindingHandlers["trueclick"] = {
  init: function(element, valueAccessor, allBindingsAccessor) {
    element.onclick = () => true;
  }
};
