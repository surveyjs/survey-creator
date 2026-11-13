import * as path from "node:path";
import { createRequire } from "node:module";
import { runnerRoot } from "../harness/node/build.ts";

// The jsdom window of a core scenario process (02). It is imported first, before hooks.ts and before any build, so
// survey-core and the creator see a document when they load. jsdom is creator-core's devDependency (C06).
const creatorCorePackage = path.join(runnerRoot, "packages", "survey-creator-core", "package.json");
let jsdom: any;
try {
  jsdom = createRequire(creatorCorePackage)("jsdom");
} catch(e) {
  throw new Error("jsdom is missing: the core suite loads it from packages/survey-creator-core/node_modules. Run npm install in packages/survey-creator-core");
}

// The viewport of 00, Measurement rules (jsdom's default is 1024x768).
export const viewport = { width: 1600, height: 900 };

// jsdom's messages (a "Not implemented" error, a page console call) go to the console of the moment, not the one
// jsdom would bind now: scenario-process.ts replaces console.warn / console.error later, and such a message fails a
// scenario.
const virtualConsole = new jsdom.VirtualConsole();
["log", "info", "debug", "warn", "error"].forEach((method: string) => {
  virtualConsole.on(method, (...args: Array<any>) => (console as any)[method](...args));
});
virtualConsole.on("jsdomError", (e: any) => console.error("jsdom: " + (e && e.message ? e.message : String(e))));
const dom = new jsdom.JSDOM("<!DOCTYPE html><html><head></head><body></body></html>", { pretendToBeVisual: true, url: "http://localhost/", virtualConsole: virtualConsole });
const win: any = dom.window;
const g: any = globalThis;
Object.defineProperty(win, "innerWidth", { value: viewport.width, configurable: true, writable: true });
Object.defineProperty(win, "innerHeight", { value: viewport.height, configurable: true, writable: true });

// The stubs of creator-probe.js: jsdom has neither matchMedia nor ResizeObserver.
win.matchMedia = win.matchMedia || ((query: string): any => ({ matches: false, media: query, onchange: null, addListener(): void {}, removeListener(): void {},
  addEventListener(): void {}, removeEventListener(): void {}, dispatchEvent: (): boolean => false }));
win.ResizeObserver = class { observe(): void {} unobserve(): void {} disconnect(): void {} };

// A canvas 2d context with only fillStyle. Without it typical/tabs/theme fails: the Themes tab parses colors with
// survey-core's getRGBaColor (utils/color.ts), which sets a canvas fillStyle and reads it back, and jsdom's
// getContext logs "Not implemented: HTMLCanvasElement.prototype.getContext" with console.error. The creator-core
// unit tests load jest-canvas-mock for the same reason; it needs Jest's globals, so this is the part of it the
// creator reaches. fillStyle keeps the string it is given, so hex and rgba() colors parse as in a browser and a
// color name parses to null (a browser would give its hex value).
win.HTMLCanvasElement.prototype.getContext = function(type: string): any {
  if (type !== "2d") return null;
  let fill = "#000000";
  return {
    canvas: this,
    get fillStyle(): string { return fill; },
    set fillStyle(value: string) { fill = String(value).trim().toLowerCase(); }
  };
};

// The timers (02, The settle). The builds call Node's global setTimeout / setInterval (a bare call), jsdom's
// window.setTimeout (json-editor-plugin) and window.requestAnimationFrame (DomWindowHelper). All of them are
// tracked, so settle() can wait until none is pending. jsdom implements its window timers and animation frames
// with Node's global timers: those inner calls run while `inJsdom` is set and are not tracked a second time. A
// callback that jsdom runs for the page (a window timer, a frame) clears the flag again, so the timers it starts
// are tracked.
export type TimerKind = "timeout" | "interval" | "frame";

interface Pending {
  kind: TimerKind;
  delay: number;
  callback: any;
  // Interval ticks since it was set.
  ticks: number;
}

let inJsdom = false;
const pendingNode = new Map<any, Pending>();
const pendingWindow = new Map<any, Pending>();
const pendingFrames = new Map<any, Pending>();

// Node's own timers, kept for the settle's waits, which must not count themselves.
const realSetTimeout: typeof setTimeout = g.setTimeout;
const realClearInterval: typeof clearInterval = g.clearInterval;
const realSetImmediate: typeof setImmediate = g.setImmediate;
const nodeSet = { timeout: g.setTimeout, interval: g.setInterval };
const nodeClear = { timeout: g.clearTimeout, interval: g.clearInterval };
const windowSet = { timeout: win.setTimeout, interval: win.setInterval, frame: win.requestAnimationFrame };
const windowClear = { timeout: win.clearTimeout, interval: win.clearInterval, frame: win.cancelAnimationFrame };

// Runs fn with the flag set to value, and restores it.
function withFlag(value: boolean, fn: () => any): any {
  const prev = inJsdom;
  inJsdom = value;
  try {
    return fn();
  } finally {
    inJsdom = prev;
  }
}

function trackedSet(set: any, owner: any, pending: Map<any, Pending>, kind: TimerKind, forJsdom: boolean): any {
  return function(this: any, callback: any, delay?: any, ...args: Array<any>): any {
    // A Node timer jsdom starts for itself: untracked; its callback runs as jsdom's own code.
    if (!forJsdom && inJsdom) {
      const inner = typeof callback === "function" ? function(this: any, ...a: Array<any>): any { return withFlag(true, () => callback.apply(this, a)); } : callback;
      return set.call(owner, inner, delay, ...args);
    }
    const entry: Pending = { kind: kind, delay: Number(delay) || 0, callback: callback, ticks: 0 };
    let handle: any;
    const wrapped = typeof callback !== "function" ? callback : function(this: any, ...a: Array<any>): any {
      if (kind === "interval") entry.ticks++;
      else pending.delete(handle);
      return withFlag(false, () => callback.apply(this, a));
    };
    handle = forJsdom ? withFlag(true, () => set.call(owner, wrapped, delay, ...args)) : set.call(owner, wrapped, delay, ...args);
    pending.set(handle, entry);
    return handle;
  };
}

function trackedClear(clear: any, owner: any, pending: Map<any, Pending>, forJsdom: boolean): any {
  return function(this: any, handle: any): any {
    if (!forJsdom && inJsdom) return clear.call(owner, handle);
    pending.delete(handle);
    return forJsdom ? withFlag(true, () => clear.call(owner, handle)) : clear.call(owner, handle);
  };
}

win.setTimeout = trackedSet(windowSet.timeout, win, pendingWindow, "timeout", true);
win.setInterval = trackedSet(windowSet.interval, win, pendingWindow, "interval", true);
win.clearTimeout = trackedClear(windowClear.timeout, win, pendingWindow, true);
win.clearInterval = trackedClear(windowClear.interval, win, pendingWindow, true);
win.requestAnimationFrame = trackedSet(windowSet.frame, win, pendingFrames, "frame", true);
win.cancelAnimationFrame = trackedClear(windowClear.frame, win, pendingFrames, true);

// Every window member Node lacks (Document, HTMLElement, getComputedStyle, requestAnimationFrame, ...) becomes a
// global, as in creator-probe.js; document, navigator and location are jsdom's even where Node has its own.
for (const key of Object.getOwnPropertyNames(win)) {
  if (key in g && ["document", "navigator", "location"].indexOf(key) < 0) continue;
  try {
    Object.defineProperty(g, key, { value: win[key], configurable: true, writable: true });
  } catch(e) {
    // A member Node does not let us redefine keeps Node's value.
  }
}
g.window = win;

g.setTimeout = trackedSet(nodeSet.timeout, g, pendingNode, "timeout", false);
g.setInterval = trackedSet(nodeSet.interval, g, pendingNode, "interval", false);
g.clearTimeout = trackedClear(nodeClear.timeout, g, pendingNode, false);
g.clearInterval = trackedClear(nodeClear.interval, g, pendingNode, false);

export const jsdomVersion: string = (() => {
  try {
    return createRequire(creatorCorePackage)("jsdom/package.json").version;
  } catch(e) {
    return "";
  }
})();

export interface PendingTimer {
  kind: TimerKind;
  delay: number;
  // The callback's first line, to name the code that set it.
  source: string;
}

function describe(p: Pending): PendingTimer {
  const text = typeof p.callback === "function" ? String(p.callback).replace(/\s+/g, " ").substring(0, 120) : String(p.callback);
  return { kind: p.kind, delay: p.delay, source: text };
}

export function pendingTimers(): Array<PendingTimer> {
  const res: Array<PendingTimer> = [];
  [pendingNode, pendingWindow, pendingFrames].forEach((m: Map<any, Pending>) => m.forEach((p: Pending) => res.push(describe(p))));
  return res;
}

export interface SettleResult {
  ms: number;
  // Intervals still running once every timeout and frame had fired (see settle()).
  intervalsCleared: number;
}

// The cap of one settle. On huge the longest wait seen is reported in 10-one-pr-report.md (step 02).
export const settleCapMs = 5000;
// An interval that ticked this often with no timeout or frame left counts as idle.
const idleTicks = 2;

const waitReal = (ms: number): Promise<void> => new Promise<void>((resolve: () => void) => { realSetTimeout(resolve, ms); });
const yieldReal = (): Promise<void> => new Promise<void>((resolve: () => void) => { realSetImmediate(resolve); });

// Waits until no timeout and no animation frame is pending (02, The settle). An interval is pending until it is
// cleared, and one the creator never clears in jsdom would keep a settle waiting forever: focusElementCore
// (creator-base.ts) polls every 1 ms for the selected element's DOM node and stops only once it is rendered and
// focused (or when focus is false). In jsdom nothing renders, so after every timeout has fired and each interval has
// ticked twice, the intervals left are cleared and counted. Throws, naming the pending timers, after capMs.
export async function settle(capMs: number = settleCapMs): Promise<SettleResult> {
  const t0 = performance.now();
  let intervalsCleared = 0;
  for (;;) {
    await yieldReal();
    const once = pendingTimers().filter((t: PendingTimer) => t.kind !== "interval");
    const intervals: Array<[any, Pending, Map<any, Pending>]> = [];
    [pendingNode, pendingWindow].forEach((m: Map<any, Pending>) => m.forEach((p: Pending, h: any) => { if (p.kind === "interval") intervals.push([h, p, m]); }));
    if (once.length === 0 && intervals.every((i: [any, Pending, Map<any, Pending>]) => i[1].ticks >= idleTicks)) {
      intervals.forEach((i: [any, Pending, Map<any, Pending>]) => {
        i[2].delete(i[0]);
        if (i[2] === pendingNode) realClearInterval(i[0]);
        else withFlag(true, () => windowClear.interval.call(win, i[0]));
        intervalsCleared++;
      });
      break;
    }
    if (performance.now() - t0 > capMs) {
      const list = pendingTimers().slice(0, 5).map((t: PendingTimer) => t.kind + " " + t.delay + " ms: " + t.source).join(" | ");
      throw new Error("settle: timers still pending after " + capMs + " ms: " + list);
    }
    await waitReal(1);
  }
  return { ms: performance.now() - t0, intervalsCleared: intervalsCleared };
}

export const window = win;
