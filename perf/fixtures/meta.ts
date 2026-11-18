// The counts of a fixture's JSON, for meta. Counted from the JSON alone (no survey-core), so meta needs no build;
// fixtures.test.ts compares them with the loaded survey.
//
// * pages: json.pages.
// * panels: "panel" elements on pages and in panels, at any depth. Panels inside a dynamic panel's templateElements are
//   not counted (survey.getAllPanels() does not return them either).
// * questions.all: every non-panel element on pages and in panels at any depth, which is survey.getAllQuestions(false);
//   questions.topLevel are the ones directly on a page, questions.inPanels the ones inside a panel. A dynamic panel
//   counts as one question. questions.inTemplates are the elements of dynamic panel templates (not in all).
// * types: the elements of questions.all and panels by type.
// * conditions: every string property whose name ends with "If" or "Expression", anywhere in the JSON (elements,
//   choices, columns, validators, triggers, ...), in total and per property name. "expression" itself (an expression
//   question, a validator, a trigger, a calculated value) is not a condition property and is not counted.
// * locales: the locale keys of the localizable strings ("default" read as "en"), sorted; strings: how many
//   localizable strings the JSON holds as locale objects.
export interface FixtureMeta {
  pages: number;
  panels: number;
  questions: { all: number, topLevel: number, inPanels: number, inTemplates: number };
  types: { [type: string]: number };
  conditions: { total: number, byProperty: { [name: string]: number } };
  calculatedValues: number;
  triggers: number;
  locales: Array<string>;
  strings: number;
}

const localeKey = /^(default|[a-z]{2}(-[a-z]{2,4})?)$/;

// A localizable string written for several locales: { "default": "...", "de": "..." }.
export function isLocaleObject(value: any): boolean {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const keys = Object.keys(value);
  return keys.length > 0 && keys.indexOf("default") > -1 && keys.every((k: string) => localeKey.test(k) && typeof value[k] === "string");
}

export function countJson(json: any): FixtureMeta {
  const meta: FixtureMeta = {
    pages: (json.pages || []).length,
    panels: 0,
    questions: { all: 0, topLevel: 0, inPanels: 0, inTemplates: 0 },
    types: {},
    conditions: { total: 0, byProperty: {} },
    calculatedValues: (json.calculatedValues || []).length,
    triggers: (json.triggers || []).length,
    locales: [],
    strings: 0
  };
  const countTemplate = (elements: Array<any>): void => {
    elements.forEach((el: any) => {
      meta.questions.inTemplates++;
      countTemplate(el.elements || []);
      countTemplate(el.templateElements || []);
    });
  };
  const walkElements = (elements: Array<any>, inPanel: boolean): void => {
    elements.forEach((el: any) => {
      meta.types[el.type] = (meta.types[el.type] || 0) + 1;
      if (el.type === "panel") {
        meta.panels++;
        walkElements(el.elements || [], true);
        return;
      }
      meta.questions.all++;
      if (inPanel) meta.questions.inPanels++;
      else meta.questions.topLevel++;
      countTemplate(el.templateElements || []);
    });
  };
  (json.pages || []).forEach((page: any) => walkElements(page.elements || [], false));
  const locales = new Set<string>();
  const walkAll = (value: any): void => {
    if (Array.isArray(value)) {
      value.forEach(walkAll);
      return;
    }
    if (!value || typeof value !== "object") return;
    if (isLocaleObject(value)) {
      meta.strings++;
      Object.keys(value).forEach((k: string) => locales.add(k === "default" ? "en" : k));
      return;
    }
    Object.keys(value).forEach((key: string) => {
      const v = value[key];
      if (typeof v === "string" && (/If$/.test(key) || /Expression$/.test(key))) {
        meta.conditions.total++;
        meta.conditions.byProperty[key] = (meta.conditions.byProperty[key] || 0) + 1;
      } else {
        walkAll(v);
      }
    });
  };
  walkAll(json);
  meta.locales = Array.from(locales).sort();
  const sortKeys = (obj: { [key: string]: number }): { [key: string]: number } => {
    const res: { [key: string]: number } = {};
    Object.keys(obj).sort().forEach((k: string) => { res[k] = obj[k]; });
    return res;
  };
  meta.types = sortKeys(meta.types);
  meta.conditions.byProperty = sortKeys(meta.conditions.byProperty);
  return meta;
}
