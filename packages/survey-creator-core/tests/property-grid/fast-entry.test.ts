import { FastEntryEditor } from "../../src/property-grid/fast-entry";
import { ItemValue, QuestionRadiogroupModel, QuestionTextBase, Serializer } from "survey-core";
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
test("options.onFastEntryFastEntryCallback in FastEntry editor", () => {
  var originalElement = new QuestionRadiogroupModel("originalElement");
  originalElement.choices = [1, 2, 3];
  const options = new EmptySurveyCreatorOptions();
  options.onFastEntryCallback = (items: ItemValue[], lines: string[]): ItemValue[] => {
    const res = new Array<ItemValue>();
    lines.forEach(line => {
      const index = line.indexOf("-");
      let val = line;
      if(index > -1) {
        val = line.substring(index + 1);
      }
      res.push(new ItemValue(val, line));
    });
    return res.length > 0 ? res : items;
  };
  var fastEntryEditor = new FastEntryEditor(originalElement.choices, options);
  fastEntryEditor.comment.value = "Option-1\nOption-2\nOption-3";
  var result = fastEntryEditor.apply();
  expect(result).toBeTruthy();
  const choices = originalElement.choices;
  expect(choices).toHaveLength(3);
  expect(choices[0].value).toBe(1);
  expect(choices[0].text).toBe("Option-1");
  expect(choices[2].value).toBe(3);
  expect(choices[2].text).toBe("Option-3");
});

test("Placeholder for FastEntry editor", () => {
  const originalElement = new QuestionRadiogroupModel("originalElement");
  const options = new EmptySurveyCreatorOptions();
  const fastEntryEditor = new FastEntryEditor(originalElement.choices, options);
  expect((fastEntryEditor.editSurvey.getAllQuestions()[0] as QuestionTextBase).placeholder).toEqual("Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules.");
});
test("Do not re-create with the same item.value", () => {
  const originalElement = new QuestionRadiogroupModel("originalElement");
  originalElement.choices = ["item1", "item2", "item3", "item4", "item5"];
  const choices = originalElement.choices;
  choices[0].setPropertyValue("#id", 1);
  choices[1].setPropertyValue("#id", 2);
  choices[4].setPropertyValue("#id", 5);
  const fastEntryEditor = new FastEntryEditor(choices, new EmptySurveyCreatorOptions());
  fastEntryEditor.comment.value = "item1\nitem6\nitem2\nitem5\nitem7\nitem8";
  fastEntryEditor.apply();
  expect(originalElement.choices).toHaveLength(6);
  expect(choices[0].value).toEqual("item1");
  expect(choices[0].getPropertyValue("#id")).toEqual(1);
  expect(choices[1].value).toEqual("item6");
  expect(choices[1].getPropertyValue("#id")).toBeUndefined();
  expect(choices[2].value).toEqual("item2");
  expect(choices[2].getPropertyValue("#id")).toEqual(2);
  expect(choices[3].value).toEqual("item5");
  expect(choices[3].getPropertyValue("#id")).toEqual(5);
  expect(choices[4].value).toEqual("item7");
  expect(choices[4].getPropertyValue("#id")).toBeUndefined();
  expect(choices[5].value).toEqual("item8");
  expect(choices[5].getPropertyValue("#id")).toBeUndefined();
});
test("Work correctly with 0 number, Bug#6716", () => {
  Serializer.addProperty("itemvalue", { name: "score:number" });
  const originalElement = new QuestionRadiogroupModel("originalElement");
  originalElement.choices = ["item1", "item2", "item2"];
  const choices = originalElement.choices;
  choices[0].score = 0;
  choices[1].score = 1;
  choices[2].score = 0;
  const fastEntryEditor = new FastEntryEditor(choices, new EmptySurveyCreatorOptions(), undefined, ["value", "text", "score"]);
  expect(fastEntryEditor.comment.value).toEqual("item1||0\nitem2||1\nitem2||0");
  fastEntryEditor.comment.value = "item1||1\nitem2||0\nitem3||3";
  fastEntryEditor.apply();
  expect(originalElement.choices).toHaveLength(3);
  expect(choices[0].value).toEqual("item1");
  expect(choices[0].score).toBe("1");
  expect(choices[1].value).toEqual("item2");
  expect(choices[1].score).toBe("0");
  expect(choices[2].value).toEqual("item3");
  expect(choices[2].score).toBe("3");
  Serializer.removeProperty("itemvalue", "score");
});
test("Custom properties, Bug#6753", () => {
  Serializer.addProperty("itemvalue", { name: "leftName:text" });
  Serializer.addProperty("itemvalue", { name: "rightName:text" });
  const originalElement = new QuestionRadiogroupModel("q1");
  originalElement.choices = ["item1", "item2", "item2"];
  const choices = originalElement.choices;
  choices[0].leftName = "left1";
  choices[0].rightName = "right1";
  choices[2].leftName = "left3";
  choices[2].rightName = "right3";
  const fastEntryEditor = new FastEntryEditor(choices, new EmptySurveyCreatorOptions(), undefined, ["value", "text", "leftName", "rightName"]);
  expect(fastEntryEditor.comment.value).toEqual("item1||left1|right1\nitem2\nitem2||left3|right3");
  fastEntryEditor.comment.value = "item3||left3|right3\nitem2\nitem1||left1|right1\n";
  fastEntryEditor.apply();
  expect(originalElement.choices).toHaveLength(3);
  expect(choices[0].value).toEqual("item3");
  expect(choices[0].leftName).toBe("left3");
  expect(choices[0].rightName).toBe("right3");
  expect(choices[1].value).toEqual("item2");
  expect(choices[1].leftName).toBeFalsy();
  expect(choices[1].rightName).toBeFalsy();
  expect(choices[2].value).toEqual("item1");
  expect(choices[2].leftName).toBe("left1");
  expect(choices[2].rightName).toBe("right1");
  Serializer.removeProperty("itemvalue", "leftName");
  Serializer.removeProperty("itemvalue", "rightName");
});
