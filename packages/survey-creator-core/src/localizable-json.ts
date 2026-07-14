import { editorLocalization } from "./editorLocalization";

/**
 * A function that returns a part of JSON for the passed locale.
 */
export interface ILocalizableJSON {
  (locale: string): any;
  isLocalizableJSON: boolean;
  strName?: string;
}

/**
 * Marks a part of JSON as localizable.
 *
 * The returned function is called with the locale when the JSON is resolved. It takes the JSON from the
 * localization dictionary by `strName`, for example "defaultJson.choices". If the dictionary for the current
 * locale doesn't contain it, then the default and English dictionaries are used.
 * @see resolveLocalizableJSON
 */
export function localizableJSON(strName: string): ILocalizableJSON {
  const res: any = (locale: string): any => editorLocalization.getJsonValue(strName, locale);
  res.isLocalizableJSON = true;
  res.strName = strName;
  return res;
}
export function isLocalizableJSON(val: any): boolean {
  return typeof val === "function";
}
/**
 * Returns a copy of the JSON where every localizable part is replaced with the value for the passed locale.
 *
 * If the locale is not passed, then the current Creator UI locale is used.
 * @see localizableJSON
 */
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
