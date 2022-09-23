import { Base, LocalizableString, Serializer, JsonObjectProperty, property, ItemValue, ComputedUpdater, sanitizeEditableContent, Event as SurveyEvent } from "survey-core";
import { CreatorBase } from "../creator-base";
import { editorLocalization } from "../editorLocalization";
import { clearNewLines, select } from "../utils/utils";

export class StringEditorViewModelBase extends Base {
  public static getActivateEventForLocString(locString: LocalizableString): SurveyEvent <(sender: StringEditorViewModelBase, options: any) => any, any> {
    return locString["_editorActivateEvent"];
  }
  private setActivateEventForLocString(locString: LocalizableString) {
    let event = StringEditorViewModelBase.getActivateEventForLocString(locString);
    if(!event) {
      event =
          new SurveyEvent <(sender: StringEditorViewModelBase, options: any) => any, any>();
      locString["_editorActivateEvent"] = event;
    }
    event.add(()=>{ this.activate(); });
  }

  private blurredByEscape: boolean = false;
  private focusedProgram: boolean = false;
  private valueBeforeEdit: string;

  public onEditComplete: SurveyEvent<(sender: StringEditorViewModelBase, options: any) => any, any> = new SurveyEvent<(sender: StringEditorViewModelBase, options: any) => any, any>();

  public getEditorElement: () => HTMLElement;

  @property() errorText: string;
  @property() focused: boolean;
  @property({ defaultValue: true }) editAsText: boolean;
  compostionInProgress: boolean;
  constructor(private locString: LocalizableString, private creator: CreatorBase) {
    super();
    this.setActivateEventForLocString(locString);
    this.checkMarkdownToTextConversion(this.locString.owner, this.locString.name);
  }

  public activate() {
    const element = this.getEditorElement();
    if(element) {
      element.focus();
      select(element);
    }
  }

  public setLocString(locString: LocalizableString) {
    this.locString = locString;
  }
  public checkConstraints(event: any) {
    if (this.maxLength > 0 && event.keyCode >= 32) {
      var text: string = (event.target as any).innerText || "";
      if (text.length >= this.maxLength) {
        event.preventDefault();
      }
    }
    if (event.ctrlKey || event.metaKey) {
      if ([89, 90].indexOf(event.keyCode) !== -1) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    }
  }

  public blurEditor: () => void;

  public onClick(event: any) {
    event.stopPropagation();
  }

  public onFocus(event: any): void {
    if (!this.focusedProgram) {
      this.valueBeforeEdit = this.locString.hasHtml ? event.target.innerHTML : event.target.innerText;
      this.focusedProgram = false;
    }
    this.creator.selectFromStringEditor = true;
    event.target.parentElement.click();
    event.target.spellcheck = true;
    this.focused = true;
    this.justFocused = true;
  }

  private checkMarkdownToTextConversion(element, name) {
    var options = {
      element: element,
      text: <any>null,
      name: name,
      html: "",
    };
    if (this.creator) {
      this.creator.onHtmlToMarkdown.fire(this, options);
      this.editAsText = (options.text === null);
    }
  }

  public onCompositionStart(event: any): void {
    this.compostionInProgress = true;
  }

  public onInput(event: any): void {
    if(this.editAsText && !this.compostionInProgress) {
      sanitizeEditableContent(event.target);
    }
  }
  public onCompositionEnd(event: any): void {
    this.compostionInProgress = false;
    this.onInput(event);
  }

  public onBlur(event: any): void {
    if (this.blurredByEscape) {
      this.blurredByEscape = false;
      if (this.locString.hasHtml) {
        event.target.innerHTML = this.valueBeforeEdit;
      }
      else {
        event.target.innerText = this.valueBeforeEdit;
      }
      this.errorText = null;
      this.focused = false;
      return;
    }

    let mdText = null;
    if (!this.editAsText) {
      var options = {
        element: this.locString.owner,
        text: <any>null,
        name: this.locString.name,
        html: event.target.innerHTML
      };
      this.creator.onHtmlToMarkdown.fire(this, options);
      mdText = options.text;
    }
    const clearedText = mdText || clearNewLines(this.locString.hasHtml ? event.target.innerHTML : event.target.innerText);
    let owner = this.locString.owner as any;

    this.errorText = this.creator.onGetErrorTextOnValidationCallback(this.locString.name, owner, clearedText);
    if (!this.errorText && !clearedText) {
      const propJSON = owner.getPropertyByName && owner.getPropertyByName(this.locString.name);
      if (propJSON && propJSON.isRequired) {
        this.errorText = editorLocalization.getString("pe.propertyIsEmpty");
      }
    }

    if (this.locString.text != clearedText) {
      if (!this.errorText) {
        if (this.locString.owner instanceof ItemValue && this.creator.inplaceEditForValues) {
          this.locString.owner.value = clearedText;
        }
        else {
          const oldStoreDefaultText = this.locString.storeDefaultText;
          this.locString.storeDefaultText = false;
          this.locString.text = clearedText;
          this.locString.storeDefaultText = oldStoreDefaultText;
        }
      }
      else {
        this.focusedProgram = true;
        event.target.focus();
      }
    } else {
      if (this.locString.hasHtml) {
        event.target.innerHTML = this.locString.renderedHtml;
      }
      else {
        event.target.innerText = this.locString.renderedHtml;
      }
      this.locString.strChanged();
    }
    this.focused = false;
  }
  public done(event: Event): void {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
  public onKeyDown(event: KeyboardEvent): boolean {
    if (event.keyCode === 13) {
      this.blurEditor();
      this.done(event);
    }
    if (event.keyCode === 27) {
      this.blurredByEscape = true;
      this.blurEditor();
      this.done(event);
    }
    this.checkConstraints(event);
    return true;
  }
  public onKeyUp(event: KeyboardEvent): boolean {
    if (event.keyCode === 9 && event.target === document.activeElement) {
      select(event.target);
    }
    return true;
  }
  private justFocused = false;
  public onMouseUp(event: MouseEvent): boolean {
    if (this.justFocused) {
      this.justFocused = false;
      if (!window) return false;
      if (window.getSelection().focusNode && (window.getSelection().focusNode.parentElement !== event.target) || window.getSelection().toString().length == 0) {
        select(event.target);
      }
      return false;
    }
    return true;
  }
  public findProperty() {
    if (!(<any>this.locString.owner).getType) return undefined;
    const ownerType: string = (<any>this.locString.owner).getType();
    if (!this.locString.name) return undefined;
    const property: JsonObjectProperty = Serializer.findProperty(ownerType, this.locString.name);
    return property;
  }
  public get maxLength(): number {
    const property: JsonObjectProperty = this.findProperty();
    if (!property || property.maxLength <= 0) return -1;
    return property.maxLength;
  }
  @property() placeholderValue: string;
  public get placeholder(): string {
    if (!!this.placeholderValue) return this.placeholderValue;
    const property: any = this.findProperty();
    if (!property || !property.placeholder) return "";
    let placeholderValue: string = editorLocalization.getString(property.placeholder);
    if (!!placeholderValue) {
      var re = /\{([^}]+)\}/g;
      this.placeholderValue = <any>new ComputedUpdater<string>(() => {
        let result = placeholderValue;
        let match = re.exec(result);
        while (match != null) {
          result = result.replace(re, propertyName => {
            const propertyValue = this.locString.owner && this.locString.owner[match[1]];
            return "" + propertyValue;
          });
          match = re.exec(result);
        }
        return result;
      });
    }
    return this.placeholderValue;
  }
  public get contentEditable(): boolean {
    return this.creator.isCanModifyProperty(<any>this.locString.owner, this.locString.name);
  }

  public className(text: any): string {
    return "svc-string-editor" +
      (text == "" && this.placeholder == "" ? " svc-string-editor--hidden" : "") +
      (this.contentEditable ? "" : " svc-string-editor--readonly");
  }
}