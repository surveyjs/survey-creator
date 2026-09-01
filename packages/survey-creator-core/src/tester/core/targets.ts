import { SurveyModel } from "survey-core";
import { SurveyTestTargets, SurveyTestSurveyTargetName } from "survey-core/tester";

// The names a case may address, read off a throwaway model built from the Survey JSON tab. It is for
// introspection only and is disposed immediately: the model a test runs on is created by the runner,
// once per test, and never by this application.
//
// Every name here comes from SurveyTestTargets.nameOf, so this list is the tester's own grammar and not
// a second spelling of it: a name shown is a name the runner resolves back to the very element it was
// read from. An element nameOf declines is shown too, and said to be unaddressable - a duplicate name is
// exactly the case an author needs to see and the one a silently shorter list would hide.

export interface TargetInfo {
  name: string;
  kind: "page" | "panel" | "question" | "cell" | "calculatedValue";
  note?: string;
}

export interface TargetsResult {
  targets: Array<TargetInfo>;
  error?: string;
  // "survey" is a reserved target name: an element carrying it ends every case with
  // reservedTargetName, so it is worth saying so where the definition is edited.
  reservedNameUsed: boolean;
}

const UNADDRESSABLE = "no name a case can address";

interface Collector {
  survey: SurveyModel;
  targets: Array<TargetInfo>;
  reservedNameUsed: boolean;
}

export function getSurveyTargets(surveyJson: any): TargetsResult {
  if (!surveyJson || typeof surveyJson !== "object") {
    return { targets: [], reservedNameUsed: false };
  }
  let survey: SurveyModel | undefined = undefined;
  try {
    survey = new SurveyModel(surveyJson);
    const collector: Collector = { survey: survey, targets: [], reservedNameUsed: false };
    survey.pages.forEach(page => {
      add(collector, page, "page", "page");
      collect(collector, (page as any).elements || []);
    });
    (survey.calculatedValues || []).forEach(item => {
      add(collector, item, "calculatedValue", "calculated value");
    });
    return { targets: collector.targets, reservedNameUsed: collector.reservedNameUsed };
  } catch(error) {
    return {
      targets: [],
      reservedNameUsed: false,
      error: !!error && (error as any).message ? (error as any).message : String(error),
    };
  } finally {
    if (!!survey) survey.dispose();
  }
}

// One entry per model object, named by the tester. A question named "survey" is one of the objects nameOf
// declines: the name it would carry addresses the survey itself, which is what reservedTargetName says.
function add(collector: Collector, obj: any, kind: TargetInfo["kind"], note: string): void {
  const own: string = typeof obj?.name === "string" ? obj.name : "";
  if (own === SurveyTestSurveyTargetName) collector.reservedNameUsed = true;
  const name = SurveyTestTargets.nameOf(collector.survey, obj);
  if (!!name) {
    collector.targets.push({ name: name, kind: kind, note: note });
    return;
  }
  if (!own) return;
  collector.targets.push({ name: own, kind: kind, note: note + " · " + UNADDRESSABLE }); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
}

function collect(collector: Collector, elements: Array<any>): void {
  elements.forEach(element => {
    const type: string = typeof element.getType === "function" ? element.getType() : "element";
    if (type === "panel") {
      add(collector, element, "panel", "panel");
      collect(collector, element.elements || []);
      return;
    }
    add(collector, element, "question", type);
    collectRows(collector, element);
    collectPanels(collector, element);
  });
}

// The cells of a matrix, as the tester names them: by the index of the row for a dynamic matrix and by the
// row name for declared rows. The rows this model holds are the ones the definition produces, so the first
// of them is the one worth listing - a column reads the same in every row.
function collectRows(collector: Collector, element: any): void {
  if (!Array.isArray(element.visibleRows) || !Array.isArray(element.columns)) return;
  const row = element.visibleRows[0];
  if (!row) {
    // Only a dynamic matrix has rows a case addresses by index and can start without any. A matrix with
    // declared rows and no rows declared has no cell to address at all, so nothing is offered for it.
    if (typeof element.rowCount === "number") {
      hint(collector, element, element.columns, "row this definition does not create");
    }
    return;
  }
  (row.cells || []).forEach((cell: any) => {
    const question = !!cell ? cell.question : undefined;
    if (!!question) add(collector, question, "cell", "cell of " + element.name);
  });
}

// The same for a dynamic panel, whose panels are the indexed children of the question.
function collectPanels(collector: Collector, element: any): void {
  if (!Array.isArray(element.panels)) return;
  const panel = element.panels[0];
  if (!panel) {
    if (typeof element.panelCount === "number") {
      hint(collector, element, element.templateElements || [], "panel this definition does not create");
    }
    return;
  }
  add(collector, panel, "panel", "panel of " + element.name);
  (panel.questions || []).forEach((question: any) => {
    add(collector, question, "cell", "question of " + element.name);
  });
}

// The one thing nameOf cannot answer: what a cell would be called in a row or a panel that this definition
// starts without. There is no object to name, so the shape of the path is spelled out here - and it is a
// hint in the side list, never a name a step is written from.
function hint(collector: Collector, element: any, children: Array<any>, note: string): void {
  if (typeof element.name !== "string" || !element.name) return;
  children.forEach((child: any) => {
    if (typeof child?.name !== "string" || !child.name) return;
    collector.targets.push({ name: element.name + "[0]." + child.name, kind: "cell", note: note });
  });
}
