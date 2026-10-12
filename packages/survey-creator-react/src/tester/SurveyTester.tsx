import * as React from "react";
import { List, Survey, SurveyActionBar, ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import type { Base } from "survey-core";
import { SETTINGS_COMPONENT } from "survey-creator-core/tester";
import type {
  SurveyTesterModel, TesterJsonModel, TesterRecorderModel, TesterRunnerModel, TesterSettingsModel,
} from "survey-creator-core/tester";
import { ConsolePane } from "./ConsolePane";
import { JsonEditorView } from "./JsonEditorView";
import { RecordingPane, SpectatorPane } from "./SurveyPane";
import { IssueLine } from "./TestRowView";
import { useModelUpdates } from "./useModel";
import "./TestRowView";
import "./adorners";

// The widget, drawn.
//
// One component and three screens, because SurveyTesterModel is one model with three child models and
// a `screen` property: there is no tab strip, no route and no history here, and the table of
// transitions is the model's. What this file is, all of it, is layout - two panes on the runner, two on
// the recorder, one editor on the JSON screen - plus the three alert lines, which are conditional
// paragraphs reading three properties rather than a component.
//
// Nothing below decides anything. Every value on the screen is a property of a model, every press is a
// method on one, and the toolbars, the lists, the menus and the two surveys are survey-core models that
// survey-react-ui already draws.

export function SurveyTester(props: { model: SurveyTesterModel }): React.JSX.Element {
  const { model } = props;
  useModelUpdates(model);
  return (
    <div className="svt-tester">
      {model.screen === "json"
        ? <JsonScreen model={model.json} />
        : model.screen === "recorder"
          ? <RecorderScreen model={model.recorder} />
          : <RunnerScreen model={model.runner} />}
    </div>
  );
}

// ---- the runner ------------------------------------------------------------------------------------

// Two panes and nothing above them: the model on the left, everything about the run on the right. What
// runs is the selection, so there is one Run button and the checkboxes decide what it means.
function RunnerScreen(props: { model: TesterRunnerModel }): React.JSX.Element {
  const { model } = props;
  useModelUpdates(model);
  return (
    <div className="svt-runner">
      <div className="svt-runner__body">
        {/* A console run has no model to watch, so the pane it would have filled shows the run itself,
            and the full log is read in that same place. */}
        <div className={model.consoleOnLeft ? "svt-runner__left svt-runner__left--flush" : "svt-runner__left"}>
          {model.consoleOnLeft
            ? <ConsolePane model={model.console} />
            : model.rendersSurvey
              ? <SpectatorPane model={model} />
              : (
                <div className="svt-survey-pane svt-survey-pane--empty">
                  <p>{model.paneHeadlessText}</p>
                </div>
              )}
        </div>

        <div className="svt-runner__right">
          <TestsPanel model={model} />
        </div>
      </div>
    </div>
  );
}

// One representation of a test in the whole widget: the row. The checkbox that selects it, the dot that
// says how it ended, the steps it ran and the assertion that failed are the same object, not four views
// of it spread over three panes. The panel also owns the run: what the checkboxes say is what the Run
// button does, so there is no second button for a subset.
function TestsPanel(props: { model: TesterRunnerModel }): React.JSX.Element {
  const { model } = props;
  useModelUpdates(model);
  return (
    <section className="svt-tests">
      {/* "Run N tests", the mode picker, Stop, Resume, Settings - and the line that says what happened.
          The picker is an Action with a PopupModel over a ListModel of the two modes - survey-core's
          own createDropdownActionModel - so the click-away layer, the positioning and the menu a11y
          roles come from the library. */}
      <div className="svt-tests__actions">
        <SurveyActionBar model={model.toolbar} handleClick={false} />
        {/* Not an Action: it is the sentence a run leaves behind, and an action bar item is a verb. */}
        <span className="svt-tests__summary">{model.summaryText}</span>
      </div>

      {/* The three alert channels, and they coexist rather than replace each other: all three render at
          once when all three have something to say. */}
      {!model.canRun && !!model.blockedReason && (
        <p className="svt-alert svt-alert--error">
          {model.blockedReason}
          {/* The JSON screen is the bench the document is repaired on, and it is never blocked. */}
          {model.canFixJson && (
            <button
              className="svt-link"
              onClick={() => model.fixJson.action?.()}
            >{model.fixJson.title}</button>
          )}
        </p>
      )}
      {!!model.runNotice && <p className="svt-alert svt-alert--warning">{model.runNotice}</p>}
      {!!model.transitionNotice && (
        <p className="svt-alert svt-alert--info">
          {model.transitionNotice}
          {model.canDismissNotice && (
            <button
              className="svt-link"
              onClick={() => model.dismiss()}
            >{model.dismissNotice.title}</button>
          )}
        </p>
      )}

      <header className="svt-tests__head">
        <strong className="svt-tests__title">{model.testsTitleText}</strong>
        <span className="svt-tests__links">
          <SurveyActionBar model={model.listHead} handleClick={false} />
        </span>
      </header>

      {model.canCreateTest && model.naming && <NewTestForm model={model} />}

      {model.hasSuiteIssues && (
        <div className="svt-tests__suite-issues">
          {model.suiteIssueViews.map(issue => (
            <IssueLine
              key={issue.key}
              issue={issue}
              onRevealCase={path => model.revealCase(path)}
              onRevealSurvey={path => model.revealSurvey(path)}
            />
          ))}
          {!!model.mismatchText && (
            <p className="svt-diff svt-diff--error">
              <strong>{model.mismatchTitle}</strong>
              <span>{model.mismatchText}</span>
              <em>{model.mismatchNote}</em>
            </p>
          )}
        </div>
      )}

      {/* The list is the thing the Run button acts on, so selection and the list are one model. Each
          row is the svt-test-row component, which TestRowView registers. */}
      <div className="svt-tests__list">
        {model.hasNoTests
          ? <p className="svt-tests__empty">{model.emptyText}</p>
          : <List model={model.tests} />}
      </div>

      {/* The pace is a host setting, not part of the suite, so it sits with the run rather than in the
          test format. */}
      <div className="svt-tests__delay">
        <label>
          {model.delayLabel}
          <input
            className="svt-input svt-input--small"
            type="number" min={0} max={5000} step={50}
            value={model.stepDelayMs}
            onChange={event => model.setStepDelayMs(event.target.value as unknown as number)}
          />
          {model.delayUnit}
        </label>
        <select
          className="svt-input svt-input--small"
          value={model.delayGranularity}
          onChange={event => model.setDelayGranularity(event.target.value as any)}
          aria-label={model.delayUnit}
        >
          {model.granularityChoices.map(choice => (
            <option key={choice.value} value={choice.value}>{choice.text}</option>
          ))}
        </select>
      </div>

      <footer className="svt-tests__foot">
        <span>{model.checkFootText}</span>
        {/* A session is addressed by name, so a test without one cannot be recorded into - and it is
            said where the name can be given, which is the row's own expansion. */}
        {!!model.unnamedNote && <span className="svt-tests__note">{model.unnamedNote}</span>}
        {model.canToggleLog && (
          <button className="svt-link" onClick={() => model.toggleLog()}>{model.logToggleTitle}</button>
        )}
      </footer>
    </section>
  );
}

// Creating a test is the act of starting to record it, so this form asks one question and has one
// button. Everything else a test can carry - its description, its start, its options and its variables -
// is asked for on the recorder screen, in the Test options panel under the step list, where there is
// something to describe and something to start from. A form that asked four questions to name a test was
// asking them at the one moment nobody could answer them.
//
// The box it holds is a property of the runner and not state of this component: it has to survive a
// repaint of the list under it, and the sentence a refusal prints has to be the one createTest()
// returned rather than a second opinion about names formed here.
function NewTestForm(props: { model: TesterRunnerModel }): React.JSX.Element {
  const { model } = props;
  return (
    <div className="svt-new-test" onKeyDown={event => event.stopPropagation()}>
      <div className="svt-new-test__row">
        <input
          className="svt-input"
          autoFocus
          placeholder={model.newTestPlaceholder}
          aria-label={model.newTestAriaLabel}
          value={model.newTestName}
          onChange={event => model.setNewTestName(event.target.value)}
          onKeyDown={event => {
            if (event.key === "Enter") { event.preventDefault(); model.confirmNewTest(); } else if (event.key === "Escape") { event.preventDefault(); model.toggleNaming(); }
          }}
        />
        <button
          className="svt-button svt-button--primary"
          disabled={!model.canConfirmNewTest}
          onClick={() => model.confirmNewTest()}
        >{model.newTestCreateText}</button>
        <button
          className="svt-button"
          onClick={() => model.toggleNaming()}
        >{model.newTestCancelText}</button>
      </div>

      {!!model.newTestProblem && <p className="svt-new-test__refused">{model.newTestProblem}</p>}
      <p className="svt-new-test__hint">{model.newTestHint}</p>
    </div>
  );
}

// ---- the JSON screen -------------------------------------------------------------------------------

// The bench the suite document is repaired on, and the one screen that is never blocked. It edits the
// whole document and never an extracted per-test fragment: the text is the source of truth, it carries
// the author's formatting and comments, and a screen that handed back a re-serialised sub-object would
// lose them on every visit.
function JsonScreen(props: { model: TesterJsonModel }): React.JSX.Element {
  const { model } = props;
  useModelUpdates(model);
  return (
    <div className="svt-editor">
      <div className="svt-toolbar">
        <SurveyActionBar model={model.head} handleClick={false} />
        <strong className="svt-toolbar__title">{model.headerText}</strong>
        <span className="svt-toolbar__spacer" />
        <span className={model.badgeCss}>{model.badgeText}</span>
      </div>

      <JsonEditorView model={model} />

      <div className={"svt-footer" + (!!model.parseError ? " svt-footer--error" : "")}>
        <span>{model.issueCountText}</span>
        {model.issues.map(issue => (
          <p key={issue.key} className={issue.css}>
            <strong>{issue.severity}: {issue.code}</strong>
            <span>{issue.message}</span>
            {!!issue.suggestion && <em>{issue.suggestion}</em>}
            {issue.offset !== undefined && (
              <button className="svt-link" onClick={() => model.revealIssue(issue)}>{issue.path}</button>
            )}
          </p>
        ))}
        {!!model.parseError && <span className="svt-footer__error">{model.parseError}</span>}
      </div>
    </div>
  );
}

// ---- the recorder ----------------------------------------------------------------------------------

// A selected test is a recording test: there is no paused-and-stopped here, so the only states this
// screen has are the session's own. Arriving here is a transition the widget made and not the act of
// choosing a test, so the header says which test it is about.
function RecorderScreen(props: { model: TesterRecorderModel }): React.JSX.Element {
  const { model } = props;
  useModelUpdates(model);
  return (
    <div className="svt-recorder">
      <header className="svt-recorder__head">
        <h2 className="svt-recorder__name">{model.nameText}</h2>
        <span className="svt-recorder__count">{model.stepCountText}</span>
        <div className="svt-recorder__acts">
          <SurveyActionBar model={model.bar} handleClick={false} />
          <ZoomControl model={model} />
        </div>
      </header>

      {/* The status line: the options this session records under, the start in force and the pinned
          clock. Always on the screen, because a case recorded against the wrong "now" is a case that
          fails in a year and nobody can see why. */}
      {!!model.statusText && <p className="svt-note svt-note--info">{model.statusText}</p>}

      {/* The three alert channels of the recorder, in the order they matter. */}
      {!!model.blockedReason && (
        <p className="svt-note svt-note--bad">
          {model.blockedReason}
          <br />
          <button
            className="svt-button svt-button--quiet"
            onClick={() => model.fixJson.action?.()}
          >{model.fixJson.title}</button>
          <button
            className="svt-button svt-button--quiet"
            onClick={() => model.goToRunner()}
          >{model.backToTestsText}</button>
        </p>
      )}
      {!!model.notice && (
        <p className="svt-note svt-note--warn">
          {model.notice}
          {!!model.noticeDetail && <><br /><em>{model.noticeDetail}</em></>}
        </p>
      )}
      {!!model.staleNotice && (
        <p className="svt-note svt-note--warn">
          {model.staleNotice}
          <button
            className="svt-button svt-button--quiet"
            onClick={() => model.verifyStale.action?.()}
          >{model.verifyStale.title}</button>
        </p>
      )}

      <div className="svt-recorder__body">
        <div className="svt-recorder__col">
          <section className="svt-card">
            <RecordingPane model={model} />
          </section>
        </div>

        <div className="svt-recorder__col">
          {/* No card header: the step matrix carries its own title bar, and the way out of the
              recorder is a title action in it. Two "Steps" over one list is what that replaced. */}
          <section className="svt-card">
            <StepsCard model={model} />
            {!!model.failNote && (
              <footer className="svt-card__foot">
                <span className="svt-card__note svt-card__note--bad">{model.failNote}</span>
              </footer>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

// The steps of the case, as the survey the model builds. `inert` binds to the session's own
// stepsLocked - the synchronous fact - and never to replayState, which is only the spinner: a freeze
// that arrived 300 ms late would let a press land on a case that is about to be replaced.
function StepsCard(props: { model: TesterRecorderModel }): React.JSX.Element {
  const steps = props.model.steps;
  useModelUpdates(steps);
  return (
    <div
      className={"svt-steps" + (steps.locked ? " svt-steps--frozen" : "") +
        (steps.atEnd ? " svt-steps--at-end" : "")}
      aria-busy={steps.locked || undefined}
      {...(steps.locked ? { inert: "" } : {})}
    >
      <Survey model={steps.survey} />
    </div>
  );
}

// The zoom, in the screen's own header because it is about the whole of the form under it and not about
// anything in it. The order is the Survey Creator's - zoom in, the reading, zoom out - and so is what
// the reading does when it is pressed: it goes back to 100%.
function ZoomControl(props: { model: TesterRecorderModel }): React.JSX.Element {
  const { model } = props;
  return (
    <div className="svt-zoom" role="group" aria-label={model.zoomGroupLabel}>
      <span className="svt-zoom__label">{model.zoomLabel}</span>
      <button
        type="button" className="svt-zoom__btn"
        disabled={!model.canZoomIn} title={model.zoomInLabel} aria-label={model.zoomInLabel}
        onClick={() => model.zoomBy(1)}
      >{model.zoomInMark}</button>
      <button
        type="button" className="svt-zoom__now"
        disabled={model.isZoomDefault} title={model.zoomResetLabel} aria-label={model.zoomResetLabel}
        onClick={() => model.resetZoom()}
      >{model.zoomText}</button>
      <button
        type="button" className="svt-zoom__btn"
        disabled={!model.canZoomOut} title={model.zoomOutLabel} aria-label={model.zoomOutLabel}
        onClick={() => model.zoomBy(-1)}
      >{model.zoomOutMark}</button>
    </div>
  );
}

// ---- the settings popup ----------------------------------------------------------------------------

// The options, as the form they are: one survey definition in the model layer and a <Survey> tag here,
// in place of the two hundred and sixty lines of hand-written inputs the prototype's Setup tab was. It
// is drawn inside the popup the Settings action on the runner's toolbar opens, which is why this is a
// registration and not a tag anybody writes.
export class SettingsView extends SurveyElementBase<{ model: TesterSettingsModel }, any> {
  public get model(): TesterSettingsModel { return this.props.model; }
  protected getStateElement(): Base { return this.model; }

  protected renderElement(): React.JSX.Element {
    return (
      <div className="svt-settings">
        <Survey model={this.model.survey} />
        <pre className="svt-code svt-code--tiny">{this.model.resolvedText}</pre>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(SETTINGS_COMPONENT, props =>
  React.createElement(SettingsView, props as any));
