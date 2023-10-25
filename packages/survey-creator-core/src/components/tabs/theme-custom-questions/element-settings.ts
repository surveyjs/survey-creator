import { ComponentCollection, Question, QuestionCompositeModel } from "survey-core";
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
  ];
}

ComponentCollection.Instance.add({
  name: "elementsettings",
  showInToolbox: false,
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

export function elementSettingsToCssVariable(question: Question, themeCssVariables: {[index: string]: string}) {
  Object.keys(question.value).forEach(key => {
    if (key === "corner") return;

    const propertyName = `--sjs-${question.name.toLocaleLowerCase()}-${key}`;
    if (!question.defaultValue || question.value[key] !== (question as Question).defaultValue[key]) {
      themeCssVariables[propertyName] = question.value[key];
    } else {
      themeCssVariables[propertyName] = undefined;
    }
  });
}

export function elementSettingsFromCssVariable(question: Question, themeCssVariables: {[index: string]: string}, defaultBackcolorVariable: string, defaultHovercolorVariable: string): void {
  const compositeQuestion = <QuestionCompositeModel>question;
  const elementSettingsFromTheme = Object.keys(themeCssVariables).filter(key => key.indexOf(question.name.toLocaleLowerCase()) !== -1);

  elementSettingsFromTheme.forEach(key => {
    const propertyName = key.split("-").pop();

    if(propertyName === "cornerRadius" && themeCssVariables[key] !== undefined) {
      compositeQuestion.contentPanel.getQuestionByName("corner").value = parseFloat(themeCssVariables[key].toString());
    } else {
      compositeQuestion.contentPanel.getQuestionByName(propertyName).value = themeCssVariables[key];
    }
  });

  if(elementSettingsFromTheme.length === 0) {
    (<QuestionCompositeModel>question).contentPanel.getQuestionByName("backcolor").value = defaultBackcolorVariable;
    (<QuestionCompositeModel>question).contentPanel.getQuestionByName("hovercolor").value = defaultHovercolorVariable;
  }
}