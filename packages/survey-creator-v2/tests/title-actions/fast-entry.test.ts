import { FastEntryEditor } from "../../src/property-grid/fast-entry";
import { QuestionRadiogroupModel } from "survey-knockout";

test("Create survey with editingObj", () => {
  var originalElement = new QuestionRadiogroupModel("originalElement");
  originalElement.choices = [1, 2, 3];

  var fastEntryEditor = new FastEntryEditor(originalElement.choices);
  expect(fastEntryEditor.survey.comment.value).toEqual("1\n2\n3");
  fastEntryEditor.survey.comment.value = "1|item1\n2\n3\n4|item4";
  fastEntryEditor.apply();
  expect(originalElement.choices).toHaveLength(4);
  expect(originalElement.choices[0].text).toEqual("item1");
  expect(originalElement.choices[3].value).toEqual(4);
  expect(originalElement.choices[3].text).toEqual("item4");
});
