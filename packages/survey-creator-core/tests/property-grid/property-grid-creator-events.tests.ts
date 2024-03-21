import { QuestionMatrixDynamicModel, Base, QuestionTextModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { CreatorTester } from "../creator-tester";
import { settings } from "../../src/creator-settings";

test("creator.onElementDeleting", () => {
  const savedNewJSON = settings.defaultNewSurveyJSON;
  settings.defaultNewSurveyJSON = {};
  const creator = new CreatorTester(undefined, undefined, false);
  creator.onElementDeleting.add((sender, options) => {
    if (options.element.isPage) {
      options.allowing = creator.survey.pages.indexOf(options.element) > 1;
    }
  });
  const survey = creator.survey;
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  survey.addNewPage("page3");
  var propertyGrid = new PropertyGridModelTester(survey, creator);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  const rows = pagesQuestion.visibleRows;
  pagesQuestion.removeRowUI(rows[0]);
  expect(survey.pages).toHaveLength(3);
  pagesQuestion.removeRowUI(rows[1]);
  expect(survey.pages).toHaveLength(3);
  pagesQuestion.removeRowUI(rows[2]);
  expect(survey.pages).toHaveLength(2);
  settings.defaultNewSurveyJSON = savedNewJSON;
});

test("Test event prevent default on typing text update mode, fix undo/redo #4889", () => {
  const testInput = document.createElement("input");
  const fakeInput = document.createElement("input");
  document.body.appendChild(testInput);
  document.body.appendChild(fakeInput);

  const question = new QuestionTextModel("q");
  const creator = new CreatorTester();
  creator.registerShortcut("undo_test", {
    name: "undo",
    affectedTab: "designer",
    hotKey: {
      ctrlKey: true,
      keyCode: 90,
    },
    macOsHotkey: {
      keyCode: 90,
    },
    execute: () => { log += "->undo"; }
  });
  creator.registerShortcut("redo_test", {
    name: "redo",
    affectedTab: "designer",
    hotKey: {
      ctrlKey: true,
      keyCode: 89,
    },
    macOsHotkey: {
      keyCode: 89,
    },
    execute: () => { log += "->redo"; }
  });
  let propertyGrid = new PropertyGridModelTester(question, creator);
  let questionName_RequiredOnBlur = propertyGrid.survey.getQuestionByName("name");
  let questionTitle_OnTyping = propertyGrid.survey.getQuestionByName("title");

  const eventCtrlZ = {
    target: testInput,
    keyCode: 90,
    ctrlKey: true,
    preventDefault: () => { log += "->preventDefaultZ"; }
  };
  const eventCtrlY = {
    target: testInput,
    keyCode: 89,
    ctrlKey: true,
    preventDefault: () => { log += "->preventDefaultY"; }
  };

  let log = "";
  questionName_RequiredOnBlur.onKeyDown(eventCtrlZ);
  expect(log).toBe(""); //, "text ctrl+Z for required property - call built-in undo

  questionName_RequiredOnBlur.onKeyDown(eventCtrlY);
  expect(log).toBe(""); //, "text ctrl+Y" for required property - call built-in redo

  testInput.value = questionName_RequiredOnBlur.value;

  questionName_RequiredOnBlur.onKeyDown(eventCtrlZ);
  expect(log).toBe("->undo"); //, "text ctrl+Z for required property - call creator undo, built-in undo will do nothing for the save values

  questionName_RequiredOnBlur.onKeyDown(eventCtrlY);
  expect(log).toBe("->undo->redo"); //, "text ctrl+Y" for required property - call creator redo, built-in undo will do nothing for the save values

  questionTitle_OnTyping.onKeyDown(eventCtrlZ);
  expect(log).toBe("->undo->redo->undo->preventDefaultZ"); //, "comment ctrl+Z" for onTyping property

  questionTitle_OnTyping.onKeyDown(eventCtrlY);
  expect(log).toBe("->undo->redo->undo->preventDefaultZ->redo->preventDefaultY"); //, "comment ctrl+Y" for onTyping property

  testInput.remove();
  fakeInput.remove();
});