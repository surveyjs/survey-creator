import * as Survey from "survey-knockout";

export class EditableObject {
  public static isCopyObject(obj: any): boolean {
    return !!obj && obj["isCopy"];
  }
  public static getSurvey(object: any): Survey.SurveyModel {
    if (object instanceof Survey.SurveyModel) {
      return EditableObject.getOrigionalSurvey(object);
    }
    if (object instanceof Survey.MatrixDropdownColumn && !!object.colOwner)
      return object.colOwner["survey"];
    if (!!object) {
      if (!!object.survey)
        return EditableObject.getOrigionalSurvey(object.survey);
      if (!!object.owner) return EditableObject.getSurvey(object.owner);
      if (!!object.errorOwner)
        return EditableObject.getSurvey(object.errorOwner);
      if (!!object.locOwner) return EditableObject.getSurvey(object.locOwner);
    }
    return null;
  }
  public static getOrigionaObject(object: any): any {
    return !!object && !!object["origionalObj"]
      ? object["origionalObj"]
      : object;
  }
  public static getOrigionalSurvey(
    survey: Survey.SurveyModel
  ): Survey.SurveyModel {
    return EditableObject.getOrigionaObject(survey);
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
    if (propertyName == "pages") return false; //TODO could not find a better way yet
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
  public applyAll(excludedProps: Array<string> = []) {
    var props = this.getProperties(excludedProps);
    for (var i = 0; i < props.length; i++) {
      this.apply(props[i]);
    }
  }
  private getProperties(excludedProps: Array<string>): Array<string> {
    var props = [];
    var newJSON = this.getObjJson(this.editableObj);
    var oldJSON = this.getObjJson(this.obj);
    for (var key in newJSON) {
      if (excludedProps.indexOf(key) > -1) continue;
      props.push(key);
    }
    for (var key in oldJSON) {
      if (excludedProps.indexOf(key) > -1 || props.indexOf(key) > -1) continue;
      props.push(key);
    }
    return props;
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
  private getObjJson(obj: any = null): any {
    if (!obj) obj = this.obj;
    var jsonObj = new Survey.JsonObject();
    jsonObj.lightSerializing = true;
    return jsonObj.toJsonObject(obj);
  }
}
