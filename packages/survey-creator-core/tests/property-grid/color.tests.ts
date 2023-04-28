import { PageModel, SurveyModel } from "survey-core";
import { QuestionColorModel } from "../../src/custom-questions/question-color";

test("Check custom color question", () => {
  const question = new QuestionColorModel("q1");
  expect(question.renderedValue).toBe("#000000");
  expect(question.value).toBe(undefined);
  question.value = undefined;
  expect(question.value).toBe("#000000");
  expect(question.renderedValue).toBe("#000000");
  question.value = "incorrect_value";
  expect(question.value).toBe("#000000");
  expect(question.renderedValue).toBe("#000000");
  question.value = "fe#fe";
  expect(question.value).toBe("#fe0000");
  expect(question.renderedValue).toBe("#FE0000");
  question.value = "#fea";
  expect(question.value).toBe("#feafea");
  expect(question.renderedValue).toBe("#FEAFEA");
  question.value = "#fea123";
  expect(question.value).toBe("#fea123");
  expect(question.renderedValue).toBe("#FEA123");
  let renderValueChangedLog = "";
  question.onPropertyChanged.add((sender, options) => {
    if(options.name === "_renderedValue") {
      renderValueChangedLog += `-> ${options.newValue}`;
    }
  });
  question.value = "#fea123123";
  expect(renderValueChangedLog).toBe("-> undefined-> #fea123");
  expect(question.renderedValue).toBe("#FEA123");
});
test("Check custom color question event callbacks", () => {
  const question = new QuestionColorModel("q1");
  question.onColorInputChange(<any>{ target: {
    value: "#123123"
  } });
  expect(question.value).toBe("#123123");
  expect(question.getSwatchStyle()).toEqual({
    backgroundColor: "#123123"
  });
  question.onColorInputChange(<any>{ target: {
    value: "#F9F9F9"
  } });
  expect(question.value).toBe("#F9F9F9");
  expect(question.getSwatchStyle()).toEqual({
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
test("Check custom color question with survey mergeData", () => {
  const survey = new SurveyModel();
  const page = new PageModel("p1");
  const question = new QuestionColorModel("q1");
  page.addElement(question);
  survey.addPage(page);
  question.value = "#FFFFFF";
  expect(question.renderedValue).toBe("#FFFFFF");
  survey.mergeData({ "q1": "#9A2828" });
  expect(question.renderedValue).toBe("#9A2828");
});