// The package targets React 17, so ReactDOM.render is the API to mount into a real DOM node here.
/* eslint-disable react/no-deprecated */
import * as React from "react";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { SurveyTesterModel } from "survey-creator-core/tester";
import { SurveyTester } from "../src/tester/SurveyTester";
import { formatSuite, insuranceSurvey, TesterHostStub } from "./testerHostStub";
import { prepareEnvironment, settle, waitFor } from "./testerSetup";

// StrictMode, which is how a React application mounts in development.
//
// On the React this project runs on (17), StrictMode double-invokes render - and with it every
// useState and useMemo initialiser - to prove that a render is pure; effects run once, so there is no
// teardown-and-remount here. What a rehearsed render must not do is start work the discarded copy
// would then undo: a model built in an initialiser and disposed by the copy React throws away would
// come back dead, survey-react-ui's dropdown reads question.dropdownListModel in componentDidMount,
// and the settings form would throw before it could paint. It only ever happens in development,
// because a production build does not double-invoke - which is exactly why it is asserted here.
//
// Later Reacts add an effect teardown-and-remount to the rehearsal. useOwnedModel's deferred dispose
// is what carries the widget through that one, and useModel.test.tsx pins it on the effect lifecycle
// 17 does have: a real unmount disposes, a replaced model disposes, and nothing else does.

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

    // A throw inside componentDidMount reaches React, not this test, so it is caught through the window
    // the way the prototype's own strict-mode test does: without that, a regression would read as an
    // empty container rather than as the error it is.
    const thrown: Array<any> = [];
    const onError = (event: ErrorEvent): void => { thrown.push(event.error || event.message); };
    window.addEventListener("error", onError);
    try {
      await act(async() => {
        ReactDOM.render(
          <StrictMode>
            <SurveyTester model={model} />
          </StrictMode>,
          container,
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
      // disposed by a discarded render would have stopped doing.
      expect(form.querySelector(".sd-root-modern")).toBeTruthy();
      expect(form.querySelectorAll("input[type=radio]").length).toBe(2);
      // One real mount, one attachTo: the rehearsal re-runs render, not the layout effect that hands
      // the node over, and the last word is the live pane's.
      expect(attached.length).toBeGreaterThan(0);
      expect(attached[attached.length - 1]).toBe(form);
      expect(recorder.pane).toBe(form);
    } finally {
      window.removeEventListener("error", onError);
      await act(async() => { ReactDOM.unmountComponentAtNode(container); });
      container.remove();
      model.dispose();
    }
  }, 60000);
});
