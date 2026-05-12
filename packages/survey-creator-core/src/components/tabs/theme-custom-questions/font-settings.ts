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

function getFontSettingsSjs2VarNameMap(propertyName: string): Record<string, string> {
  const propertyNameDashed = propertyName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const propertyNameColorDashed = propertyName.replace(/([a-z])([A-Z])/g, "$1-default-$2").toLowerCase();
  return {
    family: `--sjs2-typography-font-family-component-${propertyNameDashed}`,
    weight: `--sjs2-typography-font-weight-component-${propertyNameDashed}`,
    size: `--sjs2-typography-font-size-component-${propertyNameDashed}`,
    placeholdercolor: `--sjs2-typography-font-placeholdercolor-component-${propertyNameDashed}`,
    color: `--sjs2-color-component-${propertyNameColorDashed}`,
  };
}

export function getFontSettingsSjs2VarNames(property: JsonObjectProperty): Record<string, string> {
  return getFontSettingsSjs2VarNameMap(property.name);
}

export function cleanUpFontSettingsVarsFromCssVariables(
  cssVariables: { [index: string]: string },
  fontSettingPropertyNames: string[]
): void {
  const seen: { [cssVarName: string]: boolean } = {};
  const uniqueVarNames: string[] = [];
  fontSettingPropertyNames.forEach((propertyName) => {
    const map = getFontSettingsSjs2VarNameMap(propertyName);
    Object.keys(map).forEach((k) => {
      const cssVarName = map[k];
      if (!seen[cssVarName]) {
        seen[cssVarName] = true;
        uniqueVarNames.push(cssVarName);
      }
    });
  });
  uniqueVarNames.forEach((cssVarName) => {
    if (cssVariables.hasOwnProperty(cssVarName)) {
      delete cssVariables[cssVarName];
    }
  });
}

export function fontsettingsToCssVariable(value: any = {}, property: JsonObjectProperty, themeCssVariables: { [index: string]: string }) {
  const varNames = getFontSettingsSjs2VarNameMap(property.name);
  Object.keys(value).forEach(key => {
    const cssVarName = varNames[key];
    if (!cssVarName) return;
    if (!property.defaultValue || value[key] !== property.defaultValue[key]) {
      themeCssVariables[cssVarName] = value[key] + (key === "size" ? "px" : "");
    } else {
      themeCssVariables[cssVarName] = undefined;
    }
  });
}

export function fontsettingsFromCssVariable(property: JsonObjectProperty, themeCssVariables: { [index: string]: string }, defaultColorVariableName?: string, defaultPlaceholderColorVariableName?: string): any {
  if (!property) return;

  const varNames = getFontSettingsSjs2VarNameMap(property.name);

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