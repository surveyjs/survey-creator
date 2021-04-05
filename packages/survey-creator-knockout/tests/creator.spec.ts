import { SurveyCreator } from "../src/creator";

beforeEach(() => {});

test("getObjectDisplayName", () => {
  const obj1: any = {
    name: "name"
  };
  const obj2: any = {
    name: "name",
    title: "title"
  };
  const creator = new SurveyCreator({ showObjectTitles: true });
  expect(creator.getObjectDisplayName(obj1, "test")).toEqual("name");
  expect(creator.getObjectDisplayName(obj2, "test")).toEqual("title");
  // expect(creator.getObjectTitle(creator.survey.pages[0])).toEqual("page1");
});

// test("default", () => {
//   expect(true).toEqual(true);
// });