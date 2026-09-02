/* eslint-disable surveyjs/eslint-plugin-i18n/only-english-or-code */
// Every person-readable string the Tests widget says, in one file.
//
// The widget cannot use editorLocalization (overview section 3.1: nothing under src/tester imports
// from src/ outside it), so it carries its own table. This is it, and after the sweep of prompt 03 a
// hard-coded sentence anywhere else under src/tester is a bug - tests-tester/model/localization.test.ts
// says so by walking this table against the accessor calls in the source.
//
// A leaf is a string when nothing varies and a function when something does. The function holds the
// whole sentence, composition and punctuation included, because that is what a translator needs: a
// language that puts the count after the noun cannot be served by a source file that glues " tests"
// onto a number. That is also why the concatenations moved here verbatim rather than being turned into
// placeholders - the value each one produces is asserted character for character by the ported tests.
//
// The whole file is exempted from only-english-or-code above: the typography of the console transcript
// and of the status marks is non-ASCII, it is part of what the tests pin, and one exemption here
// replaces the per-line escapes the port carried (see promts/creator-tester-notes.md entry 3).

export const enTesterStrings = {
  common: {
    unnamed: "(unnamed)",
    noTarget: "(no target)",
    noCheck: "(no check)",
    notRun: "not run",
    truncated: (head: string): string => head + "…",
  },

  // How a status is drawn. Keyed by what statusTone.ts reduces a LiveStatus to, plus the caret the
  // cursor stands on.
  marks: {
    passed: "✓",
    failed: "✕",
    running: "…",
    idle: "·",
    next: "▸",
  },

  // The transcript. One row per event, and the order is the information - so these read as a log and
  // not as prose.
  console: {
    runStarted: (suiteName: string, enabled: number, total: number): string =>
      "run started — suite" + (!!suiteName ? " \"" + suiteName + "\"" : "") + ", " + enabled + " of " +
      total + " tests to run",
    testStarted: (indexText: string, name: string): string => "test " + indexText + " \"" + name + "\"",
    surveyCreated: "survey model created — this is the model the commands of this test run on",
    stepStarted: (stepIndex: number, command: string, targets: string, stepName: string): string =>
      "step " + stepIndex + ": " + command + " → " + targets + stepName,
    stepName: (name: string): string => " — " + name,
    targetStarted: (command: string, target: string): string => command + " → " + target,
    targetCompleted: (command: string, target: string): string => command + " → " + target + " done",
    checkText: (passed: boolean, head: string, message: string): string =>
      (passed ? "✓ " : "✗ ") + head + (!!message ? " — " + message : ""),
    checkDetail: (expected: string, actual: string): string =>
      "expected " + expected + ", actual " + actual,
    issueText: (severity: string, code: string, where: string, message: string): string =>
      severity + ": " + code + where + " — " + message,
    issueAt: (path: string): string => "at " + path,
    stepCompleted: (stepIndex: number, status: string, checks: number): string =>
      "step " + stepIndex + " " + status + (!!checks ? " (" + checks + " checks)" : ""),
    testCompleted: (name: string, status: string): string => "test \"" + name + "\" " + status,
    runCompleted: (status: string, summary: any): string =>
      "run " + status + " — " + summary.passed + " passed, " + summary.failed + " failed, " +
      summary.errored + " errored, " + summary.skipped + " skipped, " + summary.canceled +
      " canceled; " + summary.checks + " checks (" + summary.failedChecks + " failed), " +
      summary.warnings + " warnings",
    clear: "clear",
    copy: "copy",
    download: "download",
    foot: (total: number, shown: number): string =>
      total + " rows" + (shown !== total ? ", " + shown + " shown" : ""),
  },

  // "steps 3–4", "step 3", "no step". Said everywhere a part-run is reported, so the console line and
  // the panel's own line never describe one run differently.
  segment: {
    none: "no step",
    one: (from: number): string => "step " + from,
    range: (from: number, last: number): string => "steps " + from + "–" + last,
  },

  // The resolved result is canonical; a disagreement with the tree the events built is reported rather
  // than smoothed over, because it can only be a bug in this widget or in the tester.
  mismatch: {
    testCount: (rows: number, results: number): string =>
      "the event stream produced " + rows + " test rows, the result holds " + results,
    testStatus: (name: string, live: string, reported: string): string =>
      "test \"" + name + "\": the events said " + live + ", the result says " + reported,
    stepCount: (name: string, rows: number, results: number): string =>
      "test \"" + name + "\": " + rows + " step rows against " + results + " step results",
    segmentTestCount: (name: string, results: number): string =>
      "the run of a part of \"" + name + "\" produced " + results +
      " test results, and a segment is one test",
    segmentNoRow: (name: string): string =>
      "the tree holds no row for \"" + name + "\", which is the test that ran",
    segmentStepCount: (name: string, rows: number, from: number, results: number): string =>
      "test \"" + name + "\": " + rows + " step rows from step " + from + " on, against " + results +
      " step results",
  },

  // Editor-time diagnostics of the suite document itself. What the validator says is the tester's and
  // is not translated here; these two are this widget's own.
  validate: {
    notAnObject: "A test suite must be a JSON object.",
    unexpectedError: (message: string): string =>
      "The validator failed on this document: " + message,
  },

  // What the run itself logs, as opposed to what the tester emits.
  run: {
    paused: "Paused on a failing check. Press Resume to continue or Stop to end the run.",
    observerFailed: (message: string): string => "The host observer failed: " + message,
    observerFailedDetail: "This is a bug in this application, not in the test case. The run continues.",
  },

  // The names a case can address, and the hints beside the ones it cannot.
  targets: {
    unaddressable: (note: string): string => note + " · no name a case can address",
    calculatedValue: "calculated value",
    rowNotCreated: "row this definition does not create",
    panelNotCreated: "panel this definition does not create",
    cellOf: (name: string): string => "cell of " + name,
    panelOf: (name: string): string => "panel of " + name,
    questionOf: (name: string): string => "question of " + name,
  },

  // The demo onServerValidateQuestions handler the Setup form can attach. It is a fixture rather than
  // chrome, and it is here because a person reads it inside the survey under test.
  demo: {
    serverValidationError: "This address is already registered (checked on the server).",
  },

  // The runner screen: the toolbar, the list head, the three alert channels and the summary line.
  runner: {
    modeName: {
      ui: "UI",
      console: "Console",
    },
    modeNote: {
      ui: "drives the model on screen, at the delay set below",
      console: "no model rendered and nothing waited for — a unit-test run",
    },
    modeTooltip: "how the run is watched",
    listAriaLabel: "the tests of the suite",
    run: (count: number): string => "Run " + count + " test" + (count === 1 ? "" : "s"),
    stop: "Stop",
    resume: "Resume",
    all: "All",
    none: "None",
    failing: "Failing",
    copyLog: "Copy log",
    newTest: "New test",
    cancel: "Cancel",
    settings: "Settings",
    settingsTooltip: "the run options and the test options, as a form",
    fixJson: "Fix it in the JSON",
    dismiss: "Dismiss",
    logToModel: "← the model",
    logToFull: "full log →",
    checkFoot: (total: number, failed: number): string =>
      total + " check" + (total === 1 ? "" : "s") + (failed > 0 ? ", " + failed + " failed" : ""),
    unnamedNote: (count: number): string =>
      count + " " + (count === 1 ? "test has" : "tests have") +
      " no name and cannot be recorded into. Expand " + (count === 1 ? "its" : "their") +
      " row and give " + (count === 1 ? "it" : "them") + " one.",
    paneTitle: "(test)",
    paneNoteRunning: "driven by the tester, input disabled",
    paneNoteFailed: "model at the failing step, input disabled",
    paneNoteLast: "model of the last test, input disabled",
    summary: {
      notRunYet: "not run yet",
      passed: (count: number): string => count + " passed",
      failed: (count: number): string => count + " failed",
      errored: (count: number): string => count + " errored",
      skipped: (count: number): string => count + " skipped",
      canceled: (count: number): string => count + " canceled",
      progress: (done: number, planned: number): string => done + "/" + planned + " tests",
      noTestRan: "no test ran",
      seconds: (elapsedMs: number): string => (elapsedMs / 1000).toFixed(1) + "s",
      part: (segment: string, testName: string): string => " · " + segment + " of \"" + testName + "\"",
      paused: " · paused on a failing check",
      stopping: " · stopping",
      running: " · running",
      line: (counts: string, part: string, seconds: string, state: string): string =>
        counts + part + " · " + seconds + state,
      join: " · ",
    },
    log: {
      runRequested: (selected: number | undefined, total: number, delayMs: number,
        granularity: string, serverValidation: boolean): string =>
        "run requested — " + (selected === undefined ? "every test" : selected + " of " + total +
          " tests") + ", delay " + delayMs + " ms per " + granularity +
        (serverValidation ? ", server validation handler attached" : ""),
      segmentRequested: (segment: string, testName: string, how: string): string =>
        "run requested — " + segment + " of \"" + testName + "\", " +
        (how === "continued"
          ? "on the model the last run stopped on"
          : how === "empty"
            ? "which builds the model and runs no step"
            : "on a model built for it"),
      stopPressed: "Stop pressed. The run ends at the next boundary; what is already running finishes.",
      disagree: (problem: string): string => "the live tree and the result disagree: " + problem,
      threw: (message: string): string => "the run threw: " + message,
      modelNotKept: (reason: string): string => "the model was not kept: " + reason,
      truncated: (max: number): string =>
        "The console keeps the last " + max + " rows. Download the transcript for the whole run.",
    },
    // Why the model an earlier part-run stopped on was not carried forward.
    dropped: {
      noResult: "the run produced no result for the test",
      noModel: "no model reached this application",
      unfinished: (status: string): string =>
        "the run ended as " + status + " — a step that did not finish leaves the model in a state the" +
        " case does not describe",
    },
  },

  // One row of the test list: its verbs, its state line and its rename box.
  row: {
    edit: "Edit",
    editStopping: "Stopping…",
    json: "JSON",
    delete: "Delete",
    disabledInSuite: "disabled in the suite",
    runTitle: (modeName: string): string => "Run this test — " + modeName,
    runAriaLabel: (name: string, modeName: string): string =>
      "run " + name + " now, in " + modeName + " mode",
    selectAriaLabel: (name: string): string => "run " + name,
    toggleAriaLabel: (name: string, expanded: boolean): string =>
      (expanded ? "collapse " : "expand ") + name,
    cursorText: (at: number, count: number): string => "stopped before step " + at + " of " + count,
    droppedText: (reason: string): string =>
      "The model was not kept: " + reason + ". The next run starts from the first step.",
    noStepRan: "No step ran.",
    disabledNoStepRan: "Disabled: no step ran.",
    nameRequired: "A test must have a name: the session is addressed by it and not by an index.",
    nameTaken: (name: string): string => "The suite already has a test named \"" + name + "\".",
    documentsDoNotRun: "The documents do not run.",
    editDisabledUnnamed: "A session is addressed by name, so a test without one cannot be recorded" +
      " into. Give it a name in the box below.",
  },

  // One line of a case, and the one place a part of a test is run from.
  step: {
    lastStep: "Last step",
    wholeCaseHasRun: "The whole case has run.",
    alreadyStoppedHere: "The run is already stopped here.",
    buildOnly: "Build the model again and run no step.",
    runsOne: (from: number): string => "Runs step " + from,
    runsRange: (from: number, last: number): string => "Runs steps " + from + "–" + last,
    stopsBefore: (runs: string, index: number): string =>
      runs + ", and stops with step " + index + " next.",
    finishes: (runs: string): string => runs + ", and finishes the case.",
    runToEndAriaLabel: "run this test to the end",
    runToAriaLabel: (index: number): string => "run this test up to step " + index,
    whereDone: "the whole case has run",
    where: (at: number, count: number, held: boolean): string =>
      "▸ step " + at + " of " + count + " runs next" +
      (held ? " · the model is held" : " · from the first step"),
    describe: (command: string, subject: string, name: string): string =>
      command + " " + subject + (!!name ? " — " + name : ""),
    checkSubject: (target: string, check: string, expected: string): string =>
      target + "." + check + (expected === undefined ? "" : " = " + expected),
  },

  // Why a check did not hold, as the lines that draw it.
  why: {
    expressionLabel: "expression",
    expressionRead: (values: string, result: string): string =>
      "read " + values + " → " + result,
    unknownNames: (listed: string): string => listed + " resolve to nothing.",
    didYouMean: (name: string, closest: string): string =>
      name + (!!closest ? " (did you mean " + closest + "?)" : ""),
    blockedLabel: "blocked",
    blockedBy: (command: string): string => "\"" + command + "\" did not leave the page",
    questionRequired: "is required and empty",
    questionHeld: "held it",
    triggerLabel: "trigger",
    triggerFiredOn: "fired on",
    triggerInStep: (stepIndex: number): string => "in step " + stepIndex,
    clearedLabel: "cleared",
    clearedIn: (stepIndex: number): string =>
      "was dropped in step " + stepIndex + "; the effective clearInvisibleValues is",
    rowLabel: "row",
    checkSummary: (expected: string, actual: string): string =>
      "expected " + expected + ", got " + actual,
  },

  // The JSON screen: the bench the suite document is repaired on, and the one screen that is never
  // blocked.
  json: {
    emptyDocument: "The document is empty.",
    back: "← Back to tests",
    format: "Format",
    copy: "Copy",
    ariaLabel: "Tests JSON",
    headerSuite: "the suite",
    headerTest: (name: string, steps: number, index: number): string =>
      name + " · " + steps + (steps === 1 ? " step" : " steps") + " · tests[" + index + "]",
    headerMissing: (name: string): string => name + " · not in the suite as it stands",
    parseError: (message: string): string => "The document does not parse: " + message,
    issueCount: (errors: number, warnings: number): string =>
      !errors && !warnings
        ? "no issue"
        : [
          errors ? errors + " error" + (errors === 1 ? "" : "s") : "",
          warnings ? warnings + " warning" + (warnings === 1 ? "" : "s") : "",
        ].filter(part => !!part).join(", "),
  },

  // The setup survey, behind the Settings action of the runner's toolbar.
  setup: {
    testPanelTitle: "Test options",
    testPanelDescription: "This is ISurveyTestOptions — the serialisable run configuration of the test" +
      " format, one control per member and nothing else. These are the root options: a suite's own" +
      " options and a test's own options merge over them per key, and the runner reports the resolved" +
      " set on every test result. Several samples pin what they need in their own suite, so they run" +
      " the same whatever is set here.",
    localeTitle: "Locale",
    localePlaceholder: "(default)",
    localeDescription: "Empty means the library default. Sent to the runner only when it is set.",
    nowTitle: "Now",
    nowPlaceholder: "2024-01-01T00:00:00",
    nowDescription: "The clock every test reads: today(), currentDate(), currentYear() and age()." +
      " Default 2024-01-01T00:00:00. Explicit dates a survey writes are never touched.",
    randomSeedTitle: "Random seed",
    randomSeedDescription: "Default 1.",
    clearInvisibleValuesTitle: "Clear invisible values",
    clearInvisibleValuesDescription: "Decides whether a hidden answer survives into the result data.",
    checkErrorsModeTitle: "Check errors mode",
    checkErrorsModeDescription: "When the survey computes its errors.",
    stopOnFirstFailureTitle: "Stop on first failure",
    stopOnFirstFailureDescription: "Ends the test at its first failing check. A suite run never stops" +
      " at one.",
    asyncTimeoutTitle: "Async timeout (ms)",
    asyncTimeoutDescription: "How long a step waits for an asynchronous survey operation — server" +
      " validation, an async validator or expression, a navigation handler holding its callback." +
      " Default 5000, per operation. Zero waits for nothing.",
    hostPanelTitle: "Host options",
    hostPanelDescription: "These are not part of the test format and they exist only in this" +
      " application. The tester has no delay, no animation, no console and no notion of a UI: the host" +
      " owns the pace, so every wait below happens inside the execution observer and never inside" +
      " survey-core.",
    stepDelayMsTitle: "Step delay (ms)",
    stepDelayMsDescription: "Awaited in the observer. 0 runs at full speed, exactly as CI does.",
    delayGranularityTitle: "Delay granularity",
    delayGranularityDescription: "One command may address several targets; each of them is announced" +
      " separately.",
    delayGranularityStep: "each step",
    delayGranularityTarget: "each target of a step",
    delayGranularityCheck: "each target and each check",
    pauseOnFailureTitle: "Pause on a failing check",
    pauseOnFailureDescription: "Holds the run until Resume or Stop — a host wait like any other.",
    renderSurveyTitle: "Render the survey",
    renderSurveyDescription: "The model of surveyCreated is the one the commands run on.",
    highlightTargetTitle: "Highlight the current target",
    highlightTargetDescription: "Outlines the question of targetStarted and puts its input into focus," +
      " before the command writes to it.",
    keepLastModelTitle: "Keep the last model on screen",
    keepLastModelDescription: "Its clock stays pinned to the now of the test that ran on it.",
    verbosityTitle: "Console verbosity",
    verbosityAll: "all events",
    verbositySteps: "steps, checks and issues",
    verbosityFailures: "failures and issues only",
    autoScrollConsoleTitle: "Auto-scroll the console",
    attachServerValidationTitle: "Attach the demo server-validation handler",
    attachServerValidationDescription: "Installs an onServerValidateQuestions handler through the" +
      " createSurvey execution option: it answers after 800 ms and rejects taken@example.com. Required" +
      " by the asynchronous sample and by nothing else. With it off, the tester's own default factory" +
      " is used.",
  },

  // The widget root: what the transitions of the state machine say when they have done something.
  tester: {
    blocked: {
      noSurvey: "The host has no survey definition to build a model from, so no test would run.",
      testsInvalid: (message: string): string =>
        "The suite document does not hold valid JSON: " + message,
      suiteError: (code: string, message: string): string =>
        "The suite object itself has a structural error, so no test would run: " + code + " — " +
        message,
    },
    brokenNotice: (count: number): string =>
      count + (count === 1 ? " test has" : " tests have") +
      " a structural error and will be reported as errored without running.",
    notice: {
      testGone: (name: string): string =>
        "The test \"" + name + "\" is no longer in the suite, so the screen that was about it was" +
        " closed.",
      sessionClosedForRun: (name: string): string =>
        "The recording session on \"" + name + "\" was closed so this run could drive its own model." +
        " Everything it recorded is in the Tests JSON: press Edit to carry on.",
      surveyChanged: "The survey definition changed while a run was in flight, so the run was stopped:" +
        " the model it was driving is a model of the definition before the edit.",
    },
  },

  // The recorder. Everything but the two document refusals arrives with prompt 04; the placeholder is
  // what the screen says until then, so the state machine can be complete before the screen is.
  recorder: {
    placeholder: "recorder — prompt 04",
    nameRequired: "A test must have a name: the session is addressed by it and not by an index.",
    noSuite: "The Tests JSON does not hold a suite with a \"tests\" array.",
    nameTaken: (name: string): string => "The suite already has a test named \"" + name + "\".",
  },
};
