import {
  Base,
  SurveyModel,
  QuestionRadiogroupModel,
  QuestionCommentModel,
  QuestionCheckboxModel,
  QuestionTextModel,
  ComponentCollection,
  QuestionRatingModel,
  QuestionImagePickerModel,
  QuestionImageModel,
  QuestionMatrixDropdownModel,
  QuestionMatrixDynamicModel,
  QuestionMatrixModel,
  Serializer,
  ElementFactory,
  QuestionFactory,
  PanelModel,
  QuestionPanelDynamicModel,
  CustomWidgetCollection
} from "survey-core";
import { QuestionConverter } from "../src/questionconverter";
import { QuestionConvertMode, settings } from "../src/creator-settings";

test("get converted classes", () => {
  settings.questionConvertMode = QuestionConvertMode.CompatibleTypes;
  var classes = QuestionConverter.getConvertToClasses("radiogroup");
  expect(classes.length >= 3).toBeTruthy();
  expect(classes.indexOf("dropdown") > -1).toBeTruthy();
  classes = QuestionConverter.getConvertToClasses("text");
  expect(classes).toHaveLength(2);
  expect(classes.indexOf("comment") > -1).toBeTruthy();
  expect(classes.indexOf("text") > -1).toBeTruthy();
  settings.questionConvertMode = QuestionConvertMode.AllTypes;
});

test("get converted classes based on available types", () => {
  settings.questionConvertMode = QuestionConvertMode.CompatibleTypes;
  var classes = QuestionConverter.getConvertToClasses("radiogroup", []);
  expect(classes.length >= 3).toBeTruthy();
  classes = QuestionConverter.getConvertToClasses("radiogroup", [
    "dropdown",
    "checkbox"
  ]);
  expect(classes).toHaveLength(2);
  classes = QuestionConverter.getConvertToClasses("radiogroup", [
    "radiogroup",
    "checkbox",
    "text"
  ]);
  expect(classes).toHaveLength(2);
  classes = QuestionConverter.getConvertToClasses("radiogroup", [
    "radiogroup",
    "comment",
    "text"
  ]);
  expect(classes).toHaveLength(1);
  settings.questionConvertMode = QuestionConvertMode.AllTypes;
});

test("Convert question", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage();
  var panel = page.addNewPanel();
  var q1 = <QuestionRadiogroupModel>page.addNewQuestion("radiogroup");
  var q2 = <QuestionCommentModel>panel.addNewQuestion("comment");
  q1.choices = ["myitem1", "myitem2"];
  q2.placeholder = "type here";
  QuestionConverter.convertObject(q1, "checkbox", q1.toJSON());
  QuestionConverter.convertObject(q2, "text", q2.toJSON());
  expect((<Base>(<any>page.elements[1])).getType()).toEqual("checkbox");
  expect((<Base>(<any>panel.elements[0])).getType()).toEqual("text");
  var newQ1 = <QuestionCheckboxModel>page.elements[1];
  var newQ2 = <QuestionTextModel>panel.elements[0];
  expect(newQ1.choices).toHaveLength(2);
  expect(newQ1.choices[0].value).toEqual("myitem1");
  expect(newQ2.placeholder).toEqual("type here");
});
test("Allow to convert to all question types", () => {
  var classes = QuestionConverter.getConvertToClasses("text", []);
  expect(classes.length >= 5).toBeTruthy();
  classes = QuestionConverter.getConvertToClasses("radiogroup", [
    "dropdown",
    "checkbox"
  ]);
  expect(classes).toHaveLength(2);
  classes = QuestionConverter.getConvertToClasses("radiogroup", [
    "radiogroup",
    "checkbox",
    "text"
  ]);
  expect(classes).toHaveLength(2);
  classes = QuestionConverter.getConvertToClasses("radiogroup", [
    "radiogroup",
    "comment",
    "text"
  ]);
  expect(classes).toHaveLength(2);
});
test("Allow to convert to paneldynamic from panel and back", () => {
  let classes = QuestionConverter.getConvertToClasses("paneldynamic", ["text", "checkbox", "panel", "paneldynamic"]);
  expect(classes).toHaveLength(3);
  classes = QuestionConverter.getConvertToClasses("paneldynamic", ["text", "checkbox", "panel", "paneldynamic"], true);
  expect(classes).toHaveLength(4);
  classes = QuestionConverter.getConvertToClasses("panel", ["text", "checkbox", "panel", "paneldynamic"]);
  expect(classes).toHaveLength(3);
  classes = QuestionConverter.getConvertToClasses("panel", ["text", "checkbox", "panel", "paneldynamic"], true);
  expect(classes).toHaveLength(4);
});
test("Convert to custom component", () => {
  ComponentCollection.Instance.add({
    name: "fullname",
    title: "Full Name",
    elementsJSON: []
  });
  const survey = new SurveyModel({ questions: [{ type: "text", name: "q1" }] });
  const questionText = survey.getAllQuestions()[0];
  const component = QuestionConverter.convertObject(questionText, "fullname", questionText.toJSON());
  expect(component.name).toBe("q1");
  ComponentCollection.Instance.clear();
});
test("Convert choices to rateValues", () => {
  const survey = new SurveyModel({ questions: [{ type: "radiogroup", name: "q1", choices: ["i1", "i2"] }] });
  const src = survey.getAllQuestions()[0];
  const dest = <QuestionRatingModel>QuestionConverter.convertObject(src, "rating", src.toJSON());
  expect(dest.getType()).toBe("rating");
  expect(dest.rateValues).toHaveLength(2);
  expect(dest.rateValues[0].value).toEqual("i1");
});
test("Convert rateValues to choices", () => {
  const survey = new SurveyModel({ questions: [{ type: "rating", name: "q1", rateValues: ["i1", "i2"] }] });
  const src = survey.getAllQuestions()[0];
  const dest = <QuestionRadiogroupModel>QuestionConverter.convertObject(src, "radiogroup", src.toJSON());
  expect(dest.getType()).toBe("radiogroup");
  expect(dest.choices).toHaveLength(2);
  expect(dest.choices[0].value).toEqual("i1");
});
test("Do not convert default choices", () => {
  const survey = new SurveyModel({ questions: [{ type: "radiogroup", name: "q1", choices: ["item1", "item2", "item3"] }] });
  const src = survey.getAllQuestions()[0];
  const objJSON = QuestionConverter.getObjJSON(src, { type: "radiogroup", name: "question1", choices: ["item1", "item2", "item3"] });
  const dest = <QuestionRatingModel>QuestionConverter.convertObject(src, "rating", objJSON);
  expect(dest.getType()).toBe("rating");
  expect(dest.rateValues).toHaveLength(0);
});
test("Convert text question to image", () => {
  const survey = new SurveyModel();
  const page = survey.addNewPage();
  const q1 = <QuestionRadiogroupModel>page.addNewQuestion("text");
  const objJSON = QuestionConverter.getObjJSON(q1, {});
  QuestionConverter.convertObject(q1, "image", objJSON, { imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg" });
  expect(page.questions[0].getType()).toEqual("image");
  const newQ1 = <QuestionImageModel>page.questions[0];
  expect(newQ1.imageLink).toEqual("https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg");
});
test("Convert text and radio question to image picker", () => {
  const survey = new SurveyModel();
  const page = survey.addNewPage();
  const q1 = <QuestionRadiogroupModel>page.addNewQuestion("text");
  const q2 = <QuestionRadiogroupModel>page.addNewQuestion("radiogroup");
  const q3 = <QuestionRadiogroupModel>page.addNewQuestion("radiogroup");
  const q4 = <QuestionRadiogroupModel>page.addNewQuestion("radiogroup");
  q2.choices = ["item1", "item2"];
  q4.choices = [];
  const defaultJSON = settings.toolbox.defaultJSON.imagepicker;
  const defaultObjJSON = settings.toolbox.defaultJSON.radiogroup;
  q3.choices = defaultObjJSON.choices;
  QuestionConverter.convertObject(q1, "imagepicker", QuestionConverter.getObjJSON(q1, undefined), defaultJSON);
  QuestionConverter.convertObject(q2, "imagepicker", QuestionConverter.getObjJSON(q2, defaultObjJSON), defaultJSON);
  QuestionConverter.convertObject(q3, "imagepicker", QuestionConverter.getObjJSON(q3, defaultObjJSON), defaultJSON);
  QuestionConverter.convertObject(q4, "imagepicker", QuestionConverter.getObjJSON(q4, defaultObjJSON), defaultJSON);
  expect(page.questions[0].getType()).toEqual("imagepicker");
  expect(page.questions[1].getType()).toEqual("imagepicker");
  expect(page.questions[2].getType()).toEqual("imagepicker");
  expect(page.questions[3].getType()).toEqual("imagepicker");
  const newQ1 = <QuestionImagePickerModel>page.questions[0];
  const newQ2 = <QuestionImagePickerModel>page.questions[1];
  const newQ3 = <QuestionImagePickerModel>page.questions[2];
  const newQ4 = <QuestionImagePickerModel>page.questions[3];
  expect(newQ1.choices).toHaveLength(4);
  expect(newQ1.choices[0].value).toEqual("Image 1");
  expect(newQ1.choices[0].imageLink).toEqual("https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg");
  expect(newQ2.choices).toHaveLength(2);
  expect(newQ2.choices[0].value).toEqual("item1");
  expect(newQ2.choices[0].imageLink).toBeFalsy();
  expect(newQ3.choices).toHaveLength(4);
  expect(newQ3.choices[0].value).toEqual("Image 1");
  expect(newQ3.choices[0].imageLink).toEqual("https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg");
  expect(newQ4.choices).toHaveLength(4);
  expect(newQ4.choices[0].value).toEqual("Image 1");
  expect(newQ4.choices[0].imageLink).toEqual("https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg");
});
test("Convert matrix question", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage();

  class QuestionMatrixDropdownModel_New extends QuestionMatrixDropdownModel {
    getType() { return "matrixdropdown_new"; }
  }
  Serializer.addClass("matrixdropdown_new", [], () => {
    new QuestionMatrixDropdownModel_New("");
  }, "matrixdropdown");
  QuestionFactory.Instance.registerQuestion("matrixdropdown_new", (name) => {
    var q = new QuestionMatrixDropdownModel_New(name);
    q.choices = [1, 2, 3, 4, 5];
    q.rows = QuestionFactory.DefaultRows;
    QuestionMatrixDropdownModel_New.addDefaultColumns(q);
    return q;
  });

  class QuestionMatrixModel_New extends QuestionMatrixModel {
    getType() { return "matrix_new"; }
  }
  Serializer.addClass("matrix_new", [], () => {
    return new QuestionMatrixModel_New("");
  },
  "matrix"
  );
  QuestionFactory.Instance.registerQuestion("matrix_new", (name) => {
    var q = new QuestionMatrixModel_New(name);
    q.rows = QuestionFactory.DefaultRows;
    q.columns = QuestionFactory.DefaultColums;
    return q;
  });

  var q1 = <QuestionMatrixDropdownModel>page.addNewQuestion("matrixdropdown_new");
  q1.columns[1].title = "Col2";
  expect(q1.columns[0].title).toEqual("Column 1");
  expect(q1.columns[0].name).toEqual("Column 1");
  expect(q1.columns[1].title).toEqual("Col2");
  expect(q1.columns[1].name).toEqual("Column 2");
  QuestionConverter.convertObject(q1, "matrix_new", q1.toJSON());
  expect((<Base>(<any>page.elements[0])).getType()).toEqual("matrix_new");
  var newQ1 = <QuestionMatrixModel>page.elements[0];
  expect(newQ1.columns[0].text).toEqual("Column 1");
  expect(newQ1.columns[0].value).toEqual("Column 1");
  expect(newQ1.columns[1].text).toEqual("Col2");
  expect(newQ1.columns[1].value).toEqual("Column 2");

  var q2 = <QuestionMatrixModel>page.addNewQuestion("matrix_new");
  q2.columns[1].text = "Col2";
  expect(q2.columns[0].text).toEqual("Column 1");
  expect(q2.columns[0].value).toEqual("Column 1");
  expect(q2.columns[1].text).toEqual("Col2");
  expect(q2.columns[1].value).toEqual("Column 2");
  QuestionConverter.convertObject(q2, "matrixdropdown_new", q2.toJSON());
  expect((<Base>(<any>page.elements[1])).getType()).toEqual("matrixdropdown_new");
  var newQ2 = <QuestionMatrixDropdownModel>page.elements[1];
  expect(newQ2.columns[0].title).toEqual("Column 1");
  expect(newQ2.columns[0].name).toEqual("Column 1");
  expect(newQ2.columns[1].title).toEqual("Col2");
  expect(newQ2.columns[1].name).toEqual("Column 2");

  q1 = <QuestionMatrixDropdownModel>page.addNewQuestion("matrixdropdown");
  q1.columns[1].title = "Col2";
  expect(q1.columns[0].title).toEqual("Column 1");
  expect(q1.columns[0].name).toEqual("Column 1");
  expect(q1.columns[1].title).toEqual("Col2");
  expect(q1.columns[1].name).toEqual("Column 2");
  QuestionConverter.convertObject(q1, "matrix_new", q1.toJSON());
  expect((<Base>(<any>page.elements[2])).getType()).toEqual("matrix_new");
  newQ1 = <QuestionMatrixModel>page.elements[2];
  expect(newQ1.columns[0].text).toEqual("Column 1");
  expect(newQ1.columns[0].value).toEqual("Column 1");
  expect(newQ1.columns[1].text).toEqual("Col2");
  expect(newQ1.columns[1].value).toEqual("Column 2");

  q2 = <QuestionMatrixModel>page.addNewQuestion("matrix_new");
  q2.columns[1].text = "Col2";
  expect(q2.columns[0].text).toEqual("Column 1");
  expect(q2.columns[0].value).toEqual("Column 1");
  expect(q2.columns[1].text).toEqual("Col2");
  expect(q2.columns[1].value).toEqual("Column 2");
  QuestionConverter.convertObject(q2, "matrixdropdown", q2.toJSON());
  expect((<Base>(<any>page.elements[3])).getType()).toEqual("matrixdropdown");
  newQ2 = <QuestionMatrixDropdownModel>page.elements[3];
  expect(newQ2.columns[0].title).toEqual("Column 1");
  expect(newQ2.columns[0].name).toEqual("Column 1");
  expect(newQ2.columns[1].title).toEqual("Col2");
  expect(newQ2.columns[1].name).toEqual("Column 2");
});
test("Convert text to radio with unset default questions", () => {
  const survey = new SurveyModel();
  const page = survey.addNewPage();
  const q1 = page.addNewQuestion("text");
  QuestionConverter.convertObject(q1, "radiogroup", QuestionConverter.getObjJSON(q1, {}), { choices: ["Item 1", "Item 2", "Item 3"] });
  expect(page.questions[0].getType()).toEqual("radiogroup");
  const newQ1 = <QuestionRadiogroupModel>page.questions[0];
  expect(newQ1.choices).toHaveLength(3);
  expect(newQ1.choices[0].value).toEqual("Item 1");

  const q2 = page.addNewQuestion("text");
  QuestionConverter.convertObject(q2, "radiogroup", q2.toJSON());
  expect((<Base>(<any>page.elements[1])).getType()).toEqual("radiogroup");
  var newQ2 = <QuestionImagePickerModel>page.questions[1];
  expect(newQ2.choices).toHaveLength(3);
  expect(newQ2.choices[0].value).toEqual("item1");
});
test("Convert matrix to matrix dropdown and back", () => {
  var survey = new SurveyModel({
    elements: [
      {
        type: "matrix",
        name: "q1",
        columns: ["col1", { value: "col2", text: "Column 2" }, "col3", "col4"],
        rows: ["row1", "row2"]
      }
    ]
  });
  const q1 = <QuestionMatrixModel>survey.getQuestionByName("q1");
  const q2 = <QuestionMatrixDropdownModel>QuestionConverter.convertObject(q1, "matrixdropdown", q1.toJSON());
  expect(q2.getType()).toEqual("matrixdropdown");
  expect(q2.columns).toHaveLength(4);
  expect(q2.columns[0].name).toEqual("col1");
  expect(q2.columns[1].name).toEqual("col2");
  expect(q2.columns[1].title).toEqual("Column 2");
  const q3 = <QuestionMatrixModel>QuestionConverter.convertObject(q2, "matrix", q2.toJSON());
  expect(q3.getType()).toEqual("matrix");
  expect(q3.columns).toHaveLength(4);
  expect(q3.columns[0].value).toEqual("col1");
  expect(q3.columns[1].value).toEqual("col2");
  expect(q3.columns[1].text).toEqual("Column 2");
});
test("Convert matrix to matrix dynamic and back", () => {
  var survey = new SurveyModel({
    elements: [
      {
        type: "matrix",
        name: "q1",
        columns: ["col1", { value: "col2", text: "Column 2" }, "col3", "col4"],
        rows: ["row1", "row2"]
      }
    ]
  });
  const q1 = <QuestionMatrixModel>survey.getQuestionByName("q1");
  const q2 = <QuestionMatrixDynamicModel>QuestionConverter.convertObject(q1, "matrixdynamic", q1.toJSON());
  expect(q2.getType()).toEqual("matrixdynamic");
  expect(q2.columns).toHaveLength(4);
  expect(q2.columns[0].name).toEqual("col1");
  expect(q2.columns[1].name).toEqual("col2");
  expect(q2.columns[1].title).toEqual("Column 2");
  const q3 = <QuestionMatrixModel>QuestionConverter.convertObject(q2, "matrix", q2.toJSON());
  expect(q3.getType()).toEqual("matrix");
  expect(q3.columns).toHaveLength(4);
  expect(q3.columns[0].value).toEqual("col1");
  expect(q3.columns[1].value).toEqual("col2");
  expect(q3.columns[1].text).toEqual("Column 2");
});
test("Convert panel to panel dynamic and back", () => {
  var survey = new SurveyModel({
    elements: [
      {
        type: "panel",
        name: "panel",
        title: "Panel",
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2" },
        ]
      }
    ]
  });
  const panel1 = <PanelModel>survey.getPanelByName("panel");
  const q1 = <QuestionPanelDynamicModel>QuestionConverter.convertObject(<any>panel1, "paneldynamic", panel1.toJSON());
  expect(q1.getType()).toEqual("paneldynamic");
  expect(q1.title).toEqual("Panel");
  expect(q1.templateElements).toHaveLength(2);
  expect(q1.templateElements[1].name).toEqual("q2");
  const panel2 = <PanelModel><any>QuestionConverter.convertObject(q1, "panel", q1.toJSON());
  expect(panel2.getType()).toEqual("panel");
  expect(panel2.title).toEqual("Panel");
  expect(panel2.elements).toHaveLength(2);
  expect(panel2.elements[0].name).toEqual("q1");
});
test("Convert text to custom widget barrating", () => {
  const barType = "barrating";
  CustomWidgetCollection.Instance.clear();
  CustomWidgetCollection.Instance.addCustomWidget({
    name: barType,
    isFit: (question) => {
      return question.getType() == barType;
    },
  });
  if (!Serializer.findClass(barType)) {
    Serializer.addClass(barType, [], undefined, "dropdown");
    ElementFactory.Instance.registerCustomQuestion(barType);
  }

  const survey = new SurveyModel();
  const page = survey.addNewPage();
  const q1 = <QuestionRadiogroupModel>page.addNewQuestion("text");
  QuestionConverter.convertObject(q1, barType, q1.toJSON());
  expect((<Base>(<any>page.elements[0])).getType()).toEqual(barType);
  const newQ1 = <QuestionImagePickerModel>page.elements[0];
  expect(newQ1.choices).toHaveLength(5);
  expect(newQ1.choices[0].value).toEqual(1);
  expect(newQ1.choices[4].value).toEqual(5);

  Serializer.removeClass(barType);
  ElementFactory.Instance.unregisterElement(barType);
  CustomWidgetCollection.Instance.clear();
});
test("Remove incorrect validators, Bug#4228", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1",
        validators: [
          { type: "numeric", minValue: 10 },
          { type: "text", maxLength: 20 },
        ]
      },
      { type: "checkbox", name: "q2",
        validators: [
          { type: "answercount", minCount: 3 }
        ]
      }
    ]
  });
  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  expect(q1.validators).toHaveLength(2);
  expect(q2.validators).toHaveLength(1);

  const q1_1 = QuestionConverter.convertObject(q1, "comment", q1.toJSON());
  expect(q1_1.validators).toHaveLength(1);
  expect((<any>q1_1.validators[0]).maxLength).toBe(20);
  const q1_2 = QuestionConverter.convertObject(q1_1, "dropdown", q1_1.toJSON());
  expect(q1_2.validators).toHaveLength(0);

  const q2_1 = QuestionConverter.convertObject(q2, "tagbox", q2.toJSON());
  expect(q2_1.validators).toHaveLength(1);
  expect((<any>q2_1.validators[0]).minCount).toBe(3);
  const q2_2 = QuestionConverter.convertObject(q2_1, "dropdown", q2_1.toJSON());
  expect(q2_2.validators).toHaveLength(0);
});
test("Convert matrix into matrixdropdown, Bug#4455", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "matrix", name: "q1",
        columns: [{ value: 1, text: "Column 1" }],
        rows: [{ value: 1, text: "Row 1" }]
      }
    ]
  });
  const q1 = survey.getQuestionByName("q1");

  const q1_1 = <QuestionMatrixDropdownModel>QuestionConverter.convertObject(q1, "matrixdropdown", q1.toJSON());
  expect(q1_1.columns).toHaveLength(1);
  expect(q1_1.columns[0].name).toBe("col1");
  expect(q1_1.columns[0].title).toBe("Column 1");
});
test("Keep startWithNewLine property value for next question, Bug#4729", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", startWithNewLine: false }
    ]
  });
  let q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  expect(q2.startWithNewLine).toBeFalsy();
  QuestionConverter.convertObject(q1, "boolean", q1.toJSON());
  q1 = survey.getQuestionByName("q1");
  expect(q1.getType()).toBe("boolean");
  expect(q2.startWithNewLine).toBeFalsy();
});
const matrixdrodownDefaultJSON = {
  "name": "q1",
  "columns": [
    {
      "name": "Column 1"
    },
    {
      "name": "Column 2"
    },
    {
      "name": "Column 3"
    }
  ],
  "choices": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    "Row 1",
    "Row 2"
  ],
  "type": "matrixdropdown"
};
const matrixDefaultJSON = {
  "name": "q1",
  "columns": [
    "Column 1",
    "Column 2",
    "Column 3"
  ],
  "rows": [
    "Row 1",
    "Row 2"
  ],
  "type": "matrix"
};
test("Convert default matrix dropdown into single matrix, Bug#5025", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" }
    ]
  });
  const matrix1 = <QuestionMatrixDropdownModel>ElementFactory.Instance.createElement("matrixdropdown", "q2");
  expect(matrix1.columns).toHaveLength(3);
  expect(matrix1.rows).toHaveLength(2);
  expect(matrix1.columns[1].name).toBe("Column 2");
  expect(matrix1.rows[1].value).toBe("Row 2");
  survey.pages[0].addQuestion(matrix1);
  const matrix2 = QuestionConverter.convertObject(matrix1, "matrix", QuestionConverter.getObjJSON(matrix1, matrixdrodownDefaultJSON), matrixDefaultJSON);
  expect(matrix2.name).toBe("q2");
  expect(matrix2.columns).toHaveLength(3);
  expect(matrix2.rows).toHaveLength(2);
  expect(matrix2.columns[1].value).toBe("Column 2");
  expect(matrix2.rows[1].value).toBe("Row 2");
  const matrix3 = QuestionConverter.convertObject(matrix2, "matrixdropdown", QuestionConverter.getObjJSON(matrix2, matrixDefaultJSON), matrixdrodownDefaultJSON);
  expect(matrix3.name).toBe("q2");
  expect(matrix3.columns).toHaveLength(3);
  expect(matrix3.rows).toHaveLength(2);
  expect(matrix3.columns[1].name).toBe("Column 2");
  expect(matrix3.rows[1].value).toBe("Row 2");
});
test("get converted classes, it should include itself", () => {
  settings.questionConvertMode = QuestionConvertMode.CompatibleTypes;
  var classes = QuestionConverter.getConvertToClasses("radiogroup");
  expect(classes[0]).toEqual("radiogroup");
  settings.questionConvertMode = QuestionConvertMode.AllTypes;
});
