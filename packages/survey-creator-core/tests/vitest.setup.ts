import { beforeEach } from "vitest";
import { _setIsTouch } from "survey-core";
import { QuestionToolbox } from "../src/toolbox";

(QuestionToolbox as any).defaultQuestionJsonCache = {};

if (typeof Element !== "undefined" && !(Element.prototype as any).getAnimations) {
  (Element.prototype as any).getAnimations = function () { return []; };
}
if (typeof Document !== "undefined" && !(Document.prototype as any).getAnimations) {
  (Document.prototype as any).getAnimations = function () { return []; };
}

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
