import { QuestionAdornerViewModel } from "../src/components/question";
import { Action, settings } from "survey-core";
import { CreatorTester } from "./creator-tester";

settings.supportCreatorV2 = true;

test("Check required action", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const requiredAction = questionAdorner.actionContainer.getActionById("isrequired");
  expect(requiredAction.innerCss).toBe("svc-required-action");
  question.isRequired = true;
  expect(requiredAction.innerCss).toBe("svc-required-action svc-required-action--active");
  question.isRequired = false;
  expect(requiredAction.innerCss).toBe("svc-required-action");
  expect(requiredAction.title).toBe("Required");

  const requiredActionInPopup = new Action(requiredAction.innerItem);
  expect(requiredActionInPopup.title).toBe("Mark as required");
  question.isRequired = true;
  expect(requiredActionInPopup.title).toBe("Remove the required mark");
});