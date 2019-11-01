import * as Survey from "survey-knockout";

export class EditableObject {
  public static getOrigionalSurvey(
    survey: Survey.SurveyModel
  ): Survey.SurveyModel {
    return !!survey && !!survey["origionalObj"]
      ? survey["origionalObj"]
      : survey;
  }

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
    if (type == "matrixdropdowncolumn") {
      res["colOwner"] = this.obj["colOwner"];
    }
    if (type != "survey") {
      if (!!res["setSurveyImpl"]) {
        res["setSurveyImpl"](this.obj["survey"]);
      } else {
        if (!!this.obj["survey"] && !res["survey"]) {
          res["survey"] = this.obj["survey"];
        }
      }
    }
    if (!!this.obj["parent"]) {
      res["parent"] = this.obj["parent"];
    }
    res["isCopy"] = true;
    res["origionalObj"] = this.obj;
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
