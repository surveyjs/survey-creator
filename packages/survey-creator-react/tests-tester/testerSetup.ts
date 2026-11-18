// The package targets React 17, so ReactDOM.render is the API to mount into a real DOM node here.
/* eslint-disable react/no-deprecated */
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

// What every test in this project needs before it can mount anything, and what it needs to take it
// down again. It is here rather than in each file because there are five of them and the ceremony is
// identical.
//
// Mounting is ReactDOM.render into a container of the test's own, and `act` is react-dom/test-utils',
// because this project runs on the React the package develops against (17) - there is no createRoot
// and no `act` on the react package there.
//
// The two environment stubs are jsdom's gaps, not the widget's: jsdom lays nothing out, so it has no
// ResizeObserver for the survey's scroll wrapper to ask for and nothing for scrollIntoView to do.
// Stubbing them keeps the test on the same code path a browser takes rather than on an error path.
export function prepareEnvironment(): void {
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
}

export async function mount(element: React.ReactElement): Promise<Mounted> {
  const container = document.createElement("div");
  document.body.appendChild(container);
  await act(async() => { ReactDOM.render(element, container); });
  return { container: container };
}

// Render something else into the same container: React reconciles it against what is there, which
// is how a test replaces a prop on a mounted component.
export async function rerender(mounted: Mounted, element: React.ReactElement): Promise<void> {
  await act(async() => { ReactDOM.render(element, mounted.container); });
}

export async function unmount(mounted: Mounted): Promise<void> {
  await act(async() => { ReactDOM.unmountComponentAtNode(mounted.container); });
  mounted.container.remove();
}

// A repaint, and whatever the widget scheduled with it. Adorner subscriptions defer render-event
// updates to a microtask (see useModel.ts), and a run resolves on promises, so wait for both.
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
