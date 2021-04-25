import { DragDropHelper } from "../src/dragdrophelper";

test("doDropItemValue", () => {
  const doDropItemValue = new DragDropHelper(null)["doDropItemValue"];

  const adornerItem = { value: "selectall" };

  const item1 = { value: "item1" };
  const item2 = { value: "item2" };
  const item3 = { value: "item3" };
  const item4 = { value: "item4" };

  let question = { choices: [item1, item2, item3, item4] };
  let isBottom = true;
  doDropItemValue(question, item1, item3, isBottom);
  expect(question.choices.map((c) => c.value)).toEqual([
    "item2",
    "item3",
    "item1",
    "item4",
  ]);

  question = { choices: [item1, item2, item3, item4] };
  isBottom = false;
  doDropItemValue(question, item1, item3, isBottom);
  expect(question.choices.map((c) => c.value)).toEqual([
    "item2",
    "item1",
    "item3",
    "item4",
  ]);
});
