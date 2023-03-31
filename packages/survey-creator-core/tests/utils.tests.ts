import { capitalize } from "../src/utils/utils";

test("check capitalize function", () => {
  expect(capitalize("test str first")).toEqual("Test Str First");
  expect(capitalize("test2")).toEqual("Test2");
  expect(capitalize("Test3")).toEqual("Test3");
  expect(capitalize("test str   four")).toEqual("Test Str Four");
  expect(capitalize("ελληνικά")).toEqual("Ελληνικά");
});