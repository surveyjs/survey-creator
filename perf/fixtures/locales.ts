import { createRng } from "./random.ts";
import { localized } from "./typical.ts";

// locales (00, The fixtures): the translation tab's load. 40 pages, 1,000 questions, most of them with choices, and
// every localizable string the generator writes in all 6 locales.
export const localesDefaults = {
  seed: 20261113,
  pages: 40,
  questions: 1000,
  locales: ["en", "de", "fr", "es", "it", "pt"],
  // The share of choice questions; the rest are text, comment and boolean.
  choiceShare: 0.8,
  minChoices: 4,
  maxChoices: 6
};

const CHOICE_TYPES = ["radiogroup", "radiogroup", "checkbox", "checkbox", "dropdown", "dropdown", "tagbox"];
const OTHER_TYPES = ["text", "comment", "boolean"];

export function generateLocales(options: typeof localesDefaults): { json: any } {
  const rng = createRng(options.seed);
  const L = (words: number): any => localized(rng, options.locales, words);
  const perPage = Math.ceil(options.questions / options.pages);
  const pages: Array<any> = [];
  let n = 0;
  for (let p = 0; p < options.pages; p++) {
    const elements: Array<any> = [];
    for (let i = 0; i < perPage && n < options.questions; i++) {
      n++;
      const hasChoices = rng.chance(options.choiceShare);
      const el: any = { type: rng.pick(hasChoices ? CHOICE_TYPES : OTHER_TYPES), name: "q" + n, title: L(5) };
      if (hasChoices) {
        el.choices = [];
        const count = rng.int(options.minChoices, options.maxChoices);
        for (let c = 1; c <= count; c++) el.choices.push({ value: "item" + c, text: L(2) });
      }
      if (el.type === "boolean") {
        el.labelTrue = L(1);
        el.labelFalse = L(1);
      }
      elements.push(el);
    }
    pages.push({ name: "page" + (p + 1), title: L(3), elements: elements });
  }
  return { json: { title: L(3), description: L(8), pages: pages } };
}
