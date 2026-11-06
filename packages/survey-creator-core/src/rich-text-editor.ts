import type { ActionContainer, Base, LocalizableString } from "survey-core";

export interface ICreatorRichTextEditor {
  getStringEditMode(owner: Base, name: string, locStr: LocalizableString): "none" | "inline" | "block";
  attachEditor(element: HTMLElement, options: { mode: "inline" | "block", onInput?: () => void }): { toolbar: ActionContainer, detach(): void };
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
