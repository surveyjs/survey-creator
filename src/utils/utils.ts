import * as ko from "knockout";

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
  NO: "YES",
};
function getOpositValue(str: string): string {
  if (!!opositeValues[str]) return opositeValues[str];
  return null;
}
function hasValueInArray(values: any[], search: any): boolean {
  for (var i = 0; i < values.length; i++) {
    if (!values[i]) continue;
    if (values[i].toString() === search) return true;
  }
  return false;
}
export function getNextValue(prefix: string, values: any[]) {
  if (values.length > 0)
    var oposite = getOpositValue(values[values.length - 1]);
  if (oposite && values.indexOf(oposite) < 0) return oposite;
  var numStr = "";
  var baseStr = "";
  for (var i = values.length - 1; i >= 0; i--) {
    if (!values[i]) continue;
    var str = values[i].toString();
    numStr = getNumericFromString(str);
    if (!!numStr) {
      baseStr = str.substr(0, str.length - numStr.length);
      break;
    }
  }
  if (!!numStr) {
    var num = parseInt(numStr);
    while (hasValueInArray(values, baseStr + num)) {
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
          element.focus({ preventScroll: true });
          break;
        }
      }
    }
  }
}

export function getFirstNonTextElement(elements: any) {
  if (!elements || !elements.length) return;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].nodeName != "#text" && elements[i].nodeName != "#comment")
      return elements[i];
  }
  return null;
}


ko.bindingHandlers["trueclick"] = {
  init: function(element, valueAccessor, allBindingsAccessor) {
    element.onclick = () => true;
  },
};

export function createKey2click(element: HTMLElement) {
  return (ev: KeyboardEvent) => {
    var char = ev.which || ev.keyCode;
    if (char === 13 || char === 32) {
      element.click();
    } else if (char === 27) {
      element.blur();
    }
  };
}

ko.bindingHandlers["key2click"] = {
  init: function(element, valueAccessor, allBindingsAccessor) {
    element.onkeyup = createKey2click(element);
  },
};

ko.bindingHandlers["clickNoFocus"] = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
    element.onclick = (ev) => {
      valueAccessor().call(viewModel, viewModel, ev);
    };
  },
};
