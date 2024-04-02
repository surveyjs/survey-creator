import { enStrings } from "./localization/english";
import { capitalize } from "./utils/utils";
import { surveyLocalization, Serializer } from "survey-core";

export class EditorLocalization {
  private defaultLocaleValue: string = "en";
  private currentLocaleValue: string = "";
  public camelCaseBreaking = true;
  public locales = {};
  private peByClass = {};
  private peHelpByClass = {};
  private pePlaceholderByClass = {};
  public reset() : void {
    this.peByClass = {};
    this.peHelpByClass = {};
    this.pePlaceholderByClass = {};
  }
  public get defaultLocale(): string { return this.defaultLocaleValue; }
  public set defaultLocale(val: string) {
    if(!val) val = "en";
    if(val !== this.defaultLocale) {
      this.defaultLocaleValue = val;
      this.reset();
    }
  }
  public get currentLocale(): string { return this.currentLocaleValue; }
  public set currentLocale(val: string) {
    if(!val) val = "";
    if(val !== this.currentLocale) {
      this.currentLocaleValue = val;
      this.reset();
    }
  }
  public getString(strName: string, locale: string = null): string {
    if(!locale) locale = this.currentLocale;
    const loc = this.getLocale(locale);
    const defaultLocale = this.getDefaultStrings();
    const locs = [];
    if(!!loc) locs.push(loc);
    if(!!locale && locale.indexOf("-") > -1) {
      const baseLocale = this.getLocale(locale.substring(0, locale.indexOf("-")));
      if(!!baseLocale) locs.push(baseLocale);
    }
    if(locs.length === 0 || locs[locs.length - 1] !== defaultLocale) {
      locs.push(defaultLocale);
    }
    for(let i = 0; i < locs.length; i ++) {
      const res = this.getStringByLocale(strName, locs[i]);
      if(!!res || res === "") return res;
    }
    const path = strName.split(".");
    return path[path.length - 1];
  }
  public hasString(strName: string, locale: string = null): boolean {
    return this.getStringByLocale(strName, this.getLocale(locale)) !== undefined;
  }
  private getStringByLocale(strName: string, loc: any): string {
    const path = strName.split(".");
    let obj = loc;
    for (let i = 0; i < path.length; i++) {
      if(typeof obj === "string") return undefined;
      obj = obj[path[i]];
      if (!obj && obj !== "") return undefined;
    }
    return obj;
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
      if (this.stringsDiff(name, strName)) return name;
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
    if (this.stringsDiff(obj, propName)) return obj;
    return this.getPropertyName(propName, defaultName);
  }
  public getPropertyHelpInEditor(typeName: string, propName: string, propType: string = undefined): string {
    const res = this.getPropertyHelpInEditorCore(typeName, propName, this.peHelpByClass, "pehelp");
    if(!!res) return res;
    const loc = this.getLocale();
    return !!propType && !!loc && !!loc.pe ? loc.pe[propType + "Help"] : undefined;
  }
  public getPropertyPlaceholder(typeName: string, propName: string): string {
    let str = this.getPropertyHelpInEditorCore(typeName, propName, this.pePlaceholderByClass, "peplaceholder");
    if(!!str) return (str === " ") ? null: str;
    const loc = this.getLocale();
    if(!!loc && !!loc.peplaceholder) {
      str = loc.peplaceholder[propName];
    }
    if(!!str) return str;
    return !!loc && !!loc.pe ? loc.pe[propName + "_placeholder"] : undefined;
  }
  private getPropertyHelpInEditorCore(typeName: string, propName: string, data: any, suffix: string): string {
    let str = this.getPropertyInfoInEditorByType(typeName, propName, data, suffix);
    if(!!str) return (str === " ") ? null: str;
    const loc = this.getLocale();
    return !!loc && !!loc[suffix] ? loc[suffix][propName] : undefined;
  }
  private getPropertyInfoInEditorByType(typeName: string, propName: string, peInfoByClass: any, postFix: string): string {
    if(!typeName) return undefined;
    let peClass = peInfoByClass[typeName];
    if(peClass === undefined) {
      peClass = this.getObjInEditorByType(typeName, peInfoByClass, postFix);
    }
    while(!!peClass) {
      const res = peClass.props[propName];
      if(!!res && typeof res !== "function") return peClass.props[propName];
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
    const propIndex = typeName.indexOf("@");
    if(propIndex > -1) {
      const parentRes = this.getObjInEditorByType(typeName.substring(0, propIndex), peInfoByClass, postFix);
      if(!pe[typeName]) {
        peInfoByClass[typeName] = parentRes;
        return parentRes;
      }
      const res = { props: pe[typeName], parent: parentRes };
      peInfoByClass[typeName] = res;
      return res;
    }
    const classNames = [];
    let classInfo = Serializer.findClass(typeName);
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
    if (this.stringsDiff(obj, strName)) return obj;
    var pos = strName.indexOf("_");
    if (pos < -1) return this.getAutoPropertyName(obj, defaultName);
    strName = strName.substring(pos + 1);
    obj = this.getString("p." + strName);
    if (this.stringsDiff(obj, strName)) return obj;
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
      return value[index].toUpperCase() === value[index];
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
    var strs = locale ? this.locales[locale] : this.getDefaultStrings();
    if (!strs) strs = this.getDefaultStrings();
    return strs;
  }
  private getValueInternal(value: any, prefix: string, locale: string = null): string {
    if (value === "" || value === null || value === undefined) return "";
    value = value.toString();
    const res = this.getString(prefix + "." + value, locale);
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
  public getDefaultStrings(): any {
    const loc = this.defaultLocale;
    if(!!loc && loc !== "en") {
      const strs = this.getLocale(loc);
      if(!!strs) return strs;
    }
    return defaultStrings;
  }
  private stringsDiff(str1: any, str2: any): boolean {
    if(typeof str1 === "function" || typeof str2 === "function") return false;
    return str1 !== str2;
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
