import { Base, property, propertyArray } from "survey-core";
import type { SurveyModel } from "survey-core";
import { SurveyTestSurveyTargetName } from "survey-core/tester";
import type { SurveyTestTargetKind } from "survey-core/tester";
import { testerText } from "../localization";
import { ElementRegistry } from "../recorder/elementRegistry";
import type { RegisteredElement } from "../recorder/elementRegistry";
import {
  getPageTargetName, getPanelTargetName, getQuestionTargetName, targetContextOf,
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
    this.refresh();
  }

  public detach(): void {
    if (!!this.registry && this.registry.onChanged)this.registry.onChanged = undefined;
    this.registry = undefined;
    this.survey = undefined;
    this.openTarget = undefined;
    this.clear();
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
