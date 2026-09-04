import type { ILintFinding } from "survey-core/linter";
import type { SurveyCreatorModel } from "../creator-base";
import { parseLintPath } from "./lint-path";

export interface ILintFindingTarget {
  // A survey element the designer can select, or undefined when the finding has no place on
  // the design surface.
  element?: any;
  // The property the finding points at, when the target owns it. Passed to selectElement so
  // the property grid focuses the editor of exactly that property.
  propertyName?: string;
}

function arrayAt(arr: any, index: number): any {
  return Array.isArray(arr) && index >= 0 && index < arr.length ? arr[index] : undefined;
}

// The containers the walk goes through. Every other array of the JSON - choices, rows,
// validators, items - holds something the designer does not select on its own, so the walk
// stops at its owner instead.
const walkableContainers: { [key: string]: (owner: any, index: number) => any } = {
  pages: (owner: any, index: number) => arrayAt(owner.pages, index),
  elements: (owner: any, index: number) => arrayAt(owner.elements, index),
  questions: (owner: any, index: number) => arrayAt(owner.elements, index),
  templateElements: (owner: any, index: number) =>
    arrayAt(!!owner.template ? owner.template.elements : owner.templateElements, index),
  detailElements: (owner: any, index: number) =>
    arrayAt(!!owner.detailPanel ? owner.detailPanel.elements : owner.detailElements, index),
};

// Survey-level collections that have no element of their own: the finding is shown by opening
// the survey settings at that property, or the Logic tab.
const surveyProperties = ["triggers", "calculatedValues"];

function isSelectable(el: any): boolean {
  return !!el && !!el.getType && (el.isQuestion || el.isPanel || el.isPage);
}

// Resolves the path of a finding to an element of the survey being designed.
//
// The path is walked first and the element name is only a fallback: the path also names the
// property the finding is about, and it was produced from the very JSON that was analysed, so
// its indices address that JSON. The walk stops at the deepest element that resolved - the
// same policy SurveyTextWorker.getPositionByPath uses for the editor text.
export function resolveFindingTarget(creator: SurveyCreatorModel,
  finding: ILintFinding): ILintFindingTarget {
  const survey: any = !!creator ? creator.survey : undefined;
  if (!survey || !finding) return {};
  const segments = parseLintPath(finding.path);
  let owner: any = survey;
  let element: any = undefined;
  let propertyName: string = undefined;
  let index = 0;
  while(index < segments.length) {
    const segment = segments[index];
    if (typeof segment !== "string") {
      index++;
      continue;
    }
    const next = segments[index + 1];
    const hasIndex = typeof next === "number";
    if (surveyProperties.indexOf(segment) > -1) {
      element = survey;
      propertyName = segment;
      break;
    }
    const walker = walkableContainers[segment];
    if (!!walker && hasIndex) {
      const child = walker(owner, <number>next);
      // a container the JSON names and the model does not have: the finding belongs to the
      // last element that did resolve
      if (!isSelectable(child)) break;
      owner = child;
      element = child;
      propertyName = undefined;
      index += 2;
      continue;
    }
    if (!hasIndex && index === segments.length - 1) {
      // a trailing name that is no container is the property the finding points at
      propertyName = segment;
    }
    break;
  }
  if (!element) {
    element = resolveByName(survey, finding.elementName);
    // a name-based target owns none of the path, so the property of a deeper element must not
    // travel with it
    if (!!element) propertyName = undefined;
  }
  if (!element) return {};
  return { element: element, propertyName: propertyName };
}

function resolveByName(survey: any, name: string): any {
  if (!name) return undefined;
  return survey.getQuestionByName(name) || survey.getPanelByName(name, true) ||
    survey.getPageByName(name) || survey.getCalculatedValueByName(name);
}

// Selects the element a finding points at and focuses the editor of its property. Returns
// false when the finding has no place on the design surface.
export function navigateToFinding(creator: SurveyCreatorModel, finding: ILintFinding): boolean {
  const target = resolveFindingTarget(creator, finding);
  if (!target.element) return false;
  // a trigger or a calculated value is a rule, not an element: the Logic tab is where it is
  // edited, and its items are built from the model rather than from the JSON, so the tab is
  // opened without trying to reveal one item of it
  if (target.element === creator.survey && target.propertyName === "triggers" &&
    creator.showLogicTab) {
    creator.switchTab("logic");
    return true;
  }
  creator.selectElement(target.element, target.propertyName);
  return true;
}
