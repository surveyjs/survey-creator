import { SurveyTestTargets } from "survey-core/tester";
import type { ISurveyTestTargetContext, SurveyTestTargetKind } from "survey-core/tester";

// The name a case addresses a model object by. The tester owns that grammar in both directions -
// SurveyTestTargets.nameOf is the inverse of the resolution the runner performs - so this file is a
// thin adapter over it and no longer restates any of the rules. What it adds is the one thing the
// tester cannot know: which survey the object belongs to. Every renderer event this app subscribes to
// hands over a question, a panel, a page or a row, and each of them answers getSurvey().
//
// The recorder derives every target from model objects and never from the DOM: the DOM only says which
// element was touched, while the grammar - "contacts[1].phone", "items[0].quantity",
// "matrix.row1.column1" - is defined over the model tree.

function getSurvey(obj: any): any {
  if (!obj) return undefined;
  if (typeof obj.getSurvey === "function") return obj.getSurvey();
  return obj.survey;
}

// The row a matrix renderer event handed over with a cell, passed through to the tester as the row
// context. It is a fallback there - whatever the object itself can say wins - and it is what addresses
// a cell whose row cannot be recovered from the object, a question of a detail panel among them.
export function targetContextOf(matrix: any, row: any): ISurveyTestTargetContext | undefined {
  return !!matrix || !!row ? { matrix: matrix, row: row } : undefined;
}

// undefined for an element the grammar cannot address - a static panel nested inside the panel of a
// dynamic panel, a question with no name, a question of another survey - so that no adorner is offered
// for it rather than one that would end the case with unknownTarget. A panel of a dynamic panel is
// addressable ("contacts[1]") and does get one.
export function getQuestionTargetName(question: any, context?: ISurveyTestTargetContext): string | undefined {
  const survey = getSurvey(question) || (!!context ? getSurvey(context.matrix) : undefined);
  return SurveyTestTargets.nameOf(survey, question, context);
}

export function getPanelTargetName(panel: any): string | undefined {
  return SurveyTestTargets.nameOf(getSurvey(panel), panel);
}

export function getPageTargetName(page: any): string | undefined {
  return SurveyTestTargets.nameOf(getSurvey(page), page);
}

// Which adorner to render for an element. This is presentation, not grammar: the tester's target kinds
// describe what a check applies to, and this app needs the answer before it has a target name at all.
export function getTargetKind(obj: any): SurveyTestTargetKind | undefined {
  if (!obj || typeof obj.getType !== "function") return undefined;
  const type: string = obj.getType();
  if (type === "page") return "page";
  if (type === "panel") return "panel";
  return "question";
}
