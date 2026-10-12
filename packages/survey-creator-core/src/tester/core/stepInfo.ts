import { parseSurveyTestStep } from "survey-core/tester";
import type { ISurveyTestStep } from "survey-core/tester";
import { testerText } from "../localization";

// One command per step, and the tester parses it: metadata keys never count as one, and a step that
// holds none or several is reported as what it is rather than as one of them. Everything below reads the
// one parse, so the name shown, the payload read and the targets listed always describe the same step.
export function getStepCommandName(step: ISurveyTestStep | undefined): string {
  const parsed = parseSurveyTestStep(step as ISurveyTestStep);
  // A step with none or several is a broken case: the runner reports it, and the display shows what
  // was written rather than pretending one of them is the command.
  return parsed.command !== undefined ? parsed.command : parsed.commands.join(" + ");
}

// The payload of the command a step holds, and only when it is the command being asked about: a broken
// step has no single payload, and the joined name of two commands is not a key of anything.
export function getStepParams(step: ISurveyTestStep | undefined, command: string): any {
  const parsed = parseSurveyTestStep(step as ISurveyTestStep);
  return parsed.command === command ? parsed.params : undefined;
}

export function getStepTargets(step: ISurveyTestStep | undefined, command: string): Array<string> {
  const params = getStepParams(step, command);
  if (!params || typeof params !== "object" || Array.isArray(params)) return [];
  return Object.keys(params);
}

export function formatValue(value: any, maxLength = 80): string {
  if (value === undefined) return "undefined";
  let text: string;
  try {
    text = JSON.stringify(value);
  } catch{
    text = String(value);
  }
  if (text === undefined) text = String(value);
  return text.length > maxLength ? testerText("common.truncated", text.substring(0, maxLength - 1)) : text;
}

export function getSuiteTests(suite: any): Array<any> {
  return !!suite && Array.isArray(suite.tests) ? suite.tests : [];
}

// A subset run is not built here any more: the suite handed to the runner is always the document the
// Tests tab holds, and "testFilter" says which of its entries this run holds - see useRunner. Nothing
// is copied, nothing is re-flagged as disabled, and the test indices are the document's own.
