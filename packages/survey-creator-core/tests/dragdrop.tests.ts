import { SurveyModel, QuestionTextModel, settings, DragTypeOverMeEnum } from "survey-core";
import { DragDropSurveyElements } from "../src/survey-elements";
import { CreatorTester } from "./creator-tester";

var assert: any;

test("Move item in row from left to right", () => {
  settings.supportCreatorV2 = true;
  for(let i = 0; i < 6; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    const ddHelper: any = new DragDropSurveyElements(survey);
    var target = new QuestionTextModel("q2");

    expect(page.rows.length).toBe(2); // "Iteration "+i+". Three is two rows");
    expect(page.rows[1].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = q2;

    ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(null);
    if(i == 0) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(null);
    if(i == 1) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q3);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 2) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q3);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 3) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q3", "q2", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q4, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q4);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 4) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q3", "q2", "q4"]); // "Iteration "+i+". End. The last row is q3, q2, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q4, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q4);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 5) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q3", "q4", "q2"]); // "Iteration "+i+". End. The last row is q3, q4, q2");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }
  }
});

test("Move item in row from right to left", () => {
  settings.supportCreatorV2 = true;
  for(let i = 0; i < 6; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;

    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(2); // "Iteration "+i+". Three is two rows");
    expect(page.rows[1].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = q4;

    ddHelper.dragOverCore(q4, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(null);
    if(i == 0) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q4, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(null);
    if(i == 1) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q3);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 2) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q3);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 3) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q4", "q3"]); // "Iteration "+i+". End. The last row is q2, q4, q3");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q2);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 4) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q4", "q3"]); // "Iteration "+i+". End. The last row is q2, q4, q3");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q2);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 5) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q4", "q2", "q3"]); // "Iteration "+i+". End. The last row is q4, q2, q3");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }
  }
});

test("Move item in row from center to right", () => {
  settings.supportCreatorV2 = true;
  for(let i = 0; i < 4; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(2); // "Iteration "+i+". Three is two rows");
    expect(page.rows[1].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = q3;

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(null);
    if(i == 0) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(null);
    if(i == 1) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q4, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q4);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 2) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q4, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q4);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 3) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q4", "q3"]); // "Iteration "+i+". End. The last row is q2, q4, q3");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }
  }
});

test("Move item in row from center to left", () => {
  settings.supportCreatorV2 = true;
  for(let i = 0; i < 4; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;

    var page = survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(2); // "Iteration "+i+". Three is two rows");
    expect(page.rows[1].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = q3;

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(null);
    if(i == 0) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(null);
    if(i == 1) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q2);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 2) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q2);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 3) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q3", "q2", "q4"]); // "Iteration "+i+". End. The last row is q3, q2, q4");
      expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
      continue;
    }
  }
});

test("Move item in prev row from left to multi-row", () => {
  settings.supportCreatorV2 = true;
  for(let i = 0; i < 6; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var q0 = page.addNewQuestion("text", "q0");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    q1.startWithNewLine = false;
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(2); // "Iteration "+i+". Three is two rows");
    expect(page.rows[1].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = q0;

    ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q2);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 0) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q0", "q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q0, q2, q3, q4");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q2);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 1) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q0", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q0, q3, q4");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q3);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 2) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q0", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q0, q3, q4");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q3);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 3) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q0", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q0, q4");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q4, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q4);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 4) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q0", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q0, q4");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q4, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q4);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 5) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q1");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4", "q0"]); // "Iteration "+i+". End. The last row is q2, q3, q4, q0");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }
  }
});

test("Move item in prev row from right to multi-row", () => {
  settings.supportCreatorV2 = true;
  for(let i = 0; i < 6; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var q0 = page.addNewQuestion("text", "q0");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    q1.startWithNewLine = false;
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(2); // "Iteration "+i+". Three is two rows");
    expect(page.rows[1].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = q1;

    ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q2);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 0) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q0"]); // "Iteration "+i+". End. The first row is q0");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q1", "q2", "q3", "q4"]); // "Iteration "+i+". End. The last row is q1, q2, q3, q4");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q2);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 1) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q0"]); // "Iteration "+i+". End. The first row is q0");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q1", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q1, q3, q4");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q3);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 2) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q0"]); // "Iteration "+i+". End. The first row is q0");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q1", "q3", "q4"]); // "Iteration "+i+". End. The last row is q2, q1, q3, q4");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q3);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 3) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q0"]); // "Iteration "+i+". End. The first row is q0");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q1", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q1, q4");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q4, DragTypeOverMeEnum.Left);
    expect(ddHelper.dropTarget).toBe(q4);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Left);
    if(i == 4) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q0"]); // "Iteration "+i+". End. The first row is q0");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q1", "q4"]); // "Iteration "+i+". End. The last row is q2, q3, q1, q4");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }

    ddHelper.dragOverCore(q4, DragTypeOverMeEnum.Right);
    expect(ddHelper.dropTarget).toBe(q4);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
    if(i == 5) {
      ddHelper.doDrop();
      expect(page.rows.length).toBe(2); // "Iteration "+i+". End. No rows should be added");
      expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q0"]); // "Iteration "+i+". End. The first row is q0");
      expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2", "q3", "q4", "q1"]); // "Iteration "+i+". End. The last row is q2, q3, q4, q1");
      expect(page.questions.length).toBe(5); // "Iteration "+i+". we have only four questions");
      continue;
    }
  }
});

test("Move item multi-row to single-row bottom, from bottom to top", () => {
  settings.supportCreatorV2 = true;
  for(let i = 2; i <= 4; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    var dragQuestionName = "q" + i;
    var dragQuestion = page.getQuestionByName(dragQuestionName);
    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(2); // "Iteration "+i+". Three is two rows");
    expect(page.rows[1].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = dragQuestion;

    ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Bottom);
    expect(ddHelper.dropTarget).toBe(q1);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Bottom);
    ddHelper.doDrop();
    var arr = ["q2", "q3", "q4"];
    arr.splice(i - 2, 1);
    expect(page.rows.length).toBe(3); // "Iteration "+i+". End. No rows should be added");
    expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q0");
    expect(page.rows[1].elements.map(e => e.name)).toStrictEqual([dragQuestionName]); // "Iteration "+i+". End. The first row is q0");
    expect(page.rows[2].elements.map(e => e.name)).toStrictEqual(arr); // "Iteration "+i+". End. The last row is q1, q2, q3, q4");
    expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
  }
});

test("Move item multi-row to single-row top, from bottom to top", () => {
  settings.supportCreatorV2 = true;
  for(let i = 2; i <= 4; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    var dragQuestionName = "q" + i;
    var dragQuestion = page.getQuestionByName(dragQuestionName);
    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(2); // "Iteration "+i+". Three is two rows");
    expect(page.rows[1].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = dragQuestion;

    ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Top);
    expect(ddHelper.dropTarget).toBe(q1);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Top);
    ddHelper.doDrop();
    var arr = ["q2", "q3", "q4"];
    arr.splice(i - 2, 1);
    expect(page.rows.length).toBe(3); // "Iteration "+i+". End. No rows should be added");
    expect(page.rows[0].elements.map(e => e.name)).toStrictEqual([dragQuestionName]); // "Iteration "+i+". End. The first row is q0");
    expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q0");
    expect(page.rows[2].elements.map(e => e.name)).toStrictEqual(arr); // "Iteration "+i+". End. The last row is q1, q2, q3, q4");
    expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
  }
});

test("Move item multi-row to single-row bottom, from top to bottom", () => {
  settings.supportCreatorV2 = true;
  for(let i = 2; i <= 4; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    var q1 = page.addNewQuestion("text", "q1");
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    var dragQuestionName = "q" + i;
    var dragQuestion = page.getQuestionByName(dragQuestionName);
    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(2); // "Iteration "+i+". Three is two rows");
    expect(page.rows[0].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = dragQuestion;

    ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Bottom);
    expect(ddHelper.dropTarget).toBe(q1);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Bottom);
    ddHelper.doDrop();
    var arr = ["q2", "q3", "q4"];
    arr.splice(i - 2, 1);
    expect(page.rows.length).toBe(3); // "Iteration "+i+". End. No rows should be added");
    expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(arr); // "Iteration "+i+". End. The last row is q1, q2, q3, q4");
    expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q0");
    expect(page.rows[2].elements.map(e => e.name)).toStrictEqual([dragQuestionName]); // "Iteration "+i+". End. The first row is q0");
    expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
  }
});

test("Move item multi-row to single-row top, from top to bottom", () => {
  settings.supportCreatorV2 = true;
  for(let i = 2; i <= 4; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    var q1 = page.addNewQuestion("text", "q1");
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    var dragQuestionName = "q" + i;
    var dragQuestion = page.getQuestionByName(dragQuestionName);
    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(2); // "Iteration "+i+". Three is two rows");
    expect(page.rows[0].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = dragQuestion;

    ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Top);
    expect(ddHelper.dropTarget).toBe(q1);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Top);
    ddHelper.doDrop();
    var arr = ["q2", "q3", "q4"];
    arr.splice(i - 2, 1);
    expect(page.rows.length).toBe(3); // "Iteration "+i+". End. No rows should be added");
    expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(arr); // "Iteration "+i+". End. The last row is q1, q2, q3, q4");
    expect(page.rows[1].elements.map(e => e.name)).toStrictEqual([dragQuestionName]); // "Iteration "+i+". End. The first row is q0");
    expect(page.rows[2].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q0");
    expect(page.questions.length).toBe(4); // "Iteration "+i+". we have only four questions");
  }
});

test("Move item between pages", () => {
  settings.supportCreatorV2 = true;
  var survey = new SurveyModel();
  survey["_isDesignMode"] = true;
  settings.supportCreatorV2 = true;
  var page = survey.addNewPage("p1");
  var page2 = survey.addNewPage("p2");
  var q1 = page.addNewQuestion("text", "q1");
  var q2 = page.addNewQuestion("text", "q2");
  var q3 = page2.addNewQuestion("text", "q3");
  const ddHelper: any = new DragDropSurveyElements(survey);

  expect(page.rows.length).toBe(2); // Three are two rows");
  expect(page2.rows.length).toBe(1); // Three is one rows");
  ddHelper.draggedElement = q1;

  ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Top);
  expect(ddHelper.dropTarget).toBe(q3);
  expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Top);
  ddHelper.doDrop();
  expect(page.elements.map(e => e.name)).toStrictEqual(["q2"]); // "End. The first page q2"
  expect(page2.elements.map(e => e.name)).toStrictEqual(["q1", "q3"]); // "End. The last page is q1, q3"
  expect(page.rows.length).toBe(1); // Three is one rows");
  expect(page2.rows.length).toBe(2); // Three are two rows");
});

test("Move item multi-row to single-row top, between pages", () => {
  settings.supportCreatorV2 = true;
  for(let i = 2; i <= 4; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var page2 = survey.addNewPage("p2");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    var q1 = page2.addNewQuestion("text", "q1");
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    var dragQuestionName = "q" + i;
    var dragQuestion = page.getQuestionByName(dragQuestionName);
    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(1); // "Iteration "+i+". Three is one row
    expect(page.rows[0].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = dragQuestion;

    ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Top);
    expect(ddHelper.dropTarget).toBe(q1);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Top);
    ddHelper.doDrop();
    var arr = ["q2", "q3", "q4"];
    arr.splice(i - 2, 1);
    expect(page.rows.length).toBe(1); // Three is one row
    expect(page2.rows.length).toBe(2); // Three are two rows
    expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(arr); // "Iteration "+i+". End. The last row is q1, q2, q3, q4");
    expect(page2.rows[0].elements.map(e => e.name)).toStrictEqual([dragQuestionName]); // "Iteration "+i+". End. The first row is q0");
    expect(page2.rows[1].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q0");
    expect(page.rows[0].elements[0].startWithNewLine).toBeTruthy(); // "Iteration "+i+". End. The first element SWNL = true");
  }
});

test("Move item multi-row to single-row bottom, between pages", () => {
  settings.supportCreatorV2 = true;
  for(let i = 2; i <= 4; i++) {
    var survey = new SurveyModel();
    survey["_isDesignMode"] = true;
    settings.supportCreatorV2 = true;
    var page = survey.addNewPage("p1");
    var page2 = survey.addNewPage("p2");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var q4 = page.addNewQuestion("text", "q4");
    var q1 = page2.addNewQuestion("text", "q1");
    q3.startWithNewLine = false;
    q4.startWithNewLine = false;
    var dragQuestionName = "q" + i;
    var dragQuestion = page.getQuestionByName(dragQuestionName);
    const ddHelper: any = new DragDropSurveyElements(survey);

    expect(page.rows.length).toBe(1); // "Iteration "+i+". Three is one row
    expect(page.rows[0].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the last row");
    ddHelper.draggedElement = dragQuestion;

    ddHelper.dragOverCore(q1, DragTypeOverMeEnum.Bottom);
    expect(ddHelper.dropTarget).toBe(q1);
    expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Bottom);
    ddHelper.doDrop();
    var arr = ["q2", "q3", "q4"];
    arr.splice(i - 2, 1);
    expect(page.rows.length).toBe(1); // Three is one row
    expect(page2.rows.length).toBe(2); // Three are two rows
    expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(arr); // "Iteration "+i+". End. The last row is q1, q2, q3, q4");
    expect(page2.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // "Iteration "+i+". End. The first row is q0");
    expect(page2.rows[1].elements.map(e => e.name)).toStrictEqual([dragQuestionName]); // "Iteration "+i+". End. The first row is q0");
    expect(page.rows[0].elements[0].startWithNewLine).toBeTruthy(); // "Iteration "+i+". End. The first element SWNL = true");
  }
});

test("Move item from nowhere (creator toolbox) to page", () => {
  settings.supportCreatorV2 = true;
  var survey = new SurveyModel();
  survey["_isDesignMode"] = true;
  settings.supportCreatorV2 = true;
  var page = survey.addNewPage("p1");
  var q1 = new QuestionTextModel("q1");
  var q2 = page.addNewQuestion("text", "q2");
  const ddHelper: any = new DragDropSurveyElements(survey);

  expect(page.rows.length).toBe(1); // "Iteration "+i+". Three is one row
  expect(page.rows[0].elements.length).toBe(1); // "Iteration "+i+". There are three elements in the last row");
  ddHelper.draggedElement = q1;

  ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Top);
  expect(ddHelper.dropTarget).toBe(q2);
  expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Top);
  ddHelper.doDrop();
  expect(page.rows.length).toBe(2); // Three are two rows
  expect(page.rows[0].elements.map(e => e.name)).toStrictEqual(["q1"]); // First row q1
  expect(page.rows[1].elements.map(e => e.name)).toStrictEqual(["q2"]); // Second row q2
  expect(page.elements.map(e => e.name)).toStrictEqual(["q1", "q2"]);
});

test("Move new question under row with several questions", () => {
  settings.supportCreatorV2 = true;
  const survey = new SurveyModel();
  survey["_isDesignMode"] = true;
  settings.supportCreatorV2 = true;
  const page = survey.addNewPage("p1");
  const q1 = page.addNewQuestion("text", "q1");
  const q2 = page.addNewQuestion("text", "q2");
  const q3 = page.addNewQuestion("text", "q3");
  q2.startWithNewLine = false;
  const ddHelper: any = new DragDropSurveyElements(survey);

  expect(page.rows.length).toBe(2); // "Iteration "+i+". Three are two rows
  expect(page.rows[0].elements.length).toBe(2); // "Iteration "+i+". There are two elements in the first row");

  var newQuestion = new QuestionTextModel("q4");
  ddHelper.draggedElement = newQuestion;

  ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Top, true);
  expect(ddHelper.dropTarget).toBe(q3);
  expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Top);
  ddHelper.doDrop();

  expect(page.rows.length).toBe(3); // "There are 3 rows");
  expect(page.rows[0].elements.length).toBe(2); // "We still have two elements in the first row");
  expect(page.rows[1].elements.length).toBe(1); // "One element in the second row");
  expect(page.rows[1].elements[0].name).toBe("q4"); // "New question is in the second row");
  expect(page.rows[1].elements[0].startWithNewLine).toBe(true); // "New question starts with new line");
});

test("Move new question inside the row with several questions", () => {
  settings.supportCreatorV2 = true;
  const survey = new SurveyModel();
  survey["_isDesignMode"] = true;
  settings.supportCreatorV2 = true;
  const page = survey.addNewPage("p1");
  const q1 = page.addNewQuestion("text", "q1");
  const q2 = page.addNewQuestion("text", "q2");
  const q3 = page.addNewQuestion("text", "q3");
  q2.startWithNewLine = false;
  const ddHelper: any = new DragDropSurveyElements(survey);

  expect(page.rows.length).toBe(2); // "Iteration "+i+". Three are two rows
  expect(page.rows[0].elements.length).toBe(2); // "Iteration "+i+". There are two elements in the first row");

  var newQuestion = new QuestionTextModel("q4");
  ddHelper.draggedElement = newQuestion;

  ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Right, true);
  expect(ddHelper.dropTarget).toBe(q2);
  expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
  ddHelper.doDrop();

  expect(page.rows.length).toBe(2); // "There are 2 rows");
  expect(page.rows[0].elements.length).toBe(3); // "We still have two elements in the first row");
  expect(page.rows[1].elements.length).toBe(1); // "One element in the second row");
  expect(page.rows[0].elements[2].name).toBe("q4"); // "New question is in the first row");
  expect(page.rows[0].elements[2].startWithNewLine).toBe(false); // "New question is on the same line");
});

test("Drag Drop Question with Multiline (StartWithNewLine === false)", () => {
  settings.supportCreatorV2 = true;
  const survey = new SurveyModel();
  survey["_isDesignMode"] = true;
  settings.supportCreatorV2 = true;
  const page = survey.addNewPage("p1");

  const q1 = page.addNewQuestion("text", "q1");
  const q2 = page.addNewQuestion("text", "q2");
  const q3 = page.addNewQuestion("text", "q3");
  const q4 = page.addNewQuestion("text", "q4");
  q3.startWithNewLine = false;
  q4.startWithNewLine = false;
  const ddHelper: any = new DragDropSurveyElements(survey);

  expect(page.rows.length).toBe(2); // "Iteration "+i+". Three are two rows
  expect(page.rows[1].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the second row");
  expect(page.rows[0].elements[0].name).toBe("q1"); // "r1 q1 check");
  expect(page.rows[1].elements[0].name).toBe("q2"); // "r2 q2 check");
  expect(page.rows[1].elements[1].name).toBe("q3"); // "r2 q3 check");
  expect(page.rows[1].elements[2].name).toBe("q4"); // "r2 q4 check");

  ddHelper.draggedElement = q2;
  ddHelper.dragOverCore(q3, DragTypeOverMeEnum.Right);
  expect(ddHelper.dropTarget).toBe(q3);
  expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
  ddHelper.doDrop();

  expect(page.rows.length).toBe(2); // "There are 2 rows");
  expect(page.rows[0].elements[0].name).toBe("q1"); // "r1 q1 check");
  expect(page.rows[1].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the second row");
  expect(page.rows[1].elements[0].name).toBe("q3"); // "r2 q3 check");
  expect(page.rows[1].elements[1].name).toBe("q2"); // "r2 q2 check");
  expect(page.rows[1].elements[2].name).toBe("q4"); // "r2 q4 check");
});

test("Drag Drop Question with Multiline (StartWithNewLine === false)", () => {
  settings.supportCreatorV2 = true;
  const survey = new SurveyModel();
  survey["_isDesignMode"] = true;
  settings.supportCreatorV2 = true;
  const page = survey.addNewPage("p1");
  const q1 = page.addNewQuestion("text", "q1");
  const q2 = page.addNewQuestion("text", "q2");
  const q3 = page.addNewQuestion("text", "q3");
  q2.startWithNewLine = false;
  const ddHelper: any = new DragDropSurveyElements(survey);

  expect(page.rows.length).toBe(2); // "Iteration "+i+". Three are two rows
  expect(page.rows[1].elements.length).toBe(1); // "Iteration "+i+". There is one element in the second row");
  expect(page.rows[0].elements[0].name).toBe("q1"); // "r1 q1 check");
  expect(page.rows[0].elements[1].name).toBe("q2"); // "r1 q2 check");
  expect(page.rows[1].elements[0].name).toBe("q3"); // "r2 q3 check");

  ddHelper.draggedElement = q3;
  ddHelper.dragOverCore(q2, DragTypeOverMeEnum.Right);
  expect(ddHelper.dropTarget).toBe(q2);
  expect(ddHelper.dropTarget.dragTypeOverMe).toBe(DragTypeOverMeEnum.Right);
  ddHelper.doDrop();

  expect(page.rows.length).toBe(1); // "There are 1 rows");
  expect(page.rows[0].elements.length).toBe(3); // "Iteration "+i+". There are three elements in the second row");
  expect(page.rows[0].elements[0].name).toBe("q1"); // "r1 q1 check");
  expect(page.rows[0].elements[1].name).toBe("q2"); // "r1 q2 check");
  expect(page.rows[0].elements[2].name).toBe("q3"); // "r1 q3 check");
});

test("onModified is raised when frop from toolbox", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
          }
        ]
      }
    ]
  };
  let modifiedLog = "";
  creator.onModified.add((sender, options) => {
    modifiedLog += "->" + options.type;
  });
  var q1 = new QuestionTextModel("q1");
  const ddHelper: any = creator.dragDropSurveyElements;
  ddHelper.draggedElement = q1;
  ddHelper.dragOverCore(creator.survey.getQuestionByName("question1"), DragTypeOverMeEnum.Top);
  ddHelper.allowDropHere = true;
  ddHelper.drop();

  expect(modifiedLog).toBe("->PROPERTY_CHANGED->ADDED_FROM_TOOLBOX");
});
