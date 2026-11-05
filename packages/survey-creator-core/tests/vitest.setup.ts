// Vitest setup file (ported from tests/jest.setup.js).
import { afterEach, beforeEach } from "vitest";
import { _setIsTouch, reducedMotionMediaQuery, settings } from "survey-core";
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

// jsdom does not implement matchMedia. The reduced-motion helper reads it, so tests
// need a registry whose `matches` flag can be flipped and whose listeners fire.
if (typeof (globalThis as any).matchMedia === "undefined") {
  const __mqRegistry: Map<string, { matches: boolean, listeners: Set<(e: any) => void> }> = new Map();
  (globalThis as any).matchMedia = function (query: string) {
    let entry = __mqRegistry.get(query);
    if (!entry) {
      entry = { matches: false, listeners: new Set() };
      __mqRegistry.set(query, entry);
    }
    const captured = entry;
    return {
      get matches() { return captured.matches; },
      media: query,
      onchange: null,
      addListener(cb: (e: any) => void) { captured.listeners.add(cb); },
      removeListener(cb: (e: any) => void) { captured.listeners.delete(cb); },
      addEventListener(_t: string, cb: (e: any) => void) { captured.listeners.add(cb); },
      removeEventListener(_t: string, cb: (e: any) => void) { captured.listeners.delete(cb); },
      dispatchEvent() { return false; },
    };
  };
  (globalThis as any).__setMatchMedia = function (query: string, matches: boolean) {
    let entry = __mqRegistry.get(query);
    if (!entry) {
      entry = { matches, listeners: new Set() };
      __mqRegistry.set(query, entry);
      return;
    }
    if (entry.matches === matches) return;
    entry.matches = matches;
    entry.listeners.forEach((cb) => cb({ matches, media: query }));
  };
  if (typeof (globalThis as any).window !== "undefined") {
    (globalThis as any).window.matchMedia = (globalThis as any).matchMedia;
  }
}

// No network from unit tests. jsdom's page URL is Vitest's default, http://localhost:3000, so a relative
// choicesByUrl url ("myUrl") would become a real request to http://localhost:3000/myUrl: refused (and an
// AggregateError stack in the output) when nothing listens there, answered when a dev server does.
// This fake never connects. send() fails the request asynchronously, the way a refused connection does
// (readyState 4, status 0, empty body; readystatechange, error, loadend). It supports what survey-core's
// ChoicesRestful uses. A failure is not stored in ChoicesRestful's result cache, but until it arrives
// a request for the same url joins the pending one. Requests are recorded in globalThis.__fakeXhrRequests,
// reset before each test. A test that needs a response assigns its own XMLHttpRequest class and restores this one.
const fakeXhrRequests: Array<{ method: string, url: string }> = [];
(globalThis as any).__fakeXhrRequests = fakeXhrRequests;
// Captured now so that a test's vi.useFakeTimers() cannot hold the failure back, as it cannot hold back a network error.
const realSetTimeout = globalThis.setTimeout;
class FakeXMLHttpRequest extends EventTarget {
  readyState: number = 0;
  status: number = 0;
  statusText: string = "";
  response: any = "";
  responseText: string = "";
  onreadystatechange: ((ev: Event) => any) | null = null;
  onload: ((ev: Event) => any) | null = null;
  onerror: ((ev: Event) => any) | null = null;
  ontimeout: ((ev: Event) => any) | null = null;
  onloadend: ((ev: Event) => any) | null = null;
  open(method: string, url: string | URL): void {
    this.setReadyState(1);
    fakeXhrRequests.push({ method: String(method).toUpperCase(), url: String(url) });
  }
  setRequestHeader(): void { }
  send(): void {
    realSetTimeout(() => {
      this.setReadyState(4);
      this.fire("error");
      this.fire("loadend");
    }, 0);
  }
  private setReadyState(state: number): void {
    this.readyState = state;
    this.fire("readystatechange");
  }
  private fire(type: string): void {
    const ev = type === "readystatechange" ? new Event(type) : new ProgressEvent(type);
    const handler = (this as any)["on" + type];
    if (typeof handler === "function") handler.call(this, ev);
    this.dispatchEvent(ev);
  }
}
(globalThis as any).XMLHttpRequest = FakeXMLHttpRequest;
if (typeof window !== "undefined") {
  (window as any).XMLHttpRequest = FakeXMLHttpRequest;
}

beforeEach(() => {
  fakeXhrRequests.length = 0;
  _setIsTouch(false);
});

afterEach(() => {
  settings.animation.respectReducedMotion = true;
  if (typeof (globalThis as any).__setMatchMedia === "function") {
    (globalThis as any).__setMatchMedia(reducedMotionMediaQuery, false);
  }
});
