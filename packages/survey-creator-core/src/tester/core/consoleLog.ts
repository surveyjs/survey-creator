import type { SurveyTestExecutionEvent } from "survey-core/tester";
import { testerText } from "../localization";
import type { ConsoleVerbosity } from "./hostOptions";
import { formatValue, getStepCommandName, getStepTargets, getSuiteTests } from "./stepInfo";

// The console is a transcript of the event stream: one row per event, in the order the runner emitted
// them. Rows are never merged or reordered - the order is the information.

export type ConsoleLevel = "info" | "pass" | "fail" | "warn" | "error" | "muted";

export interface ConsoleRow {
  id: number;
  atMs: number;
  level: ConsoleLevel;
  // What produced the row: the tester's event stream, or this application.
  source: "tester" | "host";
  text: string;
  detail?: string;
  indent: 0 | 1 | 2;
  event?: SurveyTestExecutionEvent;
  testIndex?: number;
  stepIndex?: number;
}

interface RowDraft {
  level: ConsoleLevel;
  text: string;
  detail?: string;
  indent: 0 | 1 | 2;
}

const statusLevel: { [status: string]: ConsoleLevel } = {
  passed: "pass",
  failed: "fail",
  error: "error",
  skipped: "muted",
  canceled: "warn",
  running: "info",
};

export function describeEvent(event: SurveyTestExecutionEvent): RowDraft | undefined {
  switch(event.type) {
    case "runStarted": {
      const tests = getSuiteTests(event.tests);
      const enabled = tests.filter(test => !test.disabled).length;
      const name = !!event.tests && event.tests.name ? event.tests.name : "";
      return {
        level: "info",
        indent: 0,
        text: testerText("console.runStarted", name, enabled, tests.length),
      };
    }
    case "testStarted":
      return {
        level: "info",
        indent: 0,
        text: testerText("console.testStarted", formatIndex(event.testIndex), safeName(event.test)),
      };
    case "surveyCreated":
      return {
        level: "muted",
        indent: 1,
        text: testerText("console.surveyCreated"),
      };
    case "stepStarted": {
      const command = getStepCommandName(event.step);
      const targets = getStepTargets(event.step, command);
      const stepName = !!event.step && typeof event.step.name === "string"
        ? testerText("console.stepName", event.step.name) : "";
      return {
        level: "info",
        indent: 1,
        text: testerText("console.stepStarted", event.stepIndex, command,
          targets.join(", ") || testerText("common.noTarget"), stepName),
      };
    }
    case "targetStarted":
      return {
        level: "muted", indent: 2,
        text: testerText("console.targetStarted", event.command, event.target),
      };
    case "targetCompleted":
      return {
        level: "muted", indent: 2,
        text: testerText("console.targetCompleted", event.command, event.target),
      };
    case "checkCompleted": {
      const result = event.result;
      const head = result.target + "." + result.check;
      const detail = result.passed
        ? undefined
        : testerText("console.checkDetail", formatValue(result.expected, 200),
          formatValue(result.actual, 200));
      return {
        level: result.passed ? "pass" : "fail",
        indent: 2,
        text: testerText("console.checkText", result.passed, head, result.message || ""),
        detail: detail,
      };
    }
    case "issueAdded": {
      const issue = event.issue;
      const where = issue.target ? " [" + issue.target + "]" : "";
      return {
        level: issue.severity === "error" ? "error" : "warn",
        indent: 2,
        text: testerText("console.issueText", issue.severity, issue.code, where, issue.message),
        detail: [issue.suggestion, issue.path ? testerText("console.issueAt", issue.path) : undefined]
          .filter(Boolean).join("  ") || undefined,
      };
    }
    case "stepCompleted":
      return {
        level: statusLevel[event.result.status] || "info",
        indent: 1,
        text: testerText("console.stepCompleted", event.stepIndex, event.result.status,
          event.result.checks.length),
      };
    case "testCompleted":
      return {
        level: statusLevel[event.result.status] || "info",
        indent: 0,
        text: testerText("console.testCompleted", event.result.name, event.result.status),
      };
    case "runCompleted":
      return {
        level: statusLevel[event.result.status] || "info",
        indent: 0,
        text: testerText("console.runCompleted", event.result.status, event.result.summary),
      };
  }
  return undefined;
}

export function isVisibleAtVerbosity(event: SurveyTestExecutionEvent, verbosity: ConsoleVerbosity): boolean {
  if (verbosity === "all") return true;
  if (event.type === "targetStarted" || event.type === "targetCompleted") return false;
  if (verbosity === "steps") return true;
  // "failures and issues only": what went wrong, plus the status lines that frame it.
  switch(event.type) {
    case "issueAdded": return true;
    case "checkCompleted": return !event.result.passed;
    case "stepCompleted": return event.result.status !== "passed";
    case "testCompleted": return event.result.status !== "passed";
    case "runCompleted": return true;
    default: return false;
  }
}

function formatIndex(index: number | undefined): string {
  return index === undefined ? "" : "#" + index;
}

function safeName(test: any): string {
  return !!test && typeof test.name === "string" ? test.name : testerText("common.unnamed");
}

// The flat run log as text, in the order the runner emitted it. The console copy button and the
// "Copy log" link of the Tests panel hand out exactly this, so the two never drift apart.
export function formatRowsAsText(rows: Array<ConsoleRow>): string {
  return rows.map(row => formatTimestamp(row.atMs) + "  " + "  ".repeat(row.indent) + row.text +
    (!!row.detail ? "\n            " + row.detail : "")).join("\n");
}

export function formatTimestamp(atMs: number): string {
  const seconds = Math.floor(atMs / 1000);
  const ms = Math.floor(atMs % 1000);
  return String(seconds).padStart(2, "0") + "." + String(ms).padStart(3, "0");
}
