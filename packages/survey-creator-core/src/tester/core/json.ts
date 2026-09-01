// The JSON text helpers of the widget: parsing a document a person is editing, and putting one back in
// the shape an editor shows it in. Ported from the prototype's src/util/json.ts.
//
// Two of its functions did not come along. readFile() opens a file picker, which is the host
// application's furniture and never the widget's (overview section 4: the host owns both documents).
// download() is the console's "save the transcript" action and arrives with the console model in
// prompt 02 - it writes to the DOM, and this package forbids the bare `document` global, so it needs
// DomDocumentHelper rather than the prototype's document.createElement.

export interface ParsedJson<T = any> {
  value?: T;
  error?: string;
}

export function parseJson<T = any>(text: string): ParsedJson<T> {
  if (!text.trim()) return { error: "The document is empty." };
  try {
    return { value: JSON.parse(text) as T };
  } catch(error) {
    return { error: !!error && (error as any).message ? (error as any).message : String(error) };
  }
}

export function formatJson(value: any): string {
  return JSON.stringify(value, null, 2) + "\n";
}

export function reformat(text: string): string {
  const parsed = parseJson(text);
  return parsed.error !== undefined ? text : formatJson(parsed.value);
}

export function copyToClipboard(text: string): void {
  void navigator.clipboard.writeText(text);
}
