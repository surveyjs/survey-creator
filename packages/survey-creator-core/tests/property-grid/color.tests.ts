import { ItemValue, ListModel, PageModel, SurveyModel } from "survey-core";
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
  question.value = "rgba(1, 0, 1, 0.25)";
  expect(question.value).toBe("#010001");
  expect(question.renderedValue).toBe("#010001");
  question.value = "rgb(255, 255, 255)";
  expect(question.value).toBe("#ffffff");
  expect(question.renderedValue).toBe("#FFFFFF");
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

test("Check custom color question popup", () => {
  const survey = new SurveyModel({ elements: [{
    type: "color",
    name: "q1",
    choices: ["#f1b505", "#359ba7", "#6a3bff"]
  }] });
  survey.css = { color: { colorItem: "colorItemTest", colorDropdownIcon: "colorDropdownIconTest", colorDropdown: "colorDropdownTest" } };
  const question = <QuestionColorModel>survey.getAllQuestions()[0];
  const dropdownAction = question.dropdownAction;
  const popupModel = dropdownAction.popupModel;
  const listModel = <ListModel<ItemValue>>popupModel.contentComponentData.model;

  expect(dropdownAction.cssClasses.item).toBe("colorDropdownTest");
  expect(dropdownAction.iconName).toBe("colorDropdownIconTest");
  expect(popupModel.setWidthByTarget).toBeTruthy();
  expect(popupModel.positionMode).toBe("fixed");
  expect(listModel.cssClasses.itemBody).toBe("sv-list__item-body colorItemTest");

  expect(listModel.actions.map((item => item.value))).toEqual(["#f1b505", "#359ba7", "#6a3bff"]);
  question.choices = <Array<ItemValue>><unknown>["#94a500", "#6a3bff", "#359ba7"];
  expect(listModel.actions.map((item => item.value))).toEqual(["#94a500", "#6a3bff", "#359ba7"]);

  listModel.onSelectionChanged(listModel.actions[1]);
  expect(question.renderedValue).toBe("#6A3BFF");
  expect(listModel.isItemSelected(listModel.actions[1])).toBeTruthy();
  expect(listModel.isItemSelected(listModel.actions[0])).toBeFalsy();

  expect(listModel.actions[0].component).toBe("color-item");
});

test("QuestionColorModel renderedValue always HEX", () => {
  const q = new QuestionColorModel("q1");
  q.value = "rgba(1,2,3,1)";
  expect(q.renderedValue).toEqual("#010203");
});

test("QuestionColorModel renderedValue always HEX (value from survey)", () => {
  const survey = new SurveyModel({ elements: [{
    type: "color",
    name: "q1",
  }] });
  const q = survey.getQuestionByName("q1");
  survey.data = {
    "q1": "rgba(1,2,3,1)"
  };
  expect(q.renderedValue).toEqual("#010203");
});

test("QuestionColorModel renderedValue when _renderedValue and value are empty", () => {
  let q = new QuestionColorModel("q1");
  q._renderedValue = "";
  expect(q.renderedValue).toBe("#000000");
  q = new QuestionColorModel("q1");
  q._renderedValue = "";
  q.value = "";
  expect(q.renderedValue).toBe("#000000");
});