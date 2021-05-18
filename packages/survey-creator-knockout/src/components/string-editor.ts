import * as ko from "knockout";
import { Serializer, JsonObjectProperty } from "survey-core";
import { editorLocalization } from "@survey/creator";
const template = require("./string-editor.html");

export class StringEditorViewModel {
  constructor(public locString: any) {}
  public get koHasHtml(): boolean {
    return this.locString.koHasHtml();
  }
  public get editValue(): string {
    return this.locString.koRenderedHtml();
  }
  public set editValue(value) {
    this.locString.searchElement = undefined;
    this.locString.text = value;
  }
  public get placeholder(): string {
    const ownerType: string = this.locString.owner.getType();
    if (!this.locString.name) return "";
    const property: JsonObjectProperty = Serializer.findProperty(ownerType, this.locString.name);
    if (!property.placeholder) return "";
    return editorLocalization.getString(property.placeholder);
  }
  public onInput(sender: StringEditorViewModel, event: any): void {
    if (sender.editValue == event.target.innerText) return;
    sender.editValue = event.target.innerText;
  }
  public onKeyDown(sender: StringEditorViewModel, event: KeyboardEvent): boolean {
    if (event.keyCode === 13) {
      this.blurEditor();
      this.done(sender, event);
    }
    if (event.keyCode === 27) {
      this.blurEditor();
      this.done(sender, event);
    }
    return true;
  }
  public edit(model: StringEditorViewModel, _: MouseEvent): void {
    model.focusEditor && model.focusEditor();
  }
  public done(_: StringEditorViewModel, event: Event): void {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
  public focusEditor: () => void;
  public blurEditor: () => void;
  public dispose(): void {
    this.locString.onSearchChanged = undefined;
    this.focusEditor = undefined;
    this.blurEditor = undefined;
  }
}

function getSearchElement(element: any): any {
  while (!!element && element.nodeName !== "SPAN") {
    const elements = element.parentElement.
      getElementsByClassName("sv-string-editor");
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
    const el = locStr.searchElement;
    if (!locStr.highlightDiv) {
      locStr.highlightDiv = document.createElement("span");
      locStr.highlightDiv.style.backgroundColor = "lightgray";
    }
    if (locStr.searchIndex != undefined) {
      resetLocalizationSpan(el, locStr);
      const rng: Range = document.createRange();
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
      const locStr = params.locString;
      applyLocStrOnSearchChanged(componentInfo.element, locStr);
      const model = new StringEditorViewModel(locStr);
      const getEditorElement = () => {
        return componentInfo.element.nextSibling.getElementsByClassName(
          "sv-string-editor"
        )[0];
      };
      model.focusEditor = () => {
        getEditorElement().focus();
        // document.execCommand('selectAll', false, null);
      }
      model.blurEditor = () => getEditorElement().blur();
      return model;
    },
  },
  template: template,
});
