import {
  Base, ItemValue, MatrixDropdownColumn, MultipleTextItemModel, PanelModelBase, Question,
  QuestionMatrixDropdownModelBase, QuestionMultipleTextModel, QuestionPanelDynamicModel,
  SurveyModel, SurveyValidator,
} from "survey-core";

// The linter addresses the survey JSON by paths ("pages[0].elements[1].visibleIf"), and the
// creator holds objects. This maps one onto the other: the survey is walked the way
// survey.toJSON() writes it - which is also how the linter's walker builds its paths - and every
// object gets the path of its JSON. Item values are the exception: there are too many of them to
// walk, and each one already knows the array property that holds it.
// An object that toJSON() does not write where it lives - the content of a custom component, an
// object detached from the survey - gets no path.
export class LintPathResolver {
  private paths = new Map<Base, string>();

  constructor(private survey: SurveyModel) {
    if (!survey) return;
    this.paths.set(survey, "");
    survey.pages.forEach((page, i) => this.addContainer(page, "pages[" + i + "]"));
    this.addArray(survey.calculatedValues, "calculatedValues");
    this.addArray(survey.triggers, "triggers");
    this.addArray(survey.completedHtmlOnCondition, "completedHtmlOnCondition");
    this.addArray(survey.navigateToUrlOnCondition, "navigateToUrlOnCondition");
  }
  public getPath(obj: Base): string | undefined {
    if (!obj) return undefined;
    const res = this.paths.get(obj);
    if (res !== undefined) return res;
    if (obj instanceof ItemValue) return this.getItemValuePath(obj);
    return undefined;
  }
  private addArray(items: Array<Base>, path: string): void {
    if (!Array.isArray(items)) return;
    items.forEach((item, i) => this.paths.set(item, path + "[" + i + "]"));
  }
  private addContainer(panel: PanelModelBase, path: string): void {
    this.paths.set(panel, path);
    this.addElements(panel.elements, path + ".elements");
  }
  private addElements(elements: Array<any>, path: string): void {
    if (!Array.isArray(elements)) return;
    elements.forEach((el, i) => {
      const elPath = path + "[" + i + "]";
      if (el.isPanel) {
        this.addContainer(el, elPath);
      } else {
        this.addQuestion(el, elPath);
      }
    });
  }
  private addValidators(validators: Array<SurveyValidator>, path: string): void {
    this.addArray(validators, path + ".validators");
  }
  private addQuestion(question: Question, path: string): void {
    this.paths.set(question, path);
    this.addValidators(question.validators, path);
    if (question instanceof QuestionPanelDynamicModel) {
      // the template is not written as a panel of its own: its elements are a property of the
      // dynamic panel, and templateVisibleIf & co. sit on the dynamic panel too
      this.addElements(question.template.elements, path + ".templateElements");
    }
    if (question instanceof QuestionMatrixDropdownModelBase) {
      question.columns.forEach((column: MatrixDropdownColumn, i: number) => {
        const colPath = path + ".columns[" + i + "]";
        this.paths.set(column, colPath);
        // a column keeps its choices and validators on its template question
        this.paths.set(column.templateQuestion, colPath);
        this.addValidators(column.validators, colPath);
      });
      if (question.detailElements.length > 0) {
        this.addElements(question.detailElements, path + ".detailElements");
      }
    }
    if (question instanceof QuestionMultipleTextModel) {
      question.items.forEach((item: MultipleTextItemModel, i: number) => {
        const itemPath = path + ".items[" + i + "]";
        this.paths.set(item, itemPath);
        this.paths.set(item.editor, itemPath);
        this.addValidators(item.validators, itemPath);
      });
    }
  }
  private getItemValuePath(item: ItemValue): string | undefined {
    const owner: any = item.locOwner;
    const prop = item.ownerPropertyName;
    if (!owner || !prop || !Array.isArray(owner[prop])) return undefined;
    const index = owner[prop].indexOf(item);
    if (index < 0) return undefined;
    const ownerPath = this.paths.get(owner);
    if (ownerPath === undefined) return undefined;
    return joinLintPath(ownerPath, prop + "[" + index + "]");
  }
}

export function joinLintPath(path: string, name: string): string {
  return !path ? name : path + "." + name;
}

// "pages[0].elements[1].visibleIf" -> ["pages", 0, "elements", 1, "visibleIf"], the grammar of
// the linter's own applyFix
export function parseLintPath(path: string): Array<string | number> {
  const res: Array<string | number> = [];
  if (!path) return res;
  path.split(".").forEach(part => {
    if (!part) return;
    const bracket = part.indexOf("[");
    if (bracket < 0) {
      res.push(part);
      return;
    }
    if (bracket > 0) res.push(part.substring(0, bracket));
    (part.substring(bracket).match(/\[(\d+)\]/g) || []).forEach(entry =>
      res.push(parseInt(entry.substring(1, entry.length - 1), 10)));
  });
  return res;
}

export function formatLintPath(segments: Array<string | number>): string {
  let res = "";
  segments.forEach(segment => {
    if (typeof segment === "number") res += "[" + segment + "]";
    else res = joinLintPath(res, segment);
  });
  return res;
}

export function getValueByLintPath(json: any, path: string): any {
  let res = json;
  const segments = parseLintPath(path);
  for (let i = 0; i < segments.length; i++) {
    if (!res || typeof res !== "object") return undefined;
    res = res[segments[i]];
  }
  return res;
}

// The path of one object of the designer survey, or undefined when it has none (see above).
// A caller that needs several paths creates one LintPathResolver and asks it, rather than walking
// the survey once per object.
export function getLintPath(obj: Base, survey?: SurveyModel): string | undefined {
  if (!obj) return undefined;
  if (!survey) survey = findSurvey(obj);
  if (!survey) return undefined;
  return new LintPathResolver(survey).getPath(obj);
}

// The elements of a matrix detail panel template have no survey of their own: the template knows
// its matrix only as the element it selects in the designer.
function findSurvey(obj: any): SurveyModel {
  for (let i = 0; !!obj && i < 100; i++) {
    if (obj instanceof SurveyModel) return obj;
    const survey = obj.getSurvey ? obj.getSurvey() : undefined;
    if (!!survey) return survey;
    const next = obj.parent || obj.parentQuestion || obj.colOwner || obj.locOwner ||
      (obj.selectedElementInDesign !== obj ? obj.selectedElementInDesign : undefined);
    if (next === obj) return undefined;
    obj = next;
  }
  return undefined;
}
