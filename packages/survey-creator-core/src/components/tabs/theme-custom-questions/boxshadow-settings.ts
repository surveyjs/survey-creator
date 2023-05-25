import { ingectAlpha } from "../../../utils/utils";
import { getLocString } from "../../../editorLocalization";
import { ComponentCollection, QuestionCustomModel, QuestionPanelDynamicModel } from "survey-core";

ComponentCollection.Instance.add({
  name: "boxshadowsettings",
  showInToolbox: false,
  questionJSON: {
    "type": "paneldynamic",
    "panelCount": 1,
    //temp
    "maxPanelCount": 1,
    "minPanelCount": 1,
    "templateElements": [
      {
        "type": "spinedit",
        "name": "x",
        "unit": "px",
        "title": getLocString("theme.boxShadowX"),
        "titleLocation": "left",
        "min": 0,
      },
      {
        "type": "spinedit",
        "name": "y",
        "unit": "px",
        "min": 0,
        "startWithNewLine": false,
        "title": getLocString("theme.boxShadowY"),
        "titleLocation": "left"
      },
      {
        "type": "spinedit",
        "name": "blur",
        "unit": "px",
        "title": getLocString("theme.boxShadowBlur"),
        "min": 0,
        "titleLocation": "left"
      },
      {
        "type": "spinedit",
        "name": "spread",
        "unit": "px",
        "min": 0,
        "startWithNewLine": false,
        "title": getLocString("theme.boxShadowSpread"),
        "titleLocation": "left"
      },
      {
        "type": "color",
        "name": "color",
        "titleLocation": "hidden"
      },
      {
        "type": "spinedit",
        "name": "opacity",
        "startWithNewLine": false,
        "title": getLocString("theme.boxShadowOpacity"),
        "titleLocation": "left",
        "min": 0,
        "max": 100,
        "unit": "%"
      },
      {
        "type": "buttongroup",
        "name": "isInset",
        "titleLocation": "hidden",
        "choices": [{ text: "Drop", value: false }, { text: "Inner", value: true }]
      }
    ]
  },
  onCreated(question: QuestionCustomModel) {
    question.valueFromDataCallback = (value: string | Array<Object>): Array<Object> => typeof value == "string" ? parseBoxShadow(value) : value;
    question.valueToDataCallback = (value: string | Array<Object>): string => !!value ? (typeof value == "string" ? value : createBoxShadow(Array.isArray(value) ? value : [value])) : "";
    (<QuestionPanelDynamicModel>question.contentQuestion).panels.forEach(p => p.questions.forEach(q => q.allowRootStyle = false));
  },
});

function colorToHex(color: string): { hex: string, alpha: number } {
  const matchRgb = color.match(/\((.*)\)/);
  if(matchRgb) {
    const rgbValues = matchRgb[1].split(",");
    let alpha = 1;
    if(rgbValues.length == 4) {
      alpha = parseFloat(rgbValues.pop());
    }
    const hex = rgbValues.reduce((res: string, color: string) => {
      const hex = parseInt(color).toString(16);
      return res + (hex.length == 1 ? "0" + hex : hex);
    }, "#");
    return { hex, alpha };
  }
  else {
    return { hex: color, alpha: 1 };
  }
}

export function createBoxShadow(value: Array<any>): string {
  return value.map((val => `${val.isInset == true ? "inset " : ""}${val.x}px ${val.y}px ${val.blur}px ${val.spread}px ${ingectAlpha(val.color, val.opacity/100)}`
  )).join(",");
}

export function parseBoxShadow(value: string): Array<Object> {
  return value.split(/(?<!\([^)]*),(?!.*\))/).map(value => {
    const color = value.match(/#[a-zA-Z0-9]+| rgba?\(.*?\)/);
    const isInset = value.indexOf("inset") > -1;
    const res: Object = {};
    if(isInset) {
      value = value.replace("inset", "");
    }
    if(!!color) {
      value = value.replace(color[0], "");
      let hexColor = colorToHex(color[0]);
      res["color"] = hexColor.hex;
      res["opacity"] = hexColor.alpha * 100;
    }
    const values = value.replace(/\s+/g, " ").replace(/^\s|\s$/g, "").split(" ");
    res["x"] = parseInt(values[0]) || 0;
    res["y"] = parseInt(values[1]) || 0;
    res["blur"] = parseInt(values[2]) || 0;
    res["spread"] = parseInt(values[3]) || 0;
    res["isInset"] = isInset;
    return res;
  });
}