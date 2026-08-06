import { DomDocumentHelper, DomWindowHelper, EventBase } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { buildLocator } from "../journal/journal-locator";
import { encodeAnchor, encodeEditFocus, getCanvasElement, IPresenceFocus, IPresenceState, PRESENCE_SELECTORS } from "./presence-state";

/** Mouse updates are throttled to this interval (trailing edge). */
const MOUSE_THROTTLE_MS = 50;
/** How long after a focusout before the keyboard focus is cleared. */
const FOCUS_BLUR_DEBOUNCE_MS = 300;

const raf = (cb: () => void): any =>
  DomWindowHelper.isAvailable() ? DomWindowHelper.requestAnimationFrame(cb) : setTimeout(cb, 16);
const cancelRaf = (id: any): void => {
  if (DomWindowHelper.isAvailable()) DomWindowHelper.getWindow().cancelAnimationFrame(id);
  else clearTimeout(id);
};

/**
 * Watches the local creator (active tab, selected element, keyboard focus,
 * mouse) and maintains the full presence state, firing `onStateChanged`
 * with the complete state after every change. The state carries no user
 * identity - the transport/server is expected to attach it to the envelope.
 */
export class PresenceCapture {
  public onStateChanged: EventBase<PresenceCapture, { state: IPresenceState }> = new EventBase();
  private state: IPresenceState = { tab: "", sel: null, focus: null, trLoc: null, cur: null };
  private disposed = false;
  private focusBlurTimer: ReturnType<typeof setTimeout> | undefined;
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
    this.cancelFocusClear();
    if (this.mouseTimer !== undefined) clearTimeout(this.mouseTimer);
  }

  private emit(partial: Partial<IPresenceState>): void {
    Object.assign(this.state, partial);
    this.onStateChanged.fire(this, { state: this.state });
  }

  // --- tab -------------------------------------------------------------------

  private sendTab(): void {
    // Everything in the state is scoped to the active tab: the cursor, the
    // keyboard focus and the shared selection reset atomically with `tab`,
    // and the selection is re-announced from the model when the designer
    // returns. The cur dedupe key must reset too: cur went null outside
    // sendCur, so the next capture has to go through even if it repeats the
    // last key.
    this.lastCurKey = "";
    this.hiddenFocus = null;
    this.cancelFocusClear();
    const tab = this.creator.activeTab ?? "";
    this.emit({
      tab,
      sel: tab === "designer" ? this.encodeSel(this.creator.selectedElement) : null,
      focus: null,
      trLoc: null,
      cur: null
    });
  }
  private onTabChanged = (): void => this.sendTab();

  // --- selection ---------------------------------------------------------------

  private encodeSel(element: any): IPresenceState["sel"] {
    if (!element) return null;
    let loc: string | null = null;
    try {
      loc = buildLocator(element, this.creator.survey);
    } catch{
      loc = null;
    }
    // Objects outside the survey tree (e.g. creator settings) aren't shareable.
    if (loc === null) return null;
    const name = typeof element.name === "string" && element.name ? element.name : null;
    return { loc, name };
  }
  private sendSelection(element: any): void {
    // Selection is shared only while the designer (the view that renders it)
    // is the sender's active tab; sendTab re-announces it on return.
    this.emit({ sel: this.creator.activeTab === "designer" ? this.encodeSel(element) : null });
  }
  private onElementSelected = (_: unknown, options: any): void => this.sendSelection(options?.element);

  // --- keyboard focus ------------------------------------------------------------
  // At most one focus per participant (the caret is singular). Every source
  // funnels into setFocus, and one debounced clear channel replaces per-area
  // blur timers - the type carries the invariant the timers used to guard.

  private setFocus(focus: IPresenceFocus | null): void {
    this.cancelFocusClear();
    if (JSON.stringify(this.state.focus) !== JSON.stringify(focus)) {
      this.emit({ focus });
    }
  }
  /**
   * Arm the debounced clear. Re-focusing the same area within the window
   * keeps the focus alive (the area's model event re-emits the new target),
   * focus settling in another area replaces it via setFocus, and a blur to a
   * non-focusable node (a plain canvas click fires no focusin) lets the
   * timer clear the stale claim - the area check guards against clearing a
   * focus that already moved on.
   */
  private scheduleFocusClear(area: IPresenceFocus["area"]): void {
    this.cancelFocusClear();
    this.focusBlurTimer = setTimeout(() => {
      this.focusBlurTimer = undefined;
      if (!this.disposed && this.state.focus?.area === area)this.emit({ focus: null });
    }, FOCUS_BLUR_DEBOUNCE_MS);
  }
  private cancelFocusClear(): void {
    if (this.focusBlurTimer !== undefined) {
      clearTimeout(this.focusBlurTimer);
      this.focusBlurTimer = undefined;
    }
  }

  // --- property-grid focus -------------------------------------------------------
  // The grid is a generated survey; question name == property name. Hooking
  // at instance creation survives the grid being rebuilt on every selection
  // change - the exact mechanism PropertyGridModel uses internally.

  private onSurveyInstanceCreated = (_: unknown, options: any): void => {
    if (options?.area === "translation-tab:table") {
      this.trackTranslationSurvey(options.survey);
      return;
    }
    // Both grid flavors report the same way: receivers derive the flavor
    // from `tab` ("theme" -> the theme grid, else the main grid), and the
    // main grid's target object is by construction the selected one (`sel`).
    const isGrid = options?.area === "property-grid" || options?.area === "theme-tab:property-grid";
    if (!isGrid || !options.survey?.onFocusInQuestion) return;
    options.survey.onFocusInQuestion.add((_s: unknown, o: any) => {
      if (this.disposed || !o?.question?.name) return;
      this.setFocus({ area: "pg", prop: o.question.name });
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
      // The sticky locale claim outlives the cell blur (unlike `focus`): it
      // marks the locale the user works on for as long as they stay on the
      // tab, and only sendTab releases it. A user working exclusively inside
      // the auto-translate dialog never sets it - that area isn't tracked.
      if (this.state.trLoc !== locale)this.emit({ trLoc: locale });
      this.setFocus({ area: "tr", m: matrix.name, l: locale, loc, p: String(item.name) });
    });
  }

  private inTranslationCell(node: EventTarget | null): boolean {
    return node instanceof Element &&
      !!node.closest(PRESENCE_SELECTORS.tabContent("translation")) &&
      !!node.closest(PRESENCE_SELECTORS.translationCell);
  }

  // DOM-level blur tracking (survey-core has no focus-out event): a focusout
  // of an area arms the shared debounced clear, a focusin back into the same
  // area cancels it.

  private inSidebar(node: EventTarget | null): boolean {
    return node instanceof Element && !!node.closest(".svc-side-bar");
  }
  private onFocusIn = (ev: FocusEvent): void => {
    // Re-focusing inside the same area within the debounce window keeps the
    // focus alive (the area's model event re-emits the new target); focus
    // landing elsewhere replaces or clears it through setFocus.
    if (this.inSidebar(ev.target) || this.inTranslationCell(ev.target))this.cancelFocusClear();
    this.trackEditFocusIn(ev.target);
  };
  private onFocusOut = (ev: FocusEvent): void => {
    this.trackEditFocusOut(ev.target);
    if (this.inTranslationCell(ev.target))this.scheduleFocusClear("tr");
    else if (this.inSidebar(ev.target))this.scheduleFocusClear("pg");
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
      this.setFocus(focus);
    } else if (this.state.focus?.area === "edit") {
      // Keyboard focus moved somewhere that is not an inline editor; other
      // areas release their claims through their own model/blur signals.
      this.setFocus(null);
    }
  }
  private trackEditFocusOut(target: EventTarget | null): void {
    if (!(target instanceof Element) || !target.closest(PRESENCE_SELECTORS.stringEditor)) return;
    this.scheduleFocusClear("edit");
  }

  // --- mouse -------------------------------------------------------------------

  private captureMouse(ev: MouseEvent): void {
    // The Preview tab runs each participant's own survey instance (answers,
    // page position and visibility diverge between peers), so a broadcast
    // cursor cannot land on anything meaningful there - don't share it.
    if (this.creator.activeTab === "preview") {
      this.sendCur(null, "");
      return;
    }
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
    const cur: IPresenceState["cur"] = { a: encoded.a };
    let key = `${encoded.a.s}|${encoded.a.n ?? ""}|${x}|${y}|${tabId}`;
    if (encoded.a.s === "surface") {
      // The content box stretches with the peer's window, so fractions of it
      // misplace the cursor between differently-sized windows. Send px
      // offsets from the survey canvas block instead, normalized by the
      // local zoom.
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
    if (cur.px === undefined) {
      // Fraction encoding: non-surface anchors, plus the rare surface capture
      // where the canvas block has no size yet.
      cur.x = x;
      cur.y = y;
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
  private hiddenFocus: IPresenceFocus | null = null;
  private onVisibility = (): void => {
    if (this.doc?.visibilityState === "hidden") {
      this.hideCursor();
      if (this.state.focus?.area === "tr") {
        this.hiddenFocus = this.state.focus;
        this.emit({ focus: null });
      }
    } else {
      const claim = this.hiddenFocus;
      this.hiddenFocus = null;
      if (claim && this.inTranslationCell(this.doc?.activeElement ?? null)) {
        this.emit({ focus: claim });
      }
    }
  };

  private attachToRoot = (): void => {
    if (this.disposed) return;
    const root = this.creator.rootElement;
    if (root) {
      this.leaveTarget = root;
      root.addEventListener("mouseleave", this.hideCursor);
      // The tab is already active by now - (re)announce the initial state
      // (sendTab also announces the current selection on the designer).
      this.sendTab();
    } else {
      this.rootPoll = raf(this.attachToRoot);
    }
  };
}
