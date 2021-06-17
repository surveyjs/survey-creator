import { Base, LocalizableString, Serializer, JsonObjectProperty } from "survey-core";
import { editorLocalization } from "../editorLocalization";

export class StringEditorViewModelBase extends Base {
  constructor(private locString: LocalizableString) {
    super();
  }
  public get placeholder(): string {
    if (!(<any>this.locString.owner).getType) return "";
    const ownerType: string = (<any>this.locString.owner).getType();
    if (!this.locString.name) return "";
    const property: JsonObjectProperty = Serializer.findProperty(ownerType, this.locString.name);
    if (!property.placeholder) return "";
    return editorLocalization.getString(property.placeholder);
  }
}