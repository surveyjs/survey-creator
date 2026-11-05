import { vi } from "vitest";
import { ChoicesRestful, QuestionDropdownModel, SurveyModel } from "survey-core";

// The fake XMLHttpRequest and its request log are installed by tests/vitest.setup.ts.
function getRecordedRequests(): Array<{ method: string, url: string }> {
  return (globalThis as any).__fakeXhrRequests;
}

beforeEach(() => {
  ChoicesRestful.clearCache();
});

test("choicesByUrl request does not reach the network and fails as a refused connection", async () => {
  const survey = new SurveyModel({
    elements: [{ type: "dropdown", name: "q1", choicesByUrl: { url: "myUrl" } }]
  });
  const question = <QuestionDropdownModel>survey.getQuestionByName("q1");
  expect(getRecordedRequests()).toEqual([{ method: "GET", url: "myUrl" }]);
  expect(question.choicesByUrl.isRunning).toBe(true);

  await vi.waitFor(() => expect(question.choicesByUrl.isRunning).toBe(false));
  const error: any = question.choicesByUrl.error;
  expect(error).toBeTruthy();
  expect(error.getErrorType()).toBe("webrequest");
  expect(error.status).toBe("");
  expect(error.response).toBe("");
  expect(question.errors).toHaveLength(1);
  expect(question.errors[0]).toBe(error);
  expect(question.visibleChoices).toHaveLength(0);
  expect(question.isReady).toBe(true);
});

// Relies on the previous test having recorded a request.
test("the request log starts empty in every test", () => {
  expect(getRecordedRequests()).toEqual([]);
});

test("a test's own XMLHttpRequest receives the request instead of the setup's fake", async () => {
  const opened: Array<string> = [];
  class OwnXMLHttpRequest {
    status = 200;
    statusText = "OK";
    response = JSON.stringify(["a", "b"]);
    responseText = this.response;
    onload: () => void;
    onerror: () => void;
    ontimeout: () => void;
    open(method: string, url: string) { opened.push(method + " " + url); }
    setRequestHeader() { }
    send() { setTimeout(() => this.onload(), 0); }
  }
  const prevXhr = (globalThis as any).XMLHttpRequest;
  (globalThis as any).XMLHttpRequest = OwnXMLHttpRequest;
  try {
    const survey = new SurveyModel({
      elements: [{ type: "dropdown", name: "q1", choicesByUrl: { url: "ownUrl" } }]
    });
    const question = <QuestionDropdownModel>survey.getQuestionByName("q1");
    await vi.waitFor(() => expect(question.choicesByUrl.isRunning).toBe(false));
    expect(opened).toEqual(["GET ownUrl"]);
    expect(question.visibleChoices.map(item => item.value)).toEqual(["a", "b"]);
    expect(question.choicesByUrl.error).toBeFalsy();
    expect(getRecordedRequests()).toEqual([]);
  } finally {
    (globalThis as any).XMLHttpRequest = prevXhr;
  }
});
