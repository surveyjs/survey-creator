import { SurveyHelper } from "../src/survey-helper";

test("Test sortItems", (): any => {
  const items = [{ text: "q 1" }, { text: "q 20" }, { text: "q 2" }, { text: "q 200" }, { text: "q 11" }, { text: "q 2000" }, { text: "q 5" }, { text: "q 21" }];
  SurveyHelper.sortItems(items);
  expect(items[0].text).toEqual("q 1");
  expect(items[1].text).toEqual("q 2");
  expect(items[2].text).toEqual("q 5");
  expect(items[3].text).toEqual("q 11");
  expect(items[4].text).toEqual("q 20");
  expect(items[5].text).toEqual("q 21");
  expect(items[6].text).toEqual("q 200");
  expect(items[7].text).toEqual("q 2000");
});
test("Test sortItems2", (): any => {
  const items = [{ text: "abc1" }, { text: "abc10" }, { text: "abc100" }, { text: "abc200" }, { text: "abc20" }];
  SurveyHelper.sortItems(items);
  expect(items[0].text).toEqual("abc1");
  expect(items[1].text).toEqual("abc10");
  expect(items[2].text).toEqual("abc20");
  expect(items[3].text).toEqual("abc100");
  expect(items[4].text).toEqual("abc200");
});