import { SurveyCreator } from "../src/creator";

beforeEach(() => {});

test("getObjectDisplayName", () => {
  const obj1 = {
    name: "name"
  };
  const obj2 = {
    name: "name",
    title: "title"
  };
  const creator = new SurveyCreator({ showObjectTitles: true });
  expect(creator.getObjectDisplayName(obj1)).toEqual("name");
  expect(creator.getObjectDisplayName(obj2)).toEqual("title");
  // expect(creator.getObjectTitle(creator.survey.pages[0])).toEqual("page1");
});
