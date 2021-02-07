import { Base, JsonObjectProperty, Serializer } from "survey-knockout";
import { editorLocalization } from "../editorLocalization";

export class PropertiesHelpTexts {
  private static instanceValue: PropertiesHelpTexts;
  public static get instance(): PropertiesHelpTexts {
    if (!PropertiesHelpTexts.instanceValue) {
      PropertiesHelpTexts.instanceValue = new PropertiesHelpTexts();
    }
    return PropertiesHelpTexts.instanceValue;
  }
  private locsCache = {};

  constructor() {}
  public reset() {
    this.locsCache = {};
  }
  public getHelpText(obj: Base, prop: JsonObjectProperty): string {
    if (!obj || !prop) return "";
    var id = this.getCacheId(obj, prop);
    var locName = this.locsCache[id];
    if (locName === undefined) {
      locName = this.getPropertyHelpLocName(obj, prop);
      this.locsCache[id] = locName;
    }
    return this.hasLocString(locName) ? this.getLocString(locName) : "";
  }
  private getCacheId(obj: Base, prop: JsonObjectProperty): string {
    return obj.getType() + "_" + prop.name;
  }
  private getPropertyHelpLocName(obj: Base, prop: JsonObjectProperty): string {
    var classNames = this.getHelpPropertyClassNames(obj, prop);
    for (var i = 0; i < classNames.length; i++) {
      let locName = "pehelp." + classNames[i] + "_" + prop.name;
      if (this.hasLocString(locName)) return locName;
    }
    let locName = "pehelp." + prop.name;
    if (this.hasLocString(locName)) return locName;
    locName = "pe." + prop.type + "Help";
    return this.hasLocString(locName) ? locName : "";
  }
  private getHelpPropertyClassNames(
    obj: Base,
    prop: JsonObjectProperty
  ): Array<string> {
    if (!obj) return [];
    var type = obj.getType();
    var res = [];
    var typeInfo = Serializer.findClass(type);
    while (!!typeInfo) {
      res.push(typeInfo.name);
      if (typeInfo.find(prop.name)) return res;
      typeInfo = !!typeInfo.parentName
        ? Serializer.findClass(typeInfo.parentName)
        : null;
    }
    return res;
  }
  private hasLocString(name: string) {
    return editorLocalization.hasString(name);
  }
  private getLocString(name: string) {
    return editorLocalization.getString(name);
  }
}
