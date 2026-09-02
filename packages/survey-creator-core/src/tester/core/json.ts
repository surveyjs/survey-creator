import { DomDocumentHelper } from "survey-core";

// The JSON text helpers of the widget: parsing a document a person is editing, and putting one back in
// the shape an editor shows it in. Ported from the prototype's src/util/json.ts.
//
// One of its functions did not come along: readFile() opens a file picker, which is the host
// application's furniture and never the widget's (overview section 4: the host owns both documents).
// download() did, with the console model of prompt 02 - through DomDocumentHelper, because this
// package forbids the bare `document` global that the prototype's document.createElement used.

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

// The console's "download" verb. The anchor is created through DomDocumentHelper rather than through
// document.createElement, which this package's lint forbids: in a host with no document - a server
// render, a unit test - the helper answers with null and the download is simply not offered.
export function download(fileName: string, content: string, type = "application/json"): void {
  const link = DomDocumentHelper.createElement("a") as HTMLAnchorElement | null;
  if (!link) return;
  const blob = new Blob([content], { type: type });
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}
