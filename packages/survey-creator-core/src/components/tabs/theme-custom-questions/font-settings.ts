import { Base, ComponentCollection, JsonObjectProperty, Question, QuestionCompositeModel, Serializer } from "survey-core";
import { getLocString } from "../../../editorLocalization";
import { assign } from "../../../utils/utils";

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

function getElementsJSON() {
  return [
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
        { value: "600", text: getLocString("theme.fontWeightSemiBold") },
        { value: "700", text: getLocString("theme.fontWeightBold") },
        { value: "800", text: getLocString("theme.fontWeightHeavy") },
      ],
    },
    {
      type: "coloralpha",
      name: "color",
      colorTitle: getLocString("theme.color"),
      colorTitleLocation: "left",
      titleLocation: "hidden",
      descriptionLocation: "hidden"
    },
    {
      type: "coloralpha",
      name: "placeholdercolor",
      colorTitle: getLocString("theme.placeholderColor"),
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
  ];
}

if (!ComponentCollection.Instance.getCustomQuestionByName("font")) {
  ComponentCollection.Instance.add({
    name: "font",
    showInToolbox: false,
    internal: true,
    elementsJSON: getElementsJSON(),
    onInit() {
      Serializer.addProperties("font", [
        {
          name: "allowEmptyColorValue:boolean",
          default: false,
          visible: false
        },
      ]);
    },
    onLoaded(question) {
      syncPropertiesFromComposite(question, "allowEmptyColorValue", question.allowEmptyColorValue);
    },
    onPropertyChanged(question, propertyName, newValue) {
      syncPropertiesFromComposite(question, propertyName, newValue);
    },
    onCreated(question) {
      const color = question.contentPanel.getQuestionByName("color");
      color.visible = question.name !== "surveyTitle" && question.name !== "surveyDescription";
      const placeholderColor = question.contentPanel.getQuestionByName("placeholdercolor");
      placeholderColor.visible = question.name === "editorFont";

      const family = question.contentPanel.getQuestionByName("family");
      family.choices = [].concat(DefaultFonts);
    },
    valueToQuestion(value) {
      return JSON.parse(JSON.stringify(value));
    },
    onValueChanged(question, name, newValue) {
    },
  });
}

function syncPropertiesFromComposite(question: Question, propertyName: string, newValue: any) {
  const colorQuestion = question.contentPanel.questions[2];
  if (propertyName == "allowEmptyColorValue") {
    colorQuestion.allowEmptyValue = newValue;
  }
}

export function updateFontSettingsJSON() {
  const config = ComponentCollection.Instance.getCustomQuestionByName("font");
  config.json.elementsJSON = getElementsJSON();
}

export function fontsettingsToCssVariable(value: any = {}, property: JsonObjectProperty, themeCssVariables: { [index: string]: string }) {
  Object.keys(value).forEach(key => {
    const propertyNameDashed = property.name.replace(/([a-z])([A-Z])/g, key === "color" ? "$1-default-$2" : "$1-$2").toLowerCase();
    const cssVarName = key === "color"
      ? `--sjs2-color-component-${propertyNameDashed}`
      : `--sjs2-typography-font-${key}-component-${propertyNameDashed}`;
    if (!property.defaultValue || value[key] !== property.defaultValue[key]) {
      themeCssVariables[cssVarName] = value[key] + (key === "size" ? "px" : "");
    } else {
      themeCssVariables[cssVarName] = undefined;
    }
  });
}

export function fontsettingsFromCssVariable(property: JsonObjectProperty, themeCssVariables: { [index: string]: string }, defaultColorVariableName?: string, defaultPlaceholderColorVariableName?: string): any {
  if (!property) return;

  const propertyNameDashed = property.name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const propertyNameColorDashed = property.name.replace(/([a-z])([A-Z])/g, "$1-default-$2").toLowerCase();

  const varNames: { [key: string]: string } = {
    family: `--sjs2-typography-font-family-component-${propertyNameDashed}`,
    weight: `--sjs2-typography-font-weight-component-${propertyNameDashed}`,
    size: `--sjs2-typography-font-size-component-${propertyNameDashed}`,
    placeholdercolor: `--sjs2-typography-font-placeholdercolor-component-${propertyNameDashed}`,
    color: `--sjs2-color-component-${propertyNameColorDashed}`,
  };

  if (!property.defaultValue) property.defaultValue = {};
  assign(property.defaultValue, {
    color: themeCssVariables[defaultColorVariableName],
    placeholdercolor: !!defaultPlaceholderColorVariableName ? themeCssVariables[defaultPlaceholderColorVariableName] : undefined,
  });
  if (!property.defaultValue["size"]) {
    const baseFontSize = themeCssVariables[varNames.size] ?? themeCssVariables["--sjs2-base-unit-font-size"] ?? themeCssVariables["--sjs-font-size"];
    property.defaultValue["size"] = baseFontSize !== undefined ? parseFloat(baseFontSize) : undefined;
  }

  const colorValue = themeCssVariables[varNames.color] ?? property.defaultValue.color;
  const placeholderColorValue = themeCssVariables[varNames.placeholdercolor] ?? property.defaultValue.placeholdercolor;
  const result = { ...property.defaultValue };
  assign(result, {
    color: colorValue,
    placeholdercolor: placeholderColorValue,
  });

  (Object.keys(varNames) as Array<keyof typeof varNames>).forEach((key) => {
    const cssVarName = varNames[key];
    if (themeCssVariables[cssVarName] === undefined) return;
    if (key === "size") {
      result[key] = parseFloat(themeCssVariables[cssVarName].toString());
    } else {
      result[key] = themeCssVariables[cssVarName];
    }
  });

  // Backward compatibility for legacy variables like `--sjs-font-questiontitle-family`
  const legacyFontSettingsFromTheme = Object.keys(themeCssVariables).filter(key => key.indexOf(property.name.toLocaleLowerCase()) !== -1 && key.indexOf("--sjs-font-") === 0);
  legacyFontSettingsFromTheme.forEach(key => {
    const propertyName = key.split("-").pop();
    if (propertyName === "size" && themeCssVariables[key] !== undefined) {
      result[propertyName] = parseFloat(themeCssVariables[key].toString());
    } else {
      result[propertyName] = themeCssVariables[key];
    }
  });

  return result;
}