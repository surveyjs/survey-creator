import { funnels as libraryFunnels, installFunnels } from "./counters.ts";
import type { Funnel, FunnelCounters } from "./counters.ts";

// The creator's counters (C09): two of survey-library's funnels, installed on ctx.Survey, and surveysCreated,
// installed on ctx.Creator. A funnel the build lacks gives null, as in the library.
export const surveyFunnels: ReadonlyArray<Funnel> = libraryFunnels.filter((f: Funnel) => f.name === "conditionRuns" || f.name === "expressionRuns");

// The creator makes a survey per purpose (the designer, the preview, the property grid, the logic and translation
// tabs, ...), and createSurvey(json, reason, ...) names it. One wrapper counts them all: surveysCreated is the total,
// surveysCreated.<reason> the count per reason. A per-reason funnel list in counters.ts could not name the reasons in
// advance.
export const SURVEYS_CREATED = "surveysCreated";

export function installSurveysCreated(Creator: any): FunnelCounters {
  const cls = Creator ? Creator.SurveyCreatorModel : undefined;
  const proto = cls && cls.prototype;
  const original = proto ? proto.createSurvey : undefined;
  if (typeof original !== "function") {
    return {
      reset: (): void => {},
      read: (): { [name: string]: number | null } => ({ [SURVEYS_CREATED]: null }),
      uninstall: (): void => {}
    };
  }
  let total = 0;
  let byReason: { [reason: string]: number } = {};
  const hadOwn = Object.prototype.hasOwnProperty.call(proto, "createSurvey");
  proto.createSurvey = function(this: any, ...args: Array<any>): any {
    total++;
    const reason = String(args[1]);
    byReason[reason] = (byReason[reason] || 0) + 1;
    return original.apply(this, args);
  };
  return {
    reset: (): void => {
      total = 0;
      byReason = {};
    },
    read: (): { [name: string]: number | null } => {
      const res: { [name: string]: number | null } = { [SURVEYS_CREATED]: total };
      Object.keys(byReason).sort().forEach((reason: string) => { res[SURVEYS_CREATED + "." + reason] = byReason[reason]; });
      return res;
    },
    uninstall: (): void => {
      if (hadOwn) proto.createSurvey = original;
      else delete proto.createSurvey;
    }
  };
}

// All the creator's funnels as one FunnelCounters, for scenarioDriver's installFunnels.
export function installCreatorFunnels(ctx: { Survey: any, Creator: any }): FunnelCounters {
  const parts = [installFunnels(ctx.Survey, surveyFunnels), installSurveysCreated(ctx.Creator)];
  return {
    reset: (): void => parts.forEach((p: FunnelCounters) => p.reset()),
    read: (): { [name: string]: number | null } => Object.assign({}, ...parts.map((p: FunnelCounters) => p.read())),
    uninstall: (): void => parts.slice().reverse().forEach((p: FunnelCounters) => p.uninstall())
  };
}
