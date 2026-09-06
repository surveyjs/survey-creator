import * as React from "react";
import { act } from "react";
import { Model } from "survey-core";
import { SurveyTesterModel } from "survey-creator-core/tester";
import { JsonEditorView } from "../src/tester/JsonEditorView";
import { SpectatorPane, TargetMark } from "../src/tester/SurveyPane";
import { mount, prepareEnvironment, settle, unmount } from "./testerSetup";
import { TesterHostStub, formatSuite, insuranceSurvey } from "./testerHostStub";

beforeAll(() => prepareEnvironment());

function createModel(): SurveyTesterModel {
  return new SurveyTesterModel(new TesterHostStub(insuranceSurvey,
    formatSuite({ name: "Review", tests: [{ name: "walk", steps: [] }] })));
}

it("preserves the JSON caret when typing in the middle of the document", async() => {
  const model = createModel();
  const one = await mount(<JsonEditorView model={model.json} />);
  try {
    const area = one.container.querySelector("textarea") as HTMLTextAreaElement;
    area.focus();
    const wanted = area.value.slice(0, 5) + "x" + area.value.slice(5);
    await act(async() => {
      // Use the native setter to reproduce a browser edit without updating React's value tracker.
      Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")!.set!.call(area, wanted);
      area.setSelectionRange(6, 6);
      area.dispatchEvent(new Event("input", { bubbles: true }));
    });
    await settle();
    expect(model.json.text).toBe(wanted);
    expect(area.value).toBe(wanted);
    expect(area.selectionStart).toBe(6);
    expect(area.selectionEnd).toBe(6);
  } finally {
    await unmount(one);
    model.dispose();
  }
});

it("prevents spectator keyboard edits while preserving focus and Tab navigation", async() => {
  const model = createModel();
  const survey = new Model({ elements: [{ type: "text", name: "city" }] });
  model.runner.survey = survey;
  const one = await mount(<SpectatorPane model={model.runner} />);
  const mark = new TargetMark();
  try {
    mark.apply(one.container, "city", true);
    const input = one.container.querySelector("input") as HTMLInputElement;
    expect(document.activeElement).toBe(input);
    for (const key of ["x", "Backspace", "Delete", "Enter", " ", "ArrowDown"]) {
      const event = new KeyboardEvent("keydown", { key: key, bubbles: true, cancelable: true });
      input.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(true);
    }
    for (const type of ["beforeinput", "paste", "cut", "drop", "click"]) {
      const event = new Event(type, { bubbles: true, cancelable: true });
      input.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(true);
    }
    const tab = new KeyboardEvent("keydown", { key: "Tab", bubbles: true, cancelable: true });
    input.dispatchEvent(tab);
    expect(tab.defaultPrevented).toBe(false);
    // Commands still operate on the same editable model.
    survey.setValue("city", "Athens");
    expect(survey.getValue("city")).toBe("Athens");
    expect(survey.mode).toBe("edit");
  } finally {
    mark.release();
    await unmount(one);
    model.dispose();
  }
});
