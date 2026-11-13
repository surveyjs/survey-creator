import type { VersionMismatch } from "../harness/node/result.ts";

// The console rule of a core process (00, Measurement rules): a console.warn or console.error fails the scenario,
// as in survey-library, except survey-core's checkLibraryVersion message, recognized by its text. Its two versions
// go to info.versionMismatch.
export const versionMismatchPattern = /survey-core has version '([^']*)' and [\w-]+ has version '([^']*)'\. SurveyJS libraries should have the same versions/;

export interface ConsoleCapture {
  warnings: Array<string>;
  versionMismatch?: VersionMismatch;
}

export function messageText(args: Array<any>): string {
  return args.map((a: any) => (a && a.message ? a.message : String(a))).join(" ").substring(0, 300);
}

// Replaces console.warn and console.error for the rest of the process.
export function captureConsole(target: { warn: any, error: any } = console): ConsoleCapture {
  const res: ConsoleCapture = { warnings: [] };
  const capture = (kind: "warn" | "error") => (...args: Array<any>): void => {
    const text = messageText(args);
    const m = kind === "error" ? versionMismatchPattern.exec(text) : null;
    if (m) {
      res.versionMismatch = { core: m[1], creator: m[2] };
      return;
    }
    res.warnings.push(kind + ": " + text);
  };
  target.warn = capture("warn");
  target.error = capture("error");
  return res;
}
