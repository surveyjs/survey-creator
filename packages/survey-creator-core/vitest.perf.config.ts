import { defineConfig } from "vitest/config";
import * as path from "path";
import { defaultTargetDir, checkBuildFresh, checkBuildExists, coreMain, creatorCoreMain, creatorCoreSrc, creatorCoreBuildHint } from "../../perf/harness/node/build.ts";

// The perf code's own unit tests (perf:test), apart from vitest.config.ts and its three projects: plain Node, no
// setup files, no aliases. The tests import the runner's survey-core and creator-core builds by path
// (perf/harness/node/modules.ts), as the core runner does. Timed scenarios never run under Vitest.
const coreFile = path.join(defaultTargetDir("core"), coreMain);
checkBuildExists([coreFile]);
checkBuildFresh(creatorCoreSrc, [path.join(defaultTargetDir("creatorCore"), creatorCoreMain)], creatorCoreBuildHint);

export default defineConfig({
  test: {
    name: "perf-test",
    include: ["../../perf/**/*.test.ts"],
    exclude: ["../../perf/results/**", "**/node_modules/**"],
    environment: "node",
    globals: false,
    testTimeout: 120000,
    hookTimeout: 120000,
    server: {
      deps: {
        // The builds run natively, as in the core runner, not through Vite's transform.
        external: [/[\\/]build[\\/]fesm[\\/].*\.mjs$/],
      },
    },
  },
});
