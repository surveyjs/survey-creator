import { ComponentCollection, QuestionCompositeModel } from "survey-core";
import { getLocString } from "../../../editorLocalization";
import { ingectAlpha, parseRgbaFromString } from "../../../utils/utils";

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
export function parseColor(value: string): { color: string, opacity: number } {
  const rgbValues = parseRgbaFromString(value);
  if(rgbValues.length !== 0) {
    let opacity = 1;
    if(rgbValues.length == 4) {
      opacity = rgbValues.pop();
    }
    const color = rgbValues.reduce((res: string, color: number) => {
      const hex = color.toString(16);
      return res + (hex.length == 1 ? "0" + hex : hex);
    }, "#");
    return { color, opacity: opacity * 100 };
  }
  else {
    return { color: value, opacity: 100 };
  }
}
