import { QuestionCheckboxModel } from "survey-core";
import { ItemValueWrapperViewModel } from "../src/components/item-value";
import { CreatorTester } from "./creator-tester";

beforeEach(() => {});

test("item value isNew isDraggable", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];

  const allChoices = question.visibleChoices;
  expect(allChoices.length).toEqual(7);

  const firstItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    allChoices[1]
  );
  const itemNoneAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    allChoices[6]
  );

  expect(firstItemAdorner.isNew).toBeFalsy();
  expect(firstItemAdorner.isDraggable).toBeTruthy();

  expect(itemNoneAdorner.isNew).toBeTruthy();
  expect(itemNoneAdorner.isDraggable).toBeFalsy();
});
