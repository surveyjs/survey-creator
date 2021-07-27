import { FastEntryEditor } from "../../src/property-grid/fast-entry";
import { QuestionRadiogroupModel, Serializer } from "survey-core";

test("Create survey with editingObj", () => {
  var originalElement = new QuestionRadiogroupModel("originalElement");
  originalElement.choices = [1, 2, 3];

  var fastEntryEditor = new FastEntryEditor(originalElement.choices);
  expect(fastEntryEditor.comment.title).toEqual("Fast Entry");
  expect(fastEntryEditor.comment.value).toEqual("1\n2\n3");
  fastEntryEditor.comment.value = "1|item1\n2\n3\n4|item4";
  fastEntryEditor.apply();
  expect(originalElement.choices).toHaveLength(4);
  expect(originalElement.choices[0].text).toEqual("item1");
  expect(originalElement.choices[3].value).toEqual("4");
  expect(originalElement.choices[3].text).toEqual("item4");
});

test("Check unique value in itemValue", () => {
  var propValue = Serializer.findProperty("itemvalue", "value");
  var oldUnique = propValue.isUnique;
  propValue.isUnique = true;
  var originalElement = new QuestionRadiogroupModel("originalElement");
  originalElement.choices = [1, 2, 3];

  var fastEntryEditor = new FastEntryEditor(originalElement.choices);
  fastEntryEditor.comment.value = "1|item1\n1\n3\n4|item4";
  var result = fastEntryEditor.apply();
  expect(result).toBeFalsy();
  expect(fastEntryEditor.comment.errors).toHaveLength(1);
  expect(fastEntryEditor.comment.errors[0].text).toEqual(
    "Value '1' is not unique"
  );
  fastEntryEditor.comment.value = "1|item1\n2\n3\n4|item4";
  var result = fastEntryEditor.apply();
  expect(result).toBeTruthy();
  expect(fastEntryEditor.comment.errors).toHaveLength(0);

  propValue.isUnique = false;
  fastEntryEditor.comment.value = "1|item1\n1\n3\n4|item4";
  var result = fastEntryEditor.apply();
  expect(result).toBeTruthy();
  expect(fastEntryEditor.comment.errors).toHaveLength(0);

  propValue.isUnique = oldUnique;
});
