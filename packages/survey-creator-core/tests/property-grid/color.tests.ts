import { QuestionColorModel } from "../../src/custom-questions/question-color";

test("Check custom color question", () => {
  const question = new QuestionColorModel("q1");
  question.value = undefined;
  expect(question.value).toBe("#000000");
  question.value = "incorrect_value";
  expect(question.value).toBe("#000000");
  question.value = "fe#fe";
  expect(question.value).toBe("#FE0000");
  question.value = "#fea";
  expect(question.value).toBe("#FEAFEA");
  question.value = "#fea123";
  expect(question.value).toBe("#FEA123");
});
test("Check custom color question event callbacks", () => {
  const question = new QuestionColorModel("q1");
  question.onColorInputChange(<any>{ target: {
    value: "#123123"
  } });
  expect(question.value).toBe("#123123");
  expect(question.getColorSignStyle()).toEqual({
    backgroundColor: "#123123"
  });
  question.onColorInputChange(<any>{ target: {
    value: "#F9F9F9"
  } });
  expect(question.value).toBe("#F9F9F9");
  expect(question.getColorSignStyle()).toEqual({
    backgroundColor: "#F9F9F9"
  });
  let preventLog ="";
  question.onBeforeInput(<any>{ data: ".", preventDefault: () => {
    preventLog += "->.";
  } });
  question.onBeforeInput(<any>{ data: "+", preventDefault: () => {
    preventLog += "->+";
  } });
  question.onBeforeInput(<any>{ data: "#", preventDefault: () => {
    preventLog += "->#";
  } });
  question.onBeforeInput(<any>{ data: "1", preventDefault: () => {
    preventLog += "->1";
  } });
  question.onBeforeInput(<any>{ data: "a", preventDefault: () => {
    preventLog += "->a";
  } });
  expect(preventLog).toBe("->.->+");
});