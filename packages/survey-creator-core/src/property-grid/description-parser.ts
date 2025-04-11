export class DescriptionMardownParser {
  private static boldRegEx;
  private static italicRegEx;
  private static codeRegEx;
  private static linkRegEx;
  public parse(text: string): string {
    if (!DescriptionMardownParser.boldRegEx) {
      DescriptionMardownParser.boldRegEx = /\*{2}(.*?)\*{2}/gm;
      DescriptionMardownParser.italicRegEx = /\_(.*?)\_/gm;
      DescriptionMardownParser.codeRegEx = /\`(.*?)\`/gm;
      DescriptionMardownParser.linkRegEx = /\[(.+)\]\(([^ ]+?)( "(.+)")?\)/;
    }
    const createSpan = (text: string, str: string, className: string, chars: string): string => {
      if (!str) return text;
      const index = text.indexOf(str);
      if (checkIfLink(text, index)) return text;
      let innerStr = str.substring(chars.length, str.length);
      innerStr = innerStr.substring(0, innerStr.length - chars.length);
      const newStr = "<span class='" + className + "'>" + innerStr + "</span>";
      return text.replace(str, newStr);
    };
    const checkIfLink = (text: string, index: number): boolean => {
      let isBracket = false;
      for (let i = index - 1; i > 0; i --) {
        if (text[i] === " " || text[i] === "\n") return false;
        if (text[i] === "]" && isBracket) return true;
        isBracket = text[i] === "(";
      }
      return false;
    };
    const createLink = (text: string, str: string, className: string, chars: string): string => {
      if (!str) return text;
      const index = str.indexOf("](");
      if (index < 0) return text;

      const contentStr = str.substring(1, index);
      const linkStr = str.substring(index + 2, str.length - 1);
      const newStr = "<a class='" + className + "' target='_blank' href='" + linkStr + "'>" + contentStr + "</a>";
      return text.replace(str, newStr);
    };
    text = this.replace(DescriptionMardownParser.boldRegEx, text, "spg-bold", "**", createSpan);
    text = this.replace(DescriptionMardownParser.italicRegEx, text, "spg-italic", "_", createSpan);
    text = this.replace(DescriptionMardownParser.codeRegEx, text, "spg-code", "`", createSpan);
    text = this.replace(DescriptionMardownParser.linkRegEx, text, "spg-link", "", createLink);
    text = this.addLineBreaks(text);
    return text;
  }
  private replace(re: RegExp, text: string, className: string, chars: string, replaceFunc: (text: string, str: string, className: string, chars: string) => string): string {
    const rArray = text.match(re);
    if (!Array.isArray(rArray) || rArray.length == 0) return text;
    for (var i = 0; i < rArray.length; i ++) {
      text = replaceFunc(text, rArray[i], className, chars);
    }
    return text;
  }
  private addLineBreaks(text: string): string {
    const br = "\n";
    if (text.indexOf(br) < 0) return text;
    const strs = text.split(br);
    return strs.join("<br/>");
  }
}

export function parsePropertyDescription(text: string): string {
  return new DescriptionMardownParser().parse(text);
}