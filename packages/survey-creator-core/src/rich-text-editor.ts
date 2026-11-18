import { ActionContainer, Base, Serializer } from "survey-core";

export interface ICreatorRichTextEditor {
  attachEditor(element: HTMLElement, options: { mode: "inline" | "block", onInput?: () => void, onState?: () => void }): { toolbar: ActionContainer, readonly toolbarOpen?: boolean, detach(): void };
  sanitizeHtml(html: string, options?: { inline?: boolean }): string;
}

// html → block, inlinehtml → inline, every other serializer type → the plain editor.
export function richTextModeForProperty(owner: Base, name: string): "none" | "inline" | "block" {
  const typeName = owner && typeof (owner as any).getType === "function" ? (owner as any).getType() : undefined;
  const type = typeName && name ? Serializer.findProperty(typeName, name)?.type : undefined;
  if (type === "inlinehtml") return "inline";
  if (type === "html") return "block";
  return "none";
}

// Same probe the string editor uses: a handler is present when it sets options.text to a non-null value.
export function htmlToMarkdownProbe(fire: (options: any) => void, element?: any, name?: string): any {
  const options = {
    element: element,
    text: null,
    name: name,
    html: ""
  };
  fire(options);
  return options.text;
}
