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
  MatrixDropdownColumn,
  QuestionMatrixModel,
  Serializer,
  ElementFactory,
  QuestionFactory
} from "survey-core";
import { QuestionConverter } from "../src/questionconverter";
import { QuestionConvertMode, settings } from "../src/settings";

test("get converted classes", () => {
  settings.questionConvertMode = QuestionConvertMode.CompatibleTypes;
  var classes = QuestionConverter.getConvertToClasses("radiogroup");
  expect(classes.length >= 3).toBeTruthy();
  expect(classes.indexOf("dropdown") > -1).toBeTruthy();
  classes = QuestionConverter.getConvertToClasses("text");
  expect(classes).toHaveLength(1);
  expect(classes[0]).toEqual("comment");
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
  expect(classes).toHaveLength(1);
  classes = QuestionConverter.getConvertToClasses("radiogroup", [
    "radiogroup",
    "comment",
    "text"
  ]);
  expect(classes).toHaveLength(0);
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
  QuestionConverter.convertObject(q1, "checkbox");
  QuestionConverter.convertObject(q2, "text");
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
test("Convert to custom component", () => {
  ComponentCollection.Instance.add({
    name: "fullname",
    title: "Full Name",
    elementsJSON: []
  });
  const survey = new SurveyModel({ questions: [{ type: "text", name: "q1" }] });
  const questionText = survey.getAllQuestions()[0];
  const component = QuestionConverter.convertObject(questionText, "fullname");
  expect(component.name).toBe("q1");
  ComponentCollection.Instance.clear();
});
test("Convert choices to rateValues", () => {
  const survey = new SurveyModel({ questions: [{ type: "radiogroup", name: "q1", choices: ["i1", "i2"] }] });
  const src = survey.getAllQuestions()[0];
  const dest = <QuestionRatingModel>QuestionConverter.convertObject(src, "rating");
  expect(dest.getType()).toBe("rating");
  expect(dest.rateValues).toHaveLength(2);
  expect(dest.rateValues[0].value).toEqual("i1");
});
test("Convert rateValues to choices", () => {
  const survey = new SurveyModel({ questions: [{ type: "rating", name: "q1", rateValues: ["i1", "i2"] }] });
  const src = survey.getAllQuestions()[0];
  const dest = <QuestionRadiogroupModel>QuestionConverter.convertObject(src, "radiogroup");
  expect(dest.getType()).toBe("radiogroup");
  expect(dest.choices).toHaveLength(2);
  expect(dest.choices[0].value).toEqual("i1");
});
test("Do not convert default choices", () => {
  const survey = new SurveyModel({ questions: [{ type: "radiogroup", name: "q1", choices: ["item1", "item2", "item3"] }] });
  const src = survey.getAllQuestions()[0];
  const dest = <QuestionRatingModel>QuestionConverter.convertObject(src, "rating", { type: "radiogroup", name: "question1", choices: ["item1", "item2", "item3"] });
  expect(dest.getType()).toBe("rating");
  expect(dest.rateValues).toHaveLength(0);
});
test("Convert text question to image", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage();
  var q1 = <QuestionRadiogroupModel>page.addNewQuestion("text");
  QuestionConverter.convertObject(q1, "image");
  expect((<Base>(<any>page.elements[0])).getType()).toEqual("image");
  var newQ1 = <QuestionImageModel>page.elements[0];
  expect(newQ1.imageLink).toEqual("https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg");
});
test("Convert text and radio question to image picker", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage();
  var q1 = <QuestionRadiogroupModel>page.addNewQuestion("text");
  var q2 = <QuestionRadiogroupModel>page.addNewQuestion("radiogroup");
  QuestionConverter.convertObject(q1, "imagepicker");
  QuestionConverter.convertObject(q2, "imagepicker");
  expect((<Base>(<any>page.elements[0])).getType()).toEqual("imagepicker");
  expect((<Base>(<any>page.elements[1])).getType()).toEqual("imagepicker");
  var newQ1 = <QuestionImagePickerModel>page.elements[0];
  var newQ2 = <QuestionImagePickerModel>page.elements[1];
  expect(newQ1.choices).toHaveLength(4);
  expect(newQ1.choices[0].value).toEqual("lion");
  expect(newQ1.choices[0].imageLink).toEqual("https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg");
  expect(newQ2.choices).toHaveLength(3);
  expect(newQ2.choices[0].value).toEqual("item1");
  expect(newQ2.choices[0].imageLink).toBeFalsy();
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
  QuestionConverter.convertObject(q1, "matrix_new");
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
  QuestionConverter.convertObject(q2, "matrixdropdown_new");
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
  QuestionConverter.convertObject(q1, "matrix_new");
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
  QuestionConverter.convertObject(q2, "matrixdropdown");
  expect((<Base>(<any>page.elements[3])).getType()).toEqual("matrixdropdown");
  newQ2 = <QuestionMatrixDropdownModel>page.elements[3];
  expect(newQ2.columns[0].title).toEqual("Column 1");
  expect(newQ2.columns[0].name).toEqual("Column 1");
  expect(newQ2.columns[1].title).toEqual("Col2");
  expect(newQ2.columns[1].name).toEqual("Column 2");
});