import { DomDocumentHelper } from "../utils/global_variables_utils";
export class CreatorStylesManager {
  public static Enabled = true;
  private static sheet: CSSStyleSheet = new CSSStyleSheet();

  public static insertStylesRulesIntoDocument(rules: Array<{ selector: string, styles: string }>): void {
    const _document = DomDocumentHelper.getDocument();
    if (_document && CreatorStylesManager.Enabled) {
      _document.adoptedStyleSheets.push(CreatorStylesManager.sheet);
      let cssContent = "";
      if (Object.keys(rules).length) {
        rules.forEach((rule) => {
          try {
            cssContent += `${rule.selector} { ${rule.styles} }`;
          } catch(e) { }
        });
      }

      CreatorStylesManager.sheet.replaceSync(cssContent);
    }
  }
}