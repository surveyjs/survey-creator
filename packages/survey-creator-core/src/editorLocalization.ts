import { enStrings } from "./localization/english";
import * as Survey from "survey-core";

export var editorLocalization = {
  camelCaseBreaking: true,
  currentLocale: "",
  locales: {},
  getString: function (strName: string, locale: string = null) {
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
  },
  hasString: function (strName: string, locale: string = null) {
    var loc = this.getLocale(locale);
    var path = strName.split(".");
    var obj = loc;
    for (var i = 0; i < path.length; i++) {
      obj = obj[path[i]];
      if (!obj && obj !== "") return false;
    }
    return true;
  },
  getLocaleName: function (loc: string, defaultLocale: string = null): string {
    let localeNames = Survey.surveyLocalization["localeNames"];
    if (!defaultLocale) {
      defaultLocale = Survey.surveyLocalization.defaultLocale;
    }
    let res = !!loc
      ? localeNames[loc]
      : editorLocalization
        .getString("ed.defaultLocale")
        ["format"](localeNames[defaultLocale]);
    return !!res ? res : loc;
  },
  getPropertyName: function (strName: string, defaultName: string = null) {
    var obj = this.getProperty(strName, defaultName);
    var name = obj["name"];
    if (!!name) {
      if (name != strName) return name;
      return this.getAutoPropertyName(name, defaultName);
    }
    return obj;
  },
  getPropertyTitle: function (strName: string) {
    var obj = this.getProperty(strName);
    if (obj["title"]) return obj["title"];
    return "";
  },
  getPropertyNameInEditor: function (
    strName: string,
    defaultName: string = null
  ) {
    var obj = this.getString("pe." + strName);
    if (obj !== strName) return obj;
    return this.getPropertyName(strName, defaultName);
  },
  getProperty: function (strName: string, defaultName: string = null) {
    var obj = this.getString("p." + strName);
    if (obj !== strName) return obj;
    var pos = strName.indexOf("_");
    if (pos < -1) return this.getAutoPropertyName(obj, defaultName);
    strName = strName.substr(pos + 1);
    obj = this.getString("p." + strName);
    if (obj !== strName) return obj;
    return this.getAutoPropertyName(obj, defaultName);
  },
  convertToCamelCase(value: string, toLowCase: boolean = false): string {
    if (!value) return value;
    var hasLowCase = false;
    for (var i = 0; i < value.length; i++) {
      if(value[i] !== value[i].toUpperCase()) {
        hasLowCase = true;
        break;
      }
    }
    if(!hasLowCase) return value;
    var res = value[0].toUpperCase();
    for (var i = 1; i < value.length; i++) {
      if (value[i] === value[i].toUpperCase()) {
        res += " ";
      }
      res += value[i].toLowerCase();
    }
    if (toLowCase) {
      res = res.toLowerCase();
    }
    return res;
  },
  getAutoPropertyName: function (propName: string, defaultName: string = null) {
    if (!!defaultName) return defaultName;
    if (!propName || !this.camelCaseBreaking) return propName;
    return this.convertToCamelCase(propName);
  },
  getPropertyValue: function (value: any, locale: string = null) {
    return this.getValueInternal(value, "pv", locale);
  },
  getValidatorName: function (name: string, locale: string = null) {
    return this.getValueInternal(name, "validators", locale);
  },
  getTriggerName: function (name: string, locale: string = null) {
    return this.getValueInternal(name, "triggers", locale);
  },
  getLocale(locale: string) {
    if (!locale) locale = this.currentLocale;
    var loc = locale ? this.locales[locale] : defaultStrings;
    if (!loc) loc = defaultStrings;
    return loc;
  },
  getValueInternal(value: any, prefix: string, locale: string = null) {
    if (value === "" || value === null || value === undefined) return "";
    value = value.toString();
    var loc = this.getLocale(locale);
    var res = loc[prefix] ? loc[prefix][value] : null;
    if (!res) res = defaultStrings[prefix][value];
    if (!!res) return res;
    return this.camelCaseBreaking
      ? this.convertToCamelCase(value, true)
      : value;
  },
  getLocales: function (): Array<string> {
    var res = [];
    res.push("");
    for (var key in this.locales) {
      res.push(key);
    }
    return res;
  }
};

export function getLocString(strName: string, locale: string = null) {
  return editorLocalization.getString(strName, locale);
}

export var defaultStrings = enStrings;
