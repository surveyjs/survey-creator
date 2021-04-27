import * as ko from "knockout";
const template = require("./string-editor.html");

export class StringEditorViewModel {
  constructor(public locString: any) {}
  get koHasHtml() {
    return this.locString.koHasHtml();
  }
  get editValue() {
    return this.locString.koRenderedHtml();
  }
  set editValue(value) {
    this.locString.searchElement = undefined;
    this.locString.text = value;
  }
  onInput(sender: StringEditorViewModel, event: any) {
    sender.editValue = event.target.innerText;
  }
  onKeyDown(sender: StringEditorViewModel, event: KeyboardEvent) {
    if(event.keyCode === 13) {
      this.blurEditor();
      this.done(sender, event);
    }
    if(event.keyCode === 27) {
      this.blurEditor();
      this.done(sender, event);
    }
    return true;
  }
  onClick(sender: StringEditorViewModel, event: any) {
    event.stopPropagation();
  }
  edit(model: StringEditorViewModel, event: MouseEvent) {
    model.focusEditor && model.focusEditor();
    this.done(model, event);
  }
  done(model: StringEditorViewModel, event: Event) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
  focusEditor: () => void;
  blurEditor: () => void;
  dispose() {
    this.locString.onSearchChanged = undefined;
    this.focusEditor = undefined;
    this.blurEditor = undefined;
  }
}

function getSearchElement(element: any): any {
  while (!!element && element.nodeName !== "SPAN") {
    var elements = element.parentElement.getElementsByClassName(
      "sv-string-editor"
    );
    element = elements.length > 0 ? elements[0] : undefined;
  }
  if (!!element && element.childNodes.length > 0) return element;
  return null;
}

function resetLocalizationSpan(element: any, locStr: any) {
  while (element.childNodes.length > 1) {
    element.removeChild(element.childNodes[1]);
  }
  element.childNodes[0].textContent = locStr.renderedHtml;
}

function applyLocStrOnSearchChanged(element: any, locStr: any) {
  locStr.onSearchChanged = () => {
    if (locStr.searchElement == undefined) {
      locStr.searchElement = getSearchElement(element);
    }
    if (locStr.searchElement == null) return;
    var el = locStr.searchElement;
    if (!locStr.highlightDiv) {
      locStr.highlightDiv = document.createElement("span");
      locStr.highlightDiv.style.backgroundColor = "lightgray";
    }
    if (locStr.searchIndex != undefined) {
      resetLocalizationSpan(el, locStr);
      var rng = document.createRange();
      rng.setStart(el.childNodes[0], locStr.searchIndex);
      rng.setEnd(
        el.childNodes[0],
        locStr.searchIndex + locStr.searchText.length
      );
      rng.surroundContents(locStr.highlightDiv);
    } else {
      resetLocalizationSpan(el, locStr);
      locStr.searchElement = undefined;
    }
  };
}

export const editableStringRendererName = "svc-string-editor";

ko.components.register(editableStringRendererName, {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var locStr = params.locString;
      applyLocStrOnSearchChanged(componentInfo.element, locStr);
      const model = new StringEditorViewModel(locStr);
      const getEditorElement = () => {
        return componentInfo.element.nextSibling.getElementsByClassName("sv-string-editor")[0];
      }
      model.focusEditor = () => getEditorElement().focus();
      model.blurEditor = () => getEditorElement().blur();
      return model;
    },
  },
  template: template,
});
