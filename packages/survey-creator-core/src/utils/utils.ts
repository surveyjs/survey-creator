import { defaultV2Css, IAction, ItemValue, MatrixDropdownColumn, Question, Serializer, SurveyElement, settings as surveySettings } from "survey-core";
import { settings } from "../creator-settings";

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

export function roundTo2Decimals(number: number): number {
  return Math.round(number * 100) / 100;
}

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
function getOpositValue(str: string): string {
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
export function getNextItemValue(prefix: string, choices: ItemValue[]): string | number {
  const values = choices.map((item: ItemValue) => item.value);
  return getNextValue(prefix, values);
}
export function getNextItemText(choices: ItemValue[]): string {
  const ln = choices.length;
  if (ln === 0) return "";
  if (!choices[ln - 1].text || choices[ln - 1].text === choices[ln - 1].value) return "";
  const values = [];
  choices.forEach(item => { if (item.hasText) values.push(item.text); });
  choices.map((item: ItemValue) => item.text);
  const nextValue = getNextValue("", values);
  return !!nextValue ? nextValue.toString() : "";
}
export function getNextValue(prefix: string, values: any[]): string | number {
  if (values.length > 0)
    var oposite = getOpositValue(values[values.length - 1]);
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
      }
      else {
        var newNum = (num++).toString();
        while (numStr.length > newNum.length) {
          newNum = "0" + newNum;
        }
        newValue = str.substring(0, numStrIndex) + newNum + str.substring(numStrIndex + numStr.length);
      }
    } while (hasValueInArray(values, newValue));
    return newValue;
  }
  if (!prefix) {
    prefix = values[values.length - 1];
  }
  return prefix + 1;
}

export function findParentNode(className: string, sourceNode: HTMLElement) {
  var parent = sourceNode;
  while (!!parent && !parent.classList.contains(className)) {
    parent = parent.parentElement;
  }
  return parent;
}

export function focusFirstControl(renderedElements: HTMLElement[]) {
  for (var i = 0; i < renderedElements.length; i++) {
    if (typeof renderedElements[i].getElementsByClassName === "function") {
      var elements = <HTMLCollectionOf<HTMLElement>>(
        renderedElements[i].getElementsByClassName("svd-focusable")
      );
      if (
        elements.length === 0 &&
        renderedElements[i].className.indexOf("svd-focusable") !== -1
      ) {
        elements = <any>[renderedElements[i]];
      }
      if (elements.length > 0) {
        var element = elements[0];
        if (element.tagName.toLowerCase() !== "a") {
          element.focus({ preventScroll: true });
          break;
        }
      }
    }
  }
}

export function getFirstNonTextElement(elements: any) {
  if (!elements || !elements.length) return;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].nodeName != "#text" && elements[i].nodeName != "#comment")
      return elements[i];
  }
  return null;
}

// about compoentInfo: https://knockoutjs.com/documentation/component-registration.html
export function getNodesFromKoComponentInfo(componentInfo) {
  // elem.nodeType === 3 // text node
  // elem.nodeType === 8 // comment node

  let element = componentInfo.element;
  const siblings = [];

  if (element.nodeType !== 8) {
    return element.childNodes;
  }

  while ((element = element.nextSibling)) {
    if (element.nodeType === 3) continue;
    siblings.push(element);
  }
  return siblings;
}

// ko.bindingHandlers["trueclick"] = {
//   init: function (element, valueAccessor, allBindingsAccessor) {
//     element.onclick = () => true;
//   },
// };

// export function createKey2click(element: HTMLElement) {
//   return (ev: KeyboardEvent) => {
//     var char = ev.which || ev.keyCode;
//     if (char === 13 || char === 32) {
//       element.click();
//     } else if (char === 27) {
//       element.blur();
//     }
//   };
// }

// ko.bindingHandlers["key2click"] = {
//   init: function (element, valueAccessor, allBindingsAccessor) {
//     element.onkeyup = createKey2click(element);
//   },
// };

// ko.bindingHandlers["clickNoFocus"] = {
//   init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
//     element.onclick = (ev) => {
//       valueAccessor().call(viewModel, viewModel, ev);
//     };
//   },
// };

// ko.bindingHandlers["afterRenderParent"] = {
//   init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
//     element.style.display = "none";
//     valueAccessor() && valueAccessor()([element.parentElement]);
//   },
// };

export function propertyExists(obj: any, propertyName: string) {
  let result = true;
  if (!!obj && typeof obj.getType === "function") {
    const property = Serializer.findProperty(obj.getType(), propertyName);
    result = !!property;
  }
  return result;
}

export function isPropertyVisible(obj: any, propertyName: string) {
  let result = true;
  if (!!obj && typeof obj.getType === "function") {
    const property = Serializer.findProperty(obj.getType(), propertyName);
    result = !property || property.visible;
  }
  return result;
}

export function toggleHovered(e: MouseEvent, element: HTMLElement, timeout = 0) {
  const processedFlagName = "__svc_question_processed";
  const name = "svc-hovered";
  const nameReady = "svc-hovered-ready";

  function setClass(className, checkReady = null) {
    const arr = (element.className || "").split(" ");
    if (checkReady) {
      if (arr.indexOf(checkReady) == -1) {
        return;
      }
    }
    if (arr.indexOf(className) == -1) {
      element.className += " " + className;
    }
  }

  if (!e[processedFlagName] && e.type === "mouseover") {
    if (timeout) {
      setClass(nameReady);
      setTimeout(() => {
        setClass(name, nameReady);
      }, timeout);
    }
    else {
      setClass(name);
    }
    e[processedFlagName] = true;
  } else {
    element.className = (element.className || "").replace(" svc-hovered-ready", "");
    element.className = (element.className || "").replace(" svc-hovered", "");
  }
}

export function clearNewLines(text: string) {
  return text.replace(new RegExp("(\\r\\n|\\n|\\r)", "gm"), "");
}

export function select(element: any) {
  if (!window) return;
  var range, selection;
  if (window.getSelection && document.createRange) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  } else if (document["selection"] && document.body["createTextRange"]) {
    range = document.body["createTextRange"]();
    range.moveToElementText(element);
    range.select();
  }
}
export function copyObject(dst: any, src: any) {
  for (let key in src) {
    let source = src[key];
    if (typeof source === "object") {
      source = {};
      copyObject(source, src[key]);
    }
    dst[key] = source;
  }
}
export function copyCssClasses(dest: any, source: any) {
  if (!source) return;
  if (typeof source === "string" || source instanceof String) {
    dest["root"] = source;
  } else {
    copyObject(dest, source);
  }
}

export function assignDefaultV2Classes(destination: any, questionType: string) {
  copyCssClasses(destination, defaultV2Css.question);
  copyCssClasses(destination, defaultV2Css[questionType]);
  destination.hasErrorTop = "";
  destination.hasErrorBottom = "";
}

export function wrapTextByCurlyBraces(text: string) {
  return settings.logic.openBracket + text + settings.logic.closeBracket;
}

export function capitalize(str: string): string {
  if (!str) return str;
  str = str.replace(/[\s]+/g, " ");
  str = str.replace(/([\s]|^)(\S)/g, (_, p1, p2) => {
    return p1 + p2.toUpperCase();
  });
  return str;
}
export function notShortCircuitAnd(...args: Array<boolean>): boolean {
  return args.every((val) => val === true);
}

export const imageMimeTypes = "image/png, image/gif, image/jpeg, image/apng, image/avif, image/svg+xml, image/webp";

export function getAcceptedTypesByContentMode(contentMode: string) {
  if (["auto", "image"].indexOf(contentMode) > -1) {
    return imageMimeTypes;
  }
  else if (contentMode == "video") {
    return "video/*";
  }
  else {
    return "";
  }
}

export function getQuestionFromObj(obj: SurveyElement): Question {
  return (obj instanceof MatrixDropdownColumn) ? obj.templateQuestion : (obj as Question);
}

export function scrollElementIntoView(elementId: string) {
  if (!elementId || typeof surveySettings.environment.root === "undefined") return;
  const el = surveySettings.environment.root.getElementById(elementId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
}

export function ingectAlpha(baseColor: any, alpha: number): any {
  if (!!baseColor && alpha !== undefined) {
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}

export function convertRgbaToString(rgbValues: Array<number>, alpha: number): string {
  return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${alpha})`;
}

export function parseRgbaFromString(value: string = ""): Array<number> {
  const matchRgb = value.match(/\((.*)\)/);
  if (matchRgb) {
    return matchRgb[1].split(",").map(i => parseFloat(i));
  } else {
    return [];
  }
}

export function parseColor(value: string = ""): { color: string, opacity: number } {
  const rgbValues = parseRgbaFromString(value);
  if (rgbValues.length !== 0) {
    let opacity = 1;
    if (rgbValues.length == 4) {
      opacity = rgbValues.pop();
    }
    const color = rgbValues.reduce((res: string, color: number) => {
      const hex = color.toString(16);
      return res + (hex.length == 1 ? "0" + hex : hex);
    }, "#");
    return { color, opacity: roundTo2Decimals(opacity * 100) };
  }
  else {
    return { color: value, opacity: 100 };
  }
}

export function HSBToRGB(h, s, b) {
  s /= 100;
  b /= 100;
  const k = (n) => (n + h / 60) % 6;
  const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
  return [Math.round(255 * f(5)), Math.round(255 * f(3)), Math.round(255 * f(1))];
}

export function RGBToHSB(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const v = Math.max(r, g, b),
    n = v - Math.min(r, g, b);
  const h = n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
  return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
}

export function trimEmptyFields(object: { [index: string]: string }): void {
  Object.keys(object).forEach(key => {
    if (object[key] === undefined || object[key] === null) {
      delete object[key];
    }
  });
}

export function assign(...inputs: Array<any>) {
  const objects = (inputs || []).filter(obj => !!obj);
  if (objects.length <= 1) {
    return;
  }
  if (objects.length == 2) {
    Object.keys(objects[1]).forEach(key => objects[0][key] = objects[1][key]);
    trimEmptyFields(inputs[0]);
    return;
  }
  for (let i = 1; i < objects.length; i++) {
    assign(objects[0], objects[i]);
  }
}

export class ColorCalculator {
  colorSettings = { baseColorAlpha: 1, darkColorAlpha: 1, lightColorAlpha: 1, deltaDarkColor: 0, deltaLightColor: 0, newColorLight: "", newColorDark: "" };

  initialize(baseColor: string, lightColor: string, darkColor: string) {
    const primaryColorRgba = parseRgbaFromString(baseColor);
    const primaryColorDarkRgba = parseRgbaFromString(darkColor);
    const primaryColorLightRgba = parseRgbaFromString(lightColor);
    this.colorSettings.baseColorAlpha = primaryColorRgba[3];
    this.colorSettings.darkColorAlpha = primaryColorDarkRgba[3];
    this.colorSettings.lightColorAlpha = primaryColorLightRgba[3];

    const primaryColorHSB = RGBToHSB(primaryColorRgba[0], primaryColorRgba[1], primaryColorRgba[2]);
    const primaryColorDarkHSB = RGBToHSB(primaryColorDarkRgba[0], primaryColorDarkRgba[1], primaryColorDarkRgba[2]);
    const primaryColorLightHSB = RGBToHSB(primaryColorLightRgba[0], primaryColorLightRgba[1], primaryColorLightRgba[2]);

    this.colorSettings.deltaDarkColor = primaryColorHSB[2] - primaryColorDarkHSB[2];
    this.colorSettings.deltaLightColor = primaryColorHSB[2] - primaryColorLightHSB[2];
  }

  calculateColors(newColor: string) {
    let newColorRbg = parseRgbaFromString(newColor);
    if (newColorRbg.length === 0) {
      newColorRbg = parseRgbaFromString(ingectAlpha(newColor, 1));
    }
    const newColorHsb = RGBToHSB(newColorRbg[0], newColorRbg[1], newColorRbg[2]);
    const newPrimaryColorDarkRGB = HSBToRGB(newColorHsb[0], newColorHsb[1], newColorHsb[2] - this.colorSettings.deltaDarkColor);
    const newPrimaryColorLightRGB = HSBToRGB(newColorHsb[0], newColorHsb[1], newColorHsb[2] - this.colorSettings.deltaLightColor);

    this.colorSettings.newColorLight = convertRgbaToString(newPrimaryColorLightRGB, this.colorSettings.lightColorAlpha);
    this.colorSettings.newColorDark = convertRgbaToString(newPrimaryColorDarkRGB, this.colorSettings.darkColorAlpha);
  }
}

export function saveToFileHandler(fileName: string, blob: Blob) {
  if (!window) return;
  if (window.navigator["msSaveOrOpenBlob"]) {
    window.navigator["msSaveBlob"](blob, fileName);
  } else {
    const elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = fileName;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}
