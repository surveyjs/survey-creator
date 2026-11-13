// The package targets React 17, ReactDOM.render is the API to mount into a real DOM node here.
/* eslint-disable react/no-deprecated */
import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { SurveyTextWorker, TextareaJsonEditorModel } from "survey-creator-core";
import { SurveyCreator } from "../src/SurveyCreator";
import { TabJsonEditorTextareaComponent } from "../src/tabs/JsonEditorTextarea";

describe("JSON tab textarea", () => {
  // Types keyCount characters with 100 ms between keys and returns the lints counted
  // while typing and after a one second pause.
  function typeKeys(keyCount: number): Array<number> {
    const creator = new SurveyCreator({ showJSONEditorTab: true });
    creator.JSON = { elements: [{ type: "text", name: "q1" }] };
    creator.activeTab = "json";
    const model = (creator.getPlugin("json") as any).model as TextareaJsonEditorModel;
    const container = document.createElement("div");
    document.body.appendChild(container);
    let lintCount = 0;
    SurveyTextWorker.onProcessJson = (): void => { lintCount++; };
    try {
      act(() => {
        ReactDOM.render(React.createElement(TabJsonEditorTextareaComponent, { data: model }), container);
      });
      const textarea = container.querySelector("textarea");
      lintCount = 0;
      for (let i = 0; i < keyCount; i++) {
        textarea.value = JSON.stringify({ title: "a".repeat(i + 1), elements: [{ type: "text", name: "q1" }] }, null, 2);
        act(() => {
          Simulate.change(textarea);
        });
        jest.advanceTimersByTime(100);
      }
      const whileTyping = lintCount;
      jest.advanceTimersByTime(1000);
      return [whileTyping, lintCount];
    } finally {
      SurveyTextWorker.onProcessJson = undefined;
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
    }
  }

  test("typing lints once, a second after the last key", () => {
    jest.useFakeTimers();
    try {
      const [typingN, pauseN] = typeKeys(10);
      expect(typingN).toBe(0);
      expect(pauseN).toBe(1);
      const [typing2N, pause2N] = typeKeys(20);
      expect(typing2N).toBe(0);
      expect(pause2N).toBe(1);
    } finally {
      jest.useRealTimers();
    }
  });
});
