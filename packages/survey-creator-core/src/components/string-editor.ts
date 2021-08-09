import { Base, LocalizableString, Serializer, JsonObjectProperty } from "survey-core";
import { editorLocalization } from "../editorLocalization";

export class StringEditorViewModelBase extends Base {
  constructor(private locString: LocalizableString) {
    super();
  }
  public checkConstraints(event: any) {
    if(this.maxLength > 0 && event.keyCode >= 32) {
      var text: string = (event.target as any).innerText || "";
      if(text.length >= this.maxLength) {
        event.preventDefault();
      }
    }
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