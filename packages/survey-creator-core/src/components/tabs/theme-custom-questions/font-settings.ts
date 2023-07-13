import { ComponentCollection, IQuestion, QuestionCompositeModel } from "survey-core";
import { getLocString } from "../../../editorLocalization";

export const DefaultFonts = [
  "Open Sans",
  "Arial, sans-serif",
  "Brush Script MT, cursive",
  "Courier New, monospace",
  "Garamond, serif",
  "Georgia, serif",
  "Tahoma, sans-serif",
  "Times New Roman, serif",
  "Trebuchet MS, sans-serif",
  "Verdana, sans-serif",
];

ComponentCollection.Instance.add({
  name: "fontsettings",
  showInToolbox: false,
  elementsJSON: [
    {
      type: "dropdown",
      name: "family",
      title: getLocString("theme.fontFamily"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      choices: [].concat(DefaultFonts),
      allowClear: false
    },
    {
      type: "buttongroup",
      name: "weight",
      titleLocation: "hidden",
      descriptionLocation: "hidden",
      choices: [
        { value: "400", text: getLocString("theme.fontWeightRegular") },
        { value: "500", text: getLocString("theme.fontWeightSemiBold") },
        { value: "600", text: getLocString("theme.fontWeightBold") },
        { value: "700", text: getLocString("theme.fontWeightHeavy") },
      ],
    },
    {
      type: "colorsettings",
      name: "color",
      colorTitle: getLocString("theme.color"),
      colorTitleLocation: "left",
      titleLocation: "hidden",
      descriptionLocation: "hidden"
    },
    {
      type: "spinedit",
      name: "size",
      title: getLocString("theme.size"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      unit: "px",
      min: 0,
    }
  ],
  onInit() {
  },
  onCreated(question) {
    const color = question.contentPanel.getQuestionByName("color");
    color.visible = question.name !== "surveyTitle";
  },
  onValueChanged(question, name, newValue) {
  },
});

export function fontsettingsToCssVariable(question: IQuestion, themeCssVariables: {[index: string]: string}) {
  Object.keys(question.value).forEach(key => {
    const innerQ = (<QuestionCompositeModel>question).contentPanel.getQuestionByName(key);
    themeCssVariables[`--sjs-font-${question.name.toLocaleLowerCase()}-${key}`] = question.value[key] + (innerQ.unit?.toString() || "");
  });
}

export function fontsettingsFromCssVariable(question: IQuestion, themeCssVariables: {[index: string]: string}, defaultColorVariable?: string): any {
  const result = {};
  Object.keys(themeCssVariables).filter(key => key.indexOf(question.name.toLocaleLowerCase()) !== -1).forEach(key => {
    const propertyName = key.split("-").pop();
    result[propertyName] = themeCssVariables[key];
  });

  if(Object.keys(result).length !== 0) {
    question.value = result;
  } else if(!!defaultColorVariable) {
    (<QuestionCompositeModel>question).contentPanel.getQuestionByName("color").value = defaultColorVariable;
  }
  return result;
}