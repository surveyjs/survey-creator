// The jsdom window before anything else (02).
import "./dom.ts";
import * as path from "node:path";
import { pathToFileURL } from "node:url";
import { installHooks } from "./hooks.ts";
import { resolveTargetDir, creatorCoreMain } from "../harness/node/build.ts";
import type { TargetDir } from "../harness/node/build.ts";
import { createCreator } from "../scenarios/options.ts";
import type { PerfContext } from "../harness/scenario.ts";

// The target builds of a core process, imported in the order of 02: the resolve hook, survey-core through it (the
// module ctx.Survey gets), then the creator-core ESM build, whose "survey-core" resolves to the same module.
export interface CoreTargets {
  Survey: any;
  Creator: any;
  core: TargetDir;
  creatorCore: TargetDir;
}

export async function importTargets(): Promise<CoreTargets> {
  const core = resolveTargetDir("core");
  const creatorCore = resolveTargetDir("creatorCore");
  installHooks({ coreDir: core.dir, creatorCoreDir: creatorCore.dir });
  const Survey = await import("survey-core");
  const Creator = await import(pathToFileURL(path.join(creatorCore.dir, creatorCoreMain)).href);
  return { Survey: Survey, Creator: Creator, core: core, creatorCore: creatorCore };
}

// One survey-core instance (C06), checked once per process: with a second one, loaded around the hook,
// creator.survey would not be a ctx.Survey.SurveyModel. Returns the creator, for the requires check; the caller
// disposes it.
export function checkedCreator(ctx: PerfContext, targets: CoreTargets): any {
  const creator = createCreator(ctx);
  if (!(creator.survey instanceof ctx.Survey.SurveyModel)) {
    creator.dispose();
    throw new Error("creator.survey is not a ctx.Survey.SurveyModel: survey-creator-core at " + targets.creatorCore.dir + " loaded another survey-core than " +
      targets.core.dir);
  }
  return creator;
}
