import { findNodeAtLocation, parseTree } from "jsonc-parser";
import { SurveyTestValidator } from "survey-core/tester";
import type { ISurveyTestIssue } from "survey-core/tester";

// Editor-time diagnostics. The same validator the runner uses, so what the Tests tab underlines is
// exactly what would stop a run - nothing is reimplemented here.

export function validateSuite(suite: any): Array<ISurveyTestIssue> {
  if (!suite || typeof suite !== "object") {
    return [{ severity: "error", code: "notAnObject", message: "A test suite must be a JSON object." }];
  }
  try {
    return new SurveyTestValidator().validate(suite);
  } catch(error) {
    return [{
      severity: "error",
      code: "unexpectedError",
      message: "The validator failed on this document: " +
        (!!error && (error as any).message ? (error as any).message : String(error)),
    }];
  }
}

function isTestPath(path: string | undefined): boolean {
  return !!path && path.indexOf("tests[") === 0;
}

// The distinction the runner itself makes, and the reason the Run button is not disabled by every
// validator error: an error inside a test errors that test and the suite goes on, while an error of the
// suite object means no test runs at all. Blocking on the first kind would make a suite of eight broken
// cases - the diagnostics sample - impossible to run and impossible to learn from.
export function getSuiteLevelErrors(issues: Array<ISurveyTestIssue>): Array<ISurveyTestIssue> {
  return issues.filter(issue => issue.severity === "error" && !isTestPath(issue.path));
}

export function getBrokenTestCount(issues: Array<ISurveyTestIssue>): number {
  const tests = new Set<string>();
  issues.forEach(issue => {
    if (issue.severity !== "error" || !isTestPath(issue.path)) return;
    const end = (issue.path as string).indexOf("]");
    if (end > 0) tests.add((issue.path as string).substring(0, end + 1));
  });
  return tests.size;
}

// An issue path is a path inside the case object, and it takes three forms: a name (`options`,
// `functions.getRate`), a number in brackets (`tests[0].steps[2]`, `starts[1]`) and - since the suite
// gained the two maps a survey's outside world is answered from - a **quoted** key in brackets, which is
// how a url becomes a path: `web["https://api.example.com/cities?country=de"]`.
//
// That last one is why this is a walk and not a split on ".": a url is full of dots, and of slashes, and
// of colons, and every one of them is part of the key rather than a step of the path.
//
// runTest() paths a single test from "test" instead, which no suite document contains - such an issue
// simply gets no marker. A path this cannot read to the end yields the part it did read, so the marker
// lands on the nearest node the path named rather than nowhere at all.
export function parseJsonPath(path: string): Array<string | number> {
  const segments: Array<string | number> = [];
  let name = "";
  const flush = (): void => {
    if (!!name) segments.push(name);
    name = "";
  };
  let at = 0;
  while(at < path.length) {
    const char = path[at];
    if (char === ".") {
      flush();
      at += 1;
      continue;
    }
    if (char !== "[") {
      name += char;
      at += 1;
      continue;
    }
    flush();
    if (path[at + 1] === "\"") {
      const end = path.indexOf("\"]", at + 2);
      if (end < 0) return segments;
      segments.push(path.substring(at + 2, end));
      at = end + 2;
      continue;
    }
    const close = path.indexOf("]", at + 1);
    if (close < 0) return segments;
    const digits = path.substring(at + 1, close);
    if (!/^\d+$/.test(digits)) return segments;
    segments.push(parseInt(digits, 10));
    at = close + 1;
  }
  flush();
  return segments;
}

export interface JsonRange {
  offset: number;
  length: number;
}

// jsonc-parser keeps the offsets the JSON.parse of the browser throws away, which is what turns an
// issue path into an editor marker.
export function findJsonRange(text: string, path: string): JsonRange | undefined {
  const segments = parseJsonPath(path);
  if (!segments.length) return undefined;
  const tree = parseTree(text);
  if (!tree) return undefined;
  const node = findNodeAtLocation(tree, segments);
  if (!node) return undefined;
  return { offset: node.offset, length: node.length };
}
