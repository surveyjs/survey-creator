import * as Survey from "survey-core";
import * as ko from "knockout";

export class StylesManager {
  public static ThemeVariablesMap = {
    "$primary-color": "--primary-color",
    "$secondary-color": "--secondary-color",
    "$primary-text-color": "--primary-text-color",
    "$secondary-text-color": "--secondary-text-color",
    "$inverted-text-color": "--inverted-text-color",
    "$primary-hover-color": "--primary-hover-color",
    "$selection-border-color": "--selection-border-color",
    "$primary-icon-color": "--primary-icon-color",
    "$primary-bg-color": "--primary-bg-color",
    "$secondary-bg-color": "--secondary-bg-color",
    "$primary-border-color": "--primary-border-color",
    "$secondary-border-color": "--secondary-border-color",
    "$error-color": "--error-color",
  };

  public static ThemeColors: { [key: string]: { [key: string]: string } } = {
    default: {
      "$primary-color": "#1ab394",
      "$secondary-color": "#1ab394",
      "$primary-text-color": "#676a6c",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#18a689",
      "$selection-border-color": "#1ab394",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd",
      "$error-color": "#ed5565",
    },
    orange: {
      "$primary-color": "#f78119",
      "$secondary-color": "#4a4a4a",
      "$primary-text-color": "#676a6c",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#e77109",
      "$selection-border-color": "#4a4a4a",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd",
      "$error-color": "#ed5565",
    },
    darkblue: {
      "$primary-color": "#3c4f6d",
      "$secondary-color": "#3c4f6d",
      "$primary-text-color": "#676a6c",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#2c3f5d",
      "$selection-border-color": "#4a4a4a",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd",
      "$error-color": "#ed5565",
    },
    darkrose: {
      "$primary-color": "#68656e",
      "$secondary-color": "#68656e",
      "$primary-text-color": "#676a6c",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#57545e",
      "$selection-border-color": "#4a4a4a",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd",
      "$error-color": "#ed5565",
    },
    stone: {
      "$primary-color": "#0f0f33",
      "$secondary-color": "#0f0f33",
      "$primary-text-color": "#676a6c",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#000023",
      "$selection-border-color": "#cdccd2",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd",
      "$error-color": "#ed5565",
    },
    winter: {
      "$primary-color": "#5ac8fa",
      "$secondary-color": "#5ac8fa",
      "$primary-text-color": "#676a6c",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#4ad8ea",
      "$selection-border-color": "#82b8da",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd",
      "$error-color": "#ed5565",
    },
    winterstone: {
      "$primary-color": "#3c3b40",
      "$secondary-color": "#3c3b40",
      "$primary-text-color": "#676a6c",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#1c1b20",
      "$selection-border-color": "#b8b8b8",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd",
      "$error-color": "#ed5565",
    },
  };

  public static currentTheme = ko.observable("bootstrap");

  public static applyTheme(themeName: string = "default") {
    StylesManager.currentTheme(themeName);
    Survey.StylesManager.applyTheme(themeName);

    if (!document || !document.body || !document.body.style) {
      return;
    }

    let theme =
      StylesManager.ThemeColors[themeName] ||
      StylesManager.ThemeColors["default"];

    Object.keys(theme).forEach((colorVariableName) => {
      let cssVariableName = StylesManager.ThemeVariablesMap[colorVariableName];
      if (!!cssVariableName && theme[colorVariableName]) {
        document.body.style.setProperty(
          cssVariableName,
          theme[colorVariableName]
        );
      }
    });

    // IE 11 polyfill
    // if(!window.MSInputMethodContext && !document["documentMode"]) {
    //   document.write('<script src="yourJsPath/ie11CustomProperties.js"><\x2fscript>');
    // }
  }
}
