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
  public reset() {
    this.assignProperties(this.editableObj);
  }
  protected createEditableObj(): Survey.Base {
    var type = this.obj.getType();
    var res = <Survey.Base>Survey.Serializer.createClass(type);
    if (res == null && type == "survey") {
      res = new Survey.Survey();
    }
    this.assignProperties(res);
    if (type != "survey" && !!res["setSurveyImpl"]) {
      res["setSurveyImpl"](this.obj["survey"]);
    }
    res["isCopy"] = true;
    return res;
  }
  private assignProperties(obj: any) {
    new Survey.JsonObject().toObject(this.getObjJson(), obj);
  }
  protected getObjJson(): any {
    var jsonObj = new Survey.JsonObject();
    jsonObj.lightSerializing = true;
    return jsonObj.toJsonObject(this.obj);
  }
}
