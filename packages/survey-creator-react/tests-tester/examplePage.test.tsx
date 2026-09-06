import * as React from "react";
import { act, StrictMode } from "react";
import type { SurveyTesterModel } from "survey-creator-core/tester";
import { mount, prepareEnvironment, settle, unmount, waitFor } from "./testerSetup";
import { samples } from "../example/src/testerSamples";
import TesterPage from "../example/src/TesterPage.jsx";

let mockPageModel: SurveyTesterModel;
// Capture the model at the example's public component boundary; the renderer has its own tests.
jest.mock("survey-creator-react/tester", () => ({
  SurveyTester: (props: { model: SurveyTesterModel }) => { mockPageModel = props.model; return null; },
}), { virtual: true });

beforeAll(() => prepareEnvironment());
beforeEach(() => localStorage.clear());

function storedState(): any {
  return JSON.parse(localStorage.getItem("survey-creator-react-tester-state:" + samples[0].id) || "null");
}

it("keeps the example functional after StrictMode mounting and disposes on unmount", async() => {
  const one = await mount(<StrictMode><TesterPage /></StrictMode>);
  const model = mockPageModel;
  const dispose = jest.spyOn(model, "dispose");
  try {
    expect((model as any).gone).toBe(false);
    await act(async() => { model.openJson(undefined); });
    expect(model.screen).toBe("json");
  } finally {
    await unmount(one);
  }
  expect(dispose).toHaveBeenCalledTimes(1);
});

it("persists child selection, options and recorder cursor changes before a reload", async() => {
  const one = await mount(<TesterPage />);
  const model = mockPageModel;
  try {
    await act(async() => { model.runner.rowModelList[0].toggleSelected(); });
    await settle();
    expect(storedState().selectedTestNames).toEqual(model.getState().selectedTestNames);
    await act(async() => {
      model.settings.survey.setValue("stepDelayMs", 50);
      model.settings.survey.setValue("randomSeed", 123);
    });
    await settle();
    expect(storedState().hostOptions.stepDelayMs).toBe(50);
    expect(storedState().testOptions.randomSeed).toBe(123);
    const name = model.runner.rowModelList[0].name;
    await act(async() => { await model.openRecorder(name); });
    await waitFor(() => !model.recorder.busy);
    await act(async() => { await model.recorder.setCursor(0); });
    await waitFor(() => !model.recorder.busy);
    expect(storedState().screen).toBe("recorder");
    expect(storedState().recorder.cursor).toBe(0);
  } finally {
    await unmount(one);
  }
});

it("restores recorder state through StrictMode without saving the intermediate runner screen", async() => {
  const saved = {
    screen: "recorder",
    activeTestName: samples[0].tests.tests[0].name,
    selectedTestNames: [samples[0].tests.tests[1].name],
    hostOptions: { stepDelayMs: 0 },
    recorder: { cursor: 1 },
  };
  localStorage.setItem("survey-creator-react-tester-state:" + samples[0].id, JSON.stringify(saved));
  const one = await mount(<StrictMode><TesterPage /></StrictMode>);
  try {
    await waitFor(() => mockPageModel.screen === "recorder" && !mockPageModel.recorder.busy);
    expect(mockPageModel.recorder.cursor).toBe(1);
    expect(storedState().screen).toBe("recorder");
    expect(storedState().activeTestName).toBe(saved.activeTestName);
    expect(storedState().selectedTestNames).toEqual(saved.selectedTestNames);
    expect(storedState().recorder.cursor).toBe(1);
  } finally {
    await unmount(one);
  }
});
