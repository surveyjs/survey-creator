import { FastEntryEditor } from "../../src/property-grid/fast-entry";
import { QuestionRadiogroupModel, QuestionTextBase, Serializer } from "survey-core";
import { EmptySurveyCreatorOptions } from "../../src/creator-settings";

test("Create survey with editingObj", () => {
  var originalElement = new QuestionRadiogroupModel("originalElement");
  originalElement.choices = [1, 2, 3];

  var fastEntryEditor = new FastEntryEditor(originalElement.choices);
  expect(fastEntryEditor.comment.titleLocation).toEqual("hidden");
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
test("options.minimumChoicesCount in FastEntry editor", () => {
  var originalElement = new QuestionRadiogroupModel("originalElement");
  originalElement.choices = [1, 2, 3];
  const options = new EmptySurveyCreatorOptions();
  options.minimumChoicesCount = 3;
  var fastEntryEditor = new FastEntryEditor(originalElement.choices, options);
  fastEntryEditor.comment.value = "1|item1\n2\n";
  var result = fastEntryEditor.apply();
  expect(result).toBeFalsy();
  expect(fastEntryEditor.comment.errors).toHaveLength(1);
  expect(fastEntryEditor.comment.errors[0].text).toEqual(
    "Please enter at least 3 items"
  );
  fastEntryEditor.comment.value = "1|item1\n2\n3\n";
  var result = fastEntryEditor.apply();
  expect(result).toBeTruthy();
  expect(fastEntryEditor.comment.errors).toHaveLength(0);
});
test("options.maximumChoicesCount in FastEntry editor", () => {
  var originalElement = new QuestionRadiogroupModel("originalElement");
  originalElement.choices = [1, 2];
  const options = new EmptySurveyCreatorOptions();
  options.maximumChoicesCount = 3;
  var fastEntryEditor = new FastEntryEditor(originalElement.choices, options);
  fastEntryEditor.comment.value = "1|item1\n2\n3\n4|item4";
  var result = fastEntryEditor.apply();
  expect(result).toBeFalsy();
  expect(fastEntryEditor.comment.errors).toHaveLength(1);
  expect(fastEntryEditor.comment.errors[0].text).toEqual(
    "Please limit the number of items from 4 to 3"
  );
  fastEntryEditor.comment.value = "1|item1\n2\n3\n";
  var result = fastEntryEditor.apply();
  expect(result).toBeTruthy();
  expect(fastEntryEditor.comment.errors).toHaveLength(0);
});
test("Placeholder for FastEntry editor", () => {
  const originalElement = new QuestionRadiogroupModel("originalElement");
  const options = new EmptySurveyCreatorOptions();
  const fastEntryEditor = new FastEntryEditor(originalElement.choices, options);
  expect((fastEntryEditor.editSurvey.getAllQuestions()[0] as QuestionTextBase).placeholder).toEqual("You can set data in the following format:\nvalue1|text\nvalue2");
});
