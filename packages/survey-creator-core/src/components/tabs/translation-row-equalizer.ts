import { DomWindowHelper } from "survey-core";

// The side of a row pair: the source pane's node or the target pane's node.
export const equalizerSourceSide = 0;
export const equalizerTargetSide = 1;

// Keeps the paired rows of the two side-by-side panes the same height. A row is a leaf of the
// rendered surveys (a question root, a survey/page/panel title or description row) and a pair
// is the same row in both panes. Each pair gets `min-height: max(naturalSource, naturalTarget)`
// on both roots, so the panes stay row-aligned however the translated texts differ in length.
//
// The natural height of a row is its border-box height measured while no inline min-height is
// set: the question container is `height: 100%` and would report an imposed height otherwise.
// Every recomputation is therefore one batched pass per animation frame - clear every inline
// min-height, read every natural height, write the maximums back - so it costs one reflow and
// a row that shrank (an edit that removed text, a skeleton replaced by the real row) is picked
// up as well. One ResizeObserver over all paired nodes schedules the pass; without it (jsdom)
// the equalizer is a no-op until `update()` is called explicitly.
export class TranslationRowEqualizer {
  private pairs: { [key: string]: Array<HTMLElement> } = {};
  private observer: ResizeObserver;
  private frameHandle: any;
  private isDisposed = false;
  // The measurement of a node's natural height; replaceable by tests that have no layout.
  public measureHeight: (node: HTMLElement) => number = (node: HTMLElement): number => {
    return typeof node.getBoundingClientRect === "function" ? node.getBoundingClientRect().height : 0;
  };

  public get isObserving(): boolean {
    return !!this.observer;
  }
  // Registers the node of one side of a pair; the same node again is a no-op, another node
  // replaces the previous one (a re-rendered row).
  public setNode(key: string, side: number, node: HTMLElement): void {
    if (!key || !node || this.isDisposed) return;
    const nodes = this.pairs[key] || (this.pairs[key] = [undefined, undefined]);
    const prev = nodes[side];
    if (prev === node) return;
    if (!!prev)this.releaseNode(prev);
    nodes[side] = node;
    const observer = this.getObserver();
    if (!!observer) observer.observe(node);
    this.scheduleUpdate();
  }
  public getNode(key: string, side: number): HTMLElement {
    const nodes = this.pairs[key];
    return !!nodes ? nodes[side] : undefined;
  }
  public hasPair(key: string): boolean {
    const nodes = this.pairs[key];
    return !!nodes && !!nodes[0] && !!nodes[1];
  }
  public getPairedKeys(): Array<string> {
    return Object.keys(this.pairs).filter(key => this.hasPair(key));
  }
  public getKeys(): Array<string> {
    return Object.keys(this.pairs);
  }
  // Batches the recomputation into the next animation frame.
  public scheduleUpdate(): void {
    if (this.isDisposed || this.frameHandle !== undefined) return;
    const callback = (): void => {
      this.frameHandle = undefined;
      this.update();
    };
    if (DomWindowHelper.isAvailable() && typeof DomWindowHelper.requestAnimationFrame === "function") {
      this.frameHandle = DomWindowHelper.requestAnimationFrame(callback);
      if (this.frameHandle !== null && this.frameHandle !== undefined) return;
    }
    this.frameHandle = setTimeout(callback, 16);
  }
  // The synchronous recomputation: drops the nodes that left the DOM, then clears, reads and
  // writes in three separate passes so the layout is flushed once.
  public update(): void {
    this.cancelScheduledUpdate();
    if (this.isDisposed) return;
    const keys = Object.keys(this.pairs);
    keys.forEach(key => {
      const nodes = this.pairs[key];
      nodes.forEach((node, index) => {
        if (!!node && node.isConnected === false) {
          this.releaseNode(node);
          nodes[index] = undefined;
        }
      });
      if (!nodes[0] && !nodes[1]) delete this.pairs[key];
    });
    const complete = this.getPairedKeys();
    Object.keys(this.pairs).forEach(key => this.pairs[key].forEach(node => {
      if (!!node) node.style.minHeight = "";
    }));
    const heights = complete.map(key => {
      const nodes = this.pairs[key];
      return Math.max(this.measureHeight(nodes[0]) || 0, this.measureHeight(nodes[1]) || 0);
    });
    complete.forEach((key, index) => {
      const height = heights[index];
      if (!(height > 0)) return;
      this.pairs[key].forEach(node => {
        // The rows are measured border-box, so the min-height has to be one too.
        node.style.boxSizing = "border-box";
        node.style.minHeight = height + "px";
      });
    });
  }
  // Drops every pair and restores the natural heights.
  public clear(): void {
    this.cancelScheduledUpdate();
    Object.keys(this.pairs).forEach(key => this.pairs[key].forEach(node => {
      if (!!node)this.releaseNode(node);
    }));
    this.pairs = {};
  }
  public dispose(): void {
    this.clear();
    if (!!this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
    this.isDisposed = true;
  }
  private releaseNode(node: HTMLElement): void {
    node.style.minHeight = "";
    node.style.boxSizing = "";
    if (!!this.observer)this.observer.unobserve(node);
  }
  private cancelScheduledUpdate(): void {
    if (this.frameHandle === undefined) return;
    const win = DomWindowHelper.getWindow();
    if (!!win && typeof win.cancelAnimationFrame === "function") {
      win.cancelAnimationFrame(this.frameHandle);
    }
    clearTimeout(this.frameHandle);
    this.frameHandle = undefined;
  }
  private getObserver(): ResizeObserver {
    if (this.observer !== undefined || this.isDisposed) return this.observer;
    const ctor: any = typeof ResizeObserver !== "undefined" ? ResizeObserver : undefined;
    // null - checked once, the environment has no ResizeObserver (jsdom): nothing observes the
    // rows, and the recomputation runs only when it is requested explicitly.
    this.observer = !!ctor ? new ctor(() => this.scheduleUpdate()) : null;
    return this.observer;
  }
}
