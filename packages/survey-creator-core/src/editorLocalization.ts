import { enStrings } from "./localization/english";
import { capitalize } from "./utils/utils";
import { surveyLocalization, Serializer } from "survey-core";

export class EditorLocalization {
  public camelCaseBreaking = true;
  public currentLocale = "";
  public locales = {};
  private peByClass = {};
  private peHelpByClass = {};
  public reset() : void {
    this.peByClass = {};
    this.peHelpByClass = {};
  }
  public getString(strName: string, locale: string = null): string {
    var loc = this.getLocale(locale);
    var defaultLocale = this.getLocale("en");
    var path = strName.split(".");
    var obj = loc;
    for (var i = 0; i < path.length; i++) {
      obj = obj[path[i]];
      if (!obj && obj !== "") {
        if (loc === defaultLocale) return path[i];
        return this.getString(strName, "en");
      }
    }
    return obj;
  }
  public hasString(strName: string, locale: string = null): boolean {
    var loc = this.getLocale(locale);
    var path = strName.split(".");
    var obj = loc;
    for (var i = 0; i < path.length; i++) {
      obj = obj[path[i]];
      if (!obj && obj !== "") return false;
    }
    return true;
  }
  public getLocaleName(loc: string, defaultLocale: string = null): string {
    let localeNames = surveyLocalization["localeNames"];
    if (!defaultLocale) {
      defaultLocale = surveyLocalization.defaultLocale;
    }
    let res = !!loc
      ? capitalize(localeNames[loc])
      : editorLocalization
        .getString("ed.defaultLocale")
        ["format"](capitalize(localeNames[defaultLocale]));
    return !!res ? res : loc;
  }
  public getPropertyName(strName: string, defaultName: string = null): string {
    var obj = this.getProperty(strName, defaultName);
    var name = obj["name"];
    if (!!name) {
      if (name != strName) return name;
      return this.getAutoPropertyName(name, defaultName);
    }
    return obj;
  }
  public getPropertyTitle(strName: string): string {
    var obj = this.getProperty(strName);
    if (obj["title"]) return obj["title"];
    return "";
  }
  public getPropertyNameInEditor(typeName: string, propName: string, defaultName: string = null): string {
    let obj = this.getPropertyInfoInEditorByType(typeName, propName, this.peByClass, "pe");
    if(!obj) {
      obj = this.getString("pe." + propName);
    }
    if (obj !== propName) return obj;
    return this.getPropertyName(propName, defaultName);
  }
  public getPropertyHelpInEditor(typeName: string, propName: string, propType: string = undefined): string {
    let helpStr = this.getPropertyInfoInEditorByType(typeName, propName, this.peHelpByClass, "pehelp");
    if(!!helpStr) return (helpStr === " ") ? null: helpStr;
    const loc = this.getLocale();
    if(!!loc && !!loc.pehelp) {
      helpStr = loc.pehelp[propName];
    }
    if(!!helpStr) return helpStr;
    if(!!propType && !!loc.pe) return loc.pe[propType + "Help"];
    return undefined;
  }
  private getPropertyInfoInEditorByType(typeName: string, propName: string, peInfoByClass: any, postFix: string): string {
    if(!typeName) return undefined;
    let peClass = peInfoByClass[typeName];
    if(peClass === undefined) {
      peClass = this.getObjInEditorByType(typeName, peInfoByClass, postFix);
    }
    while(!!peClass) {
      if(!!peClass.props[propName]) return peClass.props[propName];
      peClass = peClass.parent;
    }
    return undefined;
  }
  private getObjInEditorByType(typeName: string, peInfoByClass: any, postFix: string): any {
    if(!typeName) return undefined;
    const peClass = peInfoByClass[typeName];
    if(peClass !== undefined) peClass;
    const loc: any = this.getLocale();
    const pe = !!loc ? loc[postFix] : undefined;
    if(!pe) return undefined;
    let classInfo = Serializer.findClass(typeName);
    const classNames = [];
    let res = undefined;
    while(!!classInfo) {
      const tName = classInfo.name;
      res = peInfoByClass[typeName];
      if(!!res) break;
      classNames.push(tName);
      if(pe[tName]) {
        res = { props: pe[tName], parent: this.getObjInEditorByType(classInfo.parentName, peInfoByClass, postFix) };
        break;
      }
      if(!classInfo.parentName) break;
      classInfo = Serializer.findClass(classInfo.parentName);
    }
    for(var i = 0; i < classNames.length; i ++) {
      peInfoByClass[classNames[i]] = res;
    }
    return res;
  }
  public getProperty(strName: string, defaultName: string = null): string {
    var obj = this.getString("p." + strName);
    if (obj !== strName) return obj;
    var pos = strName.indexOf("_");
    if (pos < -1) return this.getAutoPropertyName(obj, defaultName);
    strName = strName.substring(pos + 1);
    obj = this.getString("p." + strName);
    if (obj !== strName) return obj;
    return this.getAutoPropertyName(obj, defaultName);
  }
  public convertToCamelCase(value: string, toLowCase: boolean = false): string {
    if (!value) return value;
    value = value.trim();
    if(value.indexOf(" ") > -1) return value;
    let hasLowCase = false;
    for (var i = 0; i < value.length; i++) {
      if(value[i] !== value[i].toUpperCase()) {
        hasLowCase = true;
        break;
      }
    }
    if(!hasLowCase) return value;
    let res = value[0].toUpperCase();
    let isPrevUpperCase = false;
    const isUpperCase = (index: number) : boolean => {
      if(index >= value.length) return false;
      return value[i].toUpperCase() === value[i];
    };
    for (var i = 1; i < value.length; i++) {
      if (!isPrevUpperCase && isUpperCase(i)) {
        res += " ";
      }
      const requireConvert = !isPrevUpperCase && !isUpperCase(i + 1);
      res += requireConvert ? value[i].toLowerCase() : value[i];
      isPrevUpperCase = isUpperCase(i);
    }
    if (toLowCase) {
      res = res.toLowerCase();
    }
    return res;
  }
  private getAutoPropertyName(propName: string, defaultName: string = null): string {
    if (!!defaultName) return defaultName;
    if (!propName || !this.camelCaseBreaking) return propName;
    return this.convertToCamelCase(propName);
  }
  public getPropertyValueInEditor(propName: string, value: any): string {
    const loc = this.getLocale();
    if(!!loc && !!loc.pv && !!loc.pv[propName]) {
      const res = loc.pv[propName][value];
      if(!!res) return res;
    }
    return this.getPropertyValue(value);
  }
  public getPropertyValue(value: any, locale: string = null): string {
    return this.getValueInternal(value, "pv", locale);
  }
  public getValidatorName(name: string, locale: string = null): string {
    return this.getValueInternal(name, "validators", locale);
  }
  public getTriggerName(name: string, locale: string = null): string {
    return this.getValueInternal(name, "triggers", locale);
  }
  public getLocale(locale?: string): any {
    if (!locale) locale = this.currentLocale;
    var loc = locale ? this.locales[locale] : defaultStrings;
    if (!loc) loc = defaultStrings;
    return loc;
  }
  private getValueInternal(value: any, prefix: string, locale: string = null): string {
    if (value === "" || value === null || value === undefined) return "";
    value = value.toString();
    var loc = this.getLocale(locale);
    var res = loc[prefix] ? loc[prefix][value] : null;
    if (!res) res = defaultStrings[prefix][value];
    if (!!res) return res;
    return this.camelCaseBreaking
      ? this.convertToCamelCase(value, false)
      : value;
  }
  public getLocales(): Array<string> {
    var res = [];
    res.push("");
    for (var key in this.locales) {
      res.push(key);
    }
    return res;
  }
}

export var editorLocalization = new EditorLocalization();
surveyLocalization.onGetExternalString = (name: string, locale: string): string => {
  const res = editorLocalization.getString(name, locale);
  return res !== name ? res : "";
};

export function getLocString(strName: string, locale: string = null) {
  return editorLocalization.getString(strName, locale);
}

export var defaultStrings = enStrings;
