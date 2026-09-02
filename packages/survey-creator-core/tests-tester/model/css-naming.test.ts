// The rename of prompt 02 section 3 is complete, not partial.
//
// The models are the only place the widget decides what a thing is called - a view reads `rowCss` and
// prints it - so a class that kept its prototype name would reach the DOM with nothing to catch it
// until prompt 06 wrote the SCSS and the styles silently did not apply. This walks a built runner over
// a small suite and reads every class string it and its rows hand out.
//
// Two assertions, and the second is the one that makes it a completeness check rather than a spot
// check: no token carries a prototype prefix, and every token carries the widget's own.
import { describe, expect, it } from "vitest";
import { Action, ActionContainer, ListModel } from "survey-core";
import { buildIssueView } from "../../src/tester/model/checkView";
import { checkListCss, runnerActionBarCss, runnerListCss, runnerMenuCss } from "../../src/tester/model/runnerCss";
import { defaultHostOptions } from "../../src/tester/core/hostOptions";
import { TesterRunnerModel } from "../../src/tester/model/runnerModel";
import type { RunnerEnvironment } from "../../src/tester/model/runnerHost";

// The prototype's own namespaces. "step" is listed as a whole word because "svt-step-row" is the
// renamed spelling and must not be caught by the rule that forbids the old one.
const FORBIDDEN = ["trow", "tdot", "steplist", "tests__", "svtr-", "checkrow", "checks__", "runbutton"];

function environment(suite: any): RunnerEnvironment {
  return {
    suite: suite,
    canRun: true,
    mode: "ui",
    onMode: () => undefined,
    activeMode: "ui",
    hostOptions: defaultHostOptions,
    onHostOptions: () => undefined,
    selected: undefined,
    onSelected: () => undefined,
    onRun: () => undefined,
    onRevealCase: () => undefined,
    onRevealSurvey: () => undefined,
    canToggleLog: true,
    extras: {
      rowActions: {
        onRunOne: () => undefined,
        onRunTo: () => undefined,
        onJson: () => undefined,
        onEdit: () => undefined,
        onDelete: () => undefined,
        onRename: () => undefined,
      },
      onFixJson: () => undefined,
      onDismissNotice: () => undefined,
    },
  };
}

const suite = {
  name: "suite",
  tests: [
    { name: "one", steps: [{ set: { a: 1 } }, { check: { a: { value: 1 } } }] },
    { name: "two", disabled: true, steps: [{ complete: { survey: true } }] },
  ],
};

function collect(model: TesterRunnerModel): Array<string> {
  const found: Array<string> = [];
  const take = (value: any): void => {
    if (typeof value === "string" && !!value.trim()) found.push(value);
  };
  const takeMap = (map: { [name: string]: string }): void => Object.keys(map).forEach(key => take(map[key]));
  const takeAction = (action: Action): void => {
    take(action.css);
    take((action as any).innerCss);
    const data = (action as any).data;
    if (data instanceof ListModel) takeMap((data as any).cssClasses || {});
    const popup = (action as any).popupModel;
    if (!!popup) take(popup.cssClass);
  };
  const takeContainer = (container: ActionContainer): void => container.actions.forEach(takeAction);

  // The css maps the reused chrome models are dressed with.
  [runnerActionBarCss, runnerListCss, runnerMenuCss, checkListCss].forEach(takeMap);
  takeMap((model.tests as any).cssClasses || {});
  takeContainer(model.toolbar);
  takeContainer(model.listHead);
  takeContainer(model.console.head);
  take(model.fixJson.css);
  take(model.dismissNotice.css);

  model.rowModelList.forEach(row => {
    take(row.rowCss);
    take(row.action.css);
    takeContainer(row.verbs);
    takeMap((row.steps as any).cssClasses || {});
    row.stepRowModels.forEach(step => take(step.rowCss));
  });

  // The issue line is the one class checkView.ts hands out, and it is drawn by a row.
  take(buildIssueView({ severity: "error", code: "x", message: "m" } as any, "0").css);
  take(buildIssueView({ severity: "warning", code: "x", message: "m" } as any, "1").css);
  return found;
}

describe("the class names the models hand out", () => {
  it("carries no prototype name, and carries the svt- namespace everywhere", () => {
    const model = new TesterRunnerModel();
    try {
      model.refresh(environment(suite));
      model.rowModelList.forEach(row => row.setExpanded(true));
      expect(model.rowModelList.length, "the walk found no rows to read").toBe(2);
      expect(model.rowModelList[0].stepRowModels.length, "a row with no step reads no step class")
        .toBeGreaterThan(0);

      const tokens = Array.from(new Set(collect(model)
        .join(" ").split(/\s+/).filter(token => !!token)
        // A composed class ends in a modifier the tone supplies at runtime - "svt-step svt-step--" +
        // tone - so a bare trailing "--" is the prefix and not a name of its own.
        .map(token => token.replace(/--$/, ""))));
      expect(tokens.length).toBeGreaterThan(50);

      const prototypeNames = tokens.filter(token =>
        FORBIDDEN.some(prefix => token.indexOf(prefix) === 0));
      expect(prototypeNames, "the rename of prompt 02 section 3 is partial").toEqual([]);

      const unnamespaced = tokens.filter(token => token.indexOf("svt-") !== 0);
      expect(unnamespaced, "a class outside the widget's namespace").toEqual([]);
    } finally {
      model.dispose();
    }
  });
});
