import {
  Base,
  Helpers,
  JsonObject,
  MatrixDropdownColumn,
  Serializer,
  SurveyModel,
} from "survey-core";

export class EditableObject {
  public static isCopyObject(obj: any): boolean {
    return !!obj && obj["isCopy"];
  }
  public static getSurvey(object: any): SurveyModel {
    if (
      object instanceof SurveyModel ||
      (!!object && !!object.getType && object.getType() == "survey")
    ) {
      return EditableObject.getOriginalSurvey(object);
    }
    if (object instanceof MatrixDropdownColumn && !!object.colOwner)
      return object.colOwner["survey"];
    if (!!object) {
      if (!!object.survey)
        return EditableObject.getOriginalSurvey(object.survey);
      if (!!object.owner) return EditableObject.getSurvey(object.owner);
      if (!!object.errorOwner)
        return EditableObject.getSurvey(object.errorOwner);
      if (!!object.locOwner) return EditableObject.getSurvey(object.locOwner);
    }
    var original = EditableObject.getOriginalObject(object);
    if (!!original && original !== object)
      return EditableObject.getSurvey(original);
    return null;
  }
  public static getOriginalObject(object: any): any {
    return !!object && !!object["originalObj"] ? object["originalObj"] : object;
  }
  public static getOriginalSurvey(survey: SurveyModel): SurveyModel {
    return EditableObject.getOriginalObject(survey);
  }

  private objValue: Base;
  private editableObjValue: Base;
  public constructor(obj: Base) {
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
    return !Helpers.isTwoValueEquals(
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
  protected createEditableObj(): Base {
    var type = this.obj.getType();
    var res = <Base>Serializer.createClass(type);
    if (res == null && type == "survey") {
      res = new SurveyModel(); // TODO: Create Survey via platform Provider/Factory
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
    res["originalObj"] = this.obj;
    return res;
  }
  private assignProperties(obj: any) {
    new JsonObject().toObject(this.getObjJson(), obj);
  }
  private getObjJson(obj: any = null): any {
    if (!obj) obj = this.obj;
    var jsonObj = new JsonObject();
    jsonObj.lightSerializing = true;
    return jsonObj.toJsonObject(obj);
  }
}
