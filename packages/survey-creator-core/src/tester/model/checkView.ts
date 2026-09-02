import { getSurveyTestCheckDetails } from "survey-core/tester";
import type {
  ISurveyTestCheckResult, ISurveyTestExpressionTrace, ISurveyTestIssue,
} from "survey-core/tester";
import { formatValue } from "../core/stepInfo";
import { testerText } from "../localization";

// Why a check did not hold, and where in the two documents to look - said once, as data a view loops
// over.
//
// This used to be two hundred lines of React: five components reading the detail shapes the tester
// exports and composing sentences out of them. That is a decision, not markup - so it moved here, and
// what is left in the view is a loop.
//
// A line is a label, a run of parts, and an optional way into the survey JSON. Parts rather than one
// string because these sentences interleave prose with identifiers - `fired on <code>ageNow > 70</code>
// in step 3` - and a view that had to work out which fragments are code would be deciding again.

export interface WhyPart {
  kind: "code" | "text";
  value: string;
}

export interface WhyNote {
  key: string;
  parts: Array<WhyPart>;
  jsonPath?: string;
}

export interface WhyLine {
  key: string;
  label: string;
  parts: Array<WhyPart>;
  jsonPath?: string;
  notes: Array<WhyNote>;
}

// One failing check: the summary line says what did not hold, and the lines under it say why.
export interface CheckView {
  key: string;
  // "ageNow.value". Absent when the row shows one check and the target is already obvious.
  target?: string;
  summary: string;
  jsonPath?: string;
  why: Array<WhyLine>;
  // Everything in `details` this application did not just render: a member the helper refused to vouch
  // for, and anything a custom check stored under a name of its own. "" when there is none.
  unknownJson: string;
  // The check result whole, `details` and all: the tester built it, and nothing here picks it apart.
  rawJson: string;
}

// Every issue the tester produces - the validator's and the runner's alike - carries the node of the
// case document it belongs to, so there is nothing to reconstruct here from a step index.
export interface IssueView {
  key: string;
  css: string;
  severity: string;
  code: string;
  target?: string;
  message: string;
  suggestion?: string;
  casePath?: string;
  jsonPath?: string;
}

const text = (value: string): WhyPart => ({ kind: "text", value: value });
const code = (value: string): WhyPart => ({ kind: "code", value: value });

export function buildIssueView(issue: ISurveyTestIssue, key: string): IssueView {
  return {
    key: key,
    css: "svt-diff svt-diff--" + (issue.severity === "error" ? "error" : "warning"),
    severity: issue.severity,
    code: issue.code,
    target: issue.target,
    message: issue.message,
    suggestion: issue.suggestion,
    casePath: issue.path,
    jsonPath: issue.jsonPath,
  };
}

export function buildCheckView(check: ISurveyTestCheckResult, key: string, showTarget: boolean): CheckView {
  // getSurveyTestCheckDetails returns only what carries the discriminant the tester stamps on its own
  // detail objects, so nothing here can present a third-party payload as a built-in shape.
  const details = getSurveyTestCheckDetails(check.details);
  const lines: Array<WhyLine> = [];

  const expression = details.expression;
  if (!!expression) {
    lines.push({
      key: "expression",
      label: testerText("why.expressionLabel"),
      parts: [
        code(expression.expression),
        text(testerText("why.expressionRead", formatValue(expression.values, 90),
          formatValue(expression.result, 30))),
      ],
      notes: describeUnknownNames(expression),
    });
  }

  const blocked = details.blockedBy;
  if (!!blocked) {
    lines.push({
      key: "blocked",
      label: testerText("why.blockedLabel"),
      parts: [
        text(testerText("why.blockedBy", blocked.command)),
        code(blocked.page),
      ],
      notes: blocked.questions.map(question => ({
        key: question.name,
        parts: [
          code(question.name),
          text(question.errors.length
            ? question.errors.join("; ")
            : question.isRequired && question.isEmpty
              ? testerText("why.questionRequired")
              : testerText("why.questionHeld")),
        ],
        jsonPath: question.jsonPath,
      })),
    });
  }

  (details.triggers || []).forEach((trace, at) => {
    lines.push({
      key: "trigger-" + at,
      label: testerText("why.triggerLabel"),
      parts: [
        code(trace.triggerType),
        text(testerText("why.triggerFiredOn")),
        code(trace.expression),
        text(testerText("why.triggerInStep", trace.stepIndex)),
      ],
      jsonPath: trace.jsonPath,
      notes: [],
    });
  });

  const cleared = details.clearedBy;
  if (!!cleared) {
    lines.push({
      key: "cleared",
      label: testerText("why.clearedLabel"),
      parts: [
        code(cleared.name),
        text(testerText("why.clearedIn", cleared.stepIndex)),
        code(String(cleared.clearInvisibleValues)),
      ],
      jsonPath: cleared.jsonPath,
      notes: [],
    });
  }

  if (details.rowIndex !== undefined) {
    lines.push({
      key: "row",
      label: testerText("why.rowLabel"),
      parts: [text(String(details.rowIndex))],
      notes: [],
    });
  }

  return {
    key: key,
    target: showTarget ? check.target + "." + check.check : undefined,
    summary: testerText("why.checkSummary", formatValue(check.expected, 120),
      formatValue(check.actual, 120)),
    jsonPath: check.jsonPath,
    why: lines,
    unknownJson: getUnknownDetails(check.details, details),
    rawJson: stringify(check),
  };
}

function describeUnknownNames(trace: ISurveyTestExpressionTrace): Array<WhyNote> {
  const names = trace.unknownNames || [];
  if (!names.length) return [];
  const listed = names.map(name => {
    const closest = !!trace.suggestions ? trace.suggestions[name] : undefined;
    return testerText("why.didYouMean", name, closest || "");
  }).join(", ");
  return [{ key: "unknown", parts: [text(testerText("why.unknownNames", listed))] }];
}

function getUnknownDetails(details: any, known: { [name: string]: any }): string {
  if (!details || typeof details !== "object") return "";
  const rest: { [name: string]: any } = {};
  let found = false;
  Object.keys(details).forEach(key => {
    if (known[key] !== undefined) return;
    rest[key] = details[key];
    found = true;
  });
  if (!found) return "";
  return stringify(rest);
}

function stringify(value: any): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch{
    return String(value);
  }
}
