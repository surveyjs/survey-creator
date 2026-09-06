import * as React from "react";
import { createContext, useContext, useEffect } from "react";
import { List, Popup, ReactElementFactory, SurveyElementBase, SurveyPage } from "survey-react-ui";
import type { Base } from "survey-core";
import {
  TESTER_ADORNED_CELL, TESTER_ADORNED_PAGE, TESTER_ADORNED_PANEL, TESTER_ADORNED_QUESTION,
} from "survey-creator-core/tester";
import type {
  TesterAdornerModel, TesterAdornersModel, TesterCheckMenuModel, TesterCheckRowModel,
} from "survey-creator-core/tester";
import { useModelUpdates } from "./useModel";

// The check affordance, as an adorner.
//
// The Recorder used to draw one absolutely placed layer over the form and measure every element into
// it. A measurement is a photograph: the moment the pane scrolls, a row is added or an error message
// appears, every button in the layer is standing where its element used to be. Re-measuring on a
// mutation and a scroll only narrows the window in which the picture is wrong.
//
// So the buttons are not placed over the form. They are rendered *inside* the element they are about,
// exactly the way the Creator adorns a question in the designer: survey-core asks the model which
// component should wrap an element (onElementWrapperComponentName, plus pageComponent for the page),
// survey-react-ui renders that component with the element's own markup as a child, and the component
// puts the survey's markup and the adorner in one positioned box. Nothing is measured, so nothing can
// drift: the button is a child of the question and moves, scrolls, reflows and disappears with it.
//
// Which element gets which wrapper is not decided here. It follows from what the element is - it is
// addressable, or it is chrome the grammar has no name for - so TesterAdornersModel.attach() installs
// the answer on the model the tester built, and Vue and Angular register these same four names against
// the same answers. What is decided here is what a wrapper draws, which is: the element's own markup,
// untouched, and a slot beside it.
//
// Only one target has no element of its own. "survey" is it, and it stands in the corner of the pane
// (SurveyAdorner, drawn by the recording pane itself); the current page is addressed through the page
// component the renderer asks the model for.

// The adorner list, for the components between the pane and an adorner. It is a context and not a prop
// because those components belong to survey-react-ui - the pane cannot hand anything to them.
export const AdornerContext = createContext<TesterAdornersModel | undefined>(undefined);

// One wrapper: the element's own markup inside the adorned box, with the adorner beside it.
//
// It subscribes to the list rather than to one adorner, and it has to: an element that has not rendered
// has no adorner yet - the list is built from the model's own render events, which fire after this
// component's first paint - so what this draws changes when the list grows the entry for it.
function Adorned(props: {
  element: React.JSX.Element,
  obj: any,
  place: "question" | "panel" | "cell" | "page",
}): React.JSX.Element {
  const adorners = useContext(AdornerContext);
  useModelUpdates(adorners);
  const adorner = !!adorners ? adorners.forElement(props.obj) : undefined;
  return (
    <div className={"svt-adorned svt-adorned--" + props.place}>
      {props.element}
      {!!adorner && !!adorners && <Adorner model={adorner} owner={adorners} />}
    </div>
  );
}

// One button, and the menu it opens. The button is inside the element's box, so it travels with the
// element; the menu is a survey-core popup, so it is a layer over the page that is positioned against
// the button every time it opens - which is what keeps it out from under the form and lets the library
// close it when anything the button sits in scrolls.
export function Adorner(props: {
  model: TesterAdornerModel,
  owner: TesterAdornersModel,
}): React.JSX.Element {
  const { model, owner } = props;
  useModelUpdates(model);

  // The other direction of "is this menu open". The popup closes itself for three reasons this
  // component never hears about - a press outside it, Escape, and a scroll of any parent of the button
  // - so what the button knows comes from the popup rather than from whoever pressed it.
  const menu = model.hasMenu ? model.menu : undefined;
  useEffect(() => {
    if (!menu) return undefined;
    const onChanged = (_sender: any, options: { isVisible: boolean }): void => {
      if (!options.isVisible && owner.openTarget === model.target) owner.setOpen(undefined);
    };
    menu.popup.onVisibilityChanged.add(onChanged);
    return () => menu.popup.onVisibilityChanged.remove(onChanged);
  }, [menu, model, owner]);

  return (
    <div
      className={"svt-adorner-slot svt-adorner-slot--" + model.place +
        (model.isOpen ? " svt-adorner-slot--open" : "")}
      data-recorder-ui=""
    >
      <button
        type="button"
        className={"svt-adorner" + (model.isOpen ? " svt-adorner--open" : "") +
          (model.place === "survey" ? " svt-adorner--survey" : "") +
          (model.hasChecks ? " svt-adorner--counted" : "")}
        aria-expanded={model.isOpen}
        aria-label={model.ariaLabel}
        title={model.ariaLabel}
        disabled={model.disabled}
        // The button is a child of the question, so the press has to stop here: the survey underneath
        // must not read it as a click on a title, a label or a panel header.
        onClick={event => {
          event.stopPropagation();
          owner.toggle(model.target);
        }}
      >
        <span className="svt-adorner__mark" aria-hidden="true">{model.markText}</span>
        {model.hasChecks && <span className="svt-adorner__count">{model.tickedCount}</span>}
      </button>
      {/* The menu is nothing but the list: the search box and the checks. The target it is about is
          named on the button it hangs from, and the ways out of a menu - Escape, a press outside it, a
          scroll of the pane - are the ones the popup already has. The model builds it on the first
          press and keeps it afterwards, so this renders nothing until there is one. */}
      {!!menu && <Popup model={menu.popup} />}
    </div>
  );
}

// The survey's own adorner: the one target with no element anywhere on the page. The pane draws it, so
// it is exported rather than registered.
export function SurveyAdorner(props: { model: TesterAdornersModel }): React.JSX.Element | null {
  const { model } = props;
  useModelUpdates(model);
  const adorner = model.surveyAdorner;
  if (!adorner) return null;
  return <Adorner model={adorner} owner={model} />;
}

// The four wrappers survey-react-ui asks for by name. Each one is handed the element's own rendered
// markup and returns it untouched inside a positioned box - the survey on screen keeps the spacing a
// respondent would see, because nothing is inserted into the markup and nothing is reserved above it.
ReactElementFactory.Instance.registerElement(TESTER_ADORNED_QUESTION, (props: any) =>
  React.createElement(Adorned, { element: props.element, obj: props.question, place: "question" }));

ReactElementFactory.Instance.registerElement(TESTER_ADORNED_PANEL, (props: any) =>
  React.createElement(Adorned, { element: props.element, obj: props.question, place: "panel" }));

// A matrix cell is wrapped inside its own <td>, never around it: the wrapper takes the cell's content.
// The renderer hands the cell over as its own object, and what carries the target is the question
// inside it - which is what the model resolves for us.
ReactElementFactory.Instance.registerElement(TESTER_ADORNED_CELL, (props: any) =>
  React.createElement(CellAdorned, props));

function CellAdorned(props: any): React.JSX.Element {
  const adorners = useContext(AdornerContext);
  useModelUpdates(adorners);
  const adorner = !!adorners ? adorners.forCell(props.cell) : undefined;
  return (
    <div className="svt-adorned svt-adorned--cell">
      {props.element}
      {!!adorner && !!adorners && <Adorner model={adorner} owner={adorners} />}
    </div>
  );
}

// A page has no wrapper event of its own, but the renderer does ask the model which component draws a
// page - the same extension point one step up. `pageComponent` is one name for every page, so a page
// the model offers no adorner for (one that draws no header, and so has no corner of its own to stand
// a button in) is rendered exactly as the renderer would have rendered it, box and all.
ReactElementFactory.Instance.registerElement(TESTER_ADORNED_PAGE, (props: any) =>
  React.createElement(PageAdorned, props));

function PageAdorned(props: any): React.JSX.Element {
  const adorners = useContext(AdornerContext);
  useModelUpdates(adorners);
  const adorner = !!adorners ? adorners.forElement(props.page) : undefined;
  if (!adorner || !adorners) return <SurveyPage {...props} />;
  return (
    <div className="svt-adorned svt-adorned--page">
      <SurveyPage {...props} />
      <Adorner model={adorner} owner={adorners} />
    </div>
  );
}

// ---- the menu inside the popup ---------------------------------------------------------------------

// What stands inside the popup: the searchable list of checks, and - for a check that is not complete
// until something is picked - the picker of it under the list.
//
// The popup is survey-core's, so this component is handed the model as its props (PopupModel carries
// contentComponentData through to whichever framework draws contentComponentName) and subscribes to it.
// Nothing about where the menu is, how it is positioned, when it closes or what a scroll does to it is
// decided here: all of that is the popup's, and this is its content.
export class CheckMenuView extends SurveyElementBase<{ model: TesterCheckMenuModel }, any> {
  public get model(): TesterCheckMenuModel { return this.props.model; }
  protected getStateElement(): Base { return this.model; }

  protected renderElement(): React.JSX.Element {
    const model = this.model;
    return (
      <div className="svt-checks" role="group" aria-label={model.ariaLabel}>
        {/* The search box and the checks, and nothing else. What a row is for is legible from the row -
            the name of the property, what the model holds for it, and a box saying whether the case
            already asserts it - so a paragraph above the list explaining that was a paragraph nobody
            reads twice. */}
        <List model={model.list} />
        {!!model.pending && (
          <div className="svt-check-row__pending">
            <p className="svt-check-row__reason">{model.pickerNote}</p>
            <Picker model={model} />
            <div className="svt-check-row__confirm">
              <button
                className="svt-button svt-button--primary"
                disabled={model.busy}
                onClick={() => model.addPending()}
              >{model.pickerAddText}</button>
              <button
                className="svt-button"
                onClick={() => model.setPending(undefined)}
              >{model.pickerCancelText}</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// The keys or the choices a check covers, as the model reads them now - so "is this one still offered"
// can be answered by looking. Unticking one narrows the expectation, and the confirming run reports it
// when it no longer holds.
//
// "Show choices" is the effect below and nothing more: while the picker of the `choices` check is open,
// the question's own dropdown is held open beside it, so the person ticks against the list they see.
// Which popup that is is the model's answer - it is undefined for a question that has not rendered one
// - and closing the menu closes it, because the menu unmounts this component with it.
function Picker(props: { model: TesterCheckMenuModel }): React.JSX.Element {
  const { model } = props;
  const held = model.choicesPopup;
  useEffect(() => {
    if (!held) return undefined;
    held.show();
    return () => held.hide();
  }, [held]);

  const items = model.pickerItems;
  if (!items.length) return <p className="svt-check-row__reason">{model.pickerEmptyText}</p>;
  return (
    <ul className="svt-picker">
      {items.map(item => (
        <li key={String(item.value)}>
          <label className="svt-picker__hit">
            <input
              type="checkbox"
              checked={model.isPicked(item.value)}
              onChange={() => model.togglePick(item.value)}
            />
            <span className="svt-mono">{item.label}</span>
            {!!item.text && <span className="svt-picker__text">{item.text}</span>}
          </label>
        </li>
      ))}
    </ul>
  );
}

// One row of the check menu, inside survey-core's own list. The list is the library's - the same
// searchable one a dropdown opens - and the only thing it wants from us is the component a row renders
// under. So this draws one TesterCheckRowModel, subscribes to that model, and every sentence on the
// line is a property of it.
//
// The box is a checkbox and not a tick: it says at a glance that a row is a thing you turn on and off
// rather than one you choose. The press is the list item's, which is why this one declines its own.
export class CheckRowView extends SurveyElementBase<{ item: any }, any> {
  public get row(): TesterCheckRowModel { return this.props.item.data as TesterCheckRowModel; }
  protected getStateElement(): Base { return this.row; }

  protected renderElement(): React.JSX.Element {
    const row = this.row;
    return (
      <>
        <input
          type="checkbox"
          className="svt-check-row__box"
          checked={row.ticked}
          readOnly
          tabIndex={-1}
          aria-label={row.name}
          // The row is the button. Letting the box take the press as well would toggle it twice - once
          // in the DOM and once in the case - and the two would disagree until the next repaint.
          onClick={event => event.preventDefault()}
        />
        <span className="svt-check-row__name svt-mono">{row.name}</span>
        {row.piping && <span className="svt-pill svt-pill--warn">piping</span>}
        {row.hasPicker && !row.ticked &&
          <span className="svt-check-row__more" aria-hidden="true">{row.markText}</span>}
        <span className="svt-check-row__value svt-mono">{row.valueText}</span>
      </>
    );
  }
}

ReactElementFactory.Instance.registerElement("svt-check-menu", props =>
  React.createElement(CheckMenuView, props as any));

ReactElementFactory.Instance.registerElement("svt-check-row", props =>
  React.createElement(CheckRowView, props as any));
