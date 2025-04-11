
export class DomDocumentHelper {
  public static isAvailable(): boolean {
    return "undefined" !== typeof document;
  }
  public static getBody(): HTMLElement {
    if (!DomDocumentHelper.isAvailable()) return;
    return document.body;
  }
  public static getDocumentElement(): HTMLElement {
    if (!DomDocumentHelper.isAvailable()) return;
    return document.documentElement;
  }
  public static getDocument(): Document {
    if (!DomDocumentHelper.isAvailable()) return;
    return document;
  }
  public static getCookie(): string {
    if (!DomDocumentHelper.isAvailable()) return;
    return document.cookie;
  }
  public static setCookie(newCookie: string): void {
    if (!DomDocumentHelper.isAvailable()) return;
    document.cookie = newCookie;
  }
  public static activeElementBlur(): Document {
    if (!DomDocumentHelper.isAvailable()) return;

    const activeElement = document.activeElement;
    if (!!activeElement && !!(<any>activeElement).blur) {
      (<any>activeElement).blur();
    }
  }
  public static createElement(tagName: string): HTMLElement {
    if (!DomDocumentHelper.isAvailable()) return;
    return document.createElement(tagName);
  }
  public static getComputedStyle(elt: Element): CSSStyleDeclaration {
    if (!DomDocumentHelper.isAvailable()) return new CSSStyleDeclaration();
    return document.defaultView.getComputedStyle(elt);
  }
  public static addEventListener(type: string, listener: (e?: any) => void): void {
    if (!DomDocumentHelper.isAvailable()) return;
    document.addEventListener(type, listener);
  }
  public static removeEventListener(type: string, listener: (e?: any) => void): void {
    if (!DomDocumentHelper.isAvailable()) return;
    document.removeEventListener(type, listener);
  }
}

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
      if(sheet) {
        if (Object.keys(rules).length) {
          rules.forEach((rule) => {
            try {
              sheet.insertRule(`${rule.selector} { ${rule.styles} }`, 0);
            } catch (e) { }
          });
        }
      }
    }
  }
}