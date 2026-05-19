// Vitest setup file (ported from tests/jest.setup.js).
import { beforeEach } from "vitest";
import { _setIsTouch } from "survey-core";
import { QuestionToolbox } from "../src/toolbox";

(QuestionToolbox as any).defaultQuestionJsonCache = {};

// jsdom polyfill: Element.getAnimations / Document.getAnimations is part of
// the Web Animations API and is not implemented by jsdom. The creator's
// adorner code calls it inside debounced setTimeout callbacks; without the
// polyfill those callbacks throw "Cannot read properties of undefined
// (reading 'getAnimations')" after a test has completed, surfacing as
// unhandled errors. Returning an empty array matches the "no active
// animations" branch the production code already handles.
if (typeof Element !== "undefined" && !(Element.prototype as any).getAnimations) {
  (Element.prototype as any).getAnimations = function () { return []; };
}
if (typeof Document !== "undefined" && !(Document.prototype as any).getAnimations) {
  (Document.prototype as any).getAnimations = function () { return []; };
}

// jsdom 29 returns CSS keywords like "medium" for unset border-width and
// reports boxSizing as "content-box" by default. survey-core's
// getVerticalDimensions parses these with parseFloat (yielding NaN) when
// boxSizing is "content-box", producing "NaNpx" instead of the expected
// "0px" that Jest+older jsdom produced. Wrap getComputedStyle to coerce
// those keyword/empty values to "0px" so dimension math works.
if (typeof window !== "undefined" && typeof window.getComputedStyle === "function") {
  const originalGetComputedStyle = window.getComputedStyle.bind(window);
  const numericPxProps = [
    "paddingTop", "paddingBottom", "paddingLeft", "paddingRight",
    "marginTop", "marginBottom", "marginLeft", "marginRight",
    "borderTopWidth", "borderBottomWidth", "borderLeftWidth", "borderRightWidth"
  ];
  (window as any).getComputedStyle = function (el: Element, pseudo?: string | null) {
    const cs = originalGetComputedStyle(el, pseudo);
    return new Proxy(cs, {
      get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof prop === "string" && numericPxProps.indexOf(prop) !== -1) {
          if (!value || isNaN(parseFloat(value as string))) return "0px";
        }
        return value;
      }
    });
  };
}

beforeEach(() => {
  _setIsTouch(false);
});
