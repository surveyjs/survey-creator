import { defaultCss, IAction, ItemValue, MatrixDropdownColumn, Question, Serializer, SurveyElement, settings as surveySettings } from "survey-core";
import { copyCssClasses } from "./utils";
import { settings } from "../creator-settings";

const opositeValues = {
  true: "false",
  True: "False",
  TRUE: "FALSE",
  false: "true",
  False: "True",
  FALSE: "TRUE",
  yes: "no",
  Yes: "No",
  YES: "NO",
  no: "yes",
  No: "Yes",
  NO: "YES"
};

function getOpositValue(str: string): string | null {
  if (!!opositeValues[str]) return opositeValues[str];
  return null;
}

function hasValueInArray(values: any[], search: any): boolean {
  search = search.toString();
  for (var i = 0; i < values.length; i++) {
    if (!values[i]) continue;
    if (values[i].toString() === search) return true;
  }
  return false;
}
function getNumericFromString(str: string): string {
  if (!str) return "";
  var num = "";
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] >= "0" && str[i] <= "9") {
      num = str[i] + num;
    } else {
      if (!!num) return num;
    }
    if (num.length == 10) break;
  }
  return num;
}

export function getNextItemValue(prefix: string, choices: ItemValue[]): string | number {
  const values = choices.map((item: ItemValue) => item.value);
  return getNextValue(prefix, values);
}
export function getNextItemText(choices: ItemValue[]): string {
  const ln = choices.length;
  if (ln === 0) return "";
  if (!choices[ln - 1].text || choices[ln - 1].text === choices[ln - 1].value) return "";
  const values: Array<string> = [];
  choices.forEach(item => { if (item.hasText) values.push(item.text); });
  choices.map((item: ItemValue) => item.text);
  const nextValue = getNextValue("", values, true);
  return !!nextValue ? nextValue.toString() : "";
}
export function getNextValue(prefix: string, values: any[], isText?: boolean): string | number {
  let oposite: string | null = null;
  if (values.length > 0)
    oposite = getOpositValue(values[values.length - 1]);
  if (oposite && values.indexOf(oposite) < 0) return oposite;
  var numStr = "";
  var baseValue;
  var numStrIndex = -1;
  for (var i = values.length - 1; i >= 0; i--) {
    if (!values[i]) continue;
    var str = values[i].toString();
    numStr = getNumericFromString(str);
    if (!!numStr) {
      numStrIndex = str.lastIndexOf(numStr);
      baseValue = values[i];
      break;
    }
  }
  if (numStrIndex > -1) {
    var num = parseInt(numStr);
    var isNumber = baseValue === num;
    var newValue;
    do {
      if (isNumber) {
        newValue = ++num;
      } else {
        var newNum = (num++).toString();
        while(numStr.length > newNum.length) {
          newNum = "0" + newNum;
        }
        newValue = str.substring(0, numStrIndex) + newNum + str.substring(numStrIndex + numStr.length);
      }
    } while(hasValueInArray(values, newValue));
    return newValue;
  }
  if (!prefix) {
    prefix = values[values.length - 1];
  }
  return isText ? "" : prefix + 1;
}

export function getQuestionFromObj(obj: SurveyElement): Question {
  return (obj instanceof MatrixDropdownColumn) ? (<MatrixDropdownColumn>obj).templateQuestion : (obj as Question);
}

export function scrollElementIntoView(elementId: string) {
  if (!elementId || typeof surveySettings.environment.root === "undefined") return;
  const el = surveySettings.environment.root.getElementById(elementId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
}

export function assignDefaultClasses(destination: any, questionType: string) {
  copyCssClasses(destination, defaultCss.question);
  copyCssClasses(destination, defaultCss[questionType]);
  destination.list = defaultCss.list;
  destination.hasErrorTop = "";
  destination.hasErrorBottom = "";
}

export function wrapTextByCurlyBraces(text: string) {
  return settings.logic.openBracket + text + settings.logic.closeBracket;
}