import * as Survey from "survey-knockout";

export class EditableObject {
  public static isCopyObject(obj: any): boolean {
    return !!obj && obj["isCopy"];
  }
  public static getSurvey(object: any): Survey.SurveyModel {
    if (
      object instanceof Survey.SurveyModel ||
      (!!object && !!object.getType && object.getType() == "survey")
    ) {
      return EditableObject.getOriginalSurvey(object);
    }
    if (object instanceof Survey.MatrixDropdownColumn && !!object.colOwner)
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
  public static getOriginalSurvey(
    survey: Survey.SurveyModel
  ): Survey.SurveyModel {
    return EditableObject.getOriginalObject(survey);
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
    if (propertyName == "pages") return false; //We update pages in our own way
    return !Survey.Helpers.isTwoValueEquals(
      this.obj[propertyName],
      this.editableObj[propertyName]
    );
  }
  public apply(propertyName: string) {
    if (propertyName == "pages") {
      this.applyPages();
      return;
    }
    if (propertyName == "bindings") {
      this.obj.bindings.setJson(this.editableObj.bindings.getJson());
      return;
    }
    if (!this.isPropertyChanged(propertyName)) return;
    if (
      Array.isArray(this.obj[propertyName]) &&
      Array.isArray(this.editableObj[propertyName])
    ) {
      var dest = this.obj[propertyName];
      var src = this.editableObj[propertyName];
      dest.splice(0, dest.length);
      for (var i = 0; i < src.length; i++) {
        dest.push(src[i]);
      }
    } else {
      this.obj[propertyName] = this.editableObj[propertyName];
    }
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
    if(!!this.obj["page"] && this.obj["page"] !== this.editableObj["page"]) {
      props.push("page");
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
    if(!!this.obj["page"]) {
      res["copyPageValue"] = this.obj["page"];
      Object.defineProperty(res, "page", {
        get: function () { return res["copyPageValue"]; },
        set: function(value) { res["copyPageValue"] = value; }
      });
    }
    res["isCopy"] = true;
    res["originalObj"] = this.obj;
    if (res.getType() == "survey") {
      var pages = (<any>res).pages;
      for (var i = 0; i < pages.length; i++) {
        pages[i]["originalObj"] = (<any>this.obj).pages[i];
      }
    }
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
  private applyPages() {
    var editablePages = (<any>this.editableObj).pages;
    var pages = (<any>this.obj).pages;
    for (var i = 0; i < editablePages.length; i++) {
      var editablePage = editablePages[i];
      var page = editablePages[i].originalObj;
      if (!!page) {
        page.name = editablePage.name;
        page.title = editablePage.title;
        page.description = editablePage.description;
      } else {
        editablePage.originalObj = editablePage;
        pages.splice(i, 0, editablePage);
      }
    }
    if (!this.isPageOrderChagned()) return;
    Object.getPrototypeOf(pages).splice.call(pages, 0, pages.length);
    for (var i = 0; i < editablePages.length; i++) {
      if (i < editablePages.length - 1) {
        Object.getPrototypeOf(pages).push.call(
          pages,
          editablePages[i].originalObj
        );
      } else {
        //send notification about changes
        pages.push(editablePages[i].originalObj);
      }
    }
    (<any>this.obj).currentPageNo = 0;
  }
  private isPageOrderChagned() {
    var editablePages = (<any>this.editableObj).pages;
    var pages = (<any>this.obj).pages;
    if (editablePages.length !== pages.length) return true;
    for (var i = 0; i < editablePages.length; i++) {
      if (editablePages[i].originalObj !== pages[i]) return true;
    }
    return false;
  }
}
