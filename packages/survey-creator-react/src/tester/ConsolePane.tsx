import * as React from "react";
import { useEffect, useRef } from "react";
import { SurveyActionBar } from "survey-react-ui";
import type { TesterConsoleModel } from "survey-creator-core/tester";
import { useModelUpdates } from "./useModel";

// The console pane. It is a file and not a registration: nothing a model hands out names it, because
// nothing in survey-core renders a searchable transcript and there is no list for it to be a row of.
//
// The filtering, the footer count, the three verbs and every string on it are the model's; what is left
// here is the markup and the one thing a model cannot do, which is scroll a real element.

export function ConsolePane(props: { model: TesterConsoleModel }): React.JSX.Element {
  const { model } = props;
  useModelUpdates(model);
  const bottom = useRef<HTMLDivElement | null>(null);
  const rows = model.visibleRows;

  useEffect(() => {
    if (!model.autoScroll || !bottom.current) return;
    bottom.current.scrollIntoView({ block: "end" });
  }, [rows.length, model.autoScroll]);

  return (
    <section className="svt-console">
      <header className="svt-console__head">
        <strong>{model.title}</strong>
        {/* The search input and the failures checkbox are inputs, not actions, so they stay markup
            bound to the two properties; the filtering they drive is the model's. */}
        <input
          className="svt-input svt-input--small" type="search" placeholder={model.searchPlaceholder}
          aria-label={model.searchPlaceholder}
          value={model.searchValue} onChange={event => { model.searchValue = event.target.value; }}
        />
        <label className="svt-console__toggle">
          <input
            type="checkbox"
            checked={model.failuresOnly}
            onChange={event => { model.failuresOnly = event.target.checked; }}
          />
          {model.failuresLabel}
        </label>
        <SurveyActionBar model={model.head} handleClick={false} />
      </header>
      <div className="svt-console__rows">
        {rows.map(row => (
          <div key={row.id} className={model.rowCss(row)}>
            <span className="svt-console-row__time">{model.timeText(row)}</span>
            <span className="svt-console-row__body">
              {row.source === "host" && <span className="svt-console-row__host">host</span>}
              <span className="svt-console-row__text">{row.text}</span>
              {!!row.detail && <span className="svt-console-row__detail">{row.detail}</span>}
              {!!row.event && (
                <button
                  className="svt-link svt-link--tiny"
                  onClick={() => model.toggleRaw(row.id)}
                >{model.rawToggleText(row.id)}</button>
              )}
              {model.isRawOpen(row.id) && !!row.event && (
                <pre className="svt-code svt-code--tiny">{model.rawJson(row)}</pre>
              )}
            </span>
          </div>
        ))}
        {model.hasNoRows && <p className="svt-console__empty">{model.emptyText}</p>}
        <div ref={bottom} />
      </div>
      <footer className="svt-console__foot">{model.footText}</footer>
    </section>
  );
}
