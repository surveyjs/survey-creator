import { SurveyModel, property, propertyArray, DomDocumentHelper } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { getLocString } from "../../editorLocalization";
import {
  JsonEditorBaseModel,
  TabJsonEditorBasePlugin
} from "./json-editor-plugin";
import "./json-editor-textarea.scss";

// Where the scroller has to stand for the caret's line to be seen whole, or undefined when it
// already is. A line out of view is centered, the way Ace centers the line gotoLine jumps to.
export function getScrollTopForCaret(caretTop: number, lineHeight: number,
  clientHeight: number, scrollTop: number, scrollHeight: number): number | undefined {
  const maxScrollTop = scrollHeight - clientHeight;
  // no metrics (a hidden element, or no layout at all) and nothing to scroll read the same:
  // there is no scroll position that would show more than the current one does
  if (clientHeight <= 0 || lineHeight <= 0 || maxScrollTop <= 0) return undefined;
  if (caretTop >= scrollTop && caretTop + lineHeight <= scrollTop + clientHeight) return undefined;
  const centered = caretTop - (clientHeight - lineHeight) / 2;
  return Math.max(0, Math.min(centered, maxScrollTop));
}

export class TextareaJsonEditorModel extends JsonEditorBaseModel {
  @property({ defaultValue: "", onSet: (_, target) => target.onTextChanged() })
  protected _text: string;
  @propertyArray() private _errors: any[];
  public ariaLabel: string = getLocString("tabs.json");
  public textElement: HTMLTextAreaElement;
  @property({ defaultValue: false }) canShowErrors: boolean;

  constructor(creator: SurveyCreatorModel) {
    super(creator);
    this.onPluginActivate();
  }
  public checkKey(data: any, e: any) {
    if (e.key === "Tab") {
      e.preventDefault();
      const textareaElement: any = e.target;
      const start = textareaElement.selectionStart;
      const end = textareaElement.selectionEnd;

      textareaElement.value = textareaElement.value.substring(0, start) +
        "\t" + textareaElement.value.substring(end);
      textareaElement.selectionStart =
        textareaElement.selectionEnd = start + 1;
      e.stopPropagation();
    }
    return true;
  }
  protected getText(): string {
    return this._text;
  }
  protected setText(value: string): void {
    this.isProcessingImmediately = true;
    this._text = value;
    this.processErrors(value);
    this.isProcessingImmediately = false;
  }
  protected gotoError(at: number, row: number, column: number): void {
    if (!this.textElement) return;
    const el = this.textElement;
    el.focus();
    el.selectionStart = at;
    el.selectionEnd = at;
    // a browser scrolls a textarea to its caret when the user moves it, not when the code
    // assigns selectionStart - so the line the error points at stays wherever it was
    this.scrollCaretIntoView(el, at);
  }
  private scrollCaretIntoView(el: HTMLTextAreaElement, at: number): void {
    const style = DomDocumentHelper.getComputedStyle(el);
    if (!style) return;
    const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.2;
    const caretTop = this.measureCaretTop(el, style, at);
    if (caretTop === undefined) return;
    const scrollTop = getScrollTopForCaret(
      caretTop, lineHeight, el.clientHeight, el.scrollTop, el.scrollHeight);
    if (scrollTop !== undefined) {
      el.scrollTop = scrollTop;
    }
  }
  // A textarea exposes no geometry for its caret, and its lines wrap (there is no wrap="off"),
  // so the row number alone does not say how far down the caret sits. The text before the caret
  // is rendered once in a mirror that carries the textarea's own metrics, and the marker that
  // closes it reports the offset the caret has inside the textarea.
  private measureCaretTop(el: HTMLTextAreaElement, style: CSSStyleDeclaration,
    at: number): number | undefined {
    const parent = el.parentElement;
    if (!parent) return undefined;
    const mirror = <HTMLDivElement>DomDocumentHelper.createElement("div");
    const marker = <HTMLSpanElement>DomDocumentHelper.createElement("span");
    if (!mirror || !marker) return undefined;
    const copied = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing",
      "textTransform", "textIndent", "lineHeight", "tabSize", "paddingTop", "paddingRight",
      "paddingBottom", "paddingLeft", "borderTopWidth", "borderRightWidth", "borderBottomWidth",
      "borderLeftWidth"];
    copied.forEach(name => { (<any>mirror.style)[name] = (<any>style)[name]; });
    mirror.style.position = "absolute";
    mirror.style.visibility = "hidden";
    mirror.style.pointerEvents = "none";
    mirror.style.top = "0";
    mirror.style.left = "-9999px";
    mirror.style.height = "auto";
    mirror.style.overflow = "hidden";
    mirror.style.boxSizing = style.boxSizing;
    mirror.style.width = el.clientWidth + "px";
    mirror.style.whiteSpace = "pre-wrap";
    mirror.style.wordWrap = "break-word";
    mirror.textContent = this.text.substring(0, at);
    mirror.appendChild(marker);
    parent.appendChild(mirror);
    const res = marker.offsetTop;
    parent.removeChild(mirror);
    return res;
  }
  public get errorButtonText(): string {
    return this.canShowErrors ? getLocString("ed.jsonHideErrors") : getLocString("ed.jsonShowErrors");
  }
  public toggleErrors(): void {
    this.canShowErrors = !this.canShowErrors;
  }
  public get userFriendlyErrors(): any[] {
    if (this._errors.length === 0) {
      return [];
    }
    const customErrors: string[] = [];
    for (let i = 0; i < this._errors.length - 1; i++) {
      customErrors[i] = this._errors[i].text;
      customErrors[i] += "\n\n";
    }
    customErrors[this._errors.length - 1] = this._errors[this._errors.length - 1].text;
    return customErrors;
  }
  public get errors(): any[] {
    return this._errors;
  }

  protected onTextChanged(): void {
    this.isJSONChanged = true;
    super.onTextChanged();
  }
  protected setErrors(errors: any[], findings?: any[]): void {
    //TODO Remove this line and then the function
    this._errors = errors;
    super.setErrors(errors, findings);
  }
}

export class TabJsonEditorTextareaPlugin
  extends TabJsonEditorBasePlugin
  implements ICreatorPlugin {
  protected createModel(
    creator: SurveyCreatorModel
  ): JsonEditorBaseModel {
    return new TextareaJsonEditorModel(creator);
  }
}
