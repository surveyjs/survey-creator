import { SurveyTestCheckCommandName } from "survey-core/tester";
import type { ISurveyTestStep } from "survey-core/tester";
import { formatValue, getStepCommandName, getStepParams, getStepTargets } from "../core/stepInfo";
import { testerLocalization, testerText } from "../localization";

// What a step says, in the words a tester would use, with the literal underneath it. The grammar of the
// case is still shown - the target and the detail line are mono - but the verb is not: "set" is a key of
// a JSON object, and a person reading a list of thirty of them is reading a language, not a case.
//
// The verbs live in the string table under "recorder.action.<command>", which is also what makes the
// rule below readable: a command this widget has never heard of has no entry, and hasString() answering
// no is how it is shown as it was written rather than renamed into something friendly that would be a
// guess.

export interface StepLine {
  action: string;
  detail: string;
  targets: Array<string>;
}

export function describeStep(step: ISurveyTestStep): StepLine {
  const command = getStepCommandName(step);
  const targets = getStepTargets(step, command);
  const params: any = getStepParams(step, command);
  if (command === SurveyTestCheckCommandName) {
    return {
      action: testerText("recorder.action.expect", checkWord(params)),
      detail: checkDetail(params),
      targets: targets,
    };
  }
  const path = "recorder.action." + command;
  const action = testerLocalization.hasString(path) ? testerText(path) : command;
  return { action: action, detail: payloadDetail(command, params), targets: targets };
}

function checkWord(params: any): string {
  const names = checkNames(params);
  if (names.length === 1) return names[0];
  return testerText("recorder.action.properties");
}

function checkNames(params: any): Array<string> {
  const names: Array<string> = [];
  if (!params || typeof params !== "object") return names;
  Object.keys(params).forEach(target => {
    const map = params[target];
    if (!map || typeof map !== "object") return;
    Object.keys(map).forEach(check => { if (names.indexOf(check) < 0) names.push(check); });
  });
  return names;
}

function checkDetail(params: any): string {
  const names = checkNames(params);
  return testerText("recorder.action.checkDetail", names.length, names.join(", "));
}

function payloadDetail(command: string, params: any): string {
  if (!params || typeof params !== "object") return formatValue(params, 60);
  const keys = Object.keys(params);
  // "survey: true" is how the grammar spells a press of a navigation button. Repeating it under the
  // sentence that already says so is noise.
  if (keys.length === 1 && params[keys[0]] === true && command !== "clear") return "";
  return testerText("recorder.action.payloadJoin",
    keys.map(key => formatValue(params[key], 40)));
}
