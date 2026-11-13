import { Serializer } from "survey-core";
import type { ActionContainer } from "survey-core";

// Satisfied structurally by the RichText facade of survey-core/rich-text.
// Creator never imports that plugin; the customer passes it to registerRichTextEditor.
// toolbarOpen is the on-selection toolbar: true while text is selected, the toolbar has focus,
// or the link dialog is open. onState runs when that changes.
export interface IRichTextEditorHandle {
  toolbar: ActionContainer;
  detach(): void;
  readonly toolbarOpen?: boolean;
}

export interface ICreatorRichTextEditor {
  attachEditor(element: HTMLElement, options: { mode: "inline" | "block", onInput?: () => void, onState?: () => void }): IRichTextEditorHandle;
  sanitizeHtml(html: string, options?: { inline?: boolean }): string;
}

// "html" is a block of paragraphs and lists. "inlinehtml" is one line of character formatting.
// Every other property stays plain text. An application that wants a survey string edited as rich
// text changes that property's serializer type; Creator does not consult onTextMarkdown.
export function richTextModeForProperty(owner: any, name: string): "none" | "inline" | "block" {
  const typeName = owner && typeof owner.getType === "function" ? owner.getType() : undefined;
  const type = typeName && name ? Serializer.findProperty(typeName, name)?.type : undefined;
  if (type === "inlinehtml") return "inline";
  if (type === "html") return "block";
  return "none";
}
