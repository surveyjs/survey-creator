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
    // The glyphs the markup used to spell. They are here for the same reason every sentence is: a
    // renderer that wrote them would be three renderers writing them, and the run mark of a test row
    // and of a step of it would be free to drift apart.
    runMark: "▶",
    collapsedMark: "▾",
    expandedMark: "▴",
    zoomInMark: "+",
    zoomOutMark: "−",
    noteJoin: "— ",
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
    // The pane's own chrome. The three verbs above are Actions; these are the labels of the two
    // inputs, the heading and the line a filtered-out transcript leaves behind.
    title: "Console",
    searchPlaceholder: "search",
    failures: "failures",
    empty: "Nothing yet.",
    raw: "raw",
    hideRaw: "hide",
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
    paneEmpty: "The model of the running test appears here. It is created by the runner, once per" +
      " test, and announced by surveyCreated.",
    paneHeadless: "Rendering the model is switched off in the settings, so the run happens" +
      " headless.",
    spectatorAriaLabel: "the model the tester is driving",
    // The list, its head and the two lines under it.
    testsTitle: (count: number): string => "Tests " + count,
    emptySuite: "This suite holds no test.",
    emptySuiteCreate: " Press New test above: creating one is the act of starting to record it.",
    delayLabel: "delay",
    delayUnit: "ms per",
    granularity: {
      step: "step",
      target: "target",
      check: "check",
    },
    mismatchTitle: "the live rows and the result disagree",
    mismatchNote: "The result is the canonical one, so this is a bug in this host or in the" +
      " tester.",
    // The New test form: one question and one button. Everything else a test carries is asked for on
    // the recorder screen, where there is something to describe.
    newTestForm: {
      placeholder: "What does this test prove?",
      ariaLabel: "the name of the new test",
      create: "Create",
      hint: "Create writes an empty case and opens it for recording. There is no second button to" +
        " press, and the rest of what the test carries is in the Test options panel there.",
    },
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
    testGone: (name: string): string => "The test \"" + name + "\" is no longer in the suite.",
    documentsDoNotRun: "The documents do not run.",
    editDisabledUnnamed: "A session is addressed by name, so a test without one cannot be recorded" +
      " into. Give it a name in the box below.",
    // The rename box, the expander and the head of the step list inside a row.
    nameLabel: "Name",
    namePlaceholder: "What does this test prove?",
    save: "Save",
    saveClean: "The name is what the document already holds.",
    expand: "Expand",
    collapse: "Collapse",
    stepsHead: (count: number): string => "Steps " + count,
    stepsEmpty: "This test holds no step.",
    stepsLegend: "▶ runs every step in front of the one it is on and stops there, so that step is" +
      " the one that runs next — and on the last line, which is the end of the case, it runs" +
      " everything that is left. Going further into the case carries on from where the last run" +
      " stopped; going back builds the model again and replays from the first step.",
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
    // The raw payload of what ran, behind the line.
    raw: "raw..",
    hideRaw: "hide",
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
    // The way into the survey definition an issue line and a check line both offer. The widget does
    // not edit the definition - the host owns it - so what the link does is the host's; what it says
    // is this.
    inTheSurvey: "in the survey",
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
    badgeNotValid: "not valid JSON",
    badgeCounts: (errors: number, warnings: number): string =>
      errors + " errors, " + warnings + " warnings",
    headerSuite: "the suite",
    headerTest: (name: string, steps: number, index: number): string =>
      name + " · " + steps + (steps === 1 ? " step" : " steps") + " · tests[" + index + "]",
    headerMissing: (name: string): string => name + " · not in the suite as it stands",
    parseError: (message: string): string => "The document does not parse: " + message,
    // What jsonc-parser says went wrong, and where. The code is its own word for it.
    parseErrorAt: (code: string, offset: number): string => code + " at character " + offset,
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
      renamedSessionClosed: (next: string): string =>
        "The test was renamed to \"" + next + "\", so the recording session was closed. Everything it" +
        " recorded is in the Tests JSON.",
      renamed: (next: string): string =>
        "Renamed to \"" + next + "\". The last run's verdict does not follow a name, so the row reads" +
        " \"not run\" until it runs again.",
      deleted: (name: string, wasRecorded: boolean): string =>
        "The test \"" + name + "\" was deleted" +
        (wasRecorded ? ", and the recording session that was open on it was closed." : ".") +
        " Undo it in the JSON screen, where the document holds the edit.",
    },
  },

  // The recorder: the session, what it recorded, what it refused to record, and why.
  recorder: {
    nameRequired: "A test must have a name: the session is addressed by it and not by an index.",
    noSuite: "The Tests JSON does not hold a suite with a \"tests\" array.",
    nameTaken: (name: string): string => "The suite already has a test named \"" + name + "\".",
    optionsNotObject: (message: string): string =>
      "The options override is not a JSON object: " + message,
    variablesNotObject: (message: string): string =>
      "The variables override is not a JSON object: " + message,
    notAnObject: "it must be an object.",
    noModelForStart: "There is no model on screen to take the data from.",
    // The screen's own header, and the two things the form pane says when it is not a live form.
    noTest: "(no test)",
    stepCount: (count: number): string =>
      count + (count === 1 ? " step" : " steps") + " recorded",
    backToTests: "Back to tests",
    formEmpty: "No model yet. The Recorder never builds one: it runs the steps recorded so far" +
      " through the tester and keeps the model that surveyCreated handed over.",

    // The form when the session cannot record: not the survey with its inputs disabled - the survey
    // is not rendered at all, and what stands here is a reading of the same model. There is no
    // control to type into, so a blocked session cannot take an answer that nothing would record.
    static: {
      ariaLabel: "The form, read only",
      whereBlocked: "The replay stopped, so this is as far as the case got.",
      whereCompleted: "The survey is completed.",
      wherePreview: "The survey is showing its preview.",
      whereStarting: "The survey is on its start page.",
      wherePage: (name: string): string => "Page " + name + ", as the recorded steps left it.",
      whereNone: "The survey has no page on screen.",
      empty: "There is no question to read on this page.",
      noAnswer: "no answer",
      submitCompleted: "Completed",
      submitNext: "Next",
      submitComplete: "Complete",
    },

    // The step list: the matrix, its columns, its two row verbs and the note under it. The list is a
    // view over tests[i].steps and holds nothing of its own, so every word here is about a position in
    // that array or about what the last run made of it.
    steps: {
      title: "Steps",
      surveyTarget: "survey",
      addRow: "Record at the end",
      removeRow: "Delete",
      noRows: "No steps yet. What you do in the form appears here.",
      columnNum: "#",
      columnName: "Name",
      columnState: "State",
      detailAction: "Action",
      detailTarget: "Target",
      goToRunner: "Go to Runner",
      startHere: "▶",
      startHereTooltip: "Start here: replay everything above and record from this position",
      openJson: "JSON",
      openJsonTooltip: "Show this step in the suite document",
      actionDetail: (detail: string): string => " · " + detail,
      targetJoin: ", ",
      cursorAtEnd: "The next step is added at the end.",
      cursorInsert: (position: number): string =>
        "The next step is inserted into position " + position + ", above the step marked ▸.",
      cursorRecording: (text: string): string => "Recording. " + text,
      // Keyed by the state's own code, which is a closed set: localization.test.ts walks it rather than
      // grepping for these paths, and the class on the row is keyed by the code and not by the word.
      state: {
        new: "new",
        ok: "OK",
        failed: "failed",
        errored: "error",
        saved: "saved",
      },
    },

    // Everything the test carries besides its name and its steps, asked for under the list of those
    // steps - at the one moment there is something to describe.
    testPanel: {
      title: "Test options",
      description: "Everything this test carries besides its name and its steps. Saved into the test" +
        " itself; the options below merge over the suite options per key, and empty means no override.",
      inherited: "(inherited)",
      descriptionTitle: "Description",
      descriptionPlaceholder: "What does this test prove?",
      descriptionNote: "Metadata the tester never reads. It is what a person scanning the suite reads.",
      startTitle: "Start",
      startPlaceholder: "(none)",
      startNote: "The state the case begins from. A start does not merge: a test either references one" +
        " of the suite's by name or inlines one of its own.",
      startInline: "inline the form's answers as they are now",
      variablesTitle: "Variables",
      variablesPlaceholder: "{ \"region\": \"us\" }",
      variablesNote: "A JSON object, merged over the suite's variables per name. They are applied" +
        " before the start data, so a defaultValueExpression that reads one sees it.",
      localeTitle: "Locale",
      localePlaceholder: "(default)",
      localeNote: "Empty means the library default.",
      nowTitle: "Now",
      nowPlaceholder: "2024-01-01T00:00:00",
      nowNote: "The clock the test reads: today(), currentDate(), currentYear() and age().",
      randomSeedTitle: "Random seed",
      randomSeedPlaceholder: "1",
      randomSeedNote: "Default 1.",
      clearInvisibleValuesTitle: "Clear invisible values",
      clearInvisibleValuesNote: "Decides whether a hidden answer survives into the result data.",
      checkErrorsModeTitle: "Check errors mode",
      checkErrorsModeNote: "When the survey computes its errors.",
      stopOnFirstFailureTitle: "Stop on first failure",
      stopOnFirstFailureNote: "Ends the test at its first failing check. A suite run never stops at one.",
      booleanTrue: "yes",
      booleanFalse: "no",
      asyncTimeoutTitle: "Async timeout (ms)",
      asyncTimeoutPlaceholder: "5000",
      asyncTimeoutNote: "How long a step waits for an asynchronous survey operation. Default 5000;" +
        " zero waits for nothing.",
      notValidJson: (message: string): string => "Not valid JSON: " + message,
      variablesNotMap: "Variables are a JSON object that maps a name to a value.",
    },

    // The recorder's own settings. None of this travels with a suite, which is why the panel says so.
    optionsPanel: {
      title: "Recorder options",
      description: "Local to this widget, never saved into a suite.",
    },
    // One entry per member of RecorderOptions. The panel under the step list shows all four; the
    // session bar's menu offers the three that are toggles as one press each.
    option: {
      coalesceSets: "Coalesce keystrokes",
      coalesceSetsNote: "Consecutive edits of the same question become one step. Without it every" +
        " keystroke is a step.",
      coalesceIdleMs: "Coalescing idle window (ms)",
      coalesceIdleMsNote: "After this long, the next edit of the same question starts a new step.",
      mergeAdjacentSets: "Merge adjacent sets into one step",
      mergeAdjacentSetsNote: "Equivalent — the targets run in key order — but harder to read back," +
        " which is why it is off.",
      autoCheckAfterCommand: "Check the value after every answer",
      autoCheckAfterCommandNote: "Off by default: a case that asserts everything asserts nothing.",
    },

    // The check menu an adorner opens: the rows the tester's registry produced, and the picker under
    // them for a check that is not complete until something is chosen.
    menu: {
      ariaLabel: (target: string): string => "Checks for " + target,
      markTicked: "✓",
      markPicker: "…",
      tooltipTicked: "The case asserts this. Press to take it back out.",
      tooltipPicker: "Press to choose what this check covers.",
      tooltipAdd: "Press to add this check.",
      pickerNote: (check: string): string =>
        "Choose what \"" + check + "\" covers. Everything it holds now is ticked; unticking one" +
        " narrows the expectation deliberately.",
      pickerAdd: "Add this check",
      pickerCancel: "Cancel",
      pickerChoicesEmpty: "This question shows no choices right now.",
      pickerEmpty: "There is nothing to pick here yet.",
      nowNoValues: "the names that hold nothing",
      nowVariables: "the variables in force",
    },

    // The session bar: what the session is doing, what it records under, and the four verbs.
    bar: {
      record: "Record",
      recordTooltip: "Resume recording. What you do in the form becomes steps again.",
      pause: "Pause",
      pauseTooltip: "Stop recording without closing the session. Nothing you do is written down.",
      verify: "Verify",
      verifyTooltip: "Run the whole case headlessly and say what it does.",
      rewind: "Rewind to start",
      rewindTooltip: "Move the cursor to the beginning and replay nothing.",
      discard: "Discard session",
      discardTooltip: "Closes the session only. Nothing is deleted: what was recorded is the document.",
      options: "…",
      optionsTooltip: "Session options",
      optionState: (title: string, on: boolean): string => title + (on ? " ✓" : ""),
      status: (options: string, start: string, clock: string): string =>
        options + " · " + start + " · " + clock,
      statusOptions: (text: string): string => "records under " + text,
      statusOption: (key: string, value: string): string => key + "=" + value,
      statusJoin: ", ",
      statusStartNamed: (name: string): string => "start \"" + name + "\"",
      statusStartInline: "start: data inlined in the test",
      statusStartNone: "no start",
      statusClock: (now: string): string =>
        "today() is " + now + " — the recording is machine-independent",
      badgeRecording: "recording — your input becomes steps",
      badgePaused: "paused — nothing you do is recorded",
      badgeBlocked: "not recording — the session has nothing to record onto",
      staleNotice: "The tail of the case has not run since the last edit.",
    },

    // What the quiet run behind every write has against the case, in words. The State column marks the
    // row; this is the sentence beside the list.
    verdict: {
      checksFail: (count: number, at: string): string =>
        count + (count === 1 ? " check fails" : " checks fail") + at,
      atStep: (stepNumber: number, text: string): string => " — step " + stepNumber + ": " + text,
      errored: (stepNumber: number, text: string): string =>
        "The case errors — step " + stepNumber + ": " + text,
      doesNotRun: (status: string): string =>
        "The case does not run: the last headless run ended as \"" + status + "\".",
    },

    // The zoom of the form pane. It is a way of looking at the model and not a fact about the case.
    zoom: {
      label: "Zoom",
      in: "Zoom in",
      out: "Zoom out",
      reset: "Back to 100%",
      group: "Zoom the form",
      reading: (percent: number): string => percent + "%",
    },

    // What the capture says a person did. The same sentence names a recorded step and, when the two
    // signals disagreed, the row of the ignored strip that says it was not recorded.
    did: {
      set: (target: string): string => "answered " + target,
      clear: (target: string): string => "cleared " + target,
      setComment: (target: string): string => "wrote the comment of " + target,
      addRow: (subject: string): string => "added a row to " + subject,
      removeRow: (subject: string): string => "removed a row from " + subject,
      addPanel: (subject: string): string => "added a panel to " + subject,
      removePanel: (subject: string): string => "removed a panel from " + subject,
      startSurvey: "pressed Start",
      prevPage: "pressed Previous",
      nextPage: "pressed Next",
      showPreview: "pressed Preview",
      cancelPreview: "pressed Edit on the preview",
      complete: "pressed Complete",
    },
    // The same movement, made by the survey itself: goNextPageAutomatic, a completetrigger, an
    // auto-complete. A replay reproduces all three, so recording the press would press twice.
    moved: {
      startSurvey: "the survey moved on: Start",
      prevPage: "the survey moved on: Previous",
      nextPage: "the survey moved on: Next",
      showPreview: "the survey moved on: Preview",
      cancelPreview: "the survey moved on: Edit on the preview",
      complete: "the survey moved on: Complete",
    },
    ignored: {
      byTrigger: (value: string): string => "set to " + value + " by a trigger",
      byExpression: (value: string): string => "recalculated to " + value + " by the survey",
      byVariable: (value: string): string => "recalculated to " + value + " by an expression",
      noGesture: (value: string): string =>
        "changed to " + value + " with nothing the person did behind it",
      unaddressable: (question: string): string => question + " has no name a case can address",
    },
    // The word the ignored strip prints beside a row. Keyed by IgnoredReason, which is a closed enum:
    // localization.test.ts walks it rather than grepping for these paths.
    reason: {
      trigger: "trigger",
      expression: "expression",
      noGesture: "no gesture",
      paused: "paused",
      automatic: "automatic",
      notAddressable: "not addressable",
    },

    // What a step of the case says, in the words a tester would use. Keyed by the command name, which
    // is why a command this widget has never heard of has no entry here and is shown as it was written.
    action: {
      set: "Set answer",
      clear: "Clear the answer",
      setComment: "Write the comment",
      expect: (what: string): string => "Check " + what,
      properties: "properties",
      checkDetail: (count: number, names: string): string =>
        count + (count === 1 ? " check · " : " checks · ") + names,
      payloadJoin: (parts: Array<string>): string => parts.join(" · "),
      nextPage: "Go to the next page",
      prevPage: "Go back a page",
      complete: "Complete the survey",
      startSurvey: "Start the survey",
      showPreview: "Show the preview",
      cancelPreview: "Go back to editing",
      addRow: "Add a row",
      removeRow: "Remove a row",
      addPanel: "Add a panel",
      removePanel: "Remove a panel",
    },

    // The session's own line: what the replay made of the case, and what an edit did to it.
    session: {
      testGone: (name: string): string =>
        "The test \"" + name + "\" is no longer in the suite, so the session is closed.",
      replayFailed: (message: string): string => "The replay failed: " + message,
      replayFailedDetail: "run() reports everything as an issue instead of rejecting, so this is a bug" +
        " in this application.",
      replayStopped: (code: string, message: string): string =>
        "The replay stopped: " + code + " — " + message,
      replayNoModel: "The replay produced no model, so there is nothing to record on.",
      prefixFailed: (count: number, stepNumber: number, text: string): string =>
        count + (count === 1 ? " step of the prefix no longer holds" : " steps of the prefix no longer" +
          " hold") + " — step " + stepNumber + ": " + text,
      prefixFailedDetail: "Replaying is not verifying: the prefix was applied to the end anyway, and" +
        " the model is in the state it produced.",
      issueText: (code: string, message: string): string => code + " — " + message,
      // A check that did not hold, where it has no message of its own to print.
      checkSubject: (target: string, check: string): string => target + " · " + check,
      noCheckResult: "the confirming run produced no result.",
      caseMovedDuringCheck: "the case changed while the check was being confirmed, so the check was" +
        " not written. Press it again.",
      nothingRecorded: (problem: string): string => "Nothing was recorded: " + problem,
      nothingRecordedProblems: (problems: string): string => "Nothing was recorded. " + problems,
      truncated: (index: number): string =>
        "The case now ends at step " + index + ", and recording continues from there.",
      documentChanged: "The Tests JSON changed outside the Recorder, so the session was replayed onto" +
        " the new document.",
      cursorClamped: "The document changed underneath the session, so the cursor moved to the end of" +
        " the case.",
      undone: "The last recorded change was undone.",
    },

    // Why a check the menu asked for was not written as it was asked for. Every one of them is about
    // the confirming run: what this widget writes is the tester's own actual, never a value it read.
    problem: {
      noResult: (check: string): string =>
        "The check \"" + check + "\" produced no result and was not written.",
      overrideFails: (check: string): string =>
        "\"" + check + "\" was recorded with a value the survey does not hold now: it will fail.",
      presentKey: (key: string): string =>
        "\"" + key + "\" holds a value and was left out of \"noValues\".",
      invalidPayload: (check: string, actual: string): string =>
        "The check \"" + check + "\" reads " + actual + ", which is not a valid payload for it, so" +
        " nothing was written.",
      join: " ",
    },
  },
};
