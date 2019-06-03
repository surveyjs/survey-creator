import * as Survey from "survey-knockout";

export class EditableObject {
  private objValue: Survey.Base;
  private editableObjValue: Survey.Base;
  public constructor(obj: Survey.Base) {
    this.objValue = obj;
    this.editableObjValue = this.createEditableObj();
  }
  public get obj() {
    return this.objValue;
  }
  public get editableObj() {
    return this.editableObjValue;
  }
  public isPropertyChanged(propertyName: string): boolean {
    return !Survey.Helpers.isTwoValueEquals(
      this.obj[propertyName],
      this.editableObj[propertyName]
    );
  }
  public apply(propertyName: string) {
    if (!this.isPropertyChanged(propertyName)) return;
    this.obj[propertyName] = this.editableObj[propertyName];
  }
  protected createEditableObj(): Survey.Base {
    var res = <Survey.Base>Survey.Serializer.createClass(this.obj.getType());
    new Survey.JsonObject().toObject(this.getObjJson(), res);
    return res;
  }
  protected getObjJson(): any {
    var jsonObj = new Survey.JsonObject();
    jsonObj["lightSerializing"] = true; //TODO
    return jsonObj.toJsonObject(this.obj);
  }
}
