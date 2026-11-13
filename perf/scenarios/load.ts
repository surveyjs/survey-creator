import type { PerfContext, PerfScenario } from "../harness/scenario.ts";
import type { FixtureKey } from "../harness/ids.ts";
import { expectEqual } from "../harness/scenario.ts";
import { createCreator } from "./options.ts";
import { recordJsonErrors, releaseCreator, questionCount } from "./helpers.ts";

// load: creator.JSON = json on a fresh creator (00, The scenarios). The UI action is the app's own: it loads the
// saved survey into the creator. The creator and the parsed JSON are made in setup (untimed).
export function loadJson(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/load/json", rev: 1, fixture: fixture, kind: "load", uses: ["createCreator", "recordJsonErrors", "releaseCreator", "questionCount"],
    setup: (ctx: PerfContext): any => ({ creator: createCreator(ctx), json: JSON.parse(ctx.fixture.text) }),
    run: (ctx: PerfContext, state: any): void => {
      state.creator.JSON = state.json;
    },
    check: (ctx: PerfContext, state: any): void => {
      recordJsonErrors(ctx, state.creator);
      expectEqual(state.creator.survey.pages.length, ctx.fixture.meta.pages, "pages");
      expectEqual(questionCount(state.creator), ctx.fixture.meta.questions.all, "questions");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

export function loadScenarios(): Array<PerfScenario> {
  return [loadJson("huge"), loadJson("typical"), loadJson("locales")];
}
