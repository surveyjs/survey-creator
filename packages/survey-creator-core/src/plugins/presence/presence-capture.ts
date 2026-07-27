import { DomDocumentHelper, DomWindowHelper, EventBase } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { buildLocator } from "../journal/journal-locator";
import { encodeAnchor, encodeEditFocus, getCanvasElement, IPresenceState, PRESENCE_SELECTORS } from "./presence-state";

/** Mouse updates are throttled to this interval (trailing edge). */
const MOUSE_THROTTLE_MS = 50;
/** How long after focus leaves the sidebar before pgFocus is cleared. */
const PG_BLUR_DEBOUNCE_MS = 300;

const raf = (cb: () => void): any =>
  DomWindowHelper.isAvailable() ? DomWindowHelper.requestAnimationFrame(cb) : setTimeout(cb, 16);
const cancelRaf = (id: any): void => {
  if (DomWindowHelper.isAvailable()) DomWindowHelper.getWindow().cancelAnimationFrame(id);
  else clearTimeout(id);
};

/**
 * Watches the local creator (active tab, selected element, property-grid
 * focus, mouse) and maintains the full presence state, firing `onStateChanged`
 * with the complete state after every change. The state carries no user
 * identity - the transport/server is expected to attach it to the envelope.
 */
export class PresenceCapture {
  public onStateChanged: EventBase<PresenceCapture, { state: IPresenceState }> = new EventBase();
  private state: IPresenceState = { tab: "", tabId: "", sel: null, pgFocus: null, edit: null, trCell: null, cur: null };
  private disposed = false;
  private blurTimer: ReturnType<typeof setTimeout> | undefined;
  private editBlurTimer: ReturnType<typeof setTimeout> | undefined;
  private trBlurTimer: ReturnType<typeof setTimeout> | undefined;
  private mouseTimer: ReturnType<typeof setTimeout> | undefined;
  private pendingMouse: MouseEvent | null = null;
  private lastCurKey = "";
  private leaveTarget: HTMLElement | null = null;
  private rootPoll: any = 0;
  private doc: Document | undefined;

  constructor(private creator: SurveyCreatorModel) {
    creator.onActiveTabChanged.add(this.onTabChanged);
    creator.onElementSelected.add(this.onElementSelected);
    creator.onSurveyInstanceCreated.add(this.onSurveyInstanceCreated);
    if (DomDocumentHelper.isAvailable()) {
      this.doc = DomDocumentHelper.getDocument();
      this.doc.addEventListener("focusin", this.onFocusIn, true);
      this.doc.addEventListener("focusout", this.onFocusOut, true);
      this.doc.addEventListener("mousemove", this.onMouseMove, true);
      this.doc.addEventListener("visibilitychange", this.onVisibility);
      // mouseleave doesn't bubble - it needs the root itself, which only
      // exists after the framework renders the creator. Poll until it shows up.
      this.rootPoll = raf(this.attachToRoot);
    }
  }

  public getState(): IPresenceState {
    return this.state;
  }

  public dispose(): void {
    this.disposed = true;
    this.creator.onActiveTabChanged.remove(this.onTabChanged);
    this.creator.onElementSelected.remove(this.onElementSelected);
    this.creator.onSurveyInstanceCreated.remove(this.onSurveyInstanceCreated);
    if (this.doc) {
      cancelRaf(this.rootPoll);
      this.doc.removeEventListener("focusin", this.onFocusIn, true);
      this.doc.removeEventListener("focusout", this.onFocusOut, true);
      this.doc.removeEventListener("mousemove", this.onMouseMove, true);
      this.doc.removeEventListener("visibilitychange", this.onVisibility);
      this.leaveTarget?.removeEventListener("mouseleave", this.hideCursor);
    }
    if (this.blurTimer !== undefined) clearTimeout(this.blurTimer);
    if (this.editBlurTimer !== undefined) clearTimeout(this.editBlurTimer);
    if (this.trBlurTimer !== undefined) clearTimeout(this.trBlurTimer);
    if (this.mouseTimer !== undefined) clearTimeout(this.mouseTimer);
  }

  private emit(partial: Partial<IPresenceState>): void {
    Object.assign(this.state, partial);
    this.onStateChanged.fire(this, { state: this.state });
  }

  // --- tab -------------------------------------------------------------------

  private sendTab(): void {
    // Cursor/editor focus are meaningless on the new tab until re-established.
    // The dedupe key must reset too: cur went null outside sendCur, so the
    // next capture has to go through even if it repeats the last key.
    this.lastCurKey = "";
    this.hiddenTrCell = null;
    this.emit({ tab: this.creator.activeTab ?? "", tabId: this.creator.activeTabId ?? "", cur: null, edit: null, trCell: null });
  }
  private onTabChanged = (): void => this.sendTab();

  // --- selection ---------------------------------------------------------------

  private sendSelection(element: any): void {
    if (!element) {
      this.emit({ sel: null });
      return;
    }
    let loc: string | null = null;
    try {
      loc = buildLocator(element, this.creator.survey);
    } catch{
      loc = null;
    }
    if (loc === null) {
      // Objects outside the survey tree (e.g. creator settings) aren't shareable.
      this.emit({ sel: null });
      return;
    }
    const name = typeof element.name === "string" && element.name ? element.name : null;
    const kind = typeof element.getType === "function" ? element.getType() : "";
    const title = String(element.title || element.name || kind || "survey");
    this.emit({ sel: { loc, name, kind, title } });
  }
  private onElementSelected = (_: unknown, options: any): void => this.sendSelection(options?.element);

  // --- property-grid focus -------------------------------------------------------
  // The grid is a generated survey; question name == property name. Hooking
  // at instance creation survives the grid being rebuilt on every selection
  // change - the exact mechanism PropertyGridModel uses internally.

  private onSurveyInstanceCreated = (_: unknown, options: any): void => {
    if (options?.area === "translation-tab:table") {
      this.trackTranslationSurvey(options.survey);
      return;
    }
    const grid = options?.area === "property-grid" ? "main"
      : options?.area === "theme-tab:property-grid" ? "theme"
        : null;
    if (!grid || !options.survey?.onFocusInQuestion) return;
    const gridObj = options.obj;
    options.survey.onFocusInQuestion.add((_s: unknown, o: any) => {
      if (this.disposed || !o?.question?.name) return;
      let objLoc: string | null = null;
      if (grid === "main" && gridObj) {
        try {
          objLoc = buildLocator(gridObj, this.creator.survey);
        } catch{ /* non-survey object - marker still useful without objLoc */ }
      }
      this.emit({ pgFocus: { grid, prop: o.question.name, objLoc } });
    });
  };

  // --- translation-cell focus ----------------------------------------------------
  // The Translations tab is a generated survey: one matrixdropdown (comment
  // cells) per translatable string, one row (the property), one column per
  // locale. Hooking at instance creation survives the table being rebuilt on
  // every locale/filter change - the same mechanism as the property grid.
  // The auto-translate dialog reports a different area and is never tracked.

  private trackTranslationSurvey(survey: any): void {
    if (!survey?.onFocusInQuestion) return;
    survey.onFocusInQuestion.add((_s: unknown, o: any) => {
      if (this.disposed || !o?.question) return;
      const matrix = o.question.parentQuestion;
      const item = matrix?.rows?.[0]?.["translationData"];
      if (!matrix?.name || !item) return;
      // Cell questions are named after their column (the locale); scan the
      // row's cells as a fallback should that convention ever change.
      const locale = o.question.name ||
        matrix.visibleRows?.[0]?.cells?.find((c: any) => c.question === o.question)?.column?.name;
      if (!locale) return;
      let loc: string | null = null;
      try {
        loc = buildLocator(item.context, this.creator.survey);
      } catch{ /* receivers fall back to the matrix-name match */ }
      const prev = this.state.trCell;
      if (!prev || prev.m !== matrix.name || prev.l !== locale) {
        this.emit({ trCell: { m: matrix.name, l: locale, loc, p: String(item.name) } });
      }
    });
  }

  private inTranslationCell(node: EventTarget | null): boolean {
    return node instanceof Element &&
      !!node.closest(PRESENCE_SELECTORS.tabContent("translation")) &&
      !!node.closest(PRESENCE_SELECTORS.translationCell);
  }

  // Clear pgFocus when keyboard focus leaves the sidebar (survey-core has no
  // focus-out event, so this is DOM-level). Debounced: re-focusing another
  // grid field within the window keeps the state alive.

  private inSidebar(node: EventTarget | null): boolean {
    return node instanceof Element && !!node.closest(".svc-side-bar");
  }
  private onFocusIn = (ev: FocusEvent): void => {
    if (this.inSidebar(ev.target) && this.blurTimer !== undefined) {
      clearTimeout(this.blurTimer);
      this.blurTimer = undefined;
    }
    // Re-focusing another translation cell within the debounce window keeps
    // trCell alive (the model event re-emits the new cell); focus landing
    // elsewhere lets the pending clear go through.
    if (this.inTranslationCell(ev.target) && this.trBlurTimer !== undefined) {
      clearTimeout(this.trBlurTimer);
      this.trBlurTimer = undefined;
    }
    this.trackEditFocusIn(ev.target);
  };
  private onFocusOut = (ev: FocusEvent): void => {
    this.trackEditFocusOut(ev.target);
    if (this.inTranslationCell(ev.target)) {
      if (this.trBlurTimer !== undefined) clearTimeout(this.trBlurTimer);
      this.trBlurTimer = setTimeout(() => {
        this.trBlurTimer = undefined;
        if (!this.disposed && this.state.trCell)this.emit({ trCell: null });
      }, PG_BLUR_DEBOUNCE_MS);
    }
    if (!this.inSidebar(ev.target)) return;
    if (this.blurTimer !== undefined) clearTimeout(this.blurTimer);
    this.blurTimer = setTimeout(() => {
      this.blurTimer = undefined;
      if (!this.disposed)this.emit({ pgFocus: null });
    }, PG_BLUR_DEBOUNCE_MS);
  };

  // --- inline string-editor focus ----------------------------------------------
  // Editing a title/description/choice selects the OWNING element (or nothing,
  // for the survey header), so the selected element never identifies the
  // focused text. The editor is tracked DOM-level instead: its contenteditable
  // gets the keyboard focus inside a `.svc-string-editor` root that is
  // addressable by owner + index (see encodeEditFocus).

  private trackEditFocusIn(target: EventTarget | null): void {
    if (!(target instanceof Element)) return;
    // Editor focus is a designer-surface concept; other tabs render string
    // editors of their own private models.
    const focus = this.creator.activeTab === "designer" ? encodeEditFocus(target) : null;
    if (focus) {
      if (this.editBlurTimer !== undefined) {
        clearTimeout(this.editBlurTimer);
        this.editBlurTimer = undefined;
      }
      const prev = this.state.edit;
      if (!prev || prev.scope !== focus.scope || prev.name !== focus.name || prev.idx !== focus.idx) {
        this.emit({ edit: focus });
      }
    } else if (this.state.edit) {
      // Keyboard focus moved somewhere that is not an inline editor.
      this.emit({ edit: null });
    }
  }
  private trackEditFocusOut(target: EventTarget | null): void {
    if (!(target instanceof Element) || !target.closest(PRESENCE_SELECTORS.stringEditor)) return;
    // Debounced like pgFocus: a blur to a non-focusable node (plain click on
    // the canvas) fires no focusin, so this is the only clear signal there.
    if (this.editBlurTimer !== undefined) clearTimeout(this.editBlurTimer);
    this.editBlurTimer = setTimeout(() => {
      this.editBlurTimer = undefined;
      if (!this.disposed && this.state.edit)this.emit({ edit: null });
    }, PG_BLUR_DEBOUNCE_MS);
  }

  // --- mouse -------------------------------------------------------------------

  private captureMouse(ev: MouseEvent): void {
    const root = this.creator.rootElement;
    const target = ev.target;
    if (!root || !(target instanceof Element) || !root.contains(target)) return;
    const tabId = this.creator.activeTabId ?? "";
    // The cursor is shared only from the active tab's main content block; over
    // the header/tab strip/sidebar/footer - or the toolbox, which is rendered
    // inside the tab container - it is hidden for peers.
    if (!target.closest(PRESENCE_SELECTORS.tabContent(tabId)) || target.closest(PRESENCE_SELECTORS.toolbox)) {
      this.sendCur(null, "");
      return;
    }
    const encoded = encodeAnchor(target, tabId);
    if (!encoded) {
      this.sendCur(null, "");
      return;
    }
    const rect = encoded.el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      // A collapsed/detached anchor cannot host a cursor. Hide instead of
      // going silent - a silent sender leaves peers a stale cursor position.
      this.sendCur(null, "");
      return;
    }
    const clamp = (v: number): number => Math.round(Math.min(1, Math.max(0, v)) * 1000) / 1000;
    const x = clamp((ev.clientX - rect.left) / rect.width);
    const y = clamp((ev.clientY - rect.top) / rect.height);
    const cur: IPresenceState["cur"] = { tab: tabId, a: encoded.a, x, y, t: Date.now() };
    let key = `${encoded.a.s}|${encoded.a.n ?? ""}|${x}|${y}|${tabId}`;
    if (encoded.a.s === "surface") {
      // The content box stretches with the peer's window, so fractions of it
      // misplace the cursor between differently-sized windows. Send px
      // offsets from the survey canvas block instead, normalized by the
      // local zoom; the fractions above stay in the state for old receivers.
      const scale = (this.creator.survey?.widthScale || 100) / 100;
      const canvasRect = getCanvasElement(encoded.el).getBoundingClientRect();
      if (canvasRect.width > 0 && canvasRect.height > 0) {
        cur.px = Math.round((ev.clientX - canvasRect.left) / scale);
        cur.py = Math.round((ev.clientY - canvasRect.top) / scale);
        cur.w = Math.round(canvasRect.width / scale);
        cur.h = Math.round(canvasRect.height / scale);
        // Integer px is finer than the 3-decimal fractions on a wide box, and
        // w/h re-send the state after a sender-side resize on the next move.
        key = `${encoded.a.s}|${cur.px}|${cur.py}|${cur.w}|${cur.h}|${tabId}`;
      }
    }
    this.sendCur(cur, key);
  }
  private sendCur(cur: IPresenceState["cur"], key: string): void {
    if (key === this.lastCurKey) return;
    this.lastCurKey = key;
    this.emit({ cur });
  }
  private onMouseMove = (ev: MouseEvent): void => {
    this.pendingMouse = ev;
    if (this.mouseTimer !== undefined) return;
    this.mouseTimer = setTimeout(() => {
      this.mouseTimer = undefined;
      if (!this.disposed && this.pendingMouse)this.captureMouse(this.pendingMouse);
      this.pendingMouse = null;
    }, MOUSE_THROTTLE_MS);
  };
  private hideCursor = (): void => this.sendCur(null, "");
  /**
   * A hidden tab keeps its DOM focus (the browser fires no blur on tab
   * switch), so without this a backgrounded client would claim its
   * translation cell forever - peers would see a ring for a user who is not
   * even looking at the page. Release the claim on hide and re-claim on
   * return, when the caret is in fact still inside the cell.
   */
  private hiddenTrCell: IPresenceState["trCell"] = null;
  private onVisibility = (): void => {
    if (this.doc?.visibilityState === "hidden") {
      this.hideCursor();
      if (this.state.trCell) {
        this.hiddenTrCell = this.state.trCell;
        this.emit({ trCell: null });
      }
    } else {
      const claim = this.hiddenTrCell;
      this.hiddenTrCell = null;
      if (claim && this.inTranslationCell(this.doc?.activeElement ?? null)) {
        this.emit({ trCell: claim });
      }
    }
  };

  private attachToRoot = (): void => {
    if (this.disposed) return;
    const root = this.creator.rootElement;
    if (root) {
      this.leaveTarget = root;
      root.addEventListener("mouseleave", this.hideCursor);
      // The tab is already active by now - (re)announce the initial state.
      this.sendTab();
      this.sendSelection(this.creator.selectedElement);
    } else {
      this.rootPoll = raf(this.attachToRoot);
    }
  };
}
