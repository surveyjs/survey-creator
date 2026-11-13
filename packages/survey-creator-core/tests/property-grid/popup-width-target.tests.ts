import { QuestionColorModel } from "../../src/custom-questions/question-color";

function mountQuestion(id: string, className: string): { root: HTMLElement, popupRoot: HTMLElement } {
  const root = document.createElement("div");
  root.id = id;
  root.className = className;
  const popupRoot = document.createElement("div");
  root.appendChild(popupRoot);
  document.body.appendChild(root);
  return { root, popupRoot };
}

test("color popup matches the question when its title is inside the formbox", () => {
  const question = new QuestionColorModel("q1");
  question.choices = ["#ffffff"];
  const popup = question.dropdownAction.popupModel;
  const { root, popupRoot } = mountQuestion(question.id, "spg-question--location--left sd-formbox");

  expect(popup.getWidthTargetCallback(popupRoot)).toBe(root);

  root.className = "spg-question";
  expect(popup.getWidthTargetCallback(popupRoot)).toBeFalsy();

  root.remove();
});
