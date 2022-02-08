import * as ko from "knockout";
import { CreatorBase, StringEditorViewModelBase } from "survey-creator-core";
import { LocalizableString } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
const template = require("./string-editor.html");

export class StringEditorViewModel {
  private implementor = undefined;
  private baseModel: StringEditorViewModelBase;

  getEditorElement = (element) => {
    return element.nextSibling.getElementsByClassName(
      "sv-string-editor"
    )[0];
  };

  constructor(public locString: any, private creator: CreatorBase, element: any) {
    this.baseModel = new StringEditorViewModelBase(locString, creator);
    this.implementor = new ImplementorBase(this.baseModel);
    this.focusEditor = () => {
      this.getEditorElement(element).focus();
    };
    this.baseModel.blurEditor = () => {
      const editorElement = this.getEditorElement(element);
      editorElement.blur();
      editorElement.spellcheck = false;
    };
    locString.strChanged();
  }

  public setLocString(locString: LocalizableString): LocalizableString {
    this.baseModel.setLocString(locString);
    return locString;
  }

  public get koHasHtml(): boolean {
    return this.locString.koHasHtml();
  }
  public get editValue(): string {
    return this.baseModel.focused && this.locString.text || this.locString.koRenderedHtml();
  }
  public get className(): string {
    return this.baseModel.className(this.locString.koRenderedHtml());
  }

  public get placeholder(): string {
    return this.baseModel.placeholder;
  }
  public get contentEditable(): string {
    return this.baseModel.contentEditable?"true":"false";
  }

  public errorText: ko.Observable<string> = ko.observable(null);
  public onClick(sender: StringEditorViewModel, event: any): void {
    this.baseModel.onClick(event);
  }
  public onInput(sender: StringEditorViewModel, event: any): void {
    event.currentTarget.spellcheck = false;
    this.baseModel.onInput(event);
    this.errorText(this.baseModel.errorText);
    this.locString.searchElement = undefined;
  }
  private justFocused = false;
  public onFocus(sender: StringEditorViewModel, event: any): void {
    this.baseModel.onFocus(event);
    this.justFocused = true;
  }
  public onKeyDown(sender: StringEditorViewModel, event: KeyboardEvent): boolean {
    var res = this.baseModel.onKeyDown(event);
    this.errorText(this.baseModel.errorText);
    return res;
  }
  public onMouseUp(sender: StringEditorViewModel, event: MouseEvent): boolean {
    if(this.justFocused) {
      this.justFocused = false;
      // event.preventDefault();
      return false;
    }
    return undefined;
  }
  public edit(model: StringEditorViewModel, _: MouseEvent): void {
    setTimeout(() => {
      model.focusEditor && model.focusEditor();
    }, 100);
    this.baseModel.onClick(_);
  }
  public done(_: StringEditorViewModel, event: Event): void {
    this.baseModel.done(event);
  }
  public focusEditor: () => void;
  public dispose(): void {
    this.locString.onSearchChanged = undefined;
    this.focusEditor = undefined;
    this.baseModel.blurEditor = undefined;
    this.implementor.dispose();
    this.implementor = undefined;
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
      const data = ko.unwrap(params.locString);
      const model = new StringEditorViewModel(data.locStr, data.creator, componentInfo.element);
      const subscrib = ko.computed(() => {
        const locStr = ko.unwrap(params.locString).locStr;
        applyLocStrOnSearchChanged(componentInfo.element, locStr);
        model.setLocString(locStr);
      });

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        subscrib.dispose();
      });
      return model;
    },
  },
  template: template,
});
