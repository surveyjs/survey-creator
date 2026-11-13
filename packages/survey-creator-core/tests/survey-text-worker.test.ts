import { SurveyTextWorker, SurveyTextWorkerLinterFinding } from "../src/textWorker";
import { ISurveyLintOptions } from "survey-core/linter";

// The rules the JSON tab raises to "error": the checks the deserializer used to report
const schemaRules = (validateValues: boolean = false): ISurveyLintOptions => ({
  rules: {
    "property/unknown": "error",
    "property/required": "error",
    "property/not-an-array": "error",
    "element/unknown-type": "error",
    "property/invalid-value": validateValues ? "error" : "off",
  },
});

function createTextWorker(json: any, validateValues: boolean = false): SurveyTextWorker {
  return new SurveyTextWorker(JSON.stringify(json, null, 3), { lintOptions: schemaRules(validateValues) });
}

test("SurveyTextWorker, incorrect property name pos", () => {
  const textWorker = createTextWorker({
    elements: [
      {
        type: "text", name: "q1"
      },
      {
        type: "text",
        incorrectProp: "abc",
        name: "q2"
      },
      {
        type: "text", name: "q3"
      }
    ]
  });
  expect(textWorker.isJsonCorrect).toBeTruthy();
  expect(textWorker.errors).toHaveLength(1);
  const error = <SurveyTextWorkerLinterFinding>textWorker.errors[0];
  expect(error.getErrorType()).toBe("linterfinding");
  expect(error.ruleId).toBe("property/unknown");
  expect(error.isBlocking).toBeTruthy();
  expect(textWorker.isJsonHasErrors).toBeTruthy();
  const propNamePos = 126;
  expect(error.at).toBe(propNamePos);
  expect(textWorker.text.substring(propNamePos, propNamePos + 5)).toBe("incor");
  expect(error.rowAt).toBe(8);
  expect(error.columnAt).toBe(10);
  expect(error.isFixable).toBeTruthy();
  expect(JSON.parse(error.fixError(textWorker.text)).elements[1]).toEqual({
    type: "text", name: "q2"
  });
});
test("SurveyTextWorker, show duplication name errors", () => {
  const textWorker = createTextWorker({
    pages: [{
      name: "page1",
      elements: [
        {
          type: "text", name: "q1"
        },
        {
          type: "text",
          name: "page1"
        },
        {
          type: "text", "name": "q1"
        }
      ]
    }
    ]
  });
  expect(textWorker.errors).toHaveLength(2);
  const error1 = textWorker.errors[0];
  const propNamePos1 = 221;
  expect(error1.at).toBe(propNamePos1);
  expect(textWorker.text.substring(propNamePos1, propNamePos1 + 7)).toBe("\"name\":");
  expect(error1.rowAt).toBe(11);
  expect(error1.columnAt).toBe(15);
  const error2 = textWorker.errors[1];
  const propNamePos2 = 312;
  expect(error2.at).toBe(propNamePos2);
  expect(textWorker.text.substring(propNamePos2, propNamePos2 + 7)).toBe("\"name\":");
  expect(error2.rowAt).toBe(15);
  expect(error2.columnAt).toBe(15);

  // one run names every duplicate it finds, and never twice the same: the second one is
  // "question2" even when applied on its own
  expect(error2.isFixable).toBeTruthy();
  const newJson2 = JSON.parse(error2.fixError(textWorker.text));
  expect(newJson2.pages[0].elements[2]).toEqual({
    type: "text",
    name: "question2"
  });
  expect(error1.isFixable).toBeTruthy();
  const newJson1 = JSON.parse(error1.fixError(textWorker.text));
  expect(newJson1.pages[0].elements[1]).toEqual({
    type: "text",
    name: "question1"
  });
});
test("SurveyTextWorker, a duplicated page and panel get names of their own kind", () => {
  const textWorker = createTextWorker({
    pages: [
      { name: "p1", elements: [{ type: "panel", name: "pn1", elements: [{ type: "text", name: "q1" }] }] },
      { name: "p1", elements: [{ type: "panel", name: "pn1", elements: [{ type: "text", name: "q2" }] }] },
    ]
  });
  const errors = textWorker.errors.filter(e => e.isBlocking);
  expect(errors.map(e => (<SurveyTextWorkerLinterFinding>e).ruleId)).toEqual(["name/duplicate", "name/duplicate"]);
  const fixedPage = JSON.parse(errors[0].fixError(textWorker.text));
  expect(fixedPage.pages[1].name).toBe("page1");
  const fixedPanel = JSON.parse(errors[1].fixError(textWorker.text));
  expect(fixedPanel.pages[1].elements[0].name).toBe("panel1");
});
test("SurveyTextWorker, required properties", () => {
  const textWorker = createTextWorker({
    pages: [{
      name: "page1",
      elements: [
        {
          type: "text"
        }
      ]
    }
    ]
  });
  expect(textWorker.errors).toHaveLength(1);
  const error = textWorker.errors[0];
  const propNamePos = 85;
  expect(error.at).toBe(propNamePos);
  expect(error.isFixable).toBeTruthy();
  const oldLines = textWorker.text.split("\n");
  textWorker.text = error.fixError(textWorker.text);
  const newJson = JSON.parse(textWorker.text);
  expect(newJson.pages[0].elements[0]).toEqual({
    type: "text",
    name: "question1"
  });
  const lines = textWorker.text.split("\n");
  expect(lines.length).toBe(oldLines.length + 1);
  const indent1 = lines[5].split(" ").length - 1;
  const indent2 = lines[6].split(" ").length - 1;
  expect(indent2).toBe(indent1 + 3);
});
test("SurveyTextWorker, a required property other than name is reported but not fixable", () => {
  const textWorker = createTextWorker({
    elements: [{ type: "text", name: "q1" }],
    triggers: [{ type: "setvalue", expression: "{q1} = 1", setValue: 2 }]
  });
  expect(textWorker.errors).toHaveLength(1);
  expect((<SurveyTextWorkerLinterFinding>textWorker.errors[0]).ruleId).toBe("property/required");
  expect(textWorker.errors[0].isFixable).toBeFalsy();
  expect(textWorker.text.charAt(textWorker.errors[0].at)).toBe("{");
});
test("SurveyTextWorker, validate properties value, Issue#7335", () => {
  const textWorker = createTextWorker({
    elements: [
      {
        type: "text", name: "q1",
        clearIfInvisible: "test"
      }
    ]
  }, true);
  expect(textWorker.errors).toHaveLength(1);
  const error = textWorker.errors[0];
  // the finding points at the property itself, where the deserializer could only name the element
  expect(error.at).toBe(textWorker.text.indexOf("\"clearIfInvisible\""));
  expect(error.isFixable).toBeTruthy();
  textWorker.text = error.fixError(textWorker.text);
  const newJson = JSON.parse(textWorker.text);
  // nothing says which allowed value was meant, so the key goes and the default takes over
  expect(newJson.elements[0]).toEqual({
    type: "text",
    name: "q1"
  });
});
test("SurveyTextWorker, the closest allowed value is chosen, Issue#7417", () => {
  const textWorker = createTextWorker({
    elements: [{ type: "text", name: "q1", clearIfInvisible: "cOmPlEtE" }]
  }, true);
  expect(textWorker.errors).toHaveLength(1);
  const newJson = JSON.parse(textWorker.errors[0].fixError(textWorker.text));
  expect(newJson.elements[0].clearIfInvisible).toBe("onComplete");
});
test("SurveyTextWorker, property values are not validated unless asked", () => {
  const textWorker = createTextWorker({
    elements: [{ type: "text", name: "q1", clearIfInvisible: "test" }]
  });
  expect(textWorker.errors).toHaveLength(0);
});
test("SurveyTextWorker, locale 'default' should not produce an error Bug#7541", () => {
  const textWorker = createTextWorker({
    locale: "default",
    elements: [
      { type: "text", name: "q1" }
    ]
  }, true);
  expect(textWorker.errors).toHaveLength(0);
});
test("SurveyTextWorker, a single object written for an array is fixed by wrapping it", () => {
  const textWorker = createTextWorker({
    pages: [{
      questions: {
        type: "text",
        name: "q1",
      }
    }]
  });
  expect(textWorker.errors).toHaveLength(1);
  const error = <SurveyTextWorkerLinterFinding>textWorker.errors[0];
  expect(error.ruleId).toBe("property/not-an-array");
  expect(textWorker.text.substring(error.at, error.at + 9)).toBe("questions");
  expect(error.isFixable).toBeTruthy();
  expect(JSON.parse(error.fixError(textWorker.text))).toEqual({
    pages: [{ questions: [{ type: "text", name: "q1" }] }]
  });
});
test("SurveyTextWorker, a scalar written for an array is wrapped too", () => {
  const textWorker = createTextWorker({
    elements: [{ type: "checkbox", name: "q1", choices: "a" }]
  });
  expect(textWorker.errors).toHaveLength(1);
  expect(JSON.parse(textWorker.errors[0].fixError(textWorker.text)).elements[0].choices).toEqual(["a"]);
});
test("SurveyTextWorker, an element without a type and with an unknown type", () => {
  const textWorker = createTextWorker({
    elements: [{ name: "q1" }, { type: "text_custom", name: "q2" }]
  });
  expect(textWorker.errors.map(e => (<SurveyTextWorkerLinterFinding>e).reason)).toEqual(["missingType", "unknownType"]);
  textWorker.errors.forEach(error => {
    expect(error.isBlocking).toBeTruthy();
    expect(error.isFixable).toBeFalsy();
    expect(textWorker.text.charAt(error.at)).toBe("{");
  });
});
test("SurveyTextWorker, a warning is listed but does not block", () => {
  const textWorker = createTextWorker({
    pages: [{ name: "p1", elements: [{ type: "text", name: "q1" }] }, { name: "p2" }]
  });
  expect(textWorker.errors).toHaveLength(1);
  const warning = <SurveyTextWorkerLinterFinding>textWorker.errors[0];
  expect(warning.ruleId).toBe("page/empty");
  expect(warning.isBlocking).toBeFalsy();
  expect(textWorker.isJsonHasErrors).toBeFalsy();
  expect(textWorker.findings).toHaveLength(1);
  expect(textWorker.lintResult.warningCount).toBe(1);
});
test("SurveyTextWorker, errors are sorted by position, unresolved ones last", () => {
  const textWorker = new SurveyTextWorker(JSON.stringify({
    elements: [
      { type: "text", name: "q2", visibleIf: "{nosuch} = 1" },
      { type: "text", name: "q1", nosuchprop: 1 }
    ]
  }, null, 2), { lintOptions: schemaRules() });
  const ats = textWorker.errors.map(e => e.at);
  expect(ats.length).toBeGreaterThan(1);
  const resolved = ats.filter(at => at > -1);
  expect(resolved).toEqual(resolved.slice().sort((a, b) => a - b));
  const firstUnresolved = ats.indexOf(-1);
  if (firstUnresolved > -1) {
    expect(ats.slice(firstUnresolved).every(at => at === -1)).toBeTruthy();
  }
});
test("SurveyTextWorker, a parse error is the only error of a broken text", () => {
  const textWorker = new SurveyTextWorker("{ elements: [", { lintOptions: schemaRules() });
  expect(textWorker.isJsonCorrect).toBeFalsy();
  expect(textWorker.isJsonHasErrors).toBeTruthy();
  expect(textWorker.json).toBeUndefined();
  expect(textWorker.lintResult).toBeUndefined();
  expect(textWorker.errors).toHaveLength(1);
  expect(textWorker.errors[0].getErrorType()).toBe("parseerror");
  expect(textWorker.errors[0].isBlocking).toBeTruthy();
});
test("SurveyTextWorker, a text that is not an object is a parse error", () => {
  ["[]", "5", "\"abc\"", "null"].forEach(text => {
    const textWorker = new SurveyTextWorker(text, { lintOptions: schemaRules() });
    expect(textWorker.isJsonCorrect).toBeFalsy();
    expect(textWorker.errors).toHaveLength(1);
    expect(textWorker.errors[0].getErrorType()).toBe("parseerror");
    expect(textWorker.errors[0].text).toBe("The survey JSON must be an object.");
  });
  expect(new SurveyTextWorker("", { lintOptions: schemaRules() }).isJsonCorrect).toBeTruthy();
});
test("SurveyTextWorker, lint: false only parses", () => {
  const textWorker = new SurveyTextWorker(JSON.stringify({ elements: [{ type: "text" }] }), { lint: false });
  expect(textWorker.isJsonCorrect).toBeTruthy();
  expect(textWorker.errors).toHaveLength(0);
  expect(textWorker.lintResult).toBeUndefined();
});
test("SurveyTextWorker, onProcessJson sees the JSON before it is linted", () => {
  SurveyTextWorker.onProcessJson = (json: any): void => {
    json.elements[0].name = "renamed";
  };
  try {
    const textWorker = createTextWorker({ elements: [{ type: "text", name: "q1" }, { type: "text", name: "renamed" }] });
    expect(textWorker.errors.map(e => (<SurveyTextWorkerLinterFinding>e).ruleId)).toEqual(["name/duplicate"]);
  } finally {
    SurveyTextWorker.onProcessJson = undefined;
  }
});
test("SurveyTextWorker, getAllNames and getNodeByPath", () => {
  const textWorker = createTextWorker({
    pages: [{ name: "p1", elements: { type: "matrixdynamic", name: "m1", columns: [{ name: "col1" }] } }]
  });
  expect(textWorker.getAllNames()).toEqual(["p1", "m1", "col1"]);
  expect(textWorker.getNodeByPath("pages[0].elements").node.name).toBe("m1");
  // the linter indexes the wrapped element as [0], which the text has no index for
  expect(textWorker.getNodeByPath("pages[0].elements[0]").node.name).toBe("m1");
  const column = textWorker.getNodeByPath("pages[0].elements[0].columns[0]");
  expect(column.node.name).toBe("col1");
  expect(column.key).toBe(0);
  expect(Array.isArray(column.parent)).toBeTruthy();
  expect(textWorker.getNodeByPath("pages[3]")).toBeUndefined();
});

// The fixes the linter now decides on its own. The text worker no longer knows a rule from a
// rule: it applies the edits the finding carries.
function fixableOf(worker: SurveyTextWorker, ruleId: string): SurveyTextWorkerLinterFinding {
  return <SurveyTextWorkerLinterFinding>worker.errors.filter(error =>
    error instanceof SurveyTextWorkerLinterFinding &&
    (<SurveyTextWorkerLinterFinding>error).ruleId === ruleId && error.isFixable)[0];
}

test("SurveyTextWorker, a misspelled property key is renamed where it stands", () => {
  const textWorker = createTextWorker({
    elements: [{ type: "text", name: "q1", titlee: "Hello", description: "d" }],
  });
  const error = fixableOf(textWorker, "property/unknown");
  expect(error).toBeDefined();
  const fixed = JSON.parse(error.fixError(textWorker.text));
  expect(Object.keys(fixed.elements[0])).toEqual(["type", "name", "title", "description"]);
  expect(fixed.elements[0].title).toBe("Hello");
});

test("SurveyTextWorker, a key nothing is close to is dropped", () => {
  const textWorker = createTextWorker({
    elements: [{ type: "text", name: "q1", zzzzzzzzzz: 1 }],
  });
  const error = fixableOf(textWorker, "property/unknown");
  expect(JSON.parse(error.fixError(textWorker.text)).elements[0]).toEqual({ type: "text", name: "q1" });
});

test("SurveyTextWorker, a repeated choice item is removed from the array", () => {
  const textWorker = createTextWorker({
    elements: [{ type: "dropdown", name: "q1", choices: ["a", "b", "a"] }],
  });
  const error = fixableOf(textWorker, "choices/duplicate");
  expect(JSON.parse(error.fixError(textWorker.text)).elements[0].choices).toEqual(["a", "b"]);
});

test("SurveyTextWorker, a misspelled type is replaced", () => {
  const textWorker = createTextWorker({ elements: [{ type: "textt", name: "q1" }] });
  const error = fixableOf(textWorker, "element/unknown-type");
  expect(JSON.parse(error.fixError(textWorker.text)).elements[0].type).toBe("text");
});

test("SurveyTextWorker, a reference typo is respelled inside the expression", () => {
  const textWorker = createTextWorker({
    elements: [
      { type: "dropdown", name: "fruit", choices: ["a", "b"] },
      { type: "text", name: "q2", visibleIf: "{frut} = 'a'" },
    ],
  });
  const error = fixableOf(textWorker, "reference/unknown");
  expect(JSON.parse(error.fixError(textWorker.text)).elements[1].visibleIf).toBe("{fruit} = 'a'");
});

test("SurveyTextWorker, a property the runtime drops is removed from the survey itself", () => {
  const textWorker = createTextWorker({
    mode: "display", elements: [{ type: "text", name: "q1" }],
  });
  const error = fixableOf(textWorker, "property/dead");
  const fixed = JSON.parse(error.fixError(textWorker.text));
  expect(fixed.mode).toBeUndefined();
  expect(fixed.elements[0]).toEqual({ type: "text", name: "q1" });
});

test("SurveyTextWorker, a finding with no fix is not fixable", () => {
  const textWorker = createTextWorker({
    elements: [{ type: "text", name: "q1", visibleIf: "{q1} notempty" }],
  });
  const selfRef = textWorker.errors.filter(error =>
    error instanceof SurveyTextWorkerLinterFinding &&
    (<SurveyTextWorkerLinterFinding>error).ruleId === "reference/self")[0];
  expect(selfRef).toBeDefined();
  expect(selfRef.isFixable).toBeFalsy();
});
