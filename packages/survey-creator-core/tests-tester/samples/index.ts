import { sample as conditionalVisibility } from "./01-conditional-visibility";
import { sample as validationAndErrors } from "./02-validation-and-errors";
import { sample as multiPageNavigation } from "./03-multi-page-navigation";
import { sample as startPageAndPreview } from "./04-start-page-and-preview";
import { sample as dynamicMatrix } from "./05-dynamic-matrix";
import { sample as dynamicPanel } from "./06-dynamic-panel";
import { sample as triggersAndCalculatedValues } from "./07-triggers-and-calculated-values";
import { sample as pinnedClock } from "./08-pinned-clock";
import { sample as startsAndVariables } from "./09-starts-and-variables";
import { sample as locale } from "./10-locale";
import { sample as asyncServerValidation } from "./11-async-server-validation";
import { sample as failingSuite } from "./12-failing-suite";
import { sample as brokenSuite } from "./13-broken-suite";
import { sample as asyncFunctions } from "./14-async-functions";
import { sample as webChoices } from "./15-web-choices";
import { sample as playground } from "./16-playground";
import type { Sample } from "./types";

export type { Sample } from "./types";

export const samples: Array<Sample> = [
  conditionalVisibility,
  validationAndErrors,
  multiPageNavigation,
  startPageAndPreview,
  dynamicMatrix,
  dynamicPanel,
  triggersAndCalculatedValues,
  pinnedClock,
  startsAndVariables,
  locale,
  asyncServerValidation,
  failingSuite,
  brokenSuite,
  asyncFunctions,
  webChoices,
  playground,
];

export const defaultSample: Sample = samples[0];

export function getSampleById(id: string | undefined): Sample | undefined {
  return !id ? undefined : samples.find(sample => sample.id === id);
}
