import type { PerfPage } from "../harness/scenario.ts";

// The page helpers that take part in a browser sample's time (03, the clock): the end of the framework update, the
// UI triggers, the creator mount, and the settle between samples. revs.ts adds this file's source to the rev hash of
// every react id, so a change here asks for a rev bump. Bundled into the page by page-entry.ts. Adapted from
// survey-library perf/browser/page-helpers.ts: updated(), click, commit and type are the library's; the creator
// mount, until(), the contenteditable branch of type and the settle are the creator's.
const W: any = globalThis;

// Timer tracking (03, settle): perf-page.js loads before the builds (pages/react.html), so every setTimeout and
// setInterval they start goes through these wrappers. The harness itself uses the saved originals, so the settle
// never waits for its own timers. The wrappers do a Map write per call and nothing else, so the timed runs pay a few
// microseconds per timer.
const realSetTimeout: (fn: () => void, ms?: number) => any = W.setTimeout.bind(W);
const realClearTimeout: (id: any) => void = W.clearTimeout.bind(W);
const realSetInterval: (fn: () => void, ms?: number) => any = W.setInterval.bind(W);
const realClearInterval: (id: any) => void = W.clearInterval.bind(W);
const pendingTimeouts = new Map<any, number>();
const liveIntervals = new Map<any, number>();
W.setTimeout = function(handler: any, ms?: number, ...args: Array<any>): any {
  if (typeof handler !== "function") return realSetTimeout(handler, ms);
  const id = realSetTimeout(function(this: any): void {
    pendingTimeouts.delete(id);
    handler.apply(this, args);
  }, ms);
  pendingTimeouts.set(id, Number(ms) || 0);
  return id;
};
W.clearTimeout = function(id: any): void {
  pendingTimeouts.delete(id);
  realClearTimeout(id);
};
W.setInterval = function(handler: any, ms?: number, ...args: Array<any>): any {
  if (typeof handler !== "function") return realSetInterval(handler, ms);
  const id = realSetInterval(function(this: any): void { handler.apply(this, args); }, ms);
  liveIntervals.set(id, Number(ms) || 0);
  return id;
};
W.clearInterval = function(id: any): void {
  liveIntervals.delete(id);
  realClearInterval(id);
};

const hop = (): Promise<void> => new Promise((resolve: () => void) => {
  const channel = new MessageChannel();
  channel.port1.onmessage = (): void => resolve();
  channel.port2.postMessage(0);
});
export const frame = (): Promise<void> => new Promise((resolve: () => void) => requestAnimationFrame(() => resolve()));
export const delay = (ms: number): Promise<void> => new Promise((resolve: () => void) => { realSetTimeout(resolve, ms); });
const now = (): number => performance.now();

export function rootElement(): any {
  return document.getElementById("root");
}

// The end of the framework update (03): two MessageChannel hops (React 19 posts its render task from a microtask),
// then a forced layout.
export async function updated(): Promise<void> {
  await hop();
  await hop();
  rootElement().getBoundingClientRect();
  return void document.body.offsetHeight;
}

// The themes, as browser-probe.js registers them (Andrew, 2026-11-13: in react only; core keeps the default list).
// Once per page, before the first creator is made.
let themesRegistered = false;
export function registerThemes(): void {
  if (themesRegistered) return;
  themesRegistered = true;
  W.SurveyCreatorCore.registerSurveyTheme(W.SurveyTheme);
  W.SurveyCreatorCore.registerCreatorTheme(W.SurveyTheme);
}

let reactRoot: any;
let shown: any;

// Unmounts the creator shown, then disposes it (unmounted first, so no component renders a disposed model).
export async function unmountCreator(): Promise<void> {
  if (reactRoot) {
    reactRoot.unmount();
    reactRoot = undefined;
  }
  if (shown && !shown.isDisposed) shown.dispose();
  shown = undefined;
  await updated();
}

// createRoot(#root).render(SurveyCreatorComponent), then updated(); the creator shown before goes first.
export async function mountCreator(creator: any): Promise<void> {
  if (shown && shown !== creator) await unmountCreator();
  if (!reactRoot) reactRoot = W.ReactDOMClient.createRoot(rootElement());
  reactRoot.render(W.React.createElement(W.SurveyCreator.SurveyCreatorComponent, { creator: creator }));
  shown = creator;
  await updated();
}

// The settle (03, 00 Measurement rules), untimed: until document.body has the same number of elements over 3
// frames and 200 ms, no tracked timeout is pending and no interval is live (the lazy page render, the adorner
// debounces, the popup focus 100 ms after showing, the creator's focus interval), and no lazy render is due: a page
// placeholder (.svc-page__loading-content) or a row skeleton (.sv-skeleton-element) that intersects the viewport. Capped at 10 s; a capped settle throws, which
// fails the sample.
export const settleCapMs = 10000;
export interface SettleResult {
  ms: number;
  frames: number;
}

// Read by geometry (R03-F3): the placeholder's --visible class comes a frame after the placeholder is in view, so a
// check of the class passes while content is still due.
export function lazyRenderDue(): string {
  const placeholders = document.querySelectorAll(".svc-page__loading-content");
  for (let i = 0; i < placeholders.length; i++) {
    if (inViewport(placeholders[i])) return "a page placeholder in the viewport";
  }
  const skeletons = document.querySelectorAll(".sv-skeleton-element");
  for (let i = 0; i < skeletons.length; i++) {
    if (inViewport(skeletons[i])) return "a row skeleton in the viewport";
  }
  return "";
}

function busyReason(): string {
  if (pendingTimeouts.size > 0) return pendingTimeouts.size + " timeouts pending (" + Array.from(pendingTimeouts.values()).sort((a: number, b: number) => a - b).join(", ") + " ms)";
  if (liveIntervals.size > 0) return liveIntervals.size + " intervals live (" + Array.from(liveIntervals.values()).join(", ") + " ms)";
  return lazyRenderDue();
}

export async function settle(): Promise<SettleResult> {
  const t0 = now();
  let count = document.body.querySelectorAll("*").length;
  let changedAt = t0;
  let stableFrames = 0;
  let frames = 0;
  for (;;) {
    await frame();
    frames++;
    const t = now();
    const c = document.body.querySelectorAll("*").length;
    if (c !== count) {
      count = c;
      changedAt = t;
      stableFrames = 0;
    } else {
      stableFrames++;
    }
    const busy = busyReason();
    if (!busy && stableFrames >= 3 && t - changedAt >= 200) return { ms: t - t0, frames: frames };
    if (t - t0 > settleCapMs) {
      throw new Error("settle capped at " + settleCapMs / 1000 + " s: " + (busy || "the DOM still changes (" + c + " elements)"));
    }
  }
}

// In the window and, inside a survey-react-ui scroll container (the designer surface, the side bar), in its visible
// box: a placeholder below the container's edge is still inside the window, but not visible.
export function inViewport(el: any): boolean {
  if (!el || !el.isConnected) return false;
  const r = el.getBoundingClientRect();
  if (!(r.width > 0 && r.height > 0 && r.bottom > 0 && r.right > 0 && r.top < window.innerHeight && r.left < window.innerWidth)) return false;
  const scroller = el.closest(".sv-scroll__scroller");
  if (!scroller) return true;
  const s = scroller.getBoundingClientRect();
  return r.bottom > s.top && r.top < s.bottom && r.right > s.left && r.left < s.right;
}

// Resolves once condition() holds, checked after every MessageChannel hop and every frame: the end of a timed part
// that the update alone does not reach (the adorner scrolled into view, the popup list shown). Throws after 10 s.
export async function until(condition: () => boolean, what: string): Promise<void> {
  const t0 = now();
  while(!condition()) {
    if (now() - t0 > settleCapMs) throw new Error("timed out after " + settleCapMs / 1000 + " s waiting for " + what);
    await hop();
    if (condition()) return;
    await frame();
  }
}

function setNative(el: any, value: string): void {
  const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  const desc = Object.getOwnPropertyDescriptor(proto, "value") as PropertyDescriptor;
  (desc.set as (v: string) => void).call(el, value);
}

const fire = (el: any, type: string): void => { el.dispatchEvent(new Event(type, { bubbles: true })); };
const key = (el: any, type: string, ch: string): void => { el.dispatchEvent(new KeyboardEvent(type, { bubbles: true, cancelable: true, key: ch })); };

function elementOf(target: any): any {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) throw new Error("No element for " + target);
  return el;
}

export const page: PerfPage = {
  framework: "react",
  showCreator: async(creator: any): Promise<void> => {
    await mountCreator(creator);
    await settle();
  },
  unmountCreator: unmountCreator,
  updated: updated,
  settle: settle,
  until: until,
  inViewport: inViewport,
  lazyRenderDue: lazyRenderDue,
  click: async(target: any): Promise<void> => {
    elementOf(target).click();
    await updated();
  },
  // Not focused; the native setter, so React's value tracker sees the change.
  commit: async(el: any, value: string): Promise<void> => {
    setNative(el, value);
    fire(el, "input");
    fire(el, "change");
    await updated();
  },
  // An input or a textarea: the library's way (the native setter, input and keyup per character, change at the end).
  // A contenteditable (the creator's inline string editors), focused by the caller: keydown, execCommand("insertText"),
  // which edits at the caret and fires beforeinput and input as a keystroke does, and keyup, per character.
  type: async(el: any, text: string): Promise<void> => {
    if (el.isContentEditable) {
      for (let i = 0; i < text.length; i++) {
        key(el, "keydown", text.charAt(i));
        document.execCommand("insertText", false, text.charAt(i));
        key(el, "keyup", text.charAt(i));
      }
    } else {
      for (let i = 0; i < text.length; i++) {
        setNative(el, el.value + text.charAt(i));
        fire(el, "input");
        key(el, "keyup", text.charAt(i));
      }
      fire(el, "change");
    }
    await updated();
  },
  // Focus with the caret after the last character (an input, or a contenteditable), then updated().
  focusEnd: async(el: any): Promise<void> => {
    if (document.activeElement !== el) el.focus();
    if (el.isContentEditable) {
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const selection = window.getSelection() as Selection;
      selection.removeAllRanges();
      selection.addRange(range);
    } else if (typeof el.setSelectionRange === "function") {
      el.setSelectionRange(el.value.length, el.value.length);
    }
    await updated();
  },
  blur: async(el: any): Promise<void> => {
    el.blur();
    await updated();
  },
  // keydown and keyup of one key (Escape closes a popup), then updated().
  press: async(el: any, name: string): Promise<void> => {
    const codes: { [name: string]: number } = { Escape: 27, Enter: 13 };
    const init: any = { bubbles: true, cancelable: true, key: name, code: name, keyCode: codes[name] || 0, which: codes[name] || 0 };
    el.dispatchEvent(new KeyboardEvent("keydown", init));
    el.dispatchEvent(new KeyboardEvent("keyup", init));
    await updated();
  },
  query: (selector: string): any => document.querySelector(selector),
  queryAll: (selector: string): Array<any> => Array.prototype.slice.call(document.querySelectorAll(selector))
};
