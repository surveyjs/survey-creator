import { Action, Base, ListModel, PopupModel, property, propertyArray } from "survey-core";
import type { IAction, SurveyModel } from "survey-core";
import type { SurveyTestTargetKind } from "survey-core/tester";
import { formatValue } from "../core/stepInfo";
import { testerText } from "../localization";
import {
  getCheckOffers, getRenderedText, getVisibleChoiceTexts, getVisibleChoiceValues,
} from "../recorder/checks";
import type { CheckOffer, CheckPicker } from "../recorder/checks";
import type { ITesterCheckRequest } from "./recorderModel";
import { checkListCss } from "./runnerCss";

// The check menu of an adorner, as a model.
//
// It is a survey-core ListModel inside a survey-core PopupModel - the same pair the library opens for
// a dropdown, and the one every framework of the family already knows how to render - with one row
// model per offered check behind it. What is left for a view is a loop.
//
// **Why the popup and not a panel of our own.** A panel absolutely placed inside the element it adorns
// is inside every box that element is inside. It is clipped by the first ancestor that scrolls, it is
// painted under whatever the form puts above it - z-index only orders it within its own stacking
// context, so raising it above the next question is a fight that cannot be won for good - and it stays
// exactly where it was drawn while the pane scrolls out from under it. The library answers all three at
// once, and none of the three answers is ours to write: the popup is a fixed layer over the page,
// positioned against the button each time it opens, and PopupDropdownViewModel subscribes to the scroll
// of the window and of every scrollable parent of that button and hides the menu when one of them
// scrolls.
//
// Two more decisions live here rather than in the markup:
//
//   * **A check that does not belong to this element is not in the list at all.** In a list you find a
//     row by typing its name, and a row that can never be picked is noise in every search that reaches
//     it - so what applies is what is offered. Nothing is restated here to decide that: it is the
//     tester's own `getNotApplicableReason()` that says a check does not apply, and
//     `SurveyTestCheckFactory.Instance` that says which checks exist. A check this widget has never
//     heard of appears by itself; one the tester does not register is not offered at all, and the day
//     a `description` check is registered its row appears with no edit here (PROMPT-recorder.md
//     section 5.4).
//   * **What a row says is a property of the row**: the check's name, what the model holds for it right
//     now, whether the case already asserts it, and whether picking it opens a picker. A view reads
//     those and draws them; it never works out any of them from the offer.
//
// The value a row shows is display only. Every recorded expectation comes from the confirming run the
// session makes (PROMPT-recorder.md section 5.3), so this is the menu telling the author what they are
// about to assert - in the words of the model, and never as the thing that is written.

// Who a menu press reaches. It is the recording session, and the two methods are its own: the menu adds
// a check to the case and takes one back out, and everything about how that is written - the confirming
// run, the trailing "expect" step, the undo - belongs to the session and never to the menu.
export interface ITesterCheckMenuOwner {
  addChecks(target: string, checks: Array<ITesterCheckRequest>): void;
  removeChecks(target: string, names: Array<string>): void;
}

// One item of a picker: the value that is recorded, and the two strings a row of it shows.
export interface ITesterCheckPickItem {
  value: any;
  label: string;
  text?: string;
}

export interface ITesterCheckMenuParams {
  target: string;
  kind: SurveyTestTargetKind;
  obj: any;
  survey: SurveyModel;
}

// The two strings this model hands to whichever element factory is asking: the menu inside the popup,
// and one row of the list inside the menu. What draws them is a view's business - see
// tests-tester/checkLayers.ts, which is what keeps that true.
const CHECK_MENU_COMPONENT = "svt-check-menu";
const CHECK_ROW_COMPONENT = "svt-check-row";

// The properties a tester reads first, in the order they are read. Everything else the tester registers
// follows below: a check this widget has never heard of must not sink to the bottom of the menu because
// it is unknown, and it must not disappear from it either.
const FIRST = ["value", "visible", "enabled", "required", "empty", "errors", "title", "description"];

// One offered check. A row is what the menu shows and the unit a press is about; the offer behind it is
// the tester's, and nothing here adds to it.
export class TesterCheckRowModel extends Base {
  @property({ defaultValue: "" }) name!: string;
  // What the model holds for this check right now. Display only - see the note at the top of the file.
  @property({ defaultValue: "" }) valueText!: string;
  @property({ defaultValue: false }) piping!: boolean;
  @property({ defaultValue: false }) ticked!: boolean;
  // Whether this row's picker is the open one. It is on the row because the row draws itself as open.
  @property({ defaultValue: false }) picking!: boolean;

  public readonly offer: CheckOffer;
  // This row's place in the list. Its data is this model, so whichever component the list is told to
  // draw a row with is handed the row itself.
  public readonly action: Action;

  constructor(offer: CheckOffer) {
    super();
    this.offer = offer;
    this.name = offer.name;
    this.piping = !!offer.piping;
    this.action = new Action({ id: offer.name, title: offer.name, data: this });
    this.syncAction();
  }
  public getType(): string { return "svt-check-row"; }

  public get hasPicker(): boolean { return !!this.offer.picker; }
  public get markText(): string {
    return this.ticked
      ? testerText("recorder.menu.markTicked")
      : this.hasPicker ? testerText("recorder.menu.markPicker") : "";
  }
  public get tooltip(): string {
    if (this.ticked) return testerText("recorder.menu.tooltipTicked");
    return this.hasPicker
      ? testerText("recorder.menu.tooltipPicker")
      : testerText("recorder.menu.tooltipAdd");
  }

  public setTicked(on: boolean): void {
    if (this.ticked === on) return;
    this.ticked = on;
    this.syncAction();
  }
  public setPicking(on: boolean): void {
    if (this.picking === on) return;
    this.picking = on;
    this.syncAction();
  }

  // What the search matches. The name is half of it; the value is the other half, because a menu whose
  // rows show the value beside the name is one an author reads by the value, and typing that value
  // should find it.
  public matches(text: string): boolean {
    const low = (text || "").toLowerCase();
    if (!low) return true;
    return this.name.toLowerCase().indexOf(low) >= 0 || this.valueText.toLowerCase().indexOf(low) >= 0;
  }

  public dispose(): void {
    // The list disposes the items it was given, and it is disposed first: a row is not the owner of its
    // own place in a list it was put into.
    if (!this.action.isDisposed)this.action.dispose();
    super.dispose();
  }

  // The class on the row and the sentence in its tooltip are statements about the row, so they are
  // written from it rather than guessed at by a stylesheet.
  private syncAction(): void {
    this.action.css = (this.ticked ? "svt-check-row--on" : "") +
      (this.picking ? " svt-check-row--picking" : "");
    this.action.tooltip = this.tooltip;
  }
}

export class TesterCheckMenuModel extends Base {
  @property({ defaultValue: "" }) target!: string;
  // While the session is writing, a press does nothing: the case is mid-edit and a second press would
  // race the confirming run that is already in flight.
  @property({ defaultValue: false }) busy!: boolean;
  // The row whose picker is open, if one is. A check with a picker is not complete until its keys are
  // chosen, so pressing it opens the picker and the confirm under the picker writes it.
  @property() pending!: TesterCheckRowModel | undefined;
  @propertyArray() picked!: Array<any>;

  // The list itself. Search is on because the menu of a question is a dozen rows long and the way to
  // find one in a dozen is to type its name.
  public readonly list: ListModel<Action>;
  // And the menu it is shown in: the library's own dropdown popup - see the note at the top of this
  // file for the three things it answers that a panel of our own could not.
  public readonly popup: PopupModel;

  private owner: ITesterCheckMenuOwner;
  private params: ITesterCheckMenuParams;
  private rows: Array<TesterCheckRowModel>;

  constructor(owner: ITesterCheckMenuOwner, params: ITesterCheckMenuParams) {
    super();
    this.owner = owner;
    this.params = params;
    this.target = params.target;
    this.rows = buildCheckRows(params);
    this.list = new ListModel<Action>({
      items: this.rows.map(row => row.action),
      // A row is not a selection: pressing it writes a check into the case or takes one out, and what
      // is ticked is read back off the document. So nothing in the list is ever "selected".
      allowSelection: false,
      searchEnabled: true,
      onSelectionChanged: (item: IAction) => this.toggle(item.data as TesterCheckRowModel),
      listRole: "list",
      listItemRole: "listitem",
      listAriaLabel: testerText("recorder.menu.ariaLabel", params.target),
    });
    // Not "once it is long enough": the search box is where the menu is used from, and a box that comes
    // and goes with the number of checks an element happens to offer is one nobody learns to use.
    this.list.forceShowFilter = true;
    this.list.setSearchEnabled(true);
    this.list.itemComponent = CHECK_ROW_COMPONENT;
    this.list.setCssClasses(checkListCss, false);
    this.list.setOnTextSearchCallback((item, text) => (item.data as TesterCheckRowModel).matches(text));
    this.popup = new PopupModel(CHECK_MENU_COMPONENT, { model: this }, {
      // Under the button, centred on it, and shifted back inside the window by the library when the
      // element it adorns is near an edge.
      verticalPosition: "bottom",
      horizontalPosition: "center",
      showPointer: false,
      cssClass: "svt-checks__popup",
    });
    // A closed menu keeps nothing. A half-made check is abandoned - the picker under the list is a step
    // of adding one, and there is nowhere for it to wait once the menu that holds it is gone - and the
    // search goes with it, because a menu that reopens on the last thing that was typed into it reopens
    // showing one row of the dozen it offers.
    //
    // It hangs off onVisibilityChanged and not off the popup's own `onHide` option, because `onHide` is
    // called by the view (PopupBaseViewModel.onHiding), and a decision of the model layer may not
    // depend on a renderer being there to make it: a session driven with no DOM has to abandon a
    // half-made check exactly the way a rendered one does.
    this.popup.onVisibilityChanged.add((_sender, options) => {
      if (options.isVisible) return;
      this.setPending(undefined);
      this.list.filterString = "";
    });
    this.update([], false);
  }
  public getType(): string { return "svt-check-menu"; }

  // ---- the menu ------------------------------------------------------------------------------------

  public get isOpen(): boolean { return this.popup.isVisible; }
  public setOpen(open: boolean): void {
    if (open)this.popup.show();
    else this.popup.hide();
  }

  public get ariaLabel(): string { return testerText("recorder.menu.ariaLabel", this.target); }
  public get rowModels(): Array<TesterCheckRowModel> { return this.rows; }

  // What the session projects onto the menu whenever either could have changed: the checks the trailing
  // "expect" step holds for this target, and whether the session is busy. The values are re-read at the
  // same moment, because the survey behind an open menu is live and a menu that shows a stale value is
  // a menu that lies about what it is offering.
  public update(ticked: Array<string>, busy: boolean): void {
    this.busy = busy;
    const obj = this.params.obj;
    const survey = this.params.survey;
    this.rows.forEach(row => {
      row.valueText = describeNow(row.name, obj, survey);
      row.setTicked(ticked.indexOf(row.name) >= 0);
    });
    // A pending picker whose check is now in the case has been written: there is nothing left to
    // confirm.
    if (!!this.pending && this.pending.ticked)this.setPending(undefined);
  }

  // ---- the press -----------------------------------------------------------------------------------

  public toggle(row: TesterCheckRowModel | undefined): void {
    if (!row || this.busy) return;
    if (row.ticked) {
      this.setPending(undefined);
      this.owner.removeChecks(this.target, [row.name]);
      return;
    }
    if (row.hasPicker) {
      this.setPending(this.pending === row ? undefined : row);
      return;
    }
    this.owner.addChecks(this.target, [{ name: row.name, payloadType: row.offer.payloadType }]);
  }

  // ---- the picker ----------------------------------------------------------------------------------

  public get pickerKind(): CheckPicker | undefined {
    return !!this.pending ? this.pending.offer.picker : undefined;
  }
  // What the open picker offers: the choices as the "choices" check reads them, or the names
  // "values" / "noValues" / "variables" can assert - each of them read the way its own check reads it.
  public get pickerItems(): Array<ITesterCheckPickItem> {
    const kind = this.pickerKind;
    if (!kind) return [];
    if (kind === "choices") {
      return getVisibleChoiceTexts(this.params.obj)
        .map(item => ({ value: item.value, label: formatValue(item.value, 24), text: item.text }));
    }
    return getPickerKeys(kind, this.params.survey).map(name => ({ value: name, label: name }));
  }
  public get pickerEmptyText(): string {
    return this.pickerKind === "choices"
      ? testerText("recorder.menu.pickerChoicesEmpty")
      : testerText("recorder.menu.pickerEmpty");
  }
  // What the panel under the list says it is for. It is a sentence about a decision, so it is written
  // here and printed there.
  public get pickerNote(): string {
    return !this.pending ? "" : testerText("recorder.menu.pickerNote", this.pending.name);
  }
  public get pickerAddText(): string { return testerText("recorder.menu.pickerAdd"); }
  public get pickerCancelText(): string { return testerText("recorder.menu.pickerCancel"); }

  // "Show choices" (PROMPT-recorder.md section 5.5, and note 26): while the picker of the
  // `choices` check is open, the question's own dropdown is held open beside it, so the person ticks
  // against the list they can see rather than against a row of formatted values.
  //
  // Which popup that is is decided here and the holding is the view's, because a dropdownListModel
  // exists only once the question has been rendered - there is no such thing in a session driven
  // with no DOM, and this getter answers undefined there, which is the whole of what the model layer
  // has to say about it. Opening it records nothing: the capture reports what a person did to the
  // form, and this is not that.
  public get choicesPopup(): PopupModel | undefined {
    if (this.pickerKind !== "choices") return undefined;
    const list: any = (this.params.obj || {}).dropdownListModel;
    const popup = !!list ? list.popupModel : undefined;
    return popup instanceof PopupModel ? popup : undefined;
  }
  public isPicked(value: any): boolean {
    return this.picked.some(one => one === value);
  }
  public togglePick(value: any): void {
    this.picked = this.isPicked(value)
      ? this.picked.filter(one => one !== value)
      : this.picked.concat([value]);
  }
  public setPending(row: TesterCheckRowModel | undefined): void {
    if (this.pending === row) return;
    this.rows.forEach(one => one.setPicking(one === row));
    this.pending = row;
    // Everything is ticked to start with: the picker is there to narrow what the check covers, and the
    // unnarrowed expectation is the one the confirming run would write anyway.
    this.picked = !row
      ? []
      : row.offer.picker === "choices"
        ? getVisibleChoiceValues(this.params.obj)
        : getPickerKeys(row.offer.picker as CheckPicker, this.params.survey);
  }
  public addPending(): void {
    const row = this.pending;
    if (!row || this.busy) return;
    const request: ITesterCheckRequest = { name: row.name, payloadType: row.offer.payloadType };
    if (row.offer.picker === "choices") {
      const all = getVisibleChoiceValues(this.params.obj);
      // Only a narrowed list is a deviation. The full one is left to the confirming run, which reads it
      // the way the check does.
      if (this.picked.length !== all.length) request.expectedOverride = this.picked.slice();
    } else {
      request.keys = this.picked.map(value => String(value));
    }
    this.owner.addChecks(this.target, [request]);
    this.setPending(undefined);
  }

  public dispose(): void {
    this.popup.dispose();
    this.list.dispose();
    this.rows.forEach(row => row.dispose());
    this.rows = [];
    super.dispose();
  }
}

// Every row comes from SurveyTestCheckFactory.Instance and nothing is added to it here: a check the
// tester registers appears by itself, and one it does not register is not offered at all. What the
// tester says does not apply to this element is left out - that is the whole of the filtering, and it
// is the handler's own answer both times.
export function buildCheckRows(params: ITesterCheckMenuParams): Array<TesterCheckRowModel> {
  const offers = getCheckOffers(params.kind, params.target, params.obj).filter(offer => !offer.disabled);
  const rank = (offer: CheckOffer): number => {
    // A piped text is the case that regresses silently, and it is the reason a title check exists at
    // all: it goes to the top of the menu, above the properties everything else is read by.
    if (!!offer.piping) return -1;
    const index = FIRST.indexOf(offer.name);
    return index < 0 ? FIRST.length : index;
  };
  return offers.slice().sort((a, b) => rank(a) - rank(b)).map(offer => new TesterCheckRowModel(offer));
}

export function getPickerKeys(picker: CheckPicker, survey: SurveyModel): Array<string> {
  const anySurvey: any = survey;
  try {
    if (picker === "values") return Object.keys(survey.data || {});
    if (picker === "variables") {
      return typeof anySurvey.getVariableNames === "function" ? anySurvey.getVariableNames() : [];
    }
    if (picker === "noValues") {
      const data = survey.data || {};
      // The names that hold nothing right now: those are the ones "noValues" can assert.
      return survey.getAllQuestions()
        .map((question: any) => question.getValueName())
        .filter((name: string, index: number, all: Array<string>) => all.indexOf(name) === index)
        .filter((name: string) => !Object.prototype.hasOwnProperty.call(data, name));
    }
  } catch{
    return [];
  }
  return [];
}

// Display only. Every recorded expectation comes from the confirming run, never from here: this is the
// menu telling the author what they are about to assert, in the words of the model.
export function describeNow(check: string, obj: any, survey: SurveyModel): string {
  try {
    const anyObj: any = obj;
    const anySurvey: any = survey;
    switch(check) {
      case "value": return formatValue(anyObj.value, 40);
      case "empty": return formatValue(typeof anyObj.isEmpty === "function" ? anyObj.isEmpty() : undefined, 20);
      case "visible": return formatValue(anyObj.isVisible === true, 20);
      case "enabled": return formatValue(anyObj.isReadOnly !== true, 20);
      case "required": return formatValue(anyObj.isRequired === true, 20);
      case "comment": return formatValue(anyObj.comment, 30);
      case "choices": return formatValue(getVisibleChoiceValues(anyObj), 40);
      case "choiceTexts": return formatValue(getVisibleChoiceTexts(anyObj).map(item => item.text), 40);
      case "title": return formatValue(getRenderedText(anyObj, "locTitle"), 40);
      case "description": return formatValue(getRenderedText(anyObj, "locDescription"), 40);
      case "page": return formatValue(!!anyObj.page ? anyObj.page.name : undefined, 20);
      case "rowCount": return formatValue(anyObj.rowCount, 10);
      case "panelCount": return formatValue(anyObj.panelCount, 10);
      case "type": return formatValue(typeof anyObj.getType === "function" ? anyObj.getType() : undefined, 20);
      case "errors": return formatValue((anyObj.errors || []).map((error: any) => error.getText()), 40);
      case "hasErrors": return formatValue((anyObj.errors || []).length > 0, 20);
      case "errorCount": return formatValue((anyObj.errors || []).length, 10);
      case "state": return formatValue(anySurvey.state, 20);
      case "currentPage": return formatValue(!!anySurvey.currentPage ? anySurvey.currentPage.name : undefined, 20);
      case "pages": return formatValue((anySurvey.visiblePages || []).map((page: any) => page.name), 40);
      case "values": return formatValue(anySurvey.data, 40);
      case "noValues": return testerText("recorder.menu.nowNoValues");
      case "variables": return testerText("recorder.menu.nowVariables");
      default: return "";
    }
  } catch{
    return "";
  }
}
