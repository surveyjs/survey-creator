import { Base, ItemValue, JsonObjectProperty, Serializer, property } from "survey-core";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { PredefinedColors, PredefinedThemes } from "./themes";
import { ThemeEditorModel } from "./theme-builder";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { PropertyGridEditor, PropertyGridEditorCollection } from "../../property-grid";
import { DefaultFonts } from "./theme-custom-questions/font-settings";

export class ThemeModel extends Base {
  @property() themePalette: string;

  public getType(): string {
    return "themebuilder";
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
      type: "spineditpercentcompact",
      name: "backgroundImageOpacity",
      displayName: getLocString("theme.backgroundOpacity"),
      enableIf: function (obj) {
        return !!obj.backgroundImage;
      },
      default: 100,
      category: "background",
    },
    {
      type: "color",
      name: "generalPrimaryColor",
      displayName: getLocString("theme.primaryColor"),
      // descriptionLocation: "hidden",
    },
    {
      type: "spineditpercent",
      name: "panelBackgroundTransparency",
      displayName: getLocString("theme.panelBackgroundTransparency"),
      default: 100,
    },
    {
      type: "spineditpercent",
      name: "questionBackgroundTransparency",
      displayName: getLocString("theme.questionBackgroundTransparency"),
      default: 100,
    },
    {
      type: "dropdown",
      name: "--sjs-font-family",
      displayName: getLocString("theme.fontFamily"),
      // descriptionLocation: "hidden",
      choices: [].concat(DefaultFonts),
      default: "Open Sans",
      // allowClear: false,
    },
    {
      type: "spineditpercent",
      name: "commonFontSize",
      displayName: getLocString("theme.fontSize"),
      default: 100,
    },
    {
      type: "spineditpercent",
      name: "commonScale",
      displayName: getLocString("theme.scale"),
      default: 100,
    },
    {
      type: "spineditpixel",
      name: "cornerRadius",
      displayName: getLocString("theme.cornerRadius"),
      default: 4,
    },
  ]
);

export class PropertyGridEditorColorSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "colorsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const res: any = { type: "colorsettings", allowEmptyValue: true };
    return res;
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorColorSettings());

export class PropertyGridEditorPercentSpinedit extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "spineditpercent";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const res: any = { type: "spinedit", unit: "%", min: 0, max: 100, step: 5, descriptionLocation: "hidden" };
    return res;
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorPercentSpinedit());

export class PropertyGridEditorPercentSpineditCompact extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "spineditpercentcompact";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const res: any = { type: "spinedit", unit: "%", min: 0, max: 100, step: 5, titleLocation: "left", descriptionLocation: "hidden" };
    return res;
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorPercentSpineditCompact());

export class PropertyGridEditorPixelSpinedit extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "spineditpixel";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const res: any = { type: "spinedit", unit: "px", min: 0, descriptionLocation: "hidden" };
    return res;
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorPixelSpinedit());