import type { Counters } from "./counters.ts";
import { FIXTURE_KEYS, GROUPS } from "./ids.ts";
import type { FixtureKey } from "./ids.ts";

// The scenario shape shared by the core runner and the browser page, modelled on survey-library's
// perf/harness/scenario.ts. A scenario never imports survey-core or the creator: it gets the target's modules as
// ctx.Survey and ctx.Creator, so the same scenario runs against any target build.
export type ScenarioKind = "load" | "action";
export type PhaseTimes = { [phase: string]: number };

export interface PerfFixture {
  key: string;
  json: any;
  // JSON.stringify(json): a load scenario may parse it inside its setup, the same in core and in the browser.
  text: string;
  meta: any;
}

// The page side of the browser suite (03); element arguments are DOM elements, typed loosely so the harness stays
// platform-neutral. 03 fills in the details.
export interface PerfPage {
  framework: "react";
  // The end of the framework update (03, the clock).
  updated(): Promise<void>;
  // element.click() on the first match, then updated().
  click(selector: string): Promise<void>;
  // Characters one by one, then updated() after the last one.
  type(element: any, text: string): Promise<void>;
  query(selector: string): any;
  queryAll(selector: string): Array<any>;
}

export interface PerfContext {
  // The survey-core module of the target.
  Survey: any;
  // The survey-creator-core module of the target.
  Creator: any;
  // Browser only: the SurveyCreator UMD global of the creator UI build.
  CreatorUI?: any;
  fixture: PerfFixture;
  platform: "node" | "browser";
  now(): number;
  // Per process (core) or per page (browser): what a scenario keeps between samples, and the jsonErrors count of
  // the last survey it loaded.
  cache: { [key: string]: any };
  // Browser only (03): the DOM helpers of the page.
  page?: PerfPage;
  // A full GC and the heap it leaves, for info.heapGrowthKB (C10): core uses gc() and process.memoryUsage(); the
  // browser (03) its own. A scenario adds to its entry's info through ctx.cache.info.
  heap?: { collect(): void | Promise<void>, usedBytes(): number };
}

export interface PerfScenario<S = any> {
  id: string;
  rev: number;
  fixture: FixtureKey;
  kind: ScenarioKind;
  // "<Class>.<member>": met when Serializer has the property, when survey-core or the creator exports the class and
  // its prototype has the member, or when the instance the runner passes for the class has it (missingRequirement).
  // Checked before anything runs.
  requires?: Array<string>;
  // Helpers of perf/scenarios the scenario calls (options.ts among them): their source is part of its rev hash.
  uses?: Array<string>;
  setup(ctx: PerfContext): S | Promise<S>;
  run(ctx: PerfContext, state: S): void | PhaseTimes | Promise<void | PhaseTimes>;
  // Untimed, right after the timed run, before check: the page reads the DOM fact the action changed (03).
  record?(ctx: PerfContext, state: S): void | Promise<void>;
  // After every sample, warm-ups too: throws if the action did not happen.
  check(ctx: PerfContext, state: S): void | Promise<void>;
  teardown?(ctx: PerfContext, state: S): void | Promise<void>;
  counters?(ctx: PerfContext, state: S): Counters;
  // The action k times in one sample, so a sample is long enough to judge.
  repeat?: number;
  counterOnly?: boolean;
  samples?: number;
  warmup?: number;
  maxMs?: number;
  tolerance?: number;
  // What differs in the browser suite (03).
  browser?: { counterOnly?: boolean, repeat?: number, samples?: number, warmup?: number, maxMs?: number };
}

const escape = (text: string): string => text.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");

// <fixture>/<group>/<op>[@<target>] (00, Ids).
export const scenarioIdPattern = new RegExp("^(" + FIXTURE_KEYS.map(escape).join("|") + ")\\/(" + GROUPS.map(escape).join("|") +
  ")\\/([A-Za-z0-9-]+)(@[A-Za-z0-9_]+)?$");

export function fixtureOfId(id: string): FixtureKey {
  const m = scenarioIdPattern.exec(id);
  if (!m) throw new Error("Not a scenario id: " + id);
  return m[1] as FixtureKey;
}

export function defineScenarios(list: Array<PerfScenario>): Array<PerfScenario> {
  const seen = new Set<string>();
  list.forEach((s: PerfScenario) => {
    if (!scenarioIdPattern.test(s.id)) throw new Error("Not a scenario id: " + s.id);
    if (typeof s.check !== "function") throw new Error("Scenario " + s.id + " has no check");
    if (typeof s.setup !== "function" || typeof s.run !== "function") throw new Error("Scenario " + s.id + " needs setup and run");
    if (fixtureOfId(s.id) !== s.fixture) throw new Error("Scenario " + s.id + " names fixture " + s.fixture);
    if (!(s.rev >= 1)) throw new Error("Scenario " + s.id + " has no rev");
    if (seen.has(s.id)) throw new Error("Duplicate scenario " + s.id);
    seen.add(s.id);
  });
  return list;
}

// A check's assertion: platform-neutral, so the page needs no test library.
export function expectThat(condition: any, message: string): void {
  if (!condition) throw new Error("check failed: " + message);
}

export function expectEqual(actual: any, expected: any, message: string): void {
  if (actual !== expected) throw new Error("check failed: " + message + ": expected " + JSON.stringify(expected) + ", got " + JSON.stringify(actual));
}

// What a requirement is checked against: the modules, and optionally live instances by class name. A member that a
// class sets in its constructor or as a class field (SurveyCreatorModel.autoSaveDelay, animationEnabled, onModified,
// toolbox) is not on the prototype, so it is met only through an instance: the core runner passes the creator it made.
export interface RequirementSources {
  Survey: any;
  Creator?: any;
  instances?: { [className: string]: any };
}

// One "<Class>.<member>" entry: a Serializer property (the class is a Serializer class name, such as "question"), a
// member on the prototype of a class that survey-core or the creator exports (an accessor, a @property such as
// "SurveyCreatorModel.expandCollapseButtonVisibility", or a method), or a member of the instance given for the class.
export function hasRequirement(modules: RequirementSources, requirement: string): boolean {
  const dot = requirement.indexOf(".");
  if (dot < 1 || dot === requirement.length - 1) throw new Error("A requirement is \"<Class>.<member>\": " + requirement);
  const className = requirement.substring(0, dot);
  const member = requirement.substring(dot + 1);
  const serializer = modules.Survey && modules.Survey.Serializer;
  if (serializer && serializer.findProperty(className, member)) return true;
  for (const mod of [modules.Survey, modules.Creator]) {
    const cls = mod ? mod[className] : undefined;
    if (typeof cls === "function" && cls.prototype && member in cls.prototype) return true;
  }
  const instance = modules.instances ? modules.instances[className] : undefined;
  return !!instance && typeof instance === "object" && member in instance;
}

// The first entry of requires the build lacks, as a skip reason; "" when it has them all.
export function missingRequirement(modules: RequirementSources, requires: Array<string> | undefined): string {
  for (const req of requires || []) {
    if (!hasRequirement(modules, req)) return "not in this build: " + req;
  }
  return "";
}
