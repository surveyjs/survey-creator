import type { ActionContainer, Base, LocalizableString } from "survey-core";

// Satisfied structurally by the RichText facade of survey-core/rich-text.
// Creator never imports that plugin; the customer passes it to registerRichTextEditor.
export interface ICreatorRichTextEditor {
  getStringEditMode(owner: Base, name: string, locStr: LocalizableString): "none" | "inline" | "block";
  attachEditor(element: HTMLElement, options: { mode: "inline" | "block", onInput?: () => void }): { toolbar: ActionContainer, detach(): void };
  sanitizeHtml(html: string, options?: { inline?: boolean }): string;
}
