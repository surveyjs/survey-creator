import * as ko from "knockout";
import { Serializer } from "survey-knockout";

function getNumericFromString(str: string): string {
  if (!str) return "";
  var num = "";
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] >= "0" && str[i] <= "9") {
      num = str[i] + num;
    } else {
      if(!!num) return num;
    }
    if (num.length == 10) break;
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
export function getNextValue(prefix: string, values: any[]): string | number {
  if (values.length > 0)
    var oposite = getOpositValue(values[values.length - 1]);
  if (oposite && values.indexOf(oposite) < 0) return oposite;
  var numStr = "";
  var baseValue;
  var numStrIndex = -1;
  for (var i = values.length - 1; i >= 0; i--) {
    if (!values[i]) continue;
    var str = values[i].toString();
    numStr = getNumericFromString(str);
    if (!!numStr) {
      numStrIndex = str.lastIndexOf(numStr);
      baseValue = values[i];
      break;
    }
  }
  if (numStrIndex > -1) {
    var num = parseInt(numStr);
    var isNumber = baseValue === num;
    var newValue;
    do {
      if(isNumber){
        newValue = ++num;
      }
      else {
        var newNum = (num++).toString();
        while(numStr.length > newNum.length) {
          newNum = "0" + newNum;
        }
        newValue = str.substr(0, numStrIndex) + newNum + str.substr(numStrIndex + numStr.length);
      }
    } while (hasValueInArray(values, newValue));
    return newValue;
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
        renderedElements[i].getElementsByClassName("svd-focusable")
      );
      if (
        elements.length === 0 &&
        renderedElements[i].className.indexOf("svd-focusable") !== -1
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

// about compoentInfo: https://knockoutjs.com/documentation/component-registration.html
export function getNodesFromKoComponentInfo(componentInfo) {
  // elem.nodeType === 3 // text node
  // elem.nodeType === 8 // comment node

  let element = componentInfo.element;
  const siblings = [];

  if (element.nodeType !== 8) {
    return element.childNodes;
  }

  while ((element = element.nextSibling)) {
    if (element.nodeType === 3) continue;
    siblings.push(element);
  }
  return siblings;
}

ko.bindingHandlers["trueclick"] = {
  init: function (element, valueAccessor, allBindingsAccessor) {
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
  init: function (element, valueAccessor, allBindingsAccessor) {
    element.onkeyup = createKey2click(element);
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

export function propertyExists(obj: any, propertyName: string) {
  let result = true;
  if (!!obj && typeof obj.getType === "function") {
    const property = Serializer.findProperty(obj.getType(), propertyName);
    result = !!property;
  }
  return result;
}

export function isPropertyVisible(obj: any, propertyName: string) {
  let result = true;
  if (!!obj && typeof obj.getType === "function") {
    const property = Serializer.findProperty(obj.getType(), propertyName);
    result = !property || property.visible;
  }
  return result;
}
