import { Base, property, propertyArray } from "survey-core";
import type { SurveyModel } from "survey-core";
import { SurveyTestSurveyTargetName } from "survey-core/tester";
import type { SurveyTestTargetKind } from "survey-core/tester";
import { testerText } from "../localization";
import { ElementRegistry } from "../recorder/elementRegistry";
import type { RegisteredElement } from "../recorder/elementRegistry";
import {
  getPageTargetName, getPanelTargetName, getQuestionTargetName, getTargetKind, targetContextOf,
} from "../recorder/targetName";
import { TesterCheckMenuModel } from "./checkMenuModel";
import type { ITesterCheckMenuOwner } from "./checkMenuModel";

// The adorners, as data.
//
// The split this file is one half of: **what adorners exist and what each of them offers** is a model
// decision and lives here; **where a button is drawn** is view work and lives in prompt 07. Nothing
// below measures anything, watches a resize or knows what a corner is - it answers, for every element
// the form has rendered, "is there a target here, what kind of thing is it, what does its menu offer,
// and what does the case already assert about it".
//
// Where the list comes from: recorder/elementRegistry.ts, which the session attaches to the model the
// tester built. The registry is fed by the model's own render events, so an element appears here when
// it has rendered and leaves when the renderer has replaced it - a new matrix row, a page change and a
// question that became visible all arrive by themselves.
//
// Rule 10 of PROMPT-recorder.md section 11 travels with the split and must not bend: adorners are
// cosmetic, and nothing in the session may depend on one being placeable. This list is read by the
// overlay and by nobody else; the session records what the capture reports whether an adorner was ever
// drawn or not.

// Which box an adorner stands in. Only a stylesheet reads it - an adorner sits in the corner of its own
// element, and the corners of a page, a panel, a question and a cell are a padding apart - but it is
// decided here, because it follows from what the element *is* and not from how it looks.
export type TesterAdornerPlace = "question" | "panel" | "page" | "cell" | "survey";

// The four components the renderer asks the model for by name, and what this file adds to the widget's
// per-framework surface (tests-tester/checkLayers.ts holds the whole list). Which wrapper an element
// gets follows from what the element *is* - it is addressable, or it is a piece of chrome the grammar
// has no name for - so it is decided here and every renderer gets the same answer; what a wrapper
// draws is the renderer's business.
export const TESTER_ADORNED_QUESTION = "svt-adorned-question";
export const TESTER_ADORNED_PANEL = "svt-adorned-panel";
export const TESTER_ADORNED_CELL = "svt-adorned-cell";
export const TESTER_ADORNED_PAGE = "svt-adorned-page";

// What the adorners need from the session. Three of them are about the case as it stands, and the two
// of ITesterCheckMenuOwner are what a menu press does.
export interface ITesterAdornersOwner extends ITesterCheckMenuOwner {
  readonly liveSurvey: SurveyModel | undefined;
  // The confirming run behind a tick is in flight: a second press would race it.
  readonly adornersBusy: boolean;
  // The checks the trailing "expect" step already holds, by target, so a menu row can say that the
  // case asserts it and a press on it is plainly the undo of the press that wrote it.
  //
  // The whole map at once, and not one target at a time: answering it costs a parse of the suite
  // document, there is an adorner on every element the form drew, and the list projects onto all of
  // them together.
  tickedTargets(): { [target: string]: Array<string> };
}

export class TesterAdornerModel extends Base {
  @property({ defaultValue: "" }) target!: string;
  @property({ defaultValue: 0 }) tickedCount!: number;
  @property({ defaultValue: false }) isOpen!: boolean;
  @property({ defaultValue: false }) disabled!: boolean;

  public readonly kind: SurveyTestTargetKind;
  public readonly place: TesterAdornerPlace;
  public readonly obj: any;

  private owner: ITesterAdornersOwner;
  private survey: SurveyModel;
  // Built the first time the menu is asked for and kept afterwards. A menu is a list, a popup and a row
  // per offered check, and there is an adorner on every element of the form: building all of them up
  // front would build a dozen models for the one a person opens - and dropping the model on close would
  // make the popup subscribe and unsubscribe twice per press.
  private menuValue?: TesterCheckMenuModel;

  constructor(owner: ITesterAdornersOwner, params: {
    target: string, kind: SurveyTestTargetKind, place: TesterAdornerPlace, obj: any, survey: SurveyModel,
  }) {
    super();
    this.owner = owner;
    this.survey = params.survey;
    this.kind = params.kind;
    this.place = params.place;
    this.obj = params.obj;
    this.target = params.target;
  }
  public getType(): string { return "svt-adorner"; }

  // The button names the element it is about, because a button that says only "checks" is a button a
  // screen reader announces a dozen times identically. For a cell that name is the resolved target -
  // "contacts[1].phone" - which is the string an author would otherwise have to work out by hand and
  // the single most common reason a hand-written matrix case fails with unknownTarget.
  public get ariaLabel(): string { return testerText("recorder.menu.ariaLabel", this.target); }
  public get hasChecks(): boolean { return this.tickedCount > 0; }
  // The tick on the button. It is the same mark the menu prints against a check the case already
  // asserts, which is the point: one glyph for "this is checked", said in one place.
  public get markText(): string { return testerText("recorder.menu.markTicked"); }

  public get menu(): TesterCheckMenuModel {
    if (!this.menuValue) {
      this.menuValue = new TesterCheckMenuModel(this.owner, {
        target: this.target, kind: this.kind, obj: this.obj, survey: this.survey,
      });
    }
    return this.menuValue;
  }
  // Whether a menu has been built at all. The list refreshes what is open and nothing else, so it asks
  // rather than building one per element on every update.
  public get hasMenu(): boolean { return !!this.menuValue; }

  // What the case says about this target right now, projected onto the button and onto the menu the
  // button opens. The map is the list's, read once for all of them.
  public update(ticked: { [target: string]: Array<string> }): void {
    const mine = ticked[this.target] || [];
    this.tickedCount = mine.length;
    this.disabled = this.owner.adornersBusy;
    if (!!this.menuValue)this.menuValue.update(mine, this.owner.adornersBusy);
  }

  public setOpen(open: boolean): void {
    this.isOpen = open;
    // Building the menu is what opening means; closing an adorner that never opened builds nothing.
    // Built first and projected onto second: a menu built after the projection would open unaware
    // that the session is busy or paused.
    if (open || !!this.menuValue) {
      const menu = this.menu;
      this.update(this.owner.tickedTargets());
      menu.setOpen(open);
    }
  }

  public dispose(): void {
    if (!!this.menuValue)this.menuValue.dispose();
    this.menuValue = undefined;
    super.dispose();
  }
}

export class TesterAdornersModel extends Base {
  // Every adorner the form offers, in the order the elements rendered, with the survey's own first: it
  // is the one target with no element anywhere on the page.
  @propertyArray() adorners!: Array<TesterAdornerModel>;
  // At most one menu is open at a time, and this list owns which - a second open menu is two answers to
  // "what is being checked".
  @property() openTarget!: string | undefined;

  private owner: ITesterAdornersOwner;
  private registry?: ElementRegistry;
  private survey?: SurveyModel;
  // The survey the wrapper names are installed on, and the handler that answers them. Held so that a
  // detach leaves the model exactly as it was handed over: the widget does not own the survey the
  // tester built, and a replay throws it away with two subscriptions of ours still on it otherwise.
  private wrapped?: SurveyModel;
  private wrapperHandler?: (sender: any, options: any) => void;
  private previousPageComponent?: string;
  private gone = false;

  constructor(owner: ITesterAdornersOwner) {
    super();
    this.owner = owner;
    this.adorners = [];
  }
  public getType(): string { return "svt-adorners"; }

  // The session hands over the model the tester built and the registry it attached to it. Both change
  // together on every replay, so they arrive together.
  public attach(survey: SurveyModel | undefined, registry: ElementRegistry | undefined): void {
    if (this.gone) return;
    this.detach();
    this.survey = survey;
    this.registry = registry;
    if (!!registry) registry.onChanged = () => this.refresh();
    this.installWrappers(survey);
    this.refresh();
  }

  public detach(): void {
    if (!!this.registry && this.registry.onChanged)this.registry.onChanged = undefined;
    this.registry = undefined;
    this.removeWrappers();
    this.survey = undefined;
    this.openTarget = undefined;
    this.clear();
  }

  // Which component wraps an element, told to the model once, before the renderer reaches a page.
  // Nothing here is recorded into a case and the tester never reads any of it: a wrapper name only
  // decides which component the renderer builds, and an element the grammar cannot address is left
  // exactly as the renderer would have built it.
  //
  // It is a model decision and not a view's, for the same reason the Creator sets the same event in
  // creator-base.ts: it follows from what the element is. React, Vue and Angular register the four
  // names of TESTER_ADORNED_* and get these answers without restating any of them - which is the only
  // way three renderers cannot come to disagree about which questions are checkable.
  private installWrappers(survey: SurveyModel | undefined): void {
    if (!survey) return;
    const anySurvey: any = survey;
    if (!anySurvey.onElementWrapperComponentName ||
      typeof anySurvey.onElementWrapperComponentName.add !== "function") return;
    this.previousPageComponent = anySurvey.pageComponent;
    anySurvey.pageComponent = TESTER_ADORNED_PAGE;
    this.wrapperHandler = (_sender: any, options: any) => {
      if (options.wrapperName !== "component") return;
      const name = wrapperComponentFor(options.element, options.reason);
      if (!!name)options.componentName = name;
    };
    anySurvey.onElementWrapperComponentName.add(this.wrapperHandler);
    this.wrapped = survey;
  }

  private removeWrappers(): void {
    const survey: any = this.wrapped;
    this.wrapped = undefined;
    if (!survey) return;
    try {
      survey.pageComponent = this.previousPageComponent;
      if (!!this.wrapperHandler)survey.onElementWrapperComponentName.remove(this.wrapperHandler);
    } catch{ /* a model already torn down */ }
    this.wrapperHandler = undefined;
    this.previousPageComponent = undefined;
  }

  // Rebuilt from the registry, reusing what is still there. An adorner is reused rather than replaced
  // so that the menu behind an open one survives a re-render of the question under it: a rebuild would
  // close the menu a person is reading every time the form repaints.
  public refresh(): void {
    if (this.gone) return;
    const survey = this.survey;
    if (!survey) {
      this.clear();
      return;
    }
    const kept: { [key: string]: TesterAdornerModel } = {};
    this.adorners.forEach(adorner => { kept[keyOf(adorner.target, adorner.place)] = adorner; });
    const next: Array<TesterAdornerModel> = [];
    const taken: { [key: string]: boolean } = {};
    const take = (target: string, kind: SurveyTestTargetKind, place: TesterAdornerPlace,
      obj: any): void => {
      const key = keyOf(target, place);
      if (taken[key]) return;
      taken[key] = true;
      const known = kept[key];
      // Reused only while it is about the same object: a matrix row that was removed and added again
      // resolves to the same target name and to a different question.
      if (!!known && known.obj === obj) {
        next.push(known);
        return;
      }
      next.push(new TesterAdornerModel(this.owner, {
        target: target, kind: kind, place: place, obj: obj, survey: survey,
      }));
    };

    // The survey is a target like any other and gets the same menu; it is the one with no element of
    // its own, so it is listed first and the view stands it in the corner of the pane.
    take(SurveyTestSurveyTargetName, "survey", "survey", survey);
    (!!this.registry ? this.registry.list() : []).forEach(entry => {
      const found = describeEntry(entry);
      if (!found) return;
      take(found.target, found.kind, found.place, found.obj);
    });

    // What is no longer on the page goes, and the menu it held goes with it.
    this.adorners.forEach(adorner => {
      if (next.indexOf(adorner) < 0) adorner.dispose();
    });
    if (!sameAdorners(this.adorners, next))this.adorners = next;
    if (!!this.openTarget && !next.some(adorner => adorner.target === this.openTarget)) {
      this.openTarget = undefined;
    }
    this.update();
  }

  // What the case asserts, onto every adorner, and onto the menu of the one that is open. The document
  // is read once here and the map is handed down, because reading it per adorner would parse the suite
  // once for every element the form drew.
  public update(): void {
    if (this.gone) return;
    const ticked = this.owner.tickedTargets();
    this.adorners.forEach(adorner => adorner.update(ticked));
  }

  public find(target: string): TesterAdornerModel | undefined {
    return this.adorners.filter(adorner => adorner.target === target)[0];
  }

  // The survey's own adorner, which is the one with no element anywhere on the page: a view stands
  // it in the corner of the pane. Asked for by name here rather than by the target string, because
  // what the survey is called is the tester's business and not a renderer's.
  public get surveyAdorner(): TesterAdornerModel | undefined {
    return this.find(SurveyTestSurveyTargetName);
  }

  // The adorner of a rendered element, by the element itself. A wrapper component is handed the
  // question, the panel, the page or the cell the renderer is drawing and nothing else - it does not
  // know the target name, and it must not work one out, because the grammar is the tester's and
  // resolving it twice is how two answers to "what is this called" get into one screen. So the
  // lookup is by identity, which is also what makes it right after a matrix row was removed and added
  // again: same name, different question.
  //
  // Nothing until the element has rendered, and that is correct rather than a race: the list is built
  // from the render events, an element that has not rendered has no adorner (note 23), and the list
  // raises a change when it grows one.
  public forElement(obj: any): TesterAdornerModel | undefined {
    if (!obj) return undefined;
    return this.adorners.filter(adorner => adorner.obj === obj)[0];
  }

  // The cell variant. The renderer hands a cell over as its own object - the matrix and the row travel
  // with it - and what carries the target is the question inside it, which is the object the registry
  // holds. A cell with no question of its own (a detail panel, a drag handle, the row actions) has
  // none, and gets no adorner.
  public forCell(cell: any): TesterAdornerModel | undefined {
    return this.forElement(getCellQuestion(cell));
  }

  // Opening one closes the other. The menu is a popup, so it also closes itself - a press outside it,
  // Escape, a scroll of anything the button sits in - and a view tells this model when that happened.
  public setOpen(target: string | undefined): void {
    if (this.openTarget === target) return;
    const previous = !!this.openTarget ? this.find(this.openTarget) : undefined;
    if (!!previous) previous.setOpen(false);
    this.openTarget = target;
    const next = !!target ? this.find(target) : undefined;
    if (!!next) next.setOpen(true);
  }

  public toggle(target: string): void {
    this.setOpen(this.openTarget === target ? undefined : target);
  }

  public dispose(): void {
    if (this.gone) return;
    this.gone = true;
    this.detach();
    super.dispose();
  }

  private clear(): void {
    this.adorners.forEach(adorner => adorner.dispose());
    if (this.adorners.length)this.adorners = [];
  }
}

// Which wrapper an element gets, and whether it gets one at all.
//
// The prototype's overlay drew one absolutely placed layer over the form and measured every element
// into it. A measurement is a photograph: the moment the pane scrolls, a row is added or an error
// message appears, every button in the layer is standing where its element used to be. So the buttons
// are not placed over the form - they are rendered inside the element they are about, exactly the way
// the Creator adorns a question in the designer, and nothing is measured so nothing can drift.
//
// An element the grammar cannot address - a question with no name, a static panel nested inside the
// panel of a dynamic panel - is left exactly as the renderer built it: there is no adorner to draw, so
// there is no reason to put a box around it. A panel of a dynamic panel is addressable ("contacts[1]")
// and is wrapped like any other panel; a panel that draws no header is addressable and still not
// wrapped, for the reason rendersHeader() gives below - it has no corner of its own to stand a button
// in.
//
// A page has no wrapper event of its own: `pageComponent` is one name for every page, so the page
// component is installed unconditionally and asks forElement() whether this page has an adorner.
export function wrapperComponentFor(element: any, reason?: string): string | undefined {
  if (reason === "cell") {
    const question = getCellQuestion(element);
    if (!question) return undefined;
    return !!getQuestionTargetName(question, cellContextOf(element))
      ? TESTER_ADORNED_CELL
      : undefined;
  }
  // Every other reason is a part of the chrome the recorder has no target for: a logo, a column
  // header, the header of a matrix row, the footer of a total row.
  if (!!reason) return undefined;
  const kind = getTargetKind(element);
  if (kind === "panel") {
    return !!getPanelTargetName(element) && rendersHeader(element, "panel")
      ? TESTER_ADORNED_PANEL
      : undefined;
  }
  if (kind === "question") {
    return !!getQuestionTargetName(element) ? TESTER_ADORNED_QUESTION : undefined;
  }
  return undefined;
}

// The row context of a rendered matrix cell. The renderer hands the cell over with the matrix and the
// row it belongs to, and the tester takes that pair for the cells whose row the question alone cannot
// name.
export function cellContextOf(cell: any): ReturnType<typeof targetContextOf> {
  return !!cell ? targetContextOf(cell.matrix, cell.row) : undefined;
}

// The question a rendered matrix cell holds, if it holds one. A cell that carries a detail panel, a
// drag handle or the row actions carries no target.
export function getCellQuestion(cell: any): any {
  if (!cell || !!cell.hasPanel) return undefined;
  const question = cell.question;
  return !!question && typeof question.getType === "function" ? question : undefined;
}

// What one registered element is offered, or nothing. An element the grammar cannot address - a
// question with no name, a static panel nested inside the panel of a dynamic panel, a question of
// another survey - gets no adorner rather than one that would end the case with unknownTarget. A panel
// of a dynamic panel is addressable ("contacts[1]") and is adorned like any other panel.
export function describeEntry(entry: RegisteredElement): {
  target: string, kind: SurveyTestTargetKind, place: TesterAdornerPlace, obj: any,
} | undefined {
  if (entry.kind === "cell") {
    const target = getQuestionTargetName(entry.obj, targetContextOf(entry.matrix, entry.row));
    return !target ? undefined : { target: target, kind: "question", place: "cell", obj: entry.obj };
  }
  if (entry.kind === "question") {
    const target = getQuestionTargetName(entry.obj);
    return !target ? undefined : { target: target, kind: "question", place: "question", obj: entry.obj };
  }
  if (entry.kind === "panel") {
    const target = getPanelTargetName(entry.obj);
    if (!target || !rendersHeader(entry.obj, "panel")) return undefined;
    return { target: target, kind: "panel", place: "panel", obj: entry.obj };
  }
  const target = getPageTargetName(entry.obj);
  if (!target || !rendersHeader(entry.obj, "page")) return undefined;
  return { target: target, kind: "page", place: "page", obj: entry.obj };
}

// Whether the renderer draws a header for this page or panel - which is where a page's and a panel's
// adorner stands. It is asked in the renderer's own terms rather than restated in ours, so the two
// cannot come to disagree: SurveyPanel.renderHeader() returns null unless `hasTitle || hasDescription`,
// and SurveyPage builds its header only when `hasTitle || _showDescription`.
//
// A page or panel with no header has nowhere to put a button. Its corner is the corner of the first
// question inside it, so the adorner would stand over that question's own - two buttons in one place,
// neither of them saying which of the two elements it is about. There is no third corner to move it to
// that is not somebody else's, so the answer is that it is not offered: a container that shows nothing
// of itself is checked from the JSON screen, by writing the "expect" against its name.
export function rendersHeader(element: any, kind: "page" | "panel"): boolean {
  if (!element) return false;
  if (kind === "page") return !!element.hasTitle || !!element._showDescription;
  return !!element.hasTitle || !!element.hasDescription;
}

function keyOf(target: string, place: TesterAdornerPlace): string {
  return place + "|" + target;
}

function sameAdorners(a: Array<TesterAdornerModel>, b: Array<TesterAdornerModel>): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
