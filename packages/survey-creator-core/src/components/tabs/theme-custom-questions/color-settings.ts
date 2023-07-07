import { ComponentCollection, Question, QuestionCompositeModel, Serializer } from "survey-core";
import { getLocString } from "../../../editorLocalization";
import { ingectAlpha, parseColor, parseRgbaFromString } from "../../../utils/utils";

ComponentCollection.Instance.add({
  name: "colorsettings",
  showInToolbox: false,
  elementsJSON: [
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
      unit: "%",
      titleLocation: "left"
    }
  ],
  onInit() {
    Serializer.addProperty("colorsettings", {
      name: "choices:itemvalue[]"
    });
  },
  onLoaded(question) {
    syncPropertiesFromCompositeToColor(question, "titleLocation", question.titleLocation);
    syncPropertiesFromCompositeToColor(question, "choices", question.choices);
  },
  onPropertyChanged(question, propertyName, newValue) {
    syncPropertiesFromCompositeToColor(question, propertyName, newValue);
  },
  valueToQuestion(value) {
    return !!value ? createColor(value) : "";
  },
  valueFromQuestion(value) {
    return typeof value == "string" ? parseColor(value) : value;
  },
  onCreated(question: QuestionCompositeModel) {
    question.contentPanel.questions.forEach(q => q.allowRootStyle = false);
  }
});

function syncPropertiesFromCompositeToColor(question: Question, propertyName: string, newValue: any) {
  const colorQuestion = question.contentPanel.questions[0];
  if(propertyName == "titleLocation") {
    if(newValue == "left") {
      question.titleLocation = "hidden";
      colorQuestion.title = question.title;
      colorQuestion.titleLocation = newValue;
    } else {
      colorQuestion.titleLocation = "hidden";
    }
  }
  if(propertyName == "choices") {
    colorQuestion.choices = newValue;
  }
}

export function createColor(value: any): string {
  return ingectAlpha(value.color, value.opacity / 100);
}

