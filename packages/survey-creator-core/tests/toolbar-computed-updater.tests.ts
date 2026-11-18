import { Action, ComputedUpdater } from "survey-core";
import { CreatorTester } from "./creator-tester";

test("Clear Survey toolbar action follows survey.isEmpty after the survey is replaced, issue#6209", () => {
  const creator = new CreatorTester();
  const clearSurveyAction = new Action({
    id: "clear-survey",
    title: "Clear Survey",
    enabled: <any>new ComputedUpdater<boolean>(() => !creator.survey.isEmpty),
    action: () => {
      creator.JSON = {};
    }
  });
  creator.toolbar.actions.push(clearSurveyAction);
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [{ type: "text", name: "question1" }]
      }
    ]
  };
  const action = creator.toolbar.actions.filter(item => item.id === "clear-survey")[0];
  expect(action.enabled, "survey has a question").toBe(true);
  action.action();
  expect(creator.survey.isEmpty, "cleared survey has no pages").toBe(true);
  expect(action.enabled, "button disables when the survey becomes empty").toBe(false);
  creator.clickToolboxItem({ type: "text" });
  expect(creator.survey.pages.length, "adding a question creates a page").toBe(1);
  expect(action.enabled, "button enables when a question is added").toBe(true);
  creator.dispose();
});
