import { ComponentCollection, QuestionCompositeModel } from "survey-core";
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
  onCreated(question: QuestionCompositeModel) {
    question.valueFromDataCallback = (newValue: string | Object): Object => typeof newValue == "string" ? parseColor(newValue) : newValue;
    question.valueToDataCallback = (newValue: string | Object): string => !!newValue ? (typeof newValue == "string" ? newValue : createColor(newValue)) : "";
    question.contentPanel.questions.forEach(q => q.allowRootStyle = false);
  }
});

export function createColor(value: any): string {
  return ingectAlpha(value.color, value.opacity / 100);
}

