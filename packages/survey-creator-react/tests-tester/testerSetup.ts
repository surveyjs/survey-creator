import { act } from "react";
import { createRoot } from "react-dom/client";
import type { Root } from "react-dom/client";

// What every test in this project needs before it can mount anything, and what it needs to take it
// down again. It is here rather than in each file because there are five of them and the ceremony is
// identical.
//
// The two environment stubs are jsdom's gaps, not the widget's: jsdom lays nothing out, so it has no
// ResizeObserver for the survey's scroll wrapper to ask for and nothing for scrollIntoView to do.
// Stubbing them keeps the test on the same code path a browser takes rather than on an error path.
export function prepareEnvironment(): void {
  (globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
  if (typeof (globalThis as any).ResizeObserver !== "function") {
    (globalThis as any).ResizeObserver = class {
      public observe(): void { /* no layout in jsdom */ }
      public unobserve(): void { /* no layout in jsdom */ }
      public disconnect(): void { /* no layout in jsdom */ }
    };
  }
  if (typeof Element.prototype.scrollIntoView !== "function") {
    Element.prototype.scrollIntoView = function scrollIntoView(): void { /* nothing to scroll */ };
  }
}

export interface Mounted {
  container: HTMLElement;
  root: Root;
}

export async function mount(element: React.ReactElement): Promise<Mounted> {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  await act(async() => { root.render(element); });
  return { container: container, root: root };
}

export async function unmount(mounted: Mounted): Promise<void> {
  await act(async() => { mounted.root.unmount(); });
  mounted.container.remove();
}

// A repaint, and whatever the widget scheduled with it. The model layer publishes on a microtask (see
// useModel.ts) and a run resolves on promises, so a test that pressed something waits for both.
export async function settle(times = 3): Promise<void> {
  for (let at = 0; at < times; at++) {
    await act(async() => { await Promise.resolve(); });
  }
}

export function textOf(container: HTMLElement): string {
  return container.textContent || "";
}

export function findByText<T extends Element>(
  container: HTMLElement, selector: string, text: string,
): T | undefined {
  return Array.from(container.querySelectorAll(selector))
    .filter(node => (node.textContent || "").indexOf(text) > -1)[0] as T | undefined;
}

// Waiting for something the widget does asynchronously - a run, a replay, a confirming run. The run
// awaits real timers (the host's own step delay lives in the execution observer) and publishes on a
// requestAnimationFrame, so a loop over the microtask queue is not enough: this one lets real time
// pass, inside act, so React commits everything each turn produced.
export async function waitFor(check: () => boolean, timeoutMs = 30000): Promise<void> {
  const started = Date.now();
  while(!check()) {
    if (Date.now() - started > timeoutMs) throw new Error("timed out waiting for the widget");
    await act(async() => { await new Promise(resolve => setTimeout(resolve, 10)); });
  }
  await settle();
}

// Why there is no "press this control the way a person would" helper here.
//
// The capture's first rule is `if (!event.isTrusted) return`, because a synthetic event is the
// application talking to itself and only a person opens a gesture. jsdom marks everything a script
// dispatches as untrusted and defines the flag as a non-configurable own property of every event, so
// there is no honest way to forge one - and a test that patched the rule out would be testing a
// capture that does not exist. What a person does to the form is therefore pinned where it can be:
// in survey-creator-core's recorder tests, which drive the model directly. What is pinned from here
// is the seam - that the pane hands its node to attachTo() on mount and calls detach() on unmount.
