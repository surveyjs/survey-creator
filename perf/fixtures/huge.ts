import * as fs from "node:fs";
import { fileURLToPath } from "node:url";

// huge (C08) is e2e/questions_4114.ts itself, so its numbers continue the huge-json-perf reports. Do not use
// survey-library's fixtures/large.ts instead.
//
// The file is "export const json = {...};" with a JSON object literal. It is read as text and parsed, not imported:
// the repository root's package.json has no "type", so a Node import of that .ts file prints
// MODULE_TYPELESS_PACKAGE_JSON and reparses it as ES module, and under Vitest an import would transform 2.1 MB once per
// worker. fixtures.test.ts checks that the parsed object equals the module's export.
export const hugeFile = fileURLToPath(new URL("../../e2e/questions_4114.ts", import.meta.url));
export const hugeSource = "e2e/questions_4114.ts";

export function readHugeJson(file: string = hugeFile): any {
  const text = fs.readFileSync(file, "utf8");
  const head = /^\s*export const json\s*=\s*/.exec(text);
  const end = text.lastIndexOf("}");
  if (!head || end < 0 || !/^\s*;?\s*$/.test(text.substring(end + 1))) {
    throw new Error(file + " is no longer \"export const json = {...};\": read it another way in perf/fixtures/huge.ts");
  }
  try {
    return JSON.parse(text.substring(head[0].length, end + 1));
  } catch(e) {
    throw new Error(file + " no longer holds a JSON object literal (" + (e as Error).message + "): read it another way in perf/fixtures/huge.ts");
  }
}
