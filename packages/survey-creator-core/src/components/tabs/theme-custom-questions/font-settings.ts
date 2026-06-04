import { Base, ComponentCollection, JsonObjectProperty, Question, QuestionCompositeModel, Serializer } from "survey-core";
import { getLocString } from "../../../editorLocalization";
import { assign, trimEmptyFields } from "../../../utils/utils";
import { settings } from "../../../creator-settings";

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
      const placeholderColor = question.contentPanel.getQuestionByName("placeholdercolor");
      placeholderColor.visible = question.name === "inputContent";

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

const FONT_FAMILY_TEXT_VAR = "--sjs2-typography-font-family-text";
const BASE_UNIT_FONT_SIZE_VAR = "--sjs2-base-unit-font-size";
const LEGACY_FONT_SIZE_VAR = "--sjs-font-size";
const INPUT_PLACEHOLDER_COLOR_VAR = "--sjs2-color-component-input-default-placeholder";

type FontSettingKey = "family" | "weight" | "size" | "color" | "placeholdercolor";

function toComponentName(propertyName: string, color = false): string {
  return propertyName.replace(/([a-z])([A-Z])/g, color ? "$1-default-$2" : "$1-$2").toLowerCase();
}

function getFontCssVarName(propertyName: string, key: FontSettingKey): string {
  if (key === "color") {
    return `--sjs2-color-component-${toComponentName(propertyName, true)}`;
  }
  return `--sjs2-typography-font-${key}-component-${toComponentName(propertyName)}`;
}

export function fontsettingsToCssVariable(value: any = {}, property: JsonObjectProperty, themeCssVariables: { [index: string]: string }, defaultValues?: { [index: string]: string }) {
  Object.keys(value).forEach(key => {
    const cssVarName = getFontCssVarName(property.name, key as FontSettingKey);
    const defaultValue = defaultValues?.[key] ?? property.defaultValue?.[key];
    if ((!defaultValue || value[key] !== defaultValue) && value[key] !== undefined) {
      themeCssVariables[cssVarName] = value[key] + (key === "size" ? "px" : "");
    } else {
      themeCssVariables[cssVarName] = undefined;
    }
  });
}

export interface FontSettingsDefaults {
  family?: string;
  weight?: string;
  size?: number;
  color?: string;
  placeholdercolor?: string;
}

export const themeFontPropertyNames: Array<string> = ["pageTitle", "pageDescription", "questionTitle", "questionDescription", "inputContent"];

export function getFontSettingsCssVarNames(propertyName: string): string[] {
  const vars = [
    getFontCssVarName(propertyName, "color"),
    getFontCssVarName(propertyName, "family"),
    getFontCssVarName(propertyName, "weight"),
    getFontCssVarName(propertyName, "size"),
  ];
  if (propertyName === "inputContent") {
    vars.push(INPUT_PLACEHOLDER_COLOR_VAR);
  }
  return vars;
}

export function getThemeFontSettingsCssVarNames(): string[] {
  return [
    FONT_FAMILY_TEXT_VAR,
    ...themeFontPropertyNames.flatMap(name => getFontSettingsCssVarNames(name)),
  ];
}

export function getFontSettingsDefaultsFromBaseTheme(
  propertyName: string,
  baseThemeVariables: { [index: string]: string }
): FontSettingsDefaults {
  const sizeValue = baseThemeVariables[getFontCssVarName(propertyName, "size")];
  const result: FontSettingsDefaults = {
    color: baseThemeVariables[getFontCssVarName(propertyName, "color")],
    family: baseThemeVariables[getFontCssVarName(propertyName, "family")] || baseThemeVariables[FONT_FAMILY_TEXT_VAR] || settings.themeEditor.defaultFontFamily,
    weight: baseThemeVariables[getFontCssVarName(propertyName, "weight")],
    size: sizeValue !== undefined ? parseFloat(sizeValue) : undefined,
  };

  if (propertyName === "inputContent") {
    result.placeholdercolor = baseThemeVariables[INPUT_PLACEHOLDER_COLOR_VAR];
  }
  if (result.size !== undefined && Number.isNaN(result.size)) {
    delete result.size;
  }
  trimEmptyFields(result);
  return result;
}

export function fontsettingsFromCssVariable(property: JsonObjectProperty, themeCssVariables: { [index: string]: string }, baseThemeVariables?: { [index: string]: string }): any {
  if (!property) return;

  const varNames: { [key in FontSettingKey]: string } = {
    family: getFontCssVarName(property.name, "family"),
    weight: getFontCssVarName(property.name, "weight"),
    size: getFontCssVarName(property.name, "size"),
    placeholdercolor: getFontCssVarName(property.name, "placeholdercolor"),
    color: getFontCssVarName(property.name, "color"),
  };

  const defaults = baseThemeVariables ? getFontSettingsDefaultsFromBaseTheme(property.name, baseThemeVariables) : undefined;

  if (!property.defaultValue) property.defaultValue = {};
  if (defaults) {
    assign(property.defaultValue, defaults);
  }
  if (typeof property.defaultValue["size"] === "string") {
    property.defaultValue["size"] = parseFloat(property.defaultValue["size"]);
  }
  if (property.defaultValue["size"] === undefined || Number.isNaN(property.defaultValue["size"])) {
    const baseFontSize = themeCssVariables[varNames.size] ?? themeCssVariables[BASE_UNIT_FONT_SIZE_VAR] ?? themeCssVariables[LEGACY_FONT_SIZE_VAR];
    property.defaultValue["size"] = baseFontSize !== undefined ? parseFloat(baseFontSize) : undefined;
  }

  const result = { ...property.defaultValue };

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