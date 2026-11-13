// The runner contract's constants, as in survey-library perf/manifest.ts. 04 adds the manifest itself (the suites,
// their commands and the target builds) to this file.
export const resultSchema = 2;

// A hang guard: it stops one hung core scenario process (perf/core/run.ts), and the rest of the suite still runs. A
// suite itself has no time limit (00, Measurement rules).
export const scenarioTimeoutMs = 300000;
