// The side list of the Survey JSON tab promises "the names a case can address", so the assertion is the
// round trip: every name it offers has to be a name the tester's own resolution accepts, and an element
// the grammar cannot address has to be said to be one.
import { describe, expect, it } from "vitest";
import { runSurveyTests } from "survey-core/tester";
import type { ISurveyTests } from "survey-core/tester";
import { getSurveyTargets } from "../../src/tester/core/targets";

const surveyJson = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "who" },
        { type: "panel", name: "block", elements: [{ type: "text", name: "inside" }] },
        { type: "matrixdynamic", name: "items", rowCount: 1, columns: [{ name: "quantity", cellType: "text" }] },
        {
          type: "matrixdropdown", name: "grid", rows: ["row1"],
          columns: [{ name: "column1", cellType: "text" }],
        },
        {
          type: "paneldynamic", name: "contacts", panelCount: 1,
          templateElements: [{ type: "text", name: "phone" }],
        },
        { type: "matrixdynamic", name: "empty", rowCount: 0, columns: [{ name: "later", cellType: "text" }] },
      ],
    },
  ],
  calculatedValues: [{ name: "total", expression: "1 + 1" }],
};

function names(json: any): Array<string> {
  return getSurveyTargets(json).targets.map(target => target.name);
}

describe("the targets of a definition", () => {
  it("lists what the tester names, in the tester's grammar", () => {
    expect(names(surveyJson)).toEqual([
      "page1", "who", "block", "inside", "items", "items[0].quantity", "grid", "grid.row1.column1",
      "contacts", "contacts[0]", "contacts[0].phone", "empty", "empty[0].later", "total",
    ]);
  });

  it("offers names the runner resolves", async() => {
    // Every name that is not a hint for a row this definition does not create is addressed by a step, and
    // the suite has to pass: a name this list offers and the runner refuses is the bug this guards.
    const addressable = names(surveyJson).filter(name => name.indexOf("empty") !== 0);
    const tests: ISurveyTests = {
      tests: [{
        name: "every name resolves",
        steps: addressable.map(name => ({ expect: { [name]: { visible: true } } })),
      }],
    };
    const result = await runSurveyTests(surveyJson, tests);
    // "visible" does not apply to a calculated value, and that is a check the tester declines rather than
    // a name it cannot find. What would make the list a lie is a name that addresses nothing, or one that
    // addresses something else than the element it was read from.
    const unresolved = result.tests[0].steps
      .flatMap(step => step.issues.map(issue => step.index + ": " + issue.code))
      .filter(text => text.indexOf("Target") > -1 || text.indexOf("targetName") > -1);
    expect(unresolved).toEqual([]);
  });

  it("says so when an element carries a name no case can use", () => {
    const twice = {
      elements: [
        { type: "text", name: "same" },
        { type: "text", name: "same" },
        { type: "text", name: "survey" },
      ],
    };
    const result = getSurveyTargets(twice);
    // The reserved name and the second "same" resolve to something other than themselves, so neither is
    // offered as a target - and both are still listed, because a duplicate name is what an author has to
    // see rather than an entry silently missing.
    expect(result.reservedNameUsed).toBe(true);
    expect(result.targets.filter(target => !!target.note && target.note.indexOf("no name") > -1)
      .map(target => target.name)).toEqual(["same", "survey"]);
  });
});
