export class CreatorStylesManager {
  public static Enabled = true;
  private static sheet: CSSStyleSheet = new CSSStyleSheet();

  public static insertStylesRulesIntoDocument(rules: Array<{ selector: string, styles: string }>): void {
    if (CreatorStylesManager.Enabled && "undefined" !== typeof document) {
      document.adoptedStyleSheets.push(CreatorStylesManager.sheet);
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