import { LocalizableString, SurveyModel, Base, JsonObjectProperty, Serializer, MatrixCells, QuestionMatrixModel,
  settings as surveySettings, surveyLocalization, Helpers } from "survey-core";
import { ISurveyCreatorOptions } from "../creator-settings";
import { create } from "domain";

export function doMachineStringsTranslation(survey: SurveyModel, creatorOptions: ISurveyCreatorOptions, locales: Array<string>): void {
  locales.forEach(loc => {
    const locStrs = getUnlocalizedStrings(survey, this, loc);
    if (locStrs.length > 0) {
      const locStrsHash: any = {};
      const defaultStrs = new Array<string>();
      locStrs.forEach(locStr => {
        let text = locStr.getLocaleText("");
        if (!text && locStr.onGetTextCallback) {
          text = locStr.onGetTextCallback("");
          if (isTextNonTranslated(text)) {
            text = undefined;
          }
        }
        if (!!text) {
          if (!locStrsHash[text]) {
            locStrsHash[text] = [];
            defaultStrs.push(text);
          }
          locStrsHash[text].push(locStr);
        }
      });
      if (defaultStrs.length === 0) return;
      creatorOptions.doMachineTranslation(surveyLocalization.defaultLocale, loc, defaultStrs, (translated: Array<string>) => {
        if (!!translated && translated.length === defaultStrs.length) {
          creatorOptions.startUndoRedoTransaction("Translate to " + loc);
          for (let i = 0; i < defaultStrs.length; i++) {
            locStrsHash[defaultStrs[i]].forEach(locStr => locStr.setLocaleText(loc, translated[i]));
          }
          creatorOptions.stopUndoRedoTransaction();
        }
      });
    }
  });
}
export interface ICollectLocalizableStringsOptions {
  canShowProperty(reason: string, obj: Base, property: JsonObjectProperty, locStr: LocalizableString, isShowing: boolean, defaultValue?: any): boolean;
  onAddLocalizedString(obj: Base, property: JsonObjectProperty, locStr: LocalizableString, translatedObj: any): void;
  onCreateNewTranslateObj(obj: Base, property: JsonObjectProperty, translateObj: any): any;
}
export function collectLocalizableStrings(survey: SurveyModel, options: ICollectLocalizableStringsOptions, translateObj?: any): void {
  collectStringsByObj(survey, options, translateObj);
}
function getUnlocalizedStrings(survey: SurveyModel, creatorOptions: ISurveyCreatorOptions, loc: string): Array<LocalizableString> {
  const res = new Array<LocalizableString>();
  const options: ICollectLocalizableStringsOptions = {
    canShowProperty: (reason: string, obj: Base, property: JsonObjectProperty, locStr: LocalizableString, isShowing: boolean, defaultValue?: any): boolean => {
      return isShowing && (!locStr || !locStr?.isEmpty) || !!defaultValue;
    },
    onAddLocalizedString: (obj: Base, property: JsonObjectProperty, locStr: LocalizableString, translatedObj: any): void => {
      if (!locStr.getLocaleText(loc)) {
        res.push(locStr);
      }
    },
    onCreateNewTranslateObj: (obj: Base, property: JsonObjectProperty, translateObj: any): any => {
      return undefined;
    }
  };
  collectStringsByObj(survey, options, undefined);
  return res;
}

function collectStringsByObj(obj: Base, options: ICollectLocalizableStringsOptions, translateObj: any): void {
  if (isItemValueArray(obj)) {
    createItemValuesLocale(obj, options, translateObj);
    return;
  }
  if (!obj || !obj.getType) return;
  let properties = getLocalizedProperties(obj, options);
  for (let i = 0; i < properties.length; i++) {
    addLocalizationItem(obj, options, properties[i], translateObj);
  }
  properties = getArrayProperties(obj);
  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    var value = obj[property.name];
    //If ItemValue array?
    if (isItemValueArray(value)) {
      if (canShowProperty("itemvalue-array", options, obj, property, Array.isArray(value) && value.length > 0)) {
        createGroup(options, obj[property.name], property, translateObj);
      }
    } else {
      for (let i = 0; i < value.length; i++) {
        createGroup(options, value[i], property, translateObj);
      }
    }
  }
  createMatrixCellsGroup(options, obj, translateObj);
}
function isItemValueArray(val: any): boolean {
  return (
    !!val &&
    Array.isArray(val) &&
    val.length > 0 &&
    !!val[0] &&
    !!val[0]["getType"] &&
    !!val[0]["setData"] &&
    !!val[0]["setLocText"]
  );
}
function addLocalizationItem(obj: any, options: ICollectLocalizableStringsOptions, property: JsonObjectProperty, translateObj: any): void {
  const locStr = getLocalizableStr(obj, property);
  if (!locStr) return;
  const defaultValue = getDefaultValue(obj, property);
  if (canShowProperty("add-locsr", options, obj, property, !locStr.isEmpty, defaultValue)) {
    options.onAddLocalizedString(obj, property, locStr, translateObj);
  }
}

function createItemValuesLocale(obj: any, options: ICollectLocalizableStringsOptions, translateObj: any): void {
  for (let i = 0; i < obj.length; i++) {
    const val = obj[i];
    addPropertiesForItemValue(val, options, translateObj);
  }
}
function addPropertiesForItemValue(itemValue: any, options: ICollectLocalizableStringsOptions, translateObj: any) {
  const locProperties = getLocalizedProperties(itemValue, options, false);
  for (let i = 0; i < locProperties.length; i++) {
    const prop = locProperties[i];
    const isText = prop.name === "text";
    const reason = isText ? "itemvalue-text" : "itemvalue-customprop";
    const defValue = isText ? itemValue.value : undefined;
    const canshow = canShowProperty(reason, options, itemValue, prop, true, defValue);
    if (!canshow && isText) break;
    if (canshow) {
      options.onAddLocalizedString(itemValue, prop, getLocalizableStr(itemValue, prop), translateObj);
    }
  }
}
function getLocalizedProperties(obj: any, options: ICollectLocalizableStringsOptions, checkIsShowing: boolean = true): Array<JsonObjectProperty> {
  const res = new Array<JsonObjectProperty>();
  const properties = Serializer.getPropertiesByObj(obj);
  for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
    if (property.readOnly || !property.visible || !property.isSerializable || !property.isLocalizable) continue;
    const isShowing = ["url", "file"].indexOf(property.type) < 0;
    if (!checkIsShowing || canShowProperty("get-property", options, obj, property, isShowing)) {
      res.push(property);
    }
  }
  return res;
}
function getArrayProperties(obj: any): Array<JsonObjectProperty> {
  var res = new Array<JsonObjectProperty>();
  var properties = Serializer.getPropertiesByObj(obj);
  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    if (property.isSerializable === false) continue;
    var value = obj[property.name];
    if (!!value && Array.isArray(value) && value.length > 0) {
      res.push(property);
    }
  }
  return res;
}

function getLocalizableStr(obj: Base, prop: JsonObjectProperty): LocalizableString {
  return obj[prop.serializationProperty];
}

function createGroup(options: ICollectLocalizableStringsOptions, obj: any, property: JsonObjectProperty, translateObj: any) {
  if (!!obj && (obj.getType || Array.isArray(obj))) {
    translateObj = options.onCreateNewTranslateObj(obj, property, translateObj);
    collectStringsByObj(obj, options, translateObj);
  }
}
function canShowProperty(reason: string, options: ICollectLocalizableStringsOptions, obj: Base, property: JsonObjectProperty, isShowing: boolean, defaultValue?: any): boolean {
  if (options.canShowProperty) {
    return options.canShowProperty(reason, obj, property, getLocalizableStr(obj, property), isShowing, defaultValue);
  }
  return isShowing;
}
function createMatrixCellsGroup(options: ICollectLocalizableStringsOptions, obj: any, translateObj: any): void {
  Serializer.getPropertiesByObj(obj).forEach(prop => {
    if (prop.type === "cells" && canShowProperty("matrix-cell", options, obj, prop, true)) {
      createMatrixCellsGroupCore(options, obj, prop, translateObj);
    }
  });
}
function createMatrixCellsGroupCore(options: ICollectLocalizableStringsOptions, obj: any, prop: JsonObjectProperty, translateObj: any): void {
  const cells = <MatrixCells>obj[prop.name];
  if (cells.isEmpty) return;
  const matrix = <QuestionMatrixModel>obj;
  translateObj = options.onCreateNewTranslateObj(obj, prop, translateObj);
  const defaultName = surveySettings.matrix.defaultRowName;
  const rows = [defaultName];
  matrix.rows.forEach(row => rows.push(row.value));
  rows.forEach(val => {
    matrix.columns.forEach(col => {
      const locStr = cells.getCellDisplayLocText(val, col);
      if (!!locStr) {
        options.onAddLocalizedString(obj, prop, locStr, translateObj);
      }
    });
  });
}
function getDefaultValue(obj: any, prop: JsonObjectProperty): string {
  const locStr = getLocalizableStr(obj, prop);
  if (!locStr) return "";
  if (prop.name == "title") {
    if (!!locStr && !obj.isPage && !obj.isPanel && !!locStr.onGetTextCallback)
      return obj["name"];
  }
  return "";
}
function isTextNonTranslated(text: string): boolean {
  if (!text) return true;
  if (Helpers.isNumber(text)) return true;
  return text.length < 2;
}