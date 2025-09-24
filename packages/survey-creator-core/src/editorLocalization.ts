import { enStrings } from "./localization/english";
import { capitalize } from "./utils/utils";
import { surveyLocalization, Serializer } from "survey-core";

const renamedKeys = {};
renamedKeys["tabs.preview"] = "ed.testSurvey";
renamedKeys["tabs.theme"] = "ed.themeSurvey";
renamedKeys["tabs.translation"] = "ed.translation";
renamedKeys["tabs.designer"] = "ed.designer";
renamedKeys["tabs.editor"] = "ed.jsonEditor";
renamedKeys["tabs.json"] = "tabs.editor";
renamedKeys["tabs.logic"] = "ed.logic";

export class EditorLocalization {
  private defaultLocaleValue: string = "en";
  private currentLocaleValue: string = "";
  private presetStringsValues: any;
  public camelCaseBreaking = true;
  public locales = {};
  public get defaultLocale(): string { return this.defaultLocaleValue; }
  public set defaultLocale(val: string) {
    if (!val) val = "en";
    if (val !== this.defaultLocale) {
      this.defaultLocaleValue = val;
    }
  }
  public get currentLocale(): string { return this.currentLocaleValue; }
  public set currentLocale(val: string) {
    if (!val) val = "";
    if (val !== this.currentLocale) {
      this.currentLocaleValue = val;
    }
  }
  public get locale(): string { return this.currentLocale || this.defaultLocale; }
  public get presetStrings(): any { return this.presetStringsValues; }
  public set presetStrings(val: any) {
    this.presetStringsValues = val;
  }
  public getString(strName: string, locale: string = null): string {
    if (!strName) return strName;
    const oldVal = this.getOldKeysString(strName, locale);
    if (!!oldVal) return oldVal;
    const path = strName.split(".");
    return this.getStringByPath(path, locale);
  }
  public getStringByPath(path: string[], locale: string = null): string {
    if (!locale) locale = this.currentLocale;
    const loc = this.getLocale(locale);
    const defaultLocale = this.getDefaultStrings();
    const locs = [];
    if (!!loc) locs.push(loc);
    if (!!locale && locale.indexOf("-") > -1) {
      const baseLocale = this.getLocale(locale.substring(0, locale.indexOf("-")));
      if (!!baseLocale) locs.push(baseLocale);
    }
    if (locs.length === 0 || locs[locs.length - 1] !== defaultLocale) {
      locs.push(defaultLocale);
    }
    const presetLoc = this.getPresetLocale(locale);
    if (!!presetLoc) {
      locs.unshift(presetLoc);
    }
    locs.push(defaultStrings);
    for (let i = 0; i < locs.length; i ++) {
      const res = this.getStringByLocale(path, locs[i]);
      if (!!res || res === "") return res;
    }
    return path[path.length - 1];
  }
  public hasString(strName: string, locale: string = null): boolean {
    return this.getStringByLocale(strName.split("."), this.getLocale(locale)) !== undefined;
  }
  private getStringByLocale(path: string[], loc: any): string {
    let obj = loc;
    for (let i = 0; i < path.length; i++) {
      if (typeof obj === "string") return undefined;
      obj = obj[path[i]];
      if (!obj && obj !== "") return undefined;
    }
    return obj;
  }
  public getLocaleName(loc: string, defaultLocale: string = null, inEnglish?: boolean): string {
    if (!defaultLocale) {
      defaultLocale = surveyLocalization.defaultLocale;
    }
    let name = surveyLocalization.getLocaleName(loc || defaultLocale, inEnglish);
    if (name === loc) return name;
    name = capitalize(name);
    if (!loc) {
      name = editorLocalization.getString("ed.defaultLocale")["format"](name);
    }
    return name || loc;
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
    let obj = this.getPropertyInfoInEditorByType(typeName, propName, "pe");
    if (!obj) {
      obj = this.getStringByPath(["pe", propName]);
    }
    if (this.stringsDiff(obj, propName)) return obj;
    return this.getPropertyName(propName, defaultName);
  }
  public getPropertyHelpInEditor(typeName: string, propName: string, propType: string = undefined): string {
    const res = this.getPropertyHelpInEditorCore(typeName, propName, "pehelp");
    if (!!res) return res;
    const loc = this.getLocale();
    return !!propType && !!loc && !!loc.pe ? loc.pe[propType + "Help"] : undefined;
  }
  public getPropertyPlaceholder(typeName: string, propName: string): string {
    let str = this.getPropertyHelpInEditorCore(typeName, propName, "peplaceholder");
    if (!!str) return (str === " ") ? null : str;
    const loc = this.getLocale();
    if (!!loc && !!loc.peplaceholder) {
      str = loc.peplaceholder[propName];
    }
    if (!!str) return str;
    return !!loc && !!loc.pe ? loc.pe[propName + "_placeholder"] : undefined;
  }
  private getPropertyHelpInEditorCore(typeName: string, propName: string, suffix: string): string {
    let str = this.getPropertyInfoInEditorByType(typeName, propName, suffix);
    if (!!str) return (str === " ") ? null : str;
    const locs = this.getLocalesWithPreset();
    for (let i = 0; i < locs.length; i ++) {
      const loc = locs[i];
      if (!!loc[suffix] && loc[suffix][propName]) return loc[suffix][propName];
    }
    return undefined;
  }
  private getPropertyInfoInEditorByType(typeName: string, propName: string, postFix: string): string {
    if (!typeName) return undefined;
    const locs = this.getLocalesWithPreset();
    for (let i = 0; i < locs.length; i ++) {
      const res = this.getPropertyInfoInEditorByTypeCore(typeName, propName, postFix, locs[i]);
      if (!!res) return res;
    }
    return undefined;
  }
  private getPropertyInfoInEditorByTypeCore(typeName: string, propName: string, postFix: string, loc: any): string {
    let peClass = this.getObjInEditorByTypeCore(typeName, postFix, loc);
    while(!!peClass) {
      const res = peClass.props[propName];
      if (!!res && typeof res !== "function") return peClass.props[propName];
      peClass = peClass.parent;
    }
    return undefined;
  }
  private getObjInEditorByTypeCore(typeName: string, postFix: string, loc: any): any {
    if (!typeName) return undefined;
    const pe = !!loc ? loc[postFix] : undefined;
    if (!pe) return undefined;
    const propIndex = typeName.indexOf("@");
    if (propIndex > -1) {
      const parentRes = this.getObjInEditorByTypeCore(typeName.substring(0, propIndex), postFix, loc);
      if (!pe[typeName]) {
        return parentRes;
      }
      const res = { props: pe[typeName], parent: parentRes };
      return res;
    }
    const classNames = [];
    let classInfo = Serializer.findClass(typeName);
    let res = undefined;
    while(!!classInfo) {
      const tName = classInfo.name;
      classNames.push(tName);
      if (pe[tName]) {
        res = { props: pe[tName], parent: this.getObjInEditorByTypeCore(classInfo.parentName, postFix, loc) };
        break;
      }
      if (!classInfo.parentName) break;
      classInfo = Serializer.findClass(classInfo.parentName);
    }
    return res;
  }
  public getProperty(strName: string, defaultName: string = null): string {
    var obj = this.getStringByPath(["p", strName]);
    if (this.stringsDiff(obj, strName)) return obj;
    var pos = (strName + "").indexOf("_");
    if (pos < -1) return this.getAutoPropertyName(obj, defaultName);
    strName = (strName + "").substring(pos + 1);
    obj = this.getStringByPath(["p", strName]);
    if (this.stringsDiff(obj, strName)) return obj;
    return this.getAutoPropertyName(obj, defaultName);
  }
  public convertToCamelCase(value: string, toLowCase: boolean = false): string {
    if (!value) return value;
    value = value.trim();
    if (value.indexOf(" ") > -1) return value;
    let hasLowCase = false;
    for (var i = 0; i < value.length; i++) {
      if (value[i] !== value[i].toUpperCase()) {
        hasLowCase = true;
        break;
      }
    }
    if (!hasLowCase) return value;
    let res = value[0].toUpperCase();
    let isPrevUpperCase = false;
    const isUpperCase = (index: number) : boolean => {
      if (index >= value.length) return false;
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
    const res = this.getStringByPath(["pv", propName, value]);
    if (!!res && res !== value) return res;
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
    return (locale ? this.getLocaleStrings(locale) : this.getDefaultStrings()) || this.getLocaleStrings("en");
  }
  public getLocaleStrings(loc: string): any {
    if (!loc) loc = this.defaultLocale;
    if (loc === "en") return defaultStrings;
    return this.locales[loc];
  }
  public setupLocale(loc: string, strings: any): void {
    this.locales[loc] = strings;
  }
  private getPresetLocale(locale?: string): any {
    if (!this.presetStrings) return undefined;
    const presetLoc = locale || this.currentLocale || this.defaultLocale;
    return this.presetStrings[presetLoc];
  }
  private getLocalesWithPreset(locale?: string): any {
    const res = [];
    const presetLoc = this.getPresetLocale(locale);
    if (presetLoc) {
      res.push(presetLoc);
    }
    const loc = this.getLocale(locale);
    if (loc) {
      res.push(loc);
    }
    return res;
  }
  private getValueInternal(value: any, prefix: string, locale: string = null): string {
    if (!value || (value.indexOf && value.indexOf(".") > -1)) return "";
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
    if (!!loc && loc !== "en") {
      const strs = this.getLocale(loc);
      if (!!strs) return strs;
    }
    return defaultStrings;
  }
  private stringsDiff(str1: any, str2: any): boolean {
    if (typeof str1 === "function" || typeof str2 === "function") return false;
    return str1 !== str2;
  }
  private getOldKeysString(str: string, locale: string = null): string {
    const reNamedVal = renamedKeys[str];
    if (!reNamedVal) return undefined;
    const path = reNamedVal.split(".");
    const res = this.getStringByPath(path, locale);
    return res !== path[path.length - 1] ? res : undefined;
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

export function getLocaleStrings(loc: string): any {
  return editorLocalization.getLocaleStrings(loc);
}

export var defaultStrings = enStrings;
export function setupLocale(localeConfig: { localeCode: string, strings: any }): void {
  editorLocalization.setupLocale(localeConfig.localeCode, localeConfig.strings);
}
