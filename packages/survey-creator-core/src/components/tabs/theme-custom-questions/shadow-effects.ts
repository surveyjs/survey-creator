import { getLocString } from "../../../editorLocalization";
import { ComponentCollection, QuestionCustomModel, QuestionPanelDynamicModel, parseBoxShadow, createBoxShadow } from "survey-core";

function getQuestionJSON() {
  return {
    "type": "paneldynamic",
    "minPanelCount": 1,
    "addPanelText": getLocString("theme.boxShadowAddRule"),
    "templateElements": [
      {
        "type": "spinedit",
        "name": "x",
        "unit": "px",
        "title": getLocString("theme.boxShadowX"),
        "titleLocation": "left",
      },
      {
        "type": "spinedit",
        "name": "y",
        "unit": "px",
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
        "type": "coloralpha",
        "name": "color",
        "titleLocation": "hidden"
      },
      {
        "type": "buttongroup",
        "name": "isInset",
        "titleLocation": "hidden",
        "choices": [
          { text: getLocString("theme.boxShadowDrop"), value: false },
          { text: getLocString("theme.boxShadowInner"), value: true }
        ]
      }
    ]
  };
}

if (!ComponentCollection.Instance.getCustomQuestionByName("shadoweffects")) {
  ComponentCollection.Instance.add({
    name: "shadoweffects",
    showInToolbox: false,
    internal: true,
    questionJSON: getQuestionJSON(),
    onCreated(question: QuestionCustomModel) {
      question.valueFromDataCallback = (value: string | Array<Object>): Array<Object> => {
        if (typeof value == "undefined") return [{}];
        return typeof value == "string" ? parseBoxShadow(value) : value;
      };
      question.valueToDataCallback = (value: string | Array<Object>): string => {
        if (!value) return "";
        if (typeof value == "string") {
          return value;
        } else {
          return createBoxShadow(Array.isArray(value) ? value : [value]);
        }
      };
      (<QuestionPanelDynamicModel>question.contentQuestion).panels.forEach(p => p.questions.forEach(q => q.allowRootStyle = false));
    },
  });
}

export function updateShadowEffectsJSON() {
  const config = ComponentCollection.Instance.getCustomQuestionByName("shadoweffects");
  config.json.questionJSON = getQuestionJSON();
}