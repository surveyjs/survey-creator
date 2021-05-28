import { DragDropHelper } from "../src/dragdrophelper";

test("doDropItemValue", () => {
  let ddHelper = new DragDropHelper(null);
  const doDropItemValue = ddHelper["doDropItemValue"];

  const item1 = { value: "item1" };
  const item2 = { value: "item2" };
  const item3 = { value: "item3" };
  const item4 = { value: "item4" };

  let question = { choices: [item1, item2, item3, item4] };
  ddHelper["isBottom"] = true;
  ddHelper["itemValueParentQuestion"] = <any>question;
  ddHelper["draggedSurveyElement"] = <any>item1;
  ddHelper["dropTargetSurveyElement"] = <any>item3;
  doDropItemValue();
  expect(question.choices.map((c) => c.value)).toEqual([
    "item2",
    "item3",
    "item1",
    "item4"
  ]);

  question = { choices: [item1, item2, item3, item4] };
  ddHelper["isBottom"] = false;
  ddHelper["itemValueParentQuestion"] = <any>question;
  ddHelper["draggedSurveyElement"] = <any>item1;
  ddHelper["dropTargetSurveyElement"] = <any>item3;
  doDropItemValue();
  expect(question.choices.map((c) => c.value)).toEqual([
    "item2",
    "item1",
    "item3",
    "item4"
  ]);

  question = { choices: [item1, item2, item3, item4] };
  ddHelper["isBottom"] = true;
  ddHelper["itemValueParentQuestion"] = <any>question;
  ddHelper["draggedSurveyElement"] = <any>item4;
  ddHelper["dropTargetSurveyElement"] = <any>item3;
  doDropItemValue();
  expect(question.choices.map((c) => c.value)).toEqual([
    "item1",
    "item2",
    "item3",
    "item4"
  ]);

  question = { choices: [item1, item2, item3, item4] };
  ddHelper["isBottom"] = false;
  ddHelper["itemValueParentQuestion"] = <any>question;
  ddHelper["draggedSurveyElement"] = <any>item4;
  ddHelper["dropTargetSurveyElement"] = <any>item3;
  doDropItemValue();
  expect(question.choices.map((c) => c.value)).toEqual([
    "item1",
    "item2",
    "item4",
    "item3"
  ]);

  question = { choices: [item1, item2, item3, item4] };
  ddHelper["isBottom"] = true;
  ddHelper["itemValueParentQuestion"] = <any>question;
  ddHelper["draggedSurveyElement"] = <any>item1;
  ddHelper["dropTargetSurveyElement"] = <any>item2;
  doDropItemValue();
  expect(question.choices.map((c) => c.value)).toEqual([
    "item2",
    "item1",
    "item3",
    "item4"
  ]);
  question = { choices: [item1, item2, item3, item4] };
  ddHelper["isBottom"] = false;
  ddHelper["itemValueParentQuestion"] = <any>question;
  ddHelper["draggedSurveyElement"] = <any>item1;
  ddHelper["dropTargetSurveyElement"] = <any>item2;
  doDropItemValue();
  expect(question.choices.map((c) => c.value)).toEqual([
    "item1",
    "item2",
    "item3",
    "item4"
  ]);
});
