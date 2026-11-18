import { FIXTURE_KEYS } from "../harness/ids.ts";
import type { FixtureKey } from "../harness/ids.ts";
import { readHugeJson, hugeSource } from "./huge.ts";
import { generateTypical, typicalDefaults } from "./typical.ts";
import { generateLocales, localesDefaults } from "./locales.ts";
import { countJson } from "./meta.ts";
import type { FixtureMeta } from "./meta.ts";

// The fixtures of the creator suites (00, The fixtures). Node only (huge reads a file): the page bundle never contains
// a fixture, so perf/scenarios must not import this folder; the browser suite passes the JSON to the page.
export { FIXTURE_KEYS };
export type { FixtureKey };

export interface Fixture {
  key: FixtureKey;
  json: any;
  // Seeds and sizes, so they are in the result file.
  options: any;
  meta: FixtureMeta;
}

export function isFixtureKey(key: string): key is FixtureKey {
  return (FIXTURE_KEYS as ReadonlyArray<string>).indexOf(key) > -1;
}

// A new object every call: a scenario may change the JSON it loads.
export function getFixture(key: string, options?: any): Fixture {
  if (!isFixtureKey(key)) throw new Error("Unknown fixture: " + key);
  let json: any;
  let o: any;
  if (key === "huge") {
    o = { source: hugeSource };
    json = readHugeJson();
  } else if (key === "typical") {
    o = Object.assign({}, typicalDefaults, options || {});
    json = generateTypical(o).json;
  } else {
    o = Object.assign({}, localesDefaults, options || {});
    json = generateLocales(o).json;
  }
  return { key: key, json: json, options: o, meta: countJson(json) };
}
