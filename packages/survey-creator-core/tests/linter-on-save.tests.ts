import { settings as libSettings } from "survey-core";
import { ISurveyLintResult } from "survey-core/linter";
import { CreatorTester } from "./creator-tester";
import { settings } from "../src/creator-settings";
import { SurveySavingEvent } from "../src/creator-events-api";
import { resolveFindingTarget, navigateToFinding } from "../src/linter/linter-locator";
import { buildLintActions } from "../src/linter/linter-issue-list";
import { getIssuesSummaryText } from "../src/linter/linter-notifications";

// {frut} resolves to nothing, so reference/unknown reports one error. The reference survives
// the serializer, unlike an unknown property, so the save path sees it too.
const surveyWithIssues = {
  pages: [{
    name: "page1",
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{frut} = 'apple'" }
    ]
  }]
};

function createCreator(options: any = {}): CreatorTester {
  const creator = new CreatorTester(options);
  creator.JSON = surveyWithIssues;
  return creator;
}

function withSaveFunc(creator: CreatorTester): { count: () => number } {
  let count = 0;
  creator.saveSurveyFunc = (no: number, callback: (no: number, isSuccess: boolean) => void) => {
    count++;
    callback(no, true);
  };
  return { count: () => count };
}

function flush(): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, 0));
}

test("With no onSurveySaving handler a save costs no analysis and proceeds", () => {
  const creator = createCreator({ showLinterPanel: false });
  const saves = withSaveFunc(creator);
  creator.saveSurvey();
  expect(saves.count()).toBe(1);
  expect(creator.state).toBe("saved");
  // nothing asked for a verdict, so none was computed
  expect(creator.lintResult).toBeUndefined();
});

test("onSurveySaving receives the linter verdict and the JSON that is about to be saved", () => {
  const creator = createCreator({ showLinterPanel: false });
  const saves = withSaveFunc(creator);
  let received: SurveySavingEvent = undefined;
  creator.onSurveySaving.add((sender, options) => { received = options; });
  creator.saveSurvey();
  expect(saves.count()).toBe(1);
  expect(received.reason).toBe("api");
  expect(received.allow).toBeTruthy();
  expect(received.json.pages[0].elements).toHaveLength(2);
  expect(received.lintResult.errorCount).toBe(1);
  expect(received.lintResult.findings[0].ruleId).toBe("reference/unknown");
});

test("The save button reports its own reason", () => {
  const creator = createCreator({ showLinterPanel: false });
  withSaveFunc(creator);
  let reason: string = undefined;
  creator.onSurveySaving.add((sender, options) => { reason = options.reason; });
  creator.saveSurveyActionHandler();
  expect(reason).toBe("manual");
});

test("allow false cancels the save and leaves the state and saveNo alone", () => {
  const creator = createCreator({ showLinterPanel: false });
  const saves = withSaveFunc(creator);
  creator.setModified({ type: "TEST" });
  const saveNo = creator.saveNo;
  creator.onSurveySaving.add((sender, options) => { options.allow = false; });
  creator.saveSurvey();
  expect(saves.count()).toBe(0);
  expect(creator.state).toBe("modified");
  expect(creator.saveNo).toBe(saveNo);
});

test("options.message is notified as an error when the save was cancelled", () => {
  const creator = createCreator({ showLinterPanel: false });
  withSaveFunc(creator);
  const notified: Array<any> = [];
  creator.onNotify.add((sender, options) => notified.push(options));
  creator.onSurveySaving.add((sender, options) => {
    options.allow = false;
    options.message = "Fix the errors first";
  });
  creator.saveSurvey();
  const own = notified.filter(item => item.message === "Fix the errors first");
  expect(own).toHaveLength(1);
  expect(own[0].type).toBe("error");
});

test("An async handler holds the save and disables the Save button meanwhile", async () => {
  const creator = createCreator({ showLinterPanel: false });
  const saves = withSaveFunc(creator);
  creator.setModified({ type: "TEST" });
  let allowSave: () => void = undefined;
  creator.onSurveySaving.add((sender, options) => {
    return new Promise<void>(resolve => {
      allowSave = () => { resolve(); };
    });
  });
  creator.saveSurvey();
  expect(creator.isSavePending).toBeTruthy();
  expect(saves.count()).toBe(0);
  // a save arriving while the decision is pending is dropped, not queued
  creator.saveSurvey();
  expect(saves.count()).toBe(0);
  allowSave();
  await flush();
  expect(creator.isSavePending).toBeFalsy();
  expect(saves.count()).toBe(1);
  expect(creator.state).toBe("saved");
});

test("lintOnSaveEnabled false fires the event without a verdict", () => {
  const creator = createCreator({ showLinterPanel: false, lintOnSaveEnabled: false });
  withSaveFunc(creator);
  let received: SurveySavingEvent = undefined;
  creator.onSurveySaving.add((sender, options) => { received = options; });
  creator.saveSurvey();
  expect(received).toBeDefined();
  expect(received.lintResult).toBeUndefined();
});

test("An auto-save is not analysed unless settings.linter.lintOnAutoSave says so", () => {
  const creator = createCreator({ showLinterPanel: false });
  withSaveFunc(creator);
  creator.autoSaveEnabled = true;
  const reasons: Array<string> = [];
  let lintResult: ISurveyLintResult = undefined;
  creator.onSurveySaving.add((sender, options) => {
    reasons.push(options.reason);
    lintResult = options.lintResult;
  });
  creator.setModified({ type: "TEST" });
  expect(reasons).toStrictEqual(["auto"]);
  expect(lintResult).toBeUndefined();

  settings.linter.lintOnAutoSave = true;
  try {
    creator.setModified({ type: "TEST" });
    expect(reasons).toStrictEqual(["auto", "auto"]);
    expect(lintResult.errorCount).toBe(1);
  } finally {
    settings.linter.lintOnAutoSave = false;
  }
});

test("A cancelled auto-save does not retry itself", () => {
  const creator = createCreator({ showLinterPanel: false });
  const saves = withSaveFunc(creator);
  creator.autoSaveEnabled = true;
  let attempts = 0;
  creator.onSurveySaving.add((sender, options) => {
    attempts++;
    options.allow = false;
  });
  creator.setModified({ type: "TEST" });
  expect(attempts).toBe(1);
  expect(saves.count()).toBe(0);
  expect(creator.state).toBe("modified");
});

test("A creator without saveSurveyFunc does not get stuck at the saving state", () => {
  const creator = createCreator({ showLinterPanel: false });
  creator.setModified({ type: "TEST" });
  creator.saveSurvey();
  expect(creator.state).toBe("modified");
});

test("saveSurveyAnyway saves although a handler cancelled the attempt", () => {
  const creator = createCreator({ showLinterPanel: false });
  const saves = withSaveFunc(creator);
  let attempts = 0;
  creator.onSurveySaving.add((sender, options) => {
    attempts++;
    options.allow = false;
  });
  creator.saveSurvey();
  expect(saves.count()).toBe(0);
  creator.saveSurveyAnyway();
  expect(saves.count()).toBe(1);
  // the override skips the gate rather than asking it again
  expect(attempts).toBe(1);
});

test("lintSurveyFunc replaces the built-in run", () => {
  const creator = createCreator({ showLinterPanel: false });
  withSaveFunc(creator);
  const ownResult: any = { findings: [], errorCount: 0, warningCount: 0, infoCount: 0, suppressedCount: 0 };
  let passedOptions: any = undefined;
  creator.lintOptions = { rules: { "reference/unknown": "off" } };
  creator.lintSurveyFunc = (json: any, options: any, callback: (result: any) => void) => {
    passedOptions = options;
    callback(ownResult);
  };
  let received: SurveySavingEvent = undefined;
  creator.onSurveySaving.add((sender, options) => { received = options; });
  creator.saveSurvey();
  expect(received.lintResult).toBe(ownResult);
  expect(passedOptions).toBe(creator.lintOptions);
});

test("lintOptions switch a rule off", () => {
  const creator = createCreator({ showLinterPanel: false });
  expect(creator.lintSurvey().errorCount).toBe(1);
  creator.lintOptions = { rules: { "reference/unknown": "off" } };
  expect(creator.lintSurvey().errorCount).toBe(0);
});

test("creator.lintSurvey raises onSurveyLinted and fills lintResult", () => {
  const creator = createCreator({ showLinterPanel: false });
  const reasons: Array<string> = [];
  creator.onSurveyLinted.add((sender, options) => reasons.push(options.reason));
  const result = creator.lintSurvey();
  expect(result.errorCount).toBe(1);
  expect(creator.lintResult).toBe(result);
  expect(reasons).toStrictEqual(["api"]);
});

test("A change to the survey invalidates the cached verdict", () => {
  const creator = createCreator({ showLinterPanel: false });
  creator.lintSurvey();
  expect(creator.linter.isStale).toBeFalsy();
  creator.setModified({ type: "TEST" });
  expect(creator.linter.isStale).toBeTruthy();
  // the previous result is still readable, it is just no longer current
  expect(creator.lintResult).toBeDefined();
});

test("A save reuses a verdict the panel already computed", () => {
  const creator = createCreator({ showLinterPanel: false });
  withSaveFunc(creator);
  const reasons: Array<string> = [];
  creator.onSurveyLinted.add((sender, options) => reasons.push(options.reason));
  creator.lintSurvey();
  creator.onSurveySaving.add(() => {});
  creator.saveSurvey();
  // one analysis, not two: the save found the cached result valid
  expect(reasons).toStrictEqual(["api"]);
});

test("A finding resolves to the element and the property it is about", () => {
  const creator = createCreator();
  const target = resolveFindingTarget(creator,
    <any>{ path: "pages[0].elements[1].visibleIf", elementName: "q2" });
  expect(target.element.name).toBe("q2");
  expect(target.propertyName).toBe("visibleIf");
});

test("A page-level finding resolves to the page", () => {
  const creator = createCreator();
  const target = resolveFindingTarget(creator, <any>{ path: "pages[0]" });
  expect(target.element.name).toBe("page1");
  expect(target.propertyName).toBeUndefined();
});

test("A survey-level collection resolves to the survey and its property", () => {
  const creator = createCreator();
  const target = resolveFindingTarget(creator,
    <any>{ path: "triggers[0].setToName" });
  expect(target.element).toBe(creator.survey);
  expect(target.propertyName).toBe("triggers");
});

test("A path that addresses nothing has no place on the design surface", () => {
  const creator = createCreator();
  expect(resolveFindingTarget(creator, <any>{ path: "pages[7].elements[0].visibleIf" }).element)
    .toBeUndefined();
  expect(navigateToFinding(creator, <any>{ path: "pages[7].elements[0].visibleIf" }))
    .toBeFalsy();
});

test("A name resolves a finding whose path does not", () => {
  const creator = createCreator();
  const target = resolveFindingTarget(creator,
    <any>{ path: "pages[7].elements[0].visibleIf", elementName: "q1" });
  expect(target.element.name).toBe("q1");
  // the property belongs to the path, which resolved nothing, so it does not travel
  expect(target.propertyName).toBeUndefined();
});

test("Navigating to a finding selects the element and its property", () => {
  const creator = createCreator();
  expect(navigateToFinding(creator,
    <any>{ path: "pages[0].elements[1].visibleIf", elementName: "q2" })).toBeTruthy();
  expect(creator.selectedElementName).toBe("q2");
});

test("The issue list groups the findings by severity and ends with a summary", () => {
  const creator = createCreator();
  const actions = buildLintActions(creator, creator.lintSurvey(), "severity");
  expect(actions).toHaveLength(3);
  expect(actions[0].id).toBe("linter-group-error");
  expect(actions[0].title).toBe("Errors (1)");
  expect(actions[1].id).toBe("linter-issue-error-0");
  expect(actions[1].data.navigable).toBeTruthy();
  expect(actions[1].component).toBe("json-error-item");
  expect(actions[2].id).toBe("linter-summary");
  expect(actions[2].title).toBe("1 issues found");
});

test("The rule list marks the checks a serialized survey cannot answer for", () => {
  const creator = createCreator();
  const actions = buildLintActions(creator, creator.lintSurvey(), "rule");
  const unknownProperty = actions.filter(action => action.id === "linter-rule-property/unknown")[0];
  expect(unknownProperty.css.indexOf("svc-json-linter__rule--notApplicable")).toBeGreaterThan(-1);
  const selfReference = actions.filter(action => action.id === "linter-rule-reference/self")[0];
  expect(selfReference.css.indexOf("svc-json-linter__rule--passed")).toBeGreaterThan(-1);
});

test("The summary text names only the severities that have findings", () => {
  expect(getIssuesSummaryText(<any>{ errorCount: 3, warningCount: 5, infoCount: 0 }))
    .toBe("3 errors, 5 warnings");
  expect(getIssuesSummaryText(<any>{ errorCount: 3, warningCount: 0, infoCount: 0 }))
    .toBe("3 errors");
  expect(getIssuesSummaryText(<any>{ errorCount: 0, warningCount: 5, infoCount: 0 }))
    .toBe("5 warnings");
  expect(getIssuesSummaryText(<any>{ errorCount: 0, warningCount: 0, infoCount: 2 }))
    .toBe("2 info messages");
});

test("A save that went through with errors reports them and waits for the user", () => {
  const creator = createCreator();
  withSaveFunc(creator);
  const notified: Array<any> = [];
  creator.onNotify.add((sender, options) => notified.push(options));
  creator.onSurveySaving.add(() => {});
  creator.saveSurvey();
  const own = notified.filter(item => item.message.indexOf("Saved with issues") === 0);
  expect(own).toHaveLength(1);
  expect(own[0].message).toBe("Saved with issues: 1 errors");
  expect(own[0].persistent).toBeTruthy();
  expect(own[0].actions.map((action: any) => action.id))
    .toStrictEqual(["linter-review-issues", "linter-dismiss"]);
});

test("A save with no error and no warning is not reported at all", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  withSaveFunc(creator);
  const notified: Array<any> = [];
  creator.onNotify.add((sender, options) => notified.push(options));
  creator.onSurveySaving.add(() => {});
  creator.saveSurvey();
  expect(notified.filter(item => item.message.indexOf("Saved with issues") === 0)).toHaveLength(0);
});

test("The linter panel opens on the findings of the designed survey", () => {
  const creator = createCreator();
  creator.showLintIssues();
  const page = creator.sidebar.getPageById("linter");
  expect(page.visible).toBeTruthy();
  expect(creator.sidebar.activePage).toBe("linter");
  expect(page.componentData.elements[0].componentData.model).toBe(creator.linterPanel.list);
  const actions = creator.linterPanel.list.actions;
  expect(actions[0].id).toBe("linter-group-error");
});

test("The lint status action appears with the findings and carries the count", () => {
  const creator = createCreator();
  const action = creator.getActionBarItem("svd-lint-status");
  expect(action.visible).toBeFalsy();
  creator.lintSurvey();
  expect(action.visible).toBeTruthy();
  expect(action.title).toBe("1 errors");
  expect(action.tooltip).toBe("1 errors. Click to review.");
  expect(creator.getActionBarItem("svd-save").markerIconName).toBe("icon-error-16x16");
});

test("Review issues in the notification opens the panel on the findings", () => {
  const creator = createCreator();
  withSaveFunc(creator);
  const notified: Array<any> = [];
  creator.onNotify.add((sender, options) => notified.push(options));
  creator.onSurveySaving.add(() => {});
  creator.saveSurvey();
  const own = notified.filter(item => item.message.indexOf("Saved with issues") === 0)[0];
  own.actions[0].action();
  expect(creator.sidebar.activePage).toBe("linter");
  expect(creator.linterPanel.list.actions[0].id).toBe("linter-group-error");
});

// showDialog is installed by the UI packages, so a unit test stands in for one
function withDialogStub(): { shown: Array<any>, restore: () => void } {
  const shown: Array<any> = [];
  const original = libSettings.showDialog;
  libSettings.showDialog = <any>((options: any) => {
    shown.push(options);
    return { footerToolbar: { getActionById: () => ({ appearance: {} }) } };
  });
  return { shown: shown, restore: () => { libSettings.showDialog = original; } };
}

test("A cancelled save is reported with a dialog that offers a review and an override", () => {
  const creator = createCreator();
  withSaveFunc(creator);
  creator.onSurveySaving.add((sender, options) => { options.allow = false; });
  const dialog = withDialogStub();
  try {
    creator.saveSurveyActionHandler();
    expect(dialog.shown).toHaveLength(1);
    const texts = dialog.shown[0].data.model.elements[1].componentData.model.elements;
    expect(texts[0].componentData.locStr.defaultValue).toBe("The form was not saved");
    expect(texts[1].componentData.locStr.defaultValue)
      .toBe("1 errors must be fixed before this form can be saved.");
    // the override runs the save without asking the gate again
    dialog.shown[0].onCancel();
    expect(creator.state).toBe("saved");
  } finally {
    dialog.restore();
  }
});

test("A dialog is not offered when the handler forbids the override", () => {
  const creator = createCreator();
  const saves = withSaveFunc(creator);
  creator.onSurveySaving.add((sender, options) => {
    options.allow = false;
    options.allowOverride = false;
  });
  const dialog = withDialogStub();
  try {
    creator.saveSurveyActionHandler();
    expect(dialog.shown).toHaveLength(1);
    dialog.shown[0].onCancel();
    expect(saves.count()).toBe(0);
  } finally {
    dialog.restore();
  }
});

test("An auto-save the host cancels does not open a dialog", () => {
  const creator = createCreator();
  withSaveFunc(creator);
  creator.autoSaveEnabled = true;
  creator.onSurveySaving.add((sender, options) => { options.allow = false; });
  const dialog = withDialogStub();
  try {
    creator.setModified({ type: "TEST" });
    expect(dialog.shown).toHaveLength(0);
  } finally {
    dialog.restore();
  }
});

test("The blocked-save dialog names only what blocked the save", () => {
  const creator = createCreator();
  withSaveFunc(creator);
  // the host blocks on a warning, and the message names the warning rather than nothing
  creator.lintOptions = { rules: { "reference/unknown": "warning" } };
  creator.onSurveySaving.add((sender, options) => { options.allow = false; });
  const dialog = withDialogStub();
  try {
    creator.saveSurveyActionHandler();
    const texts = dialog.shown[0].data.model.elements[1].componentData.model.elements;
    expect(texts[1].componentData.locStr.defaultValue)
      .toBe("1 warnings must be fixed before this form can be saved.");
  } finally {
    dialog.restore();
  }
});
