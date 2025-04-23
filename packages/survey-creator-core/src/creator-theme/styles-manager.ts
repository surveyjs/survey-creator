import { DomDocumentHelper } from "../utils/global_variables_utils";

export class CreatorStylesManager {
  private static SurveyJSCreatorStylesSheetId = "surveyjs-creator-styles";
  public static Enabled = true;

  static findSheet(styleSheetId: string): any {
    if (!DomDocumentHelper.isAvailable()) return null;
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (!!document.styleSheets[i].ownerNode && (<any>document).styleSheets[i].ownerNode["id"] === styleSheetId) {
        return <CSSStyleSheet>document.styleSheets[i];
      }
    }
    return null;
  }

  static createSheet(styleSheetId: string): any {
    if (!DomDocumentHelper.isAvailable()) return null;
    let style = DomDocumentHelper.createElement("style") as HTMLStyleElement;
    style.id = styleSheetId;
    style.appendChild(new Text(""));
    document.head.appendChild(style);
    return <CSSStyleSheet>style.sheet;
  }

  public static insertStylesRulesIntoDocument(rules: Array<{ selector: string, styles: string }>): any {
    if (CreatorStylesManager.Enabled) {
      let sheet = CreatorStylesManager.findSheet(CreatorStylesManager.SurveyJSCreatorStylesSheetId);
      if (!sheet) {
        sheet = CreatorStylesManager.createSheet(CreatorStylesManager.SurveyJSCreatorStylesSheetId);
      }
      if (sheet) {
        if (Object.keys(rules).length) {
          rules.forEach((rule) => {
            try {
              sheet.insertRule(`${rule.selector} { ${rule.styles} }`, 0);
            } catch(e) { }
          });
        }
      }
    }
  }
}