import type { LiveStatus } from "../core/liveRun";
import { testerText } from "../localization";

// How a status is drawn, in one place, because the dot of a test row and the mark of a step row are the
// same statement about the same kind of thing.
//
// It lives in the model layer rather than beside the markup because the rows read it off themselves -
// TesterTestRowModel.toneCss and TesterStepRowModel.toneCss - so a row and a step cannot drift apart about what a
// failure looks like, and neither can two places in the markup.

// Three tones only: passed, failed, and everything that has not produced a verdict. The word appears on
// failure alone - the dot carries the rest.
export function tone(status?: LiveStatus): string {
  if (status === "passed") return "passed";
  if (status === "failed" || status === "error") return "failed";
  if (status === "running") return "running";
  return "idle";
}

// The glyph, not the class: it is a person-readable character and it lives in the string table with
// everything else the widget says. The path is keyed by the tone above, which is a closed set of four -
// localization.test.ts enumerates it rather than grepping for it.
export function mark(status?: LiveStatus): string {
  return testerText("marks." + tone(status));
}

export function isFailure(status?: LiveStatus): boolean {
  return status === "failed" || status === "error";
}
