import { ComponentCollection, JsonObjectProperty, Question, QuestionCompositeModel } from "survey-core";
import { getLocString } from "../../../editorLocalization";
import { assign } from "../../../utils/utils";

function getElementsJSON() {
  return [
    {
      type: "coloralpha",
      name: "backcolor",
      colorTitle: getLocString("theme.backcolor"),
      colorTitleLocation: "left",
      titleLocation: "hidden",
      descriptionLocation: "hidden"
    },
    {
      type: "coloralpha",
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

if (!ComponentCollection.Instance.getCustomQuestionByName("backgroundcornerradius")) {
  ComponentCollection.Instance.add({
    name: "backgroundcornerradius",
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

export function updateBackgroundCornerRadiusJSON() {
  const config = ComponentCollection.Instance.getCustomQuestionByName("backgroundcornerradius");
  config.json.elementsJSON = getElementsJSON();
}

const backgroundCornerRadiusSjs2VarNames: Record<string, Record<string, string>> = {
  editorpanel: {
    cornerRadius: "--sjs2-radius-form",
    backcolor: "--sjs2-color-component-formbox-default-bg",
    hovercolor: "--sjs2-color-component-check-false-hovered-bg",
  },
  questionpanel: {
    cornerRadius: "--sjs2-radius-container-panel",
    backcolor: "--sjs2-color-component-panel-default-bg",
    hovercolor: "--sjs2-color-unknown-variable-001",
  },
};

export function backgroundCornerRadiusToCssVariable(value: any = {}, property: JsonObjectProperty, themeCssVariables: { [index: string]: string }) {
  const propKey = property.name.toLowerCase();
  const varMap = backgroundCornerRadiusSjs2VarNames[propKey];
  Object.keys(value).forEach(key => {
    const cssVarName = varMap?.[key] ?? `--sjs2-${propKey}-${key}`;
    if (!property.defaultValue || value[key] !== property.defaultValue[key]) {
      themeCssVariables[cssVarName] = value[key] + (key === "cornerRadius" ? "px" : "");
    } else {
      themeCssVariables[cssVarName] = undefined;
    }
  });
}

export function backgroundCornerRadiusFromCssVariable(property: JsonObjectProperty, themeCssVariables: { [index: string]: string }, defaultBackcolorVariableName: string, defaultHovercolorVariableName: string, defaultCornerRadius: number = 4): any {
  if (!property) return;

  const propKey = property.name.toLowerCase();
  const varMap = backgroundCornerRadiusSjs2VarNames[propKey];

  if (!property.defaultValue) property.defaultValue = {};
  assign(property.defaultValue, {
    backcolor: themeCssVariables[defaultBackcolorVariableName],
    hovercolor: themeCssVariables[defaultHovercolorVariableName],
    cornerRadius: defaultCornerRadius
  });

  const result = { ...property.defaultValue };

  if (varMap) {
    (Object.keys(varMap) as Array<keyof typeof varMap>).forEach((key) => {
      const cssVarName = varMap[key];
      if (themeCssVariables[cssVarName] === undefined) return;
      if (key === "cornerRadius") {
        result[key] = parseFloat(themeCssVariables[cssVarName].toString());
      } else {
        result[key] = themeCssVariables[cssVarName];
      }
    });
  }

  // Backward compatibility for legacy variables like --sjs-editorpanel-cornerRadius
  const objFromTheme = Object.keys(themeCssVariables).filter(key => key.indexOf(propKey) !== -1 && key.indexOf("--sjs-") === 0);
  objFromTheme.forEach(key => {
    const propertyName = key.split("-").pop();
    if (propertyName === "cornerRadius" && themeCssVariables[key] !== undefined) {
      result[propertyName] = parseFloat(themeCssVariables[key].toString());
    } else {
      result[propertyName] = themeCssVariables[key];
    }
  });
  return result;
}