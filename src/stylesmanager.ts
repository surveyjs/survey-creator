export class StylesManager {
  private static SurveyJSStylesSheetId = "surveyjs";

  public static Styles: { [key: string]: string } = {};

  public static ThemeColors: { [key: string]: { [key: string]: string } } = {
    default: {
      "$main-color": "#1ab394",
      "$svd-svg-icon-color": "#3d4d5d"
    },
    orange: {
      "$main-color": "#f78119",
      "$svd-svg-icon-color": "#3d4d5d"
    },
    darkblue: {
      "$main-color": "#3c4f6d",
      "$svd-svg-icon-color": "#3d4d5d"
    },
    darkrose: {
      "$main-color": "#68656e",
      "$svd-svg-icon-color": "#3d4d5d"
    },
    stone: {
      "$main-color": "#0f0f33",
      "$svd-svg-icon-color": "#3d4d5d"
    },
    winter: {
      "$main-color": "#3c3b40",
      "$svd-svg-icon-color": "#3d4d5d"
    },
    winterstone: {
      "$main-color": "#5ac8fa",
      "$svd-svg-icon-color": "#3d4d5d"
    }
  };
  public static ThemeCss: { [key: string]: string } = {
    ".svd_container .btn.btn-primary":
      "background-color: $main-color; border-color: $main-color;",
    ".svd_container .svd-svg-icon": "fill: $svd-svg-icon-color;",
    ".svd_container .svd-icon-green .svd-svg-icon": "fill: $main-color;",
    ".svd_container .icon-gearactive .svd-svg-icon": "fill: $main-color;"
  };

  private sheet: CSSStyleSheet = null;

  static findSheet(styleSheetId: string) {
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode["id"] === styleSheetId) {
        return <CSSStyleSheet>document.styleSheets[i];
      }
    }
    return null;
  }

  static createSheet(styleSheetId: string) {
    let style = document.createElement("style");
    style.id = styleSheetId;
    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return <CSSStyleSheet>style.sheet;
  }

  public static applyTheme(
    themeName: string = "default",
    themeSelector: string = ".svd_container"
  ) {
    let sheet = StylesManager.findSheet(themeName + themeSelector);
    if (!sheet) {
      sheet = StylesManager.createSheet(themeName + themeSelector);
      let theme =
        StylesManager.ThemeColors[themeName] ||
        StylesManager.ThemeColors["default"];
      Object.keys(StylesManager.ThemeCss).forEach(selector => {
        let cssRuleText = StylesManager.ThemeCss[selector];
        Object.keys(theme).forEach(
          colorVariableName =>
            (cssRuleText = cssRuleText.replace(
              new RegExp("\\" + colorVariableName, "g"),
              theme[colorVariableName]
            ))
        );
        sheet.insertRule(
          themeSelector + selector + " { " + cssRuleText + " }",
          0
        );
      });
    }
  }

  constructor() {
    this.sheet = StylesManager.findSheet(StylesManager.SurveyJSStylesSheetId);
    if (!this.sheet) {
      this.sheet = StylesManager.createSheet(
        StylesManager.SurveyJSStylesSheetId
      );
      this.initializeStyles(this.sheet);
    }
  }

  public initializeStyles(sheet: CSSStyleSheet) {
    Object.keys(StylesManager.Styles).forEach(selector =>
      sheet.insertRule(
        selector + " { " + StylesManager.Styles[selector] + " }",
        0
      )
    );
  }
}
