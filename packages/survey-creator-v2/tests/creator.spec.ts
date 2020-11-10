import { SurveyCreator } from "../src/creator";

beforeEach(() => {});

test("getObjectTitle", () => {
  const obj1 = {
    name: "name"
  };
  const obj2 = {
    name: "name",
    title: "title"
  };
  const creator = new SurveyCreator();
  expect(creator.getObjectTitle(obj1)).toEqual("name");
  expect(creator.getObjectTitle(obj2)).toEqual("title");
  // expect(creator.getObjectTitle(creator.survey.pages[0])).toEqual("page1");
});
