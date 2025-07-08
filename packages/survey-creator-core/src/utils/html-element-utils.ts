
export function getFirstNonTextElement(elements: any) {
  if (!elements || !elements.length) return;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].nodeName != "#text" && elements[i].nodeName != "#comment")
      return elements[i];
  }
  return null;
}

export function findParentNode(className: string, sourceNode: HTMLElement) {
  var parent = sourceNode;
  while(!!parent && !parent.classList.contains(className)) {
    parent = parent.parentElement;
  }
  return parent;
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

  while((element = element.nextSibling)) {
    if (element.nodeType === 3) continue;
    siblings.push(element);
  }
  return siblings;
}

// ko.bindingHandlers["trueclick"] = {
//   init: function (element, valueAccessor, allBindingsAccessor) {
//     element.onclick = () => true;
//   },
// };

// export function createKey2click(element: HTMLElement) {
//   return (ev: KeyboardEvent) => {
//     var char = ev.which || ev.keyCode;
//     if (char === 13 || char === 32) {
//       element.click();
//     } else if (char === 27) {
//       element.blur();
//     }
//   };
// }

// ko.bindingHandlers["key2click"] = {
//   init: function (element, valueAccessor, allBindingsAccessor) {
//     element.onkeyup = createKey2click(element);
//   },
// };

// ko.bindingHandlers["clickNoFocus"] = {
//   init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
//     element.onclick = (ev) => {
//       valueAccessor().call(viewModel, viewModel, ev);
//     };
//   },
// };

// ko.bindingHandlers["afterRenderParent"] = {
//   init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
//     element.style.display = "none";
//     valueAccessor() && valueAccessor()([element.parentElement]);
//   },
// };

export function toggleHovered(e: MouseEvent, element: HTMLElement, timeout = 0) {
  const processedFlagName = "__svc_question_processed";
  const name = "svc-hovered";
  const nameReady = "svc-hovered-ready";

  function setClass(className, checkReady = null) {
    const arr = (element.className || "").split(" ");
    if (checkReady) {
      if (arr.indexOf(checkReady) == -1) {
        return;
      }
    }
    if (arr.indexOf(className) == -1) {
      element.className += " " + className;
    }
  }

  if (!e[processedFlagName] && e.type === "mouseover") {
    if (timeout) {
      setClass(nameReady);
      setTimeout(() => {
        setClass(name, nameReady);
      }, timeout);
    } else {
      setClass(name);
    }
    e[processedFlagName] = true;
  } else {
    element.className = (element.className || "").replace(" svc-hovered-ready", "");
    element.className = (element.className || "").replace(" svc-hovered", "");
  }
}

export function select(element: any) {
  if (!window) return;
  var range, selection;
  if (window.getSelection && document.createRange) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  } else if (document["selection"] && document.body["createTextRange"]) {
    range = document.body["createTextRange"]();
    range.moveToElementText(element);
    range.select();
  }
}

export function saveToFileHandler(fileName: string, blob: Blob) {
  if (!window) return;
  if (window.navigator["msSaveOrOpenBlob"]) {
    window.navigator["msSaveBlob"](blob, fileName);
  } else {
    const elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = fileName;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
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