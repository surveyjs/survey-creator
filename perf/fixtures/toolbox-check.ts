import { importRunnerModules } from "../harness/node/modules.ts";
import { TOOLBOX_TYPES } from "./typical.ts";

// node perf/fixtures/toolbox-check.ts
//
// Compares typical's fixed toolbox type list with the default toolbox of the runner's creator build, and prints the
// types that only one of them has. It exits 0: a new toolbox type joins the generator's list by hand, because it
// changes typical's hash and so its series. A generator type the build lacks would fail typical's load in perf:test.
const modules = await importRunnerModules();
const creator = new modules.Creator.SurveyCreatorModel({});
const build: Array<string> = creator.toolbox.items.map((item: any) => item.name);
creator.dispose();
console.log(JSON.stringify({
  creatorVersion: modules.Creator.Version,
  notInGenerator: build.filter((t: string) => TOOLBOX_TYPES.indexOf(t) < 0),
  notInBuild: TOOLBOX_TYPES.filter((t: string) => build.indexOf(t) < 0)
}));
