export class StylesManager {
  private static SurveyJSStylesSheetId = "surveyjs";

  public static Styles: { [key: string]: string } = {};

  public static ThemeColors: { [key: string]: { [key: string]: string } } = {
    default: {
      "$main-color": "#1ab394",
      "$text-color": "#676a6c",
      "$light-text-color": "#a7a7a7",
      "$dark-main-color": "#18a689",
      "$svd-svg-icon-color": "#3d4d5d",
      "$light-bg-color": "#fff",
      "$dark-bg-color": "#f4f4f4",
      "$light-border-color": "#e7eaec",
      "$dark-border-color": "#ddd"
    },
    orange: {
      "$main-color": "#f78119",
      "$text-color": "#4a4a4a",
      "$light-text-color": "#a7a7a7",
      "$dark-main-color": "#e77109",
      "$svd-svg-icon-color": "#3d4d5d",
      "$light-bg-color": "lightgray",
      "$dark-bg-color": "#f4f4f4",
      "$light-border-color": "#e7eaec",
      "$dark-border-color": "#ddd"
    },
    darkblue: {
      "$main-color": "#3c4f6d",
      "$text-color": "#4a4a4a",
      "$light-text-color": "#a7a7a7",
      "$dark-main-color": "#18a689",
      "$svd-svg-icon-color": "#3d4d5d",
      "$light-bg-color": "#fff",
      "$dark-bg-color": "#f4f4f4",
      "$light-border-color": "#e7eaec",
      "$dark-border-color": "#ddd"
    },
    darkrose: {
      "$main-color": "#68656e",
      "$text-color": "#4a4a4a",
      "$light-text-color": "#a7a7a7",
      "$dark-main-color": "#18a689",
      "$svd-svg-icon-color": "#3d4d5d",
      "$light-bg-color": "#fff",
      "$dark-bg-color": "#f4f4f4",
      "$light-border-color": "#e7eaec",
      "$dark-border-color": "#ddd"
    },
    stone: {
      "$main-color": "#0f0f33",
      "$text-color": "#0f0f33",
      "$light-text-color": "#a7a7a7",
      "$dark-main-color": "#0f0f23",
      "$svd-svg-icon-color": "#3d4d5d",
      "$light-bg-color": "#fff",
      "$dark-bg-color": "#f4f4f4",
      "$light-border-color": "#e7eaec",
      "$dark-border-color": "#ddd"
    },
    winter: {
      "$main-color": "#3c3b40",
      "$text-color": "#000",
      "$light-text-color": "#a7a7a7",
      "$dark-main-color": "#2c2b30",
      "$svd-svg-icon-color": "#3d4d5d",
      "$light-bg-color": "#fff",
      "$dark-bg-color": "#f4f4f4",
      "$light-border-color": "#e7eaec",
      "$dark-border-color": "#ddd"
    },
    winterstone: {
      "$main-color": "#5ac8fa",
      "$text-color": "#000",
      "$light-text-color": "#a7a7a7",
      "$dark-main-color": "#18a689",
      "$svd-svg-icon-color": "#3d4d5d",
      "$light-bg-color": "#fff",
      "$dark-bg-color": "#f4f4f4",
      "$light-border-color": "#e7eaec",
      "$dark-border-color": "#ddd"
    }
  };
  public static ThemeCss: { [key: string]: string } = {
    ".svd_container": "color: $text-color;",

    ".svd_container a": "color: $main-color;",
    ".svd_container a:hover": "color: $dark-main-color;",
    ".svd_container .svd-main-color": "color: $main-color;",
    ".svd_container .svd-main-border-color": "border-color: $main-color;",
    ".svd_container .svd-main-background-color":
      "background-color: $main-color;",
    ".svd_container .btn-primary":
      "color: $light-bg-color; background-color: $main-color; border-color: $main-color;",
    ".svd_container .svd-svg-icon": "fill: $svd-svg-icon-color;",
    ".svd_container .svd-icon-green .svd-svg-icon": "fill: $main-color;",
    ".svd_container .icon-gearactive .svd-svg-icon": "fill: $main-color;",
    ".svd_container .nav-tabs a": "color: $text-color",
    ".svd_container .nav-tabs > li.active > a": "color: $main-color",

    ".svd_container .sjs-cb-container:hover input ~ .checkmark":
      "background-color: $dd-menu-border",
    ".svd_container .sjs-cb-container:hover input:checked ~ .checkmark":
      "background-color: $dark-main-color",

    ".svd_container .svd_custom_select:before":
      "background-color: $main-color;",
    ".svd_container .form-control:focus": "border-color: $main-color;",

    ".svd_container .svd-light-text-color": "color: $light-text-color;",

    ".svd-light-bg-color": "background-color: $light-bg-color;",
    ".svd_container .svd-light-bg-color": "background-color: $light-bg-color;",

    ".svd_container .svd_toolbar li.active a":
      "background-color: $main-color; color: $light-bg-color;",

    ".svd_container .svd_selected_page":
      "border-bottom: 1px solid $light-bg-color;",

    ".svd_container .editor-tabs > li > a:hover":
      "background-color: $dark-bg-color; border-bottom: 1px solid $dark-bg-color;",
    ".svd_container .editor-tabs > li > a:focus":
      "background-color: $dark-bg-color; border-bottom: 1px solid $dark-bg-color;",
    ".svd_container .editor-tabs > li.active > a":
      "color: $main-color; background-color: $dark-bg-color; border: 1px solid $light-border-color; border-bottom-color: $dark-bg-color;",

    ".svd_container .svd-light-border-color":
      "border-color: $light-border-color",

    ".svd_container .svd-dark-border-color": "border-color: $dark-border-color"
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

  public static currentTheme = "bootstrap";

  public static applyTheme(
    themeName: string = "default",
    themeSelector: string = ".svd_container"
  ) {
    StylesManager.currentTheme = themeName;

    if (themeName === "default") {
      themeSelector += " .svd-bootstrap-theme";
    }

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
