import type { LiveStatus } from "../core/liveRun";

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

export function mark(status?: LiveStatus): string {
  if (status === "passed") return "✓"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  if (status === "failed" || status === "error") return "✕"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  if (status === "running") return "…"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  return "·"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
}

export function isFailure(status?: LiveStatus): boolean {
  return status === "failed" || status === "error";
}
