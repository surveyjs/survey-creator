import { editorLocalization } from "./editorLocalization";

export interface ILocalizableJSON {
  (locale: string): any;
  isLocalizableJSON: boolean;
  strName?: string;
}
export function localizableJSON(strName: string): ILocalizableJSON {
  const res: any = (locale: string): any => editorLocalization.getJsonValue(strName, locale);
  res.isLocalizableJSON = true;
  res.strName = strName;
  return res;
}
export function isLocalizableJSON(val: any): boolean {
  return typeof val === "function";
}
export function resolveLocalizableJSON(json: any, locale?: string): any {
  if (json === undefined || json === null) return json;
  if (!locale) locale = editorLocalization.locale;
  return resolveJSONCore(json, locale);
}
function resolveJSONCore(val: any, locale: string): any {
  if (isLocalizableJSON(val)) return resolveJSONCore(val(locale), locale);
  if (Array.isArray(val)) return val.map(item => resolveJSONCore(item, locale));
  if (!!val && typeof val === "object") {
    const res: any = {};
    for (let key in val) {
      const propValue = resolveJSONCore(val[key], locale);
      if (propValue !== undefined) {
        res[key] = propValue;
      }
    }
    return res;
  }
  return val;
}
