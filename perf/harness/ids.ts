// The fixture keys, the groups and every scenario id with the suites that run it (00, Ids and The scenarios). The
// same operation has the same id in core and in the browser; paint-only, typing-only and popup-only operations are
// browser-only.
export const FIXTURE_KEYS = ["huge", "typical", "locales"] as const;
export type FixtureKey = typeof FIXTURE_KEYS[number];

export const GROUPS = ["load", "select", "edit", "tabs", "designer", "output"] as const;
export type Group = typeof GROUPS[number];

export type Suite = "core" | "react";
export const SUITES: ReadonlyArray<Suite> = ["core", "react"];

export interface ScenarioIdInfo {
  id: string;
  suites: Array<Suite>;
}

const core: Array<string> = [];
const react: Array<string> = [];
const add = (suites: Array<Suite>, fixture: FixtureKey, group: Group, ops: Array<string>, target?: string): void => {
  ops.forEach((op: string) => {
    const id = fixture + "/" + group + "/" + op + (target ? "@" + target : "");
    if (suites.indexOf("core") > -1) core.push(id);
    if (suites.indexOf("react") > -1) react.push(id);
  });
};
const both: Array<Suite> = ["core", "react"];

// load: core times creator.JSON = json; the browser also paints (phases model and paint).
FIXTURE_KEYS.forEach((key: FixtureKey) => add(["core"], key, "load", ["json"]));
add(["react"], "huge", "load", ["paint"]);
add(["react"], "typical", "load", ["paint"]);

// select: the property grid of the selected element, starting from the survey selected.
add(both, "huge", "select", ["element"], "q3978");
// The typical targets are names the generator gives (perf/fixtures/typical.ts): React runs the first three.
export const TYPICAL_SELECT_REACT = ["text1", "matrixdynamic1", "survey"];
export const TYPICAL_SELECT_CORE = TYPICAL_SELECT_REACT.concat(["page1", "panel1", "dropdown1", "checkbox1", "paneldynamic1"]);
TYPICAL_SELECT_CORE.forEach((target: string) => add(TYPICAL_SELECT_REACT.indexOf(target) > -1 ? both : ["core"], "typical", "select", ["element"], target));

// edit
add(both, "typical", "edit", ["add-question", "delete", "property"]);
add(both, "huge", "edit", ["add-question", "property"]);
add(["core"], "typical", "edit", ["convert"], "dropdown1");
add(["core"], "typical", "edit", ["undo-redo"]);
add(["react"], "typical", "edit", ["title-type"]);

// tabs: the first visit after load; designer is back from Preview; roundtrip is counterOnly (C10).
add(both, "huge", "tabs", ["preview", "logic", "translation", "json", "designer", "roundtrip"]);
add(both, "locales", "tabs", ["translation"]);
add(both, "typical", "tabs", ["theme"]);

// designer: state that lives only in UI adorners and popups.
add(["react"], "huge", "designer", ["collapse-all", "expand-all", "object-selector"]);

// output
add(["core"], "huge", "output", ["text", "dispose"]);

export const SCENARIO_IDS: ReadonlyArray<ScenarioIdInfo> = Array.from(new Set(core.concat(react))).sort().map((id: string): ScenarioIdInfo => {
  const suites: Array<Suite> = [];
  if (core.indexOf(id) > -1) suites.push("core");
  if (react.indexOf(id) > -1) suites.push("react");
  return { id: id, suites: suites };
});

// The remedy of 00, The scenarios, when a suite runs over its expected time (core 6 min, react 10 min here): the ids
// to cut, in order. First the typical/select targets (core-only ones first), second the typical twins of huge
// operations. A cut is reported; nothing reads this list at run time.
export const CUT_ORDER: ReadonlyArray<string> = [
  "typical/select/element@paneldynamic1",
  "typical/select/element@checkbox1",
  "typical/select/element@dropdown1",
  "typical/select/element@panel1",
  "typical/select/element@page1",
  "typical/select/element@matrixdynamic1",
  "typical/select/element@text1",
  "typical/select/element@survey",
  "typical/load/json",
  "typical/load/paint",
  "typical/edit/add-question",
  "typical/edit/property"
];

export function suitesOf(id: string): Array<Suite> {
  const info = SCENARIO_IDS.filter((s: ScenarioIdInfo) => s.id === id)[0];
  return info ? info.suites.slice() : [];
}

export function idsOfSuite(suite: Suite): Array<string> {
  return SCENARIO_IDS.filter((s: ScenarioIdInfo) => s.suites.indexOf(suite) > -1).map((s: ScenarioIdInfo) => s.id).sort();
}

// PERF_ONLY (00, Ids), as in survey-library: an id in no suite is an error; a suite runs the ids it has and lists the
// others as notInSuite. The creator has no extra/* fixtures.
export function splitOnly(only: ReadonlyArray<string> | null, suite: Suite): { run: Array<string>, notInSuite: Array<string> } {
  const all = idsOfSuite(suite);
  if (!only) return { run: all, notInSuite: [] };
  const unknown = only.filter((id: string) => suitesOf(id).length === 0);
  if (unknown.length > 0) throw new Error("PERF_ONLY names ids that are in no suite: " + unknown.join(", "));
  const run = only.filter((id: string) => all.indexOf(id) > -1);
  const notInSuite = only.filter((id: string) => run.indexOf(id) < 0);
  return { run: Array.from(new Set(run)).sort(), notInSuite: Array.from(new Set(notInSuite)).sort() };
}
