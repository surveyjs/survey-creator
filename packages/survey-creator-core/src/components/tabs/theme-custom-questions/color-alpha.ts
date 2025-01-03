import { ComponentCollection, Question, QuestionCompositeModel, Serializer } from "survey-core";
import { getLocString } from "../../../editorLocalization";
import { ingectAlpha, parseColor, parseRgbaFromString } from "../../../utils/color-utils";
function getElementsJSON() {
  return [
    {
      name: "color",
      type: "color",
      titleLocation: "hidden",
    },
    {
      name: "opacity",
      startWithNewLine: false,
      type: "spinedit",
      title: getLocString("theme.opacity"),
      min: 0,
      max: 100,
      defaultValue: 100,
      unit: "%",
      titleLocation: "left"
    }
  ];
}
if (!ComponentCollection.Instance.getCustomQuestionByName("coloralpha")) {
  ComponentCollection.Instance.add({
    name: "coloralpha",
    showInToolbox: false,
    internal: true,
    elementsJSON: getElementsJSON(),
    onInit() {
      Serializer.addProperties("coloralpha", [{
        name: "choices:itemvalue[]",
        visible: false
      },
      {
        name: "colorTitleLocation:string",
        default: "hidden",
        visible: false
      },
      {
        name: "allowEmptyValue:boolean",
        default: false,
        visible: false
      },
      {
        name: "colorTitle:string",
        visible: false
      }
      ]);
    },
    onLoaded(question) {
      syncPropertiesFromCompositeToColor(question, "colorTitle", question.colorTitle);
      syncPropertiesFromCompositeToColor(question, "colorTitleLocation", question.colorTitleLocation);
      syncPropertiesFromCompositeToColor(question, "choices", question.choices);
      syncPropertiesFromCompositeToColor(question, "allowEmptyValue", question.allowEmptyValue);
    },
    onPropertyChanged(question, propertyName, newValue) {
      syncPropertiesFromCompositeToColor(question, propertyName, newValue);
    },
    valueToQuestion(value) {
      return !!value ? createColor(value) : "";
    },
    valueFromQuestion(value) {
      return typeof value == "string" || typeof value == "undefined" ? parseColor(value) : value;
    },
    onCreated(question: QuestionCompositeModel) {
      question.contentPanel.questions.forEach(q => q.allowRootStyle = false);
    }
  });
}
export function updatecoloralphaJSON() {
  const config = ComponentCollection.Instance.getCustomQuestionByName("coloralpha");
  config.json.elementsJSON = getElementsJSON();
}

function syncPropertiesFromCompositeToColor(question: Question, propertyName: string, newValue: any) {
  const colorQuestion = question.contentPanel.questions[0];
  if (!colorQuestion) {
    return;
  }
  if (propertyName == "colorTitleLocation") {
    colorQuestion.titleLocation = newValue;
  }
  if (propertyName == "colorTitle") {
    colorQuestion.title = newValue;
  }
  if (propertyName == "choices") {
    colorQuestion.choices = newValue;
  }
  if (propertyName == "allowEmptyValue") {
    colorQuestion.allowEmptyValue = newValue;
  }
}

export function createColor(value: any): string {
  return ingectAlpha(value.color, value.opacity / 100);
}

