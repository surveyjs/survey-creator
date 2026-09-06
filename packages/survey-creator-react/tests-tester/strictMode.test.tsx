import * as React from "react";
import { StrictMode, act } from "react";
import { createRoot } from "react-dom/client";
import { SurveyTesterModel } from "survey-creator-core/tester";
import { SurveyTester } from "../src/tester/SurveyTester";
import { formatSuite, insuranceSurvey, TesterHostStub } from "./testerHostStub";
import { prepareEnvironment, settle, waitFor } from "./testerSetup";

// StrictMode, which is how a React application mounts in development.
//
// React 18 mounts every component, tears it down and mounts it again - all in one commit - to prove
// that a component survives it. What useMemo and useState hold survives that rehearsal, so a model
// disposed in the teardown comes back from it dead and the remount then draws it. That is not a quiet
// failure: survey-react-ui's dropdown reads question.dropdownListModel in componentDidMount, a disposed
// question has none, and the settings form throws before it can paint. It only ever happens in
// development, because a production build does not double-invoke - which is exactly why it is asserted
// here.
//
// This is also the test that decides the bundle's React floor. React 17's StrictMode double-invokes
// render and not effects, so under 17 this file would pass without exercising the teardown at all.
// `survey-creator-react/tester` therefore declares React >= 18.1, and this project runs on 18.

describe("mounted the way a React application mounts it", () => {
  beforeAll(() => prepareEnvironment());

  it("survives the rehearsal, and the pane is attached to once per real mount", async() => {
    const host = new TesterHostStub(insuranceSurvey, formatSuite({
      name: "Insurance", tests: [{ name: "walk", steps: [{ set: { hasInsurance: "no" } }] }],
    }), { hostOptions: { stepDelayMs: 0 } });
    const model = new SurveyTesterModel(host);
    const attached: Array<HTMLElement | undefined> = [];
    const recorder: any = model.recorder;
    const attachTo = recorder.attachTo.bind(recorder);
    recorder.attachTo = (node: HTMLElement | undefined): void => {
      if (!!node) attached.push(node);
      attachTo(node);
    };

    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);

    // A throw inside componentDidMount reaches React, not this test, so it is caught through the window
    // the way the prototype's own strict-mode test does: without that, a regression would read as an
    // empty container rather than as the error it is.
    const thrown: Array<any> = [];
    const onError = (event: ErrorEvent): void => { thrown.push(event.error || event.message); };
    window.addEventListener("error", onError);
    try {
      await act(async() => {
        root.render(
          <StrictMode>
            <SurveyTester model={model} />
          </StrictMode>,
        );
      });
      await settle();
      expect(thrown).toEqual([]);
      // The runner screen came through the rehearsal with a live list: a disposed model still draws
      // whatever markup was already committed, so the proof is the rows being there after it.
      expect(container.querySelectorAll(".svt-test-row").length).toBe(1);

      // And the recorder, which is where the two pieces this test exists for actually live:
      // useOwnedModel's deferred dispose and the pane's attachTo/detach pair.
      await act(async() => { await model.openRecorder("walk"); });
      await waitFor(() => !model.recorder.busy && !!model.recorder.liveSurvey);
      await settle();

      expect(thrown).toEqual([]);
      const form = container.querySelector(".svt-form") as HTMLElement;
      expect(form).toBeTruthy();
      // The survey pane still draws a live survey after the rehearsal - which is precisely what a model
      // disposed by the teardown would have stopped doing.
      expect(form.querySelector(".sd-root-modern")).toBeTruthy();
      expect(form.querySelectorAll("input[type=radio]").length).toBe(2);
      // One real mount, one attachTo. StrictMode's rehearsal runs the effect twice, and the second one
      // is the one the session keeps - the node is the same either way, and the last word is the live
      // pane's.
      expect(attached.length).toBeGreaterThan(0);
      expect(attached[attached.length - 1]).toBe(form);
      expect(recorder.pane).toBe(form);
    } finally {
      window.removeEventListener("error", onError);
      await act(async() => { root.unmount(); });
      container.remove();
      model.dispose();
    }
  }, 60000);
});
