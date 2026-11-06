import { QuestionDropdownModel, QuestionTagboxModel, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";

// The Filter Control (survey-library #11890) in the property grid: its own settings and the
// operators a question or a column offers as a filter field.
const matrixJson = (name: string, columns: Array<string>): any =>
  ({ type: "matrixdynamic", name: name, columns: columns.map(col => ({ name: col, title: col.toUpperCase(), cellType: "text" })) });

describe("Property grid: the Filter Control", () => {
  test("the data source lists only matrices and dynamic panels", () => {
    const survey = new SurveyModel({ elements: [
      { type: "text", name: "t1" }, matrixJson("m1", ["a"]),
      { type: "matrixdropdown", name: "m2", rows: ["r1"], columns: [{ name: "b" }] },
      { type: "paneldynamic", name: "p1", templateElements: [{ type: "text", name: "c" }] },
      { type: "filter", name: "f" }] });
    const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("f"));
    const editor = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("source");
    expect(editor.getType(), "#1").toBe("dropdown");
    expect(editor.choices.map(item => item.value), "#2").toEqual(["m1", "m2", "p1"]);
    editor.value = "m1";
    expect(survey.getQuestionByName("f").source, "#3").toBe("m1");
  });
  test("search fields are a tag box of the source's columns", () => {
    const survey = new SurveyModel({ elements: [
      { type: "filter", name: "f", source: "m1", showSearch: true, searchFields: ["country", "age"] },
      matrixJson("m1", ["country", "age"]), matrixJson("m2", ["country", "city"])] });
    const filter = <any>survey.getQuestionByName("f");
    const propertyGrid = new PropertyGridModelTester(filter);
    const editor = <QuestionTagboxModel>propertyGrid.survey.getQuestionByName("searchFields");
    expect(editor.getType(), "#1").toBe("tagbox");
    expect(editor.choices.map(item => item.value), "#2").toEqual(["country", "age"]);
    expect(editor.choices.map(item => item.text), "#3").toEqual(["COUNTRY", "AGE"]);
    expect(Array.from(editor.value), "#4").toEqual(["country", "age"]);
    propertyGrid.survey.getQuestionByName("source").value = "m2";
    expect(editor.choices.map(item => item.value), "#5").toEqual(["country", "city"]);
    expect(Array.from(filter.searchFields), "#6: age is not in the new source, country stays").toEqual(["country"]);
    editor.value = ["country", "city"];
    expect(Array.from(filter.searchFields), "#7").toEqual(["country", "city"]);
  });
  test("filter operators are a tag box with operator names", () => {
    const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" }] });
    const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
    const editor = <QuestionTagboxModel>propertyGrid.survey.getQuestionByName("filterOperators");
    expect(editor.getType(), "#1").toBe("tagbox");
    expect(editor.choices.length, "#2").toBe(13);
    expect(editor.choices[2].value, "#3").toBe("equal");
    expect(editor.choices[2].text, "#4").toBe("Equals");
  });
  test("dataList stays a text area", () => {
    const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" }] });
    const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
    expect(propertyGrid.survey.getQuestionByName("dataList").getType()).toBe("comment");
  });
});
