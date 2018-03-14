import { enStrings } from "./localization/english";

export var editorLocalization = {
  currentLocale: "",
  locales: {},
  getString: function(strName: string, locale: string = null) {
    var loc = this.getLocale(locale);
    var path = strName.split(".");
    var obj = loc;
    for (var i = 0; i < path.length; i++) {
      obj = obj[path[i]];
      if (!obj) {
        if (loc === defaultStrings) return path[i];
        return this.getString(strName, "en");
      }
    }
    return obj;
  },
  getPropertyName: function(strName: string, locale: string = null) {
    var obj = this.getProperty(strName, locale);
    if (obj["name"]) return obj["name"];
    return obj;
  },
  getPropertyTitle: function(strName: string, locale: string = null) {
    var obj = this.getProperty(strName, locale);
    if (obj["title"]) return obj["title"];
    return "";
  },
  getProperty: function(strName: string, locale: string = null) {
    var obj = this.getString("p." + strName, locale);
    if (obj !== strName) return obj;
    var pos = strName.indexOf("_");
    if (pos < -1) return obj;
    strName = strName.substr(pos + 1);
    return this.getString("p." + strName, locale);
  },
  getPropertyValue: function(value: any, locale: string = null) {
    return this.getValueInternal(value, "pv", locale);
  },
  getValidatorName: function(name: string, locale: string = null) {
    return this.getValueInternal(name, "validators", locale);
  },
  getTriggerName: function(name: string, locale: string = null) {
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
    return res ? res : value;
  },
  getLocales: function(): Array<string> {
    var res = [];
    res.push("");
    for (var key in this.locales) {
      res.push(key);
    }
    return res;
  }
};

export var defaultStrings = enStrings;
