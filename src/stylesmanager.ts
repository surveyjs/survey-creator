import * as Survey from "survey-knockout";
import * as ko from "knockout";

export class StylesManager {
  private static SurveyJSStylesSheetId = "surveyjs";

  public static Styles: { [key: string]: string } = {};

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
      "$secondary-border-color": "#ddd"
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
      "$secondary-border-color": "#ddd"
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
      "$secondary-border-color": "#ddd"
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
      "$secondary-border-color": "#ddd"
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
      "$secondary-border-color": "#ddd"
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
      "$secondary-border-color": "#ddd"
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
      "$secondary-border-color": "#ddd"
    }
  };
  public static ThemeCss: { [key: string]: string } = {
    ".svd_container": "color: $primary-text-color;",
    ".svd_container a:focus, .svd_container select:focus, .svd_container span:focus, .svd_container div:focus, .svd_container tr:focus":
      "outline-color: $primary-color;",
    ".svd_container button:focus": "outline-color: $primary-text-color;",

    ".svd_container a": "color: $primary-color;",
    ".svd_container a:hover": "color: $primary-hover-color;",
    ".svd_container .svd-main-color": "color: $primary-color;",
    ".svd_container .svd-main-border-color":
      "border-color: $selection-border-color;",
    ".svd_container .svd-main-background-color":
      "background-color: $primary-color;",
    ".svd_container .svd-light-background-color":
      "background-color: $primary-border-color;",

    ".svd_container .btn-primary":
      "color: $inverted-text-color; background-color: $secondary-color; border-color: $secondary-color;",
    ".svd_container .btn-link":
      "color: $primary-text-color; background-color: $secondary-bg-color; border-color: $secondary-bg-color;",

    ".svd_container .svd-svg-icon": "fill: $primary-icon-color;",
    ".svd_container .svd-primary-icon .svd-svg-icon": "fill: $primary-color;",
    ".svd_container .svd-secondary-icon .svd-svg-icon":
      "fill: $secondary-color;",
    ".svd_container .icon-gearactive .svd-svg-icon": "fill: $primary-color;",
    ".svd_container .nav-tabs a": "color: $primary-text-color",
    ".svd_container .nav-tabs > li.active > a": "color: $primary-color",
    ".svd_container .nav-item.active .nav-link":
      "background-color: $primary-bg-color;",

    ".svd_container .sjs-cb-container:hover input ~ .checkmark":
      "background-color: $dd-menu-border",
    ".svd_container .sjs-cb-container:hover input:checked ~ .checkmark":
      "background-color: $primary-hover-color",

    ".svd_container .svd_custom_select:before":
      "background-color: $primary-color;",
    ".svd_container .form-control:focus": "border-color: $primary-color;",

    ".svd_container .svd-light-text-color": "color: $secondary-text-color;",

    ".svd-light-bg-color": "background-color: $primary-bg-color;",
    ".svd_container .svd-light-bg-color":
      "background-color: $primary-bg-color;",

    ".svd_container .svd_toolbar li.active a":
      "background-color: $primary-color; color: $primary-bg-color;",

    ".svd_container .svd_selected_page":
      "border-bottom: 1px solid $primary-bg-color;",

    ".svd_container .editor-tabs > li > a:hover":
      "background-color: $secondary-bg-color; border-bottom: 1px solid $secondary-bg-color;",
    ".svd_container .editor-tabs > li > a:focus":
      "background-color: $secondary-bg-color; border-bottom: 1px solid $secondary-bg-color;",
    ".svd_container .editor-tabs > li.active > a":
      "color: $primary-color; background-color: $secondary-bg-color; border: 1px solid $primary-border-color; border-bottom-color: $secondary-bg-color;",

    ".svd_container .svd-light-border-color":
      "border-color: $primary-border-color",

    ".svd_container .svd-dark-border-color":
      "border-color: $secondary-border-color",

    ".svd_container .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow":
      "background:  $primary-color;",
    ".svd_container .select2-container .select2-selection--single .select2-selection__arrow":
      "background:  $primary-color;"
  };

  public static bootstrapThemeCss: { [key: string]: string } = {
    ".svd_container.sv_bootstrap_css": "color: $primary-text-color;",
    ".svd_container.sv_bootstrap_css a:focus, .svd_container.sv_bootstrap_css select:focus, .svd_container.sv_bootstrap_css span:focus, .svd_container.sv_bootstrap_css div:focus, .svd_container.sv_bootstrap_css tr:focus":
      "outline-color: $primary-color;",
    ".svd_container.sv_bootstrap_css button:focus":
      "outline-color: $primary-text-color;",

    ".svd_container.sv_bootstrap_css a": "color: $primary-color;",
    ".svd_container.sv_bootstrap_css a:hover": "color: $primary-hover-color;",
    ".svd_container.sv_bootstrap_css .svd-main-color": "color: $primary-color;",
    ".svd_container.sv_bootstrap_css .svd-main-border-color":
      "border-color: $selection-border-color;",
    ".svd_container.sv_bootstrap_css .svd-main-background-color":
      "background-color: $primary-color;",
    ".svd_container.sv_bootstrap_css .svd-light-background-color":
      "background-color: $primary-border-color;",

    ".svd_container.sv_bootstrap_css .btn-primary":
      "color: $inverted-text-color; background-color: $secondary-color; border-color: $secondary-color;",
    ".svd_container.sv_bootstrap_css .btn-link":
      "color: $primary-text-color; background-color: $secondary-bg-color; border-color: $secondary-bg-color;",

    ".svd_container.sv_bootstrap_css .svd-svg-icon":
      "fill: $primary-icon-color;",
    ".svd_container.sv_bootstrap_css .svd-primary-icon .svd-svg-icon":
      "fill: $primary-color;",
    ".svd_container.sv_bootstrap_css .svd-secondary-icon .svd-svg-icon":
      "fill: $secondary-color;",
    ".svd_container.sv_bootstrap_css .icon-gearactive .svd-svg-icon":
      "fill: $primary-color;",
    ".svd_container.sv_bootstrap_css .nav-tabs a":
      "color: $primary-text-color !important;",
    ".svd_container.sv_bootstrap_css .nav-tabs > li.active > a":
      "color: $primary-color !important;",
    ".svd_container.sv_bootstrap_css .nav-item.active .nav-link":
      "background-color: $primary-bg-color !important;",

    ".svd_container.sv_bootstrap_css .sjs-cb-container:hover input ~ .checkmark":
      "background-color: $dd-menu-border",
    ".svd_container.sv_bootstrap_css .sjs-cb-container:hover input:checked ~ .checkmark":
      "background-color: $primary-hover-color",

    ".svd_container.sv_bootstrap_css .svd_custom_select:before":
      "background-color: $primary-color;",
    ".svd_container.sv_bootstrap_css .form-control:focus":
      "border-color: $primary-color;",

    ".svd_container.sv_bootstrap_css .svd-light-text-color":
      "color: $secondary-text-color;",

    ".svd-light-bg-color": "background-color: $primary-bg-color;",
    ".svd_container.sv_bootstrap_css .svd-light-bg-color":
      "background-color: $primary-bg-color;",

    ".svd_container.sv_bootstrap_css .svd_toolbar li.active a":
      "background-color: $primary-color; color: $primary-bg-color;",

    ".svd_container.sv_bootstrap_css .svd_selected_page":
      "border-bottom: 1px solid $primary-bg-color;",

    ".svd_container.sv_bootstrap_css .editor-tabs > li > a:hover":
      "background-color: $secondary-bg-color !important; border-bottom: 1px solid $secondary-bg-color !important;",
    ".svd_container.sv_bootstrap_css .editor-tabs > li > a:focus":
      "background-color: $secondary-bg-color !important; border-bottom: 1px solid $secondary-bg-color !important",
    ".svd_container.sv_bootstrap_css .editor-tabs > li.active > a":
      "color: $primary-color !important; background-color: $secondary-bg-color !important; border: 1px solid $primary-border-color !important; border-bottom-color: $secondary-bg-color !important;",

    ".svd_container.sv_bootstrap_css .svd-light-border-color":
      "border-color: $primary-border-color",

    ".svd_container.sv_bootstrap_css .svd-dark-border-color":
      "border-color: $secondary-border-color",

    ".svd_container.sv_bootstrap_css .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow":
      "background:  $primary-color;",
    ".svd_container.sv_bootstrap_css .select2-container .select2-selection--single .select2-selection__arrow":
      "background:  $primary-color;",

    ".svd_container.sv_bootstrap_css .modal-tabs":
      "background: transparent; padding-bottom: 10px;",
    ".svd_container.sv_bootstrap_css .modal-tabs > li > a":
      "color: $primary-text-color !important; border: 1px solid transparent !important;",
    ".svd_container.sv_bootstrap_css .modal-tabs > li > a:hover":
      "color: $primary-color !important; border-bottom: 1px solid $inverted-text-color !important;",
    ".svd_container.sv_bootstrap_css .modal-tabs > li > a:focus":
      "$primary-color !important; border-bottom: 1px solid $inverted-text-color !important;",
    ".svd_container.sv_bootstrap_css .modal-tabs > li.active > a":
      "color: $primary-color !important; border: 1px solid $primary-border-color !important; border-bottom-color: $inverted-text-color !important;",

    ".svd_container.sv_bootstrap_css .form-group.is-focused .form-control":
      "background-image: linear-gradient($primary-color, $primary-color), linear-gradient(#D2D2D2, #D2D2D2);",
    ".svd_container.sv_bootstrap_css .form-group.is-focused label":
      "color:$primary-color;"
  };

  public static bootstrapmaterialThemeCss: { [key: string]: string } = {
    ".svd_container.sv_bootstrapmaterial_css": "color: $primary-text-color;",

    ".svd_container.sv_bootstrapmaterial_css a": "color: $primary-color;",
    ".svd_container.sv_bootstrapmaterial_css a:hover":
      "color: $primary-hover-color;",
    ".svd_container.sv_bootstrapmaterial_css .svd-main-color":
      "color: $primary-color;",
    ".svd_container.sv_bootstrapmaterial_css .svd-main-border-color":
      "border-color: $selection-border-color;",
    ".svd_container.sv_bootstrapmaterial_css .svd-main-background-color":
      "background-color: $primary-color;",
    ".svd_container.sv_bootstrapmaterial_css .svd-light-background-color":
      "background-color: $primary-border-color;",

    ".svd_container.sv_bootstrapmaterial_css .btn-primary":
      "color: $inverted-text-color; background-color: $secondary-color; border-color: $secondary-color;",
    ".svd_container.sv_bootstrapmaterial_css .btn-secondary":
      "background-color: $primary-border-color;",
    ".svd_container.sv_bootstrapmaterial_css .btn-secondary:hover":
      "opacity: 0.8;",
    ".svd_container.sv_bootstrapmaterial_css .btn-link":
      "color: $primary-text-color; background-color: $secondary-bg-color; border-color: $secondary-bg-color;",

    ".svd_container.sv_bootstrapmaterial_css .svd-svg-icon":
      "fill: $primary-icon-color;",
    ".svd_container.sv_bootstrapmaterial_css .svd-primary-icon .svd-svg-icon":
      "fill: $primary-color;",
    ".svd_container.sv_bootstrapmaterial_css .svd-secondary-icon .svd-svg-icon":
      "fill: $secondary-color;",
    ".svd_container.sv_bootstrapmaterial_css .icon-gearactive .svd-svg-icon":
      "fill: $primary-color;",
    ".svd_container.sv_bootstrapmaterial_css .nav-tabs a":
      "color: $primary-text-color !important;",
    ".svd_container.sv_bootstrapmaterial_css .nav-tabs > li.active > a":
      "color: $primary-color !important;",
    ".svd_container.sv_bootstrapmaterial_css .nav-item.active .nav-link":
      "background-color: $primary-bg-color !important;",

    ".svd_container.sv_bootstrapmaterial_css .sjs-cb-container:hover input ~ .checkmark":
      "background-color: $dd-menu-border",
    ".svd_container.sv_bootstrapmaterial_css .sjs-cb-container:hover input:checked ~ .checkmark":
      "background-color: $primary-hover-color",

    ".svd_container.sv_bootstrapmaterial_css .svd_custom_select:before":
      "background-color: $primary-color;",
    ".svd_container.sv_bootstrapmaterial_css .form-control:focus":
      "border-color: $primary-color;",

    ".svd_container.sv_bootstrapmaterial_css .svd-light-text-color":
      "color: $secondary-text-color;",

    ".svd-light-bg-color": "background-color: $primary-bg-color;",
    ".svd_container.sv_bootstrapmaterial_css .svd-light-bg-color":
      "background-color: $primary-bg-color;",

    ".svd_container.sv_bootstrapmaterial_css .svd_toolbar li.active a":
      "background-color: $primary-color; color: $primary-bg-color;",

    ".svd_container.sv_bootstrapmaterial_css .svd_selected_page":
      "border-bottom: 1px solid $primary-bg-color;",

    ".svd_container.sv_bootstrapmaterial_css .editor-tabs > li > a:hover":
      "background-color: $secondary-bg-color !important; border-bottom: 1px solid $secondary-bg-color !important;",
    ".svd_container.sv_bootstrapmaterial_css .editor-tabs > li > a:focus":
      "background-color: $secondary-bg-color !important; border-bottom: 1px solid $secondary-bg-color !important",
    ".svd_container.sv_bootstrapmaterial_css .editor-tabs > li.active > a":
      "color: $primary-color !important; background-color: $secondary-bg-color !important; border: 1px solid $primary-border-color !important; border-bottom-color: $secondary-bg-color !important;",

    ".svd_container.sv_bootstrapmaterial_css .svd-light-border-color":
      "border-color: $primary-border-color",

    ".svd_container.sv_bootstrapmaterial_css .svd-dark-border-color":
      "border-color: $secondary-border-color",

    ".svd_container.sv_bootstrapmaterial_css .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow":
      "background:  $primary-color;",
    ".svd_container.sv_bootstrapmaterial_css .select2-container .select2-selection--single .select2-selection__arrow":
      "background:  $primary-color;",

    ".svd_container.sv_bootstrapmaterial_css .svd_properties_grid  .glyphicon-edit":
      "background-color: $primary-color;",
    ".svd_container.sv_bootstrapmaterial_css .svd_properties_grid  .glyphicon-edit:hover":
      "background-color:  $primary-hover-color;",

    ".svd_container.sv_bootstrapmaterial_css .modal-tabs":
      "background: transparent; padding-bottom: 10px;",
    ".svd_container.sv_bootstrapmaterial_css .modal-tabs > li > a":
      "color: $primary-text-color !important; border: 1px solid transparent !important;",
    ".svd_container.sv_bootstrapmaterial_css .modal-tabs > li > a:hover":
      "color: $primary-color !important; border-bottom: 1px solid $inverted-text-color !important;",
    ".svd_container.sv_bootstrapmaterial_css .modal-tabs > li > a:focus":
      "$primary-color !important; border-bottom: 1px solid $inverted-text-color !important;",
    ".svd_container.sv_bootstrapmaterial_css .modal-tabs > li.active > a":
      "color: $primary-color !important; border: 1px solid $primary-border-color !important; border-bottom-color: $inverted-text-color !important;",

    ".svd_container.sv_bootstrapmaterial_css .form-group.is-focused .form-control":
      "background-image: linear-gradient($primary-color, $primary-color), linear-gradient(#D2D2D2, #D2D2D2);",
    ".svd_container.sv_bootstrapmaterial_css .form-group.is-focused label":
      "color:$primary-color;"
  };

  private sheet: CSSStyleSheet = null;

  static findSheet(styleSheetId: string) {
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (
        !!document.styleSheets[i].ownerNode &&
        document.styleSheets[i].ownerNode["id"] === styleSheetId
      ) {
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

  public static currentTheme = ko.observable("bootstrap");

  public static applyTheme(
    themeName: string = "default",
    themeSelector: string = ".svd_container"
  ) {
    StylesManager.currentTheme(themeName);

    StylesManager.applySurveyTheme(themeName);

    let sheet = StylesManager.findSheet(themeName + themeSelector);
    if (!sheet) {
      sheet = StylesManager.createSheet(themeName + themeSelector);
      let theme =
        StylesManager.ThemeColors[themeName] ||
        StylesManager.ThemeColors["default"];

      let ThemeCss;
      if (["bootstrap", "bootstrapmaterial"].indexOf(themeName) !== -1) {
        ThemeCss = StylesManager[themeName + "ThemeCss"];
      } else {
        ThemeCss = StylesManager.ThemeCss;
      }

      Object.keys(ThemeCss).forEach(selector => {
        let cssRuleText = ThemeCss[selector];
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

  public static applySurveyTheme(themeName) {
    if (["bootstrap", "bootstrapmaterial"].indexOf(themeName) !== -1) {
      Survey.Survey.cssType = themeName;
    } else {
      Survey.Survey.cssType = "default";
    }
    Survey.StylesManager.applyTheme(themeName);
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
