import { ComponentCollection, JsonObjectProperty, Question, QuestionCompositeModel } from "survey-core";
import { getLocString } from "../../../editorLocalization";

function getElementsJSON() {
  return [
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
      name: "cornerRadius",
      title: getLocString("theme.cornerRadius"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      unit: "px",
      min: 0
    }
  ];
}

ComponentCollection.Instance.add({
  name: "elementsettings",
  showInToolbox: false,
  internal: true,
  elementsJSON: getElementsJSON(),
  onInit() {
  },
  onCreated(question) {
  },
  onValueChanged(question, name, newValue) {
  },
});

export function updateElementSettingsJSON() {
  const config = ComponentCollection.Instance.getCustomQuestionByName("elementsettings");
  config.json.elementsJSON = getElementsJSON();
}

export function elementSettingsToCssVariable(value: any, property: JsonObjectProperty, themeCssVariables: { [index: string]: string }) {
  Object.keys(value).forEach(key => {
    const propertyName = `--sjs-${property.name.toLocaleLowerCase()}-${key}`;
    if (!property.defaultValue || value[key] !== property.defaultValue[key]) {
      themeCssVariables[propertyName] = value[key];
    } else {
      themeCssVariables[propertyName] = undefined;
    }
  });
}

// export function elementSettingsToCssVariableOld(question: Question, themeCssVariables: { [index: string]: string }) {
//   Object.keys(question.value).forEach(key => {
//     if (key === "corner") return;

//     const propertyName = `--sjs-${question.name.toLocaleLowerCase()}-${key}`;
//     if (!question.defaultValue || question.value[key] !== (question as Question).defaultValue[key]) {
//       themeCssVariables[propertyName] = question.value[key];
//     } else {
//       themeCssVariables[propertyName] = undefined;
//     }
//   });
// }

// export function elementSettingsFromCssVariableOld(question: Question, themeCssVariables: { [index: string]: string }, defaultBackcolorVariable: string, defaultHovercolorVariable: string): void {
//   if (!question) return;

//   const compositeQuestion = <QuestionCompositeModel>question;
//   const elementSettingsFromTheme = Object.keys(themeCssVariables).filter(key => key.indexOf(question.name.toLocaleLowerCase()) !== -1);

//   elementSettingsFromTheme.forEach(key => {
//     const propertyName = key.split("-").pop();

//     if (propertyName === "cornerRadius" && themeCssVariables[key] !== undefined) {
//       compositeQuestion.contentPanel.getQuestionByName("corner").value = parseFloat(themeCssVariables[key].toString());
//     } else {
//       compositeQuestion.contentPanel.getQuestionByName(propertyName).value = themeCssVariables[key];
//     }
//   });

//   if (elementSettingsFromTheme.length === 0) {
//     (<QuestionCompositeModel>question).contentPanel.getQuestionByName("backcolor").value = defaultBackcolorVariable;
//     (<QuestionCompositeModel>question).contentPanel.getQuestionByName("hovercolor").value = defaultHovercolorVariable;
//   }
// }

export function elementSettingsFromCssVariable(property: JsonObjectProperty, themeCssVariables: { [index: string]: string }, defaultBackcolorVariableName: string, defaultHovercolorVariableName: string, defaultCornerRadius: number): any {
  if (!property) return;

  if (!property.defaultValue) property.defaultValue = {};
  property.defaultValue["backcolor"] = themeCssVariables[defaultBackcolorVariableName];
  property.defaultValue["hovercolor"] = themeCssVariables[defaultHovercolorVariableName];
  property.defaultValue["cornerRadius"] = defaultCornerRadius;

  const result = { ...property.defaultValue };
  const elementSettingsFromTheme = Object.keys(themeCssVariables).filter(key => key.indexOf(property.name.toLocaleLowerCase()) !== -1);

  elementSettingsFromTheme.forEach(key => {
    const propertyName = key.split("-").pop();
    if (propertyName === "cornerRadius" && themeCssVariables[key] !== undefined) {
      result[propertyName] = parseFloat(themeCssVariables[key].toString());
    } else {
      result[propertyName] = themeCssVariables[key];
    }
  });
  return result;
}