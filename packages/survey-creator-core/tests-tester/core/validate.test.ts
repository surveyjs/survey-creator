// Turning an issue path into a place in the document. Every diagnostic of this application ends at a
// marker in the Tests JSON tab or at an "in the case" link, and both of them are this function - so the
// path grammar of the tester is pinned here, in the forms it actually produces.
import { describe, expect, it } from "vitest";
import { SurveyTestValidator } from "survey-core/tester";
import { findJsonRange, parseJsonPath } from "../../src/tester/core/validate";

describe("an issue path", () => {
  it("reads the three forms the tester writes", () => {
    expect(parseJsonPath("options")).toEqual(["options"]);
    expect(parseJsonPath("tests[0].steps[2]")).toEqual(["tests", 0, "steps", 2]);
    expect(parseJsonPath("starts[1]")).toEqual(["starts", 1]);
    // A function stub, and a row of one.
    expect(parseJsonPath("functions.getRate")).toEqual(["functions", "getRate"]);
    expect(parseJsonPath("functions.getRate.results[0]")).toEqual(["functions", "getRate", "results", 0]);
    // A url is a key, and it is full of the characters a path is otherwise punctuated with.
    expect(parseJsonPath("web[\"https://api.example.com/cities?country=de\"]"))
      .toEqual(["web", "https://api.example.com/cities?country=de"]);
  });

  it("gives back the part it could read, and never a wrong path", () => {
    expect(parseJsonPath("")).toEqual([]);
    expect(parseJsonPath("web[\"unterminated")).toEqual(["web"]);
    expect(parseJsonPath("tests[x].steps[0]")).toEqual(["tests"]);
  });

  // The document the validator is complaining about is the document the marker is placed in, so the two
  // are tested together: a path the validator invents and this function cannot follow is a marker that
  // silently lands nowhere.
  it("lands on the node the validator named, for a stub as much as for a step", () => {
    const text = JSON.stringify({
      functions: { getRate: { async: true, unknown: 1 } },
      web: { "https://api.example.com/cities?country=de": { unknown: 1 } },
      tests: [{ name: "one", steps: [{ complete: { survey: true } }] }],
    }, null, 2);
    const issues = new SurveyTestValidator().validate(JSON.parse(text));
    const paths = issues.map(issue => issue.path);
    expect(paths).toContain("functions.getRate");
    expect(paths).toContain("web[\"https://api.example.com/cities?country=de\"]");
    paths.forEach(path => {
      const range = findJsonRange(text, path as string);
      expect(range, "no place in the document for " + path).toBeTruthy();
      // The marker covers the node the path names, and the text under it is that node.
      expect(text.substring((range as any).offset, (range as any).offset + (range as any).length))
        .toContain("unknown");
    });
  });
});
