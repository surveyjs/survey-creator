import { Base, LocalizableString, Serializer, JsonObjectProperty, property, ItemValue, ComputedUpdater } from "survey-core";
import { CreatorBase } from "../creator-base";
import { editorLocalization } from "../editorLocalization";
import { clearNewLines, select } from "../utils/utils";

export class StringEditorViewModelBase extends Base {
  private blurredByEscape: boolean = false;
  private focusedProgram: boolean = false;
  private valueBeforeEdit: string;

  @property() errorText: string;
  constructor(private locString: LocalizableString, private creator: CreatorBase) {
    super();
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
  }

  public blurEditor: () => void;

  public onClick(event: any) {
    event.stopPropagation();
  }

  public onFocus(event: any): void {
    if(!this.focusedProgram) {
      this.valueBeforeEdit = event.target.innerText;
      this.focusedProgram = false;
    }
    this.creator.selectFromStringEditor = true;
    event.target.parentElement.click();
    select(event.target);
  }

  public onInput(event: any): void {
    if (this.blurredByEscape) {
      this.blurredByEscape = false;
      event.target.innerText = this.valueBeforeEdit;
      this.errorText = null;
      return;
    }

    const clearedText = clearNewLines(event.target.innerText);
    let owner = this.locString.owner as any;

    this.errorText = this.creator.onGetErrorTextOnValidationCallback(this.locString.name, owner, clearedText);
    if(!this.errorText && !clearedText) {
      const propJSON = owner.getPropertyByName && owner.getPropertyByName(this.locString.name);
      if(propJSON && propJSON.isRequired) {
        this.errorText = editorLocalization.getString("pe.propertyIsEmpty");
      }
    }

    if (this.locString.text != clearedText) {
      if(!this.errorText) {
        if(this.locString.owner instanceof ItemValue && this.creator.inplaceEditForValues) {
          this.locString.owner.value = clearedText;
        }
        else {
          this.locString.text = clearedText;
        }
      }
      else{
        this.focusedProgram = true;
        event.target.focus();
      }
    } else {
      event.target.innerText = this.locString.renderedHtml;
      this.locString.strChanged();
    }
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
    if(!!this.placeholderValue) return this.placeholderValue;
    const property: any = this.findProperty();
    if (!property || !property.placeholder) return "";
    let placeholderValue: string = editorLocalization.getString(property.placeholder);
    if(!!placeholderValue) {
      var re = /\{([^}]+)\}/g;
      this.placeholderValue = <any>new ComputedUpdater<string>(() => {
        let match = re.exec(placeholderValue);
        while (match != null) {
          placeholderValue = placeholderValue.replace(re, propertyName => {
            const propertyValue = this.locString.owner && this.locString.owner[match[1]];
            return "" + propertyValue;
          });
          match = re.exec(placeholderValue);
        }
        return placeholderValue;
      });
    }
    return this.placeholderValue;
  }
  public get contentEditable(): boolean {
    return this.creator.isCanModifyProperty(<any>this.locString.owner, this.locString.name);
  }

  public className(text: any): string {
    return "svc-string-editor"+
          (text == "" && this.placeholder==""?" svc-string-editor--hidden":"") +
          (this.contentEditable?"":" svc-string-editor--readonly");
  }
}