import * as ko from "knockout";
import { numberTypeAnnotation } from "babel-types";

function getNumericFromString(str: string): string {
  if (!str) return "";
  var num = "";
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] >= "0" && str[i] <= "9") {
      num = str[i] + num;
    }
  }
  return num;
}
const opositeValues = {
  true: "false",
  True: "False",
  TRUE: "FALSE",
  false: "true",
  False: "True",
  FALSE: "TRUE",
  yes: "no",
  Yes: "No",
  YES: "NO",
  no: "yes",
  No: "Yes",
  NO: "YES"
};
function getOpositValue(str: string): string {
  if (!!opositeValues[str]) return opositeValues[str];
  return null;
}

export function getNextValue(prefix: string, values: string[]) {
  if (values.length > 0)
    var oposite = getOpositValue(values[values.length - 1]);
  if (oposite && values.indexOf(oposite) < 0) return oposite;
  var numStr = "";
  var baseStr = "";
  for (var i = values.length - 1; i >= 0; i--) {
    var str = values[i];
    numStr = getNumericFromString(str);
    if (!!numStr) {
      baseStr = str.substr(0, str.length - numStr.length);
      break;
    }
  }
  if (!!numStr) {
    var num = parseInt(numStr);
    while (values.indexOf(baseStr + num) > -1) {
      num++;
    }
    return baseStr + num;
  }
  return prefix + 1;
}

export function findParentNode(className: string, sourceNode: HTMLElement) {
  var parent = sourceNode;
  while (!!parent && !parent.classList.contains(className)) {
    parent = parent.parentElement;
  }
  return parent;
}

export function focusFirstControl(renderedElements: HTMLElement[]) {
  for (var i = 0; i < renderedElements.length; i++) {
    if (typeof renderedElements[i].getElementsByClassName === "function") {
      var elements = <HTMLCollectionOf<HTMLElement>>(
        renderedElements[i].getElementsByClassName("form-control")
      );
      if (
        elements.length === 0 &&
        renderedElements[i].className.indexOf("form-control") !== -1
      ) {
        elements = <any>[renderedElements[i]];
      }
      if (elements.length > 0) {
        var element = elements[0];
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

ko.bindingHandlers["key2click"] = {
  init: function(element, valueAccessor, allBindingsAccessor) {
    element.onkeyup = ev => {
      var char = ev.which || ev.keyCode;
      if (char === 13 || char === 32) {
        element.click();
      } else if (char === 27) {
        element.blur();
      }
    };
  }
};

ko.bindingHandlers["clickNoFocus"] = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
    element.onclick = ev => {
      valueAccessor().call(viewModel, viewModel, ev);
      setTimeout(() => {
        element.blur();
      }, 1);
      return true;
    };
  }
};
