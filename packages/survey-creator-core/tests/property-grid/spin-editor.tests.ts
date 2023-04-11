import { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";

test("Check spin editor question", () => {
  const question = new QuestionSpinEditorModel("q1");
  expect(question.value).toBe(undefined);
  expect(question.renderedValue).toBe("0");
  question.unit = "pt";
  expect(question.value).toBe(undefined);
  expect(question.renderedValue).toBe("0pt");
  question["increase"]();
  expect(question.value).toBe(1);
  expect(question.renderedValue).toBe("1pt");
  question["decrease"]();
  expect(question.value).toBe(0);
  expect(question.renderedValue).toBe("0pt");
  question.value = undefined;
  expect(question.value).toBe(0);
  question.value = "incorrect_value";
  expect(question.value).toBe(0);
  question.value = "123.132.123";
  expect(question.value).toBe(123.132);
});

test("Check spin editor question with min/max values", () => {
  const question = new QuestionSpinEditorModel("q1");
  question.min = "0";
  question.max = "16";
  question.value = "-1";
  expect(question.value).toBe(0);
  question.value = "17";
  expect(question.value).toBe(16);
  question.value = "15";
  expect(question.value).toBe(15);
  question.value = "incorrect_value";
  expect(question.value).toBe(0);
  question.value = "15.15.15";
  expect(question.value).toBe(15.15);
});

test("Check spin editor question event callbacks", (done) => {
  const question = new QuestionSpinEditorModel("q1");
  question.value = 16;

  let beforeInputlog = "";
  question.onBeforeInput(<any>{ data: "5", preventDefault: () => { beforeInputlog += "->5"; } });
  question.onBeforeInput(<any>{ data: ".", preventDefault: () => { beforeInputlog += "->."; } });
  question.onBeforeInput(<any>{ data: "t", preventDefault: () => { beforeInputlog += "->t"; } });
  expect(beforeInputlog).toBe("->t");

  question.onKeyDown(<any>{ key: "ArrowDown", stopPropagation: () => {}, preventDefault: () => {} });
  expect(question.value).toBe(15);
  question.onKeyDown(<any>{ key: "ArrowUp", stopPropagation: () => {}, preventDefault: () => {} });
  expect(question.value).toBe(16);

  question.onDownButtonMouseDown();
  question.onButtonMouseUp();
  expect(question.value).toBe(15);
  question.onUpButtonMouseDown();
  question.onButtonMouseUp();
  expect(question.value).toBe(16);

  question.onBlur(<any>{ target: { tagName: "BUTTON", value: "17" } });
  expect(question.value).toBe(16);
  question.onBlur(<any>{ target: { tagName: "INPUT", value: "17" } });
  expect(question.value).toBe(17);

  question.value = 16;
  question.onDownButtonMouseDown();
  setTimeout(() => {
    question.onButtonMouseUp();
    expect(question.value).toBe(14);
    question.onUpButtonMouseDown();
    setTimeout(() => {
      question.onButtonMouseUp();
      expect(question.value).toBe(16);
      done();
    }, 200);
  }, 200);
});
