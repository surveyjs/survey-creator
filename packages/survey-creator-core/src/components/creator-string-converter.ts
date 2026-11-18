import { Base, DomDocumentHelper, LocalizableString, SurveyModel } from "survey-core";
import { richTextModeForProperty } from "../rich-text-editor";

const converters = new WeakMap<any, any>();

function escapeHtml(text: string): string {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function htmlToPlainText(html: string): string {
  const element = DomDocumentHelper.createElement("div");
  if (!element) return html || "";
  element.innerHTML = html || "";
  return element.textContent || "";
}

export function isCreatorRichStringsEnabled(creator: any): boolean {
  return !!creator && typeof creator.isRichStringsEnabled === "function" && !!creator.isRichStringsEnabled() && !!creator.richTextEditor;
}

// Property-grid and translation cells live in internal surveys that have no customer handlers.
// This converter uses the edited survey for rendering and creator.onHtmlToMarkdown for saving.
export function getCreatorStringConverter(creator: any): any {
  if (!creator || !creator.survey || typeof creator.onHtmlToMarkdown?.fire !== "function") return undefined;
  let converter = converters.get(creator);
  if (converter) return converter;
  const survey = creator.survey as SurveyModel;
  converter = {
    lossless: true,
    toHtml(source: string, ctx: { element?: Base, name?: string }): string {
      const raw = survey.getSurveyMarkdownHtml(ctx && ctx.element as any, source || "", (ctx && ctx.name) || "", undefined);
      if (!raw) return escapeHtml(source).replace(/\n/g, "<br>");
      return raw;
    },
    toSource(root: HTMLElement, ctx: { element?: Base, name?: string }): string {
      const options: any = {
        element: ctx && ctx.element,
        name: ctx && ctx.name,
        html: root.innerHTML,
        text: null
      };
      creator.onHtmlToMarkdown.fire(creator, options);
      return options.text !== null && options.text !== undefined ? options.text : root.innerText;
    }
  };
  converters.set(creator, converter);
  return converter;
}

export function assignCreatorStringConverter(question: any, creator: any): void {
  if (!question || !question.allowRichText) return;
  const converter = getCreatorStringConverter(creator);
  if (converter) question.richTextConverter = converter;
}

export function richTranslationCellType(creator: any, owner: Base, locStr: LocalizableString): string | undefined {
  if (!isCreatorRichStringsEnabled(creator) || !locStr || locStr.getIsMultiple()) return undefined;
  if (richTextModeForProperty(owner, locStr.name) === "none") return undefined;
  return "richtext";
}

export function plainRichPlaceholder(question: any, source: string, creator: any): string {
  const editor = creator && creator.richTextEditor;
  if (!question || question.getType() !== "richtext" || !editor || typeof editor.sanitizeHtml !== "function") return source || "";
  return htmlToPlainText(editor.sanitizeHtml(source || ""));
}

export function applyRichTextTranslationCell(question: any, creator: any, owner: Base, locStr: LocalizableString): void {
  if (!question || !locStr) return;
  const mode = richTextModeForProperty(owner, locStr.name);
  if (mode === "none" || question.getType() !== "richtext") return;
  question.acceptCarriageReturn = mode === "block";
}
