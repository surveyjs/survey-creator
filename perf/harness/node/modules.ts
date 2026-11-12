import * as path from "node:path";
import { pathToFileURL } from "node:url";
import { defaultTargetDir, coreMain, creatorCoreMain } from "./build.ts";

// The runner's survey-core and survey-creator-core builds, imported by path (perf:test). The creator build imports the
// bare "survey-core", which Node resolves through packages/survey-creator-core/node_modules/survey-core: the same
// realpath as the default core dir, so both share one survey-core instance. Another PERF_CORE_DIR needs the resolve
// hook of the core runner (02), so perf:test always uses the runner's builds.
export interface RunnerModules {
  Survey: any;
  Creator: any;
  coreDir: string;
  creatorCoreDir: string;
}

export async function importRunnerModules(): Promise<RunnerModules> {
  const coreDir = defaultTargetDir("core");
  const creatorCoreDir = defaultTargetDir("creatorCore");
  const Survey = await import(pathToFileURL(path.join(coreDir, coreMain)).href);
  const Creator = await import(pathToFileURL(path.join(creatorCoreDir, creatorCoreMain)).href);
  // The toolbox is a survey-core ActionContainer: with a second survey-core instance it would not be a Survey.Base.
  if (!(new Creator.QuestionToolbox() instanceof Survey.Base)) {
    throw new Error("survey-creator-core at " + creatorCoreDir + " loaded another survey-core than " + coreDir);
  }
  return { Survey: Survey, Creator: Creator, coreDir: coreDir, creatorCoreDir: creatorCoreDir };
}

export async function importRunnerCore(): Promise<any> {
  return import(pathToFileURL(path.join(defaultTargetDir("core"), coreMain)).href);
}
