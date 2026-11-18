import type { SurveyModel } from "survey-core";

// Which element a DOM event belongs to. The map is built from the model's own render events -
// onAfterRenderQuestion, onAfterRenderPanel, onAfterRenderPage, onAfterRenderMatrixCell - so nothing in
// survey-react-ui is touched and a cell knows its row because the renderer handed it over.
//
// Walking up from the event target to the nearest registered node is how a keystroke is attributed to a
// question and a click on the navigation is recognised as not belonging to one at all.
//
// It is also what the adorner list is built from (model/adornerModel.ts): the elements that have
// rendered are the elements there is somewhere to put a check button on. What it is *not* is where an
// adorner is placed - a button positioned by a measurement taken from this map would be standing where
// its element used to be the moment the pane scrolled, which is why the button is a child of the
// element and the overlay is the view's business (prompt 07).

export type RegisteredKind = "question" | "cell" | "panel" | "page";

export interface RegisteredElement {
  kind: RegisteredKind;
  obj: any;
  node: HTMLElement;
  // A cell only: the matrix and the row the renderer handed over with it. That pair is the row context
  // the tester takes for the inverse direction, and it is what addresses a cell whose row the object
  // itself cannot name - a question of a detail panel among them.
  matrix?: any;
  row?: any;
}

export class ElementRegistry {
  // Whoever wants to know that the set of rendered elements moved. It is one callback and not an event
  // list because there is one reader of it - the adorner list - and layer 0 owns no survey-core model.
  public onChanged?: () => void;

  private byNode: Map<HTMLElement, RegisteredElement> = new Map();
  private handlers: Array<{ event: any, handler: any }> = [];

  public attach(survey: SurveyModel): void {
    this.detach();
    const anySurvey: any = survey;
    this.on(anySurvey.onAfterRenderQuestion, (_: any, options: any) => {
      this.add({ kind: "question", obj: options.question, node: options.htmlElement });
    });
    this.on(anySurvey.onAfterRenderPanel, (_: any, options: any) => {
      this.add({ kind: "panel", obj: options.panel, node: options.htmlElement });
    });
    this.on(anySurvey.onAfterRenderPage, (_: any, options: any) => {
      this.add({ kind: "page", obj: options.page, node: options.htmlElement });
    });
    this.on(anySurvey.onAfterRenderMatrixCell, (_: any, options: any) => {
      const cellQuestion = options.cellQuestion;
      if (!cellQuestion) return;
      this.add({
        kind: "cell", obj: cellQuestion, node: options.htmlElement,
        matrix: options.question, row: options.row,
      });
    });
  }

  public detach(): void {
    this.handlers.forEach(entry => {
      try { entry.event.remove(entry.handler); } catch{ /* a model already torn down */ }
    });
    this.handlers = [];
    const had = this.byNode.size > 0;
    this.byNode.clear();
    if (had)this.raiseChanged();
  }

  // What has rendered, in the order it rendered, minus what the renderer has since replaced. The sweep
  // is the same one resolve() does on the way past a stale node, done here for the whole map so that a
  // list built from this does not carry an element that is no longer on the page.
  public list(): Array<RegisteredElement> {
    const alive: Array<RegisteredElement> = [];
    const stale: Array<HTMLElement> = [];
    this.byNode.forEach((entry, node) => {
      if (node.isConnected) alive.push(entry);
      else stale.push(node);
    });
    stale.forEach(node => this.byNode.delete(node));
    return alive;
  }

  // The nearest registered ancestor of a DOM node, so the innermost element wins: the input of a matrix
  // cell resolves to the cell and not to the matrix around it. A node that resolves to nothing is the
  // survey's own chrome - the navigation buttons, the page background - and that is a meaningful answer.
  public resolve(node: EventTarget | null): RegisteredElement | undefined {
    let current: any = node;
    for (let depth = 0; depth < 40 && !!current; depth++) {
      if (current instanceof HTMLElement) {
        const entry = this.byNode.get(current);
        // A node the renderer has replaced answers for an element that is no longer on screen. Dropping
        // it here keeps the map from growing over a long session without a sweep of its own.
        if (!!entry && current.isConnected) return entry;
        if (!!entry)this.byNode.delete(current);
      }
      current = current.parentNode;
    }
    return undefined;
  }

  private on(event: any, handler: any): void {
    if (!event || typeof event.add !== "function") return;
    event.add(handler);
    this.handlers.push({ event: event, handler: handler });
  }

  private add(entry: RegisteredElement): void {
    if (!entry.node || !(entry.node instanceof HTMLElement)) return;
    const known = this.byNode.get(entry.node);
    this.byNode.set(entry.node, entry);
    if (!known || known.obj !== entry.obj)this.raiseChanged();
  }

  // A handler of somebody else's, called from inside a render event of survey-core: it may not take the
  // render down with it, for the same reason the recorder's observer may not throw.
  private raiseChanged(): void {
    if (!this.onChanged) return;
    try {
      this.onChanged();
    } catch{ /* an adorner list is cosmetic; a failure to rebuild it interrupts nothing */ }
  }
}
