import { parsePropertyDescription } from "../../src/property-grid/description-parser";
test("Test bold text", () => {
  expect(parsePropertyDescription("fdfs**bold**fjdkslfj")).toEqual("fdfs<span class='spg-bold'>bold</span>fjdkslfj");
  expect(parsePropertyDescription("fdfs_italic_fjdkslfj")).toEqual("fdfs<span class='spg-italic'>italic</span>fjdkslfj");
  expect(parsePropertyDescription("fdfs`code`fjdkslfj")).toEqual("fdfs<span class='spg-code'>code</span>fjdkslfj");
  expect(parsePropertyDescription("fdfs[aaa](bbb)fjdkslfj")).toEqual("fdfs<a class='spg-link' href='bbb'>aaa</a>fjdkslfj");
  expect(parsePropertyDescription("abc\negf")).toEqual("abc<br/>egf");
});