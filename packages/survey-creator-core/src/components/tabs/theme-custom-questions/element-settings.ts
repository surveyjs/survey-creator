import { ComponentCollection, JsonObjectProperty, Question, QuestionCompositeModel } from "survey-core";
import { getLocString } from "../../../editorLocalization";
import { assign } from "../../../utils/utils";

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

if (!ComponentCollection.Instance.getCustomQuestionByName("elementsettings")) {
  ComponentCollection.Instance.add({
    name: "elementsettings",
    showInToolbox: false,
    internal: true,
    elementsJSON: getElementsJSON(),
    onInit() {
    },
    onCreated(question) {
    },
    valueToQuestion(value) {
      return JSON.parse(JSON.stringify(value));
    },
    onValueChanged(question, name, newValue) {
    },
  });
}

export function updateElementSettingsJSON() {
  const config = ComponentCollection.Instance.getCustomQuestionByName("elementsettings");
  config.json.elementsJSON = getElementsJSON();
}

export function elementSettingsToCssVariable(value: any = {}, property: JsonObjectProperty, themeCssVariables: { [index: string]: string }) {
  Object.keys(value).forEach(key => {
    const propertyName = `--sjs-${property.name.toLocaleLowerCase()}-${key}`;
    if (!property.defaultValue || value[key] !== property.defaultValue[key]) {
      themeCssVariables[propertyName] = value[key] + (key === "cornerRadius" ? "px" : "");
    } else {
      themeCssVariables[propertyName] = undefined;
    }
  });
}

export function elementSettingsFromCssVariable(property: JsonObjectProperty, themeCssVariables: { [index: string]: string }, defaultBackcolorVariableName: string, defaultHovercolorVariableName: string, defaultCornerRadius: number = 4): any {
  if (!property) return;

  if (!property.defaultValue) property.defaultValue = {};
  assign(property.defaultValue, {
    backcolor: themeCssVariables[defaultBackcolorVariableName],
    hovercolor: themeCssVariables[defaultHovercolorVariableName],
    cornerRadius: defaultCornerRadius
  });

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