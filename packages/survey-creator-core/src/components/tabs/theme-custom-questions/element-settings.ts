import { ComponentCollection, IQuestion, Question, QuestionCompositeModel } from "survey-core";
import { getLocString } from "../../../editorLocalization";

ComponentCollection.Instance.add({
  name: "elementsettings",
  showInToolbox: false,
  elementsJSON: [
    {
      type: "colorsettings",
      name: "backcolor",
      colorTitle: getLocString("theme.backcolor"),
      colorTitleLocation: "left",
      titleLocation: "hidden",
      descriptionLocation: "hidden"
    },
    {
      type: "colorsettings",
      name: "hovercolor",
      colorTitle: getLocString("theme.hovercolor"),
      colorTitleLocation: "left",
      titleLocation: "hidden",
      descriptionLocation: "hidden"
    },
    {
      type: "spinedit",
      name: "corner",
      title: getLocString("theme.cornerRadius"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      unit: "px",
      min: 0
    },
    {
      type: "expression",
      name: "cornerRadius",
      expression: "iif({composite.corner} notempty, {composite.corner} + 'px', '')",
      visible: false
    }
  ],
  onInit() {
  },
  onCreated(question) {
  },
  onValueChanged(question, name, newValue) {
  },
});

export function elementSettingsToCssVariable(question: IQuestion, themeCssVariables: {[index: string]: string}) {
  Object.keys(question.value).forEach(key => {
    if (key === "corner") return;

    const propertyName = `--sjs-${question.name.toLocaleLowerCase()}-${key}`;
    if (question.value[key] !== (question as Question).defaultValue[key]) {
      themeCssVariables[propertyName] = question.value[key];
    } else {
      themeCssVariables[propertyName] = undefined;
    }
  });
}

export function elementSettingsFromCssVariable(question: IQuestion, themeCssVariables: {[index: string]: string}, defaultBackcolorVariable: string, defaultHovercolorVariable: string): any {
  const result = {};
  Object.keys(themeCssVariables).filter(key => key.indexOf(question.name.toLocaleLowerCase()) !== -1).forEach(key => {
    const propertyName = key.split("-").pop();
    if(propertyName === "cornerRadius" && themeCssVariables[key] !== undefined) {
      result["corner"] = parseFloat(themeCssVariables[key].toString());
    } else {
      result[propertyName] = themeCssVariables[key];
    }
  });

  if(Object.keys(result).length === 0) {
    (<QuestionCompositeModel>question).contentPanel.getQuestionByName("backcolor").value = defaultBackcolorVariable;
    (<QuestionCompositeModel>question).contentPanel.getQuestionByName("hovercolor").value = defaultHovercolorVariable;
  } else {
    question.value = result;
  }
  return result;
}