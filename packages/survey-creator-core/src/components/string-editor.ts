import { Base, LocalizableString, Serializer, JsonObjectProperty } from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { select } from "../utils/utils";

export class StringEditorViewModelBase extends Base {
  private blurredByEscape: boolean = false;
  private valueBeforeEdit: string;
  constructor(private locString: LocalizableString) {
    super();
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

  public onFocus(event: any): void {
    this.valueBeforeEdit = event.target.innerText;
    event.target.click();
    select(event.target);
  }

  public onInput(event: any): void {
    if (this.blurredByEscape) {
      this.blurredByEscape = false;
      event.target.innerText = this.valueBeforeEdit;
      return;
    }

    if (this.locString.text != event.target.innerText) {
      this.locString.text = event.target.innerText;
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
  public get placeholder(): string {
    const property: JsonObjectProperty = this.findProperty();
    if (!property || !property.placeholder) return "";
    return editorLocalization.getString(property.placeholder);
  }
}