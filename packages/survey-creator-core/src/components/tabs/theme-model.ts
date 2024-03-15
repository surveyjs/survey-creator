import { Base, ItemValue, JsonObjectProperty, Question, Serializer, property } from "survey-core";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { PredefinedColors, PredefinedThemes } from "./themes";
import { ThemeEditorModel } from "./theme-builder";
import { ISurveyCreatorOptions, settings } from "../../creator-settings";
import { PropertyGridEditor, PropertyGridEditorCollection } from "../../property-grid";
import { DefaultFonts } from "./theme-custom-questions/font-settings";
import { HeaderModel } from "./header-model";
export * from "./header-model";

export class ThemeModel extends Base {
  @property() themePalette: string;
  header: HeaderModel;

  public getType(): string {
    return "themebuilder";
  }

  constructor() {
    super();
    this.setPropertyValue("header", new HeaderModel());
  }

  getPredefinedChoices(propertyName: string): Array<ItemValue> {
    if (propertyName === "--sjs-general-backcolor-dim" || propertyName === "generalPrimaryColor")
      return Object.keys(PredefinedColors[this.themePalette]).map(colorName =>
        new ItemValue(PredefinedColors[this.themePalette][colorName], getLocString("theme.colors." + colorName))
      );
  }
}

Serializer.addClass(
  "themebuilder",
  [
    {
      type: "dropdown",
      name: "themeName",
      displayName: getLocString("theme.themeName"),
      choices: PredefinedThemes.map(theme => ({ value: theme, text: getLocString("theme.names." + theme) })),
      default: ThemeEditorModel.DefaultTheme.themeName || "default",
      category: "general",
    }, {
      type: "buttongroup",
      name: "themePalette",
      displayName: "",
      choices: [
        { value: "light", text: getLocString("theme.themePaletteLight") },
        { value: "dark", text: getLocString("theme.themePaletteDark") }
      ],
      default: "light",
      category: "general",
    }, {
      type: "buttongroup",
      name: "themeMode",
      displayName: getLocString("theme.themeMode"),
      choices: [
        { value: "panels", text: getLocString("theme.themeModePanels") },
        { value: "lightweight", text: getLocString("theme.themeModeLightweight") }],
      default: "panels",
      category: "general",
    }, {
      type: "color",
      name: "--sjs-general-backcolor-dim",
      displayName: getLocString("theme.backgroundDimColor"),
      category: "background",
    }, {
      name: "backgroundImage:file",
      category: "background",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.storeDataAsText = false;
          editor.acceptedTypes = "image/*";
          editor.placeholder = "Browse...";
        }
      }
    }, {
      name: "backgroundImageFit",
      displayName: "",
      enableIf: function (obj) {
        return !!obj.backgroundImage;
      },
      choices: [
        { value: "auto", text: getLocString("theme.backgroundImageFitAuto") },
        { value: "contain", text: getLocString("theme.backgroundImageFitContain") },
        { value: "cover", text: getLocString("theme.backgroundImageFitCover") }
      ],
      default: "cover",
      category: "background",
    }, {
      name: "backgroundImageAttachment",
      displayName: "",
      enableIf: function (obj) {
        return !!obj.backgroundImage;
      },
      choices: [
        { value: "fixed", text: getLocString("theme.backgroundImageAttachmentFixed") },
        { value: "scroll", text: getLocString("theme.backgroundImageAttachmentScroll") }
      ],
      default: "scroll",
      category: "background",
    }, {
      type: "spinedit",
      name: "backgroundImageOpacity",
      displayName: getLocString("theme.backgroundOpacity"),
      enableIf: function (obj) {
        return !!obj.backgroundImage;
      },
      default: 100,
      category: "background",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
          editor.titleLocation = "left";
        }
      }
    }, {
      type: "headersettings",
      name: "header",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          const questions = editor.contentPanel.elements;
          const callback = (editor: Question) => {
            const obj: Base = (<any>editor).obj;
            if (!obj) return;
            const property: JsonObjectProperty = (<any>editor).property;
            if (!!property && property.onPropertyEditorUpdate) {
              property.onPropertyEditorUpdate(obj, editor);
            }
          }
          for (var i = 0; i < questions.length; i++) {
            callback(questions[i]);
          }
        }
      }
    }, {
      type: "color",
      name: "generalPrimaryColor",
      displayName: getLocString("theme.primaryColor"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.descriptionLocation = "hidden";
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "spinedit",
      name: "panelBackgroundTransparency",
      displayName: getLocString("theme.panelBackgroundTransparency"),
      default: 100,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "spinedit",
      name: "questionBackgroundTransparency",
      displayName: getLocString("theme.questionBackgroundTransparency"),
      default: 100,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "dropdown",
      name: "--sjs-font-family",
      displayName: getLocString("theme.fontFamily"),
      choices: [].concat(DefaultFonts),
      default: "Open Sans",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.descriptionLocation = "hidden";
          editor.allowClear = false;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "spinedit",
      name: "commonFontSize",
      displayName: getLocString("theme.fontSize"),
      default: 100,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "spinedit",
      name: "commonScale",
      displayName: getLocString("theme.scale"),
      default: 100,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "spinedit",
      name: "cornerRadius",
      displayName: getLocString("theme.cornerRadius"),
      default: 4,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "px";
          editor.min = 0;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "colorsettings",
      name: "--sjs-primary-backcolor",
      displayName: getLocString("theme.accentBackground"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.primaryDefaultColor");
          editor.colorTitleLocation = "left";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "colorsettings",
      name: "--sjs-primary-backcolor-dark",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.primaryDarkColor");
          editor.colorTitleLocation = "left";
          editor.titleLocation = "hidden";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "colorsettings",
      name: "--sjs-primary-backcolor-light",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.primaryLightColor");
          editor.colorTitleLocation = "left";
          editor.titleLocation = "hidden";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "colorsettings",
      name: "--sjs-primary-forecolor",
      displayName: getLocString("theme.accentForeground"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.primaryForecolor");
          editor.colorTitleLocation = "left";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "colorsettings",
      name: "--sjs-primary-forecolor-light",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.primaryForecolorLight");
          editor.colorTitleLocation = "left";
          editor.titleLocation = "hidden";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "fontsettings",
      name: "pageTitle",
      displayName: getLocString("theme.titleFont"),
      default: {
        family: settings.theme.fontFamily,
        color: "rgba(0, 0, 0, 0.91)",
        weight: "700",
        size: 24
      },
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "fontsettings",
      name: "pageDescription",
      displayName: getLocString("theme.descriptionFont"),
      default: {
        family: settings.theme.fontFamily,
        color: "rgba(0, 0, 0, 0.91)",
        weight: "700",
        size: 24
      },
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "elementsettings",
      name: "questionPanel",
      displayName: getLocString("theme.backgroundCornerRadius"),
      default: {
        backcolor: "rgba(255, 255, 255, 1)",
        hovercolor: "rgba(248, 248, 248, 1)",
        cornerRadius: "4px",
        corner: 4
      },
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "boxshadowsettings",
      name: "--sjs-shadow-small",
      displayName: getLocString("theme.shadow"),
      default: [
        {
          x: 0,
          y: 1,
          blur: 2,
          spread: 0,
          isInset: false,
          color: "rgba(0, 0, 0, 0.15)"
        }
      ],
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "fontsettings",
      name: "questionTitle",
      displayName: getLocString("theme.titleFont"),
      default: {
        family: settings.theme.fontFamily,
        color: "rgba(0, 0, 0, 0.91)",
        weight: "600",
        size: 16,
      },
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "fontsettings",
      name: "questionDescription",
      displayName: getLocString("theme.descriptionFont"),
      default: {
        family: settings.theme.fontFamily,
        color: "rgba(0, 0, 0, 0.45)",
        weight: "400",
        size: 16
      },
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "elementsettings",
      name: "editorPanel",
      displayName: getLocString("theme.backgroundCornerRadius"),
      default: {
        backcolor: "rgba(255, 255, 255, 1)",
        hovercolor: "rgba(248, 248, 248, 1)",
        cornerRadius: "4px",
        corner: 4
      },
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      }
    },
    {
      type: "boxshadowsettings",
      name: "--sjs-shadow-inner",
      displayName: getLocString("theme.shadow"),
      default: [
        {
          x: 0,
          y: 1,
          blur: 2,
          spread: 0,
          isInset: true,
          color: "rgba(0, 0, 0, 0.15)"
        }
      ],
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "fontsettings",
      name: "editorFont",
      displayName: getLocString("theme.font"),
      default: {
        family: settings.theme.fontFamily,
        color: "rgba(0, 0, 0, 0.91)",
        weight: "400",
        size: 16
      },
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "colorsettings",
      name: "--sjs-border-default",
      displayName: getLocString("theme.colorsTitle"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.borderDefault");
          editor.colorTitleLocation = "left";
          editor.descriptionLocation = "hidden";
        }
      }
    },
    {
      type: "colorsettings",
      name: "--sjs-border-light",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.borderLight");
          editor.colorTitleLocation = "left";
          editor.titleLocation = "hidden";
          editor.descriptionLocation = "hidden";
        }
      }
    }
  ]
);

export class PropertyGridEditorSpinEdit extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "spinedit";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const res: any = { type: "spinedit", descriptionLocation: "hidden" };
    return res;
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorSpinEdit());

export class PropertyGridEditorColorSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "colorsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "colorsettings", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorColorSettings());

export class PropertyGridEditorFontSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "fontsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "fontSettings", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorFontSettings());

export class PropertyGridEditorElementSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "elementsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "elementsettings", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorElementSettings());

export class PropertyGridEditorBoxShadowSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "boxshadowsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "boxshadowsettings", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorBoxShadowSettings());