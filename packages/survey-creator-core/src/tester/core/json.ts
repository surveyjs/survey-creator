import { parse as parseJsonc, printParseErrorCode } from "jsonc-parser";
import type { ParseError } from "jsonc-parser";
import { DomDocumentHelper } from "survey-core";
import { testerText } from "../localization";

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

// The document is read with jsonc-parser rather than with JSON.parse, and it is the same reader that
// every edit goes back out through. It has to be: overview section 4 promises that a hand-formatted,
// commented suite survives being recorded into, and a widget whose only reader refused a "//" would
// report such a document as broken and block every screen but the editor - so the promise could never
// be kept, however carefully the edits preserved the comments (prompt 04; see
// promts/creator-tester-notes.md).
//
// What this widens is exactly JSONC: comments and a trailing comma. Everything else is an error, and
// the first one is reported with the offset it sits at, which is what an editor needs anyway.
export function parseJson<T = any>(text: string): ParsedJson<T> {
  if (!text.trim()) return { error: testerText("json.emptyDocument") };
  const errors: Array<ParseError> = [];
  const value = parseJsonc(text, errors, { allowTrailingComma: true }) as T;
  if (errors.length > 0) {
    return { error: testerText("json.parseErrorAt", printParseErrorCode(errors[0].error), errors[0].offset) };
  }
  return { value: value };
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
