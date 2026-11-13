import { createRng } from "./random.ts";
import type { Rng } from "./random.ts";

// typical (00, The fixtures): a survey of the size people build, for the cost per operation. 10 pages, 120
// elements, every default toolbox type at least twice, panels, dynamic panels, matrices with columns, 30 conditions,
// 3 calculated values, 3 triggers, texts in en, de and fr. Every element is named by its type in document order
// (text1, dropdown1, matrixdynamic1, panel1, ...), so the scenario targets are stable names; the questions of dynamic
// panel templates are numbered after all the others, so text1 is never a template question.

// The default toolbox types, fixed here and not read from a build (a new toolbox type would change the hash).
// fixtures.test.ts compares this list with the runner build's toolbox and reports the difference.
export const TOOLBOX_TYPES: ReadonlyArray<string> = [
  "radiogroup", "rating", "slider", "checkbox", "dropdown", "tagbox", "boolean", "file", "imagepicker", "ranking",
  "text", "comment", "multipletext",
  "panel", "paneldynamic",
  "matrix", "matrixdropdown", "matrixdynamic",
  "html", "expression", "image", "signaturepad"
];

export const typicalDefaults = {
  seed: 20261112,
  pages: 10,
  elements: 120,
  locales: ["en", "de", "fr"],
  conditions: 30,
  calculatedValues: 3,
  triggers: 3,
  // The children of a panel and of a dynamic panel's template.
  panelChildren: 3,
  templateChildren: 3
};

// The types that fill the survey up to its size after every toolbox type is in twice, weighted toward the common ones.
const FILLER = ["text", "text", "text", "dropdown", "dropdown", "radiogroup", "radiogroup", "checkbox", "checkbox", "comment", "boolean",
  "rating", "tagbox", "matrixdynamic", "matrixdropdown", "multipletext", "ranking"];
// The types inside panels and templates: plain questions.
const CHILD = ["text", "dropdown", "radiogroup", "checkbox", "comment", "boolean", "rating"];
const CHOICE_TYPES = ["radiogroup", "checkbox", "dropdown", "tagbox", "ranking"];

// A 1x1 SVG as a data URL: no request, and the same bytes every night.
export const IMAGE_LINK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";

export function localized(rng: Rng, locales: ReadonlyArray<string>, words: number): any {
  const res: any = {};
  locales.forEach((locale: string) => { res[locale === "en" ? "default" : locale] = rng.words(words); });
  return res;
}

interface Slot {
  type: string;
  children?: Array<Slot>;
  template?: Array<Slot>;
  el?: any;
}

export function generateTypical(options: typeof typicalDefaults): { json: any } {
  const rng = createRng(options.seed);
  const L = (words: number = 3): any => localized(rng, options.locales, words);
  // imageLink is localizable too: the same link in every locale.
  const image = (): any => {
    const res: any = {};
    options.locales.forEach((locale: string) => { res[locale === "en" ? "default" : locale] = IMAGE_LINK; });
    return res;
  };
  const choices = (n: number): Array<any> => {
    const res: Array<any> = [];
    for (let i = 1; i <= n; i++) res.push({ value: "item" + i, text: L(2) });
    return res;
  };

  // 1. The plan: every toolbox type twice, then fillers up to the size. Containers take children from CHILD.
  const top: Array<Slot> = [];
  let count = 0;
  const slot = (type: string): Slot => {
    const s: Slot = { type: type };
    count++;
    if (type === "panel") {
      s.children = [];
      for (let i = 0; i < options.panelChildren; i++, count++) s.children.push({ type: rng.pick(CHILD) });
    }
    if (type === "paneldynamic") {
      s.template = [];
      for (let i = 0; i < options.templateChildren; i++, count++) s.template.push({ type: rng.pick(CHILD) });
    }
    return s;
  };
  TOOLBOX_TYPES.forEach((type: string) => { top.push(slot(type)); top.push(slot(type)); });
  while(count < options.elements) top.push(slot(rng.pick(FILLER)));
  rng.shuffle(top);

  // 2. Names in document order; template questions after all the others.
  const numbers: { [type: string]: number } = {};
  const nameOf = (type: string): string => {
    numbers[type] = (numbers[type] || 0) + 1;
    return type + numbers[type];
  };
  const ordered: Array<Slot> = [];
  top.forEach((s: Slot) => {
    ordered.push(s);
    (s.children || []).forEach((c: Slot) => ordered.push(c));
  });
  const templates: Array<Slot> = [];
  top.forEach((s: Slot) => (s.template || []).forEach((c: Slot) => templates.push(c)));

  // 3. The elements.
  const build = (s: Slot, name: string): any => {
    const el: any = { type: s.type, name: name };
    if (s.type !== "html") el.title = L(4);
    if (rng.chance(0.3) && s.type !== "html") el.description = L(6);
    if (CHOICE_TYPES.indexOf(s.type) > -1) el.choices = choices(rng.int(4, 7));
    switch(s.type) {
      case "text":
      case "comment":
        el.placeholder = L(2);
        break;
      case "rating":
        el.minRateDescription = L(1);
        el.maxRateDescription = L(1);
        break;
      case "boolean":
        el.labelTrue = L(1);
        el.labelFalse = L(1);
        break;
      case "imagepicker":
        el.choices = [1, 2, 3].map((i: number) => ({ value: "item" + i, text: L(1), imageLink: image() }));
        break;
      case "image":
        el.imageLink = image();
        el.altText = L(2);
        break;
      case "html":
        el.html = localized(rng, options.locales, 8);
        Object.keys(el.html).forEach((k: string) => { el.html[k] = "<p>" + el.html[k] + "</p>"; });
        break;
      case "expression":
        el.expression = "{rating1} + {rating2}";
        break;
      case "multipletext":
        el.items = [1, 2, 3].map((i: number) => ({ name: "item" + i, title: L(2) }));
        break;
      case "matrix":
        el.columns = [1, 2, 3, 4].map((i: number) => ({ value: "col" + i, text: L(1) }));
        el.rows = [1, 2, 3].map((i: number) => ({ value: "row" + i, text: L(2) }));
        break;
      case "matrixdropdown":
        el.columns = ["dropdown", "text", "checkbox"].map((cellType: string, i: number) => ({ name: "col" + (i + 1), title: L(1), cellType: cellType }));
        el.choices = choices(4);
        el.rows = [1, 2, 3].map((i: number) => ({ value: "row" + i, text: L(2) }));
        break;
      case "matrixdynamic":
        el.columns = ["text", "dropdown", "boolean", "rating"].map((cellType: string, i: number) => ({ name: "col" + (i + 1), title: L(1), cellType: cellType }));
        el.choices = choices(4);
        el.rowCount = 2;
        break;
      case "panel":
        el.elements = [];
        break;
      case "paneldynamic":
        el.templateTitle = L(2);
        el.panelCount = 2;
        el.templateElements = [];
        break;
    }
    s.el = el;
    return el;
  };
  ordered.forEach((s: Slot) => build(s, nameOf(s.type)));
  templates.forEach((s: Slot) => build(s, nameOf(s.type)));
  top.forEach((s: Slot) => {
    (s.children || []).forEach((c: Slot) => s.el.elements.push(c.el));
    (s.template || []).forEach((c: Slot) => s.el.templateElements.push(c.el));
  });

  // 4. Conditions: on value questions outside templates, each on an earlier question with a value it can test. The
  // first question of each type (a select target) gets none.
  const valueOf = (el: any): string | null => {
    if (el.type === "dropdown" || el.type === "radiogroup") return "{" + el.name + "} = 'item" + rng.int(1, el.choices.length) + "'";
    if (el.type === "checkbox" || el.type === "tagbox") return "{" + el.name + "} contains 'item" + rng.int(1, el.choices.length) + "'";
    if (el.type === "boolean") return "{" + el.name + "} = true";
    if (el.type === "text" || el.type === "comment") return "{" + el.name + "} notempty";
    if (el.type === "rating") return "{" + el.name + "} > 2";
    return null;
  };
  const questions = ordered.map((s: Slot) => s.el).filter((el: any) => el.type !== "panel");
  const props = ["visibleIf", "enableIf", "requiredIf"];
  const noValue = ["html", "image", "expression"];
  const candidates = questions.slice(10).filter((el: any) => el.name !== el.type + "1" && noValue.indexOf(el.type) < 0);
  if (candidates.length < options.conditions) throw new Error("typical: " + candidates.length + " questions can take a condition, " + options.conditions + " asked");
  const targets = rng.shuffle(candidates).slice(0, options.conditions);
  targets.forEach((el: any, i: number) => {
    const index = questions.indexOf(el);
    const sources = questions.slice(0, index).filter((q: any) => valueOf(q) !== null);
    const prop = i < options.conditions * 2 / 3 ? props[0] : props[1 + (i % 2)];
    el[prop] = sources.length > 0 ? valueOf(rng.pick(sources)) : "{boolean1} = true";
  });

  // 5. The pages: the top-level slots in nearly equal runs.
  const pages: Array<any> = [];
  const perPage = Math.ceil(top.length / options.pages);
  for (let p = 0; p < options.pages; p++) {
    pages.push({ name: "page" + (p + 1), title: L(3), elements: top.slice(p * perPage, (p + 1) * perPage).map((s: Slot) => s.el) });
  }

  const calculatedValues = [
    { name: "calc1", expression: "{rating1} + {rating2}" },
    { name: "calc2", expression: "iif({boolean1} = true, 1, 0)" },
    { name: "calc3", expression: "{calc1} * 2" }
  ].slice(0, options.calculatedValues);
  const triggers = [
    { type: "setvalue", expression: "{boolean1} = true", setToName: "text2", setValue: "yes" },
    { type: "copyvalue", expression: "{dropdown1} notempty", fromName: "dropdown1", setToName: "dropdown2" },
    { type: "runexpression", expression: "{rating1} > 3", runExpression: "{rating1} + 1", setToName: "comment1" }
  ].slice(0, options.triggers);

  return {
    json: {
      title: L(3),
      description: L(8),
      pages: pages,
      calculatedValues: calculatedValues,
      triggers: triggers
    }
  };
}
