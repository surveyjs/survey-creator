import * as path from "node:path";
import { fileURLToPath } from "node:url";
import type { Suite } from "./harness/ids.ts";
import { SUITES, idsOfSuite } from "./harness/ids.ts";
import type { MachineInfo } from "./harness/node/machine.ts";
import { machineInfo } from "./harness/node/machine.ts";

// The runner contract (CONTRACT.md): what a caller, such as the perf server in surveyjs-performance-monitor, needs to
// build a creator target and run the suites of this checkout. `node perf/manifest.ts` prints it as JSON; it needs no
// build and no installed package, so it imports nothing but ids.ts and machine.ts.
// The creator's contract has its own numbering (C11); the result file is survey-library's schema 2 with additions.
export const product = "creator";
export const contractVersion = 1;
export const resultSchema = 2;

// A hang guard: it stops one hung core scenario process (perf/core/run.ts), and the rest of the suite still runs. A
// suite itself has no time limit (00, Measurement rules).
export const scenarioTimeoutMs = 300000;

// A build of the survey-library target. `cwd` and `dir` are relative to the library checkout; `env` is the variable
// that points a suite at it. The creator builds read these through the node_modules junctions of the sibling layout.
// `commands` is what the creator needs from that package, run in order in `cwd`; survey-library's own perf build has
// all of them except survey-core's build:themes.
export interface LibraryBuild {
  env: string;
  package: string;
  cwd: string;
  commands: Array<string>;
  dir: string;
  // Only these suites load it; without `suites`, every suite does.
  suites?: Array<Suite>;
}

// A creator build of the target. Every path is relative to the creator checkout root: in `cwd`, run `install`, then
// `commands`, in order; they write `dir`. Its inputs are the `src` folders, the version in `cwd`'s package.json (the
// build prints it, and checkLibraryVersion compares it) and, for `bundles`, the parts of the library target that
// rollup copies into it (04, R04-F1): a build is the same only when all of them are.
export interface CreatorBuild {
  env: string;
  cwd: string;
  install: Array<string>;
  commands: Array<string>;
  dir: string;
  src: Array<string>;
  bundles?: Array<string>;
  suites?: Array<Suite>;
}

export interface SuiteManifest {
  ids: Array<string>;
  // Relative to the checkout root: the caller runs `node <root>/<script> ...args` in `<root>/<cwd>`.
  cwd: string;
  script: string;
  args: Array<string>;
}

export interface Manifest {
  product: string;
  contract: number;
  resultSchema: number;
  library: { repo: string, layout: "sibling", builds: Array<LibraryBuild> };
  // Run in the creator checkout root after the library builds, before `builds`.
  install: Array<string>;
  builds: Array<CreatorBuild>;
  suites: { [suite: string]: SuiteManifest };
  // This process's machine block without Chromium (its version is known only once Playwright runs).
  machine: MachineInfo;
}

// "sibling": the creator packages are installed with a survey-library checkout next to this one
// (<parent>/survey-library), because their package.json files name the library builds by a relative path and npm
// links them into node_modules. The library builds must exist before the creator builds run.
// survey-core: creator-core bundles survey-core/themes and survey-core/linter (its build fails without them), the react
// page loads themes/index.min.js, and survey-react-ui's build imports survey-core/icons. i18n is not needed.
export const libraryBuilds: Array<LibraryBuild> = [
  { env: "PERF_CORE_DIR", package: "survey-core", cwd: "packages/survey-core",
    commands: ["npm run build", "npm run build:icons", "npm run build:linter", "npm run build:themes"], dir: "packages/survey-core/build" },
  { env: "PERF_LIB_UI_DIR", package: "survey-react-ui", cwd: "packages/survey-react-ui", commands: ["npm run build"],
    dir: "packages/survey-react-ui/build", suites: ["react"] }
];

// The minimum that builds what the suites load (04 reports the commands it verified). creator-core's `build:main` makes
// the ESM entry of the core suite and the UMD build and stylesheet of the react page. survey-creator-react imports types
// from survey-creator-core/collaboration, and its build type-checks them (TS2307 without build:collaboration). The
// preset builds are not needed.
// Each package is installed right before its build: survey-creator-react's install links node_modules/survey-creator-core
// to creator-core's build folder, which must exist by then. `npm install`, not `npm ci`: the lock files are git-ignored.
// creator-core's rollup keeps only the bare survey-core external, so survey-core/themes and survey-core/linter (its
// subpath imports) are copied into its build: that build changes with the library target too.
export const rootInstall: Array<string> = ["npm install"];
export const creatorBuilds: Array<CreatorBuild> = [
  { env: "PERF_CREATOR_CORE_DIR", cwd: "packages/survey-creator-core", install: ["npm install"],
    commands: ["npm run build:main", "npm run build:collaboration"], dir: "packages/survey-creator-core/build",
    src: ["packages/survey-creator-core/src"], bundles: ["survey-core/linter", "survey-core/themes"] },
  { env: "PERF_UI_DIR", cwd: "packages/survey-creator-react", install: ["npm install"], commands: ["npm run build"],
    dir: "packages/survey-creator-react/build", src: ["packages/survey-creator-react/src"], suites: ["react"] }
];

export function manifest(env: NodeJS.ProcessEnv = process.env): Manifest {
  const suites: { [suite: string]: SuiteManifest } = {};
  SUITES.forEach((suite: Suite) => {
    if (suite === "core") {
      suites[suite] = { ids: idsOfSuite(suite), cwd: "packages/survey-creator-core", script: "perf/core/run.ts", args: [] };
      return;
    }
    // @playwright/test is in the root node_modules; the package's playwright.perf.config.ts is read from cwd.
    suites[suite] = { ids: idsOfSuite(suite), cwd: "packages/survey-creator-react", script: "node_modules/@playwright/test/cli.js",
      args: ["test", "-c", "playwright.perf.config.ts"] };
  });
  return {
    product: product,
    contract: contractVersion,
    resultSchema: resultSchema,
    library: { repo: "survey-library", layout: "sibling", builds: libraryBuilds.map((b: LibraryBuild) => Object.assign({}, b)) },
    install: rootInstall.slice(),
    builds: creatorBuilds.map((b: CreatorBuild) => Object.assign({}, b)),
    suites: suites,
    machine: machineInfo({ extra: env.PERF_MACHINE_EXTRA })
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(manifest(), null, 2));
}
